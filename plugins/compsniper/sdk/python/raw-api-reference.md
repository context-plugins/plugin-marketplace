# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [CompSniperClient](comp_sniper/client.py)

## Account

> Source: [Account](comp_sniper/apis/account.py)

<details>
<summary><code>def get_account_usage(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AccountUsageResponse, GetAccountUsageErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the authenticated account's monthly allowance, current usage, billing period, rate limit, purchased-credit balance, and total available requests.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.account.with_raw_response.get_account_usage()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccountUsageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAccountUsageErrorBody
```

**Async**

```python
result = await async_client.account.with_raw_response.get_account_usage()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccountUsageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAccountUsageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](comp_sniper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](comp_sniper/core/results.py)&#91;[AccountUsageResponse](comp_sniper/models/account_usage_response.py), [GetAccountUsageErrorBody](comp_sniper/errors/get_account_usage_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AccountUsageResponse](comp_sniper/models/account_usage_response.py)</code> -- Current account usage and credit balance.

**On `Failure`**: `error` is <code>[GetAccountUsageErrorBody](comp_sniper/errors/get_account_usage_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[ApiErrorModel](comp_sniper/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](comp_sniper/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## BestOfferPrices

> Source: [BestOfferPrices](comp_sniper/apis/best_offer_prices.py)

<details>
<summary><code>def get_best_offer_prices(item_ids: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1BestOfferPricesResponse, GetBestOfferPricesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the saved accepted Best Offer price for up to 100 eBay item IDs seen in earlier bestOfferPrice=true searches. Free: does not count against monthly requests. Uses the normal per-minute rate limit.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.best_offer_prices.with_raw_response.get_best_offer_prices("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1BestOfferPricesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBestOfferPricesErrorBody
```

**Async**

```python
result = await async_client.best_offer_prices.with_raw_response.get_best_offer_prices("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1BestOfferPricesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBestOfferPricesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>item_ids</code> | <code>str</code> | 1 to 100 eBay item IDs, separated by commas. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](comp_sniper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](comp_sniper/core/results.py)&#91;[V1BestOfferPricesResponse](comp_sniper/models/v1_best_offer_prices_response.py), [GetBestOfferPricesErrorBody](comp_sniper/errors/get_best_offer_prices_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1BestOfferPricesResponse](comp_sniper/models/v1_best_offer_prices_response.py)</code> -- One entry per item ID with acceptedOfferPrice (string or null) and acceptedOfferPriceStatus (found, pending, not_available or unknown).

**On `Failure`**: `error` is <code>[GetBestOfferPricesErrorBody](comp_sniper/errors/get_best_offer_prices_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ApiErrorModel](comp_sniper/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](comp_sniper/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## BulkSearch

> Source: [BulkSearch](comp_sniper/apis/bulk_search.py)

<details>
<summary><code>def bulk_search(body: BulkSearchRequest | BulkSearchRequestDict, *, x_credit_source: XCreditSourceOrStr | None = None, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EventStream[str], BulkSearchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search up to 20 unique keywords with at most three concurrent workers. If only part of the input fits the selected billing balance, the first keywords run and the remainder receive per-keyword quota_exceeded result events. Each successful keyword consumes one request; failures do not. Results stream as Server-Sent Events and may complete out of order.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bulk_search.with_raw_response.bulk_search(BulkSearchRequest(keywords=["some example string"]))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EventStream[str]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BulkSearchErrorBody
```

**Async**

```python
result = await async_client.bulk_search.with_raw_response.bulk_search(
    BulkSearchRequest(keywords=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncEventStream[str]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BulkSearchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkSearchRequest](comp_sniper/models/bulk_search_request.py) \| [BulkSearchRequestDict](comp_sniper/models/bulk_search_request.py)</code> | The request body. |
| <code>x_credit_source</code> | <code>[XCreditSourceOrStr](comp_sniper/models/enums/x_credit_source.py) \| None</code> | Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged.<br>**Default**: <code>None</code> |
| <code>idempotency_key</code> | <code>str \| None</code> | Replay a completed run with the identical request body without repeating searches or consuming quota.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](comp_sniper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](comp_sniper/core/results.py)&#91;EventStream&#91;str&#93;, [BulkSearchErrorBody](comp_sniper/errors/bulk_search_error.py)&#93;</code>

**On `Success`**: `payload` is <code>EventStream&#91;str&#93;</code>, its body not yet read -- SSE stream containing start, result, and complete events.

**On `Failure`**: `error` is <code>[BulkSearchErrorBody](comp_sniper/errors/bulk_search_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 409, 429 | <code>[ApiErrorModel](comp_sniper/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](comp_sniper/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def download_bulk_search_csv(run_id: UUID, *, index: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[str, DownloadBulkSearchCsvErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Download every successful keyword in one CSV, or pass index for one submitted keyword. Requires the same account's bearer credential.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bulk_search.with_raw_response.download_bulk_search_csv(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type str
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DownloadBulkSearchCsvErrorBody
```

**Async**

```python
result = await async_client.bulk_search.with_raw_response.download_bulk_search_csv(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type str
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DownloadBulkSearchCsvErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>run_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>index</code> | <code>int \| None</code> | Original zero-based keyword index. Omit for a combined CSV.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](comp_sniper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](comp_sniper/core/results.py)&#91;str, [DownloadBulkSearchCsvErrorBody](comp_sniper/errors/download_bulk_search_csv_error.py)&#93;</code>

**On `Success`**: `payload` is <code>str</code> -- CSV export.

**On `Failure`**: `error` is <code>[DownloadBulkSearchCsvErrorBody](comp_sniper/errors/download_bulk_search_csv_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 409 | <code>[ApiErrorModel](comp_sniper/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](comp_sniper/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Cards

> Source: [Cards](comp_sniper/apis/cards.py)

<details>
<summary><code>def cancel_card_batch(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, CancelCardBatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `DELETE` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.cards.with_raw_response.cancel_card_batch(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelCardBatchErrorBody
```

**Async**

```python
result = await async_client.cards.with_raw_response.cancel_card_batch(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelCardBatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>job_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](comp_sniper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](comp_sniper/core/results.py)&#91;None, [CancelCardBatchErrorBody](comp_sniper/errors/cancel_card_batch_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[CancelCardBatchErrorBody](comp_sniper/errors/cancel_card_batch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[ApiErrorModel](comp_sniper/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](comp_sniper/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_card_batch(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CardBatchJob, GetCardBatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.cards.with_raw_response.get_card_batch(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CardBatchJob
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCardBatchErrorBody
```

**Async**

```python
result = await async_client.cards.with_raw_response.get_card_batch(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CardBatchJob
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCardBatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>job_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](comp_sniper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](comp_sniper/core/results.py)&#91;[CardBatchJob](comp_sniper/models/card_batch_job.py), [GetCardBatchErrorBody](comp_sniper/errors/get_card_batch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CardBatchJob](comp_sniper/models/card_batch_job.py)</code> -- Current progress, including completed per-card results.

**On `Failure`**: `error` is <code>[GetCardBatchErrorBody](comp_sniper/errors/get_card_batch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[ApiErrorModel](comp_sniper/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](comp_sniper/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def submit_card_batch(body: CardBatchRequest | CardBatchRequestDict, *, x_credit_source: XCreditSourceOrStr | None = None, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CardBatchAccepted, SubmitCardBatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submit up to 100 cards in one HTTP request. Cards are processed asynchronously and sequentially. Each successfully processed card consumes one normal monthly request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.cards.with_raw_response.submit_card_batch(CardBatchRequest(cards=[CardInput()]))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CardBatchAccepted
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SubmitCardBatchErrorBody
```

**Async**

```python
result = await async_client.cards.with_raw_response.submit_card_batch(CardBatchRequest(cards=[CardInput()]))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CardBatchAccepted
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SubmitCardBatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CardBatchRequest](comp_sniper/models/card_batch_request.py) \| [CardBatchRequestDict](comp_sniper/models/card_batch_request.py)</code> | The request body. |
| <code>x_credit_source</code> | <code>[XCreditSourceOrStr](comp_sniper/models/enums/x_credit_source.py) \| None</code> | Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged.<br>**Default**: <code>None</code> |
| <code>idempotency_key</code> | <code>str \| None</code> | Safely retry a submission without creating a duplicate job.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](comp_sniper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](comp_sniper/core/results.py)&#91;[CardBatchAccepted](comp_sniper/models/card_batch_accepted.py), [SubmitCardBatchErrorBody](comp_sniper/errors/submit_card_batch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CardBatchAccepted](comp_sniper/models/card_batch_accepted.py)</code> -- Batch accepted.

**On `Failure`**: `error` is <code>[SubmitCardBatchErrorBody](comp_sniper/errors/submit_card_batch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 409, 429 | <code>[ApiErrorModel](comp_sniper/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](comp_sniper/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Depop

> Source: [Depop](comp_sniper/apis/depop.py)

<details>
<summary><code>def get_v1_depop_listings(keyword: str, *, country: CountryOrStr | None = Country.US, count: int | None = 24, cursor: str | None = None, x_credit_source: XCreditSourceOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1DepopListingsResponse, GetV1DepopListingsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Current Depop listings in the US, UK, Australia or Canada with asking price, original price before a discount, shipping, brand, size, condition and seller. Page with nextCursor. One successful call uses one request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.depop.with_raw_response.get_v1_depop_listings("vintage levis 501")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DepopListingsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetV1DepopListingsErrorBody
```

**Async**

```python
result = await async_client.depop.with_raw_response.get_v1_depop_listings("vintage levis 501")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DepopListingsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetV1DepopListingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>keyword</code> | <code>str</code> | Value sent with the request. |
| <code>country</code> | <code>[CountryOrStr](comp_sniper/models/enums/country.py) \| None</code> | Value sent with the request.<br>**Default**: <code>Country.US</code> |
| <code>count</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>24</code> |
| <code>cursor</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_credit_source</code> | <code>[XCreditSourceOrStr](comp_sniper/models/enums/x_credit_source.py) \| None</code> | Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](comp_sniper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](comp_sniper/core/results.py)&#91;[V1DepopListingsResponse](comp_sniper/models/v1_depop_listings_response.py), [GetV1DepopListingsErrorBody](comp_sniper/errors/get_v1_depop_listings_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1DepopListingsResponse](comp_sniper/models/v1_depop_listings_response.py)</code> -- Active listings

**On `Failure`**: `error` is <code>[GetV1DepopListingsErrorBody](comp_sniper/errors/get_v1_depop_listings_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[V1DepopListings400Error1](comp_sniper/models/v1_depop_listings400_error1.py)</code> |
| 401 | <code>[V1DepopListings401Error1](comp_sniper/models/v1_depop_listings401_error1.py)</code> |
| 429 | <code>[V1DepopListings429Error1](comp_sniper/models/v1_depop_listings429_error1.py)</code> |
| 502 | <code>[V1DepopListings502Error1](comp_sniper/models/v1_depop_listings502_error1.py)</code> |
| 503 | <code>[V1DepopListings503Error1](comp_sniper/models/v1_depop_listings503_error1.py)</code> |
| anything unmapped | <code>[RawError](comp_sniper/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Grailed

> Source: [Grailed](comp_sniper/apis/grailed.py)

<details>
<summary><code>def get_v1_grailed_listings(keyword: str, *, department: DepartmentOrStr | None = Department.ANY, condition: ConditionOrStr | None = Condition.ANY, min_price: float | None = None, max_price: float | None = None, count: int | None = 40, page: int | None = 1, sort_by: SortBy1OrStr | None = SortBy1.DEFAULT, x_credit_source: XCreditSourceOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1GrailedListingsResponse, GetV1GrailedListingsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Current Grailed listings with asking price, US shipping, offers, size, condition and designer. One successful call uses one request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.grailed.with_raw_response.get_v1_grailed_listings("supreme box logo hoodie")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1GrailedListingsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetV1GrailedListingsErrorBody
```

**Async**

```python
result = await async_client.grailed.with_raw_response.get_v1_grailed_listings("supreme box logo hoodie")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1GrailedListingsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetV1GrailedListingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>keyword</code> | <code>str</code> | Value sent with the request. |
| <code>department</code> | <code>[DepartmentOrStr](comp_sniper/models/enums/department.py) \| None</code> | Value sent with the request.<br>**Default**: <code>Department.ANY</code> |
| <code>condition</code> | <code>[ConditionOrStr](comp_sniper/models/enums/condition.py) \| None</code> | Value sent with the request.<br>**Default**: <code>Condition.ANY</code> |
| <code>min_price</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>max_price</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>40</code> |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>1</code> |
| <code>sort_by</code> | <code>[SortBy1OrStr](comp_sniper/models/enums/sort_by1.py) \| None</code> | Value sent with the request.<br>**Default**: <code>SortBy1.DEFAULT</code> |
| <code>x_credit_source</code> | <code>[XCreditSourceOrStr](comp_sniper/models/enums/x_credit_source.py) \| None</code> | Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](comp_sniper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](comp_sniper/core/results.py)&#91;[V1GrailedListingsResponse](comp_sniper/models/v1_grailed_listings_response.py), [GetV1GrailedListingsErrorBody](comp_sniper/errors/get_v1_grailed_listings_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1GrailedListingsResponse](comp_sniper/models/v1_grailed_listings_response.py)</code> -- Active listings

**On `Failure`**: `error` is <code>[GetV1GrailedListingsErrorBody](comp_sniper/errors/get_v1_grailed_listings_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[V1GrailedListings400Error1](comp_sniper/models/v1_grailed_listings400_error1.py)</code> |
| 401 | <code>[V1GrailedListings401Error1](comp_sniper/models/v1_grailed_listings401_error1.py)</code> |
| 429 | <code>[V1GrailedListings429Error1](comp_sniper/models/v1_grailed_listings429_error1.py)</code> |
| 502 | <code>[V1GrailedListings502Error1](comp_sniper/models/v1_grailed_listings502_error1.py)</code> |
| 503 | <code>[V1GrailedListings503Error1](comp_sniper/models/v1_grailed_listings503_error1.py)</code> |
| anything unmapped | <code>[RawError](comp_sniper/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_v1_grailed_sold(keyword: str, *, department: DepartmentOrStr | None = Department.ANY, condition: ConditionOrStr | None = Condition.ANY, min_price: float | None = None, max_price: float | None = None, count: int | None = 40, page: int | None = 1, sort_by: SortByOrStr | None = SortBy.RECENT, x_credit_source: XCreditSourceOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1GrailedSoldResponse, GetV1GrailedSoldErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Grailed sold listings with the price the buyer paid (accepted offers included), the asking price it sold from, sold date, shipping paid, size, condition and designer. Up to 100 rows per page and 1,000 per search. One successful call uses one request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.grailed.with_raw_response.get_v1_grailed_sold("supreme box logo hoodie")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1GrailedSoldResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetV1GrailedSoldErrorBody
```

**Async**

```python
result = await async_client.grailed.with_raw_response.get_v1_grailed_sold("supreme box logo hoodie")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1GrailedSoldResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetV1GrailedSoldErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>keyword</code> | <code>str</code> | Value sent with the request. |
| <code>department</code> | <code>[DepartmentOrStr](comp_sniper/models/enums/department.py) \| None</code> | Value sent with the request.<br>**Default**: <code>Department.ANY</code> |
| <code>condition</code> | <code>[ConditionOrStr](comp_sniper/models/enums/condition.py) \| None</code> | Value sent with the request.<br>**Default**: <code>Condition.ANY</code> |
| <code>min_price</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>max_price</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>40</code> |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>1</code> |
| <code>sort_by</code> | <code>[SortByOrStr](comp_sniper/models/enums/sort_by.py) \| None</code> | Value sent with the request.<br>**Default**: <code>SortBy.RECENT</code> |
| <code>x_credit_source</code> | <code>[XCreditSourceOrStr](comp_sniper/models/enums/x_credit_source.py) \| None</code> | Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](comp_sniper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](comp_sniper/core/results.py)&#91;[V1GrailedSoldResponse](comp_sniper/models/v1_grailed_sold_response.py), [GetV1GrailedSoldErrorBody](comp_sniper/errors/get_v1_grailed_sold_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1GrailedSoldResponse](comp_sniper/models/v1_grailed_sold_response.py)</code> -- Sold listings

**On `Failure`**: `error` is <code>[GetV1GrailedSoldErrorBody](comp_sniper/errors/get_v1_grailed_sold_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[V1GrailedSold400Error1](comp_sniper/models/v1_grailed_sold400_error1.py)</code> |
| 401 | <code>[V1GrailedSold401Error1](comp_sniper/models/v1_grailed_sold401_error1.py)</code> |
| 429 | <code>[V1GrailedSold429Error1](comp_sniper/models/v1_grailed_sold429_error1.py)</code> |
| 502 | <code>[V1GrailedSold502Error1](comp_sniper/models/v1_grailed_sold502_error1.py)</code> |
| 503 | <code>[V1GrailedSold503Error1](comp_sniper/models/v1_grailed_sold503_error1.py)</code> |
| anything unmapped | <code>[RawError](comp_sniper/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Mercari

> Source: [Mercari](comp_sniper/apis/mercari.py)

<details>
<summary><code>def search_mercari_listings(keyword: str, *, page: int | None = 1, count: int | None = 100, sort_order: SortOrderCompSniperMarketplaceAndShippingMercariApiOrStr | None = SortOrderCompSniperMarketplaceAndShippingMercariApi.BEST_MATCH, min_price: float | None = None, max_price: float | None = None, item_condition: ItemConditionCompSniperMarketplaceAndShippingMercariApiOrStr | None = ItemConditionCompSniperMarketplaceAndShippingMercariApi.ANY, category_id: str | None = None, brand_id: str | None = None, sold: SoldOrStr | None = Sold.TRUE, include_listed_at: IncludeListedAtOrStr | None = IncludeListedAt.FALSE, x_credit_source: XCreditSourceOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1MercariResponse, SearchMercariListingsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns one page of public Mercari sold or active listings through a managed anonymous guest session. Authentication, rate limits, monthly quota, purchased credits, request IDs, and cache headers match the other CompSniper endpoints. Each successful page uses one CompSniper request and returns up to 100 items.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.mercari.with_raw_response.search_mercari_listings(
    "pokemon cards",
    page=1,
    count=100,
    min_price=10,
    max_price=100,
    sold=Sold.TRUE,
    include_listed_at=IncludeListedAt.TRUE,
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MercariResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchMercariListingsErrorBody
```

**Async**

```python
result = await async_client.mercari.with_raw_response.search_mercari_listings(
    "pokemon cards",
    page=1,
    count=100,
    min_price=10,
    max_price=100,
    sold=Sold.TRUE,
    include_listed_at=IncludeListedAt.TRUE,
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MercariResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchMercariListingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>keyword</code> | <code>str</code> | Value sent with the request. |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>1</code> |
| <code>count</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>100</code> |
| <code>sort_order</code> | <code>[SortOrderCompSniperMarketplaceAndShippingMercariApiOrStr](comp_sniper/models/enums/sort_order_comp_sniper_marketplace_and_shipping_mercari_api.py) \| None</code> | Sort order. recentlySold maps to Mercari's current Recently sold option. mostPopular is accepted as a compatibility alias for recentlySold.<br>**Default**: <code>SortOrderCompSniperMarketplaceAndShippingMercariApi.BEST_MATCH</code> |
| <code>min_price</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>max_price</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>item_condition</code> | <code>[ItemConditionCompSniperMarketplaceAndShippingMercariApiOrStr](comp_sniper/models/enums/item_condition_comp_sniper_marketplace_and_shipping_mercari_api.py) \| None</code> | Value sent with the request.<br>**Default**: <code>ItemConditionCompSniperMarketplaceAndShippingMercariApi.ANY</code> |
| <code>category_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>brand_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sold</code> | <code>[SoldOrStr](comp_sniper/models/enums/sold.py) \| None</code> | Value sent with the request.<br>**Default**: <code>Sold.TRUE</code> |
| <code>include_listed_at</code> | <code>[IncludeListedAtOrStr](comp_sniper/models/enums/include_listed_at.py) \| None</code> | Value sent with the request.<br>**Default**: <code>IncludeListedAt.FALSE</code> |
| <code>x_credit_source</code> | <code>[XCreditSourceOrStr](comp_sniper/models/enums/x_credit_source.py) \| None</code> | Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](comp_sniper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](comp_sniper/core/results.py)&#91;[V1MercariResponse](comp_sniper/models/v1_mercari_response.py), [SearchMercariListingsErrorBody](comp_sniper/errors/search_mercari_listings_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1MercariResponse](comp_sniper/models/v1_mercari_response.py)</code> -- Mercari listings

**On `Failure`**: `error` is <code>[SearchMercariListingsErrorBody](comp_sniper/errors/search_mercari_listings_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[V1Mercari400Error1](comp_sniper/models/v1_mercari400_error1.py)</code> |
| 401 | <code>[V1Mercari401Error1](comp_sniper/models/v1_mercari401_error1.py)</code> |
| 429 | <code>[V1MercariResponse12](comp_sniper/models/unions/v1_mercari_response12.py)</code> |
| 500 | <code>[V1Mercari500Error1](comp_sniper/models/v1_mercari500_error1.py)</code> |
| 502 | <code>[V1Mercari502Error1](comp_sniper/models/v1_mercari502_error1.py)</code> |
| 503 | <code>[ApiErrorModel](comp_sniper/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](comp_sniper/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Psa

> Source: [Psa](comp_sniper/apis/psa.py)

<details>
<summary><code>def get_psa_card(*, spec_id: str | None = None, keyword: str | None = None, count: int | None = 10, time_range: int | None = 0, grade: str | None = None, x_credit_source: XCreditSourceOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1PsaCardResponse, GetPsaCardErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

For one PSA card: sold prices by grade (sales, average, min, max, latest), recent individual sales with grading company, grade and cert number, the population report with gem rate, and a price summary. Send specId from /v1/psa/search, or a keyword and the best match is used (others listed in otherMatches). One successful call uses one request; a card PSA does not have returns 404 not_found and is not charged.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.psa.with_raw_response.get_psa_card(
    spec_id="5217539", keyword="1999 pokemon base set charizard 4", grade="10"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PsaCardResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPsaCardErrorBody
```

**Async**

```python
result = await async_client.psa.with_raw_response.get_psa_card(
    spec_id="5217539", keyword="1999 pokemon base set charizard 4", grade="10"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PsaCardResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPsaCardErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>spec_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>keyword</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>10</code> |
| <code>time_range</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>0</code> |
| <code>grade</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_credit_source</code> | <code>[XCreditSourceOrStr](comp_sniper/models/enums/x_credit_source.py) \| None</code> | Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](comp_sniper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](comp_sniper/core/results.py)&#91;[V1PsaCardResponse](comp_sniper/models/v1_psa_card_response.py), [GetPsaCardErrorBody](comp_sniper/errors/get_psa_card_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1PsaCardResponse](comp_sniper/models/v1_psa_card_response.py)</code> -- Prices by grade, sales and population

**On `Failure`**: `error` is <code>[GetPsaCardErrorBody](comp_sniper/errors/get_psa_card_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[V1PsaCard400Error1](comp_sniper/models/v1_psa_card400_error1.py)</code> |
| 401 | <code>[V1PsaCard401Error1](comp_sniper/models/v1_psa_card401_error1.py)</code> |
| 404 | <code>[V1PsaCard404Error1](comp_sniper/models/v1_psa_card404_error1.py)</code> |
| 429 | <code>[V1PsaCard429Error1](comp_sniper/models/v1_psa_card429_error1.py)</code> |
| 502 | <code>[V1PsaCard502Error1](comp_sniper/models/v1_psa_card502_error1.py)</code> |
| 503 | <code>[V1PsaCard503Error1](comp_sniper/models/v1_psa_card503_error1.py)</code> |
| anything unmapped | <code>[RawError](comp_sniper/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_psa_set_population(*, heading_id: str | None = None, url: str | None = None, x_credit_source: XCreditSourceOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1PsaSetResponse, GetPsaSetPopulationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One call returns every card in a PSA set with its number, name, variety, specId and population for every grade (Authentic, then 1 to 10 including half grades), plus totals for the set. Send headingId from /v1/psa/sets or the set's PSA population page url. Large sets can take 10 to 20 seconds.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.psa.with_raw_response.get_psa_set_population(
    heading_id="57801", url="https://www.psacard.com/pop/tcg-cards/1999/pokemon-game/57801"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PsaSetResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPsaSetPopulationErrorBody
```

**Async**

```python
result = await async_client.psa.with_raw_response.get_psa_set_population(
    heading_id="57801", url="https://www.psacard.com/pop/tcg-cards/1999/pokemon-game/57801"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PsaSetResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPsaSetPopulationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>heading_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>url</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_credit_source</code> | <code>[XCreditSourceOrStr](comp_sniper/models/enums/x_credit_source.py) \| None</code> | Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](comp_sniper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](comp_sniper/core/results.py)&#91;[V1PsaSetResponse](comp_sniper/models/v1_psa_set_response.py), [GetPsaSetPopulationErrorBody](comp_sniper/errors/get_psa_set_population_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1PsaSetResponse](comp_sniper/models/v1_psa_set_response.py)</code> -- Set population

**On `Failure`**: `error` is <code>[GetPsaSetPopulationErrorBody](comp_sniper/errors/get_psa_set_population_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[V1PsaSet400Error1](comp_sniper/models/v1_psa_set400_error1.py)</code> |
| 401 | <code>[V1PsaSet401Error1](comp_sniper/models/v1_psa_set401_error1.py)</code> |
| 429 | <code>[V1PsaSet429Error1](comp_sniper/models/v1_psa_set429_error1.py)</code> |
| 502 | <code>[V1PsaSet502Error1](comp_sniper/models/v1_psa_set502_error1.py)</code> |
| 503 | <code>[V1PsaSet503Error1](comp_sniper/models/v1_psa_set503_error1.py)</code> |
| anything unmapped | <code>[RawError](comp_sniper/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_psa_sets(*, game: GameOrStr | None = None, keyword: str | None = None, year: str | None = None, count: int | None = 25, page: int | None = 1, x_credit_source: XCreditSourceOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1PsaSetsResponse, ListPsaSetsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a game to list every PSA set for that game, newest first and paged; add keyword or year to narrow it. Without game, keyword searches set names across all games. Each set has the headingId used by /v1/psa/set.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.psa.with_raw_response.list_psa_sets(keyword="151")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PsaSetsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPsaSetsErrorBody
```

**Async**

```python
result = await async_client.psa.with_raw_response.list_psa_sets(keyword="151")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PsaSetsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPsaSetsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>game</code> | <code>[GameOrStr](comp_sniper/models/enums/game.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>keyword</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>year</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>25</code> |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>1</code> |
| <code>x_credit_source</code> | <code>[XCreditSourceOrStr](comp_sniper/models/enums/x_credit_source.py) \| None</code> | Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](comp_sniper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](comp_sniper/core/results.py)&#91;[V1PsaSetsResponse](comp_sniper/models/v1_psa_sets_response.py), [ListPsaSetsErrorBody](comp_sniper/errors/list_psa_sets_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1PsaSetsResponse](comp_sniper/models/v1_psa_sets_response.py)</code> -- PSA sets

**On `Failure`**: `error` is <code>[ListPsaSetsErrorBody](comp_sniper/errors/list_psa_sets_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[V1PsaSets400Error1](comp_sniper/models/v1_psa_sets400_error1.py)</code> |
| 401 | <code>[V1PsaSets401Error1](comp_sniper/models/v1_psa_sets401_error1.py)</code> |
| 429 | <code>[V1PsaSets429Error1](comp_sniper/models/v1_psa_sets429_error1.py)</code> |
| 502 | <code>[V1PsaSets502Error1](comp_sniper/models/v1_psa_sets502_error1.py)</code> |
| 503 | <code>[V1PsaSets503Error1](comp_sniper/models/v1_psa_sets503_error1.py)</code> |
| anything unmapped | <code>[RawError](comp_sniper/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_psa_cards(keyword: str, *, count: int | None = 10, page: int | None = 1, x_credit_source: XCreditSourceOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1PsaSearchResponse, SearchPsaCardsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search PSA's card catalog (sports and trading cards) by name, set and number. Each match has the specId used by /v1/psa/card. One successful call uses one request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.psa.with_raw_response.search_psa_cards("charizard base set")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PsaSearchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchPsaCardsErrorBody
```

**Async**

```python
result = await async_client.psa.with_raw_response.search_psa_cards("charizard base set")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PsaSearchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchPsaCardsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>keyword</code> | <code>str</code> | Value sent with the request. |
| <code>count</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>10</code> |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>1</code> |
| <code>x_credit_source</code> | <code>[XCreditSourceOrStr](comp_sniper/models/enums/x_credit_source.py) \| None</code> | Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](comp_sniper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](comp_sniper/core/results.py)&#91;[V1PsaSearchResponse](comp_sniper/models/v1_psa_search_response.py), [SearchPsaCardsErrorBody](comp_sniper/errors/search_psa_cards_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1PsaSearchResponse](comp_sniper/models/v1_psa_search_response.py)</code> -- Matching PSA cards

**On `Failure`**: `error` is <code>[SearchPsaCardsErrorBody](comp_sniper/errors/search_psa_cards_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[V1PsaSearch400Error1](comp_sniper/models/v1_psa_search400_error1.py)</code> |
| 401 | <code>[V1PsaSearch401Error1](comp_sniper/models/v1_psa_search401_error1.py)</code> |
| 429 | <code>[V1PsaSearch429Error1](comp_sniper/models/v1_psa_search429_error1.py)</code> |
| 502 | <code>[V1PsaSearch502Error1](comp_sniper/models/v1_psa_search502_error1.py)</code> |
| 503 | <code>[V1PsaSearch503Error1](comp_sniper/models/v1_psa_search503_error1.py)</code> |
| anything unmapped | <code>[RawError](comp_sniper/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Poshmark

> Source: [Poshmark](comp_sniper/apis/poshmark.py)

<details>
<summary><code>def search_poshmark_sold(keyword: str, *, page: int | None = 1, min_price: float | None = None, max_price: float | None = None, department: DepartmentCompSniperMarketplaceAndShippingPoshmarkApiOrStr | None = DepartmentCompSniperMarketplaceAndShippingPoshmarkApi.ALL, condition: ConditionCompSniperMarketplaceAndShippingPoshmarkApiOrStr | None = ConditionCompSniperMarketplaceAndShippingPoshmarkApi.ALL, brand: str | None = None, sort_by: SortByCompSniperMarketplaceAndShippingPoshmarkApiOrStr | None = SortByCompSniperMarketplaceAndShippingPoshmarkApi.SOLD_RECENTLY, enrich: EnrichOrStr | None = Enrich.FALSE, x_credit_source: XCreditSourceOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1PoshmarkSoldResponse, SearchPoshmarkSoldErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns one native page of public Poshmark sold listings. Authentication, rate limits, monthly quota, purchased credits, request IDs, and cache headers match the other CompSniper endpoints. Each successful page uses one CompSniper request, including enrich=true. The native page ceiling is 48 listings.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.poshmark.with_raw_response.search_poshmark_sold(
    "louis vuitton neverfull", page=1, min_price=50, max_price=500, brand="Louis Vuitton", enrich=Enrich.FALSE
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PoshmarkSoldResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchPoshmarkSoldErrorBody
```

**Async**

```python
result = await async_client.poshmark.with_raw_response.search_poshmark_sold(
    "louis vuitton neverfull", page=1, min_price=50, max_price=500, brand="Louis Vuitton", enrich=Enrich.FALSE
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PoshmarkSoldResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchPoshmarkSoldErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>keyword</code> | <code>str</code> | Value sent with the request. |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>1</code> |
| <code>min_price</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>max_price</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>department</code> | <code>[DepartmentCompSniperMarketplaceAndShippingPoshmarkApiOrStr](comp_sniper/models/enums/department_comp_sniper_marketplace_and_shipping_poshmark_api.py) \| None</code> | Value sent with the request.<br>**Default**: <code>DepartmentCompSniperMarketplaceAndShippingPoshmarkApi.ALL</code> |
| <code>condition</code> | <code>[ConditionCompSniperMarketplaceAndShippingPoshmarkApiOrStr](comp_sniper/models/enums/condition_comp_sniper_marketplace_and_shipping_poshmark_api.py) \| None</code> | Value sent with the request.<br>**Default**: <code>ConditionCompSniperMarketplaceAndShippingPoshmarkApi.ALL</code> |
| <code>brand</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort_by</code> | <code>[SortByCompSniperMarketplaceAndShippingPoshmarkApiOrStr](comp_sniper/models/enums/sort_by_comp_sniper_marketplace_and_shipping_poshmark_api.py) \| None</code> | Value sent with the request.<br>**Default**: <code>SortByCompSniperMarketplaceAndShippingPoshmarkApi.SOLD_RECENTLY</code> |
| <code>enrich</code> | <code>[EnrichOrStr](comp_sniper/models/enums/enrich.py) \| None</code> | Adds public seller location, approximate sold-count evidence, and average ship time. Sold date, listed date, colors, description, category, and condition are already returned when present in the native search response. This still uses one CompSniper request.<br>**Default**: <code>Enrich.FALSE</code> |
| <code>x_credit_source</code> | <code>[XCreditSourceOrStr](comp_sniper/models/enums/x_credit_source.py) \| None</code> | Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](comp_sniper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](comp_sniper/core/results.py)&#91;[V1PoshmarkSoldResponse](comp_sniper/models/v1_poshmark_sold_response.py), [SearchPoshmarkSoldErrorBody](comp_sniper/errors/search_poshmark_sold_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1PoshmarkSoldResponse](comp_sniper/models/v1_poshmark_sold_response.py)</code> -- Sold listings

**On `Failure`**: `error` is <code>[SearchPoshmarkSoldErrorBody](comp_sniper/errors/search_poshmark_sold_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[V1PoshmarkSold400Error1](comp_sniper/models/v1_poshmark_sold400_error1.py)</code> |
| 401 | <code>[V1PoshmarkSold401Error1](comp_sniper/models/v1_poshmark_sold401_error1.py)</code> |
| 429 | <code>[V1PoshmarkSoldResponse12](comp_sniper/models/unions/v1_poshmark_sold_response12.py)</code> |
| 500 | <code>[V1PoshmarkSold500Error1](comp_sniper/models/v1_poshmark_sold500_error1.py)</code> |
| 502 | <code>[V1PoshmarkSold502Error1](comp_sniper/models/v1_poshmark_sold502_error1.py)</code> |
| 503 | <code>[V1PoshmarkSold503Error1](comp_sniper/models/v1_poshmark_sold503_error1.py)</code> |
| anything unmapped | <code>[RawError](comp_sniper/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Scrape

> Source: [Scrape](comp_sniper/apis/scrape.py)

<details>
<summary><code>def browse_sold_listings_by_category(category_id: str, *, count: int | None = 240, page: int | None = 1, ebay_site: EbaySiteOrStr | None = EbaySite.EBAY_COM, sort_order: SortOrderOrStr | None = None, item_condition: ItemConditionOrStr | None = None, condition_id: int | None = None, buying_format: BuyingFormatOrStr | None = None, seller_type: SellerTypeOrStr | None = None, min_price: float | None = None, max_price: float | None = None, aspect_filter: str | None = None, x_credit_source: XCreditSourceOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ScrapeResponse, BrowseSoldListingsByCategoryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns completed eBay sales from one category without requiring a keyword. Uses the same authentication, quota, filtering, response shape, and error contract as /v1/scrape.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.scrape.with_raw_response.browse_sold_listings_by_category("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScrapeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BrowseSoldListingsByCategoryErrorBody
```

**Async**

```python
result = await async_client.scrape.with_raw_response.browse_sold_listings_by_category("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScrapeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BrowseSoldListingsByCategoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>category_id</code> | <code>str</code> | Positive numeric eBay category id (_sacat). |
| <code>count</code> | <code>int \| None</code> | Maximum items to return per page. This is a ceiling; fewer valid rows may remain after baseline validation and filtering.<br>**Default**: <code>240</code> |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>1</code> |
| <code>ebay_site</code> | <code>[EbaySiteOrStr](comp_sniper/models/enums/ebay_site.py) \| None</code> | Value sent with the request.<br>**Default**: <code>EbaySite.EBAY_COM</code> |
| <code>sort_order</code> | <code>[SortOrderOrStr](comp_sniper/models/enums/sort_order.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>item_condition</code> | <code>[ItemConditionOrStr](comp_sniper/models/enums/item_condition.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>condition_id</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>buying_format</code> | <code>[BuyingFormatOrStr](comp_sniper/models/enums/buying_format.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>seller_type</code> | <code>[SellerTypeOrStr](comp_sniper/models/enums/seller_type.py) \| None</code> | EU marketplaces only.<br>**Default**: <code>None</code> |
| <code>min_price</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>max_price</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>aspect_filter</code> | <code>str \| None</code> | JSON object of human-readable eBay facets.<br>**Default**: <code>None</code> |
| <code>x_credit_source</code> | <code>[XCreditSourceOrStr](comp_sniper/models/enums/x_credit_source.py) \| None</code> | Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](comp_sniper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](comp_sniper/core/results.py)&#91;[ScrapeResponse](comp_sniper/models/scrape_response.py), [BrowseSoldListingsByCategoryErrorBody](comp_sniper/errors/browse_sold_listings_by_category_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ScrapeResponse](comp_sniper/models/scrape_response.py)</code> -- Category sold listings and price summary. keyword is an empty string.

**On `Failure`**: `error` is <code>[BrowseSoldListingsByCategoryErrorBody](comp_sniper/errors/browse_sold_listings_by_category_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 502, 503 | <code>[ApiErrorModel](comp_sniper/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](comp_sniper/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cancel_max_search(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MaxCancelResponse, CancelMaxSearchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `DELETE` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.scrape.with_raw_response.cancel_max_search(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MaxCancelResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelMaxSearchErrorBody
```

**Async**

```python
result = await async_client.scrape.with_raw_response.cancel_max_search(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MaxCancelResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelMaxSearchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>job_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](comp_sniper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](comp_sniper/core/results.py)&#91;[MaxCancelResponse](comp_sniper/models/max_cancel_response.py), [CancelMaxSearchErrorBody](comp_sniper/errors/cancel_max_search_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MaxCancelResponse](comp_sniper/models/max_cancel_response.py)</code> -- Cancellation requested or existing terminal status returned.

**On `Failure`**: `error` is <code>[CancelMaxSearchErrorBody](comp_sniper/errors/cancel_max_search_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[ApiErrorModel](comp_sniper/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](comp_sniper/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def download_max_search_csv(job_id: UUID, token: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[str, DownloadMaxSearchCsvErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Downloads the stored job result using the signed token returned for download or email delivery. The token itself authorizes this URL.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.scrape.with_raw_response.download_max_search_csv(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type str
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DownloadMaxSearchCsvErrorBody
```

**Async**

```python
result = await async_client.scrape.with_raw_response.download_max_search_csv(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type str
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DownloadMaxSearchCsvErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>job_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>token</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](comp_sniper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](comp_sniper/core/results.py)&#91;str, [DownloadMaxSearchCsvErrorBody](comp_sniper/errors/download_max_search_csv_error.py)&#93;</code>

**On `Success`**: `payload` is <code>str</code> -- CSV export.

**On `Failure`**: `error` is <code>[DownloadMaxSearchCsvErrorBody](comp_sniper/errors/download_max_search_csv_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[RawError](comp_sniper/core/results.py)</code> |
| anything unmapped | <code>[RawError](comp_sniper/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_max_search_results(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MaxJob, GetMaxSearchResultsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.scrape.with_raw_response.get_max_search_results(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MaxJob
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMaxSearchResultsErrorBody
```

**Async**

```python
result = await async_client.scrape.with_raw_response.get_max_search_results(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MaxJob
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMaxSearchResultsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>job_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](comp_sniper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](comp_sniper/core/results.py)&#91;[MaxJob](comp_sniper/models/max_job.py), [GetMaxSearchResultsErrorBody](comp_sniper/errors/get_max_search_results_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MaxJob](comp_sniper/models/max_job.py)</code> -- Current job progress or terminal result.

**On `Failure`**: `error` is <code>[GetMaxSearchResultsErrorBody](comp_sniper/errors/get_max_search_results_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[ApiErrorModel](comp_sniper/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](comp_sniper/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_sold_listings(keyword: str, *, count: int | None = 240, page: int | None = 1, ebay_site: EbaySiteOrStr | None = EbaySite.EBAY_COM, category_id: str | None = "0", sort_order: SortOrder1OrStr | None = None, item_location: ItemLocationOrStr | None = ItemLocation.DEFAULT, item_condition: ItemConditionOrStr | None = None, condition_id: int | None = None, buying_format: BuyingFormatOrStr | None = BuyingFormat.ALL, seller_type: SellerTypeOrStr | None = None, min_price: float | None = None, max_price: float | None = None, include_complete_listing: bool | None = True, sold: bool | None = True, sold_after: Date | None = None, sold_before: Date | None = None, aspect_filter: str | None = None, exact_match: bool | None = False, relevance: bool | None = True, best_offer_price: bool | None = False, x_credit_source: XCreditSourceOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ScrapeResponse, SearchSoldListingsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns completed eBay sales by default. Set sold=false for current active listings.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.scrape.with_raw_response.search_sold_listings("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScrapeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchSoldListingsErrorBody
```

**Async**

```python
result = await async_client.scrape.with_raw_response.search_sold_listings("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScrapeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchSoldListingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>keyword</code> | <code>str</code> | Product to search. Supports eBay operators, e.g. minus-sign exclusions ('airpods pro -case'). |
| <code>count</code> | <code>int \| None</code> | Maximum items to return per page. This is a ceiling; fewer valid rows may remain after baseline validation, date filters, or relevance cleanup.<br>**Default**: <code>240</code> |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>1</code> |
| <code>ebay_site</code> | <code>[EbaySiteOrStr](comp_sniper/models/enums/ebay_site.py) \| None</code> | eBay marketplace.<br>**Default**: <code>EbaySite.EBAY_COM</code> |
| <code>category_id</code> | <code>str \| None</code> | eBay category id (_sacat).<br>**Default**: <code>"0"</code> |
| <code>sort_order</code> | <code>[SortOrder1OrStr](comp_sniper/models/enums/sort_order1.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>item_location</code> | <code>[ItemLocationOrStr](comp_sniper/models/enums/item_location.py) \| None</code> | Value sent with the request.<br>**Default**: <code>ItemLocation.DEFAULT</code> |
| <code>item_condition</code> | <code>[ItemConditionOrStr](comp_sniper/models/enums/item_condition.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>condition_id</code> | <code>int \| None</code> | Numeric eBay condition id; overrides itemCondition.<br>**Default**: <code>None</code> |
| <code>buying_format</code> | <code>[BuyingFormatOrStr](comp_sniper/models/enums/buying_format.py) \| None</code> | Value sent with the request.<br>**Default**: <code>BuyingFormat.ALL</code> |
| <code>seller_type</code> | <code>[SellerTypeOrStr](comp_sniper/models/enums/seller_type.py) \| None</code> | Filters labeled sellers on ebay.de, ebay.fr, ebay.it, and ebay.es. Ignored elsewhere; unlabeled EU rows are excluded while filtering.<br>**Default**: <code>None</code> |
| <code>min_price</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>max_price</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>include_complete_listing</code> | <code>bool \| None</code> | Sold-search compatibility option. Ignored when sold=false.<br>**Default**: <code>True</code> |
| <code>sold</code> | <code>bool \| None</code> | true returns completed sales. false returns current active listings with currentPrice, watcherCount, unitsSold, acceptsOffers, and timeLeft when visible.<br>**Default**: <code>True</code> |
| <code>sold_after</code> | <code>Date \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sold_before</code> | <code>Date \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>aspect_filter</code> | <code>str \| None</code> | JSON object of human-readable eBay facet names. Values may be strings, pipe-delimited strings, or arrays of strings.<br>**Default**: <code>None</code> |
| <code>exact_match</code> | <code>bool \| None</code> | When true, removes listings after eBay's explicit Results matching fewer words boundary before relevance cleanup. When the boundary is absent, rows are unchanged. This follows eBay's section split and does not independently prove semantic exactness. false preserves the existing broad-search cache and behavior. Leave it off for long, specific keywords (full card numbers, full set names): eBay often has no exact matches for those, so exactMatch=true can return no results even when the item sold many times.<br>**Default**: <code>False</code> |
| <code>relevance</code> | <code>bool \| None</code> | When true, query-aware deterministic checks remove explicit pricing mismatches before one bounded semantic cleanup stage handles accessories, parts, and wrong models. Explicit query intent is preserved. false disables both relevance stages and returns broad valid matches. Baseline validation of item IDs, item URLs, prices, sold dates, and duplicate IDs always applies.<br>**Default**: <code>True</code> |
| <code>best_offer_price</code> | <code>bool \| None</code> | When true, sold rows where bestOfferAccepted is true gain acceptedOfferPrice (the price the buyer actually paid, null unless found) and acceptedOfferPriceStatus (found, pending or not_available). soldPrice is never changed. US-dollar sales only; other currencies return not_available. No extra charge. Ignored with sold=false.<br>**Default**: <code>False</code> |
| <code>x_credit_source</code> | <code>[XCreditSourceOrStr](comp_sniper/models/enums/x_credit_source.py) \| None</code> | Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](comp_sniper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](comp_sniper/core/results.py)&#91;[ScrapeResponse](comp_sniper/models/scrape_response.py), [SearchSoldListingsErrorBody](comp_sniper/errors/search_sold_listings_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ScrapeResponse](comp_sniper/models/scrape_response.py)</code> -- Sold listings with price intelligence, or active listings with visible demand signals.

**On `Failure`**: `error` is <code>[SearchSoldListingsErrorBody](comp_sniper/errors/search_sold_listings_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 502 | <code>[ApiErrorModel](comp_sniper/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](comp_sniper/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_max_search(body: MaxSearchRequest | MaxSearchRequestDict, *, x_credit_source: XCreditSourceOrStr | None = None, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MaxJobAccepted, StartMaxSearchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches up to 100 eBay result pages in the background. Each successful page uses one monthly request, then one purchased credit after monthly quota is exhausted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.scrape.with_raw_response.start_max_search(MaxSearchRequest(keyword="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MaxJobAccepted
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartMaxSearchErrorBody
```

**Async**

```python
result = await async_client.scrape.with_raw_response.start_max_search(MaxSearchRequest(keyword="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MaxJobAccepted
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartMaxSearchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[MaxSearchRequest](comp_sniper/models/max_search_request.py) \| [MaxSearchRequestDict](comp_sniper/models/max_search_request.py)</code> | The request body. |
| <code>x_credit_source</code> | <code>[XCreditSourceOrStr](comp_sniper/models/enums/x_credit_source.py) \| None</code> | Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged.<br>**Default**: <code>None</code> |
| <code>idempotency_key</code> | <code>str \| None</code> | Return the previously created job when a submission is retried.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](comp_sniper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](comp_sniper/core/results.py)&#91;[MaxJobAccepted](comp_sniper/models/max_job_accepted.py), [StartMaxSearchErrorBody](comp_sniper/errors/start_max_search_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MaxJobAccepted](comp_sniper/models/max_job_accepted.py)</code> -- Existing idempotent job returned.

**On `Failure`**: `error` is <code>[StartMaxSearchErrorBody](comp_sniper/errors/start_max_search_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 409, 429 | <code>[ApiErrorModel](comp_sniper/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](comp_sniper/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ShippingRates

> Source: [ShippingRates](comp_sniper/apis/shipping_rates.py)

<details>
<summary><code>def get_shipping_rate_usage(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ShippingRateUsageResponse, GetShippingRateUsageErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the authenticated account's separate Shipping Rates plan, quota, usage, rate limit, and billing period.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.shipping_rates.with_raw_response.get_shipping_rate_usage()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ShippingRateUsageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetShippingRateUsageErrorBody
```

**Async**

```python
result = await async_client.shipping_rates.with_raw_response.get_shipping_rate_usage()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ShippingRateUsageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetShippingRateUsageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](comp_sniper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](comp_sniper/core/results.py)&#91;[ShippingRateUsageResponse](comp_sniper/models/shipping_rate_usage_response.py), [GetShippingRateUsageErrorBody](comp_sniper/errors/get_shipping_rate_usage_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ShippingRateUsageResponse](comp_sniper/models/shipping_rate_usage_response.py)</code> -- Current independent Shipping Rates entitlement and usage.

**On `Failure`**: `error` is <code>[GetShippingRateUsageErrorBody](comp_sniper/errors/get_shipping_rate_usage_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[ApiErrorModel](comp_sniper/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](comp_sniper/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_shipping_rates(body: ShippingRateRequest | ShippingRateRequestDict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ShippingRateResponse, GetShippingRatesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns quote-only shipping estimates for a US origin ZIP, US destination ZIP, package weight, and dimensions. Applicable services are returned in rates. Carrier-packaging and content-restricted services are returned in conditionalRates unless the caller explicitly confirms the requirement. Preserves retail and eBay discounted prices when available. Requires a separate Shipping Rates subscription and consumes one shipping request only when usable applicable rates are returned.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.shipping_rates.with_raw_response.get_shipping_rates(
    ShippingRateRequest(
        ship_from=ShipFrom(postal_code="some example string"),
        ship_to=ShipTo(postal_code="some example string"),
        package=Package(weight=Weight(value=1.5), dimensions=Dimensions(length=1.5, width=1.5, height=1.5)),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ShippingRateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetShippingRatesErrorBody
```

**Async**

```python
result = await async_client.shipping_rates.with_raw_response.get_shipping_rates(
    ShippingRateRequest(
        ship_from=ShipFrom(postal_code="some example string"),
        ship_to=ShipTo(postal_code="some example string"),
        package=Package(weight=Weight(value=1.5), dimensions=Dimensions(length=1.5, width=1.5, height=1.5)),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ShippingRateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetShippingRatesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ShippingRateRequest](comp_sniper/models/shipping_rate_request.py) \| [ShippingRateRequestDict](comp_sniper/models/shipping_rate_request.py)</code> | The request body. |
| <code>idempotency_key</code> | <code>str \| None</code> | Replays a completed identical quote without consuming another shipping request. Use a new key for a different request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](comp_sniper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](comp_sniper/core/results.py)&#91;[ShippingRateResponse](comp_sniper/models/shipping_rate_response.py), [GetShippingRatesErrorBody](comp_sniper/errors/get_shipping_rates_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ShippingRateResponse](comp_sniper/models/shipping_rate_response.py)</code> -- Usable shipping-rate estimates. One separate shipping request is consumed unless this is an idempotent replay.

**On `Failure`**: `error` is <code>[GetShippingRatesErrorBody](comp_sniper/errors/get_shipping_rates_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 409, 413, 422, 429, 502, 503 | <code>[ApiErrorModel](comp_sniper/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](comp_sniper/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SoldHistory

> Source: [SoldHistory](comp_sniper/apis/sold_history.py)

<details>
<summary><code>def get_v1_research_sold(keyword: str, start_date: Date, end_date: Date, *, ebay_site: EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApiOrStr | None = EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi.EBAY_COM, sort: SortOrStr | None = Sort.QUANTITY_ASCENDING, limit: LimitOrInt | None = Limit.VALUE_50, page: int | None = 1, single_unit_only: bool | None = False, all_listing_sites: bool | None = False, relevance: bool | None = False, x_credit_source: XCreditSourceOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ResearchSoldResponse, GetV1ResearchSoldErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Keyword search over eBay sold history going back up to 3 years (eBay's own limit), across eight eBay sites, on every plan including free. Each page of up to 50 listing-level rows uses one request; failed requests are free. Prices are USD. History has its own cap of 20 searches per minute per account (X-History-RateLimit-* headers, 429 history_rate_limited), on top of the plan limit.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sold_history.with_raw_response.get_v1_research_sold(
    "nintendo switch oled", date(2023, 10, 11), date(2026, 10, 10)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ResearchSoldResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetV1ResearchSoldErrorBody
```

**Async**

```python
result = await async_client.sold_history.with_raw_response.get_v1_research_sold(
    "nintendo switch oled", date(2023, 10, 11), date(2026, 10, 10)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ResearchSoldResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetV1ResearchSoldErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>keyword</code> | <code>str</code> | Value sent with the request. |
| <code>start_date</code> | <code>Date</code> | Value sent with the request. |
| <code>end_date</code> | <code>Date</code> | Value sent with the request. |
| <code>ebay_site</code> | <code>[EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApiOrStr](comp_sniper/models/enums/ebay_site_comp_sniper_marketplace_and_shipping_sold_history_api.py) \| None</code> | Value sent with the request.<br>**Default**: <code>EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi.EBAY_COM</code> |
| <code>sort</code> | <code>[SortOrStr](comp_sniper/models/enums/sort.py) \| None</code> | Value sent with the request.<br>**Default**: <code>Sort.QUANTITY_ASCENDING</code> |
| <code>limit</code> | <code>[LimitOrInt](comp_sniper/models/enums/limit.py) \| None</code> | Value sent with the request.<br>**Default**: <code>Limit.VALUE_50</code> |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>1</code> |
| <code>single_unit_only</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>False</code> |
| <code>all_listing_sites</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>False</code> |
| <code>relevance</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>False</code> |
| <code>x_credit_source</code> | <code>[XCreditSourceOrStr](comp_sniper/models/enums/x_credit_source.py) \| None</code> | Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](comp_sniper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](comp_sniper/core/results.py)&#91;[V1ResearchSoldResponse](comp_sniper/models/v1_research_sold_response.py), [GetV1ResearchSoldErrorBody](comp_sniper/errors/get_v1_research_sold_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ResearchSoldResponse](comp_sniper/models/v1_research_sold_response.py)</code> -- Sold history page

**On `Failure`**: `error` is <code>[GetV1ResearchSoldErrorBody](comp_sniper/errors/get_v1_research_sold_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[V1ResearchSold400Error1](comp_sniper/models/v1_research_sold400_error1.py)</code> |
| 401 | <code>[V1ResearchSold401Error1](comp_sniper/models/v1_research_sold401_error1.py)</code> |
| 429 | <code>[V1ResearchSold429Error1](comp_sniper/models/v1_research_sold429_error1.py)</code> |
| 502 | <code>[V1ResearchSold502Error1](comp_sniper/models/v1_research_sold502_error1.py)</code> |
| 503 | <code>[V1ResearchSold503Error1](comp_sniper/models/v1_research_sold503_error1.py)</code> |
| anything unmapped | <code>[RawError](comp_sniper/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Summary

> Source: [Summary](comp_sniper/apis/summary.py)

<details>
<summary><code>def get_price_summary(keyword: str, *, count: int | None = 240, page: int | None = 1, ebay_site: EbaySiteOrStr | None = EbaySite.EBAY_COM, category_id: str | None = None, sort_order: SortOrderOrStr | None = None, min_price: float | None = None, max_price: float | None = None, item_condition: ItemConditionOrStr | None = None, condition_id: int | None = None, buying_format: BuyingFormatOrStr | None = None, seller_type: SellerTypeOrStr | None = None, sold_after: Date | None = None, sold_before: Date | None = None, aspect_filter: str | None = None, exact_match: bool | None = False, relevance: bool | None = True, x_credit_source: XCreditSourceOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SummaryResponse, GetPriceSummaryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Runs the same sold search and billing flow as /v1/scrape, but returns only the cleaned price summary, raw comparison evidence, result counts, and cache status.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.summary.with_raw_response.get_price_summary("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SummaryResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPriceSummaryErrorBody
```

**Async**

```python
result = await async_client.summary.with_raw_response.get_price_summary("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SummaryResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPriceSummaryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>keyword</code> | <code>str</code> | Value sent with the request. |
| <code>count</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>240</code> |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>1</code> |
| <code>ebay_site</code> | <code>[EbaySiteOrStr](comp_sniper/models/enums/ebay_site.py) \| None</code> | Value sent with the request.<br>**Default**: <code>EbaySite.EBAY_COM</code> |
| <code>category_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort_order</code> | <code>[SortOrderOrStr](comp_sniper/models/enums/sort_order.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>min_price</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>max_price</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>item_condition</code> | <code>[ItemConditionOrStr](comp_sniper/models/enums/item_condition.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>condition_id</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>buying_format</code> | <code>[BuyingFormatOrStr](comp_sniper/models/enums/buying_format.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>seller_type</code> | <code>[SellerTypeOrStr](comp_sniper/models/enums/seller_type.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sold_after</code> | <code>Date \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sold_before</code> | <code>Date \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>aspect_filter</code> | <code>str \| None</code> | JSON object of eBay facet names and values.<br>**Default**: <code>None</code> |
| <code>exact_match</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>False</code> |
| <code>relevance</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>True</code> |
| <code>x_credit_source</code> | <code>[XCreditSourceOrStr](comp_sniper/models/enums/x_credit_source.py) \| None</code> | Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](comp_sniper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](comp_sniper/core/results.py)&#91;[SummaryResponse](comp_sniper/models/summary_response.py), [GetPriceSummaryErrorBody](comp_sniper/errors/get_price_summary_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SummaryResponse](comp_sniper/models/summary_response.py)</code> -- Price summary and raw-versus-cleaned evidence.

**On `Failure`**: `error` is <code>[GetPriceSummaryErrorBody](comp_sniper/errors/get_price_summary_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 502, 503 | <code>[ApiErrorModel](comp_sniper/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](comp_sniper/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## TcGplayer

> Source: [TcGplayer](comp_sniper/apis/tc_gplayer.py)

<details>
<summary><code>def get_v1_tcgplayer_listings(*, keyword: str | None = None, product_id: int | None = None, page: int | None = 1, count: int | None = 25, condition: str | None = None, variant: str | None = None, language: str | None = None, x_credit_source: XCreditSourceOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1TcgplayerListingsResponse, GetV1TcgplayerListingsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Active TCGplayer listings for a product with price, shipping, condition and seller details. One successful call uses one request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tc_gplayer.with_raw_response.get_v1_tcgplayer_listings(
    keyword="charizard ex obsidian flames 223", condition="Near Mint", variant="Holofoil", language="English"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TcgplayerListingsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetV1TcgplayerListingsErrorBody
```

**Async**

```python
result = await async_client.tc_gplayer.with_raw_response.get_v1_tcgplayer_listings(
    keyword="charizard ex obsidian flames 223", condition="Near Mint", variant="Holofoil", language="English"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TcgplayerListingsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetV1TcgplayerListingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>keyword</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>product_id</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>1</code> |
| <code>count</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>25</code> |
| <code>condition</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>variant</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>language</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_credit_source</code> | <code>[XCreditSourceOrStr](comp_sniper/models/enums/x_credit_source.py) \| None</code> | Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](comp_sniper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](comp_sniper/core/results.py)&#91;[V1TcgplayerListingsResponse](comp_sniper/models/v1_tcgplayer_listings_response.py), [GetV1TcgplayerListingsErrorBody](comp_sniper/errors/get_v1_tcgplayer_listings_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1TcgplayerListingsResponse](comp_sniper/models/v1_tcgplayer_listings_response.py)</code> -- Listings

**On `Failure`**: `error` is <code>[GetV1TcgplayerListingsErrorBody](comp_sniper/errors/get_v1_tcgplayer_listings_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[V1TcgplayerListings400Error1](comp_sniper/models/v1_tcgplayer_listings400_error1.py)</code> |
| 401 | <code>[V1TcgplayerListings401Error1](comp_sniper/models/v1_tcgplayer_listings401_error1.py)</code> |
| 429 | <code>[V1TcgplayerListings429Error1](comp_sniper/models/v1_tcgplayer_listings429_error1.py)</code> |
| 502 | <code>[V1TcgplayerListings502Error1](comp_sniper/models/v1_tcgplayer_listings502_error1.py)</code> |
| 503 | <code>[V1TcgplayerListings503Error1](comp_sniper/models/v1_tcgplayer_listings503_error1.py)</code> |
| anything unmapped | <code>[RawError](comp_sniper/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_v1_tcgplayer_sold(*, keyword: str | None = None, product_id: int | None = None, count: int | None = 100, condition: str | None = None, variant: str | None = None, language: str | None = None, history: HistoryOrStr | None = History.NONE, sold_after: Date | None = None, sold_before: Date | None = None, fresh: bool | None = False, x_credit_source: XCreditSourceOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1TcgplayerSoldResponse, GetV1TcgplayerSoldErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Full TCGplayer completed-sale history for a product, with optional market price history. One successful call uses one request; repeat calls can return instantly from a short-lived saved copy; send fresh=true for a live fetch.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tc_gplayer.with_raw_response.get_v1_tcgplayer_sold(
    keyword="charizard ex obsidian flames 223",
    condition="Near Mint",
    variant="Holofoil",
    language="English",
    sold_after=date(2026, 10, 14),
    sold_before=date(2026, 10, 15),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TcgplayerSoldResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetV1TcgplayerSoldErrorBody
```

**Async**

```python
result = await async_client.tc_gplayer.with_raw_response.get_v1_tcgplayer_sold(
    keyword="charizard ex obsidian flames 223",
    condition="Near Mint",
    variant="Holofoil",
    language="English",
    sold_after=date(2026, 10, 14),
    sold_before=date(2026, 10, 15),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TcgplayerSoldResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetV1TcgplayerSoldErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>keyword</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>product_id</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>100</code> |
| <code>condition</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>variant</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>language</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>history</code> | <code>[HistoryOrStr](comp_sniper/models/enums/history.py) \| None</code> | Value sent with the request.<br>**Default**: <code>History.NONE</code> |
| <code>sold_after</code> | <code>Date \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sold_before</code> | <code>Date \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>fresh</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>False</code> |
| <code>x_credit_source</code> | <code>[XCreditSourceOrStr](comp_sniper/models/enums/x_credit_source.py) \| None</code> | Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](comp_sniper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](comp_sniper/core/results.py)&#91;[V1TcgplayerSoldResponse](comp_sniper/models/v1_tcgplayer_sold_response.py), [GetV1TcgplayerSoldErrorBody](comp_sniper/errors/get_v1_tcgplayer_sold_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1TcgplayerSoldResponse](comp_sniper/models/v1_tcgplayer_sold_response.py)</code> -- Sales

**On `Failure`**: `error` is <code>[GetV1TcgplayerSoldErrorBody](comp_sniper/errors/get_v1_tcgplayer_sold_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[V1TcgplayerSold400Error1](comp_sniper/models/v1_tcgplayer_sold400_error1.py)</code> |
| 401 | <code>[V1TcgplayerSold401Error1](comp_sniper/models/v1_tcgplayer_sold401_error1.py)</code> |
| 429 | <code>[V1TcgplayerSold429Error1](comp_sniper/models/v1_tcgplayer_sold429_error1.py)</code> |
| 502 | <code>[V1TcgplayerSold502Error1](comp_sniper/models/v1_tcgplayer_sold502_error1.py)</code> |
| 503 | <code>[V1TcgplayerSold503Error1](comp_sniper/models/v1_tcgplayer_sold503_error1.py)</code> |
| anything unmapped | <code>[RawError](comp_sniper/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

