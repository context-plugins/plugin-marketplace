# Reference

> Source: [CriblCloudPublicApiClient](src/client.ts)

## ApiCredentials

> Source: [ApiCredentials](src/resources/api-credentials.ts)

<details>
<summary><code>v1ApiCredentialsCreateApiCredential(request: ApiCredentials.V1ApiCredentialsCreateApiCredentialRequest, options?: RequestOptions): ApiPromise&lt;ApiCredentialCreateResponseSchema, ApiCredentials.V1ApiCredentialsCreateApiCredentialError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new API Credential for the specified Organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiCredentials.v1ApiCredentialsCreateApiCredential({
    organizationId: "some example string",
    body: {
      name: "some example string",
      description: "some example string",
      enabled: true,
      roles: { organizationRole: OrganizationRole.Owner },
    },
  });
  // TODO: Handle 'response' of type ApiCredentialCreateResponseSchema
} catch (err) {
  // TODO: Handle 'err' of type ApiCredentials.V1ApiCredentialsCreateApiCredentialError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apiCredentials.v1ApiCredentialsCreateApiCredential({
  organizationId: "some example string",
  body: {
    name: "some example string",
    description: "some example string",
    enabled: true,
    roles: { organizationRole: OrganizationRole.Owner },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiCredentialCreateResponseSchema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organizationId</code> | <code>string</code> | The <code>id</code> of the Organization where you want to create the API Credential. |
| <code>body</code> | <code>[ApiCredentialCreateRequestDto](src/models/api-credential-create-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apiCredentials.v1ApiCredentialsCreateApiCredential(request)`

- **OnSuccess**: <code>[ApiCredentialCreateResponseSchema](src/models/api-credential-create-response-schema.ts)</code>
- **OnError**: throws <code>[ApiCredentials.V1ApiCredentialsCreateApiCredentialError](src/resources/api-credentials.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apiCredentials.v1ApiCredentialsCreateApiCredential(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiCredentialCreateResponseSchema, ApiCredentials.V1ApiCredentialsCreateApiCredentialError&gt;</code>, with `result.value` of type <code>[ApiCredentialCreateResponseSchema](src/models/api-credential-create-response-schema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblCloudPublicApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1ApiCredentialsDeleteApiCredential(request: ApiCredentials.V1ApiCredentialsDeleteApiCredentialRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiCredentials.V1ApiCredentialsDeleteApiCredentialError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete the specified API Credential.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.apiCredentials.v1ApiCredentialsDeleteApiCredential({
    organizationId: "some example string",
    apiCredentialId: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type ApiCredentials.V1ApiCredentialsDeleteApiCredentialError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apiCredentials.v1ApiCredentialsDeleteApiCredential({
  organizationId: "some example string",
  apiCredentialId: "some example string",
}).asApiResult();
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
| <code>organizationId</code> | <code>string</code> | The <code>id</code> of the Organization whose API Credential you want to delete. |
| <code>apiCredentialId</code> | <code>string</code> | The <code>clientId</code> of the API Credential to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apiCredentials.v1ApiCredentialsDeleteApiCredential(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiCredentials.V1ApiCredentialsDeleteApiCredentialError](src/resources/api-credentials.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apiCredentials.v1ApiCredentialsDeleteApiCredential(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiCredentials.V1ApiCredentialsDeleteApiCredentialError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblCloudPublicApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1ApiCredentialsGetApiCredential(request: ApiCredentials.V1ApiCredentialsGetApiCredentialRequest, options?: RequestOptions): ApiPromise&lt;ApiCredentialResponseSchema, ApiCredentials.V1ApiCredentialsGetApiCredentialError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the specified API Credential.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiCredentials.v1ApiCredentialsGetApiCredential({
    organizationId: "some example string",
    apiCredentialId: "some example string",
  });
  // TODO: Handle 'response' of type ApiCredentialResponseSchema
} catch (err) {
  // TODO: Handle 'err' of type ApiCredentials.V1ApiCredentialsGetApiCredentialError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apiCredentials.v1ApiCredentialsGetApiCredential({
  organizationId: "some example string",
  apiCredentialId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiCredentialResponseSchema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organizationId</code> | <code>string</code> | The <code>id</code> of the Organization whose API Credential you want to retrieve. |
| <code>apiCredentialId</code> | <code>string</code> | The <code>clientId</code> of the API Credential to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apiCredentials.v1ApiCredentialsGetApiCredential(request)`

- **OnSuccess**: <code>[ApiCredentialResponseSchema](src/models/api-credential-response-schema.ts)</code>
- **OnError**: throws <code>[ApiCredentials.V1ApiCredentialsGetApiCredentialError](src/resources/api-credentials.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apiCredentials.v1ApiCredentialsGetApiCredential(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiCredentialResponseSchema, ApiCredentials.V1ApiCredentialsGetApiCredentialError&gt;</code>, with `result.value` of type <code>[ApiCredentialResponseSchema](src/models/api-credential-response-schema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblCloudPublicApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1ApiCredentialsListApiCredentials(request: ApiCredentials.V1ApiCredentialsListApiCredentialsRequest, options?: RequestOptions): ApiPromise&lt;ApiCredentialsListResponseDto, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all API Credentials for the specified Organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiCredentials.v1ApiCredentialsListApiCredentials({
    organizationId: "some example string",
  });
  // TODO: Handle 'response' of type ApiCredentialsListResponseDto
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
const result = await client.apiCredentials.v1ApiCredentialsListApiCredentials({
  organizationId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiCredentialsListResponseDto
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
| <code>organizationId</code> | <code>string</code> | The <code>id</code> of the Organization whose API Credentials you want to list. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apiCredentials.v1ApiCredentialsListApiCredentials(request)`

- **OnSuccess**: <code>[ApiCredentialsListResponseDto](src/models/api-credentials-list-response-dto.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.apiCredentials.v1ApiCredentialsListApiCredentials(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiCredentialsListResponseDto, ApiError&gt;</code>, with `result.value` of type <code>[ApiCredentialsListResponseDto](src/models/api-credentials-list-response-dto.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CriblCloudPublicApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1ApiCredentialsUpdateApiCredential(request: ApiCredentials.V1ApiCredentialsUpdateApiCredentialRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiCredentials.V1ApiCredentialsUpdateApiCredentialError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the specified API Credential.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.apiCredentials.v1ApiCredentialsUpdateApiCredential({
    organizationId: "some example string",
    apiCredentialId: "some example string",
    body: {},
  });
} catch (err) {
  // TODO: Handle 'err' of type ApiCredentials.V1ApiCredentialsUpdateApiCredentialError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apiCredentials.v1ApiCredentialsUpdateApiCredential({
  organizationId: "some example string",
  apiCredentialId: "some example string",
  body: {},
}).asApiResult();
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
| <code>organizationId</code> | <code>string</code> | The <code>id</code> of the Organization whose API Credential you want to update. |
| <code>apiCredentialId</code> | <code>string</code> | The <code>clientId</code> of the API Credential to update. |
| <code>body</code> | <code>[ApiCredentialUpdateRequestDto](src/models/api-credential-update-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apiCredentials.v1ApiCredentialsUpdateApiCredential(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiCredentials.V1ApiCredentialsUpdateApiCredentialError](src/resources/api-credentials.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apiCredentials.v1ApiCredentialsUpdateApiCredential(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiCredentials.V1ApiCredentialsUpdateApiCredentialError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblCloudPublicApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Billing

> Source: [Billing](src/resources/billing.ts)

<details>
<summary><code>v1BillingGetContractsUtilization(request: Billing.V1BillingGetContractsUtilizationRequest, options?: RequestOptions): ApiPromise&lt;ContractsUtilizationResponseDto, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get cumulative credit utilization data grouped by contract period for the specified Organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.billing.v1BillingGetContractsUtilization({
    organizationId: "some example string",
    startingOn: new Date(Date.UTC(2025, 4, 1, 0, 0, 0)),
    endingBefore: new Date(Date.UTC(2025, 5, 1, 0, 0, 0)),
    window: BillingWindow.Monthly,
  });
  // TODO: Handle 'response' of type ContractsUtilizationResponseDto
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
const result = await client.billing.v1BillingGetContractsUtilization({
  organizationId: "some example string",
  startingOn: new Date(Date.UTC(2025, 4, 1, 0, 0, 0)),
  endingBefore: new Date(Date.UTC(2025, 5, 1, 0, 0, 0)),
  window: BillingWindow.Monthly,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContractsUtilizationResponseDto
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
| <code>organizationId</code> | <code>string</code> | The <code>id</code> of the Organization. |
| <code>startingOn</code> | <code>Date</code> (date-time) | Inclusive start of the query date range in ISO 8601 format. Must be before endingBefore. Minimum range is 1 day. Maximum range depends on window: 6 months for daily, 7 years for monthly. |
| <code>endingBefore</code> | <code>Date</code> (date-time) | Exclusive end of the query date range in ISO 8601 format. Must be after startingOn. Minimum range is 1 day. Maximum range depends on window: 6 months for daily, 7 years for monthly. |
| <code>window</code> | <code>[BillingWindow](src/models/billing-window.ts)</code> | Aggregation granularity for credit utilization data. Determines the maximum allowed date range: up to 6 months for daily, up to 7 years for monthly. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.billing.v1BillingGetContractsUtilization(request)`

- **OnSuccess**: <code>[ContractsUtilizationResponseDto](src/models/contracts-utilization-response-dto.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.billing.v1BillingGetContractsUtilization(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContractsUtilizationResponseDto, ApiError&gt;</code>, with `result.value` of type <code>[ContractsUtilizationResponseDto](src/models/contracts-utilization-response-dto.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CriblCloudPublicApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1BillingGetCreditsGrants(request: Billing.V1BillingGetCreditsGrantsRequest, options?: RequestOptions): ApiPromise&lt;CreditGrantsResponseDto, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get credit grants (purchases, rollovers, and refunds) for the specified Organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.billing.v1BillingGetCreditsGrants({ organizationId: "some example string" });
  // TODO: Handle 'response' of type CreditGrantsResponseDto
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
const result = await client.billing.v1BillingGetCreditsGrants({
  organizationId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditGrantsResponseDto
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
| <code>organizationId</code> | <code>string</code> | The <code>id</code> of the Organization. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.billing.v1BillingGetCreditsGrants(request)`

- **OnSuccess**: <code>[CreditGrantsResponseDto](src/models/credit-grants-response-dto.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.billing.v1BillingGetCreditsGrants(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditGrantsResponseDto, ApiError&gt;</code>, with `result.value` of type <code>[CreditGrantsResponseDto](src/models/credit-grants-response-dto.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CriblCloudPublicApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1BillingGetCreditsStats(request: Billing.V1BillingGetCreditsStatsRequest, options?: RequestOptions): ApiPromise&lt;CreditsStatsResponseDto, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get credit balance totals, consumption totals, and contract date ranges for the specified Organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.billing.v1BillingGetCreditsStats({ organizationId: "some example string" });
  // TODO: Handle 'response' of type CreditsStatsResponseDto
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
const result = await client.billing.v1BillingGetCreditsStats({
  organizationId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditsStatsResponseDto
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
| <code>organizationId</code> | <code>string</code> | The <code>id</code> of the Organization. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.billing.v1BillingGetCreditsStats(request)`

- **OnSuccess**: <code>[CreditsStatsResponseDto](src/models/credits-stats-response-dto.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.billing.v1BillingGetCreditsStats(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditsStatsResponseDto, ApiError&gt;</code>, with `result.value` of type <code>[CreditsStatsResponseDto](src/models/credits-stats-response-dto.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CriblCloudPublicApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1BillingGetCreditsTimeseries(request: Billing.V1BillingGetCreditsTimeseriesRequest, options?: RequestOptions): ApiPromise&lt;CreditsTimeseriesResponseDto, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get credit consumption timeseries data for the specified Organization, broken down by dimensions such as product and usage type.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.billing.v1BillingGetCreditsTimeseries({
    organizationId: "some example string",
    startingOn: new Date(Date.UTC(2025, 4, 1, 0, 0, 0)),
    endingBefore: new Date(Date.UTC(2025, 5, 1, 0, 0, 0)),
    window: BillingWindow.Monthly,
  });
  // TODO: Handle 'response' of type CreditsTimeseriesResponseDto
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
const result = await client.billing.v1BillingGetCreditsTimeseries({
  organizationId: "some example string",
  startingOn: new Date(Date.UTC(2025, 4, 1, 0, 0, 0)),
  endingBefore: new Date(Date.UTC(2025, 5, 1, 0, 0, 0)),
  window: BillingWindow.Monthly,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditsTimeseriesResponseDto
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
| <code>organizationId</code> | <code>string</code> | The <code>id</code> of the Organization. |
| <code>startingOn</code> | <code>Date</code> (date-time) | Inclusive start of the query date range in ISO 8601 format. Must be before endingBefore. Minimum range is 1 day. Maximum range depends on window: 6 months for daily, 7 years for monthly. |
| <code>endingBefore</code> | <code>Date</code> (date-time) | Exclusive end of the query date range in ISO 8601 format. Must be after startingOn. Minimum range is 1 day. Maximum range depends on window: 6 months for daily, 7 years for monthly. |
| <code>window</code> | <code>[BillingWindow](src/models/billing-window.ts)</code> | Aggregation granularity for timeseries data. Determines the maximum allowed date range: up to 6 months for daily, up to 7 years for monthly. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.billing.v1BillingGetCreditsTimeseries(request)`

- **OnSuccess**: <code>[CreditsTimeseriesResponseDto](src/models/credits-timeseries-response-dto.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.billing.v1BillingGetCreditsTimeseries(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditsTimeseriesResponseDto, ApiError&gt;</code>, with `result.value` of type <code>[CreditsTimeseriesResponseDto](src/models/credits-timeseries-response-dto.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CriblCloudPublicApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Workspaces

> Source: [Workspaces](src/resources/workspaces.ts)

<details>
<summary><code>v1WorkspacesCreateWorkspace(request: Workspaces.V1WorkspacesCreateWorkspaceRequest, options?: RequestOptions): ApiPromise&lt;WorkspaceSchema, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Workspace in the specified Organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspaces.v1WorkspacesCreateWorkspace({
    organizationId: "some example string",
    body: { workspaceId: "some example string" },
  });
  // TODO: Handle 'response' of type WorkspaceSchema
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
const result = await client.workspaces.v1WorkspacesCreateWorkspace({
  organizationId: "some example string",
  body: { workspaceId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspaceSchema
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
| <code>organizationId</code> | <code>string</code> | The <code>id</code> of the Organization where you want to create the Workspace. |
| <code>body</code> | <code>[WorkspaceCreateRequestDto](src/models/workspace-create-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspaces.v1WorkspacesCreateWorkspace(request)`

- **OnSuccess**: <code>[WorkspaceSchema](src/models/workspace-schema.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.workspaces.v1WorkspacesCreateWorkspace(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspaceSchema, ApiError&gt;</code>, with `result.value` of type <code>[WorkspaceSchema](src/models/workspace-schema.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CriblCloudPublicApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1WorkspacesDeleteWorkspace(request: Workspaces.V1WorkspacesDeleteWorkspaceRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete the specified Workspace in the specified Organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.workspaces.v1WorkspacesDeleteWorkspace({
    organizationId: "some example string",
    workspaceId: "some example string",
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
const result = await client.workspaces.v1WorkspacesDeleteWorkspace({
  organizationId: "some example string",
  workspaceId: "some example string",
}).asApiResult();
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
| <code>organizationId</code> | <code>string</code> | The <code>id</code> of the Organization that contains the Workspace. |
| <code>workspaceId</code> | <code>string</code> | The <code>id</code> of the Workspace to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspaces.v1WorkspacesDeleteWorkspace(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.workspaces.v1WorkspacesDeleteWorkspace(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CriblCloudPublicApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1WorkspacesGetWorkspace(request: Workspaces.V1WorkspacesGetWorkspaceRequest, options?: RequestOptions): ApiPromise&lt;WorkspaceSchema, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the specified Workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspaces.v1WorkspacesGetWorkspace({
    organizationId: "some example string",
    workspaceId: "some example string",
  });
  // TODO: Handle 'response' of type WorkspaceSchema
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
const result = await client.workspaces.v1WorkspacesGetWorkspace({
  organizationId: "some example string",
  workspaceId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspaceSchema
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
| <code>organizationId</code> | <code>string</code> | The <code>id</code> of the Organization that contains the Workspace. |
| <code>workspaceId</code> | <code>string</code> | The <code>id</code> of the Workspace to get. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspaces.v1WorkspacesGetWorkspace(request)`

- **OnSuccess**: <code>[WorkspaceSchema](src/models/workspace-schema.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.workspaces.v1WorkspacesGetWorkspace(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspaceSchema, ApiError&gt;</code>, with `result.value` of type <code>[WorkspaceSchema](src/models/workspace-schema.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CriblCloudPublicApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1WorkspacesListWorkspaces(request: Workspaces.V1WorkspacesListWorkspacesRequest, options?: RequestOptions): ApiPromise&lt;WorkspacesListResponseDto, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all Workspaces for the specified Organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspaces.v1WorkspacesListWorkspaces({
    organizationId: "some example string",
  });
  // TODO: Handle 'response' of type WorkspacesListResponseDto
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
const result = await client.workspaces.v1WorkspacesListWorkspaces({
  organizationId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspacesListResponseDto
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
| <code>organizationId</code> | <code>string</code> | The <code>id</code> of the Organization that contains the Workspaces. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspaces.v1WorkspacesListWorkspaces(request)`

- **OnSuccess**: <code>[WorkspacesListResponseDto](src/models/workspaces-list-response-dto.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.workspaces.v1WorkspacesListWorkspaces(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspacesListResponseDto, ApiError&gt;</code>, with `result.value` of type <code>[WorkspacesListResponseDto](src/models/workspaces-list-response-dto.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CriblCloudPublicApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1WorkspacesUpdateWorkspace(request: Workspaces.V1WorkspacesUpdateWorkspaceRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the specified Workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.workspaces.v1WorkspacesUpdateWorkspace({
    organizationId: "some example string",
    workspaceId: "some example string",
    body: {},
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
const result = await client.workspaces.v1WorkspacesUpdateWorkspace({
  organizationId: "some example string",
  workspaceId: "some example string",
  body: {},
}).asApiResult();
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
| <code>organizationId</code> | <code>string</code> | The <code>id</code> of the Organization that contains the Workspace. |
| <code>workspaceId</code> | <code>string</code> | The <code>id</code> of the Workspace to update. |
| <code>body</code> | <code>[WorkspacePatchRequestDto](src/models/workspace-patch-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspaces.v1WorkspacesUpdateWorkspace(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.workspaces.v1WorkspacesUpdateWorkspace(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CriblCloudPublicApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Health

> Source: [Health](src/resources/health.ts)

<details>
<summary><code>getHealthStatus(options?: RequestOptions): ApiPromise&lt;Response, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.health.getHealthStatus();
  // TODO: Handle 'response' of type Response
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
const result = await client.health.getHealthStatus().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Response
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.health.getHealthStatus()`

- **OnSuccess**: <code>[Response](src/models/response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.health.getHealthStatus().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Response, ApiError&gt;</code>, with `result.value` of type <code>[Response](src/models/response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CriblCloudPublicApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

