# Reference

> Source: [PostscriptClient](src/client.ts)

## Compliance

> Source: [Compliance](src/resources/compliance.ts)

<details>
<summary><code>redact(request?: Compliance.RedactRequest, options?: RequestOptions): ApiPromise&lt;ApiV2ComplianceRedactResponse, Compliance.RedactError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Note: When passed an email, phone number, Shopify customer ID, or Postscript subscriber ID, this endpoint will also unsubscribe the subscriber if they have an active subscription

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.compliance.redact();
  // TODO: Handle 'response' of type ApiV2ComplianceRedactResponse
} catch (err) {
  // TODO: Handle 'err' of type Compliance.RedactError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.compliance.redact().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV2ComplianceRedactResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xPostscriptShopToken?</code> | <code>string</code> | Shop API Token. **Required for partners**. This header should be used only by partners. Shops should include their API token in the *Authorization* header. |
| <code>body?</code> | <code>[ApiV2ComplianceRedactRequest](src/models/api-v2-compliance-redact-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.compliance.redact(request)`

- **OnSuccess**: <code>[ApiV2ComplianceRedactResponse](src/models/api-v2-compliance-redact-response.ts)</code>
- **OnError**: throws <code>[Compliance.RedactError](src/resources/compliance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.compliance.redact(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV2ComplianceRedactResponse, Compliance.RedactError&gt;</code>, with `result.value` of type <code>[ApiV2ComplianceRedactResponse](src/models/api-v2-compliance-redact-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PostscriptError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unsubscribe(request?: Compliance.UnsubscribeRequest, options?: RequestOptions): ApiPromise&lt;ApiV2ComplianceUnsubscribeResponse, Compliance.UnsubscribeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Opt outs subscribers from Postscript messaging.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.compliance.unsubscribe();
  // TODO: Handle 'response' of type ApiV2ComplianceUnsubscribeResponse
} catch (err) {
  // TODO: Handle 'err' of type Compliance.UnsubscribeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.compliance.unsubscribe().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV2ComplianceUnsubscribeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xPostscriptShopToken?</code> | <code>string</code> | Shop API Token. **Required for partners**. This header should be used only by partners. Shops should include their API token in the *Authorization* header. |
| <code>body?</code> | <code>[ApiV2ComplianceUnsubscribeRequest](src/models/api-v2-compliance-unsubscribe-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.compliance.unsubscribe(request)`

- **OnSuccess**: <code>[ApiV2ComplianceUnsubscribeResponse](src/models/api-v2-compliance-unsubscribe-response.ts)</code>
- **OnError**: throws <code>[Compliance.UnsubscribeError](src/resources/compliance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.compliance.unsubscribe(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV2ComplianceUnsubscribeResponse, Compliance.UnsubscribeError&gt;</code>, with `result.value` of type <code>[ApiV2ComplianceUnsubscribeResponse](src/models/api-v2-compliance-unsubscribe-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PostscriptError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Events

> Source: [Events](src/resources/events.ts)

<details>
<summary><code>createCustomEvent(request?: Events.CreateCustomEventRequest, options?: RequestOptions): ApiPromise&lt;ApiV2EventsResponse, Events.CreateCustomEventError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a Custom Event to use in Flows

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.events.createCustomEvent();
  // TODO: Handle 'response' of type ApiV2EventsResponse
} catch (err) {
  // TODO: Handle 'err' of type Events.CreateCustomEventError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.events.createCustomEvent().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV2EventsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xPostscriptShopToken?</code> | <code>string</code> | Shop API Token. **Required for partners**. This header should be used *only* by partners. Shops should include their API token in the *Authorization* header. |
| <code>body?</code> | <code>[ApiV2EventsRequest](src/models/api-v2-events-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.events.createCustomEvent(request)`

- **OnSuccess**: <code>[ApiV2EventsResponse](src/models/api-v2-events-response.ts)</code>
- **OnError**: throws <code>[Events.CreateCustomEventError](src/resources/events.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.events.createCustomEvent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV2EventsResponse, Events.CreateCustomEventError&gt;</code>, with `result.value` of type <code>[ApiV2EventsResponse](src/models/api-v2-events-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PostscriptError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Identity

> Source: [Identity](src/resources/identity.ts)

<details>
<summary><code>verifyIdentity(request?: Identity.VerifyIdentityRequest, options?: RequestOptions): ApiPromise&lt;ApiV2MeResponse, Identity.VerifyIdentityError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.identity.verifyIdentity();
  // TODO: Handle 'response' of type ApiV2MeResponse
} catch (err) {
  // TODO: Handle 'err' of type Identity.VerifyIdentityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.identity.verifyIdentity().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV2MeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xPostscriptShopToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.identity.verifyIdentity(request)`

- **OnSuccess**: <code>[ApiV2MeResponse](src/models/api-v2-me-response.ts)</code>
- **OnError**: throws <code>[Identity.VerifyIdentityError](src/resources/identity.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.identity.verifyIdentity(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV2MeResponse, Identity.VerifyIdentityError&gt;</code>, with `result.value` of type <code>[ApiV2MeResponse](src/models/api-v2-me-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PostscriptError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Keywords

> Source: [Keywords](src/resources/keywords.ts)

<details>
<summary><code>getKeyword(request: Keywords.GetKeywordRequest, options?: RequestOptions): ApiPromise&lt;ApiV2KeywordsResponse, Keywords.GetKeywordError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a Keyword by its ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.keywords.getKeyword({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV2KeywordsResponse
} catch (err) {
  // TODO: Handle 'err' of type Keywords.GetKeywordError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.keywords.getKeyword({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV2KeywordsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | ID of the keyword you'd like to receive. |
| <code>xPostscriptShopToken?</code> | <code>string</code> | Shop API Token. **Required for partners**. This header should be used *only* by partners. Shops should include their API token in the *Authorization* header. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.keywords.getKeyword(request)`

- **OnSuccess**: <code>[ApiV2KeywordsResponse](src/models/api-v2-keywords-response.ts)</code>
- **OnError**: throws <code>[Keywords.GetKeywordError](src/resources/keywords.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.keywords.getKeyword(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV2KeywordsResponse, Keywords.GetKeywordError&gt;</code>, with `result.value` of type <code>[ApiV2KeywordsResponse](src/models/api-v2-keywords-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PostscriptError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getKeywords(request?: Keywords.GetKeywordsRequest, options?: RequestOptions): ApiPromise&lt;ApiV2KeywordsResponse1, Keywords.GetKeywordsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all active keywords for a shop.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.keywords.getKeywords();
  // TODO: Handle 'response' of type ApiV2KeywordsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Keywords.GetKeywordsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.keywords.getKeywords().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV2KeywordsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xPostscriptShopToken?</code> | <code>string</code> | Shop API Token. **Required for partners**. This header should be used *only* by partners. Shops should include their API token in the *Authorization* header. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.keywords.getKeywords(request)`

- **OnSuccess**: <code>[ApiV2KeywordsResponse1](src/models/api-v2-keywords-response1.ts)</code>
- **OnError**: throws <code>[Keywords.GetKeywordsError](src/resources/keywords.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.keywords.getKeywords(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV2KeywordsResponse1, Keywords.GetKeywordsError&gt;</code>, with `result.value` of type <code>[ApiV2KeywordsResponse1](src/models/api-v2-keywords-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PostscriptError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Messages

> Source: [Messages](src/resources/messages.ts)

<details>
<summary><code>createMessage(request?: Messages.CreateMessageRequest, options?: RequestOptions): ApiPromise&lt;ApiV2MessageRequestsResponse, Messages.CreateMessageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a message to a subscriber.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.messages.createMessage({
    body: {
      phone: "15555555555",
      body: "Hello, world",
      category: Category.Promotional,
      mediaUrl: "https://example.com/great_pic.png",
    },
  });
  // TODO: Handle 'response' of type ApiV2MessageRequestsResponse
} catch (err) {
  // TODO: Handle 'err' of type Messages.CreateMessageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.messages
  .createMessage({
    body: {
      phone: "15555555555",
      body: "Hello, world",
      category: Category.Promotional,
      mediaUrl: "https://example.com/great_pic.png",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV2MessageRequestsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xPostscriptShopToken?</code> | <code>string</code> | Shop API Token. **Required for partners**. This header should be used *only* by partners. Shops should include their API token in the *Authorization* header. |
| <code>body?</code> | <code>[ApiV2MessageRequestsRequest](src/models/api-v2-message-requests-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.messages.createMessage(request)`

- **OnSuccess**: <code>[ApiV2MessageRequestsResponse](src/models/api-v2-message-requests-response.ts)</code>
- **OnError**: throws <code>[Messages.CreateMessageError](src/resources/messages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.messages.createMessage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV2MessageRequestsResponse, Messages.CreateMessageError&gt;</code>, with `result.value` of type <code>[ApiV2MessageRequestsResponse](src/models/api-v2-message-requests-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PostscriptError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMessageRequest(request: Messages.GetMessageRequestRequest, options?: RequestOptions): ApiPromise&lt;ApiV2MessageRequestsResponse, Messages.GetMessageRequestError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.messages.getMessageRequest({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV2MessageRequestsResponse
} catch (err) {
  // TODO: Handle 'err' of type Messages.GetMessageRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.messages.getMessageRequest({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV2MessageRequestsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | ID of the message request to look up. |
| <code>xPostscriptShopToken?</code> | <code>string</code> | Shop API Token. **Required for partners**. This header should be used *only* by partners. Shops should include their API token in the *Authorization* header. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.messages.getMessageRequest(request)`

- **OnSuccess**: <code>[ApiV2MessageRequestsResponse](src/models/api-v2-message-requests-response.ts)</code>
- **OnError**: throws <code>[Messages.GetMessageRequestError](src/resources/messages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.messages.getMessageRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV2MessageRequestsResponse, Messages.GetMessageRequestError&gt;</code>, with `result.value` of type <code>[ApiV2MessageRequestsResponse](src/models/api-v2-message-requests-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PostscriptError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSentMessage(request: Messages.GetSentMessageRequest, options?: RequestOptions): ApiPromise&lt;ApiV2SentMessagesResponse, Messages.GetSentMessageError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.messages.getSentMessage({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV2SentMessagesResponse
} catch (err) {
  // TODO: Handle 'err' of type Messages.GetSentMessageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.messages.getSentMessage({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV2SentMessagesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | ID of sent message to fetch. |
| <code>xPostscriptShopToken?</code> | <code>string</code> | Shop API Token. **Required for partners**. This header should be used *only* by partners. Shops should include their API token in the *Authorization* header. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.messages.getSentMessage(request)`

- **OnSuccess**: <code>[ApiV2SentMessagesResponse](src/models/api-v2-sent-messages-response.ts)</code>
- **OnError**: throws <code>[Messages.GetSentMessageError](src/resources/messages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.messages.getSentMessage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV2SentMessagesResponse, Messages.GetSentMessageError&gt;</code>, with `result.value` of type <code>[ApiV2SentMessagesResponse](src/models/api-v2-sent-messages-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PostscriptError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Subscribers

> Source: [Subscribers](src/resources/subscribers.ts)

<details>
<summary><code>getSubscriber(request: Subscribers.GetSubscriberRequest, options?: RequestOptions): ApiPromise&lt;unknown, Subscribers.GetSubscriberError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get an individual subscriber for a shop.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscribers.getSubscriber({ id: "some example string" });
  // TODO: Handle 'response' of type unknown
} catch (err) {
  // TODO: Handle 'err' of type Subscribers.GetSubscriberError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscribers.getSubscriber({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type unknown
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The ID for the subscriber you'd like to get. |
| <code>xPostscriptShopToken?</code> | <code>string</code> | Shop API Token. **Required for partners**. This header should be used *only* by partners. Shops should include their API token in the *Authorization* header. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscribers.getSubscriber(request)`

- **OnSuccess**: <code>unknown</code>
- **OnError**: throws <code>[Subscribers.GetSubscriberError](src/resources/subscribers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscribers.getSubscriber(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;unknown, Subscribers.GetSubscriberError&gt;</code>, with `result.value` of type <code>unknown</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PostscriptError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSubscribers(request?: Subscribers.GetSubscribersRequest, options?: RequestOptions): ApiPromise&lt;unknown, Subscribers.GetSubscribersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of subscribers for a shop.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscribers.getSubscribers();
  // TODO: Handle 'response' of type unknown
} catch (err) {
  // TODO: Handle 'err' of type Subscribers.GetSubscribersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscribers.getSubscribers().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type unknown
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>createdAtEq?</code> | <code>Date</code> (date-time) | Created at is equal to |
| <code>createdAtGt?</code> | <code>Date</code> (date-time) | Created at is greater than |
| <code>createdAtGte?</code> | <code>Date</code> (date-time) | Created at is greater than or equal to |
| <code>createdAtLt?</code> | <code>Date</code> (date-time) | Created at is less than |
| <code>createdAtLte?</code> | <code>Date</code> (date-time) | Created at is less than or equal to |
| <code>emailContains?</code> | <code>string</code> | Email contains |
| <code>emailEq?</code> | <code>string</code> | Email is equal to |
| <code>emailIn?</code> | <code>string[]</code> | Email is in |
| <code>page?</code> | <code>number</code> | Page number of results to start from |
| <code>phoneNumberContains?</code> | <code>string</code> | Phone number contains |
| <code>phoneNumberEq?</code> | <code>string</code> | Phone number is equal to |
| <code>phoneNumberIn?</code> | <code>string[]</code> | Phone number is in |
| <code>shopifyCustomerIdContains?</code> | <code>string</code> | Shopify customer id contains |
| <code>shopifyCustomerIdEq?</code> | <code>string</code> | Shopify customer id is equal to |
| <code>shopifyCustomerIdIn?</code> | <code>string[]</code> | Shopify customer id is in |
| <code>sort?</code> | <code>string</code> | Sorting Order. In `{field}__asc` or `{field}__desc` format. Valid fields:  `created_at`, `updated_at`, `phone_number`, `shopify_customer_id` |
| <code>updatedAtEq?</code> | <code>Date</code> (date-time) | Updated at is equal to |
| <code>updatedAtGt?</code> | <code>string</code> (date) | Updated at is greater than |
| <code>updatedAtGte?</code> | <code>Date</code> (date-time) | Updated at is greater than or equal to |
| <code>updatedAtLt?</code> | <code>Date</code> (date-time) | Updated at is less than |
| <code>updatedAtLte?</code> | <code>Date</code> (date-time) | Updated at is less than or equal to |
| <code>psIdEq?</code> | <code>number</code> | Filters subscribers by their ps_id tracking ID. This ID is stored in the ps_id cookie for subscribers on the front end and is used to uniquely identify a subscriber across sessions. |
| <code>xPostscriptShopToken?</code> | <code>string</code> | Shop API Token. **Required for partners**. This header should be used *only* by partners. Shops should include their API token in the *Authorization* header. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscribers.getSubscribers(request)`

- **OnSuccess**: <code>unknown</code>
- **OnError**: throws <code>[Subscribers.GetSubscribersError](src/resources/subscribers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscribers.getSubscribers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;unknown, Subscribers.GetSubscribersError&gt;</code>, with `result.value` of type <code>unknown</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PostscriptError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSubscriberById(request: Subscribers.UpdateSubscriberByIdRequest, options?: RequestOptions): ApiPromise&lt;unknown, Subscribers.UpdateSubscriberByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates data for a given subscriber.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscribers.updateSubscriberById({ id: "some example string" });
  // TODO: Handle 'response' of type unknown
} catch (err) {
  // TODO: Handle 'err' of type Subscribers.UpdateSubscriberByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscribers.updateSubscriberById({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type unknown
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | ID of the subscriber you'd like to update. |
| <code>xPostscriptShopToken?</code> | <code>string</code> | Shop API Token. **Required for partners**. This header should be used *only* by partners. Shops should include their API token in the *Authorization* header. |
| <code>body?</code> | <code>[ApiV2SubscribersRequest](src/models/api-v2-subscribers-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscribers.updateSubscriberById(request)`

- **OnSuccess**: <code>unknown</code>
- **OnError**: throws <code>[Subscribers.UpdateSubscriberByIdError](src/resources/subscribers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscribers.updateSubscriberById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;unknown, Subscribers.UpdateSubscriberByIdError&gt;</code>, with `result.value` of type <code>unknown</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PostscriptError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Webhooks

> Source: [Webhooks](src/resources/webhooks.ts)

<details>
<summary><code>createWebhookSubscription(request?: Webhooks.CreateWebhookSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;unknown, Webhooks.CreateWebhookSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.createWebhookSubscription();
  // TODO: Handle 'response' of type unknown
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.CreateWebhookSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.createWebhookSubscription().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type unknown
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xPostscriptShopToken?</code> | <code>string</code> | Shop API Token. **Required for partners**. This header should be used only by partners. Shops should include their API token in the *Authorization* header. |
| <code>body?</code> | <code>[ApiV2WebhooksRequest](src/models/api-v2-webhooks-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.createWebhookSubscription(request)`

- **OnSuccess**: <code>unknown</code>
- **OnError**: throws <code>[Webhooks.CreateWebhookSubscriptionError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.createWebhookSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;unknown, Webhooks.CreateWebhookSubscriptionError&gt;</code>, with `result.value` of type <code>unknown</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PostscriptError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteWebhookSubscription(request: Webhooks.DeleteWebhookSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Webhooks.DeleteWebhookSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.deleteWebhookSubscription({ id: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.DeleteWebhookSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.deleteWebhookSubscription({ id: "some example string" }).asApiResult();
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
| <code>id</code> | <code>string</code> | The ID of the webhook subscription to delete. |
| <code>xPostscriptShopToken?</code> | <code>string</code> | Shop API Token. **Required for partners**. This header should be used only by partners. Shops should include their API token in the *Authorization* header. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.deleteWebhookSubscription(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Webhooks.DeleteWebhookSubscriptionError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.deleteWebhookSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Webhooks.DeleteWebhookSubscriptionError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PostscriptError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>exampleEvent(request?: Webhooks.ExampleEventRequest, options?: RequestOptions): ApiPromise&lt;ApiV2WebhooksExampleResponse, Webhooks.ExampleEventError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.exampleEvent({ event: Event1.ShopTest });
  // TODO: Handle 'response' of type ApiV2WebhooksExampleResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.ExampleEventError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.exampleEvent({ event: Event1.ShopTest }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV2WebhooksExampleResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>event?</code> | <code>[Event1](src/models/event1.ts)</code> | Webhook subscription `event` type.<br>**Default**: "shop.test" |
| <code>xPostscriptShopToken?</code> | <code>string</code> | Shop API Token. **Required for partners**. This header should be used only by partners. Shops should include their API token in the *Authorization* header. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.exampleEvent(request)`

- **OnSuccess**: <code>[ApiV2WebhooksExampleResponse](src/models/api-v2-webhooks-example-response.ts)</code>
- **OnError**: throws <code>[Webhooks.ExampleEventError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.exampleEvent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV2WebhooksExampleResponse, Webhooks.ExampleEventError&gt;</code>, with `result.value` of type <code>[ApiV2WebhooksExampleResponse](src/models/api-v2-webhooks-example-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PostscriptError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWebhookSigningToken(request?: Webhooks.GetWebhookSigningTokenRequest, options?: RequestOptions): ApiPromise&lt;ApiV2WebhooksTokenResponse, Webhooks.GetWebhookSigningTokenError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.getWebhookSigningToken();
  // TODO: Handle 'response' of type ApiV2WebhooksTokenResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.GetWebhookSigningTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.getWebhookSigningToken().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV2WebhooksTokenResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xPostscriptShopToken?</code> | <code>string</code> | Shop API Token. **Required for partners**. This header should be used only by partners. Shops should include their API token in the *Authorization* header. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.getWebhookSigningToken(request)`

- **OnSuccess**: <code>[ApiV2WebhooksTokenResponse](src/models/api-v2-webhooks-token-response.ts)</code>
- **OnError**: throws <code>[Webhooks.GetWebhookSigningTokenError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.getWebhookSigningToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV2WebhooksTokenResponse, Webhooks.GetWebhookSigningTokenError&gt;</code>, with `result.value` of type <code>[ApiV2WebhooksTokenResponse](src/models/api-v2-webhooks-token-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PostscriptError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWebhookSubscription(request: Webhooks.GetWebhookSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;unknown, Webhooks.GetWebhookSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.getWebhookSubscription({ id: "some example string" });
  // TODO: Handle 'response' of type unknown
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.GetWebhookSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.getWebhookSubscription({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type unknown
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | ID of the webhook subscription to fetch. |
| <code>xPostscriptShopToken?</code> | <code>string</code> | Shop API Token. **Required for partners**. This header should be used only by partners. Shops should include their API token in the *Authorization* header. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.getWebhookSubscription(request)`

- **OnSuccess**: <code>unknown</code>
- **OnError**: throws <code>[Webhooks.GetWebhookSubscriptionError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.getWebhookSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;unknown, Webhooks.GetWebhookSubscriptionError&gt;</code>, with `result.value` of type <code>unknown</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PostscriptError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWebhookSubscriptions(request?: Webhooks.ListWebhookSubscriptionsRequest, options?: RequestOptions): ApiPromise&lt;unknown, Webhooks.ListWebhookSubscriptionsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.listWebhookSubscriptions();
  // TODO: Handle 'response' of type unknown
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.ListWebhookSubscriptionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.listWebhookSubscriptions().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type unknown
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xPostscriptShopToken?</code> | <code>string</code> | Shop API Token. **Required for partners**. This header should be used only by partners. Shops should include their API token in the *Authorization* header. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.listWebhookSubscriptions(request)`

- **OnSuccess**: <code>unknown</code>
- **OnError**: throws <code>[Webhooks.ListWebhookSubscriptionsError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.listWebhookSubscriptions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;unknown, Webhooks.ListWebhookSubscriptionsError&gt;</code>, with `result.value` of type <code>unknown</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PostscriptError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>testShopWebhook(request?: Webhooks.TestShopWebhookRequest, options?: RequestOptions): ApiPromise&lt;ApiV2WebhooksTestResponse, Webhooks.TestShopWebhookError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.testShopWebhook();
  // TODO: Handle 'response' of type ApiV2WebhooksTestResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.TestShopWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.testShopWebhook().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV2WebhooksTestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xPostscriptShopToken?</code> | <code>string</code> | Shop API Token. **Required for partners**. This header should be used *only* by partners. Shops should include their API token in the *Authorization* header. |
| <code>body?</code> | <code>[ApiV2WebhooksTestRequest](src/models/api-v2-webhooks-test-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.testShopWebhook(request)`

- **OnSuccess**: <code>[ApiV2WebhooksTestResponse](src/models/api-v2-webhooks-test-response.ts)</code>
- **OnError**: throws <code>[Webhooks.TestShopWebhookError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.testShopWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV2WebhooksTestResponse, Webhooks.TestShopWebhookError&gt;</code>, with `result.value` of type <code>[ApiV2WebhooksTestResponse](src/models/api-v2-webhooks-test-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PostscriptError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateWebhookSubscription(request: Webhooks.UpdateWebhookSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;unknown, Webhooks.UpdateWebhookSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.updateWebhookSubscription({ id: "some example string" });
  // TODO: Handle 'response' of type unknown
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.UpdateWebhookSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.updateWebhookSubscription({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type unknown
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | ID of the webhook subscription to update. |
| <code>xPostscriptShopToken?</code> | <code>string</code> | Shop API Token. **Required for partners**. This header should be used only by partners. Shops should include their API token in the *Authorization* header. |
| <code>body?</code> | <code>[ApiV2WebhooksRequest1](src/models/api-v2-webhooks-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.updateWebhookSubscription(request)`

- **OnSuccess**: <code>unknown</code>
- **OnError**: throws <code>[Webhooks.UpdateWebhookSubscriptionError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.updateWebhookSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;unknown, Webhooks.UpdateWebhookSubscriptionError&gt;</code>, with `result.value` of type <code>unknown</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PostscriptError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

