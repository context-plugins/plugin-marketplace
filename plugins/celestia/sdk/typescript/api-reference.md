# Reference

> Source: [CelestiaClient](src/client.ts)

## Blob

> Source: [Blob](src/resources/blob.ts)

<details>
<summary><code>postRoot(request: Blob.PostRootRequest, options?: RequestOptions): ApiPromise&lt;JsonRpcResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Single JSON-RPC entrypoint exposing the `blob.*` namespace including
`blob.Submit`, `blob.Get`, `blob.GetAll`, `blob.GetProof`, `blob.Included`,
and `blob.Subscribe`. Authenticate with a bearer token generated via
`celestia auth `.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.blob.postRoot({ body: { id: 1, method: Method.BlobSubmit, params: [{}] } });
  // TODO: Handle 'response' of type JsonRpcResponse
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
const result = await client.blob
  .postRoot({ body: { id: 1, method: Method.BlobSubmit, params: [{}] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JsonRpcResponse
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
| <code>body</code> | <code>[JsonRpcRequest](src/models/json-rpc-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.blob.postRoot(request)`

- **OnSuccess**: <code>[JsonRpcResponse](src/models/json-rpc-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.blob.postRoot(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JsonRpcResponse, ApiError&gt;</code>, with `result.value` of type <code>[JsonRpcResponse](src/models/json-rpc-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CelestiaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Contact

> Source: [Contact](src/resources/contact.ts)

<details>
<summary><code>submitWebsiteContact(request: Contact.SubmitWebsiteContactRequest, options?: RequestOptions): ApiPromise&lt;Success, Contact.SubmitWebsiteContactError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends an inquiry to the configured Google Apps Script integration. No API key is required. If the integration is not configured, the existing development fallback logs the inquiry and returns success with an explicit message; that response does not confirm delivery. Submit only with user consent.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contact.submitWebsiteContact({
    body: {
      fullName: "some example string",
      companyName: "some example string",
      email: "user@example.com",
      interestedIn: "some example string",
    },
  });
  // TODO: Handle 'response' of type Success
} catch (err) {
  // TODO: Handle 'err' of type Contact.SubmitWebsiteContactError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contact
  .submitWebsiteContact({
    body: {
      fullName: "some example string",
      companyName: "some example string",
      email: "user@example.com",
      interestedIn: "some example string",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Success
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ContactInput](src/models/contact-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contact.submitWebsiteContact(request)`

- **OnSuccess**: <code>[Success](src/models/success.ts)</code>
- **OnError**: throws <code>[Contact.SubmitWebsiteContactError](src/resources/contact.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contact.submitWebsiteContact(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Success, Contact.SubmitWebsiteContactError&gt;</code>, with `result.value` of type <code>[Success](src/models/success.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CelestiaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## HealthApi

> Source: [HealthApi](src/resources/health-api.ts)

<details>
<summary><code>getWebsiteHealth(options?: RequestOptions): ApiPromise&lt;Health, HealthApi.GetWebsiteHealthError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Confirms that the Next.js runtime can answer requests. Does not check external services. No authentication required.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.healthApi.getWebsiteHealth();
  // TODO: Handle 'response' of type Health
} catch (err) {
  // TODO: Handle 'err' of type HealthApi.GetWebsiteHealthError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.healthApi.getWebsiteHealth().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Health
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.healthApi.getWebsiteHealth()`

- **OnSuccess**: <code>[Health](src/models/health.ts)</code>
- **OnError**: throws <code>[HealthApi.GetWebsiteHealthError](src/resources/health-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.healthApi.getWebsiteHealth().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Health, HealthApi.GetWebsiteHealthError&gt;</code>, with `result.value` of type <code>[Health](src/models/health.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CelestiaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>headWebsiteHealth(options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The same runtime liveness signal as GET, with an empty response body.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.healthApi.headWebsiteHealth();
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
const result = await client.healthApi.headWebsiteHealth().asApiResult();
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

**Direct**: `await client.healthApi.headWebsiteHealth()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.healthApi.headWebsiteHealth().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CelestiaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Subscribe

> Source: [Subscribe](src/resources/subscribe.ts)

<details>
<summary><code>subscribeToWebsiteNewsletter(request: Subscribe.SubscribeToWebsiteNewsletterRequest, options?: RequestOptions): ApiPromise&lt;Success, Subscribe.SubscribeToWebsiteNewsletterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Subscribes a consenting email owner through Mailchimp after server-side reCAPTCHA verification. No API key is required from clients. Service credentials remain server-side.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscribe.subscribeToWebsiteNewsletter({
    body: { email: "user@example.com", token: "some example string" },
  });
  // TODO: Handle 'response' of type Success
} catch (err) {
  // TODO: Handle 'err' of type Subscribe.SubscribeToWebsiteNewsletterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscribe
  .subscribeToWebsiteNewsletter({ body: { email: "user@example.com", token: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Success
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SubscriptionInput](src/models/subscription-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscribe.subscribeToWebsiteNewsletter(request)`

- **OnSuccess**: <code>[Success](src/models/success.ts)</code>
- **OnError**: throws <code>[Subscribe.SubscribeToWebsiteNewsletterError](src/resources/subscribe.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscribe.subscribeToWebsiteNewsletter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Success, Subscribe.SubscribeToWebsiteNewsletterError&gt;</code>, with `result.value` of type <code>[Success](src/models/success.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CelestiaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

