# Reference

> Source: [DivvyClient](src/client.ts)

## Attachments

> Source: [Attachments](src/resources/attachments.ts)

<details>
<summary><code>createCustomerAttachment(request: Attachments.CreateCustomerAttachmentRequest, options?: RequestOptions): ApiPromise&lt;AttachmentResponseDto, Attachments.CreateCustomerAttachmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload an attachment for an existing customer. The file size limit is 6 MB.

**Note**: When you upload an attachment, it takes a few minutes for BILL to complete the upload process.

See Documents and attachments in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attachments.createCustomerAttachment({
    customerId: "{{customer_id}}",
    name: "business_details.pdf",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: ["some example string"],
  });
  // TODO: Handle 'response' of type AttachmentResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Attachments.CreateCustomerAttachmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attachments
  .createCustomerAttachment({
    customerId: "{{customer_id}}",
    name: "business_details.pdf",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: ["some example string"],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AttachmentResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>name</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>string[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attachments.createCustomerAttachment(request)`

- **OnSuccess**: <code>[AttachmentResponseDto](src/models/attachment-response-dto.ts)</code>
- **OnError**: throws <code>[Attachments.CreateCustomerAttachmentError](src/resources/attachments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.attachments.createCustomerAttachment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AttachmentResponseDto, Attachments.CreateCustomerAttachmentError&gt;</code>, with `result.value` of type <code>[AttachmentResponseDto](src/models/attachment-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createInvoiceAttachment(request: Attachments.CreateInvoiceAttachmentRequest, options?: RequestOptions): ApiPromise&lt;AttachmentResponseDto, Attachments.CreateInvoiceAttachmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload an attachment for an existing invoice. The file size limit is 6 MB.

**Note**: When you upload an attachment, it takes a few minutes for BILL to complete the upload process.

See Documents and attachments in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attachments.createInvoiceAttachment({
    invoiceId: "{{invoice_id}}",
    name: "business_details.pdf",
    replaceInvoicePdf: false,
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: ["some example string"],
  });
  // TODO: Handle 'response' of type AttachmentResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Attachments.CreateInvoiceAttachmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attachments
  .createInvoiceAttachment({
    invoiceId: "{{invoice_id}}",
    name: "business_details.pdf",
    replaceInvoicePdf: false,
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: ["some example string"],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AttachmentResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>invoiceId</code> | <code>string</code> | - |
| <code>name</code> | <code>string</code> | - |
| <code>replaceInvoicePdf?</code> | <code>boolean</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>string[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attachments.createInvoiceAttachment(request)`

- **OnSuccess**: <code>[AttachmentResponseDto](src/models/attachment-response-dto.ts)</code>
- **OnError**: throws <code>[Attachments.CreateInvoiceAttachmentError](src/resources/attachments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.attachments.createInvoiceAttachment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AttachmentResponseDto, Attachments.CreateInvoiceAttachmentError&gt;</code>, with `result.value` of type <code>[AttachmentResponseDto](src/models/attachment-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createVendorAttachment(request: Attachments.CreateVendorAttachmentRequest, options?: RequestOptions): ApiPromise&lt;AttachmentResponseDto, Attachments.CreateVendorAttachmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload an attachment for an existing vendor. The file size limit is 6 MB.

**Note**: When you upload an attachment, it takes a few minutes for BILL to complete the upload process.

See Documents and attachments in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attachments.createVendorAttachment({
    vendorId: "{{vendor_id}}",
    name: "business_details.pdf",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: ["some example string"],
  });
  // TODO: Handle 'response' of type AttachmentResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Attachments.CreateVendorAttachmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attachments
  .createVendorAttachment({
    vendorId: "{{vendor_id}}",
    name: "business_details.pdf",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: ["some example string"],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AttachmentResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendorId</code> | <code>string</code> | - |
| <code>name</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>string[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attachments.createVendorAttachment(request)`

- **OnSuccess**: <code>[AttachmentResponseDto](src/models/attachment-response-dto.ts)</code>
- **OnError**: throws <code>[Attachments.CreateVendorAttachmentError](src/resources/attachments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.attachments.createVendorAttachment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AttachmentResponseDto, Attachments.CreateVendorAttachmentError&gt;</code>, with `result.value` of type <code>[AttachmentResponseDto](src/models/attachment-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteAttachment(request: Attachments.DeleteAttachmentRequest, options?: RequestOptions): ApiPromise&lt;StatusDto, Attachments.DeleteAttachmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete the existing attachment. A deleted attachment cannot be restored. The deleted attachment is not available in the list of attachments.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attachments.deleteAttachment({
    attachmentId: "{{attachment_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type StatusDto
} catch (err) {
  // TODO: Handle 'err' of type Attachments.DeleteAttachmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attachments
  .deleteAttachment({
    attachmentId: "{{attachment_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StatusDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>attachmentId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attachments.deleteAttachment(request)`

- **OnSuccess**: <code>[StatusDto](src/models/status-dto.ts)</code>
- **OnError**: throws <code>[Attachments.DeleteAttachmentError](src/resources/attachments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.attachments.deleteAttachment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StatusDto, Attachments.DeleteAttachmentError&gt;</code>, with `result.value` of type <code>[StatusDto](src/models/status-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAttachment(request: Attachments.GetAttachmentRequest, options?: RequestOptions): ApiPromise&lt;AttachmentResponseDto, Attachments.GetAttachmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an attachment.

From the response, use `downloadLink` in a GET request to download the attachment.

```
curl '{downloadLink}' --header 'sessionId: {session_id}' --output {attachment_name}
```

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attachments.getAttachment({
    attachmentId: "{{attachment_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type AttachmentResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Attachments.GetAttachmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attachments
  .getAttachment({
    attachmentId: "{{attachment_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AttachmentResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>attachmentId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attachments.getAttachment(request)`

- **OnSuccess**: <code>[AttachmentResponseDto](src/models/attachment-response-dto.ts)</code>
- **OnError**: throws <code>[Attachments.GetAttachmentError](src/resources/attachments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.attachments.getAttachment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AttachmentResponseDto, Attachments.GetAttachmentError&gt;</code>, with `result.value` of type <code>[AttachmentResponseDto](src/models/attachment-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomerAttachments(request: Attachments.ListCustomerAttachmentsRequest, options?: RequestOptions): ApiPromise&lt;ListResponseDtoAttachmentResponseDto, Attachments.ListCustomerAttachmentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of attachments associated with a customer.

From the response, use `downloadLink` in a GET request to download the attachment.

```
curl '{downloadLink}' --header 'sessionId: {session_id}' --output {attachment_name}
```

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attachments.listCustomerAttachments({
    customerId: "{{customer_id}}",
    max: 10,
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListResponseDtoAttachmentResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Attachments.ListCustomerAttachmentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attachments
  .listCustomerAttachments({
    customerId: "{{customer_id}}",
    max: 10,
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseDtoAttachmentResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>max?</code> | <code>number</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attachments.listCustomerAttachments(request)`

- **OnSuccess**: <code>[ListResponseDtoAttachmentResponseDto](src/models/list-response-dto-attachment-response-dto.ts)</code>
- **OnError**: throws <code>[Attachments.ListCustomerAttachmentsError](src/resources/attachments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.attachments.listCustomerAttachments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseDtoAttachmentResponseDto, Attachments.ListCustomerAttachmentsError&gt;</code>, with `result.value` of type <code>[ListResponseDtoAttachmentResponseDto](src/models/list-response-dto-attachment-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listInvoiceAttachments(request: Attachments.ListInvoiceAttachmentsRequest, options?: RequestOptions): ApiPromise&lt;ListResponseDtoAttachmentResponseDto, Attachments.ListInvoiceAttachmentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of attachments associated with an invoice.

From the response, use `downloadLink` in a GET request to download the attachment.

```
curl '{downloadLink}' --header 'sessionId: {session_id}' --output {attachment_name}
```

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attachments.listInvoiceAttachments({
    invoiceId: "{{invoice_id}}",
    max: 10,
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListResponseDtoAttachmentResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Attachments.ListInvoiceAttachmentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attachments
  .listInvoiceAttachments({
    invoiceId: "{{invoice_id}}",
    max: 10,
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseDtoAttachmentResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>invoiceId</code> | <code>string</code> | - |
| <code>max?</code> | <code>number</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attachments.listInvoiceAttachments(request)`

- **OnSuccess**: <code>[ListResponseDtoAttachmentResponseDto](src/models/list-response-dto-attachment-response-dto.ts)</code>
- **OnError**: throws <code>[Attachments.ListInvoiceAttachmentsError](src/resources/attachments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.attachments.listInvoiceAttachments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseDtoAttachmentResponseDto, Attachments.ListInvoiceAttachmentsError&gt;</code>, with `result.value` of type <code>[ListResponseDtoAttachmentResponseDto](src/models/list-response-dto-attachment-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listVendorAttachments(request: Attachments.ListVendorAttachmentsRequest, options?: RequestOptions): ApiPromise&lt;ListResponseDtoAttachmentResponseDto, Attachments.ListVendorAttachmentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of attachments associated with a vendor.

From the response, use `downloadLink` in a GET request to download the attachment.

```
curl '{downloadLink}' --header 'sessionId: {session_id}' --output {attachment_name}
```

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attachments.listVendorAttachments({
    vendorId: "{{vendor_id}}",
    max: 10,
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListResponseDtoAttachmentResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Attachments.ListVendorAttachmentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attachments
  .listVendorAttachments({
    vendorId: "{{vendor_id}}",
    max: 10,
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseDtoAttachmentResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendorId</code> | <code>string</code> | - |
| <code>max?</code> | <code>number</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attachments.listVendorAttachments(request)`

- **OnSuccess**: <code>[ListResponseDtoAttachmentResponseDto](src/models/list-response-dto-attachment-response-dto.ts)</code>
- **OnError**: throws <code>[Attachments.ListVendorAttachmentsError](src/resources/attachments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.attachments.listVendorAttachments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseDtoAttachmentResponseDto, Attachments.ListVendorAttachmentsError&gt;</code>, with `result.value` of type <code>[ListResponseDtoAttachmentResponseDto](src/models/list-response-dto-attachment-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Authentication

> Source: [Authentication](src/resources/authentication.ts)

<details>
<summary><code>getSessionInfo(request?: Authentication.GetSessionInfoRequest, options?: RequestOptions): ApiPromise&lt;SessionInfoResponseDto, Authentication.GetSessionInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about your current API session. This includes information about the current organization ID, user ID, and MFA status of the organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authentication.getSessionInfo({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type SessionInfoResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Authentication.GetSessionInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authentication
  .getSessionInfo({ sessionId: "{{session_id}}", devKey: "{{developer_key}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SessionInfoResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authentication.getSessionInfo(request)`

- **OnSuccess**: <code>[SessionInfoResponseDto](src/models/session-info-response-dto.ts)</code>
- **OnError**: throws <code>[Authentication.GetSessionInfoError](src/resources/authentication.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authentication.getSessionInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SessionInfoResponseDto, Authentication.GetSessionInfoError&gt;</code>, with `result.value` of type <code>[SessionInfoResponseDto](src/models/session-info-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAllOrganizations(request?: Authentication.ListAllOrganizationsRequest, options?: RequestOptions): ApiPromise&lt;ListAllResponseDtoAllOrganizationsResponseDto, Authentication.ListAllOrganizationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of organizations you can access with your current API session. You get 100 results on one page of results.

In the response, you get a list of organizations and console organizations. When a console organization is available in the response, this indicates that the console organization is a parent of the listed organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authentication.listAllOrganizations({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListAllResponseDtoAllOrganizationsResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Authentication.ListAllOrganizationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authentication
  .listAllOrganizations({ sessionId: "{{session_id}}", devKey: "{{developer_key}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListAllResponseDtoAllOrganizationsResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authentication.listAllOrganizations(request)`

- **OnSuccess**: <code>[ListAllResponseDtoAllOrganizationsResponseDto](src/models/list-all-response-dto-all-organizations-response-dto.ts)</code>
- **OnError**: throws <code>[Authentication.ListAllOrganizationsError](src/resources/authentication.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authentication.listAllOrganizations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListAllResponseDtoAllOrganizationsResponseDto, Authentication.ListAllOrganizationsError&gt;</code>, with `result.value` of type <code>[ListAllResponseDtoAllOrganizationsResponseDto](src/models/list-all-response-dto-all-organizations-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>login(request: Authentication.LoginRequest, options?: RequestOptions): ApiPromise&lt;LoginResponseDto, Authentication.LoginError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sign in to your BILL developer account. In the response, your API session is created and a BILL-generated `sessionId` is available. Use the `sessionId` in all subsequent API calls to confirm that you are in a signed-in session.

To create an MFA-trusted API session, set `rememberMeId` and `device` in addition to the required fields. See MFA setup for information about the BILL MFA process.

You can sign out with `POST /v3/logout`. If your API session is inactive for 35 minutes, the session expires and you are automatically signed out.

See API partner login for information about the additional permissions you get with the API partner login.

**Note**: This section is about authentication for working with the BILL v3 API. See Authentication with Spend & Expense API token for information about authentication for the Spend & Expense API endpoints.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authentication.login({
    body: {
      devKey: "some example string",
      username: "some example string",
      organizationId: "some example string",
    },
  });
  // TODO: Handle 'response' of type LoginResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Authentication.LoginError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authentication
  .login({
    body: {
      devKey: "some example string",
      username: "some example string",
      organizationId: "some example string",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LoginResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[LoginRequestDto](src/models/login-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authentication.login(request)`

- **OnSuccess**: <code>[LoginResponseDto](src/models/login-response-dto.ts)</code>
- **OnError**: throws <code>[Authentication.LoginError](src/resources/authentication.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authentication.login(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LoginResponseDto, Authentication.LoginError&gt;</code>, with `result.value` of type <code>[LoginResponseDto](src/models/login-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>logout(request?: Authentication.LogoutRequest, options?: RequestOptions): ApiPromise&lt;undefined, Authentication.LogoutError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sign out of your BILL developer account. In response, the current `sessionId` expires and your API session is terminated.

You will be required to sign in again with `/v3/login` before you can make another API call.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.authentication.logout({ sessionId: "{{session_id}}", devKey: "{{developer_key}}" });
} catch (err) {
  // TODO: Handle 'err' of type Authentication.LogoutError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authentication
  .logout({ sessionId: "{{session_id}}", devKey: "{{developer_key}}" })
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
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authentication.logout(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Authentication.LogoutError](src/resources/authentication.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authentication.logout(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Authentication.LogoutError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## BillApprovals

> Source: [BillApprovals](src/resources/bill-approvals.ts)

<details>
<summary><code>billApproveDenyActions(request: BillApprovals.BillApproveDenyActionsRequest, options?: RequestOptions): ApiPromise&lt;StatusDto, BillApprovals.BillApproveDenyActionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Approve or deny a bill. Approved bills can be paid. In the request, create an array of objects, where each object represents a single bill along with its approval or denial status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.billApprovals.billApproveDenyActions({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [{ billId: "some example string", action: BillApproveDenyAction.Approve }],
  });
  // TODO: Handle 'response' of type StatusDto
} catch (err) {
  // TODO: Handle 'err' of type BillApprovals.BillApproveDenyActionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.billApprovals
  .billApproveDenyActions({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [{ billId: "some example string", action: BillApproveDenyAction.Approve }],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StatusDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[BillApproveDenyActionRequestDto](src/models/bill-approve-deny-action-request-dto.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.billApprovals.billApproveDenyActions(request)`

- **OnSuccess**: <code>[StatusDto](src/models/status-dto.ts)</code>
- **OnError**: throws <code>[BillApprovals.BillApproveDenyActionsError](src/resources/bill-approvals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.billApprovals.billApproveDenyActions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StatusDto, BillApprovals.BillApproveDenyActionsError&gt;</code>, with `result.value` of type <code>[StatusDto](src/models/status-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createBillApprovalPolicy(request: BillApprovals.CreateBillApprovalPolicyRequest, options?: RequestOptions): ApiPromise&lt;BillApprovalPolicyResponseDto, BillApprovals.CreateBillApprovalPolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new bill approval policy.

In your request, set `rules` and `approvers` in the specified format. For example, to create a bill approval policy for all bills greater than or equal to `$1000`, set `rules` for `BILL_AMOUNT`.
```
{
"policyName": "Approval policy for bills >= $1000",
"rules": [
{
"key": "BILL_AMOUNT",
"op": "gte",
"values": [
"1000"
]
}
],
"approvers": [
"{approver_user_id}"
]
}
```

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.billApprovals.createBillApprovalPolicy({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { policyName: "some example string", rules: [{}], approvers: ["some example string"] },
  });
  // TODO: Handle 'response' of type BillApprovalPolicyResponseDto
} catch (err) {
  // TODO: Handle 'err' of type BillApprovals.CreateBillApprovalPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.billApprovals
  .createBillApprovalPolicy({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { policyName: "some example string", rules: [{}], approvers: ["some example string"] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BillApprovalPolicyResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[BillApprovalPolicyRequestDto](src/models/bill-approval-policy-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.billApprovals.createBillApprovalPolicy(request)`

- **OnSuccess**: <code>[BillApprovalPolicyResponseDto](src/models/bill-approval-policy-response-dto.ts)</code>
- **OnError**: throws <code>[BillApprovals.CreateBillApprovalPolicyError](src/resources/bill-approvals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.billApprovals.createBillApprovalPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BillApprovalPolicyResponseDto, BillApprovals.CreateBillApprovalPolicyError&gt;</code>, with `result.value` of type <code>[BillApprovalPolicyResponseDto](src/models/bill-approval-policy-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deletePolicy(request: BillApprovals.DeletePolicyRequest, options?: RequestOptions): ApiPromise&lt;StatusDto, BillApprovals.DeletePolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an existing bill approval policy. A deleted approval policy cannot be restored. The deleted policy is not available in the list of approval policies.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.billApprovals.deletePolicy({
    policyId: "{{bill_approval_policy_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type StatusDto
} catch (err) {
  // TODO: Handle 'err' of type BillApprovals.DeletePolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.billApprovals
  .deletePolicy({
    policyId: "{{bill_approval_policy_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StatusDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>policyId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.billApprovals.deletePolicy(request)`

- **OnSuccess**: <code>[StatusDto](src/models/status-dto.ts)</code>
- **OnError**: throws <code>[BillApprovals.DeletePolicyError](src/resources/bill-approvals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.billApprovals.deletePolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StatusDto, BillApprovals.DeletePolicyError&gt;</code>, with `result.value` of type <code>[StatusDto](src/models/status-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBillApprovalPolicies(request?: BillApprovals.ListBillApprovalPoliciesRequest, options?: RequestOptions): ApiPromise&lt;BillApprovalPolicyResponseDto[], BillApprovals.ListBillApprovalPoliciesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of bill approval policy objects.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.billApprovals.listBillApprovalPolicies({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type BillApprovalPolicyResponseDto[]
} catch (err) {
  // TODO: Handle 'err' of type BillApprovals.ListBillApprovalPoliciesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.billApprovals
  .listBillApprovalPolicies({ sessionId: "{{session_id}}", devKey: "{{developer_key}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BillApprovalPolicyResponseDto[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.billApprovals.listBillApprovalPolicies(request)`

- **OnSuccess**: <code>[BillApprovalPolicyResponseDto](src/models/bill-approval-policy-response-dto.ts)[]</code>
- **OnError**: throws <code>[BillApprovals.ListBillApprovalPoliciesError](src/resources/bill-approvals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.billApprovals.listBillApprovalPolicies(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BillApprovalPolicyResponseDto[], BillApprovals.ListBillApprovalPoliciesError&gt;</code>, with `result.value` of type <code>[BillApprovalPolicyResponseDto](src/models/bill-approval-policy-response-dto.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBillUserApprovals(request?: BillApprovals.ListBillUserApprovalsRequest, options?: RequestOptions): ApiPromise&lt;ListBillUserApprovalsResponseDto, BillApprovals.ListBillUserApprovalsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of bills that are pending approval by a user. In the response, you get the list of bills that are pending approval for the currently signed-in user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.billApprovals.listBillUserApprovals({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListBillUserApprovalsResponseDto
} catch (err) {
  // TODO: Handle 'err' of type BillApprovals.ListBillUserApprovalsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.billApprovals
  .listBillUserApprovals({ sessionId: "{{session_id}}", devKey: "{{developer_key}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListBillUserApprovalsResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.billApprovals.listBillUserApprovals(request)`

- **OnSuccess**: <code>[ListBillUserApprovalsResponseDto](src/models/list-bill-user-approvals-response-dto.ts)</code>
- **OnError**: throws <code>[BillApprovals.ListBillUserApprovalsError](src/resources/bill-approvals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.billApprovals.listBillUserApprovals(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListBillUserApprovalsResponseDto, BillApprovals.ListBillUserApprovalsError&gt;</code>, with `result.value` of type <code>[ListBillUserApprovalsResponseDto](src/models/list-bill-user-approvals-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateBillApprovalPolicy(request: BillApprovals.UpdateBillApprovalPolicyRequest, options?: RequestOptions): ApiPromise&lt;BillApprovalPolicyResponseDto, BillApprovals.UpdateBillApprovalPolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing bill approval policy.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.billApprovals.updateBillApprovalPolicy({
    policyId: "{{bill_approval_policy_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { policyName: "some example string", rules: [{}], approvers: ["some example string"] },
  });
  // TODO: Handle 'response' of type BillApprovalPolicyResponseDto
} catch (err) {
  // TODO: Handle 'err' of type BillApprovals.UpdateBillApprovalPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.billApprovals
  .updateBillApprovalPolicy({
    policyId: "{{bill_approval_policy_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { policyName: "some example string", rules: [{}], approvers: ["some example string"] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BillApprovalPolicyResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>policyId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[BillApprovalPolicyRequestDto](src/models/bill-approval-policy-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.billApprovals.updateBillApprovalPolicy(request)`

- **OnSuccess**: <code>[BillApprovalPolicyResponseDto](src/models/bill-approval-policy-response-dto.ts)</code>
- **OnError**: throws <code>[BillApprovals.UpdateBillApprovalPolicyError](src/resources/bill-approvals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.billApprovals.updateBillApprovalPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BillApprovalPolicyResponseDto, BillApprovals.UpdateBillApprovalPolicyError&gt;</code>, with `result.value` of type <code>[BillApprovalPolicyResponseDto](src/models/bill-approval-policy-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Bills

> Source: [Bills](src/resources/bills.ts)

<details>
<summary><code>archiveBill(request: Bills.ArchiveBillRequest, options?: RequestOptions): ApiPromise&lt;BillWithoutApproversResponseDto, Bills.ArchiveBillError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing bill. In the response, the `archived` field is set as `true`.

You can restore an archived bill with `POST /v3/bills/{billId}/restore`. There is no change when you archive an archived bill.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bills.archiveBill({
    billId: "{{bill_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type BillWithoutApproversResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Bills.ArchiveBillError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bills
  .archiveBill({ billId: "{{bill_id}}", sessionId: "{{session_id}}", devKey: "{{developer_key}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BillWithoutApproversResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>billId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bills.archiveBill(request)`

- **OnSuccess**: <code>[BillWithoutApproversResponseDto](src/models/bill-without-approvers-response-dto.ts)</code>
- **OnError**: throws <code>[Bills.ArchiveBillError](src/resources/bills.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bills.archiveBill(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BillWithoutApproversResponseDto, Bills.ArchiveBillError&gt;</code>, with `result.value` of type <code>[BillWithoutApproversResponseDto](src/models/bill-without-approvers-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createBill(request: Bills.CreateBillRequest, options?: RequestOptions): ApiPromise&lt;BillResponseDto, Bills.CreateBillError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new bill.

See Bills in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bills.createBill({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {
      vendorId: "some example string",
      dueDate: "2024-01-15",
      billLineItems: [{}],
      invoice: { invoiceNumber: "some example string", invoiceDate: "2024-01-15" },
    },
  });
  // TODO: Handle 'response' of type BillResponseDto
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
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {
      vendorId: "some example string",
      dueDate: "2024-01-15",
      billLineItems: [{}],
      invoice: { invoiceNumber: "some example string", invoiceDate: "2024-01-15" },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BillResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[BillCreateRequestDto](src/models/bill-create-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bills.createBill(request)`

- **OnSuccess**: <code>[BillResponseDto](src/models/bill-response-dto.ts)</code>
- **OnError**: throws <code>[Bills.CreateBillError](src/resources/bills.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bills.createBill(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BillResponseDto, Bills.CreateBillError&gt;</code>, with `result.value` of type <code>[BillResponseDto](src/models/bill-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createBulkBills(request: Bills.CreateBulkBillsRequest, options?: RequestOptions): ApiPromise&lt;BillWithoutApproversResponseDto[], Bills.CreateBulkBillsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple bills with one API request. You can create up to 100 bills with one `POST /v3/bills/bulk` request.

Bulk bill creation at BILL follow a set of rules.
* **Successful response**: In your bulk bill creation request, all your bills must be successfully created for a successful response. If any bill creation is not successful, the entire request fails and none of the bills in the request are created.
* **You can create bills for multiple vendors**: You can create bills for one vendor or for multiple vendors with one `POST /v3/bills/bulk` request.

See Bills in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bills.createBulkBills({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [
      {
        vendorId: "some example string",
        dueDate: "2024-01-15",
        billLineItems: [{}],
        invoice: { invoiceNumber: "some example string", invoiceDate: "2024-01-15" },
      },
    ],
  });
  // TODO: Handle 'response' of type BillWithoutApproversResponseDto[]
} catch (err) {
  // TODO: Handle 'err' of type Bills.CreateBulkBillsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bills
  .createBulkBills({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [
      {
        vendorId: "some example string",
        dueDate: "2024-01-15",
        billLineItems: [{}],
        invoice: { invoiceNumber: "some example string", invoiceDate: "2024-01-15" },
      },
    ],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BillWithoutApproversResponseDto[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[BillCreateRequestDto](src/models/bill-create-request-dto.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bills.createBulkBills(request)`

- **OnSuccess**: <code>[BillWithoutApproversResponseDto](src/models/bill-without-approvers-response-dto.ts)[]</code>
- **OnError**: throws <code>[Bills.CreateBulkBillsError](src/resources/bills.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bills.createBulkBills(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BillWithoutApproversResponseDto[], Bills.CreateBulkBillsError&gt;</code>, with `result.value` of type <code>[BillWithoutApproversResponseDto](src/models/bill-without-approvers-response-dto.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBill(request: Bills.GetBillRequest, options?: RequestOptions): ApiPromise&lt;BillReadResponseDto, Bills.GetBillError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing bill.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bills.getBill({
    billId: "some example string",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type BillReadResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Bills.GetBillError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bills
  .getBill({ billId: "some example string", sessionId: "{{session_id}}", devKey: "{{developer_key}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BillReadResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>billId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bills.getBill(request)`

- **OnSuccess**: <code>[BillReadResponseDto](src/models/bill-read-response-dto.ts)</code>
- **OnError**: throws <code>[Bills.GetBillError](src/resources/bills.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bills.getBill(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BillReadResponseDto, Bills.GetBillError&gt;</code>, with `result.value` of type <code>[BillReadResponseDto](src/models/bill-read-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBills(request?: Bills.ListBillsRequest, options?: RequestOptions): ApiPromise&lt;ListBillResponseDto, Bills.ListBillsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of bill objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bills.listBills({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{bill_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListBillResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Bills.ListBillsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bills
  .listBills({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{bill_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListBillResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max?</code> | <code>number</code> | - |
| <code>sort?</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bills.listBills(request)`

- **OnSuccess**: <code>[ListBillResponseDto](src/models/list-bill-response-dto.ts)</code>
- **OnError**: throws <code>[Bills.ListBillsError](src/resources/bills.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bills.listBills(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListBillResponseDto, Bills.ListBillsError&gt;</code>, with `result.value` of type <code>[ListBillResponseDto](src/models/list-bill-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>recordPayment(request: Bills.RecordPaymentRequest, options?: RequestOptions): ApiPromise&lt;RecordPaymentResponseDto, Bills.RecordPaymentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Record an offline AP payment made to a vendor.

An offline payment is a payment made outside the BILL system. BILL simply applies the recorded payment amount to one or more bills for the vendor. BILL does not process the payment or transfer funds to the vendor when you record an AP payment with this endpoint.

Use `POST /v3/payments` to create a payment with the BILL system. When you pay with `POST /v3/payments`, BILL processes the payment and transfers funds from your BILL organization funding account to the vendor.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bills.recordPayment({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {
      vendorId: "some example string",
      processDate: "2024-01-15",
      toPrintCheck: true,
      payments: [{ billId: "some example string", amount: 1.5 }],
    },
  });
  // TODO: Handle 'response' of type RecordPaymentResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Bills.RecordPaymentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bills
  .recordPayment({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {
      vendorId: "some example string",
      processDate: "2024-01-15",
      toPrintCheck: true,
      payments: [{ billId: "some example string", amount: 1.5 }],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RecordPaymentResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[RecordPaymentRequestDto](src/models/record-payment-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bills.recordPayment(request)`

- **OnSuccess**: <code>[RecordPaymentResponseDto](src/models/record-payment-response-dto.ts)</code>
- **OnError**: throws <code>[Bills.RecordPaymentError](src/resources/bills.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bills.recordPayment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RecordPaymentResponseDto, Bills.RecordPaymentError&gt;</code>, with `result.value` of type <code>[RecordPaymentResponseDto](src/models/record-payment-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>replaceBill(request: Bills.ReplaceBillRequest, options?: RequestOptions): ApiPromise&lt;BillResponseDto, Bills.ReplaceBillError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the number of line items in a bill. You can also update other bill details.

You can use the PUT operation to add, remove, or replace the number of line items in a bill. A set of rules apply with the PUT operation.
* When you add a new line item, a new line item `id` is generated in the bill.
* When you omit an existing line item `id`, the line item is removed from the bill.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bills.replaceBill({
    billId: "{{bill_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {
      vendorId: "some example string",
      dueDate: "2024-01-15",
      billLineItems: [{}],
      invoice: { invoiceNumber: "some example string", invoiceDate: "2024-01-15" },
    },
  });
  // TODO: Handle 'response' of type BillResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Bills.ReplaceBillError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bills
  .replaceBill({
    billId: "{{bill_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {
      vendorId: "some example string",
      dueDate: "2024-01-15",
      billLineItems: [{}],
      invoice: { invoiceNumber: "some example string", invoiceDate: "2024-01-15" },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BillResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>billId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[BillReplaceRequestDto](src/models/bill-replace-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bills.replaceBill(request)`

- **OnSuccess**: <code>[BillResponseDto](src/models/bill-response-dto.ts)</code>
- **OnError**: throws <code>[Bills.ReplaceBillError](src/resources/bills.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bills.replaceBill(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BillResponseDto, Bills.ReplaceBillError&gt;</code>, with `result.value` of type <code>[BillResponseDto](src/models/bill-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>restoreBill(request: Bills.RestoreBillRequest, options?: RequestOptions): ApiPromise&lt;BillWithoutApproversResponseDto, Bills.RestoreBillError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived bill. In the response, the `archived` field is set as `false`.

You can perform any valid BILL operation on restored bills. There is no change when you restore a restored bill.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bills.restoreBill({
    billId: "{{bill_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type BillWithoutApproversResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Bills.RestoreBillError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bills
  .restoreBill({ billId: "{{bill_id}}", sessionId: "{{session_id}}", devKey: "{{developer_key}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BillWithoutApproversResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>billId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bills.restoreBill(request)`

- **OnSuccess**: <code>[BillWithoutApproversResponseDto](src/models/bill-without-approvers-response-dto.ts)</code>
- **OnError**: throws <code>[Bills.RestoreBillError](src/resources/bills.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bills.restoreBill(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BillWithoutApproversResponseDto, Bills.RestoreBillError&gt;</code>, with `result.value` of type <code>[BillWithoutApproversResponseDto](src/models/bill-without-approvers-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateBill(request: Bills.UpdateBillRequest, options?: RequestOptions): ApiPromise&lt;BillResponseDto, Bills.UpdateBillError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about a bill line item. You can also update other bill details.

You can use the PATCH operation to modify line item details, such as `amount` and `description`. The bill line item `id` does not change with a PATCH operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bills.updateBill({
    billId: "{{bill_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { paymentTermId: "some example string" },
  });
  // TODO: Handle 'response' of type BillResponseDto
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
const result = await client.bills
  .updateBill({
    billId: "{{bill_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { paymentTermId: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BillResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>billId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[BillUpdateRequestDto](src/models/bill-update-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bills.updateBill(request)`

- **OnSuccess**: <code>[BillResponseDto](src/models/bill-response-dto.ts)</code>
- **OnError**: throws <code>[Bills.UpdateBillError](src/resources/bills.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bills.updateBill(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BillResponseDto, Bills.UpdateBillError&gt;</code>, with `result.value` of type <code>[BillResponseDto](src/models/bill-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Budgets

> Source: [Budgets](src/resources/budgets.ts)

<details>
<summary><code>createBudget(request: Budgets.CreateBudgetRequest, options?: RequestOptions): ApiPromise&lt;BudgetResponseDto, Budgets.CreateBudgetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new budget for a company.

See Budgets and Users in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.budgets.createBudget({
    apiToken: "{{api_token}}",
    body: {
      name: "some example string",
      owners: ["some example string"],
      recurringInterval: PeriodIntervalType.None,
    },
  });
  // TODO: Handle 'response' of type BudgetResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Budgets.CreateBudgetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.budgets
  .createBudget({
    apiToken: "{{api_token}}",
    body: {
      name: "some example string",
      owners: ["some example string"],
      recurringInterval: PeriodIntervalType.None,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BudgetResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiToken?</code> | <code>string</code> | - |
| <code>body</code> | <code>[BudgetCreateDto](src/models/budget-create-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.budgets.createBudget(request)`

- **OnSuccess**: <code>[BudgetResponseDto](src/models/budget-response-dto.ts)</code>
- **OnError**: throws <code>[Budgets.CreateBudgetError](src/resources/budgets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.budgets.createBudget(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BudgetResponseDto, Budgets.CreateBudgetError&gt;</code>, with `result.value` of type <code>[BudgetResponseDto](src/models/budget-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteBudget(request: Budgets.DeleteBudgetRequest, options?: RequestOptions): ApiPromise&lt;undefined, Budgets.DeleteBudgetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an existing budget. A deleted budget cannot be restored. The deleted budget is not available in the list of budgets.

**Note**:
* While you cannot restore a deleted budget with the API, you can unretire budgets in the BILL web app and mobile app. An unretired budget is active and is available for use.
* A one-time budget can be unretired at any time. A `recurringInterval` budget can be unretired within one interval. For example, if a `MONTHLY` budget is retired in January, you can unretire it in February. You cannot unretire this budget in March or any later month.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.budgets.deleteBudget({ budgetId: "{{se_budget_uuid}}", apiToken: "{{api_token}}" });
} catch (err) {
  // TODO: Handle 'err' of type Budgets.DeleteBudgetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.budgets
  .deleteBudget({ budgetId: "{{se_budget_uuid}}", apiToken: "{{api_token}}" })
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
| <code>budgetId</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.budgets.deleteBudget(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Budgets.DeleteBudgetError](src/resources/budgets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.budgets.deleteBudget(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Budgets.DeleteBudgetError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteBudgetMember(request: Budgets.DeleteBudgetMemberRequest, options?: RequestOptions): ApiPromise&lt;undefined, Budgets.DeleteBudgetMemberError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a user member from an existing budget.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.budgets.deleteBudgetMember({
    budgetId: "{{se_budget_uuid}}",
    userId: "{{se_user_uuid}}",
    apiToken: "{{api_token}}",
  });
} catch (err) {
  // TODO: Handle 'err' of type Budgets.DeleteBudgetMemberError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.budgets
  .deleteBudgetMember({
    budgetId: "{{se_budget_uuid}}",
    userId: "{{se_user_uuid}}",
    apiToken: "{{api_token}}",
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
| <code>budgetId</code> | <code>string</code> | - |
| <code>userId</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.budgets.deleteBudgetMember(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Budgets.DeleteBudgetMemberError](src/resources/budgets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.budgets.deleteBudgetMember(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Budgets.DeleteBudgetMemberError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBudget(request: Budgets.GetBudgetRequest, options?: RequestOptions): ApiPromise&lt;BudgetResponseDto, Budgets.GetBudgetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing budget.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.budgets.getBudget({
    budgetId: "{{se_budget_uuid}}",
    apiToken: "{{api_token}}",
  });
  // TODO: Handle 'response' of type BudgetResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Budgets.GetBudgetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.budgets
  .getBudget({ budgetId: "{{se_budget_uuid}}", apiToken: "{{api_token}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BudgetResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>budgetId</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.budgets.getBudget(request)`

- **OnSuccess**: <code>[BudgetResponseDto](src/models/budget-response-dto.ts)</code>
- **OnError**: throws <code>[Budgets.GetBudgetError](src/resources/budgets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.budgets.getBudget(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BudgetResponseDto, Budgets.GetBudgetError&gt;</code>, with `result.value` of type <code>[BudgetResponseDto](src/models/budget-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBudgetMember(request: Budgets.GetBudgetMemberRequest, options?: RequestOptions): ApiPromise&lt;BudgetMemberResponseDto, Budgets.GetBudgetMemberError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about a user member assigned to an existing budget.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.budgets.getBudgetMember({
    budgetId: "{{se_budget_uuid}}",
    userId: "{{se_user_uuid}}",
    apiToken: "{{api_token}}",
  });
  // TODO: Handle 'response' of type BudgetMemberResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Budgets.GetBudgetMemberError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.budgets
  .getBudgetMember({ budgetId: "{{se_budget_uuid}}", userId: "{{se_user_uuid}}", apiToken: "{{api_token}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BudgetMemberResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>budgetId</code> | <code>string</code> | - |
| <code>userId</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.budgets.getBudgetMember(request)`

- **OnSuccess**: <code>[BudgetMemberResponseDto](src/models/budget-member-response-dto.ts)</code>
- **OnError**: throws <code>[Budgets.GetBudgetMemberError](src/resources/budgets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.budgets.getBudgetMember(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BudgetMemberResponseDto, Budgets.GetBudgetMemberError&gt;</code>, with `result.value` of type <code>[BudgetMemberResponseDto](src/models/budget-member-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBudgetMembers(request: Budgets.ListBudgetMembersRequest, options?: RequestOptions): ApiPromise&lt;PaginationResponseDtoBudgetMemberResponseDto, Budgets.ListBudgetMembersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of user members assigned to an existing budget. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.budgets.listBudgetMembers({
    budgetId: "{{se_budget_uuid}}",
    max: 10,
    sort: "spent:desc",
    filters: "retired:eq:false",
    apiToken: "{{api_token}}",
  });
  // TODO: Handle 'response' of type PaginationResponseDtoBudgetMemberResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Budgets.ListBudgetMembersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.budgets
  .listBudgetMembers({
    budgetId: "{{se_budget_uuid}}",
    max: 10,
    sort: "spent:desc",
    filters: "retired:eq:false",
    apiToken: "{{api_token}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginationResponseDtoBudgetMemberResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>budgetId</code> | <code>string</code> | - |
| <code>max?</code> | <code>number</code> | - |
| <code>nextPage?</code> | <code>string</code> | - |
| <code>prevPage?</code> | <code>string</code> | - |
| <code>sort?</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.budgets.listBudgetMembers(request)`

- **OnSuccess**: <code>[PaginationResponseDtoBudgetMemberResponseDto](src/models/pagination-response-dto-budget-member-response-dto.ts)</code>
- **OnError**: throws <code>[Budgets.ListBudgetMembersError](src/resources/budgets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.budgets.listBudgetMembers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginationResponseDtoBudgetMemberResponseDto, Budgets.ListBudgetMembersError&gt;</code>, with `result.value` of type <code>[PaginationResponseDtoBudgetMemberResponseDto](src/models/pagination-response-dto-budget-member-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBudgets(request?: Budgets.ListBudgetsRequest, options?: RequestOptions): ApiPromise&lt;PaginationResponseDtoBudgetResponseDto, Budgets.ListBudgetsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of budget objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.budgets.listBudgets({
    max: 10,
    sort: "spent:desc",
    filters: "budgetIds:eq:{{se_budget_uuid}}",
    apiToken: "{{api_token}}",
  });
  // TODO: Handle 'response' of type PaginationResponseDtoBudgetResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Budgets.ListBudgetsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.budgets
  .listBudgets({
    max: 10,
    sort: "spent:desc",
    filters: "budgetIds:eq:{{se_budget_uuid}}",
    apiToken: "{{api_token}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginationResponseDtoBudgetResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>nextPage?</code> | <code>string</code> | - |
| <code>prevPage?</code> | <code>string</code> | - |
| <code>max?</code> | <code>number</code> | - |
| <code>sort?</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.budgets.listBudgets(request)`

- **OnSuccess**: <code>[PaginationResponseDtoBudgetResponseDto](src/models/pagination-response-dto-budget-response-dto.ts)</code>
- **OnError**: throws <code>[Budgets.ListBudgetsError](src/resources/budgets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.budgets.listBudgets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginationResponseDtoBudgetResponseDto, Budgets.ListBudgetsError&gt;</code>, with `result.value` of type <code>[PaginationResponseDtoBudgetResponseDto](src/models/pagination-response-dto-budget-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateBudget(request: Budgets.UpdateBudgetRequest, options?: RequestOptions): ApiPromise&lt;BudgetResponseDto, Budgets.UpdateBudgetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing budget.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.budgets.updateBudget({
    budgetId: "{{se_budget_uuid}}",
    apiToken: "{{api_token}}",
    body: {},
  });
  // TODO: Handle 'response' of type BudgetResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Budgets.UpdateBudgetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.budgets
  .updateBudget({ budgetId: "{{se_budget_uuid}}", apiToken: "{{api_token}}", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BudgetResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>budgetId</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |
| <code>body</code> | <code>[BudgetUpdateDto](src/models/budget-update-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.budgets.updateBudget(request)`

- **OnSuccess**: <code>[BudgetResponseDto](src/models/budget-response-dto.ts)</code>
- **OnError**: throws <code>[Budgets.UpdateBudgetError](src/resources/budgets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.budgets.updateBudget(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BudgetResponseDto, Budgets.UpdateBudgetError&gt;</code>, with `result.value` of type <code>[BudgetResponseDto](src/models/budget-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>upsertBudgetMember(request: Budgets.UpsertBudgetMemberRequest, options?: RequestOptions): ApiPromise&lt;BudgetMemberResponseDto, Budgets.UpsertBudgetMemberError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a new user member to an existing budget. You can also update details about an existing user member assigned to the budget.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.budgets.upsertBudgetMember({
    budgetId: "{{se_budget_uuid}}",
    userId: "{{se_user_uuid}}",
    apiToken: "{{api_token}}",
    body: {},
  });
  // TODO: Handle 'response' of type BudgetMemberResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Budgets.UpsertBudgetMemberError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.budgets
  .upsertBudgetMember({
    budgetId: "{{se_budget_uuid}}",
    userId: "{{se_user_uuid}}",
    apiToken: "{{api_token}}",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BudgetMemberResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>budgetId</code> | <code>string</code> | - |
| <code>userId</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |
| <code>body</code> | <code>[BudgetMemberUpsertRequestDto](src/models/budget-member-upsert-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.budgets.upsertBudgetMember(request)`

- **OnSuccess**: <code>[BudgetMemberResponseDto](src/models/budget-member-response-dto.ts)</code>
- **OnError**: throws <code>[Budgets.UpsertBudgetMemberError](src/resources/budgets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.budgets.upsertBudgetMember(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BudgetMemberResponseDto, Budgets.UpsertBudgetMemberError&gt;</code>, with `result.value` of type <code>[BudgetMemberResponseDto](src/models/budget-member-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>upsertBulkBudgetUsers(request: Budgets.UpsertBulkBudgetUsersRequest, options?: RequestOptions): ApiPromise&lt;SpendStatusDto, Budgets.UpsertBulkBudgetUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about multiple user members assigned to an existing budget.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.budgets.upsertBulkBudgetUsers({
    budgetId: "{{se_budget_uuid}}",
    apiToken: "{{api_token}}",
    body: { members: [{ userId: "some example string" }] },
  });
  // TODO: Handle 'response' of type SpendStatusDto
} catch (err) {
  // TODO: Handle 'err' of type Budgets.UpsertBulkBudgetUsersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.budgets
  .upsertBulkBudgetUsers({
    budgetId: "{{se_budget_uuid}}",
    apiToken: "{{api_token}}",
    body: { members: [{ userId: "some example string" }] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SpendStatusDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>budgetId</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |
| <code>body</code> | <code>[BudgetMemberBulkUpsertRequestDto](src/models/budget-member-bulk-upsert-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.budgets.upsertBulkBudgetUsers(request)`

- **OnSuccess**: <code>[SpendStatusDto](src/models/spend-status-dto.ts)</code>
- **OnError**: throws <code>[Budgets.UpsertBulkBudgetUsersError](src/resources/budgets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.budgets.upsertBulkBudgetUsers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SpendStatusDto, Budgets.UpsertBulkBudgetUsersError&gt;</code>, with `result.value` of type <code>[SpendStatusDto](src/models/spend-status-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Cards

> Source: [Cards](src/resources/cards.ts)

<details>
<summary><code>createBudgetCard(request: Cards.CreateBudgetCardRequest, options?: RequestOptions): ApiPromise&lt;CardResponseDto, Cards.CreateBudgetCardError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new vendor card.

See Vendor cards in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cards.createBudgetCard({
    apiToken: "{{api_token}}",
    body: { name: "some example string", userId: "some example string", budgetId: "some example string" },
  });
  // TODO: Handle 'response' of type CardResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Cards.CreateBudgetCardError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cards
  .createBudgetCard({
    apiToken: "{{api_token}}",
    body: { name: "some example string", userId: "some example string", budgetId: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CardResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiToken?</code> | <code>string</code> | - |
| <code>body</code> | <code>[CreateCardRequestDto](src/models/create-card-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cards.createBudgetCard(request)`

- **OnSuccess**: <code>[CardResponseDto](src/models/card-response-dto.ts)</code>
- **OnError**: throws <code>[Cards.CreateBudgetCardError](src/resources/cards.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cards.createBudgetCard(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CardResponseDto, Cards.CreateBudgetCardError&gt;</code>, with `result.value` of type <code>[CardResponseDto](src/models/card-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCard(request: Cards.DeleteCardRequest, options?: RequestOptions): ApiPromise&lt;undefined, Cards.DeleteCardError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an existing vendor card. A deleted card cannot be restored. The deleted card is not available in the list of cards.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.cards.deleteCard({ cardId: "{{se_card_uuid}}", apiToken: "{{api_token}}" });
} catch (err) {
  // TODO: Handle 'err' of type Cards.DeleteCardError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cards
  .deleteCard({ cardId: "{{se_card_uuid}}", apiToken: "{{api_token}}" })
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
| <code>cardId</code> | <code>string</code> | - |
| <code>reason?</code> | <code>[UserDeletedReasonType](src/models/user-deleted-reason-type.ts)</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cards.deleteCard(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Cards.DeleteCardError](src/resources/cards.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cards.deleteCard(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Cards.DeleteCardError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>freezeCard(request: Cards.FreezeCardRequest, options?: RequestOptions): ApiPromise&lt;CardResponseDto, Cards.FreezeCardError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Freeze an existing vendor card.

You can freeze virtual cards and physical cards. A frozen card cannot be used for payments.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cards.freezeCard({ cardId: "{{se_card_uuid}}", apiToken: "{{api_token}}" });
  // TODO: Handle 'response' of type CardResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Cards.FreezeCardError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cards
  .freezeCard({ cardId: "{{se_card_uuid}}", apiToken: "{{api_token}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CardResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cardId</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cards.freezeCard(request)`

- **OnSuccess**: <code>[CardResponseDto](src/models/card-response-dto.ts)</code>
- **OnError**: throws <code>[Cards.FreezeCardError](src/resources/cards.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cards.freezeCard(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CardResponseDto, Cards.FreezeCardError&gt;</code>, with `result.value` of type <code>[CardResponseDto](src/models/card-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCard(request: Cards.GetCardRequest, options?: RequestOptions): ApiPromise&lt;CardResponseDto, Cards.GetCardError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing vendor card.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cards.getCard({ cardId: "{{se_card_uuid}}", apiToken: "{{api_token}}" });
  // TODO: Handle 'response' of type CardResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Cards.GetCardError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cards
  .getCard({ cardId: "{{se_card_uuid}}", apiToken: "{{api_token}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CardResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cardId</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cards.getCard(request)`

- **OnSuccess**: <code>[CardResponseDto](src/models/card-response-dto.ts)</code>
- **OnError**: throws <code>[Cards.GetCardError](src/resources/cards.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cards.getCard(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CardResponseDto, Cards.GetCardError&gt;</code>, with `result.value` of type <code>[CardResponseDto](src/models/card-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPanJwt(request: Cards.GetPanJwtRequest, options?: RequestOptions): ApiPromise&lt;CardPanTokenResponseDto, Cards.GetPanJwtError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cards.getPanJwt({ cardId: "{{se_card_uuid}}", apiToken: "{{api_token}}" });
  // TODO: Handle 'response' of type CardPanTokenResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Cards.GetPanJwtError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cards
  .getPanJwt({ cardId: "{{se_card_uuid}}", apiToken: "{{api_token}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CardPanTokenResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cardId</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cards.getPanJwt(request)`

- **OnSuccess**: <code>[CardPanTokenResponseDto](src/models/card-pan-token-response-dto.ts)</code>
- **OnError**: throws <code>[Cards.GetPanJwtError](src/resources/cards.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cards.getPanJwt(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CardPanTokenResponseDto, Cards.GetPanJwtError&gt;</code>, with `result.value` of type <code>[CardPanTokenResponseDto](src/models/card-pan-token-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCards(request?: Cards.ListCardsRequest, options?: RequestOptions): ApiPromise&lt;PaginationResponseDtoCardResponseDto, Cards.ListCardsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of card objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cards.listCards({
    max: 10,
    sort: "status",
    filters: "cardIds:eq:{{se_card_uuid}}",
    apiToken: "{{api_token}}",
  });
  // TODO: Handle 'response' of type PaginationResponseDtoCardResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Cards.ListCardsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cards
  .listCards({ max: 10, sort: "status", filters: "cardIds:eq:{{se_card_uuid}}", apiToken: "{{api_token}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginationResponseDtoCardResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>nextPage?</code> | <code>string</code> | - |
| <code>prevPage?</code> | <code>string</code> | - |
| <code>max?</code> | <code>number</code> | - |
| <code>sort?</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cards.listCards(request)`

- **OnSuccess**: <code>[PaginationResponseDtoCardResponseDto](src/models/pagination-response-dto-card-response-dto.ts)</code>
- **OnError**: throws <code>[Cards.ListCardsError](src/resources/cards.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cards.listCards(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginationResponseDtoCardResponseDto, Cards.ListCardsError&gt;</code>, with `result.value` of type <code>[PaginationResponseDtoCardResponseDto](src/models/pagination-response-dto-card-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unfreezeCard(request: Cards.UnfreezeCardRequest, options?: RequestOptions): ApiPromise&lt;CardResponseDto, Cards.UnfreezeCardError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Unfreeze an existing vendor card. You can unfreeze virtual cards and physical cards.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cards.unfreezeCard({ cardId: "{{se_card_uuid}}", apiToken: "{{api_token}}" });
  // TODO: Handle 'response' of type CardResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Cards.UnfreezeCardError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cards
  .unfreezeCard({ cardId: "{{se_card_uuid}}", apiToken: "{{api_token}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CardResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cardId</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cards.unfreezeCard(request)`

- **OnSuccess**: <code>[CardResponseDto](src/models/card-response-dto.ts)</code>
- **OnError**: throws <code>[Cards.UnfreezeCardError](src/resources/cards.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cards.unfreezeCard(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CardResponseDto, Cards.UnfreezeCardError&gt;</code>, with `result.value` of type <code>[CardResponseDto](src/models/card-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCard(request: Cards.UpdateCardRequest, options?: RequestOptions): ApiPromise&lt;CardResponseDto, Cards.UpdateCardError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing vendor card.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cards.updateCard({
    cardId: "{{se_card_uuid}}",
    apiToken: "{{api_token}}",
    body: {},
  });
  // TODO: Handle 'response' of type CardResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Cards.UpdateCardError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cards
  .updateCard({ cardId: "{{se_card_uuid}}", apiToken: "{{api_token}}", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CardResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cardId</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |
| <code>body</code> | <code>[UpdateCardRequestDto](src/models/update-card-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cards.updateCard(request)`

- **OnSuccess**: <code>[CardResponseDto](src/models/card-response-dto.ts)</code>
- **OnError**: throws <code>[Cards.UpdateCardError](src/resources/cards.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cards.updateCard(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CardResponseDto, Cards.UpdateCardError&gt;</code>, with `result.value` of type <code>[CardResponseDto](src/models/card-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ClassificationsApi

> Source: [ClassificationsApi](src/resources/classifications-api.ts)

<details>
<summary><code>archiveClassificationAccountingClass(request: ClassificationsApi.ArchiveClassificationAccountingClassRequest, options?: RequestOptions): ApiPromise&lt;ClassificationAccountingClassResponseDto, ClassificationsApi.ArchiveClassificationAccountingClassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing accounting class. In the response, the `archived` field is set as `true`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.archiveClassificationAccountingClass({
    id: "{{accounting_class_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ClassificationAccountingClassResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.ArchiveClassificationAccountingClassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .archiveClassificationAccountingClass({
    id: "{{accounting_class_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationAccountingClassResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.archiveClassificationAccountingClass(request)`

- **OnSuccess**: <code>[ClassificationAccountingClassResponseDto](src/models/classification-accounting-class-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.ArchiveClassificationAccountingClassError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.archiveClassificationAccountingClass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationAccountingClassResponseDto, ClassificationsApi.ArchiveClassificationAccountingClassError&gt;</code>, with `result.value` of type <code>[ClassificationAccountingClassResponseDto](src/models/classification-accounting-class-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>archiveClassificationChartOfAccounts(request: ClassificationsApi.ArchiveClassificationChartOfAccountsRequest, options?: RequestOptions): ApiPromise&lt;ClassificationChartOfAccountsResponseDto, ClassificationsApi.ArchiveClassificationChartOfAccountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing chart of accounts. In the response, the `archived` field is set as `true`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.archiveClassificationChartOfAccounts({
    id: "{{chart_of_accounts_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ClassificationChartOfAccountsResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.ArchiveClassificationChartOfAccountsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .archiveClassificationChartOfAccounts({
    id: "{{chart_of_accounts_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationChartOfAccountsResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.archiveClassificationChartOfAccounts(request)`

- **OnSuccess**: <code>[ClassificationChartOfAccountsResponseDto](src/models/classification-chart-of-accounts-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.ArchiveClassificationChartOfAccountsError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.archiveClassificationChartOfAccounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationChartOfAccountsResponseDto, ClassificationsApi.ArchiveClassificationChartOfAccountsError&gt;</code>, with `result.value` of type <code>[ClassificationChartOfAccountsResponseDto](src/models/classification-chart-of-accounts-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>archiveClassificationDepartment(request: ClassificationsApi.ArchiveClassificationDepartmentRequest, options?: RequestOptions): ApiPromise&lt;ClassificationDepartmentResponseDto, ClassificationsApi.ArchiveClassificationDepartmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing department. In the response, the `archived` field is set as `true`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.archiveClassificationDepartment({
    id: "{{department_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ClassificationDepartmentResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.ArchiveClassificationDepartmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .archiveClassificationDepartment({
    id: "{{department_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationDepartmentResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.archiveClassificationDepartment(request)`

- **OnSuccess**: <code>[ClassificationDepartmentResponseDto](src/models/classification-department-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.ArchiveClassificationDepartmentError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.archiveClassificationDepartment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationDepartmentResponseDto, ClassificationsApi.ArchiveClassificationDepartmentError&gt;</code>, with `result.value` of type <code>[ClassificationDepartmentResponseDto](src/models/classification-department-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>archiveClassificationEmployee(request: ClassificationsApi.ArchiveClassificationEmployeeRequest, options?: RequestOptions): ApiPromise&lt;ClassificationEmployeeResponseDto, ClassificationsApi.ArchiveClassificationEmployeeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing employee. In the response, the `archived` field is set as `true`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.archiveClassificationEmployee({
    id: "{{employee_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ClassificationEmployeeResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.ArchiveClassificationEmployeeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .archiveClassificationEmployee({
    id: "{{employee_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationEmployeeResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.archiveClassificationEmployee(request)`

- **OnSuccess**: <code>[ClassificationEmployeeResponseDto](src/models/classification-employee-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.ArchiveClassificationEmployeeError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.archiveClassificationEmployee(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationEmployeeResponseDto, ClassificationsApi.ArchiveClassificationEmployeeError&gt;</code>, with `result.value` of type <code>[ClassificationEmployeeResponseDto](src/models/classification-employee-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>archiveClassificationItem(request: ClassificationsApi.ArchiveClassificationItemRequest, options?: RequestOptions): ApiPromise&lt;ClassificationItemResponseDto, ClassificationsApi.ArchiveClassificationItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing item. In the response, the `archived` field is set as `true`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.archiveClassificationItem({
    id: "{{item_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ClassificationItemResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.ArchiveClassificationItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .archiveClassificationItem({ id: "{{item_id}}", sessionId: "{{session_id}}", devKey: "{{developer_key}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationItemResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.archiveClassificationItem(request)`

- **OnSuccess**: <code>[ClassificationItemResponseDto](src/models/classification-item-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.ArchiveClassificationItemError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.archiveClassificationItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationItemResponseDto, ClassificationsApi.ArchiveClassificationItemError&gt;</code>, with `result.value` of type <code>[ClassificationItemResponseDto](src/models/classification-item-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>archiveClassificationJob(request: ClassificationsApi.ArchiveClassificationJobRequest, options?: RequestOptions): ApiPromise&lt;ClassificationJobResponseDto, ClassificationsApi.ArchiveClassificationJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing job. In the response, the `archived` field is set as `true`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.archiveClassificationJob({
    id: "{{job_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ClassificationJobResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.ArchiveClassificationJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .archiveClassificationJob({ id: "{{job_id}}", sessionId: "{{session_id}}", devKey: "{{developer_key}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationJobResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.archiveClassificationJob(request)`

- **OnSuccess**: <code>[ClassificationJobResponseDto](src/models/classification-job-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.ArchiveClassificationJobError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.archiveClassificationJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationJobResponseDto, ClassificationsApi.ArchiveClassificationJobError&gt;</code>, with `result.value` of type <code>[ClassificationJobResponseDto](src/models/classification-job-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>archiveClassificationLocation(request: ClassificationsApi.ArchiveClassificationLocationRequest, options?: RequestOptions): ApiPromise&lt;ClassificationLocationResponseDto, ClassificationsApi.ArchiveClassificationLocationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing location. In the response, the `archived` field is set as `true`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.archiveClassificationLocation({
    id: "{{location_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ClassificationLocationResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.ArchiveClassificationLocationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .archiveClassificationLocation({
    id: "{{location_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationLocationResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.archiveClassificationLocation(request)`

- **OnSuccess**: <code>[ClassificationLocationResponseDto](src/models/classification-location-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.ArchiveClassificationLocationError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.archiveClassificationLocation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationLocationResponseDto, ClassificationsApi.ArchiveClassificationLocationError&gt;</code>, with `result.value` of type <code>[ClassificationLocationResponseDto](src/models/classification-location-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkArchiveClassificationAccountingClass(request: ClassificationsApi.BulkArchiveClassificationAccountingClassRequest, options?: RequestOptions): ApiPromise&lt;ClassificationAccountingClassBulkResponseDto, ClassificationsApi.BulkArchiveClassificationAccountingClassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive multiple accounting classes with one API request. In the response, the `archived` field for each object is set as `true`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.bulkArchiveClassificationAccountingClass({
    ids: "{{accounting_class_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ClassificationAccountingClassBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.BulkArchiveClassificationAccountingClassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .bulkArchiveClassificationAccountingClass({
    ids: "{{accounting_class_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationAccountingClassBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.bulkArchiveClassificationAccountingClass(request)`

- **OnSuccess**: <code>[ClassificationAccountingClassBulkResponseDto](src/models/classification-accounting-class-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.BulkArchiveClassificationAccountingClassError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.bulkArchiveClassificationAccountingClass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationAccountingClassBulkResponseDto, ClassificationsApi.BulkArchiveClassificationAccountingClassError&gt;</code>, with `result.value` of type <code>[ClassificationAccountingClassBulkResponseDto](src/models/classification-accounting-class-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkArchiveClassificationChartOfAccounts(request: ClassificationsApi.BulkArchiveClassificationChartOfAccountsRequest, options?: RequestOptions): ApiPromise&lt;ClassificationChartOfAccountsBulkResponseDto, ClassificationsApi.BulkArchiveClassificationChartOfAccountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive multiple chart of accounts with one API request. In the response, the `archived` field for each object is set as `true`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.bulkArchiveClassificationChartOfAccounts({
    ids: "{{chart_of_accounts_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ClassificationChartOfAccountsBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.BulkArchiveClassificationChartOfAccountsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .bulkArchiveClassificationChartOfAccounts({
    ids: "{{chart_of_accounts_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationChartOfAccountsBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.bulkArchiveClassificationChartOfAccounts(request)`

- **OnSuccess**: <code>[ClassificationChartOfAccountsBulkResponseDto](src/models/classification-chart-of-accounts-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.BulkArchiveClassificationChartOfAccountsError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.bulkArchiveClassificationChartOfAccounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationChartOfAccountsBulkResponseDto, ClassificationsApi.BulkArchiveClassificationChartOfAccountsError&gt;</code>, with `result.value` of type <code>[ClassificationChartOfAccountsBulkResponseDto](src/models/classification-chart-of-accounts-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkArchiveClassificationDepartment(request: ClassificationsApi.BulkArchiveClassificationDepartmentRequest, options?: RequestOptions): ApiPromise&lt;ClassificationDepartmentBulkResponseDto, ClassificationsApi.BulkArchiveClassificationDepartmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive multiple departments with one API request. In the response, the `archived` field is set as `true`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.bulkArchiveClassificationDepartment({
    ids: "{{department_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ClassificationDepartmentBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.BulkArchiveClassificationDepartmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .bulkArchiveClassificationDepartment({
    ids: "{{department_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationDepartmentBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.bulkArchiveClassificationDepartment(request)`

- **OnSuccess**: <code>[ClassificationDepartmentBulkResponseDto](src/models/classification-department-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.BulkArchiveClassificationDepartmentError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.bulkArchiveClassificationDepartment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationDepartmentBulkResponseDto, ClassificationsApi.BulkArchiveClassificationDepartmentError&gt;</code>, with `result.value` of type <code>[ClassificationDepartmentBulkResponseDto](src/models/classification-department-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkArchiveClassificationEmployee(request: ClassificationsApi.BulkArchiveClassificationEmployeeRequest, options?: RequestOptions): ApiPromise&lt;ClassificationEmployeeBulkResponseDto, ClassificationsApi.BulkArchiveClassificationEmployeeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive multiple employees with one API request. In the response, the `archived` field for each object is set as `true`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.bulkArchiveClassificationEmployee({
    ids: "{{employee_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ClassificationEmployeeBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.BulkArchiveClassificationEmployeeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .bulkArchiveClassificationEmployee({
    ids: "{{employee_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationEmployeeBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.bulkArchiveClassificationEmployee(request)`

- **OnSuccess**: <code>[ClassificationEmployeeBulkResponseDto](src/models/classification-employee-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.BulkArchiveClassificationEmployeeError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.bulkArchiveClassificationEmployee(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationEmployeeBulkResponseDto, ClassificationsApi.BulkArchiveClassificationEmployeeError&gt;</code>, with `result.value` of type <code>[ClassificationEmployeeBulkResponseDto](src/models/classification-employee-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkArchiveClassificationItem(request: ClassificationsApi.BulkArchiveClassificationItemRequest, options?: RequestOptions): ApiPromise&lt;ClassificationItemBulkResponseDto, ClassificationsApi.BulkArchiveClassificationItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive multiple items with one API request. In the response, the `archived` field for each object is set as `true`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.bulkArchiveClassificationItem({
    ids: "{{item_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ClassificationItemBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.BulkArchiveClassificationItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .bulkArchiveClassificationItem({
    ids: "{{item_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationItemBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.bulkArchiveClassificationItem(request)`

- **OnSuccess**: <code>[ClassificationItemBulkResponseDto](src/models/classification-item-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.BulkArchiveClassificationItemError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.bulkArchiveClassificationItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationItemBulkResponseDto, ClassificationsApi.BulkArchiveClassificationItemError&gt;</code>, with `result.value` of type <code>[ClassificationItemBulkResponseDto](src/models/classification-item-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkArchiveClassificationJob(request: ClassificationsApi.BulkArchiveClassificationJobRequest, options?: RequestOptions): ApiPromise&lt;ClassificationJobBulkResponseDto, ClassificationsApi.BulkArchiveClassificationJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive multiple jobs with one API request. In the response, the `archived` field for each object is set as `true`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.bulkArchiveClassificationJob({
    ids: "{{job_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ClassificationJobBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.BulkArchiveClassificationJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .bulkArchiveClassificationJob({
    ids: "{{job_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationJobBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.bulkArchiveClassificationJob(request)`

- **OnSuccess**: <code>[ClassificationJobBulkResponseDto](src/models/classification-job-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.BulkArchiveClassificationJobError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.bulkArchiveClassificationJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationJobBulkResponseDto, ClassificationsApi.BulkArchiveClassificationJobError&gt;</code>, with `result.value` of type <code>[ClassificationJobBulkResponseDto](src/models/classification-job-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkArchiveClassificationLocation(request: ClassificationsApi.BulkArchiveClassificationLocationRequest, options?: RequestOptions): ApiPromise&lt;ClassificationLocationBulkResponseDto, ClassificationsApi.BulkArchiveClassificationLocationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive multiple locations with one API request. In the response, the `archived` field for each object is set as `true`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.bulkArchiveClassificationLocation({
    ids: "{{location_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ClassificationLocationBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.BulkArchiveClassificationLocationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .bulkArchiveClassificationLocation({
    ids: "{{location_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationLocationBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.bulkArchiveClassificationLocation(request)`

- **OnSuccess**: <code>[ClassificationLocationBulkResponseDto](src/models/classification-location-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.BulkArchiveClassificationLocationError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.bulkArchiveClassificationLocation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationLocationBulkResponseDto, ClassificationsApi.BulkArchiveClassificationLocationError&gt;</code>, with `result.value` of type <code>[ClassificationLocationBulkResponseDto](src/models/classification-location-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkCreateClassificationAccountingClass(request: ClassificationsApi.BulkCreateClassificationAccountingClassRequest, options?: RequestOptions): ApiPromise&lt;ClassificationAccountingClassBulkResponseDto, ClassificationsApi.BulkCreateClassificationAccountingClassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple accounting classes with one API request. You can create up to 50 accounting classes with one `POST /v3/classifications/accounting-classes/bulk` request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.bulkCreateClassificationAccountingClass({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [{ name: "some example string" }],
  });
  // TODO: Handle 'response' of type ClassificationAccountingClassBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.BulkCreateClassificationAccountingClassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .bulkCreateClassificationAccountingClass({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [{ name: "some example string" }],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationAccountingClassBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[CreateClassificationAccountingClassRequestDto](src/models/create-classification-accounting-class-request-dto.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.bulkCreateClassificationAccountingClass(request)`

- **OnSuccess**: <code>[ClassificationAccountingClassBulkResponseDto](src/models/classification-accounting-class-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.BulkCreateClassificationAccountingClassError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.bulkCreateClassificationAccountingClass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationAccountingClassBulkResponseDto, ClassificationsApi.BulkCreateClassificationAccountingClassError&gt;</code>, with `result.value` of type <code>[ClassificationAccountingClassBulkResponseDto](src/models/classification-accounting-class-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkCreateClassificationChartOfAccounts(request: ClassificationsApi.BulkCreateClassificationChartOfAccountsRequest, options?: RequestOptions): ApiPromise&lt;ClassificationChartOfAccountsBulkResponseDto, ClassificationsApi.BulkCreateClassificationChartOfAccountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple chart of accounts with one API request. You can create up to 50 chart of accounts with one `POST /v3/classifications/chart-of-accounts/bulk` request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.bulkCreateClassificationChartOfAccounts({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [{ name: "some example string" }],
  });
  // TODO: Handle 'response' of type ClassificationChartOfAccountsBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.BulkCreateClassificationChartOfAccountsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .bulkCreateClassificationChartOfAccounts({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [{ name: "some example string" }],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationChartOfAccountsBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[CreateClassificationChartOfAccountsRequestDto](src/models/create-classification-chart-of-accounts-request-dto.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.bulkCreateClassificationChartOfAccounts(request)`

- **OnSuccess**: <code>[ClassificationChartOfAccountsBulkResponseDto](src/models/classification-chart-of-accounts-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.BulkCreateClassificationChartOfAccountsError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.bulkCreateClassificationChartOfAccounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationChartOfAccountsBulkResponseDto, ClassificationsApi.BulkCreateClassificationChartOfAccountsError&gt;</code>, with `result.value` of type <code>[ClassificationChartOfAccountsBulkResponseDto](src/models/classification-chart-of-accounts-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkCreateClassificationDepartment(request: ClassificationsApi.BulkCreateClassificationDepartmentRequest, options?: RequestOptions): ApiPromise&lt;ClassificationDepartmentBulkResponseDto, ClassificationsApi.BulkCreateClassificationDepartmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple departments with one API request. You can create up to 50 departments with one `POST /v3/classifications/departments/bulk` request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.bulkCreateClassificationDepartment({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [{ name: "some example string" }],
  });
  // TODO: Handle 'response' of type ClassificationDepartmentBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.BulkCreateClassificationDepartmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .bulkCreateClassificationDepartment({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [{ name: "some example string" }],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationDepartmentBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[CreateClassificationDepartmentRequestDto](src/models/create-classification-department-request-dto.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.bulkCreateClassificationDepartment(request)`

- **OnSuccess**: <code>[ClassificationDepartmentBulkResponseDto](src/models/classification-department-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.BulkCreateClassificationDepartmentError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.bulkCreateClassificationDepartment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationDepartmentBulkResponseDto, ClassificationsApi.BulkCreateClassificationDepartmentError&gt;</code>, with `result.value` of type <code>[ClassificationDepartmentBulkResponseDto](src/models/classification-department-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkCreateClassificationEmployee(request: ClassificationsApi.BulkCreateClassificationEmployeeRequest, options?: RequestOptions): ApiPromise&lt;ClassificationEmployeeBulkResponseDto, ClassificationsApi.BulkCreateClassificationEmployeeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple employees with one API request. You can create up to 50 employees with one `POST /v3/classifications/employees/bulk` request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.bulkCreateClassificationEmployee({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [{ firstName: "some example string", lastName: "some example string" }],
  });
  // TODO: Handle 'response' of type ClassificationEmployeeBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.BulkCreateClassificationEmployeeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .bulkCreateClassificationEmployee({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [{ firstName: "some example string", lastName: "some example string" }],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationEmployeeBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[CreateClassificationEmployeeRequestDto](src/models/create-classification-employee-request-dto.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.bulkCreateClassificationEmployee(request)`

- **OnSuccess**: <code>[ClassificationEmployeeBulkResponseDto](src/models/classification-employee-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.BulkCreateClassificationEmployeeError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.bulkCreateClassificationEmployee(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationEmployeeBulkResponseDto, ClassificationsApi.BulkCreateClassificationEmployeeError&gt;</code>, with `result.value` of type <code>[ClassificationEmployeeBulkResponseDto](src/models/classification-employee-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkCreateClassificationItem(request: ClassificationsApi.BulkCreateClassificationItemRequest, options?: RequestOptions): ApiPromise&lt;ClassificationItemBulkResponseDto, ClassificationsApi.BulkCreateClassificationItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple items with one API request. You can create up to 50 items with one `POST /v3/classifications/items/bulk` request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.bulkCreateClassificationItem({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [{ type: ItemTypeRequest.Unknown, name: "some example string" }],
  });
  // TODO: Handle 'response' of type ClassificationItemBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.BulkCreateClassificationItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .bulkCreateClassificationItem({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [{ type: ItemTypeRequest.Unknown, name: "some example string" }],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationItemBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[CreateClassificationItemRequestDto](src/models/create-classification-item-request-dto.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.bulkCreateClassificationItem(request)`

- **OnSuccess**: <code>[ClassificationItemBulkResponseDto](src/models/classification-item-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.BulkCreateClassificationItemError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.bulkCreateClassificationItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationItemBulkResponseDto, ClassificationsApi.BulkCreateClassificationItemError&gt;</code>, with `result.value` of type <code>[ClassificationItemBulkResponseDto](src/models/classification-item-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkCreateClassificationJob(request: ClassificationsApi.BulkCreateClassificationJobRequest, options?: RequestOptions): ApiPromise&lt;ClassificationJobBulkResponseDto, ClassificationsApi.BulkCreateClassificationJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple jobs with one API request. You can create up to 50 jobs with one `POST /v3/classifications/jobs/bulk` request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.bulkCreateClassificationJob({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [{ name: "some example string" }],
  });
  // TODO: Handle 'response' of type ClassificationJobBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.BulkCreateClassificationJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .bulkCreateClassificationJob({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [{ name: "some example string" }],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationJobBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[CreateClassificationJobRequestDto](src/models/create-classification-job-request-dto.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.bulkCreateClassificationJob(request)`

- **OnSuccess**: <code>[ClassificationJobBulkResponseDto](src/models/classification-job-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.BulkCreateClassificationJobError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.bulkCreateClassificationJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationJobBulkResponseDto, ClassificationsApi.BulkCreateClassificationJobError&gt;</code>, with `result.value` of type <code>[ClassificationJobBulkResponseDto](src/models/classification-job-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkCreateClassificationLocation(request: ClassificationsApi.BulkCreateClassificationLocationRequest, options?: RequestOptions): ApiPromise&lt;ClassificationLocationBulkResponseDto, ClassificationsApi.BulkCreateClassificationLocationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple locations with one API request. You can create up to 50 locations with one `POST /v3/classifications/locations/bulk` request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.bulkCreateClassificationLocation({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [{ name: "some example string" }],
  });
  // TODO: Handle 'response' of type ClassificationLocationBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.BulkCreateClassificationLocationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .bulkCreateClassificationLocation({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [{ name: "some example string" }],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationLocationBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[CreateClassificationLocationRequestDto](src/models/create-classification-location-request-dto.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.bulkCreateClassificationLocation(request)`

- **OnSuccess**: <code>[ClassificationLocationBulkResponseDto](src/models/classification-location-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.BulkCreateClassificationLocationError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.bulkCreateClassificationLocation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationLocationBulkResponseDto, ClassificationsApi.BulkCreateClassificationLocationError&gt;</code>, with `result.value` of type <code>[ClassificationLocationBulkResponseDto](src/models/classification-location-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkRestoreClassificationAccountingClass(request: ClassificationsApi.BulkRestoreClassificationAccountingClassRequest, options?: RequestOptions): ApiPromise&lt;ClassificationAccountingClassBulkResponseDto, ClassificationsApi.BulkRestoreClassificationAccountingClassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore multiple accounting classes with one API request. In the response, the `archived` field for each object is set as `false`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.bulkRestoreClassificationAccountingClass({
    ids: "{{accounting_class_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ClassificationAccountingClassBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.BulkRestoreClassificationAccountingClassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .bulkRestoreClassificationAccountingClass({
    ids: "{{accounting_class_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationAccountingClassBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.bulkRestoreClassificationAccountingClass(request)`

- **OnSuccess**: <code>[ClassificationAccountingClassBulkResponseDto](src/models/classification-accounting-class-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.BulkRestoreClassificationAccountingClassError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.bulkRestoreClassificationAccountingClass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationAccountingClassBulkResponseDto, ClassificationsApi.BulkRestoreClassificationAccountingClassError&gt;</code>, with `result.value` of type <code>[ClassificationAccountingClassBulkResponseDto](src/models/classification-accounting-class-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkRestoreClassificationChartOfAccounts(request: ClassificationsApi.BulkRestoreClassificationChartOfAccountsRequest, options?: RequestOptions): ApiPromise&lt;ClassificationChartOfAccountsBulkResponseDto, ClassificationsApi.BulkRestoreClassificationChartOfAccountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore multiple chart of accounts with one API request. In the response, the `archived` field for each object is set as `false`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.bulkRestoreClassificationChartOfAccounts({
    ids: "{{chart_of_accounts_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ClassificationChartOfAccountsBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.BulkRestoreClassificationChartOfAccountsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .bulkRestoreClassificationChartOfAccounts({
    ids: "{{chart_of_accounts_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationChartOfAccountsBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.bulkRestoreClassificationChartOfAccounts(request)`

- **OnSuccess**: <code>[ClassificationChartOfAccountsBulkResponseDto](src/models/classification-chart-of-accounts-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.BulkRestoreClassificationChartOfAccountsError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.bulkRestoreClassificationChartOfAccounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationChartOfAccountsBulkResponseDto, ClassificationsApi.BulkRestoreClassificationChartOfAccountsError&gt;</code>, with `result.value` of type <code>[ClassificationChartOfAccountsBulkResponseDto](src/models/classification-chart-of-accounts-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkRestoreClassificationDepartment(request: ClassificationsApi.BulkRestoreClassificationDepartmentRequest, options?: RequestOptions): ApiPromise&lt;ClassificationDepartmentBulkResponseDto, ClassificationsApi.BulkRestoreClassificationDepartmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore multiple departments with one API request. In the response, the `archived` field is set as `false`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.bulkRestoreClassificationDepartment({
    ids: "{{department_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ClassificationDepartmentBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.BulkRestoreClassificationDepartmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .bulkRestoreClassificationDepartment({
    ids: "{{department_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationDepartmentBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.bulkRestoreClassificationDepartment(request)`

- **OnSuccess**: <code>[ClassificationDepartmentBulkResponseDto](src/models/classification-department-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.BulkRestoreClassificationDepartmentError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.bulkRestoreClassificationDepartment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationDepartmentBulkResponseDto, ClassificationsApi.BulkRestoreClassificationDepartmentError&gt;</code>, with `result.value` of type <code>[ClassificationDepartmentBulkResponseDto](src/models/classification-department-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkRestoreClassificationEmployee(request: ClassificationsApi.BulkRestoreClassificationEmployeeRequest, options?: RequestOptions): ApiPromise&lt;ClassificationEmployeeBulkResponseDto, ClassificationsApi.BulkRestoreClassificationEmployeeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore multiple employees with one API request. In the response, the `archived` field for each object is set as `false`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.bulkRestoreClassificationEmployee({
    ids: "{{employee_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ClassificationEmployeeBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.BulkRestoreClassificationEmployeeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .bulkRestoreClassificationEmployee({
    ids: "{{employee_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationEmployeeBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.bulkRestoreClassificationEmployee(request)`

- **OnSuccess**: <code>[ClassificationEmployeeBulkResponseDto](src/models/classification-employee-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.BulkRestoreClassificationEmployeeError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.bulkRestoreClassificationEmployee(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationEmployeeBulkResponseDto, ClassificationsApi.BulkRestoreClassificationEmployeeError&gt;</code>, with `result.value` of type <code>[ClassificationEmployeeBulkResponseDto](src/models/classification-employee-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkRestoreClassificationItem(request: ClassificationsApi.BulkRestoreClassificationItemRequest, options?: RequestOptions): ApiPromise&lt;ClassificationItemBulkResponseDto, ClassificationsApi.BulkRestoreClassificationItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore multiple items with one API request. In the response, the `archived` field for each object is set as `false`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.bulkRestoreClassificationItem({
    ids: "{{item_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ClassificationItemBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.BulkRestoreClassificationItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .bulkRestoreClassificationItem({
    ids: "{{item_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationItemBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.bulkRestoreClassificationItem(request)`

- **OnSuccess**: <code>[ClassificationItemBulkResponseDto](src/models/classification-item-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.BulkRestoreClassificationItemError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.bulkRestoreClassificationItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationItemBulkResponseDto, ClassificationsApi.BulkRestoreClassificationItemError&gt;</code>, with `result.value` of type <code>[ClassificationItemBulkResponseDto](src/models/classification-item-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkRestoreClassificationJob(request: ClassificationsApi.BulkRestoreClassificationJobRequest, options?: RequestOptions): ApiPromise&lt;ClassificationJobBulkResponseDto, ClassificationsApi.BulkRestoreClassificationJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore multiple jobs with one API request. In the response, the `archived` field for each object is set as `false`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.bulkRestoreClassificationJob({
    ids: "{{job_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ClassificationJobBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.BulkRestoreClassificationJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .bulkRestoreClassificationJob({
    ids: "{{job_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationJobBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.bulkRestoreClassificationJob(request)`

- **OnSuccess**: <code>[ClassificationJobBulkResponseDto](src/models/classification-job-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.BulkRestoreClassificationJobError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.bulkRestoreClassificationJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationJobBulkResponseDto, ClassificationsApi.BulkRestoreClassificationJobError&gt;</code>, with `result.value` of type <code>[ClassificationJobBulkResponseDto](src/models/classification-job-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkRestoreClassificationLocation(request: ClassificationsApi.BulkRestoreClassificationLocationRequest, options?: RequestOptions): ApiPromise&lt;ClassificationLocationBulkResponseDto, ClassificationsApi.BulkRestoreClassificationLocationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore multiple locations with one API request. In the response, the `archived` field for each object is set as `false`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.bulkRestoreClassificationLocation({
    ids: "{{location_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ClassificationLocationBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.BulkRestoreClassificationLocationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .bulkRestoreClassificationLocation({
    ids: "{{location_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationLocationBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.bulkRestoreClassificationLocation(request)`

- **OnSuccess**: <code>[ClassificationLocationBulkResponseDto](src/models/classification-location-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.BulkRestoreClassificationLocationError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.bulkRestoreClassificationLocation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationLocationBulkResponseDto, ClassificationsApi.BulkRestoreClassificationLocationError&gt;</code>, with `result.value` of type <code>[ClassificationLocationBulkResponseDto](src/models/classification-location-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkUpdateClassificationAccountingClass(request: ClassificationsApi.BulkUpdateClassificationAccountingClassRequest, options?: RequestOptions): ApiPromise&lt;ClassificationAccountingClassBulkResponseDto, ClassificationsApi.BulkUpdateClassificationAccountingClassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about multiple accounting classes with one API request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.bulkUpdateClassificationAccountingClass({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [{ id: "some example string" }],
  });
  // TODO: Handle 'response' of type ClassificationAccountingClassBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.BulkUpdateClassificationAccountingClassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .bulkUpdateClassificationAccountingClass({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [{ id: "some example string" }],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationAccountingClassBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[UpdateClassificationAccountingClassWithIdRequestDto](src/models/update-classification-accounting-class-with-id-request-dto.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.bulkUpdateClassificationAccountingClass(request)`

- **OnSuccess**: <code>[ClassificationAccountingClassBulkResponseDto](src/models/classification-accounting-class-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.BulkUpdateClassificationAccountingClassError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.bulkUpdateClassificationAccountingClass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationAccountingClassBulkResponseDto, ClassificationsApi.BulkUpdateClassificationAccountingClassError&gt;</code>, with `result.value` of type <code>[ClassificationAccountingClassBulkResponseDto](src/models/classification-accounting-class-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkUpdateClassificationChartOfAccounts(request: ClassificationsApi.BulkUpdateClassificationChartOfAccountsRequest, options?: RequestOptions): ApiPromise&lt;ClassificationChartOfAccountsBulkResponseDto, ClassificationsApi.BulkUpdateClassificationChartOfAccountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about multiple chart of accounts with one API request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.bulkUpdateClassificationChartOfAccounts({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [{ id: "some example string" }],
  });
  // TODO: Handle 'response' of type ClassificationChartOfAccountsBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.BulkUpdateClassificationChartOfAccountsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .bulkUpdateClassificationChartOfAccounts({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [{ id: "some example string" }],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationChartOfAccountsBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[UpdateClassificationChartOfAccountsWithIdRequestDto](src/models/update-classification-chart-of-accounts-with-id-request-dto.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.bulkUpdateClassificationChartOfAccounts(request)`

- **OnSuccess**: <code>[ClassificationChartOfAccountsBulkResponseDto](src/models/classification-chart-of-accounts-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.BulkUpdateClassificationChartOfAccountsError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.bulkUpdateClassificationChartOfAccounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationChartOfAccountsBulkResponseDto, ClassificationsApi.BulkUpdateClassificationChartOfAccountsError&gt;</code>, with `result.value` of type <code>[ClassificationChartOfAccountsBulkResponseDto](src/models/classification-chart-of-accounts-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkUpdateClassificationDepartment(request: ClassificationsApi.BulkUpdateClassificationDepartmentRequest, options?: RequestOptions): ApiPromise&lt;ClassificationDepartmentBulkResponseDto, ClassificationsApi.BulkUpdateClassificationDepartmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update multiple departments with one API request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.bulkUpdateClassificationDepartment({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [{ id: "some example string" }],
  });
  // TODO: Handle 'response' of type ClassificationDepartmentBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.BulkUpdateClassificationDepartmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .bulkUpdateClassificationDepartment({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [{ id: "some example string" }],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationDepartmentBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[UpdateClassificationDepartmentWithIdRequestDto](src/models/update-classification-department-with-id-request-dto.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.bulkUpdateClassificationDepartment(request)`

- **OnSuccess**: <code>[ClassificationDepartmentBulkResponseDto](src/models/classification-department-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.BulkUpdateClassificationDepartmentError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.bulkUpdateClassificationDepartment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationDepartmentBulkResponseDto, ClassificationsApi.BulkUpdateClassificationDepartmentError&gt;</code>, with `result.value` of type <code>[ClassificationDepartmentBulkResponseDto](src/models/classification-department-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkUpdateClassificationEmployee(request: ClassificationsApi.BulkUpdateClassificationEmployeeRequest, options?: RequestOptions): ApiPromise&lt;ClassificationEmployeeBulkResponseDto, ClassificationsApi.BulkUpdateClassificationEmployeeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about multiple employees with one API request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.bulkUpdateClassificationEmployee({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [{ id: "some example string" }],
  });
  // TODO: Handle 'response' of type ClassificationEmployeeBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.BulkUpdateClassificationEmployeeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .bulkUpdateClassificationEmployee({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [{ id: "some example string" }],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationEmployeeBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[UpdateClassificationEmployeeWithIdRequestDto](src/models/update-classification-employee-with-id-request-dto.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.bulkUpdateClassificationEmployee(request)`

- **OnSuccess**: <code>[ClassificationEmployeeBulkResponseDto](src/models/classification-employee-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.BulkUpdateClassificationEmployeeError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.bulkUpdateClassificationEmployee(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationEmployeeBulkResponseDto, ClassificationsApi.BulkUpdateClassificationEmployeeError&gt;</code>, with `result.value` of type <code>[ClassificationEmployeeBulkResponseDto](src/models/classification-employee-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkUpdateClassificationItem(request: ClassificationsApi.BulkUpdateClassificationItemRequest, options?: RequestOptions): ApiPromise&lt;ClassificationItemBulkResponseDto, ClassificationsApi.BulkUpdateClassificationItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about multiple items with one API request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.bulkUpdateClassificationItem({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [{ id: "some example string" }],
  });
  // TODO: Handle 'response' of type ClassificationItemBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.BulkUpdateClassificationItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .bulkUpdateClassificationItem({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [{ id: "some example string" }],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationItemBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[UpdateClassificationItemWithIdRequestDto](src/models/update-classification-item-with-id-request-dto.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.bulkUpdateClassificationItem(request)`

- **OnSuccess**: <code>[ClassificationItemBulkResponseDto](src/models/classification-item-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.BulkUpdateClassificationItemError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.bulkUpdateClassificationItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationItemBulkResponseDto, ClassificationsApi.BulkUpdateClassificationItemError&gt;</code>, with `result.value` of type <code>[ClassificationItemBulkResponseDto](src/models/classification-item-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkUpdateClassificationJob(request: ClassificationsApi.BulkUpdateClassificationJobRequest, options?: RequestOptions): ApiPromise&lt;ClassificationJobBulkResponseDto, ClassificationsApi.BulkUpdateClassificationJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about multiple jobs with one API request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.bulkUpdateClassificationJob({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [{ id: "some example string" }],
  });
  // TODO: Handle 'response' of type ClassificationJobBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.BulkUpdateClassificationJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .bulkUpdateClassificationJob({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [{ id: "some example string" }],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationJobBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[UpdateClassificationJobWithIdRequestDto](src/models/update-classification-job-with-id-request-dto.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.bulkUpdateClassificationJob(request)`

- **OnSuccess**: <code>[ClassificationJobBulkResponseDto](src/models/classification-job-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.BulkUpdateClassificationJobError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.bulkUpdateClassificationJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationJobBulkResponseDto, ClassificationsApi.BulkUpdateClassificationJobError&gt;</code>, with `result.value` of type <code>[ClassificationJobBulkResponseDto](src/models/classification-job-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkUpdateClassificationLocation(request: ClassificationsApi.BulkUpdateClassificationLocationRequest, options?: RequestOptions): ApiPromise&lt;ClassificationLocationBulkResponseDto, ClassificationsApi.BulkUpdateClassificationLocationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about multiple locations with one API request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.bulkUpdateClassificationLocation({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [{ id: "some example string" }],
  });
  // TODO: Handle 'response' of type ClassificationLocationBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.BulkUpdateClassificationLocationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .bulkUpdateClassificationLocation({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [{ id: "some example string" }],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationLocationBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[UpdateClassificationLocationWithIdRequestDto](src/models/update-classification-location-with-id-request-dto.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.bulkUpdateClassificationLocation(request)`

- **OnSuccess**: <code>[ClassificationLocationBulkResponseDto](src/models/classification-location-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.BulkUpdateClassificationLocationError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.bulkUpdateClassificationLocation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationLocationBulkResponseDto, ClassificationsApi.BulkUpdateClassificationLocationError&gt;</code>, with `result.value` of type <code>[ClassificationLocationBulkResponseDto](src/models/classification-location-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createClassificationAccountingClass(request: ClassificationsApi.CreateClassificationAccountingClassRequest, options?: RequestOptions): ApiPromise&lt;ClassificationAccountingClassResponseDto, ClassificationsApi.CreateClassificationAccountingClassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new accounting class.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.createClassificationAccountingClass({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { name: "some example string" },
  });
  // TODO: Handle 'response' of type ClassificationAccountingClassResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.CreateClassificationAccountingClassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .createClassificationAccountingClass({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { name: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationAccountingClassResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[CreateClassificationAccountingClassRequestDto](src/models/create-classification-accounting-class-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.createClassificationAccountingClass(request)`

- **OnSuccess**: <code>[ClassificationAccountingClassResponseDto](src/models/classification-accounting-class-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.CreateClassificationAccountingClassError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.createClassificationAccountingClass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationAccountingClassResponseDto, ClassificationsApi.CreateClassificationAccountingClassError&gt;</code>, with `result.value` of type <code>[ClassificationAccountingClassResponseDto](src/models/classification-accounting-class-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createClassificationChartOfAccounts(request: ClassificationsApi.CreateClassificationChartOfAccountsRequest, options?: RequestOptions): ApiPromise&lt;ClassificationChartOfAccountsResponseDto, ClassificationsApi.CreateClassificationChartOfAccountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new chart of accounts.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.createClassificationChartOfAccounts({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { name: "some example string" },
  });
  // TODO: Handle 'response' of type ClassificationChartOfAccountsResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.CreateClassificationChartOfAccountsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .createClassificationChartOfAccounts({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { name: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationChartOfAccountsResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[CreateClassificationChartOfAccountsRequestDto](src/models/create-classification-chart-of-accounts-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.createClassificationChartOfAccounts(request)`

- **OnSuccess**: <code>[ClassificationChartOfAccountsResponseDto](src/models/classification-chart-of-accounts-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.CreateClassificationChartOfAccountsError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.createClassificationChartOfAccounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationChartOfAccountsResponseDto, ClassificationsApi.CreateClassificationChartOfAccountsError&gt;</code>, with `result.value` of type <code>[ClassificationChartOfAccountsResponseDto](src/models/classification-chart-of-accounts-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createClassificationDepartment(request: ClassificationsApi.CreateClassificationDepartmentRequest, options?: RequestOptions): ApiPromise&lt;ClassificationDepartmentResponseDto, ClassificationsApi.CreateClassificationDepartmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new department.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.createClassificationDepartment({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { name: "some example string" },
  });
  // TODO: Handle 'response' of type ClassificationDepartmentResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.CreateClassificationDepartmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .createClassificationDepartment({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { name: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationDepartmentResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[CreateClassificationDepartmentRequestDto](src/models/create-classification-department-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.createClassificationDepartment(request)`

- **OnSuccess**: <code>[ClassificationDepartmentResponseDto](src/models/classification-department-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.CreateClassificationDepartmentError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.createClassificationDepartment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationDepartmentResponseDto, ClassificationsApi.CreateClassificationDepartmentError&gt;</code>, with `result.value` of type <code>[ClassificationDepartmentResponseDto](src/models/classification-department-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createClassificationEmployee(request: ClassificationsApi.CreateClassificationEmployeeRequest, options?: RequestOptions): ApiPromise&lt;ClassificationEmployeeResponseDto, ClassificationsApi.CreateClassificationEmployeeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new employee.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.createClassificationEmployee({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { firstName: "some example string", lastName: "some example string" },
  });
  // TODO: Handle 'response' of type ClassificationEmployeeResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.CreateClassificationEmployeeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .createClassificationEmployee({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { firstName: "some example string", lastName: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationEmployeeResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[CreateClassificationEmployeeRequestDto](src/models/create-classification-employee-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.createClassificationEmployee(request)`

- **OnSuccess**: <code>[ClassificationEmployeeResponseDto](src/models/classification-employee-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.CreateClassificationEmployeeError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.createClassificationEmployee(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationEmployeeResponseDto, ClassificationsApi.CreateClassificationEmployeeError&gt;</code>, with `result.value` of type <code>[ClassificationEmployeeResponseDto](src/models/classification-employee-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createClassificationItem(request: ClassificationsApi.CreateClassificationItemRequest, options?: RequestOptions): ApiPromise&lt;ClassificationItemResponseDto, ClassificationsApi.CreateClassificationItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new item.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.createClassificationItem({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { type: ItemTypeRequest.Unknown, name: "some example string" },
  });
  // TODO: Handle 'response' of type ClassificationItemResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.CreateClassificationItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .createClassificationItem({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { type: ItemTypeRequest.Unknown, name: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationItemResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[CreateClassificationItemRequestDto](src/models/create-classification-item-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.createClassificationItem(request)`

- **OnSuccess**: <code>[ClassificationItemResponseDto](src/models/classification-item-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.CreateClassificationItemError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.createClassificationItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationItemResponseDto, ClassificationsApi.CreateClassificationItemError&gt;</code>, with `result.value` of type <code>[ClassificationItemResponseDto](src/models/classification-item-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createClassificationJob(request: ClassificationsApi.CreateClassificationJobRequest, options?: RequestOptions): ApiPromise&lt;ClassificationJobResponseDto, ClassificationsApi.CreateClassificationJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new job.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.createClassificationJob({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { name: "some example string" },
  });
  // TODO: Handle 'response' of type ClassificationJobResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.CreateClassificationJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .createClassificationJob({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { name: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationJobResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[CreateClassificationJobRequestDto](src/models/create-classification-job-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.createClassificationJob(request)`

- **OnSuccess**: <code>[ClassificationJobResponseDto](src/models/classification-job-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.CreateClassificationJobError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.createClassificationJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationJobResponseDto, ClassificationsApi.CreateClassificationJobError&gt;</code>, with `result.value` of type <code>[ClassificationJobResponseDto](src/models/classification-job-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createClassificationLocation(request: ClassificationsApi.CreateClassificationLocationRequest, options?: RequestOptions): ApiPromise&lt;ClassificationLocationResponseDto, ClassificationsApi.CreateClassificationLocationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.createClassificationLocation({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { name: "some example string" },
  });
  // TODO: Handle 'response' of type ClassificationLocationResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.CreateClassificationLocationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .createClassificationLocation({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { name: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationLocationResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[CreateClassificationLocationRequestDto](src/models/create-classification-location-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.createClassificationLocation(request)`

- **OnSuccess**: <code>[ClassificationLocationResponseDto](src/models/classification-location-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.CreateClassificationLocationError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.createClassificationLocation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationLocationResponseDto, ClassificationsApi.CreateClassificationLocationError&gt;</code>, with `result.value` of type <code>[ClassificationLocationResponseDto](src/models/classification-location-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getClassificationAccountingClass(request: ClassificationsApi.GetClassificationAccountingClassRequest, options?: RequestOptions): ApiPromise&lt;ClassificationAccountingClassResponseDto, ClassificationsApi.GetClassificationAccountingClassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing accounting class.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.getClassificationAccountingClass({
    id: "{{accounting_class_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ClassificationAccountingClassResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.GetClassificationAccountingClassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .getClassificationAccountingClass({
    id: "{{accounting_class_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationAccountingClassResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.getClassificationAccountingClass(request)`

- **OnSuccess**: <code>[ClassificationAccountingClassResponseDto](src/models/classification-accounting-class-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.GetClassificationAccountingClassError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.getClassificationAccountingClass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationAccountingClassResponseDto, ClassificationsApi.GetClassificationAccountingClassError&gt;</code>, with `result.value` of type <code>[ClassificationAccountingClassResponseDto](src/models/classification-accounting-class-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getClassificationChartOfAccounts(request: ClassificationsApi.GetClassificationChartOfAccountsRequest, options?: RequestOptions): ApiPromise&lt;ClassificationChartOfAccountsResponseDto, ClassificationsApi.GetClassificationChartOfAccountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing chart of accounts.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.getClassificationChartOfAccounts({
    id: "{{chart_of_accounts_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ClassificationChartOfAccountsResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.GetClassificationChartOfAccountsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .getClassificationChartOfAccounts({
    id: "{{chart_of_accounts_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationChartOfAccountsResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.getClassificationChartOfAccounts(request)`

- **OnSuccess**: <code>[ClassificationChartOfAccountsResponseDto](src/models/classification-chart-of-accounts-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.GetClassificationChartOfAccountsError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.getClassificationChartOfAccounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationChartOfAccountsResponseDto, ClassificationsApi.GetClassificationChartOfAccountsError&gt;</code>, with `result.value` of type <code>[ClassificationChartOfAccountsResponseDto](src/models/classification-chart-of-accounts-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getClassificationDepartment(request: ClassificationsApi.GetClassificationDepartmentRequest, options?: RequestOptions): ApiPromise&lt;ClassificationDepartmentResponseDto, ClassificationsApi.GetClassificationDepartmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing department.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.getClassificationDepartment({
    id: "{{department_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ClassificationDepartmentResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.GetClassificationDepartmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .getClassificationDepartment({
    id: "{{department_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationDepartmentResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.getClassificationDepartment(request)`

- **OnSuccess**: <code>[ClassificationDepartmentResponseDto](src/models/classification-department-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.GetClassificationDepartmentError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.getClassificationDepartment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationDepartmentResponseDto, ClassificationsApi.GetClassificationDepartmentError&gt;</code>, with `result.value` of type <code>[ClassificationDepartmentResponseDto](src/models/classification-department-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getClassificationEmployee(request: ClassificationsApi.GetClassificationEmployeeRequest, options?: RequestOptions): ApiPromise&lt;ClassificationEmployeeResponseDto, ClassificationsApi.GetClassificationEmployeeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing employee.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.getClassificationEmployee({
    id: "{{employee_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ClassificationEmployeeResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.GetClassificationEmployeeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .getClassificationEmployee({
    id: "{{employee_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationEmployeeResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.getClassificationEmployee(request)`

- **OnSuccess**: <code>[ClassificationEmployeeResponseDto](src/models/classification-employee-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.GetClassificationEmployeeError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.getClassificationEmployee(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationEmployeeResponseDto, ClassificationsApi.GetClassificationEmployeeError&gt;</code>, with `result.value` of type <code>[ClassificationEmployeeResponseDto](src/models/classification-employee-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getClassificationItem(request: ClassificationsApi.GetClassificationItemRequest, options?: RequestOptions): ApiPromise&lt;ClassificationItemResponseDto, ClassificationsApi.GetClassificationItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing item.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.getClassificationItem({
    id: "{{item_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ClassificationItemResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.GetClassificationItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .getClassificationItem({ id: "{{item_id}}", sessionId: "{{session_id}}", devKey: "{{developer_key}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationItemResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.getClassificationItem(request)`

- **OnSuccess**: <code>[ClassificationItemResponseDto](src/models/classification-item-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.GetClassificationItemError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.getClassificationItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationItemResponseDto, ClassificationsApi.GetClassificationItemError&gt;</code>, with `result.value` of type <code>[ClassificationItemResponseDto](src/models/classification-item-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getClassificationJob(request: ClassificationsApi.GetClassificationJobRequest, options?: RequestOptions): ApiPromise&lt;ClassificationJobResponseDto, ClassificationsApi.GetClassificationJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing job.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.getClassificationJob({
    id: "{{job_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ClassificationJobResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.GetClassificationJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .getClassificationJob({ id: "{{job_id}}", sessionId: "{{session_id}}", devKey: "{{developer_key}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationJobResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.getClassificationJob(request)`

- **OnSuccess**: <code>[ClassificationJobResponseDto](src/models/classification-job-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.GetClassificationJobError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.getClassificationJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationJobResponseDto, ClassificationsApi.GetClassificationJobError&gt;</code>, with `result.value` of type <code>[ClassificationJobResponseDto](src/models/classification-job-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getClassificationLocation(request: ClassificationsApi.GetClassificationLocationRequest, options?: RequestOptions): ApiPromise&lt;ClassificationLocationResponseDto, ClassificationsApi.GetClassificationLocationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.getClassificationLocation({
    id: "{{location_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ClassificationLocationResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.GetClassificationLocationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .getClassificationLocation({
    id: "{{location_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationLocationResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.getClassificationLocation(request)`

- **OnSuccess**: <code>[ClassificationLocationResponseDto](src/models/classification-location-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.GetClassificationLocationError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.getClassificationLocation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationLocationResponseDto, ClassificationsApi.GetClassificationLocationError&gt;</code>, with `result.value` of type <code>[ClassificationLocationResponseDto](src/models/classification-location-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listClassificationAccountingClasses(request?: ClassificationsApi.ListClassificationAccountingClassesRequest, options?: RequestOptions): ApiPromise&lt;ListResponseDtoClassificationAccountingClassResponseDto, ClassificationsApi.ListClassificationAccountingClassesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of accounting class objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.listClassificationAccountingClasses({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{accounting_class_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListResponseDtoClassificationAccountingClassResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.ListClassificationAccountingClassesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .listClassificationAccountingClasses({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{accounting_class_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseDtoClassificationAccountingClassResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max?</code> | <code>number</code> | - |
| <code>sort?</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.listClassificationAccountingClasses(request)`

- **OnSuccess**: <code>[ListResponseDtoClassificationAccountingClassResponseDto](src/models/list-response-dto-classification-accounting-class-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.ListClassificationAccountingClassesError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.listClassificationAccountingClasses(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseDtoClassificationAccountingClassResponseDto, ClassificationsApi.ListClassificationAccountingClassesError&gt;</code>, with `result.value` of type <code>[ListResponseDtoClassificationAccountingClassResponseDto](src/models/list-response-dto-classification-accounting-class-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listClassificationChartOfAccounts(request?: ClassificationsApi.ListClassificationChartOfAccountsRequest, options?: RequestOptions): ApiPromise&lt;ListResponseDtoClassificationChartOfAccountsResponseDto, ClassificationsApi.ListClassificationChartOfAccountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of chart of accounts objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.listClassificationChartOfAccounts({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{chart_of_accounts_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListResponseDtoClassificationChartOfAccountsResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.ListClassificationChartOfAccountsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .listClassificationChartOfAccounts({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{chart_of_accounts_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseDtoClassificationChartOfAccountsResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max?</code> | <code>number</code> | - |
| <code>sort?</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.listClassificationChartOfAccounts(request)`

- **OnSuccess**: <code>[ListResponseDtoClassificationChartOfAccountsResponseDto](src/models/list-response-dto-classification-chart-of-accounts-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.ListClassificationChartOfAccountsError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.listClassificationChartOfAccounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseDtoClassificationChartOfAccountsResponseDto, ClassificationsApi.ListClassificationChartOfAccountsError&gt;</code>, with `result.value` of type <code>[ListResponseDtoClassificationChartOfAccountsResponseDto](src/models/list-response-dto-classification-chart-of-accounts-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listClassificationDepartments(request?: ClassificationsApi.ListClassificationDepartmentsRequest, options?: RequestOptions): ApiPromise&lt;ListResponseDtoClassificationDepartmentResponseDto, ClassificationsApi.ListClassificationDepartmentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of department objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.listClassificationDepartments({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{department_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListResponseDtoClassificationDepartmentResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.ListClassificationDepartmentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .listClassificationDepartments({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{department_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseDtoClassificationDepartmentResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max?</code> | <code>number</code> | - |
| <code>sort?</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.listClassificationDepartments(request)`

- **OnSuccess**: <code>[ListResponseDtoClassificationDepartmentResponseDto](src/models/list-response-dto-classification-department-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.ListClassificationDepartmentsError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.listClassificationDepartments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseDtoClassificationDepartmentResponseDto, ClassificationsApi.ListClassificationDepartmentsError&gt;</code>, with `result.value` of type <code>[ListResponseDtoClassificationDepartmentResponseDto](src/models/list-response-dto-classification-department-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listClassificationEmployees(request?: ClassificationsApi.ListClassificationEmployeesRequest, options?: RequestOptions): ApiPromise&lt;ListResponseDtoClassificationEmployeeResponseDto, ClassificationsApi.ListClassificationEmployeesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of employee objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.listClassificationEmployees({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{employee_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListResponseDtoClassificationEmployeeResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.ListClassificationEmployeesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .listClassificationEmployees({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{employee_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseDtoClassificationEmployeeResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max?</code> | <code>number</code> | - |
| <code>sort?</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.listClassificationEmployees(request)`

- **OnSuccess**: <code>[ListResponseDtoClassificationEmployeeResponseDto](src/models/list-response-dto-classification-employee-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.ListClassificationEmployeesError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.listClassificationEmployees(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseDtoClassificationEmployeeResponseDto, ClassificationsApi.ListClassificationEmployeesError&gt;</code>, with `result.value` of type <code>[ListResponseDtoClassificationEmployeeResponseDto](src/models/list-response-dto-classification-employee-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listClassificationItems(request?: ClassificationsApi.ListClassificationItemsRequest, options?: RequestOptions): ApiPromise&lt;ListResponseDtoClassificationItemResponseDto, ClassificationsApi.ListClassificationItemsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of item objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.listClassificationItems({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{item_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListResponseDtoClassificationItemResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.ListClassificationItemsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .listClassificationItems({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{item_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseDtoClassificationItemResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max?</code> | <code>number</code> | - |
| <code>sort?</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.listClassificationItems(request)`

- **OnSuccess**: <code>[ListResponseDtoClassificationItemResponseDto](src/models/list-response-dto-classification-item-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.ListClassificationItemsError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.listClassificationItems(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseDtoClassificationItemResponseDto, ClassificationsApi.ListClassificationItemsError&gt;</code>, with `result.value` of type <code>[ListResponseDtoClassificationItemResponseDto](src/models/list-response-dto-classification-item-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listClassificationJobs(request?: ClassificationsApi.ListClassificationJobsRequest, options?: RequestOptions): ApiPromise&lt;ListResponseDtoClassificationJobResponseDto, ClassificationsApi.ListClassificationJobsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of job objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.listClassificationJobs({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{job_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListResponseDtoClassificationJobResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.ListClassificationJobsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .listClassificationJobs({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{job_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseDtoClassificationJobResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max?</code> | <code>number</code> | - |
| <code>sort?</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.listClassificationJobs(request)`

- **OnSuccess**: <code>[ListResponseDtoClassificationJobResponseDto](src/models/list-response-dto-classification-job-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.ListClassificationJobsError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.listClassificationJobs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseDtoClassificationJobResponseDto, ClassificationsApi.ListClassificationJobsError&gt;</code>, with `result.value` of type <code>[ListResponseDtoClassificationJobResponseDto](src/models/list-response-dto-classification-job-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listClassificationLocations(request?: ClassificationsApi.ListClassificationLocationsRequest, options?: RequestOptions): ApiPromise&lt;ListResponseDtoClassificationLocationResponseDto, ClassificationsApi.ListClassificationLocationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of location objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.listClassificationLocations({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{location_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListResponseDtoClassificationLocationResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.ListClassificationLocationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .listClassificationLocations({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{location_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseDtoClassificationLocationResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max?</code> | <code>number</code> | - |
| <code>sort?</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.listClassificationLocations(request)`

- **OnSuccess**: <code>[ListResponseDtoClassificationLocationResponseDto](src/models/list-response-dto-classification-location-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.ListClassificationLocationsError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.listClassificationLocations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseDtoClassificationLocationResponseDto, ClassificationsApi.ListClassificationLocationsError&gt;</code>, with `result.value` of type <code>[ListResponseDtoClassificationLocationResponseDto](src/models/list-response-dto-classification-location-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>restoreClassificationAccountingClass(request: ClassificationsApi.RestoreClassificationAccountingClassRequest, options?: RequestOptions): ApiPromise&lt;ClassificationAccountingClassResponseDto, ClassificationsApi.RestoreClassificationAccountingClassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived accounting class. In the response, the `archived` field is set as `false`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.restoreClassificationAccountingClass({
    id: "{{accounting_class_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ClassificationAccountingClassResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.RestoreClassificationAccountingClassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .restoreClassificationAccountingClass({
    id: "{{accounting_class_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationAccountingClassResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.restoreClassificationAccountingClass(request)`

- **OnSuccess**: <code>[ClassificationAccountingClassResponseDto](src/models/classification-accounting-class-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.RestoreClassificationAccountingClassError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.restoreClassificationAccountingClass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationAccountingClassResponseDto, ClassificationsApi.RestoreClassificationAccountingClassError&gt;</code>, with `result.value` of type <code>[ClassificationAccountingClassResponseDto](src/models/classification-accounting-class-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>restoreClassificationChartOfAccounts(request: ClassificationsApi.RestoreClassificationChartOfAccountsRequest, options?: RequestOptions): ApiPromise&lt;ClassificationChartOfAccountsResponseDto, ClassificationsApi.RestoreClassificationChartOfAccountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived chart of accounts. In the response, the `archived` field is set as `false`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.restoreClassificationChartOfAccounts({
    id: "{{chart_of_accounts_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ClassificationChartOfAccountsResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.RestoreClassificationChartOfAccountsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .restoreClassificationChartOfAccounts({
    id: "{{chart_of_accounts_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationChartOfAccountsResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.restoreClassificationChartOfAccounts(request)`

- **OnSuccess**: <code>[ClassificationChartOfAccountsResponseDto](src/models/classification-chart-of-accounts-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.RestoreClassificationChartOfAccountsError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.restoreClassificationChartOfAccounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationChartOfAccountsResponseDto, ClassificationsApi.RestoreClassificationChartOfAccountsError&gt;</code>, with `result.value` of type <code>[ClassificationChartOfAccountsResponseDto](src/models/classification-chart-of-accounts-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>restoreClassificationDepartment(request: ClassificationsApi.RestoreClassificationDepartmentRequest, options?: RequestOptions): ApiPromise&lt;ClassificationDepartmentResponseDto, ClassificationsApi.RestoreClassificationDepartmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived department. In the response, the `archived` field is set as `false`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.restoreClassificationDepartment({
    id: "{{department_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ClassificationDepartmentResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.RestoreClassificationDepartmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .restoreClassificationDepartment({
    id: "{{department_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationDepartmentResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.restoreClassificationDepartment(request)`

- **OnSuccess**: <code>[ClassificationDepartmentResponseDto](src/models/classification-department-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.RestoreClassificationDepartmentError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.restoreClassificationDepartment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationDepartmentResponseDto, ClassificationsApi.RestoreClassificationDepartmentError&gt;</code>, with `result.value` of type <code>[ClassificationDepartmentResponseDto](src/models/classification-department-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>restoreClassificationEmployee(request: ClassificationsApi.RestoreClassificationEmployeeRequest, options?: RequestOptions): ApiPromise&lt;ClassificationEmployeeResponseDto, ClassificationsApi.RestoreClassificationEmployeeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived employee. In the response, the `archived` field is set as `false`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.restoreClassificationEmployee({
    id: "{{employee_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ClassificationEmployeeResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.RestoreClassificationEmployeeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .restoreClassificationEmployee({
    id: "{{employee_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationEmployeeResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.restoreClassificationEmployee(request)`

- **OnSuccess**: <code>[ClassificationEmployeeResponseDto](src/models/classification-employee-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.RestoreClassificationEmployeeError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.restoreClassificationEmployee(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationEmployeeResponseDto, ClassificationsApi.RestoreClassificationEmployeeError&gt;</code>, with `result.value` of type <code>[ClassificationEmployeeResponseDto](src/models/classification-employee-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>restoreClassificationItem(request: ClassificationsApi.RestoreClassificationItemRequest, options?: RequestOptions): ApiPromise&lt;ClassificationItemResponseDto, ClassificationsApi.RestoreClassificationItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived item. In the response, the `archived` field is set as `false`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.restoreClassificationItem({
    id: "{{item_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ClassificationItemResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.RestoreClassificationItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .restoreClassificationItem({ id: "{{item_id}}", sessionId: "{{session_id}}", devKey: "{{developer_key}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationItemResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.restoreClassificationItem(request)`

- **OnSuccess**: <code>[ClassificationItemResponseDto](src/models/classification-item-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.RestoreClassificationItemError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.restoreClassificationItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationItemResponseDto, ClassificationsApi.RestoreClassificationItemError&gt;</code>, with `result.value` of type <code>[ClassificationItemResponseDto](src/models/classification-item-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>restoreClassificationJob(request: ClassificationsApi.RestoreClassificationJobRequest, options?: RequestOptions): ApiPromise&lt;ClassificationJobResponseDto, ClassificationsApi.RestoreClassificationJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived job. In the response, the `archived` field is set as `false`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.restoreClassificationJob({
    id: "{{job_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ClassificationJobResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.RestoreClassificationJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .restoreClassificationJob({ id: "{{job_id}}", sessionId: "{{session_id}}", devKey: "{{developer_key}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationJobResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.restoreClassificationJob(request)`

- **OnSuccess**: <code>[ClassificationJobResponseDto](src/models/classification-job-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.RestoreClassificationJobError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.restoreClassificationJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationJobResponseDto, ClassificationsApi.RestoreClassificationJobError&gt;</code>, with `result.value` of type <code>[ClassificationJobResponseDto](src/models/classification-job-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>restoreClassificationLocation(request: ClassificationsApi.RestoreClassificationLocationRequest, options?: RequestOptions): ApiPromise&lt;ClassificationLocationResponseDto, ClassificationsApi.RestoreClassificationLocationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived location. In the response, the `archived` field is set as `false`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.restoreClassificationLocation({
    id: "{{location_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ClassificationLocationResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.RestoreClassificationLocationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .restoreClassificationLocation({
    id: "{{location_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationLocationResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.restoreClassificationLocation(request)`

- **OnSuccess**: <code>[ClassificationLocationResponseDto](src/models/classification-location-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.RestoreClassificationLocationError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.restoreClassificationLocation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationLocationResponseDto, ClassificationsApi.RestoreClassificationLocationError&gt;</code>, with `result.value` of type <code>[ClassificationLocationResponseDto](src/models/classification-location-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateClassificationAccountingClass(request: ClassificationsApi.UpdateClassificationAccountingClassRequest, options?: RequestOptions): ApiPromise&lt;ClassificationAccountingClassResponseDto, ClassificationsApi.UpdateClassificationAccountingClassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing accounting class.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.updateClassificationAccountingClass({
    id: "{{accounting_class_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  });
  // TODO: Handle 'response' of type ClassificationAccountingClassResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.UpdateClassificationAccountingClassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .updateClassificationAccountingClass({
    id: "{{accounting_class_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationAccountingClassResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[UpdateClassificationAccountingClassRequestDto](src/models/update-classification-accounting-class-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.updateClassificationAccountingClass(request)`

- **OnSuccess**: <code>[ClassificationAccountingClassResponseDto](src/models/classification-accounting-class-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.UpdateClassificationAccountingClassError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.updateClassificationAccountingClass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationAccountingClassResponseDto, ClassificationsApi.UpdateClassificationAccountingClassError&gt;</code>, with `result.value` of type <code>[ClassificationAccountingClassResponseDto](src/models/classification-accounting-class-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateClassificationChartOfAccounts(request: ClassificationsApi.UpdateClassificationChartOfAccountsRequest, options?: RequestOptions): ApiPromise&lt;ClassificationChartOfAccountsResponseDto, ClassificationsApi.UpdateClassificationChartOfAccountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing chart of accounts.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.updateClassificationChartOfAccounts({
    id: "{{chart_of_accounts_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  });
  // TODO: Handle 'response' of type ClassificationChartOfAccountsResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.UpdateClassificationChartOfAccountsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .updateClassificationChartOfAccounts({
    id: "{{chart_of_accounts_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationChartOfAccountsResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[UpdateClassificationChartOfAccountsRequestDto](src/models/update-classification-chart-of-accounts-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.updateClassificationChartOfAccounts(request)`

- **OnSuccess**: <code>[ClassificationChartOfAccountsResponseDto](src/models/classification-chart-of-accounts-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.UpdateClassificationChartOfAccountsError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.updateClassificationChartOfAccounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationChartOfAccountsResponseDto, ClassificationsApi.UpdateClassificationChartOfAccountsError&gt;</code>, with `result.value` of type <code>[ClassificationChartOfAccountsResponseDto](src/models/classification-chart-of-accounts-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateClassificationDepartment(request: ClassificationsApi.UpdateClassificationDepartmentRequest, options?: RequestOptions): ApiPromise&lt;ClassificationDepartmentResponseDto, ClassificationsApi.UpdateClassificationDepartmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing department.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.updateClassificationDepartment({
    id: "{{department_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  });
  // TODO: Handle 'response' of type ClassificationDepartmentResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.UpdateClassificationDepartmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .updateClassificationDepartment({
    id: "{{department_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationDepartmentResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[UpdateClassificationDepartmentRequestDto](src/models/update-classification-department-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.updateClassificationDepartment(request)`

- **OnSuccess**: <code>[ClassificationDepartmentResponseDto](src/models/classification-department-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.UpdateClassificationDepartmentError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.updateClassificationDepartment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationDepartmentResponseDto, ClassificationsApi.UpdateClassificationDepartmentError&gt;</code>, with `result.value` of type <code>[ClassificationDepartmentResponseDto](src/models/classification-department-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateClassificationEmployee(request: ClassificationsApi.UpdateClassificationEmployeeRequest, options?: RequestOptions): ApiPromise&lt;ClassificationEmployeeResponseDto, ClassificationsApi.UpdateClassificationEmployeeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing employee.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.updateClassificationEmployee({
    id: "{{employee_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  });
  // TODO: Handle 'response' of type ClassificationEmployeeResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.UpdateClassificationEmployeeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .updateClassificationEmployee({
    id: "{{employee_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationEmployeeResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[UpdateClassificationEmployeeRequestDto](src/models/update-classification-employee-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.updateClassificationEmployee(request)`

- **OnSuccess**: <code>[ClassificationEmployeeResponseDto](src/models/classification-employee-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.UpdateClassificationEmployeeError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.updateClassificationEmployee(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationEmployeeResponseDto, ClassificationsApi.UpdateClassificationEmployeeError&gt;</code>, with `result.value` of type <code>[ClassificationEmployeeResponseDto](src/models/classification-employee-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateClassificationItem(request: ClassificationsApi.UpdateClassificationItemRequest, options?: RequestOptions): ApiPromise&lt;ClassificationItemResponseDto, ClassificationsApi.UpdateClassificationItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing item.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.updateClassificationItem({
    id: "{{item_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  });
  // TODO: Handle 'response' of type ClassificationItemResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.UpdateClassificationItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .updateClassificationItem({
    id: "{{item_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationItemResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[UpdateClassificationItemRequestDto](src/models/update-classification-item-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.updateClassificationItem(request)`

- **OnSuccess**: <code>[ClassificationItemResponseDto](src/models/classification-item-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.UpdateClassificationItemError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.updateClassificationItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationItemResponseDto, ClassificationsApi.UpdateClassificationItemError&gt;</code>, with `result.value` of type <code>[ClassificationItemResponseDto](src/models/classification-item-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateClassificationJob(request: ClassificationsApi.UpdateClassificationJobRequest, options?: RequestOptions): ApiPromise&lt;ClassificationJobResponseDto, ClassificationsApi.UpdateClassificationJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing job.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.updateClassificationJob({
    id: "{{job_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  });
  // TODO: Handle 'response' of type ClassificationJobResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.UpdateClassificationJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .updateClassificationJob({
    id: "{{job_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationJobResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[UpdateClassificationJobRequestDto](src/models/update-classification-job-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.updateClassificationJob(request)`

- **OnSuccess**: <code>[ClassificationJobResponseDto](src/models/classification-job-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.UpdateClassificationJobError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.updateClassificationJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationJobResponseDto, ClassificationsApi.UpdateClassificationJobError&gt;</code>, with `result.value` of type <code>[ClassificationJobResponseDto](src/models/classification-job-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateClassificationLocation(request: ClassificationsApi.UpdateClassificationLocationRequest, options?: RequestOptions): ApiPromise&lt;ClassificationLocationResponseDto, ClassificationsApi.UpdateClassificationLocationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classificationsApi.updateClassificationLocation({
    id: "{{location_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  });
  // TODO: Handle 'response' of type ClassificationLocationResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ClassificationsApi.UpdateClassificationLocationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classificationsApi
  .updateClassificationLocation({
    id: "{{location_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationLocationResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[UpdateClassificationLocationRequestDto](src/models/update-classification-location-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classificationsApi.updateClassificationLocation(request)`

- **OnSuccess**: <code>[ClassificationLocationResponseDto](src/models/classification-location-response-dto.ts)</code>
- **OnError**: throws <code>[ClassificationsApi.UpdateClassificationLocationError](src/resources/classifications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classificationsApi.updateClassificationLocation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationLocationResponseDto, ClassificationsApi.UpdateClassificationLocationError&gt;</code>, with `result.value` of type <code>[ClassificationLocationResponseDto](src/models/classification-location-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CreditMemos

> Source: [CreditMemos](src/resources/credit-memos.ts)

<details>
<summary><code>archiveCreditMemo(request: CreditMemos.ArchiveCreditMemoRequest, options?: RequestOptions): ApiPromise&lt;CreditMemoResponseDto, CreditMemos.ArchiveCreditMemoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing credit memo. In the response, the `archived` field is set as `true`.

You can restore an archived credit memo with
`POST /v3/credit-memos/{creditMemoId}/restore`. There is no change when you archive an archived credit memo.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.creditMemos.archiveCreditMemo({
    creditMemoId: "{{credit_memo_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type CreditMemoResponseDto
} catch (err) {
  // TODO: Handle 'err' of type CreditMemos.ArchiveCreditMemoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.creditMemos
  .archiveCreditMemo({
    creditMemoId: "{{credit_memo_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditMemoResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>creditMemoId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.creditMemos.archiveCreditMemo(request)`

- **OnSuccess**: <code>[CreditMemoResponseDto](src/models/credit-memo-response-dto.ts)</code>
- **OnError**: throws <code>[CreditMemos.ArchiveCreditMemoError](src/resources/credit-memos.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.creditMemos.archiveCreditMemo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditMemoResponseDto, CreditMemos.ArchiveCreditMemoError&gt;</code>, with `result.value` of type <code>[CreditMemoResponseDto](src/models/credit-memo-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkArchiveCreditMemo(request: CreditMemos.BulkArchiveCreditMemoRequest, options?: RequestOptions): ApiPromise&lt;CreditMemoBulkResponseDto, CreditMemos.BulkArchiveCreditMemoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive multiple credit memos with one API request. In the response, the `archived` field for each object is set as `true`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.creditMemos.bulkArchiveCreditMemo({
    ids: "{{credit_memo_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type CreditMemoBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type CreditMemos.BulkArchiveCreditMemoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.creditMemos
  .bulkArchiveCreditMemo({
    ids: "{{credit_memo_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditMemoBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.creditMemos.bulkArchiveCreditMemo(request)`

- **OnSuccess**: <code>[CreditMemoBulkResponseDto](src/models/credit-memo-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[CreditMemos.BulkArchiveCreditMemoError](src/resources/credit-memos.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.creditMemos.bulkArchiveCreditMemo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditMemoBulkResponseDto, CreditMemos.BulkArchiveCreditMemoError&gt;</code>, with `result.value` of type <code>[CreditMemoBulkResponseDto](src/models/credit-memo-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkCreateCreditMemo(request: CreditMemos.BulkCreateCreditMemoRequest, options?: RequestOptions): ApiPromise&lt;CreditMemoBulkResponseDto, CreditMemos.BulkCreateCreditMemoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple credit memos with one API request. You can create up to 50 credit memos with one `POST /v3/credit-memos/bulk` request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.creditMemos.bulkCreateCreditMemo({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [
      {
        customerId: "some example string",
        referenceNumber: "some example string",
        creditDate: "2024-01-15",
        creditMemoLineItems: [{}],
      },
    ],
  });
  // TODO: Handle 'response' of type CreditMemoBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type CreditMemos.BulkCreateCreditMemoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.creditMemos
  .bulkCreateCreditMemo({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [
      {
        customerId: "some example string",
        referenceNumber: "some example string",
        creditDate: "2024-01-15",
        creditMemoLineItems: [{}],
      },
    ],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditMemoBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[CreateCreditMemoRequestDto](src/models/create-credit-memo-request-dto.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.creditMemos.bulkCreateCreditMemo(request)`

- **OnSuccess**: <code>[CreditMemoBulkResponseDto](src/models/credit-memo-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[CreditMemos.BulkCreateCreditMemoError](src/resources/credit-memos.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.creditMemos.bulkCreateCreditMemo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditMemoBulkResponseDto, CreditMemos.BulkCreateCreditMemoError&gt;</code>, with `result.value` of type <code>[CreditMemoBulkResponseDto](src/models/credit-memo-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkReplaceCreditMemo(request: CreditMemos.BulkReplaceCreditMemoRequest, options?: RequestOptions): ApiPromise&lt;CreditMemoBulkResponseDto, CreditMemos.BulkReplaceCreditMemoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the number of line items in multiple credit memos with one API request. You can also update other details for each credit memo.

You can use the PUT operation to add, remove, or replace the number of line items in a credit memo. A set of rules apply with the PUT operation.
* When you add a new line item, a new line item `id` is generated in the credit memo.
* When you omit an existing line item `id`, the line item is removed from the credit memo.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.creditMemos.bulkReplaceCreditMemo({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [
      {
        id: "some example string",
        customerId: "some example string",
        referenceNumber: "some example string",
        creditDate: "2024-01-15",
        creditMemoLineItems: [{}],
      },
    ],
  });
  // TODO: Handle 'response' of type CreditMemoBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type CreditMemos.BulkReplaceCreditMemoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.creditMemos
  .bulkReplaceCreditMemo({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [
      {
        id: "some example string",
        customerId: "some example string",
        referenceNumber: "some example string",
        creditDate: "2024-01-15",
        creditMemoLineItems: [{}],
      },
    ],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditMemoBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[ReplaceCreditMemoWithIdRequestDto](src/models/replace-credit-memo-with-id-request-dto.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.creditMemos.bulkReplaceCreditMemo(request)`

- **OnSuccess**: <code>[CreditMemoBulkResponseDto](src/models/credit-memo-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[CreditMemos.BulkReplaceCreditMemoError](src/resources/credit-memos.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.creditMemos.bulkReplaceCreditMemo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditMemoBulkResponseDto, CreditMemos.BulkReplaceCreditMemoError&gt;</code>, with `result.value` of type <code>[CreditMemoBulkResponseDto](src/models/credit-memo-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkRestoreCreditMemo(request: CreditMemos.BulkRestoreCreditMemoRequest, options?: RequestOptions): ApiPromise&lt;CreditMemoBulkResponseDto, CreditMemos.BulkRestoreCreditMemoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore multiple credit memos with one API request. In the response, the `archived` field for each object is set as `false`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.creditMemos.bulkRestoreCreditMemo({
    ids: "{{credit_memo_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type CreditMemoBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type CreditMemos.BulkRestoreCreditMemoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.creditMemos
  .bulkRestoreCreditMemo({
    ids: "{{credit_memo_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditMemoBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.creditMemos.bulkRestoreCreditMemo(request)`

- **OnSuccess**: <code>[CreditMemoBulkResponseDto](src/models/credit-memo-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[CreditMemos.BulkRestoreCreditMemoError](src/resources/credit-memos.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.creditMemos.bulkRestoreCreditMemo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditMemoBulkResponseDto, CreditMemos.BulkRestoreCreditMemoError&gt;</code>, with `result.value` of type <code>[CreditMemoBulkResponseDto](src/models/credit-memo-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkUpdateCreditMemo(request: CreditMemos.BulkUpdateCreditMemoRequest, options?: RequestOptions): ApiPromise&lt;CreditMemoBulkResponseDto, CreditMemos.BulkUpdateCreditMemoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about line items in multiple credit memos with one API request. You can also update other credit memo details.

You can use the PATCH operation to modify line item details, such as `amount`, `quantity`, and `description`. The credit memo line item `id` does not change with a PATCH operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.creditMemos.bulkUpdateCreditMemo({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [{ id: "some example string" }],
  });
  // TODO: Handle 'response' of type CreditMemoBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type CreditMemos.BulkUpdateCreditMemoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.creditMemos
  .bulkUpdateCreditMemo({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [{ id: "some example string" }],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditMemoBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[UpdateCreditMemoWithIdRequestDto](src/models/update-credit-memo-with-id-request-dto.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.creditMemos.bulkUpdateCreditMemo(request)`

- **OnSuccess**: <code>[CreditMemoBulkResponseDto](src/models/credit-memo-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[CreditMemos.BulkUpdateCreditMemoError](src/resources/credit-memos.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.creditMemos.bulkUpdateCreditMemo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditMemoBulkResponseDto, CreditMemos.BulkUpdateCreditMemoError&gt;</code>, with `result.value` of type <code>[CreditMemoBulkResponseDto](src/models/credit-memo-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createCreditMemo(request: CreditMemos.CreateCreditMemoRequest, options?: RequestOptions): ApiPromise&lt;CreditMemoResponseDto, CreditMemos.CreateCreditMemoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new credit memo.

With a credit memo, you can adjust the invoice amount owed by a customer.

See Credit memos in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.creditMemos.createCreditMemo({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {
      customerId: "some example string",
      referenceNumber: "some example string",
      creditDate: "2024-01-15",
      creditMemoLineItems: [{}],
    },
  });
  // TODO: Handle 'response' of type CreditMemoResponseDto
} catch (err) {
  // TODO: Handle 'err' of type CreditMemos.CreateCreditMemoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.creditMemos
  .createCreditMemo({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {
      customerId: "some example string",
      referenceNumber: "some example string",
      creditDate: "2024-01-15",
      creditMemoLineItems: [{}],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditMemoResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[CreateCreditMemoRequestDto](src/models/create-credit-memo-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.creditMemos.createCreditMemo(request)`

- **OnSuccess**: <code>[CreditMemoResponseDto](src/models/credit-memo-response-dto.ts)</code>
- **OnError**: throws <code>[CreditMemos.CreateCreditMemoError](src/resources/credit-memos.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.creditMemos.createCreditMemo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditMemoResponseDto, CreditMemos.CreateCreditMemoError&gt;</code>, with `result.value` of type <code>[CreditMemoResponseDto](src/models/credit-memo-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCreditMemo(request: CreditMemos.GetCreditMemoRequest, options?: RequestOptions): ApiPromise&lt;CreditMemoWithUsageResponseDto, CreditMemos.GetCreditMemoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing credit memo.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.creditMemos.getCreditMemo({
    creditMemoId: "{{credit_memo_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type CreditMemoWithUsageResponseDto
} catch (err) {
  // TODO: Handle 'err' of type CreditMemos.GetCreditMemoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.creditMemos
  .getCreditMemo({
    creditMemoId: "{{credit_memo_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditMemoWithUsageResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>creditMemoId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.creditMemos.getCreditMemo(request)`

- **OnSuccess**: <code>[CreditMemoWithUsageResponseDto](src/models/credit-memo-with-usage-response-dto.ts)</code>
- **OnError**: throws <code>[CreditMemos.GetCreditMemoError](src/resources/credit-memos.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.creditMemos.getCreditMemo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditMemoWithUsageResponseDto, CreditMemos.GetCreditMemoError&gt;</code>, with `result.value` of type <code>[CreditMemoWithUsageResponseDto](src/models/credit-memo-with-usage-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCreditMemos(request?: CreditMemos.ListCreditMemosRequest, options?: RequestOptions): ApiPromise&lt;ListResponseDtoCreditMemoWithUsageResponseDto, CreditMemos.ListCreditMemosError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of credit memo objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.creditMemos.listCreditMemos({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{credit_memo_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListResponseDtoCreditMemoWithUsageResponseDto
} catch (err) {
  // TODO: Handle 'err' of type CreditMemos.ListCreditMemosError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.creditMemos
  .listCreditMemos({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{credit_memo_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseDtoCreditMemoWithUsageResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max?</code> | <code>number</code> | - |
| <code>sort?</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.creditMemos.listCreditMemos(request)`

- **OnSuccess**: <code>[ListResponseDtoCreditMemoWithUsageResponseDto](src/models/list-response-dto-credit-memo-with-usage-response-dto.ts)</code>
- **OnError**: throws <code>[CreditMemos.ListCreditMemosError](src/resources/credit-memos.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.creditMemos.listCreditMemos(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseDtoCreditMemoWithUsageResponseDto, CreditMemos.ListCreditMemosError&gt;</code>, with `result.value` of type <code>[ListResponseDtoCreditMemoWithUsageResponseDto](src/models/list-response-dto-credit-memo-with-usage-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>replaceCreditMemo(request: CreditMemos.ReplaceCreditMemoRequest, options?: RequestOptions): ApiPromise&lt;CreditMemoResponseDto, CreditMemos.ReplaceCreditMemoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the number of line items in a credit memo. You can also update other credit memo details.

You can use the PUT operation to add, remove, or replace the number of line items in a credit memo. A set of rules apply with the PUT operation.
* When you add a new line item, a new line item `id` is generated in the credit memo.
* When you omit an existing line item `id`, the line item is removed from the credit memo.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.creditMemos.replaceCreditMemo({
    creditMemoId: "{{credit_memo_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {
      customerId: "some example string",
      referenceNumber: "some example string",
      creditDate: "2024-01-15",
      creditMemoLineItems: [{}],
    },
  });
  // TODO: Handle 'response' of type CreditMemoResponseDto
} catch (err) {
  // TODO: Handle 'err' of type CreditMemos.ReplaceCreditMemoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.creditMemos
  .replaceCreditMemo({
    creditMemoId: "{{credit_memo_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {
      customerId: "some example string",
      referenceNumber: "some example string",
      creditDate: "2024-01-15",
      creditMemoLineItems: [{}],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditMemoResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>creditMemoId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[ReplaceCreditMemoRequestDto](src/models/replace-credit-memo-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.creditMemos.replaceCreditMemo(request)`

- **OnSuccess**: <code>[CreditMemoResponseDto](src/models/credit-memo-response-dto.ts)</code>
- **OnError**: throws <code>[CreditMemos.ReplaceCreditMemoError](src/resources/credit-memos.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.creditMemos.replaceCreditMemo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditMemoResponseDto, CreditMemos.ReplaceCreditMemoError&gt;</code>, with `result.value` of type <code>[CreditMemoResponseDto](src/models/credit-memo-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>restoreCreditMemo(request: CreditMemos.RestoreCreditMemoRequest, options?: RequestOptions): ApiPromise&lt;CreditMemoResponseDto, CreditMemos.RestoreCreditMemoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived credit memo. In the response, the `archived` field is set as `false`.

You can perform any valid BILL operation on restored credit memos. There is no change when you restore a restored credit memo.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.creditMemos.restoreCreditMemo({
    creditMemoId: "{{credit_memo_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type CreditMemoResponseDto
} catch (err) {
  // TODO: Handle 'err' of type CreditMemos.RestoreCreditMemoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.creditMemos
  .restoreCreditMemo({
    creditMemoId: "{{credit_memo_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditMemoResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>creditMemoId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.creditMemos.restoreCreditMemo(request)`

- **OnSuccess**: <code>[CreditMemoResponseDto](src/models/credit-memo-response-dto.ts)</code>
- **OnError**: throws <code>[CreditMemos.RestoreCreditMemoError](src/resources/credit-memos.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.creditMemos.restoreCreditMemo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditMemoResponseDto, CreditMemos.RestoreCreditMemoError&gt;</code>, with `result.value` of type <code>[CreditMemoResponseDto](src/models/credit-memo-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCreditMemo(request: CreditMemos.UpdateCreditMemoRequest, options?: RequestOptions): ApiPromise&lt;CreditMemoResponseDto, CreditMemos.UpdateCreditMemoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about a credit memo line item. You can also update other credit memo line item details.

You can use the PATCH operation to modify line item details, such as `amount`, `quantity`, and `description`. The credit memo line item `id` does not change with a PATCH operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.creditMemos.updateCreditMemo({
    creditMemoId: "{{credit_memo_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  });
  // TODO: Handle 'response' of type CreditMemoResponseDto
} catch (err) {
  // TODO: Handle 'err' of type CreditMemos.UpdateCreditMemoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.creditMemos
  .updateCreditMemo({
    creditMemoId: "{{credit_memo_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditMemoResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>creditMemoId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[UpdateCreditMemoRequestDto](src/models/update-credit-memo-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.creditMemos.updateCreditMemo(request)`

- **OnSuccess**: <code>[CreditMemoResponseDto](src/models/credit-memo-response-dto.ts)</code>
- **OnError**: throws <code>[CreditMemos.UpdateCreditMemoError](src/resources/credit-memos.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.creditMemos.updateCreditMemo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditMemoResponseDto, CreditMemos.UpdateCreditMemoError&gt;</code>, with `result.value` of type <code>[CreditMemoResponseDto](src/models/credit-memo-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CustomFields

> Source: [CustomFields](src/resources/custom-fields.ts)

<details>
<summary><code>createCustomField(request: CustomFields.CreateCustomFieldRequest, options?: RequestOptions): ApiPromise&lt;CustomFieldResponseDto, CustomFields.CreateCustomFieldError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new custom field.

See Transactions in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customFields.createCustomField({
    apiToken: "{{api_token}}",
    body: { name: "some example string", allowCustomValues: true, required: true, global: true },
  });
  // TODO: Handle 'response' of type CustomFieldResponseDto
} catch (err) {
  // TODO: Handle 'err' of type CustomFields.CreateCustomFieldError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customFields
  .createCustomField({
    apiToken: "{{api_token}}",
    body: { name: "some example string", allowCustomValues: true, required: true, global: true },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomFieldResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiToken?</code> | <code>string</code> | - |
| <code>body</code> | <code>[CreateCustomFieldRequestDto](src/models/create-custom-field-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customFields.createCustomField(request)`

- **OnSuccess**: <code>[CustomFieldResponseDto](src/models/custom-field-response-dto.ts)</code>
- **OnError**: throws <code>[CustomFields.CreateCustomFieldError](src/resources/custom-fields.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customFields.createCustomField(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomFieldResponseDto, CustomFields.CreateCustomFieldError&gt;</code>, with `result.value` of type <code>[CustomFieldResponseDto](src/models/custom-field-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createCustomFieldValues(request: CustomFields.CreateCustomFieldValuesRequest, options?: RequestOptions): ApiPromise&lt;CustomFieldValueResponseDto[], CustomFields.CreateCustomFieldValuesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new value for an existing custom field.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customFields.createCustomFieldValues({
    customFieldId: "{{se_custom_field_uuid}}",
    apiToken: "{{api_token}}",
    body: { values: ["some example string"] },
  });
  // TODO: Handle 'response' of type CustomFieldValueResponseDto[]
} catch (err) {
  // TODO: Handle 'err' of type CustomFields.CreateCustomFieldValuesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customFields
  .createCustomFieldValues({
    customFieldId: "{{se_custom_field_uuid}}",
    apiToken: "{{api_token}}",
    body: { values: ["some example string"] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomFieldValueResponseDto[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customFieldId</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |
| <code>body</code> | <code>[CreateCustomFieldValueRequestDto](src/models/create-custom-field-value-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customFields.createCustomFieldValues(request)`

- **OnSuccess**: <code>[CustomFieldValueResponseDto](src/models/custom-field-value-response-dto.ts)[]</code>
- **OnError**: throws <code>[CustomFields.CreateCustomFieldValuesError](src/resources/custom-fields.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customFields.createCustomFieldValues(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomFieldValueResponseDto[], CustomFields.CreateCustomFieldValuesError&gt;</code>, with `result.value` of type <code>[CustomFieldValueResponseDto](src/models/custom-field-value-response-dto.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCustomField(request: CustomFields.DeleteCustomFieldRequest, options?: RequestOptions): ApiPromise&lt;undefined, CustomFields.DeleteCustomFieldError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an existing custom field. A deleted custom field cannot be restored. The deleted custom field is not available in the list of custom fields.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.customFields.deleteCustomField({
    customFieldId: "{{se_custom_field_uuid}}",
    apiToken: "{{api_token}}",
  });
} catch (err) {
  // TODO: Handle 'err' of type CustomFields.DeleteCustomFieldError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customFields
  .deleteCustomField({ customFieldId: "{{se_custom_field_uuid}}", apiToken: "{{api_token}}" })
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
| <code>customFieldId</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customFields.deleteCustomField(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CustomFields.DeleteCustomFieldError](src/resources/custom-fields.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customFields.deleteCustomField(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CustomFields.DeleteCustomFieldError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCustomFieldValue(request: CustomFields.DeleteCustomFieldValueRequest, options?: RequestOptions): ApiPromise&lt;undefined, CustomFields.DeleteCustomFieldValueError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an existing custom field value.

A deleted value cannot be restored. The deleted value is not available in the list of custom field values. In addition, the deleted value cannot be assigned to current or future transactions. The deleted value will continue to be assigned to past transactions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.customFields.deleteCustomFieldValue({
    customFieldId: "{{se_custom_field_uuid}}",
    apiToken: "{{api_token}}",
    body: { customFieldValueIds: ["some example string"] },
  });
} catch (err) {
  // TODO: Handle 'err' of type CustomFields.DeleteCustomFieldValueError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customFields
  .deleteCustomFieldValue({
    customFieldId: "{{se_custom_field_uuid}}",
    apiToken: "{{api_token}}",
    body: { customFieldValueIds: ["some example string"] },
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
| <code>customFieldId</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |
| <code>body</code> | <code>[DeleteCustomFieldValuesRequestDto](src/models/delete-custom-field-values-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customFields.deleteCustomFieldValue(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CustomFields.DeleteCustomFieldValueError](src/resources/custom-fields.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customFields.deleteCustomFieldValue(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CustomFields.DeleteCustomFieldValueError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCustomField(request: CustomFields.GetCustomFieldRequest, options?: RequestOptions): ApiPromise&lt;CustomFieldResponseDto, CustomFields.GetCustomFieldError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing custom field.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customFields.getCustomField({
    customFieldId: "{{se_custom_field_uuid}}",
    apiToken: "{{api_token}}",
  });
  // TODO: Handle 'response' of type CustomFieldResponseDto
} catch (err) {
  // TODO: Handle 'err' of type CustomFields.GetCustomFieldError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customFields
  .getCustomField({ customFieldId: "{{se_custom_field_uuid}}", apiToken: "{{api_token}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomFieldResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customFieldId</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customFields.getCustomField(request)`

- **OnSuccess**: <code>[CustomFieldResponseDto](src/models/custom-field-response-dto.ts)</code>
- **OnError**: throws <code>[CustomFields.GetCustomFieldError](src/resources/custom-fields.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customFields.getCustomField(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomFieldResponseDto, CustomFields.GetCustomFieldError&gt;</code>, with `result.value` of type <code>[CustomFieldResponseDto](src/models/custom-field-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCustomFieldValues(request: CustomFields.GetCustomFieldValuesRequest, options?: RequestOptions): ApiPromise&lt;CustomFieldValueResponseDto, CustomFields.GetCustomFieldValuesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing custom field value.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customFields.getCustomFieldValues({
    customFieldId: "{{se_custom_field_uuid}}",
    customFieldValueId: "{{se_custom_field_value_uuid01}}",
    apiToken: "{{api_token}}",
  });
  // TODO: Handle 'response' of type CustomFieldValueResponseDto
} catch (err) {
  // TODO: Handle 'err' of type CustomFields.GetCustomFieldValuesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customFields
  .getCustomFieldValues({
    customFieldId: "{{se_custom_field_uuid}}",
    customFieldValueId: "{{se_custom_field_value_uuid01}}",
    apiToken: "{{api_token}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomFieldValueResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customFieldId</code> | <code>string</code> | - |
| <code>customFieldValueId</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customFields.getCustomFieldValues(request)`

- **OnSuccess**: <code>[CustomFieldValueResponseDto](src/models/custom-field-value-response-dto.ts)</code>
- **OnError**: throws <code>[CustomFields.GetCustomFieldValuesError](src/resources/custom-fields.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customFields.getCustomFieldValues(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomFieldValueResponseDto, CustomFields.GetCustomFieldValuesError&gt;</code>, with `result.value` of type <code>[CustomFieldValueResponseDto](src/models/custom-field-value-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomFieldValues(request: CustomFields.ListCustomFieldValuesRequest, options?: RequestOptions): ApiPromise&lt;PaginationResponseDtoCustomFieldValueResponseDto, CustomFields.ListCustomFieldValuesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of custom field value objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customFields.listCustomFieldValues({
    customFieldId: "{{se_custom_field_uuid}}",
    max: 10,
    filters: "retired:eq:false",
    apiToken: "{{api_token}}",
  });
  // TODO: Handle 'response' of type PaginationResponseDtoCustomFieldValueResponseDto
} catch (err) {
  // TODO: Handle 'err' of type CustomFields.ListCustomFieldValuesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customFields
  .listCustomFieldValues({
    customFieldId: "{{se_custom_field_uuid}}",
    max: 10,
    filters: "retired:eq:false",
    apiToken: "{{api_token}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginationResponseDtoCustomFieldValueResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customFieldId</code> | <code>string</code> | - |
| <code>max?</code> | <code>number</code> | - |
| <code>nextPage?</code> | <code>string</code> | - |
| <code>prevPage?</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customFields.listCustomFieldValues(request)`

- **OnSuccess**: <code>[PaginationResponseDtoCustomFieldValueResponseDto](src/models/pagination-response-dto-custom-field-value-response-dto.ts)</code>
- **OnError**: throws <code>[CustomFields.ListCustomFieldValuesError](src/resources/custom-fields.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customFields.listCustomFieldValues(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginationResponseDtoCustomFieldValueResponseDto, CustomFields.ListCustomFieldValuesError&gt;</code>, with `result.value` of type <code>[PaginationResponseDtoCustomFieldValueResponseDto](src/models/pagination-response-dto-custom-field-value-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomFields(request?: CustomFields.ListCustomFieldsRequest, options?: RequestOptions): ApiPromise&lt;PaginationResponseDtoCustomFieldResponseDto, CustomFields.ListCustomFieldsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of custom field objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customFields.listCustomFields({
    max: 10,
    sort: "createdTime:desc",
    filters: "retired:eq:false",
    apiToken: "{{api_token}}",
  });
  // TODO: Handle 'response' of type PaginationResponseDtoCustomFieldResponseDto
} catch (err) {
  // TODO: Handle 'err' of type CustomFields.ListCustomFieldsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customFields
  .listCustomFields({
    max: 10,
    sort: "createdTime:desc",
    filters: "retired:eq:false",
    apiToken: "{{api_token}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginationResponseDtoCustomFieldResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max?</code> | <code>number</code> | - |
| <code>nextPage?</code> | <code>string</code> | - |
| <code>prevPage?</code> | <code>string</code> | - |
| <code>sort?</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customFields.listCustomFields(request)`

- **OnSuccess**: <code>[PaginationResponseDtoCustomFieldResponseDto](src/models/pagination-response-dto-custom-field-response-dto.ts)</code>
- **OnError**: throws <code>[CustomFields.ListCustomFieldsError](src/resources/custom-fields.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customFields.listCustomFields(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginationResponseDtoCustomFieldResponseDto, CustomFields.ListCustomFieldsError&gt;</code>, with `result.value` of type <code>[PaginationResponseDtoCustomFieldResponseDto](src/models/pagination-response-dto-custom-field-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCustomField(request: CustomFields.UpdateCustomFieldRequest, options?: RequestOptions): ApiPromise&lt;CustomFieldResponseDto, CustomFields.UpdateCustomFieldError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing custom field.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customFields.updateCustomField({
    customFieldId: "{{se_custom_field_uuid}}",
    apiToken: "{{api_token}}",
    body: {},
  });
  // TODO: Handle 'response' of type CustomFieldResponseDto
} catch (err) {
  // TODO: Handle 'err' of type CustomFields.UpdateCustomFieldError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customFields
  .updateCustomField({ customFieldId: "{{se_custom_field_uuid}}", apiToken: "{{api_token}}", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomFieldResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customFieldId</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |
| <code>body</code> | <code>[UpdateCustomFieldRequestDto](src/models/update-custom-field-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customFields.updateCustomField(request)`

- **OnSuccess**: <code>[CustomFieldResponseDto](src/models/custom-field-response-dto.ts)</code>
- **OnError**: throws <code>[CustomFields.UpdateCustomFieldError](src/resources/custom-fields.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customFields.updateCustomField(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomFieldResponseDto, CustomFields.UpdateCustomFieldError&gt;</code>, with `result.value` of type <code>[CustomFieldResponseDto](src/models/custom-field-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Customers

> Source: [Customers](src/resources/customers.ts)

<details>
<summary><code>archiveCustomer(request: Customers.ArchiveCustomerRequest, options?: RequestOptions): ApiPromise&lt;CustomerResponseDto, Customers.ArchiveCustomerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing customer. In the response, the `archived` field is set as `true`.

You can restore an archived customer with `POST /v3/customers/{customerId}/restore`. There is no change when you archive an archived customer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.archiveCustomer({
    customerId: "{{customer_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type CustomerResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Customers.ArchiveCustomerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .archiveCustomer({
    customerId: "{{customer_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.archiveCustomer(request)`

- **OnSuccess**: <code>[CustomerResponseDto](src/models/customer-response-dto.ts)</code>
- **OnError**: throws <code>[Customers.ArchiveCustomerError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.archiveCustomer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerResponseDto, Customers.ArchiveCustomerError&gt;</code>, with `result.value` of type <code>[CustomerResponseDto](src/models/customer-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>archiveCustomerBankAccount(request: Customers.ArchiveCustomerBankAccountRequest, options?: RequestOptions): ApiPromise&lt;CustomerBankAccountResponseDto, Customers.ArchiveCustomerBankAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing customer bank account. In the response, the `archived` field is set as `true`. An archived customer bank account cannot be restored.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.archiveCustomerBankAccount({
    customerId: "{{customer_id}}",
    bankAccountId: "{{customer_bank_account_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type CustomerBankAccountResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Customers.ArchiveCustomerBankAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .archiveCustomerBankAccount({
    customerId: "{{customer_id}}",
    bankAccountId: "{{customer_bank_account_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerBankAccountResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>bankAccountId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.archiveCustomerBankAccount(request)`

- **OnSuccess**: <code>[CustomerBankAccountResponseDto](src/models/customer-bank-account-response-dto.ts)</code>
- **OnError**: throws <code>[Customers.ArchiveCustomerBankAccountError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.archiveCustomerBankAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerBankAccountResponseDto, Customers.ArchiveCustomerBankAccountError&gt;</code>, with `result.value` of type <code>[CustomerBankAccountResponseDto](src/models/customer-bank-account-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>archiveCustomerContact(request: Customers.ArchiveCustomerContactRequest, options?: RequestOptions): ApiPromise&lt;CustomerContactResponseDto, Customers.ArchiveCustomerContactError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing customer contact. In the response, the `archived` field is set as `true`.

You can restore an archived customer with `POST /v3/customers/{customerId}/contacts/{contactId}/restore`. There is no change when you archive an archived customer contact.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.archiveCustomerContact({
    customerId: "{{customer_id}}",
    contactId: "{{customer_contact_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type CustomerContactResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Customers.ArchiveCustomerContactError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .archiveCustomerContact({
    customerId: "{{customer_id}}",
    contactId: "{{customer_contact_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerContactResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>contactId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.archiveCustomerContact(request)`

- **OnSuccess**: <code>[CustomerContactResponseDto](src/models/customer-contact-response-dto.ts)</code>
- **OnError**: throws <code>[Customers.ArchiveCustomerContactError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.archiveCustomerContact(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerContactResponseDto, Customers.ArchiveCustomerContactError&gt;</code>, with `result.value` of type <code>[CustomerContactResponseDto](src/models/customer-contact-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>authorizeToChargeCustomer(request: Customers.AuthorizeToChargeCustomerRequest, options?: RequestOptions): ApiPromise&lt;ChargeAuthorizationResponseDto, Customers.AuthorizeToChargeCustomerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Authorize your organization to charge a customer for invoices.

By default, your organization is not authorized to charge a customer. The customer `authorizedToCharge` field must be set as `true` for you to charge the customer for invoices.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.authorizeToChargeCustomer({
    customerId: "{{customer_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { authorizedToCharge: true },
  });
  // TODO: Handle 'response' of type ChargeAuthorizationResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Customers.AuthorizeToChargeCustomerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .authorizeToChargeCustomer({
    customerId: "{{customer_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { authorizedToCharge: true },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChargeAuthorizationResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[ChargeAuthorizationRequestDto](src/models/charge-authorization-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.authorizeToChargeCustomer(request)`

- **OnSuccess**: <code>[ChargeAuthorizationResponseDto](src/models/charge-authorization-response-dto.ts)</code>
- **OnError**: throws <code>[Customers.AuthorizeToChargeCustomerError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.authorizeToChargeCustomer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChargeAuthorizationResponseDto, Customers.AuthorizeToChargeCustomerError&gt;</code>, with `result.value` of type <code>[ChargeAuthorizationResponseDto](src/models/charge-authorization-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createCustomer(request: Customers.CreateCustomerRequest, options?: RequestOptions): ApiPromise&lt;CustomerResponseDto, Customers.CreateCustomerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new customer.

See Customers in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.createCustomer({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { name: "some example string", email: "some example string" },
  });
  // TODO: Handle 'response' of type CustomerResponseDto
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
  .createCustomer({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { name: "some example string", email: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[CustomerCreateRequestDto](src/models/customer-create-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.createCustomer(request)`

- **OnSuccess**: <code>[CustomerResponseDto](src/models/customer-response-dto.ts)</code>
- **OnError**: throws <code>[Customers.CreateCustomerError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.createCustomer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerResponseDto, Customers.CreateCustomerError&gt;</code>, with `result.value` of type <code>[CustomerResponseDto](src/models/customer-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createCustomerBankAccount(request: Customers.CreateCustomerBankAccountRequest, options?: RequestOptions): ApiPromise&lt;CustomerBankAccountResponseDto, Customers.CreateCustomerBankAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new customer bank account. When you add customer bank account information, you can charge the customer for invoices.

Creating a customer bank account follows a set of rules.
* **Customer billing address**: The customer `billingAddress` information is required before you can create a customer bank account.
* **Customer bank account verification**: If the customer bank account requires verification, BILL requires up to 2 business days to complete a one-time verification of the bank account.

**Note**: When you add a customer bank account in the production environment, BILL validates the customer routing number before you can charge the customer. You will get an error message if the customer routing number is invalid in production.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.createCustomerBankAccount({
    customerId: "{{customer_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {
      nameOnAccount: "some example string",
      routingNumber: "some example string",
      accountNumber: "some example string",
      type: BankAccountType.Checking,
      ownerType: BankAccountOwnerType.Business,
    },
  });
  // TODO: Handle 'response' of type CustomerBankAccountResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Customers.CreateCustomerBankAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .createCustomerBankAccount({
    customerId: "{{customer_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {
      nameOnAccount: "some example string",
      routingNumber: "some example string",
      accountNumber: "some example string",
      type: BankAccountType.Checking,
      ownerType: BankAccountOwnerType.Business,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerBankAccountResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[CreateCustomerBankAccountRequestDto](src/models/create-customer-bank-account-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.createCustomerBankAccount(request)`

- **OnSuccess**: <code>[CustomerBankAccountResponseDto](src/models/customer-bank-account-response-dto.ts)</code>
- **OnError**: throws <code>[Customers.CreateCustomerBankAccountError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.createCustomerBankAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerBankAccountResponseDto, Customers.CreateCustomerBankAccountError&gt;</code>, with `result.value` of type <code>[CustomerBankAccountResponseDto](src/models/customer-bank-account-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createCustomerContact(request: Customers.CreateCustomerContactRequest, options?: RequestOptions): ApiPromise&lt;CustomerContactResponseDto, Customers.CreateCustomerContactError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new customer contact.

When you create a customer contact, BILL enables the customer to sign in to the BILL web app with the `email` value and a random password. The signed-in customer can view invoices, make payments, and manage their account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.createCustomerContact({
    customerId: "{{customer_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { firstName: "some example string", email: "user@example.com" },
  });
  // TODO: Handle 'response' of type CustomerContactResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Customers.CreateCustomerContactError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .createCustomerContact({
    customerId: "{{customer_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { firstName: "some example string", email: "user@example.com" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerContactResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[CreateCustomerContactRequestDto](src/models/create-customer-contact-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.createCustomerContact(request)`

- **OnSuccess**: <code>[CustomerContactResponseDto](src/models/customer-contact-response-dto.ts)</code>
- **OnError**: throws <code>[Customers.CreateCustomerContactError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.createCustomerContact(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerContactResponseDto, Customers.CreateCustomerContactError&gt;</code>, with `result.value` of type <code>[CustomerContactResponseDto](src/models/customer-contact-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCustomer(request: Customers.GetCustomerRequest, options?: RequestOptions): ApiPromise&lt;CustomerResponseDto, Customers.GetCustomerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing customer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.getCustomer({
    customerId: "{{customer_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type CustomerResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Customers.GetCustomerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .getCustomer({ customerId: "{{customer_id}}", sessionId: "{{session_id}}", devKey: "{{developer_key}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.getCustomer(request)`

- **OnSuccess**: <code>[CustomerResponseDto](src/models/customer-response-dto.ts)</code>
- **OnError**: throws <code>[Customers.GetCustomerError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.getCustomer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerResponseDto, Customers.GetCustomerError&gt;</code>, with `result.value` of type <code>[CustomerResponseDto](src/models/customer-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCustomerBankAccount(request: Customers.GetCustomerBankAccountRequest, options?: RequestOptions): ApiPromise&lt;CustomerBankAccountResponseDto, Customers.GetCustomerBankAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing customer bank account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.getCustomerBankAccount({
    customerId: "{{customer_id}}",
    bankAccountId: "{{customer_bank_account_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type CustomerBankAccountResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Customers.GetCustomerBankAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .getCustomerBankAccount({
    customerId: "{{customer_id}}",
    bankAccountId: "{{customer_bank_account_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerBankAccountResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>bankAccountId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.getCustomerBankAccount(request)`

- **OnSuccess**: <code>[CustomerBankAccountResponseDto](src/models/customer-bank-account-response-dto.ts)</code>
- **OnError**: throws <code>[Customers.GetCustomerBankAccountError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.getCustomerBankAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerBankAccountResponseDto, Customers.GetCustomerBankAccountError&gt;</code>, with `result.value` of type <code>[CustomerBankAccountResponseDto](src/models/customer-bank-account-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCustomerContact(request: Customers.GetCustomerContactRequest, options?: RequestOptions): ApiPromise&lt;CustomerContactResponseDto, Customers.GetCustomerContactError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing customer contact.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.getCustomerContact({
    customerId: "{{customer_id}}",
    contactId: "{{customer_contact_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type CustomerContactResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Customers.GetCustomerContactError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .getCustomerContact({
    customerId: "{{customer_id}}",
    contactId: "{{customer_contact_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerContactResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>contactId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.getCustomerContact(request)`

- **OnSuccess**: <code>[CustomerContactResponseDto](src/models/customer-contact-response-dto.ts)</code>
- **OnError**: throws <code>[Customers.GetCustomerContactError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.getCustomerContact(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerContactResponseDto, Customers.GetCustomerContactError&gt;</code>, with `result.value` of type <code>[CustomerContactResponseDto](src/models/customer-contact-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomerBankAccounts(request: Customers.ListCustomerBankAccountsRequest, options?: RequestOptions): ApiPromise&lt;ListResponseDtoCustomerBankAccountResponseDto, Customers.ListCustomerBankAccountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of customer bank account objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.listCustomerBankAccounts({
    customerId: "{{customer_id}}",
    max: 10,
    sort: "createdTime:desc",
    filters: "status:eq:VERIFIED",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListResponseDtoCustomerBankAccountResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Customers.ListCustomerBankAccountsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .listCustomerBankAccounts({
    customerId: "{{customer_id}}",
    max: 10,
    sort: "createdTime:desc",
    filters: "status:eq:VERIFIED",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseDtoCustomerBankAccountResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>max?</code> | <code>number</code> | - |
| <code>sort?</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.listCustomerBankAccounts(request)`

- **OnSuccess**: <code>[ListResponseDtoCustomerBankAccountResponseDto](src/models/list-response-dto-customer-bank-account-response-dto.ts)</code>
- **OnError**: throws <code>[Customers.ListCustomerBankAccountsError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.listCustomerBankAccounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseDtoCustomerBankAccountResponseDto, Customers.ListCustomerBankAccountsError&gt;</code>, with `result.value` of type <code>[ListResponseDtoCustomerBankAccountResponseDto](src/models/list-response-dto-customer-bank-account-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomerContacts(request: Customers.ListCustomerContactsRequest, options?: RequestOptions): ApiPromise&lt;ListResponseDtoCustomerContactResponseDto, Customers.ListCustomerContactsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of customer contact objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.listCustomerContacts({
    customerId: "{{customer_id}}",
    max: 10,
    sort: "firstName:asc",
    filters: "archived:eq:false",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListResponseDtoCustomerContactResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Customers.ListCustomerContactsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .listCustomerContacts({
    customerId: "{{customer_id}}",
    max: 10,
    sort: "firstName:asc",
    filters: "archived:eq:false",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseDtoCustomerContactResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>max?</code> | <code>number</code> | - |
| <code>sort?</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.listCustomerContacts(request)`

- **OnSuccess**: <code>[ListResponseDtoCustomerContactResponseDto](src/models/list-response-dto-customer-contact-response-dto.ts)</code>
- **OnError**: throws <code>[Customers.ListCustomerContactsError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.listCustomerContacts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseDtoCustomerContactResponseDto, Customers.ListCustomerContactsError&gt;</code>, with `result.value` of type <code>[ListResponseDtoCustomerContactResponseDto](src/models/list-response-dto-customer-contact-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomers(request?: Customers.ListCustomersRequest, options?: RequestOptions): ApiPromise&lt;ListResponseDtoCustomerResponseDto, Customers.ListCustomersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of customer objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.listCustomers({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{customer_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListResponseDtoCustomerResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Customers.ListCustomersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .listCustomers({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{customer_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseDtoCustomerResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max?</code> | <code>number</code> | - |
| <code>sort?</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.listCustomers(request)`

- **OnSuccess**: <code>[ListResponseDtoCustomerResponseDto](src/models/list-response-dto-customer-response-dto.ts)</code>
- **OnError**: throws <code>[Customers.ListCustomersError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.listCustomers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseDtoCustomerResponseDto, Customers.ListCustomersError&gt;</code>, with `result.value` of type <code>[ListResponseDtoCustomerResponseDto](src/models/list-response-dto-customer-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>restoreCustomer(request: Customers.RestoreCustomerRequest, options?: RequestOptions): ApiPromise&lt;CustomerResponseDto, Customers.RestoreCustomerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived customer. In the response, the `archived` field is set as `false`.

You can perform any valid BILL operation on restored customers. There is no change when you restore a restored customer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.restoreCustomer({
    customerId: "{{customer_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type CustomerResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Customers.RestoreCustomerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .restoreCustomer({
    customerId: "{{customer_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.restoreCustomer(request)`

- **OnSuccess**: <code>[CustomerResponseDto](src/models/customer-response-dto.ts)</code>
- **OnError**: throws <code>[Customers.RestoreCustomerError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.restoreCustomer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerResponseDto, Customers.RestoreCustomerError&gt;</code>, with `result.value` of type <code>[CustomerResponseDto](src/models/customer-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>restoreCustomerContact(request: Customers.RestoreCustomerContactRequest, options?: RequestOptions): ApiPromise&lt;CustomerContactResponseDto, Customers.RestoreCustomerContactError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived customer contact. In the response, the `archived` field is set as `false`.

You can perform any valid BILL operation on restored customer contacts. There is no change when you restore a restored customer contact.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.restoreCustomerContact({
    customerId: "{{customer_id}}",
    contactId: "{{customer_contact_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type CustomerContactResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Customers.RestoreCustomerContactError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .restoreCustomerContact({
    customerId: "{{customer_id}}",
    contactId: "{{customer_contact_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerContactResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>contactId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.restoreCustomerContact(request)`

- **OnSuccess**: <code>[CustomerContactResponseDto](src/models/customer-contact-response-dto.ts)</code>
- **OnError**: throws <code>[Customers.RestoreCustomerContactError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.restoreCustomerContact(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerContactResponseDto, Customers.RestoreCustomerContactError&gt;</code>, with `result.value` of type <code>[CustomerContactResponseDto](src/models/customer-contact-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCustomer(request: Customers.UpdateCustomerRequest, options?: RequestOptions): ApiPromise&lt;CustomerResponseDto, Customers.UpdateCustomerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing customer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.updateCustomer({
    customerId: "{{customer_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  });
  // TODO: Handle 'response' of type CustomerResponseDto
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
const result = await client.customers
  .updateCustomer({
    customerId: "{{customer_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[CustomerUpdateRequestDto](src/models/customer-update-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.updateCustomer(request)`

- **OnSuccess**: <code>[CustomerResponseDto](src/models/customer-response-dto.ts)</code>
- **OnError**: throws <code>[Customers.UpdateCustomerError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.updateCustomer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerResponseDto, Customers.UpdateCustomerError&gt;</code>, with `result.value` of type <code>[CustomerResponseDto](src/models/customer-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCustomerBankAccount(request: Customers.UpdateCustomerBankAccountRequest, options?: RequestOptions): ApiPromise&lt;CustomerBankAccountResponseDto, Customers.UpdateCustomerBankAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing customer bank account.

You can update only the `nickname` and `ownerType` fields for a customer bank account. If you want to update any of the other fields, create a new customer bank account with `POST /v3/customers/{customerId}/bank-accounts`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.updateCustomerBankAccount({
    customerId: "{{customer_id}}",
    bankAccountId: "{{customer_bank_account_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  });
  // TODO: Handle 'response' of type CustomerBankAccountResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Customers.UpdateCustomerBankAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .updateCustomerBankAccount({
    customerId: "{{customer_id}}",
    bankAccountId: "{{customer_bank_account_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerBankAccountResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>bankAccountId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[UpdateCustomerBankAccountRequestDto](src/models/update-customer-bank-account-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.updateCustomerBankAccount(request)`

- **OnSuccess**: <code>[CustomerBankAccountResponseDto](src/models/customer-bank-account-response-dto.ts)</code>
- **OnError**: throws <code>[Customers.UpdateCustomerBankAccountError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.updateCustomerBankAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerBankAccountResponseDto, Customers.UpdateCustomerBankAccountError&gt;</code>, with `result.value` of type <code>[CustomerBankAccountResponseDto](src/models/customer-bank-account-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCustomerContact(request: Customers.UpdateCustomerContactRequest, options?: RequestOptions): ApiPromise&lt;CustomerContactResponseDto, Customers.UpdateCustomerContactError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing customer contact.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.updateCustomerContact({
    customerId: "{{customer_id}}",
    contactId: "{{customer_contact_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  });
  // TODO: Handle 'response' of type CustomerContactResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Customers.UpdateCustomerContactError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .updateCustomerContact({
    customerId: "{{customer_id}}",
    contactId: "{{customer_contact_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerContactResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>contactId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[UpdateCustomerContactRequestDto](src/models/update-customer-contact-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.updateCustomerContact(request)`

- **OnSuccess**: <code>[CustomerContactResponseDto](src/models/customer-contact-response-dto.ts)</code>
- **OnError**: throws <code>[Customers.UpdateCustomerContactError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.updateCustomerContact(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerContactResponseDto, Customers.UpdateCustomerContactError&gt;</code>, with `result.value` of type <code>[CustomerContactResponseDto](src/models/customer-contact-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Documents

> Source: [Documents](src/resources/documents.ts)

<details>
<summary><code>createBillDocument(request: Documents.CreateBillDocumentRequest, options?: RequestOptions): ApiPromise&lt;DocumentCreateResponseDto, Documents.CreateBillDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a document for an existing bill. The file size limit is 6 MB. When you upload a bill document, the uploaded document is available on the bill details page in the BILL web app.

In the response, the `name`, `createdTime`, and `downloadLink` is available when the upload is complete.

When you upload a document, it takes a few minutes for BILL to complete the upload process.
* **Upload in-progress**: A temporary BILL-generated ID is available for the document when the upload is in progress. The value begins with `0du`. You can get the document upload status with `GET /v3/documents/upload-status`.
* **Upload complete**: A BILL-generated ID is available for the document when the upload is complete. The value begins with `00h`. You can get details about the uploaded document with `GET /v3/documents/bills/{billId}`.

See Documents and attachments in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.documents.createBillDocument({
    billId: "{{bill_id}}",
    name: "business_details.pdf",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: ["some example string"],
  });
  // TODO: Handle 'response' of type DocumentCreateResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Documents.CreateBillDocumentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documents
  .createBillDocument({
    billId: "{{bill_id}}",
    name: "business_details.pdf",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: ["some example string"],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocumentCreateResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>billId</code> | <code>string</code> | - |
| <code>name</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>string[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documents.createBillDocument(request)`

- **OnSuccess**: <code>[DocumentCreateResponseDto](src/models/document-create-response-dto.ts)</code>
- **OnError**: throws <code>[Documents.CreateBillDocumentError](src/resources/documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documents.createBillDocument(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocumentCreateResponseDto, Documents.CreateBillDocumentError&gt;</code>, with `result.value` of type <code>[DocumentCreateResponseDto](src/models/document-create-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDocument(request: Documents.GetDocumentRequest, options?: RequestOptions): ApiPromise&lt;DocumentResponseDto, Documents.GetDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about a document associated with a bill.

From the response, use `downloadLink` in a GET request to download the document.

```
curl '{downloadLink}' --header 'sessionId: {session_id}' --output {document_name}
```

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.documents.getDocument({
    documentId: "{{document_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type DocumentResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Documents.GetDocumentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documents
  .getDocument({ documentId: "{{document_id}}", sessionId: "{{session_id}}", devKey: "{{developer_key}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocumentResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>documentId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documents.getDocument(request)`

- **OnSuccess**: <code>[DocumentResponseDto](src/models/document-response-dto.ts)</code>
- **OnError**: throws <code>[Documents.GetDocumentError](src/resources/documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documents.getDocument(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocumentResponseDto, Documents.GetDocumentError&gt;</code>, with `result.value` of type <code>[DocumentResponseDto](src/models/document-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDocuments(request: Documents.ListDocumentsRequest, options?: RequestOptions): ApiPromise&lt;ListResponseDtoDocumentResponseDto, Documents.ListDocumentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of documents associated with a bill.

From the response, use `downloadLink` in a GET request to download the document.

```
curl '{downloadLink}' --header 'sessionId: {session_id}' --output {document_name}
```

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.documents.listDocuments({
    billId: "{{bill_id}}",
    max: 10,
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListResponseDtoDocumentResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Documents.ListDocumentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documents
  .listDocuments({ billId: "{{bill_id}}", max: 10, sessionId: "{{session_id}}", devKey: "{{developer_key}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseDtoDocumentResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>billId</code> | <code>string</code> | - |
| <code>max?</code> | <code>number</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documents.listDocuments(request)`

- **OnSuccess**: <code>[ListResponseDtoDocumentResponseDto](src/models/list-response-dto-document-response-dto.ts)</code>
- **OnError**: throws <code>[Documents.ListDocumentsError](src/resources/documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documents.listDocuments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseDtoDocumentResponseDto, Documents.ListDocumentsError&gt;</code>, with `result.value` of type <code>[ListResponseDtoDocumentResponseDto](src/models/list-response-dto-document-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadStatus(request: Documents.UploadStatusRequest, options?: RequestOptions): ApiPromise&lt;DocumentUploadStatusResponseDto[], Documents.UploadStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get status of a document upload. Use this endpoint to identify when a document upload is complete.
* BILL generates an `uploadId` for the document when the upload is in progress (`IN_PROGRESS`). The value begins with `0du`.
* BILL generates a `documentId` for the document when the upload is complete (`UPLOADED`). The value begins with `00h`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.documents.uploadStatus({
    ids: "{{document_upload_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type DocumentUploadStatusResponseDto[]
} catch (err) {
  // TODO: Handle 'err' of type Documents.UploadStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documents
  .uploadStatus({ ids: "{{document_upload_id}}", sessionId: "{{session_id}}", devKey: "{{developer_key}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocumentUploadStatusResponseDto[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documents.uploadStatus(request)`

- **OnSuccess**: <code>[DocumentUploadStatusResponseDto](src/models/document-upload-status-response-dto.ts)[]</code>
- **OnError**: throws <code>[Documents.UploadStatusError](src/resources/documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documents.uploadStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocumentUploadStatusResponseDto[], Documents.UploadStatusError&gt;</code>, with `result.value` of type <code>[DocumentUploadStatusResponseDto](src/models/document-upload-status-response-dto.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Events

> Source: [Events](src/resources/events.ts)

<details>
<summary><code>getEventCatalog(request?: Events.GetEventCatalogRequest, options?: RequestOptions): ApiPromise&lt;EventCatalogDto[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the complete list of available events that you can subscribe to.

See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL events.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.events.getEventCatalog({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    appKey: "{{app_key}}",
    apiToken: "{{api_token}}",
  });
  // TODO: Handle 'response' of type EventCatalogDto[]
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
const result = await client.events
  .getEventCatalog({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    appKey: "{{app_key}}",
    apiToken: "{{api_token}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventCatalogDto[]
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
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>appKey?</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.events.getEventCatalog(request)`

- **OnSuccess**: <code>[EventCatalogDto](src/models/event-catalog-dto.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.events.getEventCatalog(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventCatalogDto[], ApiError&gt;</code>, with `result.value` of type <code>[EventCatalogDto](src/models/event-catalog-dto.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEventsForSubscription(request: Events.GetEventsForSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;PaginationDtoEventWithRetriesDto, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of event notifications sent to you for a subscription. You can use this endpoint to address any issues with notification retries.

In the request, set `createdTimeFrom` and `createdTimeTo` to get event notifications for the specified time range. If you do not set `createdTimeTo`, the current date and time is used. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

**Note**: In this list operation, pagination is available only in one direction. The `nextPage` value is available in the response for you to retrieve the next page of results. However, you cannot retrieve the previous page of results.

See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL events.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.events.getEventsForSubscription({
    subscriptionId: "{{webhook_subscription_id}}",
    entityId: "{{webhook_bill_id}}",
    max: 10,
    createdTimeFrom: "2026-03-15T00:00:00Z",
    createdTimeTo: "2026-03-20T00:00:00Z",
    ascending: true,
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    appKey: "{{app_key}}",
    apiToken: "{{api_token}}",
  });
  // TODO: Handle 'response' of type PaginationDtoEventWithRetriesDto
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
const result = await client.events
  .getEventsForSubscription({
    subscriptionId: "{{webhook_subscription_id}}",
    entityId: "{{webhook_bill_id}}",
    max: 10,
    createdTimeFrom: "2026-03-15T00:00:00Z",
    createdTimeTo: "2026-03-20T00:00:00Z",
    ascending: true,
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    appKey: "{{app_key}}",
    apiToken: "{{api_token}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginationDtoEventWithRetriesDto
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
| <code>subscriptionId</code> | <code>string</code> | - |
| <code>entityId?</code> | <code>string</code> | - |
| <code>max?</code> | <code>number</code> | - |
| <code>createdTimeFrom?</code> | <code>string</code> | - |
| <code>createdTimeTo?</code> | <code>string</code> | - |
| <code>ascending?</code> | <code>boolean</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>appKey?</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.events.getEventsForSubscription(request)`

- **OnSuccess**: <code>[PaginationDtoEventWithRetriesDto](src/models/pagination-dto-event-with-retries-dto.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.events.getEventsForSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginationDtoEventWithRetriesDto, ApiError&gt;</code>, with `result.value` of type <code>[PaginationDtoEventWithRetriesDto](src/models/pagination-dto-event-with-retries-dto.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resendEvent(request: Events.ResendEventRequest, options?: RequestOptions): ApiPromise&lt;EventDto, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resend an existing event notification.

**Note**: When an event notification fails, BILL tries to send the notification again with exponential backoff.

See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL events.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.events.resendEvent({
    subscriptionId: "{{webhook_subscription_id}}",
    eventId: "{{webhook_event_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    appKey: "{{app_key}}",
    apiToken: "{{api_token}}",
  });
  // TODO: Handle 'response' of type EventDto
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
const result = await client.events
  .resendEvent({
    subscriptionId: "{{webhook_subscription_id}}",
    eventId: "{{webhook_event_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    appKey: "{{app_key}}",
    apiToken: "{{api_token}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventDto
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
| <code>subscriptionId</code> | <code>string</code> | - |
| <code>eventId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>appKey?</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.events.resendEvent(request)`

- **OnSuccess**: <code>[EventDto](src/models/event-dto.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.events.resendEvent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventDto, ApiError&gt;</code>, with `result.value` of type <code>[EventDto](src/models/event-dto.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Exports

> Source: [Exports](src/resources/exports.ts)

<details>
<summary><code>getDownloadLink(request: Exports.GetDownloadLinkRequest, options?: RequestOptions): ApiPromise&lt;ExportDownloadLinkResponseDto, Exports.GetDownloadLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the download URL for an exported record file.

From the response, use `downloadLink` in a GET request to download the file.

```
curl '{downloadLink}' --output {file_name}
```
See Export BILL records in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.exports.getDownloadLink({
    exportId: 1,
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ExportDownloadLinkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Exports.GetDownloadLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.exports
  .getDownloadLink({ exportId: 1, sessionId: "{{session_id}}", devKey: "{{developer_key}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExportDownloadLinkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>exportId</code> | <code>number</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.exports.getDownloadLink(request)`

- **OnSuccess**: <code>[ExportDownloadLinkResponseDto](src/models/export-download-link-response-dto.ts)</code>
- **OnError**: throws <code>[Exports.GetDownloadLinkError](src/resources/exports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.exports.getDownloadLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExportDownloadLinkResponseDto, Exports.GetDownloadLinkError&gt;</code>, with `result.value` of type <code>[ExportDownloadLinkResponseDto](src/models/export-download-link-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listExports(request?: Exports.ListExportsRequest, options?: RequestOptions): ApiPromise&lt;ListResponseDtoExportResponseDto, Exports.ListExportsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of exported BILL records available for you to download. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

From the response, use `exportId` to get the download URL for an exported record file with `GET /v3/exports/{exportId}/download-link`.

You can export records, such as vendors, customers, bills, and invoices. In addition, you can export AP payments and AR payments. The **Import and export** section in the BILL web app (**Settings > Import & export > Custom File Integration**) provides the complete list of entities that you can export.

See Export BILL records in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.exports.listExports({
    max: 10,
    filters: "status:eq:SUCCESS",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListResponseDtoExportResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Exports.ListExportsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.exports
  .listExports({
    max: 10,
    filters: "status:eq:SUCCESS",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseDtoExportResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max?</code> | <code>number</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.exports.listExports(request)`

- **OnSuccess**: <code>[ListResponseDtoExportResponseDto](src/models/list-response-dto-export-response-dto.ts)</code>
- **OnError**: throws <code>[Exports.ListExportsError](src/resources/exports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.exports.listExports(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseDtoExportResponseDto, Exports.ListExportsError&gt;</code>, with `result.value` of type <code>[ListResponseDtoExportResponseDto](src/models/list-response-dto-export-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## FundingAccounts

> Source: [FundingAccounts](src/resources/funding-accounts.ts)

<details>
<summary><code>archiveBankAccount(request: FundingAccounts.ArchiveBankAccountRequest, options?: RequestOptions): ApiPromise&lt;OrganizationBankAccountResponseDto, FundingAccounts.ArchiveBankAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing bank account. In the response, the `archived` field is set as `true`.

Archiving a bank account at BILL has a set of requirements.
* **Bank account status**: The bank account `status` must be set as `VERIFIED`. You can verify the bank account with `POST /v3/funding-accounts/banks/{bankAccountId}/verify`.
* **Bank account user status**: The bank account user `verificationStatus` must be set as `VERIFIED`. To begin the verification process, nominate a bank account user with `POST /v3/funding-accounts/banks/users`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fundingAccounts.archiveBankAccount({
    bankAccountId: "{{org_bank_account_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type OrganizationBankAccountResponseDto
} catch (err) {
  // TODO: Handle 'err' of type FundingAccounts.ArchiveBankAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fundingAccounts
  .archiveBankAccount({
    bankAccountId: "{{org_bank_account_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrganizationBankAccountResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bankAccountId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fundingAccounts.archiveBankAccount(request)`

- **OnSuccess**: <code>[OrganizationBankAccountResponseDto](src/models/organization-bank-account-response-dto.ts)</code>
- **OnError**: throws <code>[FundingAccounts.ArchiveBankAccountError](src/resources/funding-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fundingAccounts.archiveBankAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrganizationBankAccountResponseDto, FundingAccounts.ArchiveBankAccountError&gt;</code>, with `result.value` of type <code>[OrganizationBankAccountResponseDto](src/models/organization-bank-account-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>archiveBankAccountUser(request: FundingAccounts.ArchiveBankAccountUserRequest, options?: RequestOptions): ApiPromise&lt;OrganizationBankAccountUserResponseDto, FundingAccounts.ArchiveBankAccountUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing bank account user. In the response, the `archived` field is set as `true` and the bank account user `verificationStatus` is set as `UNVERIFIED`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fundingAccounts.archiveBankAccountUser({
    bankAccountUserId: "{{org_bank_account_user_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type OrganizationBankAccountUserResponseDto
} catch (err) {
  // TODO: Handle 'err' of type FundingAccounts.ArchiveBankAccountUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fundingAccounts
  .archiveBankAccountUser({
    bankAccountUserId: "{{org_bank_account_user_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrganizationBankAccountUserResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bankAccountUserId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fundingAccounts.archiveBankAccountUser(request)`

- **OnSuccess**: <code>[OrganizationBankAccountUserResponseDto](src/models/organization-bank-account-user-response-dto.ts)</code>
- **OnError**: throws <code>[FundingAccounts.ArchiveBankAccountUserError](src/resources/funding-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fundingAccounts.archiveBankAccountUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrganizationBankAccountUserResponseDto, FundingAccounts.ArchiveBankAccountUserError&gt;</code>, with `result.value` of type <code>[OrganizationBankAccountUserResponseDto](src/models/organization-bank-account-user-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createBankAccount(request: FundingAccounts.CreateBankAccountRequest, options?: RequestOptions): ApiPromise&lt;OrganizationBankAccountResponseDto, FundingAccounts.CreateBankAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new bank account. The currently signed-in user must have the `ADMINISTRATOR` user role in the BILL organization to perform this operation. BILL sends an email notification for informing you about changes to your funding accounts.

When you create a bank account, BILL sends a test ACH payment to confirm whether the account details are accurate.

In the response, three fields are set to their default values.
* The bank account `status` is set as `PENDING`. You can verify the bank account with `POST /v3/funding-accounts/banks/{bankAccountId}/verify`.
* The `payables` and `receivables` values are set as `false`. To update these values, update the bank account with `PATCH /v3/funding-accounts/banks/{bankAccountId}`.

**Note**: Creating a bank account requires an MFA-trusted API session. See MFA setup for information about the BILL MFA process.

See Bank account setup (v3 API) in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fundingAccounts.createBankAccount({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {
      nameOnAccount: "some example string",
      type: BankAccountType.Checking,
      ownerType: BankAccountOwnerType.Business,
      bankName: "some example string",
    },
  });
  // TODO: Handle 'response' of type OrganizationBankAccountResponseDto
} catch (err) {
  // TODO: Handle 'err' of type FundingAccounts.CreateBankAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fundingAccounts
  .createBankAccount({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {
      nameOnAccount: "some example string",
      type: BankAccountType.Checking,
      ownerType: BankAccountOwnerType.Business,
      bankName: "some example string",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrganizationBankAccountResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[OrganizationBankAccountCreateRequestDto](src/models/organization-bank-account-create-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fundingAccounts.createBankAccount(request)`

- **OnSuccess**: <code>[OrganizationBankAccountResponseDto](src/models/organization-bank-account-response-dto.ts)</code>
- **OnError**: throws <code>[FundingAccounts.CreateBankAccountError](src/resources/funding-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fundingAccounts.createBankAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrganizationBankAccountResponseDto, FundingAccounts.CreateBankAccountError&gt;</code>, with `result.value` of type <code>[OrganizationBankAccountResponseDto](src/models/organization-bank-account-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBankAccount(request: FundingAccounts.GetBankAccountRequest, options?: RequestOptions): ApiPromise&lt;OrganizationBankAccountResponseDto, FundingAccounts.GetBankAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing bank account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fundingAccounts.getBankAccount({
    bankAccountId: "{{org_bank_account_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type OrganizationBankAccountResponseDto
} catch (err) {
  // TODO: Handle 'err' of type FundingAccounts.GetBankAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fundingAccounts
  .getBankAccount({
    bankAccountId: "{{org_bank_account_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrganizationBankAccountResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bankAccountId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fundingAccounts.getBankAccount(request)`

- **OnSuccess**: <code>[OrganizationBankAccountResponseDto](src/models/organization-bank-account-response-dto.ts)</code>
- **OnError**: throws <code>[FundingAccounts.GetBankAccountError](src/resources/funding-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fundingAccounts.getBankAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrganizationBankAccountResponseDto, FundingAccounts.GetBankAccountError&gt;</code>, with `result.value` of type <code>[OrganizationBankAccountResponseDto](src/models/organization-bank-account-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCardAccount(request: FundingAccounts.GetCardAccountRequest, options?: RequestOptions): ApiPromise&lt;CardAccountResponseDto, FundingAccounts.GetCardAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing card account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fundingAccounts.getCardAccount({
    cardAccountId: "{{org_card_account_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type CardAccountResponseDto
} catch (err) {
  // TODO: Handle 'err' of type FundingAccounts.GetCardAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fundingAccounts
  .getCardAccount({
    cardAccountId: "{{org_card_account_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CardAccountResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cardAccountId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fundingAccounts.getCardAccount(request)`

- **OnSuccess**: <code>[CardAccountResponseDto](src/models/card-account-response-dto.ts)</code>
- **OnError**: throws <code>[FundingAccounts.GetCardAccountError](src/resources/funding-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fundingAccounts.getCardAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CardAccountResponseDto, FundingAccounts.GetCardAccountError&gt;</code>, with `result.value` of type <code>[CardAccountResponseDto](src/models/card-account-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFundingAccountPermission(request?: FundingAccounts.GetFundingAccountPermissionRequest, options?: RequestOptions): ApiPromise&lt;FundingAccountPermissionResponseDto, FundingAccounts.GetFundingAccountPermissionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the funding account permissions available for the current organization and current organization user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fundingAccounts.getFundingAccountPermission({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type FundingAccountPermissionResponseDto
} catch (err) {
  // TODO: Handle 'err' of type FundingAccounts.GetFundingAccountPermissionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fundingAccounts
  .getFundingAccountPermission({ sessionId: "{{session_id}}", devKey: "{{developer_key}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FundingAccountPermissionResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fundingAccounts.getFundingAccountPermission(request)`

- **OnSuccess**: <code>[FundingAccountPermissionResponseDto](src/models/funding-account-permission-response-dto.ts)</code>
- **OnError**: throws <code>[FundingAccounts.GetFundingAccountPermissionError](src/resources/funding-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fundingAccounts.getFundingAccountPermission(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FundingAccountPermissionResponseDto, FundingAccounts.GetFundingAccountPermissionError&gt;</code>, with `result.value` of type <code>[FundingAccountPermissionResponseDto](src/models/funding-account-permission-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBankAccountUsers(request?: FundingAccounts.ListBankAccountUsersRequest, options?: RequestOptions): ApiPromise&lt;ListResponseDtoOrganizationBankAccountUserResponseDto, FundingAccounts.ListBankAccountUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of bank account user objects. In the response, if the bank account user `verificationStatus` is set as `NOMINATED`, user verification must be completed before the user can pay with the specified bank account.

By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fundingAccounts.listBankAccountUsers({
    max: 10,
    sort: "archived",
    filters: "id:eq:{{org_bank_account_user_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListResponseDtoOrganizationBankAccountUserResponseDto
} catch (err) {
  // TODO: Handle 'err' of type FundingAccounts.ListBankAccountUsersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fundingAccounts
  .listBankAccountUsers({
    max: 10,
    sort: "archived",
    filters: "id:eq:{{org_bank_account_user_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseDtoOrganizationBankAccountUserResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max?</code> | <code>number</code> | - |
| <code>sort?</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>currentUser?</code> | <code>boolean</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fundingAccounts.listBankAccountUsers(request)`

- **OnSuccess**: <code>[ListResponseDtoOrganizationBankAccountUserResponseDto](src/models/list-response-dto-organization-bank-account-user-response-dto.ts)</code>
- **OnError**: throws <code>[FundingAccounts.ListBankAccountUsersError](src/resources/funding-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fundingAccounts.listBankAccountUsers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseDtoOrganizationBankAccountUserResponseDto, FundingAccounts.ListBankAccountUsersError&gt;</code>, with `result.value` of type <code>[ListResponseDtoOrganizationBankAccountUserResponseDto](src/models/list-response-dto-organization-bank-account-user-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBankAccounts(request?: FundingAccounts.ListBankAccountsRequest, options?: RequestOptions): ApiPromise&lt;ListResponseDtoOrganizationBankAccountResponseDto, FundingAccounts.ListBankAccountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of bank account objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fundingAccounts.listBankAccounts({
    max: 10,
    sort: "createdTime:desc",
    filters: "bankAccountId:eq:{{org_bank_account_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListResponseDtoOrganizationBankAccountResponseDto
} catch (err) {
  // TODO: Handle 'err' of type FundingAccounts.ListBankAccountsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fundingAccounts
  .listBankAccounts({
    max: 10,
    sort: "createdTime:desc",
    filters: "bankAccountId:eq:{{org_bank_account_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseDtoOrganizationBankAccountResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max?</code> | <code>number</code> | - |
| <code>sort?</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fundingAccounts.listBankAccounts(request)`

- **OnSuccess**: <code>[ListResponseDtoOrganizationBankAccountResponseDto](src/models/list-response-dto-organization-bank-account-response-dto.ts)</code>
- **OnError**: throws <code>[FundingAccounts.ListBankAccountsError](src/resources/funding-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fundingAccounts.listBankAccounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseDtoOrganizationBankAccountResponseDto, FundingAccounts.ListBankAccountsError&gt;</code>, with `result.value` of type <code>[ListResponseDtoOrganizationBankAccountResponseDto](src/models/list-response-dto-organization-bank-account-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCardAccountUsers(request?: FundingAccounts.ListCardAccountUsersRequest, options?: RequestOptions): ApiPromise&lt;ListResponseDtoOrganizationCardAccountUserResponseDto, FundingAccounts.ListCardAccountUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of card account user objects. In the response, if the card account user `verificationStatus` is set as `NOMINATED`, user verification must be completed before the user can pay with the specified card account.

By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fundingAccounts.listCardAccountUsers({
    max: 10,
    sort: "archived",
    filters: "id:eq:{{org_card_account_user_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListResponseDtoOrganizationCardAccountUserResponseDto
} catch (err) {
  // TODO: Handle 'err' of type FundingAccounts.ListCardAccountUsersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fundingAccounts
  .listCardAccountUsers({
    max: 10,
    sort: "archived",
    filters: "id:eq:{{org_card_account_user_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseDtoOrganizationCardAccountUserResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max?</code> | <code>number</code> | - |
| <code>sort?</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>currentUser?</code> | <code>boolean</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fundingAccounts.listCardAccountUsers(request)`

- **OnSuccess**: <code>[ListResponseDtoOrganizationCardAccountUserResponseDto](src/models/list-response-dto-organization-card-account-user-response-dto.ts)</code>
- **OnError**: throws <code>[FundingAccounts.ListCardAccountUsersError](src/resources/funding-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fundingAccounts.listCardAccountUsers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseDtoOrganizationCardAccountUserResponseDto, FundingAccounts.ListCardAccountUsersError&gt;</code>, with `result.value` of type <code>[ListResponseDtoOrganizationCardAccountUserResponseDto](src/models/list-response-dto-organization-card-account-user-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCardFundingPurposes(request: FundingAccounts.ListCardFundingPurposesRequest, options?: RequestOptions): ApiPromise&lt;ListCardFundingPurposesResponseDto, FundingAccounts.ListCardFundingPurposesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of card funding purpose values based on the vendor and card brand.

When you create a payment (`POST /v3/payments` or `POST /v3/payments/bulk`) with a `CARD_ACCOUNT` funding account `type`, BILL requires a vendor industry value for compliance. When BILL cannot identify the vendor industry, the `cardFundingPurpose` field must be set in your payment request.

Use this endpoint to get the list of card funding purpose values you can set. If you get an empty 200 response, BILL has information about the vendor industry and setting the `cardFundingPurpose` field is not required in your payment request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fundingAccounts.listCardFundingPurposes({
    vendorId: "{{vendor_id}}",
    brand: "visa",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListCardFundingPurposesResponseDto
} catch (err) {
  // TODO: Handle 'err' of type FundingAccounts.ListCardFundingPurposesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fundingAccounts
  .listCardFundingPurposes({
    vendorId: "{{vendor_id}}",
    brand: "visa",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListCardFundingPurposesResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendorId</code> | <code>string</code> | - |
| <code>brand</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fundingAccounts.listCardFundingPurposes(request)`

- **OnSuccess**: <code>[ListCardFundingPurposesResponseDto](src/models/list-card-funding-purposes-response-dto.ts)</code>
- **OnError**: throws <code>[FundingAccounts.ListCardFundingPurposesError](src/resources/funding-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fundingAccounts.listCardFundingPurposes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListCardFundingPurposesResponseDto, FundingAccounts.ListCardFundingPurposesError&gt;</code>, with `result.value` of type <code>[ListCardFundingPurposesResponseDto](src/models/list-card-funding-purposes-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPayableApCards(request?: FundingAccounts.ListPayableApCardsRequest, options?: RequestOptions): ApiPromise&lt;ApCardResponseDto[], FundingAccounts.ListPayableApCardsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of AP Card objects.

With the AP Card, you can earn rewards simply by paying your bills. The AP Card is a payment method that enables you to send fast payments with no transaction fees or annual fees. You can use the AP Card with any vendor who accepts virtual card payments.

See AP Card Frequently Asked Questions (FAQs) in the BILL Help to learn more about AP Card.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fundingAccounts.listPayableApCards({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ApCardResponseDto[]
} catch (err) {
  // TODO: Handle 'err' of type FundingAccounts.ListPayableApCardsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fundingAccounts
  .listPayableApCards({ sessionId: "{{session_id}}", devKey: "{{developer_key}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApCardResponseDto[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fundingAccounts.listPayableApCards(request)`

- **OnSuccess**: <code>[ApCardResponseDto](src/models/ap-card-response-dto.ts)[]</code>
- **OnError**: throws <code>[FundingAccounts.ListPayableApCardsError](src/resources/funding-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fundingAccounts.listPayableApCards(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApCardResponseDto[], FundingAccounts.ListPayableApCardsError&gt;</code>, with `result.value` of type <code>[ApCardResponseDto](src/models/ap-card-response-dto.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPayableCardAccounts(request: FundingAccounts.ListPayableCardAccountsRequest, options?: RequestOptions): ApiPromise&lt;ListPayableCardAccountsResponseDto, FundingAccounts.ListPayableCardAccountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of card account objects.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fundingAccounts.listPayableCardAccounts({
    cardUserStatus: CardUserStatus.Verified,
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListPayableCardAccountsResponseDto
} catch (err) {
  // TODO: Handle 'err' of type FundingAccounts.ListPayableCardAccountsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fundingAccounts
  .listPayableCardAccounts({
    cardUserStatus: CardUserStatus.Verified,
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListPayableCardAccountsResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cardUserStatus</code> | <code>[CardUserStatus](src/models/card-user-status.ts)</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fundingAccounts.listPayableCardAccounts(request)`

- **OnSuccess**: <code>[ListPayableCardAccountsResponseDto](src/models/list-payable-card-accounts-response-dto.ts)</code>
- **OnError**: throws <code>[FundingAccounts.ListPayableCardAccountsError](src/resources/funding-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fundingAccounts.listPayableCardAccounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListPayableCardAccountsResponseDto, FundingAccounts.ListPayableCardAccountsError&gt;</code>, with `result.value` of type <code>[ListPayableCardAccountsResponseDto](src/models/list-payable-card-accounts-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>nominateBankAccountUser(request: FundingAccounts.NominateBankAccountUserRequest, options?: RequestOptions): ApiPromise&lt;StatusDto, FundingAccounts.NominateBankAccountUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Nominate a bank account user.

When you nominate a user, BILL performs a set of operations.
* The bank account user `verificationStatus` is set as `NOMINATED`.
* BILL sends the user an email asking them to sign in to the BILL web app and complete identity verification. See Verify your identity in the Guides section for test verification information you can enter in the sandbox environment.

After user identity verification is successful, the bank account user `verificationStatus` is set as `VERIFIED` and the user can pay with the specified bank account.

**Note**: The bank account `status` must be set as `VERIFIED` before you can nominate bank account users.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fundingAccounts.nominateBankAccountUser({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { userId: "some example string", bankAccountId: "some example string" },
  });
  // TODO: Handle 'response' of type StatusDto
} catch (err) {
  // TODO: Handle 'err' of type FundingAccounts.NominateBankAccountUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fundingAccounts
  .nominateBankAccountUser({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { userId: "some example string", bankAccountId: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StatusDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[NominateBankAccountUserRequestDto](src/models/nominate-bank-account-user-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fundingAccounts.nominateBankAccountUser(request)`

- **OnSuccess**: <code>[StatusDto](src/models/status-dto.ts)</code>
- **OnError**: throws <code>[FundingAccounts.NominateBankAccountUserError](src/resources/funding-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fundingAccounts.nominateBankAccountUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StatusDto, FundingAccounts.NominateBankAccountUserError&gt;</code>, with `result.value` of type <code>[StatusDto](src/models/status-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateBankAccount(request: FundingAccounts.UpdateBankAccountRequest, options?: RequestOptions): ApiPromise&lt;OrganizationBankAccountResponseDto, FundingAccounts.UpdateBankAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing bank account.

This operation follows a set of rules.
* **Bank account `status` requirement**: The bank account `status` must be set as `VERIFIED` before you can update any details about the bank account. You can verify the bank account with `POST /v3/funding-accounts/banks/{bankAccountId}/verify`.
* **Update field restrictions**: You cannot update the `routingNumber`, `accountNumber`, and account `type` values for a bank account. If you want to update any of these values, create a new bank account with `POST /v3/funding-accounts/banks`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fundingAccounts.updateBankAccount({
    bankAccountId: "{{org_bank_account_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  });
  // TODO: Handle 'response' of type OrganizationBankAccountResponseDto
} catch (err) {
  // TODO: Handle 'err' of type FundingAccounts.UpdateBankAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fundingAccounts
  .updateBankAccount({
    bankAccountId: "{{org_bank_account_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrganizationBankAccountResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bankAccountId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[OrganizationBankAccountUpdateRequestDto](src/models/organization-bank-account-update-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fundingAccounts.updateBankAccount(request)`

- **OnSuccess**: <code>[OrganizationBankAccountResponseDto](src/models/organization-bank-account-response-dto.ts)</code>
- **OnError**: throws <code>[FundingAccounts.UpdateBankAccountError](src/resources/funding-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fundingAccounts.updateBankAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrganizationBankAccountResponseDto, FundingAccounts.UpdateBankAccountError&gt;</code>, with `result.value` of type <code>[OrganizationBankAccountResponseDto](src/models/organization-bank-account-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>verifyBankAccount(request: FundingAccounts.VerifyBankAccountRequest, options?: RequestOptions): ApiPromise&lt;BankAccountVerifyResponseDto, FundingAccounts.VerifyBankAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Verify an existing bank account.

When you create a bank account, BILL sends a test ACH payment to the bank account to confirm whether the account details are accurate. Enter the test amount as the `depositAmount` value in your `POST /v3/funding-accounts/banks/{bankAccountId}/verify` request.

**Note**: Bank account verification is required in the production environment before the account can be used for other BILL operations. In the sandbox environment, set `depositAmount` as `0.50` to complete bank account verification.

The bank account `status` is set as `VERIFIED` when BILL is able to verify the `depositAmount` value. BILL sends an email notification for confirming a test transaction. When BILL cannot verify the bank account after three attempts, you cannot use the bank account. At this point, use another bank account or create a bank account with `POST /v3/funding-accounts/banks`.

After your bank account verification is complete, ensure that the current bank account user `verificationStatus` is set as `VERIFIED` before you can use the bank account. To begin the verification process, nominate a bank account user with `POST /v3/funding-accounts/banks/users/nominate`.

See Bank account setup (v3 API) in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fundingAccounts.verifyBankAccount({
    bankAccountId: "{{org_bank_account_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { depositAmount: 1.5 },
  });
  // TODO: Handle 'response' of type BankAccountVerifyResponseDto
} catch (err) {
  // TODO: Handle 'err' of type FundingAccounts.VerifyBankAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fundingAccounts
  .verifyBankAccount({
    bankAccountId: "{{org_bank_account_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { depositAmount: 1.5 },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BankAccountVerifyResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bankAccountId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[BankAccountVerifyRequestDto](src/models/bank-account-verify-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fundingAccounts.verifyBankAccount(request)`

- **OnSuccess**: <code>[BankAccountVerifyResponseDto](src/models/bank-account-verify-response-dto.ts)</code>
- **OnError**: throws <code>[FundingAccounts.VerifyBankAccountError](src/resources/funding-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fundingAccounts.verifyBankAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BankAccountVerifyResponseDto, FundingAccounts.VerifyBankAccountError&gt;</code>, with `result.value` of type <code>[BankAccountVerifyResponseDto](src/models/bank-account-verify-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Health

> Source: [Health](src/resources/health.ts)

<details>
<summary><code>getHealthCheck(options?: RequestOptions): ApiPromise&lt;HealthCheckDto, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns application health status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.health.getHealthCheck();
  // TODO: Handle 'response' of type HealthCheckDto
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
const result = await client.health.getHealthCheck().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type HealthCheckDto
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.health.getHealthCheck()`

- **OnSuccess**: <code>[HealthCheckDto](src/models/health-check-dto.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.health.getHealthCheck().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;HealthCheckDto, ApiError&gt;</code>, with `result.value` of type <code>[HealthCheckDto](src/models/health-check-dto.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Invoices

> Source: [Invoices](src/resources/invoices.ts)

<details>
<summary><code>archiveInvoice(request: Invoices.ArchiveInvoiceRequest, options?: RequestOptions): ApiPromise&lt;InvoiceResponseDto, Invoices.ArchiveInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing invoice. In the response, the `archived` field is set as `true`.

You can restore an archived invoice with `POST /v3/invoices/{invoiceId}/restore`. There is no change when you archive an archived invoice.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.archiveInvoice({
    invoiceId: "{{invoice_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type InvoiceResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Invoices.ArchiveInvoiceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invoices
  .archiveInvoice({ invoiceId: "{{invoice_id}}", sessionId: "{{session_id}}", devKey: "{{developer_key}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InvoiceResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>invoiceId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invoices.archiveInvoice(request)`

- **OnSuccess**: <code>[InvoiceResponseDto](src/models/invoice-response-dto.ts)</code>
- **OnError**: throws <code>[Invoices.ArchiveInvoiceError](src/resources/invoices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.invoices.archiveInvoice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InvoiceResponseDto, Invoices.ArchiveInvoiceError&gt;</code>, with `result.value` of type <code>[InvoiceResponseDto](src/models/invoice-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createInvoice(request: Invoices.CreateInvoiceRequest, options?: RequestOptions): ApiPromise&lt;InvoiceResponseDto, Invoices.CreateInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new invoice.

See Invoices in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.createInvoice({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { customer: {}, invoiceLineItems: [{ quantity: 1.5 }] },
  });
  // TODO: Handle 'response' of type InvoiceResponseDto
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
const result = await client.invoices
  .createInvoice({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { customer: {}, invoiceLineItems: [{ quantity: 1.5 }] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InvoiceResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[InvoiceCreateRequestDto](src/models/invoice-create-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invoices.createInvoice(request)`

- **OnSuccess**: <code>[InvoiceResponseDto](src/models/invoice-response-dto.ts)</code>
- **OnError**: throws <code>[Invoices.CreateInvoiceError](src/resources/invoices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.invoices.createInvoice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InvoiceResponseDto, Invoices.CreateInvoiceError&gt;</code>, with `result.value` of type <code>[InvoiceResponseDto](src/models/invoice-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getInvoice(request: Invoices.GetInvoiceRequest, options?: RequestOptions): ApiPromise&lt;InvoiceResponseDto, Invoices.GetInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing invoice.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.getInvoice({
    invoiceId: "{{invoice_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type InvoiceResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Invoices.GetInvoiceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invoices
  .getInvoice({ invoiceId: "{{invoice_id}}", sessionId: "{{session_id}}", devKey: "{{developer_key}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InvoiceResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>invoiceId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invoices.getInvoice(request)`

- **OnSuccess**: <code>[InvoiceResponseDto](src/models/invoice-response-dto.ts)</code>
- **OnError**: throws <code>[Invoices.GetInvoiceError](src/resources/invoices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.invoices.getInvoice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InvoiceResponseDto, Invoices.GetInvoiceError&gt;</code>, with `result.value` of type <code>[InvoiceResponseDto](src/models/invoice-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPaymentLink(request: Invoices.GetPaymentLinkRequest, options?: RequestOptions): ApiPromise&lt;InvoicePaymentLinkResponseDto, Invoices.GetPaymentLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get an invoice payment link. In the response, BILL sends you a payment link based on the provided invoice and customer information.

You can send the invoice payment link to your customer for getting paid by the customer. With this link, the customer can complete the invoice payment without the need to set up a BILL account.

When a customer payment is made with the invoice payment link, BILL sends a payment receipt to the provided email address.

**Note**: You get valid invoice payment links only for customers that are NOT connected with your organization in the BILL network.

See Invoices in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.getPaymentLink({
    invoiceId: "{{invoice_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { customerId: "some example string", email: "some example string" },
  });
  // TODO: Handle 'response' of type InvoicePaymentLinkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Invoices.GetPaymentLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invoices
  .getPaymentLink({
    invoiceId: "{{invoice_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { customerId: "some example string", email: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InvoicePaymentLinkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>invoiceId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[InvoicePaymentLinkRequestDto](src/models/invoice-payment-link-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invoices.getPaymentLink(request)`

- **OnSuccess**: <code>[InvoicePaymentLinkResponseDto](src/models/invoice-payment-link-response-dto.ts)</code>
- **OnError**: throws <code>[Invoices.GetPaymentLinkError](src/resources/invoices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.invoices.getPaymentLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InvoicePaymentLinkResponseDto, Invoices.GetPaymentLinkError&gt;</code>, with `result.value` of type <code>[InvoicePaymentLinkResponseDto](src/models/invoice-payment-link-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listInvoices(request?: Invoices.ListInvoicesRequest, options?: RequestOptions): ApiPromise&lt;ListInvoiceResponseDto, Invoices.ListInvoicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of invoice objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.listInvoices({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{invoice_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListInvoiceResponseDto
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
const result = await client.invoices
  .listInvoices({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{invoice_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListInvoiceResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max?</code> | <code>number</code> | - |
| <code>sort?</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invoices.listInvoices(request)`

- **OnSuccess**: <code>[ListInvoiceResponseDto](src/models/list-invoice-response-dto.ts)</code>
- **OnError**: throws <code>[Invoices.ListInvoicesError](src/resources/invoices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.invoices.listInvoices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListInvoiceResponseDto, Invoices.ListInvoicesError&gt;</code>, with `result.value` of type <code>[ListInvoiceResponseDto](src/models/list-invoice-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>recordInvoice(request: Invoices.RecordInvoiceRequest, options?: RequestOptions): ApiPromise&lt;RecordInvoiceResponseDto, Invoices.RecordInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Record an offline AR payment received from a customer.

An offline payment is a payment that you receive outside the BILL system. BILL simply applies the recorded payment amount to one or more invoices for the customer. Any recorded unapplied amount is an overpayment and is available as a customer credit in the BILL system.

See Recording an AR payment in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.recordInvoice({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {
      paymentDate: "2024-01-15",
      paymentType: InvoicePaymentTypeRequest.Cash,
      amount: 1.5,
      invoices: [{ id: "some example string", amount: 1.5 }],
    },
  });
  // TODO: Handle 'response' of type RecordInvoiceResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Invoices.RecordInvoiceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invoices
  .recordInvoice({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {
      paymentDate: "2024-01-15",
      paymentType: InvoicePaymentTypeRequest.Cash,
      amount: 1.5,
      invoices: [{ id: "some example string", amount: 1.5 }],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RecordInvoiceResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[RecordInvoiceRequestDto](src/models/record-invoice-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invoices.recordInvoice(request)`

- **OnSuccess**: <code>[RecordInvoiceResponseDto](src/models/record-invoice-response-dto.ts)</code>
- **OnError**: throws <code>[Invoices.RecordInvoiceError](src/resources/invoices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.invoices.recordInvoice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RecordInvoiceResponseDto, Invoices.RecordInvoiceError&gt;</code>, with `result.value` of type <code>[RecordInvoiceResponseDto](src/models/record-invoice-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>replaceInvoice(request: Invoices.ReplaceInvoiceRequest, options?: RequestOptions): ApiPromise&lt;InvoiceResponseDto, Invoices.ReplaceInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the number of line items in an invoice. You can also update other invoice details.

You can use the PUT operation to add, remove, or replace the number of line items in an invoice. A set of rules apply with the PUT operation.
* When you add a new line item, a new line item `id` is generated in the invoice.
* When you omit an existing line item `id`, the line item is removed from the invoice.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.replaceInvoice({
    invoiceId: "{{invoice_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { customer: {}, invoiceLineItems: [{ quantity: 1.5 }] },
  });
  // TODO: Handle 'response' of type InvoiceResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Invoices.ReplaceInvoiceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invoices
  .replaceInvoice({
    invoiceId: "{{invoice_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { customer: {}, invoiceLineItems: [{ quantity: 1.5 }] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InvoiceResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>invoiceId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[InvoiceReplaceRequestDto](src/models/invoice-replace-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invoices.replaceInvoice(request)`

- **OnSuccess**: <code>[InvoiceResponseDto](src/models/invoice-response-dto.ts)</code>
- **OnError**: throws <code>[Invoices.ReplaceInvoiceError](src/resources/invoices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.invoices.replaceInvoice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InvoiceResponseDto, Invoices.ReplaceInvoiceError&gt;</code>, with `result.value` of type <code>[InvoiceResponseDto](src/models/invoice-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>restoreInvoice(request: Invoices.RestoreInvoiceRequest, options?: RequestOptions): ApiPromise&lt;InvoiceResponseDto, Invoices.RestoreInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived invoice. In the response, the `archived` field is set as `false`.

You can perform any valid BILL operation on restored invoices. There is no change when you restore a restored invoice.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.restoreInvoice({
    invoiceId: "{{invoice_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type InvoiceResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Invoices.RestoreInvoiceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invoices
  .restoreInvoice({ invoiceId: "{{invoice_id}}", sessionId: "{{session_id}}", devKey: "{{developer_key}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InvoiceResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>invoiceId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invoices.restoreInvoice(request)`

- **OnSuccess**: <code>[InvoiceResponseDto](src/models/invoice-response-dto.ts)</code>
- **OnError**: throws <code>[Invoices.RestoreInvoiceError](src/resources/invoices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.invoices.restoreInvoice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InvoiceResponseDto, Invoices.RestoreInvoiceError&gt;</code>, with `result.value` of type <code>[InvoiceResponseDto](src/models/invoice-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sendInvoice(request: Invoices.SendInvoiceRequest, options?: RequestOptions): ApiPromise&lt;undefined, Invoices.SendInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send an invoice to a customer email address. You can send the invoice to multiple email addresses.

See Invoices in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.invoices.sendInvoice({
    invoiceId: "{{invoice_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { replyTo: { userId: "some example string" }, recipient: { to: ["some example string"] } },
  });
} catch (err) {
  // TODO: Handle 'err' of type Invoices.SendInvoiceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invoices
  .sendInvoice({
    invoiceId: "{{invoice_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { replyTo: { userId: "some example string" }, recipient: { to: ["some example string"] } },
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
| <code>invoiceId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[SendInvoiceRequestDto](src/models/send-invoice-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invoices.sendInvoice(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Invoices.SendInvoiceError](src/resources/invoices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.invoices.sendInvoice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Invoices.SendInvoiceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateInvoice(request: Invoices.UpdateInvoiceRequest, options?: RequestOptions): ApiPromise&lt;InvoiceResponseDto, Invoices.UpdateInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an invoice line item. You can also update other invoice details.

You can use the PATCH operation to modify line item details, such as `amount`, `quantity`, and `description`. The invoice line item `id` does not change with a PATCH operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.updateInvoice({
    invoiceId: "{{invoice_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  });
  // TODO: Handle 'response' of type InvoiceResponseDto
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
const result = await client.invoices
  .updateInvoice({
    invoiceId: "{{invoice_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InvoiceResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>invoiceId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[InvoiceUpdateRequestDto](src/models/invoice-update-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invoices.updateInvoice(request)`

- **OnSuccess**: <code>[InvoiceResponseDto](src/models/invoice-response-dto.ts)</code>
- **OnError**: throws <code>[Invoices.UpdateInvoiceError](src/resources/invoices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.invoices.updateInvoice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InvoiceResponseDto, Invoices.UpdateInvoiceError&gt;</code>, with `result.value` of type <code>[InvoiceResponseDto](src/models/invoice-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Mfa

> Source: [Mfa](src/resources/mfa.ts)

<details>
<summary><code>generateChallenge(request: Mfa.GenerateChallengeRequest, options?: RequestOptions): ApiPromise&lt;MfaChallengeResponseDto, Mfa.GenerateChallengeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate an MFA challenge ID for creating an MFA-trusted API sign in session.

In the response, a `challengeId` is generated and a six-digit `token` is sent to the phone number that was registered with MFA setup.

After you generate a challenge ID (with `POST /v3/mfa/challenge`), complete your MFA sign in by validating the MFA challenge (with `POST /v3/mfa/challenge/validate`). At this point, your API session is MFA trusted.

There are two stages in the BILL MFA process.
1. **MFA setup**: Add a valid phone number for setting up MFA in the organization (with `POST /v3/mfa/setup`), and then complete the setup by validating the entered phone number (with `POST /v3/mfa/validate`). At this point, the phone number is registered for the MFA sign in operation.
2. **MFA sign in**: Generate an MFA challenge (with `POST /v3/mfa/challenge`), and then complete MFA sign in by validating the MFA challenge (with `POST /v3/mfa/challenge/validate`). At this point, your API session is MFA trusted.

**Note**: In the production environment, BILL requires an MFA-trusted API session for a set of API operations.
* Enable vendor `autoPay`
* Enable recurring bill `autoPayment`
* Create a payment or bulk payment
* Create a bank account in a BILL organization
* Reset MFA (Complete MFA setup and MFA sign-in again)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mfa.generateChallenge({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  });
  // TODO: Handle 'response' of type MfaChallengeResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Mfa.GenerateChallengeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mfa
  .generateChallenge({ sessionId: "{{session_id}}", devKey: "{{developer_key}}", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MfaChallengeResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[MfaChallengeRequestDto](src/models/mfa-challenge-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mfa.generateChallenge(request)`

- **OnSuccess**: <code>[MfaChallengeResponseDto](src/models/mfa-challenge-response-dto.ts)</code>
- **OnError**: throws <code>[Mfa.GenerateChallengeError](src/resources/mfa.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.mfa.generateChallenge(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MfaChallengeResponseDto, Mfa.GenerateChallengeError&gt;</code>, with `result.value` of type <code>[MfaChallengeResponseDto](src/models/mfa-challenge-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMfaPhones(request?: Mfa.ListMfaPhonesRequest, options?: RequestOptions): ApiPromise&lt;ListMfaPhoneResponseDto, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of phone numbers that have been added for setting up MFA in the current organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mfa.listMfaPhones({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListMfaPhoneResponseDto
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
const result = await client.mfa
  .listMfaPhones({ sessionId: "{{session_id}}", devKey: "{{developer_key}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListMfaPhoneResponseDto
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
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mfa.listMfaPhones(request)`

- **OnSuccess**: <code>[ListMfaPhoneResponseDto](src/models/list-mfa-phone-response-dto.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.mfa.listMfaPhones(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListMfaPhoneResponseDto, ApiError&gt;</code>, with `result.value` of type <code>[ListMfaPhoneResponseDto](src/models/list-mfa-phone-response-dto.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setup(request: Mfa.SetupRequest, options?: RequestOptions): ApiPromise&lt;MfaSetupResponseDto, Mfa.SetupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a valid phone number for setting up MFA in the current organization.

In the response, a `setupId` is generated and a six-digit `token` is sent to the phone number. After you add a phone number (with `POST /v3/mfa/setup`), complete the MFA setup by validating the entered phone number (with `POST /v3/mfa/validate`). At this point, the phone number is registered for the MFA sign in operation.

There are two stages in the BILL MFA process.
1. **MFA setup**: Add a valid phone number for setting up MFA in the organization (with `POST /v3/mfa/setup`), and then complete the setup by validating the entered phone number (with `POST /v3/mfa/validate`). At this point, the phone number is registered for the MFA sign in operation.
2. **MFA sign in**: Generate an MFA challenge (with `POST /v3/mfa/challenge`), and then complete MFA sign in by validating the MFA challenge (with `POST /v3/mfa/challenge/validate`). At this point, your API session is MFA trusted.

**Note**: In the production environment, BILL requires an MFA-trusted API session for a set of API operations.
* Enable vendor `autoPay`
* Enable recurring bill `autoPayment`
* Create a payment or bulk payment
* Create a bank account in a BILL organization
* Reset MFA (Complete MFA setup and MFA sign-in again)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mfa.setup({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { phone: "some example string", type: MfaSetupType.Voice },
  });
  // TODO: Handle 'response' of type MfaSetupResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Mfa.SetupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mfa
  .setup({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { phone: "some example string", type: MfaSetupType.Voice },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MfaSetupResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[MfaSetupRequestDto](src/models/mfa-setup-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mfa.setup(request)`

- **OnSuccess**: <code>[MfaSetupResponseDto](src/models/mfa-setup-response-dto.ts)</code>
- **OnError**: throws <code>[Mfa.SetupError](src/resources/mfa.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.mfa.setup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MfaSetupResponseDto, Mfa.SetupError&gt;</code>, with `result.value` of type <code>[MfaSetupResponseDto](src/models/mfa-setup-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stepUpSession(request: Mfa.StepUpSessionRequest, options?: RequestOptions): ApiPromise&lt;MfaStepUpResponseDto, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set your current API session as MFA trusted.

Ideally, when you sign in with `POST /v3/login`, set `rememberMeId` and `device` in your request to generate an MFA-trusted API session.

In case you sign in without `rememberMeId` and `device` in your request, you can use this `POST /v3/mfa/step-up` endpoint to mark the current API session as MFA trusted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mfa.stepUpSession({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  });
  // TODO: Handle 'response' of type MfaStepUpResponseDto
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
const result = await client.mfa
  .stepUpSession({ sessionId: "{{session_id}}", devKey: "{{developer_key}}", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MfaStepUpResponseDto
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
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[MfaStepUpRequestDto](src/models/mfa-step-up-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mfa.stepUpSession(request)`

- **OnSuccess**: <code>[MfaStepUpResponseDto](src/models/mfa-step-up-response-dto.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.mfa.stepUpSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MfaStepUpResponseDto, ApiError&gt;</code>, with `result.value` of type <code>[MfaStepUpResponseDto](src/models/mfa-step-up-response-dto.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>validate(request: Mfa.ValidateRequest, options?: RequestOptions): ApiPromise&lt;StatusDto, Mfa.ValidateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validate the phone number for setting up MFA in the current organization. This validation requires the `setupId` and `token` from `POST /v3/mfa/setup`.

After the validation is complete, the phone number is registered for the MFA sign in operation.

There are two stages in the BILL MFA process.
1. **MFA setup**: Add a valid phone number for setting up MFA in the organization (with `POST /v3/mfa/setup`), and then complete the setup by validating the entered phone number (with `POST /v3/mfa/validate`). At this point, the phone number is registered for the MFA sign in operation.
2. **MFA sign in**: Generate an MFA challenge (with `POST /v3/mfa/challenge`), and then complete MFA sign in by validating the MFA challenge (with `POST /v3/mfa/challenge/validate`). At this point, your API session is MFA trusted.

**Note**: In the production environment, BILL requires an MFA-trusted API session for a set of API operations.
* Enable vendor `autoPay`
* Enable recurring bill `autoPayment`
* Create a payment or bulk payment
* Create a bank account in a BILL organization
* Reset MFA (Complete MFA setup and MFA sign-in again)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mfa.validate({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { setupId: "some example string", type: MfaSetupType.Voice, token: "some example string" },
  });
  // TODO: Handle 'response' of type StatusDto
} catch (err) {
  // TODO: Handle 'err' of type Mfa.ValidateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mfa
  .validate({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { setupId: "some example string", type: MfaSetupType.Voice, token: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StatusDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[MfaSetupValidateRequestDto](src/models/mfa-setup-validate-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mfa.validate(request)`

- **OnSuccess**: <code>[StatusDto](src/models/status-dto.ts)</code>
- **OnError**: throws <code>[Mfa.ValidateError](src/resources/mfa.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.mfa.validate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StatusDto, Mfa.ValidateError&gt;</code>, with `result.value` of type <code>[StatusDto](src/models/status-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>validateChallenge(request: Mfa.ValidateChallengeRequest, options?: RequestOptions): ApiPromise&lt;MfaChallengeValidateResponseDto, Mfa.ValidateChallengeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validate the MFA challenge for creating an MFA-trusted API sign in session. This validation requires the `challengeId` and `token` from `POST /v3/mfa/challenge`.

After the validation is complete, your API session is MFA trusted.

There are two stages in the BILL MFA process.
1. **MFA setup**: Add a valid phone number for setting up MFA in the organization (with `POST /v3/mfa/setup`), and then complete the setup by validating the entered phone number (with `POST /v3/mfa/validate`). At this point, the phone number is registered for the MFA sign in operation.
2. **MFA sign in**: Generate an MFA challenge (with `POST /v3/mfa/challenge`), and then complete MFA sign in by validating the MFA challenge (with `POST /v3/mfa/challenge/validate`). At this point, your API session is MFA trusted.

**Note**: In the production environment, BILL requires an MFA-trusted API session for a set of API operations.
* Enable vendor `autoPay`
* Enable recurring bill `autoPayment`
* Create a payment or bulk payment
* Create a bank account for a BILL organization
* Reset MFA (Complete MFA setup and MFA sign-in again)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mfa.validateChallenge({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { challengeId: "some example string", token: "some example string" },
  });
  // TODO: Handle 'response' of type MfaChallengeValidateResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Mfa.ValidateChallengeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mfa
  .validateChallenge({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { challengeId: "some example string", token: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MfaChallengeValidateResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[MfaChallengeValidateRequestDto](src/models/mfa-challenge-validate-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mfa.validateChallenge(request)`

- **OnSuccess**: <code>[MfaChallengeValidateResponseDto](src/models/mfa-challenge-validate-response-dto.ts)</code>
- **OnError**: throws <code>[Mfa.ValidateChallengeError](src/resources/mfa.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.mfa.validateChallenge(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MfaChallengeValidateResponseDto, Mfa.ValidateChallengeError&gt;</code>, with `result.value` of type <code>[MfaChallengeValidateResponseDto](src/models/mfa-challenge-validate-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## NetworkApi

> Source: [NetworkApi](src/resources/network-api.ts)

<details>
<summary><code>acceptInvitation(request: NetworkApi.AcceptInvitationRequest, options?: RequestOptions): ApiPromise&lt;undefined, NetworkApi.AcceptInvitationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Accept a connection request sent by a vendor or customer.

The organization receiving the connection request must have auto-connections disabled. If auto-connections are not disabled, BILL automatically connects the organizations in the BILL Network.

When the invitation is accepted, BILL connects the two organizations in the BILL Network.

See BILL Network in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.networkApi.acceptInvitation({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { networkId: "some example string", type: AcceptInviteType.Vendor },
  });
} catch (err) {
  // TODO: Handle 'err' of type NetworkApi.AcceptInvitationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.networkApi
  .acceptInvitation({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { networkId: "some example string", type: AcceptInviteType.Vendor },
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
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[AcceptInvitationRequestDto](src/models/accept-invitation-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.networkApi.acceptInvitation(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[NetworkApi.AcceptInvitationError](src/resources/network-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.networkApi.acceptInvitation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, NetworkApi.AcceptInvitationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createCustomerInvitation(request: NetworkApi.CreateCustomerInvitationRequest, options?: RequestOptions): ApiPromise&lt;undefined, NetworkApi.CreateCustomerInvitationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a connection request to a customer organization in the BILL Network. BILL automatically connects the customer organization with the customer record in your BILL organization.

If the customer organization has auto-connections disabled, BILL sends an invitation email to the customer email address. When the customer accepts the invitation, BILL connects the customer organization with the customer record in your BILL organization.

If the customer does not respond, you can delete the connection request (with `DELETE /v3/network/invitation/customer/{customerId}`) before sending a new connection request.

**Note**: If the customer does not respond to a connection request for 60 days, the request expires.

See BILL Network in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.networkApi.createCustomerInvitation({
    customerId: "{{customer_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { networkId: "some example string", networkType: NetworkType.Bill },
  });
} catch (err) {
  // TODO: Handle 'err' of type NetworkApi.CreateCustomerInvitationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.networkApi
  .createCustomerInvitation({
    customerId: "{{customer_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { networkId: "some example string", networkType: NetworkType.Bill },
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
| <code>customerId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[CreateInvitationRequestDto](src/models/create-invitation-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.networkApi.createCustomerInvitation(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[NetworkApi.CreateCustomerInvitationError](src/resources/network-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.networkApi.createCustomerInvitation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, NetworkApi.CreateCustomerInvitationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createVendorInvitation(request: NetworkApi.CreateVendorInvitationRequest, options?: RequestOptions): ApiPromise&lt;undefined, NetworkApi.CreateVendorInvitationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a connection request to a vendor organization in the BILL Network. BILL automatically connects the vendor organization with the vendor record in your BILL organization.

If the vendor organization has auto-connections disabled, BILL sends an invitation email to the vendor email address. When the vendor accepts the invitation, BILL connects the vendor organization with the vendor record in your BILL organization.

If the vendor does not respond, you can delete the connection request (with `DELETE /v3/network/invitation/vendor/{vendorId}`) before sending a new connection request.

**Note**: If the vendor does not respond to the connection request for 60 days, the request expires.

See BILL Network in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.networkApi.createVendorInvitation({
    vendorId: "{{vendor_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { networkId: "some example string", networkType: NetworkType.Bill },
  });
} catch (err) {
  // TODO: Handle 'err' of type NetworkApi.CreateVendorInvitationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.networkApi
  .createVendorInvitation({
    vendorId: "{{vendor_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { networkId: "some example string", networkType: NetworkType.Bill },
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
| <code>vendorId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[CreateInvitationRequestDto](src/models/create-invitation-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.networkApi.createVendorInvitation(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[NetworkApi.CreateVendorInvitationError](src/resources/network-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.networkApi.createVendorInvitation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, NetworkApi.CreateVendorInvitationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCustomerInvitation(request: NetworkApi.DeleteCustomerInvitationRequest, options?: RequestOptions): ApiPromise&lt;undefined, NetworkApi.DeleteCustomerInvitationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an existing Network connection with a customer organization. Delete customer connection follows a set of rules.
* **No scheduled payments**: There should be no scheduled payments. All scheduled payments must be canceled before you can disconnect.
* **No in-process payments**: There should be no in-progress payments. All in-progress payments must clear before you can disconnect.

You can use this endpoint to cancel a pending connection request sent to a customer that has auto-connections disabled. You can send a new connection request after an existing connection or connection request is canceled.

**Note**: If the customer does not respond to a connection request for 60 days, the request expires.

See BILL Network in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.networkApi.deleteCustomerInvitation({
    customerId: "{{customer_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
} catch (err) {
  // TODO: Handle 'err' of type NetworkApi.DeleteCustomerInvitationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.networkApi
  .deleteCustomerInvitation({
    customerId: "{{customer_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
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
| <code>customerId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.networkApi.deleteCustomerInvitation(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[NetworkApi.DeleteCustomerInvitationError](src/resources/network-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.networkApi.deleteCustomerInvitation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, NetworkApi.DeleteCustomerInvitationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteVendorInvitation(request: NetworkApi.DeleteVendorInvitationRequest, options?: RequestOptions): ApiPromise&lt;undefined, NetworkApi.DeleteVendorInvitationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an existing Network connection with a vendor organization. Delete vendor connection follows a set of rules.
* **No scheduled payments**: There should be no scheduled payments. All scheduled payments must be canceled before you can disconnect.
* **No in-process payments**: There should be no in-progress payments. All in-progress payments must clear before you can disconnect.

You can use this endpoint to cancel a pending connection request sent to a vendor that has auto-connections disabled. You can send a new connection request after an existing connection or connection request is canceled.

**Note**: If the vendor does not respond to a connection request for 60 days, the request expires.

See BILL Network in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.networkApi.deleteVendorInvitation({
    vendorId: "{{vendor_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
} catch (err) {
  // TODO: Handle 'err' of type NetworkApi.DeleteVendorInvitationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.networkApi
  .deleteVendorInvitation({
    vendorId: "{{vendor_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
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
| <code>vendorId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.networkApi.deleteVendorInvitation(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[NetworkApi.DeleteVendorInvitationError](src/resources/network-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.networkApi.deleteVendorInvitation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, NetworkApi.DeleteVendorInvitationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCustomerInvitation(request: NetworkApi.GetCustomerInvitationRequest, options?: RequestOptions): ApiPromise&lt;GetInvitationResponseDto, NetworkApi.GetCustomerInvitationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the status of an existing connection request sent with `POST /v3/network/invitation/customer/{customerId}`.

When you send a connection request to a customer organization that has auto-connections enabled, BILL automatically connects you with the organization. If the organization has auto-connections disabled, the connection request status changes when the customer accepts the request.

**Note**: If the customer does not respond to the connection request for 60 days, the request expires.

See BILL Network in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.networkApi.getCustomerInvitation({
    customerId: "{{customer_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type GetInvitationResponseDto
} catch (err) {
  // TODO: Handle 'err' of type NetworkApi.GetCustomerInvitationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.networkApi
  .getCustomerInvitation({
    customerId: "{{customer_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetInvitationResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.networkApi.getCustomerInvitation(request)`

- **OnSuccess**: <code>[GetInvitationResponseDto](src/models/get-invitation-response-dto.ts)</code>
- **OnError**: throws <code>[NetworkApi.GetCustomerInvitationError](src/resources/network-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.networkApi.getCustomerInvitation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetInvitationResponseDto, NetworkApi.GetCustomerInvitationError&gt;</code>, with `result.value` of type <code>[GetInvitationResponseDto](src/models/get-invitation-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVendorInvitation(request: NetworkApi.GetVendorInvitationRequest, options?: RequestOptions): ApiPromise&lt;GetInvitationResponseDto, NetworkApi.GetVendorInvitationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the status of an existing connection request sent with `POST /v3/network/invitation/vendor/{vendorId}`.

When you send a connection request to a vendor organization that has auto-connections enabled, BILL automatically connects you with the organization. If the organization has auto-connections disabled, the connection request status changes when the vendor accepts the request.

**Note**: If the vendor does not respond to the connection request for 60 days, the request expires.

See BILL Network in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.networkApi.getVendorInvitation({
    vendorId: "{{vendor_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type GetInvitationResponseDto
} catch (err) {
  // TODO: Handle 'err' of type NetworkApi.GetVendorInvitationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.networkApi
  .getVendorInvitation({
    vendorId: "{{vendor_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetInvitationResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendorId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.networkApi.getVendorInvitation(request)`

- **OnSuccess**: <code>[GetInvitationResponseDto](src/models/get-invitation-response-dto.ts)</code>
- **OnError**: throws <code>[NetworkApi.GetVendorInvitationError](src/resources/network-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.networkApi.getVendorInvitation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetInvitationResponseDto, NetworkApi.GetVendorInvitationError&gt;</code>, with `result.value` of type <code>[GetInvitationResponseDto](src/models/get-invitation-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>inviteVendorNotInBillNetwork(request: NetworkApi.InviteVendorNotInBillNetworkRequest, options?: RequestOptions): ApiPromise&lt;undefined, NetworkApi.InviteVendorNotInBillNetworkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a connection request to a vendor not in the BILL Network.

BILL sends an invitation email to the provided vendor email address. When the vendor accepts the invitation and sets up a BILL account, BILL connects the vendor organization with the vendor record in your BILL organization.

**Note**:
* The vendor organization must exist before BILL can send an invitation email.
* If the vendor does not respond to a connection request for 60 days, the request expires.

See BILL Network in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.networkApi.inviteVendorNotInBillNetwork({
    vendorId: "{{vendor_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { email: "some example string" },
  });
} catch (err) {
  // TODO: Handle 'err' of type NetworkApi.InviteVendorNotInBillNetworkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.networkApi
  .inviteVendorNotInBillNetwork({
    vendorId: "{{vendor_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { email: "some example string" },
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
| <code>vendorId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[InviteVendorNotInBillNetworkRequestDto](src/models/invite-vendor-not-in-bill-network-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.networkApi.inviteVendorNotInBillNetwork(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[NetworkApi.InviteVendorNotInBillNetworkError](src/resources/network-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.networkApi.inviteVendorNotInBillNetwork(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, NetworkApi.InviteVendorNotInBillNetworkError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>search(request: NetworkApi.SearchRequest, options?: RequestOptions): ApiPromise&lt;NetworkSearchResponseDto, NetworkApi.SearchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for a customer, vendor, or verified national vendor organization. You can search in the BILL Network and verified national vendor (`RPPS`) network.

When you search in the BILL Network, there are two `name` requirements for getting search results.
* Your search term must have a minimum of three characters.
* Your search term must be a complete word. You will not get search results when your search term is a partial word.

When you search in the verified national vendor (`RPPS`) network, search results are based on both a complete and partial match on `name` and `zipOrPostalCode`. You can further filter your search by the billing statement `accountNumber` with the vendor. For example, your Verizon internet bill account number.

See BILL Network in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.networkApi.search({
    name: "{{network_vendor_name}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type NetworkSearchResponseDto
} catch (err) {
  // TODO: Handle 'err' of type NetworkApi.SearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.networkApi
  .search({ name: "{{network_vendor_name}}", sessionId: "{{session_id}}", devKey: "{{developer_key}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NetworkSearchResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>string</code> | - |
| <code>scope?</code> | <code>[ScopeType](src/models/scope-type.ts)</code> | - |
| <code>zipOrPostalCode?</code> | <code>string</code> | - |
| <code>accountNumber?</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.networkApi.search(request)`

- **OnSuccess**: <code>[NetworkSearchResponseDto](src/models/network-search-response-dto.ts)</code>
- **OnError**: throws <code>[NetworkApi.SearchError](src/resources/network-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.networkApi.search(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NetworkSearchResponseDto, NetworkApi.SearchError&gt;</code>, with `result.value` of type <code>[NetworkSearchResponseDto](src/models/network-search-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## OrganizationUsers

> Source: [OrganizationUsers](src/resources/organization-users.ts)

<details>
<summary><code>archiveOrganizationUser(request: OrganizationUsers.ArchiveOrganizationUserRequest, options?: RequestOptions): ApiPromise&lt;OrganizationUserResponseDto, OrganizationUsers.ArchiveOrganizationUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing user. In the response, the `archived` field is set as `true`."

You can restore an archived user with `POST /v3/users/{userId}/restore`. There is no change when you archive an archived user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizationUsers.archiveOrganizationUser({
    userId: "{{org_user_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type OrganizationUserResponseDto
} catch (err) {
  // TODO: Handle 'err' of type OrganizationUsers.ArchiveOrganizationUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizationUsers
  .archiveOrganizationUser({
    userId: "{{org_user_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrganizationUserResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizationUsers.archiveOrganizationUser(request)`

- **OnSuccess**: <code>[OrganizationUserResponseDto](src/models/organization-user-response-dto.ts)</code>
- **OnError**: throws <code>[OrganizationUsers.ArchiveOrganizationUserError](src/resources/organization-users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizationUsers.archiveOrganizationUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrganizationUserResponseDto, OrganizationUsers.ArchiveOrganizationUserError&gt;</code>, with `result.value` of type <code>[OrganizationUserResponseDto](src/models/organization-user-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createOrganizationUser(request: OrganizationUsers.CreateOrganizationUserRequest, options?: RequestOptions): ApiPromise&lt;OrganizationUserResponseDto, OrganizationUsers.CreateOrganizationUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new user. The currently signed-in user must have the `ADMINISTRATOR` user role in the BILL organization to perform this operation.

When you create a user, BILL sends an email to the user for them to complete their sign-up. After user sign-up is complete, the user can access features in your BILL organization depending on the user role.

See Organizations and Users in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizationUsers.createOrganizationUser({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {
      firstName: "some example string",
      lastName: "some example string",
      email: "some example string",
      roleId: "some example string",
      acceptTermsOfService: true,
    },
  });
  // TODO: Handle 'response' of type OrganizationUserResponseDto
} catch (err) {
  // TODO: Handle 'err' of type OrganizationUsers.CreateOrganizationUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizationUsers
  .createOrganizationUser({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {
      firstName: "some example string",
      lastName: "some example string",
      email: "some example string",
      roleId: "some example string",
      acceptTermsOfService: true,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrganizationUserResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[OrganizationUserCreateRequestDto](src/models/organization-user-create-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizationUsers.createOrganizationUser(request)`

- **OnSuccess**: <code>[OrganizationUserResponseDto](src/models/organization-user-response-dto.ts)</code>
- **OnError**: throws <code>[OrganizationUsers.CreateOrganizationUserError](src/resources/organization-users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizationUsers.createOrganizationUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrganizationUserResponseDto, OrganizationUsers.CreateOrganizationUserError&gt;</code>, with `result.value` of type <code>[OrganizationUserResponseDto](src/models/organization-user-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOrganizationUser(request: OrganizationUsers.GetOrganizationUserRequest, options?: RequestOptions): ApiPromise&lt;OrganizationUserResponseDto, OrganizationUsers.GetOrganizationUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizationUsers.getOrganizationUser({
    userId: "{{org_user_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type OrganizationUserResponseDto
} catch (err) {
  // TODO: Handle 'err' of type OrganizationUsers.GetOrganizationUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizationUsers
  .getOrganizationUser({
    userId: "{{org_user_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrganizationUserResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizationUsers.getOrganizationUser(request)`

- **OnSuccess**: <code>[OrganizationUserResponseDto](src/models/organization-user-response-dto.ts)</code>
- **OnError**: throws <code>[OrganizationUsers.GetOrganizationUserError](src/resources/organization-users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizationUsers.getOrganizationUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrganizationUserResponseDto, OrganizationUsers.GetOrganizationUserError&gt;</code>, with `result.value` of type <code>[OrganizationUserResponseDto](src/models/organization-user-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listOrganizationUsers(request?: OrganizationUsers.ListOrganizationUsersRequest, options?: RequestOptions): ApiPromise&lt;ListResponseDtoOrganizationUserResponseDto, OrganizationUsers.ListOrganizationUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of user objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizationUsers.listOrganizationUsers({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{org_user_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListResponseDtoOrganizationUserResponseDto
} catch (err) {
  // TODO: Handle 'err' of type OrganizationUsers.ListOrganizationUsersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizationUsers
  .listOrganizationUsers({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{org_user_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseDtoOrganizationUserResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max?</code> | <code>number</code> | - |
| <code>sort?</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizationUsers.listOrganizationUsers(request)`

- **OnSuccess**: <code>[ListResponseDtoOrganizationUserResponseDto](src/models/list-response-dto-organization-user-response-dto.ts)</code>
- **OnError**: throws <code>[OrganizationUsers.ListOrganizationUsersError](src/resources/organization-users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizationUsers.listOrganizationUsers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseDtoOrganizationUserResponseDto, OrganizationUsers.ListOrganizationUsersError&gt;</code>, with `result.value` of type <code>[ListResponseDtoOrganizationUserResponseDto](src/models/list-response-dto-organization-user-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>restoreOrganizationUser(request: OrganizationUsers.RestoreOrganizationUserRequest, options?: RequestOptions): ApiPromise&lt;OrganizationUserResponseDto, OrganizationUsers.RestoreOrganizationUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived user. In the response, the `archived` field is set as `false`.

You can perform any valid BILL operation on restored users. There is no change when you restore a restored user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizationUsers.restoreOrganizationUser({
    userId: "{{org_user_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type OrganizationUserResponseDto
} catch (err) {
  // TODO: Handle 'err' of type OrganizationUsers.RestoreOrganizationUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizationUsers
  .restoreOrganizationUser({
    userId: "{{org_user_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrganizationUserResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizationUsers.restoreOrganizationUser(request)`

- **OnSuccess**: <code>[OrganizationUserResponseDto](src/models/organization-user-response-dto.ts)</code>
- **OnError**: throws <code>[OrganizationUsers.RestoreOrganizationUserError](src/resources/organization-users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizationUsers.restoreOrganizationUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrganizationUserResponseDto, OrganizationUsers.RestoreOrganizationUserError&gt;</code>, with `result.value` of type <code>[OrganizationUserResponseDto](src/models/organization-user-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateOrganizationUser(request: OrganizationUsers.UpdateOrganizationUserRequest, options?: RequestOptions): ApiPromise&lt;OrganizationUserResponseDto, OrganizationUsers.UpdateOrganizationUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizationUsers.updateOrganizationUser({
    userId: "{{org_user_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  });
  // TODO: Handle 'response' of type OrganizationUserResponseDto
} catch (err) {
  // TODO: Handle 'err' of type OrganizationUsers.UpdateOrganizationUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizationUsers
  .updateOrganizationUser({
    userId: "{{org_user_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrganizationUserResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[OrganizationUserUpdateRequestDto](src/models/organization-user-update-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizationUsers.updateOrganizationUser(request)`

- **OnSuccess**: <code>[OrganizationUserResponseDto](src/models/organization-user-response-dto.ts)</code>
- **OnError**: throws <code>[OrganizationUsers.UpdateOrganizationUserError](src/resources/organization-users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizationUsers.updateOrganizationUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrganizationUserResponseDto, OrganizationUsers.UpdateOrganizationUserError&gt;</code>, with `result.value` of type <code>[OrganizationUserResponseDto](src/models/organization-user-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Organizations

> Source: [Organizations](src/resources/organizations.ts)

<details>
<summary><code>getBillingStatementDetail(request: Organizations.GetBillingStatementDetailRequest, options?: RequestOptions): ApiPromise&lt;BillingStatementDetailResponseDto, Organizations.GetBillingStatementDetailError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about a billing statement for the organization. BILL generates a monthly billing invoice statement for all the billing activities in the organization.

From the response, use `downloadLink` in a GET request to download a billing statement.

```
curl '{downloadLink}' --header 'sessionId: {session_id}' --output {statement_name}
```

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizations.getBillingStatementDetail({
    organizationId: "{{organization_id}}",
    billingStatementId: "{{billing_statement_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type BillingStatementDetailResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Organizations.GetBillingStatementDetailError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizations
  .getBillingStatementDetail({
    organizationId: "{{organization_id}}",
    billingStatementId: "{{billing_statement_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BillingStatementDetailResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organizationId</code> | <code>string</code> | - |
| <code>billingStatementId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizations.getBillingStatementDetail(request)`

- **OnSuccess**: <code>[BillingStatementDetailResponseDto](src/models/billing-statement-detail-response-dto.ts)</code>
- **OnError**: throws <code>[Organizations.GetBillingStatementDetailError](src/resources/organizations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizations.getBillingStatementDetail(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BillingStatementDetailResponseDto, Organizations.GetBillingStatementDetailError&gt;</code>, with `result.value` of type <code>[BillingStatementDetailResponseDto](src/models/billing-statement-detail-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOrganization(request: Organizations.GetOrganizationRequest, options?: RequestOptions): ApiPromise&lt;OrganizationResponseDto, Organizations.GetOrganizationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing organization. The currently signed-in user must have the `ADMINISTRATOR` user role in the BILL organization to perform this operation.

See Organizations and Users in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizations.getOrganization({
    organizationId: "{{organization_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type OrganizationResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Organizations.GetOrganizationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizations
  .getOrganization({
    organizationId: "{{organization_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrganizationResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organizationId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizations.getOrganization(request)`

- **OnSuccess**: <code>[OrganizationResponseDto](src/models/organization-response-dto.ts)</code>
- **OnError**: throws <code>[Organizations.GetOrganizationError](src/resources/organizations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizations.getOrganization(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrganizationResponseDto, Organizations.GetOrganizationError&gt;</code>, with `result.value` of type <code>[OrganizationResponseDto](src/models/organization-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPricePlan(request: Organizations.GetPricePlanRequest, options?: RequestOptions): ApiPromise&lt;PricePlanResponseDto, Organizations.GetPricePlanError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the BILL price plan details for an existing organization. The currently signed-in user must have the `ADMINISTRATOR` user role in the BILL organization to perform this operation.

A BILL price plan for an organization provides a range of information, including monthly subscription fees and the terms and conditions for additional charges in the price plan.

In the response, the `planTerms` object includes information about charges for price plan features based on a combination of charge `tier`, `quantity`, and `price`. We explain plan terms with an example.
* If `"tier": 1`, `"quantity": 5`, and `"price": 10`, the first 5 users will be charged $10 each.
* If `"tier": 2`, `"quantity": 10`, and `"price": 8`, the next 10 users will be charged $8 each. At this level, if there is no `tier` information, all users after tier 1 will be charged $8 each.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizations.getPricePlan({
    organizationId: "{{organization_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type PricePlanResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Organizations.GetPricePlanError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizations
  .getPricePlan({
    organizationId: "{{organization_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PricePlanResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organizationId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizations.getPricePlan(request)`

- **OnSuccess**: <code>[PricePlanResponseDto](src/models/price-plan-response-dto.ts)</code>
- **OnError**: throws <code>[Organizations.GetPricePlanError](src/resources/organizations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizations.getPricePlan(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PricePlanResponseDto, Organizations.GetPricePlanError&gt;</code>, with `result.value` of type <code>[PricePlanResponseDto](src/models/price-plan-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBillingStatements(request: Organizations.ListBillingStatementsRequest, options?: RequestOptions): ApiPromise&lt;ListResponseDtoBillingStatementResponseDto, Organizations.ListBillingStatementsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of billing statements for the organization. BILL generates a monthly billing invoice statement for all the billing activities in the organization.

In the request, set `invoiceDateFrom` and `invoiceDateTo` to get the billing invoice statements for the specified date range.

You can set `max` and `page` in the request only when both `invoiceDateFrom` and `invoiceDateTo` are not set. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizations.listBillingStatements({
    organizationId: "{{organization_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListResponseDtoBillingStatementResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Organizations.ListBillingStatementsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizations
  .listBillingStatements({
    organizationId: "{{organization_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseDtoBillingStatementResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organizationId</code> | <code>string</code> | - |
| <code>max?</code> | <code>number</code> | - |
| <code>invoiceDateFrom?</code> | <code>string</code> | - |
| <code>invoiceDateTo?</code> | <code>string</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizations.listBillingStatements(request)`

- **OnSuccess**: <code>[ListResponseDtoBillingStatementResponseDto](src/models/list-response-dto-billing-statement-response-dto.ts)</code>
- **OnError**: throws <code>[Organizations.ListBillingStatementsError](src/resources/organizations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizations.listBillingStatements(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseDtoBillingStatementResponseDto, Organizations.ListBillingStatementsError&gt;</code>, with `result.value` of type <code>[ListResponseDtoBillingStatementResponseDto](src/models/list-response-dto-billing-statement-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listIndustries(request?: Organizations.ListIndustriesRequest, options?: RequestOptions): ApiPromise&lt;ListIndustriesResponseDto, Organizations.ListIndustriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of available values for the `industry` field for an organization. Use this information to set the `industry` field in your `POST /v3/partner/organizations` or `PATCH /v3/organizations/{organizationId}` request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizations.listIndustries({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListIndustriesResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Organizations.ListIndustriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizations
  .listIndustries({ sessionId: "{{session_id}}", devKey: "{{developer_key}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListIndustriesResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizations.listIndustries(request)`

- **OnSuccess**: <code>[ListIndustriesResponseDto](src/models/list-industries-response-dto.ts)</code>
- **OnError**: throws <code>[Organizations.ListIndustriesError](src/resources/organizations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizations.listIndustries(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListIndustriesResponseDto, Organizations.ListIndustriesError&gt;</code>, with `result.value` of type <code>[ListIndustriesResponseDto](src/models/list-industries-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateOrganization(request: Organizations.UpdateOrganizationRequest, options?: RequestOptions): ApiPromise&lt;OrganizationResponseDto, Organizations.UpdateOrganizationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing organization. The currently signed-in user must have the `ADMINISTRATOR` user role in the BILL organization to perform this operation.

See Organizations and Users in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizations.updateOrganization({
    organizationId: "{{organization_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  });
  // TODO: Handle 'response' of type OrganizationResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Organizations.UpdateOrganizationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizations
  .updateOrganization({
    organizationId: "{{organization_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrganizationResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organizationId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[OrganizationUpdateRequestDto](src/models/organization-update-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizations.updateOrganization(request)`

- **OnSuccess**: <code>[OrganizationResponseDto](src/models/organization-response-dto.ts)</code>
- **OnError**: throws <code>[Organizations.UpdateOrganizationError](src/resources/organizations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizations.updateOrganization(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrganizationResponseDto, Organizations.UpdateOrganizationError&gt;</code>, with `result.value` of type <code>[OrganizationResponseDto](src/models/organization-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Partner

> Source: [Partner](src/resources/partner.ts)

<details>
<summary><code>archivePartnerUser(request: Partner.ArchivePartnerUserRequest, options?: RequestOptions): ApiPromise&lt;OrganizationUserResponseDto, Partner.ArchivePartnerUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing user. In the response, the `archived` field is set as `true`.

You can restore an archived user with `POST /v3/users/{userId}/restore`. There is no change when you archive an archived user.

This operation requires partner-level permissions.
* A `sessionId` header value generated with API partner login
* An `appKey` header value
* The `organizationId` of the organization

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partner.archivePartnerUser({
    userId: "{{partner_user_id}}",
    sessionId: "{{partner_session_id}}",
    appKey: "{{app_key}}",
    organizationId: "{{partner_organization_id}}",
  });
  // TODO: Handle 'response' of type OrganizationUserResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Partner.ArchivePartnerUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partner
  .archivePartnerUser({
    userId: "{{partner_user_id}}",
    sessionId: "{{partner_session_id}}",
    appKey: "{{app_key}}",
    organizationId: "{{partner_organization_id}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrganizationUserResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>appKey?</code> | <code>string</code> | - |
| <code>organizationId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partner.archivePartnerUser(request)`

- **OnSuccess**: <code>[OrganizationUserResponseDto](src/models/organization-user-response-dto.ts)</code>
- **OnError**: throws <code>[Partner.ArchivePartnerUserError](src/resources/partner.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partner.archivePartnerUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrganizationUserResponseDto, Partner.ArchivePartnerUserError&gt;</code>, with `result.value` of type <code>[OrganizationUserResponseDto](src/models/organization-user-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createOrganization(request: Partner.CreateOrganizationRequest, options?: RequestOptions): ApiPromise&lt;OrganizationResponseDto, Partner.CreateOrganizationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new organization.

This operation requires partner-level permissions.
* A `sessionId` header value generated with API partner login
* An `appKey` header value

See Organizations for BILL partners in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partner.createOrganization({
    sessionId: "{{partner_session_id}}",
    appKey: "{{app_key}}",
    body: { name: "some example string", address: { country: CountryCode.Ad } },
  });
  // TODO: Handle 'response' of type OrganizationResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Partner.CreateOrganizationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partner
  .createOrganization({
    sessionId: "{{partner_session_id}}",
    appKey: "{{app_key}}",
    body: { name: "some example string", address: { country: CountryCode.Ad } },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrganizationResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>appKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[OrganizationCreateRequestDto](src/models/organization-create-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partner.createOrganization(request)`

- **OnSuccess**: <code>[OrganizationResponseDto](src/models/organization-response-dto.ts)</code>
- **OnError**: throws <code>[Partner.CreateOrganizationError](src/resources/partner.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partner.createOrganization(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrganizationResponseDto, Partner.CreateOrganizationError&gt;</code>, with `result.value` of type <code>[OrganizationResponseDto](src/models/organization-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createPartnerUser(request: Partner.CreatePartnerUserRequest, options?: RequestOptions): ApiPromise&lt;OrganizationUserResponseDto, Partner.CreatePartnerUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new user. The new user is created for the organization (`organizationId`) in the request header.

In the request, set `username` as a unique alphanumeric value. The value must be 40 characters or fewer. This field is not case-sensitive. Do not set the value as an email address or any PII value. BILL uses this value to uniquely identify each user.

This operation requires partner-level permissions.
* A `sessionId` header value generated with API partner login
* An `appKey` header value
* The `organizationId` of the organization

See Users for BILL partners in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partner.createPartnerUser({
    sessionId: "{{partner_session_id}}",
    appKey: "{{app_key}}",
    organizationId: "{{partner_organization_id}}",
    body: {
      firstName: "some example string",
      email: "some example string",
      username: "some example string",
      acceptTermsOfService: true,
    },
  });
  // TODO: Handle 'response' of type OrganizationUserResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Partner.CreatePartnerUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partner
  .createPartnerUser({
    sessionId: "{{partner_session_id}}",
    appKey: "{{app_key}}",
    organizationId: "{{partner_organization_id}}",
    body: {
      firstName: "some example string",
      email: "some example string",
      username: "some example string",
      acceptTermsOfService: true,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrganizationUserResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>appKey?</code> | <code>string</code> | - |
| <code>organizationId?</code> | <code>string</code> | - |
| <code>body</code> | <code>[PartnerUserCreateRequestDto](src/models/partner-user-create-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partner.createPartnerUser(request)`

- **OnSuccess**: <code>[OrganizationUserResponseDto](src/models/organization-user-response-dto.ts)</code>
- **OnError**: throws <code>[Partner.CreatePartnerUserError](src/resources/partner.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partner.createPartnerUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrganizationUserResponseDto, Partner.CreatePartnerUserError&gt;</code>, with `result.value` of type <code>[OrganizationUserResponseDto](src/models/organization-user-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createPhone(request: Partner.CreatePhoneRequest, options?: RequestOptions): ApiPromise&lt;undefined, Partner.CreatePhoneError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a phone number for a created user. BILL requires organization users to have a linked phone number for initiating risk verification for the organization.

You can check whether a phone number has been added for the user with `GET /v3/risk-verifications/phone`.

After you add a phone number with this endpoint, you can initiate risk verification for the organization with `POST /v3/risk-verifications`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.partner.createPhone({
    userId: "{{partner_user_id}}",
    sessionId: "{{partner_session_id}}",
    appKey: "{{app_key}}",
    organizationId: "{{partner_organization_id}}",
    body: { phoneNumber: "some example string", phoneType: PhoneType.Mobile },
  });
} catch (err) {
  // TODO: Handle 'err' of type Partner.CreatePhoneError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partner
  .createPhone({
    userId: "{{partner_user_id}}",
    sessionId: "{{partner_session_id}}",
    appKey: "{{app_key}}",
    organizationId: "{{partner_organization_id}}",
    body: { phoneNumber: "some example string", phoneType: PhoneType.Mobile },
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
| <code>userId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>appKey?</code> | <code>string</code> | - |
| <code>organizationId?</code> | <code>string</code> | - |
| <code>body</code> | <code>[PhoneVerificationRequestDto](src/models/phone-verification-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partner.createPhone(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Partner.CreatePhoneError](src/resources/partner.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partner.createPhone(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Partner.CreatePhoneError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPartnerUser(request: Partner.GetPartnerUserRequest, options?: RequestOptions): ApiPromise&lt;OrganizationUserResponseDto, Partner.GetPartnerUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing user.

This operation requires partner-level permissions.
* A `sessionId` header value generated with API partner login
* An `appKey` header value
* The `organizationId` of the organization

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partner.getPartnerUser({
    userId: "{{partner_user_id}}",
    sessionId: "{{partner_session_id}}",
    appKey: "{{app_key}}",
    organizationId: "{{partner_organization_id}}",
  });
  // TODO: Handle 'response' of type OrganizationUserResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Partner.GetPartnerUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partner
  .getPartnerUser({
    userId: "{{partner_user_id}}",
    sessionId: "{{partner_session_id}}",
    appKey: "{{app_key}}",
    organizationId: "{{partner_organization_id}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrganizationUserResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>appKey?</code> | <code>string</code> | - |
| <code>organizationId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partner.getPartnerUser(request)`

- **OnSuccess**: <code>[OrganizationUserResponseDto](src/models/organization-user-response-dto.ts)</code>
- **OnError**: throws <code>[Partner.GetPartnerUserError](src/resources/partner.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partner.getPartnerUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrganizationUserResponseDto, Partner.GetPartnerUserError&gt;</code>, with `result.value` of type <code>[OrganizationUserResponseDto](src/models/organization-user-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPartnerUserRole(request: Partner.GetPartnerUserRoleRequest, options?: RequestOptions): ApiPromise&lt;RoleResponseDto, Partner.GetPartnerUserRoleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing user role in a BILL organization.

This operation requires partner-level permissions.
* A `sessionId` header value generated with API partner login
* An `appKey` header value
* The `organizationId` of the organization

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partner.getPartnerUserRole({
    roleId: "{{partner_user_role_id}}",
    sessionId: "{{partner_session_id}}",
    appKey: "{{app_key}}",
    organizationId: "{{partner_organization_id}}",
  });
  // TODO: Handle 'response' of type RoleResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Partner.GetPartnerUserRoleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partner
  .getPartnerUserRole({
    roleId: "{{partner_user_role_id}}",
    sessionId: "{{partner_session_id}}",
    appKey: "{{app_key}}",
    organizationId: "{{partner_organization_id}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RoleResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>roleId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>appKey?</code> | <code>string</code> | - |
| <code>organizationId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partner.getPartnerUserRole(request)`

- **OnSuccess**: <code>[RoleResponseDto](src/models/role-response-dto.ts)</code>
- **OnError**: throws <code>[Partner.GetPartnerUserRoleError](src/resources/partner.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partner.getPartnerUserRole(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RoleResponseDto, Partner.GetPartnerUserRoleError&gt;</code>, with `result.value` of type <code>[RoleResponseDto](src/models/role-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPartnerOrganizations(request?: Partner.ListPartnerOrganizationsRequest, options?: RequestOptions): ApiPromise&lt;ListResponseDtoOrganizationResponseDto, Partner.ListPartnerOrganizationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of organization objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

This operation requires partner-level permissions.
* A `sessionId` header value generated with API partner login
* An `appKey` header value

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partner.listPartnerOrganizations({
    max: 10,
    sort: "createdTime",
    filters: "id:eq:{{partner_organization_id}}",
    sessionId: "{{partner_session_id}}",
    appKey: "{{app_key}}",
  });
  // TODO: Handle 'response' of type ListResponseDtoOrganizationResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Partner.ListPartnerOrganizationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partner
  .listPartnerOrganizations({
    max: 10,
    sort: "createdTime",
    filters: "id:eq:{{partner_organization_id}}",
    sessionId: "{{partner_session_id}}",
    appKey: "{{app_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseDtoOrganizationResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max?</code> | <code>number</code> | - |
| <code>sort?</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>appKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partner.listPartnerOrganizations(request)`

- **OnSuccess**: <code>[ListResponseDtoOrganizationResponseDto](src/models/list-response-dto-organization-response-dto.ts)</code>
- **OnError**: throws <code>[Partner.ListPartnerOrganizationsError](src/resources/partner.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partner.listPartnerOrganizations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseDtoOrganizationResponseDto, Partner.ListPartnerOrganizationsError&gt;</code>, with `result.value` of type <code>[ListResponseDtoOrganizationResponseDto](src/models/list-response-dto-organization-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPartnerUserRoles(request?: Partner.ListPartnerUserRolesRequest, options?: RequestOptions): ApiPromise&lt;ListResponseDtoRoleResponseDto, Partner.ListPartnerUserRolesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of user role objects available in a BILL organization. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

This operation requires partner-level permissions.
* A `sessionId` header value generated with API partner login
* An `appKey` header value
* The `organizationId` of the organization

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partner.listPartnerUserRoles({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{partner_user_role_id}}",
    sessionId: "{{partner_session_id}}",
    appKey: "{{app_key}}",
    organizationId: "{{partner_organization_id}}",
  });
  // TODO: Handle 'response' of type ListResponseDtoRoleResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Partner.ListPartnerUserRolesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partner
  .listPartnerUserRoles({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{partner_user_role_id}}",
    sessionId: "{{partner_session_id}}",
    appKey: "{{app_key}}",
    organizationId: "{{partner_organization_id}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseDtoRoleResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max?</code> | <code>number</code> | - |
| <code>sort?</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>appKey?</code> | <code>string</code> | - |
| <code>organizationId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partner.listPartnerUserRoles(request)`

- **OnSuccess**: <code>[ListResponseDtoRoleResponseDto](src/models/list-response-dto-role-response-dto.ts)</code>
- **OnError**: throws <code>[Partner.ListPartnerUserRolesError](src/resources/partner.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partner.listPartnerUserRoles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseDtoRoleResponseDto, Partner.ListPartnerUserRolesError&gt;</code>, with `result.value` of type <code>[ListResponseDtoRoleResponseDto](src/models/list-response-dto-role-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPartnerUsers(request?: Partner.ListPartnerUsersRequest, options?: RequestOptions): ApiPromise&lt;ListResponseDtoOrganizationUserResponseDto, Partner.ListPartnerUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of user objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

This operation requires partner-level permissions.
* A `sessionId` header value generated with API partner login
* An `appKey` header value
* The `organizationId` of the organization

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partner.listPartnerUsers({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{partner_user_id}}",
    sessionId: "{{partner_session_id}}",
    appKey: "{{app_key}}",
    organizationId: "{{partner_organization_id}}",
  });
  // TODO: Handle 'response' of type ListResponseDtoOrganizationUserResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Partner.ListPartnerUsersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partner
  .listPartnerUsers({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{partner_user_id}}",
    sessionId: "{{partner_session_id}}",
    appKey: "{{app_key}}",
    organizationId: "{{partner_organization_id}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseDtoOrganizationUserResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max?</code> | <code>number</code> | - |
| <code>sort?</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>appKey?</code> | <code>string</code> | - |
| <code>organizationId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partner.listPartnerUsers(request)`

- **OnSuccess**: <code>[ListResponseDtoOrganizationUserResponseDto](src/models/list-response-dto-organization-user-response-dto.ts)</code>
- **OnError**: throws <code>[Partner.ListPartnerUsersError](src/resources/partner.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partner.listPartnerUsers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseDtoOrganizationUserResponseDto, Partner.ListPartnerUsersError&gt;</code>, with `result.value` of type <code>[ListResponseDtoOrganizationUserResponseDto](src/models/list-response-dto-organization-user-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>loginAsUser(request: Partner.LoginAsUserRequest, options?: RequestOptions): ApiPromise&lt;LoginAsUserResponseDto, Partner.LoginAsUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sign in to a created organization as a created user of that organization. In the response, your API session is created and a generated `sessionId` is available for organization-level BILL API operations.

This endpoint is required for a specific BILL partner-level workflow.
1. Sign in to your partner account with API partner login.
2. Create a child BILL organization with `POST /v3/partner/organizations`. In the response, a BILL-generated organization `id` is available.
3. Create a user for the child BILL organization with `POST /v3/partner/users`. In the response, a BILL-generated user `id` is available.
4. Sign in to the created organization as the created user of that organization with `POST /v3/partner/login-as-user`. After signing in, you can perform organization-level BILL API operations, such as creating a bill or paying a vendor. All organization-level BILL API operations require a `devKey` and `sessionId`.

**Note**: When you create an organization and then create a user for that organization, it is important that you initiate risk verification with `POST /v3/risk-verifications`. See Initiate risk verification for an organization for more information.

This operation requires partner-level permissions.
* A `sessionId` header value generated with API partner login
* An `appKey` header value

You can sign out with `POST /v3/logout`. If your API session is inactive for 35 minutes, the session expires and you are automatically signed out.

### MFA-trusted API session
Set both `rememberMeId` and `device` as additional fields in your `POST /v3/partner/login-as-user` request to create an MFA-trusted API session.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partner.loginAsUser({
    sessionId: "{{partner_session_id}}",
    appKey: "{{app_key}}",
    body: { userId: "some example string", organizationId: "some example string" },
  });
  // TODO: Handle 'response' of type LoginAsUserResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Partner.LoginAsUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partner
  .loginAsUser({
    sessionId: "{{partner_session_id}}",
    appKey: "{{app_key}}",
    body: { userId: "some example string", organizationId: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LoginAsUserResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>appKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[LoginAsUserRequestDto](src/models/login-as-user-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partner.loginAsUser(request)`

- **OnSuccess**: <code>[LoginAsUserResponseDto](src/models/login-as-user-response-dto.ts)</code>
- **OnError**: throws <code>[Partner.LoginAsUserError](src/resources/partner.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partner.loginAsUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LoginAsUserResponseDto, Partner.LoginAsUserError&gt;</code>, with `result.value` of type <code>[LoginAsUserResponseDto](src/models/login-as-user-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>partnerLogin(request: Partner.PartnerLoginRequest, options?: RequestOptions): ApiPromise&lt;PartnerLoginResponseDto, Partner.PartnerLoginError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sign in to your BILL partner account. In the response, your partner API session is created and a BILL-generated `sessionId` is available. Use the `sessionId` in all subsequent API calls to confirm that you are in a signed-in session.

You get additional permissions with a partner account `sessionId`.
* Create a child BILL organization with `POST /v3/partner/organizations`.
* Create a user for the child BILL organization with `POST /v3/partner/users`.
* Sign in to the created organization as the created user of that organization with `/v3/partner/login-as-user`. After signing in, you can perform organization-level BILL API operations, such as creating a bill or paying a vendor. All organization-level BILL API operations require a `devKey` and `sessionId`.

**Note**: When you create an organization and then create a user for that organization, it is important that you initiate risk verification with `POST /v3/risk-verifications`. See Initiate risk verification for an organization for more information.

You can sign out with `POST /v3/logout`. If your API session is inactive for 35 minutes, the session expires and you are automatically signed out.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partner.partnerLogin({
    body: { appKey: "some example string", username: "some example string", password: "some example string" },
  });
  // TODO: Handle 'response' of type PartnerLoginResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Partner.PartnerLoginError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partner
  .partnerLogin({
    body: { appKey: "some example string", username: "some example string", password: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PartnerLoginResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PartnerLoginRequestDto](src/models/partner-login-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partner.partnerLogin(request)`

- **OnSuccess**: <code>[PartnerLoginResponseDto](src/models/partner-login-response-dto.ts)</code>
- **OnError**: throws <code>[Partner.PartnerLoginError](src/resources/partner.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partner.partnerLogin(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PartnerLoginResponseDto, Partner.PartnerLoginError&gt;</code>, with `result.value` of type <code>[PartnerLoginResponseDto](src/models/partner-login-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>restorePartnerUser(request: Partner.RestorePartnerUserRequest, options?: RequestOptions): ApiPromise&lt;OrganizationUserResponseDto, Partner.RestorePartnerUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived user. In the response, the `archived` field is set as `false`.

You can perform any valid BILL operation on restored users. There is no change when you restore a restored user.

This operation requires partner-level permissions.
* A `sessionId` header value generated with API partner login
* An `appKey` header value
* The `organizationId` of the organization

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partner.restorePartnerUser({
    userId: "{{partner_user_id}}",
    sessionId: "{{partner_session_id}}",
    appKey: "{{app_key}}",
    organizationId: "{{partner_organization_id}}",
  });
  // TODO: Handle 'response' of type OrganizationUserResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Partner.RestorePartnerUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partner
  .restorePartnerUser({
    userId: "{{partner_user_id}}",
    sessionId: "{{partner_session_id}}",
    appKey: "{{app_key}}",
    organizationId: "{{partner_organization_id}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrganizationUserResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>appKey?</code> | <code>string</code> | - |
| <code>organizationId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partner.restorePartnerUser(request)`

- **OnSuccess**: <code>[OrganizationUserResponseDto](src/models/organization-user-response-dto.ts)</code>
- **OnError**: throws <code>[Partner.RestorePartnerUserError](src/resources/partner.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partner.restorePartnerUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrganizationUserResponseDto, Partner.RestorePartnerUserError&gt;</code>, with `result.value` of type <code>[OrganizationUserResponseDto](src/models/organization-user-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateOrgPartnerPricePlan(request: Partner.UpdateOrgPartnerPricePlanRequest, options?: RequestOptions): ApiPromise&lt;StatusDto, Partner.UpdateOrgPartnerPricePlanError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the price plan for an existing organization.

When you onboard as a BILL partner, BILL works with you to set up price plans for the organizations you create. Your organizations can have up to 5 price plans. Each price plan is named in the `PricePlanN` format (`PricePlan1` up to `PricePlan5`).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partner.updateOrgPartnerPricePlan({
    organizationId: "{{partner_organization_id}}",
    sessionId: "{{partner_session_id}}",
    appKey: "{{app_key}}",
    body: { pricePlanType: PartnerPricePlanType.PricePlan1 },
  });
  // TODO: Handle 'response' of type StatusDto
} catch (err) {
  // TODO: Handle 'err' of type Partner.UpdateOrgPartnerPricePlanError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partner
  .updateOrgPartnerPricePlan({
    organizationId: "{{partner_organization_id}}",
    sessionId: "{{partner_session_id}}",
    appKey: "{{app_key}}",
    body: { pricePlanType: PartnerPricePlanType.PricePlan1 },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StatusDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organizationId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>appKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[UpdateOrgPricePlanRequest](src/models/update-org-price-plan-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partner.updateOrgPartnerPricePlan(request)`

- **OnSuccess**: <code>[StatusDto](src/models/status-dto.ts)</code>
- **OnError**: throws <code>[Partner.UpdateOrgPartnerPricePlanError](src/resources/partner.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partner.updateOrgPartnerPricePlan(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StatusDto, Partner.UpdateOrgPartnerPricePlanError&gt;</code>, with `result.value` of type <code>[StatusDto](src/models/status-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePartnerUser(request: Partner.UpdatePartnerUserRequest, options?: RequestOptions): ApiPromise&lt;OrganizationUserResponseDto, Partner.UpdatePartnerUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing user.

This operation requires partner-level permissions.
* A `sessionId` header value generated with API partner login
* An `appKey` header value
* The `organizationId` of the organization

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partner.updatePartnerUser({
    userId: "{{partner_user_id}}",
    sessionId: "{{partner_session_id}}",
    appKey: "{{app_key}}",
    organizationId: "{{partner_organization_id}}",
    body: {},
  });
  // TODO: Handle 'response' of type OrganizationUserResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Partner.UpdatePartnerUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partner
  .updatePartnerUser({
    userId: "{{partner_user_id}}",
    sessionId: "{{partner_session_id}}",
    appKey: "{{app_key}}",
    organizationId: "{{partner_organization_id}}",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrganizationUserResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>appKey?</code> | <code>string</code> | - |
| <code>organizationId?</code> | <code>string</code> | - |
| <code>body</code> | <code>[PartnerUserUpdateRequestDto](src/models/partner-user-update-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partner.updatePartnerUser(request)`

- **OnSuccess**: <code>[OrganizationUserResponseDto](src/models/organization-user-response-dto.ts)</code>
- **OnError**: throws <code>[Partner.UpdatePartnerUserError](src/resources/partner.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partner.updatePartnerUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrganizationUserResponseDto, Partner.UpdatePartnerUserError&gt;</code>, with `result.value` of type <code>[OrganizationUserResponseDto](src/models/organization-user-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentTerms

> Source: [PaymentTerms](src/resources/payment-terms.ts)

<details>
<summary><code>createPaymentTerm(request: PaymentTerms.CreatePaymentTermRequest, options?: RequestOptions): ApiPromise&lt;PaymentTermResponseDto, PaymentTerms.CreatePaymentTermError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new payment term for the organization. Use payment terms to set the number of days the customer has to pay a vendor. You can set `paymentTermId` in bills and invoices.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentTerms.createPaymentTerm({
    organizationId: "{{organization_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { name: "some example string", daysDue: 1 },
  });
  // TODO: Handle 'response' of type PaymentTermResponseDto
} catch (err) {
  // TODO: Handle 'err' of type PaymentTerms.CreatePaymentTermError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentTerms
  .createPaymentTerm({
    organizationId: "{{organization_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { name: "some example string", daysDue: 1 },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentTermResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organizationId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[CreatePaymentTermRequestDto](src/models/create-payment-term-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentTerms.createPaymentTerm(request)`

- **OnSuccess**: <code>[PaymentTermResponseDto](src/models/payment-term-response-dto.ts)</code>
- **OnError**: throws <code>[PaymentTerms.CreatePaymentTermError](src/resources/payment-terms.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentTerms.createPaymentTerm(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentTermResponseDto, PaymentTerms.CreatePaymentTermError&gt;</code>, with `result.value` of type <code>[PaymentTermResponseDto](src/models/payment-term-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPaymentTerm(request: PaymentTerms.GetPaymentTermRequest, options?: RequestOptions): ApiPromise&lt;PaymentTermResponseDto, PaymentTerms.GetPaymentTermError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing payment term.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentTerms.getPaymentTerm({
    organizationId: "{{organization_id}}",
    paymentTermId: "{{payment_term_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type PaymentTermResponseDto
} catch (err) {
  // TODO: Handle 'err' of type PaymentTerms.GetPaymentTermError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentTerms
  .getPaymentTerm({
    organizationId: "{{organization_id}}",
    paymentTermId: "{{payment_term_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentTermResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organizationId</code> | <code>string</code> | - |
| <code>paymentTermId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentTerms.getPaymentTerm(request)`

- **OnSuccess**: <code>[PaymentTermResponseDto](src/models/payment-term-response-dto.ts)</code>
- **OnError**: throws <code>[PaymentTerms.GetPaymentTermError](src/resources/payment-terms.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentTerms.getPaymentTerm(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentTermResponseDto, PaymentTerms.GetPaymentTermError&gt;</code>, with `result.value` of type <code>[PaymentTermResponseDto](src/models/payment-term-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPaymentTerms(request: PaymentTerms.ListPaymentTermsRequest, options?: RequestOptions): ApiPromise&lt;ListResponseDtoPaymentTermResponseDto, PaymentTerms.ListPaymentTermsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of payment terms for the organization. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentTerms.listPaymentTerms({
    organizationId: "{{organization_id}}",
    max: 10,
    sort: "name:asc",
    filters: "daysDue:eq:30",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListResponseDtoPaymentTermResponseDto
} catch (err) {
  // TODO: Handle 'err' of type PaymentTerms.ListPaymentTermsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentTerms
  .listPaymentTerms({
    organizationId: "{{organization_id}}",
    max: 10,
    sort: "name:asc",
    filters: "daysDue:eq:30",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseDtoPaymentTermResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organizationId</code> | <code>string</code> | - |
| <code>max?</code> | <code>number</code> | - |
| <code>sort?</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentTerms.listPaymentTerms(request)`

- **OnSuccess**: <code>[ListResponseDtoPaymentTermResponseDto](src/models/list-response-dto-payment-term-response-dto.ts)</code>
- **OnError**: throws <code>[PaymentTerms.ListPaymentTermsError](src/resources/payment-terms.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentTerms.listPaymentTerms(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseDtoPaymentTermResponseDto, PaymentTerms.ListPaymentTermsError&gt;</code>, with `result.value` of type <code>[ListResponseDtoPaymentTermResponseDto](src/models/list-response-dto-payment-term-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePaymentTerm(request: PaymentTerms.UpdatePaymentTermRequest, options?: RequestOptions): ApiPromise&lt;PaymentTermResponseDto, PaymentTerms.UpdatePaymentTermError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing payment term.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentTerms.updatePaymentTerm({
    organizationId: "{{organization_id}}",
    paymentTermId: "{{payment_term_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  });
  // TODO: Handle 'response' of type PaymentTermResponseDto
} catch (err) {
  // TODO: Handle 'err' of type PaymentTerms.UpdatePaymentTermError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentTerms
  .updatePaymentTerm({
    organizationId: "{{organization_id}}",
    paymentTermId: "{{payment_term_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentTermResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organizationId</code> | <code>string</code> | - |
| <code>paymentTermId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[UpdatePaymentTermRequestDto](src/models/update-payment-term-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentTerms.updatePaymentTerm(request)`

- **OnSuccess**: <code>[PaymentTermResponseDto](src/models/payment-term-response-dto.ts)</code>
- **OnError**: throws <code>[PaymentTerms.UpdatePaymentTermError](src/resources/payment-terms.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentTerms.updatePaymentTerm(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentTermResponseDto, PaymentTerms.UpdatePaymentTermError&gt;</code>, with `result.value` of type <code>[PaymentTermResponseDto](src/models/payment-term-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Payments

> Source: [Payments](src/resources/payments.ts)

<details>
<summary><code>cancelPayment(request: Payments.CancelPaymentRequest, options?: RequestOptions): ApiPromise&lt;PaymentResponseDto, Payments.CancelPaymentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel an existing payment.

You can cancel a payment only when the payment `singleStatus` is `SCHEDULED`. When BILL starts processing the payment, the payment `singleStatus` changes. At that point, you cannot cancel the payment. You can attempt to void the payment with `POST /v3/payments/{paymentId}/void`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.cancelPayment({
    paymentId: "{{payment_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type PaymentResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Payments.CancelPaymentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payments
  .cancelPayment({ paymentId: "{{payment_id}}", sessionId: "{{session_id}}", devKey: "{{developer_key}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payments.cancelPayment(request)`

- **OnSuccess**: <code>[PaymentResponseDto](src/models/payment-response-dto.ts)</code>
- **OnError**: throws <code>[Payments.CancelPaymentError](src/resources/payments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payments.cancelPayment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentResponseDto, Payments.CancelPaymentError&gt;</code>, with `result.value` of type <code>[PaymentResponseDto](src/models/payment-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createBulkPayment(request: Payments.CreateBulkPaymentRequest, options?: RequestOptions): ApiPromise&lt;BulkPaymentResponseDto, Payments.CreateBulkPaymentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a request for paying multiple bills. You can pay up to 50 bills with one `POST /v3/payments/bulk` request.

Bulk payments at BILL follow a set of rules.
* **Successful response**: In your bulk payment request, all your bill payments must be successful for a successful response. If any bill payment is not successful, the entire request fails and none of the bills in the request are paid.
* **You can pay multiple vendors**: You can pay multiple vendors with one `POST /v3/payments/bulk` request. In this case, make sure that you do not set `vendorId` in your request.
* **You can only pay existing bills**: When you create a single payment with `POST /v3/payments`, you can set `createBill` as `true` in your request for creating a new bill for a vendor payment. In your bulk payment request, an existing `billId` is required for each bill to be paid.
* **Vendors with `"combinePayments": true`**: When you create a bulk payment for a vendor that has `"combinePayments": true`, BILL combines payments for up to 35 bills in one `payments` response object, and then combines payments for the remaining bills in a second `payments` response object.

See Get list of vendor payment options to get details about vendor payment options and payment process dates.

**Note**: Creating a bulk payment requires an MFA-trusted API session. See MFA setup for information about the BILL MFA process.

See Payments in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.createBulkPayment({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { fundingAccount: { type: FundingAccountTypeRequest.BankAccount } },
  });
  // TODO: Handle 'response' of type BulkPaymentResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Payments.CreateBulkPaymentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payments
  .createBulkPayment({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { fundingAccount: { type: FundingAccountTypeRequest.BankAccount } },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkPaymentResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[BulkPaymentRequestDto](src/models/bulk-payment-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payments.createBulkPayment(request)`

- **OnSuccess**: <code>[BulkPaymentResponseDto](src/models/bulk-payment-response-dto.ts)</code>
- **OnError**: throws <code>[Payments.CreateBulkPaymentError](src/resources/payments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payments.createBulkPayment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkPaymentResponseDto, Payments.CreateBulkPaymentError&gt;</code>, with `result.value` of type <code>[BulkPaymentResponseDto](src/models/bulk-payment-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createMassPayment(request: Payments.CreateMassPaymentRequest, options?: RequestOptions): ApiPromise&lt;MassPaymentResponseDto, Payments.CreateMassPaymentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a mass payment request for up to 2000 bills. BILL processes each payment in the mass payment request asynchronously.

In the response, a BILL-generated payment batch ID is available. You can track the current status of each payment in a mass payment batch with `GET /v3/payments/mass/{paymentBatchId}`.

**Note**: Creating a mass payment requires an MFA-trusted API session. See MFA setup for information about the BILL MFA process.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.createMassPayment({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { fundingAccount: { type: FundingAccountTypeRequest.BankAccount } },
  });
  // TODO: Handle 'response' of type MassPaymentResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Payments.CreateMassPaymentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payments
  .createMassPayment({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { fundingAccount: { type: FundingAccountTypeRequest.BankAccount } },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MassPaymentResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[BulkPaymentRequestDto](src/models/bulk-payment-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payments.createMassPayment(request)`

- **OnSuccess**: <code>[MassPaymentResponseDto](src/models/mass-payment-response-dto.ts)</code>
- **OnError**: throws <code>[Payments.CreateMassPaymentError](src/resources/payments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payments.createMassPayment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MassPaymentResponseDto, Payments.CreateMassPaymentError&gt;</code>, with `result.value` of type <code>[MassPaymentResponseDto](src/models/mass-payment-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createPayment(request: Payments.CreatePaymentRequest, options?: RequestOptions): ApiPromise&lt;PaymentResponseDto, Payments.CreatePaymentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a payment.

See Get list of vendor payment options to get details about vendor payment options and payment process dates.

**Note**: Creating a payment requires an MFA-trusted API session. See MFA setup for information about the BILL MFA process.

See Payments in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.createPayment({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {
      fundingAccount: { type: FundingAccountTypeRequest.BankAccount },
      amount: 1.5,
      processingOptions: {},
    },
  });
  // TODO: Handle 'response' of type PaymentResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Payments.CreatePaymentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payments
  .createPayment({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {
      fundingAccount: { type: FundingAccountTypeRequest.BankAccount },
      amount: 1.5,
      processingOptions: {},
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[PaymentRequestDto](src/models/payment-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payments.createPayment(request)`

- **OnSuccess**: <code>[PaymentResponseDto](src/models/payment-response-dto.ts)</code>
- **OnError**: throws <code>[Payments.CreatePaymentError](src/resources/payments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payments.createPayment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentResponseDto, Payments.CreatePaymentError&gt;</code>, with `result.value` of type <code>[PaymentResponseDto](src/models/payment-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCheckImageData(request: Payments.GetCheckImageDataRequest, options?: RequestOptions): ApiPromise&lt;CheckImageDataResponseDto, Payments.GetCheckImageDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get an image of an existing check sent to a vendor.

The check image is available when the vendor bank processes the check payment. BILL checks in with the bank every 30 minutes to get the check image. The image file format is determined by the vendor bank.

From the response, use `downloadLink` in a GET request to download the front and back images of the check.

```
curl '{downloadLink}' --header 'sessionId: {session_id}' --output {check_name}
```

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.getCheckImageData({
    paymentId: "{{payment_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type CheckImageDataResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Payments.GetCheckImageDataError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payments
  .getCheckImageData({
    paymentId: "{{payment_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CheckImageDataResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payments.getCheckImageData(request)`

- **OnSuccess**: <code>[CheckImageDataResponseDto](src/models/check-image-data-response-dto.ts)</code>
- **OnError**: throws <code>[Payments.GetCheckImageDataError](src/resources/payments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payments.getCheckImageData(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CheckImageDataResponseDto, Payments.GetCheckImageDataError&gt;</code>, with `result.value` of type <code>[CheckImageDataResponseDto](src/models/check-image-data-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getExchangeRate(request: Payments.GetExchangeRateRequest, options?: RequestOptions): ApiPromise&lt;ExchangeRateResponseDto, Payments.GetExchangeRateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current BILL exchange rate and exchange rate batch ID for paying an international vendor. When the vendor bill currency is not `USD`, the exchange rate batch ID is required for creating a payment with `POST /v3/payments` or `POST /v3/payments/bulk`.

BILL maintains all `exchangeRate` values in a batch. When a batch expires, a new batch ID is generated and all `exchangeRate` values are updated in the new batch. Use this endpoint to get the current exchange rate and batch ID based on the payment amount and vendor bill currency.

In production, a BILL batch is valid for a maximum of 20 minutes. response provides the timestamp when the current batch will expire. For example, if a batch has been active for 17 minutes when you get the `exchangeRateBatchId`, `expirationTime` indicates that you have 3 minutes remaining (with `POST /v3/payments` or `POST /v3/payments/bulk`).

**Note**:
* International vendor payment information is required for you to get the BILL exchange rate with this endpoint.
* When the vendor bill currency is not `USD`, the payment `processDate` **must be** the next US business day.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.getExchangeRate({
    vendorId: "{{vendor_id}}",
    amount: 1000,
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ExchangeRateResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Payments.GetExchangeRateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payments
  .getExchangeRate({
    vendorId: "{{vendor_id}}",
    amount: 1000,
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExchangeRateResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendorId</code> | <code>string</code> | - |
| <code>amount</code> | <code>number</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payments.getExchangeRate(request)`

- **OnSuccess**: <code>[ExchangeRateResponseDto](src/models/exchange-rate-response-dto.ts)</code>
- **OnError**: throws <code>[Payments.GetExchangeRateError](src/resources/payments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payments.getExchangeRate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExchangeRateResponseDto, Payments.GetExchangeRateError&gt;</code>, with `result.value` of type <code>[ExchangeRateResponseDto](src/models/exchange-rate-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getExchangeRates(request: Payments.GetExchangeRatesRequest, options?: RequestOptions): ApiPromise&lt;ExchangeRatesResponseDto, Payments.GetExchangeRatesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current BILL exchange rate and exchange rate batch ID for multiple international vendors with one API request. When the vendor bill currency is not `USD`, the exchange rate batch ID is required for creating a payment with `POST /v3/payments` or `POST /v3/payments/bulk`.

BILL maintains all `exchangeRate` values in a batch. When a batch expires, a new batch ID is generated and all `exchangeRate` values are updated in the new batch. Use this endpoint to get the current exchange rate and batch ID based on the payment amount and vendor bill currency.

In production, a BILL batch is valid for a maximum of 20 minutes. response provides the timestamp when the current batch will expire. For example, if a batch has been active for 17 minutes when you get the `exchangeRateBatchId`, `expirationTime` indicates that you have 3 minutes remaining (with `POST /v3/payments` or `POST /v3/payments/bulk`).

**Note**:
* International vendor payment information is required for you to get BILL exchange rates with this endpoint.
* When the vendor bill currency is not `USD`, the payment `processDate` **must be** the next US business day.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.getExchangeRates({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [{ vendorId: "some example string", amount: 1.5 }],
  });
  // TODO: Handle 'response' of type ExchangeRatesResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Payments.GetExchangeRatesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payments
  .getExchangeRates({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [{ vendorId: "some example string", amount: 1.5 }],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExchangeRatesResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[ExchangeRateRequestDto](src/models/exchange-rate-request-dto.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payments.getExchangeRates(request)`

- **OnSuccess**: <code>[ExchangeRatesResponseDto](src/models/exchange-rates-response-dto.ts)</code>
- **OnError**: throws <code>[Payments.GetExchangeRatesError](src/resources/payments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payments.getExchangeRates(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExchangeRatesResponseDto, Payments.GetExchangeRatesError&gt;</code>, with `result.value` of type <code>[ExchangeRatesResponseDto](src/models/exchange-rates-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMassPayment(request: Payments.GetMassPaymentRequest, options?: RequestOptions): ApiPromise&lt;MassPaymentDetailsResponseDto, Payments.GetMassPaymentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing mass payment batch.

In the response, you get the status of each payment in the mass payment batch. Each payment is either `scheduled`, `completed`, or `failed`. In addition, you get the `count` for the total number of payments in the mass payments batch.

**Note**: From the list of `completed` payments in the response, BILL begins processing payments based on the payment `processDate`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.getMassPayment({
    paymentBatchId: "{{mass_payment_batch_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type MassPaymentDetailsResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Payments.GetMassPaymentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payments
  .getMassPayment({
    paymentBatchId: "{{mass_payment_batch_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MassPaymentDetailsResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentBatchId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payments.getMassPayment(request)`

- **OnSuccess**: <code>[MassPaymentDetailsResponseDto](src/models/mass-payment-details-response-dto.ts)</code>
- **OnError**: throws <code>[Payments.GetMassPaymentError](src/resources/payments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payments.getMassPayment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MassPaymentDetailsResponseDto, Payments.GetMassPaymentError&gt;</code>, with `result.value` of type <code>[MassPaymentDetailsResponseDto](src/models/mass-payment-details-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPayment(request: Payments.GetPaymentRequest, options?: RequestOptions): ApiPromise&lt;PaymentResponseDto, Payments.GetPaymentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing payment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.getPayment({
    paymentId: "{{payment_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type PaymentResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Payments.GetPaymentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payments
  .getPayment({ paymentId: "{{payment_id}}", sessionId: "{{session_id}}", devKey: "{{developer_key}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payments.getPayment(request)`

- **OnSuccess**: <code>[PaymentResponseDto](src/models/payment-response-dto.ts)</code>
- **OnError**: throws <code>[Payments.GetPaymentError](src/resources/payments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payments.getPayment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentResponseDto, Payments.GetPaymentError&gt;</code>, with `result.value` of type <code>[PaymentResponseDto](src/models/payment-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPaymentOptions(request: Payments.ListPaymentOptionsRequest, options?: RequestOptions): ApiPromise&lt;PaymentOptionsResponseDto, Payments.ListPaymentOptionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of vendor payment options available based on the funding account options available in the signed-in user's BILL organization and on the payment methods accepted by a vendor.

See Vendor payment options in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.listPaymentOptions({
    vendorId: "{{vendor_id}}",
    amount: 100,
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type PaymentOptionsResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Payments.ListPaymentOptionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payments
  .listPaymentOptions({
    vendorId: "{{vendor_id}}",
    amount: 100,
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentOptionsResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendorId</code> | <code>string</code> | - |
| <code>amount</code> | <code>number</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payments.listPaymentOptions(request)`

- **OnSuccess**: <code>[PaymentOptionsResponseDto](src/models/payment-options-response-dto.ts)</code>
- **OnError**: throws <code>[Payments.ListPaymentOptionsError](src/resources/payments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payments.listPaymentOptions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentOptionsResponseDto, Payments.ListPaymentOptionsError&gt;</code>, with `result.value` of type <code>[PaymentOptionsResponseDto](src/models/payment-options-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPayments(request?: Payments.ListPaymentsRequest, options?: RequestOptions): ApiPromise&lt;ListPaymentResponseDto, Payments.ListPaymentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of payment objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.listPayments({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{payment_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListPaymentResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Payments.ListPaymentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payments
  .listPayments({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{payment_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListPaymentResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max?</code> | <code>number</code> | - |
| <code>sort?</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payments.listPayments(request)`

- **OnSuccess**: <code>[ListPaymentResponseDto](src/models/list-payment-response-dto.ts)</code>
- **OnError**: throws <code>[Payments.ListPaymentsError](src/resources/payments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payments.listPayments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListPaymentResponseDto, Payments.ListPaymentsError&gt;</code>, with `result.value` of type <code>[ListPaymentResponseDto](src/models/list-payment-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>voidPayment(request: Payments.VoidPaymentRequest, options?: RequestOptions): ApiPromise&lt;PaymentResponseDto, Payments.VoidPaymentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Void an existing payment.

Void a bill payment that has started processing and cannot be canceled (with `POST /v3/payments/{paymentId}/cancel`). You can attempt to void payments made both with BILL (online) and outside BILL (offline).

### Void a payment made with BILL (online)

In your /`POST /v3/payments/{paymentId}/void` request:
* Set `paymentId` as the BILL-generated ID of the payment. The value begins with `stp`.
* Set `type` as the void payment request type
* Set `reason` as the reason for voiding the payment

See Can I cancel or void a Payables payment? in the BILL Help Center to learn about the BILL void payment process and timing in the production environment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.voidPayment({
    paymentId: "{{payment_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { type: VoidTypeRequest.VoidAndCredit, reason: "some example string" },
  });
  // TODO: Handle 'response' of type PaymentResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Payments.VoidPaymentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payments
  .voidPayment({
    paymentId: "{{payment_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { type: VoidTypeRequest.VoidAndCredit, reason: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[VoidRequestDto](src/models/void-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payments.voidPayment(request)`

- **OnSuccess**: <code>[PaymentResponseDto](src/models/payment-response-dto.ts)</code>
- **OnError**: throws <code>[Payments.VoidPaymentError](src/resources/payments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payments.voidPayment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentResponseDto, Payments.VoidPaymentError&gt;</code>, with `result.value` of type <code>[PaymentResponseDto](src/models/payment-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ReceivablePayments

> Source: [ReceivablePayments](src/resources/receivable-payments.ts)

<details>
<summary><code>chargeCustomer(request: ReceivablePayments.ChargeCustomerRequest, options?: RequestOptions): ApiPromise&lt;ReceivablePaymentResponseDto, ReceivablePayments.ChargeCustomerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Charge a customer for one or more invoices.

Charging a customer follows a set of rules.
* **Customer authorization**: The customer `authorizedToCharge` field must be set as `true` for you to charge the customer for invoices. Set charge customer authorization with `POST /v3/customers/{customerId}/charge-authorization`.
* **Customer bank account**: A customer bank account is required for you to charge a customer. Create a customer bank account with `POST /v3/customers/{customerId}/bank-accounts`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.receivablePayments.chargeCustomer({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {
      customerId: "some example string",
      fundingAccount: { id: "some example string", type: ReceivableFundingAccountTypeRequestDto.BankAccount },
      invoicePayments: [{ invoiceId: "some example string", amount: 1.5 }],
    },
  });
  // TODO: Handle 'response' of type ReceivablePaymentResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ReceivablePayments.ChargeCustomerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.receivablePayments
  .chargeCustomer({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {
      customerId: "some example string",
      fundingAccount: { id: "some example string", type: ReceivableFundingAccountTypeRequestDto.BankAccount },
      invoicePayments: [{ invoiceId: "some example string", amount: 1.5 }],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReceivablePaymentResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[ChargeCustomerRequestDto](src/models/charge-customer-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.receivablePayments.chargeCustomer(request)`

- **OnSuccess**: <code>[ReceivablePaymentResponseDto](src/models/receivable-payment-response-dto.ts)</code>
- **OnError**: throws <code>[ReceivablePayments.ChargeCustomerError](src/resources/receivable-payments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.receivablePayments.chargeCustomer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReceivablePaymentResponseDto, ReceivablePayments.ChargeCustomerError&gt;</code>, with `result.value` of type <code>[ReceivablePaymentResponseDto](src/models/receivable-payment-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getReceivablePayment(request: ReceivablePayments.GetReceivablePaymentRequest, options?: RequestOptions): ApiPromise&lt;ReceivablePaymentResponseDto, ReceivablePayments.GetReceivablePaymentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing received payment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.receivablePayments.getReceivablePayment({
    receivedPaymentId: "{{received_payment_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ReceivablePaymentResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ReceivablePayments.GetReceivablePaymentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.receivablePayments
  .getReceivablePayment({
    receivedPaymentId: "{{received_payment_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReceivablePaymentResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>receivedPaymentId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.receivablePayments.getReceivablePayment(request)`

- **OnSuccess**: <code>[ReceivablePaymentResponseDto](src/models/receivable-payment-response-dto.ts)</code>
- **OnError**: throws <code>[ReceivablePayments.GetReceivablePaymentError](src/resources/receivable-payments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.receivablePayments.getReceivablePayment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReceivablePaymentResponseDto, ReceivablePayments.GetReceivablePaymentError&gt;</code>, with `result.value` of type <code>[ReceivablePaymentResponseDto](src/models/receivable-payment-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listReceivablePayments(request?: ReceivablePayments.ListReceivablePaymentsRequest, options?: RequestOptions): ApiPromise&lt;ListResponseDtoReceivablePaymentResponseDto, ReceivablePayments.ListReceivablePaymentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of received payment objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.receivablePayments.listReceivablePayments({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{received_payment_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListResponseDtoReceivablePaymentResponseDto
} catch (err) {
  // TODO: Handle 'err' of type ReceivablePayments.ListReceivablePaymentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.receivablePayments
  .listReceivablePayments({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{received_payment_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseDtoReceivablePaymentResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max?</code> | <code>number</code> | - |
| <code>sort?</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.receivablePayments.listReceivablePayments(request)`

- **OnSuccess**: <code>[ListResponseDtoReceivablePaymentResponseDto](src/models/list-response-dto-receivable-payment-response-dto.ts)</code>
- **OnError**: throws <code>[ReceivablePayments.ListReceivablePaymentsError](src/resources/receivable-payments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.receivablePayments.listReceivablePayments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseDtoReceivablePaymentResponseDto, ReceivablePayments.ListReceivablePaymentsError&gt;</code>, with `result.value` of type <code>[ListResponseDtoReceivablePaymentResponseDto](src/models/list-response-dto-receivable-payment-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## RecurringInvoices

> Source: [RecurringInvoices](src/resources/recurring-invoices.ts)

<details>
<summary><code>archiveRecurringInvoice(request: RecurringInvoices.ArchiveRecurringInvoiceRequest, options?: RequestOptions): ApiPromise&lt;RecurringInvoiceResponseDto, RecurringInvoices.ArchiveRecurringInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive a recurring invoice. In the response, the `archived` field is set as `true`.

You can restore an archived recurring invoice with `POST /v3/recurring-invoices/{recurringinvoiceId}/restore`. There is no change when you archive an archived recurring invoice.

When a recurring invoice is modified, all future invoices are automatically changed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recurringInvoices.archiveRecurringInvoice({
    recurringInvoiceId: "{{recurring_invoice_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type RecurringInvoiceResponseDto
} catch (err) {
  // TODO: Handle 'err' of type RecurringInvoices.ArchiveRecurringInvoiceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recurringInvoices
  .archiveRecurringInvoice({
    recurringInvoiceId: "{{recurring_invoice_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RecurringInvoiceResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>recurringInvoiceId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recurringInvoices.archiveRecurringInvoice(request)`

- **OnSuccess**: <code>[RecurringInvoiceResponseDto](src/models/recurring-invoice-response-dto.ts)</code>
- **OnError**: throws <code>[RecurringInvoices.ArchiveRecurringInvoiceError](src/resources/recurring-invoices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.recurringInvoices.archiveRecurringInvoice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RecurringInvoiceResponseDto, RecurringInvoices.ArchiveRecurringInvoiceError&gt;</code>, with `result.value` of type <code>[RecurringInvoiceResponseDto](src/models/recurring-invoice-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createRecurringInvoice(request: RecurringInvoices.CreateRecurringInvoiceRequest, options?: RequestOptions): ApiPromise&lt;RecurringInvoiceResponseDto, RecurringInvoices.CreateRecurringInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a recurring invoice.

See Recurring invoices in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recurringInvoices.createRecurringInvoice({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { customerId: "some example string", schedule: {}, recurringInvoiceLineItems: [{}] },
  });
  // TODO: Handle 'response' of type RecurringInvoiceResponseDto
} catch (err) {
  // TODO: Handle 'err' of type RecurringInvoices.CreateRecurringInvoiceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recurringInvoices
  .createRecurringInvoice({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { customerId: "some example string", schedule: {}, recurringInvoiceLineItems: [{}] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RecurringInvoiceResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[CreateRecurringInvoiceRequestDto](src/models/create-recurring-invoice-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recurringInvoices.createRecurringInvoice(request)`

- **OnSuccess**: <code>[RecurringInvoiceResponseDto](src/models/recurring-invoice-response-dto.ts)</code>
- **OnError**: throws <code>[RecurringInvoices.CreateRecurringInvoiceError](src/resources/recurring-invoices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.recurringInvoices.createRecurringInvoice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RecurringInvoiceResponseDto, RecurringInvoices.CreateRecurringInvoiceError&gt;</code>, with `result.value` of type <code>[RecurringInvoiceResponseDto](src/models/recurring-invoice-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRecurringInvoice(request: RecurringInvoices.GetRecurringInvoiceRequest, options?: RequestOptions): ApiPromise&lt;RecurringInvoiceResponseDto, RecurringInvoices.GetRecurringInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing recurring invoice.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recurringInvoices.getRecurringInvoice({
    recurringInvoiceId: "{{recurring_invoice_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type RecurringInvoiceResponseDto
} catch (err) {
  // TODO: Handle 'err' of type RecurringInvoices.GetRecurringInvoiceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recurringInvoices
  .getRecurringInvoice({
    recurringInvoiceId: "{{recurring_invoice_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RecurringInvoiceResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>recurringInvoiceId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recurringInvoices.getRecurringInvoice(request)`

- **OnSuccess**: <code>[RecurringInvoiceResponseDto](src/models/recurring-invoice-response-dto.ts)</code>
- **OnError**: throws <code>[RecurringInvoices.GetRecurringInvoiceError](src/resources/recurring-invoices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.recurringInvoices.getRecurringInvoice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RecurringInvoiceResponseDto, RecurringInvoices.GetRecurringInvoiceError&gt;</code>, with `result.value` of type <code>[RecurringInvoiceResponseDto](src/models/recurring-invoice-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listRecurringInvoices(request?: RecurringInvoices.ListRecurringInvoicesRequest, options?: RequestOptions): ApiPromise&lt;ListResponseDtoRecurringInvoiceResponseDto, RecurringInvoices.ListRecurringInvoicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of recurring invoice objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recurringInvoices.listRecurringInvoices({
    max: 10,
    sort: "archived",
    filters: "id:eq:{{recurring_invoice_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListResponseDtoRecurringInvoiceResponseDto
} catch (err) {
  // TODO: Handle 'err' of type RecurringInvoices.ListRecurringInvoicesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recurringInvoices
  .listRecurringInvoices({
    max: 10,
    sort: "archived",
    filters: "id:eq:{{recurring_invoice_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseDtoRecurringInvoiceResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max?</code> | <code>number</code> | - |
| <code>sort?</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recurringInvoices.listRecurringInvoices(request)`

- **OnSuccess**: <code>[ListResponseDtoRecurringInvoiceResponseDto](src/models/list-response-dto-recurring-invoice-response-dto.ts)</code>
- **OnError**: throws <code>[RecurringInvoices.ListRecurringInvoicesError](src/resources/recurring-invoices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.recurringInvoices.listRecurringInvoices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseDtoRecurringInvoiceResponseDto, RecurringInvoices.ListRecurringInvoicesError&gt;</code>, with `result.value` of type <code>[ListResponseDtoRecurringInvoiceResponseDto](src/models/list-response-dto-recurring-invoice-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>replaceRecurringInvoice(request: RecurringInvoices.ReplaceRecurringInvoiceRequest, options?: RequestOptions): ApiPromise&lt;RecurringInvoiceResponseDto, RecurringInvoices.ReplaceRecurringInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the number of line items in a recurring invoice. You can also update other recurring invoice details.

You can use the PUT operation to add, remove, or replace the number of line items in a recurring invoice. A set of rules apply with the PUT operation.
* When you add a new line item, a new line item `id` is generated in the invoice.
* When you omit an existing line item `id`, the line item is removed from the invoice.

When a recurring invoice is modified, all future invoices are automatically changed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recurringInvoices.replaceRecurringInvoice({
    recurringInvoiceId: "{{recurring_invoice_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { customerId: "some example string", schedule: {}, recurringInvoiceLineItems: [{}] },
  });
  // TODO: Handle 'response' of type RecurringInvoiceResponseDto
} catch (err) {
  // TODO: Handle 'err' of type RecurringInvoices.ReplaceRecurringInvoiceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recurringInvoices
  .replaceRecurringInvoice({
    recurringInvoiceId: "{{recurring_invoice_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { customerId: "some example string", schedule: {}, recurringInvoiceLineItems: [{}] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RecurringInvoiceResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>recurringInvoiceId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[RecurringInvoiceReplaceRequestDto](src/models/recurring-invoice-replace-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recurringInvoices.replaceRecurringInvoice(request)`

- **OnSuccess**: <code>[RecurringInvoiceResponseDto](src/models/recurring-invoice-response-dto.ts)</code>
- **OnError**: throws <code>[RecurringInvoices.ReplaceRecurringInvoiceError](src/resources/recurring-invoices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.recurringInvoices.replaceRecurringInvoice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RecurringInvoiceResponseDto, RecurringInvoices.ReplaceRecurringInvoiceError&gt;</code>, with `result.value` of type <code>[RecurringInvoiceResponseDto](src/models/recurring-invoice-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>restoreRecurringInvoice(request: RecurringInvoices.RestoreRecurringInvoiceRequest, options?: RequestOptions): ApiPromise&lt;RecurringInvoiceResponseDto, RecurringInvoices.RestoreRecurringInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived recurring invoice. In the response, the `archived` field is set as `false`.

You can perform any valid BILL operation on restored recurring invoices. There is no change when you restore a restored recurring invoice.

When a recurring invoice is modified, all future invoices are automatically changed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recurringInvoices.restoreRecurringInvoice({
    recurringInvoiceId: "{{recurring_invoice_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type RecurringInvoiceResponseDto
} catch (err) {
  // TODO: Handle 'err' of type RecurringInvoices.RestoreRecurringInvoiceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recurringInvoices
  .restoreRecurringInvoice({
    recurringInvoiceId: "{{recurring_invoice_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RecurringInvoiceResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>recurringInvoiceId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recurringInvoices.restoreRecurringInvoice(request)`

- **OnSuccess**: <code>[RecurringInvoiceResponseDto](src/models/recurring-invoice-response-dto.ts)</code>
- **OnError**: throws <code>[RecurringInvoices.RestoreRecurringInvoiceError](src/resources/recurring-invoices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.recurringInvoices.restoreRecurringInvoice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RecurringInvoiceResponseDto, RecurringInvoices.RestoreRecurringInvoiceError&gt;</code>, with `result.value` of type <code>[RecurringInvoiceResponseDto](src/models/recurring-invoice-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateRecurringInvoice(request: RecurringInvoices.UpdateRecurringInvoiceRequest, options?: RequestOptions): ApiPromise&lt;RecurringInvoiceResponseDto, RecurringInvoices.UpdateRecurringInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about a recurring invoice line item. You can also update other recurring invoice details.

You can use the PATCH operation to modify line item details, such as amount and description. The recurring invoice line item `id` does not change with a PATCH operation.

When a recurring invoice is modified, all future invoices are automatically changed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recurringInvoices.updateRecurringInvoice({
    recurringInvoiceId: "{{recurring_invoice_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  });
  // TODO: Handle 'response' of type RecurringInvoiceResponseDto
} catch (err) {
  // TODO: Handle 'err' of type RecurringInvoices.UpdateRecurringInvoiceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recurringInvoices
  .updateRecurringInvoice({
    recurringInvoiceId: "{{recurring_invoice_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RecurringInvoiceResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>recurringInvoiceId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[UpdateRecurringInvoiceRequestDto](src/models/update-recurring-invoice-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recurringInvoices.updateRecurringInvoice(request)`

- **OnSuccess**: <code>[RecurringInvoiceResponseDto](src/models/recurring-invoice-response-dto.ts)</code>
- **OnError**: throws <code>[RecurringInvoices.UpdateRecurringInvoiceError](src/resources/recurring-invoices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.recurringInvoices.updateRecurringInvoice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RecurringInvoiceResponseDto, RecurringInvoices.UpdateRecurringInvoiceError&gt;</code>, with `result.value` of type <code>[RecurringInvoiceResponseDto](src/models/recurring-invoice-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Recurringbills

> Source: [Recurringbills](src/resources/recurringbills.ts)

<details>
<summary><code>archiveRecurringBill(request: Recurringbills.ArchiveRecurringBillRequest, options?: RequestOptions): ApiPromise&lt;RecurringBillResponseDto, Recurringbills.ArchiveRecurringBillError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive a recurring bill. In the response, the `archived` field is set as `true`.

You can restore an archived recurring bill with `POST /v3/recurringbills/{recurringbillId}/restore`. There is no change when you archive an archived recurring bill.

When a recurring bill is modified, all future bills are automatically changed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recurringbills.archiveRecurringBill({
    recurringBillId: "{{recurring_bill_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type RecurringBillResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Recurringbills.ArchiveRecurringBillError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recurringbills
  .archiveRecurringBill({
    recurringBillId: "{{recurring_bill_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RecurringBillResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>recurringBillId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recurringbills.archiveRecurringBill(request)`

- **OnSuccess**: <code>[RecurringBillResponseDto](src/models/recurring-bill-response-dto.ts)</code>
- **OnError**: throws <code>[Recurringbills.ArchiveRecurringBillError](src/resources/recurringbills.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.recurringbills.archiveRecurringBill(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RecurringBillResponseDto, Recurringbills.ArchiveRecurringBillError&gt;</code>, with `result.value` of type <code>[RecurringBillResponseDto](src/models/recurring-bill-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createRecurringBill(request: Recurringbills.CreateRecurringBillRequest, options?: RequestOptions): ApiPromise&lt;RecurringBillResponseDto, Recurringbills.CreateRecurringBillError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a recurring bill.

See Recurring bills in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recurringbills.createRecurringBill({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { vendorId: "some example string", schedule: {}, recurringBillLineItems: [{ amount: 1.5 }] },
  });
  // TODO: Handle 'response' of type RecurringBillResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Recurringbills.CreateRecurringBillError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recurringbills
  .createRecurringBill({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { vendorId: "some example string", schedule: {}, recurringBillLineItems: [{ amount: 1.5 }] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RecurringBillResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[RecurringBillCreateRequestDto](src/models/recurring-bill-create-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recurringbills.createRecurringBill(request)`

- **OnSuccess**: <code>[RecurringBillResponseDto](src/models/recurring-bill-response-dto.ts)</code>
- **OnError**: throws <code>[Recurringbills.CreateRecurringBillError](src/resources/recurringbills.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.recurringbills.createRecurringBill(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RecurringBillResponseDto, Recurringbills.CreateRecurringBillError&gt;</code>, with `result.value` of type <code>[RecurringBillResponseDto](src/models/recurring-bill-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRecurringBill(request: Recurringbills.GetRecurringBillRequest, options?: RequestOptions): ApiPromise&lt;RecurringBillReadResponseDto, Recurringbills.GetRecurringBillError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing recurring bill.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recurringbills.getRecurringBill({
    recurringBillId: "{{recurring_bill_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type RecurringBillReadResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Recurringbills.GetRecurringBillError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recurringbills
  .getRecurringBill({
    recurringBillId: "{{recurring_bill_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RecurringBillReadResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>recurringBillId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recurringbills.getRecurringBill(request)`

- **OnSuccess**: <code>[RecurringBillReadResponseDto](src/models/recurring-bill-read-response-dto.ts)</code>
- **OnError**: throws <code>[Recurringbills.GetRecurringBillError](src/resources/recurringbills.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.recurringbills.getRecurringBill(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RecurringBillReadResponseDto, Recurringbills.GetRecurringBillError&gt;</code>, with `result.value` of type <code>[RecurringBillReadResponseDto](src/models/recurring-bill-read-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listRecurringBills(request?: Recurringbills.ListRecurringBillsRequest, options?: RequestOptions): ApiPromise&lt;ListRecurringBillResponseDto, Recurringbills.ListRecurringBillsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of recurring bill objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recurringbills.listRecurringBills({
    max: 10,
    sort: "archived",
    filters: "id:eq:{{recurring_bill_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListRecurringBillResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Recurringbills.ListRecurringBillsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recurringbills
  .listRecurringBills({
    max: 10,
    sort: "archived",
    filters: "id:eq:{{recurring_bill_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListRecurringBillResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max?</code> | <code>number</code> | - |
| <code>sort?</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recurringbills.listRecurringBills(request)`

- **OnSuccess**: <code>[ListRecurringBillResponseDto](src/models/list-recurring-bill-response-dto.ts)</code>
- **OnError**: throws <code>[Recurringbills.ListRecurringBillsError](src/resources/recurringbills.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.recurringbills.listRecurringBills(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListRecurringBillResponseDto, Recurringbills.ListRecurringBillsError&gt;</code>, with `result.value` of type <code>[ListRecurringBillResponseDto](src/models/list-recurring-bill-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>replaceRecurringBill(request: Recurringbills.ReplaceRecurringBillRequest, options?: RequestOptions): ApiPromise&lt;RecurringBillResponseDto, Recurringbills.ReplaceRecurringBillError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the number of line items in a recurring bill. You can also update other recurring bill details.

You can use the PUT operation to add, remove, or replace the number of line items in a recurring bill. A set of rules apply with the PUT operation.
* When you add a new line item, a new line item `id` is generated in the bill.
* When you omit an existing line item `id`, the line item is removed from the bill.

When a recurring bill is modified, all future bills are automatically changed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recurringbills.replaceRecurringBill({
    recurringBillId: "{{recurring_bill_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { vendorId: "some example string", schedule: {}, recurringBillLineItems: [{ amount: 1.5 }] },
  });
  // TODO: Handle 'response' of type RecurringBillResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Recurringbills.ReplaceRecurringBillError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recurringbills
  .replaceRecurringBill({
    recurringBillId: "{{recurring_bill_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { vendorId: "some example string", schedule: {}, recurringBillLineItems: [{ amount: 1.5 }] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RecurringBillResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>recurringBillId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[RecurringBillReplaceRequestDto](src/models/recurring-bill-replace-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recurringbills.replaceRecurringBill(request)`

- **OnSuccess**: <code>[RecurringBillResponseDto](src/models/recurring-bill-response-dto.ts)</code>
- **OnError**: throws <code>[Recurringbills.ReplaceRecurringBillError](src/resources/recurringbills.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.recurringbills.replaceRecurringBill(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RecurringBillResponseDto, Recurringbills.ReplaceRecurringBillError&gt;</code>, with `result.value` of type <code>[RecurringBillResponseDto](src/models/recurring-bill-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>restoreRecurringBill(request: Recurringbills.RestoreRecurringBillRequest, options?: RequestOptions): ApiPromise&lt;RecurringBillResponseDto, Recurringbills.RestoreRecurringBillError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived recurring bill. In the response, the `archived` field is set as `false`.

You can perform any valid BILL operation on restored recurring bills. There is no change when you restore a restored recurring bill.

When a recurring bill is modified, all future bills are automatically changed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recurringbills.restoreRecurringBill({
    recurringBillId: "{{recurring_bill_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type RecurringBillResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Recurringbills.RestoreRecurringBillError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recurringbills
  .restoreRecurringBill({
    recurringBillId: "{{recurring_bill_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RecurringBillResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>recurringBillId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recurringbills.restoreRecurringBill(request)`

- **OnSuccess**: <code>[RecurringBillResponseDto](src/models/recurring-bill-response-dto.ts)</code>
- **OnError**: throws <code>[Recurringbills.RestoreRecurringBillError](src/resources/recurringbills.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.recurringbills.restoreRecurringBill(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RecurringBillResponseDto, Recurringbills.RestoreRecurringBillError&gt;</code>, with `result.value` of type <code>[RecurringBillResponseDto](src/models/recurring-bill-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateRecurringBill(request: Recurringbills.UpdateRecurringBillRequest, options?: RequestOptions): ApiPromise&lt;RecurringBillResponseDto, Recurringbills.UpdateRecurringBillError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about a recurring bill line item. You can also update other recurring bill details.

You can use the PATCH operation to modify line item details, such as amount and description. The recurring bill line item `id` does not change with a PATCH operation.

When a recurring bill is modified, all future bills are automatically changed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recurringbills.updateRecurringBill({
    recurringBillId: "{{recurring_bill_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  });
  // TODO: Handle 'response' of type RecurringBillResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Recurringbills.UpdateRecurringBillError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recurringbills
  .updateRecurringBill({
    recurringBillId: "{{recurring_bill_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RecurringBillResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>recurringBillId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[RecurringBillUpdateRequestDto](src/models/recurring-bill-update-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recurringbills.updateRecurringBill(request)`

- **OnSuccess**: <code>[RecurringBillResponseDto](src/models/recurring-bill-response-dto.ts)</code>
- **OnError**: throws <code>[Recurringbills.UpdateRecurringBillError](src/resources/recurringbills.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.recurringbills.updateRecurringBill(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RecurringBillResponseDto, Recurringbills.UpdateRecurringBillError&gt;</code>, with `result.value` of type <code>[RecurringBillResponseDto](src/models/recurring-bill-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Reimbursements

> Source: [Reimbursements](src/resources/reimbursements.ts)

<details>
<summary><code>addReimbursementReceipt(request: Reimbursements.AddReimbursementReceiptRequest, options?: RequestOptions): ApiPromise&lt;ReceiptImage[], Reimbursements.AddReimbursementReceiptError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a receipt to an existing reimbursement.
In the request, use the same upload url that you used to upload the receipt image. See Create a reimbursement upload URL to learn about creating a reimbursement image upload URL.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reimbursements.addReimbursementReceipt({
    reimbursementId: "{{se_reimbursement_uuid}}",
    apiToken: "{{api_token}}",
    body: { url: "some example string", filename: "some example string" },
  });
  // TODO: Handle 'response' of type ReceiptImage[]
} catch (err) {
  // TODO: Handle 'err' of type Reimbursements.AddReimbursementReceiptError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reimbursements
  .addReimbursementReceipt({
    reimbursementId: "{{se_reimbursement_uuid}}",
    apiToken: "{{api_token}}",
    body: { url: "some example string", filename: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReceiptImage[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reimbursementId</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |
| <code>body</code> | <code>[ReimbursementReceiptRequestDto](src/models/reimbursement-receipt-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reimbursements.addReimbursementReceipt(request)`

- **OnSuccess**: <code>[ReceiptImage](src/models/receipt-image.ts)[]</code>
- **OnError**: throws <code>[Reimbursements.AddReimbursementReceiptError](src/resources/reimbursements.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reimbursements.addReimbursementReceipt(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReceiptImage[], Reimbursements.AddReimbursementReceiptError&gt;</code>, with `result.value` of type <code>[ReceiptImage](src/models/receipt-image.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>approveOrDenyReimbursement(request: Reimbursements.ApproveOrDenyReimbursementRequest, options?: RequestOptions): ApiPromise&lt;ReimbursementResponseDto, Reimbursements.ApproveOrDenyReimbursementError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Approve or deny a reimbursement request.

See Reimbursements in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reimbursements.approveOrDenyReimbursement({
    reimbursementId: "{{se_reimbursement_uuid}}",
    apiToken: "{{api_token}}",
    body: { action: ReimbursementActionType.Approve },
  });
  // TODO: Handle 'response' of type ReimbursementResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Reimbursements.ApproveOrDenyReimbursementError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reimbursements
  .approveOrDenyReimbursement({
    reimbursementId: "{{se_reimbursement_uuid}}",
    apiToken: "{{api_token}}",
    body: { action: ReimbursementActionType.Approve },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReimbursementResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reimbursementId</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |
| <code>body</code> | <code>[ReimbursementActionRequestDto](src/models/reimbursement-action-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reimbursements.approveOrDenyReimbursement(request)`

- **OnSuccess**: <code>[ReimbursementResponseDto](src/models/reimbursement-response-dto.ts)</code>
- **OnError**: throws <code>[Reimbursements.ApproveOrDenyReimbursementError](src/resources/reimbursements.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reimbursements.approveOrDenyReimbursement(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReimbursementResponseDto, Reimbursements.ApproveOrDenyReimbursementError&gt;</code>, with `result.value` of type <code>[ReimbursementResponseDto](src/models/reimbursement-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createImageUploadUrl(request?: Reimbursements.CreateImageUploadUrlRequest, options?: RequestOptions): ApiPromise&lt;ReimbursementImageUploadUrlResponseDto, Reimbursements.CreateImageUploadUrlError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a reimbursement image upload URL.

From the response, use the upload `url` to upload a receipt image for the reimbursement. For example, to upload a JPEG image, use the following `curl` command. To upload a PNG image, set the content type as `image/png`.

```
curl '{upload_url}'
-H 'Content-Type: image/jpeg'
--upload-file {file_name_with_extension}
```

**Note**: BILL supports JPG and PNG file formats for reimbursement images.

See Reimbursements in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reimbursements.createImageUploadUrl({ apiToken: "{{api_token}}" });
  // TODO: Handle 'response' of type ReimbursementImageUploadUrlResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Reimbursements.CreateImageUploadUrlError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reimbursements.createImageUploadUrl({ apiToken: "{{api_token}}" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReimbursementImageUploadUrlResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reimbursements.createImageUploadUrl(request)`

- **OnSuccess**: <code>[ReimbursementImageUploadUrlResponseDto](src/models/reimbursement-image-upload-url-response-dto.ts)</code>
- **OnError**: throws <code>[Reimbursements.CreateImageUploadUrlError](src/resources/reimbursements.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reimbursements.createImageUploadUrl(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReimbursementImageUploadUrlResponseDto, Reimbursements.CreateImageUploadUrlError&gt;</code>, with `result.value` of type <code>[ReimbursementImageUploadUrlResponseDto](src/models/reimbursement-image-upload-url-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createReimbursement(request: Reimbursements.CreateReimbursementRequest, options?: RequestOptions): ApiPromise&lt;ReimbursementResponseDto, Reimbursements.CreateReimbursementError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new reimbursement.

See Reimbursements in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reimbursements.createReimbursement({
    apiToken: "{{api_token}}",
    body: {
      userId: "some example string",
      budgetId: "some example string",
      amount: 1.5,
      note: "some example string",
      merchantName: "some example string",
      occurredDate: "2024-01-15",
      receipts: [{ url: "some example string", filename: "some example string" }],
    },
  });
  // TODO: Handle 'response' of type ReimbursementResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Reimbursements.CreateReimbursementError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reimbursements
  .createReimbursement({
    apiToken: "{{api_token}}",
    body: {
      userId: "some example string",
      budgetId: "some example string",
      amount: 1.5,
      note: "some example string",
      merchantName: "some example string",
      occurredDate: "2024-01-15",
      receipts: [{ url: "some example string", filename: "some example string" }],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReimbursementResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiToken?</code> | <code>string</code> | - |
| <code>body</code> | <code>[CreateReimbursementRequestDto](src/models/create-reimbursement-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reimbursements.createReimbursement(request)`

- **OnSuccess**: <code>[ReimbursementResponseDto](src/models/reimbursement-response-dto.ts)</code>
- **OnError**: throws <code>[Reimbursements.CreateReimbursementError](src/resources/reimbursements.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reimbursements.createReimbursement(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReimbursementResponseDto, Reimbursements.CreateReimbursementError&gt;</code>, with `result.value` of type <code>[ReimbursementResponseDto](src/models/reimbursement-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteReimbursement(request: Reimbursements.DeleteReimbursementRequest, options?: RequestOptions): ApiPromise&lt;undefined, Reimbursements.DeleteReimbursementError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an existing reimbursement. A deleted reimbursement cannot be restored. The deleted reimbursement is not available in the list of reimbursements.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.reimbursements.deleteReimbursement({
    reimbursementId: "{{se_reimbursement_uuid}}",
    apiToken: "{{api_token}}",
  });
} catch (err) {
  // TODO: Handle 'err' of type Reimbursements.DeleteReimbursementError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reimbursements
  .deleteReimbursement({ reimbursementId: "{{se_reimbursement_uuid}}", apiToken: "{{api_token}}" })
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
| <code>reimbursementId</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reimbursements.deleteReimbursement(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Reimbursements.DeleteReimbursementError](src/resources/reimbursements.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reimbursements.deleteReimbursement(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Reimbursements.DeleteReimbursementError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteReimbursementReceipt(request: Reimbursements.DeleteReimbursementReceiptRequest, options?: RequestOptions): ApiPromise&lt;undefined, Reimbursements.DeleteReimbursementReceiptError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a receipt from an existing reimbursement. A deleted receipt cannot be restored. The deleted receipt is not available in the reimbursement details.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.reimbursements.deleteReimbursementReceipt({
    reimbursementId: "{{se_reimbursement_uuid}}",
    receiptId: "{{se_reimbursement_receipt_uuid}}",
    apiToken: "{{api_token}}",
  });
} catch (err) {
  // TODO: Handle 'err' of type Reimbursements.DeleteReimbursementReceiptError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reimbursements
  .deleteReimbursementReceipt({
    reimbursementId: "{{se_reimbursement_uuid}}",
    receiptId: "{{se_reimbursement_receipt_uuid}}",
    apiToken: "{{api_token}}",
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
| <code>reimbursementId</code> | <code>string</code> | - |
| <code>receiptId</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reimbursements.deleteReimbursementReceipt(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Reimbursements.DeleteReimbursementReceiptError](src/resources/reimbursements.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reimbursements.deleteReimbursementReceipt(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Reimbursements.DeleteReimbursementReceiptError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getReimbursement(request: Reimbursements.GetReimbursementRequest, options?: RequestOptions): ApiPromise&lt;ReimbursementResponseDto, Reimbursements.GetReimbursementError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing reimbursement.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reimbursements.getReimbursement({
    reimbursementId: "{{se_reimbursement_uuid}}",
    apiToken: "{{api_token}}",
  });
  // TODO: Handle 'response' of type ReimbursementResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Reimbursements.GetReimbursementError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reimbursements
  .getReimbursement({ reimbursementId: "{{se_reimbursement_uuid}}", apiToken: "{{api_token}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReimbursementResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reimbursementId</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reimbursements.getReimbursement(request)`

- **OnSuccess**: <code>[ReimbursementResponseDto](src/models/reimbursement-response-dto.ts)</code>
- **OnError**: throws <code>[Reimbursements.GetReimbursementError](src/resources/reimbursements.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reimbursements.getReimbursement(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReimbursementResponseDto, Reimbursements.GetReimbursementError&gt;</code>, with `result.value` of type <code>[ReimbursementResponseDto](src/models/reimbursement-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listReimbursements(request?: Reimbursements.ListReimbursementsRequest, options?: RequestOptions): ApiPromise&lt;PaginationResponseDtoReimbursementResponseDto, Reimbursements.ListReimbursementsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of reimbursement objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reimbursements.listReimbursements({
    max: 10,
    sort: "submittedTime:desc",
    filters: "reimbursementIds:eq:{{se_reimbursement_uuid}}",
    apiToken: "{{api_token}}",
  });
  // TODO: Handle 'response' of type PaginationResponseDtoReimbursementResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Reimbursements.ListReimbursementsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reimbursements
  .listReimbursements({
    max: 10,
    sort: "submittedTime:desc",
    filters: "reimbursementIds:eq:{{se_reimbursement_uuid}}",
    apiToken: "{{api_token}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginationResponseDtoReimbursementResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>nextPage?</code> | <code>string</code> | - |
| <code>prevPage?</code> | <code>string</code> | - |
| <code>max?</code> | <code>number</code> | - |
| <code>sort?</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reimbursements.listReimbursements(request)`

- **OnSuccess**: <code>[PaginationResponseDtoReimbursementResponseDto](src/models/pagination-response-dto-reimbursement-response-dto.ts)</code>
- **OnError**: throws <code>[Reimbursements.ListReimbursementsError](src/resources/reimbursements.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reimbursements.listReimbursements(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginationResponseDtoReimbursementResponseDto, Reimbursements.ListReimbursementsError&gt;</code>, with `result.value` of type <code>[PaginationResponseDtoReimbursementResponseDto](src/models/pagination-response-dto-reimbursement-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateReimbursement(request: Reimbursements.UpdateReimbursementRequest, options?: RequestOptions): ApiPromise&lt;ReimbursementResponseDto, Reimbursements.UpdateReimbursementError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing reimbursement.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reimbursements.updateReimbursement({
    reimbursementId: "{{se_reimbursement_uuid}}",
    apiToken: "{{api_token}}",
    body: {},
  });
  // TODO: Handle 'response' of type ReimbursementResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Reimbursements.UpdateReimbursementError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reimbursements
  .updateReimbursement({ reimbursementId: "{{se_reimbursement_uuid}}", apiToken: "{{api_token}}", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReimbursementResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reimbursementId</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |
| <code>body</code> | <code>[UpdateReimbursementRequestDto](src/models/update-reimbursement-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reimbursements.updateReimbursement(request)`

- **OnSuccess**: <code>[ReimbursementResponseDto](src/models/reimbursement-response-dto.ts)</code>
- **OnError**: throws <code>[Reimbursements.UpdateReimbursementError](src/resources/reimbursements.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reimbursements.updateReimbursement(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReimbursementResponseDto, Reimbursements.UpdateReimbursementError&gt;</code>, with `result.value` of type <code>[ReimbursementResponseDto](src/models/reimbursement-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Reports

> Source: [Reports](src/resources/reports.ts)

<details>
<summary><code>getVendorAuditTrail(request: Reports.GetVendorAuditTrailRequest, options?: RequestOptions): ApiPromise&lt;AuditTrailEntry[], Reports.GetVendorAuditTrailError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get audit trail details about changes made to a vendor object. The audit trail lists records for each create and edit operation.

See Get audit trail details in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.getVendorAuditTrail({
    vendorId: "{{vendor_id}}",
    max: 10,
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type AuditTrailEntry[]
} catch (err) {
  // TODO: Handle 'err' of type Reports.GetVendorAuditTrailError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports
  .getVendorAuditTrail({
    vendorId: "{{vendor_id}}",
    max: 10,
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AuditTrailEntry[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendorId</code> | <code>string</code> | - |
| <code>includeArchived?</code> | <code>boolean</code> | - |
| <code>start?</code> | <code>number</code> | - |
| <code>max?</code> | <code>number</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.getVendorAuditTrail(request)`

- **OnSuccess**: <code>[AuditTrailEntry](src/models/audit-trail-entry.ts)[]</code>
- **OnError**: throws <code>[Reports.GetVendorAuditTrailError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.getVendorAuditTrail(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AuditTrailEntry[], Reports.GetVendorAuditTrailError&gt;</code>, with `result.value` of type <code>[AuditTrailEntry](src/models/audit-trail-entry.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## RiskVerifications

> Source: [RiskVerifications](src/resources/risk-verifications.ts)

<details>
<summary><code>createRiskVerificationPhone(request: RiskVerifications.CreateRiskVerificationPhoneRequest, options?: RequestOptions): ApiPromise&lt;undefined, RiskVerifications.CreateRiskVerificationPhoneError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a phone number for the currently signed-in user. BILL requires the signed-in user to have a linked phone number for initiating risk verification for the organization.

You can check whether a phone number has been added for the user with `GET /v3/risk-verifications/phone`.

After you add a phone number with this endpoint, you can initiate risk verification for the organization with `POST /v3/risk-verifications`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.riskVerifications.createRiskVerificationPhone({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { phoneNumber: "some example string", phoneType: PhoneType.Mobile },
  });
} catch (err) {
  // TODO: Handle 'err' of type RiskVerifications.CreateRiskVerificationPhoneError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.riskVerifications
  .createRiskVerificationPhone({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { phoneNumber: "some example string", phoneType: PhoneType.Mobile },
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
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[PhoneVerificationRequestDto](src/models/phone-verification-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.riskVerifications.createRiskVerificationPhone(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[RiskVerifications.CreateRiskVerificationPhoneError](src/resources/risk-verifications.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.riskVerifications.createRiskVerificationPhone(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, RiskVerifications.CreateRiskVerificationPhoneError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRiskVerificationPhone(request?: RiskVerifications.GetRiskVerificationPhoneRequest, options?: RequestOptions): ApiPromise&lt;GetPhoneStatusResponseDto, RiskVerifications.GetRiskVerificationPhoneError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check whether a phone number has been added for the currently signed-in user. BILL requires the signed-in user to have a linked phone number for initiating risk verification for the organization.

In the response, if `hasPhone` is `false`, you can add a phone number for the user with `POST /v3/risk-verifications/phone`.

After you add a phone number, you can initiate risk verification for the organization with `POST /v3/risk-verifications`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.riskVerifications.getRiskVerificationPhone({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type GetPhoneStatusResponseDto
} catch (err) {
  // TODO: Handle 'err' of type RiskVerifications.GetRiskVerificationPhoneError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.riskVerifications
  .getRiskVerificationPhone({ sessionId: "{{session_id}}", devKey: "{{developer_key}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetPhoneStatusResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.riskVerifications.getRiskVerificationPhone(request)`

- **OnSuccess**: <code>[GetPhoneStatusResponseDto](src/models/get-phone-status-response-dto.ts)</code>
- **OnError**: throws <code>[RiskVerifications.GetRiskVerificationPhoneError](src/resources/risk-verifications.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.riskVerifications.getRiskVerificationPhone(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetPhoneStatusResponseDto, RiskVerifications.GetRiskVerificationPhoneError&gt;</code>, with `result.value` of type <code>[GetPhoneStatusResponseDto](src/models/get-phone-status-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRiskVerifications(request?: RiskVerifications.GetRiskVerificationsRequest, options?: RequestOptions): ApiPromise&lt;VerificationResponseDto, RiskVerifications.GetRiskVerificationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get risk verification details for an existing organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.riskVerifications.getRiskVerifications({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type VerificationResponseDto
} catch (err) {
  // TODO: Handle 'err' of type RiskVerifications.GetRiskVerificationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.riskVerifications
  .getRiskVerifications({ sessionId: "{{session_id}}", devKey: "{{developer_key}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VerificationResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.riskVerifications.getRiskVerifications(request)`

- **OnSuccess**: <code>[VerificationResponseDto](src/models/verification-response-dto.ts)</code>
- **OnError**: throws <code>[RiskVerifications.GetRiskVerificationsError](src/resources/risk-verifications.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.riskVerifications.getRiskVerifications(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VerificationResponseDto, RiskVerifications.GetRiskVerificationsError&gt;</code>, with `result.value` of type <code>[VerificationResponseDto](src/models/verification-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>initiateRiskVerifications(request?: RiskVerifications.InitiateRiskVerificationsRequest, options?: RequestOptions): ApiPromise&lt;VerificationResponseDto, RiskVerifications.InitiateRiskVerificationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiate risk verification for an organization. The currently signed-in user must have the `ADMINISTRATOR` user role in the BILL organization to perform this operation.

**Note**: You must add a phone number for the signed-in user (with `POST /v3/risk-verifications/phone`) before you can initiate risk verification. BILL partners must add a phone number for a created user with `POST /v3/partner/risk-verifications/{userId}/phone`.

As a BILL partner, when you create an organization and then create a user for that organization, it is important that you initiate risk verification with `POST /v3/risk-verifications`.

BILL performs a KYC/KYB (Know You Customer/Know Your Business) check based on the provided organization information. BILL sends an email notification for risk verification. When the check is complete, BILL approves the organization for BILL AP and AR operations.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.riskVerifications.initiateRiskVerifications({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type VerificationResponseDto
} catch (err) {
  // TODO: Handle 'err' of type RiskVerifications.InitiateRiskVerificationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.riskVerifications
  .initiateRiskVerifications({ sessionId: "{{session_id}}", devKey: "{{developer_key}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VerificationResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.riskVerifications.initiateRiskVerifications(request)`

- **OnSuccess**: <code>[VerificationResponseDto](src/models/verification-response-dto.ts)</code>
- **OnError**: throws <code>[RiskVerifications.InitiateRiskVerificationsError](src/resources/risk-verifications.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.riskVerifications.initiateRiskVerifications(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VerificationResponseDto, RiskVerifications.InitiateRiskVerificationsError&gt;</code>, with `result.value` of type <code>[VerificationResponseDto](src/models/verification-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Roles

> Source: [Roles](src/resources/roles.ts)

<details>
<summary><code>getOrganizationUserRole(request: Roles.GetOrganizationUserRoleRequest, options?: RequestOptions): ApiPromise&lt;RoleResponseDto, Roles.GetOrganizationUserRoleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing user role.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.roles.getOrganizationUserRole({
    roleId: "{{org_user_role_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type RoleResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Roles.GetOrganizationUserRoleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.roles
  .getOrganizationUserRole({
    roleId: "{{org_user_role_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RoleResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>roleId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.roles.getOrganizationUserRole(request)`

- **OnSuccess**: <code>[RoleResponseDto](src/models/role-response-dto.ts)</code>
- **OnError**: throws <code>[Roles.GetOrganizationUserRoleError](src/resources/roles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.roles.getOrganizationUserRole(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RoleResponseDto, Roles.GetOrganizationUserRoleError&gt;</code>, with `result.value` of type <code>[RoleResponseDto](src/models/role-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listOrganizationUserRoles(request?: Roles.ListOrganizationUserRolesRequest, options?: RequestOptions): ApiPromise&lt;ListResponseDtoRoleResponseDto, Roles.ListOrganizationUserRolesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of user role objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.roles.listOrganizationUserRoles({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{org_user_role_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListResponseDtoRoleResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Roles.ListOrganizationUserRolesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.roles
  .listOrganizationUserRoles({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{org_user_role_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseDtoRoleResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max?</code> | <code>number</code> | - |
| <code>sort?</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.roles.listOrganizationUserRoles(request)`

- **OnSuccess**: <code>[ListResponseDtoRoleResponseDto](src/models/list-response-dto-role-response-dto.ts)</code>
- **OnError**: throws <code>[Roles.ListOrganizationUserRolesError](src/resources/roles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.roles.listOrganizationUserRoles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseDtoRoleResponseDto, Roles.ListOrganizationUserRolesError&gt;</code>, with `result.value` of type <code>[ListResponseDtoRoleResponseDto](src/models/list-response-dto-role-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Subscriptions

> Source: [Subscriptions](src/resources/subscriptions.ts)

<details>
<summary><code>createNewSecurityKey(request: Subscriptions.CreateNewSecurityKeyRequest, options?: RequestOptions): ApiPromise&lt;SecurityKeyDto, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new security key for your subscription.

When you create a new subscription, a one-time `securityKey` is one of the generated values in the response. All event notifications sent to your `notificationUrl` are signed with this key using the HMAC-SHA256 algorithm. The key is sent as the `x-bill-sha-signature` header value in the notification.

You can use the security key to verify all notifications sent to you. It is good practice to keep the security key for your subscription updated in a timely manner. You can use this endpoint to generate a new security key based on your desired frequency.

See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL events.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.createNewSecurityKey({
    subscriptionId: "{{webhook_subscription_id}}",
    xIdempotentKey: "{{webhook_idempotency_key}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    appKey: "{{app_key}}",
    apiToken: "{{api_token}}",
  });
  // TODO: Handle 'response' of type SecurityKeyDto
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
const result = await client.subscriptions
  .createNewSecurityKey({
    subscriptionId: "{{webhook_subscription_id}}",
    xIdempotentKey: "{{webhook_idempotency_key}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    appKey: "{{app_key}}",
    apiToken: "{{api_token}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SecurityKeyDto
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
| <code>subscriptionId</code> | <code>string</code> | - |
| <code>xIdempotentKey</code> | <code>string</code> | Idempotency key. The key must be in the UUID4 format. |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>appKey?</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.createNewSecurityKey(request)`

- **OnSuccess**: <code>[SecurityKeyDto](src/models/security-key-dto.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.subscriptions.createNewSecurityKey(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SecurityKeyDto, ApiError&gt;</code>, with `result.value` of type <code>[SecurityKeyDto](src/models/security-key-dto.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createSubscription(request: Subscriptions.CreateSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionWithSecurityKeyResponseDto, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new event subscription. You can subscribe to multiple events with a single request. You can create up to 10 webhook subscriptions per organization.

BILL provides a full catalog of all the events that you can subscribe to with `GET /v3/events/catalog`. See Get events catalog in the API reference for more information.

See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL events.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.createSubscription({
    xIdempotentKey: "{{webhook_idempotency_key}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    appKey: "{{app_key}}",
    apiToken: "{{api_token}}",
    body: {
      name: "some example string",
      status: {},
      events: [{ type: "some example string", version: "some example string" }],
      notificationUrl: "some example string",
    },
  });
  // TODO: Handle 'response' of type SubscriptionWithSecurityKeyResponseDto
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
const result = await client.subscriptions
  .createSubscription({
    xIdempotentKey: "{{webhook_idempotency_key}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    appKey: "{{app_key}}",
    apiToken: "{{api_token}}",
    body: {
      name: "some example string",
      status: {},
      events: [{ type: "some example string", version: "some example string" }],
      notificationUrl: "some example string",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubscriptionWithSecurityKeyResponseDto
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
| <code>xIdempotentKey</code> | <code>string</code> | Idempotency key. The key must be in the UUID4 format. |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>appKey?</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |
| <code>body</code> | <code>[SubscriptionRequestDto](src/models/subscription-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.createSubscription(request)`

- **OnSuccess**: <code>[SubscriptionWithSecurityKeyResponseDto](src/models/subscription-with-security-key-response-dto.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.subscriptions.createSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubscriptionWithSecurityKeyResponseDto, ApiError&gt;</code>, with `result.value` of type <code>[SubscriptionWithSecurityKeyResponseDto](src/models/subscription-with-security-key-response-dto.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSubscription(request: Subscriptions.DeleteSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an existing subscription.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.subscriptions.deleteSubscription({
    subscriptionId: "{{webhook_subscription_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    appKey: "{{app_key}}",
    apiToken: "{{api_token}}",
  });
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
const result = await client.subscriptions
  .deleteSubscription({
    subscriptionId: "{{webhook_subscription_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    appKey: "{{app_key}}",
    apiToken: "{{api_token}}",
  })
  .asApiResult();
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
| <code>subscriptionId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>appKey?</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.deleteSubscription(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.subscriptions.deleteSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllSubscriptions(request?: Subscriptions.GetAllSubscriptionsRequest, options?: RequestOptions): ApiPromise&lt;PaginationDtoSubscriptionResponseDto, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all your created subscriptions.

By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

**Note**: In this list operation, pagination is available only in one direction. The `nextPage` value is available in the response for you to retrieve the next page of results. However, you cannot retrieve the previous page of results.

See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL events.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.getAllSubscriptions({
    max: 10,
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    appKey: "{{app_key}}",
    apiToken: "{{api_token}}",
  });
  // TODO: Handle 'response' of type PaginationDtoSubscriptionResponseDto
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
const result = await client.subscriptions
  .getAllSubscriptions({
    max: 10,
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    appKey: "{{app_key}}",
    apiToken: "{{api_token}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginationDtoSubscriptionResponseDto
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
| <code>max?</code> | <code>number</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>appKey?</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.getAllSubscriptions(request)`

- **OnSuccess**: <code>[PaginationDtoSubscriptionResponseDto](src/models/pagination-dto-subscription-response-dto.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.subscriptions.getAllSubscriptions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginationDtoSubscriptionResponseDto, ApiError&gt;</code>, with `result.value` of type <code>[PaginationDtoSubscriptionResponseDto](src/models/pagination-dto-subscription-response-dto.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSubscription(request: Subscriptions.GetSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionResponseDto, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing subscription.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.getSubscription({
    subscriptionId: "{{webhook_subscription_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    appKey: "{{app_key}}",
    apiToken: "{{api_token}}",
  });
  // TODO: Handle 'response' of type SubscriptionResponseDto
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
const result = await client.subscriptions
  .getSubscription({
    subscriptionId: "{{webhook_subscription_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    appKey: "{{app_key}}",
    apiToken: "{{api_token}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubscriptionResponseDto
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
| <code>subscriptionId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>appKey?</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.getSubscription(request)`

- **OnSuccess**: <code>[SubscriptionResponseDto](src/models/subscription-response-dto.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.subscriptions.getSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubscriptionResponseDto, ApiError&gt;</code>, with `result.value` of type <code>[SubscriptionResponseDto](src/models/subscription-response-dto.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>replaceSubscription(request: Subscriptions.ReplaceSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionResponseDto, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the events that you are subscribed to.

You can use the PUT operation to add, remove, or replace events in a subscription. For example, you can replace the `bill.created` event with `bill.updated` in your subscription.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.replaceSubscription({
    subscriptionId: "{{webhook_subscription_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    appKey: "{{app_key}}",
    apiToken: "{{api_token}}",
    body: {
      name: "some example string",
      status: {},
      events: [{ type: "some example string", version: "some example string" }],
      notificationUrl: "some example string",
    },
  });
  // TODO: Handle 'response' of type SubscriptionResponseDto
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
const result = await client.subscriptions
  .replaceSubscription({
    subscriptionId: "{{webhook_subscription_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    appKey: "{{app_key}}",
    apiToken: "{{api_token}}",
    body: {
      name: "some example string",
      status: {},
      events: [{ type: "some example string", version: "some example string" }],
      notificationUrl: "some example string",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubscriptionResponseDto
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
| <code>subscriptionId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>appKey?</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |
| <code>body</code> | <code>[SubscriptionRequestDto](src/models/subscription-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.replaceSubscription(request)`

- **OnSuccess**: <code>[SubscriptionResponseDto](src/models/subscription-response-dto.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.subscriptions.replaceSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubscriptionResponseDto, ApiError&gt;</code>, with `result.value` of type <code>[SubscriptionResponseDto](src/models/subscription-response-dto.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sendTestEvent(request: Subscriptions.SendTestEventRequest, options?: RequestOptions): ApiPromise&lt;EventDto, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a new test event notification. After you create a subscription, use this endpoint for BILL to send a test event notification to your specified notification URL.

In your request, all the fields are optional. To see specific information in the test event notification, you can set `eventType`, `version`, and any details. You can get the BILL events catalog with `GET /v3/events/catalog`.

**Note**: All the fields in the test event notification are test values. You cannot use any of the test values for any other operation.

See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL events.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.sendTestEvent({
    subscriptionId: "{{webhook_subscription_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    appKey: "{{app_key}}",
    apiToken: "{{api_token}}",
    body: {},
  });
  // TODO: Handle 'response' of type EventDto
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
const result = await client.subscriptions
  .sendTestEvent({
    subscriptionId: "{{webhook_subscription_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    appKey: "{{app_key}}",
    apiToken: "{{api_token}}",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventDto
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
| <code>subscriptionId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>appKey?</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |
| <code>body</code> | <code>[SendTestEventRequestDto](src/models/send-test-event-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.sendTestEvent(request)`

- **OnSuccess**: <code>[EventDto](src/models/event-dto.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.subscriptions.sendTestEvent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventDto, ApiError&gt;</code>, with `result.value` of type <code>[EventDto](src/models/event-dto.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSubscription(request: Subscriptions.UpdateSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionResponseDto, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about a subscription.

You can use the PATCH operation to modify existing subscription details, such as `name`, `status`, and `notificationUrl`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.updateSubscription({
    subscriptionId: "{{webhook_subscription_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    appKey: "{{app_key}}",
    apiToken: "{{api_token}}",
    body: {},
  });
  // TODO: Handle 'response' of type SubscriptionResponseDto
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
const result = await client.subscriptions
  .updateSubscription({
    subscriptionId: "{{webhook_subscription_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    appKey: "{{app_key}}",
    apiToken: "{{api_token}}",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubscriptionResponseDto
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
| <code>subscriptionId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>appKey?</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |
| <code>body</code> | <code>[SubscriptionUpdateRequestDto](src/models/subscription-update-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.updateSubscription(request)`

- **OnSuccess**: <code>[SubscriptionResponseDto](src/models/subscription-response-dto.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.subscriptions.updateSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubscriptionResponseDto, ApiError&gt;</code>, with `result.value` of type <code>[SubscriptionResponseDto](src/models/subscription-response-dto.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Transactions

> Source: [Transactions](src/resources/transactions.ts)

<details>
<summary><code>addTransactionReceipt(request: Transactions.AddTransactionReceiptRequest, options?: RequestOptions): ApiPromise&lt;ReceiptImage[], Transactions.AddTransactionReceiptError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a receipt to an existing transaction.

In the request, use the same upload `url` that you used to upload the receipt image. See Create a transaction upload URL to learn about creating a transaction image upload URL.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.addTransactionReceipt({
    transactionId: "{{se_transaction_uuid}}",
    apiToken: "{{api_token}}",
    body: { url: "some example string" },
  });
  // TODO: Handle 'response' of type ReceiptImage[]
} catch (err) {
  // TODO: Handle 'err' of type Transactions.AddTransactionReceiptError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions
  .addTransactionReceipt({
    transactionId: "{{se_transaction_uuid}}",
    apiToken: "{{api_token}}",
    body: { url: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReceiptImage[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionId</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |
| <code>body</code> | <code>[TransactionReceiptRequestDto](src/models/transaction-receipt-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.addTransactionReceipt(request)`

- **OnSuccess**: <code>[ReceiptImage](src/models/receipt-image.ts)[]</code>
- **OnError**: throws <code>[Transactions.AddTransactionReceiptError](src/resources/transactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactions.addTransactionReceipt(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReceiptImage[], Transactions.AddTransactionReceiptError&gt;</code>, with `result.value` of type <code>[ReceiptImage](src/models/receipt-image.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createReceiptUploadUrl(request?: Transactions.CreateReceiptUploadUrlRequest, options?: RequestOptions): ApiPromise&lt;ReimbursementImageUploadUrlResponseDto, Transactions.CreateReceiptUploadUrlError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a transaction image upload URL.

From the response, use the upload `url` to upload a receipt image for the transaction. For example, to upload a JPEG image, use the following `curl` command. To upload a PNG image, set the content type as `image/png`.

```
curl '{upload_url}'
-H 'Content-Type: image/jpeg'
--upload-file {file_name_with_extension}
```

**Note**: BILL supports JPG and PNG file formats for transaction images.

See Transactions in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.createReceiptUploadUrl({ apiToken: "{{api_token}}" });
  // TODO: Handle 'response' of type ReimbursementImageUploadUrlResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Transactions.CreateReceiptUploadUrlError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions.createReceiptUploadUrl({ apiToken: "{{api_token}}" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReimbursementImageUploadUrlResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.createReceiptUploadUrl(request)`

- **OnSuccess**: <code>[ReimbursementImageUploadUrlResponseDto](src/models/reimbursement-image-upload-url-response-dto.ts)</code>
- **OnError**: throws <code>[Transactions.CreateReceiptUploadUrlError](src/resources/transactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactions.createReceiptUploadUrl(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReimbursementImageUploadUrlResponseDto, Transactions.CreateReceiptUploadUrlError&gt;</code>, with `result.value` of type <code>[ReimbursementImageUploadUrlResponseDto](src/models/reimbursement-image-upload-url-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteTransactionReceipt(request: Transactions.DeleteTransactionReceiptRequest, options?: RequestOptions): ApiPromise&lt;undefined, Transactions.DeleteTransactionReceiptError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a receipt from an existing transaction. A deleted receipt cannot be restored. The deleted receipt is not available in the transaction details.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.transactions.deleteTransactionReceipt({
    transactionId: "{{se_transaction_uuid}}",
    receiptId: "{{se_transaction_receipt_uuid}}",
    apiToken: "{{api_token}}",
  });
} catch (err) {
  // TODO: Handle 'err' of type Transactions.DeleteTransactionReceiptError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions
  .deleteTransactionReceipt({
    transactionId: "{{se_transaction_uuid}}",
    receiptId: "{{se_transaction_receipt_uuid}}",
    apiToken: "{{api_token}}",
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
| <code>transactionId</code> | <code>string</code> | - |
| <code>receiptId</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.deleteTransactionReceipt(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Transactions.DeleteTransactionReceiptError](src/resources/transactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactions.deleteTransactionReceipt(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Transactions.DeleteTransactionReceiptError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTransaction(request: Transactions.GetTransactionRequest, options?: RequestOptions): ApiPromise&lt;TransactionResponseDto, Transactions.GetTransactionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing transaction.

In the response, you get information about transactions, reversals, and refunds.
* **Transaction**: For a standard transaction, the `transactionType` is set as `AUTHORIZATION` or `DECLINE`. The status is updated to `CLEAR` once BILL moves the money from the funding account. The `CLEAR` transactions receive a new ID and reference to the original `AUTHORIZATION` transaction via the `originalAuthTransactionUuid` field.
* **Reversal**: For a reversal (a cancellation before funds are settled), the `transactionType` remains `AUTHORIZATION`, but the `amount` is typically a negative value.
* **Refund**: For a refund (a cancellation after funds are settled), the `transactionType` is set to `CLEAR` and the `amount` is a negative value.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.getTransaction({
    transactionId: "{{se_transaction_uuid}}",
    showCustomFieldIds: "{{se_custom_field_uuid}}",
    apiToken: "{{api_token}}",
  });
  // TODO: Handle 'response' of type TransactionResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Transactions.GetTransactionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions
  .getTransaction({
    transactionId: "{{se_transaction_uuid}}",
    showCustomFieldIds: "{{se_custom_field_uuid}}",
    apiToken: "{{api_token}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionId</code> | <code>string</code> | - |
| <code>showCustomFieldIds?</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.getTransaction(request)`

- **OnSuccess**: <code>[TransactionResponseDto](src/models/transaction-response-dto.ts)</code>
- **OnError**: throws <code>[Transactions.GetTransactionError](src/resources/transactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactions.getTransaction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionResponseDto, Transactions.GetTransactionError&gt;</code>, with `result.value` of type <code>[TransactionResponseDto](src/models/transaction-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTransactionCustomFieldValues(request: Transactions.ListTransactionCustomFieldValuesRequest, options?: RequestOptions): ApiPromise&lt;PaginationResponseDtoCustomFieldValueDto, Transactions.ListTransactionCustomFieldValuesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of custom field value objects applied to an existing transaction. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.listTransactionCustomFieldValues({
    transactionId: "{{se_transaction_uuid}}",
    customFieldId: "{{se_custom_field_uuid}}",
    max: 10,
    apiToken: "{{api_token}}",
  });
  // TODO: Handle 'response' of type PaginationResponseDtoCustomFieldValueDto
} catch (err) {
  // TODO: Handle 'err' of type Transactions.ListTransactionCustomFieldValuesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions
  .listTransactionCustomFieldValues({
    transactionId: "{{se_transaction_uuid}}",
    customFieldId: "{{se_custom_field_uuid}}",
    max: 10,
    apiToken: "{{api_token}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginationResponseDtoCustomFieldValueDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionId</code> | <code>string</code> | - |
| <code>customFieldId</code> | <code>string</code> | - |
| <code>max?</code> | <code>number</code> | - |
| <code>nextPage?</code> | <code>string</code> | - |
| <code>prevPage?</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.listTransactionCustomFieldValues(request)`

- **OnSuccess**: <code>[PaginationResponseDtoCustomFieldValueDto](src/models/pagination-response-dto-custom-field-value-dto.ts)</code>
- **OnError**: throws <code>[Transactions.ListTransactionCustomFieldValuesError](src/resources/transactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactions.listTransactionCustomFieldValues(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginationResponseDtoCustomFieldValueDto, Transactions.ListTransactionCustomFieldValuesError&gt;</code>, with `result.value` of type <code>[PaginationResponseDtoCustomFieldValueDto](src/models/pagination-response-dto-custom-field-value-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTransactionCustomFields(request: Transactions.ListTransactionCustomFieldsRequest, options?: RequestOptions): ApiPromise&lt;ListTransactionCustomFieldResponseDto, Transactions.ListTransactionCustomFieldsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of custom field objects applied to an existing transaction.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.listTransactionCustomFields({
    transactionId: "{{se_transaction_uuid}}",
    filters: "customFieldIds:eq:{{se_custom_field_uuid}}",
    apiToken: "{{api_token}}",
  });
  // TODO: Handle 'response' of type ListTransactionCustomFieldResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Transactions.ListTransactionCustomFieldsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions
  .listTransactionCustomFields({
    transactionId: "{{se_transaction_uuid}}",
    filters: "customFieldIds:eq:{{se_custom_field_uuid}}",
    apiToken: "{{api_token}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListTransactionCustomFieldResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionId</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.listTransactionCustomFields(request)`

- **OnSuccess**: <code>[ListTransactionCustomFieldResponseDto](src/models/list-transaction-custom-field-response-dto.ts)</code>
- **OnError**: throws <code>[Transactions.ListTransactionCustomFieldsError](src/resources/transactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactions.listTransactionCustomFields(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListTransactionCustomFieldResponseDto, Transactions.ListTransactionCustomFieldsError&gt;</code>, with `result.value` of type <code>[ListTransactionCustomFieldResponseDto](src/models/list-transaction-custom-field-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTransactions(request?: Transactions.ListTransactionsRequest, options?: RequestOptions): ApiPromise&lt;PaginationResponseDtoTransactionResponseDto, Transactions.ListTransactionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of transaction objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 50 results on one page.

In the response, you get information about transactions, reversals, and refunds.
* **Transaction**: For a standard transaction, the `transactionType` is set as `AUTHORIZATION` or `DECLINE`. The status is updated to `CLEAR` once BILL moves the money from the funding account. The `CLEAR` transactions receive a new ID and reference to the original `AUTHORIZATION` transaction via the `originalAuthTransactionUuid` field.
* **Reversal**: For a reversal (a cancellation before funds are settled), the `transactionType` remains `AUTHORIZATION`, but the `amount` is typically a negative value.
* **Refund**: For a refund (a cancellation after funds are settled), the `transactionType` is set to `CLEAR` and the `amount` is a negative value.

**Note**: Only parent transactions are available in the response.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.listTransactions({
    max: 10,
    sort: "occurredTime:desc",
    filters: "amount:gte:100.00",
    includeReceipts: true,
    apiToken: "{{api_token}}",
  });
  // TODO: Handle 'response' of type PaginationResponseDtoTransactionResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Transactions.ListTransactionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions
  .listTransactions({
    max: 10,
    sort: "occurredTime:desc",
    filters: "amount:gte:100.00",
    includeReceipts: true,
    apiToken: "{{api_token}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginationResponseDtoTransactionResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max?</code> | <code>number</code> | - |
| <code>nextPage?</code> | <code>string</code> | - |
| <code>prevPage?</code> | <code>string</code> | - |
| <code>sort?</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>showCustomFieldIds?</code> | <code>string</code> | - |
| <code>includeReceipts?</code> | <code>boolean</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.listTransactions(request)`

- **OnSuccess**: <code>[PaginationResponseDtoTransactionResponseDto](src/models/pagination-response-dto-transaction-response-dto.ts)</code>
- **OnError**: throws <code>[Transactions.ListTransactionsError](src/resources/transactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactions.listTransactions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginationResponseDtoTransactionResponseDto, Transactions.ListTransactionsError&gt;</code>, with `result.value` of type <code>[PaginationResponseDtoTransactionResponseDto](src/models/pagination-response-dto-transaction-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>threeDsChallenge(request: Transactions.ThreeDsChallengeRequest, options?: RequestOptions): ApiPromise&lt;ThreeDsResponseDto, Transactions.ThreeDsChallengeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Accept or reject a transaction 3D Secure (3DS) challenge.

When a transaction is created, a 3DS challenge may trigger to verify the identity of the cardholder. Use this endpoint to approve or deny the transaction. The Spend & Expense user must have the `ADMIN` user role to perform this operation.

Subscribe to the `spend.three-ds-challenge.created` event to get a webhook notification when a 3DS challenge is triggered for a transaction. See Spend & Expense 3DS challenge notification payload for more information.

See 3-D Secure - BILL Spend & Expense in the BILL Help Center to learn more about 3D Secure at BILL.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.threeDsChallenge({
    acsTransactionId: "{{se_transaction_uuid}}",
    apiToken: "{{api_token}}",
    body: { action: ThreeDsActionType.Accept },
  });
  // TODO: Handle 'response' of type ThreeDsResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Transactions.ThreeDsChallengeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions
  .threeDsChallenge({
    acsTransactionId: "{{se_transaction_uuid}}",
    apiToken: "{{api_token}}",
    body: { action: ThreeDsActionType.Accept },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ThreeDsResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>acsTransactionId</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |
| <code>body</code> | <code>[ThreeDsRequestDto](src/models/three-ds-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.threeDsChallenge(request)`

- **OnSuccess**: <code>[ThreeDsResponseDto](src/models/three-ds-response-dto.ts)</code>
- **OnError**: throws <code>[Transactions.ThreeDsChallengeError](src/resources/transactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactions.threeDsChallenge(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ThreeDsResponseDto, Transactions.ThreeDsChallengeError&gt;</code>, with `result.value` of type <code>[ThreeDsResponseDto](src/models/three-ds-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateTransaction(request: Transactions.UpdateTransactionRequest, options?: RequestOptions): ApiPromise&lt;TransactionResponseDto, Transactions.UpdateTransactionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the budget for an existing transaction.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.updateTransaction({
    transactionId: "{{se_transaction_uuid}}",
    apiToken: "{{api_token}}",
    body: { budgetId: "some example string" },
  });
  // TODO: Handle 'response' of type TransactionResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Transactions.UpdateTransactionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions
  .updateTransaction({
    transactionId: "{{se_transaction_uuid}}",
    apiToken: "{{api_token}}",
    body: { budgetId: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionId</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |
| <code>body</code> | <code>[UpdateTxRequestDto](src/models/update-tx-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.updateTransaction(request)`

- **OnSuccess**: <code>[TransactionResponseDto](src/models/transaction-response-dto.ts)</code>
- **OnError**: throws <code>[Transactions.UpdateTransactionError](src/resources/transactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactions.updateTransaction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionResponseDto, Transactions.UpdateTransactionError&gt;</code>, with `result.value` of type <code>[TransactionResponseDto](src/models/transaction-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateTransactionCustomFields(request: Transactions.UpdateTransactionCustomFieldsRequest, options?: RequestOptions): ApiPromise&lt;SpendStatusDto, Transactions.UpdateTransactionCustomFieldsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about custom fields and their values applied to an existing transaction.

You cannot update custom fields in a locked transaction. When a transaction is locked, `isLocked` is set as `true`. You can get information about your transactions with `GET /v3/spend/transactions` or `GET /v3/spend/transactions/{transactionId}.

See Lock or unlock custom fields for a transaction in the BILL Help Center for more information.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.updateTransactionCustomFields({
    transactionId: "{{se_transaction_uuid}}",
    apiToken: "{{api_token}}",
    body: { customFields: [{ customFieldId: "some example string" }] },
  });
  // TODO: Handle 'response' of type SpendStatusDto
} catch (err) {
  // TODO: Handle 'err' of type Transactions.UpdateTransactionCustomFieldsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions
  .updateTransactionCustomFields({
    transactionId: "{{se_transaction_uuid}}",
    apiToken: "{{api_token}}",
    body: { customFields: [{ customFieldId: "some example string" }] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SpendStatusDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionId</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |
| <code>body</code> | <code>[BulkUpdateTxCustomFieldRequestDto](src/models/bulk-update-tx-custom-field-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.updateTransactionCustomFields(request)`

- **OnSuccess**: <code>[SpendStatusDto](src/models/spend-status-dto.ts)</code>
- **OnError**: throws <code>[Transactions.UpdateTransactionCustomFieldsError](src/resources/transactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactions.updateTransactionCustomFields(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SpendStatusDto, Transactions.UpdateTransactionCustomFieldsError&gt;</code>, with `result.value` of type <code>[SpendStatusDto](src/models/spend-status-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](src/resources/users.ts)

<details>
<summary><code>createUser(request: Users.CreateUserRequest, options?: RequestOptions): ApiPromise&lt;UserResponseDto, Users.CreateUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new user.

See Budgets and Users in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.createUser({
    apiToken: "{{api_token}}",
    body: {
      firstName: "some example string",
      lastName: "some example string",
      email: "some example string",
      role: InputRoleType.Admin,
    },
  });
  // TODO: Handle 'response' of type UserResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Users.CreateUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users
  .createUser({
    apiToken: "{{api_token}}",
    body: {
      firstName: "some example string",
      lastName: "some example string",
      email: "some example string",
      role: InputRoleType.Admin,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiToken?</code> | <code>string</code> | - |
| <code>body</code> | <code>[CreateUserRequestDto](src/models/create-user-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.createUser(request)`

- **OnSuccess**: <code>[UserResponseDto](src/models/user-response-dto.ts)</code>
- **OnError**: throws <code>[Users.CreateUserError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.createUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserResponseDto, Users.CreateUserError&gt;</code>, with `result.value` of type <code>[UserResponseDto](src/models/user-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteUser(request: Users.DeleteUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Users.DeleteUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an existing user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.users.deleteUser({ userId: "{{se_user_uuid}}", apiToken: "{{api_token}}" });
} catch (err) {
  // TODO: Handle 'err' of type Users.DeleteUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users
  .deleteUser({ userId: "{{se_user_uuid}}", apiToken: "{{api_token}}" })
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
| <code>userId</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.deleteUser(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Users.DeleteUserError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.deleteUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Users.DeleteUserError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCurrentUser(request?: Users.GetCurrentUserRequest, options?: RequestOptions): ApiPromise&lt;UserResponseDto, Users.GetCurrentUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about the current user. This is the user that generated the Spend & Expense API token.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getCurrentUser({ apiToken: "{{api_token}}" });
  // TODO: Handle 'response' of type UserResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Users.GetCurrentUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.getCurrentUser({ apiToken: "{{api_token}}" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.getCurrentUser(request)`

- **OnSuccess**: <code>[UserResponseDto](src/models/user-response-dto.ts)</code>
- **OnError**: throws <code>[Users.GetCurrentUserError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.getCurrentUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserResponseDto, Users.GetCurrentUserError&gt;</code>, with `result.value` of type <code>[UserResponseDto](src/models/user-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUser(request: Users.GetUserRequest, options?: RequestOptions): ApiPromise&lt;UserResponseDto, Users.GetUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getUser({ userId: "{{se_user_uuid}}", apiToken: "{{api_token}}" });
  // TODO: Handle 'response' of type UserResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Users.GetUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users
  .getUser({ userId: "{{se_user_uuid}}", apiToken: "{{api_token}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.getUser(request)`

- **OnSuccess**: <code>[UserResponseDto](src/models/user-response-dto.ts)</code>
- **OnError**: throws <code>[Users.GetUserError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.getUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserResponseDto, Users.GetUserError&gt;</code>, with `result.value` of type <code>[UserResponseDto](src/models/user-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listUsers(request?: Users.ListUsersRequest, options?: RequestOptions): ApiPromise&lt;PaginationResponseDtoUserResponseDto, Users.ListUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of user objects in the current user's company. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.listUsers({
    max: 10,
    filters: "retired:eq:false",
    apiToken: "{{api_token}}",
  });
  // TODO: Handle 'response' of type PaginationResponseDtoUserResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Users.ListUsersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users
  .listUsers({ max: 10, filters: "retired:eq:false", apiToken: "{{api_token}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginationResponseDtoUserResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>nextPage?</code> | <code>string</code> | - |
| <code>prevPage?</code> | <code>string</code> | - |
| <code>max?</code> | <code>number</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.listUsers(request)`

- **OnSuccess**: <code>[PaginationResponseDtoUserResponseDto](src/models/pagination-response-dto-user-response-dto.ts)</code>
- **OnError**: throws <code>[Users.ListUsersError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.listUsers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginationResponseDtoUserResponseDto, Users.ListUsersError&gt;</code>, with `result.value` of type <code>[PaginationResponseDtoUserResponseDto](src/models/pagination-response-dto-user-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateUser(request: Users.UpdateUserRequest, options?: RequestOptions): ApiPromise&lt;UserResponseDto, Users.UpdateUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.updateUser({
    userId: "{{se_user_uuid}}",
    apiToken: "{{api_token}}",
    body: {},
  });
  // TODO: Handle 'response' of type UserResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Users.UpdateUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users
  .updateUser({ userId: "{{se_user_uuid}}", apiToken: "{{api_token}}", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | - |
| <code>apiToken?</code> | <code>string</code> | - |
| <code>body</code> | <code>[UpdateUserRequestDto](src/models/update-user-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.updateUser(request)`

- **OnSuccess**: <code>[UserResponseDto](src/models/user-response-dto.ts)</code>
- **OnError**: throws <code>[Users.UpdateUserError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.updateUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserResponseDto, Users.UpdateUserError&gt;</code>, with `result.value` of type <code>[UserResponseDto](src/models/user-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## VendorCredits

> Source: [VendorCredits](src/resources/vendor-credits.ts)

<details>
<summary><code>archiveVendorCredit(request: VendorCredits.ArchiveVendorCreditRequest, options?: RequestOptions): ApiPromise&lt;VendorCreditResponseDto, VendorCredits.ArchiveVendorCreditError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing vendor credit. In the response, the `archived` field is set as `true`. An archived vendor credit cannot be restored.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vendorCredits.archiveVendorCredit({
    vendorCreditId: "{{vendor_credit_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type VendorCreditResponseDto
} catch (err) {
  // TODO: Handle 'err' of type VendorCredits.ArchiveVendorCreditError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendorCredits
  .archiveVendorCredit({
    vendorCreditId: "{{vendor_credit_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VendorCreditResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendorCreditId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendorCredits.archiveVendorCredit(request)`

- **OnSuccess**: <code>[VendorCreditResponseDto](src/models/vendor-credit-response-dto.ts)</code>
- **OnError**: throws <code>[VendorCredits.ArchiveVendorCreditError](src/resources/vendor-credits.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vendorCredits.archiveVendorCredit(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VendorCreditResponseDto, VendorCredits.ArchiveVendorCreditError&gt;</code>, with `result.value` of type <code>[VendorCreditResponseDto](src/models/vendor-credit-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkArchiveVendorCredit(request: VendorCredits.BulkArchiveVendorCreditRequest, options?: RequestOptions): ApiPromise&lt;VendorCreditBulkResponseDto, VendorCredits.BulkArchiveVendorCreditError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive multiple vendor credits with one API request. In the response, the `archived` field for each object is set as `true`. An archived vendor credit cannot be restored.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vendorCredits.bulkArchiveVendorCredit({
    ids: "{{vendor_credit_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type VendorCreditBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type VendorCredits.BulkArchiveVendorCreditError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendorCredits
  .bulkArchiveVendorCredit({
    ids: "{{vendor_credit_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VendorCreditBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendorCredits.bulkArchiveVendorCredit(request)`

- **OnSuccess**: <code>[VendorCreditBulkResponseDto](src/models/vendor-credit-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[VendorCredits.BulkArchiveVendorCreditError](src/resources/vendor-credits.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vendorCredits.bulkArchiveVendorCredit(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VendorCreditBulkResponseDto, VendorCredits.BulkArchiveVendorCreditError&gt;</code>, with `result.value` of type <code>[VendorCreditBulkResponseDto](src/models/vendor-credit-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkCreateVendorCredit(request: VendorCredits.BulkCreateVendorCreditRequest, options?: RequestOptions): ApiPromise&lt;VendorCreditBulkResponseDto, VendorCredits.BulkCreateVendorCreditError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple vendor credits with one API request. You can create up to 50 vendor credits with one `POST /v3/vendor-credits/bulk` request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vendorCredits.bulkCreateVendorCredit({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [
      {
        vendorId: "some example string",
        referenceNumber: "some example string",
        creditDate: "2024-01-15",
        vendorCreditLineItems: [{ amount: 1.5 }],
      },
    ],
  });
  // TODO: Handle 'response' of type VendorCreditBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type VendorCredits.BulkCreateVendorCreditError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendorCredits
  .bulkCreateVendorCredit({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [
      {
        vendorId: "some example string",
        referenceNumber: "some example string",
        creditDate: "2024-01-15",
        vendorCreditLineItems: [{ amount: 1.5 }],
      },
    ],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VendorCreditBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[CreateVendorCreditRequestDto](src/models/create-vendor-credit-request-dto.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendorCredits.bulkCreateVendorCredit(request)`

- **OnSuccess**: <code>[VendorCreditBulkResponseDto](src/models/vendor-credit-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[VendorCredits.BulkCreateVendorCreditError](src/resources/vendor-credits.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vendorCredits.bulkCreateVendorCredit(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VendorCreditBulkResponseDto, VendorCredits.BulkCreateVendorCreditError&gt;</code>, with `result.value` of type <code>[VendorCreditBulkResponseDto](src/models/vendor-credit-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkReplaceVendorCredit(request: VendorCredits.BulkReplaceVendorCreditRequest, options?: RequestOptions): ApiPromise&lt;VendorCreditBulkResponseDto, VendorCredits.BulkReplaceVendorCreditError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the number of line items in multiple vendor credits with one API request. You can also update other details for each vendor credit.

You can use the PUT operation to add, remove, or replace the number of line items in a vendor credit. A set of rules apply with the PUT operation.
* When you add a new line item, a new line item `id` is generated in the vendor credit.
* When you omit an existing line item `id`, the line item is removed from the vendor credit.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vendorCredits.bulkReplaceVendorCredit({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [
      {
        id: "some example string",
        vendorId: "some example string",
        referenceNumber: "some example string",
        creditDate: "2024-01-15",
        vendorCreditLineItems: [{ amount: 1.5 }],
      },
    ],
  });
  // TODO: Handle 'response' of type VendorCreditBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type VendorCredits.BulkReplaceVendorCreditError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendorCredits
  .bulkReplaceVendorCredit({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [
      {
        id: "some example string",
        vendorId: "some example string",
        referenceNumber: "some example string",
        creditDate: "2024-01-15",
        vendorCreditLineItems: [{ amount: 1.5 }],
      },
    ],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VendorCreditBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[ReplaceVendorCreditWithIdRequestDto](src/models/replace-vendor-credit-with-id-request-dto.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendorCredits.bulkReplaceVendorCredit(request)`

- **OnSuccess**: <code>[VendorCreditBulkResponseDto](src/models/vendor-credit-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[VendorCredits.BulkReplaceVendorCreditError](src/resources/vendor-credits.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vendorCredits.bulkReplaceVendorCredit(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VendorCreditBulkResponseDto, VendorCredits.BulkReplaceVendorCreditError&gt;</code>, with `result.value` of type <code>[VendorCreditBulkResponseDto](src/models/vendor-credit-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkUpdateVendorCredit(request: VendorCredits.BulkUpdateVendorCreditRequest, options?: RequestOptions): ApiPromise&lt;VendorCreditBulkResponseDto, VendorCredits.BulkUpdateVendorCreditError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about line items in multiple vendor credits with one API request. You can also update other vendor credit details.

You can use the PATCH operation to modify line item details, such as `amount`, `quantity`, and `description`. The vendor credit line item `id` does not change with a PATCH operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vendorCredits.bulkUpdateVendorCredit({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [{ id: "some example string" }],
  });
  // TODO: Handle 'response' of type VendorCreditBulkResponseDto
} catch (err) {
  // TODO: Handle 'err' of type VendorCredits.BulkUpdateVendorCreditError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendorCredits
  .bulkUpdateVendorCredit({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [{ id: "some example string" }],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VendorCreditBulkResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[UpdateVendorCreditWithIdRequestDto](src/models/update-vendor-credit-with-id-request-dto.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendorCredits.bulkUpdateVendorCredit(request)`

- **OnSuccess**: <code>[VendorCreditBulkResponseDto](src/models/vendor-credit-bulk-response-dto.ts)</code>
- **OnError**: throws <code>[VendorCredits.BulkUpdateVendorCreditError](src/resources/vendor-credits.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vendorCredits.bulkUpdateVendorCredit(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VendorCreditBulkResponseDto, VendorCredits.BulkUpdateVendorCreditError&gt;</code>, with `result.value` of type <code>[VendorCreditBulkResponseDto](src/models/vendor-credit-bulk-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createVendorCredit(request: VendorCredits.CreateVendorCreditRequest, options?: RequestOptions): ApiPromise&lt;VendorCreditResponseDto, VendorCredits.CreateVendorCreditError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a vendor credit.

With a vendor credit, you can adjust the amount that you owe a vendor.

See Vendor credits in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vendorCredits.createVendorCredit({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {
      vendorId: "some example string",
      referenceNumber: "some example string",
      creditDate: "2024-01-15",
      vendorCreditLineItems: [{ amount: 1.5 }],
    },
  });
  // TODO: Handle 'response' of type VendorCreditResponseDto
} catch (err) {
  // TODO: Handle 'err' of type VendorCredits.CreateVendorCreditError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendorCredits
  .createVendorCredit({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {
      vendorId: "some example string",
      referenceNumber: "some example string",
      creditDate: "2024-01-15",
      vendorCreditLineItems: [{ amount: 1.5 }],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VendorCreditResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[CreateVendorCreditRequestDto](src/models/create-vendor-credit-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendorCredits.createVendorCredit(request)`

- **OnSuccess**: <code>[VendorCreditResponseDto](src/models/vendor-credit-response-dto.ts)</code>
- **OnError**: throws <code>[VendorCredits.CreateVendorCreditError](src/resources/vendor-credits.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vendorCredits.createVendorCredit(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VendorCreditResponseDto, VendorCredits.CreateVendorCreditError&gt;</code>, with `result.value` of type <code>[VendorCreditResponseDto](src/models/vendor-credit-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVendorCredit(request: VendorCredits.GetVendorCreditRequest, options?: RequestOptions): ApiPromise&lt;VendorCreditWithUsageResponseDto, VendorCredits.GetVendorCreditError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing vendor credit.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vendorCredits.getVendorCredit({
    vendorCreditId: "{{vendor_credit_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type VendorCreditWithUsageResponseDto
} catch (err) {
  // TODO: Handle 'err' of type VendorCredits.GetVendorCreditError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendorCredits
  .getVendorCredit({
    vendorCreditId: "{{vendor_credit_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VendorCreditWithUsageResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendorCreditId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendorCredits.getVendorCredit(request)`

- **OnSuccess**: <code>[VendorCreditWithUsageResponseDto](src/models/vendor-credit-with-usage-response-dto.ts)</code>
- **OnError**: throws <code>[VendorCredits.GetVendorCreditError](src/resources/vendor-credits.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vendorCredits.getVendorCredit(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VendorCreditWithUsageResponseDto, VendorCredits.GetVendorCreditError&gt;</code>, with `result.value` of type <code>[VendorCreditWithUsageResponseDto](src/models/vendor-credit-with-usage-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listVendorCredits(request?: VendorCredits.ListVendorCreditsRequest, options?: RequestOptions): ApiPromise&lt;ListResponseDtoVendorCreditWithUsageResponseDto, VendorCredits.ListVendorCreditsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of vendor credit objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vendorCredits.listVendorCredits({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{vendor_credit_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListResponseDtoVendorCreditWithUsageResponseDto
} catch (err) {
  // TODO: Handle 'err' of type VendorCredits.ListVendorCreditsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendorCredits
  .listVendorCredits({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{vendor_credit_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponseDtoVendorCreditWithUsageResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max?</code> | <code>number</code> | - |
| <code>sort?</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendorCredits.listVendorCredits(request)`

- **OnSuccess**: <code>[ListResponseDtoVendorCreditWithUsageResponseDto](src/models/list-response-dto-vendor-credit-with-usage-response-dto.ts)</code>
- **OnError**: throws <code>[VendorCredits.ListVendorCreditsError](src/resources/vendor-credits.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vendorCredits.listVendorCredits(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponseDtoVendorCreditWithUsageResponseDto, VendorCredits.ListVendorCreditsError&gt;</code>, with `result.value` of type <code>[ListResponseDtoVendorCreditWithUsageResponseDto](src/models/list-response-dto-vendor-credit-with-usage-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>replaceVendorCredit(request: VendorCredits.ReplaceVendorCreditRequest, options?: RequestOptions): ApiPromise&lt;VendorCreditResponseDto, VendorCredits.ReplaceVendorCreditError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the number of line items in a vendor credit. You can also update other vendor credit details.

You can use the PUT operation to add, remove, or replace the number of line items in a vendor credit. A set of rules apply with the PUT operation.
* When you add a new line item, a new line item `id` is generated in the vendor credit.
* When you omit an existing line item `id`, the line item is removed from the vendor credit.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vendorCredits.replaceVendorCredit({
    vendorCreditId: "{{vendor_credit_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {
      vendorId: "some example string",
      referenceNumber: "some example string",
      creditDate: "2024-01-15",
      vendorCreditLineItems: [{ amount: 1.5 }],
    },
  });
  // TODO: Handle 'response' of type VendorCreditResponseDto
} catch (err) {
  // TODO: Handle 'err' of type VendorCredits.ReplaceVendorCreditError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendorCredits
  .replaceVendorCredit({
    vendorCreditId: "{{vendor_credit_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {
      vendorId: "some example string",
      referenceNumber: "some example string",
      creditDate: "2024-01-15",
      vendorCreditLineItems: [{ amount: 1.5 }],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VendorCreditResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendorCreditId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[ReplaceVendorCreditRequestDto](src/models/replace-vendor-credit-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendorCredits.replaceVendorCredit(request)`

- **OnSuccess**: <code>[VendorCreditResponseDto](src/models/vendor-credit-response-dto.ts)</code>
- **OnError**: throws <code>[VendorCredits.ReplaceVendorCreditError](src/resources/vendor-credits.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vendorCredits.replaceVendorCredit(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VendorCreditResponseDto, VendorCredits.ReplaceVendorCreditError&gt;</code>, with `result.value` of type <code>[VendorCreditResponseDto](src/models/vendor-credit-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateVendorCredit(request: VendorCredits.UpdateVendorCreditRequest, options?: RequestOptions): ApiPromise&lt;VendorCreditResponseDto, VendorCredits.UpdateVendorCreditError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about a vendor credit line item. You can also update other vendor credit line item details.

You can use the PATCH operation to modify line item details, such as `amount`, `quantity`, and `description`. The vendor credit line item `id` does not change with a PATCH operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vendorCredits.updateVendorCredit({
    vendorCreditId: "{{vendor_credit_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  });
  // TODO: Handle 'response' of type VendorCreditResponseDto
} catch (err) {
  // TODO: Handle 'err' of type VendorCredits.UpdateVendorCreditError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendorCredits
  .updateVendorCredit({
    vendorCreditId: "{{vendor_credit_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VendorCreditResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendorCreditId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[UpdateVendorCreditRequestDto](src/models/update-vendor-credit-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendorCredits.updateVendorCredit(request)`

- **OnSuccess**: <code>[VendorCreditResponseDto](src/models/vendor-credit-response-dto.ts)</code>
- **OnError**: throws <code>[VendorCredits.UpdateVendorCreditError](src/resources/vendor-credits.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vendorCredits.updateVendorCredit(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VendorCreditResponseDto, VendorCredits.UpdateVendorCreditError&gt;</code>, with `result.value` of type <code>[VendorCreditResponseDto](src/models/vendor-credit-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Vendors

> Source: [Vendors](src/resources/vendors.ts)

<details>
<summary><code>archiveVendor(request: Vendors.ArchiveVendorRequest, options?: RequestOptions): ApiPromise&lt;VendorResponseDto, Vendors.ArchiveVendorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing vendor. In the response, the `archived` field is set as `true`.

You can restore an archived vendor with `POST /v3/vendors/{vendorId}/restore`. There is no change when you archive an archived vendor.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vendors.archiveVendor({
    vendorId: "{{vendor_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type VendorResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Vendors.ArchiveVendorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendors
  .archiveVendor({ vendorId: "{{vendor_id}}", sessionId: "{{session_id}}", devKey: "{{developer_key}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VendorResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendorId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendors.archiveVendor(request)`

- **OnSuccess**: <code>[VendorResponseDto](src/models/vendor-response-dto.ts)</code>
- **OnError**: throws <code>[Vendors.ArchiveVendorError](src/resources/vendors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vendors.archiveVendor(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VendorResponseDto, Vendors.ArchiveVendorError&gt;</code>, with `result.value` of type <code>[VendorResponseDto](src/models/vendor-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createBulkVendor(request: Vendors.CreateBulkVendorRequest, options?: RequestOptions): ApiPromise&lt;BulkVendorResponseDto, Vendors.CreateBulkVendorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple vendors with one API request. You can create up to 20 vendors with one `POST /v3/vendors/bulk` request.

In your bulk vendor creation request, all your vendors must be successfully created for a successful response. If any vendor creation is not successful, the entire request fails and none of the vendors in the request are created.

### Requirements for enabling vendor payments

Vendor address details are required for paying a vendor by check or for inviting the vendor to join the BILL network.
* `line1`
* `city`
* `zipOrPostalCode`
* `country`
* `payeeName`

**Note**: A vendor can be enrolled to accept virtual card payments even without being connected in the BILL network. See Virtual card FAQ in the BILL Help Center for more information.

### Requirements for enabling electronic payments to vendors

Vendor bank account details are required for paying a vendor with electronic payment methods.

`paymentInformation` details about bank accounts are required for adding a vendor bank account.
* `payeeName`
* `bankCountry` (for international vendors)
* `paymentCurrency` (for international vendors)
* `nameOnAccount`
* `accountNumber`
* `routingNumber` (empty for an IBAN `accountNumber`)
* `type` (for international vendors)

`regulatoryFields` and `paymentPurpose` are additional required fields for enabling electronic payments to international vendors (not United States) in specific countries.

**Note**: When you add a vendor bank account in the production environment, BILL requires 2 business days to complete a one-time verification of the bank account. To pay such a vendor, you must set a `processDate` that is 2 business days from the current date.

See Vendors in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vendors.createBulkVendor({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [
      {
        name: "some example string",
        address: {
          line1: "some example string",
          city: "some example string",
          zipOrPostalCode: "some example string",
          country: CountryCode.Ad,
        },
      },
    ],
  });
  // TODO: Handle 'response' of type BulkVendorResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Vendors.CreateBulkVendorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendors
  .createBulkVendor({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: [
      {
        name: "some example string",
        address: {
          line1: "some example string",
          city: "some example string",
          zipOrPostalCode: "some example string",
          country: CountryCode.Ad,
        },
      },
    ],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkVendorResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[VendorRequestDto](src/models/vendor-request-dto.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendors.createBulkVendor(request)`

- **OnSuccess**: <code>[BulkVendorResponseDto](src/models/bulk-vendor-response-dto.ts)</code>
- **OnError**: throws <code>[Vendors.CreateBulkVendorError](src/resources/vendors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vendors.createBulkVendor(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkVendorResponseDto, Vendors.CreateBulkVendorError&gt;</code>, with `result.value` of type <code>[BulkVendorResponseDto](src/models/bulk-vendor-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createVendor(request: Vendors.CreateVendorRequest, options?: RequestOptions): ApiPromise&lt;VendorResponseDto, Vendors.CreateVendorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new vendor.

### Requirements for enabling vendor payments

Vendor address details are required for paying a vendor by check or for inviting the vendor to join the BILL network.
* `line1`
* `city`
* `zipOrPostalCode`
* `country`
* `payeeName`

**Note**: A vendor can be enrolled to accept virtual card payments even without being connected in the BILL network. See Virtual card FAQ in the BILL Help Center for more information.

### Requirements for enabling electronic payments to vendors

Vendor bank account details are required for paying a vendor with electronic payment methods.

`paymentInformation` details about bank accounts are required for adding a vendor bank account.
* `payeeName`
* `bankCountry` (for international vendors)
* `paymentCurrency` (for international vendors)
* `nameOnAccount`
* `accountNumber`
* `routingNumber` (empty for an IBAN `accountNumber`)
* `type` (for international vendors)

`regulatoryFields` and `paymentPurpose` are additional required fields for enabling electronic payments to international vendors (not United States) in specific countries.

**Note**: When you add a vendor bank account in the production environment, BILL requires 2 business days to complete a one-time verification of the bank account. To pay such a vendor, you must set a `processDate` that is 2 business days from the current date.

See Vendors in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vendors.createVendor({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {
      name: "some example string",
      address: {
        line1: "some example string",
        city: "some example string",
        zipOrPostalCode: "some example string",
        country: CountryCode.Ad,
      },
    },
  });
  // TODO: Handle 'response' of type VendorResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Vendors.CreateVendorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendors
  .createVendor({
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {
      name: "some example string",
      address: {
        line1: "some example string",
        city: "some example string",
        zipOrPostalCode: "some example string",
        country: CountryCode.Ad,
      },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VendorResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[VendorRequestDto](src/models/vendor-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendors.createVendor(request)`

- **OnSuccess**: <code>[VendorResponseDto](src/models/vendor-response-dto.ts)</code>
- **OnError**: throws <code>[Vendors.CreateVendorError](src/resources/vendors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vendors.createVendor(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VendorResponseDto, Vendors.CreateVendorError&gt;</code>, with `result.value` of type <code>[VendorResponseDto](src/models/vendor-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createVendorBankAccount(request: Vendors.CreateVendorBankAccountRequest, options?: RequestOptions): ApiPromise&lt;VendorBankAccountResponseDto, Vendors.CreateVendorBankAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a vendor bank account for an existing vendor.

To update vendor bank account information, you must first delete the existing vendor bank account (with `DELETE /v3/vendors/{vendorId}/bank-account`), and then create a new vendor bank account (with `POST /v3/vendors/{vendorId}/bank-account`) with the updated information.

**Note**: When you add a vendor bank account in the production environment, BILL requires 2 business days to complete a one-time verification of the bank account. To pay such a vendor, you must set a `processDate` that is 2 business days from the current date.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vendors.createVendorBankAccount({
    vendorId: "{{vendor_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { accountNumber: "some example string" },
  });
  // TODO: Handle 'response' of type VendorBankAccountResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Vendors.CreateVendorBankAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendors
  .createVendorBankAccount({
    vendorId: "{{vendor_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: { accountNumber: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VendorBankAccountResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendorId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[VendorBankAccountRequestDto](src/models/vendor-bank-account-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendors.createVendorBankAccount(request)`

- **OnSuccess**: <code>[VendorBankAccountResponseDto](src/models/vendor-bank-account-response-dto.ts)</code>
- **OnError**: throws <code>[Vendors.CreateVendorBankAccountError](src/resources/vendors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vendors.createVendorBankAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VendorBankAccountResponseDto, Vendors.CreateVendorBankAccountError&gt;</code>, with `result.value` of type <code>[VendorBankAccountResponseDto](src/models/vendor-bank-account-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteVendorBankAccount(request: Vendors.DeleteVendorBankAccountRequest, options?: RequestOptions): ApiPromise&lt;undefined, Vendors.DeleteVendorBankAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete the existing vendor bank account for a vendor.

To update vendor bank account information, you must first delete the existing vendor bank account (with `DELETE /v3/vendors/{vendorId}/bank-account`), and then create a new vendor bank account (with `POST /v3/vendors/{vendorId}/bank-account`) with the updated information.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.vendors.deleteVendorBankAccount({
    vendorId: "{{vendor_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
} catch (err) {
  // TODO: Handle 'err' of type Vendors.DeleteVendorBankAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendors
  .deleteVendorBankAccount({
    vendorId: "{{vendor_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
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
| <code>vendorId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendors.deleteVendorBankAccount(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Vendors.DeleteVendorBankAccountError](src/resources/vendors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vendors.deleteVendorBankAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Vendors.DeleteVendorBankAccountError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getConfigurationByVendorId(request: Vendors.GetConfigurationByVendorIdRequest, options?: RequestOptions): ApiPromise&lt;VendorConfigurationResponseDto, Vendors.GetConfigurationByVendorIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get international payments (not USD) configuration after vendor creation. This configuration is required for compliance with international payment rules of a vendor country and vendor bank account.

In the response, the required `paymentPurpose` and `regulatoryFields` information is retrieved for the vendor.

**Note**: If you are adding `paymentPurpose` and `regulatoryFields` information during international vendor creation, use `GET /v3/vendors/configuration/international-payments` to get the required configuration before vendor creation.

See Create an international vendor for more information on how to set `paymentPurpose` and `regulatoryFields`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vendors.getConfigurationByVendorId({
    vendorId: "{{vendor_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type VendorConfigurationResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Vendors.GetConfigurationByVendorIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendors
  .getConfigurationByVendorId({
    vendorId: "{{vendor_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VendorConfigurationResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendorId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendors.getConfigurationByVendorId(request)`

- **OnSuccess**: <code>[VendorConfigurationResponseDto](src/models/vendor-configuration-response-dto.ts)</code>
- **OnError**: throws <code>[Vendors.GetConfigurationByVendorIdError](src/resources/vendors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vendors.getConfigurationByVendorId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VendorConfigurationResponseDto, Vendors.GetConfigurationByVendorIdError&gt;</code>, with `result.value` of type <code>[VendorConfigurationResponseDto](src/models/vendor-configuration-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getIntlConfig(request: Vendors.GetIntlConfigRequest, options?: RequestOptions): ApiPromise&lt;IntlPmtsConfigurationResponseDto, Vendors.GetIntlConfigError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get international payments (not USD) configuration that is required for compliance with international payment rules of a vendor country and vendor bank account.

This information is based on vendor country, bill currency, and vendor account type. Use this endpoint for getting information before creating an international vendor. In the response, the required `paymentPurpose` and `regulatoryFields` information is retrieved for the vendor.

**Note**: If you are adding `paymentPurpose` and `regulatoryFields` information after creating an international vendor, use `GET /v3/vendors/{vendorId}/configuration` to get the required configuration for your created vendor.

See Create an international vendor for more information on how to set `paymentPurpose` and `regulatoryFields`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vendors.getIntlConfig({
    country: CountryCode.Ad,
    billCurrency: CurrencyCode.Aed,
    accountType: AccountTypeRequest.None,
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type IntlPmtsConfigurationResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Vendors.GetIntlConfigError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendors
  .getIntlConfig({
    country: CountryCode.Ad,
    billCurrency: CurrencyCode.Aed,
    accountType: AccountTypeRequest.None,
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IntlPmtsConfigurationResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>country</code> | <code>[CountryCode](src/models/country-code.ts)</code> | - |
| <code>billCurrency</code> | <code>[CurrencyCode](src/models/currency-code.ts)</code> | - |
| <code>accountType</code> | <code>[AccountTypeRequest](src/models/account-type-request.ts)</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendors.getIntlConfig(request)`

- **OnSuccess**: <code>[IntlPmtsConfigurationResponseDto](src/models/intl-pmts-configuration-response-dto.ts)</code>
- **OnError**: throws <code>[Vendors.GetIntlConfigError](src/resources/vendors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vendors.getIntlConfig(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IntlPmtsConfigurationResponseDto, Vendors.GetIntlConfigError&gt;</code>, with `result.value` of type <code>[IntlPmtsConfigurationResponseDto](src/models/intl-pmts-configuration-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVendor(request: Vendors.GetVendorRequest, options?: RequestOptions): ApiPromise&lt;VendorResponseDto, Vendors.GetVendorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing vendor.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vendors.getVendor({
    vendorId: "{{vendor_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type VendorResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Vendors.GetVendorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendors
  .getVendor({ vendorId: "{{vendor_id}}", sessionId: "{{session_id}}", devKey: "{{developer_key}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VendorResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendorId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendors.getVendor(request)`

- **OnSuccess**: <code>[VendorResponseDto](src/models/vendor-response-dto.ts)</code>
- **OnError**: throws <code>[Vendors.GetVendorError](src/resources/vendors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vendors.getVendor(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VendorResponseDto, Vendors.GetVendorError&gt;</code>, with `result.value` of type <code>[VendorResponseDto](src/models/vendor-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVendorBankAccount(request: Vendors.GetVendorBankAccountRequest, options?: RequestOptions): ApiPromise&lt;VendorBankAccountResponseDto, Vendors.GetVendorBankAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing vendor bank account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vendors.getVendorBankAccount({
    vendorId: "{{vendor_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type VendorBankAccountResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Vendors.GetVendorBankAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendors
  .getVendorBankAccount({
    vendorId: "{{vendor_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VendorBankAccountResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendorId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendors.getVendorBankAccount(request)`

- **OnSuccess**: <code>[VendorBankAccountResponseDto](src/models/vendor-bank-account-response-dto.ts)</code>
- **OnError**: throws <code>[Vendors.GetVendorBankAccountError](src/resources/vendors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vendors.getVendorBankAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VendorBankAccountResponseDto, Vendors.GetVendorBankAccountError&gt;</code>, with `result.value` of type <code>[VendorBankAccountResponseDto](src/models/vendor-bank-account-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listVendors(request?: Vendors.ListVendorsRequest, options?: RequestOptions): ApiPromise&lt;ListVendorResponseDto, Vendors.ListVendorsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of vendor objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vendors.listVendors({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{vendor_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type ListVendorResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Vendors.ListVendorsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendors
  .listVendors({
    max: 10,
    sort: "createdTime:desc",
    filters: "id:eq:{{vendor_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListVendorResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max?</code> | <code>number</code> | - |
| <code>sort?</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendors.listVendors(request)`

- **OnSuccess**: <code>[ListVendorResponseDto](src/models/list-vendor-response-dto.ts)</code>
- **OnError**: throws <code>[Vendors.ListVendorsError](src/resources/vendors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vendors.listVendors(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListVendorResponseDto, Vendors.ListVendorsError&gt;</code>, with `result.value` of type <code>[ListVendorResponseDto](src/models/list-vendor-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>restoreVendor(request: Vendors.RestoreVendorRequest, options?: RequestOptions): ApiPromise&lt;VendorResponseDto, Vendors.RestoreVendorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived vendor. In the response, the `archived` field is set as `false`.

You can perform any valid BILL operation on restored vendors. There is no change when you restore a restored vendor.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vendors.restoreVendor({
    vendorId: "{{vendor_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
  });
  // TODO: Handle 'response' of type VendorResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Vendors.RestoreVendorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendors
  .restoreVendor({ vendorId: "{{vendor_id}}", sessionId: "{{session_id}}", devKey: "{{developer_key}}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VendorResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendorId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendors.restoreVendor(request)`

- **OnSuccess**: <code>[VendorResponseDto](src/models/vendor-response-dto.ts)</code>
- **OnError**: throws <code>[Vendors.RestoreVendorError](src/resources/vendors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vendors.restoreVendor(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VendorResponseDto, Vendors.RestoreVendorError&gt;</code>, with `result.value` of type <code>[VendorResponseDto](src/models/vendor-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateVendor(request: Vendors.UpdateVendorRequest, options?: RequestOptions): ApiPromise&lt;VendorResponseDto, Vendors.UpdateVendorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing vendor.

### Requirements for enabling vendor payments

Vendor address details are required for paying a vendor by check or for inviting the vendor to join the BILL network.
* `line1`
* `city`
* `zipOrPostalCode`
* `country`
* `payeeName`

**Note**: You cannot add or update vendor bank account information with this endpoint. You can add and manage vendor bank account information with a dedicated set of endpoints.
* **Create a vendor bank account**: `POST /v3/vendors/{vendorId}/bank-account`
* **Get vendor bank account details**: `GET /v3/vendors/{vendorId}/bank-account`
* **Delete a vendor bank account**: `DELETE /v3/vendors/{vendorId}/bank-account`

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vendors.updateVendor({
    vendorId: "{{vendor_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  });
  // TODO: Handle 'response' of type VendorResponseDto
} catch (err) {
  // TODO: Handle 'err' of type Vendors.UpdateVendorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendors
  .updateVendor({
    vendorId: "{{vendor_id}}",
    sessionId: "{{session_id}}",
    devKey: "{{developer_key}}",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VendorResponseDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendorId</code> | <code>string</code> | - |
| <code>sessionId?</code> | <code>string</code> | - |
| <code>devKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[VendorUpdateRequestDto](src/models/vendor-update-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendors.updateVendor(request)`

- **OnSuccess**: <code>[VendorResponseDto](src/models/vendor-response-dto.ts)</code>
- **OnError**: throws <code>[Vendors.UpdateVendorError](src/resources/vendors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vendors.updateVendor(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VendorResponseDto, Vendors.UpdateVendorError&gt;</code>, with `result.value` of type <code>[VendorResponseDto](src/models/vendor-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DivvyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

