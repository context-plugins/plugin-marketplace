# Reference

> Source: [LiliClient](src/client.ts)

<details>
<summary><code>addWebhook(request: LiliClient.AddWebhookRequest, options?: RequestOptions): ApiPromise&lt;WebhookCreateResponse, LiliClient.AddWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Create Webhook API registers a new Webhook Listener in the Lili platform.

As part of the response object, a token is returned. This token will be returned on any future webhook call to ensure webhook legitimacy.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.addWebhook({
    body: { serverUrl: "https://example.com", status: Status2.Active },
  });
  // TODO: Handle 'response' of type WebhookCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type LiliClient.AddWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .addWebhook({ body: { serverUrl: "https://example.com", status: Status2.Active } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WebhookRequestModel](src/models/webhook-request-model.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.addWebhook(request)`

- **OnSuccess**: <code>[WebhookCreateResponse](src/models/webhook-create-response.ts)</code>
- **OnError**: throws <code>[LiliClient.AddWebhookError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.addWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookCreateResponse, LiliClient.AddWebhookError&gt;</code>, with `result.value` of type <code>[WebhookCreateResponse](src/models/webhook-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LiliError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createPaymentNotification(request: LiliClient.CreatePaymentNotificationRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a PDF containing a bank letter for a customer

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.createPaymentNotification({ customerId: "some example string" });
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
const result = await client.createPaymentNotification({ customerId: "some example string" }).asApiResult();
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
| <code>customerId</code> | <code>string</code> | The customer ID, as provided in the create lead response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.createPaymentNotification(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.createPaymentNotification(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[LiliError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteWebhook(request: LiliClient.DeleteWebhookRequest, options?: RequestOptions): ApiPromise&lt;undefined, LiliClient.DeleteWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Delete Webhook API is used to completely delete a registered webhook.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.deleteWebhook({ webhookId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type LiliClient.DeleteWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deleteWebhook({ webhookId: "some example string" }).asApiResult();
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
| <code>webhookId</code> | <code>string</code> | The webhook ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deleteWebhook(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[LiliClient.DeleteWebhookError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deleteWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, LiliClient.DeleteWebhookError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LiliError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAll(options?: RequestOptions): ApiPromise&lt;WebhookListResponse, LiliClient.GetAllError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Get all webhooks returns a list of all the webhooks the platform registered in Lili

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getAll();
  // TODO: Handle 'response' of type WebhookListResponse
} catch (err) {
  // TODO: Handle 'err' of type LiliClient.GetAllError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.getAll().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getAll()`

- **OnSuccess**: <code>[WebhookListResponse](src/models/webhook-list-response.ts)</code>
- **OnError**: throws <code>[LiliClient.GetAllError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getAll().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookListResponse, LiliClient.GetAllError&gt;</code>, with `result.value` of type <code>[WebhookListResponse](src/models/webhook-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LiliError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWebhook(request: LiliClient.GetWebhookRequest, options?: RequestOptions): ApiPromise&lt;WebhookResponse, LiliClient.GetWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Get Webhook Details returns the details of an webhook that was registered in the Lili system.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getWebhook({ webhookId: "some example string" });
  // TODO: Handle 'response' of type WebhookResponse
} catch (err) {
  // TODO: Handle 'err' of type LiliClient.GetWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.getWebhook({ webhookId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhookId</code> | <code>string</code> | The webhook ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getWebhook(request)`

- **OnSuccess**: <code>[WebhookResponse](src/models/webhook-response.ts)</code>
- **OnError**: throws <code>[LiliClient.GetWebhookError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookResponse, LiliClient.GetWebhookError&gt;</code>, with `result.value` of type <code>[WebhookResponse](src/models/webhook-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LiliError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>paymentList(request?: LiliClient.PaymentListRequest, options?: RequestOptions): ApiPromise&lt;PaymentListResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentList();
  // TODO: Handle 'response' of type PaymentListResponse
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
const result = await client.paymentList().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentListResponse
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
| <code>customerId?</code> | <code>string</code> | The customer ID, as provided in the create lead response |
| <code>receiverAccountNumber?</code> | <code>string</code> | The receiver account number |
| <code>startDate?</code> | <code>Date</code> (date-time) | Start date for the payment list |
| <code>endDate?</code> | <code>Date</code> (date-time) | End date for the payment list |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentList(request)`

- **OnSuccess**: <code>[PaymentListResponse](src/models/payment-list-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.paymentList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentListResponse, ApiError&gt;</code>, with `result.value` of type <code>[PaymentListResponse](src/models/payment-list-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[LiliError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putLiliApiV1Payments(request?: LiliClient.PutLiliApiV1PaymentsRequest, options?: RequestOptions): ApiPromise&lt;PaymentResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a payment notification in the Lili system

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.putLiliApiV1Payments();
  // TODO: Handle 'response' of type PaymentResponse
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
const result = await client.putLiliApiV1Payments().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentResponse
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
| <code>body?</code> | <code>[PaymentRequest](src/models/payment-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.putLiliApiV1Payments(request)`

- **OnSuccess**: <code>[PaymentResponse](src/models/payment-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.putLiliApiV1Payments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentResponse, ApiError&gt;</code>, with `result.value` of type <code>[PaymentResponse](src/models/payment-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[LiliError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>registerAccount(request?: LiliClient.RegisterAccountRequest, options?: RequestOptions): ApiPromise&lt;LeadResponse, LiliClient.RegisterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Create Application API is used to create a new Application in the Lili platform.

The respon contains a UUID representing the applicant that was created in the Lili platform, and a URL that allows initializing the application process with the pre-filled information.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.registerAccount();
  // TODO: Handle 'response' of type LeadResponse
} catch (err) {
  // TODO: Handle 'err' of type LiliClient.RegisterAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.registerAccount().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LeadResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[LeadRequest](src/models/lead-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.registerAccount(request)`

- **OnSuccess**: <code>[LeadResponse](src/models/lead-response.ts)</code>
- **OnError**: throws <code>[LiliClient.RegisterAccountError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.registerAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LeadResponse, LiliClient.RegisterAccountError&gt;</code>, with `result.value` of type <code>[LeadResponse](src/models/lead-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LiliError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateLead(request: LiliClient.UpdateLeadRequest, options?: RequestOptions): ApiPromise&lt;undefined, LiliClient.UpdateLeadError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Update Lead API is used to update an existing lead in the Lili platform.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.updateLead({ customerId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type LiliClient.UpdateLeadError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.updateLead({ customerId: "some example string" }).asApiResult();
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
| <code>customerId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[LeadRequest](src/models/lead-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.updateLead(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[LiliClient.UpdateLeadError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.updateLead(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, LiliClient.UpdateLeadError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LiliError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateWebhook(request: LiliClient.UpdateWebhookRequest, options?: RequestOptions): ApiPromise&lt;WebhookResponse, LiliClient.UpdateWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Update Webhook updates a webhook that is registered in the Lili system. Usually, this is used to disable an active webhook, or reactivate it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.updateWebhook({
    webhookId: "some example string",
    body: { serverUrl: "https://example.com", status: Status2.Active },
  });
  // TODO: Handle 'response' of type WebhookResponse
} catch (err) {
  // TODO: Handle 'err' of type LiliClient.UpdateWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .updateWebhook({
    webhookId: "some example string",
    body: { serverUrl: "https://example.com", status: Status2.Active },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhookId</code> | <code>string</code> | The webhook ID |
| <code>body</code> | <code>[WebhookRequestModel](src/models/webhook-request-model.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.updateWebhook(request)`

- **OnSuccess**: <code>[WebhookResponse](src/models/webhook-response.ts)</code>
- **OnError**: throws <code>[LiliClient.UpdateWebhookError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.updateWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookResponse, LiliClient.UpdateWebhookError&gt;</code>, with `result.value` of type <code>[WebhookResponse](src/models/webhook-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LiliError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadAdditionalDoc(request: LiliClient.UploadAdditionalDocRequest, options?: RequestOptions): ApiPromise&lt;undefined, LiliClient.UploadAdditionalDocError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Upload Additional Document API is used to upload an additional document to the Lili platform for a given lead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.uploadAdditionalDoc({ customerId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type LiliClient.UploadAdditionalDocError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.uploadAdditionalDoc({ customerId: "some example string" }).asApiResult();
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
| <code>customerId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[LeadUpload](src/models/lead-upload.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.uploadAdditionalDoc(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[LiliClient.UploadAdditionalDocError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.uploadAdditionalDoc(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, LiliClient.UploadAdditionalDocError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LiliError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

