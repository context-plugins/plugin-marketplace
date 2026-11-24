# Reference

> Source: [MailerLiteClient](src/client.ts)

<details>
<summary><code>createWebhook(request?: MailerLiteClient.CreateWebhookRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.createWebhook();
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
const result = await client.createWebhook().asApiResult();
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
| <code>limit?</code> | <code>number</code> | max records to return<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | number of items to skip<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.createWebhook(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.createWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[MailerLiteError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteWebhook(request: MailerLiteClient.DeleteWebhookRequest, options?: RequestOptions): ApiPromise&lt;undefined, MailerLiteClient.DeleteWebhookError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.deleteWebhook({ webhookId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type MailerLiteClient.DeleteWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deleteWebhook({ webhookId: 1 }).asApiResult();
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
| <code>webhookId</code> | <code>number</code> | The id of the webhook to delete |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deleteWebhook(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MailerLiteClient.DeleteWebhookError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deleteWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MailerLiteClient.DeleteWebhookError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MailerLiteError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCountOfWebhooks(options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.getCountOfWebhooks();
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
const result = await client.getCountOfWebhooks().asApiResult();
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

**Direct**: `await client.getCountOfWebhooks()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.getCountOfWebhooks().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[MailerLiteError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postWebhooks(request: MailerLiteClient.PostWebhooksRequest, options?: RequestOptions): ApiPromise&lt;undefined, MailerLiteClient.PostWebhooksError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.postWebhooks({ body: {} });
} catch (err) {
  // TODO: Handle 'err' of type MailerLiteClient.PostWebhooksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.postWebhooks({ body: {} }).asApiResult();
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
| <code>body</code> | <code>[Webhook](src/models/webhook.ts)</code> | Created webhook object |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.postWebhooks(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MailerLiteClient.PostWebhooksError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.postWebhooks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MailerLiteClient.PostWebhooksError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MailerLiteError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>showWebhookById(request: MailerLiteClient.ShowWebhookByIdRequest, options?: RequestOptions): ApiPromise&lt;Webhook, MailerLiteClient.ShowWebhookByIdError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.showWebhookById({ webhookId: 1 });
  // TODO: Handle 'response' of type Webhook
} catch (err) {
  // TODO: Handle 'err' of type MailerLiteClient.ShowWebhookByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.showWebhookById({ webhookId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Webhook
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhookId</code> | <code>number</code> | The id of the webhook to retrieve |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.showWebhookById(request)`

- **OnSuccess**: <code>[Webhook](src/models/webhook.ts)</code>
- **OnError**: throws <code>[MailerLiteClient.ShowWebhookByIdError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.showWebhookById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Webhook, MailerLiteClient.ShowWebhookByIdError&gt;</code>, with `result.value` of type <code>[Webhook](src/models/webhook.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MailerLiteError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateWebhook(request: MailerLiteClient.UpdateWebhookRequest, options?: RequestOptions): ApiPromise&lt;undefined, MailerLiteClient.UpdateWebhookError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.updateWebhook({ webhookId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type MailerLiteClient.UpdateWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.updateWebhook({ webhookId: 1 }).asApiResult();
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
| <code>webhookId</code> | <code>number</code> | The id of the webhook to update |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.updateWebhook(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MailerLiteClient.UpdateWebhookError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.updateWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MailerLiteClient.UpdateWebhookError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MailerLiteError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

