# Reference

> Source: [CompSniperClient](src/client.ts)

## Account

> Source: [Account](src/resources/account.ts)

<details>
<summary><code>getAccountUsage(options?: RequestOptions): ApiPromise&lt;AccountUsageResponse, Account.GetAccountUsageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the authenticated account's monthly allowance, current usage, billing period, rate limit, purchased-credit balance, and total available requests.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.account.getAccountUsage();
  // TODO: Handle 'response' of type AccountUsageResponse
} catch (err) {
  // TODO: Handle 'err' of type Account.GetAccountUsageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.account.getAccountUsage().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccountUsageResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.account.getAccountUsage()`

- **OnSuccess**: <code>[AccountUsageResponse](src/models/account-usage-response.ts)</code>
- **OnError**: throws <code>[Account.GetAccountUsageError](src/resources/account.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.account.getAccountUsage().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccountUsageResponse, Account.GetAccountUsageError&gt;</code>, with `result.value` of type <code>[AccountUsageResponse](src/models/account-usage-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompSniperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## BestOfferPrices

> Source: [BestOfferPrices](src/resources/best-offer-prices.ts)

<details>
<summary><code>getBestOfferPrices(request: BestOfferPrices.GetBestOfferPricesRequest, options?: RequestOptions): ApiPromise&lt;V1BestOfferPricesResponse, BestOfferPrices.GetBestOfferPricesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the saved accepted Best Offer price for up to 100 eBay item IDs seen in earlier bestOfferPrice=true searches. Free: does not count against monthly requests. Uses the normal per-minute rate limit.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bestOfferPrices.getBestOfferPrices({ itemIds: "some example string" });
  // TODO: Handle 'response' of type V1BestOfferPricesResponse
} catch (err) {
  // TODO: Handle 'err' of type BestOfferPrices.GetBestOfferPricesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bestOfferPrices
  .getBestOfferPrices({ itemIds: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1BestOfferPricesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>itemIds</code> | <code>string</code> | 1 to 100 eBay item IDs, separated by commas. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bestOfferPrices.getBestOfferPrices(request)`

- **OnSuccess**: <code>[V1BestOfferPricesResponse](src/models/v1-best-offer-prices-response.ts)</code>
- **OnError**: throws <code>[BestOfferPrices.GetBestOfferPricesError](src/resources/best-offer-prices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bestOfferPrices.getBestOfferPrices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1BestOfferPricesResponse, BestOfferPrices.GetBestOfferPricesError&gt;</code>, with `result.value` of type <code>[V1BestOfferPricesResponse](src/models/v1-best-offer-prices-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompSniperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## BulkSearch

> Source: [BulkSearch](src/resources/bulk-search.ts)

<details>
<summary><code>bulkSearch(request: BulkSearch.BulkSearchRequestParams, options?: RequestOptions): ApiPromise&lt;EventStream&lt;string&gt;, BulkSearch.BulkSearchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search up to 20 unique keywords with at most three concurrent workers. If only part of the input fits the selected billing balance, the first keywords run and the remainder receive per-keyword quota_exceeded result events. Each successful keyword consumes one request; failures do not. Results stream as Server-Sent Events and may complete out of order.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const stream = await client.bulkSearch.bulkSearch({ body: { keywords: ["some example string"] } });
  for await (const event of stream) {
    // TODO: Handle 'event' of type string, one event's decoded data
  }
} catch (err) {
  // TODO: Handle 'err' of type BulkSearch.BulkSearchError, discriminated with 'err.payload.kind'
  // The loop's failures are CompSniperError leaves too: DecodeError, ConnectionError or TimeoutError
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bulkSearch
  .bulkSearch({ body: { keywords: ["some example string"] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventStream<string>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xCreditSource?</code> | <code>[XCreditSource](src/models/xcredit-source.ts)</code> | Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged. |
| <code>idempotencyKey?</code> | <code>string</code> | Replay a completed run with the identical request body without repeating searches or consuming quota. |
| <code>body</code> | <code>[BulkSearchRequest](src/models/bulk-search-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulkSearch.bulkSearch(request)`

- **OnSuccess**: <code>[EventStream](src/core/event-stream.ts)&lt;string&gt;</code>
- **OnError**: throws <code>[BulkSearch.BulkSearchError](src/resources/bulk-search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bulkSearch.bulkSearch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventStream&lt;string&gt;, BulkSearch.BulkSearchError&gt;</code>, with `result.value` of type <code>[EventStream](src/core/event-stream.ts)&lt;string&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompSniperError](src/core/errors.ts)</code> on any operational failure, before the stream is returned and while it is read — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>downloadBulkSearchCsv(request: BulkSearch.DownloadBulkSearchCsvRequest, options?: RequestOptions): ApiPromise&lt;string, BulkSearch.DownloadBulkSearchCsvError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Download every successful keyword in one CSV, or pass index for one submitted keyword. Requires the same account's bearer credential.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bulkSearch.downloadBulkSearchCsv({
    runId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type BulkSearch.DownloadBulkSearchCsvError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bulkSearch
  .downloadBulkSearchCsv({ runId: "00000000-0000-0000-0000-000000000000" })
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
| <code>runId</code> | <code>string</code> | - |
| <code>index?</code> | <code>number</code> | Original zero-based keyword index. Omit for a combined CSV. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulkSearch.downloadBulkSearchCsv(request)`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[BulkSearch.DownloadBulkSearchCsvError](src/resources/bulk-search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bulkSearch.downloadBulkSearchCsv(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, BulkSearch.DownloadBulkSearchCsvError&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompSniperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Cards

> Source: [Cards](src/resources/cards.ts)

<details>
<summary><code>cancelCardBatch(request: Cards.CancelCardBatchRequest, options?: RequestOptions): ApiPromise&lt;undefined, Cards.CancelCardBatchError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.cards.cancelCardBatch({ jobId: "00000000-0000-0000-0000-000000000000" });
} catch (err) {
  // TODO: Handle 'err' of type Cards.CancelCardBatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cards
  .cancelCardBatch({ jobId: "00000000-0000-0000-0000-000000000000" })
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
| <code>jobId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cards.cancelCardBatch(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Cards.CancelCardBatchError](src/resources/cards.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cards.cancelCardBatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Cards.CancelCardBatchError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompSniperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCardBatch(request: Cards.GetCardBatchRequest, options?: RequestOptions): ApiPromise&lt;CardBatchJob, Cards.GetCardBatchError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cards.getCardBatch({ jobId: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type CardBatchJob
} catch (err) {
  // TODO: Handle 'err' of type Cards.GetCardBatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cards
  .getCardBatch({ jobId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CardBatchJob
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>jobId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cards.getCardBatch(request)`

- **OnSuccess**: <code>[CardBatchJob](src/models/card-batch-job.ts)</code>
- **OnError**: throws <code>[Cards.GetCardBatchError](src/resources/cards.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cards.getCardBatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CardBatchJob, Cards.GetCardBatchError&gt;</code>, with `result.value` of type <code>[CardBatchJob](src/models/card-batch-job.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompSniperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>submitCardBatch(request: Cards.SubmitCardBatchRequest, options?: RequestOptions): ApiPromise&lt;CardBatchAccepted, Cards.SubmitCardBatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submit up to 100 cards in one HTTP request. Cards are processed asynchronously and sequentially. Each successfully processed card consumes one normal monthly request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cards.submitCardBatch({ body: { cards: [{}] } });
  // TODO: Handle 'response' of type CardBatchAccepted
} catch (err) {
  // TODO: Handle 'err' of type Cards.SubmitCardBatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cards.submitCardBatch({ body: { cards: [{}] } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CardBatchAccepted
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xCreditSource?</code> | <code>[XCreditSource](src/models/xcredit-source.ts)</code> | Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged. |
| <code>idempotencyKey?</code> | <code>string</code> | Safely retry a submission without creating a duplicate job. |
| <code>body</code> | <code>[CardBatchRequest](src/models/card-batch-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cards.submitCardBatch(request)`

- **OnSuccess**: <code>[CardBatchAccepted](src/models/card-batch-accepted.ts)</code>
- **OnError**: throws <code>[Cards.SubmitCardBatchError](src/resources/cards.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cards.submitCardBatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CardBatchAccepted, Cards.SubmitCardBatchError&gt;</code>, with `result.value` of type <code>[CardBatchAccepted](src/models/card-batch-accepted.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompSniperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Depop

> Source: [Depop](src/resources/depop.ts)

<details>
<summary><code>getV1DepopListings(request: Depop.GetV1DepopListingsRequest, options?: RequestOptions): ApiPromise&lt;V1DepopListingsResponse, Depop.GetV1DepopListingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Current Depop listings in the US, UK, Australia or Canada with asking price, original price before a discount, shipping, brand, size, condition and seller. Page with nextCursor. One successful call uses one request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.depop.getV1DepopListings({ keyword: "vintage levis 501" });
  // TODO: Handle 'response' of type V1DepopListingsResponse
} catch (err) {
  // TODO: Handle 'err' of type Depop.GetV1DepopListingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.depop.getV1DepopListings({ keyword: "vintage levis 501" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1DepopListingsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>keyword</code> | <code>string</code> | - |
| <code>country?</code> | <code>[Country](src/models/country.ts)</code> | -<br>**Default**: "us" |
| <code>count?</code> | <code>number</code> | -<br>**Default**: 24 |
| <code>cursor?</code> | <code>string</code> | - |
| <code>xCreditSource?</code> | <code>[XCreditSource](src/models/xcredit-source.ts)</code> | Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.depop.getV1DepopListings(request)`

- **OnSuccess**: <code>[V1DepopListingsResponse](src/models/v1-depop-listings-response.ts)</code>
- **OnError**: throws <code>[Depop.GetV1DepopListingsError](src/resources/depop.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.depop.getV1DepopListings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1DepopListingsResponse, Depop.GetV1DepopListingsError&gt;</code>, with `result.value` of type <code>[V1DepopListingsResponse](src/models/v1-depop-listings-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompSniperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Grailed

> Source: [Grailed](src/resources/grailed.ts)

<details>
<summary><code>getV1GrailedListings(request: Grailed.GetV1GrailedListingsRequest, options?: RequestOptions): ApiPromise&lt;V1GrailedListingsResponse, Grailed.GetV1GrailedListingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Current Grailed listings with asking price, US shipping, offers, size, condition and designer. One successful call uses one request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.grailed.getV1GrailedListings({ keyword: "supreme box logo hoodie" });
  // TODO: Handle 'response' of type V1GrailedListingsResponse
} catch (err) {
  // TODO: Handle 'err' of type Grailed.GetV1GrailedListingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.grailed
  .getV1GrailedListings({ keyword: "supreme box logo hoodie" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1GrailedListingsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>keyword</code> | <code>string</code> | - |
| <code>department?</code> | <code>[Department](src/models/department.ts)</code> | -<br>**Default**: "any" |
| <code>condition?</code> | <code>[Condition](src/models/condition.ts)</code> | -<br>**Default**: "any" |
| <code>minPrice?</code> | <code>number</code> | - |
| <code>maxPrice?</code> | <code>number</code> | - |
| <code>count?</code> | <code>number</code> | -<br>**Default**: 40 |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>sortBy?</code> | <code>[SortBy1](src/models/sort-by1.ts)</code> | -<br>**Default**: "default" |
| <code>xCreditSource?</code> | <code>[XCreditSource](src/models/xcredit-source.ts)</code> | Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.grailed.getV1GrailedListings(request)`

- **OnSuccess**: <code>[V1GrailedListingsResponse](src/models/v1-grailed-listings-response.ts)</code>
- **OnError**: throws <code>[Grailed.GetV1GrailedListingsError](src/resources/grailed.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.grailed.getV1GrailedListings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1GrailedListingsResponse, Grailed.GetV1GrailedListingsError&gt;</code>, with `result.value` of type <code>[V1GrailedListingsResponse](src/models/v1-grailed-listings-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompSniperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getV1GrailedSold(request: Grailed.GetV1GrailedSoldRequest, options?: RequestOptions): ApiPromise&lt;V1GrailedSoldResponse, Grailed.GetV1GrailedSoldError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Grailed sold listings with the price the buyer paid (accepted offers included), the asking price it sold from, sold date, shipping paid, size, condition and designer. Up to 100 rows per page and 1,000 per search. One successful call uses one request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.grailed.getV1GrailedSold({ keyword: "supreme box logo hoodie" });
  // TODO: Handle 'response' of type V1GrailedSoldResponse
} catch (err) {
  // TODO: Handle 'err' of type Grailed.GetV1GrailedSoldError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.grailed.getV1GrailedSold({ keyword: "supreme box logo hoodie" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1GrailedSoldResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>keyword</code> | <code>string</code> | - |
| <code>department?</code> | <code>[Department](src/models/department.ts)</code> | -<br>**Default**: "any" |
| <code>condition?</code> | <code>[Condition](src/models/condition.ts)</code> | -<br>**Default**: "any" |
| <code>minPrice?</code> | <code>number</code> | - |
| <code>maxPrice?</code> | <code>number</code> | - |
| <code>count?</code> | <code>number</code> | -<br>**Default**: 40 |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>sortBy?</code> | <code>[SortBy](src/models/sort-by.ts)</code> | -<br>**Default**: "recent" |
| <code>xCreditSource?</code> | <code>[XCreditSource](src/models/xcredit-source.ts)</code> | Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.grailed.getV1GrailedSold(request)`

- **OnSuccess**: <code>[V1GrailedSoldResponse](src/models/v1-grailed-sold-response.ts)</code>
- **OnError**: throws <code>[Grailed.GetV1GrailedSoldError](src/resources/grailed.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.grailed.getV1GrailedSold(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1GrailedSoldResponse, Grailed.GetV1GrailedSoldError&gt;</code>, with `result.value` of type <code>[V1GrailedSoldResponse](src/models/v1-grailed-sold-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompSniperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Mercari

> Source: [Mercari](src/resources/mercari.ts)

<details>
<summary><code>searchMercariListings(request: Mercari.SearchMercariListingsRequest, options?: RequestOptions): ApiPromise&lt;V1MercariResponse, Mercari.SearchMercariListingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns one page of public Mercari sold or active listings through a managed anonymous guest session. Authentication, rate limits, monthly quota, purchased credits, request IDs, and cache headers match the other CompSniper endpoints. Each successful page uses one CompSniper request and returns up to 100 items.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mercari.searchMercariListings({
    keyword: "pokemon cards",
    page: 1,
    count: 100,
    minPrice: 10,
    maxPrice: 100,
    sold: Sold.True,
    includeListedAt: IncludeListedAt.True,
  });
  // TODO: Handle 'response' of type V1MercariResponse
} catch (err) {
  // TODO: Handle 'err' of type Mercari.SearchMercariListingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mercari
  .searchMercariListings({
    keyword: "pokemon cards",
    page: 1,
    count: 100,
    minPrice: 10,
    maxPrice: 100,
    sold: Sold.True,
    includeListedAt: IncludeListedAt.True,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1MercariResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>keyword</code> | <code>string</code> | - |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>count?</code> | <code>number</code> | -<br>**Default**: 100 |
| <code>sortOrder?</code> | <code>[SortOrderCompSniperMarketplaceAndShippingMercariApi](src/models/sort-order-comp-sniper-marketplace-and-shipping-mercari-api.ts)</code> | Sort order. recentlySold maps to Mercari's current Recently sold option. mostPopular is accepted as a compatibility alias for recentlySold.<br>**Default**: "bestMatch" |
| <code>minPrice?</code> | <code>number</code> | - |
| <code>maxPrice?</code> | <code>number</code> | - |
| <code>itemCondition?</code> | <code>[ItemConditionCompSniperMarketplaceAndShippingMercariApi](src/models/item-condition-comp-sniper-marketplace-and-shipping-mercari-api.ts)</code> | -<br>**Default**: "any" |
| <code>categoryId?</code> | <code>string</code> | - |
| <code>brandId?</code> | <code>string</code> | - |
| <code>sold?</code> | <code>[Sold](src/models/sold.ts)</code> | -<br>**Default**: "true" |
| <code>includeListedAt?</code> | <code>[IncludeListedAt](src/models/include-listed-at.ts)</code> | -<br>**Default**: "false" |
| <code>xCreditSource?</code> | <code>[XCreditSource](src/models/xcredit-source.ts)</code> | Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mercari.searchMercariListings(request)`

- **OnSuccess**: <code>[V1MercariResponse](src/models/v1-mercari-response.ts)</code>
- **OnError**: throws <code>[Mercari.SearchMercariListingsError](src/resources/mercari.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.mercari.searchMercariListings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1MercariResponse, Mercari.SearchMercariListingsError&gt;</code>, with `result.value` of type <code>[V1MercariResponse](src/models/v1-mercari-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompSniperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Poshmark

> Source: [Poshmark](src/resources/poshmark.ts)

<details>
<summary><code>searchPoshmarkSold(request: Poshmark.SearchPoshmarkSoldRequest, options?: RequestOptions): ApiPromise&lt;V1PoshmarkSoldResponse, Poshmark.SearchPoshmarkSoldError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns one native page of public Poshmark sold listings. Authentication, rate limits, monthly quota, purchased credits, request IDs, and cache headers match the other CompSniper endpoints. Each successful page uses one CompSniper request, including enrich=true. The native page ceiling is 48 listings.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.poshmark.searchPoshmarkSold({
    keyword: "louis vuitton neverfull",
    page: 1,
    minPrice: 50,
    maxPrice: 500,
    brand: "Louis Vuitton",
    enrich: Enrich.False,
  });
  // TODO: Handle 'response' of type V1PoshmarkSoldResponse
} catch (err) {
  // TODO: Handle 'err' of type Poshmark.SearchPoshmarkSoldError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.poshmark
  .searchPoshmarkSold({
    keyword: "louis vuitton neverfull",
    page: 1,
    minPrice: 50,
    maxPrice: 500,
    brand: "Louis Vuitton",
    enrich: Enrich.False,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1PoshmarkSoldResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>keyword</code> | <code>string</code> | - |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>minPrice?</code> | <code>number</code> | - |
| <code>maxPrice?</code> | <code>number</code> | - |
| <code>department?</code> | <code>[DepartmentCompSniperMarketplaceAndShippingPoshmarkApi](src/models/department-comp-sniper-marketplace-and-shipping-poshmark-api.ts)</code> | -<br>**Default**: "all" |
| <code>condition?</code> | <code>[ConditionCompSniperMarketplaceAndShippingPoshmarkApi](src/models/condition-comp-sniper-marketplace-and-shipping-poshmark-api.ts)</code> | -<br>**Default**: "all" |
| <code>brand?</code> | <code>string</code> | - |
| <code>sortBy?</code> | <code>[SortByCompSniperMarketplaceAndShippingPoshmarkApi](src/models/sort-by-comp-sniper-marketplace-and-shipping-poshmark-api.ts)</code> | -<br>**Default**: "sold_recently" |
| <code>enrich?</code> | <code>[Enrich](src/models/enrich.ts)</code> | Adds public seller location, approximate sold-count evidence, and average ship time. Sold date, listed date, colors, description, category, and condition are already returned when present in the native search response. This still uses one CompSniper request.<br>**Default**: "false" |
| <code>xCreditSource?</code> | <code>[XCreditSource](src/models/xcredit-source.ts)</code> | Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.poshmark.searchPoshmarkSold(request)`

- **OnSuccess**: <code>[V1PoshmarkSoldResponse](src/models/v1-poshmark-sold-response.ts)</code>
- **OnError**: throws <code>[Poshmark.SearchPoshmarkSoldError](src/resources/poshmark.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.poshmark.searchPoshmarkSold(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1PoshmarkSoldResponse, Poshmark.SearchPoshmarkSoldError&gt;</code>, with `result.value` of type <code>[V1PoshmarkSoldResponse](src/models/v1-poshmark-sold-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompSniperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Psa

> Source: [Psa](src/resources/psa.ts)

<details>
<summary><code>getPsaCard(request?: Psa.GetPsaCardRequest, options?: RequestOptions): ApiPromise&lt;V1PsaCardResponse, Psa.GetPsaCardError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

For one PSA card: sold prices by grade (sales, average, min, max, latest), recent individual sales with grading company, grade and cert number, the population report with gem rate, and a price summary. Send specId from /v1/psa/search, or a keyword and the best match is used (others listed in otherMatches). One successful call uses one request; a card PSA does not have returns 404 not_found and is not charged.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.psa.getPsaCard({
    specId: "5217539",
    keyword: "1999 pokemon base set charizard 4",
    grade: "10",
  });
  // TODO: Handle 'response' of type V1PsaCardResponse
} catch (err) {
  // TODO: Handle 'err' of type Psa.GetPsaCardError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.psa
  .getPsaCard({ specId: "5217539", keyword: "1999 pokemon base set charizard 4", grade: "10" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1PsaCardResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>specId?</code> | <code>string</code> | - |
| <code>keyword?</code> | <code>string</code> | - |
| <code>count?</code> | <code>number</code> | -<br>**Default**: 10 |
| <code>timeRange?</code> | <code>number</code> | -<br>**Default**: 0 |
| <code>grade?</code> | <code>string</code> | - |
| <code>xCreditSource?</code> | <code>[XCreditSource](src/models/xcredit-source.ts)</code> | Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.psa.getPsaCard(request)`

- **OnSuccess**: <code>[V1PsaCardResponse](src/models/v1-psa-card-response.ts)</code>
- **OnError**: throws <code>[Psa.GetPsaCardError](src/resources/psa.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.psa.getPsaCard(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1PsaCardResponse, Psa.GetPsaCardError&gt;</code>, with `result.value` of type <code>[V1PsaCardResponse](src/models/v1-psa-card-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompSniperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPsaSetPopulation(request?: Psa.GetPsaSetPopulationRequest, options?: RequestOptions): ApiPromise&lt;V1PsaSetResponse, Psa.GetPsaSetPopulationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One call returns every card in a PSA set with its number, name, variety, specId and population for every grade (Authentic, then 1 to 10 including half grades), plus totals for the set. Send headingId from /v1/psa/sets or the set's PSA population page url. Large sets can take 10 to 20 seconds.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.psa.getPsaSetPopulation({
    headingId: "57801",
    url: "https://www.psacard.com/pop/tcg-cards/1999/pokemon-game/57801",
  });
  // TODO: Handle 'response' of type V1PsaSetResponse
} catch (err) {
  // TODO: Handle 'err' of type Psa.GetPsaSetPopulationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.psa
  .getPsaSetPopulation({
    headingId: "57801",
    url: "https://www.psacard.com/pop/tcg-cards/1999/pokemon-game/57801",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1PsaSetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>headingId?</code> | <code>string</code> | - |
| <code>url?</code> | <code>string</code> | - |
| <code>xCreditSource?</code> | <code>[XCreditSource](src/models/xcredit-source.ts)</code> | Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.psa.getPsaSetPopulation(request)`

- **OnSuccess**: <code>[V1PsaSetResponse](src/models/v1-psa-set-response.ts)</code>
- **OnError**: throws <code>[Psa.GetPsaSetPopulationError](src/resources/psa.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.psa.getPsaSetPopulation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1PsaSetResponse, Psa.GetPsaSetPopulationError&gt;</code>, with `result.value` of type <code>[V1PsaSetResponse](src/models/v1-psa-set-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompSniperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPsaSets(request?: Psa.ListPsaSetsRequest, options?: RequestOptions): ApiPromise&lt;V1PsaSetsResponse, Psa.ListPsaSetsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a game to list every PSA set for that game, newest first and paged; add keyword or year to narrow it. Without game, keyword searches set names across all games. Each set has the headingId used by /v1/psa/set.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.psa.listPsaSets({ keyword: "151" });
  // TODO: Handle 'response' of type V1PsaSetsResponse
} catch (err) {
  // TODO: Handle 'err' of type Psa.ListPsaSetsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.psa.listPsaSets({ keyword: "151" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1PsaSetsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>game?</code> | <code>[Game](src/models/game.ts)</code> | - |
| <code>keyword?</code> | <code>string</code> | - |
| <code>year?</code> | <code>string</code> | - |
| <code>count?</code> | <code>number</code> | -<br>**Default**: 25 |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>xCreditSource?</code> | <code>[XCreditSource](src/models/xcredit-source.ts)</code> | Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.psa.listPsaSets(request)`

- **OnSuccess**: <code>[V1PsaSetsResponse](src/models/v1-psa-sets-response.ts)</code>
- **OnError**: throws <code>[Psa.ListPsaSetsError](src/resources/psa.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.psa.listPsaSets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1PsaSetsResponse, Psa.ListPsaSetsError&gt;</code>, with `result.value` of type <code>[V1PsaSetsResponse](src/models/v1-psa-sets-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompSniperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchPsaCards(request: Psa.SearchPsaCardsRequest, options?: RequestOptions): ApiPromise&lt;V1PsaSearchResponse, Psa.SearchPsaCardsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search PSA's card catalog (sports and trading cards) by name, set and number. Each match has the specId used by /v1/psa/card. One successful call uses one request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.psa.searchPsaCards({ keyword: "charizard base set" });
  // TODO: Handle 'response' of type V1PsaSearchResponse
} catch (err) {
  // TODO: Handle 'err' of type Psa.SearchPsaCardsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.psa.searchPsaCards({ keyword: "charizard base set" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1PsaSearchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>keyword</code> | <code>string</code> | - |
| <code>count?</code> | <code>number</code> | -<br>**Default**: 10 |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>xCreditSource?</code> | <code>[XCreditSource](src/models/xcredit-source.ts)</code> | Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.psa.searchPsaCards(request)`

- **OnSuccess**: <code>[V1PsaSearchResponse](src/models/v1-psa-search-response.ts)</code>
- **OnError**: throws <code>[Psa.SearchPsaCardsError](src/resources/psa.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.psa.searchPsaCards(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1PsaSearchResponse, Psa.SearchPsaCardsError&gt;</code>, with `result.value` of type <code>[V1PsaSearchResponse](src/models/v1-psa-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompSniperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Scrape

> Source: [Scrape](src/resources/scrape.ts)

<details>
<summary><code>browseSoldListingsByCategory(request: Scrape.BrowseSoldListingsByCategoryRequest, options?: RequestOptions): ApiPromise&lt;ScrapeResponse, Scrape.BrowseSoldListingsByCategoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns completed eBay sales from one category without requiring a keyword. Uses the same authentication, quota, filtering, response shape, and error contract as /v1/scrape.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scrape.browseSoldListingsByCategory({ categoryId: "some example string" });
  // TODO: Handle 'response' of type ScrapeResponse
} catch (err) {
  // TODO: Handle 'err' of type Scrape.BrowseSoldListingsByCategoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scrape
  .browseSoldListingsByCategory({ categoryId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScrapeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>categoryId</code> | <code>string</code> | Positive numeric eBay category id (_sacat). |
| <code>count?</code> | <code>number</code> | Maximum items to return per page. This is a ceiling; fewer valid rows may remain after baseline validation and filtering.<br>**Default**: 240 |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>ebaySite?</code> | <code>[EbaySite](src/models/ebay-site.ts)</code> | -<br>**Default**: "ebay.com" |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | - |
| <code>itemCondition?</code> | <code>[ItemCondition](src/models/item-condition.ts)</code> | - |
| <code>conditionId?</code> | <code>number</code> | - |
| <code>buyingFormat?</code> | <code>[BuyingFormat](src/models/buying-format.ts)</code> | - |
| <code>sellerType?</code> | <code>[SellerType](src/models/seller-type.ts)</code> | EU marketplaces only. |
| <code>minPrice?</code> | <code>number</code> | - |
| <code>maxPrice?</code> | <code>number</code> | - |
| <code>aspectFilter?</code> | <code>string</code> | JSON object of human-readable eBay facets. |
| <code>xCreditSource?</code> | <code>[XCreditSource](src/models/xcredit-source.ts)</code> | Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scrape.browseSoldListingsByCategory(request)`

- **OnSuccess**: <code>[ScrapeResponse](src/models/scrape-response.ts)</code>
- **OnError**: throws <code>[Scrape.BrowseSoldListingsByCategoryError](src/resources/scrape.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scrape.browseSoldListingsByCategory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScrapeResponse, Scrape.BrowseSoldListingsByCategoryError&gt;</code>, with `result.value` of type <code>[ScrapeResponse](src/models/scrape-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompSniperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelMaxSearch(request: Scrape.CancelMaxSearchRequest, options?: RequestOptions): ApiPromise&lt;MaxCancelResponse, Scrape.CancelMaxSearchError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scrape.cancelMaxSearch({ jobId: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type MaxCancelResponse
} catch (err) {
  // TODO: Handle 'err' of type Scrape.CancelMaxSearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scrape
  .cancelMaxSearch({ jobId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MaxCancelResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>jobId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scrape.cancelMaxSearch(request)`

- **OnSuccess**: <code>[MaxCancelResponse](src/models/max-cancel-response.ts)</code>
- **OnError**: throws <code>[Scrape.CancelMaxSearchError](src/resources/scrape.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scrape.cancelMaxSearch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MaxCancelResponse, Scrape.CancelMaxSearchError&gt;</code>, with `result.value` of type <code>[MaxCancelResponse](src/models/max-cancel-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompSniperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>downloadMaxSearchCsv(request: Scrape.DownloadMaxSearchCsvRequest, options?: RequestOptions): ApiPromise&lt;string, Scrape.DownloadMaxSearchCsvError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Downloads the stored job result using the signed token returned for download or email delivery. The token itself authorizes this URL.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scrape.downloadMaxSearchCsv({
    jobId: "00000000-0000-0000-0000-000000000000",
    token: "some example string",
  });
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type Scrape.DownloadMaxSearchCsvError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scrape
  .downloadMaxSearchCsv({ jobId: "00000000-0000-0000-0000-000000000000", token: "some example string" })
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
| <code>jobId</code> | <code>string</code> | - |
| <code>token</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scrape.downloadMaxSearchCsv(request)`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[Scrape.DownloadMaxSearchCsvError](src/resources/scrape.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scrape.downloadMaxSearchCsv(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, Scrape.DownloadMaxSearchCsvError&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompSniperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMaxSearchResults(request: Scrape.GetMaxSearchResultsRequest, options?: RequestOptions): ApiPromise&lt;MaxJob, Scrape.GetMaxSearchResultsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scrape.getMaxSearchResults({ jobId: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type MaxJob
} catch (err) {
  // TODO: Handle 'err' of type Scrape.GetMaxSearchResultsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scrape
  .getMaxSearchResults({ jobId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MaxJob
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>jobId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scrape.getMaxSearchResults(request)`

- **OnSuccess**: <code>[MaxJob](src/models/max-job.ts)</code>
- **OnError**: throws <code>[Scrape.GetMaxSearchResultsError](src/resources/scrape.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scrape.getMaxSearchResults(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MaxJob, Scrape.GetMaxSearchResultsError&gt;</code>, with `result.value` of type <code>[MaxJob](src/models/max-job.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompSniperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchSoldListings(request: Scrape.SearchSoldListingsRequest, options?: RequestOptions): ApiPromise&lt;ScrapeResponse, Scrape.SearchSoldListingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns completed eBay sales by default. Set sold=false for current active listings.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scrape.searchSoldListings({ keyword: "some example string" });
  // TODO: Handle 'response' of type ScrapeResponse
} catch (err) {
  // TODO: Handle 'err' of type Scrape.SearchSoldListingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scrape.searchSoldListings({ keyword: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScrapeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>keyword</code> | <code>string</code> | Product to search. Supports eBay operators, e.g. minus-sign exclusions ('airpods pro -case'). |
| <code>count?</code> | <code>number</code> | Maximum items to return per page. This is a ceiling; fewer valid rows may remain after baseline validation, date filters, or relevance cleanup.<br>**Default**: 240 |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>ebaySite?</code> | <code>[EbaySite](src/models/ebay-site.ts)</code> | eBay marketplace.<br>**Default**: "ebay.com" |
| <code>categoryId?</code> | <code>string</code> | eBay category id (_sacat).<br>**Default**: "0" |
| <code>sortOrder?</code> | <code>[SortOrder1](src/models/sort-order1.ts)</code> | - |
| <code>itemLocation?</code> | <code>[ItemLocation](src/models/item-location.ts)</code> | -<br>**Default**: "default" |
| <code>itemCondition?</code> | <code>[ItemCondition](src/models/item-condition.ts)</code> | - |
| <code>conditionId?</code> | <code>number</code> | Numeric eBay condition id; overrides itemCondition. |
| <code>buyingFormat?</code> | <code>[BuyingFormat](src/models/buying-format.ts)</code> | -<br>**Default**: "all" |
| <code>sellerType?</code> | <code>[SellerType](src/models/seller-type.ts)</code> | Filters labeled sellers on ebay.de, ebay.fr, ebay.it, and ebay.es. Ignored elsewhere; unlabeled EU rows are excluded while filtering. |
| <code>minPrice?</code> | <code>number</code> | - |
| <code>maxPrice?</code> | <code>number</code> | - |
| <code>includeCompleteListing?</code> | <code>boolean</code> | Sold-search compatibility option. Ignored when sold=false.<br>**Default**: true |
| <code>sold?</code> | <code>boolean</code> | true returns completed sales. false returns current active listings with currentPrice, watcherCount, unitsSold, acceptsOffers, and timeLeft when visible.<br>**Default**: true |
| <code>soldAfter?</code> | <code>string</code> (date) | - |
| <code>soldBefore?</code> | <code>string</code> (date) | - |
| <code>aspectFilter?</code> | <code>string</code> | JSON object of human-readable eBay facet names. Values may be strings, pipe-delimited strings, or arrays of strings. |
| <code>exactMatch?</code> | <code>boolean</code> | When true, removes listings after eBay's explicit Results matching fewer words boundary before relevance cleanup. When the boundary is absent, rows are unchanged. This follows eBay's section split and does not independently prove semantic exactness. false preserves the existing broad-search cache and behavior. Leave it off for long, specific keywords (full card numbers, full set names): eBay often has no exact matches for those, so exactMatch=true can return no results even when the item sold many times.<br>**Default**: false |
| <code>relevance?</code> | <code>boolean</code> | When true, query-aware deterministic checks remove explicit pricing mismatches before one bounded semantic cleanup stage handles accessories, parts, and wrong models. Explicit query intent is preserved. false disables both relevance stages and returns broad valid matches. Baseline validation of item IDs, item URLs, prices, sold dates, and duplicate IDs always applies.<br>**Default**: true |
| <code>bestOfferPrice?</code> | <code>boolean</code> | When true, sold rows where bestOfferAccepted is true gain acceptedOfferPrice (the price the buyer actually paid, null unless found) and acceptedOfferPriceStatus (found, pending or not_available). soldPrice is never changed. US-dollar sales only; other currencies return not_available. No extra charge. Ignored with sold=false.<br>**Default**: false |
| <code>xCreditSource?</code> | <code>[XCreditSource](src/models/xcredit-source.ts)</code> | Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scrape.searchSoldListings(request)`

- **OnSuccess**: <code>[ScrapeResponse](src/models/scrape-response.ts)</code>
- **OnError**: throws <code>[Scrape.SearchSoldListingsError](src/resources/scrape.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scrape.searchSoldListings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScrapeResponse, Scrape.SearchSoldListingsError&gt;</code>, with `result.value` of type <code>[ScrapeResponse](src/models/scrape-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompSniperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startMaxSearch(request: Scrape.StartMaxSearchRequest, options?: RequestOptions): ApiPromise&lt;MaxJobAccepted, Scrape.StartMaxSearchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches up to 100 eBay result pages in the background. Each successful page uses one monthly request, then one purchased credit after monthly quota is exhausted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scrape.startMaxSearch({ body: { keyword: "some example string" } });
  // TODO: Handle 'response' of type MaxJobAccepted
} catch (err) {
  // TODO: Handle 'err' of type Scrape.StartMaxSearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scrape.startMaxSearch({ body: { keyword: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MaxJobAccepted
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xCreditSource?</code> | <code>[XCreditSource](src/models/xcredit-source.ts)</code> | Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged. |
| <code>idempotencyKey?</code> | <code>string</code> | Return the previously created job when a submission is retried. |
| <code>body</code> | <code>[MaxSearchRequest](src/models/max-search-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scrape.startMaxSearch(request)`

- **OnSuccess**: <code>[MaxJobAccepted](src/models/max-job-accepted.ts)</code>
- **OnError**: throws <code>[Scrape.StartMaxSearchError](src/resources/scrape.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scrape.startMaxSearch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MaxJobAccepted, Scrape.StartMaxSearchError&gt;</code>, with `result.value` of type <code>[MaxJobAccepted](src/models/max-job-accepted.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompSniperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ShippingRates

> Source: [ShippingRates](src/resources/shipping-rates.ts)

<details>
<summary><code>getShippingRateUsage(options?: RequestOptions): ApiPromise&lt;ShippingRateUsageResponse, ShippingRates.GetShippingRateUsageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the authenticated account's separate Shipping Rates plan, quota, usage, rate limit, and billing period.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shippingRates.getShippingRateUsage();
  // TODO: Handle 'response' of type ShippingRateUsageResponse
} catch (err) {
  // TODO: Handle 'err' of type ShippingRates.GetShippingRateUsageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shippingRates.getShippingRateUsage().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ShippingRateUsageResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shippingRates.getShippingRateUsage()`

- **OnSuccess**: <code>[ShippingRateUsageResponse](src/models/shipping-rate-usage-response.ts)</code>
- **OnError**: throws <code>[ShippingRates.GetShippingRateUsageError](src/resources/shipping-rates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shippingRates.getShippingRateUsage().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ShippingRateUsageResponse, ShippingRates.GetShippingRateUsageError&gt;</code>, with `result.value` of type <code>[ShippingRateUsageResponse](src/models/shipping-rate-usage-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompSniperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getShippingRates(request: ShippingRates.GetShippingRatesRequest, options?: RequestOptions): ApiPromise&lt;ShippingRateResponse, ShippingRates.GetShippingRatesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns quote-only shipping estimates for a US origin ZIP, US destination ZIP, package weight, and dimensions. Applicable services are returned in rates. Carrier-packaging and content-restricted services are returned in conditionalRates unless the caller explicitly confirms the requirement. Preserves retail and eBay discounted prices when available. Requires a separate Shipping Rates subscription and consumes one shipping request only when usable applicable rates are returned.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shippingRates.getShippingRates({
    body: {
      shipFrom: { postalCode: "some example string" },
      shipTo: { postalCode: "some example string" },
      package: { weight: { value: 1.5 }, dimensions: { length: 1.5, width: 1.5, height: 1.5 } },
    },
  });
  // TODO: Handle 'response' of type ShippingRateResponse
} catch (err) {
  // TODO: Handle 'err' of type ShippingRates.GetShippingRatesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shippingRates
  .getShippingRates({
    body: {
      shipFrom: { postalCode: "some example string" },
      shipTo: { postalCode: "some example string" },
      package: { weight: { value: 1.5 }, dimensions: { length: 1.5, width: 1.5, height: 1.5 } },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ShippingRateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotencyKey?</code> | <code>string</code> | Replays a completed identical quote without consuming another shipping request. Use a new key for a different request body. |
| <code>body</code> | <code>[ShippingRateRequest](src/models/shipping-rate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shippingRates.getShippingRates(request)`

- **OnSuccess**: <code>[ShippingRateResponse](src/models/shipping-rate-response.ts)</code>
- **OnError**: throws <code>[ShippingRates.GetShippingRatesError](src/resources/shipping-rates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shippingRates.getShippingRates(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ShippingRateResponse, ShippingRates.GetShippingRatesError&gt;</code>, with `result.value` of type <code>[ShippingRateResponse](src/models/shipping-rate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompSniperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SoldHistory

> Source: [SoldHistory](src/resources/sold-history.ts)

<details>
<summary><code>getV1ResearchSold(request: SoldHistory.GetV1ResearchSoldRequest, options?: RequestOptions): ApiPromise&lt;V1ResearchSoldResponse, SoldHistory.GetV1ResearchSoldError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Keyword search over eBay sold history going back up to 3 years (eBay's own limit), across eight eBay sites, on every plan including free. Each page of up to 50 listing-level rows uses one request; failed requests are free. Prices are USD. History has its own cap of 20 searches per minute per account (X-History-RateLimit-* headers, 429 history_rate_limited), on top of the plan limit.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.soldHistory.getV1ResearchSold({
    keyword: "nintendo switch oled",
    startDate: "2023-10-11",
    endDate: "2026-10-10",
  });
  // TODO: Handle 'response' of type V1ResearchSoldResponse
} catch (err) {
  // TODO: Handle 'err' of type SoldHistory.GetV1ResearchSoldError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.soldHistory
  .getV1ResearchSold({ keyword: "nintendo switch oled", startDate: "2023-10-11", endDate: "2026-10-10" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ResearchSoldResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>keyword</code> | <code>string</code> | - |
| <code>startDate</code> | <code>string</code> (date) | - |
| <code>endDate</code> | <code>string</code> (date) | - |
| <code>ebaySite?</code> | <code>[EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi](src/models/ebay-site-comp-sniper-marketplace-and-shipping-sold-history-api.ts)</code> | -<br>**Default**: "ebay.com" |
| <code>sort?</code> | <code>[Sort](src/models/sort.ts)</code> | -<br>**Default**: "quantityAscending" |
| <code>limit?</code> | <code>[Limit](src/models/limit.ts)</code> | -<br>**Default**: 50 |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>singleUnitOnly?</code> | <code>boolean</code> | -<br>**Default**: false |
| <code>allListingSites?</code> | <code>boolean</code> | -<br>**Default**: false |
| <code>relevance?</code> | <code>boolean</code> | -<br>**Default**: false |
| <code>xCreditSource?</code> | <code>[XCreditSource](src/models/xcredit-source.ts)</code> | Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.soldHistory.getV1ResearchSold(request)`

- **OnSuccess**: <code>[V1ResearchSoldResponse](src/models/v1-research-sold-response.ts)</code>
- **OnError**: throws <code>[SoldHistory.GetV1ResearchSoldError](src/resources/sold-history.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.soldHistory.getV1ResearchSold(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ResearchSoldResponse, SoldHistory.GetV1ResearchSoldError&gt;</code>, with `result.value` of type <code>[V1ResearchSoldResponse](src/models/v1-research-sold-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompSniperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Summary

> Source: [Summary](src/resources/summary.ts)

<details>
<summary><code>getPriceSummary(request: Summary.GetPriceSummaryRequest, options?: RequestOptions): ApiPromise&lt;SummaryResponse, Summary.GetPriceSummaryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Runs the same sold search and billing flow as /v1/scrape, but returns only the cleaned price summary, raw comparison evidence, result counts, and cache status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.summary.getPriceSummary({ keyword: "some example string" });
  // TODO: Handle 'response' of type SummaryResponse
} catch (err) {
  // TODO: Handle 'err' of type Summary.GetPriceSummaryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.summary.getPriceSummary({ keyword: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SummaryResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>keyword</code> | <code>string</code> | - |
| <code>count?</code> | <code>number</code> | -<br>**Default**: 240 |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>ebaySite?</code> | <code>[EbaySite](src/models/ebay-site.ts)</code> | -<br>**Default**: "ebay.com" |
| <code>categoryId?</code> | <code>string</code> | - |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | - |
| <code>minPrice?</code> | <code>number</code> | - |
| <code>maxPrice?</code> | <code>number</code> | - |
| <code>itemCondition?</code> | <code>[ItemCondition](src/models/item-condition.ts)</code> | - |
| <code>conditionId?</code> | <code>number</code> | - |
| <code>buyingFormat?</code> | <code>[BuyingFormat](src/models/buying-format.ts)</code> | - |
| <code>sellerType?</code> | <code>[SellerType](src/models/seller-type.ts)</code> | - |
| <code>soldAfter?</code> | <code>string</code> (date) | - |
| <code>soldBefore?</code> | <code>string</code> (date) | - |
| <code>aspectFilter?</code> | <code>string</code> | JSON object of eBay facet names and values. |
| <code>exactMatch?</code> | <code>boolean</code> | -<br>**Default**: false |
| <code>relevance?</code> | <code>boolean</code> | -<br>**Default**: true |
| <code>xCreditSource?</code> | <code>[XCreditSource](src/models/xcredit-source.ts)</code> | Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.summary.getPriceSummary(request)`

- **OnSuccess**: <code>[SummaryResponse](src/models/summary-response.ts)</code>
- **OnError**: throws <code>[Summary.GetPriceSummaryError](src/resources/summary.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.summary.getPriceSummary(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SummaryResponse, Summary.GetPriceSummaryError&gt;</code>, with `result.value` of type <code>[SummaryResponse](src/models/summary-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompSniperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TcGplayer

> Source: [TcGplayer](src/resources/tc-gplayer.ts)

<details>
<summary><code>getV1TcgplayerListings(request?: TcGplayer.GetV1TcgplayerListingsRequest, options?: RequestOptions): ApiPromise&lt;V1TcgplayerListingsResponse, TcGplayer.GetV1TcgplayerListingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Active TCGplayer listings for a product with price, shipping, condition and seller details. One successful call uses one request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tcGplayer.getV1TcgplayerListings({
    keyword: "charizard ex obsidian flames 223",
    condition: "Near Mint",
    variant: "Holofoil",
    language: "English",
  });
  // TODO: Handle 'response' of type V1TcgplayerListingsResponse
} catch (err) {
  // TODO: Handle 'err' of type TcGplayer.GetV1TcgplayerListingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tcGplayer
  .getV1TcgplayerListings({
    keyword: "charizard ex obsidian flames 223",
    condition: "Near Mint",
    variant: "Holofoil",
    language: "English",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1TcgplayerListingsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>keyword?</code> | <code>string</code> | - |
| <code>productId?</code> | <code>number</code> | - |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>count?</code> | <code>number</code> | -<br>**Default**: 25 |
| <code>condition?</code> | <code>string</code> | - |
| <code>variant?</code> | <code>string</code> | - |
| <code>language?</code> | <code>string</code> | - |
| <code>xCreditSource?</code> | <code>[XCreditSource](src/models/xcredit-source.ts)</code> | Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tcGplayer.getV1TcgplayerListings(request)`

- **OnSuccess**: <code>[V1TcgplayerListingsResponse](src/models/v1-tcgplayer-listings-response.ts)</code>
- **OnError**: throws <code>[TcGplayer.GetV1TcgplayerListingsError](src/resources/tc-gplayer.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tcGplayer.getV1TcgplayerListings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1TcgplayerListingsResponse, TcGplayer.GetV1TcgplayerListingsError&gt;</code>, with `result.value` of type <code>[V1TcgplayerListingsResponse](src/models/v1-tcgplayer-listings-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompSniperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getV1TcgplayerSold(request?: TcGplayer.GetV1TcgplayerSoldRequest, options?: RequestOptions): ApiPromise&lt;V1TcgplayerSoldResponse, TcGplayer.GetV1TcgplayerSoldError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Full TCGplayer completed-sale history for a product, with optional market price history. One successful call uses one request; repeat calls can return instantly from a short-lived saved copy; send fresh=true for a live fetch.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tcGplayer.getV1TcgplayerSold({
    keyword: "charizard ex obsidian flames 223",
    condition: "Near Mint",
    variant: "Holofoil",
    language: "English",
    soldAfter: "2026-10-14",
    soldBefore: "2026-10-15",
  });
  // TODO: Handle 'response' of type V1TcgplayerSoldResponse
} catch (err) {
  // TODO: Handle 'err' of type TcGplayer.GetV1TcgplayerSoldError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tcGplayer
  .getV1TcgplayerSold({
    keyword: "charizard ex obsidian flames 223",
    condition: "Near Mint",
    variant: "Holofoil",
    language: "English",
    soldAfter: "2026-10-14",
    soldBefore: "2026-10-15",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1TcgplayerSoldResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>keyword?</code> | <code>string</code> | - |
| <code>productId?</code> | <code>number</code> | - |
| <code>count?</code> | <code>number</code> | -<br>**Default**: 100 |
| <code>condition?</code> | <code>string</code> | - |
| <code>variant?</code> | <code>string</code> | - |
| <code>language?</code> | <code>string</code> | - |
| <code>history?</code> | <code>[History](src/models/history.ts)</code> | -<br>**Default**: "none" |
| <code>soldAfter?</code> | <code>string</code> (date) | - |
| <code>soldBefore?</code> | <code>string</code> (date) | - |
| <code>fresh?</code> | <code>boolean</code> | -<br>**Default**: false |
| <code>xCreditSource?</code> | <code>[XCreditSource](src/models/xcredit-source.ts)</code> | Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tcGplayer.getV1TcgplayerSold(request)`

- **OnSuccess**: <code>[V1TcgplayerSoldResponse](src/models/v1-tcgplayer-sold-response.ts)</code>
- **OnError**: throws <code>[TcGplayer.GetV1TcgplayerSoldError](src/resources/tc-gplayer.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tcGplayer.getV1TcgplayerSold(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1TcgplayerSoldResponse, TcGplayer.GetV1TcgplayerSoldError&gt;</code>, with `result.value` of type <code>[V1TcgplayerSoldResponse](src/models/v1-tcgplayer-sold-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompSniperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

