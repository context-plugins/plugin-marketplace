# Reference

> Source: [SkribbleClient](src/client.ts)

## Access

> Source: [Access](src/resources/access.ts)

<details>
<summary><code>accessLogin(request: Access.AccessLoginRequest, options?: RequestOptions): ApiPromise&lt;string, Access.AccessLoginError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To use the Skribble API, you first need an API key and an API user. Both
can be managed on the API key page in your business profile. Consult our
guide for
setup instructions.

Skribble offers two types of API keys:

**Demo API keys**

Demo API keys are for testing and development purposes. Signatures created
with demo keys have no legal weight and are free of charge.

Demo keys can be identified by their name, which starts with **api_demo**.

**Production API keys**

Production API keys are used for live systems. Signatures created with
production keys will be invoiced.

Production keys can be identified by their name, which starts with
**api_production** or, in some cases, **api_prod**.

> **⚠ Note**
> All costs incurred by signature requests created with your API keys will
> be **charged to your business**. We recommend starting with a demo API
> key during development and testing, and switching to a production key
> only once testing is complete.

For help setting up Skribble Business, contact us at
support@skribble.com.

To obtain an access token, authenticate using the `/access/login` endpoint.
You can pass your credentials as raw JSON or as `x-www-form-urlencoded`
key-value pairs (see example requests).

Upon successful authentication, a JSON Web Token (JWT) is returned. This
JWT must be included in nearly every API request.

The access token is passed in the `Authorization` HTTP header using the
`Bearer` scheme. Example:
`Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI...`

### Token life cycle

#### API key

API keys have a long but finite lifetime. The validity period depends on
the volume of API calls and is agreed upon individually as part of the
shared secret agreement.

#### Access token

Access tokens have a lifetime of approximately **20 minutes**. Automatic
token renewal is not currently supported.

#### Logout

There is **no logout endpoint**. Access tokens expire automatically after
the defined lifetime.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.access.accessLogin({
    username: "add_your_api_name_here",
    apiKey: "please_enter_your_password_here",
  });
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type Access.AccessLoginError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.access
  .accessLogin({ username: "add_your_api_name_here", apiKey: "please_enter_your_password_here" })
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
| <code>username</code> | <code>string</code> | The username of the users credentials to login |
| <code>apiKey</code> | <code>string</code> | The API key of the users credentials to login |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.access.accessLogin(request)`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[Access.AccessLoginError](src/resources/access.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.access.accessLogin(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, Access.AccessLoginError&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AdditionalInformation

> Source: [AdditionalInformation](src/resources/additional-information.ts)

<details>
<summary><code>getInfosFormat(request: AdditionalInformation.GetInfosFormatRequest, options?: RequestOptions): ApiPromise&lt;FormatInfosResponse, AdditionalInformation.GetInfosFormatError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.additionalInformation.getInfosFormat({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type FormatInfosResponse
} catch (err) {
  // TODO: Handle 'err' of type AdditionalInformation.GetInfosFormatError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.additionalInformation
  .getInfosFormat({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FormatInfosResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The 'id' provided by the validate operation |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.additionalInformation.getInfosFormat(request)`

- **OnSuccess**: <code>[FormatInfosResponse](src/models/format-infos-response.ts)</code>
- **OnError**: throws <code>[AdditionalInformation.GetInfosFormatError](src/resources/additional-information.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.additionalInformation.getInfosFormat(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FormatInfosResponse, AdditionalInformation.GetInfosFormatError&gt;</code>, with `result.value` of type <code>[FormatInfosResponse](src/models/format-infos-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getInfosSigners(request: AdditionalInformation.GetInfosSignersRequest, options?: RequestOptions): ApiPromise&lt;Signer[], AdditionalInformation.GetInfosSignersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Additional information about the people who signed the document. The query
parameter is the id from the validation endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.additionalInformation.getInfosSigners({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type Signer[]
} catch (err) {
  // TODO: Handle 'err' of type AdditionalInformation.GetInfosSignersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.additionalInformation
  .getInfosSigners({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Signer[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The 'id' provided by the validate operation |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.additionalInformation.getInfosSigners(request)`

- **OnSuccess**: <code>[Signer](src/models/signer.ts)[]</code>
- **OnError**: throws <code>[AdditionalInformation.GetInfosSignersError](src/resources/additional-information.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.additionalInformation.getInfosSigners(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Signer[], AdditionalInformation.GetInfosSignersError&gt;</code>, with `result.value` of type <code>[Signer](src/models/signer.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getInfosValidation(request: AdditionalInformation.GetInfosValidationRequest, options?: RequestOptions): ApiPromise&lt;ValidationInfosResponse, AdditionalInformation.GetInfosValidationError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.additionalInformation.getInfosValidation({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ValidationInfosResponse
} catch (err) {
  // TODO: Handle 'err' of type AdditionalInformation.GetInfosValidationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.additionalInformation
  .getInfosValidation({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ValidationInfosResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The 'id' provided by the validate operation |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.additionalInformation.getInfosValidation(request)`

- **OnSuccess**: <code>[ValidationInfosResponse](src/models/validation-infos-response.ts)</code>
- **OnError**: throws <code>[AdditionalInformation.GetInfosValidationError](src/resources/additional-information.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.additionalInformation.getInfosValidation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ValidationInfosResponse, AdditionalInformation.GetInfosValidationError&gt;</code>, with `result.value` of type <code>[ValidationInfosResponse](src/models/validation-infos-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## BillingAndCredits

> Source: [BillingAndCredits](src/resources/billing-and-credits.ts)

<details>
<summary><code>getBillingCreditsInfos(options?: RequestOptions): ApiPromise&lt;BillingCreditInfos, BillingAndCredits.GetBillingCreditsInfosError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the list of credit usage information associated with specific endpoints

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.billingAndCredits.getBillingCreditsInfos();
  // TODO: Handle 'response' of type BillingCreditInfos
} catch (err) {
  // TODO: Handle 'err' of type BillingAndCredits.GetBillingCreditsInfosError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.billingAndCredits.getBillingCreditsInfos().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BillingCreditInfos
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.billingAndCredits.getBillingCreditsInfos()`

- **OnSuccess**: <code>[BillingCreditInfos](src/models/billing-credit-infos.ts)</code>
- **OnError**: throws <code>[BillingAndCredits.GetBillingCreditsInfosError](src/resources/billing-and-credits.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.billingAndCredits.getBillingCreditsInfos().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BillingCreditInfos, BillingAndCredits.GetBillingCreditsInfosError&gt;</code>, with `result.value` of type <code>[BillingCreditInfos](src/models/billing-credit-infos.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBillingCreditsInvoiced(request?: BillingAndCredits.GetBillingCreditsInvoicedRequest, options?: RequestOptions): ApiPromise&lt;BillingCreditUsage, BillingAndCredits.GetBillingCreditsInvoicedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get invoiced credit details for the most recent billing period or a
specified time period

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.billingAndCredits.getBillingCreditsInvoiced();
  // TODO: Handle 'response' of type BillingCreditUsage
} catch (err) {
  // TODO: Handle 'err' of type BillingAndCredits.GetBillingCreditsInvoicedError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.billingAndCredits.getBillingCreditsInvoiced().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BillingCreditUsage
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>period?</code> | <code>string</code> | Format YYYY, YYYYMM, YYYYMMDD is supported. If not specified the last<br>invoiced period is used by default |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.billingAndCredits.getBillingCreditsInvoiced(request)`

- **OnSuccess**: <code>[BillingCreditUsage](src/models/billing-credit-usage.ts)</code>
- **OnError**: throws <code>[BillingAndCredits.GetBillingCreditsInvoicedError](src/resources/billing-and-credits.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.billingAndCredits.getBillingCreditsInvoiced(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BillingCreditUsage, BillingAndCredits.GetBillingCreditsInvoicedError&gt;</code>, with `result.value` of type <code>[BillingCreditUsage](src/models/billing-credit-usage.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBillingCreditsUsage(options?: RequestOptions): ApiPromise&lt;BillingCreditUsage, BillingAndCredits.GetBillingCreditsUsageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get credit usage list and details for current billing period

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.billingAndCredits.getBillingCreditsUsage();
  // TODO: Handle 'response' of type BillingCreditUsage
} catch (err) {
  // TODO: Handle 'err' of type BillingAndCredits.GetBillingCreditsUsageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.billingAndCredits.getBillingCreditsUsage().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BillingCreditUsage
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.billingAndCredits.getBillingCreditsUsage()`

- **OnSuccess**: <code>[BillingCreditUsage](src/models/billing-credit-usage.ts)</code>
- **OnError**: throws <code>[BillingAndCredits.GetBillingCreditsUsageError](src/resources/billing-and-credits.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.billingAndCredits.getBillingCreditsUsage().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BillingCreditUsage, BillingAndCredits.GetBillingCreditsUsageError&gt;</code>, with `result.value` of type <code>[BillingCreditUsage](src/models/billing-credit-usage.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DocumentApi

> Source: [DocumentApi](src/resources/document-api.ts)

<details>
<summary><code>deleteDocument(request: DocumentApi.DeleteDocumentRequest, options?: RequestOptions): ApiPromise&lt;undefined, DocumentApi.DeleteDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a `Document` by its ID. Deletion behaves similarly to deleting a
`SignatureRequest` and does not necessarily remove the object from the
system immediately.

If more than one participant is involved, the DELETE request only removes
the current user from the `Document`.

The system permanently removes the `Document` once the last user deletes it
via the Skribble web application.

**Async cascade note:** If the `Document`'s parent `SignatureRequest` was
recently deleted, the server-side cascade that removes associated documents
runs asynchronously. During this window the document is still listed by
`GET /documents` but returns `403 Forbidden` on delete attempts. Retry
after a few seconds — the document will either have been removed by the
cascade or the delete will succeed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.documentApi.deleteDocument({ docId: "f1e2d3c4-7b8a-4e6f-9d3b-123456789abc" });
} catch (err) {
  // TODO: Handle 'err' of type DocumentApi.DeleteDocumentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documentApi
  .deleteDocument({ docId: "f1e2d3c4-7b8a-4e6f-9d3b-123456789abc" })
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
| <code>docId</code> | <code>string</code> | Unique ID received when creating the Document Request object |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documentApi.deleteDocument(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DocumentApi.DeleteDocumentError](src/resources/document-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documentApi.deleteDocument(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DocumentApi.DeleteDocumentError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDocumentContent(request: DocumentApi.GetDocumentContentRequest, options?: RequestOptions): ApiPromise&lt;DocumentContentResponse, DocumentApi.GetDocumentContentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Downloads the content of the document identified by its ID. Returns either
a PDF binary or a JSON object containing a Base64-encoded PDF.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.documentApi.getDocumentContent({
    docId: "f1e2d3c4-7b8a-4e6f-9d3b-123456789abc",
  });
  // TODO: Handle 'response' of type DocumentContentResponse
} catch (err) {
  // TODO: Handle 'err' of type DocumentApi.GetDocumentContentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documentApi
  .getDocumentContent({ docId: "f1e2d3c4-7b8a-4e6f-9d3b-123456789abc" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocumentContentResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | Unique ID received when creating the Document Request object |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documentApi.getDocumentContent(request)`

- **OnSuccess**: <code>[DocumentContentResponse](src/models/document-content-response.ts)</code>
- **OnError**: throws <code>[DocumentApi.GetDocumentContentError](src/resources/document-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documentApi.getDocumentContent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocumentContentResponse, DocumentApi.GetDocumentContentError&gt;</code>, with `result.value` of type <code>[DocumentContentResponse](src/models/document-content-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDocumentMetadata(request: DocumentApi.GetDocumentMetadataRequest, options?: RequestOptions): ApiPromise&lt;DocumentResponse, DocumentApi.GetDocumentMetadataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches the metadata for the `Document` identified by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.documentApi.getDocumentMetadata({
    docId: "f1e2d3c4-7b8a-4e6f-9d3b-123456789abc",
  });
  // TODO: Handle 'response' of type DocumentResponse
} catch (err) {
  // TODO: Handle 'err' of type DocumentApi.GetDocumentMetadataError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documentApi
  .getDocumentMetadata({ docId: "f1e2d3c4-7b8a-4e6f-9d3b-123456789abc" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocumentResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docId</code> | <code>string</code> | Unique ID received when creating the Document Request object |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documentApi.getDocumentMetadata(request)`

- **OnSuccess**: <code>[DocumentResponse](src/models/document-response.ts)</code>
- **OnError**: throws <code>[DocumentApi.GetDocumentMetadataError](src/resources/document-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documentApi.getDocumentMetadata(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocumentResponse, DocumentApi.GetDocumentMetadataError&gt;</code>, with `result.value` of type <code>[DocumentResponse](src/models/document-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDocumentPreview(request: DocumentApi.GetDocumentPreviewRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, DocumentApi.GetDocumentPreviewError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a preview image for a specific page of the uploaded PDF document.
Page numbering starts at **0** for the first page.

> Use the optional `scale` parameter to control the preview size:
> `scale=100` returns a full-size preview, while `scale=20` returns a
> thumbnail.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.documentApi.getDocumentPreview({
    docId: "f1e2d3c4-7b8a-4e6f-9d3b-123456789abc",
    pageId: 0,
    scale: 20,
  });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type DocumentApi.GetDocumentPreviewError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documentApi
  .getDocumentPreview({ docId: "f1e2d3c4-7b8a-4e6f-9d3b-123456789abc", pageId: 0, scale: 20 })
  .asApiResult();
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
| <code>docId</code> | <code>string</code> | Unique ID received when creating the Document Request object |
| <code>pageId</code> | <code>number</code> | Page ID of the document |
| <code>scale?</code> | <code>number</code> | The scaling factor for the image.<br>**Default**: 100 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documentApi.getDocumentPreview(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[DocumentApi.GetDocumentPreviewError](src/resources/document-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documentApi.getDocumentPreview(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, DocumentApi.GetDocumentPreviewError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDocuments(options?: RequestOptions): ApiPromise&lt;DocumentResponse[], DocumentApi.GetDocumentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an array of all accessible `Document` objects.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.documentApi.getDocuments();
  // TODO: Handle 'response' of type DocumentResponse[]
} catch (err) {
  // TODO: Handle 'err' of type DocumentApi.GetDocumentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documentApi.getDocuments().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocumentResponse[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documentApi.getDocuments()`

- **OnSuccess**: <code>[DocumentResponse](src/models/document-response.ts)[]</code>
- **OnError**: throws <code>[DocumentApi.GetDocumentsError](src/resources/document-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documentApi.getDocuments().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocumentResponse[], DocumentApi.GetDocumentsError&gt;</code>, with `result.value` of type <code>[DocumentResponse](src/models/document-response.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadDocument(request: DocumentApi.UploadDocumentRequestParams, options?: RequestOptions): ApiPromise&lt;DocumentResponse, DocumentApi.UploadDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload using a **Base64 encoded** file as `content`.

**Content size limits**:
Very large uploads are rejected by the gateway in front of the API
before the request reaches it, returning a `403 Forbidden` response.
This currently returns a plain body instead of the standard
Problem+JSON error envelope used elsewhere in this API; a fix to align
it is planned.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.documentApi.uploadDocument({
    body: { title: "some example string", content: "some example string", fileUrl: "https://example.com" },
  });
  // TODO: Handle 'response' of type DocumentResponse
} catch (err) {
  // TODO: Handle 'err' of type DocumentApi.UploadDocumentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documentApi
  .uploadDocument({
    body: { title: "some example string", content: "some example string", fileUrl: "https://example.com" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocumentResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UploadDocumentRequest](src/models/upload-document-request.ts)</code> | Request body to create a Document object |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documentApi.uploadDocument(request)`

- **OnSuccess**: <code>[DocumentResponse](src/models/document-response.ts)</code>
- **OnError**: throws <code>[DocumentApi.UploadDocumentError](src/resources/document-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documentApi.uploadDocument(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocumentResponse, DocumentApi.UploadDocumentError&gt;</code>, with `result.value` of type <code>[DocumentResponse](src/models/document-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Identification

> Source: [Identification](src/resources/identification.ts)

<details>
<summary><code>getIdentificationEvidenceFiles(request: Identification.GetIdentificationEvidenceFilesRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, Identification.GetIdentificationEvidenceFilesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Downloads all files related to the identification evidence as a ZIP archive.

**Requirements:**
- The business must have identification evidence enabled. If it is not,
the request fails with `403 Forbidden` (problem type `feature-not-enabled`).
- The identification process must be completed (`evidence_id` is required).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.identification.getIdentificationEvidenceFiles({
    srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b",
    evidenceId: "700580648",
  });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type Identification.GetIdentificationEvidenceFilesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.identification
  .getIdentificationEvidenceFiles({ srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b", evidenceId: "700580648" })
  .asApiResult();
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
| <code>srId</code> | <code>string</code> | Unique ID received when creating the Signature Request object |
| <code>evidenceId</code> | <code>string</code> | Unique ID of the identification evidence record, available in the `signer_identity_data.evidence_id` field of the SignatureRequest response once identification is complete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.identification.getIdentificationEvidenceFiles(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[Identification.GetIdentificationEvidenceFilesError](src/resources/identification.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.identification.getIdentificationEvidenceFiles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, Identification.GetIdentificationEvidenceFilesError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getIdentificationEvidenceJson(request: Identification.GetIdentificationEvidenceJsonRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Identification.GetIdentificationEvidenceJsonError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the full identification evidence record as JSON for the given
`SignatureRequest` and `evidence_id`.

**Requirements:**
- The business must have identification evidence enabled. If it is not,
the request fails with `403 Forbidden` (problem type `feature-not-enabled`).
- The identification process must be completed (`evidence_id` is required).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.identification.getIdentificationEvidenceJson({
    srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b",
    evidenceId: "700580648",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Identification.GetIdentificationEvidenceJsonError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.identification
  .getIdentificationEvidenceJson({ srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b", evidenceId: "700580648" })
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
| <code>srId</code> | <code>string</code> | Unique ID received when creating the Signature Request object |
| <code>evidenceId</code> | <code>string</code> | Unique ID of the identification evidence record, available in the `signer_identity_data.evidence_id` field of the SignatureRequest response once identification is complete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.identification.getIdentificationEvidenceJson(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Identification.GetIdentificationEvidenceJsonError](src/resources/identification.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.identification.getIdentificationEvidenceJson(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Identification.GetIdentificationEvidenceJsonError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getIdentificationEvidenceJwt(request: Identification.GetIdentificationEvidenceJwtRequest, options?: RequestOptions): ApiPromise&lt;string, Identification.GetIdentificationEvidenceJwtError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the signed JWT for the identification evidence. Useful for
cryptographic verification or downstream integration purposes.

**Requirements:**
- The business must have identification evidence enabled. If it is not,
the request fails with `403 Forbidden` (problem type `feature-not-enabled`).
- The identification process must be completed (`evidence_id` is required).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.identification.getIdentificationEvidenceJwt({
    srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b",
    evidenceId: "700580648",
  });
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type Identification.GetIdentificationEvidenceJwtError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.identification
  .getIdentificationEvidenceJwt({ srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b", evidenceId: "700580648" })
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
| <code>srId</code> | <code>string</code> | Unique ID received when creating the Signature Request object |
| <code>evidenceId</code> | <code>string</code> | Unique ID of the identification evidence record, available in the `signer_identity_data.evidence_id` field of the SignatureRequest response once identification is complete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.identification.getIdentificationEvidenceJwt(request)`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[Identification.GetIdentificationEvidenceJwtError](src/resources/identification.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.identification.getIdentificationEvidenceJwt(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, Identification.GetIdentificationEvidenceJwtError&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getIdentificationEvidenceStatus(request: Identification.GetIdentificationEvidenceStatusRequest, options?: RequestOptions): ApiPromise&lt;IdentificationEvidenceStatusResponse, Identification.GetIdentificationEvidenceStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current status of the identification evidence for the given
`SignatureRequest` and `evidence_id`.

**Requirements:**
- The business must have identification evidence enabled. If it is not,
the request fails with `403 Forbidden` (problem type `feature-not-enabled`).
- The identification process must have been initiated (`evidence_id` is required,
available in `signer_identity_data.evidence_id` of the `SignatureRequest` response).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.identification.getIdentificationEvidenceStatus({
    srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b",
    evidenceId: "700580648",
  });
  // TODO: Handle 'response' of type IdentificationEvidenceStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type Identification.GetIdentificationEvidenceStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.identification
  .getIdentificationEvidenceStatus({ srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b", evidenceId: "700580648" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IdentificationEvidenceStatusResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>srId</code> | <code>string</code> | Unique ID received when creating the Signature Request object |
| <code>evidenceId</code> | <code>string</code> | Unique ID of the identification evidence record, available in the `signer_identity_data.evidence_id` field of the SignatureRequest response once identification is complete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.identification.getIdentificationEvidenceStatus(request)`

- **OnSuccess**: <code>[IdentificationEvidenceStatusResponse](src/models/identification-evidence-status-response.ts)</code>
- **OnError**: throws <code>[Identification.GetIdentificationEvidenceStatusError](src/resources/identification.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.identification.getIdentificationEvidenceStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IdentificationEvidenceStatusResponse, Identification.GetIdentificationEvidenceStatusError&gt;</code>, with `result.value` of type <code>[IdentificationEvidenceStatusResponse](src/models/identification-evidence-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Monitoring

> Source: [Monitoring](src/resources/monitoring.ts)

<details>
<summary><code>getSystemHealth(options?: RequestOptions): ApiPromise&lt;SystemHealthResponse, Monitoring.GetSystemHealthError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current health status of the Skribble API. Use this endpoint
to monitor system availability and responsiveness.

`status:UP` indicates that the system is operational.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitoring.getSystemHealth();
  // TODO: Handle 'response' of type SystemHealthResponse
} catch (err) {
  // TODO: Handle 'err' of type Monitoring.GetSystemHealthError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitoring.getSystemHealth().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SystemHealthResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitoring.getSystemHealth()`

- **OnSuccess**: <code>[SystemHealthResponse](src/models/system-health-response.ts)</code>
- **OnError**: throws <code>[Monitoring.GetSystemHealthError](src/resources/monitoring.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitoring.getSystemHealth().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SystemHealthResponse, Monitoring.GetSystemHealthError&gt;</code>, with `result.value` of type <code>[SystemHealthResponse](src/models/system-health-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Report

> Source: [Report](src/resources/report.ts)

<details>
<summary><code>getActivitiesSignaturesByBusiness(request: Report.GetActivitiesSignaturesByBusinessRequest, options?: RequestOptions): ApiPromise&lt;ActivitiesSignaturesByBusinessResponse, Report.GetActivitiesSignaturesByBusinessError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed signature `activities` for your business and its members within a specified date range.

Use these parameters to filter for a specific time range.

| **Parameter** | **Description** | **Mandatory** |
| --- | --- | --- |
| `start_date` | The start date of the range to fetch the signature `activities`. Format: `yyyy-MM-dd.` | yes |
| `end_date` | The end date of the range to fetch the signature `activities`. Format: `yyyy-MM-dd.` | yes |

### **Pagination**

The result set can be controlled using the optional pagination parameters `page` and `size`

| **Parameter** | **Description** | **Mandatory** |
| --- | --- | --- |
| `page` | The page number to fetch the signature `activities`. Must be a positive integer. Default: 1 | no |
| `size` | The size of the page to fetch the signature activities. Must be a positive integer. Default: 25 Maximum: 100 | no |
| `sort` | The sort order of the signature activities. Can be `asc` or `desc`. Default is `desc`. | no |

### **Response**

The response contains the following information.

**General**

| **Field** | **Description** |
| --- | --- |
| `activities` | Array of `activities`. See the following subchapter _Activities_. |
| `total_items` | Total items to fetch when paginating through all the pages. |
| `total_pages` | Total pages to fetch when paginating through all the pages. |
| `current_page` | Current page number. |
| `size` | Size of the page. |

**Activities**

| **Field** | **Description** |
| --- | --- |
| `id` | The ID of the signature `activity`. |
| `action` | The action type of a signature activity. Can be `signed` or `sealed`. |
| `timestamp` | The timestamp of the signature activity. |
| `signature_request_id` | The signature request ID. |
| `cost_center` | The cost center of the signature paying party. This information might not necessarily be present. |
| `initiator` | The initiator `user` of the signature `activity`. See the following subchapter _User_. |
| `signer` | The signer `user` of the signature `activity`. See the following subchapter _User_. |

**User**

| **Field** | **Description** |
| --- | --- |
| `email` | The email of the `user`. |
| `first_name` | The first name of the `user`. |
| `last_name` | The last name of the `user`. |
| `type` | The membership status of the `user` in relation to the business. Can be `api`, `external`, `member` or `unknown`. |
| `mobile` | The mobile number of the user. |

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.report.getActivitiesSignaturesByBusiness({
    startDate: "2024-01-01",
    endDate: "2024-01-31",
    page: 1,
    size: 50,
    sort: Sort.Desc,
  });
  // TODO: Handle 'response' of type ActivitiesSignaturesByBusinessResponse
} catch (err) {
  // TODO: Handle 'err' of type Report.GetActivitiesSignaturesByBusinessError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.report
  .getActivitiesSignaturesByBusiness({
    startDate: "2024-01-01",
    endDate: "2024-01-31",
    page: 1,
    size: 50,
    sort: Sort.Desc,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ActivitiesSignaturesByBusinessResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>startDate</code> | <code>string</code> (date) | Start Date to find |
| <code>endDate</code> | <code>string</code> (date) | End Date to find |
| <code>page?</code> | <code>number</code> | Page for pagination.<br>**Default**: 1 |
| <code>size?</code> | <code>number</code> | Page size for pagination.<br>**Default**: 25 |
| <code>sort?</code> | <code>[Sort](src/models/sort.ts)</code> | Sort order<br>**Default**: "desc" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.report.getActivitiesSignaturesByBusiness(request)`

- **OnSuccess**: <code>[ActivitiesSignaturesByBusinessResponse](src/models/activities-signatures-by-business-response.ts)</code>
- **OnError**: throws <code>[Report.GetActivitiesSignaturesByBusinessError](src/resources/report.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.report.getActivitiesSignaturesByBusiness(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ActivitiesSignaturesByBusinessResponse, Report.GetActivitiesSignaturesByBusinessError&gt;</code>, with `result.value` of type <code>[ActivitiesSignaturesByBusinessResponse](src/models/activities-signatures-by-business-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Reports

> Source: [Reports](src/resources/reports.ts)

<details>
<summary><code>getReportsEtsi(request: Reports.GetReportsEtsiRequest, options?: RequestOptions): ApiPromise&lt;undefined, Reports.GetReportsEtsiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the ETSI TS 119 102-2 signature validation report as a XML

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.reports.getReportsEtsi({ id: "00000000-0000-0000-0000-000000000000" });
} catch (err) {
  // TODO: Handle 'err' of type Reports.GetReportsEtsiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports
  .getReportsEtsi({ id: "00000000-0000-0000-0000-000000000000" })
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
| <code>id</code> | <code>string</code> | The 'id' provided by the validate operation |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.getReportsEtsi(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Reports.GetReportsEtsiError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.getReportsEtsi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Reports.GetReportsEtsiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSkribbleReport(request: Reports.GetSkribbleReportRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, Reports.GetSkribbleReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the digitally signed Skribble validation report as PDF. The report is generated once per validation ID, language, ETSI attachment flag and timezone, then cached — subsequent requests with the same parameters are served from cache and not billed. Optionally attach the ETSI TS 119 102-2 XML validation report as an embedded file in the PDF.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.getSkribbleReport({
    id: "00000000-0000-0000-0000-000000000000",
    timeZone: "Europe/Zurich",
  });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type Reports.GetSkribbleReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports
  .getSkribbleReport({ id: "00000000-0000-0000-0000-000000000000", timeZone: "Europe/Zurich" })
  .asApiResult();
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
| <code>id</code> | <code>string</code> | The 'id' provided by the validate operation |
| <code>lang?</code> | <code>[Lang](src/models/lang.ts)</code> | Language of the validation report<br>**Default**: "en" |
| <code>attachEtsiReport?</code> | <code>boolean</code> | Attach the ETSI TS 119 102-2 XML validation report as a file attachment to the PDF. When enabled, the XML report is embedded in the PDF and a paperclip annotation is added on the last page. This registers additional usage for the ETSI report endpoint.<br>**Default**: false |
| <code>timeZone?</code> | <code>string</code> | IANA timezone name used to render timestamps in the report — the "Generated at" time and each signer's "Time of signature". Defaults to UTC, preserving the previous behaviour when omitted. The rendered zone abbreviation (e.g. `UTC`, `CET`, `PST`) reflects the chosen zone. Browser callers can pass `Intl.DateTimeFormat().resolvedOptions().timeZone`. The timezone is part of the report cache key, so each distinct timezone (per language and ETSI flag) is rendered, billed and cached once. An unknown or malformed value returns `400`.<br>**Default**: "UTC" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.getSkribbleReport(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[Reports.GetSkribbleReportError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.getSkribbleReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, Reports.GetSkribbleReportError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Seal

> Source: [Seal](src/resources/seal.ts)

<details>
<summary><code>sealDocument(request: Seal.SealDocumentRequest, options?: RequestOptions): ApiPromise&lt;CreateSealResponse, Seal.SealDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads a document and affixes an electronic seal in a single call.

Optionally, a visual signature can also be placed on the document.

The response contains the `document_id` of the newly created sealed
document, which can be used to retrieve it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.seal.sealDocument({
    body: { content: "U29tZUJhc2U2NEVuY29kZWRJbWFnZQ==", accountName: "ais_demo_seal" },
  });
  // TODO: Handle 'response' of type CreateSealResponse
} catch (err) {
  // TODO: Handle 'err' of type Seal.SealDocumentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.seal
  .sealDocument({ body: { content: "U29tZUJhc2U2NEVuY29kZWRJbWFnZQ==", accountName: "ais_demo_seal" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateSealResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateSealRequest](src/models/create-seal-request.ts)</code> | Content base64-encoded in a JSON object |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.seal.sealDocument(request)`

- **OnSuccess**: <code>[CreateSealResponse](src/models/create-seal-response.ts)</code>
- **OnError**: throws <code>[Seal.SealDocumentError](src/resources/seal.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.seal.sealDocument(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateSealResponse, Seal.SealDocumentError&gt;</code>, with `result.value` of type <code>[CreateSealResponse](src/models/create-seal-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SendTo

> Source: [SendTo](src/resources/send-to.ts)

<details>
<summary><code>createSendTo(request: SendTo.CreateSendToRequestParams, options?: RequestOptions): ApiPromise&lt;CreateSendToResponse, SendTo.CreateSendToError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts the signing process by uploading the PDF document `content` and
assigning it a `title`.

### Limited lifetime

> Send-To objects and their related Documents and SignatureRequests are only
> guaranteed for a **limited lifetime**.
>
> - A Send-To request that is not claimed by a user — i.e. where a user
> does not add the document to their list of documents to sign — is
> deleted automatically after one day.
>
> - All Send-To objects and their related Documents and SignatureRequest
> objects, regardless of status, are deleted automatically after 90 days.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sendTo.createSendTo({ title: "Document 1", content: new Uint8Array() });
  // TODO: Handle 'response' of type CreateSendToResponse
} catch (err) {
  // TODO: Handle 'err' of type SendTo.CreateSendToError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sendTo
  .createSendTo({ title: "Document 1", content: new Uint8Array() })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateSendToResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>title</code> | <code>string</code> | Title of the document. |
| <code>content</code> | <code>FileInput</code> | PDF file to upload. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sendTo.createSendTo(request)`

- **OnSuccess**: <code>[CreateSendToResponse](src/models/create-send-to-response.ts)</code>
- **OnError**: throws <code>[SendTo.CreateSendToError](src/resources/send-to.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sendTo.createSendTo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateSendToResponse, SendTo.CreateSendToError&gt;</code>, with `result.value` of type <code>[CreateSendToResponse](src/models/create-send-to-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSendTo(request: SendTo.DeleteSendToRequest, options?: RequestOptions): ApiPromise&lt;undefined, SendTo.DeleteSendToError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To call the `delete` endpoint, you must include the value of the
`access_code` field—received when creating the `Send-To` object—in the
request header `X-Accesscode`.

This call deletes the involved `Send-To`, `Document`, and `SignatureRequest`
objects regardless of the current `Send-To` state.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.sendTo.deleteSendTo({
    sendToId: "d98ae06a-3ae4-5cc5-c0a3-62b05901b84f",
    xAccesscode: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  });
} catch (err) {
  // TODO: Handle 'err' of type SendTo.DeleteSendToError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sendTo
  .deleteSendTo({
    sendToId: "d98ae06a-3ae4-5cc5-c0a3-62b05901b84f",
    xAccesscode: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
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
| <code>sendToId</code> | <code>string</code> | Unique ID received when creating the Send-To object |
| <code>xAccesscode</code> | <code>string</code> | Access code received when creating the Send-To object |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sendTo.deleteSendTo(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SendTo.DeleteSendToError](src/resources/send-to.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sendTo.deleteSendTo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SendTo.DeleteSendToError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>downloadSendTo(request: SendTo.DownloadSendToRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, SendTo.DownloadSendToError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To call the `download` endpoint, you must include the value of the
`access_code` field—received when creating the `Send-To` object—in the
request header `X-Accesscode`.

The response contains the originally provided PDF document in its current
state, which may be signed, declined, withdrawn, or still open for signing.
The current status can be retrieved using the `track` endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sendTo.downloadSendTo({
    sendToId: "d98ae06a-3ae4-5cc5-c0a3-62b05901b84f",
    xAccesscode: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type SendTo.DownloadSendToError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sendTo
  .downloadSendTo({
    sendToId: "d98ae06a-3ae4-5cc5-c0a3-62b05901b84f",
    xAccesscode: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  })
  .asApiResult();
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
| <code>sendToId</code> | <code>string</code> | Unique ID received when creating the Send-To object |
| <code>xAccesscode</code> | <code>string</code> | Access code received when creating the Send-To object |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sendTo.downloadSendTo(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[SendTo.DownloadSendToError](src/resources/send-to.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sendTo.downloadSendTo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, SendTo.DownloadSendToError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>trackSendTo(request: SendTo.TrackSendToRequest, options?: RequestOptions): ApiPromise&lt;TrackSendToResponse, SendTo.TrackSendToError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To call the `track` endpoint, you must include the value of the
`access_code` field—received when creating the `Send-To` object—in the
request header `X-Accesscode`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sendTo.trackSendTo({
    sendToId: "d98ae06a-3ae4-5cc5-c0a3-62b05901b84f",
    xAccesscode: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  });
  // TODO: Handle 'response' of type TrackSendToResponse
} catch (err) {
  // TODO: Handle 'err' of type SendTo.TrackSendToError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sendTo
  .trackSendTo({
    sendToId: "d98ae06a-3ae4-5cc5-c0a3-62b05901b84f",
    xAccesscode: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TrackSendToResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sendToId</code> | <code>string</code> | Unique ID received when creating the Send-To object |
| <code>xAccesscode</code> | <code>string</code> | Access code received when creating the Send-To object |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sendTo.trackSendTo(request)`

- **OnSuccess**: <code>[TrackSendToResponse](src/models/track-send-to-response.ts)</code>
- **OnError**: throws <code>[SendTo.TrackSendToError](src/resources/send-to.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sendTo.trackSendTo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TrackSendToResponse, SendTo.TrackSendToError&gt;</code>, with `result.value` of type <code>[TrackSendToResponse](src/models/track-send-to-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Signature

> Source: [Signature](src/resources/signature.ts)

<details>
<summary><code>addDocumentInSignatureRequest(request: Signature.AddDocumentInSignatureRequestRequest, options?: RequestOptions): ApiPromise&lt;undefined, Signature.AddDocumentInSignatureRequestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds an additional document to the `SignatureRequest` while it is still in `DRAFT` status.

**Content size limits**:
Very large document content is rejected by the gateway in front of the
API before the request reaches it, returning a `403 Forbidden` response.
This currently returns a plain body instead of the standard
Problem+JSON error envelope used elsewhere in this API; a fix to align
it is planned.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.signature.addDocumentInSignatureRequest({
    srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b",
    body: { content: "U29tZUJhc2U2NEVuY29kZWRJbWFnZQ==" },
  });
} catch (err) {
  // TODO: Handle 'err' of type Signature.AddDocumentInSignatureRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signature
  .addDocumentInSignatureRequest({
    srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b",
    body: { content: "U29tZUJhc2U2NEVuY29kZWRJbWFnZQ==" },
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
| <code>srId</code> | <code>string</code> | Unique ID received when creating the Signature Request object |
| <code>body</code> | <code>[SignatureDocumentUpload](src/models/signature-document-upload.ts)</code> | Request body to add a Document |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signature.addDocumentInSignatureRequest(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Signature.AddDocumentInSignatureRequestError](src/resources/signature.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signature.addDocumentInSignatureRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Signature.AddDocumentInSignatureRequestError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createSignatureRequest(request: Signature.CreateSignatureRequestRequest, options?: RequestOptions): ApiPromise&lt;SignatureResponseV3, Signature.CreateSignatureRequestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new `SignatureRequest`, which is the primary object of the Skribble API.
A `SignatureRequest` defines who signs what and under which conditions. It specifies
the documents to be signed, the list of required signers, the desired signature quality
and legislation, and optional settings such as signing sequences, callback URLs, and
access control.

Compared to API v2, this version supports attaching multiple documents to a single
`SignatureRequest`. Additionally, the request no longer triggers invitations immediately.
Instead, the `SignatureRequest` is created with a `status_overall` of `DRAFT`.

If you specify an owner using the `creator` field, that user will find the request in
the Drafts section of their account, where they can review and complete the setup.

Once ready, call `/initiate` to start the `SignatureRequest` and send out invitations.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signature.createSignatureRequest({
    body: {
      title: "Example contract",
      message: "Please sign this document!",
      quality: SignatureQuality.Demo,
      documents: [{ id: "3648f61d-4194-455c-a0bc-1c438d2cd11b" }],
      signatures: [{}],
    },
  });
  // TODO: Handle 'response' of type SignatureResponseV3
} catch (err) {
  // TODO: Handle 'err' of type Signature.CreateSignatureRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signature
  .createSignatureRequest({
    body: {
      title: "Example contract",
      message: "Please sign this document!",
      quality: SignatureQuality.Demo,
      documents: [{ id: "3648f61d-4194-455c-a0bc-1c438d2cd11b" }],
      signatures: [{}],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignatureResponseV3
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateSignatureRequest](src/models/create-signature-request.ts)</code> | Request body to create a SignatureRequest object |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signature.createSignatureRequest(request)`

- **OnSuccess**: <code>[SignatureResponseV3](src/models/signature-response-v3.ts)</code>
- **OnError**: throws <code>[Signature.CreateSignatureRequestError](src/resources/signature.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signature.createSignatureRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignatureResponseV3, Signature.CreateSignatureRequestError&gt;</code>, with `result.value` of type <code>[SignatureResponseV3](src/models/signature-response-v3.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteDocumentInSignatureRequest(request: Signature.DeleteDocumentInSignatureRequestRequest, options?: RequestOptions): ApiPromise&lt;undefined, Signature.DeleteDocumentInSignatureRequestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the document identified by `DOC_ID` from the `SignatureRequest`
with the ID `SR_ID`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.signature.deleteDocumentInSignatureRequest({
    srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b",
    docId: "f1e2d3c4-7b8a-4e6f-9d3b-123456789abc",
  });
} catch (err) {
  // TODO: Handle 'err' of type Signature.DeleteDocumentInSignatureRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signature
  .deleteDocumentInSignatureRequest({
    srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b",
    docId: "f1e2d3c4-7b8a-4e6f-9d3b-123456789abc",
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
| <code>srId</code> | <code>string</code> | Unique ID received when creating the Signature Request object |
| <code>docId</code> | <code>string</code> | Unique ID received when creating the Document Request object |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signature.deleteDocumentInSignatureRequest(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Signature.DeleteDocumentInSignatureRequestError](src/resources/signature.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signature.deleteDocumentInSignatureRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Signature.DeleteDocumentInSignatureRequestError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSignatureRequest(request: Signature.DeleteSignatureRequestRequest, options?: RequestOptions): ApiPromise&lt;undefined, Signature.DeleteSignatureRequestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a `SignatureRequest` by its ID.

**Important:** A `SignatureRequest` can only be deleted via the API if:

1. the `SignatureRequest` has `status_overall=OPEN`, and

2. the API user has sufficient rights on the `SignatureRequest`, e.g. when
it was created by the API user.

Deleting a `SignatureRequest` does not necessarily remove it from the
system immediately.

**WITHDRAWN**

When the API user is the **owner** of the `SignatureRequest` and it is
still in `status_overall=OPEN`, the `SignatureRequest` will be
**WITHDRAWN**.

This means the `SignatureRequest` will transition to
`status_overall=WITHDRAWN` and all pending signatures will be marked with
`status_code=WITHDRAWN`. Sign and read rights for all signers will be
revoked, so invited signers can no longer read or sign the
`SignatureRequest`.

**REMOVE AS PARTICIPANT**

When the API user is a participant but not the owner of the
`SignatureRequest`, the `DELETE` request will only remove the API user as a
participant.

In this case, the system will remove the `SignatureRequest` and its related
documents once the last remaining user deletes it via the Skribble web
application.

**DELETING**

When the API user is the last user with access rights to the
`SignatureRequest` (e.g. after a **WITHDRAW**), the `SignatureRequest` and
its related documents will be permanently removed from the system.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.signature.deleteSignatureRequest({ srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b" });
} catch (err) {
  // TODO: Handle 'err' of type Signature.DeleteSignatureRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signature
  .deleteSignatureRequest({ srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b" })
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
| <code>srId</code> | <code>string</code> | Unique ID received when creating the Signature Request object |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signature.deleteSignatureRequest(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Signature.DeleteSignatureRequestError](src/resources/signature.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signature.deleteSignatureRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Signature.DeleteSignatureRequestError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSignatureRequestDetails(request: Signature.GetSignatureRequestDetailsRequest, options?: RequestOptions): ApiPromise&lt;SignatureResponseV3, Signature.GetSignatureRequestDetailsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches a `SignatureRequest` by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signature.getSignatureRequestDetails({
    srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b",
  });
  // TODO: Handle 'response' of type SignatureResponseV3
} catch (err) {
  // TODO: Handle 'err' of type Signature.GetSignatureRequestDetailsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signature
  .getSignatureRequestDetails({ srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignatureResponseV3
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>srId</code> | <code>string</code> | Unique ID received when creating the Signature Request object |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signature.getSignatureRequestDetails(request)`

- **OnSuccess**: <code>[SignatureResponseV3](src/models/signature-response-v3.ts)</code>
- **OnError**: throws <code>[Signature.GetSignatureRequestDetailsError](src/resources/signature.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signature.getSignatureRequestDetails(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignatureResponseV3, Signature.GetSignatureRequestDetailsError&gt;</code>, with `result.value` of type <code>[SignatureResponseV3](src/models/signature-response-v3.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>initiateSignatureRequest(request: Signature.InitiateSignatureRequestRequest, options?: RequestOptions): ApiPromise&lt;undefined, Signature.InitiateSignatureRequestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts the signing process for a `SignatureRequest` in `DRAFT` status.

This action sends out invitation emails and transitions `status_overall`
from `DRAFT` to `OPEN`. Once initiated, the `SignatureRequest` is no longer
visible in the Drafts section and will appear in the appropriate section
(e.g. Pending) for each participant.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.signature.initiateSignatureRequest({ srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b" });
} catch (err) {
  // TODO: Handle 'err' of type Signature.InitiateSignatureRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signature
  .initiateSignatureRequest({ srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b" })
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
| <code>srId</code> | <code>string</code> | Unique ID received when creating the Signature Request object |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signature.initiateSignatureRequest(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Signature.InitiateSignatureRequestError](src/resources/signature.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signature.initiateSignatureRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Signature.InitiateSignatureRequestError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>withdrawSignatureRequest(request: Signature.WithdrawSignatureRequestRequest, options?: RequestOptions): ApiPromise&lt;SignatureResponse, Signature.WithdrawSignatureRequestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Withdraws a `SignatureRequest`, for example when signing becomes unnecessary
or an error occurred during the invitation process. As the inviter, you can
explicitly withdraw the `SignatureRequest`. This removes all signers and
observers as participants and notifies them with a specified `message`.

Similar to deletion, the `withdraw` action can only be executed if:

- The `SignatureRequest` has `status_overall=OPEN`

- The API user has sufficient rights on the `SignatureRequest`, such as
when it was created by the API user.

> **Note**
> We recommend using the `delete` endpoint, which automatically determines
> the appropriate action. For example, if the API user does not have
> withdrawal rights, they may instead be removed as a participant, or the
> document may be deleted directly.
>
> Use the `withdraw` endpoint specifically when you need to withdraw the
> `SignatureRequest` while keeping it in Skribble.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signature.withdrawSignatureRequest({
    srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b",
    body: { message: "The signature request is no longer required." },
  });
  // TODO: Handle 'response' of type SignatureResponse
} catch (err) {
  // TODO: Handle 'err' of type Signature.WithdrawSignatureRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signature
  .withdrawSignatureRequest({
    srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b",
    body: { message: "The signature request is no longer required." },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignatureResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>srId</code> | <code>string</code> | Unique ID received when creating the Signature Request object |
| <code>body?</code> | <code>[WithdrawSignatureRequest](src/models/withdraw-signature-request.ts)</code> | Request body to withdraw a SignatureRequest object |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signature.withdrawSignatureRequest(request)`

- **OnSuccess**: <code>[SignatureResponse](src/models/signature-response.ts)</code>
- **OnError**: throws <code>[Signature.WithdrawSignatureRequestError](src/resources/signature.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signature.withdrawSignatureRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignatureResponse, Signature.WithdrawSignatureRequestError&gt;</code>, with `result.value` of type <code>[SignatureResponse](src/models/signature-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SignatureAttachmentApi

> Source: [SignatureAttachmentApi](src/resources/signature-attachment-api.ts)

<details>
<summary><code>createSignatureAttachment(request: SignatureAttachmentApi.CreateSignatureAttachmentRequestParams, options?: RequestOptions): ApiPromise&lt;SignatureResponseSkribbleSignatureAttachmentApi, SignatureAttachmentApi.CreateSignatureAttachmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this endpoint to provide supplementary documents (for example, Terms &
Conditions or appendices) to participants of a `SignatureRequest`.

Attachments are delivered to participants together with the
`SignatureRequest`.

**Content type limits**:
The Skribble API accepts PDF files, image files, Microsoft Office files, and
plain text files.

Allowed content types:
- application/pdf
- application/x-tika-msoffice
- application/x-tika-ooxml
- application/msword
- application/vnd.openxmlformats-officedocument.wordprocessingml.document
- application/vnd.ms-word.document.macroEnabled.12
- application/vnd.ms-excel
- application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
- application/vnd.ms-excel.sheet.macroenabled.12
- application/vnd.ms-powerpoint
- application/vnd.openxmlformats-officedocument.presentationml.presentation
- application/vnd.ms-powerpoint.presentation.macroEnabled.12
- image/gif
- image/jpeg
- image/png
- text/plain

**Content size limits**:
The maximum size of a single attachment is approximately 40 MB.
The maximum request size is 60 MB. Exceeding it is rejected by the
gateway in front of the API before the request reaches it, returning a
`403 Forbidden` response. This currently returns a plain body instead
of the standard Problem+JSON error envelope used elsewhere in this
API; a fix to align it is planned.

**Amount limits**:
There is currently no limit on the number of attachments per
SignatureRequest. Abuse of this service may result in enforced limits.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signatureAttachmentApi.createSignatureAttachment({
    srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b",
    body: { filename: "Attachment-1.pdf", contentType: "application/pdf", content: "SGVsbG8gd29ybGQh" },
  });
  // TODO: Handle 'response' of type SignatureResponseSkribbleSignatureAttachmentApi
} catch (err) {
  // TODO: Handle 'err' of type SignatureAttachmentApi.CreateSignatureAttachmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureAttachmentApi
  .createSignatureAttachment({
    srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b",
    body: { filename: "Attachment-1.pdf", contentType: "application/pdf", content: "SGVsbG8gd29ybGQh" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignatureResponseSkribbleSignatureAttachmentApi
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>srId</code> | <code>string</code> | Unique ID received when creating the Signature Request object |
| <code>body</code> | <code>[CreateSignatureAttachmentRequest](src/models/create-signature-attachment-request.ts)</code> | Request body to create a SignatureAttachment object |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureAttachmentApi.createSignatureAttachment(request)`

- **OnSuccess**: <code>[SignatureResponseSkribbleSignatureAttachmentApi](src/models/signature-response-skribble-signature-attachment-api.ts)</code>
- **OnError**: throws <code>[SignatureAttachmentApi.CreateSignatureAttachmentError](src/resources/signature-attachment-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureAttachmentApi.createSignatureAttachment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignatureResponseSkribbleSignatureAttachmentApi, SignatureAttachmentApi.CreateSignatureAttachmentError&gt;</code>, with `result.value` of type <code>[SignatureResponseSkribbleSignatureAttachmentApi](src/models/signature-response-skribble-signature-attachment-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSignatureAttachment(request: SignatureAttachmentApi.DeleteSignatureAttachmentRequest, options?: RequestOptions): ApiPromise&lt;undefined, SignatureAttachmentApi.DeleteSignatureAttachmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the attachment identified by `ATTACHMENT_ID` from the
`SignatureRequest` with the ID `SR_ID`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.signatureAttachmentApi.deleteSignatureAttachment({
    srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b",
    attachmentId: "8ed33046-3798-8c54-0b13-0820d0d6e121",
  });
} catch (err) {
  // TODO: Handle 'err' of type SignatureAttachmentApi.DeleteSignatureAttachmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureAttachmentApi
  .deleteSignatureAttachment({
    srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b",
    attachmentId: "8ed33046-3798-8c54-0b13-0820d0d6e121",
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
| <code>srId</code> | <code>string</code> | Unique ID received when creating the Signature Request object |
| <code>attachmentId</code> | <code>string</code> | Unique ID returned when the Signature Attachment is created. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureAttachmentApi.deleteSignatureAttachment(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SignatureAttachmentApi.DeleteSignatureAttachmentError](src/resources/signature-attachment-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureAttachmentApi.deleteSignatureAttachment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SignatureAttachmentApi.DeleteSignatureAttachmentError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSignatureAttachmentContent(request: SignatureAttachmentApi.GetSignatureAttachmentContentRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, SignatureAttachmentApi.GetSignatureAttachmentContentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Downloads the content of the attachment identified by `ATTACHMENT_ID`
for the `SignatureRequest` with the ID `SR_ID`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signatureAttachmentApi.getSignatureAttachmentContent({
    srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b",
    attachmentId: "8ed33046-3798-8c54-0b13-0820d0d6e121",
  });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type SignatureAttachmentApi.GetSignatureAttachmentContentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureAttachmentApi
  .getSignatureAttachmentContent({
    srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b",
    attachmentId: "8ed33046-3798-8c54-0b13-0820d0d6e121",
  })
  .asApiResult();
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
| <code>srId</code> | <code>string</code> | Unique ID received when creating the Signature Request object |
| <code>attachmentId</code> | <code>string</code> | Unique ID returned when the Signature Attachment is created. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureAttachmentApi.getSignatureAttachmentContent(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[SignatureAttachmentApi.GetSignatureAttachmentContentError](src/resources/signature-attachment-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureAttachmentApi.getSignatureAttachmentContent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, SignatureAttachmentApi.GetSignatureAttachmentContentError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SignatureHandling

> Source: [SignatureHandling](src/resources/signature-handling.ts)

<details>
<summary><code>bulkGetSignatureRequests(request: SignatureHandling.BulkGetSignatureRequestsRequest, options?: RequestOptions): ApiPromise&lt;SignatureResponse[], SignatureHandling.BulkGetSignatureRequestsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves multiple `SignatureRequest` objects in a single call.

Provide a JSON array of `SignatureRequest` IDs in the request body to specify which
records to fetch. The response includes only the `SignatureRequests` that were
successfully found. IDs that do not match any existing record are silently ignored.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signatureHandling.bulkGetSignatureRequests({
    body: [
      "abababab-a777-e8e8-e8e8-121212121212",
      "bbddbbdd-7788-7ee7-a22a-bfbfbfbfbfbf",
      "cccccccc-1111-2222-3333-444444444444",
      "dddddddd-dead-beef-cafe-999999999999",
      "eeeeeeee-aaaa-bbbb-cccc-dddddddddddd",
      "ffffaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
      "abababab-1234-5678-9abc-defdefdefdef",
      "12341234-aaaa-bbbb-cccc-123412341234",
      "99999999-8888-7777-6666-555555555555",
      "abcdabcd-abcd-abcd-abcd-abcdabcdabcd",
    ],
  });
  // TODO: Handle 'response' of type SignatureResponse[]
} catch (err) {
  // TODO: Handle 'err' of type SignatureHandling.BulkGetSignatureRequestsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureHandling
  .bulkGetSignatureRequests({
    body: [
      "abababab-a777-e8e8-e8e8-121212121212",
      "bbddbbdd-7788-7ee7-a22a-bfbfbfbfbfbf",
      "cccccccc-1111-2222-3333-444444444444",
      "dddddddd-dead-beef-cafe-999999999999",
      "eeeeeeee-aaaa-bbbb-cccc-dddddddddddd",
      "ffffaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
      "abababab-1234-5678-9abc-defdefdefdef",
      "12341234-aaaa-bbbb-cccc-123412341234",
      "99999999-8888-7777-6666-555555555555",
      "abcdabcd-abcd-abcd-abcd-abcdabcdabcd",
    ],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignatureResponse[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>string[]</code> | Array of SignatureRequest IDs to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureHandling.bulkGetSignatureRequests(request)`

- **OnSuccess**: <code>[SignatureResponse](src/models/signature-response.ts)[]</code>
- **OnError**: throws <code>[SignatureHandling.BulkGetSignatureRequestsError](src/resources/signature-handling.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureHandling.bulkGetSignatureRequests(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignatureResponse[], SignatureHandling.BulkGetSignatureRequestsError&gt;</code>, with `result.value` of type <code>[SignatureResponse](src/models/signature-response.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSignatureRequestExpiresAt(request: SignatureHandling.DeleteSignatureRequestExpiresAtRequest, options?: RequestOptions): ApiPromise&lt;undefined, SignatureHandling.DeleteSignatureRequestExpiresAtError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

**Early access.** This endpoint is available to opted-in businesses only. To request
access, contact support@skribble.com.

Clearing the expiry requires the signature-request expiry feature to be enabled
for the business. If it is not, the request fails with `403 Forbidden`
(problem type `feature-not-enabled`).

Clears the owner-set `expires_at` date from a `SignatureRequest` in
`status_overall=DRAFT`.

After this call the `SignatureRequest` no longer has an owner-set expiry.
The `auto_delete_at` retention date (if any) is unaffected.

**Constraints**

- Only allowed while `status_overall=DRAFT`. Calling this on a
non-`DRAFT` request returns `400 Bad Request`.
- Requires the same write access as updating the `SignatureRequest`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.signatureHandling.deleteSignatureRequestExpiresAt({
    srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b",
  });
} catch (err) {
  // TODO: Handle 'err' of type SignatureHandling.DeleteSignatureRequestExpiresAtError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureHandling
  .deleteSignatureRequestExpiresAt({ srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b" })
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
| <code>srId</code> | <code>string</code> | Unique ID received when creating the Signature Request object |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureHandling.deleteSignatureRequestExpiresAt(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SignatureHandling.DeleteSignatureRequestExpiresAtError](src/resources/signature-handling.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureHandling.deleteSignatureRequestExpiresAt(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SignatureHandling.DeleteSignatureRequestExpiresAtError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSignatureReport(request: SignatureHandling.GetSignatureReportRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, SignatureHandling.GetSignatureReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides the signature report for a specific signature request.

By default, the report is returned as a human-readable, digitally signed
PDF document. Optionally, the report format can be changed using the
`type` query parameter (e.g. JSON or HTML).

The report contains all relevant information about the signature process,
including signatories, timestamps, and verification details. It serves as
legally valid proof of the completed signing process and can be stored or
shared for auditing, compliance, or record-keeping purposes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signatureHandling.getSignatureReport({
    srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b",
  });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type SignatureHandling.GetSignatureReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureHandling
  .getSignatureReport({ srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b" })
  .asApiResult();
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
| <code>srId</code> | <code>string</code> | Unique ID received when creating the Signature Request object |
| <code>type?</code> | <code>[TypeSkribbleSignatureHandlingApi](src/models/type-skribble-signature-handling-api.ts)</code> | Format of the Report.<br>**Default**: "PDF" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureHandling.getSignatureReport(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[SignatureHandling.GetSignatureReportError](src/resources/signature-handling.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureHandling.getSignatureReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, SignatureHandling.GetSignatureReportError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSignatureRequest(request?: SignatureHandling.GetSignatureRequestRequest, options?: RequestOptions): ApiPromise&lt;SignatureResponseV3[], SignatureHandling.GetSignatureRequestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all `SignatureRequest` objects that the current user has sufficient
access rights to.

**Filter**

You can optionally filter results using one or more of the optional
parameters.

Filters search for an exact match of the corresponding field value. This
means the filter is case-sensitive and will not match partial values. For
example, _account_email=john.doe@skribble.com_ will only match a
`SignatureRequest` where the `account_email` field is exactly
john.doe@skribble.com and will not match another.john.doe@skribble.com.

Exception: The `search` parameter searches for document titles that contain
the search term.

**Pagination**

The result set can be controlled using the optional pagination parameters
`page_number` and `page_size`, which helps prevent excessively large result
sets.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signatureHandling.getSignatureRequest({
    accountEmail: "john.doe@skribble.com",
    search: "text to find",
    signatureStatus: SignatureStatusCode.Signed,
    statusOverall: SignatureStatusOverall.Open,
    pageNumber: 1,
    pageSize: 25,
  });
  // TODO: Handle 'response' of type SignatureResponseV3[]
} catch (err) {
  // TODO: Handle 'err' of type SignatureHandling.GetSignatureRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureHandling
  .getSignatureRequest({
    accountEmail: "john.doe@skribble.com",
    search: "text to find",
    signatureStatus: SignatureStatusCode.Signed,
    statusOverall: SignatureStatusOverall.Open,
    pageNumber: 1,
    pageSize: 25,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignatureResponseV3[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountEmail?</code> | <code>string</code> | Filter on the field `signatures[].account_email` |
| <code>search?</code> | <code>string</code> | Filter on the field `title` to search for documents containing the serach term. |
| <code>signatureStatus?</code> | <code>[SignatureStatusCode](src/models/signature-status-code.ts)</code> | Filter on the field `signatures[].status_code` with one of the valid Signature states |
| <code>statusOverall?</code> | <code>[SignatureStatusOverall](src/models/signature-status-overall.ts)</code> | Filter on the field `status_overall` with one of the valid Signature states |
| <code>pageNumber?</code> | <code>number</code> | Page number for pagination. By default pagination is disabled. |
| <code>pageSize?</code> | <code>number</code> | Page size for pagination.<br>**Default**: 50 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureHandling.getSignatureRequest(request)`

- **OnSuccess**: <code>[SignatureResponseV3](src/models/signature-response-v3.ts)[]</code>
- **OnError**: throws <code>[SignatureHandling.GetSignatureRequestError](src/resources/signature-handling.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureHandling.getSignatureRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignatureResponseV3[], SignatureHandling.GetSignatureRequestError&gt;</code>, with `result.value` of type <code>[SignatureResponseV3](src/models/signature-response-v3.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSignatureRequestCallbacksV3(request: SignatureHandling.GetSignatureRequestCallbacksV3Request, options?: RequestOptions): ApiPromise&lt;SignatureCallbacksInResponse[], SignatureHandling.GetSignatureRequestCallbacksV3Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed information about the callbacks associated with a
`SignatureRequest`. Use this endpoint to confirm whether a callback has been
executed or to identify errors that occurred during the callback process.

**Result**

If no callbacks have been triggered yet, the response will be an empty
array. Otherwise, it contains an array of `callback` objects that have
already been executed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signatureHandling.getSignatureRequestCallbacksV3({
    srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b",
  });
  // TODO: Handle 'response' of type SignatureCallbacksInResponse[]
} catch (err) {
  // TODO: Handle 'err' of type SignatureHandling.GetSignatureRequestCallbacksV3Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureHandling
  .getSignatureRequestCallbacksV3({ srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignatureCallbacksInResponse[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>srId</code> | <code>string</code> | Unique ID received when creating the Signature Request object |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureHandling.getSignatureRequestCallbacksV3(request)`

- **OnSuccess**: <code>[SignatureCallbacksInResponse](src/models/signature-callbacks-in-response.ts)[]</code>
- **OnError**: throws <code>[SignatureHandling.GetSignatureRequestCallbacksV3Error](src/resources/signature-handling.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureHandling.getSignatureRequestCallbacksV3(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignatureCallbacksInResponse[], SignatureHandling.GetSignatureRequestCallbacksV3Error&gt;</code>, with `result.value` of type <code>[SignatureCallbacksInResponse](src/models/signature-callbacks-in-response.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSignatureRequestDetails2(request: SignatureHandling.GetSignatureRequestDetails2Request, options?: RequestOptions): ApiPromise&lt;SignatureResponseV3, SignatureHandling.GetSignatureRequestDetails2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches a `SignatureRequest` by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signatureHandling.getSignatureRequestDetails2({
    srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b",
  });
  // TODO: Handle 'response' of type SignatureResponseV3
} catch (err) {
  // TODO: Handle 'err' of type SignatureHandling.GetSignatureRequestDetails2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureHandling
  .getSignatureRequestDetails2({ srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignatureResponseV3
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>srId</code> | <code>string</code> | Unique ID received when creating the Signature Request object |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureHandling.getSignatureRequestDetails2(request)`

- **OnSuccess**: <code>[SignatureResponseV3](src/models/signature-response-v3.ts)</code>
- **OnError**: throws <code>[SignatureHandling.GetSignatureRequestDetails2Error](src/resources/signature-handling.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureHandling.getSignatureRequestDetails2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignatureResponseV3, SignatureHandling.GetSignatureRequestDetails2Error&gt;</code>, with `result.value` of type <code>[SignatureResponseV3](src/models/signature-response-v3.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>remindSignatureRequest(request: SignatureHandling.RemindSignatureRequestRequest, options?: RequestOptions): ApiPromise&lt;undefined, SignatureHandling.RemindSignatureRequestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

In addition to the automatic signature reminders, manual reminders can also
be initiated via the Skribble web application and also via the API.

This allows for greater flexibility in managing signature requests, ensuring
that important documents are signed promptly. By using both automatic and
manual reminders, you can tailor your approach to suit the specific needs of
your users or customers.

**Limits**

There is an hourly limit on the number of signature reminders that can be
sent. This limit ensures that reminders are used responsibly and prevents
excessive notifications. Generally, this restriction should not affect you
if you use this feature appropriately. By adhering to this limit, you can
effectively manage your signature requests without overwhelming your users
or customers with frequent reminders.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.signatureHandling.remindSignatureRequest({ srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b" });
} catch (err) {
  // TODO: Handle 'err' of type SignatureHandling.RemindSignatureRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureHandling
  .remindSignatureRequest({ srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b" })
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
| <code>srId</code> | <code>string</code> | Unique ID received when creating the Signature Request object |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureHandling.remindSignatureRequest(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SignatureHandling.RemindSignatureRequestError](src/resources/signature-handling.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureHandling.remindSignatureRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SignatureHandling.RemindSignatureRequestError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSignatureRequest(request: SignatureHandling.UpdateSignatureRequestRequest, options?: RequestOptions): ApiPromise&lt;SignatureResponseV3, SignatureHandling.UpdateSignatureRequestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing `SignatureRequest`. We recommend creating the `SignatureRequest`
with all necessary information upfront and using this endpoint only when changes are
required.

The following fields can be updated: `title`, `message`, `legislation`, `quality`,
`signatures`, `callback_success_url`, `callback_error_url`, `callback_update_url`,
`custom`, `attach_on_success`, `read_access`, and `write_access`.

Observers are managed separately via the dedicated `/observers` endpoints.

**Updating signers**

To add or remove signers, provide the complete desired state of the `signatures` array:

- To add a signer, include the new entry alongside all existing signers.
- To remove a signer, omit their entry from the array.

Alternatively, use the dedicated `/signatures` endpoints to add or remove individual
signers without having to send the full list.

> **Important:** When updating via this endpoint, any signer not present in the
`signatures` array will be removed. Changes to signers can only be made as long as
none of the signers have already completed their signature.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signatureHandling.updateSignatureRequest({
    body: {
      id: "4f43614a-de50-bfe1-2df3-4c881fc7840e",
      title: "Example contract",
      message: "Please sign this document!",
    },
  });
  // TODO: Handle 'response' of type SignatureResponseV3
} catch (err) {
  // TODO: Handle 'err' of type SignatureHandling.UpdateSignatureRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureHandling
  .updateSignatureRequest({
    body: {
      id: "4f43614a-de50-bfe1-2df3-4c881fc7840e",
      title: "Example contract",
      message: "Please sign this document!",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignatureResponseV3
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UpdateSignatureRequest](src/models/update-signature-request.ts)</code> | Request body to update a SignatureRequest object |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureHandling.updateSignatureRequest(request)`

- **OnSuccess**: <code>[SignatureResponseV3](src/models/signature-response-v3.ts)</code>
- **OnError**: throws <code>[SignatureHandling.UpdateSignatureRequestError](src/resources/signature-handling.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureHandling.updateSignatureRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignatureResponseV3, SignatureHandling.UpdateSignatureRequestError&gt;</code>, with `result.value` of type <code>[SignatureResponseV3](src/models/signature-response-v3.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SignatureObserverApi

> Source: [SignatureObserverApi](src/resources/signature-observer-api.ts)

<details>
<summary><code>addSignatureObserver(request: SignatureObserverApi.AddSignatureObserverRequest, options?: RequestOptions): ApiPromise&lt;SignatureObserverResponse, SignatureObserverApi.AddSignatureObserverError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds an observer to the specified signature request.

Observers receive email notifications about signing progress and can view
documents, but cannot sign them.

Adding a **group** observer requires the group-observers feature to be enabled
for the business. If it is not, the request fails with `403 Forbidden`
(problem type `feature-not-enabled`).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signatureObserverApi.addSignatureObserver({
    srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b",
    body: { userId: "123" },
  });
  // TODO: Handle 'response' of type SignatureObserverResponse
} catch (err) {
  // TODO: Handle 'err' of type SignatureObserverApi.AddSignatureObserverError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureObserverApi
  .addSignatureObserver({ srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b", body: { userId: "123" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignatureObserverResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>srId</code> | <code>string</code> | Unique ID received when creating the Signature Request object |
| <code>body</code> | <code>[SignatureObserver](src/models/unions/signature-observer.ts)</code> | Request body to create a SignatureObserver object |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureObserverApi.addSignatureObserver(request)`

- **OnSuccess**: <code>[SignatureObserverResponse](src/models/unions/signature-observer-response.ts)</code>
- **OnError**: throws <code>[SignatureObserverApi.AddSignatureObserverError](src/resources/signature-observer-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureObserverApi.addSignatureObserver(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignatureObserverResponse, SignatureObserverApi.AddSignatureObserverError&gt;</code>, with `result.value` of type <code>[SignatureObserverResponse](src/models/unions/signature-observer-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSignatureObserver(request: SignatureObserverApi.DeleteSignatureObserverRequest, options?: RequestOptions): ApiPromise&lt;undefined, SignatureObserverApi.DeleteSignatureObserverError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the observer identified by `OBSERVER_ID` from the `SignatureRequest`
with the ID `SR_ID`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.signatureObserverApi.deleteSignatureObserver({
    srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b",
    observerId: "ob_123",
  });
} catch (err) {
  // TODO: Handle 'err' of type SignatureObserverApi.DeleteSignatureObserverError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureObserverApi
  .deleteSignatureObserver({ srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b", observerId: "ob_123" })
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
| <code>srId</code> | <code>string</code> | Unique ID received when creating the Signature Request object |
| <code>observerId</code> | <code>string</code> | Unique ID returned when the Signature Observer is created. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureObserverApi.deleteSignatureObserver(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SignatureObserverApi.DeleteSignatureObserverError](src/resources/signature-observer-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureObserverApi.deleteSignatureObserver(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SignatureObserverApi.DeleteSignatureObserverError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSignatureObserver(request: SignatureObserverApi.GetSignatureObserverRequest, options?: RequestOptions): ApiPromise&lt;SignatureObserverResponse, SignatureObserverApi.GetSignatureObserverError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the observer identified by `OBSERVER_ID` from the `SignatureRequest`
with the ID `SR_ID`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signatureObserverApi.getSignatureObserver({
    srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b",
    observerId: "ob_123",
  });
  // TODO: Handle 'response' of type SignatureObserverResponse
} catch (err) {
  // TODO: Handle 'err' of type SignatureObserverApi.GetSignatureObserverError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureObserverApi
  .getSignatureObserver({ srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b", observerId: "ob_123" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignatureObserverResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>srId</code> | <code>string</code> | Unique ID received when creating the Signature Request object |
| <code>observerId</code> | <code>string</code> | Unique ID returned when the Signature Observer is created. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureObserverApi.getSignatureObserver(request)`

- **OnSuccess**: <code>[SignatureObserverResponse](src/models/unions/signature-observer-response.ts)</code>
- **OnError**: throws <code>[SignatureObserverApi.GetSignatureObserverError](src/resources/signature-observer-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureObserverApi.getSignatureObserver(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignatureObserverResponse, SignatureObserverApi.GetSignatureObserverError&gt;</code>, with `result.value` of type <code>[SignatureObserverResponse](src/models/unions/signature-observer-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSignatureObservers(request: SignatureObserverApi.ListSignatureObserversRequest, options?: RequestOptions): ApiPromise&lt;SignatureObserverResponse[], SignatureObserverApi.ListSignatureObserversError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all observers added to the `SignatureRequest` with the ID `SR_ID`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signatureObserverApi.listSignatureObservers({
    srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b",
  });
  // TODO: Handle 'response' of type SignatureObserverResponse[]
} catch (err) {
  // TODO: Handle 'err' of type SignatureObserverApi.ListSignatureObserversError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureObserverApi
  .listSignatureObservers({ srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignatureObserverResponse[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>srId</code> | <code>string</code> | Unique ID received when creating the Signature Request object |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureObserverApi.listSignatureObservers(request)`

- **OnSuccess**: <code>[SignatureObserverResponse](src/models/unions/signature-observer-response.ts)[]</code>
- **OnError**: throws <code>[SignatureObserverApi.ListSignatureObserversError](src/resources/signature-observer-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureObserverApi.listSignatureObservers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignatureObserverResponse[], SignatureObserverApi.ListSignatureObserversError&gt;</code>, with `result.value` of type <code>[SignatureObserverResponse](src/models/unions/signature-observer-response.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SignatureSigner

> Source: [SignatureSigner](src/resources/signature-signer.ts)

<details>
<summary><code>addSignatureSigner(request: SignatureSigner.AddSignatureSignerRequest, options?: RequestOptions): ApiPromise&lt;SignatureResponseV3, SignatureSigner.AddSignatureSignerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds an individual signer to the `SignatureRequest` with the ID `SR_ID`.
Use `account_email` to invite a signer with an existing Skribble account,
or `signer_identity_data` to invite a No-Account-Signer (NAS).

> **Good to know**
> We recommend combining `signer_identity_data` and `account_email` when
> you are unsure whether the user has a Skribble account. If a matching
> account exists, the user will find the `SignatureRequest` in the
> **To sign** section of their account on my.skribble.com.
>
> If you invite them using only `signer_identity_data`, the document will
> not appear in their Skribble account even if one exists — they will need
> to access it via the link in their invitation email.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signatureSigner.addSignatureSigner({
    srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b",
    body: {
      documentSignatures: [{ documentId: "3648f61d-4194-455c-a0bc-1c438d2cd11b" }],
      accountEmail: "single-signer@skribble.com",
      signerIdentityData: { emailAddress: "single-signer@skribble.com" },
    },
  });
  // TODO: Handle 'response' of type SignatureResponseV3
} catch (err) {
  // TODO: Handle 'err' of type SignatureSigner.AddSignatureSignerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureSigner
  .addSignatureSigner({
    srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b",
    body: {
      documentSignatures: [{ documentId: "3648f61d-4194-455c-a0bc-1c438d2cd11b" }],
      accountEmail: "single-signer@skribble.com",
      signerIdentityData: { emailAddress: "single-signer@skribble.com" },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignatureResponseV3
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>srId</code> | <code>string</code> | Unique ID received when creating the Signature Request object |
| <code>body</code> | <code>[SignatureRecipientModel](src/models/unions/signature-recipient-model.ts)</code> | Request body to add a Signer |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureSigner.addSignatureSigner(request)`

- **OnSuccess**: <code>[SignatureResponseV3](src/models/signature-response-v3.ts)</code>
- **OnError**: throws <code>[SignatureSigner.AddSignatureSignerError](src/resources/signature-signer.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureSigner.addSignatureSigner(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignatureResponseV3, SignatureSigner.AddSignatureSignerError&gt;</code>, with `result.value` of type <code>[SignatureResponseV3](src/models/signature-response-v3.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeSignatureSigner(request: SignatureSigner.RemoveSignatureSignerRequest, options?: RequestOptions): ApiPromise&lt;undefined, SignatureSigner.RemoveSignatureSignerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes an individual signer from the `SignatureRequest`. Provide the
SignatureRequest ID `SR_ID` and the Signature ID `SID` of the signer to
remove.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.signatureSigner.removeSignatureSigner({
    srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b",
    sid: "97db18c8-7ca1-35a2-9726-0b32771e4ac6",
  });
} catch (err) {
  // TODO: Handle 'err' of type SignatureSigner.RemoveSignatureSignerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureSigner
  .removeSignatureSigner({
    srId: "cccccccc-4a6a-a958-a42e-6ea4172a378b",
    sid: "97db18c8-7ca1-35a2-9726-0b32771e4ac6",
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
| <code>srId</code> | <code>string</code> | Unique ID received when creating the Signature Request object |
| <code>sid</code> | <code>string</code> | Unique ID of the signer |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureSigner.removeSignatureSigner(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SignatureSigner.RemoveSignatureSignerError](src/resources/signature-signer.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureSigner.removeSignatureSigner(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SignatureSigner.RemoveSignatureSignerError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## User

> Source: [User](src/resources/user.ts)

<details>
<summary><code>getUserSignatureQualities(request?: User.GetUserSignatureQualitiesRequest, options?: RequestOptions): ApiPromise&lt;UserSignatureQualitiesResponse, User.GetUserSignatureQualitiesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the effective signature `quality` that will be applied when the
given `username` signs a document.

The resulting quality is determined by the combination of the requested
`quality` and `legislation`, where `any` matches any legislation.

For example, if you create a `SignatureRequest` with `quality=AES_MINIMAL`
and `legislation=ZERTES`, this endpoint will indicate the final quality the
user will sign with — typically `QES`, as `AES_MINIMAL` upgrades to `QES`
when the user's settings allow it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.user.getUserSignatureQualities({ username: "john.doe@skribble.com" });
  // TODO: Handle 'response' of type UserSignatureQualitiesResponse
} catch (err) {
  // TODO: Handle 'err' of type User.GetUserSignatureQualitiesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.user
  .getUserSignatureQualities({ username: "john.doe@skribble.com" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserSignatureQualitiesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>username?</code> | <code>string</code> | Username to find |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.user.getUserSignatureQualities(request)`

- **OnSuccess**: <code>[UserSignatureQualitiesResponse](src/models/user-signature-qualities-response.ts)</code>
- **OnError**: throws <code>[User.GetUserSignatureQualitiesError](src/resources/user.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.user.getUserSignatureQualities(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserSignatureQualitiesResponse, User.GetUserSignatureQualitiesError&gt;</code>, with `result.value` of type <code>[UserSignatureQualitiesResponse](src/models/user-signature-qualities-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Validation

> Source: [Validation](src/resources/validation.ts)

<details>
<summary><code>deleteValidation(request: Validation.DeleteValidationRequest, options?: RequestOptions): ApiPromise&lt;undefined, Validation.DeleteValidationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the corresponding resource identified by {id}, universal for all
validation resources. Any resource that is not manually deleted will be
automatically deleted after 10 minutes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.validation.deleteValidation({ id: "00000000-0000-0000-0000-000000000000" });
} catch (err) {
  // TODO: Handle 'err' of type Validation.DeleteValidationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.validation
  .deleteValidation({ id: "00000000-0000-0000-0000-000000000000" })
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
| <code>id</code> | <code>string</code> | The 'id' provided by the validate operation |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.validation.deleteValidation(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Validation.DeleteValidationError](src/resources/validation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.validation.deleteValidation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Validation.DeleteValidationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postValidateDocument(request: Validation.PostValidateDocumentRequest, options?: RequestOptions): ApiPromise&lt;DocumentValidationResponse, Validation.PostValidateDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validate signatures in digitally signed content, such as a PDF or XML file.
A validation ID {id} is returned that can be used to call additional
endpoints. The content to be validated is provided in the request body and
is not retained within our service. The maximum request or file size is
50MB. Request parameters can be used to set optional parameters to control
the validation

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.validation.postValidateDocument({ content: new Uint8Array() });
  // TODO: Handle 'response' of type DocumentValidationResponse
} catch (err) {
  // TODO: Handle 'err' of type Validation.PostValidateDocumentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.validation.postValidateDocument({ content: new Uint8Array() }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocumentValidationResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>quality?</code> | <code>[Quality](src/models/quality.ts)</code> | Optional flag specifying the minimum signature quality required (SES, AES,<br>QES). |
| <code>longTermValidation?</code> | <code>boolean</code> | Optional flag indicating whether the signature must be long-term valid. |
| <code>legislation?</code> | <code>[Legislation](src/models/legislation.ts)</code> | Optional jurisdiction (legal framework) the signature must satisfy:<br>`CH` = Swiss law (ZertES), `EU` = EU law (eIDAS Regulation), `CH_EU` = both<br>ZertES and eIDAS, `WORLD` = no specific jurisdiction (international). When set,<br>the validation reports whether the signature meets the selected framework. |
| <code>infos?</code> | <code>[Info](src/models/info.ts)[]</code> | Optional flag to request additional information, such as validation, format,<br>or signer details. |
| <code>rejectVisualDifferences?</code> | <code>boolean</code> | Optional flag to specify if visual differences should be rejected. If 'true',<br>validation will fail due to visual differences; if 'false' or not provided,<br>visual differences will not cause validation to fail. |
| <code>rejectUndefinedChanges?</code> | <code>boolean</code> | Optional flag to specify if undefined changes should be rejected. If 'true',<br>validation will fail due to undefined changes; if 'false' or not provided,<br>undefined changes will not cause validation to fail. |
| <code>content</code> | <code>FileInput</code> | File content to validate (PDF or XML) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.validation.postValidateDocument(request)`

- **OnSuccess**: <code>[DocumentValidationResponse](src/models/document-validation-response.ts)</code>
- **OnError**: throws <code>[Validation.PostValidateDocumentError](src/resources/validation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.validation.postValidateDocument(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocumentValidationResponse, Validation.PostValidateDocumentError&gt;</code>, with `result.value` of type <code>[DocumentValidationResponse](src/models/document-validation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postValidateSignature(request: Validation.PostValidateSignatureRequest, options?: RequestOptions): ApiPromise&lt;SignatureValidationResponse, Validation.PostValidateSignatureError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validate digital signatures such as CMS and CAdES without providing the
associated signed content. A validation ID {id} is returned that can be used
to call additional endpoints. The signature to be validated is provided in
the request body. Query parameters can be used to set optional parameters to
control the validation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.validation.postValidateSignature({ content: new Uint8Array() });
  // TODO: Handle 'response' of type SignatureValidationResponse
} catch (err) {
  // TODO: Handle 'err' of type Validation.PostValidateSignatureError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.validation.postValidateSignature({ content: new Uint8Array() }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignatureValidationResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>quality?</code> | <code>[Quality](src/models/quality.ts)</code> | Optional flag specifying the minimum signature quality required (SES, AES,<br>QES). |
| <code>longTermValidation?</code> | <code>boolean</code> | Optional flag indicating whether the signature must be long-term valid. |
| <code>legislation?</code> | <code>[Legislation](src/models/legislation.ts)</code> | Optional jurisdiction (legal framework) the signature must satisfy:<br>`CH` = Swiss law (ZertES), `EU` = EU law (eIDAS Regulation), `CH_EU` = both<br>ZertES and eIDAS, `WORLD` = no specific jurisdiction (international). When set,<br>the validation reports whether the signature meets the selected framework. |
| <code>infos?</code> | <code>[Info](src/models/info.ts)[]</code> | Optional flag to request additional information, such as validation, format,<br>or signer details. |
| <code>content</code> | <code>FileInput</code> | File content to validate (PDF or XML) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.validation.postValidateSignature(request)`

- **OnSuccess**: <code>[SignatureValidationResponse](src/models/signature-validation-response.ts)</code>
- **OnError**: throws <code>[Validation.PostValidateSignatureError](src/resources/validation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.validation.postValidateSignature(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignatureValidationResponse, Validation.PostValidateSignatureError&gt;</code>, with `result.value` of type <code>[SignatureValidationResponse](src/models/signature-validation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SkribbleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

