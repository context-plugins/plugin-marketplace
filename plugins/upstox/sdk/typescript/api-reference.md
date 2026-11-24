# Reference

> Source: [UpstoxClient](src/client.ts)

## Charge

> Source: [Charge](src/resources/charge.ts)

<details>
<summary><code>getBrokerage(request: Charge.GetBrokerageRequest, options?: RequestOptions): ApiPromise&lt;GetBrokerageResponse, Charge.GetBrokerageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Compute Brokerage Charges

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.charge.getBrokerage({
    instrumentToken: "NSE_EQ|INE848E01016",
    quantity: 10,
    product: "I",
    transactionType: "BUY",
    price: 123.1,
  });
  // TODO: Handle 'response' of type GetBrokerageResponse
} catch (err) {
  // TODO: Handle 'err' of type Charge.GetBrokerageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.charge
  .getBrokerage({
    instrumentToken: "NSE_EQ|INE848E01016",
    quantity: 10,
    product: "I",
    transactionType: "BUY",
    price: 123.1,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetBrokerageResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrumentToken</code> | <code>string</code> | Key of the instrument |
| <code>quantity</code> | <code>number</code> | Quantity with which the order is to be placed |
| <code>product</code> | <code>string</code> | Product with which the order is to be placed |
| <code>transactionType</code> | <code>string</code> | Indicates whether its a BUY or SELL order |
| <code>price</code> | <code>number</code> | Price with which the order is to be placed |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.charge.getBrokerage(request)`

- **OnSuccess**: <code>[GetBrokerageResponse](src/models/get-brokerage-response.ts)</code>
- **OnError**: throws <code>[Charge.GetBrokerageError](src/resources/charge.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.charge.getBrokerage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetBrokerageResponse, Charge.GetBrokerageError&gt;</code>, with `result.value` of type <code>[GetBrokerageResponse](src/models/get-brokerage-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postMargin(request: Charge.PostMarginRequest, options?: RequestOptions): ApiPromise&lt;PostMarginResponse, Charge.PostMarginError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Compute Margin

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.charge.postMargin({
    body: {
      instruments: [
        {
          instrumentKey: "some example string",
          quantity: 1,
          product: "some example string",
          transactionType: "some example string",
        },
      ],
    },
  });
  // TODO: Handle 'response' of type PostMarginResponse
} catch (err) {
  // TODO: Handle 'err' of type Charge.PostMarginError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.charge
  .postMargin({
    body: {
      instruments: [
        {
          instrumentKey: "some example string",
          quantity: 1,
          product: "some example string",
          transactionType: "some example string",
        },
      ],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PostMarginResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[MarginRequest](src/models/margin-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.charge.postMargin(request)`

- **OnSuccess**: <code>[PostMarginResponse](src/models/post-margin-response.ts)</code>
- **OnError**: throws <code>[Charge.PostMarginError](src/resources/charge.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.charge.postMargin(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PostMarginResponse, Charge.PostMarginError&gt;</code>, with `result.value` of type <code>[PostMarginResponse](src/models/post-margin-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## EventsControllerV2

> Source: [EventsControllerV2](src/resources/events-controller-v2.ts)

<details>
<summary><code>publishEvent(request: EventsControllerV2.PublishEventRequest, options?: RequestOptions): ApiPromise&lt;EventResponse, EventsControllerV2.PublishEventError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventsControllerV2.publishEvent({
    body: { eventType: "some example string", event: "some example string" },
  });
  // TODO: Handle 'response' of type EventResponse
} catch (err) {
  // TODO: Handle 'err' of type EventsControllerV2.PublishEventError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.eventsControllerV2
  .publishEvent({ body: { eventType: "some example string", event: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[EventRequest](src/models/event-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventsControllerV2.publishEvent(request)`

- **OnSuccess**: <code>[EventResponse](src/models/event-response.ts)</code>
- **OnError**: throws <code>[EventsControllerV2.PublishEventError](src/resources/events-controller-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventsControllerV2.publishEvent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventResponse, EventsControllerV2.PublishEventError&gt;</code>, with `result.value` of type <code>[EventResponse](src/models/event-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ExpiredInstrument

> Source: [ExpiredInstrument](src/resources/expired-instrument.ts)

<details>
<summary><code>getExpiredFutureContracts(request: ExpiredInstrument.GetExpiredFutureContractsRequest, options?: RequestOptions): ApiPromise&lt;GetExpiredFuturesContractResponse, ExpiredInstrument.GetExpiredFutureContractsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve expired future contracts for a given instrument key and expiry date.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.expiredInstrument.getExpiredFutureContracts({
    instrumentKey: "NSE_EQ|INE848E01016",
    expiryDate: "2023-10-05",
  });
  // TODO: Handle 'response' of type GetExpiredFuturesContractResponse
} catch (err) {
  // TODO: Handle 'err' of type ExpiredInstrument.GetExpiredFutureContractsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.expiredInstrument
  .getExpiredFutureContracts({ instrumentKey: "NSE_EQ|INE848E01016", expiryDate: "2023-10-05" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetExpiredFuturesContractResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrumentKey</code> | <code>string</code> | Instrument Key of asset |
| <code>expiryDate</code> | <code>string</code> | Expiry date of the instrument |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.expiredInstrument.getExpiredFutureContracts(request)`

- **OnSuccess**: <code>[GetExpiredFuturesContractResponse](src/models/get-expired-futures-contract-response.ts)</code>
- **OnError**: throws <code>[ExpiredInstrument.GetExpiredFutureContractsError](src/resources/expired-instrument.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.expiredInstrument.getExpiredFutureContracts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetExpiredFuturesContractResponse, ExpiredInstrument.GetExpiredFutureContractsError&gt;</code>, with `result.value` of type <code>[GetExpiredFuturesContractResponse](src/models/get-expired-futures-contract-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getExpiredHistoricalCandleData(request: ExpiredInstrument.GetExpiredHistoricalCandleDataRequest, options?: RequestOptions): ApiPromise&lt;GetHistoricalCandleResponse, ExpiredInstrument.GetExpiredHistoricalCandleDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Expired OHLC values for all instruments across various timeframes. Expired Historical data can be fetched for the following durations.
1minute: last 1 month candles till endDate
30minute: last 1 year candles till endDate
day: last 1 year candles till endDate
week: last 10 year candles till endDate
month: last 10 year candles till endDate

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.expiredInstrument.getExpiredHistoricalCandleData({
    expiredInstrumentKey: "NSE_EQ|INE848E01016|24-04-2025",
    interval: "day",
    toDate: "2025-01-01",
    fromDate: "2024-01-01",
  });
  // TODO: Handle 'response' of type GetHistoricalCandleResponse
} catch (err) {
  // TODO: Handle 'err' of type ExpiredInstrument.GetExpiredHistoricalCandleDataError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.expiredInstrument
  .getExpiredHistoricalCandleData({
    expiredInstrumentKey: "NSE_EQ|INE848E01016|24-04-2025",
    interval: "day",
    toDate: "2025-01-01",
    fromDate: "2024-01-01",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetHistoricalCandleResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>expiredInstrumentKey</code> | <code>string</code> | Expired Instrument Key of asset |
| <code>interval</code> | <code>string</code> | Interval to get expired ohlc data |
| <code>toDate</code> | <code>string</code> | to date |
| <code>fromDate</code> | <code>string</code> | from date |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.expiredInstrument.getExpiredHistoricalCandleData(request)`

- **OnSuccess**: <code>[GetHistoricalCandleResponse](src/models/get-historical-candle-response.ts)</code>
- **OnError**: throws <code>[ExpiredInstrument.GetExpiredHistoricalCandleDataError](src/resources/expired-instrument.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.expiredInstrument.getExpiredHistoricalCandleData(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetHistoricalCandleResponse, ExpiredInstrument.GetExpiredHistoricalCandleDataError&gt;</code>, with `result.value` of type <code>[GetHistoricalCandleResponse](src/models/get-historical-candle-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getExpiredOptionContracts(request: ExpiredInstrument.GetExpiredOptionContractsRequest, options?: RequestOptions): ApiPromise&lt;GetOptionContractResponse, ExpiredInstrument.GetExpiredOptionContractsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the expired option contracts

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.expiredInstrument.getExpiredOptionContracts({
    instrumentKey: "NSE_INDEX|Nifty 50",
    expiryDate: "2024-02-01",
  });
  // TODO: Handle 'response' of type GetOptionContractResponse
} catch (err) {
  // TODO: Handle 'err' of type ExpiredInstrument.GetExpiredOptionContractsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.expiredInstrument
  .getExpiredOptionContracts({ instrumentKey: "NSE_INDEX|Nifty 50", expiryDate: "2024-02-01" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetOptionContractResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrumentKey</code> | <code>string</code> | Instrument key for an underlying symbol |
| <code>expiryDate</code> | <code>string</code> | Expiry date in format: YYYY-mm-dd |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.expiredInstrument.getExpiredOptionContracts(request)`

- **OnSuccess**: <code>[GetOptionContractResponse](src/models/get-option-contract-response.ts)</code>
- **OnError**: throws <code>[ExpiredInstrument.GetExpiredOptionContractsError](src/resources/expired-instrument.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.expiredInstrument.getExpiredOptionContracts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetOptionContractResponse, ExpiredInstrument.GetExpiredOptionContractsError&gt;</code>, with `result.value` of type <code>[GetOptionContractResponse](src/models/get-option-contract-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getExpiriesResponse(request: ExpiredInstrument.GetExpiriesResponseRequest, options?: RequestOptions): ApiPromise&lt;GetExpiriesResponse, ExpiredInstrument.GetExpiriesResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve expiry dates for a given instrument key.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.expiredInstrument.getExpiriesResponse({
    instrumentKey: "NSE_EQ|INE848E01016",
  });
  // TODO: Handle 'response' of type GetExpiriesResponse
} catch (err) {
  // TODO: Handle 'err' of type ExpiredInstrument.GetExpiriesResponseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.expiredInstrument
  .getExpiriesResponse({ instrumentKey: "NSE_EQ|INE848E01016" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetExpiriesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrumentKey</code> | <code>string</code> | Instrument Key of asset |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.expiredInstrument.getExpiriesResponse(request)`

- **OnSuccess**: <code>[GetExpiriesResponse](src/models/get-expiries-response.ts)</code>
- **OnError**: throws <code>[ExpiredInstrument.GetExpiriesResponseError](src/resources/expired-instrument.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.expiredInstrument.getExpiriesResponse(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetExpiriesResponse, ExpiredInstrument.GetExpiriesResponseError&gt;</code>, with `result.value` of type <code>[GetExpiriesResponse](src/models/get-expiries-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Fundamentals

> Source: [Fundamentals](src/resources/fundamentals.ts)

<details>
<summary><code>getBalanceSheet(request: Fundamentals.GetBalanceSheetRequest, options?: RequestOptions): ApiPromise&lt;BalanceSheetResponse, Fundamentals.GetBalanceSheetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches balance sheet data for the given ISIN.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fundamentals.getBalanceSheet({
    isin: "INE002A01018",
    type: "consolidated",
    fs: false,
  });
  // TODO: Handle 'response' of type BalanceSheetResponse
} catch (err) {
  // TODO: Handle 'err' of type Fundamentals.GetBalanceSheetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fundamentals
  .getBalanceSheet({ isin: "INE002A01018", type: "consolidated", fs: false })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BalanceSheetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>isin</code> | <code>string</code> | ISIN of the company |
| <code>type?</code> | <code>string</code> | Report type. Allowed values: consolidated or standalone<br>**Default**: "consolidated" |
| <code>fs?</code> | <code>boolean</code> | Whether to include the full financial statement<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fundamentals.getBalanceSheet(request)`

- **OnSuccess**: <code>[BalanceSheetResponse](src/models/balance-sheet-response.ts)</code>
- **OnError**: throws <code>[Fundamentals.GetBalanceSheetError](src/resources/fundamentals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fundamentals.getBalanceSheet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BalanceSheetResponse, Fundamentals.GetBalanceSheetError&gt;</code>, with `result.value` of type <code>[BalanceSheetResponse](src/models/balance-sheet-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCashFlow(request: Fundamentals.GetCashFlowRequest, options?: RequestOptions): ApiPromise&lt;CashFlowResponse, Fundamentals.GetCashFlowError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches cash flow data for the given ISIN.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fundamentals.getCashFlow({
    isin: "INE002A01018",
    type: "consolidated",
    fs: false,
  });
  // TODO: Handle 'response' of type CashFlowResponse
} catch (err) {
  // TODO: Handle 'err' of type Fundamentals.GetCashFlowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fundamentals
  .getCashFlow({ isin: "INE002A01018", type: "consolidated", fs: false })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CashFlowResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>isin</code> | <code>string</code> | ISIN of the company |
| <code>type?</code> | <code>string</code> | Report type. Allowed values: consolidated, standalone<br>**Default**: "consolidated" |
| <code>fs?</code> | <code>boolean</code> | Whether to include the full financial statement<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fundamentals.getCashFlow(request)`

- **OnSuccess**: <code>[CashFlowResponse](src/models/cash-flow-response.ts)</code>
- **OnError**: throws <code>[Fundamentals.GetCashFlowError](src/resources/fundamentals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fundamentals.getCashFlow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CashFlowResponse, Fundamentals.GetCashFlowError&gt;</code>, with `result.value` of type <code>[CashFlowResponse](src/models/cash-flow-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompanyProfile(request: Fundamentals.GetCompanyProfileRequest, options?: RequestOptions): ApiPromise&lt;CompanyProfileResponse, Fundamentals.GetCompanyProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches company profile information for the given ISIN.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fundamentals.getCompanyProfile({ isin: "INE002A01018" });
  // TODO: Handle 'response' of type CompanyProfileResponse
} catch (err) {
  // TODO: Handle 'err' of type Fundamentals.GetCompanyProfileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fundamentals.getCompanyProfile({ isin: "INE002A01018" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompanyProfileResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>isin</code> | <code>string</code> | ISIN of the company |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fundamentals.getCompanyProfile(request)`

- **OnSuccess**: <code>[CompanyProfileResponse](src/models/company-profile-response.ts)</code>
- **OnError**: throws <code>[Fundamentals.GetCompanyProfileError](src/resources/fundamentals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fundamentals.getCompanyProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompanyProfileResponse, Fundamentals.GetCompanyProfileError&gt;</code>, with `result.value` of type <code>[CompanyProfileResponse](src/models/company-profile-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompetitors(request: Fundamentals.GetCompetitorsRequest, options?: RequestOptions): ApiPromise&lt;CompetitorsResponse, Fundamentals.GetCompetitorsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches the list of competitors for the given instrument_key.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fundamentals.getCompetitors({ instrumentKey: "NSE_EQ|INE002A01018" });
  // TODO: Handle 'response' of type CompetitorsResponse
} catch (err) {
  // TODO: Handle 'err' of type Fundamentals.GetCompetitorsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fundamentals
  .getCompetitors({ instrumentKey: "NSE_EQ|INE002A01018" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompetitorsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrumentKey</code> | <code>string</code> | Instrument key of the company |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fundamentals.getCompetitors(request)`

- **OnSuccess**: <code>[CompetitorsResponse](src/models/competitors-response.ts)</code>
- **OnError**: throws <code>[Fundamentals.GetCompetitorsError](src/resources/fundamentals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fundamentals.getCompetitors(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompetitorsResponse, Fundamentals.GetCompetitorsError&gt;</code>, with `result.value` of type <code>[CompetitorsResponse](src/models/competitors-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCorporateActions(request: Fundamentals.GetCorporateActionsRequest, options?: RequestOptions): ApiPromise&lt;CorporateActionsResponse, Fundamentals.GetCorporateActionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches corporate actions for the given ISIN.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fundamentals.getCorporateActions({ isin: "INE002A01018" });
  // TODO: Handle 'response' of type CorporateActionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Fundamentals.GetCorporateActionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fundamentals.getCorporateActions({ isin: "INE002A01018" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CorporateActionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>isin</code> | <code>string</code> | ISIN of the company |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fundamentals.getCorporateActions(request)`

- **OnSuccess**: <code>[CorporateActionsResponse](src/models/corporate-actions-response.ts)</code>
- **OnError**: throws <code>[Fundamentals.GetCorporateActionsError](src/resources/fundamentals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fundamentals.getCorporateActions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CorporateActionsResponse, Fundamentals.GetCorporateActionsError&gt;</code>, with `result.value` of type <code>[CorporateActionsResponse](src/models/corporate-actions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getIncomeStatement(request: Fundamentals.GetIncomeStatementRequest, options?: RequestOptions): ApiPromise&lt;IncomeStatementResponse, Fundamentals.GetIncomeStatementError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches income statement data for the given ISIN.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fundamentals.getIncomeStatement({
    isin: "INE002A01018",
    type: "consolidated",
    timePeriod: "yearly",
    fs: false,
  });
  // TODO: Handle 'response' of type IncomeStatementResponse
} catch (err) {
  // TODO: Handle 'err' of type Fundamentals.GetIncomeStatementError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fundamentals
  .getIncomeStatement({ isin: "INE002A01018", type: "consolidated", timePeriod: "yearly", fs: false })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IncomeStatementResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>isin</code> | <code>string</code> | ISIN of the company |
| <code>type?</code> | <code>string</code> | Report type. Allowed values: consolidated or standalone<br>**Default**: "consolidated" |
| <code>timePeriod?</code> | <code>string</code> | Time period. Allowed values: yearly, quarterly<br>**Default**: "yearly" |
| <code>fs?</code> | <code>boolean</code> | Whether to include the full financial statement<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fundamentals.getIncomeStatement(request)`

- **OnSuccess**: <code>[IncomeStatementResponse](src/models/income-statement-response.ts)</code>
- **OnError**: throws <code>[Fundamentals.GetIncomeStatementError](src/resources/fundamentals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fundamentals.getIncomeStatement(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IncomeStatementResponse, Fundamentals.GetIncomeStatementError&gt;</code>, with `result.value` of type <code>[IncomeStatementResponse](src/models/income-statement-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getKeyRatios(request: Fundamentals.GetKeyRatiosRequest, options?: RequestOptions): ApiPromise&lt;KeyRatiosResponse, Fundamentals.GetKeyRatiosError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches key financial ratios for the given ISIN.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fundamentals.getKeyRatios({ isin: "INE002A01018" });
  // TODO: Handle 'response' of type KeyRatiosResponse
} catch (err) {
  // TODO: Handle 'err' of type Fundamentals.GetKeyRatiosError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fundamentals.getKeyRatios({ isin: "INE002A01018" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type KeyRatiosResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>isin</code> | <code>string</code> | ISIN of the company |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fundamentals.getKeyRatios(request)`

- **OnSuccess**: <code>[KeyRatiosResponse](src/models/key-ratios-response.ts)</code>
- **OnError**: throws <code>[Fundamentals.GetKeyRatiosError](src/resources/fundamentals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fundamentals.getKeyRatios(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;KeyRatiosResponse, Fundamentals.GetKeyRatiosError&gt;</code>, with `result.value` of type <code>[KeyRatiosResponse](src/models/key-ratios-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getShareHoldings(request: Fundamentals.GetShareHoldingsRequest, options?: RequestOptions): ApiPromise&lt;ShareHoldingsResponse, Fundamentals.GetShareHoldingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches shareholding pattern for the given ISIN.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fundamentals.getShareHoldings({ isin: "INE002A01018" });
  // TODO: Handle 'response' of type ShareHoldingsResponse
} catch (err) {
  // TODO: Handle 'err' of type Fundamentals.GetShareHoldingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fundamentals.getShareHoldings({ isin: "INE002A01018" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ShareHoldingsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>isin</code> | <code>string</code> | ISIN of the company |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fundamentals.getShareHoldings(request)`

- **OnSuccess**: <code>[ShareHoldingsResponse](src/models/share-holdings-response.ts)</code>
- **OnError**: throws <code>[Fundamentals.GetShareHoldingsError](src/resources/fundamentals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fundamentals.getShareHoldings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ShareHoldingsResponse, Fundamentals.GetShareHoldingsError&gt;</code>, with `result.value` of type <code>[ShareHoldingsResponse](src/models/share-holdings-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## History

> Source: [History](src/resources/history.ts)

<details>
<summary><code>getHistoricalCandleData2(request: History.GetHistoricalCandleData2Request, options?: RequestOptions): ApiPromise&lt;GetHistoricalCandleResponse, History.GetHistoricalCandleData2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get OHLC values for all instruments across various timeframes. Historical data can be fetched for the following durations.
1minute: last 1 month candles till endDate
30minute: last 1 year candles till endDate
day: last 1 year candles till endDate
week: last 10 year candles till endDate
month: last 10 year candles till endDate

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.history.getHistoricalCandleData2({
    instrumentKey: "some example string",
    interval: "some example string",
    toDate: "some example string",
  });
  // TODO: Handle 'response' of type GetHistoricalCandleResponse
} catch (err) {
  // TODO: Handle 'err' of type History.GetHistoricalCandleData2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.history
  .getHistoricalCandleData2({
    instrumentKey: "some example string",
    interval: "some example string",
    toDate: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetHistoricalCandleResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrumentKey</code> | <code>string</code> | - |
| <code>interval</code> | <code>string</code> | - |
| <code>toDate</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.history.getHistoricalCandleData2(request)`

- **OnSuccess**: <code>[GetHistoricalCandleResponse](src/models/get-historical-candle-response.ts)</code>
- **OnError**: throws <code>[History.GetHistoricalCandleData2Error](src/resources/history.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.history.getHistoricalCandleData2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetHistoricalCandleResponse, History.GetHistoricalCandleData2Error&gt;</code>, with `result.value` of type <code>[GetHistoricalCandleResponse](src/models/get-historical-candle-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getHistoricalCandleData3(request: History.GetHistoricalCandleData3Request, options?: RequestOptions): ApiPromise&lt;GetHistoricalCandleResponse, History.GetHistoricalCandleData3Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get OHLC values for all instruments across various timeframes. Historical data can be fetched for the following durations.
1minute: last 1 month candles till endDate
30minute: last 1 year candles till endDate
day: last 1 year candles till endDate
week: last 10 year candles till endDate
month: last 10 year candles till endDate

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.history.getHistoricalCandleData3({
    instrumentKey: "some example string",
    interval: "some example string",
    toDate: "some example string",
    fromDate: "some example string",
  });
  // TODO: Handle 'response' of type GetHistoricalCandleResponse
} catch (err) {
  // TODO: Handle 'err' of type History.GetHistoricalCandleData3Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.history
  .getHistoricalCandleData3({
    instrumentKey: "some example string",
    interval: "some example string",
    toDate: "some example string",
    fromDate: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetHistoricalCandleResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrumentKey</code> | <code>string</code> | - |
| <code>interval</code> | <code>string</code> | - |
| <code>toDate</code> | <code>string</code> | - |
| <code>fromDate</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.history.getHistoricalCandleData3(request)`

- **OnSuccess**: <code>[GetHistoricalCandleResponse](src/models/get-historical-candle-response.ts)</code>
- **OnError**: throws <code>[History.GetHistoricalCandleData3Error](src/resources/history.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.history.getHistoricalCandleData3(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetHistoricalCandleResponse, History.GetHistoricalCandleData3Error&gt;</code>, with `result.value` of type <code>[GetHistoricalCandleResponse](src/models/get-historical-candle-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getIntraDayCandleData1(request: History.GetIntraDayCandleData1Request, options?: RequestOptions): ApiPromise&lt;GetIntraDayCandleResponse, History.GetIntraDayCandleData1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get OHLC values for all instruments for the present trading day

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.history.getIntraDayCandleData1({
    instrumentKey: "some example string",
    interval: "some example string",
  });
  // TODO: Handle 'response' of type GetIntraDayCandleResponse
} catch (err) {
  // TODO: Handle 'err' of type History.GetIntraDayCandleData1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.history
  .getIntraDayCandleData1({ instrumentKey: "some example string", interval: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetIntraDayCandleResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrumentKey</code> | <code>string</code> | - |
| <code>interval</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.history.getIntraDayCandleData1(request)`

- **OnSuccess**: <code>[GetIntraDayCandleResponse](src/models/get-intra-day-candle-response.ts)</code>
- **OnError**: throws <code>[History.GetIntraDayCandleData1Error](src/resources/history.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.history.getIntraDayCandleData1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetIntraDayCandleResponse, History.GetIntraDayCandleData1Error&gt;</code>, with `result.value` of type <code>[GetIntraDayCandleResponse](src/models/get-intra-day-candle-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## HistoryV3

> Source: [HistoryV3](src/resources/history-v3.ts)

<details>
<summary><code>getHistoricalCandleData(request: HistoryV3.GetHistoricalCandleDataRequest, options?: RequestOptions): ApiPromise&lt;GetHistoricalCandleResponse, HistoryV3.GetHistoricalCandleDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get OHLC values for all instruments for the present trading day with expanded interval options.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.historyV3.getHistoricalCandleData({
    instrumentKey: "some example string",
    unit: "some example string",
    interval: 1,
    toDate: "some example string",
  });
  // TODO: Handle 'response' of type GetHistoricalCandleResponse
} catch (err) {
  // TODO: Handle 'err' of type HistoryV3.GetHistoricalCandleDataError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.historyV3
  .getHistoricalCandleData({
    instrumentKey: "some example string",
    unit: "some example string",
    interval: 1,
    toDate: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetHistoricalCandleResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrumentKey</code> | <code>string</code> | - |
| <code>unit</code> | <code>string</code> | - |
| <code>interval</code> | <code>number</code> | - |
| <code>toDate</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.historyV3.getHistoricalCandleData(request)`

- **OnSuccess**: <code>[GetHistoricalCandleResponse](src/models/get-historical-candle-response.ts)</code>
- **OnError**: throws <code>[HistoryV3.GetHistoricalCandleDataError](src/resources/history-v3.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.historyV3.getHistoricalCandleData(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetHistoricalCandleResponse, HistoryV3.GetHistoricalCandleDataError&gt;</code>, with `result.value` of type <code>[GetHistoricalCandleResponse](src/models/get-historical-candle-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getHistoricalCandleData1(request: HistoryV3.GetHistoricalCandleData1Request, options?: RequestOptions): ApiPromise&lt;GetHistoricalCandleResponse, HistoryV3.GetHistoricalCandleData1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get OHLC values for all instruments for the present trading day with expanded interval options

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.historyV3.getHistoricalCandleData1({
    instrumentKey: "some example string",
    unit: "some example string",
    interval: 1,
    toDate: "some example string",
    fromDate: "some example string",
  });
  // TODO: Handle 'response' of type GetHistoricalCandleResponse
} catch (err) {
  // TODO: Handle 'err' of type HistoryV3.GetHistoricalCandleData1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.historyV3
  .getHistoricalCandleData1({
    instrumentKey: "some example string",
    unit: "some example string",
    interval: 1,
    toDate: "some example string",
    fromDate: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetHistoricalCandleResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrumentKey</code> | <code>string</code> | - |
| <code>unit</code> | <code>string</code> | - |
| <code>interval</code> | <code>number</code> | - |
| <code>toDate</code> | <code>string</code> | - |
| <code>fromDate</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.historyV3.getHistoricalCandleData1(request)`

- **OnSuccess**: <code>[GetHistoricalCandleResponse](src/models/get-historical-candle-response.ts)</code>
- **OnError**: throws <code>[HistoryV3.GetHistoricalCandleData1Error](src/resources/history-v3.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.historyV3.getHistoricalCandleData1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetHistoricalCandleResponse, HistoryV3.GetHistoricalCandleData1Error&gt;</code>, with `result.value` of type <code>[GetHistoricalCandleResponse](src/models/get-historical-candle-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getIntraDayCandleData(request: HistoryV3.GetIntraDayCandleDataRequest, options?: RequestOptions): ApiPromise&lt;GetIntraDayCandleResponse, HistoryV3.GetIntraDayCandleDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get OHLC values for all instruments for the present trading day

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.historyV3.getIntraDayCandleData({
    instrumentKey: "some example string",
    unit: "some example string",
    interval: 1,
  });
  // TODO: Handle 'response' of type GetIntraDayCandleResponse
} catch (err) {
  // TODO: Handle 'err' of type HistoryV3.GetIntraDayCandleDataError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.historyV3
  .getIntraDayCandleData({ instrumentKey: "some example string", unit: "some example string", interval: 1 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetIntraDayCandleResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrumentKey</code> | <code>string</code> | - |
| <code>unit</code> | <code>string</code> | - |
| <code>interval</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.historyV3.getIntraDayCandleData(request)`

- **OnSuccess**: <code>[GetIntraDayCandleResponse](src/models/get-intra-day-candle-response.ts)</code>
- **OnError**: throws <code>[HistoryV3.GetIntraDayCandleDataError](src/resources/history-v3.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.historyV3.getIntraDayCandleData(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetIntraDayCandleResponse, HistoryV3.GetIntraDayCandleDataError&gt;</code>, with `result.value` of type <code>[GetIntraDayCandleResponse](src/models/get-intra-day-candle-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Instruments

> Source: [Instruments](src/resources/instruments.ts)

<details>
<summary><code>searchInstrument(request: Instruments.SearchInstrumentRequest, options?: RequestOptions): ApiPromise&lt;SearchInstrumentResponse, Instruments.SearchInstrumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the instrument details for searched query

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.instruments.searchInstrument({
    query: "RELIANCE 1500 PE",
    exchanges: "NSE,BSE,MCX",
    segments: "EQ,FO,CURR,COMM",
    instrumentTypes: "CE,PE",
    expiry: "2025-12-28",
    atmOffset: 2,
    pageNumber: 1,
    records: 20,
  });
  // TODO: Handle 'response' of type SearchInstrumentResponse
} catch (err) {
  // TODO: Handle 'err' of type Instruments.SearchInstrumentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.instruments
  .searchInstrument({
    query: "RELIANCE 1500 PE",
    exchanges: "NSE,BSE,MCX",
    segments: "EQ,FO,CURR,COMM",
    instrumentTypes: "CE,PE",
    expiry: "2025-12-28",
    atmOffset: 2,
    pageNumber: 1,
    records: 20,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchInstrumentResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>query</code> | <code>string</code> | natural language query |
| <code>exchanges?</code> | <code>string</code> | Comma separated exchanges |
| <code>segments?</code> | <code>string</code> | Comma separated segments |
| <code>instrumentTypes?</code> | <code>string</code> | Comma separated instrument types |
| <code>expiry?</code> | <code>string</code> | expiry in format: yyyy-MM-dd |
| <code>atmOffset?</code> | <code>number</code> | page number greater than or equal to 1 |
| <code>pageNumber?</code> | <code>number</code> | ATM offset number for queries like ATM, ATM+1, ATM-1, etc.<br>**Default**: 1 |
| <code>records?</code> | <code>number</code> | no of records in a single page<br>**Default**: 10 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.instruments.searchInstrument(request)`

- **OnSuccess**: <code>[SearchInstrumentResponse](src/models/search-instrument-response.ts)</code>
- **OnError**: throws <code>[Instruments.SearchInstrumentError](src/resources/instruments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.instruments.searchInstrument(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchInstrumentResponse, Instruments.SearchInstrumentError&gt;</code>, with `result.value` of type <code>[SearchInstrumentResponse](src/models/search-instrument-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Ipo

> Source: [Ipo](src/resources/ipo.ts)

<details>
<summary><code>applyForIpo(request: Ipo.ApplyForIpoRequest, options?: RequestOptions): ApiPromise&lt;IpoApplyResponse, Ipo.ApplyForIpoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Places an IPO application for the authenticated user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.ipo.applyForIpo({
    body: {
      id: "some example string",
      upi: "some example string",
      category: Category.Ind,
      bids: [{ quantity: 1, price: 1.5 }],
    },
  });
  // TODO: Handle 'response' of type IpoApplyResponse
} catch (err) {
  // TODO: Handle 'err' of type Ipo.ApplyForIpoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.ipo
  .applyForIpo({
    body: {
      id: "some example string",
      upi: "some example string",
      category: Category.Ind,
      bids: [{ quantity: 1, price: 1.5 }],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IpoApplyResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[IpoApplyRequest](src/models/ipo-apply-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.ipo.applyForIpo(request)`

- **OnSuccess**: <code>[IpoApplyResponse](src/models/ipo-apply-response.ts)</code>
- **OnError**: throws <code>[Ipo.ApplyForIpoError](src/resources/ipo.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.ipo.applyForIpo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IpoApplyResponse, Ipo.ApplyForIpoError&gt;</code>, with `result.value` of type <code>[IpoApplyResponse](src/models/ipo-apply-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelIpoOrder(request: Ipo.CancelIpoOrderRequest, options?: RequestOptions): ApiPromise&lt;IpoCancelResponse, Ipo.CancelIpoOrderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels/deletes an IPO order of the authenticated user by order id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.ipo.cancelIpoOrder({ orderId: "UPROYAL00000003" });
  // TODO: Handle 'response' of type IpoCancelResponse
} catch (err) {
  // TODO: Handle 'err' of type Ipo.CancelIpoOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.ipo.cancelIpoOrder({ orderId: "UPROYAL00000003" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IpoCancelResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>orderId</code> | <code>string</code> | IPO application id, as returned in `order_id` by the apply and orders APIs |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.ipo.cancelIpoOrder(request)`

- **OnSuccess**: <code>[IpoCancelResponse](src/models/ipo-cancel-response.ts)</code>
- **OnError**: throws <code>[Ipo.CancelIpoOrderError](src/resources/ipo.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.ipo.cancelIpoOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IpoCancelResponse, Ipo.CancelIpoOrderError&gt;</code>, with `result.value` of type <code>[IpoCancelResponse](src/models/ipo-cancel-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getIpoDetails(request: Ipo.GetIpoDetailsRequest, options?: RequestOptions): ApiPromise&lt;IpoDetailsResponse, Ipo.GetIpoDetailsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches detailed information for an IPO by its slug ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.ipo.getIpoDetails({ id: "mandb-engineering-limited-ipo" });
  // TODO: Handle 'response' of type IpoDetailsResponse
} catch (err) {
  // TODO: Handle 'err' of type Ipo.GetIpoDetailsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.ipo.getIpoDetails({ id: "mandb-engineering-limited-ipo" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IpoDetailsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | IPO id (slug), as returned in `id` by the IPO listing API |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.ipo.getIpoDetails(request)`

- **OnSuccess**: <code>[IpoDetailsResponse](src/models/ipo-details-response.ts)</code>
- **OnError**: throws <code>[Ipo.GetIpoDetailsError](src/resources/ipo.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.ipo.getIpoDetails(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IpoDetailsResponse, Ipo.GetIpoDetailsError&gt;</code>, with `result.value` of type <code>[IpoDetailsResponse](src/models/ipo-details-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getIpoListing(request?: Ipo.GetIpoListingRequest, options?: RequestOptions): ApiPromise&lt;IpoListingResponse, Ipo.GetIpoListingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches list of IPOs filtered by status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.ipo.getIpoListing({
    status: Status9.Open,
    issueType: IssueType3.Regular,
    pageNumber: "1",
    records: "20",
  });
  // TODO: Handle 'response' of type IpoListingResponse
} catch (err) {
  // TODO: Handle 'err' of type Ipo.GetIpoListingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.ipo
  .getIpoListing({ status: Status9.Open, issueType: IssueType3.Regular, pageNumber: "1", records: "20" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IpoListingResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>status?</code> | <code>[Status9](src/models/status9.ts)</code> | IPO status to filter by |
| <code>issueType?</code> | <code>[IssueType3](src/models/issue-type3.ts)</code> | Issue type filter. `regular` is a mainboard issue. Returns both when omitted |
| <code>pageNumber?</code> | <code>string</code> | Page number, starting at 1 |
| <code>records?</code> | <code>string</code> | Number of records per page |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.ipo.getIpoListing(request)`

- **OnSuccess**: <code>[IpoListingResponse](src/models/ipo-listing-response.ts)</code>
- **OnError**: throws <code>[Ipo.GetIpoListingError](src/resources/ipo.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.ipo.getIpoListing(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IpoListingResponse, Ipo.GetIpoListingError&gt;</code>, with `result.value` of type <code>[IpoListingResponse](src/models/ipo-listing-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getIpoOrderById(request: Ipo.GetIpoOrderByIdRequest, options?: RequestOptions): ApiPromise&lt;IpoOrderDetailResponse, Ipo.GetIpoOrderByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches a single IPO order of the authenticated user by order id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.ipo.getIpoOrderById({ orderId: "UPROYAL00000003" });
  // TODO: Handle 'response' of type IpoOrderDetailResponse
} catch (err) {
  // TODO: Handle 'err' of type Ipo.GetIpoOrderByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.ipo.getIpoOrderById({ orderId: "UPROYAL00000003" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IpoOrderDetailResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>orderId</code> | <code>string</code> | IPO application id, as returned in `order_id` by the apply and orders APIs |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.ipo.getIpoOrderById(request)`

- **OnSuccess**: <code>[IpoOrderDetailResponse](src/models/ipo-order-detail-response.ts)</code>
- **OnError**: throws <code>[Ipo.GetIpoOrderByIdError](src/resources/ipo.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.ipo.getIpoOrderById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IpoOrderDetailResponse, Ipo.GetIpoOrderByIdError&gt;</code>, with `result.value` of type <code>[IpoOrderDetailResponse](src/models/ipo-order-detail-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getIpoOrders(request?: Ipo.GetIpoOrdersRequest, options?: RequestOptions): ApiPromise&lt;IpoOrderResponse, Ipo.GetIpoOrdersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches the authenticated user's IPO orders/applications.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.ipo.getIpoOrders({ pageNumber: "1", records: "10" });
  // TODO: Handle 'response' of type IpoOrderResponse
} catch (err) {
  // TODO: Handle 'err' of type Ipo.GetIpoOrdersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.ipo.getIpoOrders({ pageNumber: "1", records: "10" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IpoOrderResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pageNumber?</code> | <code>string</code> | Page number, starting at 1 |
| <code>records?</code> | <code>string</code> | Number of records per page |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.ipo.getIpoOrders(request)`

- **OnSuccess**: <code>[IpoOrderResponse](src/models/ipo-order-response.ts)</code>
- **OnError**: throws <code>[Ipo.GetIpoOrdersError](src/resources/ipo.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.ipo.getIpoOrders(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IpoOrderResponse, Ipo.GetIpoOrdersError&gt;</code>, with `result.value` of type <code>[IpoOrderResponse](src/models/ipo-order-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Login

> Source: [Login](src/resources/login.ts)

<details>
<summary><code>authorize(request: Login.AuthorizeRequest, options?: RequestOptions): ApiPromise&lt;undefined, Login.AuthorizeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This provides details on the login endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.login.authorize({ clientId: "some example string", redirectUri: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Login.AuthorizeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.login
  .authorize({ clientId: "some example string", redirectUri: "some example string" })
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
| <code>clientId</code> | <code>string</code> | - |
| <code>redirectUri</code> | <code>string</code> | - |
| <code>state?</code> | <code>string</code> | - |
| <code>scope?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.login.authorize(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Login.AuthorizeError](src/resources/login.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.login.authorize(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Login.AuthorizeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>initTokenRequestForIndieUser(request: Login.InitTokenRequestForIndieUserRequest, options?: RequestOptions): ApiPromise&lt;TokenResponse, Login.InitTokenRequestForIndieUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the initialize the generate token and it's expiry for an indie user

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.login.initTokenRequestForIndieUser({
    clientId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type TokenResponse
} catch (err) {
  // TODO: Handle 'err' of type Login.InitTokenRequestForIndieUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.login
  .initTokenRequestForIndieUser({ clientId: "some example string", body: {} })
  .asApiResult();
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
| <code>clientId</code> | <code>string</code> | - |
| <code>body</code> | <code>[IndieUserTokenRequest](src/models/indie-user-token-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.login.initTokenRequestForIndieUser(request)`

- **OnSuccess**: <code>[TokenResponse](src/models/token-response.ts)</code>
- **OnError**: throws <code>[Login.InitTokenRequestForIndieUserError](src/resources/login.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.login.initTokenRequestForIndieUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TokenResponse, Login.InitTokenRequestForIndieUserError&gt;</code>, with `result.value` of type <code>[TokenResponse](src/models/token-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>logout(options?: RequestOptions): ApiPromise&lt;LogoutResponse, Login.LogoutError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.login.logout();
  // TODO: Handle 'response' of type LogoutResponse
} catch (err) {
  // TODO: Handle 'err' of type Login.LogoutError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.login.logout().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LogoutResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.login.logout()`

- **OnSuccess**: <code>[LogoutResponse](src/models/logout-response.ts)</code>
- **OnError**: throws <code>[Login.LogoutError](src/resources/login.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.login.logout().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LogoutResponse, Login.LogoutError&gt;</code>, with `result.value` of type <code>[LogoutResponse](src/models/logout-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>token(request: Login.TokenRequestParams, options?: RequestOptions): ApiPromise&lt;TokenResponse, Login.TokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to obtain opaque token from authorization_code exchange and also provides the user’s profile in the same response.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.login.token({
    code: "some example string",
    clientId: "some example string",
    clientSecret: "some example string",
    redirectUri: "some example string",
    grantType: "some example string",
  });
  // TODO: Handle 'response' of type TokenResponse
} catch (err) {
  // TODO: Handle 'err' of type Login.TokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.login
  .token({
    code: "some example string",
    clientId: "some example string",
    clientSecret: "some example string",
    redirectUri: "some example string",
    grantType: "some example string",
  })
  .asApiResult();
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
| <code>code</code> | <code>string</code> | - |
| <code>clientId</code> | <code>string</code> | OAuth API key that is a public identifier for app |
| <code>clientSecret</code> | <code>string</code> | OAuth client secret that is a private secret known only to app and authorization server |
| <code>redirectUri</code> | <code>string</code> | Authorization server will redirect the user back to the application via redirect url |
| <code>grantType</code> | <code>string</code> | Type of grant used to get an access token |
| <code>refreshExtendedToken?</code> | <code>boolean</code> | Whether to refresh (regenerate) the extended access token. Defaults to false when absent. Set to true to refresh; false or omit to reuse an existing extended token when available. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.login.token(request)`

- **OnSuccess**: <code>[TokenResponse](src/models/token-response.ts)</code>
- **OnError**: throws <code>[Login.TokenError](src/resources/login.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.login.token(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TokenResponse, Login.TokenError&gt;</code>, with `result.value` of type <code>[TokenResponse](src/models/token-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## MarketHolidaysAndTimings

> Source: [MarketHolidaysAndTimings](src/resources/market-holidays-and-timings.ts)

<details>
<summary><code>getChangeOiData(request: MarketHolidaysAndTimings.GetChangeOiDataRequest, options?: RequestOptions): ApiPromise&lt;AnalyticsResponse, MarketHolidaysAndTimings.GetChangeOiDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches change in OI data for the given instrument key, expiry, date and interval.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.marketHolidaysAndTimings.getChangeOiData({
    instrumentKey: "NSE_INDEX|Nifty 50",
    expiry: "2026-05-19",
    date: "2026-05-06",
    interval: 2,
  });
  // TODO: Handle 'response' of type AnalyticsResponse
} catch (err) {
  // TODO: Handle 'err' of type MarketHolidaysAndTimings.GetChangeOiDataError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.marketHolidaysAndTimings
  .getChangeOiData({
    instrumentKey: "NSE_INDEX|Nifty 50",
    expiry: "2026-05-19",
    date: "2026-05-06",
    interval: 2,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyticsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrumentKey</code> | <code>string</code> | Underlying asset instrument key |
| <code>expiry</code> | <code>string</code> | Expiry date in YYYY-MM-DD format |
| <code>date</code> | <code>string</code> | Date in YYYY-MM-DD format for which change OI data is required |
| <code>interval</code> | <code>number</code> | Number of days for which difference in OI is required |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.marketHolidaysAndTimings.getChangeOiData(request)`

- **OnSuccess**: <code>[AnalyticsResponse](src/models/analytics-response.ts)</code>
- **OnError**: throws <code>[MarketHolidaysAndTimings.GetChangeOiDataError](src/resources/market-holidays-and-timings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.marketHolidaysAndTimings.getChangeOiData(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyticsResponse, MarketHolidaysAndTimings.GetChangeOiDataError&gt;</code>, with `result.value` of type <code>[AnalyticsResponse](src/models/analytics-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDiiData(request: MarketHolidaysAndTimings.GetDiiDataRequest, options?: RequestOptions): ApiPromise&lt;AnalyticsResponse, MarketHolidaysAndTimings.GetDiiDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches DII activity data for the given interval.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.marketHolidaysAndTimings.getDiiData({
    dataType: "NSE_EQ|CASH",
    interval: "1D",
    from: "2024-01-01",
  });
  // TODO: Handle 'response' of type AnalyticsResponse
} catch (err) {
  // TODO: Handle 'err' of type MarketHolidaysAndTimings.GetDiiDataError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.marketHolidaysAndTimings
  .getDiiData({ dataType: "NSE_EQ|CASH", interval: "1D", from: "2024-01-01" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyticsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dataType</code> | <code>string</code> | Data type. Allowed value: NSE_EQ\|CASH |
| <code>interval</code> | <code>string</code> | Interval. Allowed values: 1D, 1M |
| <code>from?</code> | <code>string</code> | Start date in YYYY-MM-DD format (optional) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.marketHolidaysAndTimings.getDiiData(request)`

- **OnSuccess**: <code>[AnalyticsResponse](src/models/analytics-response.ts)</code>
- **OnError**: throws <code>[MarketHolidaysAndTimings.GetDiiDataError](src/resources/market-holidays-and-timings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.marketHolidaysAndTimings.getDiiData(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyticsResponse, MarketHolidaysAndTimings.GetDiiDataError&gt;</code>, with `result.value` of type <code>[AnalyticsResponse](src/models/analytics-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getExchangeTimings(request: MarketHolidaysAndTimings.GetExchangeTimingsRequest, options?: RequestOptions): ApiPromise&lt;GetExchangeTimingResponse, MarketHolidaysAndTimings.GetExchangeTimingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the exchange timings on particular date

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.marketHolidaysAndTimings.getExchangeTimings({ date: "some example string" });
  // TODO: Handle 'response' of type GetExchangeTimingResponse
} catch (err) {
  // TODO: Handle 'err' of type MarketHolidaysAndTimings.GetExchangeTimingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.marketHolidaysAndTimings
  .getExchangeTimings({ date: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetExchangeTimingResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.marketHolidaysAndTimings.getExchangeTimings(request)`

- **OnSuccess**: <code>[GetExchangeTimingResponse](src/models/get-exchange-timing-response.ts)</code>
- **OnError**: throws <code>[MarketHolidaysAndTimings.GetExchangeTimingsError](src/resources/market-holidays-and-timings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.marketHolidaysAndTimings.getExchangeTimings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetExchangeTimingResponse, MarketHolidaysAndTimings.GetExchangeTimingsError&gt;</code>, with `result.value` of type <code>[GetExchangeTimingResponse](src/models/get-exchange-timing-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFiiData(request: MarketHolidaysAndTimings.GetFiiDataRequest, options?: RequestOptions): ApiPromise&lt;AnalyticsResponse, MarketHolidaysAndTimings.GetFiiDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches FII activity data for the given data type and interval.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.marketHolidaysAndTimings.getFiiData({
    dataType: "NSE_FO|INDEX_FUTURES",
    interval: "1D",
    from: "2024-01-01",
  });
  // TODO: Handle 'response' of type AnalyticsResponse
} catch (err) {
  // TODO: Handle 'err' of type MarketHolidaysAndTimings.GetFiiDataError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.marketHolidaysAndTimings
  .getFiiData({ dataType: "NSE_FO|INDEX_FUTURES", interval: "1D", from: "2024-01-01" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyticsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dataType</code> | <code>string</code> | Data type. Allowed values: NSE_FO\|INDEX_FUTURES, NSE_FO\|STOCK_FUTURES, NSE_FO\|INDEX_OPTIONS, NSE_FO\|STOCK_OPTIONS, NSE_EQ\|CASH |
| <code>interval</code> | <code>string</code> | Interval. Allowed values: 1D, 1M |
| <code>from?</code> | <code>string</code> | Start date in YYYY-MM-DD format (optional) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.marketHolidaysAndTimings.getFiiData(request)`

- **OnSuccess**: <code>[AnalyticsResponse](src/models/analytics-response.ts)</code>
- **OnError**: throws <code>[MarketHolidaysAndTimings.GetFiiDataError](src/resources/market-holidays-and-timings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.marketHolidaysAndTimings.getFiiData(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyticsResponse, MarketHolidaysAndTimings.GetFiiDataError&gt;</code>, with `result.value` of type <code>[AnalyticsResponse](src/models/analytics-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getHoliday(request: MarketHolidaysAndTimings.GetHolidayRequest, options?: RequestOptions): ApiPromise&lt;GetHolidayResponse, MarketHolidaysAndTimings.GetHolidayError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the holiday on particular date

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.marketHolidaysAndTimings.getHoliday({ date: "some example string" });
  // TODO: Handle 'response' of type GetHolidayResponse
} catch (err) {
  // TODO: Handle 'err' of type MarketHolidaysAndTimings.GetHolidayError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.marketHolidaysAndTimings
  .getHoliday({ date: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetHolidayResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.marketHolidaysAndTimings.getHoliday(request)`

- **OnSuccess**: <code>[GetHolidayResponse](src/models/get-holiday-response.ts)</code>
- **OnError**: throws <code>[MarketHolidaysAndTimings.GetHolidayError](src/resources/market-holidays-and-timings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.marketHolidaysAndTimings.getHoliday(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetHolidayResponse, MarketHolidaysAndTimings.GetHolidayError&gt;</code>, with `result.value` of type <code>[GetHolidayResponse](src/models/get-holiday-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getHolidays(options?: RequestOptions): ApiPromise&lt;GetHolidayResponse, MarketHolidaysAndTimings.GetHolidaysError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the holiday list of current year

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.marketHolidaysAndTimings.getHolidays();
  // TODO: Handle 'response' of type GetHolidayResponse
} catch (err) {
  // TODO: Handle 'err' of type MarketHolidaysAndTimings.GetHolidaysError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.marketHolidaysAndTimings.getHolidays().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetHolidayResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.marketHolidaysAndTimings.getHolidays()`

- **OnSuccess**: <code>[GetHolidayResponse](src/models/get-holiday-response.ts)</code>
- **OnError**: throws <code>[MarketHolidaysAndTimings.GetHolidaysError](src/resources/market-holidays-and-timings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.marketHolidaysAndTimings.getHolidays().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetHolidayResponse, MarketHolidaysAndTimings.GetHolidaysError&gt;</code>, with `result.value` of type <code>[GetHolidayResponse](src/models/get-holiday-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMarketStatus(request: MarketHolidaysAndTimings.GetMarketStatusRequest, options?: RequestOptions): ApiPromise&lt;GetMarketStatusResponse, MarketHolidaysAndTimings.GetMarketStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the market status for particular exchange

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.marketHolidaysAndTimings.getMarketStatus({ exchange: "some example string" });
  // TODO: Handle 'response' of type GetMarketStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type MarketHolidaysAndTimings.GetMarketStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.marketHolidaysAndTimings
  .getMarketStatus({ exchange: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetMarketStatusResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>exchange</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.marketHolidaysAndTimings.getMarketStatus(request)`

- **OnSuccess**: <code>[GetMarketStatusResponse](src/models/get-market-status-response.ts)</code>
- **OnError**: throws <code>[MarketHolidaysAndTimings.GetMarketStatusError](src/resources/market-holidays-and-timings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.marketHolidaysAndTimings.getMarketStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetMarketStatusResponse, MarketHolidaysAndTimings.GetMarketStatusError&gt;</code>, with `result.value` of type <code>[GetMarketStatusResponse](src/models/get-market-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMaxPainData(request: MarketHolidaysAndTimings.GetMaxPainDataRequest, options?: RequestOptions): ApiPromise&lt;AnalyticsResponse, MarketHolidaysAndTimings.GetMaxPainDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches Max Pain data for the given instrument key, expiry, date and bucket interval.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.marketHolidaysAndTimings.getMaxPainData({
    instrumentKey: "NSE_INDEX|Nifty 50",
    expiry: "2026-05-19",
    date: "2026-05-06",
    bucketInterval: 15,
  });
  // TODO: Handle 'response' of type AnalyticsResponse
} catch (err) {
  // TODO: Handle 'err' of type MarketHolidaysAndTimings.GetMaxPainDataError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.marketHolidaysAndTimings
  .getMaxPainData({
    instrumentKey: "NSE_INDEX|Nifty 50",
    expiry: "2026-05-19",
    date: "2026-05-06",
    bucketInterval: 15,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyticsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrumentKey</code> | <code>string</code> | Underlying asset instrument key |
| <code>expiry</code> | <code>string</code> | Expiry date in YYYY-MM-DD format |
| <code>date</code> | <code>string</code> | Date in YYYY-MM-DD format for which Max Pain data is required |
| <code>bucketInterval</code> | <code>number</code> | Bucket interval in minutes for the insights list |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.marketHolidaysAndTimings.getMaxPainData(request)`

- **OnSuccess**: <code>[AnalyticsResponse](src/models/analytics-response.ts)</code>
- **OnError**: throws <code>[MarketHolidaysAndTimings.GetMaxPainDataError](src/resources/market-holidays-and-timings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.marketHolidaysAndTimings.getMaxPainData(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyticsResponse, MarketHolidaysAndTimings.GetMaxPainDataError&gt;</code>, with `result.value` of type <code>[AnalyticsResponse](src/models/analytics-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOiData(request: MarketHolidaysAndTimings.GetOiDataRequest, options?: RequestOptions): ApiPromise&lt;AnalyticsResponse, MarketHolidaysAndTimings.GetOiDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches OI data for the given instrument key, expiry and date.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.marketHolidaysAndTimings.getOiData({
    instrumentKey: "NSE_INDEX|Nifty 50",
    expiry: "2026-05-19",
    date: "2026-05-06",
  });
  // TODO: Handle 'response' of type AnalyticsResponse
} catch (err) {
  // TODO: Handle 'err' of type MarketHolidaysAndTimings.GetOiDataError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.marketHolidaysAndTimings
  .getOiData({ instrumentKey: "NSE_INDEX|Nifty 50", expiry: "2026-05-19", date: "2026-05-06" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyticsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrumentKey</code> | <code>string</code> | Underlying asset instrument key |
| <code>expiry</code> | <code>string</code> | Expiry date in YYYY-MM-DD format |
| <code>date</code> | <code>string</code> | Date in YYYY-MM-DD format for which OI data is required |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.marketHolidaysAndTimings.getOiData(request)`

- **OnSuccess**: <code>[AnalyticsResponse](src/models/analytics-response.ts)</code>
- **OnError**: throws <code>[MarketHolidaysAndTimings.GetOiDataError](src/resources/market-holidays-and-timings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.marketHolidaysAndTimings.getOiData(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyticsResponse, MarketHolidaysAndTimings.GetOiDataError&gt;</code>, with `result.value` of type <code>[AnalyticsResponse](src/models/analytics-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPcrData(request: MarketHolidaysAndTimings.GetPcrDataRequest, options?: RequestOptions): ApiPromise&lt;AnalyticsResponse, MarketHolidaysAndTimings.GetPcrDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches PCR (Put-Call Ratio) data for the given instrument key, expiry, date and bucket interval.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.marketHolidaysAndTimings.getPcrData({
    instrumentKey: "NSE_INDEX|Nifty 50",
    expiry: "2026-05-19",
    date: "2026-05-06",
    bucketInterval: 15,
  });
  // TODO: Handle 'response' of type AnalyticsResponse
} catch (err) {
  // TODO: Handle 'err' of type MarketHolidaysAndTimings.GetPcrDataError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.marketHolidaysAndTimings
  .getPcrData({
    instrumentKey: "NSE_INDEX|Nifty 50",
    expiry: "2026-05-19",
    date: "2026-05-06",
    bucketInterval: 15,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyticsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrumentKey</code> | <code>string</code> | Underlying asset instrument key |
| <code>expiry</code> | <code>string</code> | Expiry date in YYYY-MM-DD format |
| <code>date</code> | <code>string</code> | Date in YYYY-MM-DD format for which PCR data is required |
| <code>bucketInterval</code> | <code>number</code> | Bucket interval in minutes for the insights list |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.marketHolidaysAndTimings.getPcrData(request)`

- **OnSuccess**: <code>[AnalyticsResponse](src/models/analytics-response.ts)</code>
- **OnError**: throws <code>[MarketHolidaysAndTimings.GetPcrDataError](src/resources/market-holidays-and-timings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.marketHolidaysAndTimings.getPcrData(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyticsResponse, MarketHolidaysAndTimings.GetPcrDataError&gt;</code>, with `result.value` of type <code>[AnalyticsResponse](src/models/analytics-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSmartlistFutures(request?: MarketHolidaysAndTimings.GetSmartlistFuturesRequest, options?: RequestOptions): ApiPromise&lt;AnalyticsResponse, MarketHolidaysAndTimings.GetSmartlistFuturesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches the smartlist of futures for the given asset type and category.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.marketHolidaysAndTimings.getSmartlistFutures({
    assetType: "INDEX",
    category: "TOP_TRADED",
    pageNumber: 1,
    pageSize: 20,
  });
  // TODO: Handle 'response' of type AnalyticsResponse
} catch (err) {
  // TODO: Handle 'err' of type MarketHolidaysAndTimings.GetSmartlistFuturesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.marketHolidaysAndTimings
  .getSmartlistFutures({ assetType: "INDEX", category: "TOP_TRADED", pageNumber: 1, pageSize: 20 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyticsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>assetType?</code> | <code>string</code> | Asset type. Allowed values: INDEX, STOCK, COMMODITY |
| <code>category?</code> | <code>string</code> | Category. Allowed values: TOP_TRADED, MOST_ACTIVE, OI_GAINERS, OI_LOSERS, PRICE_GAINERS, PRICE_LOSERS, PREMIUM, DISCOUNT (COMMODITY supports only: TOP_TRADED, MOST_ACTIVE, OI_GAINERS, OI_LOSERS) |
| <code>pageNumber?</code> | <code>number</code> | Page number (optional, 1-indexed) |
| <code>pageSize?</code> | <code>number</code> | Page size (optional, max 50) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.marketHolidaysAndTimings.getSmartlistFutures(request)`

- **OnSuccess**: <code>[AnalyticsResponse](src/models/analytics-response.ts)</code>
- **OnError**: throws <code>[MarketHolidaysAndTimings.GetSmartlistFuturesError](src/resources/market-holidays-and-timings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.marketHolidaysAndTimings.getSmartlistFutures(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyticsResponse, MarketHolidaysAndTimings.GetSmartlistFuturesError&gt;</code>, with `result.value` of type <code>[AnalyticsResponse](src/models/analytics-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSmartlistMtf(request?: MarketHolidaysAndTimings.GetSmartlistMtfRequest, options?: RequestOptions): ApiPromise&lt;AnalyticsResponse, MarketHolidaysAndTimings.GetSmartlistMtfError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches the smartlist of MTF (Margin Trade Funding) stocks. Prices are enriched with live LTP data.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.marketHolidaysAndTimings.getSmartlistMtf({ pageNumber: 1, pageSize: 20 });
  // TODO: Handle 'response' of type AnalyticsResponse
} catch (err) {
  // TODO: Handle 'err' of type MarketHolidaysAndTimings.GetSmartlistMtfError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.marketHolidaysAndTimings
  .getSmartlistMtf({ pageNumber: 1, pageSize: 20 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyticsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pageNumber?</code> | <code>number</code> | Page number (optional, 1-indexed) |
| <code>pageSize?</code> | <code>number</code> | Page size (optional, max 50) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.marketHolidaysAndTimings.getSmartlistMtf(request)`

- **OnSuccess**: <code>[AnalyticsResponse](src/models/analytics-response.ts)</code>
- **OnError**: throws <code>[MarketHolidaysAndTimings.GetSmartlistMtfError](src/resources/market-holidays-and-timings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.marketHolidaysAndTimings.getSmartlistMtf(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyticsResponse, MarketHolidaysAndTimings.GetSmartlistMtfError&gt;</code>, with `result.value` of type <code>[AnalyticsResponse](src/models/analytics-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSmartlistOptions(request?: MarketHolidaysAndTimings.GetSmartlistOptionsRequest, options?: RequestOptions): ApiPromise&lt;AnalyticsResponse, MarketHolidaysAndTimings.GetSmartlistOptionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches the smartlist of options for the given asset type and category.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.marketHolidaysAndTimings.getSmartlistOptions({
    assetType: "INDEX",
    category: "TOP_TRADED",
    pageNumber: 1,
    pageSize: 20,
  });
  // TODO: Handle 'response' of type AnalyticsResponse
} catch (err) {
  // TODO: Handle 'err' of type MarketHolidaysAndTimings.GetSmartlistOptionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.marketHolidaysAndTimings
  .getSmartlistOptions({ assetType: "INDEX", category: "TOP_TRADED", pageNumber: 1, pageSize: 20 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyticsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>assetType?</code> | <code>string</code> | Asset type. Allowed values: INDEX, STOCK, COMMODITY |
| <code>category?</code> | <code>string</code> | Category. Allowed values: TOP_TRADED, MOST_ACTIVE, OI_GAINERS, OI_LOSERS, PRICE_GAINERS, PRICE_LOSERS, IV_GAINERS, IV_LOSERS, UNDER_5000, UNDER_10000 (COMMODITY supports only: TOP_TRADED, MOST_ACTIVE, OI_GAINERS, OI_LOSERS) |
| <code>pageNumber?</code> | <code>number</code> | Page number (optional, 1-indexed) |
| <code>pageSize?</code> | <code>number</code> | Page size (optional, max 50) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.marketHolidaysAndTimings.getSmartlistOptions(request)`

- **OnSuccess**: <code>[AnalyticsResponse](src/models/analytics-response.ts)</code>
- **OnError**: throws <code>[MarketHolidaysAndTimings.GetSmartlistOptionsError](src/resources/market-holidays-and-timings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.marketHolidaysAndTimings.getSmartlistOptions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyticsResponse, MarketHolidaysAndTimings.GetSmartlistOptionsError&gt;</code>, with `result.value` of type <code>[AnalyticsResponse](src/models/analytics-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## MarketQuote

> Source: [MarketQuote](src/resources/market-quote.ts)

<details>
<summary><code>getFullMarketQuote(request?: MarketQuote.GetFullMarketQuoteRequest, options?: RequestOptions): ApiPromise&lt;GetFullMarketQuoteResponse, MarketQuote.GetFullMarketQuoteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the full market quotes for one or more instruments.This API returns the complete market data snapshot of up to 500 instruments in one go.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.marketQuote.getFullMarketQuote({
    symbol: "NSE_EQ|INE848E01016,NSE_EQ|INE848E01039",
    instrumentKey: "NSE_EQ|INE848E01016,NSE_EQ|INE848E01039",
  });
  // TODO: Handle 'response' of type GetFullMarketQuoteResponse
} catch (err) {
  // TODO: Handle 'err' of type MarketQuote.GetFullMarketQuoteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.marketQuote
  .getFullMarketQuote({
    symbol: "NSE_EQ|INE848E01016,NSE_EQ|INE848E01039",
    instrumentKey: "NSE_EQ|INE848E01016,NSE_EQ|INE848E01039",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetFullMarketQuoteResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol?</code> | <code>string</code> | Comma separated list of symbols |
| <code>instrumentKey?</code> | <code>string</code> | Comma separated list of instrument keys |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.marketQuote.getFullMarketQuote(request)`

- **OnSuccess**: <code>[GetFullMarketQuoteResponse](src/models/get-full-market-quote-response.ts)</code>
- **OnError**: throws <code>[MarketQuote.GetFullMarketQuoteError](src/resources/market-quote.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.marketQuote.getFullMarketQuote(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetFullMarketQuoteResponse, MarketQuote.GetFullMarketQuoteError&gt;</code>, with `result.value` of type <code>[GetFullMarketQuoteResponse](src/models/get-full-market-quote-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMarketQuoteOhlc(request: MarketQuote.GetMarketQuoteOhlcRequest, options?: RequestOptions): ApiPromise&lt;GetMarketQuoteOhlcResponse, MarketQuote.GetMarketQuoteOhlcError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the OHLC quotes for one or more instruments.This API returns the OHLC snapshots of up to 1000 instruments in one go.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.marketQuote.getMarketQuoteOhlc({
    interval: "1d",
    symbol: "NSE_EQ|INE848E01016,NSE_EQ|INE848E01039",
    instrumentKey: "NSE_EQ|INE848E01016,NSE_EQ|INE848E01039",
  });
  // TODO: Handle 'response' of type GetMarketQuoteOhlcResponse
} catch (err) {
  // TODO: Handle 'err' of type MarketQuote.GetMarketQuoteOhlcError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.marketQuote
  .getMarketQuoteOhlc({
    interval: "1d",
    symbol: "NSE_EQ|INE848E01016,NSE_EQ|INE848E01039",
    instrumentKey: "NSE_EQ|INE848E01016,NSE_EQ|INE848E01039",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetMarketQuoteOhlcResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>interval</code> | <code>string</code> | Interval to get ohlc data |
| <code>symbol?</code> | <code>string</code> | Comma separated list of symbols |
| <code>instrumentKey?</code> | <code>string</code> | Comma separated list of instrument keys |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.marketQuote.getMarketQuoteOhlc(request)`

- **OnSuccess**: <code>[GetMarketQuoteOhlcResponse](src/models/get-market-quote-ohlc-response.ts)</code>
- **OnError**: throws <code>[MarketQuote.GetMarketQuoteOhlcError](src/resources/market-quote.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.marketQuote.getMarketQuoteOhlc(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetMarketQuoteOhlcResponse, MarketQuote.GetMarketQuoteOhlcError&gt;</code>, with `result.value` of type <code>[GetMarketQuoteOhlcResponse](src/models/get-market-quote-ohlc-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>ltp(request?: MarketQuote.LtpRequest, options?: RequestOptions): ApiPromise&lt;GetMarketQuoteLastTradedPriceResponse, MarketQuote.LtpError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the LTP quotes for one or more instruments.This API returns the LTPs of up to 1000 instruments in one go.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.marketQuote.ltp({
    symbol: "NSE_EQ|INE848E01016,NSE_EQ|INE848E01039",
    instrumentKey: "NSE_EQ|INE848E01016,NSE_EQ|INE848E01039",
  });
  // TODO: Handle 'response' of type GetMarketQuoteLastTradedPriceResponse
} catch (err) {
  // TODO: Handle 'err' of type MarketQuote.LtpError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.marketQuote
  .ltp({
    symbol: "NSE_EQ|INE848E01016,NSE_EQ|INE848E01039",
    instrumentKey: "NSE_EQ|INE848E01016,NSE_EQ|INE848E01039",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetMarketQuoteLastTradedPriceResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol?</code> | <code>string</code> | Comma separated list of symbols |
| <code>instrumentKey?</code> | <code>string</code> | Comma separated list of instrument keys |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.marketQuote.ltp(request)`

- **OnSuccess**: <code>[GetMarketQuoteLastTradedPriceResponse](src/models/get-market-quote-last-traded-price-response.ts)</code>
- **OnError**: throws <code>[MarketQuote.LtpError](src/resources/market-quote.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.marketQuote.ltp(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetMarketQuoteLastTradedPriceResponse, MarketQuote.LtpError&gt;</code>, with `result.value` of type <code>[GetMarketQuoteLastTradedPriceResponse](src/models/get-market-quote-last-traded-price-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## MarketQuoteV3

> Source: [MarketQuoteV3](src/resources/market-quote-v3.ts)

<details>
<summary><code>getLtp(request?: MarketQuoteV3.GetLtpRequest, options?: RequestOptions): ApiPromise&lt;GetMarketQuoteLastTradedPriceResponseV3, MarketQuoteV3.GetLtpError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the LTP quotes for one or more instruments.This API returns the LTPs of up to 500 instruments in one go.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.marketQuoteV3.getLtp({
    instrumentKey: "NSE_EQ|INE848E01016,NSE_EQ|INE009A01021",
  });
  // TODO: Handle 'response' of type GetMarketQuoteLastTradedPriceResponseV3
} catch (err) {
  // TODO: Handle 'err' of type MarketQuoteV3.GetLtpError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.marketQuoteV3
  .getLtp({ instrumentKey: "NSE_EQ|INE848E01016,NSE_EQ|INE009A01021" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetMarketQuoteLastTradedPriceResponseV3
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrumentKey?</code> | <code>string</code> | Comma separated list of instrument keys |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.marketQuoteV3.getLtp(request)`

- **OnSuccess**: <code>[GetMarketQuoteLastTradedPriceResponseV3](src/models/get-market-quote-last-traded-price-response-v3.ts)</code>
- **OnError**: throws <code>[MarketQuoteV3.GetLtpError](src/resources/market-quote-v3.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.marketQuoteV3.getLtp(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetMarketQuoteLastTradedPriceResponseV3, MarketQuoteV3.GetLtpError&gt;</code>, with `result.value` of type <code>[GetMarketQuoteLastTradedPriceResponseV3](src/models/get-market-quote-last-traded-price-response-v3.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMarketQuoteOhlcv3(request: MarketQuoteV3.GetMarketQuoteOhlcv3Request, options?: RequestOptions): ApiPromise&lt;GetMarketQuoteOhlcResponseV3, MarketQuoteV3.GetMarketQuoteOhlcv3Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the OHLC quotes for one or more instruments.This API returns the OHLC snapshots of up to 500 instruments in one go.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.marketQuoteV3.getMarketQuoteOhlcv3({
    interval: "1d",
    instrumentKey: "NSE_EQ|INE848E01016,NSE_EQ|INE009A01021",
  });
  // TODO: Handle 'response' of type GetMarketQuoteOhlcResponseV3
} catch (err) {
  // TODO: Handle 'err' of type MarketQuoteV3.GetMarketQuoteOhlcv3Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.marketQuoteV3
  .getMarketQuoteOhlcv3({ interval: "1d", instrumentKey: "NSE_EQ|INE848E01016,NSE_EQ|INE009A01021" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetMarketQuoteOhlcResponseV3
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>interval</code> | <code>string</code> | Interval to get ohlc data |
| <code>instrumentKey?</code> | <code>string</code> | Comma separated list of instrument keys |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.marketQuoteV3.getMarketQuoteOhlcv3(request)`

- **OnSuccess**: <code>[GetMarketQuoteOhlcResponseV3](src/models/get-market-quote-ohlc-response-v3.ts)</code>
- **OnError**: throws <code>[MarketQuoteV3.GetMarketQuoteOhlcv3Error](src/resources/market-quote-v3.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.marketQuoteV3.getMarketQuoteOhlcv3(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetMarketQuoteOhlcResponseV3, MarketQuoteV3.GetMarketQuoteOhlcv3Error&gt;</code>, with `result.value` of type <code>[GetMarketQuoteOhlcResponseV3](src/models/get-market-quote-ohlc-response-v3.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMarketQuoteOptionGreek(request?: MarketQuoteV3.GetMarketQuoteOptionGreekRequest, options?: RequestOptions): ApiPromise&lt;GetMarketQuoteOptionGreekResponseV3, MarketQuoteV3.GetMarketQuoteOptionGreekError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the Option Greek data for one or more instruments.This API returns the Option Greek data of up to 500 instruments in one go.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.marketQuoteV3.getMarketQuoteOptionGreek({
    instrumentKey: "NSE_EQ|INE848E01016,NSE_EQ|INE009A01021",
  });
  // TODO: Handle 'response' of type GetMarketQuoteOptionGreekResponseV3
} catch (err) {
  // TODO: Handle 'err' of type MarketQuoteV3.GetMarketQuoteOptionGreekError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.marketQuoteV3
  .getMarketQuoteOptionGreek({ instrumentKey: "NSE_EQ|INE848E01016,NSE_EQ|INE009A01021" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetMarketQuoteOptionGreekResponseV3
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrumentKey?</code> | <code>string</code> | Comma separated list of instrument keys |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.marketQuoteV3.getMarketQuoteOptionGreek(request)`

- **OnSuccess**: <code>[GetMarketQuoteOptionGreekResponseV3](src/models/get-market-quote-option-greek-response-v3.ts)</code>
- **OnError**: throws <code>[MarketQuoteV3.GetMarketQuoteOptionGreekError](src/resources/market-quote-v3.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.marketQuoteV3.getMarketQuoteOptionGreek(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetMarketQuoteOptionGreekResponseV3, MarketQuoteV3.GetMarketQuoteOptionGreekError&gt;</code>, with `result.value` of type <code>[GetMarketQuoteOptionGreekResponseV3](src/models/get-market-quote-option-greek-response-v3.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## MutualFund

> Source: [MutualFund](src/resources/mutual-fund.ts)

<details>
<summary><code>getMutualFundHoldings(options?: RequestOptions): ApiPromise&lt;GetMutualFundHoldingsResponse, MutualFund.GetMutualFundHoldingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns mutual fund holdings for the authenticated user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mutualFund.getMutualFundHoldings();
  // TODO: Handle 'response' of type GetMutualFundHoldingsResponse
} catch (err) {
  // TODO: Handle 'err' of type MutualFund.GetMutualFundHoldingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mutualFund.getMutualFundHoldings().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetMutualFundHoldingsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mutualFund.getMutualFundHoldings()`

- **OnSuccess**: <code>[GetMutualFundHoldingsResponse](src/models/get-mutual-fund-holdings-response.ts)</code>
- **OnError**: throws <code>[MutualFund.GetMutualFundHoldingsError](src/resources/mutual-fund.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.mutualFund.getMutualFundHoldings().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetMutualFundHoldingsResponse, MutualFund.GetMutualFundHoldingsError&gt;</code>, with `result.value` of type <code>[GetMutualFundHoldingsResponse](src/models/get-mutual-fund-holdings-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMutualFundOrder(request: MutualFund.GetMutualFundOrderRequest, options?: RequestOptions): ApiPromise&lt;GetMutualFundOrderDetailsResponse, MutualFund.GetMutualFundOrderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single mutual fund order by order id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mutualFund.getMutualFundOrder({ orderId: "some example string" });
  // TODO: Handle 'response' of type GetMutualFundOrderDetailsResponse
} catch (err) {
  // TODO: Handle 'err' of type MutualFund.GetMutualFundOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mutualFund.getMutualFundOrder({ orderId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetMutualFundOrderDetailsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>orderId</code> | <code>string</code> | Mutual fund order id |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mutualFund.getMutualFundOrder(request)`

- **OnSuccess**: <code>[GetMutualFundOrderDetailsResponse](src/models/get-mutual-fund-order-details-response.ts)</code>
- **OnError**: throws <code>[MutualFund.GetMutualFundOrderError](src/resources/mutual-fund.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.mutualFund.getMutualFundOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetMutualFundOrderDetailsResponse, MutualFund.GetMutualFundOrderError&gt;</code>, with `result.value` of type <code>[GetMutualFundOrderDetailsResponse](src/models/get-mutual-fund-order-details-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMutualFundOrders(request?: MutualFund.GetMutualFundOrdersRequest, options?: RequestOptions): ApiPromise&lt;GetMutualFundOrdersResponse, MutualFund.GetMutualFundOrdersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns mutual fund orders from the last 7 days for the authenticated user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mutualFund.getMutualFundOrders({
    status: "PENDING",
    transactionType: "BUY",
    pageNumber: 1,
    records: 20,
  });
  // TODO: Handle 'response' of type GetMutualFundOrdersResponse
} catch (err) {
  // TODO: Handle 'err' of type MutualFund.GetMutualFundOrdersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mutualFund
  .getMutualFundOrders({ status: "PENDING", transactionType: "BUY", pageNumber: 1, records: 20 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetMutualFundOrdersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>status?</code> | <code>string</code> | Mutual fund order status<br>**Default**: "ALL" |
| <code>transactionType?</code> | <code>string</code> | Mutual fund order transaction type<br>**Default**: "ALL" |
| <code>pageNumber?</code> | <code>number</code> | Page number for pagination.<br>**Default**: 1 |
| <code>records?</code> | <code>number</code> | no of records in a single page<br>**Default**: 10 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mutualFund.getMutualFundOrders(request)`

- **OnSuccess**: <code>[GetMutualFundOrdersResponse](src/models/get-mutual-fund-orders-response.ts)</code>
- **OnError**: throws <code>[MutualFund.GetMutualFundOrdersError](src/resources/mutual-fund.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.mutualFund.getMutualFundOrders(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetMutualFundOrdersResponse, MutualFund.GetMutualFundOrdersError&gt;</code>, with `result.value` of type <code>[GetMutualFundOrdersResponse](src/models/get-mutual-fund-orders-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMutualFundSips(request?: MutualFund.GetMutualFundSipsRequest, options?: RequestOptions): ApiPromise&lt;GetMutualFundSipsResponse, MutualFund.GetMutualFundSipsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns active and paused SIP orders for the authenticated user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mutualFund.getMutualFundSips({ pageNumber: 1, records: 20 });
  // TODO: Handle 'response' of type GetMutualFundSipsResponse
} catch (err) {
  // TODO: Handle 'err' of type MutualFund.GetMutualFundSipsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mutualFund.getMutualFundSips({ pageNumber: 1, records: 20 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetMutualFundSipsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pageNumber?</code> | <code>number</code> | Page number for pagination.<br>**Default**: 1 |
| <code>records?</code> | <code>number</code> | no of records in a single page<br>**Default**: 10 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mutualFund.getMutualFundSips(request)`

- **OnSuccess**: <code>[GetMutualFundSipsResponse](src/models/get-mutual-fund-sips-response.ts)</code>
- **OnError**: throws <code>[MutualFund.GetMutualFundSipsError](src/resources/mutual-fund.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.mutualFund.getMutualFundSips(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetMutualFundSipsResponse, MutualFund.GetMutualFundSipsError&gt;</code>, with `result.value` of type <code>[GetMutualFundSipsResponse](src/models/get-mutual-fund-sips-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## News

> Source: [News](src/resources/news.ts)

<details>
<summary><code>getNews(request: News.GetNewsRequest, options?: RequestOptions): ApiPromise&lt;GetNewsResponse, News.GetNewsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches news articles for the given instrument keys, or the user's current positions or holdings.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.news.getNews({
    category: "instrument_keys",
    instrumentKeys: "NSE_EQ|INE002A01018,NSE_EQ|INE669E01016",
    pageNumber: 1,
    pageSize: 100,
  });
  // TODO: Handle 'response' of type GetNewsResponse
} catch (err) {
  // TODO: Handle 'err' of type News.GetNewsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.news
  .getNews({
    category: "instrument_keys",
    instrumentKeys: "NSE_EQ|INE002A01018,NSE_EQ|INE669E01016",
    pageNumber: 1,
    pageSize: 100,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetNewsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>category</code> | <code>string</code> | Category of news to fetch. Allowed values: instrument_keys, positions, holdings |
| <code>instrumentKeys?</code> | <code>string</code> | Comma-separated list of instrument keys. Required when category is instrument_keys. |
| <code>pageNumber?</code> | <code>number</code> | Page number for pagination<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | Number of records per page<br>**Default**: 100 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.news.getNews(request)`

- **OnSuccess**: <code>[GetNewsResponse](src/models/get-news-response.ts)</code>
- **OnError**: throws <code>[News.GetNewsError](src/resources/news.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.news.getNews(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetNewsResponse, News.GetNewsError&gt;</code>, with `result.value` of type <code>[GetNewsResponse](src/models/get-news-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Options

> Source: [Options](src/resources/options.ts)

<details>
<summary><code>getOptionContracts(request: Options.GetOptionContractsRequest, options?: RequestOptions): ApiPromise&lt;GetOptionContractResponse, Options.GetOptionContractsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the option contracts

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.options.getOptionContracts({
    instrumentKey: "NSE_INDEX|Nifty 50",
    expiryDate: "2024-02-01",
  });
  // TODO: Handle 'response' of type GetOptionContractResponse
} catch (err) {
  // TODO: Handle 'err' of type Options.GetOptionContractsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.options
  .getOptionContracts({ instrumentKey: "NSE_INDEX|Nifty 50", expiryDate: "2024-02-01" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetOptionContractResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrumentKey</code> | <code>string</code> | Instrument key for an underlying symbol |
| <code>expiryDate?</code> | <code>string</code> | Expiry date in format: YYYY-mm-dd |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.options.getOptionContracts(request)`

- **OnSuccess**: <code>[GetOptionContractResponse](src/models/get-option-contract-response.ts)</code>
- **OnError**: throws <code>[Options.GetOptionContractsError](src/resources/options.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.options.getOptionContracts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetOptionContractResponse, Options.GetOptionContractsError&gt;</code>, with `result.value` of type <code>[GetOptionContractResponse](src/models/get-option-contract-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPutCallOptionChain(request: Options.GetPutCallOptionChainRequest, options?: RequestOptions): ApiPromise&lt;GetOptionChainResponse, Options.GetPutCallOptionChainError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the option chain

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.options.getPutCallOptionChain({
    instrumentKey: "NSE_INDEX|Nifty 50",
    expiryDate: "2024-02-01",
  });
  // TODO: Handle 'response' of type GetOptionChainResponse
} catch (err) {
  // TODO: Handle 'err' of type Options.GetPutCallOptionChainError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.options
  .getPutCallOptionChain({ instrumentKey: "NSE_INDEX|Nifty 50", expiryDate: "2024-02-01" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetOptionChainResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrumentKey</code> | <code>string</code> | Instrument key for an underlying symbol |
| <code>expiryDate</code> | <code>string</code> | Expiry date in format: YYYY-mm-dd |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.options.getPutCallOptionChain(request)`

- **OnSuccess**: <code>[GetOptionChainResponse](src/models/get-option-chain-response.ts)</code>
- **OnError**: throws <code>[Options.GetPutCallOptionChainError](src/resources/options.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.options.getPutCallOptionChain(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetOptionChainResponse, Options.GetPutCallOptionChainError&gt;</code>, with `result.value` of type <code>[GetOptionChainResponse](src/models/get-option-chain-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Order

> Source: [Order](src/resources/order.ts)

<details>
<summary><code>cancelGttOrder(request: Order.CancelGttOrderRequest, options?: RequestOptions): ApiPromise&lt;GttTriggerOrderResponse, Order.CancelGttOrderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows you to cancel GTT orders.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.order.cancelGttOrder({ body: { gttOrderId: "some example string" } });
  // TODO: Handle 'response' of type GttTriggerOrderResponse
} catch (err) {
  // TODO: Handle 'err' of type Order.CancelGttOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.order
  .cancelGttOrder({ body: { gttOrderId: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GttTriggerOrderResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>origin?</code> | <code>string</code> | - |
| <code>body</code> | <code>[GttCancelOrderRequest](src/models/gtt-cancel-order-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.order.cancelGttOrder(request)`

- **OnSuccess**: <code>[GttTriggerOrderResponse](src/models/gtt-trigger-order-response.ts)</code>
- **OnError**: throws <code>[Order.CancelGttOrderError](src/resources/order.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.order.cancelGttOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GttTriggerOrderResponse, Order.CancelGttOrderError&gt;</code>, with `result.value` of type <code>[GttTriggerOrderResponse](src/models/gtt-trigger-order-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelMultiOrder(request?: Order.CancelMultiOrderRequest, options?: RequestOptions): ApiPromise&lt;CancelOrExitMultiOrderResponse, Order.CancelMultiOrderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

API to cancel all the open or pending orders which can be applied to both AMO and regular orders.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.order.cancelMultiOrder();
  // TODO: Handle 'response' of type CancelOrExitMultiOrderResponse
} catch (err) {
  // TODO: Handle 'err' of type Order.CancelMultiOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.order.cancelMultiOrder().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelOrExitMultiOrderResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>tag?</code> | <code>string</code> | The tag associated with the orders for which the orders must be cancelled |
| <code>segment?</code> | <code>string</code> | The segment for which the orders must be cancelled |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.order.cancelMultiOrder(request)`

- **OnSuccess**: <code>[CancelOrExitMultiOrderResponse](src/models/cancel-or-exit-multi-order-response.ts)</code>
- **OnError**: throws <code>[Order.CancelMultiOrderError](src/resources/order.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.order.cancelMultiOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelOrExitMultiOrderResponse, Order.CancelMultiOrderError&gt;</code>, with `result.value` of type <code>[CancelOrExitMultiOrderResponse](src/models/cancel-or-exit-multi-order-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelOrder(request: Order.CancelOrderRequest, options?: RequestOptions): ApiPromise&lt;CancelOrderV3Response, Order.CancelOrderError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.order.cancelOrder({ orderId: "some example string" });
  // TODO: Handle 'response' of type CancelOrderV3Response
} catch (err) {
  // TODO: Handle 'err' of type Order.CancelOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.order.cancelOrder({ orderId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelOrderV3Response
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>orderId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.order.cancelOrder(request)`

- **OnSuccess**: <code>[CancelOrderV3Response](src/models/cancel-order-v3-response.ts)</code>
- **OnError**: throws <code>[Order.CancelOrderError](src/resources/order.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.order.cancelOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelOrderV3Response, Order.CancelOrderError&gt;</code>, with `result.value` of type <code>[CancelOrderV3Response](src/models/cancel-order-v3-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelOrder1(request: Order.CancelOrder1Request, options?: RequestOptions): ApiPromise&lt;CancelOrderResponse, Order.CancelOrder1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel order API can be used for two purposes:
Cancelling an open order which could be an AMO or a normal order
It is also used to EXIT a CO or OCO(bracket order)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.order.cancelOrder1({ orderId: "12345667890" });
  // TODO: Handle 'response' of type CancelOrderResponse
} catch (err) {
  // TODO: Handle 'err' of type Order.CancelOrder1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.order.cancelOrder1({ orderId: "12345667890" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelOrderResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>orderId</code> | <code>string</code> | The order ID for which the order must be cancelled |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.order.cancelOrder1(request)`

- **OnSuccess**: <code>[CancelOrderResponse](src/models/cancel-order-response.ts)</code>
- **OnError**: throws <code>[Order.CancelOrder1Error](src/resources/order.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.order.cancelOrder1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelOrderResponse, Order.CancelOrder1Error&gt;</code>, with `result.value` of type <code>[CancelOrderResponse](src/models/cancel-order-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>exitPositions(request?: Order.ExitPositionsRequest, options?: RequestOptions): ApiPromise&lt;CancelOrExitMultiOrderResponse, Order.ExitPositionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to exit all the positions

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.order.exitPositions();
  // TODO: Handle 'response' of type CancelOrExitMultiOrderResponse
} catch (err) {
  // TODO: Handle 'err' of type Order.ExitPositionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.order.exitPositions().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelOrExitMultiOrderResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>tag?</code> | <code>string</code> | The tag associated with the positions for which the positions must be exit |
| <code>segment?</code> | <code>string</code> | The segment for which the positions must be exit |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.order.exitPositions(request)`

- **OnSuccess**: <code>[CancelOrExitMultiOrderResponse](src/models/cancel-or-exit-multi-order-response.ts)</code>
- **OnError**: throws <code>[Order.ExitPositionsError](src/resources/order.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.order.exitPositions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelOrExitMultiOrderResponse, Order.ExitPositionsError&gt;</code>, with `result.value` of type <code>[CancelOrExitMultiOrderResponse](src/models/cancel-or-exit-multi-order-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGttOrderDetails(request?: Order.GetGttOrderDetailsRequest, options?: RequestOptions): ApiPromise&lt;GetGttOrderResponse, Order.GetGttOrderDetailsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

GTT_ORDER_DESCRIPTION

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.order.getGttOrderDetails({ gttOrderId: "GTT-XX221130000253265" });
  // TODO: Handle 'response' of type GetGttOrderResponse
} catch (err) {
  // TODO: Handle 'err' of type Order.GetGttOrderDetailsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.order.getGttOrderDetails({ gttOrderId: "GTT-XX221130000253265" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetGttOrderResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>gttOrderId?</code> | <code>string</code> | Unique identifier of the GTT order for which the order history is required |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.order.getGttOrderDetails(request)`

- **OnSuccess**: <code>[GetGttOrderResponse](src/models/get-gtt-order-response.ts)</code>
- **OnError**: throws <code>[Order.GetGttOrderDetailsError](src/resources/order.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.order.getGttOrderDetails(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetGttOrderResponse, Order.GetGttOrderDetailsError&gt;</code>, with `result.value` of type <code>[GetGttOrderResponse](src/models/get-gtt-order-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOrderBook(options?: RequestOptions): ApiPromise&lt;GetOrderBookResponse, Order.GetOrderBookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the list of orders placed by the user. The orders placed by the user is transient for a day and is cleared by the end of the trading session. This API returns all states of the orders, namely, open, pending, and filled ones.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.order.getOrderBook();
  // TODO: Handle 'response' of type GetOrderBookResponse
} catch (err) {
  // TODO: Handle 'err' of type Order.GetOrderBookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.order.getOrderBook().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetOrderBookResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.order.getOrderBook()`

- **OnSuccess**: <code>[GetOrderBookResponse](src/models/get-order-book-response.ts)</code>
- **OnError**: throws <code>[Order.GetOrderBookError](src/resources/order.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.order.getOrderBook().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetOrderBookResponse, Order.GetOrderBookError&gt;</code>, with `result.value` of type <code>[GetOrderBookResponse](src/models/get-order-book-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOrderDetails(request?: Order.GetOrderDetailsRequest, options?: RequestOptions): ApiPromise&lt;GetOrderResponse, Order.GetOrderDetailsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the details of the particular order the user has placed. The orders placed by the user is transient for a day and are cleared by the end of the trading session. This API returns all states of the orders, namely, open, pending, and filled ones.

The order history can be requested either using order_id or tag.

If both the options are passed, the history of the order which precisely matches both the order_id and tag will be returned in the response.

If only the tag is passed, the history of all the associated orders which matches the tag will be shared in the response.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.order.getOrderDetails({ orderId: "12345667890", tag: "2qdqjppebx" });
  // TODO: Handle 'response' of type GetOrderResponse
} catch (err) {
  // TODO: Handle 'err' of type Order.GetOrderDetailsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.order
  .getOrderDetails({ orderId: "12345667890", tag: "2qdqjppebx" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetOrderResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>orderId?</code> | <code>string</code> | The order reference ID for which the order history is required |
| <code>tag?</code> | <code>string</code> | The unique tag of the order for which the order history is being requested |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.order.getOrderDetails(request)`

- **OnSuccess**: <code>[GetOrderResponse](src/models/get-order-response.ts)</code>
- **OnError**: throws <code>[Order.GetOrderDetailsError](src/resources/order.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.order.getOrderDetails(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetOrderResponse, Order.GetOrderDetailsError&gt;</code>, with `result.value` of type <code>[GetOrderResponse](src/models/get-order-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOrderStatus(request?: Order.GetOrderStatusRequest, options?: RequestOptions): ApiPromise&lt;GetOrderDetailsResponse, Order.GetOrderStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the recent detail of the particular order the user has placed. The orders placed by the user is transient for a day and are cleared by the end of the trading session.\n\nThe order details can be requested using order_id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.order.getOrderStatus({ orderId: "12345667890" });
  // TODO: Handle 'response' of type GetOrderDetailsResponse
} catch (err) {
  // TODO: Handle 'err' of type Order.GetOrderStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.order.getOrderStatus({ orderId: "12345667890" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetOrderDetailsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>orderId?</code> | <code>string</code> | The order reference ID for which the order details is required |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.order.getOrderStatus(request)`

- **OnSuccess**: <code>[GetOrderDetailsResponse](src/models/get-order-details-response.ts)</code>
- **OnError**: throws <code>[Order.GetOrderStatusError](src/resources/order.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.order.getOrderStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetOrderDetailsResponse, Order.GetOrderStatusError&gt;</code>, with `result.value` of type <code>[GetOrderDetailsResponse](src/models/get-order-details-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTradeHistory(options?: RequestOptions): ApiPromise&lt;GetTradeResponse, Order.GetTradeHistoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the trades executed for the day

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.order.getTradeHistory();
  // TODO: Handle 'response' of type GetTradeResponse
} catch (err) {
  // TODO: Handle 'err' of type Order.GetTradeHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.order.getTradeHistory().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetTradeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.order.getTradeHistory()`

- **OnSuccess**: <code>[GetTradeResponse](src/models/get-trade-response.ts)</code>
- **OnError**: throws <code>[Order.GetTradeHistoryError](src/resources/order.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.order.getTradeHistory().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetTradeResponse, Order.GetTradeHistoryError&gt;</code>, with `result.value` of type <code>[GetTradeResponse](src/models/get-trade-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTradesByOrder(request: Order.GetTradesByOrderRequest, options?: RequestOptions): ApiPromise&lt;GetTradeResponse, Order.GetTradesByOrderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the trades executed for an order

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.order.getTradesByOrder({ orderId: "12345667890" });
  // TODO: Handle 'response' of type GetTradeResponse
} catch (err) {
  // TODO: Handle 'err' of type Order.GetTradesByOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.order.getTradesByOrder({ orderId: "12345667890" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetTradeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>orderId</code> | <code>string</code> | The order ID for which the order to get order trades |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.order.getTradesByOrder(request)`

- **OnSuccess**: <code>[GetTradeResponse](src/models/get-trade-response.ts)</code>
- **OnError**: throws <code>[Order.GetTradesByOrderError](src/resources/order.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.order.getTradesByOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetTradeResponse, Order.GetTradesByOrderError&gt;</code>, with `result.value` of type <code>[GetTradeResponse](src/models/get-trade-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>modifyGttOrder(request: Order.ModifyGttOrderRequest, options?: RequestOptions): ApiPromise&lt;GttTriggerOrderResponse, Order.ModifyGttOrderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows you to modify GTT orders.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.order.modifyGttOrder({
    body: {
      type: Type.Single,
      quantity: 1,
      rules: [{ strategy: Strategy.Entry, triggerType: TriggerType.Above, triggerPrice: 1.5 }],
      gttOrderId: "some example string",
    },
  });
  // TODO: Handle 'response' of type GttTriggerOrderResponse
} catch (err) {
  // TODO: Handle 'err' of type Order.ModifyGttOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.order
  .modifyGttOrder({
    body: {
      type: Type.Single,
      quantity: 1,
      rules: [{ strategy: Strategy.Entry, triggerType: TriggerType.Above, triggerPrice: 1.5 }],
      gttOrderId: "some example string",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GttTriggerOrderResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>origin?</code> | <code>string</code> | - |
| <code>body</code> | <code>[GttModifyOrderRequest](src/models/gtt-modify-order-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.order.modifyGttOrder(request)`

- **OnSuccess**: <code>[GttTriggerOrderResponse](src/models/gtt-trigger-order-response.ts)</code>
- **OnError**: throws <code>[Order.ModifyGttOrderError](src/resources/order.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.order.modifyGttOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GttTriggerOrderResponse, Order.ModifyGttOrderError&gt;</code>, with `result.value` of type <code>[GttTriggerOrderResponse](src/models/gtt-trigger-order-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>modifyOrder(request: Order.ModifyOrderRequestParams, options?: RequestOptions): ApiPromise&lt;ModifyOrderV3Response, Order.ModifyOrderError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.order.modifyOrder({
    body: {
      validity: Validity5.Day,
      price: 1.5,
      orderId: "some example string",
      orderType: OrderType6.Market,
      triggerPrice: 1.5,
    },
  });
  // TODO: Handle 'response' of type ModifyOrderV3Response
} catch (err) {
  // TODO: Handle 'err' of type Order.ModifyOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.order
  .modifyOrder({
    body: {
      validity: Validity5.Day,
      price: 1.5,
      orderId: "some example string",
      orderType: OrderType6.Market,
      triggerPrice: 1.5,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ModifyOrderV3Response
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ModifyOrderRequest](src/models/modify-order-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.order.modifyOrder(request)`

- **OnSuccess**: <code>[ModifyOrderV3Response](src/models/modify-order-v3-response.ts)</code>
- **OnError**: throws <code>[Order.ModifyOrderError](src/resources/order.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.order.modifyOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ModifyOrderV3Response, Order.ModifyOrderError&gt;</code>, with `result.value` of type <code>[ModifyOrderV3Response](src/models/modify-order-v3-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>modifyOrder1(request: Order.ModifyOrder1Request, options?: RequestOptions): ApiPromise&lt;ModifyOrderResponse, Order.ModifyOrder1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows you to modify an order. For modification orderId is mandatory. With orderId you need to send the optional parameter which needs to be modified. In case the optional parameters aren't sent, the default will be considered from the original order

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.order.modifyOrder1({
    body: {
      validity: Validity5.Day,
      price: 1.5,
      orderId: "some example string",
      orderType: OrderType6.Market,
      triggerPrice: 1.5,
    },
  });
  // TODO: Handle 'response' of type ModifyOrderResponse
} catch (err) {
  // TODO: Handle 'err' of type Order.ModifyOrder1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.order
  .modifyOrder1({
    body: {
      validity: Validity5.Day,
      price: 1.5,
      orderId: "some example string",
      orderType: OrderType6.Market,
      triggerPrice: 1.5,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ModifyOrderResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ModifyOrderRequest](src/models/modify-order-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.order.modifyOrder1(request)`

- **OnSuccess**: <code>[ModifyOrderResponse](src/models/modify-order-response.ts)</code>
- **OnError**: throws <code>[Order.ModifyOrder1Error](src/resources/order.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.order.modifyOrder1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ModifyOrderResponse, Order.ModifyOrder1Error&gt;</code>, with `result.value` of type <code>[ModifyOrderResponse](src/models/modify-order-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>placeGttOrder(request: Order.PlaceGttOrderRequest, options?: RequestOptions): ApiPromise&lt;GttTriggerOrderResponse, Order.PlaceGttOrderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows you to place GTT orders.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.order.placeGttOrder({
    body: {
      type: Type.Single,
      quantity: 1,
      product: Product3.I,
      rules: [{ strategy: Strategy.Entry, triggerType: TriggerType.Above, triggerPrice: 1.5 }],
      instrumentToken: "some example string",
      transactionType: TransactionType.Buy,
    },
  });
  // TODO: Handle 'response' of type GttTriggerOrderResponse
} catch (err) {
  // TODO: Handle 'err' of type Order.PlaceGttOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.order
  .placeGttOrder({
    body: {
      type: Type.Single,
      quantity: 1,
      product: Product3.I,
      rules: [{ strategy: Strategy.Entry, triggerType: TriggerType.Above, triggerPrice: 1.5 }],
      instrumentToken: "some example string",
      transactionType: TransactionType.Buy,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GttTriggerOrderResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>origin?</code> | <code>string</code> | - |
| <code>body</code> | <code>[GttPlaceOrderRequest](src/models/gtt-place-order-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.order.placeGttOrder(request)`

- **OnSuccess**: <code>[GttTriggerOrderResponse](src/models/gtt-trigger-order-response.ts)</code>
- **OnError**: throws <code>[Order.PlaceGttOrderError](src/resources/order.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.order.placeGttOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GttTriggerOrderResponse, Order.PlaceGttOrderError&gt;</code>, with `result.value` of type <code>[GttTriggerOrderResponse](src/models/gtt-trigger-order-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>placeMultiOrder(request: Order.PlaceMultiOrderRequest, options?: RequestOptions): ApiPromise&lt;MultiOrderResponse, Order.PlaceMultiOrderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows you to place multiple orders to the exchange via Upstox.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.order.placeMultiOrder({
    body: [
      {
        quantity: 1,
        product: ProductOpenApiDefinitionOrderApi.I,
        validity: Validity.Day,
        price: 1.5,
        slice: true,
        instrumentToken: "some example string",
        orderType: OrderTypeOpenApiDefinitionOrderApi.Market,
        transactionType: TransactionType.Buy,
        disclosedQuantity: 1,
        triggerPrice: 1.5,
        isAmo: true,
        correlationId: "some example string",
      },
    ],
  });
  // TODO: Handle 'response' of type MultiOrderResponse
} catch (err) {
  // TODO: Handle 'err' of type Order.PlaceMultiOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.order
  .placeMultiOrder({
    body: [
      {
        quantity: 1,
        product: ProductOpenApiDefinitionOrderApi.I,
        validity: Validity.Day,
        price: 1.5,
        slice: true,
        instrumentToken: "some example string",
        orderType: OrderTypeOpenApiDefinitionOrderApi.Market,
        transactionType: TransactionType.Buy,
        disclosedQuantity: 1,
        triggerPrice: 1.5,
        isAmo: true,
        correlationId: "some example string",
      },
    ],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MultiOrderResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>origin?</code> | <code>string</code> | - |
| <code>body</code> | <code>[MultiOrderRequest](src/models/multi-order-request.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.order.placeMultiOrder(request)`

- **OnSuccess**: <code>[MultiOrderResponse](src/models/multi-order-response.ts)</code>
- **OnError**: throws <code>[Order.PlaceMultiOrderError](src/resources/order.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.order.placeMultiOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MultiOrderResponse, Order.PlaceMultiOrderError&gt;</code>, with `result.value` of type <code>[MultiOrderResponse](src/models/multi-order-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>placeOrder(request: Order.PlaceOrderRequestParams, options?: RequestOptions): ApiPromise&lt;PlaceOrderV3Response, Order.PlaceOrderError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.order.placeOrder({
    body: {
      quantity: 1,
      product: ProductOpenApiDefinitionOrderApi.I,
      validity: Validity.Day,
      price: 1.5,
      instrumentToken: "some example string",
      orderType: OrderTypeOpenApiDefinitionOrderApi.Market,
      transactionType: TransactionType.Buy,
      disclosedQuantity: 1,
      triggerPrice: 1.5,
      isAmo: true,
    },
  });
  // TODO: Handle 'response' of type PlaceOrderV3Response
} catch (err) {
  // TODO: Handle 'err' of type Order.PlaceOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.order
  .placeOrder({
    body: {
      quantity: 1,
      product: ProductOpenApiDefinitionOrderApi.I,
      validity: Validity.Day,
      price: 1.5,
      instrumentToken: "some example string",
      orderType: OrderTypeOpenApiDefinitionOrderApi.Market,
      transactionType: TransactionType.Buy,
      disclosedQuantity: 1,
      triggerPrice: 1.5,
      isAmo: true,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlaceOrderV3Response
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PlaceOrderV3Request](src/models/place-order-v3-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.order.placeOrder(request)`

- **OnSuccess**: <code>[PlaceOrderV3Response](src/models/place-order-v3-response.ts)</code>
- **OnError**: throws <code>[Order.PlaceOrderError](src/resources/order.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.order.placeOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlaceOrderV3Response, Order.PlaceOrderError&gt;</code>, with `result.value` of type <code>[PlaceOrderV3Response](src/models/place-order-v3-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>placeOrder1(request: Order.PlaceOrder1Request, options?: RequestOptions): ApiPromise&lt;PlaceOrderResponse, Order.PlaceOrder1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows you to place an order to the exchange via Upstox.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.order.placeOrder1({
    body: {
      quantity: 1,
      product: ProductOpenApiDefinitionOrderApi.I,
      validity: Validity.Day,
      price: 1.5,
      instrumentToken: "some example string",
      orderType: OrderTypeOpenApiDefinitionOrderApi.Market,
      transactionType: TransactionType.Buy,
      disclosedQuantity: 1,
      triggerPrice: 1.5,
      isAmo: true,
    },
  });
  // TODO: Handle 'response' of type PlaceOrderResponse
} catch (err) {
  // TODO: Handle 'err' of type Order.PlaceOrder1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.order
  .placeOrder1({
    body: {
      quantity: 1,
      product: ProductOpenApiDefinitionOrderApi.I,
      validity: Validity.Day,
      price: 1.5,
      instrumentToken: "some example string",
      orderType: OrderTypeOpenApiDefinitionOrderApi.Market,
      transactionType: TransactionType.Buy,
      disclosedQuantity: 1,
      triggerPrice: 1.5,
      isAmo: true,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlaceOrderResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PlaceOrderRequest](src/models/place-order-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.order.placeOrder1(request)`

- **OnSuccess**: <code>[PlaceOrderResponse](src/models/place-order-response.ts)</code>
- **OnError**: throws <code>[Order.PlaceOrder1Error](src/resources/order.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.order.placeOrder1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlaceOrderResponse, Order.PlaceOrder1Error&gt;</code>, with `result.value` of type <code>[PlaceOrderResponse](src/models/place-order-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Payments

> Source: [Payments](src/resources/payments.ts)

<details>
<summary><code>cancelPayout(request: Payments.CancelPayoutRequest, options?: RequestOptions): ApiPromise&lt;PayoutDetailsResponse, Payments.CancelPayoutError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.cancelPayout({ transactionId: "imps_0426_7654321" });
  // TODO: Handle 'response' of type PayoutDetailsResponse
} catch (err) {
  // TODO: Handle 'err' of type Payments.CancelPayoutError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payments.cancelPayout({ transactionId: "imps_0426_7654321" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PayoutDetailsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionId</code> | <code>string</code> | Payout transaction id |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payments.cancelPayout(request)`

- **OnSuccess**: <code>[PayoutDetailsResponse](src/models/payout-details-response.ts)</code>
- **OnError**: throws <code>[Payments.CancelPayoutError](src/resources/payments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payments.cancelPayout(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PayoutDetailsResponse, Payments.CancelPayoutError&gt;</code>, with `result.value` of type <code>[PayoutDetailsResponse](src/models/payout-details-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPayinHistory(options?: RequestOptions): ApiPromise&lt;PaymentHistoryResponse, Payments.GetPayinHistoryError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.getPayinHistory();
  // TODO: Handle 'response' of type PaymentHistoryResponse
} catch (err) {
  // TODO: Handle 'err' of type Payments.GetPayinHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payments.getPayinHistory().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentHistoryResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payments.getPayinHistory()`

- **OnSuccess**: <code>[PaymentHistoryResponse](src/models/payment-history-response.ts)</code>
- **OnError**: throws <code>[Payments.GetPayinHistoryError](src/resources/payments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payments.getPayinHistory().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentHistoryResponse, Payments.GetPayinHistoryError&gt;</code>, with `result.value` of type <code>[PaymentHistoryResponse](src/models/payment-history-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPayoutHistory(options?: RequestOptions): ApiPromise&lt;PaymentHistoryResponse, Payments.GetPayoutHistoryError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.getPayoutHistory();
  // TODO: Handle 'response' of type PaymentHistoryResponse
} catch (err) {
  // TODO: Handle 'err' of type Payments.GetPayoutHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payments.getPayoutHistory().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentHistoryResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payments.getPayoutHistory()`

- **OnSuccess**: <code>[PaymentHistoryResponse](src/models/payment-history-response.ts)</code>
- **OnError**: throws <code>[Payments.GetPayoutHistoryError](src/resources/payments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payments.getPayoutHistory().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentHistoryResponse, Payments.GetPayoutHistoryError&gt;</code>, with `result.value` of type <code>[PaymentHistoryResponse](src/models/payment-history-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPayoutModes(options?: RequestOptions): ApiPromise&lt;PayoutModesResponse, Payments.GetPayoutModesError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.getPayoutModes();
  // TODO: Handle 'response' of type PayoutModesResponse
} catch (err) {
  // TODO: Handle 'err' of type Payments.GetPayoutModesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payments.getPayoutModes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PayoutModesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payments.getPayoutModes()`

- **OnSuccess**: <code>[PayoutModesResponse](src/models/payout-modes-response.ts)</code>
- **OnError**: throws <code>[Payments.GetPayoutModesError](src/resources/payments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payments.getPayoutModes().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PayoutModesResponse, Payments.GetPayoutModesError&gt;</code>, with `result.value` of type <code>[PayoutModesResponse](src/models/payout-modes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>initiatePayout(request: Payments.InitiatePayoutRequestParams, options?: RequestOptions): ApiPromise&lt;PayoutDetailsResponse, Payments.InitiatePayoutError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.initiatePayout({
    body: { mode: "some example string", amount: 1.5 },
  });
  // TODO: Handle 'response' of type PayoutDetailsResponse
} catch (err) {
  // TODO: Handle 'err' of type Payments.InitiatePayoutError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payments
  .initiatePayout({ body: { mode: "some example string", amount: 1.5 } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PayoutDetailsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[InitiatePayoutRequest](src/models/initiate-payout-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payments.initiatePayout(request)`

- **OnSuccess**: <code>[PayoutDetailsResponse](src/models/payout-details-response.ts)</code>
- **OnError**: throws <code>[Payments.InitiatePayoutError](src/resources/payments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payments.initiatePayout(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PayoutDetailsResponse, Payments.InitiatePayoutError&gt;</code>, with `result.value` of type <code>[PayoutDetailsResponse](src/models/payout-details-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>modifyPayout(request: Payments.ModifyPayoutRequestParams, options?: RequestOptions): ApiPromise&lt;PayoutDetailsResponse, Payments.ModifyPayoutError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.modifyPayout({
    transactionId: "imps_0426_7654321",
    body: { amount: 1.5 },
  });
  // TODO: Handle 'response' of type PayoutDetailsResponse
} catch (err) {
  // TODO: Handle 'err' of type Payments.ModifyPayoutError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payments
  .modifyPayout({ transactionId: "imps_0426_7654321", body: { amount: 1.5 } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PayoutDetailsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionId</code> | <code>string</code> | Payout transaction id |
| <code>body</code> | <code>[ModifyPayoutRequest](src/models/modify-payout-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payments.modifyPayout(request)`

- **OnSuccess**: <code>[PayoutDetailsResponse](src/models/payout-details-response.ts)</code>
- **OnError**: throws <code>[Payments.ModifyPayoutError](src/resources/payments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payments.modifyPayout(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PayoutDetailsResponse, Payments.ModifyPayoutError&gt;</code>, with `result.value` of type <code>[PayoutDetailsResponse](src/models/payout-details-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Portfolio

> Source: [Portfolio](src/resources/portfolio.ts)

<details>
<summary><code>convertPositions(request: Portfolio.ConvertPositionsRequest, options?: RequestOptions): ApiPromise&lt;ConvertPositionResponse, Portfolio.ConvertPositionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert the margin product of an open position

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfolio.convertPositions({
    body: {
      instrumentToken: "some example string",
      newProduct: NewProduct.I,
      oldProduct: OldProduct.I,
      transactionType: TransactionTypeOpenApiDefinitionPortfolioApi.Buy,
      quantity: 1,
    },
  });
  // TODO: Handle 'response' of type ConvertPositionResponse
} catch (err) {
  // TODO: Handle 'err' of type Portfolio.ConvertPositionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.portfolio
  .convertPositions({
    body: {
      instrumentToken: "some example string",
      newProduct: NewProduct.I,
      oldProduct: OldProduct.I,
      transactionType: TransactionTypeOpenApiDefinitionPortfolioApi.Buy,
      quantity: 1,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConvertPositionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ConvertPositionRequest](src/models/convert-position-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.portfolio.convertPositions(request)`

- **OnSuccess**: <code>[ConvertPositionResponse](src/models/convert-position-response.ts)</code>
- **OnError**: throws <code>[Portfolio.ConvertPositionsError](src/resources/portfolio.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.portfolio.convertPositions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConvertPositionResponse, Portfolio.ConvertPositionsError&gt;</code>, with `result.value` of type <code>[ConvertPositionResponse](src/models/convert-position-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getHoldings(options?: RequestOptions): ApiPromise&lt;GetHoldingsResponse, Portfolio.GetHoldingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches the holdings which the user has bought/sold in previous trading sessions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfolio.getHoldings();
  // TODO: Handle 'response' of type GetHoldingsResponse
} catch (err) {
  // TODO: Handle 'err' of type Portfolio.GetHoldingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.portfolio.getHoldings().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetHoldingsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.portfolio.getHoldings()`

- **OnSuccess**: <code>[GetHoldingsResponse](src/models/get-holdings-response.ts)</code>
- **OnError**: throws <code>[Portfolio.GetHoldingsError](src/resources/portfolio.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.portfolio.getHoldings().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetHoldingsResponse, Portfolio.GetHoldingsError&gt;</code>, with `result.value` of type <code>[GetHoldingsResponse](src/models/get-holdings-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMtfPositions(options?: RequestOptions): ApiPromise&lt;GetPositionResponse, Portfolio.GetMtfPositionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows you to get MTF positions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfolio.getMtfPositions();
  // TODO: Handle 'response' of type GetPositionResponse
} catch (err) {
  // TODO: Handle 'err' of type Portfolio.GetMtfPositionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.portfolio.getMtfPositions().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetPositionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.portfolio.getMtfPositions()`

- **OnSuccess**: <code>[GetPositionResponse](src/models/get-position-response.ts)</code>
- **OnError**: throws <code>[Portfolio.GetMtfPositionsError](src/resources/portfolio.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.portfolio.getMtfPositions().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetPositionResponse, Portfolio.GetMtfPositionsError&gt;</code>, with `result.value` of type <code>[GetPositionResponse](src/models/get-position-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPositions(options?: RequestOptions): ApiPromise&lt;GetPositionResponse, Portfolio.GetPositionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches the current positions for the user for the current day.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfolio.getPositions();
  // TODO: Handle 'response' of type GetPositionResponse
} catch (err) {
  // TODO: Handle 'err' of type Portfolio.GetPositionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.portfolio.getPositions().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetPositionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.portfolio.getPositions()`

- **OnSuccess**: <code>[GetPositionResponse](src/models/get-position-response.ts)</code>
- **OnError**: throws <code>[Portfolio.GetPositionsError](src/resources/portfolio.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.portfolio.getPositions().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetPositionResponse, Portfolio.GetPositionsError&gt;</code>, with `result.value` of type <code>[GetPositionResponse](src/models/get-position-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PostTrade

> Source: [PostTrade](src/resources/post-trade.ts)

<details>
<summary><code>getTradesByDateRange(request: PostTrade.GetTradesByDateRangeRequest, options?: RequestOptions): ApiPromise&lt;TradeHistoryResponse, PostTrade.GetTradesByDateRangeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API retrieves the trade history for a specified time interval.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.postTrade.getTradesByDateRange({
    startDate: "2022-04-01",
    endDate: "2023-03-31",
    pageNumber: 1,
    pageSize: 100,
    segment: "EQ",
  });
  // TODO: Handle 'response' of type TradeHistoryResponse
} catch (err) {
  // TODO: Handle 'err' of type PostTrade.GetTradesByDateRangeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.postTrade
  .getTradesByDateRange({
    startDate: "2022-04-01",
    endDate: "2023-03-31",
    pageNumber: 1,
    pageSize: 100,
    segment: "EQ",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TradeHistoryResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>startDate</code> | <code>string</code> | Date from which trade history needs to be fetched. Date in YYYY-mm-dd format |
| <code>endDate</code> | <code>string</code> | Date till which history needs needs to be fetched. Date in YYYY-mm-dd format |
| <code>pageNumber</code> | <code>number</code> | Page number for which you want to fetch trade history |
| <code>pageSize</code> | <code>number</code> | How many records you want for a page |
| <code>segment?</code> | <code>string</code> | Segment for which data is requested can be from the following options EQ - Equity,   FO - Futures and Options,   COM  - Commodity,   CD - Currency Derivatives MF - Mutual Funds |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.postTrade.getTradesByDateRange(request)`

- **OnSuccess**: <code>[TradeHistoryResponse](src/models/trade-history-response.ts)</code>
- **OnError**: throws <code>[PostTrade.GetTradesByDateRangeError](src/resources/post-trade.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.postTrade.getTradesByDateRange(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TradeHistoryResponse, PostTrade.GetTradesByDateRangeError&gt;</code>, with `result.value` of type <code>[TradeHistoryResponse](src/models/trade-history-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TradeProfitAndLoss

> Source: [TradeProfitAndLoss](src/resources/trade-profit-and-loss.ts)

<details>
<summary><code>getProfitAndLossCharges(request: TradeProfitAndLoss.GetProfitAndLossChargesRequest, options?: RequestOptions): ApiPromise&lt;GetProfitAndLossChargesResponse, TradeProfitAndLoss.GetProfitAndLossChargesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API gives the charges incurred by users for their trades

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tradeProfitAndLoss.getProfitAndLossCharges({
    segment: "EQ",
    financialYear: "2223",
    fromDate: "01-04-2022",
    toDate: "31-03-2023",
  });
  // TODO: Handle 'response' of type GetProfitAndLossChargesResponse
} catch (err) {
  // TODO: Handle 'err' of type TradeProfitAndLoss.GetProfitAndLossChargesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tradeProfitAndLoss
  .getProfitAndLossCharges({
    segment: "EQ",
    financialYear: "2223",
    fromDate: "01-04-2022",
    toDate: "31-03-2023",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetProfitAndLossChargesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>segment</code> | <code>string</code> | Segment for which data is requested can be from the following options EQ - Equity,   FO - Futures and Options,   COM  - Commodity,   CD - Currency Derivatives |
| <code>financialYear</code> | <code>string</code> | Financial year for which data has been requested. Concatenation of last 2 digits of from year and to year Sample:for 2021-2022, financial_year will be 2122 |
| <code>fromDate?</code> | <code>string</code> | Date from which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format |
| <code>toDate?</code> | <code>string</code> | Date till which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tradeProfitAndLoss.getProfitAndLossCharges(request)`

- **OnSuccess**: <code>[GetProfitAndLossChargesResponse](src/models/get-profit-and-loss-charges-response.ts)</code>
- **OnError**: throws <code>[TradeProfitAndLoss.GetProfitAndLossChargesError](src/resources/trade-profit-and-loss.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tradeProfitAndLoss.getProfitAndLossCharges(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetProfitAndLossChargesResponse, TradeProfitAndLoss.GetProfitAndLossChargesError&gt;</code>, with `result.value` of type <code>[GetProfitAndLossChargesResponse](src/models/get-profit-and-loss-charges-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTradeWiseProfitAndLossData(request: TradeProfitAndLoss.GetTradeWiseProfitAndLossDataRequest, options?: RequestOptions): ApiPromise&lt;GetTradeWiseProfitAndLossDataResponse, TradeProfitAndLoss.GetTradeWiseProfitAndLossDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API gives the data of the realised Profit and Loss report requested by a user

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tradeProfitAndLoss.getTradeWiseProfitAndLossData({
    segment: "EQ",
    financialYear: "2223",
    pageNumber: 1,
    pageSize: 3000,
    fromDate: "01-04-2022",
    toDate: "31-03-2023",
  });
  // TODO: Handle 'response' of type GetTradeWiseProfitAndLossDataResponse
} catch (err) {
  // TODO: Handle 'err' of type TradeProfitAndLoss.GetTradeWiseProfitAndLossDataError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tradeProfitAndLoss
  .getTradeWiseProfitAndLossData({
    segment: "EQ",
    financialYear: "2223",
    pageNumber: 1,
    pageSize: 3000,
    fromDate: "01-04-2022",
    toDate: "31-03-2023",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetTradeWiseProfitAndLossDataResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>segment</code> | <code>string</code> | Segment for which data is requested can be from the following options EQ - Equity,   FO - Futures and Options,   COM  - Commodity,   CD - Currency Derivatives |
| <code>financialYear</code> | <code>string</code> | Financial year for which data has been requested. Concatenation of last 2 digits of from year and to year Sample:for 2021-2022, financial_year will be 2122 |
| <code>pageNumber</code> | <code>number</code> | Page Number, the pages are starting from 1 |
| <code>pageSize</code> | <code>number</code> | Page size for pagination. The maximum page size value is obtained from P and L report metadata API. |
| <code>fromDate?</code> | <code>string</code> | Date from which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format |
| <code>toDate?</code> | <code>string</code> | Date till which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tradeProfitAndLoss.getTradeWiseProfitAndLossData(request)`

- **OnSuccess**: <code>[GetTradeWiseProfitAndLossDataResponse](src/models/get-trade-wise-profit-and-loss-data-response.ts)</code>
- **OnError**: throws <code>[TradeProfitAndLoss.GetTradeWiseProfitAndLossDataError](src/resources/trade-profit-and-loss.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tradeProfitAndLoss.getTradeWiseProfitAndLossData(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetTradeWiseProfitAndLossDataResponse, TradeProfitAndLoss.GetTradeWiseProfitAndLossDataError&gt;</code>, with `result.value` of type <code>[GetTradeWiseProfitAndLossDataResponse](src/models/get-trade-wise-profit-and-loss-data-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTradeWiseProfitAndLossMetaData(request: TradeProfitAndLoss.GetTradeWiseProfitAndLossMetaDataRequest, options?: RequestOptions): ApiPromise&lt;GetTradeWiseProfitAndLossMetaDataResponse, TradeProfitAndLoss.GetTradeWiseProfitAndLossMetaDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API gives the data of the realised Profit and Loss report requested by a user

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tradeProfitAndLoss.getTradeWiseProfitAndLossMetaData({
    segment: "EQ",
    financialYear: "2223",
    fromDate: "01-04-2022",
    toDate: "31-03-2023",
  });
  // TODO: Handle 'response' of type GetTradeWiseProfitAndLossMetaDataResponse
} catch (err) {
  // TODO: Handle 'err' of type TradeProfitAndLoss.GetTradeWiseProfitAndLossMetaDataError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tradeProfitAndLoss
  .getTradeWiseProfitAndLossMetaData({
    segment: "EQ",
    financialYear: "2223",
    fromDate: "01-04-2022",
    toDate: "31-03-2023",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetTradeWiseProfitAndLossMetaDataResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>segment</code> | <code>string</code> | Segment for which data is requested can be from the following options EQ - Equity,   FO - Futures and Options,   COM  - Commodity,   CD - Currency Derivatives |
| <code>financialYear</code> | <code>string</code> | Financial year for which data has been requested. Concatenation of last 2 digits of from year and to year Sample:for 2021-2022, financial_year will be 2122 |
| <code>fromDate?</code> | <code>string</code> | Date from which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format |
| <code>toDate?</code> | <code>string</code> | Date till which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tradeProfitAndLoss.getTradeWiseProfitAndLossMetaData(request)`

- **OnSuccess**: <code>[GetTradeWiseProfitAndLossMetaDataResponse](src/models/get-trade-wise-profit-and-loss-meta-data-response.ts)</code>
- **OnError**: throws <code>[TradeProfitAndLoss.GetTradeWiseProfitAndLossMetaDataError](src/resources/trade-profit-and-loss.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tradeProfitAndLoss.getTradeWiseProfitAndLossMetaData(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetTradeWiseProfitAndLossMetaDataResponse, TradeProfitAndLoss.GetTradeWiseProfitAndLossMetaDataError&gt;</code>, with `result.value` of type <code>[GetTradeWiseProfitAndLossMetaDataResponse](src/models/get-trade-wise-profit-and-loss-meta-data-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## User

> Source: [User](src/resources/user.ts)

<details>
<summary><code>getKillSwitch(options?: RequestOptions): ApiPromise&lt;KillSwitchResponse, User.GetKillSwitchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the disable/enable status of all trading segments for the user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.user.getKillSwitch();
  // TODO: Handle 'response' of type KillSwitchResponse
} catch (err) {
  // TODO: Handle 'err' of type User.GetKillSwitchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.user.getKillSwitch().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type KillSwitchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.user.getKillSwitch()`

- **OnSuccess**: <code>[KillSwitchResponse](src/models/kill-switch-response.ts)</code>
- **OnError**: throws <code>[User.GetKillSwitchError](src/resources/user.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.user.getKillSwitch().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;KillSwitchResponse, User.GetKillSwitchError&gt;</code>, with `result.value` of type <code>[KillSwitchResponse](src/models/kill-switch-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProfile(options?: RequestOptions): ApiPromise&lt;GetProfileResponse, User.GetProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows to fetch the complete information of the user who is logged in including the products, order types and exchanges enabled for the user

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.user.getProfile();
  // TODO: Handle 'response' of type GetProfileResponse
} catch (err) {
  // TODO: Handle 'err' of type User.GetProfileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.user.getProfile().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetProfileResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.user.getProfile()`

- **OnSuccess**: <code>[GetProfileResponse](src/models/get-profile-response.ts)</code>
- **OnError**: throws <code>[User.GetProfileError](src/resources/user.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.user.getProfile().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetProfileResponse, User.GetProfileError&gt;</code>, with `result.value` of type <code>[GetProfileResponse](src/models/get-profile-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUserFundMargin(request?: User.GetUserFundMarginRequest, options?: RequestOptions): ApiPromise&lt;GetUserFundMarginResponse, User.GetUserFundMarginError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Shows the balance of the user in equity and commodity market.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.user.getUserFundMargin();
  // TODO: Handle 'response' of type GetUserFundMarginResponse
} catch (err) {
  // TODO: Handle 'err' of type User.GetUserFundMarginError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.user.getUserFundMargin().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetUserFundMarginResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>segment?</code> | <code>[Segment1](src/models/segment1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.user.getUserFundMargin(request)`

- **OnSuccess**: <code>[GetUserFundMarginResponse](src/models/get-user-fund-margin-response.ts)</code>
- **OnError**: throws <code>[User.GetUserFundMarginError](src/resources/user.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.user.getUserFundMargin(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetUserFundMarginResponse, User.GetUserFundMarginError&gt;</code>, with `result.value` of type <code>[GetUserFundMarginResponse](src/models/get-user-fund-margin-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUserFundMarginV3(options?: RequestOptions): ApiPromise&lt;GetUserFundMarginV3Response, User.GetUserFundMarginV3Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Shows the detailed balance breakdown of the user including cash, pledged margin, available-to-trade, and unavailable-to-trade components.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.user.getUserFundMarginV3();
  // TODO: Handle 'response' of type GetUserFundMarginV3Response
} catch (err) {
  // TODO: Handle 'err' of type User.GetUserFundMarginV3Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.user.getUserFundMarginV3().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetUserFundMarginV3Response
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.user.getUserFundMarginV3()`

- **OnSuccess**: <code>[GetUserFundMarginV3Response](src/models/get-user-fund-margin-v3-response.ts)</code>
- **OnError**: throws <code>[User.GetUserFundMarginV3Error](src/resources/user.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.user.getUserFundMarginV3().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetUserFundMarginV3Response, User.GetUserFundMarginV3Error&gt;</code>, with `result.value` of type <code>[GetUserFundMarginV3Response](src/models/get-user-fund-margin-v3-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUserIps(options?: RequestOptions): ApiPromise&lt;UserIpResponse, User.GetUserIpsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.user.getUserIps();
  // TODO: Handle 'response' of type UserIpResponse
} catch (err) {
  // TODO: Handle 'err' of type User.GetUserIpsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.user.getUserIps().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserIpResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.user.getUserIps()`

- **OnSuccess**: <code>[UserIpResponse](src/models/user-ip-response.ts)</code>
- **OnError**: throws <code>[User.GetUserIpsError](src/resources/user.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.user.getUserIps().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserIpResponse, User.GetUserIpsError&gt;</code>, with `result.value` of type <code>[UserIpResponse](src/models/user-ip-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateKillSwitch(request: User.UpdateKillSwitchRequest, options?: RequestOptions): ApiPromise&lt;KillSwitchResponse, User.UpdateKillSwitchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enable or disable specific trading segments.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.user.updateKillSwitch({
    body: [{ segment: Segment.BseEq, action: Action.Enable }],
  });
  // TODO: Handle 'response' of type KillSwitchResponse
} catch (err) {
  // TODO: Handle 'err' of type User.UpdateKillSwitchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.user
  .updateKillSwitch({ body: [{ segment: Segment.BseEq, action: Action.Enable }] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type KillSwitchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[KillSwitchSegmentUpdateRequest](src/models/kill-switch-segment-update-request.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.user.updateKillSwitch(request)`

- **OnSuccess**: <code>[KillSwitchResponse](src/models/kill-switch-response.ts)</code>
- **OnError**: throws <code>[User.UpdateKillSwitchError](src/resources/user.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.user.updateKillSwitch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;KillSwitchResponse, User.UpdateKillSwitchError&gt;</code>, with `result.value` of type <code>[KillSwitchResponse](src/models/kill-switch-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateUserIp(request: User.UpdateUserIpRequestParams, options?: RequestOptions): ApiPromise&lt;UserIpResponse, User.UpdateUserIpError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.user.updateUserIp({ body: {} });
  // TODO: Handle 'response' of type UserIpResponse
} catch (err) {
  // TODO: Handle 'err' of type User.UpdateUserIpError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.user.updateUserIp({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserIpResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UpdateUserIpRequest](src/models/update-user-ip-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.user.updateUserIp(request)`

- **OnSuccess**: <code>[UserIpResponse](src/models/user-ip-response.ts)</code>
- **OnError**: throws <code>[User.UpdateUserIpError](src/resources/user.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.user.updateUserIp(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserIpResponse, User.UpdateUserIpError&gt;</code>, with `result.value` of type <code>[UserIpResponse](src/models/user-ip-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Websocket

> Source: [Websocket](src/resources/websocket.ts)

<details>
<summary><code>getMarketDataFeed(options?: RequestOptions): ApiPromise&lt;undefined, Websocket.GetMarketDataFeedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API redirects the client to the respective socket endpoint to receive Market updates.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.websocket.getMarketDataFeed();
} catch (err) {
  // TODO: Handle 'err' of type Websocket.GetMarketDataFeedError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.websocket.getMarketDataFeed().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.websocket.getMarketDataFeed()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Websocket.GetMarketDataFeedError](src/resources/websocket.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.websocket.getMarketDataFeed().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Websocket.GetMarketDataFeedError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMarketDataFeedAuthorize(options?: RequestOptions): ApiPromise&lt;WebsocketAuthRedirectResponse, Websocket.GetMarketDataFeedAuthorizeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the socket endpoint URI for Market updates.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.websocket.getMarketDataFeedAuthorize();
  // TODO: Handle 'response' of type WebsocketAuthRedirectResponse
} catch (err) {
  // TODO: Handle 'err' of type Websocket.GetMarketDataFeedAuthorizeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.websocket.getMarketDataFeedAuthorize().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebsocketAuthRedirectResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.websocket.getMarketDataFeedAuthorize()`

- **OnSuccess**: <code>[WebsocketAuthRedirectResponse](src/models/websocket-auth-redirect-response.ts)</code>
- **OnError**: throws <code>[Websocket.GetMarketDataFeedAuthorizeError](src/resources/websocket.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.websocket.getMarketDataFeedAuthorize().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebsocketAuthRedirectResponse, Websocket.GetMarketDataFeedAuthorizeError&gt;</code>, with `result.value` of type <code>[WebsocketAuthRedirectResponse](src/models/websocket-auth-redirect-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPortfolioStreamFeed(request?: Websocket.GetPortfolioStreamFeedRequest, options?: RequestOptions): ApiPromise&lt;undefined, Websocket.GetPortfolioStreamFeedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API redirects the client to the respective socket endpoint to receive Portfolio updates.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.websocket.getPortfolioStreamFeed({ updateTypes: "order,gtt_order,position,holding" });
} catch (err) {
  // TODO: Handle 'err' of type Websocket.GetPortfolioStreamFeedError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.websocket
  .getPortfolioStreamFeed({ updateTypes: "order,gtt_order,position,holding" })
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
| <code>updateTypes?</code> | <code>string</code> | Identifiers separated by commas denote the types of updates to receive. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.websocket.getPortfolioStreamFeed(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Websocket.GetPortfolioStreamFeedError](src/resources/websocket.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.websocket.getPortfolioStreamFeed(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Websocket.GetPortfolioStreamFeedError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPortfolioStreamFeedAuthorize(request?: Websocket.GetPortfolioStreamFeedAuthorizeRequest, options?: RequestOptions): ApiPromise&lt;WebsocketAuthRedirectResponse, Websocket.GetPortfolioStreamFeedAuthorizeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the socket endpoint URI for Portfolio updates.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.websocket.getPortfolioStreamFeedAuthorize({
    updateTypes: "order,gtt_order,position,holding",
  });
  // TODO: Handle 'response' of type WebsocketAuthRedirectResponse
} catch (err) {
  // TODO: Handle 'err' of type Websocket.GetPortfolioStreamFeedAuthorizeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.websocket
  .getPortfolioStreamFeedAuthorize({ updateTypes: "order,gtt_order,position,holding" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebsocketAuthRedirectResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>updateTypes?</code> | <code>string</code> | Identifiers separated by commas denote the types of updates to receive. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.websocket.getPortfolioStreamFeedAuthorize(request)`

- **OnSuccess**: <code>[WebsocketAuthRedirectResponse](src/models/websocket-auth-redirect-response.ts)</code>
- **OnError**: throws <code>[Websocket.GetPortfolioStreamFeedAuthorizeError](src/resources/websocket.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.websocket.getPortfolioStreamFeedAuthorize(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebsocketAuthRedirectResponse, Websocket.GetPortfolioStreamFeedAuthorizeError&gt;</code>, with `result.value` of type <code>[WebsocketAuthRedirectResponse](src/models/websocket-auth-redirect-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UpstoxError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

