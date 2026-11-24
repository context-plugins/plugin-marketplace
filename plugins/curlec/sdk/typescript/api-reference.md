# Reference

> Source: [CurlecClient](src/client.ts)

## Bills

> Source: [Bills](src/resources/bills.ts)

<details>
<summary><code>createBill(request: Bills.CreateBillRequest, options?: RequestOptions): ApiPromise&lt;Bill, Bills.CreateBillError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a digital bill/receipt for a customer. Supports retail, food & beverage, events, and ecommerce use cases. Used for Razorpay Billme digital receipts.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bills.createBill({
    body: { businessType: BusinessType.Ecommerce, customer: { contact: "some example string" } },
  });
  // TODO: Handle 'response' of type Bill
} catch (err) {
  // TODO: Handle 'err' of type Bills.CreateBillError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bills
  .createBill({
    body: { businessType: BusinessType.Ecommerce, customer: { contact: "some example string" } },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Bill
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
| <code>body</code> | <code>[BillsRequest](src/models/bills-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bills.createBill(request)`

- **OnSuccess**: <code>[Bill](src/models/bill.ts)</code>
- **OnError**: throws <code>[Bills.CreateBillError](src/resources/bills.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bills.createBill(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Bill, Bills.CreateBillError&gt;</code>, with `result.value` of type <code>[Bill](src/models/bill.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteBill(request: Bills.DeleteBillRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Bills.DeleteBillError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a digital bill/receipt.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bills.deleteBill({ billId: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Bills.DeleteBillError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bills.deleteBill({ billId: "some example string" }).asApiResult();
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
| <code>billId</code> | <code>string</code> | Bill ID with prefix bill_ |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bills.deleteBill(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Bills.DeleteBillError](src/resources/bills.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bills.deleteBill(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Bills.DeleteBillError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateBill(request: Bills.UpdateBillRequest, options?: RequestOptions): ApiPromise&lt;Bill, Bills.UpdateBillError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing digital bill. Can update customer details, line items, receipt summary, and other fields.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bills.updateBill({ billId: "some example string", body: {} });
  // TODO: Handle 'response' of type Bill
} catch (err) {
  // TODO: Handle 'err' of type Bills.UpdateBillError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bills.updateBill({ billId: "some example string", body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Bill
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
| <code>billId</code> | <code>string</code> | Bill ID with prefix bill_ |
| <code>body</code> | <code>[Bill](src/models/bill.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bills.updateBill(request)`

- **OnSuccess**: <code>[Bill](src/models/bill.ts)</code>
- **OnError**: throws <code>[Bills.UpdateBillError](src/resources/bills.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bills.updateBill(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Bill, Bills.UpdateBillError&gt;</code>, with `result.value` of type <code>[Bill](src/models/bill.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Customers

> Source: [Customers](src/resources/customers.ts)

<details>
<summary><code>createCustomer(request: Customers.CreateCustomerRequest, options?: RequestOptions): ApiPromise&lt;CustomerRazorpayCustomersApi, Customers.CreateCustomerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a customer profile. The combination of email and contact must be unique per customer. Customer profiles enable saved card tokens, faster checkout, and customer-scoped data.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.createCustomer({
    body: { name: "Aisha Sharma", contact: "+919876543210", email: "aisha@example.com" },
  });
  // TODO: Handle 'response' of type CustomerRazorpayCustomersApi
} catch (err) {
  // TODO: Handle 'err' of type Customers.CreateCustomerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .createCustomer({ body: { name: "Aisha Sharma", contact: "+919876543210", email: "aisha@example.com" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerRazorpayCustomersApi
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
| <code>body</code> | <code>[CustomersRequest](src/models/customers-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.createCustomer(request)`

- **OnSuccess**: <code>[CustomerRazorpayCustomersApi](src/models/customer-razorpay-customers-api.ts)</code>
- **OnError**: throws <code>[Customers.CreateCustomerError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.createCustomer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerRazorpayCustomersApi, Customers.CreateCustomerError&gt;</code>, with `result.value` of type <code>[CustomerRazorpayCustomersApi](src/models/customer-razorpay-customers-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchAllCustomers(request?: Customers.FetchAllCustomersRequest, options?: RequestOptions): ApiPromise&lt;CustomersResponse, Customers.FetchAllCustomersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a paginated list of all customers. Maximum 100 per call.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.fetchAllCustomers();
  // TODO: Handle 'response' of type CustomersResponse
} catch (err) {
  // TODO: Handle 'err' of type Customers.FetchAllCustomersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers.fetchAllCustomers().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomersResponse
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
| <code>count?</code> | <code>number</code> | Number of records to return per call. Maximum 100. Default 10.<br>**Default**: 10 |
| <code>skip?</code> | <code>number</code> | Number of records to skip. Use with count for pagination. Default 0.<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.fetchAllCustomers(request)`

- **OnSuccess**: <code>[CustomersResponse](src/models/customers-response.ts)</code>
- **OnError**: throws <code>[Customers.FetchAllCustomersError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.fetchAllCustomers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomersResponse, Customers.FetchAllCustomersError&gt;</code>, with `result.value` of type <code>[CustomersResponse](src/models/customers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchCustomer(request: Customers.FetchCustomerRequest, options?: RequestOptions): ApiPromise&lt;CustomerRazorpayCustomersApi, Customers.FetchCustomerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve full details of a specific customer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.fetchCustomer({ id: "some example string" });
  // TODO: Handle 'response' of type CustomerRazorpayCustomersApi
} catch (err) {
  // TODO: Handle 'err' of type Customers.FetchCustomerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers.fetchCustomer({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerRazorpayCustomersApi
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
| <code>id</code> | <code>string</code> | Customer ID (cust_*). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.fetchCustomer(request)`

- **OnSuccess**: <code>[CustomerRazorpayCustomersApi](src/models/customer-razorpay-customers-api.ts)</code>
- **OnError**: throws <code>[Customers.FetchCustomerError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.fetchCustomer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerRazorpayCustomersApi, Customers.FetchCustomerError&gt;</code>, with `result.value` of type <code>[CustomerRazorpayCustomersApi](src/models/customer-razorpay-customers-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCustomer(request: Customers.UpdateCustomerRequest, options?: RequestOptions): ApiPromise&lt;CustomerRazorpayCustomersApi, Customers.UpdateCustomerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a customer's name, email, or contact. The combination of email and contact must remain unique. Contact number must contain at least 8 digits.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.updateCustomer({ id: "some example string", body: {} });
  // TODO: Handle 'response' of type CustomerRazorpayCustomersApi
} catch (err) {
  // TODO: Handle 'err' of type Customers.UpdateCustomerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers.updateCustomer({ id: "some example string", body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerRazorpayCustomersApi
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
| <code>id</code> | <code>string</code> | Customer ID (cust_*). |
| <code>body</code> | <code>[CustomersRequest1](src/models/customers-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.updateCustomer(request)`

- **OnSuccess**: <code>[CustomerRazorpayCustomersApi](src/models/customer-razorpay-customers-api.ts)</code>
- **OnError**: throws <code>[Customers.UpdateCustomerError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.updateCustomer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerRazorpayCustomersApi, Customers.UpdateCustomerError&gt;</code>, with `result.value` of type <code>[CustomerRazorpayCustomersApi](src/models/customer-razorpay-customers-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Disputes

> Source: [Disputes](src/resources/disputes.ts)

<details>
<summary><code>acceptDispute(request: Disputes.AcceptDisputeRequest, options?: RequestOptions): ApiPromise&lt;Dispute, Disputes.AcceptDisputeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Accept a dispute, acknowledging it as lost. This is irreversible — the dispute status changes to 'lost' and the disputed amount is deducted from your balance. Only accept if you do not wish to contest.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.disputes.acceptDispute({ id: "some example string" });
  // TODO: Handle 'response' of type Dispute
} catch (err) {
  // TODO: Handle 'err' of type Disputes.AcceptDisputeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.disputes.acceptDispute({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Dispute
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
| <code>id</code> | <code>string</code> | Dispute ID (disp_*). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.disputes.acceptDispute(request)`

- **OnSuccess**: <code>[Dispute](src/models/dispute.ts)</code>
- **OnError**: throws <code>[Disputes.AcceptDisputeError](src/resources/disputes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.disputes.acceptDispute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Dispute, Disputes.AcceptDisputeError&gt;</code>, with `result.value` of type <code>[Dispute](src/models/dispute.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>contestDispute(request: Disputes.ContestDisputeRequest, options?: RequestOptions): ApiPromise&lt;Dispute, Disputes.ContestDisputeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submit evidence to challenge a dispute. Use action=draft to save without submitting, or action=submit to send for bank review (triggers payment.dispute.under_review webhook). At least one evidence document is required when submitting. You can contest partial amounts by specifying amount.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.disputes.contestDispute({ id: "some example string", body: {} });
  // TODO: Handle 'response' of type Dispute
} catch (err) {
  // TODO: Handle 'err' of type Disputes.ContestDisputeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.disputes.contestDispute({ id: "some example string", body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Dispute
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
| <code>id</code> | <code>string</code> | Dispute ID (disp_*). |
| <code>body</code> | <code>[DisputesContestRequest](src/models/disputes-contest-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.disputes.contestDispute(request)`

- **OnSuccess**: <code>[Dispute](src/models/dispute.ts)</code>
- **OnError**: throws <code>[Disputes.ContestDisputeError](src/resources/disputes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.disputes.contestDispute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Dispute, Disputes.ContestDisputeError&gt;</code>, with `result.value` of type <code>[Dispute](src/models/dispute.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchAllDisputes(request?: Disputes.FetchAllDisputesRequest, options?: RequestOptions): ApiPromise&lt;DisputesResponse, Disputes.FetchAllDisputesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of all payment disputes. Use expand[]=payment or expand[]=transaction.settlement for additional context.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.disputes.fetchAllDisputes();
  // TODO: Handle 'response' of type DisputesResponse
} catch (err) {
  // TODO: Handle 'err' of type Disputes.FetchAllDisputesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.disputes.fetchAllDisputes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DisputesResponse
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
| <code>count?</code> | <code>number</code> | Number of records to return per call. Maximum 100. Default 10.<br>**Default**: 10 |
| <code>skip?</code> | <code>number</code> | Number of records to skip. Use with count for pagination. Default 0.<br>**Default**: 0 |
| <code>expand?</code> | <code>[Expand](src/models/expand.ts)</code> | Expand sub-entities. Supported: payment, transaction.settlement. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.disputes.fetchAllDisputes(request)`

- **OnSuccess**: <code>[DisputesResponse](src/models/disputes-response.ts)</code>
- **OnError**: throws <code>[Disputes.FetchAllDisputesError](src/resources/disputes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.disputes.fetchAllDisputes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DisputesResponse, Disputes.FetchAllDisputesError&gt;</code>, with `result.value` of type <code>[DisputesResponse](src/models/disputes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchDispute(request: Disputes.FetchDisputeRequest, options?: RequestOptions): ApiPromise&lt;Dispute, Disputes.FetchDisputeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve full details of a specific dispute including submitted evidence.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.disputes.fetchDispute({ id: "some example string" });
  // TODO: Handle 'response' of type Dispute
} catch (err) {
  // TODO: Handle 'err' of type Disputes.FetchDisputeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.disputes.fetchDispute({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Dispute
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
| <code>id</code> | <code>string</code> | Dispute ID (disp_*). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.disputes.fetchDispute(request)`

- **OnSuccess**: <code>[Dispute](src/models/dispute.ts)</code>
- **OnError**: throws <code>[Disputes.FetchDisputeError](src/resources/disputes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.disputes.fetchDispute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Dispute, Disputes.FetchDisputeError&gt;</code>, with `result.value` of type <code>[Dispute](src/models/dispute.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Documents

> Source: [Documents](src/resources/documents.ts)

<details>
<summary><code>fetchDocument(request: Documents.FetchDocumentRequest, options?: RequestOptions): ApiPromise&lt;Document, Documents.FetchDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve metadata for an uploaded document (name, MIME type, size, purpose). Document IDs are exactly 14 alphanumeric characters.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.documents.fetchDocument({ id: "some example string" });
  // TODO: Handle 'response' of type Document
} catch (err) {
  // TODO: Handle 'err' of type Documents.FetchDocumentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documents.fetchDocument({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Document
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
| <code>id</code> | <code>string</code> | Document ID (doc_*). Exactly 14 alphanumeric characters. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documents.fetchDocument(request)`

- **OnSuccess**: <code>[Document](src/models/document.ts)</code>
- **OnError**: throws <code>[Documents.FetchDocumentError](src/resources/documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documents.fetchDocument(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Document, Documents.FetchDocumentError&gt;</code>, with `result.value` of type <code>[Document](src/models/document.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchDocumentContent(request: Documents.FetchDocumentContentRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, Documents.FetchDocumentContentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the binary content of a previously uploaded document. Returns the raw file bytes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.documents.fetchDocumentContent({ id: "some example string" });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type Documents.FetchDocumentContentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documents.fetchDocumentContent({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
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
| <code>id</code> | <code>string</code> | Document ID. Exactly 14 alphanumeric characters. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documents.fetchDocumentContent(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[Documents.FetchDocumentContentError](src/resources/documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documents.fetchDocumentContent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, Documents.FetchDocumentContentError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadDocument(request: Documents.UploadDocumentRequest, options?: RequestOptions): ApiPromise&lt;Document, Documents.UploadDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a file to Razorpay. Returns a document ID that can be used in dispute evidence submissions. Supports JPEG, PNG, and PDF formats.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.documents.uploadDocument({
    file: new Uint8Array(),
    purpose: "some example string",
  });
  // TODO: Handle 'response' of type Document
} catch (err) {
  // TODO: Handle 'err' of type Documents.UploadDocumentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documents
  .uploadDocument({ file: new Uint8Array(), purpose: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Document
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
| <code>file</code> | <code>FileInput</code> | File to upload. Supported: JPEG, PNG, PDF. |
| <code>purpose</code> | <code>string</code> | Reason for upload. Example: dispute_evidence. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documents.uploadDocument(request)`

- **OnSuccess**: <code>[Document](src/models/document.ts)</code>
- **OnError**: throws <code>[Documents.UploadDocumentError](src/resources/documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documents.uploadDocument(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Document, Documents.UploadDocumentError&gt;</code>, with `result.value` of type <code>[Document](src/models/document.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## InstantSettlements

> Source: [InstantSettlements](src/resources/instant-settlements.ts)

<details>
<summary><code>createInstantSettlement(request: InstantSettlements.CreateInstantSettlementRequest, options?: RequestOptions): ApiPromise&lt;InstantSettlement, InstantSettlements.CreateInstantSettlementError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Request an on-demand (instant) settlement of your available Razorpay balance to your bank account. Fees apply. Use settle_full_balance=true to settle everything available, or specify an amount.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.instantSettlements.createInstantSettlement({ body: { amount: 1 } });
  // TODO: Handle 'response' of type InstantSettlement
} catch (err) {
  // TODO: Handle 'err' of type InstantSettlements.CreateInstantSettlementError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.instantSettlements.createInstantSettlement({ body: { amount: 1 } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InstantSettlement
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
| <code>body</code> | <code>[SettlementsOndemandRequest](src/models/settlements-ondemand-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.instantSettlements.createInstantSettlement(request)`

- **OnSuccess**: <code>[InstantSettlement](src/models/instant-settlement.ts)</code>
- **OnError**: throws <code>[InstantSettlements.CreateInstantSettlementError](src/resources/instant-settlements.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.instantSettlements.createInstantSettlement(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InstantSettlement, InstantSettlements.CreateInstantSettlementError&gt;</code>, with `result.value` of type <code>[InstantSettlement](src/models/instant-settlement.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchAllInstantSettlements(request?: InstantSettlements.FetchAllInstantSettlementsRequest, options?: RequestOptions): ApiPromise&lt;SettlementsOndemandResponse, InstantSettlements.FetchAllInstantSettlementsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of all on-demand instant settlements. Use expand[]=ondemand_payouts to include individual payout records inline.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.instantSettlements.fetchAllInstantSettlements();
  // TODO: Handle 'response' of type SettlementsOndemandResponse
} catch (err) {
  // TODO: Handle 'err' of type InstantSettlements.FetchAllInstantSettlementsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.instantSettlements.fetchAllInstantSettlements().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SettlementsOndemandResponse
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
| <code>from?</code> | <code>number</code> | Unix timestamp (seconds). Fetch records created on or after this time. |
| <code>to?</code> | <code>number</code> | Unix timestamp (seconds). Fetch records created on or before this time. |
| <code>count?</code> | <code>number</code> | Number of records to return per call. Maximum 100. Default 10.<br>**Default**: 10 |
| <code>skip?</code> | <code>number</code> | Number of records to skip. Use with count for pagination. Default 0.<br>**Default**: 0 |
| <code>expand?</code> | <code>[ExpandRazorpayInstantSettlementsApi](src/models/expand-razorpay-instant-settlements-api.ts)</code> | Set to ondemand_payouts to include payout details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.instantSettlements.fetchAllInstantSettlements(request)`

- **OnSuccess**: <code>[SettlementsOndemandResponse](src/models/settlements-ondemand-response.ts)</code>
- **OnError**: throws <code>[InstantSettlements.FetchAllInstantSettlementsError](src/resources/instant-settlements.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.instantSettlements.fetchAllInstantSettlements(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SettlementsOndemandResponse, InstantSettlements.FetchAllInstantSettlementsError&gt;</code>, with `result.value` of type <code>[SettlementsOndemandResponse](src/models/settlements-ondemand-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchInstantSettlement(request: InstantSettlements.FetchInstantSettlementRequest, options?: RequestOptions): ApiPromise&lt;InstantSettlement, InstantSettlements.FetchInstantSettlementError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve details of a specific on-demand instant settlement. Use expand[]=ondemand_payouts to include payout records.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.instantSettlements.fetchInstantSettlement({ id: "some example string" });
  // TODO: Handle 'response' of type InstantSettlement
} catch (err) {
  // TODO: Handle 'err' of type InstantSettlements.FetchInstantSettlementError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.instantSettlements
  .fetchInstantSettlement({ id: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InstantSettlement
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
| <code>id</code> | <code>string</code> | Instant settlement ID (setlod_*). |
| <code>expand?</code> | <code>[ExpandRazorpayInstantSettlementsApi](src/models/expand-razorpay-instant-settlements-api.ts)</code> | Set to ondemand_payouts to include payout details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.instantSettlements.fetchInstantSettlement(request)`

- **OnSuccess**: <code>[InstantSettlement](src/models/instant-settlement.ts)</code>
- **OnError**: throws <code>[InstantSettlements.FetchInstantSettlementError](src/resources/instant-settlements.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.instantSettlements.fetchInstantSettlement(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InstantSettlement, InstantSettlements.FetchInstantSettlementError&gt;</code>, with `result.value` of type <code>[InstantSettlement](src/models/instant-settlement.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Invoices

> Source: [Invoices](src/resources/invoices.ts)

<details>
<summary><code>cancelInvoice(request: Invoices.CancelInvoiceRequest, options?: RequestOptions): ApiPromise&lt;Invoice, Invoices.CancelInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel a draft or issued invoice. Cancelled invoices cannot be paid and cannot be reinstated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.cancelInvoice({ id: "some example string" });
  // TODO: Handle 'response' of type Invoice
} catch (err) {
  // TODO: Handle 'err' of type Invoices.CancelInvoiceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invoices.cancelInvoice({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Invoice
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
| <code>id</code> | <code>string</code> | Invoice ID (inv_*). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invoices.cancelInvoice(request)`

- **OnSuccess**: <code>[Invoice](src/models/invoice.ts)</code>
- **OnError**: throws <code>[Invoices.CancelInvoiceError](src/resources/invoices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.invoices.cancelInvoice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Invoice, Invoices.CancelInvoiceError&gt;</code>, with `result.value` of type <code>[Invoice](src/models/invoice.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createInvoice(request: Invoices.CreateInvoiceRequest, options?: RequestOptions): ApiPromise&lt;Invoice, Invoices.CreateInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an invoice or payment page. Set type='invoice' for a formal invoice or type='link' for a simple payment page. The invoice is created in draft state; call POST /invoices/{id}/issue to send it to the customer. Cannot be used to create GST invoices (use the Dashboard for those). Maximum 50 line items per invoice.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.createInvoice({ body: { type: Type2.Invoice } });
  // TODO: Handle 'response' of type Invoice
} catch (err) {
  // TODO: Handle 'err' of type Invoices.CreateInvoiceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invoices.createInvoice({ body: { type: Type2.Invoice } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Invoice
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
| <code>body</code> | <code>[InvoicesRequest](src/models/invoices-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invoices.createInvoice(request)`

- **OnSuccess**: <code>[Invoice](src/models/invoice.ts)</code>
- **OnError**: throws <code>[Invoices.CreateInvoiceError](src/resources/invoices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.invoices.createInvoice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Invoice, Invoices.CreateInvoiceError&gt;</code>, with `result.value` of type <code>[Invoice](src/models/invoice.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteInvoice(request: Invoices.DeleteInvoiceRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Invoices.DeleteInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a draft invoice. Only invoices in draft status can be deleted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.deleteInvoice({ id: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Invoices.DeleteInvoiceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invoices.deleteInvoice({ id: "some example string" }).asApiResult();
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
| <code>id</code> | <code>string</code> | Invoice ID (inv_*). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invoices.deleteInvoice(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Invoices.DeleteInvoiceError](src/resources/invoices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.invoices.deleteInvoice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Invoices.DeleteInvoiceError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchInvoice(request: Invoices.FetchInvoiceRequest, options?: RequestOptions): ApiPromise&lt;Invoice, Invoices.FetchInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get full details of a specific invoice including status, line items, and payment information.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.fetchInvoice({ id: "some example string" });
  // TODO: Handle 'response' of type Invoice
} catch (err) {
  // TODO: Handle 'err' of type Invoices.FetchInvoiceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invoices.fetchInvoice({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Invoice
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
| <code>id</code> | <code>string</code> | Invoice ID (inv_*). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invoices.fetchInvoice(request)`

- **OnSuccess**: <code>[Invoice](src/models/invoice.ts)</code>
- **OnError**: throws <code>[Invoices.FetchInvoiceError](src/resources/invoices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.invoices.fetchInvoice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Invoice, Invoices.FetchInvoiceError&gt;</code>, with `result.value` of type <code>[Invoice](src/models/invoice.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>issueInvoice(request: Invoices.IssueInvoiceRequest, options?: RequestOptions): ApiPromise&lt;Invoice, Invoices.IssueInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transition a draft invoice to issued status, sending a notification to the customer with the payment link. Once issued, line items cannot be changed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.issueInvoice({ id: "some example string" });
  // TODO: Handle 'response' of type Invoice
} catch (err) {
  // TODO: Handle 'err' of type Invoices.IssueInvoiceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invoices.issueInvoice({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Invoice
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
| <code>id</code> | <code>string</code> | Invoice ID (inv_*). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invoices.issueInvoice(request)`

- **OnSuccess**: <code>[Invoice](src/models/invoice.ts)</code>
- **OnError**: throws <code>[Invoices.IssueInvoiceError](src/resources/invoices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.invoices.issueInvoice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Invoice, Invoices.IssueInvoiceError&gt;</code>, with `result.value` of type <code>[Invoice](src/models/invoice.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listInvoices(request?: Invoices.ListInvoicesRequest, options?: RequestOptions): ApiPromise&lt;InvoicesResponse, Invoices.ListInvoicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of invoices. Filter by type, status, customer, payment, or subscription. Returns up to 100 per call.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.listInvoices();
  // TODO: Handle 'response' of type InvoicesResponse
} catch (err) {
  // TODO: Handle 'err' of type Invoices.ListInvoicesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invoices.listInvoices().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InvoicesResponse
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
| <code>type?</code> | <code>[Type3](src/models/type3.ts)</code> | Filter by invoice type. |
| <code>paymentId?</code> | <code>string</code> | Filter invoices by the payment ID used to pay them. |
| <code>customerId?</code> | <code>string</code> | Filter by customer ID (cust_*). |
| <code>subscriptionId?</code> | <code>string</code> | Fetch all invoices generated for a subscription (sub_*). |
| <code>from?</code> | <code>number</code> | Unix timestamp (seconds). Fetch records created on or after this time. |
| <code>to?</code> | <code>number</code> | Unix timestamp (seconds). Fetch records created on or before this time. |
| <code>count?</code> | <code>number</code> | Number of records to return per call. Maximum 100. Default 10.<br>**Default**: 10 |
| <code>skip?</code> | <code>number</code> | Number of records to skip. Use with count for pagination. Default 0.<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invoices.listInvoices(request)`

- **OnSuccess**: <code>[InvoicesResponse](src/models/invoices-response.ts)</code>
- **OnError**: throws <code>[Invoices.ListInvoicesError](src/resources/invoices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.invoices.listInvoices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InvoicesResponse, Invoices.ListInvoicesError&gt;</code>, with `result.value` of type <code>[InvoicesResponse](src/models/invoices-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sendInvoiceNotification(request: Invoices.SendInvoiceNotificationRequest, options?: RequestOptions): ApiPromise&lt;InvoicesNotifyByResponse, Invoices.SendInvoiceNotificationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send or resend the invoice payment link to the customer via SMS or email.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.sendInvoiceNotification({
    id: "some example string",
    medium: Medium.Sms,
  });
  // TODO: Handle 'response' of type InvoicesNotifyByResponse
} catch (err) {
  // TODO: Handle 'err' of type Invoices.SendInvoiceNotificationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invoices
  .sendInvoiceNotification({ id: "some example string", medium: Medium.Sms })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InvoicesNotifyByResponse
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
| <code>id</code> | <code>string</code> | Invoice ID (inv_*). |
| <code>medium</code> | <code>[Medium](src/models/medium.ts)</code> | Notification channel. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invoices.sendInvoiceNotification(request)`

- **OnSuccess**: <code>[InvoicesNotifyByResponse](src/models/invoices-notify-by-response.ts)</code>
- **OnError**: throws <code>[Invoices.SendInvoiceNotificationError](src/resources/invoices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.invoices.sendInvoiceNotification(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InvoicesNotifyByResponse, Invoices.SendInvoiceNotificationError&gt;</code>, with `result.value` of type <code>[InvoicesNotifyByResponse](src/models/invoices-notify-by-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateInvoice(request: Invoices.UpdateInvoiceRequest, options?: RequestOptions): ApiPromise&lt;Invoice, Invoices.UpdateInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update invoice fields. Updatable fields depend on current status: draft=all fields; issued=partial_payment, receipt, comment, terms, notes, expire_by; paid/cancelled/expired=notes only.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.updateInvoice({ id: "some example string", body: {} });
  // TODO: Handle 'response' of type Invoice
} catch (err) {
  // TODO: Handle 'err' of type Invoices.UpdateInvoiceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invoices.updateInvoice({ id: "some example string", body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Invoice
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
| <code>id</code> | <code>string</code> | Invoice ID (inv_*). |
| <code>body</code> | <code>[InvoicesRequest1](src/models/invoices-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invoices.updateInvoice(request)`

- **OnSuccess**: <code>[Invoice](src/models/invoice.ts)</code>
- **OnError**: throws <code>[Invoices.UpdateInvoiceError](src/resources/invoices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.invoices.updateInvoice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Invoice, Invoices.UpdateInvoiceError&gt;</code>, with `result.value` of type <code>[Invoice](src/models/invoice.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Items

> Source: [Items](src/resources/items.ts)

<details>
<summary><code>createItem(request: Items.CreateItemRequest, options?: RequestOptions): ApiPromise&lt;Item, Items.CreateItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a reusable catalog item. Items can be referenced in invoice line_items by item_id, which auto-fills price and description. Each item is merchant-scoped.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.items.createItem({
    body: { name: "some example string", amount: 1, currency: "some example string" },
  });
  // TODO: Handle 'response' of type Item
} catch (err) {
  // TODO: Handle 'err' of type Items.CreateItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.items
  .createItem({ body: { name: "some example string", amount: 1, currency: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Item
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
| <code>body</code> | <code>[ItemsRequest](src/models/items-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.items.createItem(request)`

- **OnSuccess**: <code>[Item](src/models/item.ts)</code>
- **OnError**: throws <code>[Items.CreateItemError](src/resources/items.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.items.createItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Item, Items.CreateItemError&gt;</code>, with `result.value` of type <code>[Item](src/models/item.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteItem(request: Items.DeleteItemRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Items.DeleteItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a catalog item. Deleted items cannot be recovered.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.items.deleteItem({ id: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Items.DeleteItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.items.deleteItem({ id: "some example string" }).asApiResult();
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
| <code>id</code> | <code>string</code> | Item ID (item_*). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.items.deleteItem(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Items.DeleteItemError](src/resources/items.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.items.deleteItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Items.DeleteItemError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchItem(request: Items.FetchItemRequest, options?: RequestOptions): ApiPromise&lt;Item, Items.FetchItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details of a specific catalog item.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.items.fetchItem({ id: "some example string" });
  // TODO: Handle 'response' of type Item
} catch (err) {
  // TODO: Handle 'err' of type Items.FetchItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.items.fetchItem({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Item
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
| <code>id</code> | <code>string</code> | Item ID (item_*). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.items.fetchItem(request)`

- **OnSuccess**: <code>[Item](src/models/item.ts)</code>
- **OnError**: throws <code>[Items.FetchItemError](src/resources/items.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.items.fetchItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Item, Items.FetchItemError&gt;</code>, with `result.value` of type <code>[Item](src/models/item.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listItems(request?: Items.ListItemsRequest, options?: RequestOptions): ApiPromise&lt;ItemsResponse, Items.ListItemsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all catalog items. Supports pagination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.items.listItems();
  // TODO: Handle 'response' of type ItemsResponse
} catch (err) {
  // TODO: Handle 'err' of type Items.ListItemsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.items.listItems().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ItemsResponse
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
| <code>count?</code> | <code>number</code> | Number of records to return per call. Maximum 100. Default 10.<br>**Default**: 10 |
| <code>skip?</code> | <code>number</code> | Number of records to skip. Use with count for pagination. Default 0.<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.items.listItems(request)`

- **OnSuccess**: <code>[ItemsResponse](src/models/items-response.ts)</code>
- **OnError**: throws <code>[Items.ListItemsError](src/resources/items.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.items.listItems(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ItemsResponse, Items.ListItemsError&gt;</code>, with `result.value` of type <code>[ItemsResponse](src/models/items-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateItem(request: Items.UpdateItemRequest, options?: RequestOptions): ApiPromise&lt;Item, Items.UpdateItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the name, description, amount, currency, or active status of an item.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.items.updateItem({ id: "some example string", body: {} });
  // TODO: Handle 'response' of type Item
} catch (err) {
  // TODO: Handle 'err' of type Items.UpdateItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.items.updateItem({ id: "some example string", body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Item
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
| <code>id</code> | <code>string</code> | Item ID (item_*). |
| <code>body</code> | <code>[ItemsRequest1](src/models/items-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.items.updateItem(request)`

- **OnSuccess**: <code>[Item](src/models/item.ts)</code>
- **OnError**: throws <code>[Items.UpdateItemError](src/resources/items.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.items.updateItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Item, Items.UpdateItemError&gt;</code>, with `result.value` of type <code>[Item](src/models/item.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## LinkedAccounts

> Source: [LinkedAccounts](src/resources/linked-accounts.ts)

<details>
<summary><code>createLinkedAccount(request: LinkedAccounts.CreateLinkedAccountRequest, options?: RequestOptions): ApiPromise&lt;LinkedAccount, LinkedAccounts.CreateLinkedAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a sub-merchant (Linked Account) under a Route marketplace. The account type must be 'route'. Email and business_type cannot be changed after creation. Only one stakeholder is allowed per Linked Account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.linkedAccounts.createLinkedAccount({
    body: { email: "some example string", profile: {} },
  });
  // TODO: Handle 'response' of type LinkedAccount
} catch (err) {
  // TODO: Handle 'err' of type LinkedAccounts.CreateLinkedAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.linkedAccounts
  .createLinkedAccount({ body: { email: "some example string", profile: {} } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LinkedAccount
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
| <code>body</code> | <code>[V2AccountsRequest](src/models/v2-accounts-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.linkedAccounts.createLinkedAccount(request)`

- **OnSuccess**: <code>[LinkedAccount](src/models/linked-account.ts)</code>
- **OnError**: throws <code>[LinkedAccounts.CreateLinkedAccountError](src/resources/linked-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.linkedAccounts.createLinkedAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LinkedAccount, LinkedAccounts.CreateLinkedAccountError&gt;</code>, with `result.value` of type <code>[LinkedAccount](src/models/linked-account.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createStakeholder(request: LinkedAccounts.CreateStakeholderRequest, options?: RequestOptions): ApiPromise&lt;Stakeholder, LinkedAccounts.CreateStakeholderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a business owner or director to a Linked Account. Only one stakeholder is allowed per Route Linked Account. PAN 4th character must be 'P' (individual PAN).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.linkedAccounts.createStakeholder({
    accountId: "some example string",
    body: { name: "some example string", email: "some example string" },
  });
  // TODO: Handle 'response' of type Stakeholder
} catch (err) {
  // TODO: Handle 'err' of type LinkedAccounts.CreateStakeholderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.linkedAccounts
  .createStakeholder({
    accountId: "some example string",
    body: { name: "some example string", email: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Stakeholder
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
| <code>accountId</code> | <code>string</code> | Unique identifier of the linked merchant account (e.g. `acc_00000000000001`). |
| <code>body</code> | <code>[V2AccountsStakeholdersRequest](src/models/v2-accounts-stakeholders-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.linkedAccounts.createStakeholder(request)`

- **OnSuccess**: <code>[Stakeholder](src/models/stakeholder.ts)</code>
- **OnError**: throws <code>[LinkedAccounts.CreateStakeholderError](src/resources/linked-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.linkedAccounts.createStakeholder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Stakeholder, LinkedAccounts.CreateStakeholderError&gt;</code>, with `result.value` of type <code>[Stakeholder](src/models/stakeholder.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchLinkedAccount(request: LinkedAccounts.FetchLinkedAccountRequest, options?: RequestOptions): ApiPromise&lt;LinkedAccount, LinkedAccounts.FetchLinkedAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the details of a Linked Account by its ID. Also used in Partners API to fetch sub-merchant account details (authentication: OAuth access_token).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.linkedAccounts.fetchLinkedAccount({ accountId: "some example string" });
  // TODO: Handle 'response' of type LinkedAccount
} catch (err) {
  // TODO: Handle 'err' of type LinkedAccounts.FetchLinkedAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.linkedAccounts
  .fetchLinkedAccount({ accountId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LinkedAccount
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
| <code>accountId</code> | <code>string</code> | Linked Account ID (acc_*). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.linkedAccounts.fetchLinkedAccount(request)`

- **OnSuccess**: <code>[LinkedAccount](src/models/linked-account.ts)</code>
- **OnError**: throws <code>[LinkedAccounts.FetchLinkedAccountError](src/resources/linked-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.linkedAccounts.fetchLinkedAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LinkedAccount, LinkedAccounts.FetchLinkedAccountError&gt;</code>, with `result.value` of type <code>[LinkedAccount](src/models/linked-account.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchProductConfig(request: LinkedAccounts.FetchProductConfigRequest, options?: RequestOptions): ApiPromise&lt;ProductConfiguration, LinkedAccounts.FetchProductConfigError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the current product configuration and activation status for a Linked Account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.linkedAccounts.fetchProductConfig({
    accountId: "some example string",
    productId: "some example string",
  });
  // TODO: Handle 'response' of type ProductConfiguration
} catch (err) {
  // TODO: Handle 'err' of type LinkedAccounts.FetchProductConfigError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.linkedAccounts
  .fetchProductConfig({ accountId: "some example string", productId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProductConfiguration
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
| <code>accountId</code> | <code>string</code> | Linked Account ID (acc_*). |
| <code>productId</code> | <code>string</code> | Product configuration ID (acc_prd_*). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.linkedAccounts.fetchProductConfig(request)`

- **OnSuccess**: <code>[ProductConfiguration](src/models/product-configuration.ts)</code>
- **OnError**: throws <code>[LinkedAccounts.FetchProductConfigError](src/resources/linked-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.linkedAccounts.fetchProductConfig(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProductConfiguration, LinkedAccounts.FetchProductConfigError&gt;</code>, with `result.value` of type <code>[ProductConfiguration](src/models/product-configuration.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>requestProductConfig(request: LinkedAccounts.RequestProductConfigRequest, options?: RequestOptions): ApiPromise&lt;ProductConfiguration, LinkedAccounts.RequestProductConfigError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Request activation of the Route product for a Linked Account. Submits the account for review and KYC. Activation progresses: requested → under_review → activated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.linkedAccounts.requestProductConfig({
    accountId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type ProductConfiguration
} catch (err) {
  // TODO: Handle 'err' of type LinkedAccounts.RequestProductConfigError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.linkedAccounts
  .requestProductConfig({ accountId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProductConfiguration
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
| <code>accountId</code> | <code>string</code> | Linked Account ID (acc_*). |
| <code>body</code> | <code>[V2AccountsProductsRequest](src/models/v2-accounts-products-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.linkedAccounts.requestProductConfig(request)`

- **OnSuccess**: <code>[ProductConfiguration](src/models/product-configuration.ts)</code>
- **OnError**: throws <code>[LinkedAccounts.RequestProductConfigError](src/resources/linked-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.linkedAccounts.requestProductConfig(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProductConfiguration, LinkedAccounts.RequestProductConfigError&gt;</code>, with `result.value` of type <code>[ProductConfiguration](src/models/product-configuration.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateLinkedAccount(request: LinkedAccounts.UpdateLinkedAccountRequest, options?: RequestOptions): ApiPromise&lt;LinkedAccount, LinkedAccounts.UpdateLinkedAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update mutable fields of a Linked Account. email and business_type cannot be changed after creation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.linkedAccounts.updateLinkedAccount({
    accountId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type LinkedAccount
} catch (err) {
  // TODO: Handle 'err' of type LinkedAccounts.UpdateLinkedAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.linkedAccounts
  .updateLinkedAccount({ accountId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LinkedAccount
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
| <code>accountId</code> | <code>string</code> | Linked Account ID (acc_*). |
| <code>body</code> | <code>[V2AccountsRequest1](src/models/v2-accounts-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.linkedAccounts.updateLinkedAccount(request)`

- **OnSuccess**: <code>[LinkedAccount](src/models/linked-account.ts)</code>
- **OnError**: throws <code>[LinkedAccounts.UpdateLinkedAccountError](src/resources/linked-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.linkedAccounts.updateLinkedAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LinkedAccount, LinkedAccounts.UpdateLinkedAccountError&gt;</code>, with `result.value` of type <code>[LinkedAccount](src/models/linked-account.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateProductConfig(request: LinkedAccounts.UpdateProductConfigRequest, options?: RequestOptions): ApiPromise&lt;ProductConfiguration, LinkedAccounts.UpdateProductConfigError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update settlement details or other configuration for a Route product on a Linked Account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.linkedAccounts.updateProductConfig({
    accountId: "some example string",
    productId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type ProductConfiguration
} catch (err) {
  // TODO: Handle 'err' of type LinkedAccounts.UpdateProductConfigError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.linkedAccounts
  .updateProductConfig({ accountId: "some example string", productId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProductConfiguration
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
| <code>accountId</code> | <code>string</code> | Linked Account ID (acc_*). |
| <code>productId</code> | <code>string</code> | Product configuration ID (acc_prd_*). |
| <code>body</code> | <code>[V2AccountsProductsRequest1](src/models/v2-accounts-products-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.linkedAccounts.updateProductConfig(request)`

- **OnSuccess**: <code>[ProductConfiguration](src/models/product-configuration.ts)</code>
- **OnError**: throws <code>[LinkedAccounts.UpdateProductConfigError](src/resources/linked-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.linkedAccounts.updateProductConfig(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProductConfiguration, LinkedAccounts.UpdateProductConfigError&gt;</code>, with `result.value` of type <code>[ProductConfiguration](src/models/product-configuration.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateStakeholder(request: LinkedAccounts.UpdateStakeholderRequest, options?: RequestOptions): ApiPromise&lt;Stakeholder, LinkedAccounts.UpdateStakeholderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update stakeholder information for a Linked Account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.linkedAccounts.updateStakeholder({
    accountId: "some example string",
    stakeholderId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Stakeholder
} catch (err) {
  // TODO: Handle 'err' of type LinkedAccounts.UpdateStakeholderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.linkedAccounts
  .updateStakeholder({ accountId: "some example string", stakeholderId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Stakeholder
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
| <code>accountId</code> | <code>string</code> | Linked Account ID (acc_*). |
| <code>stakeholderId</code> | <code>string</code> | Stakeholder ID (sth_*). |
| <code>body</code> | <code>[V2AccountsStakeholdersRequest1](src/models/v2-accounts-stakeholders-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.linkedAccounts.updateStakeholder(request)`

- **OnSuccess**: <code>[Stakeholder](src/models/stakeholder.ts)</code>
- **OnError**: throws <code>[LinkedAccounts.UpdateStakeholderError](src/resources/linked-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.linkedAccounts.updateStakeholder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Stakeholder, LinkedAccounts.UpdateStakeholderError&gt;</code>, with `result.value` of type <code>[Stakeholder](src/models/stakeholder.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Orders

> Source: [Orders](src/resources/orders.ts)

<details>
<summary><code>createOrder(request: Orders.CreateOrderRequest, options?: RequestOptions): ApiPromise&lt;Order, Orders.CreateOrderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an order before initiating a payment. The returned order_id must be passed to Razorpay Checkout. An order can have multiple payment attempts but only one successful capture.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.createOrder({
    body: { amount: 50000, currency: "INR", receipt: "receipt_001" },
  });
  // TODO: Handle 'response' of type Order
} catch (err) {
  // TODO: Handle 'err' of type Orders.CreateOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders
  .createOrder({ body: { amount: 50000, currency: "INR", receipt: "receipt_001" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Order
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
| <code>body</code> | <code>[OrdersRequest](src/models/orders-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.createOrder(request)`

- **OnSuccess**: <code>[Order](src/models/order.ts)</code>
- **OnError**: throws <code>[Orders.CreateOrderError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.createOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Order, Orders.CreateOrderError&gt;</code>, with `result.value` of type <code>[Order](src/models/order.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchAllOrders(request?: Orders.FetchAllOrdersRequest, options?: RequestOptions): ApiPromise&lt;OrdersResponse, Orders.FetchAllOrdersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a paginated list of orders. Maximum 100 records per call.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.fetchAllOrders();
  // TODO: Handle 'response' of type OrdersResponse
} catch (err) {
  // TODO: Handle 'err' of type Orders.FetchAllOrdersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders.fetchAllOrders().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrdersResponse
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
| <code>from?</code> | <code>number</code> | Unix timestamp (seconds). Fetch records created on or after this time. |
| <code>to?</code> | <code>number</code> | Unix timestamp (seconds). Fetch records created on or before this time. |
| <code>count?</code> | <code>number</code> | Number of records to return per call. Maximum 100. Default 10.<br>**Default**: 10 |
| <code>skip?</code> | <code>number</code> | Number of records to skip. Use with count for pagination. Default 0.<br>**Default**: 0 |
| <code>authorized?</code> | <code>[Authorized](src/models/authorized.ts)</code> | 1 = orders with authorized payments only. 0 = without. |
| <code>receipt?</code> | <code>string</code> | Filter by receipt value. |
| <code>expand?</code> | <code>[ExpandRazorpayOrdersApi](src/models/expand-razorpay-orders-api.ts)[]</code> | Expand: payments, payments.card, transfers, virtual_account. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.fetchAllOrders(request)`

- **OnSuccess**: <code>[OrdersResponse](src/models/orders-response.ts)</code>
- **OnError**: throws <code>[Orders.FetchAllOrdersError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.fetchAllOrders(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrdersResponse, Orders.FetchAllOrdersError&gt;</code>, with `result.value` of type <code>[OrdersResponse](src/models/orders-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchOrder(request: Orders.FetchOrderRequest, options?: RequestOptions): ApiPromise&lt;Order, Orders.FetchOrderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the full details and current status of a specific order.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.fetchOrder({ id: "some example string" });
  // TODO: Handle 'response' of type Order
} catch (err) {
  // TODO: Handle 'err' of type Orders.FetchOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders.fetchOrder({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Order
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
| <code>id</code> | <code>string</code> | Order ID (order_*). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.fetchOrder(request)`

- **OnSuccess**: <code>[Order](src/models/order.ts)</code>
- **OnError**: throws <code>[Orders.FetchOrderError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.fetchOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Order, Orders.FetchOrderError&gt;</code>, with `result.value` of type <code>[Order](src/models/order.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchOrderPayments(request: Orders.FetchOrderPaymentsRequest, options?: RequestOptions): ApiPromise&lt;OrdersPaymentsResponse, Orders.FetchOrderPaymentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all authorized and failed payment attempts made against a specific order.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.fetchOrderPayments({ id: "some example string" });
  // TODO: Handle 'response' of type OrdersPaymentsResponse
} catch (err) {
  // TODO: Handle 'err' of type Orders.FetchOrderPaymentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders.fetchOrderPayments({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrdersPaymentsResponse
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
| <code>id</code> | <code>string</code> | Order ID (order_*). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.fetchOrderPayments(request)`

- **OnSuccess**: <code>[OrdersPaymentsResponse](src/models/orders-payments-response.ts)</code>
- **OnError**: throws <code>[Orders.FetchOrderPaymentsError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.fetchOrderPayments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrdersPaymentsResponse, Orders.FetchOrderPaymentsError&gt;</code>, with `result.value` of type <code>[OrdersPaymentsResponse](src/models/orders-payments-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateOrder(request: Orders.UpdateOrderRequest, options?: RequestOptions): ApiPromise&lt;Order, Orders.UpdateOrderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the notes field of an existing order. Only notes can be modified after creation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.updateOrder({
    id: "some example string",
    body: { notes: { key: "some example string" } },
  });
  // TODO: Handle 'response' of type Order
} catch (err) {
  // TODO: Handle 'err' of type Orders.UpdateOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders
  .updateOrder({ id: "some example string", body: { notes: { key: "some example string" } } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Order
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
| <code>id</code> | <code>string</code> | Order ID (order_*). |
| <code>body</code> | <code>[OrdersRequest1](src/models/orders-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.updateOrder(request)`

- **OnSuccess**: <code>[Order](src/models/order.ts)</code>
- **OnError**: throws <code>[Orders.UpdateOrderError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.updateOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Order, Orders.UpdateOrderError&gt;</code>, with `result.value` of type <code>[Order](src/models/order.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PartnerAccounts

> Source: [PartnerAccounts](src/resources/partner-accounts.ts)

<details>
<summary><code>deletePartnerAccount(request: PartnerAccounts.DeletePartnerAccountRequest, options?: RequestOptions): ApiPromise&lt;V2AccountsResponse, PartnerAccounts.DeletePartnerAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Suspend a sub-merchant account created via Partners API. Sets account status to 'suspended' and returns suspended_at timestamp. Authentication: OAuth access_token as username with empty password.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partnerAccounts.deletePartnerAccount({ accountId: "some example string" });
  // TODO: Handle 'response' of type V2AccountsResponse
} catch (err) {
  // TODO: Handle 'err' of type PartnerAccounts.DeletePartnerAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partnerAccounts
  .deletePartnerAccount({ accountId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V2AccountsResponse
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
| <code>accountId</code> | <code>string</code> | Account ID with prefix acc_ |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partnerAccounts.deletePartnerAccount(request)`

- **OnSuccess**: <code>[V2AccountsResponse](src/models/v2-accounts-response.ts)</code>
- **OnError**: throws <code>[PartnerAccounts.DeletePartnerAccountError](src/resources/partner-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partnerAccounts.deletePartnerAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V2AccountsResponse, PartnerAccounts.DeletePartnerAccountError&gt;</code>, with `result.value` of type <code>[V2AccountsResponse](src/models/v2-accounts-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchLinkedAccount2(request: PartnerAccounts.FetchLinkedAccount2Request, options?: RequestOptions): ApiPromise&lt;LinkedAccount, PartnerAccounts.FetchLinkedAccount2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the details of a Linked Account by its ID. Also used in Partners API to fetch sub-merchant account details (authentication: OAuth access_token).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partnerAccounts.fetchLinkedAccount2({ accountId: "some example string" });
  // TODO: Handle 'response' of type LinkedAccount
} catch (err) {
  // TODO: Handle 'err' of type PartnerAccounts.FetchLinkedAccount2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partnerAccounts
  .fetchLinkedAccount2({ accountId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LinkedAccount
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
| <code>accountId</code> | <code>string</code> | Linked Account ID (acc_*). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partnerAccounts.fetchLinkedAccount2(request)`

- **OnSuccess**: <code>[LinkedAccount](src/models/linked-account.ts)</code>
- **OnError**: throws <code>[PartnerAccounts.FetchLinkedAccount2Error](src/resources/partner-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partnerAccounts.fetchLinkedAccount2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LinkedAccount, PartnerAccounts.FetchLinkedAccount2Error&gt;</code>, with `result.value` of type <code>[LinkedAccount](src/models/linked-account.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateLinkedAccount2(request: PartnerAccounts.UpdateLinkedAccount2Request, options?: RequestOptions): ApiPromise&lt;LinkedAccount, PartnerAccounts.UpdateLinkedAccount2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update mutable fields of a Linked Account. email and business_type cannot be changed after creation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partnerAccounts.updateLinkedAccount2({
    accountId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type LinkedAccount
} catch (err) {
  // TODO: Handle 'err' of type PartnerAccounts.UpdateLinkedAccount2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partnerAccounts
  .updateLinkedAccount2({ accountId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LinkedAccount
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
| <code>accountId</code> | <code>string</code> | Linked Account ID (acc_*). |
| <code>body</code> | <code>[V2AccountsRequestRazorpayPartnerAccountsApi](src/models/v2-accounts-request-razorpay-partner-accounts-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partnerAccounts.updateLinkedAccount2(request)`

- **OnSuccess**: <code>[LinkedAccount](src/models/linked-account.ts)</code>
- **OnError**: throws <code>[PartnerAccounts.UpdateLinkedAccount2Error](src/resources/partner-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partnerAccounts.updateLinkedAccount2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LinkedAccount, PartnerAccounts.UpdateLinkedAccount2Error&gt;</code>, with `result.value` of type <code>[LinkedAccount](src/models/linked-account.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PartnerDocuments

> Source: [PartnerDocuments](src/resources/partner-documents.ts)

<details>
<summary><code>fetchAccountDocuments(request: PartnerDocuments.FetchAccountDocumentsRequest, options?: RequestOptions): ApiPromise&lt;AccountDocument, PartnerDocuments.FetchAccountDocumentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all KYC documents uploaded for a sub-merchant account. Authentication: OAuth access_token.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partnerDocuments.fetchAccountDocuments({ accountId: "some example string" });
  // TODO: Handle 'response' of type AccountDocument
} catch (err) {
  // TODO: Handle 'err' of type PartnerDocuments.FetchAccountDocumentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partnerDocuments
  .fetchAccountDocuments({ accountId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccountDocument
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
| <code>accountId</code> | <code>string</code> | Unique identifier of the linked merchant account (e.g. `acc_00000000000001`). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partnerDocuments.fetchAccountDocuments(request)`

- **OnSuccess**: <code>[AccountDocument](src/models/account-document.ts)</code>
- **OnError**: throws <code>[PartnerDocuments.FetchAccountDocumentsError](src/resources/partner-documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partnerDocuments.fetchAccountDocuments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccountDocument, PartnerDocuments.FetchAccountDocumentsError&gt;</code>, with `result.value` of type <code>[AccountDocument](src/models/account-document.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchStakeholderDocuments(request: PartnerDocuments.FetchStakeholderDocumentsRequest, options?: RequestOptions): ApiPromise&lt;StakeholderDocument, PartnerDocuments.FetchStakeholderDocumentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all KYC documents uploaded for a specific stakeholder. Authentication: OAuth access_token.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partnerDocuments.fetchStakeholderDocuments({
    accountId: "some example string",
    stakeholderId: "some example string",
  });
  // TODO: Handle 'response' of type StakeholderDocument
} catch (err) {
  // TODO: Handle 'err' of type PartnerDocuments.FetchStakeholderDocumentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partnerDocuments
  .fetchStakeholderDocuments({ accountId: "some example string", stakeholderId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StakeholderDocument
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
| <code>accountId</code> | <code>string</code> | Unique identifier of the linked merchant account (e.g. `acc_00000000000001`). |
| <code>stakeholderId</code> | <code>string</code> | Unique identifier of the stakeholder (e.g. `sth_00000000000001`). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partnerDocuments.fetchStakeholderDocuments(request)`

- **OnSuccess**: <code>[StakeholderDocument](src/models/stakeholder-document.ts)</code>
- **OnError**: throws <code>[PartnerDocuments.FetchStakeholderDocumentsError](src/resources/partner-documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partnerDocuments.fetchStakeholderDocuments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StakeholderDocument, PartnerDocuments.FetchStakeholderDocumentsError&gt;</code>, with `result.value` of type <code>[StakeholderDocument](src/models/stakeholder-document.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadAccountDocuments(request: PartnerDocuments.UploadAccountDocumentsRequest, options?: RequestOptions): ApiPromise&lt;AccountDocument, PartnerDocuments.UploadAccountDocumentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload KYC documents for business identity and address verification. Multipart form upload. JPG/PNG max 4MB, PDF max 2MB. Authentication: OAuth access_token.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partnerDocuments.uploadAccountDocuments({ accountId: "some example string" });
  // TODO: Handle 'response' of type AccountDocument
} catch (err) {
  // TODO: Handle 'err' of type PartnerDocuments.UploadAccountDocumentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partnerDocuments
  .uploadAccountDocuments({ accountId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccountDocument
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
| <code>accountId</code> | <code>string</code> | Unique identifier of the linked merchant account (e.g. `acc_00000000000001`). |
| <code>documentType?</code> | <code>[DocumentType](src/models/document-type.ts)</code> | - |
| <code>file?</code> | <code>FileInput</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partnerDocuments.uploadAccountDocuments(request)`

- **OnSuccess**: <code>[AccountDocument](src/models/account-document.ts)</code>
- **OnError**: throws <code>[PartnerDocuments.UploadAccountDocumentsError](src/resources/partner-documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partnerDocuments.uploadAccountDocuments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccountDocument, PartnerDocuments.UploadAccountDocumentsError&gt;</code>, with `result.value` of type <code>[AccountDocument](src/models/account-document.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadStakeholderDocuments(request: PartnerDocuments.UploadStakeholderDocumentsRequest, options?: RequestOptions): ApiPromise&lt;StakeholderDocument, PartnerDocuments.UploadStakeholderDocumentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload identity and address verification documents for a stakeholder. Supports PAN, Aadhaar (front/back), passport (front/back), voter ID (front/back). Multipart form upload. JPG/PNG max 4MB, PDF max 2MB. Authentication: OAuth access_token.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partnerDocuments.uploadStakeholderDocuments({
    accountId: "some example string",
    stakeholderId: "some example string",
  });
  // TODO: Handle 'response' of type StakeholderDocument
} catch (err) {
  // TODO: Handle 'err' of type PartnerDocuments.UploadStakeholderDocumentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partnerDocuments
  .uploadStakeholderDocuments({ accountId: "some example string", stakeholderId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StakeholderDocument
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
| <code>accountId</code> | <code>string</code> | Unique identifier of the linked merchant account (e.g. `acc_00000000000001`). |
| <code>stakeholderId</code> | <code>string</code> | Unique identifier of the stakeholder (e.g. `sth_00000000000001`). |
| <code>documentType?</code> | <code>[DocumentType1](src/models/document-type1.ts)</code> | - |
| <code>file?</code> | <code>FileInput</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partnerDocuments.uploadStakeholderDocuments(request)`

- **OnSuccess**: <code>[StakeholderDocument](src/models/stakeholder-document.ts)</code>
- **OnError**: throws <code>[PartnerDocuments.UploadStakeholderDocumentsError](src/resources/partner-documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partnerDocuments.uploadStakeholderDocuments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StakeholderDocument, PartnerDocuments.UploadStakeholderDocumentsError&gt;</code>, with `result.value` of type <code>[StakeholderDocument](src/models/stakeholder-document.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PartnerStakeholders

> Source: [PartnerStakeholders](src/resources/partner-stakeholders.ts)

<details>
<summary><code>createStakeholder2(request: PartnerStakeholders.CreateStakeholder2Request, options?: RequestOptions): ApiPromise&lt;StakeholderRazorpayPartnerStakeholdersApi, PartnerStakeholders.CreateStakeholder2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a business owner or director to a Linked Account. Only one stakeholder is allowed per Route Linked Account. PAN 4th character must be 'P' (individual PAN).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partnerStakeholders.createStakeholder2({
    accountId: "some example string",
    body: { name: "some example string", email: "some example string" },
  });
  // TODO: Handle 'response' of type StakeholderRazorpayPartnerStakeholdersApi
} catch (err) {
  // TODO: Handle 'err' of type PartnerStakeholders.CreateStakeholder2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partnerStakeholders
  .createStakeholder2({
    accountId: "some example string",
    body: { name: "some example string", email: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StakeholderRazorpayPartnerStakeholdersApi
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
| <code>accountId</code> | <code>string</code> | Unique identifier of the linked merchant account (e.g. `acc_00000000000001`). |
| <code>body</code> | <code>[V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApi](src/models/v2-accounts-stakeholders-request-razorpay-partner-stakeholders-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partnerStakeholders.createStakeholder2(request)`

- **OnSuccess**: <code>[StakeholderRazorpayPartnerStakeholdersApi](src/models/stakeholder-razorpay-partner-stakeholders-api.ts)</code>
- **OnError**: throws <code>[PartnerStakeholders.CreateStakeholder2Error](src/resources/partner-stakeholders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partnerStakeholders.createStakeholder2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StakeholderRazorpayPartnerStakeholdersApi, PartnerStakeholders.CreateStakeholder2Error&gt;</code>, with `result.value` of type <code>[StakeholderRazorpayPartnerStakeholdersApi](src/models/stakeholder-razorpay-partner-stakeholders-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchAllStakeholders(request: PartnerStakeholders.FetchAllStakeholdersRequest, options?: RequestOptions): ApiPromise&lt;V2AccountsStakeholdersResponse, PartnerStakeholders.FetchAllStakeholdersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all stakeholders associated with a sub-merchant account. Partners API only — Route allows only 1 stakeholder per account. Authentication: OAuth access_token.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partnerStakeholders.fetchAllStakeholders({
    accountId: "some example string",
  });
  // TODO: Handle 'response' of type V2AccountsStakeholdersResponse
} catch (err) {
  // TODO: Handle 'err' of type PartnerStakeholders.FetchAllStakeholdersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partnerStakeholders
  .fetchAllStakeholders({ accountId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V2AccountsStakeholdersResponse
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
| <code>accountId</code> | <code>string</code> | Unique identifier of the linked merchant account (e.g. `acc_00000000000001`). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partnerStakeholders.fetchAllStakeholders(request)`

- **OnSuccess**: <code>[V2AccountsStakeholdersResponse](src/models/v2-accounts-stakeholders-response.ts)</code>
- **OnError**: throws <code>[PartnerStakeholders.FetchAllStakeholdersError](src/resources/partner-stakeholders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partnerStakeholders.fetchAllStakeholders(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V2AccountsStakeholdersResponse, PartnerStakeholders.FetchAllStakeholdersError&gt;</code>, with `result.value` of type <code>[V2AccountsStakeholdersResponse](src/models/v2-accounts-stakeholders-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateStakeholder2(request: PartnerStakeholders.UpdateStakeholder2Request, options?: RequestOptions): ApiPromise&lt;StakeholderRazorpayPartnerStakeholdersApi, PartnerStakeholders.UpdateStakeholder2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update stakeholder information for a Linked Account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partnerStakeholders.updateStakeholder2({
    accountId: "some example string",
    stakeholderId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type StakeholderRazorpayPartnerStakeholdersApi
} catch (err) {
  // TODO: Handle 'err' of type PartnerStakeholders.UpdateStakeholder2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partnerStakeholders
  .updateStakeholder2({ accountId: "some example string", stakeholderId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StakeholderRazorpayPartnerStakeholdersApi
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
| <code>accountId</code> | <code>string</code> | Linked Account ID (acc_*). |
| <code>stakeholderId</code> | <code>string</code> | Stakeholder ID (sth_*). |
| <code>body</code> | <code>[V2AccountsStakeholdersRequest1](src/models/v2-accounts-stakeholders-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partnerStakeholders.updateStakeholder2(request)`

- **OnSuccess**: <code>[StakeholderRazorpayPartnerStakeholdersApi](src/models/stakeholder-razorpay-partner-stakeholders-api.ts)</code>
- **OnError**: throws <code>[PartnerStakeholders.UpdateStakeholder2Error](src/resources/partner-stakeholders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partnerStakeholders.updateStakeholder2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StakeholderRazorpayPartnerStakeholdersApi, PartnerStakeholders.UpdateStakeholder2Error&gt;</code>, with `result.value` of type <code>[StakeholderRazorpayPartnerStakeholdersApi](src/models/stakeholder-razorpay-partner-stakeholders-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PartnerWebhooks

> Source: [PartnerWebhooks](src/resources/partner-webhooks.ts)

<details>
<summary><code>createPartnerWebhook(request: PartnerWebhooks.CreatePartnerWebhookRequest, options?: RequestOptions): ApiPromise&lt;PartnerWebhook, PartnerWebhooks.CreatePartnerWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a webhook to receive events for a sub-merchant account. Maximum 30 webhooks per account. Authentication: OAuth access_token.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partnerWebhooks.createPartnerWebhook({
    accountId: "some example string",
    body: { url: "some example string", events: { key: true } },
  });
  // TODO: Handle 'response' of type PartnerWebhook
} catch (err) {
  // TODO: Handle 'err' of type PartnerWebhooks.CreatePartnerWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partnerWebhooks
  .createPartnerWebhook({
    accountId: "some example string",
    body: { url: "some example string", events: { key: true } },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PartnerWebhook
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
| <code>accountId</code> | <code>string</code> | Unique identifier of the linked merchant account (e.g. `acc_00000000000001`). |
| <code>body</code> | <code>[V2AccountsWebhooksRequest](src/models/v2-accounts-webhooks-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partnerWebhooks.createPartnerWebhook(request)`

- **OnSuccess**: <code>[PartnerWebhook](src/models/partner-webhook.ts)</code>
- **OnError**: throws <code>[PartnerWebhooks.CreatePartnerWebhookError](src/resources/partner-webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partnerWebhooks.createPartnerWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PartnerWebhook, PartnerWebhooks.CreatePartnerWebhookError&gt;</code>, with `result.value` of type <code>[PartnerWebhook](src/models/partner-webhook.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deletePartnerWebhook(request: PartnerWebhooks.DeletePartnerWebhookRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, PartnerWebhooks.DeletePartnerWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a webhook for a sub-merchant account. Returns empty array on success. Authentication: OAuth access_token.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partnerWebhooks.deletePartnerWebhook({
    accountId: "some example string",
    webhookId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type PartnerWebhooks.DeletePartnerWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partnerWebhooks
  .deletePartnerWebhook({ accountId: "some example string", webhookId: "some example string" })
  .asApiResult();
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
| <code>accountId</code> | <code>string</code> | Unique identifier of the linked merchant account (e.g. `acc_00000000000001`). |
| <code>webhookId</code> | <code>string</code> | Unique identifier of the webhook (e.g. `we_00000000000001`). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partnerWebhooks.deletePartnerWebhook(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[PartnerWebhooks.DeletePartnerWebhookError](src/resources/partner-webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partnerWebhooks.deletePartnerWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, PartnerWebhooks.DeletePartnerWebhookError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchPartnerWebhook(request: PartnerWebhooks.FetchPartnerWebhookRequest, options?: RequestOptions): ApiPromise&lt;PartnerWebhook, PartnerWebhooks.FetchPartnerWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve details of a specific webhook for a sub-merchant account. Authentication: OAuth access_token.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partnerWebhooks.fetchPartnerWebhook({
    accountId: "some example string",
    webhookId: "some example string",
  });
  // TODO: Handle 'response' of type PartnerWebhook
} catch (err) {
  // TODO: Handle 'err' of type PartnerWebhooks.FetchPartnerWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partnerWebhooks
  .fetchPartnerWebhook({ accountId: "some example string", webhookId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PartnerWebhook
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
| <code>accountId</code> | <code>string</code> | Unique identifier of the linked merchant account (e.g. `acc_00000000000001`). |
| <code>webhookId</code> | <code>string</code> | Unique identifier of the webhook (e.g. `we_00000000000001`). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partnerWebhooks.fetchPartnerWebhook(request)`

- **OnSuccess**: <code>[PartnerWebhook](src/models/partner-webhook.ts)</code>
- **OnError**: throws <code>[PartnerWebhooks.FetchPartnerWebhookError](src/resources/partner-webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partnerWebhooks.fetchPartnerWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PartnerWebhook, PartnerWebhooks.FetchPartnerWebhookError&gt;</code>, with `result.value` of type <code>[PartnerWebhook](src/models/partner-webhook.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPartnerWebhooks(request: PartnerWebhooks.ListPartnerWebhooksRequest, options?: RequestOptions): ApiPromise&lt;V2AccountsWebhooksResponse, PartnerWebhooks.ListPartnerWebhooksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all webhooks configured for a sub-merchant account. Authentication: OAuth access_token.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partnerWebhooks.listPartnerWebhooks({ accountId: "some example string" });
  // TODO: Handle 'response' of type V2AccountsWebhooksResponse
} catch (err) {
  // TODO: Handle 'err' of type PartnerWebhooks.ListPartnerWebhooksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partnerWebhooks
  .listPartnerWebhooks({ accountId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V2AccountsWebhooksResponse
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
| <code>accountId</code> | <code>string</code> | Unique identifier of the linked merchant account (e.g. `acc_00000000000001`). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partnerWebhooks.listPartnerWebhooks(request)`

- **OnSuccess**: <code>[V2AccountsWebhooksResponse](src/models/v2-accounts-webhooks-response.ts)</code>
- **OnError**: throws <code>[PartnerWebhooks.ListPartnerWebhooksError](src/resources/partner-webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partnerWebhooks.listPartnerWebhooks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V2AccountsWebhooksResponse, PartnerWebhooks.ListPartnerWebhooksError&gt;</code>, with `result.value` of type <code>[V2AccountsWebhooksResponse](src/models/v2-accounts-webhooks-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePartnerWebhook(request: PartnerWebhooks.UpdatePartnerWebhookRequest, options?: RequestOptions): ApiPromise&lt;PartnerWebhook, PartnerWebhooks.UpdatePartnerWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update webhook URL, events, secret, or active status for a sub-merchant account. Authentication: OAuth access_token.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partnerWebhooks.updatePartnerWebhook({
    accountId: "some example string",
    webhookId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type PartnerWebhook
} catch (err) {
  // TODO: Handle 'err' of type PartnerWebhooks.UpdatePartnerWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partnerWebhooks
  .updatePartnerWebhook({ accountId: "some example string", webhookId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PartnerWebhook
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
| <code>accountId</code> | <code>string</code> | Unique identifier of the linked merchant account (e.g. `acc_00000000000001`). |
| <code>webhookId</code> | <code>string</code> | Unique identifier of the webhook (e.g. `we_00000000000001`). |
| <code>body</code> | <code>[PartnerWebhook](src/models/partner-webhook.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partnerWebhooks.updatePartnerWebhook(request)`

- **OnSuccess**: <code>[PartnerWebhook](src/models/partner-webhook.ts)</code>
- **OnError**: throws <code>[PartnerWebhooks.UpdatePartnerWebhookError](src/resources/partner-webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partnerWebhooks.updatePartnerWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PartnerWebhook, PartnerWebhooks.UpdatePartnerWebhookError&gt;</code>, with `result.value` of type <code>[PartnerWebhook](src/models/partner-webhook.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentDowntimes

> Source: [PaymentDowntimes](src/resources/payment-downtimes.ts)

<details>
<summary><code>fetchPaymentDowntime(request: PaymentDowntimes.FetchPaymentDowntimeRequest, options?: RequestOptions): ApiPromise&lt;PaymentDowntime, PaymentDowntimes.FetchPaymentDowntimeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve details of a specific payment downtime event.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentDowntimes.fetchPaymentDowntime({ id: "some example string" });
  // TODO: Handle 'response' of type PaymentDowntime
} catch (err) {
  // TODO: Handle 'err' of type PaymentDowntimes.FetchPaymentDowntimeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentDowntimes
  .fetchPaymentDowntime({ id: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentDowntime
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
| <code>id</code> | <code>string</code> | Downtime identifier. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentDowntimes.fetchPaymentDowntime(request)`

- **OnSuccess**: <code>[PaymentDowntime](src/models/payment-downtime.ts)</code>
- **OnError**: throws <code>[PaymentDowntimes.FetchPaymentDowntimeError](src/resources/payment-downtimes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentDowntimes.fetchPaymentDowntime(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentDowntime, PaymentDowntimes.FetchPaymentDowntimeError&gt;</code>, with `result.value` of type <code>[PaymentDowntime](src/models/payment-downtime.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchPaymentDowntimes(options?: RequestOptions): ApiPromise&lt;PaymentsDowntimesResponse, PaymentDowntimes.FetchPaymentDowntimesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve current and upcoming payment method downtimes for cards, netbanking, and UPI. Use to surface degraded methods in checkout UI.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentDowntimes.fetchPaymentDowntimes();
  // TODO: Handle 'response' of type PaymentsDowntimesResponse
} catch (err) {
  // TODO: Handle 'err' of type PaymentDowntimes.FetchPaymentDowntimesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentDowntimes.fetchPaymentDowntimes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentsDowntimesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentDowntimes.fetchPaymentDowntimes()`

- **OnSuccess**: <code>[PaymentsDowntimesResponse](src/models/payments-downtimes-response.ts)</code>
- **OnError**: throws <code>[PaymentDowntimes.FetchPaymentDowntimesError](src/resources/payment-downtimes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentDowntimes.fetchPaymentDowntimes().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentsDowntimesResponse, PaymentDowntimes.FetchPaymentDowntimesError&gt;</code>, with `result.value` of type <code>[PaymentsDowntimesResponse](src/models/payments-downtimes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentLinks

> Source: [PaymentLinks](src/resources/payment-links.ts)

<details>
<summary><code>cancelPaymentLink(request: PaymentLinks.CancelPaymentLinkRequest, options?: RequestOptions): ApiPromise&lt;PaymentLink, PaymentLinks.CancelPaymentLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel a payment link. Only links in 'created' status can be cancelled. Paid, partially paid, and already expired links cannot be cancelled.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentLinks.cancelPaymentLink({ id: "some example string" });
  // TODO: Handle 'response' of type PaymentLink
} catch (err) {
  // TODO: Handle 'err' of type PaymentLinks.CancelPaymentLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentLinks.cancelPaymentLink({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentLink
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
| <code>id</code> | <code>string</code> | Payment Link ID (plink_*). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentLinks.cancelPaymentLink(request)`

- **OnSuccess**: <code>[PaymentLink](src/models/payment-link.ts)</code>
- **OnError**: throws <code>[PaymentLinks.CancelPaymentLinkError](src/resources/payment-links.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentLinks.cancelPaymentLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentLink, PaymentLinks.CancelPaymentLinkError&gt;</code>, with `result.value` of type <code>[PaymentLink](src/models/payment-link.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createPaymentLink(request: PaymentLinks.CreatePaymentLinkRequest, options?: RequestOptions): ApiPromise&lt;PaymentLink, PaymentLinks.CreatePaymentLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a shareable payment link to collect payments via SMS and email. Supports standard links (all payment methods) and UPI-only links (set upi_link=true). UPI links are not available in test mode. Partial payments are not supported for UPI links. Links expire after 6 months by default.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentLinks.createPaymentLink({
    body: {
      amount: 50000,
      currency: "INR",
      description: "Payment for Order #1234",
      customer: { name: "Aisha Sharma", email: "aisha@example.com", contact: "+919876543210" },
      notify: { sms: true, email: true },
      reminderEnable: true,
    },
  });
  // TODO: Handle 'response' of type PaymentLink
} catch (err) {
  // TODO: Handle 'err' of type PaymentLinks.CreatePaymentLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentLinks
  .createPaymentLink({
    body: {
      amount: 50000,
      currency: "INR",
      description: "Payment for Order #1234",
      customer: { name: "Aisha Sharma", email: "aisha@example.com", contact: "+919876543210" },
      notify: { sms: true, email: true },
      reminderEnable: true,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentLink
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
| <code>body</code> | <code>[PaymentLinksRequest](src/models/payment-links-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentLinks.createPaymentLink(request)`

- **OnSuccess**: <code>[PaymentLink](src/models/payment-link.ts)</code>
- **OnError**: throws <code>[PaymentLinks.CreatePaymentLinkError](src/resources/payment-links.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentLinks.createPaymentLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentLink, PaymentLinks.CreatePaymentLinkError&gt;</code>, with `result.value` of type <code>[PaymentLink](src/models/payment-link.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchAllPaymentLinks(request?: PaymentLinks.FetchAllPaymentLinksRequest, options?: RequestOptions): ApiPromise&lt;PaymentLinksResponse, PaymentLinks.FetchAllPaymentLinksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all payment links. Filter by payment_id or reference_id to narrow results.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentLinks.fetchAllPaymentLinks();
  // TODO: Handle 'response' of type PaymentLinksResponse
} catch (err) {
  // TODO: Handle 'err' of type PaymentLinks.FetchAllPaymentLinksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentLinks.fetchAllPaymentLinks().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentLinksResponse
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
| <code>paymentId?</code> | <code>string</code> | Filter by associated payment ID. |
| <code>referenceId?</code> | <code>string</code> | Filter by your custom reference number. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentLinks.fetchAllPaymentLinks(request)`

- **OnSuccess**: <code>[PaymentLinksResponse](src/models/payment-links-response.ts)</code>
- **OnError**: throws <code>[PaymentLinks.FetchAllPaymentLinksError](src/resources/payment-links.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentLinks.fetchAllPaymentLinks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentLinksResponse, PaymentLinks.FetchAllPaymentLinksError&gt;</code>, with `result.value` of type <code>[PaymentLinksResponse](src/models/payment-links-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchPaymentLink(request: PaymentLinks.FetchPaymentLinkRequest, options?: RequestOptions): ApiPromise&lt;PaymentLink, PaymentLinks.FetchPaymentLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve full details of a specific payment link.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentLinks.fetchPaymentLink({ id: "some example string" });
  // TODO: Handle 'response' of type PaymentLink
} catch (err) {
  // TODO: Handle 'err' of type PaymentLinks.FetchPaymentLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentLinks.fetchPaymentLink({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentLink
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
| <code>id</code> | <code>string</code> | Payment Link ID (plink_*). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentLinks.fetchPaymentLink(request)`

- **OnSuccess**: <code>[PaymentLink](src/models/payment-link.ts)</code>
- **OnError**: throws <code>[PaymentLinks.FetchPaymentLinkError](src/resources/payment-links.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentLinks.fetchPaymentLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentLink, PaymentLinks.FetchPaymentLinkError&gt;</code>, with `result.value` of type <code>[PaymentLink](src/models/payment-link.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resendPaymentLinkNotification(request: PaymentLinks.ResendPaymentLinkNotificationRequest, options?: RequestOptions): ApiPromise&lt;PaymentLinksNotifyByResponse, PaymentLinks.ResendPaymentLinkNotificationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send or resend a payment link notification to the customer via SMS or email.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentLinks.resendPaymentLinkNotification({
    id: "some example string",
    medium: Medium.Sms,
  });
  // TODO: Handle 'response' of type PaymentLinksNotifyByResponse
} catch (err) {
  // TODO: Handle 'err' of type PaymentLinks.ResendPaymentLinkNotificationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentLinks
  .resendPaymentLinkNotification({ id: "some example string", medium: Medium.Sms })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentLinksNotifyByResponse
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
| <code>id</code> | <code>string</code> | Payment Link ID (plink_*). |
| <code>medium</code> | <code>[Medium](src/models/medium.ts)</code> | Notification medium. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentLinks.resendPaymentLinkNotification(request)`

- **OnSuccess**: <code>[PaymentLinksNotifyByResponse](src/models/payment-links-notify-by-response.ts)</code>
- **OnError**: throws <code>[PaymentLinks.ResendPaymentLinkNotificationError](src/resources/payment-links.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentLinks.resendPaymentLinkNotification(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentLinksNotifyByResponse, PaymentLinks.ResendPaymentLinkNotificationError&gt;</code>, with `result.value` of type <code>[PaymentLinksNotifyByResponse](src/models/payment-links-notify-by-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePaymentLink(request: PaymentLinks.UpdatePaymentLinkRequest, options?: RequestOptions): ApiPromise&lt;PaymentLink, PaymentLinks.UpdatePaymentLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing payment link. Updates are only allowed when the link is in 'created' or 'partially_paid' status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentLinks.updatePaymentLink({ id: "some example string", body: {} });
  // TODO: Handle 'response' of type PaymentLink
} catch (err) {
  // TODO: Handle 'err' of type PaymentLinks.UpdatePaymentLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentLinks
  .updatePaymentLink({ id: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentLink
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
| <code>id</code> | <code>string</code> | Payment Link ID (plink_*). |
| <code>body</code> | <code>[PaymentLinksRequest1](src/models/payment-links-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentLinks.updatePaymentLink(request)`

- **OnSuccess**: <code>[PaymentLink](src/models/payment-link.ts)</code>
- **OnError**: throws <code>[PaymentLinks.UpdatePaymentLinkError](src/resources/payment-links.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentLinks.updatePaymentLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentLink, PaymentLinks.UpdatePaymentLinkError&gt;</code>, with `result.value` of type <code>[PaymentLink](src/models/payment-link.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Payments

> Source: [Payments](src/resources/payments.ts)

<details>
<summary><code>capturePayment(request: Payments.CapturePaymentRequest, options?: RequestOptions): ApiPromise&lt;PaymentRazorpayPaymentsApi, Payments.CapturePaymentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Capture an authorized payment to collect funds. Must be called within the capture window (default 5 days). Amount must exactly equal authorized amount unless partial capture is enabled.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.capturePayment({
    id: "some example string",
    body: { amount: 50000, currency: "INR" },
  });
  // TODO: Handle 'response' of type PaymentRazorpayPaymentsApi
} catch (err) {
  // TODO: Handle 'err' of type Payments.CapturePaymentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payments
  .capturePayment({ id: "some example string", body: { amount: 50000, currency: "INR" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentRazorpayPaymentsApi
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
| <code>id</code> | <code>string</code> | Payment ID (pay_*). Must be in 'authorized' status. |
| <code>body</code> | <code>[PaymentsCaptureRequest](src/models/payments-capture-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payments.capturePayment(request)`

- **OnSuccess**: <code>[PaymentRazorpayPaymentsApi](src/models/payment-razorpay-payments-api.ts)</code>
- **OnError**: throws <code>[Payments.CapturePaymentError](src/resources/payments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payments.capturePayment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentRazorpayPaymentsApi, Payments.CapturePaymentError&gt;</code>, with `result.value` of type <code>[PaymentRazorpayPaymentsApi](src/models/payment-razorpay-payments-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchAllPayments(request?: Payments.FetchAllPaymentsRequest, options?: RequestOptions): ApiPromise&lt;PaymentsResponse, Payments.FetchAllPaymentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a paginated list of payments. Maximum 100 per call.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.fetchAllPayments();
  // TODO: Handle 'response' of type PaymentsResponse
} catch (err) {
  // TODO: Handle 'err' of type Payments.FetchAllPaymentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payments.fetchAllPayments().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentsResponse
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
| <code>from?</code> | <code>number</code> | Unix timestamp (seconds). Fetch records created on or after this time. |
| <code>to?</code> | <code>number</code> | Unix timestamp (seconds). Fetch records created on or before this time. |
| <code>count?</code> | <code>number</code> | Number of records to return per call. Maximum 100. Default 10.<br>**Default**: 10 |
| <code>skip?</code> | <code>number</code> | Number of records to skip. Use with count for pagination. Default 0.<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payments.fetchAllPayments(request)`

- **OnSuccess**: <code>[PaymentsResponse](src/models/payments-response.ts)</code>
- **OnError**: throws <code>[Payments.FetchAllPaymentsError](src/resources/payments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payments.fetchAllPayments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentsResponse, Payments.FetchAllPaymentsError&gt;</code>, with `result.value` of type <code>[PaymentsResponse](src/models/payments-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchPayment(request: Payments.FetchPaymentRequest, options?: RequestOptions): ApiPromise&lt;PaymentRazorpayPaymentsApi, Payments.FetchPaymentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve full details and current status of a specific payment. Always re-fetch before acting — status can change.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.fetchPayment({ id: "some example string" });
  // TODO: Handle 'response' of type PaymentRazorpayPaymentsApi
} catch (err) {
  // TODO: Handle 'err' of type Payments.FetchPaymentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payments.fetchPayment({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentRazorpayPaymentsApi
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
| <code>id</code> | <code>string</code> | Payment ID (pay_*). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payments.fetchPayment(request)`

- **OnSuccess**: <code>[PaymentRazorpayPaymentsApi](src/models/payment-razorpay-payments-api.ts)</code>
- **OnError**: throws <code>[Payments.FetchPaymentError](src/resources/payments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payments.fetchPayment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentRazorpayPaymentsApi, Payments.FetchPaymentError&gt;</code>, with `result.value` of type <code>[PaymentRazorpayPaymentsApi](src/models/payment-razorpay-payments-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePayment(request: Payments.UpdatePaymentRequest, options?: RequestOptions): ApiPromise&lt;PaymentRazorpayPaymentsApi, Payments.UpdatePaymentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the notes field of a payment. Only notes can be modified.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.updatePayment({
    id: "some example string",
    body: { notes: { key: "some example string" } },
  });
  // TODO: Handle 'response' of type PaymentRazorpayPaymentsApi
} catch (err) {
  // TODO: Handle 'err' of type Payments.UpdatePaymentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payments
  .updatePayment({ id: "some example string", body: { notes: { key: "some example string" } } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentRazorpayPaymentsApi
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
| <code>id</code> | <code>string</code> | Payment ID (pay_*). |
| <code>body</code> | <code>[PaymentsRequest](src/models/payments-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payments.updatePayment(request)`

- **OnSuccess**: <code>[PaymentRazorpayPaymentsApi](src/models/payment-razorpay-payments-api.ts)</code>
- **OnError**: throws <code>[Payments.UpdatePaymentError](src/resources/payments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payments.updatePayment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentRazorpayPaymentsApi, Payments.UpdatePaymentError&gt;</code>, with `result.value` of type <code>[PaymentRazorpayPaymentsApi](src/models/payment-razorpay-payments-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Plans

> Source: [Plans](src/resources/plans.ts)

<details>
<summary><code>createPlan(request: Plans.CreatePlanRequest, options?: RequestOptions): ApiPromise&lt;Plan, Plans.CreatePlanError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Define a recurring billing plan with a fixed period, interval, and amount. Plans are reusable across multiple subscriptions. Once created, plan details cannot be modified.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.plans.createPlan({
    body: {
      period: Period1.Monthly,
      interval: 1,
      item: { name: "Pro Plan", description: "Monthly SaaS subscription", amount: 49900, currency: "INR" },
    },
  });
  // TODO: Handle 'response' of type Plan
} catch (err) {
  // TODO: Handle 'err' of type Plans.CreatePlanError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.plans
  .createPlan({
    body: {
      period: Period1.Monthly,
      interval: 1,
      item: { name: "Pro Plan", description: "Monthly SaaS subscription", amount: 49900, currency: "INR" },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Plan
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
| <code>body</code> | <code>[PlansRequest](src/models/plans-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.plans.createPlan(request)`

- **OnSuccess**: <code>[Plan](src/models/plan.ts)</code>
- **OnError**: throws <code>[Plans.CreatePlanError](src/resources/plans.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.plans.createPlan(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Plan, Plans.CreatePlanError&gt;</code>, with `result.value` of type <code>[Plan](src/models/plan.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchPlan(request: Plans.FetchPlanRequest, options?: RequestOptions): ApiPromise&lt;Plan, Plans.FetchPlanError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details of a specific billing plan.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.plans.fetchPlan({ id: "some example string" });
  // TODO: Handle 'response' of type Plan
} catch (err) {
  // TODO: Handle 'err' of type Plans.FetchPlanError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.plans.fetchPlan({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Plan
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
| <code>id</code> | <code>string</code> | Plan ID (plan_*). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.plans.fetchPlan(request)`

- **OnSuccess**: <code>[Plan](src/models/plan.ts)</code>
- **OnError**: throws <code>[Plans.FetchPlanError](src/resources/plans.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.plans.fetchPlan(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Plan, Plans.FetchPlanError&gt;</code>, with `result.value` of type <code>[Plan](src/models/plan.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPlans(request?: Plans.ListPlansRequest, options?: RequestOptions): ApiPromise&lt;PlansResponse, Plans.ListPlansError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all billing plans. Supports pagination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.plans.listPlans();
  // TODO: Handle 'response' of type PlansResponse
} catch (err) {
  // TODO: Handle 'err' of type Plans.ListPlansError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.plans.listPlans().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlansResponse
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
| <code>count?</code> | <code>number</code> | Number of records to return per call. Maximum 100. Default 10.<br>**Default**: 10 |
| <code>skip?</code> | <code>number</code> | Number of records to skip. Use with count for pagination. Default 0.<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.plans.listPlans(request)`

- **OnSuccess**: <code>[PlansResponse](src/models/plans-response.ts)</code>
- **OnError**: throws <code>[Plans.ListPlansError](src/resources/plans.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.plans.listPlans(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlansResponse, Plans.ListPlansError&gt;</code>, with `result.value` of type <code>[PlansResponse](src/models/plans-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## QrCodes

> Source: [QrCodes](src/resources/qr-codes.ts)

<details>
<summary><code>closeQrCode(request: QrCodes.CloseQrCodeRequest, options?: RequestOptions): ApiPromise&lt;QrCode, QrCodes.CloseQrCodeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deactivate a QR code to stop accepting new payments. Once closed, the QR code cannot be reopened.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qrCodes.closeQrCode({ id: "some example string" });
  // TODO: Handle 'response' of type QrCode
} catch (err) {
  // TODO: Handle 'err' of type QrCodes.CloseQrCodeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qrCodes.closeQrCode({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type QrCode
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
| <code>id</code> | <code>string</code> | QR code ID (qr_*). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qrCodes.closeQrCode(request)`

- **OnSuccess**: <code>[QrCode](src/models/qr-code.ts)</code>
- **OnError**: throws <code>[QrCodes.CloseQrCodeError](src/resources/qr-codes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qrCodes.closeQrCode(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;QrCode, QrCodes.CloseQrCodeError&gt;</code>, with `result.value` of type <code>[QrCode](src/models/qr-code.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createQrCode(request: QrCodes.CreateQrCodeRequest, options?: RequestOptions): ApiPromise&lt;QrCode, QrCodes.CreateQrCodeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a UPI QR code for accepting digital payments. Only upi_qr type is supported (on-demand feature; requires merchant activation). single_use QR codes require fixed_amount=true and close_by maximum is 45 days. multiple_use QR codes have no expiry restriction.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qrCodes.createQrCode({
    body: { name: "some example string", usage: Usage.SingleUse, fixedAmount: true },
  });
  // TODO: Handle 'response' of type QrCode
} catch (err) {
  // TODO: Handle 'err' of type QrCodes.CreateQrCodeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qrCodes
  .createQrCode({ body: { name: "some example string", usage: Usage.SingleUse, fixedAmount: true } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type QrCode
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
| <code>body</code> | <code>[PaymentsQrCodesRequest](src/models/payments-qr-codes-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qrCodes.createQrCode(request)`

- **OnSuccess**: <code>[QrCode](src/models/qr-code.ts)</code>
- **OnError**: throws <code>[QrCodes.CreateQrCodeError](src/resources/qr-codes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qrCodes.createQrCode(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;QrCode, QrCodes.CreateQrCodeError&gt;</code>, with `result.value` of type <code>[QrCode](src/models/qr-code.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchAllQrCodes(request?: QrCodes.FetchAllQrCodesRequest, options?: RequestOptions): ApiPromise&lt;PaymentsQrCodesResponse, QrCodes.FetchAllQrCodesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all QR codes. Filter by customer_id or payment_id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qrCodes.fetchAllQrCodes();
  // TODO: Handle 'response' of type PaymentsQrCodesResponse
} catch (err) {
  // TODO: Handle 'err' of type QrCodes.FetchAllQrCodesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qrCodes.fetchAllQrCodes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentsQrCodesResponse
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
| <code>from?</code> | <code>number</code> | Unix timestamp (seconds). Fetch records created on or after this time. |
| <code>to?</code> | <code>number</code> | Unix timestamp (seconds). Fetch records created on or before this time. |
| <code>count?</code> | <code>number</code> | Number of records to return per call. Maximum 100. Default 10.<br>**Default**: 10 |
| <code>skip?</code> | <code>number</code> | Number of records to skip. Use with count for pagination. Default 0.<br>**Default**: 0 |
| <code>customerId?</code> | <code>string</code> | Filter by customer ID (cust_*). |
| <code>paymentId?</code> | <code>string</code> | Filter QR codes associated with a specific payment. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qrCodes.fetchAllQrCodes(request)`

- **OnSuccess**: <code>[PaymentsQrCodesResponse](src/models/payments-qr-codes-response.ts)</code>
- **OnError**: throws <code>[QrCodes.FetchAllQrCodesError](src/resources/qr-codes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qrCodes.fetchAllQrCodes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentsQrCodesResponse, QrCodes.FetchAllQrCodesError&gt;</code>, with `result.value` of type <code>[PaymentsQrCodesResponse](src/models/payments-qr-codes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchQrCode(request: QrCodes.FetchQrCodeRequest, options?: RequestOptions): ApiPromise&lt;QrCode, QrCodes.FetchQrCodeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve details of a specific QR code including payment counts and status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qrCodes.fetchQrCode({ id: "some example string" });
  // TODO: Handle 'response' of type QrCode
} catch (err) {
  // TODO: Handle 'err' of type QrCodes.FetchQrCodeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qrCodes.fetchQrCode({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type QrCode
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
| <code>id</code> | <code>string</code> | QR code ID (qr_*). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qrCodes.fetchQrCode(request)`

- **OnSuccess**: <code>[QrCode](src/models/qr-code.ts)</code>
- **OnError**: throws <code>[QrCodes.FetchQrCodeError](src/resources/qr-codes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qrCodes.fetchQrCode(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;QrCode, QrCodes.FetchQrCodeError&gt;</code>, with `result.value` of type <code>[QrCode](src/models/qr-code.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchQrCodePayments(request: QrCodes.FetchQrCodePaymentsRequest, options?: RequestOptions): ApiPromise&lt;PaymentsQrCodesPaymentsResponse, QrCodes.FetchQrCodePaymentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all payments made against a specific QR code.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qrCodes.fetchQrCodePayments({ id: "some example string" });
  // TODO: Handle 'response' of type PaymentsQrCodesPaymentsResponse
} catch (err) {
  // TODO: Handle 'err' of type QrCodes.FetchQrCodePaymentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qrCodes.fetchQrCodePayments({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentsQrCodesPaymentsResponse
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
| <code>id</code> | <code>string</code> | QR code ID (qr_*). |
| <code>from?</code> | <code>number</code> | Unix timestamp (seconds). Fetch records created on or after this time. |
| <code>to?</code> | <code>number</code> | Unix timestamp (seconds). Fetch records created on or before this time. |
| <code>count?</code> | <code>number</code> | Number of records to return per call. Maximum 100. Default 10.<br>**Default**: 10 |
| <code>skip?</code> | <code>number</code> | Number of records to skip. Use with count for pagination. Default 0.<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qrCodes.fetchQrCodePayments(request)`

- **OnSuccess**: <code>[PaymentsQrCodesPaymentsResponse](src/models/payments-qr-codes-payments-response.ts)</code>
- **OnError**: throws <code>[QrCodes.FetchQrCodePaymentsError](src/resources/qr-codes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qrCodes.fetchQrCodePayments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentsQrCodesPaymentsResponse, QrCodes.FetchQrCodePaymentsError&gt;</code>, with `result.value` of type <code>[PaymentsQrCodesPaymentsResponse](src/models/payments-qr-codes-payments-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateQrCode(request: QrCodes.UpdateQrCodeRequest, options?: RequestOptions): ApiPromise&lt;QrCode, QrCodes.UpdateQrCodeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the notes field of a QR code. Only notes can be modified after creation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qrCodes.updateQrCode({
    id: "some example string",
    body: { notes: { key: "some example string" } },
  });
  // TODO: Handle 'response' of type QrCode
} catch (err) {
  // TODO: Handle 'err' of type QrCodes.UpdateQrCodeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qrCodes
  .updateQrCode({ id: "some example string", body: { notes: { key: "some example string" } } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type QrCode
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
| <code>id</code> | <code>string</code> | QR code ID (qr_*). |
| <code>body</code> | <code>[PaymentsQrCodesRequest1](src/models/payments-qr-codes-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qrCodes.updateQrCode(request)`

- **OnSuccess**: <code>[QrCode](src/models/qr-code.ts)</code>
- **OnError**: throws <code>[QrCodes.UpdateQrCodeError](src/resources/qr-codes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qrCodes.updateQrCode(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;QrCode, QrCodes.UpdateQrCodeError&gt;</code>, with `result.value` of type <code>[QrCode](src/models/qr-code.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Refunds

> Source: [Refunds](src/resources/refunds.ts)

<details>
<summary><code>createRefund(request: Refunds.CreateRefundRequest, options?: RequestOptions): ApiPromise&lt;RefundRazorpayRefundsApi, Refunds.CreateRefundError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiate a full or partial refund for a captured payment. Use speed=normal (default, 5-7 business days) or speed=optimum for instant refund (falls back to normal if unavailable). Use the X-Refund-Idempotency header with a unique key (>=10 chars) to safely retry without duplicate refunds.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.refunds.createRefund({
    id: "some example string",
    body: { amount: 50000, speed: Speed.Normal, receipt: "refund_receipt_001" },
  });
  // TODO: Handle 'response' of type RefundRazorpayRefundsApi
} catch (err) {
  // TODO: Handle 'err' of type Refunds.CreateRefundError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.refunds
  .createRefund({
    id: "some example string",
    body: { amount: 50000, speed: Speed.Normal, receipt: "refund_receipt_001" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RefundRazorpayRefundsApi
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
| <code>id</code> | <code>string</code> | Payment ID to refund (pay_*). Payment must be captured. |
| <code>body?</code> | <code>[PaymentsRefundRequest](src/models/payments-refund-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.refunds.createRefund(request)`

- **OnSuccess**: <code>[RefundRazorpayRefundsApi](src/models/refund-razorpay-refunds-api.ts)</code>
- **OnError**: throws <code>[Refunds.CreateRefundError](src/resources/refunds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.refunds.createRefund(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RefundRazorpayRefundsApi, Refunds.CreateRefundError&gt;</code>, with `result.value` of type <code>[RefundRazorpayRefundsApi](src/models/refund-razorpay-refunds-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchAllRefunds(request?: Refunds.FetchAllRefundsRequest, options?: RequestOptions): ApiPromise&lt;RefundsResponse, Refunds.FetchAllRefundsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a paginated list of all refunds across payments. Maximum 100 per call.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.refunds.fetchAllRefunds();
  // TODO: Handle 'response' of type RefundsResponse
} catch (err) {
  // TODO: Handle 'err' of type Refunds.FetchAllRefundsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.refunds.fetchAllRefunds().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RefundsResponse
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
| <code>from?</code> | <code>number</code> | Unix timestamp (seconds). Fetch records created on or after this time. |
| <code>to?</code> | <code>number</code> | Unix timestamp (seconds). Fetch records created on or before this time. |
| <code>count?</code> | <code>number</code> | Number of records to return per call. Maximum 100. Default 10.<br>**Default**: 10 |
| <code>skip?</code> | <code>number</code> | Number of records to skip. Use with count for pagination. Default 0.<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.refunds.fetchAllRefunds(request)`

- **OnSuccess**: <code>[RefundsResponse](src/models/refunds-response.ts)</code>
- **OnError**: throws <code>[Refunds.FetchAllRefundsError](src/resources/refunds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.refunds.fetchAllRefunds(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RefundsResponse, Refunds.FetchAllRefundsError&gt;</code>, with `result.value` of type <code>[RefundsResponse](src/models/refunds-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchPaymentRefund(request: Refunds.FetchPaymentRefundRequest, options?: RequestOptions): ApiPromise&lt;RefundRazorpayRefundsApi, Refunds.FetchPaymentRefundError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a specific refund by its ID scoped to a particular payment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.refunds.fetchPaymentRefund({
    paymentId: "some example string",
    refundId: "some example string",
  });
  // TODO: Handle 'response' of type RefundRazorpayRefundsApi
} catch (err) {
  // TODO: Handle 'err' of type Refunds.FetchPaymentRefundError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.refunds
  .fetchPaymentRefund({ paymentId: "some example string", refundId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RefundRazorpayRefundsApi
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
| <code>paymentId</code> | <code>string</code> | Payment ID (pay_*). |
| <code>refundId</code> | <code>string</code> | Refund ID (rfnd_*). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.refunds.fetchPaymentRefund(request)`

- **OnSuccess**: <code>[RefundRazorpayRefundsApi](src/models/refund-razorpay-refunds-api.ts)</code>
- **OnError**: throws <code>[Refunds.FetchPaymentRefundError](src/resources/refunds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.refunds.fetchPaymentRefund(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RefundRazorpayRefundsApi, Refunds.FetchPaymentRefundError&gt;</code>, with `result.value` of type <code>[RefundRazorpayRefundsApi](src/models/refund-razorpay-refunds-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchPaymentRefunds(request: Refunds.FetchPaymentRefundsRequest, options?: RequestOptions): ApiPromise&lt;PaymentsRefundsResponse, Refunds.FetchPaymentRefundsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all refunds issued against a specific payment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.refunds.fetchPaymentRefunds({ paymentId: "some example string" });
  // TODO: Handle 'response' of type PaymentsRefundsResponse
} catch (err) {
  // TODO: Handle 'err' of type Refunds.FetchPaymentRefundsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.refunds.fetchPaymentRefunds({ paymentId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentsRefundsResponse
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
| <code>paymentId</code> | <code>string</code> | Payment ID (pay_*). |
| <code>from?</code> | <code>number</code> | Unix timestamp (seconds). Fetch records created on or after this time. |
| <code>to?</code> | <code>number</code> | Unix timestamp (seconds). Fetch records created on or before this time. |
| <code>count?</code> | <code>number</code> | Number of records to return per call. Maximum 100. Default 10.<br>**Default**: 10 |
| <code>skip?</code> | <code>number</code> | Number of records to skip. Use with count for pagination. Default 0.<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.refunds.fetchPaymentRefunds(request)`

- **OnSuccess**: <code>[PaymentsRefundsResponse](src/models/payments-refunds-response.ts)</code>
- **OnError**: throws <code>[Refunds.FetchPaymentRefundsError](src/resources/refunds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.refunds.fetchPaymentRefunds(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentsRefundsResponse, Refunds.FetchPaymentRefundsError&gt;</code>, with `result.value` of type <code>[PaymentsRefundsResponse](src/models/payments-refunds-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchRefund(request: Refunds.FetchRefundRequest, options?: RequestOptions): ApiPromise&lt;RefundRazorpayRefundsApi, Refunds.FetchRefundError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve full details and current status of a specific refund.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.refunds.fetchRefund({ id: "some example string" });
  // TODO: Handle 'response' of type RefundRazorpayRefundsApi
} catch (err) {
  // TODO: Handle 'err' of type Refunds.FetchRefundError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.refunds.fetchRefund({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RefundRazorpayRefundsApi
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
| <code>id</code> | <code>string</code> | Refund ID (rfnd_*). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.refunds.fetchRefund(request)`

- **OnSuccess**: <code>[RefundRazorpayRefundsApi](src/models/refund-razorpay-refunds-api.ts)</code>
- **OnError**: throws <code>[Refunds.FetchRefundError](src/resources/refunds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.refunds.fetchRefund(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RefundRazorpayRefundsApi, Refunds.FetchRefundError&gt;</code>, with `result.value` of type <code>[RefundRazorpayRefundsApi](src/models/refund-razorpay-refunds-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateRefund(request: Refunds.UpdateRefundRequest, options?: RequestOptions): ApiPromise&lt;RefundRazorpayRefundsApi, Refunds.UpdateRefundError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the notes field of a refund. Only notes can be modified.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.refunds.updateRefund({
    id: "some example string",
    body: { notes: { key: "some example string" } },
  });
  // TODO: Handle 'response' of type RefundRazorpayRefundsApi
} catch (err) {
  // TODO: Handle 'err' of type Refunds.UpdateRefundError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.refunds
  .updateRefund({ id: "some example string", body: { notes: { key: "some example string" } } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RefundRazorpayRefundsApi
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
| <code>id</code> | <code>string</code> | Refund ID (rfnd_*). |
| <code>body</code> | <code>[RefundsRequest](src/models/refunds-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.refunds.updateRefund(request)`

- **OnSuccess**: <code>[RefundRazorpayRefundsApi](src/models/refund-razorpay-refunds-api.ts)</code>
- **OnError**: throws <code>[Refunds.UpdateRefundError](src/resources/refunds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.refunds.updateRefund(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RefundRazorpayRefundsApi, Refunds.UpdateRefundError&gt;</code>, with `result.value` of type <code>[RefundRazorpayRefundsApi](src/models/refund-razorpay-refunds-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SettlementsApi

> Source: [SettlementsApi](src/resources/settlements-api.ts)

<details>
<summary><code>fetchAllSettlements(request?: SettlementsApi.FetchAllSettlementsRequest, options?: RequestOptions): ApiPromise&lt;SettlementsResponse, SettlementsApi.FetchAllSettlementsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a paginated list of settlements. Each settlement represents a batch transfer to your bank account. Maximum 100 per call.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.settlementsApi.fetchAllSettlements();
  // TODO: Handle 'response' of type SettlementsResponse
} catch (err) {
  // TODO: Handle 'err' of type SettlementsApi.FetchAllSettlementsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.settlementsApi.fetchAllSettlements().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SettlementsResponse
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
| <code>from?</code> | <code>number</code> | Unix timestamp (seconds). Fetch records created on or after this time. |
| <code>to?</code> | <code>number</code> | Unix timestamp (seconds). Fetch records created on or before this time. |
| <code>count?</code> | <code>number</code> | Number of records to return per call. Maximum 100. Default 10.<br>**Default**: 10 |
| <code>skip?</code> | <code>number</code> | Number of records to skip. Use with count for pagination. Default 0.<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.settlementsApi.fetchAllSettlements(request)`

- **OnSuccess**: <code>[SettlementsResponse](src/models/settlements-response.ts)</code>
- **OnError**: throws <code>[SettlementsApi.FetchAllSettlementsError](src/resources/settlements-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.settlementsApi.fetchAllSettlements(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SettlementsResponse, SettlementsApi.FetchAllSettlementsError&gt;</code>, with `result.value` of type <code>[SettlementsResponse](src/models/settlements-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchSettlement(request: SettlementsApi.FetchSettlementRequest, options?: RequestOptions): ApiPromise&lt;Settlement, SettlementsApi.FetchSettlementError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve details of a specific settlement transaction.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.settlementsApi.fetchSettlement({ id: "some example string" });
  // TODO: Handle 'response' of type Settlement
} catch (err) {
  // TODO: Handle 'err' of type SettlementsApi.FetchSettlementError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.settlementsApi.fetchSettlement({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Settlement
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
| <code>id</code> | <code>string</code> | Settlement ID (setl_*). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.settlementsApi.fetchSettlement(request)`

- **OnSuccess**: <code>[Settlement](src/models/settlement.ts)</code>
- **OnError**: throws <code>[SettlementsApi.FetchSettlementError](src/resources/settlements-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.settlementsApi.fetchSettlement(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Settlement, SettlementsApi.FetchSettlementError&gt;</code>, with `result.value` of type <code>[Settlement](src/models/settlement.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchSettlementRecon(request: SettlementsApi.FetchSettlementReconRequest, options?: RequestOptions): ApiPromise&lt;SettlementsReconCombinedResponse, SettlementsApi.FetchSettlementReconError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a detailed transaction-level reconciliation report for a given month (or day). Each record maps a payment, refund, transfer, or adjustment to its settlement. Use for accounting reconciliation. Maximum 1000 records per call.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.settlementsApi.fetchSettlementRecon({ year: 2024, month: 4 });
  // TODO: Handle 'response' of type SettlementsReconCombinedResponse
} catch (err) {
  // TODO: Handle 'err' of type SettlementsApi.FetchSettlementReconError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.settlementsApi.fetchSettlementRecon({ year: 2024, month: 4 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SettlementsReconCombinedResponse
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
| <code>year</code> | <code>number</code> | Settlement year in YYYY format. |
| <code>month</code> | <code>number</code> | Settlement month in MM format (01–12). |
| <code>day?</code> | <code>number</code> | Settlement day in DD format (1–31). Omit to fetch the full month. |
| <code>count?</code> | <code>number</code> | Records per call. Maximum 1000. Default 10.<br>**Default**: 10 |
| <code>skip?</code> | <code>number</code> | Records to skip for pagination.<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.settlementsApi.fetchSettlementRecon(request)`

- **OnSuccess**: <code>[SettlementsReconCombinedResponse](src/models/settlements-recon-combined-response.ts)</code>
- **OnError**: throws <code>[SettlementsApi.FetchSettlementReconError](src/resources/settlements-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.settlementsApi.fetchSettlementRecon(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SettlementsReconCombinedResponse, SettlementsApi.FetchSettlementReconError&gt;</code>, with `result.value` of type <code>[SettlementsReconCombinedResponse](src/models/settlements-recon-combined-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Subscriptions

> Source: [Subscriptions](src/resources/subscriptions.ts)

<details>
<summary><code>cancelSubscription(request: Subscriptions.CancelSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;Subscription, Subscriptions.CancelSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel an active or authenticated subscription. Use cancel_at_cycle_end=1 to continue service until the end of the current cycle before cancelling.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.cancelSubscription({ id: "some example string" });
  // TODO: Handle 'response' of type Subscription
} catch (err) {
  // TODO: Handle 'err' of type Subscriptions.CancelSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions.cancelSubscription({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Subscription
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
| <code>id</code> | <code>string</code> | Subscription ID (sub_*). |
| <code>body?</code> | <code>[SubscriptionsCancelRequest](src/models/subscriptions-cancel-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.cancelSubscription(request)`

- **OnSuccess**: <code>[Subscription](src/models/subscription.ts)</code>
- **OnError**: throws <code>[Subscriptions.CancelSubscriptionError](src/resources/subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptions.cancelSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Subscription, Subscriptions.CancelSubscriptionError&gt;</code>, with `result.value` of type <code>[Subscription](src/models/subscription.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelSubscriptionScheduledChanges(request: Subscriptions.CancelSubscriptionScheduledChangesRequest, options?: RequestOptions): ApiPromise&lt;Subscription, Subscriptions.CancelSubscriptionScheduledChangesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel any pending plan or quantity changes that were scheduled for the next billing cycle.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.cancelSubscriptionScheduledChanges({
    id: "some example string",
  });
  // TODO: Handle 'response' of type Subscription
} catch (err) {
  // TODO: Handle 'err' of type Subscriptions.CancelSubscriptionScheduledChangesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions
  .cancelSubscriptionScheduledChanges({ id: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Subscription
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
| <code>id</code> | <code>string</code> | Subscription ID (sub_*). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.cancelSubscriptionScheduledChanges(request)`

- **OnSuccess**: <code>[Subscription](src/models/subscription.ts)</code>
- **OnError**: throws <code>[Subscriptions.CancelSubscriptionScheduledChangesError](src/resources/subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptions.cancelSubscriptionScheduledChanges(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Subscription, Subscriptions.CancelSubscriptionScheduledChangesError&gt;</code>, with `result.value` of type <code>[Subscription](src/models/subscription.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createSubscription(request: Subscriptions.CreateSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;Subscription, Subscriptions.CreateSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Subscribe a customer to a plan. Returns a short_url that the customer MUST open to authorize the payment mandate (UPI Autopay, NACH, or card-on-file). The subscription will not charge until the mandate is authorized. Set notify_info to send the auth link via SMS/email automatically. Requires Subscriptions feature enabled on your Razorpay account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.createSubscription({
    body: { planId: "some example string", totalCount: 1 },
  });
  // TODO: Handle 'response' of type Subscription
} catch (err) {
  // TODO: Handle 'err' of type Subscriptions.CreateSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions
  .createSubscription({ body: { planId: "some example string", totalCount: 1 } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Subscription
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
| <code>body</code> | <code>[SubscriptionsRequest](src/models/subscriptions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.createSubscription(request)`

- **OnSuccess**: <code>[Subscription](src/models/subscription.ts)</code>
- **OnError**: throws <code>[Subscriptions.CreateSubscriptionError](src/resources/subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptions.createSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Subscription, Subscriptions.CreateSubscriptionError&gt;</code>, with `result.value` of type <code>[Subscription](src/models/subscription.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSubscriptionOffer(request: Subscriptions.DeleteSubscriptionOfferRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Subscriptions.DeleteSubscriptionOfferError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove an applied offer/coupon from a subscription. The offer will no longer apply from the next billing cycle.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.deleteSubscriptionOffer({
    subId: "some example string",
    offerId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Subscriptions.DeleteSubscriptionOfferError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions
  .deleteSubscriptionOffer({ subId: "some example string", offerId: "some example string" })
  .asApiResult();
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
| <code>subId</code> | <code>string</code> | Subscription ID (sub_*). |
| <code>offerId</code> | <code>string</code> | Offer ID to remove. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.deleteSubscriptionOffer(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Subscriptions.DeleteSubscriptionOfferError](src/resources/subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptions.deleteSubscriptionOffer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Subscriptions.DeleteSubscriptionOfferError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchSubscription(request: Subscriptions.FetchSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;Subscription, Subscriptions.FetchSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get current status and full details of a subscription.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.fetchSubscription({ id: "some example string" });
  // TODO: Handle 'response' of type Subscription
} catch (err) {
  // TODO: Handle 'err' of type Subscriptions.FetchSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions.fetchSubscription({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Subscription
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
| <code>id</code> | <code>string</code> | Subscription ID (sub_*). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.fetchSubscription(request)`

- **OnSuccess**: <code>[Subscription](src/models/subscription.ts)</code>
- **OnError**: throws <code>[Subscriptions.FetchSubscriptionError](src/resources/subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptions.fetchSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Subscription, Subscriptions.FetchSubscriptionError&gt;</code>, with `result.value` of type <code>[Subscription](src/models/subscription.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchSubscriptionScheduledChanges(request: Subscriptions.FetchSubscriptionScheduledChangesRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionsRetrieveScheduledChangesResponse, Subscriptions.FetchSubscriptionScheduledChangesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve any pending plan or quantity changes scheduled for the next billing cycle.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.fetchSubscriptionScheduledChanges({
    id: "some example string",
  });
  // TODO: Handle 'response' of type SubscriptionsRetrieveScheduledChangesResponse
} catch (err) {
  // TODO: Handle 'err' of type Subscriptions.FetchSubscriptionScheduledChangesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions
  .fetchSubscriptionScheduledChanges({ id: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubscriptionsRetrieveScheduledChangesResponse
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
| <code>id</code> | <code>string</code> | Subscription ID (sub_*). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.fetchSubscriptionScheduledChanges(request)`

- **OnSuccess**: <code>[SubscriptionsRetrieveScheduledChangesResponse](src/models/subscriptions-retrieve-scheduled-changes-response.ts)</code>
- **OnError**: throws <code>[Subscriptions.FetchSubscriptionScheduledChangesError](src/resources/subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptions.fetchSubscriptionScheduledChanges(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubscriptionsRetrieveScheduledChangesResponse, Subscriptions.FetchSubscriptionScheduledChangesError&gt;</code>, with `result.value` of type <code>[SubscriptionsRetrieveScheduledChangesResponse](src/models/subscriptions-retrieve-scheduled-changes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSubscriptions(request?: Subscriptions.ListSubscriptionsRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionsResponse, Subscriptions.ListSubscriptionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all subscriptions. Filter by plan_id or status. Returns up to 100 per call.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.listSubscriptions();
  // TODO: Handle 'response' of type SubscriptionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Subscriptions.ListSubscriptionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions.listSubscriptions().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubscriptionsResponse
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
| <code>planId?</code> | <code>string</code> | Filter by plan ID. |
| <code>from?</code> | <code>number</code> | Unix timestamp (seconds). Fetch records created on or after this time. |
| <code>to?</code> | <code>number</code> | Unix timestamp (seconds). Fetch records created on or before this time. |
| <code>count?</code> | <code>number</code> | Number of records to return per call. Maximum 100. Default 10.<br>**Default**: 10 |
| <code>skip?</code> | <code>number</code> | Number of records to skip. Use with count for pagination. Default 0.<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.listSubscriptions(request)`

- **OnSuccess**: <code>[SubscriptionsResponse](src/models/subscriptions-response.ts)</code>
- **OnError**: throws <code>[Subscriptions.ListSubscriptionsError](src/resources/subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptions.listSubscriptions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubscriptionsResponse, Subscriptions.ListSubscriptionsError&gt;</code>, with `result.value` of type <code>[SubscriptionsResponse](src/models/subscriptions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>pauseSubscription(request: Subscriptions.PauseSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;Subscription, Subscriptions.PauseSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pause an active subscription. No charges will be attempted while paused. Resume with POST /subscriptions/{id}/resume.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.pauseSubscription({ id: "some example string" });
  // TODO: Handle 'response' of type Subscription
} catch (err) {
  // TODO: Handle 'err' of type Subscriptions.PauseSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions.pauseSubscription({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Subscription
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
| <code>id</code> | <code>string</code> | Subscription ID (sub_*). |
| <code>body?</code> | <code>[SubscriptionsPauseRequest](src/models/subscriptions-pause-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.pauseSubscription(request)`

- **OnSuccess**: <code>[Subscription](src/models/subscription.ts)</code>
- **OnError**: throws <code>[Subscriptions.PauseSubscriptionError](src/resources/subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptions.pauseSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Subscription, Subscriptions.PauseSubscriptionError&gt;</code>, with `result.value` of type <code>[Subscription](src/models/subscription.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resumeSubscription(request: Subscriptions.ResumeSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;Subscription, Subscriptions.ResumeSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resume a paused subscription. Charging resumes on the next scheduled cycle.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.resumeSubscription({ id: "some example string" });
  // TODO: Handle 'response' of type Subscription
} catch (err) {
  // TODO: Handle 'err' of type Subscriptions.ResumeSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions.resumeSubscription({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Subscription
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
| <code>id</code> | <code>string</code> | Subscription ID (sub_*). |
| <code>body?</code> | <code>[SubscriptionsResumeRequest](src/models/subscriptions-resume-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.resumeSubscription(request)`

- **OnSuccess**: <code>[Subscription](src/models/subscription.ts)</code>
- **OnError**: throws <code>[Subscriptions.ResumeSubscriptionError](src/resources/subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptions.resumeSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Subscription, Subscriptions.ResumeSubscriptionError&gt;</code>, with `result.value` of type <code>[Subscription](src/models/subscription.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSubscription(request: Subscriptions.UpdateSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;Subscription, Subscriptions.UpdateSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update plan, quantity, or schedule future changes for a subscription. Use schedule_change_at='now' for immediate effect (creates a new billing cycle) or 'cycle_end' to defer until the current cycle ends. Cannot change plan mid-cycle without creating a new cycle.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.updateSubscription({ id: "some example string", body: {} });
  // TODO: Handle 'response' of type Subscription
} catch (err) {
  // TODO: Handle 'err' of type Subscriptions.UpdateSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions
  .updateSubscription({ id: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Subscription
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
| <code>id</code> | <code>string</code> | Subscription ID (sub_*). |
| <code>body</code> | <code>[SubscriptionsRequest1](src/models/subscriptions-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.updateSubscription(request)`

- **OnSuccess**: <code>[Subscription](src/models/subscription.ts)</code>
- **OnError**: throws <code>[Subscriptions.UpdateSubscriptionError](src/resources/subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptions.updateSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Subscription, Subscriptions.UpdateSubscriptionError&gt;</code>, with `result.value` of type <code>[Subscription](src/models/subscription.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Transfers

> Source: [Transfers](src/resources/transfers.ts)

<details>
<summary><code>createDirectTransfer(request: Transfers.CreateDirectTransferRequest, options?: RequestOptions): ApiPromise&lt;TransferRazorpayTransfersApi, Transfers.CreateDirectTransferError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an on-demand direct transfer from the merchant account to a Linked Account. Requires the Direct Transfer feature to be enabled on the account. Supports idempotency via the X-Transfer-Idempotency header (unique to direct transfers).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transfers.createDirectTransfer({
    body: { account: "some example string", amount: 1 },
  });
  // TODO: Handle 'response' of type TransferRazorpayTransfersApi
} catch (err) {
  // TODO: Handle 'err' of type Transfers.CreateDirectTransferError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transfers
  .createDirectTransfer({ body: { account: "some example string", amount: 1 } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferRazorpayTransfersApi
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
| <code>xTransferIdempotency?</code> | <code>string</code> | Idempotency key for direct transfers. If provided, retrying with the same key within 24 hours returns the original transfer instead of creating a duplicate. |
| <code>body</code> | <code>[TransfersRequest](src/models/transfers-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transfers.createDirectTransfer(request)`

- **OnSuccess**: <code>[TransferRazorpayTransfersApi](src/models/transfer-razorpay-transfers-api.ts)</code>
- **OnError**: throws <code>[Transfers.CreateDirectTransferError](src/resources/transfers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transfers.createDirectTransfer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferRazorpayTransfersApi, Transfers.CreateDirectTransferError&gt;</code>, with `result.value` of type <code>[TransferRazorpayTransfersApi](src/models/transfer-razorpay-transfers-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createTransfersFromPayment(request: Transfers.CreateTransfersFromPaymentRequest, options?: RequestOptions): ApiPromise&lt;PaymentsTransfersResponse, Transfers.CreateTransfersFromPaymentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Split a captured payment to one or more Linked Accounts. Amount is deducted from the payment and transferred to the recipient. INR only, minimum ₹100 per transfer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transfers.createTransfersFromPayment({
    id: "some example string",
    body: { transfers: [{ account: "some example string", amount: 1 }] },
  });
  // TODO: Handle 'response' of type PaymentsTransfersResponse
} catch (err) {
  // TODO: Handle 'err' of type Transfers.CreateTransfersFromPaymentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transfers
  .createTransfersFromPayment({
    id: "some example string",
    body: { transfers: [{ account: "some example string", amount: 1 }] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentsTransfersResponse
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
| <code>id</code> | <code>string</code> | Payment ID (pay_*). |
| <code>body</code> | <code>[PaymentsTransfersRequest](src/models/payments-transfers-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transfers.createTransfersFromPayment(request)`

- **OnSuccess**: <code>[PaymentsTransfersResponse](src/models/payments-transfers-response.ts)</code>
- **OnError**: throws <code>[Transfers.CreateTransfersFromPaymentError](src/resources/transfers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transfers.createTransfersFromPayment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentsTransfersResponse, Transfers.CreateTransfersFromPaymentError&gt;</code>, with `result.value` of type <code>[PaymentsTransfersResponse](src/models/payments-transfers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchTransfer(request: Transfers.FetchTransferRequest, options?: RequestOptions): ApiPromise&lt;TransferRazorpayTransfersApi, Transfers.FetchTransferError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve details of a specific transfer by ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transfers.fetchTransfer({ id: "some example string" });
  // TODO: Handle 'response' of type TransferRazorpayTransfersApi
} catch (err) {
  // TODO: Handle 'err' of type Transfers.FetchTransferError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transfers.fetchTransfer({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferRazorpayTransfersApi
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
| <code>id</code> | <code>string</code> | Transfer ID (trf_*). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transfers.fetchTransfer(request)`

- **OnSuccess**: <code>[TransferRazorpayTransfersApi](src/models/transfer-razorpay-transfers-api.ts)</code>
- **OnError**: throws <code>[Transfers.FetchTransferError](src/resources/transfers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transfers.fetchTransfer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferRazorpayTransfersApi, Transfers.FetchTransferError&gt;</code>, with `result.value` of type <code>[TransferRazorpayTransfersApi](src/models/transfer-razorpay-transfers-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchTransfersForPayment(request: Transfers.FetchTransfersForPaymentRequest, options?: RequestOptions): ApiPromise&lt;PaymentsTransfersResponse, Transfers.FetchTransfersForPaymentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all transfers created from a specific payment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transfers.fetchTransfersForPayment({ id: "some example string" });
  // TODO: Handle 'response' of type PaymentsTransfersResponse
} catch (err) {
  // TODO: Handle 'err' of type Transfers.FetchTransfersForPaymentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transfers.fetchTransfersForPayment({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentsTransfersResponse
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
| <code>id</code> | <code>string</code> | Payment ID (pay_*). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transfers.fetchTransfersForPayment(request)`

- **OnSuccess**: <code>[PaymentsTransfersResponse](src/models/payments-transfers-response.ts)</code>
- **OnError**: throws <code>[Transfers.FetchTransfersForPaymentError](src/resources/transfers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transfers.fetchTransfersForPayment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentsTransfersResponse, Transfers.FetchTransfersForPaymentError&gt;</code>, with `result.value` of type <code>[PaymentsTransfersResponse](src/models/payments-transfers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listReversals(request: Transfers.ListReversalsRequest, options?: RequestOptions): ApiPromise&lt;TransfersReversalsResponse, Transfers.ListReversalsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all reversals for a specific transfer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transfers.listReversals({ id: "some example string" });
  // TODO: Handle 'response' of type TransfersReversalsResponse
} catch (err) {
  // TODO: Handle 'err' of type Transfers.ListReversalsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transfers.listReversals({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransfersReversalsResponse
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
| <code>id</code> | <code>string</code> | Transfer ID (trf_*). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transfers.listReversals(request)`

- **OnSuccess**: <code>[TransfersReversalsResponse](src/models/transfers-reversals-response.ts)</code>
- **OnError**: throws <code>[Transfers.ListReversalsError](src/resources/transfers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transfers.listReversals(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransfersReversalsResponse, Transfers.ListReversalsError&gt;</code>, with `result.value` of type <code>[TransfersReversalsResponse](src/models/transfers-reversals-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTransfers(request?: Transfers.ListTransfersRequest, options?: RequestOptions): ApiPromise&lt;TransfersResponse, Transfers.ListTransfersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a paginated list of transfers. Filter by recipient_settlement_id to fetch transfers included in a specific settlement. Use expand[]=recipient_settlement to include settlement details.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transfers.listTransfers();
  // TODO: Handle 'response' of type TransfersResponse
} catch (err) {
  // TODO: Handle 'err' of type Transfers.ListTransfersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transfers.listTransfers().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransfersResponse
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
| <code>from?</code> | <code>number</code> | Unix timestamp filter (start). |
| <code>to?</code> | <code>number</code> | Unix timestamp filter (end). |
| <code>count?</code> | <code>number</code> | Number of records to return. Default: 10. Maximum: 100.<br>**Default**: 10 |
| <code>skip?</code> | <code>number</code> | Number of records to skip. Use for pagination. Default: 0.<br>**Default**: 0 |
| <code>recipientSettlementId?</code> | <code>string</code> | Filter transfers by settlement ID in the Linked Account. |
| <code>expand?</code> | <code>[ExpandRazorpayTransfersApi](src/models/expand-razorpay-transfers-api.ts)</code> | Expand recipient_settlement to include full settlement object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transfers.listTransfers(request)`

- **OnSuccess**: <code>[TransfersResponse](src/models/transfers-response.ts)</code>
- **OnError**: throws <code>[Transfers.ListTransfersError](src/resources/transfers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transfers.listTransfers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransfersResponse, Transfers.ListTransfersError&gt;</code>, with `result.value` of type <code>[TransfersResponse](src/models/transfers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>modifyTransferSettlementHold(request: Transfers.ModifyTransferSettlementHoldRequest, options?: RequestOptions): ApiPromise&lt;TransferRazorpayTransfersApi, Transfers.ModifyTransferSettlementHoldError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Put a transfer's settlement on hold or release an existing hold. Use on_hold=true to hold settlement, on_hold=false to release. on_hold_until sets a future timestamp for automatic hold release.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transfers.modifyTransferSettlementHold({
    id: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type TransferRazorpayTransfersApi
} catch (err) {
  // TODO: Handle 'err' of type Transfers.ModifyTransferSettlementHoldError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transfers
  .modifyTransferSettlementHold({ id: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferRazorpayTransfersApi
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
| <code>id</code> | <code>string</code> | Transfer ID (trf_*). |
| <code>body</code> | <code>[TransfersRequest1](src/models/transfers-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transfers.modifyTransferSettlementHold(request)`

- **OnSuccess**: <code>[TransferRazorpayTransfersApi](src/models/transfer-razorpay-transfers-api.ts)</code>
- **OnError**: throws <code>[Transfers.ModifyTransferSettlementHoldError](src/resources/transfers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transfers.modifyTransferSettlementHold(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferRazorpayTransfersApi, Transfers.ModifyTransferSettlementHoldError&gt;</code>, with `result.value` of type <code>[TransferRazorpayTransfersApi](src/models/transfer-razorpay-transfers-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>reverseTransfer(request: Transfers.ReverseTransferRequest, options?: RequestOptions): ApiPromise&lt;Reversal, Transfers.ReverseTransferError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Move funds from a Linked Account back to the merchant. Partial reversals are supported. Multiple reversals per transfer are allowed as long as the total reversed amount does not exceed the transfer amount.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transfers.reverseTransfer({ id: "some example string" });
  // TODO: Handle 'response' of type Reversal
} catch (err) {
  // TODO: Handle 'err' of type Transfers.ReverseTransferError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transfers.reverseTransfer({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Reversal
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
| <code>id</code> | <code>string</code> | Transfer ID (trf_*). |
| <code>body?</code> | <code>[TransfersReversalsRequest](src/models/transfers-reversals-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transfers.reverseTransfer(request)`

- **OnSuccess**: <code>[Reversal](src/models/reversal.ts)</code>
- **OnError**: throws <code>[Transfers.ReverseTransferError](src/resources/transfers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transfers.reverseTransfer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Reversal, Transfers.ReverseTransferError&gt;</code>, with `result.value` of type <code>[Reversal](src/models/reversal.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## VirtualAccounts

> Source: [VirtualAccounts](src/resources/virtual-accounts.ts)

<details>
<summary><code>addAllowedPayer(request: VirtualAccounts.AddAllowedPayerRequest, options?: RequestOptions): ApiPromise&lt;VirtualAccount, VirtualAccounts.AddAllowedPayerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Whitelist a specific payer bank account or VPA for a virtual account (Smart Collect with Third Party Validation). Only whitelisted payers can successfully pay into this virtual account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.virtualAccounts.addAllowedPayer({
    vaId: "some example string",
    body: { type: Type2RazorpayVirtualAccountsApi.BankAccount },
  });
  // TODO: Handle 'response' of type VirtualAccount
} catch (err) {
  // TODO: Handle 'err' of type VirtualAccounts.AddAllowedPayerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.virtualAccounts
  .addAllowedPayer({
    vaId: "some example string",
    body: { type: Type2RazorpayVirtualAccountsApi.BankAccount },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VirtualAccount
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
| <code>vaId</code> | <code>string</code> | Virtual Account ID (va_*). |
| <code>body</code> | <code>[VirtualAccountsAllowedPayersRequest](src/models/virtual-accounts-allowed-payers-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.virtualAccounts.addAllowedPayer(request)`

- **OnSuccess**: <code>[VirtualAccount](src/models/virtual-account.ts)</code>
- **OnError**: throws <code>[VirtualAccounts.AddAllowedPayerError](src/resources/virtual-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.virtualAccounts.addAllowedPayer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VirtualAccount, VirtualAccounts.AddAllowedPayerError&gt;</code>, with `result.value` of type <code>[VirtualAccount](src/models/virtual-account.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>addVpaReceiver(request: VirtualAccounts.AddVpaReceiverRequest, options?: RequestOptions): ApiPromise&lt;VirtualAccount, VirtualAccounts.AddVpaReceiverError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a UPI VPA receiver to an existing virtual account (Smart Collect 2.0). Requires the VPA receiver feature to be enabled on the merchant account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.virtualAccounts.addVpaReceiver({
    id: "some example string",
    body: { types: [Type1RazorpayVirtualAccountsApi.Vpa] },
  });
  // TODO: Handle 'response' of type VirtualAccount
} catch (err) {
  // TODO: Handle 'err' of type VirtualAccounts.AddVpaReceiverError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.virtualAccounts
  .addVpaReceiver({ id: "some example string", body: { types: [Type1RazorpayVirtualAccountsApi.Vpa] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VirtualAccount
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
| <code>id</code> | <code>string</code> | Virtual Account ID (va_*). |
| <code>body</code> | <code>[VirtualAccountsReceiversRequest](src/models/virtual-accounts-receivers-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.virtualAccounts.addVpaReceiver(request)`

- **OnSuccess**: <code>[VirtualAccount](src/models/virtual-account.ts)</code>
- **OnError**: throws <code>[VirtualAccounts.AddVpaReceiverError](src/resources/virtual-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.virtualAccounts.addVpaReceiver(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VirtualAccount, VirtualAccounts.AddVpaReceiverError&gt;</code>, with `result.value` of type <code>[VirtualAccount](src/models/virtual-account.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>closeVirtualAccount(request: VirtualAccounts.CloseVirtualAccountRequest, options?: RequestOptions): ApiPromise&lt;VirtualAccount, VirtualAccounts.CloseVirtualAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Manually close an active virtual account so it no longer accepts payments.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.virtualAccounts.closeVirtualAccount({ id: "some example string", body: {} });
  // TODO: Handle 'response' of type VirtualAccount
} catch (err) {
  // TODO: Handle 'err' of type VirtualAccounts.CloseVirtualAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.virtualAccounts
  .closeVirtualAccount({ id: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VirtualAccount
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
| <code>id</code> | <code>string</code> | Virtual Account ID (va_*). |
| <code>body</code> | <code>[VirtualAccountsCloseRequest](src/models/virtual-accounts-close-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.virtualAccounts.closeVirtualAccount(request)`

- **OnSuccess**: <code>[VirtualAccount](src/models/virtual-account.ts)</code>
- **OnError**: throws <code>[VirtualAccounts.CloseVirtualAccountError](src/resources/virtual-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.virtualAccounts.closeVirtualAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VirtualAccount, VirtualAccounts.CloseVirtualAccountError&gt;</code>, with `result.value` of type <code>[VirtualAccount](src/models/virtual-account.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createVirtualAccount(request: VirtualAccounts.CreateVirtualAccountRequest, options?: RequestOptions): ApiPromise&lt;VirtualAccount, VirtualAccounts.CreateVirtualAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a virtual bank account (and optionally a VPA) for accepting NEFT/RTGS/IMPS/UPI payments. Set amount_expected=0 to accept any amount. Auto-closes after 90 days of inactivity. Maximum close_by timestamp: 2147483647.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.virtualAccounts.createVirtualAccount({
    body: {
      receivers: { types: [TypeRazorpayVirtualAccountsApi.BankAccount] },
      description: "some example string",
    },
  });
  // TODO: Handle 'response' of type VirtualAccount
} catch (err) {
  // TODO: Handle 'err' of type VirtualAccounts.CreateVirtualAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.virtualAccounts
  .createVirtualAccount({
    body: {
      receivers: { types: [TypeRazorpayVirtualAccountsApi.BankAccount] },
      description: "some example string",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VirtualAccount
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
| <code>body</code> | <code>[VirtualAccountsRequest](src/models/virtual-accounts-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.virtualAccounts.createVirtualAccount(request)`

- **OnSuccess**: <code>[VirtualAccount](src/models/virtual-account.ts)</code>
- **OnError**: throws <code>[VirtualAccounts.CreateVirtualAccountError](src/resources/virtual-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.virtualAccounts.createVirtualAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VirtualAccount, VirtualAccounts.CreateVirtualAccountError&gt;</code>, with `result.value` of type <code>[VirtualAccount](src/models/virtual-account.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteAllowedPayer(request: VirtualAccounts.DeleteAllowedPayerRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, VirtualAccounts.DeleteAllowedPayerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a payer from the whitelist of a virtual account (Smart Collect TPV). The payer will no longer be able to make payments to this virtual account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.virtualAccounts.deleteAllowedPayer({
    vaId: "some example string",
    id: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type VirtualAccounts.DeleteAllowedPayerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.virtualAccounts
  .deleteAllowedPayer({ vaId: "some example string", id: "some example string" })
  .asApiResult();
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
| <code>vaId</code> | <code>string</code> | Virtual Account ID (va_*). |
| <code>id</code> | <code>string</code> | Allowed payer ID to remove. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.virtualAccounts.deleteAllowedPayer(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[VirtualAccounts.DeleteAllowedPayerError](src/resources/virtual-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.virtualAccounts.deleteAllowedPayer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, VirtualAccounts.DeleteAllowedPayerError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchBankTransfer(request: VirtualAccounts.FetchBankTransferRequest, options?: RequestOptions): ApiPromise&lt;BankTransfer, VirtualAccounts.FetchBankTransferError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the BankTransfer entity associated with a payment received via a Virtual Account. Contains the UTR number, payer bank account details, and transfer mode.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.virtualAccounts.fetchBankTransfer({ id: "some example string" });
  // TODO: Handle 'response' of type BankTransfer
} catch (err) {
  // TODO: Handle 'err' of type VirtualAccounts.FetchBankTransferError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.virtualAccounts.fetchBankTransfer({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BankTransfer
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
| <code>id</code> | <code>string</code> | Payment ID (pay_*). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.virtualAccounts.fetchBankTransfer(request)`

- **OnSuccess**: <code>[BankTransfer](src/models/bank-transfer.ts)</code>
- **OnError**: throws <code>[VirtualAccounts.FetchBankTransferError](src/resources/virtual-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.virtualAccounts.fetchBankTransfer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BankTransfer, VirtualAccounts.FetchBankTransferError&gt;</code>, with `result.value` of type <code>[BankTransfer](src/models/bank-transfer.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchVirtualAccount(request: VirtualAccounts.FetchVirtualAccountRequest, options?: RequestOptions): ApiPromise&lt;VirtualAccount, VirtualAccounts.FetchVirtualAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve details of a specific virtual account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.virtualAccounts.fetchVirtualAccount({ id: "some example string" });
  // TODO: Handle 'response' of type VirtualAccount
} catch (err) {
  // TODO: Handle 'err' of type VirtualAccounts.FetchVirtualAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.virtualAccounts.fetchVirtualAccount({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VirtualAccount
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
| <code>id</code> | <code>string</code> | Virtual Account ID (va_*). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.virtualAccounts.fetchVirtualAccount(request)`

- **OnSuccess**: <code>[VirtualAccount](src/models/virtual-account.ts)</code>
- **OnError**: throws <code>[VirtualAccounts.FetchVirtualAccountError](src/resources/virtual-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.virtualAccounts.fetchVirtualAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VirtualAccount, VirtualAccounts.FetchVirtualAccountError&gt;</code>, with `result.value` of type <code>[VirtualAccount](src/models/virtual-account.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchVirtualAccountPayments(request: VirtualAccounts.FetchVirtualAccountPaymentsRequest, options?: RequestOptions): ApiPromise&lt;VirtualAccountsPaymentsResponse, VirtualAccounts.FetchVirtualAccountPaymentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all payments received by a virtual account. Returns Payment objects.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.virtualAccounts.fetchVirtualAccountPayments({ id: "some example string" });
  // TODO: Handle 'response' of type VirtualAccountsPaymentsResponse
} catch (err) {
  // TODO: Handle 'err' of type VirtualAccounts.FetchVirtualAccountPaymentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.virtualAccounts
  .fetchVirtualAccountPayments({ id: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VirtualAccountsPaymentsResponse
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
| <code>id</code> | <code>string</code> | Virtual Account ID (va_*). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.virtualAccounts.fetchVirtualAccountPayments(request)`

- **OnSuccess**: <code>[VirtualAccountsPaymentsResponse](src/models/virtual-accounts-payments-response.ts)</code>
- **OnError**: throws <code>[VirtualAccounts.FetchVirtualAccountPaymentsError](src/resources/virtual-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.virtualAccounts.fetchVirtualAccountPayments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VirtualAccountsPaymentsResponse, VirtualAccounts.FetchVirtualAccountPaymentsError&gt;</code>, with `result.value` of type <code>[VirtualAccountsPaymentsResponse](src/models/virtual-accounts-payments-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listVirtualAccounts(request?: VirtualAccounts.ListVirtualAccountsRequest, options?: RequestOptions): ApiPromise&lt;VirtualAccountsResponse, VirtualAccounts.ListVirtualAccountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a paginated list of virtual accounts with optional filters.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.virtualAccounts.listVirtualAccounts();
  // TODO: Handle 'response' of type VirtualAccountsResponse
} catch (err) {
  // TODO: Handle 'err' of type VirtualAccounts.ListVirtualAccountsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.virtualAccounts.listVirtualAccounts().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VirtualAccountsResponse
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
| <code>from?</code> | <code>number</code> | Unix timestamp filter (start). |
| <code>to?</code> | <code>number</code> | Unix timestamp filter (end). |
| <code>count?</code> | <code>number</code> | Number of records to return. Default: 10. Maximum: 100.<br>**Default**: 10 |
| <code>skip?</code> | <code>number</code> | Number of records to skip. Use for pagination. Default: 0.<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.virtualAccounts.listVirtualAccounts(request)`

- **OnSuccess**: <code>[VirtualAccountsResponse](src/models/virtual-accounts-response.ts)</code>
- **OnError**: throws <code>[VirtualAccounts.ListVirtualAccountsError](src/resources/virtual-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.virtualAccounts.listVirtualAccounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VirtualAccountsResponse, VirtualAccounts.ListVirtualAccountsError&gt;</code>, with `result.value` of type <code>[VirtualAccountsResponse](src/models/virtual-accounts-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateVirtualAccount(request: VirtualAccounts.UpdateVirtualAccountRequest, options?: RequestOptions): ApiPromise&lt;VirtualAccount, VirtualAccounts.UpdateVirtualAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the amount_expected or close_by timestamp on an active virtual account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.virtualAccounts.updateVirtualAccount({ id: "some example string", body: {} });
  // TODO: Handle 'response' of type VirtualAccount
} catch (err) {
  // TODO: Handle 'err' of type VirtualAccounts.UpdateVirtualAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.virtualAccounts
  .updateVirtualAccount({ id: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VirtualAccount
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
| <code>id</code> | <code>string</code> | Virtual Account ID (va_*). |
| <code>body</code> | <code>[VirtualAccountsRequest1](src/models/virtual-accounts-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.virtualAccounts.updateVirtualAccount(request)`

- **OnSuccess**: <code>[VirtualAccount](src/models/virtual-account.ts)</code>
- **OnError**: throws <code>[VirtualAccounts.UpdateVirtualAccountError](src/resources/virtual-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.virtualAccounts.updateVirtualAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VirtualAccount, VirtualAccounts.UpdateVirtualAccountError&gt;</code>, with `result.value` of type <code>[VirtualAccount](src/models/virtual-account.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## XAccountValidation

> Source: [XAccountValidation](src/resources/xaccount-validation.ts)

<details>
<summary><code>fetchFundAccountValidation(request: XAccountValidation.FetchFundAccountValidationRequest, options?: RequestOptions): ApiPromise&lt;FundAccountValidation, XAccountValidation.FetchFundAccountValidationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch details of a specific fund account validation by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.xAccountValidation.fetchFundAccountValidation({
    validationId: "some example string",
  });
  // TODO: Handle 'response' of type FundAccountValidation
} catch (err) {
  // TODO: Handle 'err' of type XAccountValidation.FetchFundAccountValidationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.xAccountValidation
  .fetchFundAccountValidation({ validationId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FundAccountValidation
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
| <code>validationId</code> | <code>string</code> | Unique identifier of the fund account validation (e.g. `fav_00000000000001`). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.xAccountValidation.fetchFundAccountValidation(request)`

- **OnSuccess**: <code>[FundAccountValidation](src/models/fund-account-validation.ts)</code>
- **OnError**: throws <code>[XAccountValidation.FetchFundAccountValidationError](src/resources/xaccount-validation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.xAccountValidation.fetchFundAccountValidation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FundAccountValidation, XAccountValidation.FetchFundAccountValidationError&gt;</code>, with `result.value` of type <code>[FundAccountValidation](src/models/fund-account-validation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listFundAccountValidations(request?: XAccountValidation.ListFundAccountValidationsRequest, options?: RequestOptions): ApiPromise&lt;FundAccountsValidationsResponse, XAccountValidation.ListFundAccountValidationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all fund account validation records, optionally filtered by date range.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.xAccountValidation.listFundAccountValidations();
  // TODO: Handle 'response' of type FundAccountsValidationsResponse
} catch (err) {
  // TODO: Handle 'err' of type XAccountValidation.ListFundAccountValidationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.xAccountValidation.listFundAccountValidations().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FundAccountsValidationsResponse
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
| <code>from?</code> | <code>number</code> | Unix timestamp. Only validations created from this timestamp onwards are returned. |
| <code>to?</code> | <code>number</code> | Unix timestamp. Only validations created before this timestamp are returned. |
| <code>count?</code> | <code>number</code> | Number of validation records to return. Default: 10. Maximum: 100.<br>**Default**: 10 |
| <code>skip?</code> | <code>number</code> | Number of validation records to skip. Use for pagination. Default: 0.<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.xAccountValidation.listFundAccountValidations(request)`

- **OnSuccess**: <code>[FundAccountsValidationsResponse](src/models/fund-accounts-validations-response.ts)</code>
- **OnError**: throws <code>[XAccountValidation.ListFundAccountValidationsError](src/resources/xaccount-validation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.xAccountValidation.listFundAccountValidations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FundAccountsValidationsResponse, XAccountValidation.ListFundAccountValidationsError&gt;</code>, with `result.value` of type <code>[FundAccountsValidationsResponse](src/models/fund-accounts-validations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>validateFundAccount(request: XAccountValidation.ValidateFundAccountRequest, options?: RequestOptions): ApiPromise&lt;FundAccountValidation, XAccountValidation.ValidateFundAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Three validation methods: (1) penny drop for bank accounts — sends Re.1 to verify; (2) penny drop for VPA — sends Re.1 to UPI address; (3) reverse penny drop — sends UPI intent URL to customer who initiates payment. Live-mode only, RazorpayX Lite account required. Composite validation (creates Contact + Fund Account inline) supported via validation_type field.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.xAccountValidation.validateFundAccount({
    body: { accountType: AccountType.BankAccount, fundAccount: {} },
  });
  // TODO: Handle 'response' of type FundAccountValidation
} catch (err) {
  // TODO: Handle 'err' of type XAccountValidation.ValidateFundAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.xAccountValidation
  .validateFundAccount({ body: { accountType: AccountType.BankAccount, fundAccount: {} } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FundAccountValidation
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
| <code>body</code> | <code>[FundAccountsValidationsRequest](src/models/fund-accounts-validations-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.xAccountValidation.validateFundAccount(request)`

- **OnSuccess**: <code>[FundAccountValidation](src/models/fund-account-validation.ts)</code>
- **OnError**: throws <code>[XAccountValidation.ValidateFundAccountError](src/resources/xaccount-validation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.xAccountValidation.validateFundAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FundAccountValidation, XAccountValidation.ValidateFundAccountError&gt;</code>, with `result.value` of type <code>[FundAccountValidation](src/models/fund-account-validation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## XBankingBalances

> Source: [XBankingBalances](src/resources/xbanking-balances.ts)

<details>
<summary><code>fetchBankingBalances(request?: XBankingBalances.FetchBankingBalancesRequest, options?: RequestOptions): ApiPromise&lt;BankingBalancesResponse, XBankingBalances.FetchBankingBalancesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch balance details for RazorpayX current accounts or RazorpayX Lite accounts.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.xBankingBalances.fetchBankingBalances();
  // TODO: Handle 'response' of type BankingBalancesResponse
} catch (err) {
  // TODO: Handle 'err' of type XBankingBalances.FetchBankingBalancesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.xBankingBalances.fetchBankingBalances().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BankingBalancesResponse
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
| <code>accountType?</code> | <code>[AccountType1](src/models/account-type1.ts)</code> | Type of RazorpayX account to query. Accepted values: `current_account` or `razorpayx_lite`. |
| <code>bankCode?</code> | <code>string</code> | First 4 characters of IFSC |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.xBankingBalances.fetchBankingBalances(request)`

- **OnSuccess**: <code>[BankingBalancesResponse](src/models/banking-balances-response.ts)</code>
- **OnError**: throws <code>[XBankingBalances.FetchBankingBalancesError](src/resources/xbanking-balances.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.xBankingBalances.fetchBankingBalances(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BankingBalancesResponse, XBankingBalances.FetchBankingBalancesError&gt;</code>, with `result.value` of type <code>[BankingBalancesResponse](src/models/banking-balances-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## XContacts

> Source: [XContacts](src/resources/xcontacts.ts)

<details>
<summary><code>createContact(request: XContacts.CreateContactRequest, options?: RequestOptions): ApiPromise&lt;XContact, XContacts.CreateContactError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a payout recipient contact. Returns existing contact if all identifying fields (name, email, contact, type) match an existing record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.xContacts.createContact({ body: { name: "some example string" } });
  // TODO: Handle 'response' of type XContact
} catch (err) {
  // TODO: Handle 'err' of type XContacts.CreateContactError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.xContacts.createContact({ body: { name: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type XContact
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
| <code>body</code> | <code>[ContactsRequest](src/models/contacts-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.xContacts.createContact(request)`

- **OnSuccess**: <code>[XContact](src/models/xcontact.ts)</code>
- **OnError**: throws <code>[XContacts.CreateContactError](src/resources/xcontacts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.xContacts.createContact(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;XContact, XContacts.CreateContactError&gt;</code>, with `result.value` of type <code>[XContact](src/models/xcontact.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchContact(request: XContacts.FetchContactRequest, options?: RequestOptions): ApiPromise&lt;XContact, XContacts.FetchContactError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch details of a specific contact by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.xContacts.fetchContact({ contactId: "some example string" });
  // TODO: Handle 'response' of type XContact
} catch (err) {
  // TODO: Handle 'err' of type XContacts.FetchContactError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.xContacts.fetchContact({ contactId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type XContact
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
| <code>contactId</code> | <code>string</code> | Unique identifier of the contact (e.g. `cont_00000000000001`). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.xContacts.fetchContact(request)`

- **OnSuccess**: <code>[XContact](src/models/xcontact.ts)</code>
- **OnError**: throws <code>[XContacts.FetchContactError](src/resources/xcontacts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.xContacts.fetchContact(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;XContact, XContacts.FetchContactError&gt;</code>, with `result.value` of type <code>[XContact](src/models/xcontact.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listContacts(request?: XContacts.ListContactsRequest, options?: RequestOptions): ApiPromise&lt;ContactsResponse, XContacts.ListContactsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Filter and list all contacts. Supports filtering by name, email, phone number, reference ID, and active status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.xContacts.listContacts();
  // TODO: Handle 'response' of type ContactsResponse
} catch (err) {
  // TODO: Handle 'err' of type XContacts.ListContactsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.xContacts.listContacts().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContactsResponse
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
| <code>name?</code> | <code>string</code> | Filter by contact name (partial match supported). |
| <code>email?</code> | <code>string</code> | Filter by contact email address. |
| <code>contact?</code> | <code>string</code> | Filter by contact phone number. |
| <code>referenceId?</code> | <code>string</code> | Filter by your unique reference ID for the contact (max 40 chars). |
| <code>from?</code> | <code>number</code> | Unix timestamp filter |
| <code>to?</code> | <code>number</code> | Unix timestamp. Only contacts created before this timestamp are returned. |
| <code>count?</code> | <code>number</code> | Number of contacts to return. Default: 10. Maximum: 100.<br>**Default**: 10 |
| <code>skip?</code> | <code>number</code> | Number of contacts to skip. Use for pagination. Default: 0.<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.xContacts.listContacts(request)`

- **OnSuccess**: <code>[ContactsResponse](src/models/contacts-response.ts)</code>
- **OnError**: throws <code>[XContacts.ListContactsError](src/resources/xcontacts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.xContacts.listContacts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContactsResponse, XContacts.ListContactsError&gt;</code>, with `result.value` of type <code>[ContactsResponse](src/models/contacts-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateContact(request: XContacts.UpdateContactRequest, options?: RequestOptions): ApiPromise&lt;XContact, XContacts.UpdateContactError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update contact details or activate/deactivate a contact. Set `active: false` to deactivate.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.xContacts.updateContact({ contactId: "some example string", body: {} });
  // TODO: Handle 'response' of type XContact
} catch (err) {
  // TODO: Handle 'err' of type XContacts.UpdateContactError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.xContacts
  .updateContact({ contactId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type XContact
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
| <code>contactId</code> | <code>string</code> | Unique identifier of the contact (e.g. `cont_00000000000001`). |
| <code>body</code> | <code>[ContactsRequest1](src/models/contacts-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.xContacts.updateContact(request)`

- **OnSuccess**: <code>[XContact](src/models/xcontact.ts)</code>
- **OnError**: throws <code>[XContacts.UpdateContactError](src/resources/xcontacts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.xContacts.updateContact(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;XContact, XContacts.UpdateContactError&gt;</code>, with `result.value` of type <code>[XContact](src/models/xcontact.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## XFundAccounts

> Source: [XFundAccounts](src/resources/xfund-accounts.ts)

<details>
<summary><code>activateDeactivateFundAccount(request: XFundAccounts.ActivateDeactivateFundAccountRequest, options?: RequestOptions): ApiPromise&lt;FundAccountRazorpayXFundAccountsApi, XFundAccounts.ActivateDeactivateFundAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Activate or deactivate a fund account. Fund account details are immutable — only the `active` status can be changed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.xFundAccounts.activateDeactivateFundAccount({
    fundAccountId: "some example string",
    body: { active: true },
  });
  // TODO: Handle 'response' of type FundAccountRazorpayXFundAccountsApi
} catch (err) {
  // TODO: Handle 'err' of type XFundAccounts.ActivateDeactivateFundAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.xFundAccounts
  .activateDeactivateFundAccount({ fundAccountId: "some example string", body: { active: true } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FundAccountRazorpayXFundAccountsApi
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
| <code>fundAccountId</code> | <code>string</code> | Unique identifier of the fund account (e.g. `fa_00000000000001`). |
| <code>body</code> | <code>[FundAccountsRequest1](src/models/fund-accounts-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.xFundAccounts.activateDeactivateFundAccount(request)`

- **OnSuccess**: <code>[FundAccountRazorpayXFundAccountsApi](src/models/fund-account-razorpay-xfund-accounts-api.ts)</code>
- **OnError**: throws <code>[XFundAccounts.ActivateDeactivateFundAccountError](src/resources/xfund-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.xFundAccounts.activateDeactivateFundAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FundAccountRazorpayXFundAccountsApi, XFundAccounts.ActivateDeactivateFundAccountError&gt;</code>, with `result.value` of type <code>[FundAccountRazorpayXFundAccountsApi](src/models/fund-account-razorpay-xfund-accounts-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createFundAccount(request: XFundAccounts.CreateFundAccountRequest, options?: RequestOptions): ApiPromise&lt;FundAccountRazorpayXFundAccountsApi, XFundAccounts.CreateFundAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a bank account, VPA, card, or wallet (Amazon Pay) fund account linked to a contact. Fund accounts are immutable after creation. Returns existing record if contact_id + account details all match.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.xFundAccounts.createFundAccount({
    body: { contactId: "some example string", accountType: AccountTypeRazorpayXFundAccountsApi.BankAccount },
  });
  // TODO: Handle 'response' of type FundAccountRazorpayXFundAccountsApi
} catch (err) {
  // TODO: Handle 'err' of type XFundAccounts.CreateFundAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.xFundAccounts
  .createFundAccount({
    body: { contactId: "some example string", accountType: AccountTypeRazorpayXFundAccountsApi.BankAccount },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FundAccountRazorpayXFundAccountsApi
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
| <code>body</code> | <code>[FundAccountsRequest](src/models/fund-accounts-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.xFundAccounts.createFundAccount(request)`

- **OnSuccess**: <code>[FundAccountRazorpayXFundAccountsApi](src/models/fund-account-razorpay-xfund-accounts-api.ts)</code>
- **OnError**: throws <code>[XFundAccounts.CreateFundAccountError](src/resources/xfund-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.xFundAccounts.createFundAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FundAccountRazorpayXFundAccountsApi, XFundAccounts.CreateFundAccountError&gt;</code>, with `result.value` of type <code>[FundAccountRazorpayXFundAccountsApi](src/models/fund-account-razorpay-xfund-accounts-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchFundAccount(request: XFundAccounts.FetchFundAccountRequest, options?: RequestOptions): ApiPromise&lt;FundAccountRazorpayXFundAccountsApi, XFundAccounts.FetchFundAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch details of a specific fund account by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.xFundAccounts.fetchFundAccount({ fundAccountId: "some example string" });
  // TODO: Handle 'response' of type FundAccountRazorpayXFundAccountsApi
} catch (err) {
  // TODO: Handle 'err' of type XFundAccounts.FetchFundAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.xFundAccounts
  .fetchFundAccount({ fundAccountId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FundAccountRazorpayXFundAccountsApi
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
| <code>fundAccountId</code> | <code>string</code> | Unique identifier of the fund account (e.g. `fa_00000000000001`). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.xFundAccounts.fetchFundAccount(request)`

- **OnSuccess**: <code>[FundAccountRazorpayXFundAccountsApi](src/models/fund-account-razorpay-xfund-accounts-api.ts)</code>
- **OnError**: throws <code>[XFundAccounts.FetchFundAccountError](src/resources/xfund-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.xFundAccounts.fetchFundAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FundAccountRazorpayXFundAccountsApi, XFundAccounts.FetchFundAccountError&gt;</code>, with `result.value` of type <code>[FundAccountRazorpayXFundAccountsApi](src/models/fund-account-razorpay-xfund-accounts-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listFundAccounts(request?: XFundAccounts.ListFundAccountsRequest, options?: RequestOptions): ApiPromise&lt;FundAccountsResponse, XFundAccounts.ListFundAccountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List fund accounts linked to contacts. Filter by contact ID and/or account type.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.xFundAccounts.listFundAccounts();
  // TODO: Handle 'response' of type FundAccountsResponse
} catch (err) {
  // TODO: Handle 'err' of type XFundAccounts.ListFundAccountsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.xFundAccounts.listFundAccounts().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FundAccountsResponse
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
| <code>contactId?</code> | <code>string</code> | Filter by contact ID to list fund accounts linked to that contact. |
| <code>accountType?</code> | <code>string</code> | Filter by fund account type: `bank_account`, `vpa`, `card`, or `wallet`. |
| <code>count?</code> | <code>number</code> | Number of fund accounts to return. Default: 10. Maximum: 100.<br>**Default**: 10 |
| <code>skip?</code> | <code>number</code> | Number of fund accounts to skip. Use for pagination. Default: 0.<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.xFundAccounts.listFundAccounts(request)`

- **OnSuccess**: <code>[FundAccountsResponse](src/models/fund-accounts-response.ts)</code>
- **OnError**: throws <code>[XFundAccounts.ListFundAccountsError](src/resources/xfund-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.xFundAccounts.listFundAccounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FundAccountsResponse, XFundAccounts.ListFundAccountsError&gt;</code>, with `result.value` of type <code>[FundAccountsResponse](src/models/fund-accounts-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## XPayoutLinks

> Source: [XPayoutLinks](src/resources/xpayout-links.ts)

<details>
<summary><code>cancelPayoutLink(request: XPayoutLinks.CancelPayoutLinkRequest, options?: RequestOptions): ApiPromise&lt;PayoutLink, XPayoutLinks.CancelPayoutLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel a payout link that is in `issued` or `pending` state.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.xPayoutLinks.cancelPayoutLink({ payoutLinkId: "some example string" });
  // TODO: Handle 'response' of type PayoutLink
} catch (err) {
  // TODO: Handle 'err' of type XPayoutLinks.CancelPayoutLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.xPayoutLinks
  .cancelPayoutLink({ payoutLinkId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PayoutLink
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
| <code>payoutLinkId</code> | <code>string</code> | Unique identifier of the payout link to cancel. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.xPayoutLinks.cancelPayoutLink(request)`

- **OnSuccess**: <code>[PayoutLink](src/models/payout-link.ts)</code>
- **OnError**: throws <code>[XPayoutLinks.CancelPayoutLinkError](src/resources/xpayout-links.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.xPayoutLinks.cancelPayoutLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PayoutLink, XPayoutLinks.CancelPayoutLinkError&gt;</code>, with `result.value` of type <code>[PayoutLink](src/models/payout-link.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createPayoutLink(request: XPayoutLinks.CreatePayoutLinkRequest, options?: RequestOptions): ApiPromise&lt;PayoutLink, XPayoutLinks.CreatePayoutLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a payout link to a contact when fund account details are unavailable. expire_by must be at least 15 minutes in the future.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.xPayoutLinks.createPayoutLink({
    body: { contactId: "some example string", amount: 1, purpose: "some example string" },
  });
  // TODO: Handle 'response' of type PayoutLink
} catch (err) {
  // TODO: Handle 'err' of type XPayoutLinks.CreatePayoutLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.xPayoutLinks
  .createPayoutLink({ body: { contactId: "some example string", amount: 1, purpose: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PayoutLink
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
| <code>body</code> | <code>[PayoutLinksRequest](src/models/payout-links-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.xPayoutLinks.createPayoutLink(request)`

- **OnSuccess**: <code>[PayoutLink](src/models/payout-link.ts)</code>
- **OnError**: throws <code>[XPayoutLinks.CreatePayoutLinkError](src/resources/xpayout-links.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.xPayoutLinks.createPayoutLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PayoutLink, XPayoutLinks.CreatePayoutLinkError&gt;</code>, with `result.value` of type <code>[PayoutLink](src/models/payout-link.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchPayoutLink(request: XPayoutLinks.FetchPayoutLinkRequest, options?: RequestOptions): ApiPromise&lt;PayoutLink, XPayoutLinks.FetchPayoutLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch details of a specific payout link by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.xPayoutLinks.fetchPayoutLink({ payoutLinkId: "some example string" });
  // TODO: Handle 'response' of type PayoutLink
} catch (err) {
  // TODO: Handle 'err' of type XPayoutLinks.FetchPayoutLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.xPayoutLinks
  .fetchPayoutLink({ payoutLinkId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PayoutLink
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
| <code>payoutLinkId</code> | <code>string</code> | Unique identifier of the payout link (e.g. `poutlk_00000000000001`). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.xPayoutLinks.fetchPayoutLink(request)`

- **OnSuccess**: <code>[PayoutLink](src/models/payout-link.ts)</code>
- **OnError**: throws <code>[XPayoutLinks.FetchPayoutLinkError](src/resources/xpayout-links.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.xPayoutLinks.fetchPayoutLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PayoutLink, XPayoutLinks.FetchPayoutLinkError&gt;</code>, with `result.value` of type <code>[PayoutLink](src/models/payout-link.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPayoutLinks(request?: XPayoutLinks.ListPayoutLinksRequest, options?: RequestOptions): ApiPromise&lt;PayoutLinksResponse, XPayoutLinks.ListPayoutLinksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all payout links. Filter by contact ID, status, or date range.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.xPayoutLinks.listPayoutLinks();
  // TODO: Handle 'response' of type PayoutLinksResponse
} catch (err) {
  // TODO: Handle 'err' of type XPayoutLinks.ListPayoutLinksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.xPayoutLinks.listPayoutLinks().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PayoutLinksResponse
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
| <code>contactId?</code> | <code>string</code> | Filter payout links by the contact ID of the recipient. |
| <code>from?</code> | <code>number</code> | Unix timestamp. Only payout links created from this timestamp onwards are returned. |
| <code>to?</code> | <code>number</code> | Unix timestamp. Only payout links created before this timestamp are returned. |
| <code>count?</code> | <code>number</code> | Number of payout links to return. Default: 10.<br>**Default**: 10 |
| <code>skip?</code> | <code>number</code> | Number of payout links to skip. Use for pagination. Default: 0.<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.xPayoutLinks.listPayoutLinks(request)`

- **OnSuccess**: <code>[PayoutLinksResponse](src/models/payout-links-response.ts)</code>
- **OnError**: throws <code>[XPayoutLinks.ListPayoutLinksError](src/resources/xpayout-links.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.xPayoutLinks.listPayoutLinks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PayoutLinksResponse, XPayoutLinks.ListPayoutLinksError&gt;</code>, with `result.value` of type <code>[PayoutLinksResponse](src/models/payout-links-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## XPayouts

> Source: [XPayouts](src/resources/xpayouts.ts)

<details>
<summary><code>approvePayout(request: XPayouts.ApprovePayoutRequest, options?: RequestOptions): ApiPromise&lt;Payout, XPayouts.ApprovePayoutError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Requires Payouts Approval workflow enabled and Technology Partner status with OAuth.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.xPayouts.approvePayout({ payoutId: "some example string" });
  // TODO: Handle 'response' of type Payout
} catch (err) {
  // TODO: Handle 'err' of type XPayouts.ApprovePayoutError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.xPayouts.approvePayout({ payoutId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Payout
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
| <code>payoutId</code> | <code>string</code> | Unique identifier of the payout to approve. |
| <code>body?</code> | <code>[PayoutsApproveRequest](src/models/payouts-approve-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.xPayouts.approvePayout(request)`

- **OnSuccess**: <code>[Payout](src/models/payout.ts)</code>
- **OnError**: throws <code>[XPayouts.ApprovePayoutError](src/resources/xpayouts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.xPayouts.approvePayout(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Payout, XPayouts.ApprovePayoutError&gt;</code>, with `result.value` of type <code>[Payout](src/models/payout.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelPayout(request: XPayouts.CancelPayoutRequest, options?: RequestOptions): ApiPromise&lt;Payout, XPayouts.CancelPayoutError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Only payouts in 'queued' status can be cancelled.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.xPayouts.cancelPayout({ payoutId: "some example string" });
  // TODO: Handle 'response' of type Payout
} catch (err) {
  // TODO: Handle 'err' of type XPayouts.CancelPayoutError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.xPayouts.cancelPayout({ payoutId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Payout
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
| <code>payoutId</code> | <code>string</code> | Unique identifier of the payout to cancel. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.xPayouts.cancelPayout(request)`

- **OnSuccess**: <code>[Payout](src/models/payout.ts)</code>
- **OnError**: throws <code>[XPayouts.CancelPayoutError](src/resources/xpayouts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.xPayouts.cancelPayout(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Payout, XPayouts.CancelPayoutError&gt;</code>, with `result.value` of type <code>[Payout](src/models/payout.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createPayout(request: XPayouts.CreatePayoutRequest, options?: RequestOptions): ApiPromise&lt;Payout, XPayouts.CreatePayoutError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disburse funds via NEFT, RTGS, IMPS, UPI, or card. Supports standard payouts (fund_account_id), composite payouts (contact + fund account inline), card payouts (PCI DSS required), and mobile number payouts (resolved via NPCI mapper). Idempotency header X-Payout-Idempotency (UUID v4, 4–36 chars) is mandatory since March 15, 2025. Never generate a new idempotency key while a payout is in 'processing' state.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.xPayouts.createPayout({
    xPayoutIdempotency: "some example string",
    body: { accountNumber: "some example string", amount: 1, mode: Mode1.Neft, purpose: Purpose.Refund },
  });
  // TODO: Handle 'response' of type Payout
} catch (err) {
  // TODO: Handle 'err' of type XPayouts.CreatePayoutError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.xPayouts
  .createPayout({
    xPayoutIdempotency: "some example string",
    body: { accountNumber: "some example string", amount: 1, mode: Mode1.Neft, purpose: Purpose.Refund },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Payout
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
| <code>xPayoutIdempotency</code> | <code>string</code> | UUID v4 idempotency key. Mandatory since March 15, 2025. |
| <code>body</code> | <code>[PayoutsRequest](src/models/payouts-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.xPayouts.createPayout(request)`

- **OnSuccess**: <code>[Payout](src/models/payout.ts)</code>
- **OnError**: throws <code>[XPayouts.CreatePayoutError](src/resources/xpayouts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.xPayouts.createPayout(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Payout, XPayouts.CreatePayoutError&gt;</code>, with `result.value` of type <code>[Payout](src/models/payout.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchPayout(request: XPayouts.FetchPayoutRequest, options?: RequestOptions): ApiPromise&lt;Payout, XPayouts.FetchPayoutError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch details of a specific payout by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.xPayouts.fetchPayout({ payoutId: "some example string" });
  // TODO: Handle 'response' of type Payout
} catch (err) {
  // TODO: Handle 'err' of type XPayouts.FetchPayoutError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.xPayouts.fetchPayout({ payoutId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Payout
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
| <code>payoutId</code> | <code>string</code> | Unique identifier of the payout (e.g. `pout_00000000000001`). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.xPayouts.fetchPayout(request)`

- **OnSuccess**: <code>[Payout](src/models/payout.ts)</code>
- **OnError**: throws <code>[XPayouts.FetchPayoutError](src/resources/xpayouts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.xPayouts.fetchPayout(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Payout, XPayouts.FetchPayoutError&gt;</code>, with `result.value` of type <code>[Payout](src/models/payout.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPayouts(request: XPayouts.ListPayoutsRequest, options?: RequestOptions): ApiPromise&lt;PayoutsResponse, XPayouts.ListPayoutsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List payouts for a given RazorpayX account. Filter by contact, fund account, date range, or status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.xPayouts.listPayouts({ accountNumber: "some example string" });
  // TODO: Handle 'response' of type PayoutsResponse
} catch (err) {
  // TODO: Handle 'err' of type XPayouts.ListPayoutsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.xPayouts.listPayouts({ accountNumber: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PayoutsResponse
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
| <code>accountNumber</code> | <code>string</code> | The RazorpayX account number (Customer Identifier from Dashboard → My Account & Settings → Banking). Required to scope results to a specific account. |
| <code>contactId?</code> | <code>string</code> | Filter payouts by the contact ID of the recipient. |
| <code>fundAccountId?</code> | <code>string</code> | Filter payouts by fund account ID. |
| <code>from?</code> | <code>number</code> | Unix timestamp. Only payouts created from this timestamp onwards are returned. |
| <code>to?</code> | <code>number</code> | Unix timestamp. Only payouts created before this timestamp are returned. |
| <code>count?</code> | <code>number</code> | Number of payouts to return. Default: 10. Maximum: 100.<br>**Default**: 25 |
| <code>skip?</code> | <code>number</code> | Number of payouts to skip. Use for pagination. Default: 0.<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.xPayouts.listPayouts(request)`

- **OnSuccess**: <code>[PayoutsResponse](src/models/payouts-response.ts)</code>
- **OnError**: throws <code>[XPayouts.ListPayoutsError](src/resources/xpayouts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.xPayouts.listPayouts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PayoutsResponse, XPayouts.ListPayoutsError&gt;</code>, with `result.value` of type <code>[PayoutsResponse](src/models/payouts-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>rejectPayout(request: XPayouts.RejectPayoutRequest, options?: RequestOptions): ApiPromise&lt;Payout, XPayouts.RejectPayoutError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Requires Payouts Approval workflow enabled and Technology Partner status with OAuth.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.xPayouts.rejectPayout({ payoutId: "some example string" });
  // TODO: Handle 'response' of type Payout
} catch (err) {
  // TODO: Handle 'err' of type XPayouts.RejectPayoutError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.xPayouts.rejectPayout({ payoutId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Payout
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
| <code>payoutId</code> | <code>string</code> | Unique identifier of the payout to reject. |
| <code>body?</code> | <code>[PayoutsRejectRequest](src/models/payouts-reject-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.xPayouts.rejectPayout(request)`

- **OnSuccess**: <code>[Payout](src/models/payout.ts)</code>
- **OnError**: throws <code>[XPayouts.RejectPayoutError](src/resources/xpayouts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.xPayouts.rejectPayout(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Payout, XPayouts.RejectPayoutError&gt;</code>, with `result.value` of type <code>[Payout](src/models/payout.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## XTransactions

> Source: [XTransactions](src/resources/xtransactions.ts)

<details>
<summary><code>fetchTransaction(request: XTransactions.FetchTransactionRequest, options?: RequestOptions): ApiPromise&lt;XTransaction, XTransactions.FetchTransactionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch details of a specific transaction from a RazorpayX account by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.xTransactions.fetchTransaction({ transactionId: "some example string" });
  // TODO: Handle 'response' of type XTransaction
} catch (err) {
  // TODO: Handle 'err' of type XTransactions.FetchTransactionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.xTransactions
  .fetchTransaction({ transactionId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type XTransaction
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
| <code>transactionId</code> | <code>string</code> | Transaction ID (txn_*) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.xTransactions.fetchTransaction(request)`

- **OnSuccess**: <code>[XTransaction](src/models/xtransaction.ts)</code>
- **OnError**: throws <code>[XTransactions.FetchTransactionError](src/resources/xtransactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.xTransactions.fetchTransaction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;XTransaction, XTransactions.FetchTransactionError&gt;</code>, with `result.value` of type <code>[XTransaction](src/models/xtransaction.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTransactions(request: XTransactions.ListTransactionsRequest, options?: RequestOptions): ApiPromise&lt;TransactionsResponse, XTransactions.ListTransactionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all transaction records (credits and debits) for a given RazorpayX account. Use account_number from Dashboard → My Account & Settings → Banking → Customer Identifier.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.xTransactions.listTransactions({ accountNumber: "some example string" });
  // TODO: Handle 'response' of type TransactionsResponse
} catch (err) {
  // TODO: Handle 'err' of type XTransactions.ListTransactionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.xTransactions
  .listTransactions({ accountNumber: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionsResponse
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
| <code>accountNumber</code> | <code>string</code> | RazorpayX account number (Customer Identifier from Dashboard). Different for Test and Live mode. |
| <code>from?</code> | <code>number</code> | Unix timestamp filter start |
| <code>to?</code> | <code>number</code> | Unix timestamp filter end |
| <code>count?</code> | <code>number</code> | Number of transactions to return. Default: 10. Maximum: 100.<br>**Default**: 10 |
| <code>skip?</code> | <code>number</code> | Number of transactions to skip. Use for pagination. Default: 0.<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.xTransactions.listTransactions(request)`

- **OnSuccess**: <code>[TransactionsResponse](src/models/transactions-response.ts)</code>
- **OnError**: throws <code>[XTransactions.ListTransactionsError](src/resources/xtransactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.xTransactions.listTransactions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionsResponse, XTransactions.ListTransactionsError&gt;</code>, with `result.value` of type <code>[TransactionsResponse](src/models/transactions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CurlecError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

