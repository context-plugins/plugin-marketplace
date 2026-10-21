# Reference

> Source: [MollieApiClient](src/client.ts)

## AccountsApi

> Source: [AccountsApi](src/resources/accounts-api.ts)

<details>
<summary><code>getBusinessAccount(request: AccountsApi.GetBusinessAccountRequest, options?: RequestOptions): ApiPromise&lt;undefined, AccountsApi.GetBusinessAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

> 🔒 Restricted access
>
> This API is currently only available to Mollie's authorized partners via OAuth. Direct access for individual businesses isn't available yet, but it's on our roadmap — check back here for updates.

Retrieve a single business account object by its account ID. This allows you to check the current status,
balance, and account details.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.accountsApi.getBusinessAccount({
    businessAccountId: "ba_nopqrstuvwxyz23456789A",
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type AccountsApi.GetBusinessAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accountsApi.getBusinessAccount({
  businessAccountId: "ba_nopqrstuvwxyz23456789A",
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>businessAccountId</code> | <code>string</code> | Provide the ID of the related business account. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accountsApi.getBusinessAccount(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AccountsApi.GetBusinessAccountError](src/resources/accounts-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accountsApi.getBusinessAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AccountsApi.GetBusinessAccountError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBusinessAccountTransaction(request: AccountsApi.GetBusinessAccountTransactionRequest, options?: RequestOptions): ApiPromise&lt;undefined, AccountsApi.GetBusinessAccountTransactionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

> 🔒 Restricted access
>
> This API is currently only available to Mollie's authorized partners via OAuth. Direct access for individual businesses isn't available yet, but it's on our roadmap — check back here for updates.

Retrieve a single transaction object by its transaction ID. This allows you to check the details,
amount, counterparty, and balance impact of a specific transaction.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.accountsApi.getBusinessAccountTransaction({
    businessAccountId: "ba_nopqrstuvwxyz23456789A",
    transactionId: "batr_87GByBuj4UCcUTEbs6aGJ",
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type AccountsApi.GetBusinessAccountTransactionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accountsApi.getBusinessAccountTransaction({
  businessAccountId: "ba_nopqrstuvwxyz23456789A",
  transactionId: "batr_87GByBuj4UCcUTEbs6aGJ",
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>businessAccountId</code> | <code>string</code> | Provide the ID of the related business account. |
| <code>transactionId</code> | <code>string</code> | Provide the ID of the related transaction. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accountsApi.getBusinessAccountTransaction(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AccountsApi.GetBusinessAccountTransactionError](src/resources/accounts-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accountsApi.getBusinessAccountTransaction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AccountsApi.GetBusinessAccountTransactionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBusinessAccountTransactions(request: AccountsApi.ListBusinessAccountTransactionsRequest, options?: RequestOptions): ApiPromise&lt;undefined, AccountsApi.ListBusinessAccountTransactionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

> 🔒 Restricted access
>
> This API is currently only available to Mollie's authorized partners via OAuth. Direct access for individual businesses isn't available yet, but it's on our roadmap — check back here for updates.

Retrieve all transactions for a specific business account.

The results are paginated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.accountsApi.listBusinessAccountTransactions({
    businessAccountId: "ba_nopqrstuvwxyz23456789A",
    creditDebitIndicator: CreditDebitIndicator.Debit,
    processedAfter: new Date(Date.UTC(2025, 1, 1, 0, 0, 0)),
    processedBefore: new Date(Date.UTC(2025, 1, 26, 23, 59, 59)),
    from: "batr_87GByBuj4UCcUTEbs6aGJ",
    limit: 50,
    sort: Sorting.Desc,
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type AccountsApi.ListBusinessAccountTransactionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accountsApi.listBusinessAccountTransactions({
  businessAccountId: "ba_nopqrstuvwxyz23456789A",
  creditDebitIndicator: CreditDebitIndicator.Debit,
  processedAfter: new Date(Date.UTC(2025, 1, 1, 0, 0, 0)),
  processedBefore: new Date(Date.UTC(2025, 1, 26, 23, 59, 59)),
  from: "batr_87GByBuj4UCcUTEbs6aGJ",
  limit: 50,
  sort: Sorting.Desc,
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>businessAccountId</code> | <code>string</code> | Provide the ID of the related business account. |
| <code>creditDebitIndicator?</code> | <code>[CreditDebitIndicator](src/models/credit-debit-indicator.ts)</code> | Filter the transactions by whether they credited or debited the account balance. |
| <code>processedAfter?</code> | <code>Date</code> (date-time) | Filter the transactions to only include those processed on or after this date and time. Filters on the<br>`processedAt` property.<br><br>Cannot be combined with `from`. |
| <code>processedBefore?</code> | <code>Date</code> (date-time) | Filter the transactions to only include those processed on or before this date and time. Filters on the<br>`processedAt` property.<br><br>Cannot be combined with `from`. |
| <code>from?</code> | <code>string</code> | Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate<br>the result set.<br><br>Cannot be combined with `processedAfter` or `processedBefore`. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Defaults to 50 items. |
| <code>sort?</code> | <code>[Sorting](src/models/sorting.ts)</code> | Used for setting the direction of the result set. Defaults to descending order, meaning the results are ordered from<br>newest to oldest. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accountsApi.listBusinessAccountTransactions(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AccountsApi.ListBusinessAccountTransactionsError](src/resources/accounts-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accountsApi.listBusinessAccountTransactions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AccountsApi.ListBusinessAccountTransactionsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBusinessAccounts(request: AccountsApi.ListBusinessAccountsRequest, options?: RequestOptions): ApiPromise&lt;undefined, AccountsApi.ListBusinessAccountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

> 🔒 Restricted access
>
> This API is currently only available to Mollie's authorized partners via OAuth. Direct access for individual businesses isn't available yet, but it's on our roadmap — check back here for updates.

Retrieve all business accounts for the authenticated organization.

The results are paginated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.accountsApi.listBusinessAccounts({
    iban: "NL95MLLE1234567890",
    from: "ba_nopqrstuvwxyz23456789A",
    limit: 50,
    sort: Sorting.Desc,
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type AccountsApi.ListBusinessAccountsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accountsApi.listBusinessAccounts({
  iban: "NL95MLLE1234567890",
  from: "ba_nopqrstuvwxyz23456789A",
  limit: 50,
  sort: Sorting.Desc,
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>iban?</code> | <code>string</code> | Filter the results by IBAN. Only the business account with an exact match is returned. |
| <code>from?</code> | <code>string</code> | Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate<br>the result set. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Defaults to 50 items. |
| <code>sort?</code> | <code>[Sorting](src/models/sorting.ts)</code> | Used for setting the direction of the result set. Defaults to descending order, meaning the results are ordered from<br>newest to oldest. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accountsApi.listBusinessAccounts(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AccountsApi.ListBusinessAccountsError](src/resources/accounts-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accountsApi.listBusinessAccounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AccountsApi.ListBusinessAccountsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## BalanceTransfersApi

> Source: [BalanceTransfersApi](src/resources/balance-transfers-api.ts)

<details>
<summary><code>createConnectBalanceTransfer(request: BalanceTransfersApi.CreateConnectBalanceTransferRequest, options?: RequestOptions): ApiPromise&lt;undefined, BalanceTransfersApi.CreateConnectBalanceTransferError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API endpoint allows you to create a balance transfer from your organization's balance to a connected organization's balance, or vice versa.
You can also create a balance transfer between two connected organizations.
To create a balance transfer, you must be authenticated as the source organization, and the destination organization must be a connected organization
that has authorized the `balance-transfers.write` scope for your organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.balanceTransfersApi.createConnectBalanceTransfer({
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type BalanceTransfersApi.CreateConnectBalanceTransferError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.balanceTransfersApi.createConnectBalanceTransfer({
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[EntityBalanceTransfer](src/models/entity-balance-transfer.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.balanceTransfersApi.createConnectBalanceTransfer(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[BalanceTransfersApi.CreateConnectBalanceTransferError](src/resources/balance-transfers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.balanceTransfersApi.createConnectBalanceTransfer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, BalanceTransfersApi.CreateConnectBalanceTransferError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getConnectBalanceTransfer(request: BalanceTransfersApi.GetConnectBalanceTransferRequest, options?: RequestOptions): ApiPromise&lt;undefined, BalanceTransfersApi.GetConnectBalanceTransferError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single Connect balance transfer object by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.balanceTransfersApi.getConnectBalanceTransfer({
    balanceTransferId: "cbtr_j8NvRAM2WNZtsykpLEX8J",
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type BalanceTransfersApi.GetConnectBalanceTransferError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.balanceTransfersApi.getConnectBalanceTransfer({
  balanceTransferId: "cbtr_j8NvRAM2WNZtsykpLEX8J",
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>balanceTransferId</code> | <code>string</code> | Provide the ID of the related balance transfer. |
| <code>testmode?</code> | <code>boolean</code> | You can enable test mode by setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.balanceTransfersApi.getConnectBalanceTransfer(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[BalanceTransfersApi.GetConnectBalanceTransferError](src/resources/balance-transfers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.balanceTransfersApi.getConnectBalanceTransfer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, BalanceTransfersApi.GetConnectBalanceTransferError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listConnectBalanceTransfers(request: BalanceTransfersApi.ListConnectBalanceTransfersRequest, options?: RequestOptions): ApiPromise&lt;undefined, BalanceTransfersApi.ListConnectBalanceTransfersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of balance transfers associated with your organization. These may be a balance transfer that was received or sent from your balance, or a balance transfer that you initiated on behalf of your clients. If no balance transfers are available, the resulting array will be empty. This request should never throw an error.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.balanceTransfersApi.listConnectBalanceTransfers({
    limit: 50,
    sort: Sorting.Desc,
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type BalanceTransfersApi.ListConnectBalanceTransfersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.balanceTransfersApi.listConnectBalanceTransfers({
  limit: 50,
  sort: Sorting.Desc,
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>from?</code> | <code>string</code> | Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate the<br>result set. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Defaults to 50 items. |
| <code>sort?</code> | <code>[Sorting](src/models/sorting.ts)</code> | Used for setting the direction of the result set. Defaults to descending order, meaning the results are ordered from<br>newest to oldest. |
| <code>testmode?</code> | <code>boolean</code> | You can enable test mode by setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.balanceTransfersApi.listConnectBalanceTransfers(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[BalanceTransfersApi.ListConnectBalanceTransfersError](src/resources/balance-transfers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.balanceTransfersApi.listConnectBalanceTransfers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, BalanceTransfersApi.ListConnectBalanceTransfersError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## BalancesApi

> Source: [BalancesApi](src/resources/balances-api.ts)

<details>
<summary><code>getBalance(request: BalancesApi.GetBalanceRequest, options?: RequestOptions): ApiPromise&lt;undefined, BalancesApi.GetBalanceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

When processing payments with Mollie, we put all pending funds — usually
minus Mollie fees — on a balance. Once you have linked a bank account to your Mollie account, we can pay out your
balance towards this bank account.

With the Balances API you can retrieve your current balance. The response
includes two amounts:

* The *pending amount*. These are payments that have been marked as `paid`,
but are not yet available on your balance.
* The *available amount*. This is the amount that you can get paid out to
your bank account, or use for refunds.

With instant payment methods like iDEAL, payments are moved to the available
balance instantly. With slower payment methods, like credit card for example, it can take a few days before the
funds are available on your balance. These funds will be shown under the *pending amount* in the meanwhile.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.balancesApi.getBalance({
    balanceId: "bal_gVMhHKqSSRYJyPsuoPNFH",
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type BalancesApi.GetBalanceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.balancesApi.getBalance({
  balanceId: "bal_gVMhHKqSSRYJyPsuoPNFH",
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>balanceId</code> | <code>string</code> | Provide the ID of the related balance. |
| <code>testmode?</code> | <code>boolean</code> | You can enable test mode by setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.balancesApi.getBalance(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[BalancesApi.GetBalanceError](src/resources/balances-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.balancesApi.getBalance(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, BalancesApi.GetBalanceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBalanceReport(request: BalancesApi.GetBalanceReportRequest, options?: RequestOptions): ApiPromise&lt;undefined, BalancesApi.GetBalanceReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a summarized report for all transactions on a given balance within a given timeframe.

The API also provides a detailed report on all 'prepayments' for Mollie fees that were deducted from your balance
during the reported period, ahead of your Mollie invoice.

The alias `primary` can be used instead of the balance ID to refer to the
organization's primary balance.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.balancesApi.getBalanceReport({
    balanceId: "bal_gVMhHKqSSRYJyPsuoPNFH",
    from: "2024-01-01",
    until: "2024-02-01",
    grouping: BalanceReportGrouping.StatusBalances,
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type BalancesApi.GetBalanceReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.balancesApi.getBalanceReport({
  balanceId: "bal_gVMhHKqSSRYJyPsuoPNFH",
  from: "2024-01-01",
  until: "2024-02-01",
  grouping: BalanceReportGrouping.StatusBalances,
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>balanceId</code> | <code>string</code> | Provide the ID of the related balance. |
| <code>from</code> | <code>string</code> | The start date of the report, in `YYYY-MM-DD` format. The from date is<br>'inclusive', and in Central European Time. This means a report with for example `from=2024-01-01` will<br>include transactions from 2024-01-01 0:00:00 CET and onwards. |
| <code>until</code> | <code>string</code> | The end date of the report, in `YYYY-MM-DD` format. The until date is 'exclusive', and in Central European Time.<br>This means a report with for example `until=2024-02-01` will include transactions up until<br>2024-01-31 23:59:59 CET. |
| <code>grouping?</code> | <code>[BalanceReportGrouping](src/models/balance-report-grouping.ts)</code> | You can retrieve reports in two different formats. With the `status-balances` format, transactions are grouped<br>by status (e.g. `pending`, `available`), then by transaction type, and then by other sub-groupings where<br>available (e.g. payment method).<br><br>With the `transaction-categories` format, transactions are grouped by<br>transaction type, then by status, and then again by other sub-groupings where available. |
| <code>testmode?</code> | <code>boolean</code> | You can enable test mode by setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.balancesApi.getBalanceReport(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[BalancesApi.GetBalanceReportError](src/resources/balances-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.balancesApi.getBalanceReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, BalancesApi.GetBalanceReportError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPrimaryBalance(request: BalancesApi.GetPrimaryBalanceRequest, options?: RequestOptions): ApiPromise&lt;undefined, BalancesApi.GetPrimaryBalanceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the primary balance. This is the balance of your account's primary
currency, where all payments are settled to by default.

This endpoint is a convenient alias of the [Get balance](get-balance)
endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.balancesApi.getPrimaryBalance({ idempotencyKey: "123e4567-e89b-12d3-a456-426" });
} catch (err) {
  // TODO: Handle 'err' of type BalancesApi.GetPrimaryBalanceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.balancesApi.getPrimaryBalance({
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.balancesApi.getPrimaryBalance(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[BalancesApi.GetPrimaryBalanceError](src/resources/balances-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.balancesApi.getPrimaryBalance(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, BalancesApi.GetPrimaryBalanceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBalanceTransactions(request: BalancesApi.ListBalanceTransactionsRequest, options?: RequestOptions): ApiPromise&lt;undefined, BalancesApi.ListBalanceTransactionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of all balance transactions. Transactions include for
example payments, refunds, chargebacks, and settlements.

For an aggregated report of these balance transactions, refer to the [Get
balance report](get-balance-report) endpoint.

The alias `primary` can be used instead of the balance ID to refer to the
organization's primary balance.

The results are paginated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.balancesApi.listBalanceTransactions({
    balanceId: "bal_gVMhHKqSSRYJyPsuoPNFH",
    limit: 50,
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type BalancesApi.ListBalanceTransactionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.balancesApi.listBalanceTransactions({
  balanceId: "bal_gVMhHKqSSRYJyPsuoPNFH",
  limit: 50,
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>balanceId</code> | <code>string</code> | Provide the ID of the related balance. |
| <code>from?</code> | <code>string</code> | Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate the<br>result set. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Defaults to 50 items. |
| <code>testmode?</code> | <code>boolean</code> | You can enable test mode by setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.balancesApi.listBalanceTransactions(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[BalancesApi.ListBalanceTransactionsError](src/resources/balances-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.balancesApi.listBalanceTransactions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, BalancesApi.ListBalanceTransactionsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBalances(request: BalancesApi.ListBalancesRequest, options?: RequestOptions): ApiPromise&lt;undefined, BalancesApi.ListBalancesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of the organization's balances, including the primary balance.

The results are paginated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.balancesApi.listBalances({
    currency: "EUR",
    limit: 50,
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type BalancesApi.ListBalancesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.balancesApi.listBalances({
  currency: "EUR",
  limit: 50,
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>currency?</code> | <code>string</code> | Optionally only return balances with the given currency. For example: `EUR`. |
| <code>from?</code> | <code>string</code> | Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate the<br>result set. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Defaults to 50 items. |
| <code>testmode?</code> | <code>boolean</code> | You can enable test mode by setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.balancesApi.listBalances(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[BalancesApi.ListBalancesError](src/resources/balances-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.balancesApi.listBalances(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, BalancesApi.ListBalancesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CapabilitiesApi

> Source: [CapabilitiesApi](src/resources/capabilities-api.ts)

<details>
<summary><code>listCapabilities(request: CapabilitiesApi.ListCapabilitiesRequest, options?: RequestOptions): ApiPromise&lt;undefined, CapabilitiesApi.ListCapabilitiesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

> 🚧 Beta feature
>
> This feature is currently in beta testing, and the final specification may still change.

Retrieve a list of capabilities for an organization.

This API provides detailed insights into the specific requirements and status of each client's onboarding journey.

Capabilities are at the organization level, indicating if the organization can perform a given capability.
Capabilities may have requirements, which provide more information on what is needed to use this capability. 
Requirements may have a due date, which indicates the date by which the requirement should be fulfilled. 
If a requirement is past due, the capability is disabled until the requirement is fulfilled.

For payments, regardless them being at the profile level, the capability is listed at the organization level.
This means that if at least one of the clients's profiles can receive payments,
the payments capability is enabled, communicating that the organization can indeed receive payments.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.capabilitiesApi.listCapabilities({ idempotencyKey: "123e4567-e89b-12d3-a456-426" });
} catch (err) {
  // TODO: Handle 'err' of type CapabilitiesApi.ListCapabilitiesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.capabilitiesApi.listCapabilities({
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.capabilitiesApi.listCapabilities(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CapabilitiesApi.ListCapabilitiesError](src/resources/capabilities-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.capabilitiesApi.listCapabilities(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CapabilitiesApi.ListCapabilitiesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CapturesApi

> Source: [CapturesApi](src/resources/captures-api.ts)

<details>
<summary><code>createCapture(request: CapturesApi.CreateCaptureRequest, options?: RequestOptions): ApiPromise&lt;undefined, CapturesApi.CreateCaptureError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Capture an *authorized* payment.

Some payment methods allow you to first collect a customer's authorization,
and capture the amount at a later point.

By default, Mollie captures payments automatically. If however you
configured your payment with `captureMode: manual`, you can capture the payment using this endpoint after
having collected the customer's authorization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.capturesApi.createCapture({
    paymentId: "tr_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type CapturesApi.CreateCaptureError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.capturesApi.createCapture({
  paymentId: "tr_5B8cwPMGnU",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>paymentId</code> | <code>string</code> | Provide the ID of the related payment. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[EntityCapture](src/models/entity-capture.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.capturesApi.createCapture(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CapturesApi.CreateCaptureError](src/resources/captures-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.capturesApi.createCapture(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CapturesApi.CreateCaptureError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCapture(request: CapturesApi.GetCaptureRequest, options?: RequestOptions): ApiPromise&lt;undefined, CapturesApi.GetCaptureError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single payment capture by its ID and the ID of its parent
payment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.capturesApi.getCapture({
    paymentId: "tr_5B8cwPMGnU",
    captureId: "cpt_vytxeTZskVKR7C7WgdSP3d",
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type CapturesApi.GetCaptureError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.capturesApi.getCapture({
  paymentId: "tr_5B8cwPMGnU",
  captureId: "cpt_vytxeTZskVKR7C7WgdSP3d",
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>paymentId</code> | <code>string</code> | Provide the ID of the related payment. |
| <code>captureId</code> | <code>string</code> | Provide the ID of the related capture. |
| <code>embed?</code> | <code>string</code> | This endpoint allows you to embed additional resources via the<br>`embed` query string parameter. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.capturesApi.getCapture(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CapturesApi.GetCaptureError](src/resources/captures-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.capturesApi.getCapture(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CapturesApi.GetCaptureError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCaptures(request: CapturesApi.ListCapturesRequest, options?: RequestOptions): ApiPromise&lt;undefined, CapturesApi.ListCapturesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of all captures created for a specific payment.

The results are paginated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.capturesApi.listCaptures({
    paymentId: "tr_5B8cwPMGnU",
    from: "cpt_vytxeTZskVKR7C7WgdSP3d",
    limit: 50,
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type CapturesApi.ListCapturesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.capturesApi.listCaptures({
  paymentId: "tr_5B8cwPMGnU",
  from: "cpt_vytxeTZskVKR7C7WgdSP3d",
  limit: 50,
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>paymentId</code> | <code>string</code> | Provide the ID of the related payment. |
| <code>from?</code> | <code>string</code> | Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate the<br>result set. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Defaults to 50 items. |
| <code>embed?</code> | <code>string</code> | This endpoint allows you to embed additional resources via the<br>`embed` query string parameter. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.capturesApi.listCaptures(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CapturesApi.ListCapturesError](src/resources/captures-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.capturesApi.listCaptures(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CapturesApi.ListCapturesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ChargebacksApi

> Source: [ChargebacksApi](src/resources/chargebacks-api.ts)

<details>
<summary><code>getChargeback(request: ChargebacksApi.GetChargebackRequest, options?: RequestOptions): ApiPromise&lt;undefined, ChargebacksApi.GetChargebackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single payment chargeback by its ID and the ID of its parent payment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.chargebacksApi.getChargeback({
    paymentId: "tr_5B8cwPMGnU",
    chargebackId: "chb_xFzwUN4ci8HAmSGUACS4J",
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type ChargebacksApi.GetChargebackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.chargebacksApi.getChargeback({
  paymentId: "tr_5B8cwPMGnU",
  chargebackId: "chb_xFzwUN4ci8HAmSGUACS4J",
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>paymentId</code> | <code>string</code> | Provide the ID of the related payment. |
| <code>chargebackId</code> | <code>string</code> | Provide the ID of the related chargeback. |
| <code>embed?</code> | <code>string</code> | This endpoint allows you to embed additional information via the `embed` query string parameter. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.chargebacksApi.getChargeback(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ChargebacksApi.GetChargebackError](src/resources/chargebacks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.chargebacksApi.getChargeback(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ChargebacksApi.GetChargebackError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAllChargebacks(request: ChargebacksApi.ListAllChargebacksRequest, options?: RequestOptions): ApiPromise&lt;undefined, ChargebacksApi.ListAllChargebacksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all chargebacks initiated for all your payments.

The results are paginated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.chargebacksApi.listAllChargebacks({
    from: "chb_xFzwUN4ci8HAmSGUACS4J",
    limit: 50,
    sort: Sorting.Desc,
    profileId: "pfl_5B8cwPMGnU",
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type ChargebacksApi.ListAllChargebacksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.chargebacksApi.listAllChargebacks({
  from: "chb_xFzwUN4ci8HAmSGUACS4J",
  limit: 50,
  sort: Sorting.Desc,
  profileId: "pfl_5B8cwPMGnU",
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>from?</code> | <code>string</code> | Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate the<br>result set. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Defaults to 50 items. |
| <code>embed?</code> | <code>string</code> | This endpoint allows you to embed additional information via the<br>`embed` query string parameter. |
| <code>sort?</code> | <code>[Sorting](src/models/sorting.ts)</code> | Used for setting the direction of the result set. Defaults to descending order, meaning the results are ordered from<br>newest to oldest. |
| <code>profileId?</code> | <code>string</code> | The identifier referring to the [profile](get-profile) you wish to<br>retrieve chargebacks for.<br><br>Most API credentials are linked to a single profile. In these cases the<br>`profileId` is already implied.<br><br>To retrieve all chargebacks across the organization, use an<br>organization-level API credential and omit the `profileId` parameter. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.chargebacksApi.listAllChargebacks(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ChargebacksApi.ListAllChargebacksError](src/resources/chargebacks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.chargebacksApi.listAllChargebacks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ChargebacksApi.ListAllChargebacksError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listChargebacks(request: ChargebacksApi.ListChargebacksRequest, options?: RequestOptions): ApiPromise&lt;undefined, ChargebacksApi.ListChargebacksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the chargebacks initiated for a specific payment.

The results are paginated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.chargebacksApi.listChargebacks({
    paymentId: "tr_5B8cwPMGnU",
    from: "chb_xFzwUN4ci8HAmSGUACS4J",
    limit: 50,
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type ChargebacksApi.ListChargebacksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.chargebacksApi.listChargebacks({
  paymentId: "tr_5B8cwPMGnU",
  from: "chb_xFzwUN4ci8HAmSGUACS4J",
  limit: 50,
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>paymentId</code> | <code>string</code> | Provide the ID of the related payment. |
| <code>from?</code> | <code>string</code> | Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate the<br>result set. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Defaults to 50 items. |
| <code>embed?</code> | <code>string</code> | This endpoint allows you to embed additional information via the `embed` query string parameter. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.chargebacksApi.listChargebacks(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ChargebacksApi.ListChargebacksError](src/resources/chargebacks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.chargebacksApi.listChargebacks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ChargebacksApi.ListChargebacksError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CheckoutSessionsApi

> Source: [CheckoutSessionsApi](src/resources/checkout-sessions-api.ts)

<details>
<summary><code>createSession(request: CheckoutSessionsApi.CreateSessionRequest, options?: RequestOptions): ApiPromise&lt;undefined, CheckoutSessionsApi.CreateSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

> 🚧 Beta feature
>
> This feature is currently in beta.
>
> The `shipping` and `requiredCustomerDetails` properties are still in private beta.

Create a Checkout Session to start a checkout process with Mollie Components.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.checkoutSessionsApi.createSession({ idempotencyKey: "123e4567-e89b-12d3-a456-426" });
} catch (err) {
  // TODO: Handle 'err' of type CheckoutSessionsApi.CreateSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.checkoutSessionsApi.createSession({
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[SessionRequest](src/models/session-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.checkoutSessionsApi.createSession(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CheckoutSessionsApi.CreateSessionError](src/resources/checkout-sessions-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.checkoutSessionsApi.createSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CheckoutSessionsApi.CreateSessionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSession(request: CheckoutSessionsApi.GetSessionRequest, options?: RequestOptions): ApiPromise&lt;undefined, CheckoutSessionsApi.GetSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

> 🚧 Beta feature
>
> This feature is currently in beta.
>
> The `shipping` and `requiredCustomerDetails` properties are still in private beta.

Retrieve a Checkout Session to view its details and status to inform your customers about the checkout process.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.checkoutSessionsApi.getSession({
    sessionId: "sess_82jFYDTrLcCQV68NLDvMJ",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type CheckoutSessionsApi.GetSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.checkoutSessionsApi.getSession({
  sessionId: "sess_82jFYDTrLcCQV68NLDvMJ",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>sessionId</code> | <code>string</code> | Provide the ID of the related Checkout Session. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.checkoutSessionsApi.getSession(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CheckoutSessionsApi.GetSessionError](src/resources/checkout-sessions-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.checkoutSessionsApi.getSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CheckoutSessionsApi.GetSessionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ClientLinksApi

> Source: [ClientLinksApi](src/resources/client-links-api.ts)

<details>
<summary><code>createClientLink(request: ClientLinksApi.CreateClientLinkRequest, options?: RequestOptions): ApiPromise&lt;undefined, ClientLinksApi.CreateClientLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Link a new or existing organization to your OAuth application, in effect creating a new client. The response
contains a `clientLink` where you should redirect your customer to.

## Redirecting the Customer

The `clientLink` URL behaves similarly to a standard OAuth authorization URL. Therefore, after receiving the
`clientLink` URL in the API response, you need to **append the following query parameters** *before* redirecting
the customer:

* `client_id` _string (required)_

  The client ID you received when you registered your OAuth app. The ID starts with `app_`. For example:
  `app_abc123qwerty`.

* `state` _string (required)_

  A random string **generated by your app** to prevent CSRF attacks. This will be reflected in the `state` query
  parameter when the user returns to the `redirect_uri` after authorizing your app.

* `scope` _string (required)_

  A space-separated list of permissions ('scopes') your app requires. See the
  [permissions list](https://docs.mollie.com/docs/permissions) for more information about the available
  scopes.

  We recommend at least : `onboarding.read onboarding.write`

* `approval_prompt` _string_

  Can be set to `force` to force showing the consent screen to the merchant, *even when it is not necessary*. If you
  force an approval prompt and the user creates a new authorization, previously active authorizations will be
  revoked.

  Possible values: `auto` `force` (default: `auto`)

### Example of a Complete Redirect URL

After adding the above url parameter your URL will look something like this and you can redirect your client to this
page:

```
https://my.mollie.com/dashboard/client-link/{id}?client_id={your_client_id}&state={unique_state}&scope=onboarding.read%20onboarding.write
```

## Error Handling

Error handling is also dealt with similar to the [Authorize](https://docs.mollie.com/reference/authorize) endpoint:
the customer is redirected back to your app's redirect URL with the `error` and `error_description` parameters added
to the URL.

> 🚧
>
> A client link must be used within 30 days of creation. After that period, it will expire and you will need to create a new client link.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.clientLinksApi.createClientLink({ idempotencyKey: "123e4567-e89b-12d3-a456-426" });
} catch (err) {
  // TODO: Handle 'err' of type ClientLinksApi.CreateClientLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientLinksApi.createClientLink({
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[ClientLinkRequest](src/models/client-link-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clientLinksApi.createClientLink(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ClientLinksApi.CreateClientLinkError](src/resources/client-links-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientLinksApi.createClientLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ClientLinksApi.CreateClientLinkError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ClientsApi

> Source: [ClientsApi](src/resources/clients-api.ts)

<details>
<summary><code>getClient(request: ClientsApi.GetClientRequest, options?: RequestOptions): ApiPromise&lt;undefined, ClientsApi.GetClientError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single client by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.clientsApi.getClient({
    organizationId: "org_1234567",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type ClientsApi.GetClientError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientsApi.getClient({
  organizationId: "org_1234567",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>organizationId</code> | <code>string</code> | Provide the ID of the related organization. |
| <code>embed?</code> | <code>string</code> | This endpoint allows embedding related API items by appending the following values via the `embed` query string<br>parameter.<br><br>* `organization`: Include the organization of the client. Available for `signuplink` partners, or for `oauth`<br>  partners with the `organizations.read` scope.<br>* `onboarding`: Include the onboarding status of the client. Available for `signuplink` partners, or for `oauth`<br>  partners with the `onboarding.read` scope.<br>* `capabilities`: Include the [capabilities](list-capabilities) of the client organization.<br>  Available for *oauth* partners with the `onboarding.read` scope. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clientsApi.getClient(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ClientsApi.GetClientError](src/resources/clients-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientsApi.getClient(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ClientsApi.GetClientError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listClients(request: ClientsApi.ListClientsRequest, options?: RequestOptions): ApiPromise&lt;undefined, ClientsApi.ListClientsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of all clients linked to your account.

The results are paginated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.clientsApi.listClients({ limit: 50, idempotencyKey: "123e4567-e89b-12d3-a456-426" });
} catch (err) {
  // TODO: Handle 'err' of type ClientsApi.ListClientsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientsApi.listClients({
  limit: 50,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>embed?</code> | <code>string</code> | This endpoint allows embedding related API items by appending the<br>following values via the `embed` query string parameter.<br><br>* `organization`: Include the organization of the client. Available for `signuplink` partners, or for `oauth`<br>  partners with the `organizations.read` scope.<br>* `onboarding`: Include the onboarding status of the client. Available for `signuplink` partners, or for `oauth`<br>  partners with the `onboarding.read` scope.<br>* `capabilities`: Include the [capabilities](list-capabilities) of the client organization.<br>  Available for *oauth* partners with the `onboarding.read` scope. |
| <code>from?</code> | <code>string</code> | Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate the<br>result set. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Defaults to 50 items. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clientsApi.listClients(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ClientsApi.ListClientsError](src/resources/clients-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientsApi.listClients(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ClientsApi.ListClientsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

Creates a simple minimal representation of a customer. Payments, recurring mandates, and subscriptions can be linked
to this customer object, which simplifies management of recurring payments.

Once registered, customers will also appear in your Mollie dashboard.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.customersApi.createCustomer({ idempotencyKey: "123e4567-e89b-12d3-a456-426" });
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
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[EntityCustomer](src/models/entity-customer.ts)</code> | - |

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

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createCustomerPayment(request: CustomersApi.CreateCustomerPaymentRequest, options?: RequestOptions): ApiPromise&lt;undefined, CustomersApi.CreateCustomerPaymentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a payment for the customer.

Linking customers to payments enables you to:

* Keep track of payment preferences for your customers
* Allow your customers to charge a previously used credit card with a single click in our hosted checkout
* Improve payment insights in the Mollie dashboard
* Use recurring payments

This endpoint is effectively an alias of the [Create payment endpoint](create-payment) with the `customerId`
parameter predefined.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.customersApi.createCustomerPayment({
    customerId: "cst_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type CustomersApi.CreateCustomerPaymentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customersApi.createCustomerPayment({
  customerId: "cst_5B8cwPMGnU",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>customerId</code> | <code>string</code> | Provide the ID of the related customer. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[PaymentRequest](src/models/payment-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customersApi.createCustomerPayment(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CustomersApi.CreateCustomerPaymentError](src/resources/customers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customersApi.createCustomerPayment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CustomersApi.CreateCustomerPaymentError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCustomer(request: CustomersApi.DeleteCustomerRequest, options?: RequestOptions): ApiPromise&lt;undefined, CustomersApi.DeleteCustomerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a customer. All mandates and subscriptions created for this customer will be canceled as well.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.customersApi.deleteCustomer({
    customerId: "cst_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type CustomersApi.DeleteCustomerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customersApi.deleteCustomer({
  customerId: "cst_5B8cwPMGnU",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>customerId</code> | <code>string</code> | Provide the ID of the related customer. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[DeleteValuesSalesInvoice](src/models/delete-values-sales-invoice.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customersApi.deleteCustomer(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CustomersApi.DeleteCustomerError](src/resources/customers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customersApi.deleteCustomer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CustomersApi.DeleteCustomerError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

Retrieve a single customer by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.customersApi.getCustomer({
    customerId: "cst_5B8cwPMGnU",
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
  customerId: "cst_5B8cwPMGnU",
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>customerId</code> | <code>string</code> | Provide the ID of the related customer. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

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

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomerPayments(request: CustomersApi.ListCustomerPaymentsRequest, options?: RequestOptions): ApiPromise&lt;undefined, CustomersApi.ListCustomerPaymentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all payments linked to the customer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.customersApi.listCustomerPayments({
    customerId: "cst_5B8cwPMGnU",
    from: "tr_5B8cwPMGnU",
    limit: 50,
    sort: Sorting.Desc,
    profileId: "pfl_5B8cwPMGnU",
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type CustomersApi.ListCustomerPaymentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customersApi.listCustomerPayments({
  customerId: "cst_5B8cwPMGnU",
  from: "tr_5B8cwPMGnU",
  limit: 50,
  sort: Sorting.Desc,
  profileId: "pfl_5B8cwPMGnU",
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>customerId</code> | <code>string</code> | Provide the ID of the related customer. |
| <code>from?</code> | <code>string</code> | Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate<br>the result set. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Defaults to 50 items. |
| <code>sort?</code> | <code>[Sorting](src/models/sorting.ts)</code> | Used for setting the direction of the result set. Defaults to descending order, meaning the results are ordered from<br>newest to oldest. |
| <code>profileId?</code> | <code>string</code> | The identifier referring to the [profile](get-profile) you wish to<br>retrieve the resources for.<br><br>Most API credentials are linked to a single profile. In these cases the `profileId` must not be sent. For<br>organization-level credentials such as OAuth access tokens however, the `profileId` parameter is required. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customersApi.listCustomerPayments(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CustomersApi.ListCustomerPaymentsError](src/resources/customers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customersApi.listCustomerPayments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CustomersApi.ListCustomerPaymentsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomers(request: CustomersApi.ListCustomersRequest, options?: RequestOptions): ApiPromise&lt;undefined, CustomersApi.ListCustomersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of all customers.

The results are paginated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.customersApi.listCustomers({
    from: "cst_5B8cwPMGnU",
    limit: 50,
    sort: Sorting.Desc,
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type CustomersApi.ListCustomersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customersApi.listCustomers({
  from: "cst_5B8cwPMGnU",
  limit: 50,
  sort: Sorting.Desc,
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>from?</code> | <code>string</code> | Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate the<br>result set. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Defaults to 50 items. |
| <code>sort?</code> | <code>[Sorting](src/models/sorting.ts)</code> | Used for setting the direction of the result set. Defaults to descending order, meaning the results are ordered from<br>newest to oldest. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customersApi.listCustomers(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CustomersApi.ListCustomersError](src/resources/customers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customersApi.listCustomers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CustomersApi.ListCustomersError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCustomer(request: CustomersApi.UpdateCustomerRequest, options?: RequestOptions): ApiPromise&lt;undefined, CustomersApi.UpdateCustomerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing customer.

For an in-depth explanation of each parameter, refer to the [Create customer](create-customer) endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.customersApi.updateCustomer({
    customerId: "cst_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type CustomersApi.UpdateCustomerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customersApi.updateCustomer({
  customerId: "cst_5B8cwPMGnU",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>customerId</code> | <code>string</code> | Provide the ID of the related customer. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[EntityCustomer](src/models/entity-customer.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customersApi.updateCustomer(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CustomersApi.UpdateCustomerError](src/resources/customers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customersApi.updateCustomer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CustomersApi.UpdateCustomerError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DelayedRoutingApi

> Source: [DelayedRoutingApi](src/resources/delayed-routing-api.ts)

<details>
<summary><code>paymentCreateRoute(request: DelayedRoutingApi.PaymentCreateRouteRequest, options?: RequestOptions): ApiPromise&lt;undefined, DelayedRoutingApi.PaymentCreateRouteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a route for a specific payment.
The routed amount is credited to the account of your customer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.delayedRoutingApi.paymentCreateRoute({
    paymentId: "tr_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type DelayedRoutingApi.PaymentCreateRouteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.delayedRoutingApi.paymentCreateRoute({
  paymentId: "tr_5B8cwPMGnU",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>paymentId</code> | <code>string</code> | Provide the ID of the related payment. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[RouteCreateRequest](src/models/route-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.delayedRoutingApi.paymentCreateRoute(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DelayedRoutingApi.PaymentCreateRouteError](src/resources/delayed-routing-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.delayedRoutingApi.paymentCreateRoute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DelayedRoutingApi.PaymentCreateRouteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>paymentGetRoute(request: DelayedRoutingApi.PaymentGetRouteRequest, options?: RequestOptions): ApiPromise&lt;undefined, DelayedRoutingApi.PaymentGetRouteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single route created for a specific payment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.delayedRoutingApi.paymentGetRoute({
    paymentId: "tr_5B8cwPMGnU",
    routeId: "crt_dyARQ3JzCgtPDhU2Pbq3J",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type DelayedRoutingApi.PaymentGetRouteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.delayedRoutingApi.paymentGetRoute({
  paymentId: "tr_5B8cwPMGnU",
  routeId: "crt_dyARQ3JzCgtPDhU2Pbq3J",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>paymentId</code> | <code>string</code> | Provide the ID of the related payment. |
| <code>routeId</code> | <code>string</code> | Provide the ID of the route. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.delayedRoutingApi.paymentGetRoute(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DelayedRoutingApi.PaymentGetRouteError](src/resources/delayed-routing-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.delayedRoutingApi.paymentGetRoute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DelayedRoutingApi.PaymentGetRouteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>paymentListRoutes(request: DelayedRoutingApi.PaymentListRoutesRequest, options?: RequestOptions): ApiPromise&lt;undefined, DelayedRoutingApi.PaymentListRoutesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of all routes created for a specific payment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.delayedRoutingApi.paymentListRoutes({
    paymentId: "tr_5B8cwPMGnU",
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type DelayedRoutingApi.PaymentListRoutesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.delayedRoutingApi.paymentListRoutes({
  paymentId: "tr_5B8cwPMGnU",
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>paymentId</code> | <code>string</code> | Provide the ID of the related payment. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.delayedRoutingApi.paymentListRoutes(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DelayedRoutingApi.PaymentListRoutesError](src/resources/delayed-routing-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.delayedRoutingApi.paymentListRoutes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DelayedRoutingApi.PaymentListRoutesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DraftTransfersApi

> Source: [DraftTransfersApi](src/resources/draft-transfers-api.ts)

<details>
<summary><code>cancelDraftTransfer(request: DraftTransfersApi.CancelDraftTransferRequest, options?: RequestOptions): ApiPromise&lt;undefined, DraftTransfersApi.CancelDraftTransferError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

> 🚧 Beta feature
>
> This feature is currently in beta testing, and the final specification may still change.

Cancels a draft transfer created via this API. Transitions the draft transfer to `declined` with
`statusReason.code` set to `deleted-by-creator`.

Only draft transfers created via this API, and still in `pending-review`, can be cancelled this way. A
`422` is returned if the initiator has already started approving it.

In test mode, this always returns a synthetic `declined` draft. See [Create draft
transfer](create-draft-transfer) for how to simulate `approved` and `declined` outcomes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.draftTransfersApi.cancelDraftTransfer({
    draftTransferId: "badrt_87GByBuj4UCcUTEbs6aGJ",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type DraftTransfersApi.CancelDraftTransferError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.draftTransfersApi.cancelDraftTransfer({
  draftTransferId: "badrt_87GByBuj4UCcUTEbs6aGJ",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>draftTransferId</code> | <code>string</code> | Provide the ID of the related draft transfer. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[DeleteValuesSalesInvoice](src/models/delete-values-sales-invoice.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.draftTransfersApi.cancelDraftTransfer(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DraftTransfersApi.CancelDraftTransferError](src/resources/draft-transfers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.draftTransfersApi.cancelDraftTransfer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DraftTransfersApi.CancelDraftTransferError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createDraftTransfer(request: DraftTransfersApi.CreateDraftTransferRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, DraftTransfersApi.CreateDraftTransferError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

> 🚧 Beta feature
>
> This feature is currently in beta testing, and the final specification may still change.

Creates a draft transfer. The draft transfer immediately enters `pending-review` and appears in the
initiator's queue in Mollie Apps. It carries no legal weight and moves no funds until a human initiator
approves it there.

### Test mode

Creating a draft transfer always returns a synthetic draft in `pending-review` status, using synthetic data,
same as in live mode. No real funds move and nothing is sent to Mollie Apps.

Editing a draft transfer after creation is not supported via the API. Instead, depending on the amount, you
can simulate different outcomes for the initiator's decision at creation time:

| Amount  | Simulated outcome                                    | Webhook sequence                                                                                  |
|---------|-------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| `13.00` | Declined by the initiator, with a free-text reason     | `business-account-draft-transfer.created` → `business-account-draft-transfer.declined`             |
| `14.00` | Approved                                               | `business-account-draft-transfer.created` → `business-account-draft-transfer.approved`             |
| Other   | Default behavior (pending review)                      | `business-account-draft-transfer.created`                                                          |

The webhooks fire asynchronously, with a short delay between them to mimic real timing. [Get](get-draft-transfer)
and [list](list-draft-transfers) reflect the simulated outcome once it lands.

Cancelling (via `DELETE`) is unaffected by the amount: it always transitions the draft to `declined` with
`statusReason.code` set to `deleted-by-creator`, the same as in live mode.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.draftTransfersApi.createDraftTransfer({ idempotencyKey: "123e4567-e89b-12d3-a456-426" });
} catch (err) {
  // TODO: Handle 'err' of type DraftTransfersApi.CreateDraftTransferError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.draftTransfersApi.createDraftTransfer({
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[CreateDraftTransferRequest](src/models/create-draft-transfer-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.draftTransfersApi.createDraftTransfer(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DraftTransfersApi.CreateDraftTransferError](src/resources/draft-transfers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.draftTransfersApi.createDraftTransfer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DraftTransfersApi.CreateDraftTransferError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDraftTransfer(request: DraftTransfersApi.GetDraftTransferRequest, options?: RequestOptions): ApiPromise&lt;undefined, DraftTransfersApi.GetDraftTransferError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

> 🚧 Beta feature
>
> This feature is currently in beta testing, and the final specification may still change.

Retrieves a single draft transfer by its identifier.

Only draft transfers created via this API are visible via this endpoint. Draft transfers created in Mollie
Apps return a `404`, even though they appear in the [list endpoint](list-draft-transfers).

In test mode, this returns synthetic data only, not your real draft transfer. See [Create draft
transfer](create-draft-transfer) for how to simulate `approved` and `declined` outcomes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.draftTransfersApi.getDraftTransfer({
    draftTransferId: "badrt_87GByBuj4UCcUTEbs6aGJ",
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type DraftTransfersApi.GetDraftTransferError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.draftTransfersApi.getDraftTransfer({
  draftTransferId: "badrt_87GByBuj4UCcUTEbs6aGJ",
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>draftTransferId</code> | <code>string</code> | Provide the ID of the related draft transfer. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.draftTransfersApi.getDraftTransfer(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DraftTransfersApi.GetDraftTransferError](src/resources/draft-transfers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.draftTransfersApi.getDraftTransfer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DraftTransfersApi.GetDraftTransferError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDraftTransfers(request: DraftTransfersApi.ListDraftTransfersRequest, options?: RequestOptions): ApiPromise&lt;undefined, DraftTransfersApi.ListDraftTransfersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

> 🚧 Beta feature
>
> This feature is currently in beta testing, and the final specification may still change.

Retrieves a list of draft transfers created via this API for the organization.

The results are paginated.

In test mode, this returns synthetic draft transfers only, not your real data.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.draftTransfersApi.listDraftTransfers({
    limit: 50,
    status: DraftTransferStatus.PendingReview,
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type DraftTransfersApi.ListDraftTransfersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.draftTransfersApi.listDraftTransfers({
  limit: 50,
  status: DraftTransferStatus.PendingReview,
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>from?</code> | <code>string</code> | Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate the<br>result set. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Defaults to 50 items. |
| <code>status?</code> | <code>[DraftTransferStatus](src/models/draft-transfer-status.ts)</code> | Filter the list by draft transfer status. Omit to return draft transfers in any status. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.draftTransfersApi.listDraftTransfers(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DraftTransfersApi.ListDraftTransfersError](src/resources/draft-transfers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.draftTransfersApi.listDraftTransfers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DraftTransfersApi.ListDraftTransfersError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## InvoicesApi

> Source: [InvoicesApi](src/resources/invoices-api.ts)

<details>
<summary><code>getInvoice(request: InvoicesApi.GetInvoiceRequest, options?: RequestOptions): ApiPromise&lt;undefined, InvoicesApi.GetInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single invoice by its ID.

If you want to retrieve the details of an invoice by its invoice number,
call the [List invoices](list-invoices) endpoint with the `reference` parameter.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.invoicesApi.getInvoice({
    invoiceId: "inv_aHbjjdrUdm",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type InvoicesApi.GetInvoiceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invoicesApi.getInvoice({
  invoiceId: "inv_aHbjjdrUdm",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>invoiceId</code> | <code>string</code> | Provide the ID of the related invoice. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invoicesApi.getInvoice(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[InvoicesApi.GetInvoiceError](src/resources/invoices-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.invoicesApi.getInvoice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, InvoicesApi.GetInvoiceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listInvoices(request: InvoicesApi.ListInvoicesRequest, options?: RequestOptions): ApiPromise&lt;undefined, InvoicesApi.ListInvoicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of all your invoices, optionally filtered by year or by
invoice reference.

The results are paginated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.invoicesApi.listInvoices({
    reference: "2024.10000",
    year: "2024",
    limit: 50,
    sort: Sorting.Desc,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type InvoicesApi.ListInvoicesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invoicesApi.listInvoices({
  reference: "2024.10000",
  year: "2024",
  limit: 50,
  sort: Sorting.Desc,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>reference?</code> | <code>string</code> | Filter for an invoice with a specific invoice reference, for example<br>`2024.10000`. |
| <code>year?</code> | <code>string</code> | Filter for invoices of a specific year, for example `2024`. |
| <code>from?</code> | <code>string</code> | Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate the<br>result set. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Defaults to 50 items. |
| <code>sort?</code> | <code>[Sorting](src/models/sorting.ts)</code> | Used for setting the direction of the result set. Defaults to descending order, meaning the results are ordered from<br>newest to oldest. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invoicesApi.listInvoices(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[InvoicesApi.ListInvoicesError](src/resources/invoices-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.invoicesApi.listInvoices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, InvoicesApi.ListInvoicesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## MandatesApi

> Source: [MandatesApi](src/resources/mandates-api.ts)

<details>
<summary><code>createMandate(request: MandatesApi.CreateMandateRequest, options?: RequestOptions): ApiPromise&lt;undefined, MandatesApi.CreateMandateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a mandate for a specific customer. Mandates allow you to charge a customer's card, PayPal account or bank
account recurrently.

It is only possible to create mandates for IBANs and PayPal billing agreements with this endpoint. To create
mandates for cards, your customers need to perform a 'first payment' with their card.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.mandatesApi.createMandate({
    customerId: "cst_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type MandatesApi.CreateMandateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mandatesApi.createMandate({
  customerId: "cst_5B8cwPMGnU",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>customerId</code> | <code>string</code> | Provide the ID of the related customer. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[MandateRequest](src/models/mandate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mandatesApi.createMandate(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MandatesApi.CreateMandateError](src/resources/mandates-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.mandatesApi.createMandate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MandatesApi.CreateMandateError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMandate(request: MandatesApi.GetMandateRequest, options?: RequestOptions): ApiPromise&lt;undefined, MandatesApi.GetMandateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single mandate by its ID. Depending on the type of mandate, the object will contain the customer's bank
account details, card details, or PayPal account details.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.mandatesApi.getMandate({
    customerId: "cst_5B8cwPMGnU",
    mandateId: "mdt_5B8cwPMGnU",
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type MandatesApi.GetMandateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mandatesApi.getMandate({
  customerId: "cst_5B8cwPMGnU",
  mandateId: "mdt_5B8cwPMGnU",
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>customerId</code> | <code>string</code> | Provide the ID of the related customer. |
| <code>mandateId</code> | <code>string</code> | Provide the ID of the related mandate. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mandatesApi.getMandate(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MandatesApi.GetMandateError](src/resources/mandates-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.mandatesApi.getMandate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MandatesApi.GetMandateError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMandates(request: MandatesApi.ListMandatesRequest, options?: RequestOptions): ApiPromise&lt;undefined, MandatesApi.ListMandatesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of all mandates.

The results are paginated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.mandatesApi.listMandates({
    customerId: "cst_5B8cwPMGnU",
    from: "mdt_5B8cwPMGnU",
    limit: 50,
    sort: Sorting.Desc,
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type MandatesApi.ListMandatesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mandatesApi.listMandates({
  customerId: "cst_5B8cwPMGnU",
  from: "mdt_5B8cwPMGnU",
  limit: 50,
  sort: Sorting.Desc,
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>customerId</code> | <code>string</code> | Provide the ID of the related customer. |
| <code>from?</code> | <code>string</code> | Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate the<br>result set. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Defaults to 50 items. |
| <code>sort?</code> | <code>[Sorting](src/models/sorting.ts)</code> | Used for setting the direction of the result set. Defaults to descending order, meaning the results are ordered from<br>newest to oldest. |
| <code>scopes?</code> | <code>[MandateScopes](src/models/mandate-scopes.ts)[]</code> | Returns only mandates that include the specified scopes. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mandatesApi.listMandates(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MandatesApi.ListMandatesError](src/resources/mandates-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.mandatesApi.listMandates(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MandatesApi.ListMandatesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>revokeMandate(request: MandatesApi.RevokeMandateRequest, options?: RequestOptions): ApiPromise&lt;undefined, MandatesApi.RevokeMandateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revoke a customer's mandate. You will no longer be able to charge the customer's bank account or card with this
mandate, and all connected subscriptions will be canceled.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.mandatesApi.revokeMandate({
    customerId: "cst_5B8cwPMGnU",
    mandateId: "mdt_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type MandatesApi.RevokeMandateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mandatesApi.revokeMandate({
  customerId: "cst_5B8cwPMGnU",
  mandateId: "mdt_5B8cwPMGnU",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>customerId</code> | <code>string</code> | Provide the ID of the related customer. |
| <code>mandateId</code> | <code>string</code> | Provide the ID of the related mandate. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[DeleteValuesSalesInvoice](src/models/delete-values-sales-invoice.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mandatesApi.revokeMandate(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MandatesApi.RevokeMandateError](src/resources/mandates-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.mandatesApi.revokeMandate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MandatesApi.RevokeMandateError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## MethodsApi

> Source: [MethodsApi](src/resources/methods-api.ts)

<details>
<summary><code>disableMethod(request: MethodsApi.DisableMethodRequest, options?: RequestOptions): ApiPromise&lt;undefined, MethodsApi.DisableMethodError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disable a payment method on a specific profile.

When using a profile-specific API credential, the alias `me` can be used
instead of the profile ID to refer to the current profile.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.methodsApi.disableMethod({
    profileId: "pfl_5B8cwPMGnU",
    methodId: Method.Ideal,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type MethodsApi.DisableMethodError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.methodsApi.disableMethod({
  profileId: "pfl_5B8cwPMGnU",
  methodId: Method.Ideal,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>profileId</code> | <code>string</code> | Provide the ID of the related profile. |
| <code>methodId</code> | <code>[Method](src/models/method.ts)</code> | Provide the ID of the related payment method. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.methodsApi.disableMethod(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MethodsApi.DisableMethodError](src/resources/methods-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.methodsApi.disableMethod(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MethodsApi.DisableMethodError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>disableMethodIssuer(request: MethodsApi.DisableMethodIssuerRequest, options?: RequestOptions): ApiPromise&lt;undefined, MethodsApi.DisableMethodIssuerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disable an issuer for a payment method on a specific profile.

Currently only the payment methods `voucher` and `giftcard` are supported.

When using a profile-specific API credential, the alias `me` can be used instead of the profile ID to refer to the
current profile.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.methodsApi.disableMethodIssuer({
    profileId: "pfl_5B8cwPMGnU",
    methodId: MethodIdWithIssuer.Voucher,
    issuerId: "edenred-france-sports",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type MethodsApi.DisableMethodIssuerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.methodsApi.disableMethodIssuer({
  profileId: "pfl_5B8cwPMGnU",
  methodId: MethodIdWithIssuer.Voucher,
  issuerId: "edenred-france-sports",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>profileId</code> | <code>string</code> | Provide the ID of the related profile. |
| <code>methodId</code> | <code>[MethodIdWithIssuer](src/models/method-id-with-issuer.ts)</code> | Provide the ID of the related payment method. |
| <code>issuerId</code> | <code>string</code> | Provide the ID of the related issuer. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.methodsApi.disableMethodIssuer(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MethodsApi.DisableMethodIssuerError](src/resources/methods-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.methodsApi.disableMethodIssuer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MethodsApi.DisableMethodIssuerError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>enableMethod(request: MethodsApi.EnableMethodRequest, options?: RequestOptions): ApiPromise&lt;undefined, MethodsApi.EnableMethodError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enable a payment method on a specific profile.

When using a profile-specific API credential, the alias `me` can be used
instead of the profile ID to refer to the current profile.

Some payment methods require extra steps in order to be activated. In cases
where a step at the payment method provider needs to be completed first, the status will be set to
`pending-external` and the response will contain a link to complete the activation at the provider.

To enable voucher or gift card issuers, refer to the [Enable payment method issuer](enable-method-issuer) endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.methodsApi.enableMethod({
    profileId: "pfl_5B8cwPMGnU",
    methodId: Method.Ideal,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type MethodsApi.EnableMethodError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.methodsApi.enableMethod({
  profileId: "pfl_5B8cwPMGnU",
  methodId: Method.Ideal,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>profileId</code> | <code>string</code> | Provide the ID of the related profile. |
| <code>methodId</code> | <code>[Method](src/models/method.ts)</code> | Provide the ID of the related payment method. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.methodsApi.enableMethod(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MethodsApi.EnableMethodError](src/resources/methods-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.methodsApi.enableMethod(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MethodsApi.EnableMethodError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>enableMethodIssuer(request: MethodsApi.EnableMethodIssuerRequest, options?: RequestOptions): ApiPromise&lt;undefined, MethodsApi.EnableMethodIssuerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enable an issuer for a payment method on a specific profile.

Currently only the payment methods `voucher` and `giftcard` are supported.

When using a profile-specific API credential, the alias `me` can be used instead of the profile ID to refer to the
current profile.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.methodsApi.enableMethodIssuer({
    profileId: "pfl_5B8cwPMGnU",
    methodId: MethodIdWithIssuer.Voucher,
    issuerId: "edenred-france-sports",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type MethodsApi.EnableMethodIssuerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.methodsApi.enableMethodIssuer({
  profileId: "pfl_5B8cwPMGnU",
  methodId: MethodIdWithIssuer.Voucher,
  issuerId: "edenred-france-sports",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>profileId</code> | <code>string</code> | Provide the ID of the related profile. |
| <code>methodId</code> | <code>[MethodIdWithIssuer](src/models/method-id-with-issuer.ts)</code> | Provide the ID of the related payment method. |
| <code>issuerId</code> | <code>string</code> | Provide the ID of the related issuer. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[V2ProfilesMethodsIssuersIssuerIdRequest](src/models/v2-profiles-methods-issuers-issuer-id-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.methodsApi.enableMethodIssuer(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MethodsApi.EnableMethodIssuerError](src/resources/methods-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.methodsApi.enableMethodIssuer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MethodsApi.EnableMethodIssuerError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMethod(request: MethodsApi.GetMethodRequest, options?: RequestOptions): ApiPromise&lt;undefined, MethodsApi.GetMethodError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single payment method by its ID.

If a method is not available on this profile, a `404 Not Found` response is
returned. If the method is available but not enabled yet, a status `403 Forbidden` is returned. You can enable
payments methods via the [Enable payment method endpoint](enable-method) of the Profiles API, or via
the Mollie Dashboard.

If you do not know the method's ID, you can use the [methods list
endpoint](list-methods) to retrieve all payment methods that are available.

Additionally, it is possible to check if wallet methods such as Apple Pay
are enabled by passing the wallet ID (`applepay`) as the method ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.methodsApi.getMethod({
    methodId: Method.Ideal,
    locale: Locale.EnUs,
    currency: "EUR",
    profileId: "pfl_5B8cwPMGnU",
    sequenceType: SequenceType.Oneoff,
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type MethodsApi.GetMethodError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.methodsApi.getMethod({
  methodId: Method.Ideal,
  locale: Locale.EnUs,
  currency: "EUR",
  profileId: "pfl_5B8cwPMGnU",
  sequenceType: SequenceType.Oneoff,
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>methodId</code> | <code>[Method](src/models/method.ts)</code> | Provide the ID of the related payment method. |
| <code>locale?</code> | <code>[Locale](src/models/locale.ts)</code> | Passing a locale will sort the payment methods in the preferred order<br>for the country, and translate the payment method names in the corresponding language. |
| <code>currency?</code> | <code>string</code> | If provided, the `minimumAmount` and `maximumAmount` will be converted<br>to the given currency. An error is returned if the currency is not supported by the payment method. |
| <code>profileId?</code> | <code>string</code> | The identifier referring to the [profile](get-profile) you wish to<br>retrieve the resources for.<br><br>Most API credentials are linked to a single profile. In these cases the `profileId` must not be sent. For<br>organization-level credentials such as OAuth access tokens however, the `profileId` parameter is required. |
| <code>include?</code> | <code>string</code> | This endpoint allows you to include additional information via the<br>`include` query string parameter. |
| <code>sequenceType?</code> | <code>[SequenceType](src/models/sequence-type.ts)</code> | Set this parameter to `first` to only return the methods that<br>can be used for the first payment of a recurring sequence.<br><br>Set it to `recurring` to only return methods that can be used for recurring payments or subscriptions. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.methodsApi.getMethod(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MethodsApi.GetMethodError](src/resources/methods-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.methodsApi.getMethod(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MethodsApi.GetMethodError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAllMethods(request: MethodsApi.ListAllMethodsRequest, options?: RequestOptions): ApiPromise&lt;undefined, MethodsApi.ListAllMethodsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all payment methods that Mollie offers, regardless of the eligibility of the organization for the specific
method. The results of this endpoint are **not** paginated — unlike most other list endpoints in our API.

The list can optionally be filtered using a number of parameters described below.

ℹ️ **Note:** This endpoint only returns **online** payment methods. If you wish to retrieve the information about
a non-online payment method, you can use the [Get payment method endpoint](get-method).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.methodsApi.listAllMethods({
    locale: Locale.EnUs,
    sequenceType: SequenceType.Oneoff,
    profileId: "pfl_5B8cwPMGnU",
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type MethodsApi.ListAllMethodsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.methodsApi.listAllMethods({
  locale: Locale.EnUs,
  sequenceType: SequenceType.Oneoff,
  profileId: "pfl_5B8cwPMGnU",
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>locale?</code> | <code>[Locale](src/models/locale.ts)</code> | Passing a locale will sort the payment methods in the preferred order<br>for the country, and translate the payment method names in the corresponding language. |
| <code>amount?</code> | <code>[Amount](src/models/amount.ts)</code> | If supplied, only payment methods that support the amount and currency<br>are returned.<br><br>Example: `/v2/methods/all?amount[value]=100.00&amount[currency]=USD` |
| <code>include?</code> | <code>string</code> | This endpoint allows you to include additional information via the<br>`include` query string parameter. |
| <code>sequenceType?</code> | <code>[SequenceType](src/models/sequence-type.ts)</code> | Set this parameter to `first` to only return the methods that<br>can be used for the first payment of a recurring sequence.<br><br>Set it to `recurring` to only return methods that can be used for recurring payments or subscriptions. |
| <code>profileId?</code> | <code>string</code> | The identifier referring to the [profile](get-profile) you wish to<br>retrieve the resources for.<br><br>Most API credentials are linked to a single profile. In these cases the `profileId` must not be sent. For<br>organization-level credentials such as OAuth access tokens however, the `profileId` parameter is required. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.methodsApi.listAllMethods(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MethodsApi.ListAllMethodsError](src/resources/methods-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.methodsApi.listAllMethods(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MethodsApi.ListAllMethodsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMethods(request: MethodsApi.ListMethodsRequest, options?: RequestOptions): ApiPromise&lt;undefined, MethodsApi.ListMethodsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all enabled payment methods. The results of this endpoint are
**not** paginated — unlike most other list endpoints in our API.

For test mode, all pending and enabled payment methods are returned. If no
payment methods are requested yet, the most popular payment methods are returned in the test mode. For live
mode, only fully enabled payment methods are returned.

Payment methods can be requested and enabled via the Mollie Dashboard, or
via the [Enable payment method endpoint](enable-method) of the Profiles API.

The list can optionally be filtered using a number of parameters described
below.

By default, only payment methods for the Euro currency are returned. If you
wish to retrieve payment methods which exclusively support other currencies (e.g. Twint), you need to use the
`amount` parameters.

ℹ️ **Note:** This endpoint only returns **online** payment methods. If you wish to retrieve the information about
a non-online payment method, you can use the [Get payment method endpoint](get-method).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.methodsApi.listMethods({
    sequenceType: SequenceType.Oneoff,
    locale: Locale.EnUs,
    resource: MethodResourceParameter.Payments,
    billingCountry: "DE",
    includeWallets: MethodIncludeWalletsParameter.Applepay,
    orderLineCategories: LineCategories.Eco,
    profileId: "pfl_5B8cwPMGnU",
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type MethodsApi.ListMethodsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.methodsApi.listMethods({
  sequenceType: SequenceType.Oneoff,
  locale: Locale.EnUs,
  resource: MethodResourceParameter.Payments,
  billingCountry: "DE",
  includeWallets: MethodIncludeWalletsParameter.Applepay,
  orderLineCategories: LineCategories.Eco,
  profileId: "pfl_5B8cwPMGnU",
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>sequenceType?</code> | <code>[SequenceType](src/models/sequence-type.ts)</code> | Set this parameter to `first` to only return the enabled methods that<br>can be used for the first payment of a recurring sequence.<br><br>Set it to `recurring` to only return enabled methods that can be used for recurring payments or subscriptions. |
| <code>locale?</code> | <code>[Locale](src/models/locale.ts)</code> | Passing a locale will sort the payment methods in the preferred order<br>for the country, and translate the payment method names in the corresponding language. |
| <code>amount?</code> | <code>[Amount](src/models/amount.ts)</code> | If supplied, only payment methods that support the amount and currency<br>are returned.<br><br>Example: `/v2/methods?amount[value]=100.00&amount[currency]=USD` |
| <code>resource?</code> | <code>[MethodResourceParameter](src/models/method-resource-parameter.ts)</code> | **⚠️ We no longer recommend using the Orders API. Please refer to the [Payments API](payments-api) instead.**<br><br>Indicate if you will use the result for the [Create order](create-order)<br>or the [Create payment](create-payment) endpoint.<br><br>When passing the value `orders`, the result will include payment methods<br>that are only available for payments created via the Orders API. |
| <code>billingCountry?</code> | <code>string</code> | The country taken from your customer's billing address in ISO 3166-1 alpha-2 format. This parameter can be used<br>to check whether your customer is eligible for certain payment methods, for example for Klarna.<br><br>Example: `/v2/methods?resource=orders&billingCountry=DE` |
| <code>includeWallets?</code> | <code>[MethodIncludeWalletsParameter](src/models/method-include-wallets-parameter.ts)</code> | A comma-separated list of the wallets you support in your checkout. Wallets often require wallet specific code<br>to check if they are available on the shoppers device, hence the need to indicate your support. |
| <code>orderLineCategories?</code> | <code>[LineCategories](src/models/line-categories.ts)</code> | A comma-separated list of the line categories you support in your checkout.<br><br>Example: `/v2/methods?orderLineCategories=eco,meal` |
| <code>profileId?</code> | <code>string</code> | The identifier referring to the [profile](get-profile) you wish to<br>retrieve the resources for.<br><br>Most API credentials are linked to a single profile. In these cases the `profileId` must not be sent. For<br>organization-level credentials such as OAuth access tokens however, the `profileId` parameter is required. |
| <code>include?</code> | <code>string</code> | This endpoint allows you to include additional information via the<br>`include` query string parameter. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.methodsApi.listMethods(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MethodsApi.ListMethodsError](src/resources/methods-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.methodsApi.listMethods(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MethodsApi.ListMethodsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## OAuthApi

> Source: [OAuthApi](src/resources/oauth-api.ts)

<details>
<summary><code>oauthGenerateTokens(request: OAuthApi.OauthGenerateTokensRequest, options?: RequestOptions): ApiPromise&lt;Oauth2TokensResponse, OAuthApi.OauthGenerateTokensError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exchange the authorization code you received from the [Authorize endpoint](oauth-authorize) for an 'access token'
API credential, with which you can communicate with the Mollie API on behalf of the consenting merchant.

This endpoint can only be accessed using **OAuth client credentials**.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oAuthApi.oauthGenerateTokens({
    authorization: "some example string",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  // TODO: Handle 'response' of type Oauth2TokensResponse
} catch (err) {
  // TODO: Handle 'err' of type OAuthApi.OauthGenerateTokensError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oAuthApi.oauthGenerateTokens({
  authorization: "some example string",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Oauth2TokensResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>string</code> | The OAuth client ID and client secret as<br>[basic access credentials](https://en.wikipedia.org/wiki/Basic_access_authentication).<br><br>Pseudo code: `"Basic " + toBase64(client_id + ":" + client_secret)`<br><br>For example: `Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==` |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[Oauth2TokensRequest](src/models/oauth2-tokens-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oAuthApi.oauthGenerateTokens(request)`

- **OnSuccess**: <code>[Oauth2TokensResponse](src/models/oauth2-tokens-response.ts)</code>
- **OnError**: throws <code>[OAuthApi.OauthGenerateTokensError](src/resources/oauth-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oAuthApi.oauthGenerateTokens(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Oauth2TokensResponse, OAuthApi.OauthGenerateTokensError&gt;</code>, with `result.value` of type <code>[Oauth2TokensResponse](src/models/oauth2-tokens-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>oauthRevokeTokens(request: OAuthApi.OauthRevokeTokensRequest, options?: RequestOptions): ApiPromise&lt;undefined, OAuthApi.OauthRevokeTokensError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revoke an access token or refresh token. Once revoked, the token can no longer be used.

Revoking a refresh token revokes all access tokens that were created using the same authorization.

This endpoint can only be accessed using **OAuth client credentials**.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.oAuthApi.oauthRevokeTokens({
    authorization: "some example string",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type OAuthApi.OauthRevokeTokensError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oAuthApi.oauthRevokeTokens({
  authorization: "some example string",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>authorization</code> | <code>string</code> | The OAuth client ID and client secret as<br>[basic access credentials](https://en.wikipedia.org/wiki/Basic_access_authentication).<br><br>Pseudo code: `"Basic " + toBase64(client_id + ":" + client_secret)`<br><br>For example: `Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==` |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[Oauth2TokensRequest1](src/models/oauth2-tokens-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oAuthApi.oauthRevokeTokens(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[OAuthApi.OauthRevokeTokensError](src/resources/oauth-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oAuthApi.oauthRevokeTokens(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, OAuthApi.OauthRevokeTokensError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## OnboardingApi

> Source: [OnboardingApi](src/resources/onboarding-api.ts)

<details>
<summary><code>getOnboardingStatus(request: OnboardingApi.GetOnboardingStatusRequest, options?: RequestOptions): ApiPromise&lt;undefined, OnboardingApi.GetOnboardingStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the onboarding status of the currently authenticated organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.onboardingApi.getOnboardingStatus({ idempotencyKey: "123e4567-e89b-12d3-a456-426" });
} catch (err) {
  // TODO: Handle 'err' of type OnboardingApi.GetOnboardingStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.onboardingApi.getOnboardingStatus({
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.onboardingApi.getOnboardingStatus(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[OnboardingApi.GetOnboardingStatusError](src/resources/onboarding-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.onboardingApi.getOnboardingStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, OnboardingApi.GetOnboardingStatusError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>submitOnboardingData(request: OnboardingApi.SubmitOnboardingDataRequest, options?: RequestOptions): ApiPromise&lt;undefined, OnboardingApi.SubmitOnboardingDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

**⚠️ We no longer recommend implementing this endpoint. Please refer to the Client Links API instead to kick off the
onboarding process for your merchants.**

Submit data that will be prefilled in the merchant's onboarding. The data you submit will only be processed when the
onboarding status is `needs-data`.  
Information that the merchant has entered in their dashboard will not be overwritten.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.onboardingApi.submitOnboardingData({ idempotencyKey: "123e4567-e89b-12d3-a456-426" });
} catch (err) {
  // TODO: Handle 'err' of type OnboardingApi.SubmitOnboardingDataError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.onboardingApi.submitOnboardingData({
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[V2OnboardingMeRequest](src/models/v2-onboarding-me-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.onboardingApi.submitOnboardingData(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[OnboardingApi.SubmitOnboardingDataError](src/resources/onboarding-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.onboardingApi.submitOnboardingData(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, OnboardingApi.SubmitOnboardingDataError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## OrganizationsApi

> Source: [OrganizationsApi](src/resources/organizations-api.ts)

<details>
<summary><code>getCurrentOrganization(request: OrganizationsApi.GetCurrentOrganizationRequest, options?: RequestOptions): ApiPromise&lt;undefined, OrganizationsApi.GetCurrentOrganizationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the currently authenticated organization. A convenient alias of the [Get organization](get-organization)
endpoint.

For a complete reference of the organization object, refer to the [Get organization](get-organization) endpoint
documentation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.organizationsApi.getCurrentOrganization({ idempotencyKey: "123e4567-e89b-12d3-a456-426" });
} catch (err) {
  // TODO: Handle 'err' of type OrganizationsApi.GetCurrentOrganizationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizationsApi.getCurrentOrganization({
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizationsApi.getCurrentOrganization(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[OrganizationsApi.GetCurrentOrganizationError](src/resources/organizations-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizationsApi.getCurrentOrganization(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, OrganizationsApi.GetCurrentOrganizationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOrganization(request: OrganizationsApi.GetOrganizationRequest, options?: RequestOptions): ApiPromise&lt;undefined, OrganizationsApi.GetOrganizationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single organization by its ID.

You can normally only retrieve the currently authenticated organization with this endpoint. This is primarily useful
for OAuth apps. See also [Get current organization](get-current-organization).

If you have a *partner account*', you can retrieve organization details of connected organizations.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.organizationsApi.getOrganization({
    organizationId: "org_1234567",
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type OrganizationsApi.GetOrganizationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizationsApi.getOrganization({
  organizationId: "org_1234567",
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>organizationId</code> | <code>string</code> | Provide the ID of the related organization. |
| <code>testmode?</code> | <code>boolean</code> | You can enable test mode by setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizationsApi.getOrganization(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[OrganizationsApi.GetOrganizationError](src/resources/organizations-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizationsApi.getOrganization(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, OrganizationsApi.GetOrganizationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPartnerStatus(request: OrganizationsApi.GetPartnerStatusRequest, options?: RequestOptions): ApiPromise&lt;undefined, OrganizationsApi.GetPartnerStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve partnership details about the currently authenticated organization. Only relevant for so-called *partner
accounts*.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.organizationsApi.getPartnerStatus({ idempotencyKey: "123e4567-e89b-12d3-a456-426" });
} catch (err) {
  // TODO: Handle 'err' of type OrganizationsApi.GetPartnerStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizationsApi.getPartnerStatus({
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizationsApi.getPartnerStatus(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[OrganizationsApi.GetPartnerStatusError](src/resources/organizations-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizationsApi.getPartnerStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, OrganizationsApi.GetPartnerStatusError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentLinksApi

> Source: [PaymentLinksApi](src/resources/payment-links-api.ts)

<details>
<summary><code>createPaymentLink(request: PaymentLinksApi.CreatePaymentLinkRequest, options?: RequestOptions): ApiPromise&lt;undefined, PaymentLinksApi.CreatePaymentLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

With the Payment links API you can generate payment links that by default, unlike regular payments, do not expire.
The payment link can be shared with your customers and will redirect them to them the payment page where they can
complete the payment. A [payment](get-payment) will only be created once the customer initiates the payment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.paymentLinksApi.createPaymentLink({ idempotencyKey: "123e4567-e89b-12d3-a456-426" });
} catch (err) {
  // TODO: Handle 'err' of type PaymentLinksApi.CreatePaymentLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentLinksApi.createPaymentLink({
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[V2PaymentLinksRequest](src/models/v2-payment-links-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentLinksApi.createPaymentLink(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[PaymentLinksApi.CreatePaymentLinkError](src/resources/payment-links-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentLinksApi.createPaymentLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, PaymentLinksApi.CreatePaymentLinkError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deletePaymentLink(request: PaymentLinksApi.DeletePaymentLinkRequest, options?: RequestOptions): ApiPromise&lt;undefined, PaymentLinksApi.DeletePaymentLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Payment links which have not been opened and no payments have been made yet can be deleted entirely.
This can be useful for removing payment links that have been incorrectly configured or that are no longer relevant.

Once deleted, the payment link will no longer show up in the API or Mollie dashboard.

To simply disable a payment link without fully deleting it, you can use the `archived` parameter on the
[Update payment link](update-payment-link) endpoint instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.paymentLinksApi.deletePaymentLink({
    paymentLinkId: "pl_d9fQur83kFdhH8hIhaZfq",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type PaymentLinksApi.DeletePaymentLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentLinksApi.deletePaymentLink({
  paymentLinkId: "pl_d9fQur83kFdhH8hIhaZfq",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>paymentLinkId</code> | <code>string</code> | Provide the ID of the related payment link. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[DeleteValuesSalesInvoice](src/models/delete-values-sales-invoice.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentLinksApi.deletePaymentLink(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[PaymentLinksApi.DeletePaymentLinkError](src/resources/payment-links-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentLinksApi.deletePaymentLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, PaymentLinksApi.DeletePaymentLinkError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPaymentLink(request: PaymentLinksApi.GetPaymentLinkRequest, options?: RequestOptions): ApiPromise&lt;undefined, PaymentLinksApi.GetPaymentLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single payment link by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.paymentLinksApi.getPaymentLink({
    paymentLinkId: "pl_d9fQur83kFdhH8hIhaZfq",
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type PaymentLinksApi.GetPaymentLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentLinksApi.getPaymentLink({
  paymentLinkId: "pl_d9fQur83kFdhH8hIhaZfq",
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>paymentLinkId</code> | <code>string</code> | Provide the ID of the related payment link. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentLinksApi.getPaymentLink(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[PaymentLinksApi.GetPaymentLinkError](src/resources/payment-links-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentLinksApi.getPaymentLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, PaymentLinksApi.GetPaymentLinkError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPaymentLinkPayments(request: PaymentLinksApi.GetPaymentLinkPaymentsRequest, options?: RequestOptions): ApiPromise&lt;undefined, PaymentLinksApi.GetPaymentLinkPaymentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the list of payments for a specific payment link.

The results are paginated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.paymentLinksApi.getPaymentLinkPayments({
    paymentLinkId: "pl_d9fQur83kFdhH8hIhaZfq",
    from: "tr_5B8cwPMGnU",
    limit: 50,
    sort: Sorting.Desc,
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type PaymentLinksApi.GetPaymentLinkPaymentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentLinksApi.getPaymentLinkPayments({
  paymentLinkId: "pl_d9fQur83kFdhH8hIhaZfq",
  from: "tr_5B8cwPMGnU",
  limit: 50,
  sort: Sorting.Desc,
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>paymentLinkId</code> | <code>string</code> | Provide the ID of the related payment link. |
| <code>from?</code> | <code>string</code> | Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate the<br>result set. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Defaults to 50 items. |
| <code>sort?</code> | <code>[Sorting](src/models/sorting.ts)</code> | Used for setting the direction of the result set. Defaults to descending order, meaning the results are ordered from<br>newest to oldest. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentLinksApi.getPaymentLinkPayments(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[PaymentLinksApi.GetPaymentLinkPaymentsError](src/resources/payment-links-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentLinksApi.getPaymentLinkPayments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, PaymentLinksApi.GetPaymentLinkPaymentsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPaymentLinks(request: PaymentLinksApi.ListPaymentLinksRequest, options?: RequestOptions): ApiPromise&lt;undefined, PaymentLinksApi.ListPaymentLinksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of all payment links.

The results are paginated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.paymentLinksApi.listPaymentLinks({
    from: "pl_d9fQur83kFdhH8hIhaZfq",
    limit: 50,
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type PaymentLinksApi.ListPaymentLinksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentLinksApi.listPaymentLinks({
  from: "pl_d9fQur83kFdhH8hIhaZfq",
  limit: 50,
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>from?</code> | <code>string</code> | Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate the<br>result set. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Defaults to 50 items. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentLinksApi.listPaymentLinks(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[PaymentLinksApi.ListPaymentLinksError](src/resources/payment-links-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentLinksApi.listPaymentLinks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, PaymentLinksApi.ListPaymentLinksError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePaymentLink(request: PaymentLinksApi.UpdatePaymentLinkRequest, options?: RequestOptions): ApiPromise&lt;undefined, PaymentLinksApi.UpdatePaymentLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Certain details of an existing payment link can be updated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.paymentLinksApi.updatePaymentLink({
    paymentLinkId: "pl_d9fQur83kFdhH8hIhaZfq",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type PaymentLinksApi.UpdatePaymentLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentLinksApi.updatePaymentLink({
  paymentLinkId: "pl_d9fQur83kFdhH8hIhaZfq",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>paymentLinkId</code> | <code>string</code> | Provide the ID of the related payment link. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[V2PaymentLinksRequest1](src/models/v2-payment-links-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentLinksApi.updatePaymentLink(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[PaymentLinksApi.UpdatePaymentLinkError](src/resources/payment-links-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentLinksApi.updatePaymentLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, PaymentLinksApi.UpdatePaymentLinkError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentsApi

> Source: [PaymentsApi](src/resources/payments-api.ts)

<details>
<summary><code>cancelPayment(request: PaymentsApi.CancelPaymentRequest, options?: RequestOptions): ApiPromise&lt;undefined, PaymentsApi.CancelPaymentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Depending on the payment method, you may be able to cancel a payment for a certain amount of time — usually until
the next business day or as long as the payment status is open.

Payments may also be canceled manually from the Mollie Dashboard.

The `isCancelable` property on the [Payment object](get-payment) will indicate if the payment can be canceled.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.paymentsApi.cancelPayment({
    paymentId: "tr_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type PaymentsApi.CancelPaymentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentsApi.cancelPayment({
  paymentId: "tr_5B8cwPMGnU",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>paymentId</code> | <code>string</code> | Provide the ID of the related payment. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[V2PaymentsRequest1](src/models/v2-payments-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentsApi.cancelPayment(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[PaymentsApi.CancelPaymentError](src/resources/payments-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentsApi.cancelPayment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, PaymentsApi.CancelPaymentError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createPayment(request: PaymentsApi.CreatePaymentRequest, options?: RequestOptions): ApiPromise&lt;undefined, PaymentsApi.CreatePaymentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Payment creation is elemental to the Mollie API: this is where most payment
implementations start off.

Once you have created a payment, you should redirect your customer to the
URL in the `_links.checkout` property from the response.

To wrap your head around the payment process, an explanation and flow charts
can be found in the 'Accepting payments' guide.

If you specify the `method` parameter when creating a payment, optional
additional parameters may be available for the payment method that are not listed below. Please refer to the
guide on [method-specific parameters](extra-payment-parameters).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.paymentsApi.createPayment({ idempotencyKey: "123e4567-e89b-12d3-a456-426" });
} catch (err) {
  // TODO: Handle 'err' of type PaymentsApi.CreatePaymentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentsApi.createPayment({
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>include?</code> | <code>string</code> | This endpoint allows you to include additional information via the `include` query string parameter. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[PaymentRequest](src/models/payment-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentsApi.createPayment(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[PaymentsApi.CreatePaymentError](src/resources/payments-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentsApi.createPayment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, PaymentsApi.CreatePaymentError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPayment(request: PaymentsApi.GetPaymentRequest, options?: RequestOptions): ApiPromise&lt;undefined, PaymentsApi.GetPaymentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single payment object by its payment ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.paymentsApi.getPayment({
    paymentId: "tr_5B8cwPMGnU",
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
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
const result = await client.paymentsApi.getPayment({
  paymentId: "tr_5B8cwPMGnU",
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>paymentId</code> | <code>string</code> | Provide the ID of the related payment. |
| <code>include?</code> | <code>string</code> | This endpoint allows you to include additional information via the `include` query string parameter. |
| <code>embed?</code> | <code>string</code> | This endpoint allows embedding related API items by appending the<br>following values via the `embed` query string parameter. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentsApi.getPayment(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[PaymentsApi.GetPaymentError](src/resources/payments-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentsApi.getPayment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, PaymentsApi.GetPaymentError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPayments(request: PaymentsApi.ListPaymentsRequest, options?: RequestOptions): ApiPromise&lt;undefined, PaymentsApi.ListPaymentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all payments created with the current website profile.

The results are paginated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.paymentsApi.listPayments({
    from: "tr_5B8cwPMGnU",
    limit: 50,
    sort: Sorting.Desc,
    profileId: "pfl_5B8cwPMGnU",
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type PaymentsApi.ListPaymentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentsApi.listPayments({
  from: "tr_5B8cwPMGnU",
  limit: 50,
  sort: Sorting.Desc,
  profileId: "pfl_5B8cwPMGnU",
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>from?</code> | <code>string</code> | Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate<br>the result set. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Defaults to 50 items. |
| <code>sort?</code> | <code>[Sorting](src/models/sorting.ts)</code> | Used for setting the direction of the result set. Defaults to descending order, meaning the results are ordered from<br>newest to oldest. |
| <code>profileId?</code> | <code>string</code> | The identifier referring to the [profile](get-profile) you wish to<br>retrieve the resources for.<br><br>Most API credentials are linked to a single profile. In these cases the `profileId` must not be sent. For<br>organization-level credentials such as OAuth access tokens however, the `profileId` parameter is required. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentsApi.listPayments(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[PaymentsApi.ListPaymentsError](src/resources/payments-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentsApi.listPayments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, PaymentsApi.ListPaymentsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>releaseAuthorization(request: PaymentsApi.ReleaseAuthorizationRequest, options?: RequestOptions): ApiPromise&lt;undefined, PaymentsApi.ReleaseAuthorizationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Releases the full remaining authorized amount. Call this endpoint when you will not be making any additional
captures. Payment authorizations may also be released manually from the Mollie Dashboard.

Mollie will do its best to process release requests, but it is not guaranteed that it will succeed. It is up to
the issuing bank if and when the hold will be released.

If the request does succeed, the payment status will change to `canceled` for payments without captures.
If there is a successful capture, the payment will transition to `paid`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.paymentsApi.releaseAuthorization({
    paymentId: "tr_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type PaymentsApi.ReleaseAuthorizationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentsApi.releaseAuthorization({
  paymentId: "tr_5B8cwPMGnU",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>paymentId</code> | <code>string</code> | Provide the ID of the related payment. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[V2PaymentsReleaseAuthorizationRequest](src/models/v2-payments-release-authorization-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentsApi.releaseAuthorization(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[PaymentsApi.ReleaseAuthorizationError](src/resources/payments-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentsApi.releaseAuthorization(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, PaymentsApi.ReleaseAuthorizationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePayment(request: PaymentsApi.UpdatePaymentRequest, options?: RequestOptions): ApiPromise&lt;undefined, PaymentsApi.UpdatePaymentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Certain details of an existing payment can be updated.

Updating the payment details will not result in a webhook call.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.paymentsApi.updatePayment({
    paymentId: "tr_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type PaymentsApi.UpdatePaymentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentsApi.updatePayment({
  paymentId: "tr_5B8cwPMGnU",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>paymentId</code> | <code>string</code> | Provide the ID of the related payment. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[V2PaymentsRequest](src/models/v2-payments-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentsApi.updatePayment(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[PaymentsApi.UpdatePaymentError](src/resources/payments-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentsApi.updatePayment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, PaymentsApi.UpdatePaymentError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PayoutsApi

> Source: [PayoutsApi](src/resources/payouts-api.ts)

<details>
<summary><code>cancelPayout(request: PayoutsApi.CancelPayoutRequest, options?: RequestOptions): ApiPromise&lt;undefined, PayoutsApi.CancelPayoutError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel a payout. A payout can only be canceled while it has the status `requested`. Once the payout moves
to `initiated`, it is too late to cancel.

The canceled payout object is returned with the status set to `canceled`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.payoutsApi.cancelPayout({
    payoutId: "payout_j8NvRAM2WNZtsykpLEX8J",
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type PayoutsApi.CancelPayoutError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payoutsApi.cancelPayout({
  payoutId: "payout_j8NvRAM2WNZtsykpLEX8J",
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>payoutId</code> | <code>string</code> | Provide the ID of the payout. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payoutsApi.cancelPayout(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[PayoutsApi.CancelPayoutError](src/resources/payouts-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payoutsApi.cancelPayout(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, PayoutsApi.CancelPayoutError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createPayout(request: PayoutsApi.CreatePayoutRequest, options?: RequestOptions): ApiPromise&lt;undefined, PayoutsApi.CreatePayoutError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Request a payout from one of your balances to the balance's configured bank account.

The payout will be executed on the next scheduled business day. If no `amount` is specified, the full available
balance minus any configured balance reserve is paid out.

Once the payout is created with status `requested`, you can cancel it via the
[Cancel payout](cancel-payout) endpoint, up until the payout moves to `initiated`.

Creating a payout via the API automatically sets the balance's `transferFrequency` to `never`,
pausing any previously configured automatic settlement schedule. To resume automatic settlements,
update the transfer frequency via the dashboard.

### Webhooks

Subscribe to the following webhook events to track payout status changes. See the
[Webhook Subscriptions API](list-webhooks) for details on subscribing.

| Event | Description |
|---|---|
| `payout.initiated` | The payout is being executed and funds are reserved. |
| `payout.processing-at-bank` | The payout has been submitted to the bank. |
| `payout.completed` | The payout has been sent to the destination bank account. |
| `payout.canceled` | The payout was canceled via the API before being submitted to the bank. |
| `payout.failed` | The payout failed after creation, including bank rejections and post-submission cancellations. |

### Payout failure reasons

A payout request may fail immediately if one of the following conditions applies:

- A payout is already scheduled for the next business day for this balance.
- The balance has insufficient funds.
- The balance is not active.
- Payouts are blocked for this organization.
- The balance has queued refunds.
- One of the organization's balances is below the negative balance threshold.
- The payout destination (bank account) is invalid or not configured.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.payoutsApi.createPayout({
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    body: {
      resource: "some example string",
      id: "some example string",
      balanceId: "some example string",
      status: PayoutStatus.Requested,
      statusReason: { code: PayoutStatusReasonCode.Requested, message: "some example string" },
      createdAt: "some example string",
      mode: Mode.Live,
    },
  });
} catch (err) {
  // TODO: Handle 'err' of type PayoutsApi.CreatePayoutError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payoutsApi.createPayout({
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
  body: {
    resource: "some example string",
    id: "some example string",
    balanceId: "some example string",
    status: PayoutStatus.Requested,
    statusReason: { code: PayoutStatusReasonCode.Requested, message: "some example string" },
    createdAt: "some example string",
    mode: Mode.Live,
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
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body</code> | <code>[PayoutRequest](src/models/payout-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payoutsApi.createPayout(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[PayoutsApi.CreatePayoutError](src/resources/payouts-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payoutsApi.createPayout(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, PayoutsApi.CreatePayoutError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPayout(request: PayoutsApi.GetPayoutRequest, options?: RequestOptions): ApiPromise&lt;undefined, PayoutsApi.GetPayoutError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single payout by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.payoutsApi.getPayout({
    payoutId: "payout_j8NvRAM2WNZtsykpLEX8J",
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type PayoutsApi.GetPayoutError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payoutsApi.getPayout({
  payoutId: "payout_j8NvRAM2WNZtsykpLEX8J",
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>payoutId</code> | <code>string</code> | Provide the ID of the payout. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payoutsApi.getPayout(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[PayoutsApi.GetPayoutError](src/resources/payouts-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payoutsApi.getPayout(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, PayoutsApi.GetPayoutError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPayouts(request: PayoutsApi.ListPayoutsRequest, options?: RequestOptions): ApiPromise&lt;undefined, PayoutsApi.ListPayoutsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of all payouts for your organization, including payouts initiated automatically by the
balance's payout schedule and payouts requested via the API or dashboard.

Only payouts created on or after April 1st, 2026 are returned.

The results are paginated. Use the `from` query parameter together with `_links.next` to iterate through
the full result set.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.payoutsApi.listPayouts({
    balanceId: "bal_gVMhHKqSSRYJyPsuoPNFH",
    limit: 50,
    sort: Sorting.Desc,
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type PayoutsApi.ListPayoutsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payoutsApi.listPayouts({
  balanceId: "bal_gVMhHKqSSRYJyPsuoPNFH",
  limit: 50,
  sort: Sorting.Desc,
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>balanceId?</code> | <code>string</code> | Return only payouts for the balance with the given ID. The value must be a valid balance<br>token in the format `bal_*`. |
| <code>from?</code> | <code>string</code> | Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate the<br>result set. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Defaults to 50 items. |
| <code>sort?</code> | <code>[Sorting](src/models/sorting.ts)</code> | Used for setting the direction of the result set. Defaults to descending order, meaning the results are ordered from<br>newest to oldest. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payoutsApi.listPayouts(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[PayoutsApi.ListPayoutsError](src/resources/payouts-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payoutsApi.listPayouts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, PayoutsApi.ListPayoutsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PermissionsApi

> Source: [PermissionsApi](src/resources/permissions-api.ts)

<details>
<summary><code>getPermission(request: PermissionsApi.GetPermissionRequest, options?: RequestOptions): ApiPromise&lt;undefined, PermissionsApi.GetPermissionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single permission by its ID, and see if the permission is granted to the current access token.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.permissionsApi.getPermission({
    permissionId: "payments.read",
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type PermissionsApi.GetPermissionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.permissionsApi.getPermission({
  permissionId: "payments.read",
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>permissionId</code> | <code>string</code> | Provide the ID of the related permission. |
| <code>testmode?</code> | <code>boolean</code> | You can enable test mode by setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.permissionsApi.getPermission(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[PermissionsApi.GetPermissionError](src/resources/permissions-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.permissionsApi.getPermission(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, PermissionsApi.GetPermissionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPermissions(request: PermissionsApi.ListPermissionsRequest, options?: RequestOptions): ApiPromise&lt;undefined, PermissionsApi.ListPermissionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of all permissions available to the current access token.

The results are **not** paginated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.permissionsApi.listPermissions({ idempotencyKey: "123e4567-e89b-12d3-a456-426" });
} catch (err) {
  // TODO: Handle 'err' of type PermissionsApi.ListPermissionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.permissionsApi.listPermissions({
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.permissionsApi.listPermissions(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[PermissionsApi.ListPermissionsError](src/resources/permissions-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.permissionsApi.listPermissions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, PermissionsApi.ListPermissionsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ProfilesApi

> Source: [ProfilesApi](src/resources/profiles-api.ts)

<details>
<summary><code>createProfile(request: ProfilesApi.CreateProfileRequest, options?: RequestOptions): ApiPromise&lt;undefined, ProfilesApi.CreateProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a profile to process payments on.

Profiles are required for payment processing. Normally they are created via the Mollie dashboard. Alternatively, you
can use this endpoint to automate profile creation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.profilesApi.createProfile({
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    body: {
      name: "some example string",
      website: "some example string",
      email: "some example string",
      phone: "some example string",
    },
  });
} catch (err) {
  // TODO: Handle 'err' of type ProfilesApi.CreateProfileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.profilesApi.createProfile({
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
  body: {
    name: "some example string",
    website: "some example string",
    email: "some example string",
    phone: "some example string",
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
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body</code> | <code>[ProfileRequest](src/models/profile-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.profilesApi.createProfile(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ProfilesApi.CreateProfileError](src/resources/profiles-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.profilesApi.createProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ProfilesApi.CreateProfileError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteProfile(request: ProfilesApi.DeleteProfileRequest, options?: RequestOptions): ApiPromise&lt;undefined, ProfilesApi.DeleteProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a profile. A deleted profile and its related credentials can no longer be used for accepting payments.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.profilesApi.deleteProfile({
    profileId: "pfl_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type ProfilesApi.DeleteProfileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.profilesApi.deleteProfile({
  profileId: "pfl_5B8cwPMGnU",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>profileId</code> | <code>string</code> | Provide the ID of the related profile. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.profilesApi.deleteProfile(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ProfilesApi.DeleteProfileError](src/resources/profiles-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.profilesApi.deleteProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ProfilesApi.DeleteProfileError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCurrentProfile(request: ProfilesApi.GetCurrentProfileRequest, options?: RequestOptions): ApiPromise&lt;undefined, ProfilesApi.GetCurrentProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the currently authenticated profile. A convenient alias of the [Get profile](get-profile)
endpoint.

For a complete reference of the profile object, refer to the [Get profile](get-profile) endpoint
documentation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.profilesApi.getCurrentProfile({ idempotencyKey: "123e4567-e89b-12d3-a456-426" });
} catch (err) {
  // TODO: Handle 'err' of type ProfilesApi.GetCurrentProfileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.profilesApi.getCurrentProfile({
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.profilesApi.getCurrentProfile(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ProfilesApi.GetCurrentProfileError](src/resources/profiles-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.profilesApi.getCurrentProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ProfilesApi.GetCurrentProfileError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProfile(request: ProfilesApi.GetProfileRequest, options?: RequestOptions): ApiPromise&lt;undefined, ProfilesApi.GetProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single profile by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.profilesApi.getProfile({
    profileId: "pfl_5B8cwPMGnU",
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type ProfilesApi.GetProfileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.profilesApi.getProfile({
  profileId: "pfl_5B8cwPMGnU",
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>profileId</code> | <code>string</code> | Provide the ID of the related profile. |
| <code>testmode?</code> | <code>boolean</code> | You can enable test mode by setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.profilesApi.getProfile(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ProfilesApi.GetProfileError](src/resources/profiles-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.profilesApi.getProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ProfilesApi.GetProfileError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listProfiles(request: ProfilesApi.ListProfilesRequest, options?: RequestOptions): ApiPromise&lt;undefined, ProfilesApi.ListProfilesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of all of your profiles.

The results are paginated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.profilesApi.listProfiles({ limit: 50, idempotencyKey: "123e4567-e89b-12d3-a456-426" });
} catch (err) {
  // TODO: Handle 'err' of type ProfilesApi.ListProfilesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.profilesApi.listProfiles({
  limit: 50,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>from?</code> | <code>string</code> | Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate the<br>result set. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Defaults to 50 items. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.profilesApi.listProfiles(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ProfilesApi.ListProfilesError](src/resources/profiles-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.profilesApi.listProfiles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ProfilesApi.ListProfilesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateProfile(request: ProfilesApi.UpdateProfileRequest, options?: RequestOptions): ApiPromise&lt;undefined, ProfilesApi.UpdateProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing profile.

Profiles are required for payment processing. Normally they are created and updated via the Mollie dashboard.
Alternatively, you can use this endpoint to automate profile management.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.profilesApi.updateProfile({
    profileId: "pfl_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    body: {},
  });
} catch (err) {
  // TODO: Handle 'err' of type ProfilesApi.UpdateProfileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.profilesApi.updateProfile({
  profileId: "pfl_5B8cwPMGnU",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>profileId</code> | <code>string</code> | Provide the ID of the related profile. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body</code> | <code>[V2ProfilesRequest](src/models/v2-profiles-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.profilesApi.updateProfile(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ProfilesApi.UpdateProfileError](src/resources/profiles-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.profilesApi.updateProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ProfilesApi.UpdateProfileError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## RefundsApi

> Source: [RefundsApi](src/resources/refunds-api.ts)

<details>
<summary><code>cancelRefund(request: RefundsApi.CancelRefundRequest, options?: RequestOptions): ApiPromise&lt;undefined, RefundsApi.CancelRefundError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Refunds will be executed with a delay of two hours. Until that time, refunds may be canceled manually via the
Mollie Dashboard, or by using this endpoint.

A refund can only be canceled while its `status` field is either `queued` or `pending`. See the
[Get refund endpoint](get-refund) for more information.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.refundsApi.cancelRefund({
    paymentId: "tr_5B8cwPMGnU",
    refundId: "re_5B8cwPMGnU",
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type RefundsApi.CancelRefundError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.refundsApi.cancelRefund({
  paymentId: "tr_5B8cwPMGnU",
  refundId: "re_5B8cwPMGnU",
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>paymentId</code> | <code>string</code> | Provide the ID of the related payment. |
| <code>refundId</code> | <code>string</code> | Provide the ID of the related refund. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.refundsApi.cancelRefund(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[RefundsApi.CancelRefundError](src/resources/refunds-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.refundsApi.cancelRefund(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, RefundsApi.CancelRefundError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createRefund(request: RefundsApi.CreateRefundRequest, options?: RequestOptions): ApiPromise&lt;undefined, RefundsApi.CreateRefundError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a refund for a specific payment. The refunded amount is credited to your customer usually either via a bank
transfer or by refunding the amount to your customer's credit card.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.refundsApi.createRefund({
    paymentId: "tr_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type RefundsApi.CreateRefundError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.refundsApi.createRefund({
  paymentId: "tr_5B8cwPMGnU",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>paymentId</code> | <code>string</code> | Provide the ID of the related payment. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[RefundRequest](src/models/refund-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.refundsApi.createRefund(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[RefundsApi.CreateRefundError](src/resources/refunds-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.refundsApi.createRefund(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, RefundsApi.CreateRefundError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRefund(request: RefundsApi.GetRefundRequest, options?: RequestOptions): ApiPromise&lt;undefined, RefundsApi.GetRefundError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single payment refund by its ID and the ID of its parent payment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.refundsApi.getRefund({
    paymentId: "tr_5B8cwPMGnU",
    refundId: "re_5B8cwPMGnU",
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type RefundsApi.GetRefundError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.refundsApi.getRefund({
  paymentId: "tr_5B8cwPMGnU",
  refundId: "re_5B8cwPMGnU",
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>paymentId</code> | <code>string</code> | Provide the ID of the related payment. |
| <code>refundId</code> | <code>string</code> | Provide the ID of the related refund. |
| <code>embed?</code> | <code>string</code> | This endpoint allows embedding related API items by appending the following values via the `embed` query string<br>parameter. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.refundsApi.getRefund(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[RefundsApi.GetRefundError](src/resources/refunds-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.refundsApi.getRefund(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, RefundsApi.GetRefundError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAllRefunds(request: RefundsApi.ListAllRefundsRequest, options?: RequestOptions): ApiPromise&lt;undefined, RefundsApi.ListAllRefundsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of all of your refunds.

The results are paginated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.refundsApi.listAllRefunds({
    from: "re_5B8cwPMGnU",
    limit: 50,
    sort: Sorting.Desc,
    profileId: "pfl_5B8cwPMGnU",
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type RefundsApi.ListAllRefundsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.refundsApi.listAllRefunds({
  from: "re_5B8cwPMGnU",
  limit: 50,
  sort: Sorting.Desc,
  profileId: "pfl_5B8cwPMGnU",
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>from?</code> | <code>string</code> | Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate the<br>result set. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Defaults to 50 items. |
| <code>sort?</code> | <code>[Sorting](src/models/sorting.ts)</code> | Used for setting the direction of the result set. Defaults to descending order, meaning the results are ordered from<br>newest to oldest. |
| <code>embed?</code> | <code>string</code> | This endpoint allows embedding related API items by appending the following values via the `embed` query string<br>parameter. |
| <code>profileId?</code> | <code>string</code> | The identifier referring to the [profile](get-profile) you wish to<br>retrieve the resources for.<br><br>Most API credentials are linked to a single profile. In these cases the `profileId` must not be sent. For<br>organization-level credentials such as OAuth access tokens however, the `profileId` parameter is required. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.refundsApi.listAllRefunds(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[RefundsApi.ListAllRefundsError](src/resources/refunds-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.refundsApi.listAllRefunds(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, RefundsApi.ListAllRefundsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listRefunds(request: RefundsApi.ListRefundsRequest, options?: RequestOptions): ApiPromise&lt;undefined, RefundsApi.ListRefundsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of all refunds created for a specific payment.

The results are paginated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.refundsApi.listRefunds({
    paymentId: "tr_5B8cwPMGnU",
    from: "re_5B8cwPMGnU",
    limit: 50,
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type RefundsApi.ListRefundsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.refundsApi.listRefunds({
  paymentId: "tr_5B8cwPMGnU",
  from: "re_5B8cwPMGnU",
  limit: 50,
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>paymentId</code> | <code>string</code> | Provide the ID of the related payment. |
| <code>from?</code> | <code>string</code> | Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate the<br>result set. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Defaults to 50 items. |
| <code>embed?</code> | <code>string</code> | This endpoint allows embedding related API items by appending the following values via the `embed` query string<br>parameter. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.refundsApi.listRefunds(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[RefundsApi.ListRefundsError](src/resources/refunds-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.refundsApi.listRefunds(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, RefundsApi.ListRefundsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SalesInvoicesApi

> Source: [SalesInvoicesApi](src/resources/sales-invoices-api.ts)

<details>
<summary><code>createSalesInvoice(request: SalesInvoicesApi.CreateSalesInvoiceRequest, options?: RequestOptions): ApiPromise&lt;undefined, SalesInvoicesApi.CreateSalesInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

With the Sales Invoice API you can generate sales invoices to send to your customers.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.salesInvoicesApi.createSalesInvoice({ idempotencyKey: "123e4567-e89b-12d3-a456-426" });
} catch (err) {
  // TODO: Handle 'err' of type SalesInvoicesApi.CreateSalesInvoiceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.salesInvoicesApi.createSalesInvoice({
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[SalesInvoiceRequest](src/models/sales-invoice-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.salesInvoicesApi.createSalesInvoice(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SalesInvoicesApi.CreateSalesInvoiceError](src/resources/sales-invoices-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.salesInvoicesApi.createSalesInvoice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SalesInvoicesApi.CreateSalesInvoiceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSalesInvoice(request: SalesInvoicesApi.DeleteSalesInvoiceRequest, options?: RequestOptions): ApiPromise&lt;undefined, SalesInvoicesApi.DeleteSalesInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sales invoices which are in status `draft` can be deleted. For all other statuses, please use the
[Update sales invoice](update-sales-invoice) endpoint instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.salesInvoicesApi.deleteSalesInvoice({
    salesInvoiceId: "invoice_4Y0eZitmBnQ6IDoMqZQKh",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type SalesInvoicesApi.DeleteSalesInvoiceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.salesInvoicesApi.deleteSalesInvoice({
  salesInvoiceId: "invoice_4Y0eZitmBnQ6IDoMqZQKh",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>salesInvoiceId</code> | <code>string</code> | Provide the ID of the related sales invoice. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[DeleteValuesSalesInvoice](src/models/delete-values-sales-invoice.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.salesInvoicesApi.deleteSalesInvoice(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SalesInvoicesApi.DeleteSalesInvoiceError](src/resources/sales-invoices-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.salesInvoicesApi.deleteSalesInvoice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SalesInvoicesApi.DeleteSalesInvoiceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSalesInvoice(request: SalesInvoicesApi.GetSalesInvoiceRequest, options?: RequestOptions): ApiPromise&lt;undefined, SalesInvoicesApi.GetSalesInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single sales invoice by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.salesInvoicesApi.getSalesInvoice({
    salesInvoiceId: "invoice_4Y0eZitmBnQ6IDoMqZQKh",
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type SalesInvoicesApi.GetSalesInvoiceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.salesInvoicesApi.getSalesInvoice({
  salesInvoiceId: "invoice_4Y0eZitmBnQ6IDoMqZQKh",
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>salesInvoiceId</code> | <code>string</code> | Provide the ID of the related sales invoice. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.salesInvoicesApi.getSalesInvoice(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SalesInvoicesApi.GetSalesInvoiceError](src/resources/sales-invoices-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.salesInvoicesApi.getSalesInvoice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SalesInvoicesApi.GetSalesInvoiceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSalesInvoices(request: SalesInvoicesApi.ListSalesInvoicesRequest, options?: RequestOptions): ApiPromise&lt;undefined, SalesInvoicesApi.ListSalesInvoicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of all sales invoices created through the API.

The results are paginated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.salesInvoicesApi.listSalesInvoices({
    limit: 50,
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type SalesInvoicesApi.ListSalesInvoicesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.salesInvoicesApi.listSalesInvoices({
  limit: 50,
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>from?</code> | <code>string</code> | Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate the<br>result set. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Defaults to 50 items. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.salesInvoicesApi.listSalesInvoices(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SalesInvoicesApi.ListSalesInvoicesError](src/resources/sales-invoices-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.salesInvoicesApi.listSalesInvoices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SalesInvoicesApi.ListSalesInvoicesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSalesInvoice(request: SalesInvoicesApi.UpdateSalesInvoiceRequest, options?: RequestOptions): ApiPromise&lt;undefined, SalesInvoicesApi.UpdateSalesInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Certain details of an existing sales invoice can be updated. For `draft` it is all values listed below, but for
statuses `paid` and `issued` there are certain additional requirements (`paymentDetails` and `emailDetails`,
respectively).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.salesInvoicesApi.updateSalesInvoice({
    salesInvoiceId: "invoice_4Y0eZitmBnQ6IDoMqZQKh",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type SalesInvoicesApi.UpdateSalesInvoiceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.salesInvoicesApi.updateSalesInvoice({
  salesInvoiceId: "invoice_4Y0eZitmBnQ6IDoMqZQKh",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>salesInvoiceId</code> | <code>string</code> | Provide the ID of the related sales invoice. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[UpdateValuesSalesInvoice](src/models/update-values-sales-invoice.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.salesInvoicesApi.updateSalesInvoice(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SalesInvoicesApi.UpdateSalesInvoiceError](src/resources/sales-invoices-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.salesInvoicesApi.updateSalesInvoice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SalesInvoicesApi.UpdateSalesInvoiceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SettlementsApi

> Source: [SettlementsApi](src/resources/settlements-api.ts)

<details>
<summary><code>getNextSettlement(request: SettlementsApi.GetNextSettlementRequest, options?: RequestOptions): ApiPromise&lt;undefined, SettlementsApi.GetNextSettlementError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the details of the current settlement, that has not yet been paid out.

For a complete reference of the settlement object, refer to the [Get settlement endpoint](get-settlement)
documentation.

For more accurate bookkeeping, refer to the [balance report](get-balance-report) endpoint or the
[balance transactions](list-balance-transactions) endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.settlementsApi.getNextSettlement({ idempotencyKey: "123e4567-e89b-12d3-a456-426" });
} catch (err) {
  // TODO: Handle 'err' of type SettlementsApi.GetNextSettlementError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.settlementsApi.getNextSettlement({
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.settlementsApi.getNextSettlement(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SettlementsApi.GetNextSettlementError](src/resources/settlements-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.settlementsApi.getNextSettlement(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SettlementsApi.GetNextSettlementError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOpenSettlement(request: SettlementsApi.GetOpenSettlementRequest, options?: RequestOptions): ApiPromise&lt;undefined, SettlementsApi.GetOpenSettlementError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the details of the open balance of the organization. This will return a settlement object representing your
organization's balance.

For a complete reference of the settlement object, refer to the [Get settlement endpoint](get-settlement)
documentation.

For more accurate bookkeeping, refer to the [balance report](get-balance-report) endpoint or the
[balance transactions](list-balance-transactions) endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.settlementsApi.getOpenSettlement({ idempotencyKey: "123e4567-e89b-12d3-a456-426" });
} catch (err) {
  // TODO: Handle 'err' of type SettlementsApi.GetOpenSettlementError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.settlementsApi.getOpenSettlement({
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.settlementsApi.getOpenSettlement(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SettlementsApi.GetOpenSettlementError](src/resources/settlements-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.settlementsApi.getOpenSettlement(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SettlementsApi.GetOpenSettlementError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSettlement(request: SettlementsApi.GetSettlementRequest, options?: RequestOptions): ApiPromise&lt;undefined, SettlementsApi.GetSettlementError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single settlement by its ID.

To lookup settlements by their bank reference, replace the ID in the URL by
a reference. For example: `1234567.2404.03`.

A settlement represents a transfer of your balance funds to your external bank account.

Settlements will typically include a report that details what balance transactions have taken place between this
settlement and the previous one.

For more accurate bookkeeping, refer to the [balance report](get-balance-report) endpoint or the
[balance transactions](list-balance-transactions) endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.settlementsApi.getSettlement({
    settlementId: "stl_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type SettlementsApi.GetSettlementError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.settlementsApi.getSettlement({
  settlementId: "stl_5B8cwPMGnU",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>settlementId</code> | <code>string</code> | Provide the ID of the related settlement. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.settlementsApi.getSettlement(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SettlementsApi.GetSettlementError](src/resources/settlements-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.settlementsApi.getSettlement(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SettlementsApi.GetSettlementError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSettlementCaptures(request: SettlementsApi.ListSettlementCapturesRequest, options?: RequestOptions): ApiPromise&lt;undefined, SettlementsApi.ListSettlementCapturesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all captures included in the given settlement.

The response is in the same format as the response of the [List captures endpoint](list-captures).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.settlementsApi.listSettlementCaptures({
    settlementId: "stl_5B8cwPMGnU",
    from: "cpt_vytxeTZskVKR7C7WgdSP3d",
    limit: 50,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type SettlementsApi.ListSettlementCapturesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.settlementsApi.listSettlementCaptures({
  settlementId: "stl_5B8cwPMGnU",
  from: "cpt_vytxeTZskVKR7C7WgdSP3d",
  limit: 50,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>settlementId</code> | <code>string</code> | Provide the ID of the related settlement. |
| <code>from?</code> | <code>string</code> | Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate<br>the result set. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Defaults to 50 items. |
| <code>embed?</code> | <code>string</code> | This endpoint allows you to embed additional resources via the<br>`embed` query string parameter. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.settlementsApi.listSettlementCaptures(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SettlementsApi.ListSettlementCapturesError](src/resources/settlements-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.settlementsApi.listSettlementCaptures(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SettlementsApi.ListSettlementCapturesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSettlementChargebacks(request: SettlementsApi.ListSettlementChargebacksRequest, options?: RequestOptions): ApiPromise&lt;undefined, SettlementsApi.ListSettlementChargebacksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all chargebacks 'deducted' from the given settlement.

The response is in the same format as the response of the [List chargebacks endpoint](list-chargebacks).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.settlementsApi.listSettlementChargebacks({
    settlementId: "stl_5B8cwPMGnU",
    from: "chb_xFzwUN4ci8HAmSGUACS4J",
    limit: 50,
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type SettlementsApi.ListSettlementChargebacksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.settlementsApi.listSettlementChargebacks({
  settlementId: "stl_5B8cwPMGnU",
  from: "chb_xFzwUN4ci8HAmSGUACS4J",
  limit: 50,
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>settlementId</code> | <code>string</code> | Provide the ID of the related settlement. |
| <code>from?</code> | <code>string</code> | Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate the<br>result set. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Defaults to 50 items. |
| <code>embed?</code> | <code>string</code> | This endpoint allows you to embed additional information via the `embed` query string parameter. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.settlementsApi.listSettlementChargebacks(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SettlementsApi.ListSettlementChargebacksError](src/resources/settlements-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.settlementsApi.listSettlementChargebacks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SettlementsApi.ListSettlementChargebacksError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSettlementPayments(request: SettlementsApi.ListSettlementPaymentsRequest, options?: RequestOptions): ApiPromise&lt;undefined, SettlementsApi.ListSettlementPaymentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all payments included in the given settlement.

The response is in the same format as the response of the [List payments endpoint](list-payments).

For capture-based payment methods such as Klarna, the payments are not listed here. Refer to the
[List captures endpoint](list-captures) endpoint instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.settlementsApi.listSettlementPayments({
    settlementId: "stl_5B8cwPMGnU",
    from: "tr_5B8cwPMGnU",
    limit: 50,
    sort: Sorting.Desc,
    profileId: "pfl_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type SettlementsApi.ListSettlementPaymentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.settlementsApi.listSettlementPayments({
  settlementId: "stl_5B8cwPMGnU",
  from: "tr_5B8cwPMGnU",
  limit: 50,
  sort: Sorting.Desc,
  profileId: "pfl_5B8cwPMGnU",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>settlementId</code> | <code>string</code> | Provide the ID of the related settlement. |
| <code>from?</code> | <code>string</code> | Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate<br>the result set. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Defaults to 50 items. |
| <code>sort?</code> | <code>[Sorting](src/models/sorting.ts)</code> | Used for setting the direction of the result set. Defaults to descending order, meaning the results are ordered from<br>newest to oldest. |
| <code>profileId?</code> | <code>string</code> | The identifier referring to the [profile](get-profile) you wish to<br>retrieve the resources for.<br><br>Most API credentials are linked to a single profile. In these cases the `profileId` must not be sent. For<br>organization-level credentials such as OAuth access tokens however, the `profileId` parameter is required. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.settlementsApi.listSettlementPayments(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SettlementsApi.ListSettlementPaymentsError](src/resources/settlements-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.settlementsApi.listSettlementPayments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SettlementsApi.ListSettlementPaymentsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSettlementRefunds(request: SettlementsApi.ListSettlementRefundsRequest, options?: RequestOptions): ApiPromise&lt;undefined, SettlementsApi.ListSettlementRefundsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all refunds 'deducted' from the given settlement.

The response is in the same format as the response of the [List refunds endpoint](list-refunds).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.settlementsApi.listSettlementRefunds({
    settlementId: "stl_5B8cwPMGnU",
    from: "re_5B8cwPMGnU",
    limit: 50,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type SettlementsApi.ListSettlementRefundsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.settlementsApi.listSettlementRefunds({
  settlementId: "stl_5B8cwPMGnU",
  from: "re_5B8cwPMGnU",
  limit: 50,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>settlementId</code> | <code>string</code> | Provide the ID of the related settlement. |
| <code>from?</code> | <code>string</code> | Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate<br>the result set. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Defaults to 50 items. |
| <code>embed?</code> | <code>string</code> | This endpoint allows embedding related API items by appending the following values via the `embed` query string<br>parameter. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.settlementsApi.listSettlementRefunds(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SettlementsApi.ListSettlementRefundsError](src/resources/settlements-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.settlementsApi.listSettlementRefunds(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SettlementsApi.ListSettlementRefundsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSettlements(request: SettlementsApi.ListSettlementsRequest, options?: RequestOptions): ApiPromise&lt;undefined, SettlementsApi.ListSettlementsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of all your settlements.

The results are paginated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.settlementsApi.listSettlements({
    limit: 50,
    balanceId: "bal_gVMhHKqSSRYJyPsuoPNFH",
    year: "2025",
    month: "1",
    currencies: Currencies.Eur,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type SettlementsApi.ListSettlementsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.settlementsApi.listSettlements({
  limit: 50,
  balanceId: "bal_gVMhHKqSSRYJyPsuoPNFH",
  year: "2025",
  month: "1",
  currencies: Currencies.Eur,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>from?</code> | <code>string</code> | Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate the<br>result set. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Defaults to 50 items. |
| <code>balanceId?</code> | <code>string</code> | Provide the token of the balance to filter the settlements by. This is<br>the balance token that the settlement was settled to. |
| <code>year?</code> | <code>string</code> | Provide the year to query the settlements. Must be used combined with `month` parameter |
| <code>month?</code> | <code>string</code> | Provide the month to query the settlements. Must be used combined with `year` parameter |
| <code>currencies?</code> | <code>[Currencies](src/models/currencies.ts)</code> | Provides the currencies to retrieve the settlements. It accepts multiple currencies in a comma-separated format. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.settlementsApi.listSettlements(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SettlementsApi.ListSettlementsError](src/resources/settlements-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.settlementsApi.listSettlements(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SettlementsApi.ListSettlementsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SubscriptionsApi

> Source: [SubscriptionsApi](src/resources/subscriptions-api.ts)

<details>
<summary><code>cancelSubscription(request: SubscriptionsApi.CancelSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;undefined, SubscriptionsApi.CancelSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel an existing subscription. Canceling a subscription has no effect on the mandates of the customer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.subscriptionsApi.cancelSubscription({
    customerId: "cst_5B8cwPMGnU",
    subscriptionId: "sub_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type SubscriptionsApi.CancelSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptionsApi.cancelSubscription({
  customerId: "cst_5B8cwPMGnU",
  subscriptionId: "sub_5B8cwPMGnU",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>customerId</code> | <code>string</code> | Provide the ID of the related customer. |
| <code>subscriptionId</code> | <code>string</code> | Provide the ID of the related subscription. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[DeleteValuesSalesInvoice](src/models/delete-values-sales-invoice.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptionsApi.cancelSubscription(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SubscriptionsApi.CancelSubscriptionError](src/resources/subscriptions-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptionsApi.cancelSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SubscriptionsApi.CancelSubscriptionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createSubscription(request: SubscriptionsApi.CreateSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;undefined, SubscriptionsApi.CreateSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

With subscriptions, you can schedule recurring payments to take place at regular intervals.

For example, by simply specifying an `amount` and an `interval`, you can create an endless subscription to charge a
monthly fee, until you cancel the subscription.

Or, you could use the times parameter to only charge a limited number of times, for example to split a big
transaction in multiple parts.

A few example usages:

`amount[currency]="EUR"` `amount[value]="5.00"` `interval="2 weeks"`
Your customer will be charged €5 once every two weeks.

`amount[currency]="EUR"` `amount[value]="20.00"` `interval="1 day" times=5`
Your customer will be charged €20 every day, for five consecutive days.

`amount[currency]="EUR"` `amount[value]="10.00"` `interval="1 month"`
`startDate="2018-04-30"`
Your customer will be charged €10 on the last day of each month, starting in April 2018.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.subscriptionsApi.createSubscription({
    customerId: "cst_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type SubscriptionsApi.CreateSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptionsApi.createSubscription({
  customerId: "cst_5B8cwPMGnU",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>customerId</code> | <code>string</code> | Provide the ID of the related customer. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[SubscriptionRequest](src/models/subscription-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptionsApi.createSubscription(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SubscriptionsApi.CreateSubscriptionError](src/resources/subscriptions-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptionsApi.createSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SubscriptionsApi.CreateSubscriptionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSubscription(request: SubscriptionsApi.GetSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;undefined, SubscriptionsApi.GetSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single subscription by its ID and the ID of its parent customer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.subscriptionsApi.getSubscription({
    customerId: "cst_5B8cwPMGnU",
    subscriptionId: "sub_5B8cwPMGnU",
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type SubscriptionsApi.GetSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptionsApi.getSubscription({
  customerId: "cst_5B8cwPMGnU",
  subscriptionId: "sub_5B8cwPMGnU",
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>customerId</code> | <code>string</code> | Provide the ID of the related customer. |
| <code>subscriptionId</code> | <code>string</code> | Provide the ID of the related subscription. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptionsApi.getSubscription(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SubscriptionsApi.GetSubscriptionError](src/resources/subscriptions-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptionsApi.getSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SubscriptionsApi.GetSubscriptionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAllSubscriptions(request: SubscriptionsApi.ListAllSubscriptionsRequest, options?: RequestOptions): ApiPromise&lt;undefined, SubscriptionsApi.ListAllSubscriptionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all subscriptions initiated across all your customers.

The results are paginated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.subscriptionsApi.listAllSubscriptions({
    limit: 50,
    profileId: "pfl_QkEhN94Ba",
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type SubscriptionsApi.ListAllSubscriptionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptionsApi.listAllSubscriptions({
  limit: 50,
  profileId: "pfl_QkEhN94Ba",
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>from?</code> | <code>string</code> | Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate the<br>result set. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Defaults to 50 items. |
| <code>profileId?</code> | <code>string</code> | The identifier referring to the [profile](get-profile) you wish to retrieve subscriptions for.<br><br>Most API credentials are linked to a single profile. In these cases the `profileId` is already implied.<br><br>To retrieve all subscriptions across the organization, use an organization-level API credential and omit the<br>`profileId` parameter. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptionsApi.listAllSubscriptions(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SubscriptionsApi.ListAllSubscriptionsError](src/resources/subscriptions-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptionsApi.listAllSubscriptions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SubscriptionsApi.ListAllSubscriptionsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSubscriptionPayments(request: SubscriptionsApi.ListSubscriptionPaymentsRequest, options?: RequestOptions): ApiPromise&lt;undefined, SubscriptionsApi.ListSubscriptionPaymentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all payments of a specific subscription.

The results are paginated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.subscriptionsApi.listSubscriptionPayments({
    customerId: "cst_5B8cwPMGnU",
    subscriptionId: "sub_5B8cwPMGnU",
    from: "tr_5B8cwPMGnU",
    limit: 50,
    sort: Sorting.Desc,
    profileId: "pfl_5B8cwPMGnU",
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type SubscriptionsApi.ListSubscriptionPaymentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptionsApi.listSubscriptionPayments({
  customerId: "cst_5B8cwPMGnU",
  subscriptionId: "sub_5B8cwPMGnU",
  from: "tr_5B8cwPMGnU",
  limit: 50,
  sort: Sorting.Desc,
  profileId: "pfl_5B8cwPMGnU",
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>customerId</code> | <code>string</code> | Provide the ID of the related customer. |
| <code>subscriptionId</code> | <code>string</code> | Provide the ID of the related subscription. |
| <code>from?</code> | <code>string</code> | Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate<br>the result set. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Defaults to 50 items. |
| <code>sort?</code> | <code>[Sorting](src/models/sorting.ts)</code> | Used for setting the direction of the result set. Defaults to descending order, meaning the results are ordered from<br>newest to oldest. |
| <code>profileId?</code> | <code>string</code> | The identifier referring to the [profile](get-profile) you wish to<br>retrieve the resources for.<br><br>Most API credentials are linked to a single profile. In these cases the `profileId` must not be sent. For<br>organization-level credentials such as OAuth access tokens however, the `profileId` parameter is required. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptionsApi.listSubscriptionPayments(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SubscriptionsApi.ListSubscriptionPaymentsError](src/resources/subscriptions-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptionsApi.listSubscriptionPayments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SubscriptionsApi.ListSubscriptionPaymentsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSubscriptions(request: SubscriptionsApi.ListSubscriptionsRequest, options?: RequestOptions): ApiPromise&lt;undefined, SubscriptionsApi.ListSubscriptionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all subscriptions of a customer.

The results are paginated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.subscriptionsApi.listSubscriptions({
    customerId: "cst_5B8cwPMGnU",
    from: "sub_5B8cwPMGnU",
    limit: 50,
    sort: Sorting.Desc,
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type SubscriptionsApi.ListSubscriptionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptionsApi.listSubscriptions({
  customerId: "cst_5B8cwPMGnU",
  from: "sub_5B8cwPMGnU",
  limit: 50,
  sort: Sorting.Desc,
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>customerId</code> | <code>string</code> | Provide the ID of the related customer. |
| <code>from?</code> | <code>string</code> | Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate the<br>result set. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Defaults to 50 items. |
| <code>sort?</code> | <code>[Sorting](src/models/sorting.ts)</code> | Used for setting the direction of the result set. Defaults to descending order, meaning the results are ordered from<br>newest to oldest. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptionsApi.listSubscriptions(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SubscriptionsApi.ListSubscriptionsError](src/resources/subscriptions-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptionsApi.listSubscriptions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SubscriptionsApi.ListSubscriptionsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSubscription(request: SubscriptionsApi.UpdateSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;undefined, SubscriptionsApi.UpdateSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing subscription.

Canceled subscriptions cannot be updated.

For an in-depth explanation of each parameter, refer to the [Create subscription](create-subscription) endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.subscriptionsApi.updateSubscription({
    customerId: "cst_5B8cwPMGnU",
    subscriptionId: "sub_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type SubscriptionsApi.UpdateSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptionsApi.updateSubscription({
  customerId: "cst_5B8cwPMGnU",
  subscriptionId: "sub_5B8cwPMGnU",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>customerId</code> | <code>string</code> | Provide the ID of the related customer. |
| <code>subscriptionId</code> | <code>string</code> | Provide the ID of the related subscription. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[V2CustomersSubscriptionsRequest](src/models/v2-customers-subscriptions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptionsApi.updateSubscription(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SubscriptionsApi.UpdateSubscriptionError](src/resources/subscriptions-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptionsApi.updateSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SubscriptionsApi.UpdateSubscriptionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TerminalsApi

> Source: [TerminalsApi](src/resources/terminals-api.ts)

<details>
<summary><code>getTerminal(request: TerminalsApi.GetTerminalRequest, options?: RequestOptions): ApiPromise&lt;undefined, TerminalsApi.GetTerminalError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single terminal by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.terminalsApi.getTerminal({
    terminalId: "term_vytxeTZskVKR7C7WgdSP3d",
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type TerminalsApi.GetTerminalError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.terminalsApi.getTerminal({
  terminalId: "term_vytxeTZskVKR7C7WgdSP3d",
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>terminalId</code> | <code>string</code> | Provide the ID of the related terminal. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.terminalsApi.getTerminal(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[TerminalsApi.GetTerminalError](src/resources/terminals-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.terminalsApi.getTerminal(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, TerminalsApi.GetTerminalError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTerminals(request: TerminalsApi.ListTerminalsRequest, options?: RequestOptions): ApiPromise&lt;undefined, TerminalsApi.ListTerminalsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of all physical point-of-sale devices.

The results are paginated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.terminalsApi.listTerminals({
    from: "term_vytxeTZskVKR7C7WgdSP3d",
    limit: 50,
    sort: Sorting.Desc,
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type TerminalsApi.ListTerminalsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.terminalsApi.listTerminals({
  from: "term_vytxeTZskVKR7C7WgdSP3d",
  limit: 50,
  sort: Sorting.Desc,
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>from?</code> | <code>string</code> | Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate the<br>result set. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Defaults to 50 items. |
| <code>sort?</code> | <code>[Sorting](src/models/sorting.ts)</code> | Used for setting the direction of the result set. Defaults to descending order, meaning the results are ordered from<br>newest to oldest. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.terminalsApi.listTerminals(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[TerminalsApi.ListTerminalsError](src/resources/terminals-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.terminalsApi.listTerminals(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, TerminalsApi.ListTerminalsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>terminalsGetPairingCode(request: TerminalsApi.TerminalsGetPairingCodeRequest, options?: RequestOptions): ApiPromise&lt;undefined, TerminalsApi.TerminalsGetPairingCodeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

> ℹ️ **Test mode**
>
> This endpoint currently does not support test mode yet.

Get a pairing code to onboard a point-of-sale terminal.

The response includes a human-readable `code` for manual entry on the terminal and, optionally, a QR Code as a
base64 encoded SVG data URI when you use the `include` query parameter with value `details.qrCode`.

We keep a pairing code for one month after it is revoked or expires, then delete it. Once deleted, this endpoint
returns a 404. Active pairing codes are never deleted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.terminalsApi.terminalsGetPairingCode({
    pairingCodeId: "termpc_R7gX5Ea9bC4DkFj3G",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type TerminalsApi.TerminalsGetPairingCodeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.terminalsApi.terminalsGetPairingCode({
  pairingCodeId: "termpc_R7gX5Ea9bC4DkFj3G",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>pairingCodeId</code> | <code>string</code> | Provide the ID of the terminal pairing code. |
| <code>include?</code> | <code>string</code> | Include additional information in the response. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.terminalsApi.terminalsGetPairingCode(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[TerminalsApi.TerminalsGetPairingCodeError](src/resources/terminals-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.terminalsApi.terminalsGetPairingCode(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, TerminalsApi.TerminalsGetPairingCodeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>terminalsListPairingCodes(request: TerminalsApi.TerminalsListPairingCodesRequest, options?: RequestOptions): ApiPromise&lt;undefined, TerminalsApi.TerminalsListPairingCodesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

> ℹ️ **Test mode**
>
> This endpoint currently does not support test mode yet.

Returns your pairing codes: `active`, `expired`, and `revoked`. Results are paginated.

We keep a pairing code for one month after it is revoked or expires, then delete it. Deleted codes drop out of
this list. Active pairing codes are never deleted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.terminalsApi.terminalsListPairingCodes({
    limit: 50,
    sort: Sorting.Desc,
    profileId: "pfl_QkEhN94Ba",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type TerminalsApi.TerminalsListPairingCodesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.terminalsApi.terminalsListPairingCodes({
  limit: 50,
  sort: Sorting.Desc,
  profileId: "pfl_QkEhN94Ba",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>from?</code> | <code>string</code> | Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate the<br>result set. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Defaults to 50 items. |
| <code>sort?</code> | <code>[Sorting](src/models/sorting.ts)</code> | Used for setting the direction of the result set. Defaults to descending order, meaning the results are ordered from<br>newest to oldest. |
| <code>profileId?</code> | <code>string</code> | The identifier referring to the [profile](get-profile) you wish to retrieve pairing codes for. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.terminalsApi.terminalsListPairingCodes(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[TerminalsApi.TerminalsListPairingCodesError](src/resources/terminals-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.terminalsApi.terminalsListPairingCodes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, TerminalsApi.TerminalsListPairingCodesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>terminalsRequestPairingCode(request: TerminalsApi.TerminalsRequestPairingCodeRequest, options?: RequestOptions): ApiPromise&lt;undefined, TerminalsApi.TerminalsRequestPairingCodeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

> ℹ️ **Test mode**
>
> This endpoint currently does not support test mode yet.

Request a pairing code to onboard a point-of-sale terminal.

The response includes a human-readable `code` for manual entry on the terminal, and a QR Code as a
base64 encoded SVG data URI for scanning if you specify the query parameter `include` with value `details.qrCode`.

Pairing codes expire after 90 days (see `expiresAt`) and can be used multiple times.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.terminalsApi.terminalsRequestPairingCode({
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    body: { profileId: "pfl_jA9bC4DkFj3G" },
  });
} catch (err) {
  // TODO: Handle 'err' of type TerminalsApi.TerminalsRequestPairingCodeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.terminalsApi.terminalsRequestPairingCode({
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
  body: { profileId: "pfl_jA9bC4DkFj3G" },
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
| <code>include?</code> | <code>string</code> | Include additional information in the response. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[V2TerminalsPairingCodesRequest](src/models/v2-terminals-pairing-codes-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.terminalsApi.terminalsRequestPairingCode(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[TerminalsApi.TerminalsRequestPairingCodeError](src/resources/terminals-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.terminalsApi.terminalsRequestPairingCode(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, TerminalsApi.TerminalsRequestPairingCodeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>terminalsRevokePairingCode(request: TerminalsApi.TerminalsRevokePairingCodeRequest, options?: RequestOptions): ApiPromise&lt;undefined, TerminalsApi.TerminalsRevokePairingCodeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

> ℹ️ **Test mode**
>
> This endpoint currently does not support test mode yet.

Revoke a pairing code, preventing the onboarding of new point-of-sale terminals.

Terminals that have already paired with this code are not affected.

We keep a revoked pairing code for one month, then delete it. Once deleted, this endpoint returns a 404.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.terminalsApi.terminalsRevokePairingCode({
    pairingCodeId: "termpc_R7gX5Ea9bC4DkFj3G",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type TerminalsApi.TerminalsRevokePairingCodeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.terminalsApi.terminalsRevokePairingCode({
  pairingCodeId: "termpc_R7gX5Ea9bC4DkFj3G",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>pairingCodeId</code> | <code>string</code> | Provide the ID of the terminal pairing code. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.terminalsApi.terminalsRevokePairingCode(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[TerminalsApi.TerminalsRevokePairingCodeError](src/resources/terminals-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.terminalsApi.terminalsRevokePairingCode(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, TerminalsApi.TerminalsRevokePairingCodeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TransfersApi

> Source: [TransfersApi](src/resources/transfers-api.ts)

<details>
<summary><code>createTransfer(request: TransfersApi.CreateTransferRequest, options?: RequestOptions): ApiPromise&lt;undefined, TransfersApi.CreateTransferError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

> 🚧 Beta feature
>
> This feature is currently in beta testing, and the final specification may still change.

Create a SEPA Credit Transfer from your Mollie Business Account.

To initiate a transfer, you must provide the transfer scheme, the amount, the debtor IBAN (your Mollie Business
Account IBAN), and the creditor (recipient) details.

Each request must include an `Idempotency-Key` header to prevent duplicate transfers, and must be signed using the
`X-Client-Signature` and `X-Client-Signed-At` headers.

### Simulating transfer scenarios in test mode

In test mode, you can simulate various transfer scenarios by adjusting the transfer amount. This allows you to
mimic the typical status progression of a real-world transfer. Note that a transfer's progression will stop once
it reaches a final status: `blocked`, `failed`, `processed`, or `returned`.

| Amount  | Scenario                                            | Webhook sequence                                                                                                                                                   |
|---------|-----------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `11.00` | Transfer initiated, pending review by Mollie        | `business-account-transfer.requested` → `business-account-transfer.initiated` → `business-account-transfer.pending-review`                                         |
| `12.00` | Transfer initiated, blocked by Mollie               | `business-account-transfer.requested` → `business-account-transfer.initiated` → `business-account-transfer.pending-review` → `business-account-transfer.blocked`   |
| `13.00` | Transfer initiated, failed on scheme submission     | `business-account-transfer.requested` → `business-account-transfer.initiated` → `business-account-transfer.failed`                                                 |
| `14.00` | Transfer processed, then returned by receiving bank | `business-account-transfer.requested` → `business-account-transfer.initiated` → `business-account-transfer.processed` → `business-account-transfer.returned`       |
| Other   | Default: transfer is processed                      | `business-account-transfer.requested` → `business-account-transfer.initiated` → `business-account-transfer.processed`                                              |

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.transfersApi.createTransfer({
    xClientSignature: "some example string",
    xClientSignedAt: "2025-01-01T12:00:00Z",
    idempotencyKey: "12345678-abcd",
    idempotencyKeyHeader: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type TransfersApi.CreateTransferError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transfersApi.createTransfer({
  xClientSignature: "some example string",
  xClientSignedAt: "2025-01-01T12:00:00Z",
  idempotencyKey: "12345678-abcd",
  idempotencyKeyHeader: "123e4567-e89b-12d3-a456-426",
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
| <code>xClientSignature</code> | <code>string</code> | A cryptographic signature of the request payload, used to verify the authenticity of the transfer request. |
| <code>xClientSignedAt</code> | <code>string</code> | The timestamp (in ISO 8601 format) indicating when the client signed the request. Used in conjunction with<br>`X-Client-Signature` for request verification. |
| <code>idempotencyKey</code> | <code>string</code> | A unique value used to identify this request and prevent duplicate transfers. UUIDv4 is recommended to<br>guarantee uniqueness across multiple processes or servers. If two requests are received with the same<br>idempotency key, the second request will be discarded.<br><br>View the [public documentation](https://docs.mollie.com/reference/api-idempotency#using-an-idempotency-key)<br>to learn more. |
| <code>idempotencyKeyHeader?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[TransferRequest](src/models/transfer-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transfersApi.createTransfer(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[TransfersApi.CreateTransferError](src/resources/transfers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transfersApi.createTransfer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, TransfersApi.CreateTransferError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

> 🚧 Beta feature
>
> This feature is currently in beta testing, and the final specification may still change.

Retrieve a single transfer object by its transfer ID. This allows you to check the current status
and details of a previously created transfer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.transfersApi.getTransfer({
    businessAccountsTransferId: "batrf_87GByBuj4UCcUTEbs6aGJ",
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
  businessAccountsTransferId: "batrf_87GByBuj4UCcUTEbs6aGJ",
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>businessAccountsTransferId</code> | <code>string</code> | Provide the ID of the related transfer. |
| <code>testmode?</code> | <code>boolean</code> | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br>parameter must not be sent. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br>setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

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

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## UnmatchedCreditTransfersApi

> Source: [UnmatchedCreditTransfersApi](src/resources/unmatched-credit-transfers-api.ts)

<details>
<summary><code>getUnmatchedCreditTransfer(request: UnmatchedCreditTransfersApi.GetUnmatchedCreditTransferRequest, options?: RequestOptions): ApiPromise&lt;undefined, UnmatchedCreditTransfersApi.GetUnmatchedCreditTransferError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

> 🚧 Beta feature
>
> This feature is currently in private beta, and the final specification may still change.

Retrieves a single unmatched credit transfer by its identifier.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.unmatchedCreditTransfersApi.getUnmatchedCreditTransfer({
    unmatchedCreditTransferId: "uct_abcDEFghij123456789",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type UnmatchedCreditTransfersApi.GetUnmatchedCreditTransferError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.unmatchedCreditTransfersApi.getUnmatchedCreditTransfer({
  unmatchedCreditTransferId: "uct_abcDEFghij123456789",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>unmatchedCreditTransferId</code> | <code>string</code> | Provide the ID of the related unmatched credit transfer. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.unmatchedCreditTransfersApi.getUnmatchedCreditTransfer(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[UnmatchedCreditTransfersApi.GetUnmatchedCreditTransferError](src/resources/unmatched-credit-transfers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.unmatchedCreditTransfersApi.getUnmatchedCreditTransfer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, UnmatchedCreditTransfersApi.GetUnmatchedCreditTransferError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listUnmatchedCreditTransfers(request: UnmatchedCreditTransfersApi.ListUnmatchedCreditTransfersRequest, options?: RequestOptions): ApiPromise&lt;undefined, UnmatchedCreditTransfersApi.ListUnmatchedCreditTransfersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

> 🚧 Beta feature
>
> This feature is currently in private beta, and the final specification may still change.

Retrieves a list of unmatched credit transfers for the profile.

The results are paginated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.unmatchedCreditTransfersApi.listUnmatchedCreditTransfers({
    limit: 50,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type UnmatchedCreditTransfersApi.ListUnmatchedCreditTransfersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.unmatchedCreditTransfersApi.listUnmatchedCreditTransfers({
  limit: 50,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>from?</code> | <code>string</code> | Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate the<br>result set. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Defaults to 50 items. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.unmatchedCreditTransfersApi.listUnmatchedCreditTransfers(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[UnmatchedCreditTransfersApi.ListUnmatchedCreditTransfersError](src/resources/unmatched-credit-transfers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.unmatchedCreditTransfersApi.listUnmatchedCreditTransfers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, UnmatchedCreditTransfersApi.ListUnmatchedCreditTransfersError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>matchUnmatchedCreditTransfer(request: UnmatchedCreditTransfersApi.MatchUnmatchedCreditTransferRequest, options?: RequestOptions): ApiPromise&lt;undefined, UnmatchedCreditTransfersApi.MatchUnmatchedCreditTransferError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

> 🚧 Beta feature
>
> This feature is currently in private beta, and the final specification may still change.

Matches an unmatched credit transfer to one or more payments, settling the funds accordingly.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.unmatchedCreditTransfersApi.matchUnmatchedCreditTransfer({
    unmatchedCreditTransferId: "uct_abcDEFghij123456789",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type UnmatchedCreditTransfersApi.MatchUnmatchedCreditTransferError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.unmatchedCreditTransfersApi.matchUnmatchedCreditTransfer({
  unmatchedCreditTransferId: "uct_abcDEFghij123456789",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>unmatchedCreditTransferId</code> | <code>string</code> | Provide the ID of the related unmatched credit transfer. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[UnmatchedCreditTransferMatchRequest](src/models/unmatched-credit-transfer-match-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.unmatchedCreditTransfersApi.matchUnmatchedCreditTransfer(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[UnmatchedCreditTransfersApi.MatchUnmatchedCreditTransferError](src/resources/unmatched-credit-transfers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.unmatchedCreditTransfersApi.matchUnmatchedCreditTransfer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, UnmatchedCreditTransfersApi.MatchUnmatchedCreditTransferError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>returnUnmatchedCreditTransfer(request: UnmatchedCreditTransfersApi.ReturnUnmatchedCreditTransferRequest, options?: RequestOptions): ApiPromise&lt;undefined, UnmatchedCreditTransfersApi.ReturnUnmatchedCreditTransferError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

> 🚧 Beta feature
>
> This feature is currently in private beta, and the final specification may still change.

Returns an unmatched credit transfer, sending the funds back to the original sender.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.unmatchedCreditTransfersApi.returnUnmatchedCreditTransfer({
    unmatchedCreditTransferId: "uct_abcDEFghij123456789",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type UnmatchedCreditTransfersApi.ReturnUnmatchedCreditTransferError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.unmatchedCreditTransfersApi.returnUnmatchedCreditTransfer({
  unmatchedCreditTransferId: "uct_abcDEFghij123456789",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>unmatchedCreditTransferId</code> | <code>string</code> | Provide the ID of the related unmatched credit transfer. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.unmatchedCreditTransfersApi.returnUnmatchedCreditTransfer(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[UnmatchedCreditTransfersApi.ReturnUnmatchedCreditTransferError](src/resources/unmatched-credit-transfers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.unmatchedCreditTransfersApi.returnUnmatchedCreditTransfer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, UnmatchedCreditTransfersApi.ReturnUnmatchedCreditTransferError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## VerifyPayeeApi

> Source: [VerifyPayeeApi](src/resources/verify-payee-api.ts)

<details>
<summary><code>verifyPayee(request: VerifyPayeeApi.VerifyPayeeRequest, options?: RequestOptions): ApiPromise&lt;undefined, VerifyPayeeApi.VerifyPayeeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

> 🚧 Beta feature
>
> This feature is currently in beta testing, and the final specification may still change.

Perform a Verification of Payee (VoP) check. This allows you to verify the account holder name against the
records held by the receiving bank before initiating a transfer.

The verification result indicates whether the provided name matches, closely matches, or does not match the
name on file at the receiving bank. This helps prevent misdirected payments.

### Simulating verification scenarios in test mode

In test mode, you can simulate various verification outcomes by adjusting the creditor name in the
`creditorBankAccount.accountHolderName` property. This allows you to test all possible Verification of Payee
results without needing special properties. The names are case insensitive.

| Account holder name                    | Scenario                                      | Verification result | Suggested name |
|----------------------------------------|-----------------------------------------------|---------------------|----------------|
| `John Close Match`                     | Name closely matches the bank records          | `close-match`       | `John Match`   |
| `John No Match`                        | Name does not match the bank records           | `no-match`          | —              |
| `John Unavailable`                     | Verification is not available                  | `not-available`     | —              |
| Any other name                         | Default: name matches the bank records         | `match`             | —              |

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.verifyPayeeApi.verifyPayee({ idempotencyKey: "123e4567-e89b-12d3-a456-426" });
} catch (err) {
  // TODO: Handle 'err' of type VerifyPayeeApi.VerifyPayeeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.verifyPayeeApi.verifyPayee({
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[VerificationOfPayeeRequest](src/models/verification-of-payee-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.verifyPayeeApi.verifyPayee(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[VerifyPayeeApi.VerifyPayeeError](src/resources/verify-payee-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.verifyPayeeApi.verifyPayee(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, VerifyPayeeApi.VerifyPayeeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## WalletsApi

> Source: [WalletsApi](src/resources/wallets-api.ts)

<details>
<summary><code>requestApplePayPaymentSession(request: WalletsApi.RequestApplePayPaymentSessionRequest, options?: RequestOptions): ApiPromise&lt;undefined, WalletsApi.RequestApplePayPaymentSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

When integrating Apple Pay in your own checkout on the web, you need to
[provide merchant validation](https://developer.apple.com/documentation/apple_pay_on_the_web/apple_pay_js_api/providing_merchant_validation).
This is normally done using Apple's
[Requesting an Apple Pay Session](https://developer.apple.com/documentation/apple_pay_on_the_web/apple_pay_js_api/requesting_an_apple_pay_payment_session).
The merchant validation proves to Apple that a validated merchant is calling the Apple Pay Javascript APIs.

To integrate Apple Pay via Mollie, you will have to call the Mollie API instead of Apple's API. The response of this
API call can then be passed as-is to the completion method, `completeMerchantValidation`.

Before requesting an Apple Pay Payment Session, you must place the domain validation file on your server at:
`https://[domain]/.well-known/apple-developer-merchantid-domain-association`. Without this file, it will not be
possible to use Apple Pay on your domain.

Each new transaction requires a new payment session object. Merchant session objects are not reusable, and they
expire after five minutes.

Payment sessions cannot be requested directly from the browser. The request must be sent from your server. For the
full documentation, see the official
[Apple Pay JS API](https://developer.apple.com/documentation/apple_pay_on_the_web/apple_pay_js_api) documentation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.walletsApi.requestApplePayPaymentSession({ idempotencyKey: "123e4567-e89b-12d3-a456-426" });
} catch (err) {
  // TODO: Handle 'err' of type WalletsApi.RequestApplePayPaymentSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.walletsApi.requestApplePayPaymentSession({
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[V2WalletsApplepaySessionsRequest](src/models/v2-wallets-applepay-sessions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.walletsApi.requestApplePayPaymentSession(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[WalletsApi.RequestApplePayPaymentSessionError](src/resources/wallets-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.walletsApi.requestApplePayPaymentSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, WalletsApi.RequestApplePayPaymentSessionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## WebhookEventsApi

> Source: [WebhookEventsApi](src/resources/webhook-events-api.ts)

<details>
<summary><code>getWebhookEvent(request: WebhookEventsApi.GetWebhookEventRequest, options?: RequestOptions): ApiPromise&lt;undefined, WebhookEventsApi.GetWebhookEventError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single webhook event object by its event ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.webhookEventsApi.getWebhookEvent({
    webhookEventId: "event_1234567890",
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type WebhookEventsApi.GetWebhookEventError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhookEventsApi.getWebhookEvent({
  webhookEventId: "event_1234567890",
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>webhookEventId</code> | <code>string</code> | Provide the ID of the related webhook event. |
| <code>testmode?</code> | <code>boolean</code> | You can enable test mode by setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhookEventsApi.getWebhookEvent(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[WebhookEventsApi.GetWebhookEventError](src/resources/webhook-events-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhookEventsApi.getWebhookEvent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, WebhookEventsApi.GetWebhookEventError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](src/resources/webhooks-api.ts)

<details>
<summary><code>createWebhook(request: WebhooksApi.CreateWebhookRequest, options?: RequestOptions): ApiPromise&lt;undefined, WebhooksApi.CreateWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A webhook must have a name, an url and a list of event types. You can also create webhooks in the webhooks settings section of the Dashboard.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.webhooksApi.createWebhook({ idempotencyKey: "123e4567-e89b-12d3-a456-426" });
} catch (err) {
  // TODO: Handle 'err' of type WebhooksApi.CreateWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooksApi.createWebhook({
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[V2WebhooksRequest](src/models/v2-webhooks-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooksApi.createWebhook(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[WebhooksApi.CreateWebhookError](src/resources/webhooks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooksApi.createWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, WebhooksApi.CreateWebhookError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteWebhook(request: WebhooksApi.DeleteWebhookRequest, options?: RequestOptions): ApiPromise&lt;undefined, WebhooksApi.DeleteWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a single webhook object by its webhook ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.webhooksApi.deleteWebhook({
    webhookId: "hook_1234567890",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type WebhooksApi.DeleteWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooksApi.deleteWebhook({
  webhookId: "hook_1234567890",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>webhookId</code> | <code>string</code> | Provide the ID of the related webhook. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[V2WebhooksRequest2](src/models/v2-webhooks-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooksApi.deleteWebhook(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[WebhooksApi.DeleteWebhookError](src/resources/webhooks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooksApi.deleteWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, WebhooksApi.DeleteWebhookError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWebhook(request: WebhooksApi.GetWebhookRequest, options?: RequestOptions): ApiPromise&lt;undefined, WebhooksApi.GetWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single webhook object by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.webhooksApi.getWebhook({
    webhookId: "hook_1234567890",
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
  webhookId: "hook_1234567890",
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>webhookId</code> | <code>string</code> | Provide the ID of the related webhook. |
| <code>testmode?</code> | <code>boolean</code> | You can enable test mode by setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

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

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWebhooks(request: WebhooksApi.ListWebhooksRequest, options?: RequestOptions): ApiPromise&lt;undefined, WebhooksApi.ListWebhooksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of your webhooks. If no webhook endpoints are available, the resulting array will be empty. This request should never throw an error.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.webhooksApi.listWebhooks({
    limit: 50,
    sort: Sorting.Desc,
    eventTypes: WebhookEventTypes.PaymentLinkPaid,
    testmode: false,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type WebhooksApi.ListWebhooksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooksApi.listWebhooks({
  limit: 50,
  sort: Sorting.Desc,
  eventTypes: WebhookEventTypes.PaymentLinkPaid,
  testmode: false,
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>from?</code> | <code>string</code> | Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate the<br>result set. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Defaults to 50 items. |
| <code>sort?</code> | <code>[Sorting](src/models/sorting.ts)</code> | Used for setting the direction of the result set. Defaults to descending order, meaning the results are ordered from<br>newest to oldest. |
| <code>eventTypes?</code> | <code>[WebhookEventTypes](src/models/webhook-event-types.ts)</code> | Used to filter out only the webhooks that are subscribed to certain types of events. |
| <code>testmode?</code> | <code>boolean</code> | You can enable test mode by setting the `testmode` query parameter to `true`.<br><br>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooksApi.listWebhooks(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[WebhooksApi.ListWebhooksError](src/resources/webhooks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooksApi.listWebhooks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, WebhooksApi.ListWebhooksError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>testWebhook(request: WebhooksApi.TestWebhookRequest, options?: RequestOptions): ApiPromise&lt;undefined, WebhooksApi.TestWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends a test event to the webhook to verify the endpoint is working as expected.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.webhooksApi.testWebhook({
    webhookId: "hook_1234567890",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type WebhooksApi.TestWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooksApi.testWebhook({
  webhookId: "hook_1234567890",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>webhookId</code> | <code>string</code> | Provide the ID of the related webhook. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[V2WebhooksPingRequest](src/models/v2-webhooks-ping-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooksApi.testWebhook(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[WebhooksApi.TestWebhookError](src/resources/webhooks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooksApi.testWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, WebhooksApi.TestWebhookError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateWebhook(request: WebhooksApi.UpdateWebhookRequest, options?: RequestOptions): ApiPromise&lt;undefined, WebhooksApi.UpdateWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the webhook. You may edit the name, url and the list of subscribed event types.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.webhooksApi.updateWebhook({
    webhookId: "hook_1234567890",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
} catch (err) {
  // TODO: Handle 'err' of type WebhooksApi.UpdateWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooksApi.updateWebhook({
  webhookId: "hook_1234567890",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
| <code>webhookId</code> | <code>string</code> | Provide the ID of the related webhook. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique key to ensure idempotent requests. This key should be a UUID v4 string. |
| <code>body?</code> | <code>[V2WebhooksRequest1](src/models/v2-webhooks-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooksApi.updateWebhook(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[WebhooksApi.UpdateWebhookError](src/resources/webhooks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooksApi.updateWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, WebhooksApi.UpdateWebhookError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MollieApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

