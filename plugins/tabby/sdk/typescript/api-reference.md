# Reference

> Source: [TabbyClient](src/client.ts)

## Checkout

> Source: [Checkout](src/resources/checkout.ts)

<details>
<summary><code>getCheckoutSession(request: Checkout.GetCheckoutSessionRequest, options?: RequestOptions): ApiPromise&lt;CheckoutSession, Checkout.GetCheckoutSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to retrieve the token (only if tokens used in your integration )

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.checkout.getCheckoutSession({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type CheckoutSession
} catch (err) {
  // TODO: Handle 'err' of type Checkout.GetCheckoutSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.checkout
  .getCheckoutSession({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CheckoutSession
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
| <code>id</code> | <code>string</code> | ID of the session. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.checkout.getCheckoutSession(request)`

- **OnSuccess**: <code>[CheckoutSession](src/models/checkout-session.ts)</code>
- **OnError**: throws <code>[Checkout.GetCheckoutSessionError](src/resources/checkout.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.checkout.getCheckoutSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CheckoutSession, Checkout.GetCheckoutSessionError&gt;</code>, with `result.value` of type <code>[CheckoutSession](src/models/checkout-session.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TabbyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postCheckoutSession(request: Checkout.PostCheckoutSessionRequest, options?: RequestOptions): ApiPromise&lt;CheckoutSession, Checkout.PostCheckoutSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Checkout session. Creates Session and Payment, returns Pre-Scoring result (status), ids of Payment and Session.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.checkout.postCheckoutSession({
    body: {
      payment: {
        amount: "some example string",
        currency: Currency.Aed,
        buyer: { name: "some example string", email: "user@example.com", phone: "some example string" },
        shippingAddress: {
          city: "some example string",
          address: "some example string",
          zip: "some example string",
        },
        order: { referenceId: "some example string", items: [{}] },
        buyerHistory: { registeredSince: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)), loyaltyLevel: 1.5 },
        orderHistory: [
          {
            purchasedAt: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
            amount: "some example string",
            status: Status1.New,
            buyer: {},
            shippingAddress: {},
          },
        ],
      },
      lang: LanguageCode.Ar,
      merchantCode: "some example string",
    },
  });
  // TODO: Handle 'response' of type CheckoutSession
} catch (err) {
  // TODO: Handle 'err' of type Checkout.PostCheckoutSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.checkout
  .postCheckoutSession({
    body: {
      payment: {
        amount: "some example string",
        currency: Currency.Aed,
        buyer: { name: "some example string", email: "user@example.com", phone: "some example string" },
        shippingAddress: {
          city: "some example string",
          address: "some example string",
          zip: "some example string",
        },
        order: { referenceId: "some example string", items: [{}] },
        buyerHistory: { registeredSince: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)), loyaltyLevel: 1.5 },
        orderHistory: [
          {
            purchasedAt: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
            amount: "some example string",
            status: Status1.New,
            buyer: {},
            shippingAddress: {},
          },
        ],
      },
      lang: LanguageCode.Ar,
      merchantCode: "some example string",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CheckoutSession
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
| <code>body</code> | <code>[ApiV2CheckoutRequest](src/models/api-v2-checkout-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.checkout.postCheckoutSession(request)`

- **OnSuccess**: <code>[CheckoutSession](src/models/checkout-session.ts)</code>
- **OnError**: throws <code>[Checkout.PostCheckoutSessionError](src/resources/checkout.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.checkout.postCheckoutSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CheckoutSession, Checkout.PostCheckoutSessionError&gt;</code>, with `result.value` of type <code>[CheckoutSession](src/models/checkout-session.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TabbyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DisputesApi

> Source: [DisputesApi](src/resources/disputes-api.ts)

<details>
<summary><code>getDispute(request: DisputesApi.GetDisputeRequest, options?: RequestOptions): ApiPromise&lt;Dispute1, DisputesApi.GetDisputeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed information about dispute.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.disputesApi.getDispute({
    disputeId: "00000000-0000-0000-0000-000000000000",
    disputeIdTemplate: "some example string",
  });
  // TODO: Handle 'response' of type Dispute1
} catch (err) {
  // TODO: Handle 'err' of type DisputesApi.GetDisputeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.disputesApi
  .getDispute({ disputeId: "00000000-0000-0000-0000-000000000000", disputeIdTemplate: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Dispute1
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
| <code>disputeId</code> | <code>string</code> | ID of the dispute. |
| <code>disputeIdTemplate</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.disputesApi.getDispute(request)`

- **OnSuccess**: <code>[Dispute1](src/models/dispute1.ts)</code>
- **OnError**: throws <code>[DisputesApi.GetDisputeError](src/resources/disputes-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.disputesApi.getDispute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Dispute1, DisputesApi.GetDisputeError&gt;</code>, with `result.value` of type <code>[Dispute1](src/models/dispute1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TabbyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDisputes(request?: DisputesApi.GetDisputesRequest, options?: RequestOptions): ApiPromise&lt;Disputes, DisputesApi.GetDisputesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns list of 100 recently created disputes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.disputesApi.getDisputes({
    createdAtGte: "created_at_gte=2022-12-01T00:00:00Z",
    createdAtLte: "created_at_lte=2022-12-01T00:00:00Z",
  });
  // TODO: Handle 'response' of type Disputes
} catch (err) {
  // TODO: Handle 'err' of type DisputesApi.GetDisputesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.disputesApi
  .getDisputes({
    createdAtGte: "created_at_gte=2022-12-01T00:00:00Z",
    createdAtLte: "created_at_lte=2022-12-01T00:00:00Z",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Disputes
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
| <code>statuses?</code> | <code>[Statuses](src/models/statuses.ts)</code> | Dispute status. If not set, then all statuses will be in result. |
| <code>createdAtGte?</code> | <code>string</code> | Filter disputes created after or at the specified date and time. |
| <code>createdAtLte?</code> | <code>string</code> | Filter disputes created before or at the specified date and time. |
| <code>pageToken?</code> | <code>string</code> | To load the next page of disputed items provide page token. This code can be obtained from the `next_page_token` variable in the response of dispute list. If `next_page_token` is empty in response, it means last page of disputes has been reached. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.disputesApi.getDisputes(request)`

- **OnSuccess**: <code>[Disputes](src/models/disputes.ts)</code>
- **OnError**: throws <code>[DisputesApi.GetDisputesError](src/resources/disputes-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.disputesApi.getDisputes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Disputes, DisputesApi.GetDisputesError&gt;</code>, with `result.value` of type <code>[Disputes](src/models/disputes.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TabbyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postDisputeProvideEvidence(request: DisputesApi.PostDisputeProvideEvidenceRequest, options?: RequestOptions): ApiPromise&lt;Evidence, DisputesApi.PostDisputeProvideEvidenceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provide evidence (text and/or attachments) for a dispute. Used by the merchant to submit proof in response to an evidence request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.disputesApi.postDisputeProvideEvidence({
    disputeId: "00000000-0000-0000-0000-000000000000",
    disputeIdTemplate: "some example string",
    body: { content: "some example string" },
  });
  // TODO: Handle 'response' of type Evidence
} catch (err) {
  // TODO: Handle 'err' of type DisputesApi.PostDisputeProvideEvidenceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.disputesApi
  .postDisputeProvideEvidence({
    disputeId: "00000000-0000-0000-0000-000000000000",
    disputeIdTemplate: "some example string",
    body: { content: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Evidence
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
| <code>disputeId</code> | <code>string</code> | ID of the dispute. |
| <code>disputeIdTemplate</code> | <code>string</code> | - |
| <code>body</code> | <code>[ApiV1DisputesProvideEvidenceRequest](src/models/api-v1-disputes-provide-evidence-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.disputesApi.postDisputeProvideEvidence(request)`

- **OnSuccess**: <code>[Evidence](src/models/evidence.ts)</code>
- **OnError**: throws <code>[DisputesApi.PostDisputeProvideEvidenceError](src/resources/disputes-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.disputesApi.postDisputeProvideEvidence(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Evidence, DisputesApi.PostDisputeProvideEvidenceError&gt;</code>, with `result.value` of type <code>[Evidence](src/models/evidence.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TabbyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postDisputesApprove(request: DisputesApi.PostDisputesApproveRequest, options?: RequestOptions): ApiPromise&lt;DisputesApprove, DisputesApi.PostDisputesApproveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Approve disputes (refund money to the customer). Only 20 disputes can be approved within a single request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.disputesApi.postDisputesApprove({
    body: { disputeIds: ["00000000-0000-0000-0000-000000000000"] },
  });
  // TODO: Handle 'response' of type DisputesApprove
} catch (err) {
  // TODO: Handle 'err' of type DisputesApi.PostDisputesApproveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.disputesApi
  .postDisputesApprove({ body: { disputeIds: ["00000000-0000-0000-0000-000000000000"] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DisputesApprove
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
| <code>body</code> | <code>[ApiV1DisputesApproveRequest](src/models/api-v1-disputes-approve-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.disputesApi.postDisputesApprove(request)`

- **OnSuccess**: <code>[DisputesApprove](src/models/disputes-approve.ts)</code>
- **OnError**: throws <code>[DisputesApi.PostDisputesApproveError](src/resources/disputes-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.disputesApi.postDisputesApprove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DisputesApprove, DisputesApi.PostDisputesApproveError&gt;</code>, with `result.value` of type <code>[DisputesApprove](src/models/disputes-approve.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TabbyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postDisputesChallenge(request: DisputesApi.PostDisputesChallengeRequest, options?: RequestOptions): ApiPromise&lt;DisputesChallenge, DisputesApi.PostDisputesChallengeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Challenge disputes (request Tabby support to take a look at the case). Only 20 disputes can be challenged within a single request. Only disputes with status 'new' might be challenged.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.disputesApi.postDisputesChallenge({
    body: {
      disputeId: "some example string",
      description: "some example string",
      reason: Reason.MerchantReasonOther,
    },
  });
  // TODO: Handle 'response' of type DisputesChallenge
} catch (err) {
  // TODO: Handle 'err' of type DisputesApi.PostDisputesChallengeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.disputesApi
  .postDisputesChallenge({
    body: {
      disputeId: "some example string",
      description: "some example string",
      reason: Reason.MerchantReasonOther,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DisputesChallenge
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
| <code>body</code> | <code>[ApiV1DisputesChallengeRequest](src/models/api-v1-disputes-challenge-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.disputesApi.postDisputesChallenge(request)`

- **OnSuccess**: <code>[DisputesChallenge](src/models/disputes-challenge.ts)</code>
- **OnError**: throws <code>[DisputesApi.PostDisputesChallengeError](src/resources/disputes-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.disputesApi.postDisputesChallenge(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DisputesChallenge, DisputesApi.PostDisputesChallengeError&gt;</code>, with `result.value` of type <code>[DisputesChallenge](src/models/disputes-challenge.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TabbyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postUploadAttachment(request: DisputesApi.PostUploadAttachmentRequest, options?: RequestOptions): ApiPromise&lt;DisputeAttachmentUpload, DisputesApi.PostUploadAttachmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload an attachment. Attachment must be in PNG, JPEG or PDF format and can be up to 5 megabytes in size. Files larger than 5 MB are rejected.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.disputesApi.postUploadAttachment({ attachment: new Uint8Array() });
  // TODO: Handle 'response' of type DisputeAttachmentUpload
} catch (err) {
  // TODO: Handle 'err' of type DisputesApi.PostUploadAttachmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.disputesApi.postUploadAttachment({ attachment: new Uint8Array() }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DisputeAttachmentUpload
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
| <code>attachment</code> | <code>FileInput</code> | Attachment must be in PNG, JPEG or PDF format and can be up to 5 megabytes in size. Files larger than 5 MB are rejected. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.disputesApi.postUploadAttachment(request)`

- **OnSuccess**: <code>[DisputeAttachmentUpload](src/models/dispute-attachment-upload.ts)</code>
- **OnError**: throws <code>[DisputesApi.PostUploadAttachmentError](src/resources/disputes-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.disputesApi.postUploadAttachment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DisputeAttachmentUpload, DisputesApi.PostUploadAttachmentError&gt;</code>, with `result.value` of type <code>[DisputeAttachmentUpload](src/models/dispute-attachment-upload.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TabbyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentsApi

> Source: [PaymentsApi](src/resources/payments-api.ts)

<details>
<summary><code>closePayment(request: PaymentsApi.ClosePaymentRequest, options?: RequestOptions): ApiPromise&lt;PaymentClose, PaymentsApi.ClosePaymentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Closed is the final status of the payment. Your payment is going to be closed automatically if you capture the full amount of the payment. If an order is fully cancelled, please close the payment without capturing it - the customer will be refunded for all paid amount. If only a part of the order is delivered, please capture this part and close the payment – it will mean that another part of the order is not going to be delivered to the customer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentsApi.closePayment({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type PaymentClose
} catch (err) {
  // TODO: Handle 'err' of type PaymentsApi.ClosePaymentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentsApi
  .closePayment({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentClose
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
| <code>id</code> | <code>string</code> | ID of the payment. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentsApi.closePayment(request)`

- **OnSuccess**: <code>[PaymentClose](src/models/payment-close.ts)</code>
- **OnError**: throws <code>[PaymentsApi.ClosePaymentError](src/resources/payments-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentsApi.closePayment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentClose, PaymentsApi.ClosePaymentError&gt;</code>, with `result.value` of type <code>[PaymentClose](src/models/payment-close.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TabbyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPayment(request: PaymentsApi.GetPaymentRequest, options?: RequestOptions): ApiPromise&lt;PaymentResponse, PaymentsApi.GetPaymentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the specified payment. Returns the entire payment object, including the payment Status, Captures and Refunds objects.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentsApi.getPayment({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type PaymentResponse
} catch (err) {
  // TODO: Handle 'err' of type PaymentsApi.GetPaymentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentsApi
  .getPayment({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentResponse
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
| <code>id</code> | <code>string</code> | ID of the payment. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentsApi.getPayment(request)`

- **OnSuccess**: <code>[PaymentResponse](src/models/payment-response.ts)</code>
- **OnError**: throws <code>[PaymentsApi.GetPaymentError](src/resources/payments-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentsApi.getPayment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentResponse, PaymentsApi.GetPaymentError&gt;</code>, with `result.value` of type <code>[PaymentResponse](src/models/payment-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TabbyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPayments(request?: PaymentsApi.GetPaymentsRequest, options?: RequestOptions): ApiPromise&lt;Payments, PaymentsApi.GetPaymentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of success payments (`AUTHORIZED` or `CLOSED`) you’ve previously created. The payments are returned in sorted order, with the most recent payments appearing first. Each entry in the array is a separate payments object, including the status, any captures and any refunds. If no more payments are available, the resulting array will be empty. Payments might be filtered by creation date.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentsApi.getPayments({
    status: Status1TabbyApiReferencePaymentsApi.Authorized,
  });
  // TODO: Handle 'response' of type Payments
} catch (err) {
  // TODO: Handle 'err' of type PaymentsApi.GetPaymentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentsApi
  .getPayments({ status: Status1TabbyApiReferencePaymentsApi.Authorized })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Payments
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
| <code>createdAtGte?</code> | <code>string</code> (date) | This is a filter for the payment creation date, use it to get the list of payments where creation date >= created_at__gte. ISO 8601 date time format (greater than or equal to). No time should be provided, it starts at 00:00:00 be default. For example 2020-01-23 -> 2020-01-23T00:00:00Z. |
| <code>createdAtLte?</code> | <code>Date</code> (date-time) | This is a filter for the payment creation date, use it to get the list of payments where creation date <= created_at__lte. ISO 8601 date time format (less than or equal to). No time should be provided, it starts at 00:00:00 be default. For example 2020-01-23 -> 2020-01-23T00:00:00Z. |
| <code>limit?</code> | <code>number</code> | Limits the number of returned results. |
| <code>status?</code> | <code>[Status1TabbyApiReferencePaymentsApi](src/models/status1-tabby-api-reference-payments-api.ts)</code> | Filter the orders by specific statuses:<br>  - `authorized`, `closed` and `rejected` belong to the API payment statuses;<br>  - `new`, `captured`, `refunded` and `cancelled`` refer to the statuses on Tabby Merchant Dashboard;<br>  - If absent, all `AUTHORIZED` and `CLOSED` payments are returned. |
| <code>offset?</code> | <code>number</code> | The number of records into a dataset that you want to start, indexed at 0. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentsApi.getPayments(request)`

- **OnSuccess**: <code>[Payments](src/models/payments.ts)</code>
- **OnError**: throws <code>[PaymentsApi.GetPaymentsError](src/resources/payments-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentsApi.getPayments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Payments, PaymentsApi.GetPaymentsError&gt;</code>, with `result.value` of type <code>[Payments](src/models/payments.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TabbyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postPaymentCapture(request: PaymentsApi.PostPaymentCaptureRequest, options?: RequestOptions): ApiPromise&lt;PaymentCaptureResponse, PaymentsApi.PostPaymentCaptureError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a Capture requests for Authorized payments only. If you capture the full payment amount, the payment will be automatically closed with full capture. If you capture partial amount, the payment will remain Authorized until the rest of the amount is captured or Close request sent.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentsApi.postPaymentCapture({
    id: "00000000-0000-0000-0000-000000000000",
    body: { amount: "some example string", referenceId: "some example string" },
  });
  // TODO: Handle 'response' of type PaymentCaptureResponse
} catch (err) {
  // TODO: Handle 'err' of type PaymentsApi.PostPaymentCaptureError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentsApi
  .postPaymentCapture({
    id: "00000000-0000-0000-0000-000000000000",
    body: { amount: "some example string", referenceId: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentCaptureResponse
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
| <code>id</code> | <code>string</code> | ID of the payment. |
| <code>body</code> | <code>[CaptureRequest](src/models/capture-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentsApi.postPaymentCapture(request)`

- **OnSuccess**: <code>[PaymentCaptureResponse](src/models/payment-capture-response.ts)</code>
- **OnError**: throws <code>[PaymentsApi.PostPaymentCaptureError](src/resources/payments-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentsApi.postPaymentCapture(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentCaptureResponse, PaymentsApi.PostPaymentCaptureError&gt;</code>, with `result.value` of type <code>[PaymentCaptureResponse](src/models/payment-capture-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TabbyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postPaymentRefund(request: PaymentsApi.PostPaymentRefundRequest, options?: RequestOptions): ApiPromise&lt;PaymentRefundResponse, PaymentsApi.PostPaymentRefundError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a full or partial refund amount request. You can only refund the payment that has Closed status. By default refunds reflect instantly, which means Tabby initiates a refund through payment gateway.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentsApi.postPaymentRefund({
    id: "00000000-0000-0000-0000-000000000000",
    body: { amount: "some example string", referenceId: "some example string" },
  });
  // TODO: Handle 'response' of type PaymentRefundResponse
} catch (err) {
  // TODO: Handle 'err' of type PaymentsApi.PostPaymentRefundError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentsApi
  .postPaymentRefund({
    id: "00000000-0000-0000-0000-000000000000",
    body: { amount: "some example string", referenceId: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentRefundResponse
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
| <code>id</code> | <code>string</code> | ID of the payment. |
| <code>body</code> | <code>[RefundRequest](src/models/refund-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentsApi.postPaymentRefund(request)`

- **OnSuccess**: <code>[PaymentRefundResponse](src/models/payment-refund-response.ts)</code>
- **OnError**: throws <code>[PaymentsApi.PostPaymentRefundError](src/resources/payments-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentsApi.postPaymentRefund(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentRefundResponse, PaymentsApi.PostPaymentRefundError&gt;</code>, with `result.value` of type <code>[PaymentRefundResponse](src/models/payment-refund-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TabbyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putPayment(request: PaymentsApi.PutPaymentRequest, options?: RequestOptions): ApiPromise&lt;PaymentUpdate, PaymentsApi.PutPaymentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the reference_id. You can only use this endpoint to update this 1 field. If you send other fields in the request, they will simply be ignored by tabby. The payment to be updated can have a status of AUTHORIZED or CLOSED.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentsApi.putPayment({
    id: "00000000-0000-0000-0000-000000000000",
    body: {},
  });
  // TODO: Handle 'response' of type PaymentUpdate
} catch (err) {
  // TODO: Handle 'err' of type PaymentsApi.PutPaymentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentsApi
  .putPayment({ id: "00000000-0000-0000-0000-000000000000", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentUpdate
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
| <code>id</code> | <code>string</code> | ID of the payment. |
| <code>body</code> | <code>[ApiV2PaymentsRequest](src/models/api-v2-payments-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentsApi.putPayment(request)`

- **OnSuccess**: <code>[PaymentUpdate](src/models/payment-update.ts)</code>
- **OnError**: throws <code>[PaymentsApi.PutPaymentError](src/resources/payments-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentsApi.putPayment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentUpdate, PaymentsApi.PutPaymentError&gt;</code>, with `result.value` of type <code>[PaymentUpdate](src/models/payment-update.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TabbyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Webhooks

> Source: [Webhooks](src/resources/webhooks.ts)

<details>
<summary><code>deleteWebhook(request: Webhooks.DeleteWebhookRequest, options?: RequestOptions): ApiPromise&lt;WebhookDelete, Webhooks.DeleteWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the specified webhook.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.deleteWebhook({
    id: "00000000-0000-0000-0000-000000000000",
    xMerchantCode: "code provided to you from Tabby side",
  });
  // TODO: Handle 'response' of type WebhookDelete
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.DeleteWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .deleteWebhook({
    id: "00000000-0000-0000-0000-000000000000",
    xMerchantCode: "code provided to you from Tabby side",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookDelete
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
| <code>id</code> | <code>string</code> | ID of the webhook. |
| <code>xMerchantCode</code> | <code>string</code> | Used for multi store/countries setup, please contact your Account manager to recognize that |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.deleteWebhook(request)`

- **OnSuccess**: <code>[WebhookDelete](src/models/webhook-delete.ts)</code>
- **OnError**: throws <code>[Webhooks.DeleteWebhookError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.deleteWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookDelete, Webhooks.DeleteWebhookError&gt;</code>, with `result.value` of type <code>[WebhookDelete](src/models/webhook-delete.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TabbyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWebhook(request: Webhooks.GetWebhookRequest, options?: RequestOptions): ApiPromise&lt;Webhook, Webhooks.GetWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the specified webhook.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.getWebhook({
    id: "00000000-0000-0000-0000-000000000000",
    xMerchantCode: "code provided to you from Tabby side",
  });
  // TODO: Handle 'response' of type Webhook
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.GetWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .getWebhook({
    id: "00000000-0000-0000-0000-000000000000",
    xMerchantCode: "code provided to you from Tabby side",
  })
  .asApiResult();
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
| <code>id</code> | <code>string</code> | ID of the webhook. |
| <code>xMerchantCode</code> | <code>string</code> | Used for multi store/countries setup, please contact your Account manager to recognize that |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.getWebhook(request)`

- **OnSuccess**: <code>[Webhook](src/models/webhook.ts)</code>
- **OnError**: throws <code>[Webhooks.GetWebhookError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.getWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Webhook, Webhooks.GetWebhookError&gt;</code>, with `result.value` of type <code>[Webhook](src/models/webhook.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TabbyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWebhooks(request: Webhooks.GetWebhooksRequest, options?: RequestOptions): ApiPromise&lt;WebhookResponseAll, Webhooks.GetWebhooksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all registred webhooks.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.getWebhooks({
    xMerchantCode: "code provided to you from Tabby side",
  });
  // TODO: Handle 'response' of type WebhookResponseAll
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.GetWebhooksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .getWebhooks({ xMerchantCode: "code provided to you from Tabby side" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookResponseAll
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
| <code>xMerchantCode</code> | <code>string</code> | Used for multi store/countries setup, please contact your Account manager to recognize that |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.getWebhooks(request)`

- **OnSuccess**: <code>[WebhookResponseAll](src/models/unions/webhook-response-all.ts)</code>
- **OnError**: throws <code>[Webhooks.GetWebhooksError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.getWebhooks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookResponseAll, Webhooks.GetWebhooksError&gt;</code>, with `result.value` of type <code>[WebhookResponseAll](src/models/unions/webhook-response-all.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TabbyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postWebhook(request: Webhooks.PostWebhookRequest, options?: RequestOptions): ApiPromise&lt;WebhookRegistrationResponse, Webhooks.PostWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new webhook

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.postWebhook({
    xMerchantCode: "code provided to you from Tabby side",
    body: { url: "https://example.com" },
  });
  // TODO: Handle 'response' of type WebhookRegistrationResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.PostWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .postWebhook({
    xMerchantCode: "code provided to you from Tabby side",
    body: { url: "https://example.com" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookRegistrationResponse
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
| <code>xMerchantCode</code> | <code>string</code> | Used for multi store/countries setup, please contact your Account manager to recognize that |
| <code>body</code> | <code>[WebhookRegistration](src/models/webhook-registration.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.postWebhook(request)`

- **OnSuccess**: <code>[WebhookRegistrationResponse](src/models/webhook-registration-response.ts)</code>
- **OnError**: throws <code>[Webhooks.PostWebhookError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.postWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookRegistrationResponse, Webhooks.PostWebhookError&gt;</code>, with `result.value` of type <code>[WebhookRegistrationResponse](src/models/webhook-registration-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TabbyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putWebhook(request: Webhooks.PutWebhookRequest, options?: RequestOptions): ApiPromise&lt;WebhookUpdate, Webhooks.PutWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the specified webhook.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.putWebhook({
    id: "00000000-0000-0000-0000-000000000000",
    xMerchantCode: "code provided to you from Tabby side",
    body: { id: "some example string", url: "https://example.com" },
  });
  // TODO: Handle 'response' of type WebhookUpdate
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.PutWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .putWebhook({
    id: "00000000-0000-0000-0000-000000000000",
    xMerchantCode: "code provided to you from Tabby side",
    body: { id: "some example string", url: "https://example.com" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookUpdate
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
| <code>id</code> | <code>string</code> | ID of the webhook. |
| <code>xMerchantCode</code> | <code>string</code> | Used for multi store/countries setup, please contact your Account manager to recognize that |
| <code>body</code> | <code>[WebhookUpdate](src/models/webhook-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.putWebhook(request)`

- **OnSuccess**: <code>[WebhookUpdate](src/models/webhook-update.ts)</code>
- **OnError**: throws <code>[Webhooks.PutWebhookError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.putWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookUpdate, Webhooks.PutWebhookError&gt;</code>, with `result.value` of type <code>[WebhookUpdate](src/models/webhook-update.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[TabbyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

