# Reference

> Source: [DwollaApiClient](src/client.ts)

## Tokens

> Source: [Tokens](src/resources/tokens.ts)

<details>
<summary><code>createApplicationAccessToken(request: Tokens.CreateApplicationAccessTokenRequest, options?: RequestOptions): ApiPromise&lt;TokenResponse, Tokens.CreateApplicationAccessTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate an application access token using OAuth 2.0 client credentials flow for server-to-server authentication. Requires client ID and secret sent via Basic authentication header with grant_type=client_credentials in the request body. Returns a bearer access token with expiration time for authenticating API requests scoped to your application. Essential for secure API access.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tokens.createApplicationAccessToken({
    grantType: GrantType.ClientCredentials,
  });
  // TODO: Handle 'response' of type TokenResponse
} catch (err) {
  // TODO: Handle 'err' of type Tokens.CreateApplicationAccessTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tokens.createApplicationAccessToken({
  grantType: GrantType.ClientCredentials,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TokenResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>grantType</code> | <code>[GrantType](src/models/grant-type.ts)</code> | Must be set to "client_credentials" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tokens.createApplicationAccessToken(request)`

- **OnSuccess**: <code>[TokenResponse](src/models/token-response.ts)</code>
- **OnError**: throws <code>[Tokens.CreateApplicationAccessTokenError](src/resources/tokens.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tokens.createApplicationAccessToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TokenResponse, Tokens.CreateApplicationAccessTokenError&gt;</code>, with `result.value` of type <code>[TokenResponse](src/models/token-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## RootApi

> Source: [RootApi](src/resources/root-api.ts)

<details>
<summary><code>getRoot(request: RootApi.GetRootRequest, options?: RequestOptions): ApiPromise&lt;undefined, RootApi.GetRootError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the API root entry point to discover available resources and endpoints based on your OAuth access token permissions. Returns HAL+JSON with navigation links to accessible resources including accounts, customers, events, and webhook subscriptions depending on token scope. Essential for API exploration, dynamic resource discovery, and building adaptive client applications that respond to available permissions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.rootApi.getRoot({ accept: Accept.ApplicationVndDwollaV1HalJson });
} catch (err) {
  // TODO: Handle 'err' of type RootApi.GetRootError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.rootApi.getRoot({ accept: Accept.ApplicationVndDwollaV1HalJson }).asApiResult();
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
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.rootApi.getRoot(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[RootApi.GetRootError](src/resources/root-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.rootApi.getRoot(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, RootApi.GetRootError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Accounts

> Source: [Accounts](src/resources/accounts.ts)

<details>
<summary><code>createFundingSource(request: Accounts.CreateFundingSourceRequest, options?: RequestOptions): ApiPromise&lt;undefined, Accounts.CreateFundingSourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a funding source by adding a bank account to a Main Dwolla Account. This endpoint allows you to connect a checking or savings account using either manual bank account details or an exchange resource.

For more information about funding sources, see the [Funding Sources API Reference](https://developers.dwolla.com/docs/api-reference/funding-sources).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.accounts.createFundingSource({
    accept: Accept.ApplicationVndDwollaV1HalJson,
    body: {
      name: "some example string",
      bankAccountType: BankAccountType.Checking,
      accountNumber: "some example string",
      routingNumber: "some example string",
    },
  });
} catch (err) {
  // TODO: Handle 'err' of type Accounts.CreateFundingSourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accounts.createFundingSource({
  accept: Accept.ApplicationVndDwollaV1HalJson,
  body: {
    name: "some example string",
    bankAccountType: BankAccountType.Checking,
    accountNumber: "some example string",
    routingNumber: "some example string",
  },
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
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |
| <code>body</code> | <code>[CreateAccountFundingSource](src/models/create-account-funding-source.ts)</code> | Parameters for the funding source to be created |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accounts.createFundingSource(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Accounts.CreateFundingSourceError](src/resources/accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accounts.createFundingSource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Accounts.CreateFundingSourceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAccount(request: Accounts.GetAccountRequest, options?: RequestOptions): ApiPromise&lt;undefined, Accounts.GetAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns basic account information for your authorized Main Dwolla Account, including account ID, name, and links to related resources such as funding sources, transfers, and customers.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.accounts.getAccount({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type Accounts.GetAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accounts.getAccount({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | Account's unique identifier |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accounts.getAccount(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Accounts.GetAccountError](src/resources/accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accounts.getAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Accounts.GetAccountError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAndSearchTransfers(request: Accounts.ListAndSearchTransfersRequest, options?: RequestOptions): ApiPromise&lt;undefined, Accounts.ListAndSearchTransfersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated, searchable list of transfers associated with the specified Main Dwolla account. Supports advanced filtering by amount range, date range, transfer status, and correlation ID. Results are limited to 10,000 transfers per query; use date range filters for historical data beyond this limit.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.accounts.listAndSearchTransfers({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type Accounts.ListAndSearchTransfersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accounts.listAndSearchTransfers({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | Account's unique identifier |
| <code>search?</code> | <code>string</code> | A string to search on fields `firstName`, `lastName`, `email`, `businessName`, Customer ID, and Account ID |
| <code>startAmount?</code> | <code>string</code> | Only include transactions with an amount equal to or greater than `startAmount` |
| <code>endAmount?</code> | <code>string</code> | Only include transactions with an amount equal to or less than `endAmount` |
| <code>startDate?</code> | <code>string</code> | Only include transactions created after this date. ISO-8601 format `YYYY-MM-DD` |
| <code>endDate?</code> | <code>string</code> | Only include transactions created before this date. ISO-8601 format `YYYY-MM-DD` |
| <code>status?</code> | <code>string</code> | Filter on transaction status. Possible values are `pending`, `processed`, `failed`, or `cancelled` |
| <code>correlationId?</code> | <code>string</code> | A string value to search on if `correlationId` was specified for a transaction |
| <code>limit?</code> | <code>string</code> | Number of search results to return. Defaults to 25 |
| <code>offset?</code> | <code>string</code> | Number of search results to skip. Use for pagination |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accounts.listAndSearchTransfers(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Accounts.ListAndSearchTransfersError](src/resources/accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accounts.listAndSearchTransfers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Accounts.ListAndSearchTransfersError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listFundingSources(request: Accounts.ListFundingSourcesRequest, options?: RequestOptions): ApiPromise&lt;undefined, Accounts.ListFundingSourcesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all funding sources associated with a specific Main Dwolla Account. This endpoint returns both bank accounts and balance funding sources, with detailed information about each funding source's status, type, and available processing channels.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.accounts.listFundingSources({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type Accounts.ListFundingSourcesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accounts.listFundingSources({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | Account's unique identifier |
| <code>removed?</code> | <code>string</code> | Filter removed funding sources. Boolean value. Defaults to `true` |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accounts.listFundingSources(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Accounts.ListFundingSourcesError](src/resources/accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accounts.listFundingSources(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Accounts.ListFundingSourcesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMassPayments(request: Accounts.ListMassPaymentsRequest, options?: RequestOptions): ApiPromise&lt;undefined, Accounts.ListMassPaymentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of mass payments created by your Main Dwolla account. Results are sorted by creation date in descending order (newest first) and can be filtered by correlation ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.accounts.listMassPayments({
    id: "some example string",
    limit: 25,
    offset: 0,
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type Accounts.ListMassPaymentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accounts.listMassPayments({
  id: "some example string",
  limit: 25,
  offset: 0,
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | Account's unique identifier |
| <code>limit?</code> | <code>number</code> | Maximum number of results to return<br>**Default**: 25 |
| <code>offset?</code> | <code>number</code> | How many results to skip.<br>**Default**: 0 |
| <code>correlationId?</code> | <code>string</code> | Correlation ID to search by. |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accounts.listMassPayments(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Accounts.ListMassPaymentsError](src/resources/accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accounts.listMassPayments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Accounts.ListMassPaymentsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CustomersApi

> Source: [CustomersApi](src/resources/customers-api.ts)

<details>
<summary><code>createCustomer(request: CustomersApi.CreateCustomerRequest, options?: RequestOptions): ApiPromise&lt;undefined, CustomersApi.CreateCustomerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new customer with different verification levels and capabilities. Supports personal verified customers (individuals), business verified customers (businesses), unverified customers, and receive-only users. Customer type determines transaction limits, verification requirements, and available features.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.customersApi.createCustomer({ accept: Accept.ApplicationVndDwollaV1HalJson });
} catch (err) {
  // TODO: Handle 'err' of type CustomersApi.CreateCustomerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customersApi.createCustomer({
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customersApi.createCustomer(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CustomersApi.CreateCustomerError](src/resources/customers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customersApi.createCustomer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CustomersApi.CreateCustomerError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCustomer(request: CustomersApi.GetCustomerRequest, options?: RequestOptions): ApiPromise&lt;undefined, CustomersApi.GetCustomerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve identifying information for a specific customer. The returned data varies by customer type - verified customers include contact details, address information, and verification status, while unverified customers and receive-only users contain basic contact information only.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.customersApi.getCustomer({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type CustomersApi.GetCustomerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customersApi.getCustomer({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | Customer unique identifier |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customersApi.getCustomer(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CustomersApi.GetCustomerError](src/resources/customers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customersApi.getCustomer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CustomersApi.GetCustomerError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAndSearchCustomers(request: CustomersApi.ListAndSearchCustomersRequest, options?: RequestOptions): ApiPromise&lt;undefined, CustomersApi.ListAndSearchCustomersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of customers sorted by creation date. Supports fuzzy search across customer names, business names, and email addresses, plus exact filtering by email and verification status. Default limit is 25 customers per page, maximum 200.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.customersApi.listAndSearchCustomers({ accept: Accept.ApplicationVndDwollaV1HalJson });
} catch (err) {
  // TODO: Handle 'err' of type CustomersApi.ListAndSearchCustomersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customersApi.listAndSearchCustomers({
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>limit?</code> | <code>number</code> | How many results to return |
| <code>offset?</code> | <code>number</code> | How many results to skip |
| <code>search?</code> | <code>string</code> | Searches on certain fields |
| <code>status?</code> | <code>string</code> | Filter by customer status |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customersApi.listAndSearchCustomers(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CustomersApi.ListAndSearchCustomersError](src/resources/customers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customersApi.listAndSearchCustomers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CustomersApi.ListAndSearchCustomersError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBusinessClassifications(request: CustomersApi.ListBusinessClassificationsRequest, options?: RequestOptions): ApiPromise&lt;undefined, CustomersApi.ListBusinessClassificationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a directory of business and industry classifications required for creating business verified customers. Each business classification contains multiple industry classifications. The industry classification ID must be provided in the businessClassification parameter during business customer creation for verification.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.customersApi.listBusinessClassifications({ accept: Accept.ApplicationVndDwollaV1HalJson });
} catch (err) {
  // TODO: Handle 'err' of type CustomersApi.ListBusinessClassificationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customersApi.listBusinessClassifications({
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customersApi.listBusinessClassifications(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CustomersApi.ListBusinessClassificationsError](src/resources/customers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customersApi.listBusinessClassifications(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CustomersApi.ListBusinessClassificationsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveBusinessClassification(request: CustomersApi.RetrieveBusinessClassificationRequest, options?: RequestOptions): ApiPromise&lt;undefined, CustomersApi.RetrieveBusinessClassificationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a specific business classification with its embedded industry classifications. Use this endpoint to browse available industry options within a business category and obtain the industry classification ID required for the businessClassification parameter when creating business verified customers.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.customersApi.retrieveBusinessClassification({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type CustomersApi.RetrieveBusinessClassificationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customersApi.retrieveBusinessClassification({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | business classification unique identifier |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customersApi.retrieveBusinessClassification(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CustomersApi.RetrieveBusinessClassificationError](src/resources/customers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customersApi.retrieveBusinessClassification(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CustomersApi.RetrieveBusinessClassificationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>update(request: CustomersApi.UpdateRequest, options?: RequestOptions): ApiPromise&lt;undefined, CustomersApi.UpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Customer information, upgrade an unverified Customer to a verified Customer, suspend a Customer, deactivate a Customer, reactivate a Customer, and update a verified Customer's information to retry verification.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.customersApi.update({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
    body: { status: "some example string" },
  });
} catch (err) {
  // TODO: Handle 'err' of type CustomersApi.UpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customersApi.update({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
  body: { status: "some example string" },
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
| <code>id</code> | <code>string</code> | Customer unique identifier |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |
| <code>body</code> | <code>[CustomersRequest1](src/models/unions/customers-request1.ts)</code> | Parameters for updating a Customer |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customersApi.update(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CustomersApi.UpdateError](src/resources/customers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customersApi.update(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CustomersApi.UpdateError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Kba

> Source: [Kba](src/resources/kba.ts)

<details>
<summary><code>getKbaQuestions(request: Kba.GetKbaQuestionsRequest, options?: RequestOptions): ApiPromise&lt;undefined, Kba.GetKbaQuestionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the KBA questions for a specific KBA session. The questions are used to verify the customer's identity during the KBA process.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.kba.getKbaQuestions({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type Kba.GetKbaQuestionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.kba.getKbaQuestions({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | The ID of the KBA session to retrieve questions for |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.kba.getKbaQuestions(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Kba.GetKbaQuestionsError](src/resources/kba.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.kba.getKbaQuestions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Kba.GetKbaQuestionsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>initiateKbaForCustomer(request: Kba.InitiateKbaForCustomerRequest, options?: RequestOptions): ApiPromise&lt;undefined, Kba.InitiateKbaForCustomerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new KBA (Knowledge-Based Authentication) session for a personal Verified Customer. Returns a KBA identifier that represents the session and is used to retrieve authentication questions for customer verification.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.kba.initiateKbaForCustomer({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type Kba.InitiateKbaForCustomerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.kba.initiateKbaForCustomer({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | The ID of the Customer for initiating a KBA session |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.kba.initiateKbaForCustomer(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Kba.InitiateKbaForCustomerError](src/resources/kba.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.kba.initiateKbaForCustomer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Kba.InitiateKbaForCustomerError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>verifyKbaQuestions(request: Kba.VerifyKbaQuestionsRequest, options?: RequestOptions): ApiPromise&lt;undefined, Kba.VerifyKbaQuestionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits customer answers to KBA questions for identity verification. Requires four question-answer pairs with questionId and answerId values. Returns verification status indicating whether the customer passed or failed the KBA authentication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.kba.verifyKbaQuestions({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
    body: { answers: [{ questionId: "some example string", answerId: "some example string" }] },
  });
} catch (err) {
  // TODO: Handle 'err' of type Kba.VerifyKbaQuestionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.kba.verifyKbaQuestions({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
  body: { answers: [{ questionId: "some example string", answerId: "some example string" }] },
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
| <code>id</code> | <code>string</code> | The id of the KBA session to verify questions for. |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |
| <code>body</code> | <code>[KbaRequest](src/models/kba-request.ts)</code> | Parameters for verifying KBA questions |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.kba.verifyKbaQuestions(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Kba.VerifyKbaQuestionsError](src/resources/kba.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.kba.verifyKbaQuestions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Kba.VerifyKbaQuestionsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## BeneficialOwnersApi

> Source: [BeneficialOwnersApi](src/resources/beneficial-owners-api.ts)

<details>
<summary><code>certifyBeneficialOwnershipForCustomer(request: BeneficialOwnersApi.CertifyBeneficialOwnershipForCustomerRequest, options?: RequestOptions): ApiPromise&lt;undefined, BeneficialOwnersApi.CertifyBeneficialOwnershipForCustomerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the beneficial ownership certification status to "certified", confirming that all beneficial owner information is accurate and complete. This action enables the business customer to send funds and is required to complete the verification process.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.beneficialOwnersApi.certifyBeneficialOwnershipForCustomer({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
    body: { status: "some example string" },
  });
} catch (err) {
  // TODO: Handle 'err' of type BeneficialOwnersApi.CertifyBeneficialOwnershipForCustomerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.beneficialOwnersApi.certifyBeneficialOwnershipForCustomer({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
  body: { status: "some example string" },
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
| <code>id</code> | <code>string</code> | Customer unique identifier |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |
| <code>body</code> | <code>[CustomersBeneficialOwnershipRequest](src/models/customers-beneficial-ownership-request.ts)</code> | Parameters for certifying beneficial ownership for a Customer |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.beneficialOwnersApi.certifyBeneficialOwnershipForCustomer(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[BeneficialOwnersApi.CertifyBeneficialOwnershipForCustomerError](src/resources/beneficial-owners-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.beneficialOwnersApi.certifyBeneficialOwnershipForCustomer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, BeneficialOwnersApi.CertifyBeneficialOwnershipForCustomerError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createBeneficialOwnerForCustomer(request: BeneficialOwnersApi.CreateBeneficialOwnerForCustomerRequest, options?: RequestOptions): ApiPromise&lt;undefined, BeneficialOwnersApi.CreateBeneficialOwnerForCustomerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new beneficial owner for a business verified customer. Beneficial owners are individuals who own 25% or more of the company's equity. Requires personal information, address, and SSN or passport for identity verification.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.beneficialOwnersApi.createBeneficialOwnerForCustomer({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
    body: {
      firstName: "some example string",
      lastName: "some example string",
      dateOfBirth: "some example string",
      address: {
        address1: "some example string",
        city: "some example string",
        country: "some example string",
        stateProvinceRegion: "some example string",
      },
      ssn: "some example string",
    },
  });
} catch (err) {
  // TODO: Handle 'err' of type BeneficialOwnersApi.CreateBeneficialOwnerForCustomerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.beneficialOwnersApi.createBeneficialOwnerForCustomer({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
  body: {
    firstName: "some example string",
    lastName: "some example string",
    dateOfBirth: "some example string",
    address: {
      address1: "some example string",
      city: "some example string",
      country: "some example string",
      stateProvinceRegion: "some example string",
    },
    ssn: "some example string",
  },
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
| <code>id</code> | <code>string</code> | Customer ID for which to create a Beneficial Owner |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |
| <code>body</code> | <code>[CustomersBeneficialOwnersRequest](src/models/unions/customers-beneficial-owners-request.ts)</code> | Parameters for creating a beneficial owner |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.beneficialOwnersApi.createBeneficialOwnerForCustomer(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[BeneficialOwnersApi.CreateBeneficialOwnerForCustomerError](src/resources/beneficial-owners-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.beneficialOwnersApi.createBeneficialOwnerForCustomer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, BeneficialOwnersApi.CreateBeneficialOwnerForCustomerError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteBeneficialOwner(request: BeneficialOwnersApi.DeleteBeneficialOwnerRequest, options?: RequestOptions): ApiPromise&lt;undefined, BeneficialOwnersApi.DeleteBeneficialOwnerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently removes a beneficial owner from a business customer. This action is irreversible and the beneficial owner cannot be retrieved after removal. Removing a beneficial owner will change the customer's certification status to "recertify".

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.beneficialOwnersApi.deleteBeneficialOwner({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type BeneficialOwnersApi.DeleteBeneficialOwnerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.beneficialOwnersApi.deleteBeneficialOwner({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | Beneficial owner unique identifier |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.beneficialOwnersApi.deleteBeneficialOwner(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[BeneficialOwnersApi.DeleteBeneficialOwnerError](src/resources/beneficial-owners-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.beneficialOwnersApi.deleteBeneficialOwner(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, BeneficialOwnersApi.DeleteBeneficialOwnerError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBeneficialOwnershipStatusForCustomer(request: BeneficialOwnersApi.GetBeneficialOwnershipStatusForCustomerRequest, options?: RequestOptions): ApiPromise&lt;undefined, BeneficialOwnersApi.GetBeneficialOwnershipStatusForCustomerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the certification status of beneficial ownership for a business verified customer. Status indicates whether beneficial owner information has been certified and affects the customer's ability to send funds. Possible values include uncertified, certified, and recertify.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.beneficialOwnersApi.getBeneficialOwnershipStatusForCustomer({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type BeneficialOwnersApi.GetBeneficialOwnershipStatusForCustomerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.beneficialOwnersApi.getBeneficialOwnershipStatusForCustomer({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | Customer unique identifier |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.beneficialOwnersApi.getBeneficialOwnershipStatusForCustomer(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[BeneficialOwnersApi.GetBeneficialOwnershipStatusForCustomerError](src/resources/beneficial-owners-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.beneficialOwnersApi.getBeneficialOwnershipStatusForCustomer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, BeneficialOwnersApi.GetBeneficialOwnershipStatusForCustomerError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBeneficialOwnersForCustomer(request: BeneficialOwnersApi.ListBeneficialOwnersForCustomerRequest, options?: RequestOptions): ApiPromise&lt;undefined, BeneficialOwnersApi.ListBeneficialOwnersForCustomerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all beneficial owners associated with a business verified customer. Beneficial owners are individuals who directly or indirectly own 25% or more of the company's equity. Includes personal information, verification status, and address details for each owner.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.beneficialOwnersApi.listBeneficialOwnersForCustomer({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type BeneficialOwnersApi.ListBeneficialOwnersForCustomerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.beneficialOwnersApi.listBeneficialOwnersForCustomer({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | Customer unique identifier |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.beneficialOwnersApi.listBeneficialOwnersForCustomer(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[BeneficialOwnersApi.ListBeneficialOwnersForCustomerError](src/resources/beneficial-owners-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.beneficialOwnersApi.listBeneficialOwnersForCustomer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, BeneficialOwnersApi.ListBeneficialOwnersForCustomerError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveBeneficialOwner(request: BeneficialOwnersApi.RetrieveBeneficialOwnerRequest, options?: RequestOptions): ApiPromise&lt;undefined, BeneficialOwnersApi.RetrieveBeneficialOwnerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed information for a specific beneficial owner, including personal information, address, and verification status. The verification status indicates the owner's identity verification progress and affects the business customer's transaction capabilities.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.beneficialOwnersApi.retrieveBeneficialOwner({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type BeneficialOwnersApi.RetrieveBeneficialOwnerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.beneficialOwnersApi.retrieveBeneficialOwner({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | Beneficial owner unique identifier |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.beneficialOwnersApi.retrieveBeneficialOwner(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[BeneficialOwnersApi.RetrieveBeneficialOwnerError](src/resources/beneficial-owners-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.beneficialOwnersApi.retrieveBeneficialOwner(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, BeneficialOwnersApi.RetrieveBeneficialOwnerError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateBeneficialOwner(request: BeneficialOwnersApi.UpdateBeneficialOwnerRequest, options?: RequestOptions): ApiPromise&lt;undefined, BeneficialOwnersApi.UpdateBeneficialOwnerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a beneficial owner's information to retry verification when their status is "incomplete". Only beneficial owners with incomplete verification status can be updated. Used to correct information that caused initial verification to fail.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.beneficialOwnersApi.updateBeneficialOwner({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
    body: {
      firstName: "some example string",
      lastName: "some example string",
      dateOfBirth: "some example string",
      address: {
        address1: "some example string",
        city: "some example string",
        country: "some example string",
        stateProvinceRegion: "some example string",
      },
      ssn: "some example string",
    },
  });
} catch (err) {
  // TODO: Handle 'err' of type BeneficialOwnersApi.UpdateBeneficialOwnerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.beneficialOwnersApi.updateBeneficialOwner({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
  body: {
    firstName: "some example string",
    lastName: "some example string",
    dateOfBirth: "some example string",
    address: {
      address1: "some example string",
      city: "some example string",
      country: "some example string",
      stateProvinceRegion: "some example string",
    },
    ssn: "some example string",
  },
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
| <code>id</code> | <code>string</code> | Beneficial owner unique identifier |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |
| <code>body</code> | <code>[BeneficialOwnersRequest](src/models/unions/beneficial-owners-request.ts)</code> | Parameters for updating a beneficial owner |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.beneficialOwnersApi.updateBeneficialOwner(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[BeneficialOwnersApi.UpdateBeneficialOwnerError](src/resources/beneficial-owners-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.beneficialOwnersApi.updateBeneficialOwner(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, BeneficialOwnersApi.UpdateBeneficialOwnerError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DocumentsApi

> Source: [DocumentsApi](src/resources/documents-api.ts)

<details>
<summary><code>createBeneficialOwnerDocument(request: DocumentsApi.CreateBeneficialOwnerDocumentRequest, options?: RequestOptions): ApiPromise&lt;undefined, DocumentsApi.CreateBeneficialOwnerDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads an identity verification document for a beneficial owner using multipart form-data. Required when a beneficial owner has "document" status during the business verification process.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.documentsApi.createBeneficialOwnerDocument({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
    documentType: DocumentType.Passport,
    file: new Uint8Array(),
  });
} catch (err) {
  // TODO: Handle 'err' of type DocumentsApi.CreateBeneficialOwnerDocumentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documentsApi.createBeneficialOwnerDocument({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
  documentType: DocumentType.Passport,
  file: new Uint8Array(),
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
| <code>id</code> | <code>string</code> | beneficial owner unique identifier |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |
| <code>documentType</code> | <code>[DocumentType](src/models/document-type.ts)</code> | - |
| <code>file</code> | <code>FileInput</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documentsApi.createBeneficialOwnerDocument(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DocumentsApi.CreateBeneficialOwnerDocumentError](src/resources/documents-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documentsApi.createBeneficialOwnerDocument(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DocumentsApi.CreateBeneficialOwnerDocumentError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createCustomerDocument(request: DocumentsApi.CreateCustomerDocumentRequest, options?: RequestOptions): ApiPromise&lt;undefined, DocumentsApi.CreateCustomerDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads an identity verification document for a customer using multipart form-data. Required when a customer has "document" status during the verification process.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.documentsApi.createCustomerDocument({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
    documentType: DocumentType.Passport,
    file: new Uint8Array(),
  });
} catch (err) {
  // TODO: Handle 'err' of type DocumentsApi.CreateCustomerDocumentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documentsApi.createCustomerDocument({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
  documentType: DocumentType.Passport,
  file: new Uint8Array(),
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
| <code>id</code> | <code>string</code> | customer unique identifier |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |
| <code>documentType</code> | <code>[DocumentType](src/models/document-type.ts)</code> | - |
| <code>file</code> | <code>FileInput</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documentsApi.createCustomerDocument(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DocumentsApi.CreateCustomerDocumentError](src/resources/documents-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documentsApi.createCustomerDocument(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DocumentsApi.CreateCustomerDocumentError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBeneficialOwnerDocuments(request: DocumentsApi.ListBeneficialOwnerDocumentsRequest, options?: RequestOptions): ApiPromise&lt;undefined, DocumentsApi.ListBeneficialOwnerDocumentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all identity verification documents submitted for a beneficial owner. Includes document status, verification results, document type (passport, driver's license, etc.), and failure reasons if verification was rejected. Used to track document submission and verification progress during the business verification process.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.documentsApi.listBeneficialOwnerDocuments({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type DocumentsApi.ListBeneficialOwnerDocumentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documentsApi.listBeneficialOwnerDocuments({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | beneficial owner unique identifier |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documentsApi.listBeneficialOwnerDocuments(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DocumentsApi.ListBeneficialOwnerDocumentsError](src/resources/documents-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documentsApi.listBeneficialOwnerDocuments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DocumentsApi.ListBeneficialOwnerDocumentsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomerDocuments(request: DocumentsApi.ListCustomerDocumentsRequest, options?: RequestOptions): ApiPromise&lt;undefined, DocumentsApi.ListCustomerDocumentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all identity verification documents submitted for a customer. Includes document status, verification results, document type (passport, driver's license, etc.), and failure reasons if verification was rejected. Used to track document submission and verification progress during the business verification process.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.documentsApi.listCustomerDocuments({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type DocumentsApi.ListCustomerDocumentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documentsApi.listCustomerDocuments({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | customer unique identifier |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documentsApi.listCustomerDocuments(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DocumentsApi.ListCustomerDocumentsError](src/resources/documents-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documentsApi.listCustomerDocuments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DocumentsApi.ListCustomerDocumentsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveDocument(request: DocumentsApi.RetrieveDocumentRequest, options?: RequestOptions): ApiPromise&lt;undefined, DocumentsApi.RetrieveDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed information about a specific identity verification document, including its status, type, and verification results. Used to track document submission and verification progress during the business verification process.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.documentsApi.retrieveDocument({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type DocumentsApi.RetrieveDocumentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documentsApi.retrieveDocument({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | Document unique identifier |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documentsApi.retrieveDocument(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DocumentsApi.RetrieveDocumentError](src/resources/documents-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documentsApi.retrieveDocument(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DocumentsApi.RetrieveDocumentError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ExchangesApi

> Source: [ExchangesApi](src/resources/exchanges-api.ts)

<details>
<summary><code>createAccountExchange(request: ExchangesApi.CreateAccountExchangeRequest, options?: RequestOptions): ApiPromise&lt;undefined, ExchangesApi.CreateAccountExchangeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an exchange for an account. The request body will vary based on the exchange partner.
For Finicity, the request body will include finicity-specific fields.
For MX Secure Exchange, the request body will include a token.
For Flinks Secure Exchange, the request body will include a token.
For Plaid Secure Exchange, the request body will include a token.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.exchangesApi.createAccountExchange({ body: { links: {}, finicity: {} } });
} catch (err) {
  // TODO: Handle 'err' of type ExchangesApi.CreateAccountExchangeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.exchangesApi.createAccountExchange({
  body: { links: {}, finicity: {} },
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
| <code>body</code> | <code>[ExchangesRequest](src/models/unions/exchanges-request.ts)</code> | Parameters for creating an exchange |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.exchangesApi.createAccountExchange(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ExchangesApi.CreateAccountExchangeError](src/resources/exchanges-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.exchangesApi.createAccountExchange(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ExchangesApi.CreateAccountExchangeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createCustomerExchange(request: ExchangesApi.CreateCustomerExchangeRequest, options?: RequestOptions): ApiPromise&lt;undefined, ExchangesApi.CreateCustomerExchangeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an exchange connection between a customer and Dwolla. Request body varies by partner (Plaid, MX, Flinks, Finicity, Checkout.com). For bank accounts, use Plaid, MX, Flinks, or Finicity to establish secure access to the customer's bank account data. For debit cards (Push to Card), use Checkout.com and pass the payment ID from Checkout.com Flow.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.exchangesApi.createCustomerExchange({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type ExchangesApi.CreateCustomerExchangeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.exchangesApi.createCustomerExchange({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | The ID of the customer to create an exchange for |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.exchangesApi.createCustomerExchange(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ExchangesApi.CreateCustomerExchangeError](src/resources/exchanges-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.exchangesApi.createCustomerExchange(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ExchangesApi.CreateCustomerExchangeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getExchange(request: ExchangesApi.GetExchangeRequest, options?: RequestOptions): ApiPromise&lt;undefined, ExchangesApi.GetExchangeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details for a specific exchange connection between Dwolla and an open banking partner
for a customer's bank account. Includes exchange status, creation date, and links to the
associated customer and exchange partner.

For card exchanges created from an exchange session that requested an Account Name Inquiry
(ANI), the response also includes `cardDetails.accountNameInquiry` with the name-match result.
Read this value before creating a card funding source to get an early signal of fraudulent
card usage.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.exchangesApi.getExchange({
    id: "e5e9f2d3-a96c-4abd-a097-8ec7ae28aa8a",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type ExchangesApi.GetExchangeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.exchangesApi.getExchange({
  id: "e5e9f2d3-a96c-4abd-a097-8ec7ae28aa8a",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | Exchange resource unique identifier. |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.exchangesApi.getExchange(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ExchangesApi.GetExchangeError](src/resources/exchanges-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.exchangesApi.getExchange(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ExchangesApi.GetExchangeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getExchangePartner(request: ExchangesApi.GetExchangePartnerRequest, options?: RequestOptions): ApiPromise&lt;undefined, ExchangesApi.GetExchangePartnerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details for a specific open banking provider that integrates with Dwolla. Includes partner name, status, and creation date. Use this to verify partner availability before creating exchanges and funding sources.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.exchangesApi.getExchangePartner({
    id: "292317ec-e252-47d8-93c3-2d128e037aa4",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type ExchangesApi.GetExchangePartnerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.exchangesApi.getExchangePartner({
  id: "292317ec-e252-47d8-93c3-2d128e037aa4",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | Exchange Partner resource unique identifier. |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.exchangesApi.getExchangePartner(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ExchangesApi.GetExchangePartnerError](src/resources/exchanges-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.exchangesApi.getExchangePartner(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ExchangesApi.GetExchangePartnerError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAccountExchanges(request: ExchangesApi.ListAccountExchangesRequest, options?: RequestOptions): ApiPromise&lt;undefined, ExchangesApi.ListAccountExchangesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all exchanges for your Dwolla account. Exchanges represent connections between external bank accounts and your account through open banking partners. Includes exchange status, creation date, and associated partner information.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.exchangesApi.listAccountExchanges({ accept: Accept.ApplicationVndDwollaV1HalJson });
} catch (err) {
  // TODO: Handle 'err' of type ExchangesApi.ListAccountExchangesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.exchangesApi.listAccountExchanges({
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.exchangesApi.listAccountExchanges(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ExchangesApi.ListAccountExchangesError](src/resources/exchanges-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.exchangesApi.listAccountExchanges(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ExchangesApi.ListAccountExchangesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomerExchanges(request: ExchangesApi.ListCustomerExchangesRequest, options?: RequestOptions): ApiPromise&lt;undefined, ExchangesApi.ListCustomerExchangesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all exchanges for a specific customer. Exchanges represent connections between the customer's external bank accounts and open banking partners. Includes exchange status, creation date, and links to associated funding sources and partners.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.exchangesApi.listCustomerExchanges({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type ExchangesApi.ListCustomerExchangesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.exchangesApi.listCustomerExchanges({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | The ID of the Customer to list exchanges for |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.exchangesApi.listCustomerExchanges(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ExchangesApi.ListCustomerExchangesError](src/resources/exchanges-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.exchangesApi.listCustomerExchanges(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ExchangesApi.ListCustomerExchangesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listExchangePartners(request: ExchangesApi.ListExchangePartnersRequest, options?: RequestOptions): ApiPromise&lt;undefined, ExchangesApi.ListExchangePartnersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all supported exchange partners. Each partner includes a unique ID, name, and status indicating whether they are active or inactive.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.exchangesApi.listExchangePartners({ accept: Accept.ApplicationVndDwollaV1HalJson });
} catch (err) {
  // TODO: Handle 'err' of type ExchangesApi.ListExchangePartnersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.exchangesApi.listExchangePartners({
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.exchangesApi.listExchangePartners(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ExchangesApi.ListExchangePartnersError](src/resources/exchanges-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.exchangesApi.listExchangePartners(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ExchangesApi.ListExchangePartnersError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ExchangeSessions

> Source: [ExchangeSessions](src/resources/exchange-sessions.ts)

<details>
<summary><code>createCustomerExchangeSession(request: ExchangeSessions.CreateCustomerExchangeSessionRequest, options?: RequestOptions): ApiPromise&lt;undefined, ExchangeSessions.CreateCustomerExchangeSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an exchange session for a customer. Use cases include:
- **Plaid / MX**: Instant bank account verification (open banking). For faster verification as compared to traditional micro-deposits.
- **Checkout.com**: Debit card capture for Push to Card. Create a session, then retrieve it to get `externalProviderSessionData` (payment session) for the Checkout.com Flow component.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.exchangeSessions.createCustomerExchangeSession({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type ExchangeSessions.CreateCustomerExchangeSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.exchangeSessions.createCustomerExchangeSession({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | Customer's unique identifier |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.exchangeSessions.createCustomerExchangeSession(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ExchangeSessions.CreateCustomerExchangeSessionError](src/resources/exchange-sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.exchangeSessions.createCustomerExchangeSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ExchangeSessions.CreateCustomerExchangeSessionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createReAuthExchangeSession(request: ExchangeSessions.CreateReAuthExchangeSessionRequest, options?: RequestOptions): ApiPromise&lt;undefined, ExchangeSessions.CreateReAuthExchangeSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a re-authentication exchange session to refresh a user's bank account connection when their existing authorization is no longer valid. Required when receiving an UpdateCredentials error during bank balance checks or when user re-authentication is needed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.exchangeSessions.createReAuthExchangeSession({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type ExchangeSessions.CreateReAuthExchangeSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.exchangeSessions.createReAuthExchangeSession({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | Exchange's unique identifier |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.exchangeSessions.createReAuthExchangeSession(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ExchangeSessions.CreateReAuthExchangeSessionError](src/resources/exchange-sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.exchangeSessions.createReAuthExchangeSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ExchangeSessions.CreateReAuthExchangeSessionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAvailableExchangeConnections(request: ExchangeSessions.ListAvailableExchangeConnectionsRequest, options?: RequestOptions): ApiPromise&lt;undefined, ExchangeSessions.ListAvailableExchangeConnectionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns available exchange connections for a customer's bank accounts authorized through MX Connect. Each connection includes an account name and availableConnectionToken required to create exchanges and funding sources for transfers.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.exchangeSessions.listAvailableExchangeConnections({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type ExchangeSessions.ListAvailableExchangeConnectionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.exchangeSessions.listAvailableExchangeConnections({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | Customer's unique identifier |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.exchangeSessions.listAvailableExchangeConnections(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ExchangeSessions.ListAvailableExchangeConnectionsError](src/resources/exchange-sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.exchangeSessions.listAvailableExchangeConnections(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ExchangeSessions.ListAvailableExchangeConnectionsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveCustomerExchangeSession(request: ExchangeSessions.RetrieveCustomerExchangeSessionRequest, options?: RequestOptions): ApiPromise&lt;undefined, ExchangeSessions.RetrieveCustomerExchangeSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details of a previously created exchange session. Response varies by partner:
- **MX**: `_links.external-provider-session.href` (redirect URL for verification).
- **Plaid**: `externalProviderSessionToken` (token to initialize Plaid Link).
- **Checkout.com**: `externalProviderSessionData` with `id`, `payment_session_secret`, and `payment_session_token` to initialize the Checkout.com Flow component for debit card capture (Push to Card).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.exchangeSessions.retrieveCustomerExchangeSession({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type ExchangeSessions.RetrieveCustomerExchangeSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.exchangeSessions.retrieveCustomerExchangeSession({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | Exchange session's unique identifier |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.exchangeSessions.retrieveCustomerExchangeSession(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ExchangeSessions.RetrieveCustomerExchangeSessionError](src/resources/exchange-sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.exchangeSessions.retrieveCustomerExchangeSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ExchangeSessions.RetrieveCustomerExchangeSessionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## FundingSourcesApi

> Source: [FundingSourcesApi](src/resources/funding-sources-api.ts)

<details>
<summary><code>createCustomerFundingSource(request: FundingSourcesApi.CreateCustomerFundingSourceRequest, options?: RequestOptions): ApiPromise&lt;undefined, FundingSourcesApi.CreateCustomerFundingSourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a bank account or debit card funding source for a customer. Supports multiple methods including manual entry with routing/account numbers, instant verification using existing open banking connections, debit card addition via Exchange, and virtual account numbers. Bank funding sources require verification before transfers can be initiated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.fundingSourcesApi.createCustomerFundingSource({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type FundingSourcesApi.CreateCustomerFundingSourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fundingSourcesApi.createCustomerFundingSource({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | Customer's unique identifier |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fundingSourcesApi.createCustomerFundingSource(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FundingSourcesApi.CreateCustomerFundingSourceError](src/resources/funding-sources-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fundingSourcesApi.createCustomerFundingSource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FundingSourcesApi.CreateCustomerFundingSourceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createOnDemandTransferAuthorization(request: FundingSourcesApi.CreateOnDemandTransferAuthorizationRequest, options?: RequestOptions): ApiPromise&lt;undefined, FundingSourcesApi.CreateOnDemandTransferAuthorizationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an on-demand transfer authorization that allows Customers to pre-authorize variable amount ACH transfers from their bank account for future payments. This authorization is used when creating Customer funding sources to enable flexible payment processing. Returns UI text elements including authorization body text and button text for display in your application's bank account addition flow.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.fundingSourcesApi.createOnDemandTransferAuthorization({
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type FundingSourcesApi.CreateOnDemandTransferAuthorizationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fundingSourcesApi.createOnDemandTransferAuthorization({
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fundingSourcesApi.createOnDemandTransferAuthorization(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FundingSourcesApi.CreateOnDemandTransferAuthorizationError](src/resources/funding-sources-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fundingSourcesApi.createOnDemandTransferAuthorization(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FundingSourcesApi.CreateOnDemandTransferAuthorizationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFundingSource(request: FundingSourcesApi.GetFundingSourceRequest, options?: RequestOptions): ApiPromise&lt;undefined, FundingSourcesApi.GetFundingSourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed information for a specific funding source, including its type, status, and verification details. Supports bank accounts (via Open Banking), debit card funding sources, and Dwolla balance (verified customers only). Debit card funding sources include masked card details such as brand, last four digits, expiration date, and cardholder name, along with `dateOfBirth` and `countryOfBirth` when those optional identity fields were supplied.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.fundingSourcesApi.getFundingSource({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type FundingSourcesApi.GetFundingSourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fundingSourcesApi.getFundingSource({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | Funding source unique identifier |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fundingSourcesApi.getFundingSource(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FundingSourcesApi.GetFundingSourceError](src/resources/funding-sources-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fundingSourcesApi.getFundingSource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FundingSourcesApi.GetFundingSourceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFundingSourceBalance(request: FundingSourcesApi.GetFundingSourceBalanceRequest, options?: RequestOptions): ApiPromise&lt;undefined, FundingSourcesApi.GetFundingSourceBalanceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current balance for a specific funding source. For bank accounts, includes available and closing balances; for Dwolla balance, includes balance and total amounts; for settlement accounts (bankUsageType = card-network), includes available balance only. Supports bank accounts (via Open Banking), Dwolla balance (verified customers only), and settlement accounts for card network processing.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.fundingSourcesApi.getFundingSourceBalance({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type FundingSourcesApi.GetFundingSourceBalanceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fundingSourcesApi.getFundingSourceBalance({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | ID of funding source to retrieve the balance for |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fundingSourcesApi.getFundingSourceBalance(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FundingSourcesApi.GetFundingSourceBalanceError](src/resources/funding-sources-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fundingSourcesApi.getFundingSourceBalance(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FundingSourcesApi.GetFundingSourceBalanceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMicroDeposits(request: FundingSourcesApi.GetMicroDepositsRequest, options?: RequestOptions): ApiPromise&lt;undefined, FundingSourcesApi.GetMicroDepositsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the status and details of micro-deposits for a funding source to check verification eligibility. Includes deposit status (pending, processed, failed), creation timestamp, failure details with ACH return codes if deposits failed, and ACH trace IDs for each deposit when available. Use this endpoint to determine when micro-deposits are ready for verification.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.fundingSourcesApi.getMicroDeposits({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type FundingSourcesApi.GetMicroDepositsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fundingSourcesApi.getMicroDeposits({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | The ID of the FS that previously had micro-deposits initiated |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fundingSourcesApi.getMicroDeposits(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FundingSourcesApi.GetMicroDepositsError](src/resources/funding-sources-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fundingSourcesApi.getMicroDeposits(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FundingSourcesApi.GetMicroDepositsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVanRouting(request: FundingSourcesApi.GetVanRoutingRequest, options?: RequestOptions): ApiPromise&lt;undefined, FundingSourcesApi.GetVanRoutingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the unique account and routing numbers for a Virtual Account Number (VAN) funding source. These numbers can be used by external systems to initiate ACH transactions that pull funds from or push funds to the associated Dwolla balance.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.fundingSourcesApi.getVanRouting({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type FundingSourcesApi.GetVanRoutingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fundingSourcesApi.getVanRouting({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | ID of VAN funding source to retrieve ACH details |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fundingSourcesApi.getVanRouting(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FundingSourcesApi.GetVanRoutingError](src/resources/funding-sources-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fundingSourcesApi.getVanRouting(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FundingSourcesApi.GetVanRoutingError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>initiateOrVerifyMicroDeposits(request: FundingSourcesApi.InitiateOrVerifyMicroDepositsRequest, options?: RequestOptions): ApiPromise&lt;undefined, FundingSourcesApi.InitiateOrVerifyMicroDepositsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Handles micro-deposit bank verification process. Make a request without a request body to initiate two small deposits to the customer's bank account. Include deposit amounts to verify the received values and complete verification.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.fundingSourcesApi.initiateOrVerifyMicroDeposits({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type FundingSourcesApi.InitiateOrVerifyMicroDepositsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fundingSourcesApi.initiateOrVerifyMicroDeposits({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | The ID of the FS to initiate or verify micro-deposit |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |
| <code>body?</code> | <code>[FundingSourcesMicroDepositsRequest](src/models/unions/funding-sources-micro-deposits-request.ts)</code> | Optional request body for verifying micro-deposits.<br>- If omitted: Endpoint will initiate micro-deposits<br>- If provided: Must contain micro-deposit amounts for verification |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fundingSourcesApi.initiateOrVerifyMicroDeposits(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FundingSourcesApi.InitiateOrVerifyMicroDepositsError](src/resources/funding-sources-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fundingSourcesApi.initiateOrVerifyMicroDeposits(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FundingSourcesApi.InitiateOrVerifyMicroDepositsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomerFundingSources(request: FundingSourcesApi.ListCustomerFundingSourcesRequest, options?: RequestOptions): ApiPromise&lt;undefined, FundingSourcesApi.ListCustomerFundingSourcesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all funding sources for a customer, including bank accounts, debit card funding sources, and Dwolla balance (verified customers only). Shows verification status, limited account details, and creation dates. Card funding sources include masked card information. Supports filtering to exclude removed funding sources using the removed parameter.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.fundingSourcesApi.listCustomerFundingSources({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type FundingSourcesApi.ListCustomerFundingSourcesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fundingSourcesApi.listCustomerFundingSources({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | Customer's unique identifier |
| <code>removed?</code> | <code>string</code> | Filter removed funding sources. Boolean value. Defaults to `true` |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fundingSourcesApi.listCustomerFundingSources(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FundingSourcesApi.ListCustomerFundingSourcesError](src/resources/funding-sources-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fundingSourcesApi.listCustomerFundingSources(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FundingSourcesApi.ListCustomerFundingSourcesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateOrRemoveFundingSource(request: FundingSourcesApi.UpdateOrRemoveFundingSourceRequest, options?: RequestOptions): ApiPromise&lt;undefined, FundingSourcesApi.UpdateOrRemoveFundingSourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a bank or debit card funding source's details, or soft deletes it.

For **bank** funding sources you can change the name (any status), or modify routing/account
numbers and account type (unverified status only).

For **debit card** funding sources you can change the name and any field within `cardDetails`,
including the optional cardholder identity fields `dateOfBirth`, `countryOfBirth`, and
`identification`. This is how you add or update those identity values on a card funding source
that already exists.

You must provide at least one updateable field. Bank funding sources cannot be updated with
card fields, and card funding sources cannot be updated with bank fields.

When removing, the funding source is soft deleted and can still be accessed but marked as removed.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.fundingSourcesApi.updateOrRemoveFundingSource({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
    body: { name: "some example string" },
  });
} catch (err) {
  // TODO: Handle 'err' of type FundingSourcesApi.UpdateOrRemoveFundingSourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fundingSourcesApi.updateOrRemoveFundingSource({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
  body: { name: "some example string" },
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
| <code>id</code> | <code>string</code> | Funding source unique identifier |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |
| <code>body</code> | <code>[FundingSourcesRequest](src/models/unions/funding-sources-request.ts)</code> | Parameters to update a customer funding source |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fundingSourcesApi.updateOrRemoveFundingSource(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FundingSourcesApi.UpdateOrRemoveFundingSourceError](src/resources/funding-sources-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fundingSourcesApi.updateOrRemoveFundingSource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FundingSourcesApi.UpdateOrRemoveFundingSourceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TransfersApi

> Source: [TransfersApi](src/resources/transfers-api.ts)

<details>
<summary><code>cancelTransfer(request: TransfersApi.CancelTransferRequest, options?: RequestOptions): ApiPromise&lt;undefined, TransfersApi.CancelTransferError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel a pending transfer by setting its status to cancelled. Only transfers in pending status can be cancelled before processing begins. Returns the updated transfer resource with cancelled status. Use this endpoint to stop a bank transfer from further processing.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.transfersApi.cancelTransfer({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
    body: {},
  });
} catch (err) {
  // TODO: Handle 'err' of type TransfersApi.CancelTransferError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transfersApi.cancelTransfer({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | ID of transfer |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |
| <code>body</code> | <code>[TransfersRequest1](src/models/transfers-request1.ts)</code> | Parameters to cancel a transfer |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transfersApi.cancelTransfer(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[TransfersApi.CancelTransferError](src/resources/transfers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transfersApi.cancelTransfer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, TransfersApi.CancelTransferError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTransfer(request: TransfersApi.GetTransferRequest, options?: RequestOptions): ApiPromise&lt;undefined, TransfersApi.GetTransferError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve detailed information for a specific transfer by its unique identifier belonging to an Account or Customer. Returns transfer status, amount, creation date, clearing details, and links to source and destination funding sources for complete transaction tracking. Includes cancellation links when applicable and references to related funding transfers. Essential for monitoring transfer lifecycle and transaction reconciliation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.transfersApi.getTransfer({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type TransfersApi.GetTransferError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transfersApi.getTransfer({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | ID of transfer to be retrieved |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transfersApi.getTransfer(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[TransfersApi.GetTransferError](src/resources/transfers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transfersApi.getTransfer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, TransfersApi.GetTransferError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTransferFailureReason(request: TransfersApi.GetTransferFailureReasonRequest, options?: RequestOptions): ApiPromise&lt;undefined, TransfersApi.GetTransferFailureReasonError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve detailed failure information for a failed bank or VAN transfer including the ACH return code, description, and explanation. Returns failure details with links to the failed funding source and associated Customer for comprehensive error analysis. Available only for transfers with failure status and accessed through the failure link from transfer retrieval. Critical for troubleshooting payment failures and understanding ACH return reasons.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.transfersApi.getTransferFailureReason({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type TransfersApi.GetTransferFailureReasonError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transfersApi.getTransferFailureReason({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | Transfer unique identifier |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transfersApi.getTransferFailureReason(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[TransfersApi.GetTransferFailureReasonError](src/resources/transfers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transfersApi.getTransferFailureReason(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, TransfersApi.GetTransferFailureReasonError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>initiateTransfer(request: TransfersApi.InitiateTransferRequest, options?: RequestOptions): ApiPromise&lt;undefined, TransfersApi.InitiateTransferError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiate a transfer between funding sources from a Dwolla Account or API Customer resource. Supports ACH, Instant Payments (RTP/FedNow), Push-to-Debit Card, and wire transfers with optional expedited clearing, facilitator fees, metadata, and correlation IDs for enhanced traceability. Includes idempotency key support to prevent duplicate transfers and extensive customization options for addenda records and processing channels. Returns the location of the created transfer resource for tracking and management.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.transfersApi.initiateTransfer({
    accept: Accept.ApplicationVndDwollaV1HalJson,
    idempotencyKey: "19051a62-3403-11e6-ac61-9e71128cae77",
    body: { links: {}, amount: { value: "some example string", currency: "some example string" } },
  });
} catch (err) {
  // TODO: Handle 'err' of type TransfersApi.InitiateTransferError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transfersApi.initiateTransfer({
  accept: Accept.ApplicationVndDwollaV1HalJson,
  idempotencyKey: "19051a62-3403-11e6-ac61-9e71128cae77",
  body: { links: {}, amount: { value: "some example string", currency: "some example string" } },
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
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |
| <code>idempotencyKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[TransfersRequest](src/models/transfers-request.ts)</code> | Parameters to initiate a transfer |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transfersApi.initiateTransfer(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[TransfersApi.InitiateTransferError](src/resources/transfers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transfersApi.initiateTransfer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, TransfersApi.InitiateTransferError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomerTransfers(request: TransfersApi.ListCustomerTransfersRequest, options?: RequestOptions): ApiPromise&lt;undefined, TransfersApi.ListCustomerTransfersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve and search transfers for a specific Customer with comprehensive filtering and pagination support. Supports searching by customer details (name, email, business name), amount ranges, date ranges, transfer status, and correlation IDs for enhanced transaction discovery. Returns paginated transfer results including status, amounts, metadata, and links to source and destination funding sources. Use this endpoint for transaction history analysis and reconciliation purposes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.transfersApi.listCustomerTransfers({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type TransfersApi.ListCustomerTransfersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transfersApi.listCustomerTransfers({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | Customer's unique identifier |
| <code>search?</code> | <code>string</code> | A string to search on fields `firstName`, `lastName`, `email`, `businessName` |
| <code>startAmount?</code> | <code>string</code> | Only include transactions with an amount equal to or greater than `startAmount` |
| <code>endAmount?</code> | <code>string</code> | Only include transactions with an amount equal to or less than `endAmount` |
| <code>startDate?</code> | <code>string</code> | Only include transactions created after this date. ISO-8601 format `YYYY-MM-DD` |
| <code>endDate?</code> | <code>string</code> | Only include transactions created before this date. ISO-8601 format `YYYY-MM-DD` |
| <code>status?</code> | <code>string</code> | Filter on transaction status. Possible values are `pending`, `processed`, `failed`, or `cancelled` |
| <code>correlationId?</code> | <code>string</code> | A string value to search on if `correlationId` was specified for a transaction |
| <code>limit?</code> | <code>string</code> | Number of search results to return. Defaults to 25 |
| <code>offset?</code> | <code>string</code> | Number of search results to skip. Use for pagination |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transfersApi.listCustomerTransfers(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[TransfersApi.ListCustomerTransfersError](src/resources/transfers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transfersApi.listCustomerTransfers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, TransfersApi.ListCustomerTransfersError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTransferFees(request: TransfersApi.ListTransferFeesRequest, options?: RequestOptions): ApiPromise&lt;undefined, TransfersApi.ListTransferFeesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve detailed fee information for a specific transfer by its unique identifier. Returns the total number of fees and individual fee transaction details including amounts, status, and links to source and destination accounts.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.transfersApi.listTransferFees({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type TransfersApi.ListTransferFeesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transfersApi.listTransferFees({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | ID of transfer to retrieve fees for |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transfersApi.listTransferFees(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[TransfersApi.ListTransferFeesError](src/resources/transfers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transfersApi.listTransferFees(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, TransfersApi.ListTransferFeesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## LabelsApi

> Source: [LabelsApi](src/resources/labels-api.ts)

<details>
<summary><code>createCustomerLabel(request: LabelsApi.CreateCustomerLabelRequest, options?: RequestOptions): ApiPromise&lt;undefined, LabelsApi.CreateCustomerLabelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new label for a Verified Customer with a specified amount. Labels help organize and track funds within a customer's balance. Returns the location of the created label resource in the response header.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.labelsApi.createCustomerLabel({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
    body: { amount: {} },
  });
} catch (err) {
  // TODO: Handle 'err' of type LabelsApi.CreateCustomerLabelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labelsApi.createCustomerLabel({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
  body: { amount: {} },
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
| <code>id</code> | <code>string</code> | ID of customer to create a label for |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |
| <code>body</code> | <code>[CustomersLabelsRequest](src/models/customers-labels-request.ts)</code> | Parameters to create a customer label |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labelsApi.createCustomerLabel(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[LabelsApi.CreateCustomerLabelError](src/resources/labels-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.labelsApi.createCustomerLabel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, LabelsApi.CreateCustomerLabelError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createLabelLedgerEntry(request: LabelsApi.CreateLabelLedgerEntryRequest, options?: RequestOptions): ApiPromise&lt;undefined, LabelsApi.CreateLabelLedgerEntryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new ledger entry to track fund adjustments on a Label by specifying a positive or negative amount value. Returns the location of the created ledger entry in the response header. Label amounts cannot go negative, so validation errors occur if the entry would result in a negative Label balance.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.labelsApi.createLabelLedgerEntry({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
    body: { amount: { value: "some example string", currency: "some example string" } },
  });
} catch (err) {
  // TODO: Handle 'err' of type LabelsApi.CreateLabelLedgerEntryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labelsApi.createLabelLedgerEntry({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
  body: { amount: { value: "some example string", currency: "some example string" } },
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
| <code>id</code> | <code>string</code> | The Id of the Label to update. |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |
| <code>body</code> | <code>[LabelsLedgerEntriesRequest](src/models/labels-ledger-entries-request.ts)</code> | Parameters to create a label ledger entry |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labelsApi.createLabelLedgerEntry(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[LabelsApi.CreateLabelLedgerEntryError](src/resources/labels-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.labelsApi.createLabelLedgerEntry(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, LabelsApi.CreateLabelLedgerEntryError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createLabelReallocation(request: LabelsApi.CreateLabelReallocationRequest, options?: RequestOptions): ApiPromise&lt;undefined, LabelsApi.CreateLabelReallocationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reallocates funds between two labels belonging to the same Verified Customer. Moves the specified amount from the source label to the destination label, creating ledger entries for both. The reallocation only succeeds if the source label has sufficient funds.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.labelsApi.createLabelReallocation({
    accept: Accept.ApplicationVndDwollaV1HalJson,
    body: { links: {}, amount: {} },
  });
} catch (err) {
  // TODO: Handle 'err' of type LabelsApi.CreateLabelReallocationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labelsApi.createLabelReallocation({
  accept: Accept.ApplicationVndDwollaV1HalJson,
  body: { links: {}, amount: {} },
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
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |
| <code>body</code> | <code>[LabelReallocationsRequest](src/models/label-reallocations-request.ts)</code> | Parameters to create a label reallocation |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labelsApi.createLabelReallocation(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[LabelsApi.CreateLabelReallocationError](src/resources/labels-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.labelsApi.createLabelReallocation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, LabelsApi.CreateLabelReallocationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLabel(request: LabelsApi.GetLabelRequest, options?: RequestOptions): ApiPromise&lt;undefined, LabelsApi.GetLabelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve details for a specific Label used to categorize and track funds within your account. Returns Label information including unique identifier, current amount with currency, and creation timestamp.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.labelsApi.getLabel({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type LabelsApi.GetLabelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labelsApi.getLabel({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | Label unique identifier |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labelsApi.getLabel(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[LabelsApi.GetLabelError](src/resources/labels-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.labelsApi.getLabel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, LabelsApi.GetLabelError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLabelLedgerEntry(request: LabelsApi.GetLabelLedgerEntryRequest, options?: RequestOptions): ApiPromise&lt;undefined, LabelsApi.GetLabelLedgerEntryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed information for a specific ledger entry on a Label, including its amount, currency, and creation timestamp.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.labelsApi.getLabelLedgerEntry({
    ledgerEntryId: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type LabelsApi.GetLabelLedgerEntryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labelsApi.getLabelLedgerEntry({
  ledgerEntryId: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>ledgerEntryId</code> | <code>string</code> | A label ledger entry unique identifier |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labelsApi.getLabelLedgerEntry(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[LabelsApi.GetLabelLedgerEntryError](src/resources/labels-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.labelsApi.getLabelLedgerEntry(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, LabelsApi.GetLabelLedgerEntryError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomerLabels(request: LabelsApi.ListCustomerLabelsRequest, options?: RequestOptions): ApiPromise&lt;undefined, LabelsApi.ListCustomerLabelsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all labels for a specified Verified Customer, sorted by creation date (most recent first). Supports pagination with limit and offset parameters. Each label includes its current amount and creation timestamp.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.labelsApi.listCustomerLabels({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type LabelsApi.ListCustomerLabelsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labelsApi.listCustomerLabels({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | ID of customer |
| <code>limit?</code> | <code>string</code> | How many results to return |
| <code>offset?</code> | <code>string</code> | How many results to skip |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labelsApi.listCustomerLabels(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[LabelsApi.ListCustomerLabelsError](src/resources/labels-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.labelsApi.listCustomerLabels(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, LabelsApi.ListCustomerLabelsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listLabelLedgerEntries(request: LabelsApi.ListLabelLedgerEntriesRequest, options?: RequestOptions): ApiPromise&lt;undefined, LabelsApi.ListLabelLedgerEntriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all ledger entries for a specific Label, sorted by creation date (newest first). Supports pagination with limit and offset parameters. Each ledger entry includes its amount, currency, and creation timestamp.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.labelsApi.listLabelLedgerEntries({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type LabelsApi.ListLabelLedgerEntriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labelsApi.listLabelLedgerEntries({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | A label unique identifier |
| <code>limit?</code> | <code>number</code> | How many results to return |
| <code>offset?</code> | <code>number</code> | How many results to skip |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labelsApi.listLabelLedgerEntries(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[LabelsApi.ListLabelLedgerEntriesError](src/resources/labels-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.labelsApi.listLabelLedgerEntries(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, LabelsApi.ListLabelLedgerEntriesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeLabel(request: LabelsApi.RemoveLabelRequest, options?: RequestOptions): ApiPromise&lt;undefined, LabelsApi.RemoveLabelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a Label to stop tracking funds and remove it from your account. Returns success status if the Label is successfully removed. Use this to streamline your account management and remove unused Labels from your system.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.labelsApi.removeLabel({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type LabelsApi.RemoveLabelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labelsApi.removeLabel({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | A label unique identifier |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labelsApi.removeLabel(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[LabelsApi.RemoveLabelError](src/resources/labels-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.labelsApi.removeLabel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, LabelsApi.RemoveLabelError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveLabelReallocation(request: LabelsApi.RetrieveLabelReallocationRequest, options?: RequestOptions): ApiPromise&lt;undefined, LabelsApi.RetrieveLabelReallocationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve details for a specific label reallocation that transfers funds between Labels. Returns reallocation information including source and destination Labels, amount transferred, status, and creation timestamp. Use this to track and audit fund movements between different Labels.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.labelsApi.retrieveLabelReallocation({
    reallocationId: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type LabelsApi.RetrieveLabelReallocationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labelsApi.retrieveLabelReallocation({
  reallocationId: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>reallocationId</code> | <code>string</code> | Label reallocation unique identifier |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labelsApi.retrieveLabelReallocation(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[LabelsApi.RetrieveLabelReallocationError](src/resources/labels-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.labelsApi.retrieveLabelReallocation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, LabelsApi.RetrieveLabelReallocationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## MassPaymentsApi

> Source: [MassPaymentsApi](src/resources/mass-payments-api.ts)

<details>
<summary><code>getMassPayment(request: MassPaymentsApi.GetMassPaymentRequest, options?: RequestOptions): ApiPromise&lt;undefined, MassPaymentsApi.GetMassPaymentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve detailed information for a mass payment by its unique identifier. Returns the current processing status (pending, processing, or complete), creation date, metadata, and links to the source funding source and payment items. Use this endpoint to monitor mass payment processing progress and determine when to check individual item results.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.massPaymentsApi.getMassPayment({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type MassPaymentsApi.GetMassPaymentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.massPaymentsApi.getMassPayment({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | Mass payment unique identifier |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.massPaymentsApi.getMassPayment(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MassPaymentsApi.GetMassPaymentError](src/resources/mass-payments-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.massPaymentsApi.getMassPayment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MassPaymentsApi.GetMassPaymentError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMassPaymentItem(request: MassPaymentsApi.GetMassPaymentItemRequest, options?: RequestOptions): ApiPromise&lt;undefined, MassPaymentsApi.GetMassPaymentItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve detailed information for a specific mass payment item by its unique identifier. Returns item status, amount, metadata, and links to the parent mass payment, associated transfer, and destination funding source. Use this endpoint to check the processing status and details of an individual item within a mass payment batch.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.massPaymentsApi.getMassPaymentItem({
    itemId: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type MassPaymentsApi.GetMassPaymentItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.massPaymentsApi.getMassPaymentItem({
  itemId: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>itemId</code> | <code>string</code> | ID of item to be retrieved in mass payment |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.massPaymentsApi.getMassPaymentItem(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MassPaymentsApi.GetMassPaymentItemError](src/resources/mass-payments-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.massPaymentsApi.getMassPaymentItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MassPaymentsApi.GetMassPaymentItemError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>initiateMassPayment(request: MassPaymentsApi.InitiateMassPaymentRequest, options?: RequestOptions): ApiPromise&lt;undefined, MassPaymentsApi.InitiateMassPaymentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a mass payment containing up to 5,000 individual payment items from a Dwolla Main Account or Verified Customer funding source. Supports optional metadata, correlation IDs for traceability, deferred processing, and expedited transfer options including same-day ACH clearing. Returns the location of the created mass payment resource with a unique identifier for tracking and management.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.massPaymentsApi.initiateMassPayment({
    accept: Accept.ApplicationVndDwollaV1HalJson,
    idempotencyKey: "19051a62-3403-11e6-ac61-9e71128cae77",
    body: { links: {}, items: [{}] },
  });
} catch (err) {
  // TODO: Handle 'err' of type MassPaymentsApi.InitiateMassPaymentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.massPaymentsApi.initiateMassPayment({
  accept: Accept.ApplicationVndDwollaV1HalJson,
  idempotencyKey: "19051a62-3403-11e6-ac61-9e71128cae77",
  body: { links: {}, items: [{}] },
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
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |
| <code>idempotencyKey?</code> | <code>string</code> | - |
| <code>body</code> | <code>[MassPaymentsRequest](src/models/mass-payments-request.ts)</code> | Parameters for initiating a mass payment |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.massPaymentsApi.initiateMassPayment(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MassPaymentsApi.InitiateMassPaymentError](src/resources/mass-payments-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.massPaymentsApi.initiateMassPayment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MassPaymentsApi.InitiateMassPaymentError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomerMassPayments(request: MassPaymentsApi.ListCustomerMassPaymentsRequest, options?: RequestOptions): ApiPromise&lt;undefined, MassPaymentsApi.ListCustomerMassPaymentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all previously created mass payments for a Verified Customer account with optional correlation ID filtering and pagination support. Mass payments are returned ordered by date created with most recent appearing first. Returns paginated results including mass payment status, metadata, source funding information, and item links. Supports standard pagination parameters and correlation ID search for enhanced traceability.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.massPaymentsApi.listCustomerMassPayments({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type MassPaymentsApi.ListCustomerMassPaymentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.massPaymentsApi.listCustomerMassPayments({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | Customer ID to get mass payments for |
| <code>correlationId?</code> | <code>string</code> | A string value to search on if `correlationId` was specified for a transaction |
| <code>limit?</code> | <code>number</code> | Number of search results to return. Defaults to 25 |
| <code>offset?</code> | <code>number</code> | Number of search results to skip. Use for pagination |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.massPaymentsApi.listCustomerMassPayments(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MassPaymentsApi.ListCustomerMassPaymentsError](src/resources/mass-payments-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.massPaymentsApi.listCustomerMassPayments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MassPaymentsApi.ListCustomerMassPaymentsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMassPaymentItems(request: MassPaymentsApi.ListMassPaymentItemsRequest, options?: RequestOptions): ApiPromise&lt;undefined, MassPaymentsApi.ListMassPaymentItemsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve individual payment items within a mass payment with optional status filtering and pagination support. Each item represents a distinct payment with status indicators (failed, pending, success) showing whether a transfer was successfully created. Returns paginated item details including amount, destination, metadata, and error information for failed items. Supports filtering by status and standard pagination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.massPaymentsApi.listMassPaymentItems({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type MassPaymentsApi.ListMassPaymentItemsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.massPaymentsApi.listMassPaymentItems({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | Mass payment unique identifier |
| <code>limit?</code> | <code>string</code> | How many results to return |
| <code>offset?</code> | <code>string</code> | How many results to skip |
| <code>status?</code> | <code>string</code> | Filter by item status |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.massPaymentsApi.listMassPaymentItems(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MassPaymentsApi.ListMassPaymentItemsError](src/resources/mass-payments-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.massPaymentsApi.listMassPaymentItems(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MassPaymentsApi.ListMassPaymentItemsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateMassPayment(request: MassPaymentsApi.UpdateMassPaymentRequest, options?: RequestOptions): ApiPromise&lt;undefined, MassPaymentsApi.UpdateMassPaymentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the status of a deferred mass payment to control its processing lifecycle. Set status to `pending` to trigger processing and begin fund transfers, or `cancelled` to permanently cancel the mass payment before processing begins. Only applies to mass payments created with deferred status. Returns the updated mass payment resource with the new status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.massPaymentsApi.updateMassPayment({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
    body: { status: "some example string" },
  });
} catch (err) {
  // TODO: Handle 'err' of type MassPaymentsApi.UpdateMassPaymentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.massPaymentsApi.updateMassPayment({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
  body: { status: "some example string" },
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
| <code>id</code> | <code>string</code> | ID of mass payment to update |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |
| <code>body</code> | <code>[MassPaymentsRequest1](src/models/mass-payments-request1.ts)</code> | Parameters for updating a mass payment |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.massPaymentsApi.updateMassPayment(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MassPaymentsApi.UpdateMassPaymentError](src/resources/mass-payments-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.massPaymentsApi.updateMassPayment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MassPaymentsApi.UpdateMassPaymentError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## EventsApi

> Source: [EventsApi](src/resources/events-api.ts)

<details>
<summary><code>getEvent(request: EventsApi.GetEventRequest, options?: RequestOptions): ApiPromise&lt;undefined, EventsApi.GetEventError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed information for a specific event representing a state change that occurred on a resource in your Dwolla application. Includes the event topic, timestamp, resource links, and correlation ID if applicable.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.eventsApi.getEvent({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type EventsApi.GetEventError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.eventsApi.getEvent({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | ID of application event to get |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventsApi.getEvent(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[EventsApi.GetEventError](src/resources/events-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventsApi.getEvent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, EventsApi.GetEventError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEvents(request: EventsApi.ListEventsRequest, options?: RequestOptions): ApiPromise&lt;undefined, EventsApi.ListEventsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of events representing state changes to resources in your Dwolla application. Events track actions on customers, transfers, funding sources, and other resources, sorted by creation date (newest first). Events are retained for 30 days and are essential for webhook notifications and system activity monitoring.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.eventsApi.listEvents({ accept: Accept.ApplicationVndDwollaV1HalJson });
} catch (err) {
  // TODO: Handle 'err' of type EventsApi.ListEventsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.eventsApi.listEvents({
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>limit?</code> | <code>number</code> | How many results to return |
| <code>offset?</code> | <code>number</code> | How many results to skip |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventsApi.listEvents(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[EventsApi.ListEventsError](src/resources/events-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventsApi.listEvents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, EventsApi.ListEventsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## WebhookSubscriptions

> Source: [WebhookSubscriptions](src/resources/webhook-subscriptions.ts)

<details>
<summary><code>createWebhookSubscription(request: WebhookSubscriptions.CreateWebhookSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;undefined, WebhookSubscriptions.CreateWebhookSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a webhook subscription to deliver webhook notifications to a specified URL endpoint for your application. Requires a destination URL where Dwolla will send notifications and a secret key for webhook validation and security. Returns the location of the created subscription resource. Essential for establishing real-time event notifications and automated integrations with Dwolla's payment processing events.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.webhookSubscriptions.createWebhookSubscription({
    accept: Accept.ApplicationVndDwollaV1HalJson,
    body: { url: "some example string", secret: "some example string" },
  });
} catch (err) {
  // TODO: Handle 'err' of type WebhookSubscriptions.CreateWebhookSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhookSubscriptions.createWebhookSubscription({
  accept: Accept.ApplicationVndDwollaV1HalJson,
  body: { url: "some example string", secret: "some example string" },
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
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |
| <code>body</code> | <code>[WebhookSubscriptionsRequest](src/models/webhook-subscriptions-request.ts)</code> | Parameters to create a webhook subscriptions |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhookSubscriptions.createWebhookSubscription(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[WebhookSubscriptions.CreateWebhookSubscriptionError](src/resources/webhook-subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhookSubscriptions.createWebhookSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, WebhookSubscriptions.CreateWebhookSubscriptionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>delete(request: WebhookSubscriptions.DeleteRequest, options?: RequestOptions): ApiPromise&lt;undefined, WebhookSubscriptions.DeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a webhook subscription to permanently remove webhook notifications for your application. This action stops all future webhook deliveries and cannot be undone. Returns the deleted subscription resource for confirmation. Use this endpoint when webhook notifications are no longer needed or when cleaning up unused subscriptions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.webhookSubscriptions.delete({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type WebhookSubscriptions.DeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhookSubscriptions.delete({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | Webhook unique identifier |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhookSubscriptions.delete(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[WebhookSubscriptions.DeleteError](src/resources/webhook-subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhookSubscriptions.delete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, WebhookSubscriptions.DeleteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWebhookSubscription(request: WebhookSubscriptions.GetWebhookSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;undefined, WebhookSubscriptions.GetWebhookSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve detailed information for a specific webhook subscription by its unique identifier. Returns subscription configuration including URL endpoint, creation date, and links to associated webhooks for comprehensive subscription management. Essential for monitoring webhook subscription status and accessing webhook delivery history.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.webhookSubscriptions.getWebhookSubscription({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type WebhookSubscriptions.GetWebhookSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhookSubscriptions.getWebhookSubscription({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | Webhook subscription unique identifier |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhookSubscriptions.getWebhookSubscription(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[WebhookSubscriptions.GetWebhookSubscriptionError](src/resources/webhook-subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhookSubscriptions.getWebhookSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, WebhookSubscriptions.GetWebhookSubscriptionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWebhookSubscriptions(request: WebhookSubscriptions.ListWebhookSubscriptionsRequest, options?: RequestOptions): ApiPromise&lt;undefined, WebhookSubscriptions.ListWebhookSubscriptionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all webhook subscriptions that belong to an application including their configuration details and status. Returns subscription details including webhook endpoints, status, creation dates, and links to associated webhooks with total count. Essential for webhook management and monitoring subscription health.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.webhookSubscriptions.listWebhookSubscriptions({
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type WebhookSubscriptions.ListWebhookSubscriptionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhookSubscriptions.listWebhookSubscriptions({
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhookSubscriptions.listWebhookSubscriptions(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[WebhookSubscriptions.ListWebhookSubscriptionsError](src/resources/webhook-subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhookSubscriptions.listWebhookSubscriptions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, WebhookSubscriptions.ListWebhookSubscriptionsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWebhooks(request: WebhookSubscriptions.ListWebhooksRequest, options?: RequestOptions): ApiPromise&lt;undefined, WebhookSubscriptions.ListWebhooksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all fired webhooks for a specific webhook subscription with comprehensive filtering and pagination support. Returns webhook delivery history including topics, attempts, request/response details, and delivery status over a rolling 30-day period. Supports filtering by resource ID, date ranges, and pagination parameters for detailed webhook delivery analysis. Critical for debugging webhook delivery issues and monitoring event notification success rates.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.webhookSubscriptions.listWebhooks({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type WebhookSubscriptions.ListWebhooksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhookSubscriptions.listWebhooks({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | Webhook subscription unique identifier |
| <code>limit?</code> | <code>string</code> | How many results to return |
| <code>offset?</code> | <code>string</code> | How many results to skip |
| <code>startDate?</code> | <code>string</code> | Only include webhooks created after this date. ISO-8601 format `YYYY-MM-DD` |
| <code>endDate?</code> | <code>string</code> | Only include webhooks created before this date. ISO-8601 format `YYYY-MM-DD` |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhookSubscriptions.listWebhooks(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[WebhookSubscriptions.ListWebhooksError](src/resources/webhook-subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhookSubscriptions.listWebhooks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, WebhookSubscriptions.ListWebhooksError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateWebhookSubscription(request: WebhookSubscriptions.UpdateWebhookSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;undefined, WebhookSubscriptions.UpdateWebhookSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a webhook subscription to pause or resume webhook delivery notifications. Allows toggling the paused status to temporarily stop webhook notifications without deleting the subscription. Returns the updated subscription resource with the new paused status. Use this endpoint to manage webhook delivery during maintenance or troubleshooting periods.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.webhookSubscriptions.updateWebhookSubscription({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
    body: { paused: true },
  });
} catch (err) {
  // TODO: Handle 'err' of type WebhookSubscriptions.UpdateWebhookSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhookSubscriptions.updateWebhookSubscription({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
  body: { paused: true },
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
| <code>id</code> | <code>string</code> | Webhook unique identifier |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |
| <code>body</code> | <code>[WebhookSubscriptionsRequest1](src/models/webhook-subscriptions-request1.ts)</code> | Parameters to update a webhook subscription |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhookSubscriptions.updateWebhookSubscription(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[WebhookSubscriptions.UpdateWebhookSubscriptionError](src/resources/webhook-subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhookSubscriptions.updateWebhookSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, WebhookSubscriptions.UpdateWebhookSubscriptionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](src/resources/webhooks-api.ts)

<details>
<summary><code>getWebhook(request: WebhooksApi.GetWebhookRequest, options?: RequestOptions): ApiPromise&lt;undefined, WebhooksApi.GetWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve detailed information for a specific webhook by its unique identifier including delivery attempts and response data. Returns webhook details with topic, account information, delivery attempts containing request/response history, and links to subscription and retry resources. Essential for debugging webhook delivery issues, analyzing response data, and monitoring notification processing status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.webhooksApi.getWebhook({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type WebhooksApi.GetWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooksApi.getWebhook({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | Webhook unique identifier |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooksApi.getWebhook(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[WebhooksApi.GetWebhookError](src/resources/webhooks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooksApi.getWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, WebhooksApi.GetWebhookError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWebhookRetries(request: WebhooksApi.ListWebhookRetriesRequest, options?: RequestOptions): ApiPromise&lt;undefined, WebhooksApi.ListWebhookRetriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all retry attempts for a specific webhook including timestamps and delivery details. Returns a list of retry attempts with unique identifiers, timestamps, and links to the parent webhook with total count. Essential for tracking webhook delivery failures, analyzing retry patterns, and debugging webhook notification issues to ensure reliable event processing.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.webhooksApi.listWebhookRetries({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type WebhooksApi.ListWebhookRetriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooksApi.listWebhookRetries({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | Webhook unique identifier |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooksApi.listWebhookRetries(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[WebhooksApi.ListWebhookRetriesError](src/resources/webhooks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooksApi.listWebhookRetries(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, WebhooksApi.ListWebhookRetriesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retryWebhook(request: WebhooksApi.RetryWebhookRequest, options?: RequestOptions): ApiPromise&lt;undefined, WebhooksApi.RetryWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retry a webhook by its unique identifier to redeliver the notification to your endpoint. Creates a new retry attempt and returns the location of the new webhook resource. Essential for recovering from webhook delivery failures and ensuring reliable event notification processing in your application.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.webhooksApi.retryWebhook({
    id: "some example string",
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type WebhooksApi.RetryWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooksApi.retryWebhook({
  id: "some example string",
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>id</code> | <code>string</code> | Webhook unique identifier |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooksApi.retryWebhook(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[WebhooksApi.RetryWebhookError](src/resources/webhooks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooksApi.retryWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, WebhooksApi.RetryWebhookError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ClientTokens

> Source: [ClientTokens](src/resources/client-tokens.ts)

<details>
<summary><code>createClientToken(request: ClientTokens.CreateClientTokenRequest, options?: RequestOptions): ApiPromise&lt;undefined, ClientTokens.CreateClientTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a client token for secure authentication within Dwolla Drop-in components. Requires a granular permission action and a Customer link to define what operations the end user can perform within the component. Returns a short-lived token for configuring client-side Drop-in components including customer creation, verification, funding source management, and payment processing. Essential for implementing secure, embeddable UI components without exposing application credentials to the frontend.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.clientTokens.createClientToken({
    accept: Accept.ApplicationVndDwollaV1HalJson,
    body: { action: "some example string", links: { customer: { href: "https://example.com" } } },
  });
} catch (err) {
  // TODO: Handle 'err' of type ClientTokens.CreateClientTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientTokens.createClientToken({
  accept: Accept.ApplicationVndDwollaV1HalJson,
  body: { action: "some example string", links: { customer: { href: "https://example.com" } } },
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
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |
| <code>body</code> | <code>[ClientTokensRequest](src/models/client-tokens-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clientTokens.createClientToken(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ClientTokens.CreateClientTokenError](src/resources/client-tokens.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientTokens.createClientToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ClientTokens.CreateClientTokenError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SandboxSimulations

> Source: [SandboxSimulations](src/resources/sandbox-simulations.ts)

<details>
<summary><code>simulateBankTransferProcessing(request: SandboxSimulations.SimulateBankTransferProcessingRequest, options?: RequestOptions): ApiPromise&lt;undefined, SandboxSimulations.SimulateBankTransferProcessingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sandbox-only endpoint with three modes:

**Simulate bank transfer processing** — Omit the body or send an empty JSON object. Processes or fails
the last 500 bank transfers on the authorized application or Sandbox account (and initiated micro-deposits).
If webhooks are configured, events are delivered. If a bank-to-bank transaction involves two users,
call this twice to process debit and credit sides. Returns **200** with a HAL document including `total`.

**Simulate VAN (virtual) transfers** — Send a JSON body with `type` set to `virtual` and a `transfers`
array (up to 10 items). External transfers are created and processed immediately. Returns **202 Accepted**.

**Simulate verification directives** — For a business Verified Customer in **`retry`** or **`document`**
status, send `type`: `customer-verification`, `_links.customer.href` pointing at that customer, and
`errorCode` set to one of: `PersonalIDRequired`, `POBoxNotAllowed`, `AddressNotAssociatedWithBusiness`,
`EINDocumentRequired`. Returns **200** with HAL `_links.self` and `errorCode`. Then **GET** the Customer;
the same code appears in `_embedded.errors` for end-to-end testing.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.sandboxSimulations.simulateBankTransferProcessing({
    accept: Accept.ApplicationVndDwollaV1HalJson,
  });
} catch (err) {
  // TODO: Handle 'err' of type SandboxSimulations.SimulateBankTransferProcessingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sandboxSimulations.simulateBankTransferProcessing({
  accept: Accept.ApplicationVndDwollaV1HalJson,
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
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The media type of the response. Must be application/vnd.dwolla.v1.hal+json<br>**Default**: "application/vnd.dwolla.v1.hal+json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sandboxSimulations.simulateBankTransferProcessing(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SandboxSimulations.SimulateBankTransferProcessingError](src/resources/sandbox-simulations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sandboxSimulations.simulateBankTransferProcessing(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SandboxSimulations.SimulateBankTransferProcessingError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DwollaApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

