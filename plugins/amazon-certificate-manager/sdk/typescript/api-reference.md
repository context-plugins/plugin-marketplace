# Reference

> Source: [AwsCertificateManagerClient](src/client.ts)

## AcmeAccountApi

> Source: [AcmeAccountApi](src/resources/acme-account-api.ts)

<details>
<summary><code>describeAcmeAccount(request: AcmeAccountApi.DescribeAcmeAccountRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AcmeAccountApi.DescribeAcmeAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed metadata about the specified ACME account, including its status, public key thumbprint, and associated external account binding.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.acmeAccountApi.describeAcmeAccount({
    xAmzTarget: XAmzTarget.CertificateManagerDescribeAcmeAccount,
  });
} catch (err) {
  // TODO: Handle 'err' of type AcmeAccountApi.DescribeAcmeAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.acmeAccountApi
  .describeAcmeAccount({ xAmzTarget: XAmzTarget.CertificateManagerDescribeAcmeAccount })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget](src/models/xamz-target.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.acmeAccountApi.describeAcmeAccount(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AcmeAccountApi.DescribeAcmeAccountError](src/resources/acme-account-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.acmeAccountApi.describeAcmeAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AcmeAccountApi.DescribeAcmeAccountError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAcmeAccounts(request: AcmeAccountApi.ListAcmeAccountsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AcmeAccountApi.ListAcmeAccountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of ACME accounts registered with the specified ACME endpoint. ACME accounts are created when clients use external account binding credentials to register.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.acmeAccountApi.listAcmeAccounts({
    xAmzTarget: XAmzTarget1.CertificateManagerListAcmeAccounts,
  });
} catch (err) {
  // TODO: Handle 'err' of type AcmeAccountApi.ListAcmeAccountsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.acmeAccountApi
  .listAcmeAccounts({ xAmzTarget: XAmzTarget1.CertificateManagerListAcmeAccounts })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1](src/models/xamz-target1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.acmeAccountApi.listAcmeAccounts(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AcmeAccountApi.ListAcmeAccountsError](src/resources/acme-account-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.acmeAccountApi.listAcmeAccounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AcmeAccountApi.ListAcmeAccountsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>revokeAcmeAccount(request: AcmeAccountApi.RevokeAcmeAccountRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AcmeAccountApi.RevokeAcmeAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revokes an ACME account, preventing it from requesting or revoking certificates. This operation is irreversible.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.acmeAccountApi.revokeAcmeAccount({
    xAmzTarget: XAmzTarget2.CertificateManagerRevokeAcmeAccount,
  });
} catch (err) {
  // TODO: Handle 'err' of type AcmeAccountApi.RevokeAcmeAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.acmeAccountApi
  .revokeAcmeAccount({ xAmzTarget: XAmzTarget2.CertificateManagerRevokeAcmeAccount })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2](src/models/xamz-target2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.acmeAccountApi.revokeAcmeAccount(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AcmeAccountApi.RevokeAcmeAccountError](src/resources/acme-account-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.acmeAccountApi.revokeAcmeAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AcmeAccountApi.RevokeAcmeAccountError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AcmeDomainValidationApi

> Source: [AcmeDomainValidationApi](src/resources/acme-domain-validation-api.ts)

<details>
<summary><code>createAcmeDomainValidation(request: AcmeDomainValidationApi.CreateAcmeDomainValidationRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AcmeDomainValidationApi.CreateAcmeDomainValidationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a domain validation for an ACME endpoint. Domain validations authorize the endpoint to issue certificates for specified domain names. You configure prevalidation to prove domain ownership.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.acmeDomainValidationApi.createAcmeDomainValidation({
    xAmzTarget:
      XAmzTargetAwsCertificateManagerAcmeDomainValidationApi.CertificateManagerCreateAcmeDomainValidation,
  });
} catch (err) {
  // TODO: Handle 'err' of type AcmeDomainValidationApi.CreateAcmeDomainValidationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.acmeDomainValidationApi
  .createAcmeDomainValidation({
    xAmzTarget:
      XAmzTargetAwsCertificateManagerAcmeDomainValidationApi.CertificateManagerCreateAcmeDomainValidation,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAwsCertificateManagerAcmeDomainValidationApi](src/models/xamz-target-aws-certificate-manager-acme-domain-validation-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.acmeDomainValidationApi.createAcmeDomainValidation(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AcmeDomainValidationApi.CreateAcmeDomainValidationError](src/resources/acme-domain-validation-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.acmeDomainValidationApi.createAcmeDomainValidation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AcmeDomainValidationApi.CreateAcmeDomainValidationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteAcmeDomainValidation(request: AcmeDomainValidationApi.DeleteAcmeDomainValidationRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AcmeDomainValidationApi.DeleteAcmeDomainValidationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a domain validation. After deletion, the ACME endpoint can no longer issue certificates for the associated domain.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.acmeDomainValidationApi.deleteAcmeDomainValidation({
    xAmzTarget:
      XAmzTarget1AwsCertificateManagerAcmeDomainValidationApi.CertificateManagerDeleteAcmeDomainValidation,
  });
} catch (err) {
  // TODO: Handle 'err' of type AcmeDomainValidationApi.DeleteAcmeDomainValidationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.acmeDomainValidationApi
  .deleteAcmeDomainValidation({
    xAmzTarget:
      XAmzTarget1AwsCertificateManagerAcmeDomainValidationApi.CertificateManagerDeleteAcmeDomainValidation,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AwsCertificateManagerAcmeDomainValidationApi](src/models/xamz-target1-aws-certificate-manager-acme-domain-validation-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.acmeDomainValidationApi.deleteAcmeDomainValidation(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AcmeDomainValidationApi.DeleteAcmeDomainValidationError](src/resources/acme-domain-validation-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.acmeDomainValidationApi.deleteAcmeDomainValidation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AcmeDomainValidationApi.DeleteAcmeDomainValidationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeAcmeDomainValidation(request: AcmeDomainValidationApi.DescribeAcmeDomainValidationRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AcmeDomainValidationApi.DescribeAcmeDomainValidationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed metadata about the specified domain validation, including its status, domain scope, and DNS resource records required for validation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.acmeDomainValidationApi.describeAcmeDomainValidation({
    xAmzTarget:
      XAmzTarget2AwsCertificateManagerAcmeDomainValidationApi.CertificateManagerDescribeAcmeDomainValidation,
  });
} catch (err) {
  // TODO: Handle 'err' of type AcmeDomainValidationApi.DescribeAcmeDomainValidationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.acmeDomainValidationApi
  .describeAcmeDomainValidation({
    xAmzTarget:
      XAmzTarget2AwsCertificateManagerAcmeDomainValidationApi.CertificateManagerDescribeAcmeDomainValidation,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AwsCertificateManagerAcmeDomainValidationApi](src/models/xamz-target2-aws-certificate-manager-acme-domain-validation-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.acmeDomainValidationApi.describeAcmeDomainValidation(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AcmeDomainValidationApi.DescribeAcmeDomainValidationError](src/resources/acme-domain-validation-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.acmeDomainValidationApi.describeAcmeDomainValidation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AcmeDomainValidationApi.DescribeAcmeDomainValidationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAcmeDomainValidations(request: AcmeDomainValidationApi.ListAcmeDomainValidationsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AcmeDomainValidationApi.ListAcmeDomainValidationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of domain validations for the specified ACME endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.acmeDomainValidationApi.listAcmeDomainValidations({
    xAmzTarget: XAmzTarget3.CertificateManagerListAcmeDomainValidations,
  });
} catch (err) {
  // TODO: Handle 'err' of type AcmeDomainValidationApi.ListAcmeDomainValidationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.acmeDomainValidationApi
  .listAcmeDomainValidations({ xAmzTarget: XAmzTarget3.CertificateManagerListAcmeDomainValidations })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3](src/models/xamz-target3.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.acmeDomainValidationApi.listAcmeDomainValidations(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AcmeDomainValidationApi.ListAcmeDomainValidationsError](src/resources/acme-domain-validation-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.acmeDomainValidationApi.listAcmeDomainValidations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AcmeDomainValidationApi.ListAcmeDomainValidationsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateAcmeDomainValidation(request: AcmeDomainValidationApi.UpdateAcmeDomainValidationRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AcmeDomainValidationApi.UpdateAcmeDomainValidationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the prevalidation configuration of an existing domain validation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.acmeDomainValidationApi.updateAcmeDomainValidation({
    xAmzTarget: XAmzTarget4.CertificateManagerUpdateAcmeDomainValidation,
  });
} catch (err) {
  // TODO: Handle 'err' of type AcmeDomainValidationApi.UpdateAcmeDomainValidationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.acmeDomainValidationApi
  .updateAcmeDomainValidation({ xAmzTarget: XAmzTarget4.CertificateManagerUpdateAcmeDomainValidation })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget4](src/models/xamz-target4.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.acmeDomainValidationApi.updateAcmeDomainValidation(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AcmeDomainValidationApi.UpdateAcmeDomainValidationError](src/resources/acme-domain-validation-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.acmeDomainValidationApi.updateAcmeDomainValidation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AcmeDomainValidationApi.UpdateAcmeDomainValidationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AcmeEndpointApi

> Source: [AcmeEndpointApi](src/resources/acme-endpoint-api.ts)

<details>
<summary><code>createAcmeEndpoint(request: AcmeEndpointApi.CreateAcmeEndpointRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AcmeEndpointApi.CreateAcmeEndpointError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an ACME endpoint, which is a managed ACME server with a unique endpoint URL. After creation, ACME clients can use the endpoint URL to automate certificate issuance using the ACME protocol.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.acmeEndpointApi.createAcmeEndpoint({
    xAmzTarget: XAmzTargetAwsCertificateManagerAcmeEndpointApi.CertificateManagerCreateAcmeEndpoint,
  });
} catch (err) {
  // TODO: Handle 'err' of type AcmeEndpointApi.CreateAcmeEndpointError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.acmeEndpointApi
  .createAcmeEndpoint({
    xAmzTarget: XAmzTargetAwsCertificateManagerAcmeEndpointApi.CertificateManagerCreateAcmeEndpoint,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAwsCertificateManagerAcmeEndpointApi](src/models/xamz-target-aws-certificate-manager-acme-endpoint-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.acmeEndpointApi.createAcmeEndpoint(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AcmeEndpointApi.CreateAcmeEndpointError](src/resources/acme-endpoint-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.acmeEndpointApi.createAcmeEndpoint(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AcmeEndpointApi.CreateAcmeEndpointError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteAcmeEndpoint(request: AcmeEndpointApi.DeleteAcmeEndpointRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AcmeEndpointApi.DeleteAcmeEndpointError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an ACME endpoint. After deletion, the endpoint URL is no longer accessible and ACME clients cannot issue certificates through it. Any existing external account bindings and domain validations associated with the endpoint are also deleted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.acmeEndpointApi.deleteAcmeEndpoint({
    xAmzTarget: XAmzTarget1AwsCertificateManagerAcmeEndpointApi.CertificateManagerDeleteAcmeEndpoint,
  });
} catch (err) {
  // TODO: Handle 'err' of type AcmeEndpointApi.DeleteAcmeEndpointError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.acmeEndpointApi
  .deleteAcmeEndpoint({
    xAmzTarget: XAmzTarget1AwsCertificateManagerAcmeEndpointApi.CertificateManagerDeleteAcmeEndpoint,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AwsCertificateManagerAcmeEndpointApi](src/models/xamz-target1-aws-certificate-manager-acme-endpoint-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.acmeEndpointApi.deleteAcmeEndpoint(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AcmeEndpointApi.DeleteAcmeEndpointError](src/resources/acme-endpoint-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.acmeEndpointApi.deleteAcmeEndpoint(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AcmeEndpointApi.DeleteAcmeEndpointError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeAcmeEndpoint(request: AcmeEndpointApi.DescribeAcmeEndpointRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AcmeEndpointApi.DescribeAcmeEndpointError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed metadata about the specified ACME endpoint, including its status, URL, authorization behavior, and certificate authority configuration.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.acmeEndpointApi.describeAcmeEndpoint({
    xAmzTarget: XAmzTarget2AwsCertificateManagerAcmeEndpointApi.CertificateManagerDescribeAcmeEndpoint,
  });
} catch (err) {
  // TODO: Handle 'err' of type AcmeEndpointApi.DescribeAcmeEndpointError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.acmeEndpointApi
  .describeAcmeEndpoint({
    xAmzTarget: XAmzTarget2AwsCertificateManagerAcmeEndpointApi.CertificateManagerDescribeAcmeEndpoint,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AwsCertificateManagerAcmeEndpointApi](src/models/xamz-target2-aws-certificate-manager-acme-endpoint-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.acmeEndpointApi.describeAcmeEndpoint(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AcmeEndpointApi.DescribeAcmeEndpointError](src/resources/acme-endpoint-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.acmeEndpointApi.describeAcmeEndpoint(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AcmeEndpointApi.DescribeAcmeEndpointError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAcmeEndpoints(request: AcmeEndpointApi.ListAcmeEndpointsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AcmeEndpointApi.ListAcmeEndpointsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of ACME endpoints in your account. Use this operation to view all configured ACME endpoints and their current status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.acmeEndpointApi.listAcmeEndpoints({
    xAmzTarget: XAmzTarget3AwsCertificateManagerAcmeEndpointApi.CertificateManagerListAcmeEndpoints,
  });
} catch (err) {
  // TODO: Handle 'err' of type AcmeEndpointApi.ListAcmeEndpointsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.acmeEndpointApi
  .listAcmeEndpoints({
    xAmzTarget: XAmzTarget3AwsCertificateManagerAcmeEndpointApi.CertificateManagerListAcmeEndpoints,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AwsCertificateManagerAcmeEndpointApi](src/models/xamz-target3-aws-certificate-manager-acme-endpoint-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.acmeEndpointApi.listAcmeEndpoints(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AcmeEndpointApi.ListAcmeEndpointsError](src/resources/acme-endpoint-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.acmeEndpointApi.listAcmeEndpoints(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AcmeEndpointApi.ListAcmeEndpointsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateAcmeEndpoint(request: AcmeEndpointApi.UpdateAcmeEndpointRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AcmeEndpointApi.UpdateAcmeEndpointError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the configuration of an existing ACME endpoint. You can change the authorization behavior, contact requirement, or certificate authority settings.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.acmeEndpointApi.updateAcmeEndpoint({
    xAmzTarget: XAmzTarget4AwsCertificateManagerAcmeEndpointApi.CertificateManagerUpdateAcmeEndpoint,
  });
} catch (err) {
  // TODO: Handle 'err' of type AcmeEndpointApi.UpdateAcmeEndpointError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.acmeEndpointApi
  .updateAcmeEndpoint({
    xAmzTarget: XAmzTarget4AwsCertificateManagerAcmeEndpointApi.CertificateManagerUpdateAcmeEndpoint,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget4AwsCertificateManagerAcmeEndpointApi](src/models/xamz-target4-aws-certificate-manager-acme-endpoint-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.acmeEndpointApi.updateAcmeEndpoint(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AcmeEndpointApi.UpdateAcmeEndpointError](src/resources/acme-endpoint-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.acmeEndpointApi.updateAcmeEndpoint(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AcmeEndpointApi.UpdateAcmeEndpointError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AcmeExternalAccountBindingApi

> Source: [AcmeExternalAccountBindingApi](src/resources/acme-external-account-binding-api.ts)

<details>
<summary><code>createAcmeExternalAccountBinding(request: AcmeExternalAccountBindingApi.CreateAcmeExternalAccountBindingRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AcmeExternalAccountBindingApi.CreateAcmeExternalAccountBindingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an external account binding (EAB) for an ACME endpoint. An EAB provides credentials that authorize an ACME client to register an account with the endpoint. Each EAB is associated with an IAM role that controls what certificate operations the ACME client can perform.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.acmeExternalAccountBindingApi.createAcmeExternalAccountBinding({
    xAmzTarget:
      XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApi.CertificateManagerCreateAcmeExternalAccountBinding,
  });
} catch (err) {
  // TODO: Handle 'err' of type AcmeExternalAccountBindingApi.CreateAcmeExternalAccountBindingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.acmeExternalAccountBindingApi
  .createAcmeExternalAccountBinding({
    xAmzTarget:
      XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApi.CertificateManagerCreateAcmeExternalAccountBinding,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApi](src/models/xamz-target-aws-certificate-manager-acme-external-account-binding-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.acmeExternalAccountBindingApi.createAcmeExternalAccountBinding(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AcmeExternalAccountBindingApi.CreateAcmeExternalAccountBindingError](src/resources/acme-external-account-binding-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.acmeExternalAccountBindingApi.createAcmeExternalAccountBinding(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AcmeExternalAccountBindingApi.CreateAcmeExternalAccountBindingError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteAcmeExternalAccountBinding(request: AcmeExternalAccountBindingApi.DeleteAcmeExternalAccountBindingRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AcmeExternalAccountBindingApi.DeleteAcmeExternalAccountBindingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an external account binding. Previously fetched credentials for this binding will no longer be usable for account registration. A deleted binding cannot be recovered.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.acmeExternalAccountBindingApi.deleteAcmeExternalAccountBinding({
    xAmzTarget:
      XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApi.CertificateManagerDeleteAcmeExternalAccountBinding,
  });
} catch (err) {
  // TODO: Handle 'err' of type AcmeExternalAccountBindingApi.DeleteAcmeExternalAccountBindingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.acmeExternalAccountBindingApi
  .deleteAcmeExternalAccountBinding({
    xAmzTarget:
      XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApi.CertificateManagerDeleteAcmeExternalAccountBinding,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApi](src/models/xamz-target1-aws-certificate-manager-acme-external-account-binding-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.acmeExternalAccountBindingApi.deleteAcmeExternalAccountBinding(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AcmeExternalAccountBindingApi.DeleteAcmeExternalAccountBindingError](src/resources/acme-external-account-binding-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.acmeExternalAccountBindingApi.deleteAcmeExternalAccountBinding(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AcmeExternalAccountBindingApi.DeleteAcmeExternalAccountBindingError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeAcmeExternalAccountBinding(request: AcmeExternalAccountBindingApi.DescribeAcmeExternalAccountBindingRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AcmeExternalAccountBindingApi.DescribeAcmeExternalAccountBindingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed metadata about the specified external account binding, including the associated IAM role, expiration time, and usage history.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.acmeExternalAccountBindingApi.describeAcmeExternalAccountBinding({
    xAmzTarget:
      XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApi.CertificateManagerDescribeAcmeExternalAccountBinding,
  });
} catch (err) {
  // TODO: Handle 'err' of type AcmeExternalAccountBindingApi.DescribeAcmeExternalAccountBindingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.acmeExternalAccountBindingApi
  .describeAcmeExternalAccountBinding({
    xAmzTarget:
      XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApi.CertificateManagerDescribeAcmeExternalAccountBinding,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApi](src/models/xamz-target2-aws-certificate-manager-acme-external-account-binding-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.acmeExternalAccountBindingApi.describeAcmeExternalAccountBinding(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AcmeExternalAccountBindingApi.DescribeAcmeExternalAccountBindingError](src/resources/acme-external-account-binding-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.acmeExternalAccountBindingApi.describeAcmeExternalAccountBinding(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AcmeExternalAccountBindingApi.DescribeAcmeExternalAccountBindingError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAcmeExternalAccountBindings(request: AcmeExternalAccountBindingApi.ListAcmeExternalAccountBindingsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AcmeExternalAccountBindingApi.ListAcmeExternalAccountBindingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of external account bindings for the specified ACME endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.acmeExternalAccountBindingApi.listAcmeExternalAccountBindings({
    xAmzTarget:
      XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApi.CertificateManagerListAcmeExternalAccountBindings,
  });
} catch (err) {
  // TODO: Handle 'err' of type AcmeExternalAccountBindingApi.ListAcmeExternalAccountBindingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.acmeExternalAccountBindingApi
  .listAcmeExternalAccountBindings({
    xAmzTarget:
      XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApi.CertificateManagerListAcmeExternalAccountBindings,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApi](src/models/xamz-target3-aws-certificate-manager-acme-external-account-binding-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.acmeExternalAccountBindingApi.listAcmeExternalAccountBindings(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AcmeExternalAccountBindingApi.ListAcmeExternalAccountBindingsError](src/resources/acme-external-account-binding-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.acmeExternalAccountBindingApi.listAcmeExternalAccountBindings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AcmeExternalAccountBindingApi.ListAcmeExternalAccountBindingsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>revokeAcmeExternalAccountBinding(request: AcmeExternalAccountBindingApi.RevokeAcmeExternalAccountBindingRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AcmeExternalAccountBindingApi.RevokeAcmeExternalAccountBindingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revokes an external account binding, preventing new ACME accounts from being registered using this binding. Existing ACME accounts that were previously registered using the binding are not affected and must be revoked separately.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.acmeExternalAccountBindingApi.revokeAcmeExternalAccountBinding({
    xAmzTarget:
      XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApi.CertificateManagerRevokeAcmeExternalAccountBinding,
  });
} catch (err) {
  // TODO: Handle 'err' of type AcmeExternalAccountBindingApi.RevokeAcmeExternalAccountBindingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.acmeExternalAccountBindingApi
  .revokeAcmeExternalAccountBinding({
    xAmzTarget:
      XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApi.CertificateManagerRevokeAcmeExternalAccountBinding,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApi](src/models/xamz-target4-aws-certificate-manager-acme-external-account-binding-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.acmeExternalAccountBindingApi.revokeAcmeExternalAccountBinding(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AcmeExternalAccountBindingApi.RevokeAcmeExternalAccountBindingError](src/resources/acme-external-account-binding-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.acmeExternalAccountBindingApi.revokeAcmeExternalAccountBinding(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AcmeExternalAccountBindingApi.RevokeAcmeExternalAccountBindingError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Certificates

> Source: [Certificates](src/resources/certificates.ts)

<details>
<summary><code>deleteCertificate(request: Certificates.DeleteCertificateRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Certificates.DeleteCertificateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a certificate and its associated private key. If this action succeeds, the certificate is not available for use by Amazon Web Services services integrated with ACM. Deleting a certificate is eventually consistent. The may be a short delay before the certificate no longer appears in the list that can be displayed by calling the ListCertificates action or be retrieved by calling the GetCertificate action. You cannot delete an ACM certificate that is being used by another Amazon Web Services service. To delete a certificate that is in use, you must first remove the certificate association using the console or the CLI for the associated service. Deleting a certificate issued by a private certificate authority (CA) has no effect on the CA. You will continue to be charged for the CA until it is deleted. For more information, see Deleting Your Private CA in the Private Certificate Authority User Guide. You cannot delete a certificate with a CertificateKeyPairOrigin of ACME. ACM automatically deletes these certificates 1 year after they expire. Deleting a certificate issued by a private certificate authority (CA) has no effect on the CA. You will continue to be charged for the CA u

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.certificates.deleteCertificate({
    xAmzTarget: XAmzTargetAwsCertificateManagerCertificatesApi.CertificateManagerDeleteCertificate,
  });
} catch (err) {
  // TODO: Handle 'err' of type Certificates.DeleteCertificateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.certificates
  .deleteCertificate({
    xAmzTarget: XAmzTargetAwsCertificateManagerCertificatesApi.CertificateManagerDeleteCertificate,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAwsCertificateManagerCertificatesApi](src/models/xamz-target-aws-certificate-manager-certificates-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.certificates.deleteCertificate(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Certificates.DeleteCertificateError](src/resources/certificates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.certificates.deleteCertificate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Certificates.DeleteCertificateError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeCertificate(request: Certificates.DescribeCertificateRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Certificates.DescribeCertificateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed metadata about the specified ACM certificate. If you have just created a certificate using the RequestCertificate action, there is a delay of several seconds before you can retrieve information about it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.certificates.describeCertificate({
    xAmzTarget: XAmzTarget1AwsCertificateManagerCertificatesApi.CertificateManagerDescribeCertificate,
  });
} catch (err) {
  // TODO: Handle 'err' of type Certificates.DescribeCertificateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.certificates
  .describeCertificate({
    xAmzTarget: XAmzTarget1AwsCertificateManagerCertificatesApi.CertificateManagerDescribeCertificate,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AwsCertificateManagerCertificatesApi](src/models/xamz-target1-aws-certificate-manager-certificates-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.certificates.describeCertificate(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Certificates.DescribeCertificateError](src/resources/certificates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.certificates.describeCertificate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Certificates.DescribeCertificateError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>exportCertificate(request: Certificates.ExportCertificateRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Certificates.ExportCertificateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exports a private certificate issued by a private certificate authority (CA) or a public certificate for use anywhere. The exported file contains the certificate, the certificate chain, and the encrypted private key associated with the public key that is embedded in the certificate. For security, you must assign a passphrase for the private key when exporting it. For information about exporting and formatting a certificate using the ACM console or CLI, see Export a private certificate and Export a public certificate. ACM public certificates created prior to June 17, 2025 cannot be exported.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.certificates.exportCertificate({
    xAmzTarget: XAmzTarget2AwsCertificateManagerCertificatesApi.CertificateManagerExportCertificate,
  });
} catch (err) {
  // TODO: Handle 'err' of type Certificates.ExportCertificateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.certificates
  .exportCertificate({
    xAmzTarget: XAmzTarget2AwsCertificateManagerCertificatesApi.CertificateManagerExportCertificate,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AwsCertificateManagerCertificatesApi](src/models/xamz-target2-aws-certificate-manager-certificates-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.certificates.exportCertificate(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Certificates.ExportCertificateError](src/resources/certificates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.certificates.exportCertificate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Certificates.ExportCertificateError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCertificate(request: Certificates.GetCertificateRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Certificates.GetCertificateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a certificate and its certificate chain. The certificate may be either a public or private certificate issued using the ACM RequestCertificate action, or a certificate imported into ACM using the ImportCertificate action. The chain consists of the certificate of the issuing CA and the intermediate certificates of any other subordinate CAs. All of the certificates are base64 encoded. You can use OpenSSL to decode the certificates and inspect individual fields.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.certificates.getCertificate({
    xAmzTarget: XAmzTarget3AwsCertificateManagerCertificatesApi.CertificateManagerGetCertificate,
  });
} catch (err) {
  // TODO: Handle 'err' of type Certificates.GetCertificateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.certificates
  .getCertificate({
    xAmzTarget: XAmzTarget3AwsCertificateManagerCertificatesApi.CertificateManagerGetCertificate,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AwsCertificateManagerCertificatesApi](src/models/xamz-target3-aws-certificate-manager-certificates-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.certificates.getCertificate(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Certificates.GetCertificateError](src/resources/certificates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.certificates.getCertificate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Certificates.GetCertificateError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>importCertificate(request: Certificates.ImportCertificateRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Certificates.ImportCertificateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Imports a certificate into Certificate Manager (ACM) to use with services that are integrated with ACM. Note that integrated services allow only certificate types and keys they support to be associated with their resources. Further, their support differs depending on whether the certificate is imported into IAM or into ACM. For more information, see the documentation for each service. For more information about importing certificates into ACM, see Importing Certificates in the Certificate Manager User Guide. ACM does not provide managed renewal for certificates that you import. Note the following guidelines when importing third party certificates: You must enter the private key that matches the certificate you are importing. The private key must be unencrypted. You cannot import a private key that is protected by a password or a passphrase. The private key must be no larger than 5 KB (5,120 bytes). The certificate, private key, and certificate chain must be PEM-encoded. The current time must be between the Not Before and Not After certificate fields. The Issuer field must not be empty. The OCSP authority URL, if present, must not exceed 1000 characters. To import a new certificate,

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.certificates.importCertificate({
    xAmzTarget: XAmzTarget4AwsCertificateManagerCertificatesApi.CertificateManagerImportCertificate,
  });
} catch (err) {
  // TODO: Handle 'err' of type Certificates.ImportCertificateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.certificates
  .importCertificate({
    xAmzTarget: XAmzTarget4AwsCertificateManagerCertificatesApi.CertificateManagerImportCertificate,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget4AwsCertificateManagerCertificatesApi](src/models/xamz-target4-aws-certificate-manager-certificates-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.certificates.importCertificate(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Certificates.ImportCertificateError](src/resources/certificates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.certificates.importCertificate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Certificates.ImportCertificateError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCertificates(request: Certificates.ListCertificatesRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Certificates.ListCertificatesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of certificate ARNs and domain names. You can request that only certificates that match a specific status be listed. You can also filter by specific attributes of the certificate. Default filtering returns only RSA_2048 certificates. For more information, see Filters. By default, this action does not return certificates with a CertificateKeyPairOrigin of ACME. To include ACME certificates, specify ACME in the CertificateKeyPairOrigins filter.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.certificates.listCertificates({ xAmzTarget: XAmzTarget5.CertificateManagerListCertificates });
} catch (err) {
  // TODO: Handle 'err' of type Certificates.ListCertificatesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.certificates
  .listCertificates({ xAmzTarget: XAmzTarget5.CertificateManagerListCertificates })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget5](src/models/xamz-target5.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.certificates.listCertificates(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Certificates.ListCertificatesError](src/resources/certificates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.certificates.listCertificates(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Certificates.ListCertificatesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>requestCertificate(request: Certificates.RequestCertificateRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Certificates.RequestCertificateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Requests an ACM certificate for use with other Amazon Web Services services. To request an ACM certificate, you must specify a fully qualified domain name (FQDN) in the DomainName parameter. You can also specify additional FQDNs in the SubjectAlternativeNames parameter. If you are requesting a private certificate, domain validation is not required. If you are requesting a public certificate, each domain name that you specify must be validated to verify that you own or control the domain. You can use DNS validation or email validation. We recommend that you use DNS validation. ACM behavior differs from the RFC 6125 specification of the certificate validation process. ACM first checks for a Subject Alternative Name, and, if it finds one, ignores the common name (CN). After successful completion of the RequestCertificate action, there is a delay of several seconds before you can retrieve information about the new certificate.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.certificates.requestCertificate({
    xAmzTarget: XAmzTarget8.CertificateManagerRequestCertificate,
  });
} catch (err) {
  // TODO: Handle 'err' of type Certificates.RequestCertificateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.certificates
  .requestCertificate({ xAmzTarget: XAmzTarget8.CertificateManagerRequestCertificate })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget8](src/models/xamz-target8.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.certificates.requestCertificate(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Certificates.RequestCertificateError](src/resources/certificates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.certificates.requestCertificate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Certificates.RequestCertificateError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>revokeCertificate(request: Certificates.RevokeCertificateRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Certificates.RevokeCertificateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revokes a public ACM certificate. You can only revoke certificates that have been previously exported. Once a certificate is revoked, you cannot reuse the certificate. Revoking a certificate is permanent.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.certificates.revokeCertificate({
    xAmzTarget: XAmzTarget6.CertificateManagerRevokeCertificate,
  });
} catch (err) {
  // TODO: Handle 'err' of type Certificates.RevokeCertificateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.certificates
  .revokeCertificate({ xAmzTarget: XAmzTarget6.CertificateManagerRevokeCertificate })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget6](src/models/xamz-target6.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.certificates.revokeCertificate(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Certificates.RevokeCertificateError](src/resources/certificates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.certificates.revokeCertificate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Certificates.RevokeCertificateError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchCertificates(request: Certificates.SearchCertificatesRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Certificates.SearchCertificatesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of certificates matching search criteria. You can filter certificates by X.509 attributes and ACM specific properties like certificate status, type and renewal eligibility. This operation provides more flexible filtering than ListCertificates by supporting complex filter statements.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.certificates.searchCertificates({
    xAmzTarget: XAmzTarget7.CertificateManagerSearchCertificates,
  });
} catch (err) {
  // TODO: Handle 'err' of type Certificates.SearchCertificatesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.certificates
  .searchCertificates({ xAmzTarget: XAmzTarget7.CertificateManagerSearchCertificates })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget7](src/models/xamz-target7.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.certificates.searchCertificates(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Certificates.SearchCertificatesError](src/resources/certificates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.certificates.searchCertificates(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Certificates.SearchCertificatesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Operations

> Source: [Operations](src/resources/operations.ts)

<details>
<summary><code>getAccountConfiguration(request: Operations.GetAccountConfigurationRequest, options?: RequestOptions): ApiPromise&lt;undefined, Operations.GetAccountConfigurationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the account configuration options associated with an Amazon Web Services account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.getAccountConfiguration({
    xAmzTarget: XAmzTarget3AwsCertificateManagerOperationsApi.CertificateManagerGetAccountConfiguration,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.GetAccountConfigurationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .getAccountConfiguration({
    xAmzTarget: XAmzTarget3AwsCertificateManagerOperationsApi.CertificateManagerGetAccountConfiguration,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AwsCertificateManagerOperationsApi](src/models/xamz-target3-aws-certificate-manager-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.getAccountConfiguration(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.GetAccountConfigurationError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.getAccountConfiguration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.GetAccountConfigurationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAcmeExternalAccountBindingCredentials(request: Operations.GetAcmeExternalAccountBindingCredentialsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.GetAcmeExternalAccountBindingCredentialsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the key ID and MAC key credentials for an external account binding. These credentials are used by ACME clients during account registration to bind to the endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.getAcmeExternalAccountBindingCredentials({
    xAmzTarget:
      XAmzTarget5AwsCertificateManagerOperationsApi.CertificateManagerGetAcmeExternalAccountBindingCredentials,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.GetAcmeExternalAccountBindingCredentialsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .getAcmeExternalAccountBindingCredentials({
    xAmzTarget:
      XAmzTarget5AwsCertificateManagerOperationsApi.CertificateManagerGetAcmeExternalAccountBindingCredentials,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget5AwsCertificateManagerOperationsApi](src/models/xamz-target5-aws-certificate-manager-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.getAcmeExternalAccountBindingCredentials(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.GetAcmeExternalAccountBindingCredentialsError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.getAcmeExternalAccountBindingCredentials(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.GetAcmeExternalAccountBindingCredentialsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCertificateDomainValidations(request: Operations.ListCertificateDomainValidationsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.ListCertificateDomainValidationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns per-domain validation summaries for an ACM certificate. Each summary includes the domain name, the active validation configuration, and the requested validation configuration when a validation method migration is in progress. You can use the results to monitor the progress of an email-to-DNS validation migration and to retrieve the CNAME records required for DNS validation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.listCertificateDomainValidations({
    xAmzTarget:
      XAmzTarget6AwsCertificateManagerOperationsApi.CertificateManagerListCertificateDomainValidations,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.ListCertificateDomainValidationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .listCertificateDomainValidations({
    xAmzTarget:
      XAmzTarget6AwsCertificateManagerOperationsApi.CertificateManagerListCertificateDomainValidations,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget6AwsCertificateManagerOperationsApi](src/models/xamz-target6-aws-certificate-manager-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.listCertificateDomainValidations(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.ListCertificateDomainValidationsError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.listCertificateDomainValidations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.ListCertificateDomainValidationsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putAccountConfiguration(request: Operations.PutAccountConfigurationRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.PutAccountConfigurationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds or modifies account-level configurations in ACM. The supported configuration option is DaysBeforeExpiry. This option specifies the number of days prior to certificate expiration when ACM starts generating EventBridge events. ACM sends one event per day per certificate until the certificate expires. By default, accounts receive events starting 45 days before certificate expiration.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.putAccountConfiguration({
    xAmzTarget: XAmzTarget4AwsCertificateManagerOperationsApi.CertificateManagerPutAccountConfiguration,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.PutAccountConfigurationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .putAccountConfiguration({
    xAmzTarget: XAmzTarget4AwsCertificateManagerOperationsApi.CertificateManagerPutAccountConfiguration,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget4AwsCertificateManagerOperationsApi](src/models/xamz-target4-aws-certificate-manager-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.putAccountConfiguration(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.PutAccountConfigurationError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.putAccountConfiguration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.PutAccountConfigurationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>renewCertificate(request: Operations.RenewCertificateRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.RenewCertificateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Renews an eligible ACM certificate. In order to renew your Amazon Web Services Private CA certificates with ACM, you must first grant the ACM service principal permission to do so. For more information, see Testing Managed Renewal in the ACM User Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.renewCertificate({
    xAmzTarget: XAmzTargetAwsCertificateManagerOperationsApi.CertificateManagerRenewCertificate,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.RenewCertificateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .renewCertificate({
    xAmzTarget: XAmzTargetAwsCertificateManagerOperationsApi.CertificateManagerRenewCertificate,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAwsCertificateManagerOperationsApi](src/models/xamz-target-aws-certificate-manager-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.renewCertificate(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.RenewCertificateError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.renewCertificate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.RenewCertificateError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>requestCertificate2(request: Operations.RequestCertificate2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.RequestCertificate2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Requests an ACM certificate for use with other Amazon Web Services services. To request an ACM certificate, you must specify a fully qualified domain name (FQDN) in the DomainName parameter. You can also specify additional FQDNs in the SubjectAlternativeNames parameter. If you are requesting a private certificate, domain validation is not required. If you are requesting a public certificate, each domain name that you specify must be validated to verify that you own or control the domain. You can use DNS validation or email validation. We recommend that you use DNS validation. ACM behavior differs from the RFC 6125 specification of the certificate validation process. ACM first checks for a Subject Alternative Name, and, if it finds one, ignores the common name (CN). After successful completion of the RequestCertificate action, there is a delay of several seconds before you can retrieve information about the new certificate.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.requestCertificate2({
    xAmzTarget: XAmzTarget1AwsCertificateManagerOperationsApi.CertificateManagerRequestCertificate,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.RequestCertificate2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .requestCertificate2({
    xAmzTarget: XAmzTarget1AwsCertificateManagerOperationsApi.CertificateManagerRequestCertificate,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AwsCertificateManagerOperationsApi](src/models/xamz-target1-aws-certificate-manager-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.requestCertificate2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.RequestCertificate2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.requestCertificate2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.RequestCertificate2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resendValidationEmail(request: Operations.ResendValidationEmailRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.ResendValidationEmailError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resends the email that requests domain ownership validation. The domain owner or an authorized representative must approve the ACM certificate before it can be issued. The certificate can be approved by clicking a link in the mail to navigate to the Amazon certificate approval website and then clicking I Approve. However, the validation email can be blocked by spam filters. Therefore, if you do not receive the original mail, you can request that the mail be resent within 72 hours of requesting the ACM certificate. If more than 72 hours have elapsed since your original request or since your last attempt to resend validation mail, you must request a new certificate. For more information about setting up your contact email addresses, see Configure Email for your Domain.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.resendValidationEmail({
    xAmzTarget: XAmzTarget2AwsCertificateManagerOperationsApi.CertificateManagerResendValidationEmail,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.ResendValidationEmailError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .resendValidationEmail({
    xAmzTarget: XAmzTarget2AwsCertificateManagerOperationsApi.CertificateManagerResendValidationEmail,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AwsCertificateManagerOperationsApi](src/models/xamz-target2-aws-certificate-manager-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.resendValidationEmail(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.ResendValidationEmailError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.resendValidationEmail(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.ResendValidationEmailError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tagResource(request: Operations.TagResourceRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.TagResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds one or more tags to an ACM resource. Tags are labels that you can use to identify and organize your Amazon Web Services resources. Each tag consists of a key and an optional value. Use this action for all ACM resource types except the certificate resource type. For certificate resources, use AddTagsToCertificate instead. To remove one or more tags, use the UntagResource action. To view all of the tags that have been applied to a resource, use the ListTagsForResource action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.tagResource({
    xAmzTarget: XAmzTarget7AwsCertificateManagerOperationsApi.CertificateManagerTagResource,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.TagResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .tagResource({ xAmzTarget: XAmzTarget7AwsCertificateManagerOperationsApi.CertificateManagerTagResource })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget7AwsCertificateManagerOperationsApi](src/models/xamz-target7-aws-certificate-manager-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.tagResource(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.TagResourceError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.tagResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.TagResourceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>untagResource(request: Operations.UntagResourceRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.UntagResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes one or more tags from an ACM resource. Use this action for all ACM resource types except the certificate resource type. For certificate resources, use RemoveTagsFromCertificate instead. To add one or more tags, use the TagResource action. To view all of the tags that have been applied to a resource, use the ListTagsForResource action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.untagResource({
    xAmzTarget: XAmzTarget8AwsCertificateManagerOperationsApi.CertificateManagerUntagResource,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.UntagResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .untagResource({
    xAmzTarget: XAmzTarget8AwsCertificateManagerOperationsApi.CertificateManagerUntagResource,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget8AwsCertificateManagerOperationsApi](src/models/xamz-target8-aws-certificate-manager-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.untagResource(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.UntagResourceError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.untagResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.UntagResourceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCertificateOptions(request: Operations.UpdateCertificateOptionsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.UpdateCertificateOptionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates certificate options. You can use this operation to change the domain validation method or specify whether to export your certificate. For more information, see Migrate from email to DNS validation and Certificate Manager Exportable Managed Certificates.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.updateCertificateOptions({
    xAmzTarget: XAmzTarget9.CertificateManagerUpdateCertificateOptions,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.UpdateCertificateOptionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .updateCertificateOptions({ xAmzTarget: XAmzTarget9.CertificateManagerUpdateCertificateOptions })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget9](src/models/xamz-target9.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.updateCertificateOptions(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.UpdateCertificateOptionsError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.updateCertificateOptions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.UpdateCertificateOptionsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TagApi

> Source: [TagApi](src/resources/tag-api.ts)

<details>
<summary><code>addTagsToCertificate(request: TagApi.AddTagsToCertificateRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, TagApi.AddTagsToCertificateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds one or more tags to an ACM certificate. Tags are labels that you can use to identify and organize your Amazon Web Services resources. Each tag consists of a key and an optional value. You specify the certificate on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. This action applies only to the certificate resource type. For all other ACM resource types, use TagResource instead. You can apply a tag to just one certificate if you want to identify a specific characteristic of that certificate, or you can apply the same tag to multiple certificates if you want to filter for a common relationship among those certificates. Similarly, you can apply the same tag to multiple resources if you want to specify a relationship among those resources. For example, you can add the same tag to an ACM certificate and an Elastic Load Balancing load balancer to indicate that they are both used by the same website. For more information, see Tagging ACM certificates. To remove one or more tags, use the RemoveTagsFromCertificate action. To view all of the tags that have been applied to the certificate, use the ListTagsForCertificate action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.tagApi.addTagsToCertificate({
    xAmzTarget: XAmzTargetAwsCertificateManagerTagApi.CertificateManagerAddTagsToCertificate,
  });
} catch (err) {
  // TODO: Handle 'err' of type TagApi.AddTagsToCertificateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tagApi
  .addTagsToCertificate({
    xAmzTarget: XAmzTargetAwsCertificateManagerTagApi.CertificateManagerAddTagsToCertificate,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAwsCertificateManagerTagApi](src/models/xamz-target-aws-certificate-manager-tag-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tagApi.addTagsToCertificate(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[TagApi.AddTagsToCertificateError](src/resources/tag-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tagApi.addTagsToCertificate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, TagApi.AddTagsToCertificateError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTagsForCertificate(request: TagApi.ListTagsForCertificateRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, TagApi.ListTagsForCertificateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the tags that have been applied to the ACM certificate. Use the certificate's Amazon Resource Name (ARN) to specify the certificate. To add a tag to an ACM certificate, use the AddTagsToCertificate action. To delete a tag, use the RemoveTagsFromCertificate action. This action applies only to the certificate resource type. For all other ACM resource types, use ListTagsForResource instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.tagApi.listTagsForCertificate({
    xAmzTarget: XAmzTarget1AwsCertificateManagerTagApi.CertificateManagerListTagsForCertificate,
  });
} catch (err) {
  // TODO: Handle 'err' of type TagApi.ListTagsForCertificateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tagApi
  .listTagsForCertificate({
    xAmzTarget: XAmzTarget1AwsCertificateManagerTagApi.CertificateManagerListTagsForCertificate,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AwsCertificateManagerTagApi](src/models/xamz-target1-aws-certificate-manager-tag-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tagApi.listTagsForCertificate(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[TagApi.ListTagsForCertificateError](src/resources/tag-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tagApi.listTagsForCertificate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, TagApi.ListTagsForCertificateError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTagsForResource(request: TagApi.ListTagsForResourceRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, TagApi.ListTagsForResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the tags associated with an ACM resource. Use this action for all ACM resource types except the certificate resource type. For certificate resources, use ListTagsForCertificate instead. To add one or more tags, use the TagResource action. To remove one or more tags, use the UntagResource action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.tagApi.listTagsForResource({
    xAmzTarget: XAmzTarget2AwsCertificateManagerTagApi.CertificateManagerListTagsForResource,
  });
} catch (err) {
  // TODO: Handle 'err' of type TagApi.ListTagsForResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tagApi
  .listTagsForResource({
    xAmzTarget: XAmzTarget2AwsCertificateManagerTagApi.CertificateManagerListTagsForResource,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AwsCertificateManagerTagApi](src/models/xamz-target2-aws-certificate-manager-tag-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tagApi.listTagsForResource(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[TagApi.ListTagsForResourceError](src/resources/tag-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tagApi.listTagsForResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, TagApi.ListTagsForResourceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeTagsFromCertificate(request: TagApi.RemoveTagsFromCertificateRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, TagApi.RemoveTagsFromCertificateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one or more tags from an ACM certificate. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this function, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value. This action applies only to the certificate resource type. For all other ACM resource types, use UntagResource instead. To add tags to a certificate, use the AddTagsToCertificate action. To view all of the tags that have been applied to a specific ACM certificate, use the ListTagsForCertificate action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.tagApi.removeTagsFromCertificate({
    xAmzTarget: XAmzTarget3AwsCertificateManagerTagApi.CertificateManagerRemoveTagsFromCertificate,
  });
} catch (err) {
  // TODO: Handle 'err' of type TagApi.RemoveTagsFromCertificateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tagApi
  .removeTagsFromCertificate({
    xAmzTarget: XAmzTarget3AwsCertificateManagerTagApi.CertificateManagerRemoveTagsFromCertificate,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AwsCertificateManagerTagApi](src/models/xamz-target3-aws-certificate-manager-tag-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tagApi.removeTagsFromCertificate(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[TagApi.RemoveTagsFromCertificateError](src/resources/tag-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tagApi.removeTagsFromCertificate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, TagApi.RemoveTagsFromCertificateError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCertificateManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

