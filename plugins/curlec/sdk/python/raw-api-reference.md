# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [CurlecClient](curlec/client.py)

## Bills

> Source: [Bills](curlec/apis/bills.py)

<details>
<summary><code>def create_bill(body: BillsRequest | BillsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Bill, CreateBillErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a digital bill/receipt for a customer. Supports retail, food & beverage, events, and ecommerce use cases. Used for Razorpay Billme digital receipts.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bills.with_raw_response.create_bill(
    BillsRequest(business_type=BusinessType.ECOMMERCE, customer=Customer1(contact="some example string"))
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Bill
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateBillErrorBody
```

**Async**

```python
result = await async_client.bills.with_raw_response.create_bill(
    BillsRequest(business_type=BusinessType.ECOMMERCE, customer=Customer1(contact="some example string"))
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Bill
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateBillErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BillsRequest](curlec/models/bills_request.py) \| [BillsRequestDict](curlec/models/bills_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[Bill](curlec/models/bill.py), [CreateBillErrorBody](curlec/errors/create_bill_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Bill](curlec/models/bill.py)</code> -- Bill created successfully

**On `Failure`**: `error` is <code>[CreateBillErrorBody](curlec/errors/create_bill_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_bill(bill_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DeleteBillErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a digital bill/receipt.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bills.with_raw_response.delete_bill("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteBillErrorBody
```

**Async**

```python
result = await async_client.bills.with_raw_response.delete_bill("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteBillErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bill_id</code> | <code>str</code> | Bill ID with prefix bill_ |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;Any, [DeleteBillErrorBody](curlec/errors/delete_bill_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Bill deleted successfully

**On `Failure`**: `error` is <code>[DeleteBillErrorBody](curlec/errors/delete_bill_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_bill(bill_id: str, body: Bill | BillDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Bill, UpdateBillErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing digital bill. Can update customer details, line items, receipt summary, and other fields.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bills.with_raw_response.update_bill("some example string", Bill())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Bill
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateBillErrorBody
```

**Async**

```python
result = await async_client.bills.with_raw_response.update_bill("some example string", Bill())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Bill
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateBillErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bill_id</code> | <code>str</code> | Bill ID with prefix bill_ |
| <code>body</code> | <code>[Bill](curlec/models/bill.py) \| [BillDict](curlec/models/bill.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[Bill](curlec/models/bill.py), [UpdateBillErrorBody](curlec/errors/update_bill_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Bill](curlec/models/bill.py)</code> -- Bill updated successfully

**On `Failure`**: `error` is <code>[UpdateBillErrorBody](curlec/errors/update_bill_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Customers

> Source: [Customers](curlec/apis/customers.py)

<details>
<summary><code>def create_customer(body: CustomersRequest | CustomersRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomerRazorpayCustomersApi, CreateCustomerErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a customer profile. The combination of email and contact must be unique per customer. Customer profiles enable saved card tokens, faster checkout, and customer-scoped data.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customers.with_raw_response.create_customer(
    CustomersRequest(name="Aisha Sharma", contact="+919876543210", email="aisha@example.com")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerRazorpayCustomersApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCustomerErrorBody
```

**Async**

```python
result = await async_client.customers.with_raw_response.create_customer(
    CustomersRequest(name="Aisha Sharma", contact="+919876543210", email="aisha@example.com")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerRazorpayCustomersApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCustomerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CustomersRequest](curlec/models/customers_request.py) \| [CustomersRequestDict](curlec/models/customers_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[CustomerRazorpayCustomersApi](curlec/models/customer_razorpay_customers_api.py), [CreateCustomerErrorBody](curlec/errors/create_customer_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomerRazorpayCustomersApi](curlec/models/customer_razorpay_customers_api.py)</code> -- Customer created.

**On `Failure`**: `error` is <code>[CreateCustomerErrorBody](curlec/errors/create_customer_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_all_customers(*, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomersResponse, FetchAllCustomersErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a paginated list of all customers. Maximum 100 per call.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customers.with_raw_response.fetch_all_customers()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchAllCustomersErrorBody
```

**Async**

```python
result = await async_client.customers.with_raw_response.fetch_all_customers()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchAllCustomersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>count</code> | <code>int \| None</code> | Number of records to return per call. Maximum 100. Default 10.<br>**Default**: <code>10</code> |
| <code>skip</code> | <code>int \| None</code> | Number of records to skip. Use with count for pagination. Default 0.<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[CustomersResponse](curlec/models/customers_response.py), [FetchAllCustomersErrorBody](curlec/errors/fetch_all_customers_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomersResponse](curlec/models/customers_response.py)</code> -- Collection of customers.

**On `Failure`**: `error` is <code>[FetchAllCustomersErrorBody](curlec/errors/fetch_all_customers_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_customer(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomerRazorpayCustomersApi, FetchCustomerErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve full details of a specific customer.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customers.with_raw_response.fetch_customer("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerRazorpayCustomersApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchCustomerErrorBody
```

**Async**

```python
result = await async_client.customers.with_raw_response.fetch_customer("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerRazorpayCustomersApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchCustomerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Customer ID (cust_*). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[CustomerRazorpayCustomersApi](curlec/models/customer_razorpay_customers_api.py), [FetchCustomerErrorBody](curlec/errors/fetch_customer_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomerRazorpayCustomersApi](curlec/models/customer_razorpay_customers_api.py)</code> -- Customer details.

**On `Failure`**: `error` is <code>[FetchCustomerErrorBody](curlec/errors/fetch_customer_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_customer(id_: str, body: CustomersRequest1 | CustomersRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomerRazorpayCustomersApi, UpdateCustomerErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a customer's name, email, or contact. The combination of email and contact must remain unique. Contact number must contain at least 8 digits.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customers.with_raw_response.update_customer("some example string", CustomersRequest1())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerRazorpayCustomersApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCustomerErrorBody
```

**Async**

```python
result = await async_client.customers.with_raw_response.update_customer("some example string", CustomersRequest1())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerRazorpayCustomersApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCustomerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Customer ID (cust_*). |
| <code>body</code> | <code>[CustomersRequest1](curlec/models/customers_request1.py) \| [CustomersRequest1Dict](curlec/models/customers_request1.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[CustomerRazorpayCustomersApi](curlec/models/customer_razorpay_customers_api.py), [UpdateCustomerErrorBody](curlec/errors/update_customer_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomerRazorpayCustomersApi](curlec/models/customer_razorpay_customers_api.py)</code> -- Updated customer.

**On `Failure`**: `error` is <code>[UpdateCustomerErrorBody](curlec/errors/update_customer_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Disputes

> Source: [Disputes](curlec/apis/disputes.py)

<details>
<summary><code>def accept_dispute(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Dispute, AcceptDisputeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Accept a dispute, acknowledging it as lost. This is irreversible — the dispute status changes to 'lost' and the disputed amount is deducted from your balance. Only accept if you do not wish to contest.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.disputes.with_raw_response.accept_dispute("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Dispute
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AcceptDisputeErrorBody
```

**Async**

```python
result = await async_client.disputes.with_raw_response.accept_dispute("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Dispute
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AcceptDisputeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Dispute ID (disp_*). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[Dispute](curlec/models/dispute.py), [AcceptDisputeErrorBody](curlec/errors/accept_dispute_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Dispute](curlec/models/dispute.py)</code> -- Dispute accepted. Status changes to 'lost'.

**On `Failure`**: `error` is <code>[AcceptDisputeErrorBody](curlec/errors/accept_dispute_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def contest_dispute(id_: str, body: DisputesContestRequest | DisputesContestRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Dispute, ContestDisputeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submit evidence to challenge a dispute. Use action=draft to save without submitting, or action=submit to send for bank review (triggers payment.dispute.under_review webhook). At least one evidence document is required when submitting. You can contest partial amounts by specifying amount.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.disputes.with_raw_response.contest_dispute("some example string", DisputesContestRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Dispute
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContestDisputeErrorBody
```

**Async**

```python
result = await async_client.disputes.with_raw_response.contest_dispute("some example string", DisputesContestRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Dispute
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContestDisputeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Dispute ID (disp_*). |
| <code>body</code> | <code>[DisputesContestRequest](curlec/models/disputes_contest_request.py) \| [DisputesContestRequestDict](curlec/models/disputes_contest_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[Dispute](curlec/models/dispute.py), [ContestDisputeErrorBody](curlec/errors/contest_dispute_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Dispute](curlec/models/dispute.py)</code> -- Dispute contested. Status changes to 'under_review' on submit.

**On `Failure`**: `error` is <code>[ContestDisputeErrorBody](curlec/errors/contest_dispute_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_all_disputes(*, count: int | None = 10, skip: int | None = 0, expand: ExpandOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DisputesResponse, FetchAllDisputesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of all payment disputes. Use expand[]=payment or expand[]=transaction.settlement for additional context.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.disputes.with_raw_response.fetch_all_disputes()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DisputesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchAllDisputesErrorBody
```

**Async**

```python
result = await async_client.disputes.with_raw_response.fetch_all_disputes()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DisputesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchAllDisputesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>count</code> | <code>int \| None</code> | Number of records to return per call. Maximum 100. Default 10.<br>**Default**: <code>10</code> |
| <code>skip</code> | <code>int \| None</code> | Number of records to skip. Use with count for pagination. Default 0.<br>**Default**: <code>0</code> |
| <code>expand</code> | <code>[ExpandOrStr](curlec/models/enums/expand.py) \| None</code> | Expand sub-entities. Supported: payment, transaction.settlement.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[DisputesResponse](curlec/models/disputes_response.py), [FetchAllDisputesErrorBody](curlec/errors/fetch_all_disputes_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DisputesResponse](curlec/models/disputes_response.py)</code> -- Collection of disputes.

**On `Failure`**: `error` is <code>[FetchAllDisputesErrorBody](curlec/errors/fetch_all_disputes_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_dispute(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Dispute, FetchDisputeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve full details of a specific dispute including submitted evidence.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.disputes.with_raw_response.fetch_dispute("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Dispute
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchDisputeErrorBody
```

**Async**

```python
result = await async_client.disputes.with_raw_response.fetch_dispute("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Dispute
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchDisputeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Dispute ID (disp_*). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[Dispute](curlec/models/dispute.py), [FetchDisputeErrorBody](curlec/errors/fetch_dispute_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Dispute](curlec/models/dispute.py)</code> -- Dispute details.

**On `Failure`**: `error` is <code>[FetchDisputeErrorBody](curlec/errors/fetch_dispute_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Documents

> Source: [Documents](curlec/apis/documents.py)

<details>
<summary><code>def fetch_document(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Document, FetchDocumentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve metadata for an uploaded document (name, MIME type, size, purpose). Document IDs are exactly 14 alphanumeric characters.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.documents.with_raw_response.fetch_document("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Document
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchDocumentErrorBody
```

**Async**

```python
result = await async_client.documents.with_raw_response.fetch_document("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Document
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchDocumentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Document ID (doc_*). Exactly 14 alphanumeric characters. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[Document](curlec/models/document.py), [FetchDocumentErrorBody](curlec/errors/fetch_document_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Document](curlec/models/document.py)</code> -- Document metadata.

**On `Failure`**: `error` is <code>[FetchDocumentErrorBody](curlec/errors/fetch_document_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_document_content(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, FetchDocumentContentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the binary content of a previously uploaded document. Returns the raw file bytes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.documents.with_raw_response.fetch_document_content("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchDocumentContentErrorBody
```

**Async**

```python
result = await async_client.documents.with_raw_response.fetch_document_content("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchDocumentContentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Document ID. Exactly 14 alphanumeric characters. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;FileResponse, [FetchDocumentContentErrorBody](curlec/errors/fetch_document_content_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- Document binary content.

**On `Failure`**: `error` is <code>[FetchDocumentContentErrorBody](curlec/errors/fetch_document_content_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upload_document(file: FileInput, purpose: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Document, UploadDocumentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a file to Razorpay. Returns a document ID that can be used in dispute evidence submissions. Supports JPEG, PNG, and PDF formats.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.documents.with_raw_response.upload_document(Path("path/to/file.bin"), "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Document
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UploadDocumentErrorBody
```

**Async**

```python
result = await async_client.documents.with_raw_response.upload_document(Path("path/to/file.bin"), "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Document
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UploadDocumentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>file</code> | <code>FileInput</code> | File to upload. Supported: JPEG, PNG, PDF. |
| <code>purpose</code> | <code>str</code> | Reason for upload. Example: dispute_evidence. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[Document](curlec/models/document.py), [UploadDocumentErrorBody](curlec/errors/upload_document_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Document](curlec/models/document.py)</code> -- Document uploaded.

**On `Failure`**: `error` is <code>[UploadDocumentErrorBody](curlec/errors/upload_document_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## InstantSettlements

> Source: [InstantSettlements](curlec/apis/instant_settlements.py)

<details>
<summary><code>def create_instant_settlement(body: SettlementsOndemandRequest | SettlementsOndemandRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[InstantSettlement, CreateInstantSettlementErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Request an on-demand (instant) settlement of your available Razorpay balance to your bank account. Fees apply. Use settle_full_balance=true to settle everything available, or specify an amount.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.instant_settlements.with_raw_response.create_instant_settlement(SettlementsOndemandRequest(amount=1))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InstantSettlement
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateInstantSettlementErrorBody
```

**Async**

```python
result = await async_client.instant_settlements.with_raw_response.create_instant_settlement(
    SettlementsOndemandRequest(amount=1)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InstantSettlement
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateInstantSettlementErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SettlementsOndemandRequest](curlec/models/settlements_ondemand_request.py) \| [SettlementsOndemandRequestDict](curlec/models/settlements_ondemand_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[InstantSettlement](curlec/models/instant_settlement.py), [CreateInstantSettlementErrorBody](curlec/errors/create_instant_settlement_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[InstantSettlement](curlec/models/instant_settlement.py)</code> -- Instant settlement initiated.

**On `Failure`**: `error` is <code>[CreateInstantSettlementErrorBody](curlec/errors/create_instant_settlement_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_all_instant_settlements(*, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, expand: ExpandRazorpayInstantSettlementsApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SettlementsOndemandResponse, FetchAllInstantSettlementsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of all on-demand instant settlements. Use expand[]=ondemand_payouts to include individual payout records inline.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.instant_settlements.with_raw_response.fetch_all_instant_settlements()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SettlementsOndemandResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchAllInstantSettlementsErrorBody
```

**Async**

```python
result = await async_client.instant_settlements.with_raw_response.fetch_all_instant_settlements()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SettlementsOndemandResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchAllInstantSettlementsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>from_</code> | <code>int \| None</code> | Unix timestamp (seconds). Fetch records created on or after this time.<br>**Default**: <code>None</code> |
| <code>to</code> | <code>int \| None</code> | Unix timestamp (seconds). Fetch records created on or before this time.<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Number of records to return per call. Maximum 100. Default 10.<br>**Default**: <code>10</code> |
| <code>skip</code> | <code>int \| None</code> | Number of records to skip. Use with count for pagination. Default 0.<br>**Default**: <code>0</code> |
| <code>expand</code> | <code>[ExpandRazorpayInstantSettlementsApiOrStr](curlec/models/enums/expand_razorpay_instant_settlements_api.py) \| None</code> | Set to ondemand_payouts to include payout details.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[SettlementsOndemandResponse](curlec/models/settlements_ondemand_response.py), [FetchAllInstantSettlementsErrorBody](curlec/errors/fetch_all_instant_settlements_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SettlementsOndemandResponse](curlec/models/settlements_ondemand_response.py)</code> -- Collection of instant settlements.

**On `Failure`**: `error` is <code>[FetchAllInstantSettlementsErrorBody](curlec/errors/fetch_all_instant_settlements_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_instant_settlement(id_: str, *, expand: ExpandRazorpayInstantSettlementsApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[InstantSettlement, FetchInstantSettlementErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve details of a specific on-demand instant settlement. Use expand[]=ondemand_payouts to include payout records.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.instant_settlements.with_raw_response.fetch_instant_settlement("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InstantSettlement
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchInstantSettlementErrorBody
```

**Async**

```python
result = await async_client.instant_settlements.with_raw_response.fetch_instant_settlement("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InstantSettlement
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchInstantSettlementErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Instant settlement ID (setlod_*). |
| <code>expand</code> | <code>[ExpandRazorpayInstantSettlementsApiOrStr](curlec/models/enums/expand_razorpay_instant_settlements_api.py) \| None</code> | Set to ondemand_payouts to include payout details.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[InstantSettlement](curlec/models/instant_settlement.py), [FetchInstantSettlementErrorBody](curlec/errors/fetch_instant_settlement_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[InstantSettlement](curlec/models/instant_settlement.py)</code> -- Instant settlement details.

**On `Failure`**: `error` is <code>[FetchInstantSettlementErrorBody](curlec/errors/fetch_instant_settlement_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Invoices

> Source: [Invoices](curlec/apis/invoices.py)

<details>
<summary><code>def cancel_invoice(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Invoice, CancelInvoiceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel a draft or issued invoice. Cancelled invoices cannot be paid and cannot be reinstated.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.invoices.with_raw_response.cancel_invoice("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Invoice
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelInvoiceErrorBody
```

**Async**

```python
result = await async_client.invoices.with_raw_response.cancel_invoice("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Invoice
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelInvoiceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Invoice ID (inv_*). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[Invoice](curlec/models/invoice.py), [CancelInvoiceErrorBody](curlec/errors/cancel_invoice_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Invoice](curlec/models/invoice.py)</code> -- Invoice cancelled.

**On `Failure`**: `error` is <code>[CancelInvoiceErrorBody](curlec/errors/cancel_invoice_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_invoice(body: InvoicesRequest | InvoicesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Invoice, CreateInvoiceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an invoice or payment page. Set type='invoice' for a formal invoice or type='link' for a simple payment page. The invoice is created in draft state; call POST /invoices/{id}/issue to send it to the customer. Cannot be used to create GST invoices (use the Dashboard for those). Maximum 50 line items per invoice.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.invoices.with_raw_response.create_invoice(InvoicesRequest(type_=Type2.INVOICE))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Invoice
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateInvoiceErrorBody
```

**Async**

```python
result = await async_client.invoices.with_raw_response.create_invoice(InvoicesRequest(type_=Type2.INVOICE))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Invoice
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateInvoiceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[InvoicesRequest](curlec/models/invoices_request.py) \| [InvoicesRequestDict](curlec/models/invoices_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[Invoice](curlec/models/invoice.py), [CreateInvoiceErrorBody](curlec/errors/create_invoice_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Invoice](curlec/models/invoice.py)</code> -- Invoice created in draft state.

**On `Failure`**: `error` is <code>[CreateInvoiceErrorBody](curlec/errors/create_invoice_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_invoice(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DeleteInvoiceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a draft invoice. Only invoices in draft status can be deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.invoices.with_raw_response.delete_invoice("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteInvoiceErrorBody
```

**Async**

```python
result = await async_client.invoices.with_raw_response.delete_invoice("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteInvoiceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Invoice ID (inv_*). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;Any, [DeleteInvoiceErrorBody](curlec/errors/delete_invoice_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Invoice deleted.

**On `Failure`**: `error` is <code>[DeleteInvoiceErrorBody](curlec/errors/delete_invoice_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_invoice(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Invoice, FetchInvoiceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get full details of a specific invoice including status, line items, and payment information.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.invoices.with_raw_response.fetch_invoice("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Invoice
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchInvoiceErrorBody
```

**Async**

```python
result = await async_client.invoices.with_raw_response.fetch_invoice("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Invoice
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchInvoiceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Invoice ID (inv_*). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[Invoice](curlec/models/invoice.py), [FetchInvoiceErrorBody](curlec/errors/fetch_invoice_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Invoice](curlec/models/invoice.py)</code> -- Invoice details.

**On `Failure`**: `error` is <code>[FetchInvoiceErrorBody](curlec/errors/fetch_invoice_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def issue_invoice(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Invoice, IssueInvoiceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transition a draft invoice to issued status, sending a notification to the customer with the payment link. Once issued, line items cannot be changed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.invoices.with_raw_response.issue_invoice("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Invoice
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type IssueInvoiceErrorBody
```

**Async**

```python
result = await async_client.invoices.with_raw_response.issue_invoice("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Invoice
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type IssueInvoiceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Invoice ID (inv_*). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[Invoice](curlec/models/invoice.py), [IssueInvoiceErrorBody](curlec/errors/issue_invoice_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Invoice](curlec/models/invoice.py)</code> -- Invoice issued. short_url is now active.

**On `Failure`**: `error` is <code>[IssueInvoiceErrorBody](curlec/errors/issue_invoice_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_invoices(*, type_: Type3OrStr | None = None, payment_id: str | None = None, customer_id: str | None = None, subscription_id: str | None = None, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[InvoicesResponse, ListInvoicesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of invoices. Filter by type, status, customer, payment, or subscription. Returns up to 100 per call.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.invoices.with_raw_response.list_invoices()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InvoicesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListInvoicesErrorBody
```

**Async**

```python
result = await async_client.invoices.with_raw_response.list_invoices()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InvoicesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListInvoicesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type_</code> | <code>[Type3OrStr](curlec/models/enums/type3.py) \| None</code> | Filter by invoice type.<br>**Default**: <code>None</code> |
| <code>payment_id</code> | <code>str \| None</code> | Filter invoices by the payment ID used to pay them.<br>**Default**: <code>None</code> |
| <code>customer_id</code> | <code>str \| None</code> | Filter by customer ID (cust_*).<br>**Default**: <code>None</code> |
| <code>subscription_id</code> | <code>str \| None</code> | Fetch all invoices generated for a subscription (sub_*).<br>**Default**: <code>None</code> |
| <code>from_</code> | <code>int \| None</code> | Unix timestamp (seconds). Fetch records created on or after this time.<br>**Default**: <code>None</code> |
| <code>to</code> | <code>int \| None</code> | Unix timestamp (seconds). Fetch records created on or before this time.<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Number of records to return per call. Maximum 100. Default 10.<br>**Default**: <code>10</code> |
| <code>skip</code> | <code>int \| None</code> | Number of records to skip. Use with count for pagination. Default 0.<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[InvoicesResponse](curlec/models/invoices_response.py), [ListInvoicesErrorBody](curlec/errors/list_invoices_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[InvoicesResponse](curlec/models/invoices_response.py)</code> -- Collection of invoices.

**On `Failure`**: `error` is <code>[ListInvoicesErrorBody](curlec/errors/list_invoices_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def send_invoice_notification(id_: str, medium: MediumOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[InvoicesNotifyByResponse, SendInvoiceNotificationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send or resend the invoice payment link to the customer via SMS or email.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.invoices.with_raw_response.send_invoice_notification("some example string", Medium.SMS)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InvoicesNotifyByResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SendInvoiceNotificationErrorBody
```

**Async**

```python
result = await async_client.invoices.with_raw_response.send_invoice_notification("some example string", Medium.SMS)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InvoicesNotifyByResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SendInvoiceNotificationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Invoice ID (inv_*). |
| <code>medium</code> | <code>[MediumOrStr](curlec/models/enums/medium.py)</code> | Notification channel. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[InvoicesNotifyByResponse](curlec/models/invoices_notify_by_response.py), [SendInvoiceNotificationErrorBody](curlec/errors/send_invoice_notification_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[InvoicesNotifyByResponse](curlec/models/invoices_notify_by_response.py)</code> -- Notification sent.

**On `Failure`**: `error` is <code>[SendInvoiceNotificationErrorBody](curlec/errors/send_invoice_notification_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_invoice(id_: str, body: InvoicesRequest1 | InvoicesRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Invoice, UpdateInvoiceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update invoice fields. Updatable fields depend on current status: draft=all fields; issued=partial_payment, receipt, comment, terms, notes, expire_by; paid/cancelled/expired=notes only.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.invoices.with_raw_response.update_invoice("some example string", InvoicesRequest1())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Invoice
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateInvoiceErrorBody
```

**Async**

```python
result = await async_client.invoices.with_raw_response.update_invoice("some example string", InvoicesRequest1())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Invoice
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateInvoiceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Invoice ID (inv_*). |
| <code>body</code> | <code>[InvoicesRequest1](curlec/models/invoices_request1.py) \| [InvoicesRequest1Dict](curlec/models/invoices_request1.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[Invoice](curlec/models/invoice.py), [UpdateInvoiceErrorBody](curlec/errors/update_invoice_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Invoice](curlec/models/invoice.py)</code> -- Updated invoice.

**On `Failure`**: `error` is <code>[UpdateInvoiceErrorBody](curlec/errors/update_invoice_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Items

> Source: [Items](curlec/apis/items.py)

<details>
<summary><code>def create_item(body: ItemsRequest | ItemsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Item, CreateItemErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a reusable catalog item. Items can be referenced in invoice line_items by item_id, which auto-fills price and description. Each item is merchant-scoped.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.items.with_raw_response.create_item(
    ItemsRequest(name="some example string", amount=1, currency="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Item
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateItemErrorBody
```

**Async**

```python
result = await async_client.items.with_raw_response.create_item(
    ItemsRequest(name="some example string", amount=1, currency="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Item
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateItemErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ItemsRequest](curlec/models/items_request.py) \| [ItemsRequestDict](curlec/models/items_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[Item](curlec/models/item.py), [CreateItemErrorBody](curlec/errors/create_item_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Item](curlec/models/item.py)</code> -- Item created.

**On `Failure`**: `error` is <code>[CreateItemErrorBody](curlec/errors/create_item_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_item(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DeleteItemErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a catalog item. Deleted items cannot be recovered.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.items.with_raw_response.delete_item("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteItemErrorBody
```

**Async**

```python
result = await async_client.items.with_raw_response.delete_item("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteItemErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Item ID (item_*). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;Any, [DeleteItemErrorBody](curlec/errors/delete_item_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Item deleted.

**On `Failure`**: `error` is <code>[DeleteItemErrorBody](curlec/errors/delete_item_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_item(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Item, FetchItemErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details of a specific catalog item.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.items.with_raw_response.fetch_item("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Item
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchItemErrorBody
```

**Async**

```python
result = await async_client.items.with_raw_response.fetch_item("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Item
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchItemErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Item ID (item_*). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[Item](curlec/models/item.py), [FetchItemErrorBody](curlec/errors/fetch_item_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Item](curlec/models/item.py)</code> -- Item details.

**On `Failure`**: `error` is <code>[FetchItemErrorBody](curlec/errors/fetch_item_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_items(*, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ItemsResponse, ListItemsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all catalog items. Supports pagination.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.items.with_raw_response.list_items()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ItemsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListItemsErrorBody
```

**Async**

```python
result = await async_client.items.with_raw_response.list_items()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ItemsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListItemsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>count</code> | <code>int \| None</code> | Number of records to return per call. Maximum 100. Default 10.<br>**Default**: <code>10</code> |
| <code>skip</code> | <code>int \| None</code> | Number of records to skip. Use with count for pagination. Default 0.<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[ItemsResponse](curlec/models/items_response.py), [ListItemsErrorBody](curlec/errors/list_items_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ItemsResponse](curlec/models/items_response.py)</code> -- Collection of items.

**On `Failure`**: `error` is <code>[ListItemsErrorBody](curlec/errors/list_items_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_item(id_: str, body: ItemsRequest1 | ItemsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Item, UpdateItemErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the name, description, amount, currency, or active status of an item.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.items.with_raw_response.update_item("some example string", ItemsRequest1())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Item
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateItemErrorBody
```

**Async**

```python
result = await async_client.items.with_raw_response.update_item("some example string", ItemsRequest1())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Item
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateItemErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Item ID (item_*). |
| <code>body</code> | <code>[ItemsRequest1](curlec/models/items_request1.py) \| [ItemsRequest1Dict](curlec/models/items_request1.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[Item](curlec/models/item.py), [UpdateItemErrorBody](curlec/errors/update_item_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Item](curlec/models/item.py)</code> -- Updated item.

**On `Failure`**: `error` is <code>[UpdateItemErrorBody](curlec/errors/update_item_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## LinkedAccounts

> Source: [LinkedAccounts](curlec/apis/linked_accounts.py)

<details>
<summary><code>def create_linked_account(body: V2AccountsRequest | V2AccountsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[LinkedAccount, CreateLinkedAccountErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a sub-merchant (Linked Account) under a Route marketplace. The account type must be 'route'. Email and business_type cannot be changed after creation. Only one stakeholder is allowed per Linked Account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.linked_accounts.with_raw_response.create_linked_account(
    V2AccountsRequest(email="some example string", profile=Profile1())
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LinkedAccount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateLinkedAccountErrorBody
```

**Async**

```python
result = await async_client.linked_accounts.with_raw_response.create_linked_account(
    V2AccountsRequest(email="some example string", profile=Profile1())
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LinkedAccount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateLinkedAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V2AccountsRequest](curlec/models/v2_accounts_request.py) \| [V2AccountsRequestDict](curlec/models/v2_accounts_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[LinkedAccount](curlec/models/linked_account.py), [CreateLinkedAccountErrorBody](curlec/errors/create_linked_account_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[LinkedAccount](curlec/models/linked_account.py)</code> -- Linked Account created.

**On `Failure`**: `error` is <code>[CreateLinkedAccountErrorBody](curlec/errors/create_linked_account_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_stakeholder(account_id: str, body: V2AccountsStakeholdersRequest | V2AccountsStakeholdersRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Stakeholder, CreateStakeholderErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a business owner or director to a Linked Account. Only one stakeholder is allowed per Route Linked Account. PAN 4th character must be 'P' (individual PAN).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.linked_accounts.with_raw_response.create_stakeholder(
    "some example string", V2AccountsStakeholdersRequest(name="some example string", email="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Stakeholder
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateStakeholderErrorBody
```

**Async**

```python
result = await async_client.linked_accounts.with_raw_response.create_stakeholder(
    "some example string", V2AccountsStakeholdersRequest(name="some example string", email="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Stakeholder
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateStakeholderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account_id</code> | <code>str</code> | Unique identifier of the linked merchant account (e.g. `acc_00000000000001`). |
| <code>body</code> | <code>[V2AccountsStakeholdersRequest](curlec/models/v2_accounts_stakeholders_request.py) \| [V2AccountsStakeholdersRequestDict](curlec/models/v2_accounts_stakeholders_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[Stakeholder](curlec/models/stakeholder.py), [CreateStakeholderErrorBody](curlec/errors/create_stakeholder_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Stakeholder](curlec/models/stakeholder.py)</code> -- Stakeholder created.

**On `Failure`**: `error` is <code>[CreateStakeholderErrorBody](curlec/errors/create_stakeholder_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_linked_account(account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[LinkedAccount, FetchLinkedAccountErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the details of a Linked Account by its ID. Also used in Partners API to fetch sub-merchant account details (authentication: OAuth access_token).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.linked_accounts.with_raw_response.fetch_linked_account("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LinkedAccount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchLinkedAccountErrorBody
```

**Async**

```python
result = await async_client.linked_accounts.with_raw_response.fetch_linked_account("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LinkedAccount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchLinkedAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account_id</code> | <code>str</code> | Linked Account ID (acc_*). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[LinkedAccount](curlec/models/linked_account.py), [FetchLinkedAccountErrorBody](curlec/errors/fetch_linked_account_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[LinkedAccount](curlec/models/linked_account.py)</code> -- Linked Account details.

**On `Failure`**: `error` is <code>[FetchLinkedAccountErrorBody](curlec/errors/fetch_linked_account_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_product_config(account_id: str, product_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ProductConfiguration, FetchProductConfigErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the current product configuration and activation status for a Linked Account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.linked_accounts.with_raw_response.fetch_product_config("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProductConfiguration
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchProductConfigErrorBody
```

**Async**

```python
result = await async_client.linked_accounts.with_raw_response.fetch_product_config(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProductConfiguration
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchProductConfigErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account_id</code> | <code>str</code> | Linked Account ID (acc_*). |
| <code>product_id</code> | <code>str</code> | Product configuration ID (acc_prd_*). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[ProductConfiguration](curlec/models/product_configuration.py), [FetchProductConfigErrorBody](curlec/errors/fetch_product_config_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ProductConfiguration](curlec/models/product_configuration.py)</code> -- Product configuration details.

**On `Failure`**: `error` is <code>[FetchProductConfigErrorBody](curlec/errors/fetch_product_config_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def request_product_config(account_id: str, body: V2AccountsProductsRequest | V2AccountsProductsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ProductConfiguration, RequestProductConfigErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Request activation of the Route product for a Linked Account. Submits the account for review and KYC. Activation progresses: requested → under_review → activated.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.linked_accounts.with_raw_response.request_product_config(
    "some example string", V2AccountsProductsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProductConfiguration
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RequestProductConfigErrorBody
```

**Async**

```python
result = await async_client.linked_accounts.with_raw_response.request_product_config(
    "some example string", V2AccountsProductsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProductConfiguration
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RequestProductConfigErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account_id</code> | <code>str</code> | Linked Account ID (acc_*). |
| <code>body</code> | <code>[V2AccountsProductsRequest](curlec/models/v2_accounts_products_request.py) \| [V2AccountsProductsRequestDict](curlec/models/v2_accounts_products_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[ProductConfiguration](curlec/models/product_configuration.py), [RequestProductConfigErrorBody](curlec/errors/request_product_config_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ProductConfiguration](curlec/models/product_configuration.py)</code> -- Product configuration created.

**On `Failure`**: `error` is <code>[RequestProductConfigErrorBody](curlec/errors/request_product_config_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_linked_account(account_id: str, body: V2AccountsRequest1 | V2AccountsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[LinkedAccount, UpdateLinkedAccountErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update mutable fields of a Linked Account. email and business_type cannot be changed after creation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.linked_accounts.with_raw_response.update_linked_account("some example string", V2AccountsRequest1())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LinkedAccount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateLinkedAccountErrorBody
```

**Async**

```python
result = await async_client.linked_accounts.with_raw_response.update_linked_account(
    "some example string", V2AccountsRequest1()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LinkedAccount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateLinkedAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account_id</code> | <code>str</code> | Linked Account ID (acc_*). |
| <code>body</code> | <code>[V2AccountsRequest1](curlec/models/v2_accounts_request1.py) \| [V2AccountsRequest1Dict](curlec/models/v2_accounts_request1.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[LinkedAccount](curlec/models/linked_account.py), [UpdateLinkedAccountErrorBody](curlec/errors/update_linked_account_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[LinkedAccount](curlec/models/linked_account.py)</code> -- Linked Account updated.

**On `Failure`**: `error` is <code>[UpdateLinkedAccountErrorBody](curlec/errors/update_linked_account_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_product_config(account_id: str, product_id: str, body: V2AccountsProductsRequest1 | V2AccountsProductsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ProductConfiguration, UpdateProductConfigErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update settlement details or other configuration for a Route product on a Linked Account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.linked_accounts.with_raw_response.update_product_config(
    "some example string", "some example string", V2AccountsProductsRequest1()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProductConfiguration
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateProductConfigErrorBody
```

**Async**

```python
result = await async_client.linked_accounts.with_raw_response.update_product_config(
    "some example string", "some example string", V2AccountsProductsRequest1()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProductConfiguration
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateProductConfigErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account_id</code> | <code>str</code> | Linked Account ID (acc_*). |
| <code>product_id</code> | <code>str</code> | Product configuration ID (acc_prd_*). |
| <code>body</code> | <code>[V2AccountsProductsRequest1](curlec/models/v2_accounts_products_request1.py) \| [V2AccountsProductsRequest1Dict](curlec/models/v2_accounts_products_request1.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[ProductConfiguration](curlec/models/product_configuration.py), [UpdateProductConfigErrorBody](curlec/errors/update_product_config_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ProductConfiguration](curlec/models/product_configuration.py)</code> -- Product configuration updated.

**On `Failure`**: `error` is <code>[UpdateProductConfigErrorBody](curlec/errors/update_product_config_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_stakeholder(account_id: str, stakeholder_id: str, body: V2AccountsStakeholdersRequest1 | V2AccountsStakeholdersRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Stakeholder, UpdateStakeholderErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update stakeholder information for a Linked Account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.linked_accounts.with_raw_response.update_stakeholder(
    "some example string", "some example string", V2AccountsStakeholdersRequest1()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Stakeholder
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateStakeholderErrorBody
```

**Async**

```python
result = await async_client.linked_accounts.with_raw_response.update_stakeholder(
    "some example string", "some example string", V2AccountsStakeholdersRequest1()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Stakeholder
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateStakeholderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account_id</code> | <code>str</code> | Linked Account ID (acc_*). |
| <code>stakeholder_id</code> | <code>str</code> | Stakeholder ID (sth_*). |
| <code>body</code> | <code>[V2AccountsStakeholdersRequest1](curlec/models/v2_accounts_stakeholders_request1.py) \| [V2AccountsStakeholdersRequest1Dict](curlec/models/v2_accounts_stakeholders_request1.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[Stakeholder](curlec/models/stakeholder.py), [UpdateStakeholderErrorBody](curlec/errors/update_stakeholder_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Stakeholder](curlec/models/stakeholder.py)</code> -- Stakeholder updated.

**On `Failure`**: `error` is <code>[UpdateStakeholderErrorBody](curlec/errors/update_stakeholder_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Orders

> Source: [Orders](curlec/apis/orders.py)

<details>
<summary><code>def create_order(body: OrdersRequest | OrdersRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Order, CreateOrderErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an order before initiating a payment. The returned order_id must be passed to Razorpay Checkout. An order can have multiple payment attempts but only one successful capture.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.orders.with_raw_response.create_order(
    OrdersRequest(amount=50000, currency="INR", receipt="receipt_001")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Order
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateOrderErrorBody
```

**Async**

```python
result = await async_client.orders.with_raw_response.create_order(
    OrdersRequest(amount=50000, currency="INR", receipt="receipt_001")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Order
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateOrderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[OrdersRequest](curlec/models/orders_request.py) \| [OrdersRequestDict](curlec/models/orders_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[Order](curlec/models/order.py), [CreateOrderErrorBody](curlec/errors/create_order_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Order](curlec/models/order.py)</code> -- Order created.

**On `Failure`**: `error` is <code>[CreateOrderErrorBody](curlec/errors/create_order_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_all_orders(*, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, authorized: AuthorizedOrInt | None = None, receipt: str | None = None, expand: list[ExpandRazorpayOrdersApiOrStr] | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[OrdersResponse, FetchAllOrdersErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a paginated list of orders. Maximum 100 records per call.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.orders.with_raw_response.fetch_all_orders()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OrdersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchAllOrdersErrorBody
```

**Async**

```python
result = await async_client.orders.with_raw_response.fetch_all_orders()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OrdersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchAllOrdersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>from_</code> | <code>int \| None</code> | Unix timestamp (seconds). Fetch records created on or after this time.<br>**Default**: <code>None</code> |
| <code>to</code> | <code>int \| None</code> | Unix timestamp (seconds). Fetch records created on or before this time.<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Number of records to return per call. Maximum 100. Default 10.<br>**Default**: <code>10</code> |
| <code>skip</code> | <code>int \| None</code> | Number of records to skip. Use with count for pagination. Default 0.<br>**Default**: <code>0</code> |
| <code>authorized</code> | <code>[AuthorizedOrInt](curlec/models/enums/authorized.py) \| None</code> | 1 = orders with authorized payments only. 0 = without.<br>**Default**: <code>None</code> |
| <code>receipt</code> | <code>str \| None</code> | Filter by receipt value.<br>**Default**: <code>None</code> |
| <code>expand</code> | <code>list&#91;[ExpandRazorpayOrdersApiOrStr](curlec/models/enums/expand_razorpay_orders_api.py)&#93; \| None</code> | Expand: payments, payments.card, transfers, virtual_account.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[OrdersResponse](curlec/models/orders_response.py), [FetchAllOrdersErrorBody](curlec/errors/fetch_all_orders_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[OrdersResponse](curlec/models/orders_response.py)</code> -- Collection of orders.

**On `Failure`**: `error` is <code>[FetchAllOrdersErrorBody](curlec/errors/fetch_all_orders_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_order(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Order, FetchOrderErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the full details and current status of a specific order.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.orders.with_raw_response.fetch_order("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Order
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchOrderErrorBody
```

**Async**

```python
result = await async_client.orders.with_raw_response.fetch_order("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Order
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchOrderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Order ID (order_*). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[Order](curlec/models/order.py), [FetchOrderErrorBody](curlec/errors/fetch_order_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Order](curlec/models/order.py)</code> -- Order details.

**On `Failure`**: `error` is <code>[FetchOrderErrorBody](curlec/errors/fetch_order_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_order_payments(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[OrdersPaymentsResponse, FetchOrderPaymentsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all authorized and failed payment attempts made against a specific order.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.orders.with_raw_response.fetch_order_payments("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OrdersPaymentsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchOrderPaymentsErrorBody
```

**Async**

```python
result = await async_client.orders.with_raw_response.fetch_order_payments("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OrdersPaymentsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchOrderPaymentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Order ID (order_*). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[OrdersPaymentsResponse](curlec/models/orders_payments_response.py), [FetchOrderPaymentsErrorBody](curlec/errors/fetch_order_payments_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[OrdersPaymentsResponse](curlec/models/orders_payments_response.py)</code> -- Collection of payments for the order.

**On `Failure`**: `error` is <code>[FetchOrderPaymentsErrorBody](curlec/errors/fetch_order_payments_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_order(id_: str, body: OrdersRequest1 | OrdersRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Order, UpdateOrderErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the notes field of an existing order. Only notes can be modified after creation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.orders.with_raw_response.update_order(
    "some example string", OrdersRequest1(notes={"key": "some example string"})
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Order
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateOrderErrorBody
```

**Async**

```python
result = await async_client.orders.with_raw_response.update_order(
    "some example string", OrdersRequest1(notes={"key": "some example string"})
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Order
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateOrderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Order ID (order_*). |
| <code>body</code> | <code>[OrdersRequest1](curlec/models/orders_request1.py) \| [OrdersRequest1Dict](curlec/models/orders_request1.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[Order](curlec/models/order.py), [UpdateOrderErrorBody](curlec/errors/update_order_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Order](curlec/models/order.py)</code> -- Updated order.

**On `Failure`**: `error` is <code>[UpdateOrderErrorBody](curlec/errors/update_order_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PartnerAccounts

> Source: [PartnerAccounts](curlec/apis/partner_accounts.py)

<details>
<summary><code>def delete_partner_account(account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V2AccountsResponse, DeletePartnerAccountErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Suspend a sub-merchant account created via Partners API. Sets account status to 'suspended' and returns suspended_at timestamp. Authentication: OAuth access_token as username with empty password.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.partner_accounts.with_raw_response.delete_partner_account("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V2AccountsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeletePartnerAccountErrorBody
```

**Async**

```python
result = await async_client.partner_accounts.with_raw_response.delete_partner_account("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V2AccountsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeletePartnerAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account_id</code> | <code>str</code> | Account ID with prefix acc_ |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[V2AccountsResponse](curlec/models/v2_accounts_response.py), [DeletePartnerAccountErrorBody](curlec/errors/delete_partner_account_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V2AccountsResponse](curlec/models/v2_accounts_response.py)</code> -- Account suspended

**On `Failure`**: `error` is <code>[DeletePartnerAccountErrorBody](curlec/errors/delete_partner_account_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_linked_account2(account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[LinkedAccount, FetchLinkedAccount2ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the details of a Linked Account by its ID. Also used in Partners API to fetch sub-merchant account details (authentication: OAuth access_token).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.partner_accounts.with_raw_response.fetch_linked_account2("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LinkedAccount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchLinkedAccount2ErrorBody
```

**Async**

```python
result = await async_client.partner_accounts.with_raw_response.fetch_linked_account2("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LinkedAccount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchLinkedAccount2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account_id</code> | <code>str</code> | Linked Account ID (acc_*). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[LinkedAccount](curlec/models/linked_account.py), [FetchLinkedAccount2ErrorBody](curlec/errors/fetch_linked_account2_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[LinkedAccount](curlec/models/linked_account.py)</code> -- Linked Account details.

**On `Failure`**: `error` is <code>[FetchLinkedAccount2ErrorBody](curlec/errors/fetch_linked_account2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_linked_account2(account_id: str, body: V2AccountsRequestRazorpayPartnerAccountsApi | V2AccountsRequestRazorpayPartnerAccountsApiDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[LinkedAccount, UpdateLinkedAccount2ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update mutable fields of a Linked Account. email and business_type cannot be changed after creation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.partner_accounts.with_raw_response.update_linked_account2(
    "some example string", V2AccountsRequestRazorpayPartnerAccountsApi()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LinkedAccount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateLinkedAccount2ErrorBody
```

**Async**

```python
result = await async_client.partner_accounts.with_raw_response.update_linked_account2(
    "some example string", V2AccountsRequestRazorpayPartnerAccountsApi()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LinkedAccount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateLinkedAccount2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account_id</code> | <code>str</code> | Linked Account ID (acc_*). |
| <code>body</code> | <code>[V2AccountsRequestRazorpayPartnerAccountsApi](curlec/models/v2_accounts_request_razorpay_partner_accounts_api.py) \| [V2AccountsRequestRazorpayPartnerAccountsApiDict](curlec/models/v2_accounts_request_razorpay_partner_accounts_api.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[LinkedAccount](curlec/models/linked_account.py), [UpdateLinkedAccount2ErrorBody](curlec/errors/update_linked_account2_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[LinkedAccount](curlec/models/linked_account.py)</code> -- Linked Account updated.

**On `Failure`**: `error` is <code>[UpdateLinkedAccount2ErrorBody](curlec/errors/update_linked_account2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PartnerDocuments

> Source: [PartnerDocuments](curlec/apis/partner_documents.py)

<details>
<summary><code>def fetch_account_documents(account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AccountDocument, FetchAccountDocumentsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all KYC documents uploaded for a sub-merchant account. Authentication: OAuth access_token.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.partner_documents.with_raw_response.fetch_account_documents("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccountDocument
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchAccountDocumentsErrorBody
```

**Async**

```python
result = await async_client.partner_documents.with_raw_response.fetch_account_documents("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccountDocument
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchAccountDocumentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account_id</code> | <code>str</code> | Unique identifier of the linked merchant account (e.g. `acc_00000000000001`). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[AccountDocument](curlec/models/account_document.py), [FetchAccountDocumentsErrorBody](curlec/errors/fetch_account_documents_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AccountDocument](curlec/models/account_document.py)</code> -- Account documents

**On `Failure`**: `error` is <code>[FetchAccountDocumentsErrorBody](curlec/errors/fetch_account_documents_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_stakeholder_documents(account_id: str, stakeholder_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StakeholderDocument, FetchStakeholderDocumentsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all KYC documents uploaded for a specific stakeholder. Authentication: OAuth access_token.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.partner_documents.with_raw_response.fetch_stakeholder_documents(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StakeholderDocument
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchStakeholderDocumentsErrorBody
```

**Async**

```python
result = await async_client.partner_documents.with_raw_response.fetch_stakeholder_documents(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StakeholderDocument
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchStakeholderDocumentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account_id</code> | <code>str</code> | Unique identifier of the linked merchant account (e.g. `acc_00000000000001`). |
| <code>stakeholder_id</code> | <code>str</code> | Unique identifier of the stakeholder (e.g. `sth_00000000000001`). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[StakeholderDocument](curlec/models/stakeholder_document.py), [FetchStakeholderDocumentsErrorBody](curlec/errors/fetch_stakeholder_documents_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StakeholderDocument](curlec/models/stakeholder_document.py)</code> -- Stakeholder documents

**On `Failure`**: `error` is <code>[FetchStakeholderDocumentsErrorBody](curlec/errors/fetch_stakeholder_documents_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upload_account_documents(account_id: str, *, document_type: DocumentTypeOrStr | None = None, file: FileInput | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AccountDocument, UploadAccountDocumentsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload KYC documents for business identity and address verification. Multipart form upload. JPG/PNG max 4MB, PDF max 2MB. Authentication: OAuth access_token.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.partner_documents.with_raw_response.upload_account_documents("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccountDocument
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UploadAccountDocumentsErrorBody
```

**Async**

```python
result = await async_client.partner_documents.with_raw_response.upload_account_documents("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccountDocument
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UploadAccountDocumentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account_id</code> | <code>str</code> | Unique identifier of the linked merchant account (e.g. `acc_00000000000001`). |
| <code>document_type</code> | <code>[DocumentTypeOrStr](curlec/models/enums/document_type.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>file</code> | <code>FileInput \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[AccountDocument](curlec/models/account_document.py), [UploadAccountDocumentsErrorBody](curlec/errors/upload_account_documents_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AccountDocument](curlec/models/account_document.py)</code> -- Document uploaded

**On `Failure`**: `error` is <code>[UploadAccountDocumentsErrorBody](curlec/errors/upload_account_documents_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upload_stakeholder_documents(account_id: str, stakeholder_id: str, *, document_type: DocumentType1OrStr | None = None, file: FileInput | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StakeholderDocument, UploadStakeholderDocumentsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload identity and address verification documents for a stakeholder. Supports PAN, Aadhaar (front/back), passport (front/back), voter ID (front/back). Multipart form upload. JPG/PNG max 4MB, PDF max 2MB. Authentication: OAuth access_token.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.partner_documents.with_raw_response.upload_stakeholder_documents(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StakeholderDocument
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UploadStakeholderDocumentsErrorBody
```

**Async**

```python
result = await async_client.partner_documents.with_raw_response.upload_stakeholder_documents(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StakeholderDocument
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UploadStakeholderDocumentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account_id</code> | <code>str</code> | Unique identifier of the linked merchant account (e.g. `acc_00000000000001`). |
| <code>stakeholder_id</code> | <code>str</code> | Unique identifier of the stakeholder (e.g. `sth_00000000000001`). |
| <code>document_type</code> | <code>[DocumentType1OrStr](curlec/models/enums/document_type1.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>file</code> | <code>FileInput \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[StakeholderDocument](curlec/models/stakeholder_document.py), [UploadStakeholderDocumentsErrorBody](curlec/errors/upload_stakeholder_documents_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StakeholderDocument](curlec/models/stakeholder_document.py)</code> -- Document uploaded

**On `Failure`**: `error` is <code>[UploadStakeholderDocumentsErrorBody](curlec/errors/upload_stakeholder_documents_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PartnerStakeholders

> Source: [PartnerStakeholders](curlec/apis/partner_stakeholders.py)

<details>
<summary><code>def create_stakeholder2(account_id: str, body: V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApi | V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApiDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StakeholderRazorpayPartnerStakeholdersApi, CreateStakeholder2ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a business owner or director to a Linked Account. Only one stakeholder is allowed per Route Linked Account. PAN 4th character must be 'P' (individual PAN).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.partner_stakeholders.with_raw_response.create_stakeholder2(
    "some example string",
    V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApi(
        name="some example string", email="some example string"
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StakeholderRazorpayPartnerStakeholdersApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateStakeholder2ErrorBody
```

**Async**

```python
result = await async_client.partner_stakeholders.with_raw_response.create_stakeholder2(
    "some example string",
    V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApi(
        name="some example string", email="some example string"
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StakeholderRazorpayPartnerStakeholdersApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateStakeholder2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account_id</code> | <code>str</code> | Unique identifier of the linked merchant account (e.g. `acc_00000000000001`). |
| <code>body</code> | <code>[V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApi](curlec/models/v2_accounts_stakeholders_request_razorpay_partner_stakeholders_api.py) \| [V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApiDict](curlec/models/v2_accounts_stakeholders_request_razorpay_partner_stakeholders_api.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[StakeholderRazorpayPartnerStakeholdersApi](curlec/models/stakeholder_razorpay_partner_stakeholders_api.py), [CreateStakeholder2ErrorBody](curlec/errors/create_stakeholder2_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StakeholderRazorpayPartnerStakeholdersApi](curlec/models/stakeholder_razorpay_partner_stakeholders_api.py)</code> -- Stakeholder created.

**On `Failure`**: `error` is <code>[CreateStakeholder2ErrorBody](curlec/errors/create_stakeholder2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_all_stakeholders(account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V2AccountsStakeholdersResponse, FetchAllStakeholdersErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all stakeholders associated with a sub-merchant account. Partners API only — Route allows only 1 stakeholder per account. Authentication: OAuth access_token.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.partner_stakeholders.with_raw_response.fetch_all_stakeholders("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V2AccountsStakeholdersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchAllStakeholdersErrorBody
```

**Async**

```python
result = await async_client.partner_stakeholders.with_raw_response.fetch_all_stakeholders("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V2AccountsStakeholdersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchAllStakeholdersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account_id</code> | <code>str</code> | Unique identifier of the linked merchant account (e.g. `acc_00000000000001`). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[V2AccountsStakeholdersResponse](curlec/models/v2_accounts_stakeholders_response.py), [FetchAllStakeholdersErrorBody](curlec/errors/fetch_all_stakeholders_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V2AccountsStakeholdersResponse](curlec/models/v2_accounts_stakeholders_response.py)</code> -- List of stakeholders

**On `Failure`**: `error` is <code>[FetchAllStakeholdersErrorBody](curlec/errors/fetch_all_stakeholders_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_stakeholder2(account_id: str, stakeholder_id: str, body: V2AccountsStakeholdersRequest1 | V2AccountsStakeholdersRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StakeholderRazorpayPartnerStakeholdersApi, UpdateStakeholder2ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update stakeholder information for a Linked Account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.partner_stakeholders.with_raw_response.update_stakeholder2(
    "some example string", "some example string", V2AccountsStakeholdersRequest1()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StakeholderRazorpayPartnerStakeholdersApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateStakeholder2ErrorBody
```

**Async**

```python
result = await async_client.partner_stakeholders.with_raw_response.update_stakeholder2(
    "some example string", "some example string", V2AccountsStakeholdersRequest1()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StakeholderRazorpayPartnerStakeholdersApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateStakeholder2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account_id</code> | <code>str</code> | Linked Account ID (acc_*). |
| <code>stakeholder_id</code> | <code>str</code> | Stakeholder ID (sth_*). |
| <code>body</code> | <code>[V2AccountsStakeholdersRequest1](curlec/models/v2_accounts_stakeholders_request1.py) \| [V2AccountsStakeholdersRequest1Dict](curlec/models/v2_accounts_stakeholders_request1.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[StakeholderRazorpayPartnerStakeholdersApi](curlec/models/stakeholder_razorpay_partner_stakeholders_api.py), [UpdateStakeholder2ErrorBody](curlec/errors/update_stakeholder2_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StakeholderRazorpayPartnerStakeholdersApi](curlec/models/stakeholder_razorpay_partner_stakeholders_api.py)</code> -- Stakeholder updated.

**On `Failure`**: `error` is <code>[UpdateStakeholder2ErrorBody](curlec/errors/update_stakeholder2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PartnerWebhooks

> Source: [PartnerWebhooks](curlec/apis/partner_webhooks.py)

<details>
<summary><code>def create_partner_webhook(account_id: str, body: V2AccountsWebhooksRequest | V2AccountsWebhooksRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PartnerWebhook, CreatePartnerWebhookErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a webhook to receive events for a sub-merchant account. Maximum 30 webhooks per account. Authentication: OAuth access_token.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.partner_webhooks.with_raw_response.create_partner_webhook(
    "some example string", V2AccountsWebhooksRequest(url="some example string", events={"key": True})
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PartnerWebhook
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatePartnerWebhookErrorBody
```

**Async**

```python
result = await async_client.partner_webhooks.with_raw_response.create_partner_webhook(
    "some example string", V2AccountsWebhooksRequest(url="some example string", events={"key": True})
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PartnerWebhook
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatePartnerWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account_id</code> | <code>str</code> | Unique identifier of the linked merchant account (e.g. `acc_00000000000001`). |
| <code>body</code> | <code>[V2AccountsWebhooksRequest](curlec/models/v2_accounts_webhooks_request.py) \| [V2AccountsWebhooksRequestDict](curlec/models/v2_accounts_webhooks_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[PartnerWebhook](curlec/models/partner_webhook.py), [CreatePartnerWebhookErrorBody](curlec/errors/create_partner_webhook_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PartnerWebhook](curlec/models/partner_webhook.py)</code> -- Webhook created

**On `Failure`**: `error` is <code>[CreatePartnerWebhookErrorBody](curlec/errors/create_partner_webhook_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_partner_webhook(account_id: str, webhook_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DeletePartnerWebhookErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a webhook for a sub-merchant account. Returns empty array on success. Authentication: OAuth access_token.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.partner_webhooks.with_raw_response.delete_partner_webhook("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeletePartnerWebhookErrorBody
```

**Async**

```python
result = await async_client.partner_webhooks.with_raw_response.delete_partner_webhook(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeletePartnerWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account_id</code> | <code>str</code> | Unique identifier of the linked merchant account (e.g. `acc_00000000000001`). |
| <code>webhook_id</code> | <code>str</code> | Unique identifier of the webhook (e.g. `we_00000000000001`). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;Any, [DeletePartnerWebhookErrorBody](curlec/errors/delete_partner_webhook_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Webhook deleted

**On `Failure`**: `error` is <code>[DeletePartnerWebhookErrorBody](curlec/errors/delete_partner_webhook_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_partner_webhook(account_id: str, webhook_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PartnerWebhook, FetchPartnerWebhookErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve details of a specific webhook for a sub-merchant account. Authentication: OAuth access_token.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.partner_webhooks.with_raw_response.fetch_partner_webhook("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PartnerWebhook
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchPartnerWebhookErrorBody
```

**Async**

```python
result = await async_client.partner_webhooks.with_raw_response.fetch_partner_webhook(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PartnerWebhook
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchPartnerWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account_id</code> | <code>str</code> | Unique identifier of the linked merchant account (e.g. `acc_00000000000001`). |
| <code>webhook_id</code> | <code>str</code> | Unique identifier of the webhook (e.g. `we_00000000000001`). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[PartnerWebhook](curlec/models/partner_webhook.py), [FetchPartnerWebhookErrorBody](curlec/errors/fetch_partner_webhook_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PartnerWebhook](curlec/models/partner_webhook.py)</code> -- Webhook details

**On `Failure`**: `error` is <code>[FetchPartnerWebhookErrorBody](curlec/errors/fetch_partner_webhook_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_partner_webhooks(account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V2AccountsWebhooksResponse, ListPartnerWebhooksErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all webhooks configured for a sub-merchant account. Authentication: OAuth access_token.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.partner_webhooks.with_raw_response.list_partner_webhooks("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V2AccountsWebhooksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPartnerWebhooksErrorBody
```

**Async**

```python
result = await async_client.partner_webhooks.with_raw_response.list_partner_webhooks("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V2AccountsWebhooksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPartnerWebhooksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account_id</code> | <code>str</code> | Unique identifier of the linked merchant account (e.g. `acc_00000000000001`). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[V2AccountsWebhooksResponse](curlec/models/v2_accounts_webhooks_response.py), [ListPartnerWebhooksErrorBody](curlec/errors/list_partner_webhooks_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V2AccountsWebhooksResponse](curlec/models/v2_accounts_webhooks_response.py)</code> -- List of webhooks

**On `Failure`**: `error` is <code>[ListPartnerWebhooksErrorBody](curlec/errors/list_partner_webhooks_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_partner_webhook(account_id: str, webhook_id: str, body: PartnerWebhook | PartnerWebhookDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PartnerWebhook, UpdatePartnerWebhookErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update webhook URL, events, secret, or active status for a sub-merchant account. Authentication: OAuth access_token.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.partner_webhooks.with_raw_response.update_partner_webhook(
    "some example string", "some example string", PartnerWebhook()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PartnerWebhook
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdatePartnerWebhookErrorBody
```

**Async**

```python
result = await async_client.partner_webhooks.with_raw_response.update_partner_webhook(
    "some example string", "some example string", PartnerWebhook()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PartnerWebhook
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdatePartnerWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account_id</code> | <code>str</code> | Unique identifier of the linked merchant account (e.g. `acc_00000000000001`). |
| <code>webhook_id</code> | <code>str</code> | Unique identifier of the webhook (e.g. `we_00000000000001`). |
| <code>body</code> | <code>[PartnerWebhook](curlec/models/partner_webhook.py) \| [PartnerWebhookDict](curlec/models/partner_webhook.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[PartnerWebhook](curlec/models/partner_webhook.py), [UpdatePartnerWebhookErrorBody](curlec/errors/update_partner_webhook_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PartnerWebhook](curlec/models/partner_webhook.py)</code> -- Webhook updated

**On `Failure`**: `error` is <code>[UpdatePartnerWebhookErrorBody](curlec/errors/update_partner_webhook_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentDowntimes

> Source: [PaymentDowntimes](curlec/apis/payment_downtimes.py)

<details>
<summary><code>def fetch_payment_downtime(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PaymentDowntime, FetchPaymentDowntimeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve details of a specific payment downtime event.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.payment_downtimes.with_raw_response.fetch_payment_downtime("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentDowntime
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchPaymentDowntimeErrorBody
```

**Async**

```python
result = await async_client.payment_downtimes.with_raw_response.fetch_payment_downtime("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentDowntime
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchPaymentDowntimeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Downtime identifier. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[PaymentDowntime](curlec/models/payment_downtime.py), [FetchPaymentDowntimeErrorBody](curlec/errors/fetch_payment_downtime_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PaymentDowntime](curlec/models/payment_downtime.py)</code> -- Downtime details.

**On `Failure`**: `error` is <code>[FetchPaymentDowntimeErrorBody](curlec/errors/fetch_payment_downtime_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_payment_downtimes(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PaymentsDowntimesResponse, FetchPaymentDowntimesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve current and upcoming payment method downtimes for cards, netbanking, and UPI. Use to surface degraded methods in checkout UI.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.payment_downtimes.with_raw_response.fetch_payment_downtimes()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentsDowntimesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchPaymentDowntimesErrorBody
```

**Async**

```python
result = await async_client.payment_downtimes.with_raw_response.fetch_payment_downtimes()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentsDowntimesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchPaymentDowntimesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[PaymentsDowntimesResponse](curlec/models/payments_downtimes_response.py), [FetchPaymentDowntimesErrorBody](curlec/errors/fetch_payment_downtimes_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PaymentsDowntimesResponse](curlec/models/payments_downtimes_response.py)</code> -- Collection of active and scheduled downtimes.

**On `Failure`**: `error` is <code>[FetchPaymentDowntimesErrorBody](curlec/errors/fetch_payment_downtimes_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentLinks

> Source: [PaymentLinks](curlec/apis/payment_links.py)

<details>
<summary><code>def cancel_payment_link(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PaymentLink, CancelPaymentLinkErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel a payment link. Only links in 'created' status can be cancelled. Paid, partially paid, and already expired links cannot be cancelled.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.payment_links.with_raw_response.cancel_payment_link("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentLink
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelPaymentLinkErrorBody
```

**Async**

```python
result = await async_client.payment_links.with_raw_response.cancel_payment_link("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentLink
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelPaymentLinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Payment Link ID (plink_*). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[PaymentLink](curlec/models/payment_link.py), [CancelPaymentLinkErrorBody](curlec/errors/cancel_payment_link_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PaymentLink](curlec/models/payment_link.py)</code> -- Payment link cancelled. Status changes to 'cancelled'.

**On `Failure`**: `error` is <code>[CancelPaymentLinkErrorBody](curlec/errors/cancel_payment_link_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_payment_link(body: PaymentLinksRequest | PaymentLinksRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PaymentLink, CreatePaymentLinkErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a shareable payment link to collect payments via SMS and email. Supports standard links (all payment methods) and UPI-only links (set upi_link=true). UPI links are not available in test mode. Partial payments are not supported for UPI links. Links expire after 6 months by default.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.payment_links.with_raw_response.create_payment_link(
    PaymentLinksRequest(
        amount=50000,
        currency="INR",
        description="Payment for Order #1234",
        customer=Customer1RazorpayPaymentLinksApi(
            name="Aisha Sharma", email="aisha@example.com", contact="+919876543210"
        ),
        notify=Notify1(sms=True, email=True),
        reminder_enable=True,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentLink
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatePaymentLinkErrorBody
```

**Async**

```python
result = await async_client.payment_links.with_raw_response.create_payment_link(
    PaymentLinksRequest(
        amount=50000,
        currency="INR",
        description="Payment for Order #1234",
        customer=Customer1RazorpayPaymentLinksApi(
            name="Aisha Sharma", email="aisha@example.com", contact="+919876543210"
        ),
        notify=Notify1(sms=True, email=True),
        reminder_enable=True,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentLink
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatePaymentLinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PaymentLinksRequest](curlec/models/payment_links_request.py) \| [PaymentLinksRequestDict](curlec/models/payment_links_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[PaymentLink](curlec/models/payment_link.py), [CreatePaymentLinkErrorBody](curlec/errors/create_payment_link_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PaymentLink](curlec/models/payment_link.py)</code> -- Payment link created.

**On `Failure`**: `error` is <code>[CreatePaymentLinkErrorBody](curlec/errors/create_payment_link_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_all_payment_links(*, payment_id: str | None = None, reference_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PaymentLinksResponse, FetchAllPaymentLinksErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all payment links. Filter by payment_id or reference_id to narrow results.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.payment_links.with_raw_response.fetch_all_payment_links()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentLinksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchAllPaymentLinksErrorBody
```

**Async**

```python
result = await async_client.payment_links.with_raw_response.fetch_all_payment_links()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentLinksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchAllPaymentLinksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>payment_id</code> | <code>str \| None</code> | Filter by associated payment ID.<br>**Default**: <code>None</code> |
| <code>reference_id</code> | <code>str \| None</code> | Filter by your custom reference number.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[PaymentLinksResponse](curlec/models/payment_links_response.py), [FetchAllPaymentLinksErrorBody](curlec/errors/fetch_all_payment_links_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PaymentLinksResponse](curlec/models/payment_links_response.py)</code> -- List of payment links.

**On `Failure`**: `error` is <code>[FetchAllPaymentLinksErrorBody](curlec/errors/fetch_all_payment_links_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_payment_link(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PaymentLink, FetchPaymentLinkErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve full details of a specific payment link.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.payment_links.with_raw_response.fetch_payment_link("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentLink
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchPaymentLinkErrorBody
```

**Async**

```python
result = await async_client.payment_links.with_raw_response.fetch_payment_link("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentLink
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchPaymentLinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Payment Link ID (plink_*). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[PaymentLink](curlec/models/payment_link.py), [FetchPaymentLinkErrorBody](curlec/errors/fetch_payment_link_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PaymentLink](curlec/models/payment_link.py)</code> -- Payment link details.

**On `Failure`**: `error` is <code>[FetchPaymentLinkErrorBody](curlec/errors/fetch_payment_link_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def resend_payment_link_notification(id_: str, medium: MediumOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PaymentLinksNotifyByResponse, ResendPaymentLinkNotificationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send or resend a payment link notification to the customer via SMS or email.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.payment_links.with_raw_response.resend_payment_link_notification("some example string", Medium.SMS)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentLinksNotifyByResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ResendPaymentLinkNotificationErrorBody
```

**Async**

```python
result = await async_client.payment_links.with_raw_response.resend_payment_link_notification(
    "some example string", Medium.SMS
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentLinksNotifyByResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ResendPaymentLinkNotificationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Payment Link ID (plink_*). |
| <code>medium</code> | <code>[MediumOrStr](curlec/models/enums/medium.py)</code> | Notification medium. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[PaymentLinksNotifyByResponse](curlec/models/payment_links_notify_by_response.py), [ResendPaymentLinkNotificationErrorBody](curlec/errors/resend_payment_link_notification_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PaymentLinksNotifyByResponse](curlec/models/payment_links_notify_by_response.py)</code> -- Notification sent.

**On `Failure`**: `error` is <code>[ResendPaymentLinkNotificationErrorBody](curlec/errors/resend_payment_link_notification_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_payment_link(id_: str, body: PaymentLinksRequest1 | PaymentLinksRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PaymentLink, UpdatePaymentLinkErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing payment link. Updates are only allowed when the link is in 'created' or 'partially_paid' status.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.payment_links.with_raw_response.update_payment_link("some example string", PaymentLinksRequest1())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentLink
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdatePaymentLinkErrorBody
```

**Async**

```python
result = await async_client.payment_links.with_raw_response.update_payment_link(
    "some example string", PaymentLinksRequest1()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentLink
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdatePaymentLinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Payment Link ID (plink_*). |
| <code>body</code> | <code>[PaymentLinksRequest1](curlec/models/payment_links_request1.py) \| [PaymentLinksRequest1Dict](curlec/models/payment_links_request1.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[PaymentLink](curlec/models/payment_link.py), [UpdatePaymentLinkErrorBody](curlec/errors/update_payment_link_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PaymentLink](curlec/models/payment_link.py)</code> -- Updated payment link.

**On `Failure`**: `error` is <code>[UpdatePaymentLinkErrorBody](curlec/errors/update_payment_link_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Payments

> Source: [Payments](curlec/apis/payments.py)

<details>
<summary><code>def capture_payment(id_: str, body: PaymentsCaptureRequest | PaymentsCaptureRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PaymentRazorpayPaymentsApi, CapturePaymentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Capture an authorized payment to collect funds. Must be called within the capture window (default 5 days). Amount must exactly equal authorized amount unless partial capture is enabled.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.payments.with_raw_response.capture_payment(
    "some example string", PaymentsCaptureRequest(amount=50000, currency="INR")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentRazorpayPaymentsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CapturePaymentErrorBody
```

**Async**

```python
result = await async_client.payments.with_raw_response.capture_payment(
    "some example string", PaymentsCaptureRequest(amount=50000, currency="INR")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentRazorpayPaymentsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CapturePaymentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Payment ID (pay_*). Must be in 'authorized' status. |
| <code>body</code> | <code>[PaymentsCaptureRequest](curlec/models/payments_capture_request.py) \| [PaymentsCaptureRequestDict](curlec/models/payments_capture_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[PaymentRazorpayPaymentsApi](curlec/models/payment_razorpay_payments_api.py), [CapturePaymentErrorBody](curlec/errors/capture_payment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PaymentRazorpayPaymentsApi](curlec/models/payment_razorpay_payments_api.py)</code> -- Payment captured. Status changes to 'captured'.

**On `Failure`**: `error` is <code>[CapturePaymentErrorBody](curlec/errors/capture_payment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_all_payments(*, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PaymentsResponse, FetchAllPaymentsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a paginated list of payments. Maximum 100 per call.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.payments.with_raw_response.fetch_all_payments()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchAllPaymentsErrorBody
```

**Async**

```python
result = await async_client.payments.with_raw_response.fetch_all_payments()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchAllPaymentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>from_</code> | <code>int \| None</code> | Unix timestamp (seconds). Fetch records created on or after this time.<br>**Default**: <code>None</code> |
| <code>to</code> | <code>int \| None</code> | Unix timestamp (seconds). Fetch records created on or before this time.<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Number of records to return per call. Maximum 100. Default 10.<br>**Default**: <code>10</code> |
| <code>skip</code> | <code>int \| None</code> | Number of records to skip. Use with count for pagination. Default 0.<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[PaymentsResponse](curlec/models/payments_response.py), [FetchAllPaymentsErrorBody](curlec/errors/fetch_all_payments_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PaymentsResponse](curlec/models/payments_response.py)</code> -- Collection of payments.

**On `Failure`**: `error` is <code>[FetchAllPaymentsErrorBody](curlec/errors/fetch_all_payments_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_payment(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PaymentRazorpayPaymentsApi, FetchPaymentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve full details and current status of a specific payment. Always re-fetch before acting — status can change.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.payments.with_raw_response.fetch_payment("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentRazorpayPaymentsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchPaymentErrorBody
```

**Async**

```python
result = await async_client.payments.with_raw_response.fetch_payment("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentRazorpayPaymentsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchPaymentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Payment ID (pay_*). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[PaymentRazorpayPaymentsApi](curlec/models/payment_razorpay_payments_api.py), [FetchPaymentErrorBody](curlec/errors/fetch_payment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PaymentRazorpayPaymentsApi](curlec/models/payment_razorpay_payments_api.py)</code> -- Payment details.

**On `Failure`**: `error` is <code>[FetchPaymentErrorBody](curlec/errors/fetch_payment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_payment(id_: str, body: PaymentsRequest | PaymentsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PaymentRazorpayPaymentsApi, UpdatePaymentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the notes field of a payment. Only notes can be modified.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.payments.with_raw_response.update_payment(
    "some example string", PaymentsRequest(notes={"key": "some example string"})
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentRazorpayPaymentsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdatePaymentErrorBody
```

**Async**

```python
result = await async_client.payments.with_raw_response.update_payment(
    "some example string", PaymentsRequest(notes={"key": "some example string"})
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentRazorpayPaymentsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdatePaymentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Payment ID (pay_*). |
| <code>body</code> | <code>[PaymentsRequest](curlec/models/payments_request.py) \| [PaymentsRequestDict](curlec/models/payments_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[PaymentRazorpayPaymentsApi](curlec/models/payment_razorpay_payments_api.py), [UpdatePaymentErrorBody](curlec/errors/update_payment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PaymentRazorpayPaymentsApi](curlec/models/payment_razorpay_payments_api.py)</code> -- Updated payment.

**On `Failure`**: `error` is <code>[UpdatePaymentErrorBody](curlec/errors/update_payment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Plans

> Source: [Plans](curlec/apis/plans.py)

<details>
<summary><code>def create_plan(body: PlansRequest | PlansRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Plan, CreatePlanErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Define a recurring billing plan with a fixed period, interval, and amount. Plans are reusable across multiple subscriptions. Once created, plan details cannot be modified.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.plans.with_raw_response.create_plan(
    PlansRequest(
        period=Period1.MONTHLY,
        interval=1,
        item=Item1(name="Pro Plan", description="Monthly SaaS subscription", amount=49900, currency="INR"),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Plan
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatePlanErrorBody
```

**Async**

```python
result = await async_client.plans.with_raw_response.create_plan(
    PlansRequest(
        period=Period1.MONTHLY,
        interval=1,
        item=Item1(name="Pro Plan", description="Monthly SaaS subscription", amount=49900, currency="INR"),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Plan
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatePlanErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PlansRequest](curlec/models/plans_request.py) \| [PlansRequestDict](curlec/models/plans_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[Plan](curlec/models/plan.py), [CreatePlanErrorBody](curlec/errors/create_plan_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Plan](curlec/models/plan.py)</code> -- Plan created.

**On `Failure`**: `error` is <code>[CreatePlanErrorBody](curlec/errors/create_plan_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_plan(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Plan, FetchPlanErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details of a specific billing plan.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.plans.with_raw_response.fetch_plan("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Plan
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchPlanErrorBody
```

**Async**

```python
result = await async_client.plans.with_raw_response.fetch_plan("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Plan
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchPlanErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Plan ID (plan_*). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[Plan](curlec/models/plan.py), [FetchPlanErrorBody](curlec/errors/fetch_plan_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Plan](curlec/models/plan.py)</code> -- Plan details.

**On `Failure`**: `error` is <code>[FetchPlanErrorBody](curlec/errors/fetch_plan_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_plans(*, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PlansResponse, ListPlansErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all billing plans. Supports pagination.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.plans.with_raw_response.list_plans()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PlansResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPlansErrorBody
```

**Async**

```python
result = await async_client.plans.with_raw_response.list_plans()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PlansResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPlansErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>count</code> | <code>int \| None</code> | Number of records to return per call. Maximum 100. Default 10.<br>**Default**: <code>10</code> |
| <code>skip</code> | <code>int \| None</code> | Number of records to skip. Use with count for pagination. Default 0.<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[PlansResponse](curlec/models/plans_response.py), [ListPlansErrorBody](curlec/errors/list_plans_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PlansResponse](curlec/models/plans_response.py)</code> -- Collection of plans.

**On `Failure`**: `error` is <code>[ListPlansErrorBody](curlec/errors/list_plans_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## QrCodes

> Source: [QrCodes](curlec/apis/qr_codes.py)

<details>
<summary><code>def close_qr_code(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[QrCode, CloseQrCodeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deactivate a QR code to stop accepting new payments. Once closed, the QR code cannot be reopened.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qr_codes.with_raw_response.close_qr_code("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QrCode
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CloseQrCodeErrorBody
```

**Async**

```python
result = await async_client.qr_codes.with_raw_response.close_qr_code("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QrCode
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CloseQrCodeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | QR code ID (qr_*). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[QrCode](curlec/models/qr_code.py), [CloseQrCodeErrorBody](curlec/errors/close_qr_code_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[QrCode](curlec/models/qr_code.py)</code> -- QR code closed. Status changes to 'closed'.

**On `Failure`**: `error` is <code>[CloseQrCodeErrorBody](curlec/errors/close_qr_code_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_qr_code(body: PaymentsQrCodesRequest | PaymentsQrCodesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[QrCode, CreateQrCodeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a UPI QR code for accepting digital payments. Only upi_qr type is supported (on-demand feature; requires merchant activation). single_use QR codes require fixed_amount=true and close_by maximum is 45 days. multiple_use QR codes have no expiry restriction.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qr_codes.with_raw_response.create_qr_code(
    PaymentsQrCodesRequest(name="some example string", usage=Usage.SINGLE_USE, fixed_amount=True)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QrCode
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateQrCodeErrorBody
```

**Async**

```python
result = await async_client.qr_codes.with_raw_response.create_qr_code(
    PaymentsQrCodesRequest(name="some example string", usage=Usage.SINGLE_USE, fixed_amount=True)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QrCode
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateQrCodeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PaymentsQrCodesRequest](curlec/models/payments_qr_codes_request.py) \| [PaymentsQrCodesRequestDict](curlec/models/payments_qr_codes_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[QrCode](curlec/models/qr_code.py), [CreateQrCodeErrorBody](curlec/errors/create_qr_code_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[QrCode](curlec/models/qr_code.py)</code> -- QR code created.

**On `Failure`**: `error` is <code>[CreateQrCodeErrorBody](curlec/errors/create_qr_code_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_all_qr_codes(*, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, customer_id: str | None = None, payment_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PaymentsQrCodesResponse, FetchAllQrCodesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all QR codes. Filter by customer_id or payment_id.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qr_codes.with_raw_response.fetch_all_qr_codes()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentsQrCodesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchAllQrCodesErrorBody
```

**Async**

```python
result = await async_client.qr_codes.with_raw_response.fetch_all_qr_codes()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentsQrCodesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchAllQrCodesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>from_</code> | <code>int \| None</code> | Unix timestamp (seconds). Fetch records created on or after this time.<br>**Default**: <code>None</code> |
| <code>to</code> | <code>int \| None</code> | Unix timestamp (seconds). Fetch records created on or before this time.<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Number of records to return per call. Maximum 100. Default 10.<br>**Default**: <code>10</code> |
| <code>skip</code> | <code>int \| None</code> | Number of records to skip. Use with count for pagination. Default 0.<br>**Default**: <code>0</code> |
| <code>customer_id</code> | <code>str \| None</code> | Filter by customer ID (cust_*).<br>**Default**: <code>None</code> |
| <code>payment_id</code> | <code>str \| None</code> | Filter QR codes associated with a specific payment.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[PaymentsQrCodesResponse](curlec/models/payments_qr_codes_response.py), [FetchAllQrCodesErrorBody](curlec/errors/fetch_all_qr_codes_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PaymentsQrCodesResponse](curlec/models/payments_qr_codes_response.py)</code> -- Collection of QR codes.

**On `Failure`**: `error` is <code>[FetchAllQrCodesErrorBody](curlec/errors/fetch_all_qr_codes_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_qr_code(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[QrCode, FetchQrCodeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve details of a specific QR code including payment counts and status.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qr_codes.with_raw_response.fetch_qr_code("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QrCode
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchQrCodeErrorBody
```

**Async**

```python
result = await async_client.qr_codes.with_raw_response.fetch_qr_code("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QrCode
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchQrCodeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | QR code ID (qr_*). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[QrCode](curlec/models/qr_code.py), [FetchQrCodeErrorBody](curlec/errors/fetch_qr_code_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[QrCode](curlec/models/qr_code.py)</code> -- QR code details.

**On `Failure`**: `error` is <code>[FetchQrCodeErrorBody](curlec/errors/fetch_qr_code_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_qr_code_payments(id_: str, *, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PaymentsQrCodesPaymentsResponse, FetchQrCodePaymentsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all payments made against a specific QR code.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qr_codes.with_raw_response.fetch_qr_code_payments("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentsQrCodesPaymentsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchQrCodePaymentsErrorBody
```

**Async**

```python
result = await async_client.qr_codes.with_raw_response.fetch_qr_code_payments("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentsQrCodesPaymentsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchQrCodePaymentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | QR code ID (qr_*). |
| <code>from_</code> | <code>int \| None</code> | Unix timestamp (seconds). Fetch records created on or after this time.<br>**Default**: <code>None</code> |
| <code>to</code> | <code>int \| None</code> | Unix timestamp (seconds). Fetch records created on or before this time.<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Number of records to return per call. Maximum 100. Default 10.<br>**Default**: <code>10</code> |
| <code>skip</code> | <code>int \| None</code> | Number of records to skip. Use with count for pagination. Default 0.<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[PaymentsQrCodesPaymentsResponse](curlec/models/payments_qr_codes_payments_response.py), [FetchQrCodePaymentsErrorBody](curlec/errors/fetch_qr_code_payments_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PaymentsQrCodesPaymentsResponse](curlec/models/payments_qr_codes_payments_response.py)</code> -- Collection of payments for the QR code.

**On `Failure`**: `error` is <code>[FetchQrCodePaymentsErrorBody](curlec/errors/fetch_qr_code_payments_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_qr_code(id_: str, body: PaymentsQrCodesRequest1 | PaymentsQrCodesRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[QrCode, UpdateQrCodeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the notes field of a QR code. Only notes can be modified after creation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qr_codes.with_raw_response.update_qr_code(
    "some example string", PaymentsQrCodesRequest1(notes={"key": "some example string"})
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QrCode
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateQrCodeErrorBody
```

**Async**

```python
result = await async_client.qr_codes.with_raw_response.update_qr_code(
    "some example string", PaymentsQrCodesRequest1(notes={"key": "some example string"})
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QrCode
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateQrCodeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | QR code ID (qr_*). |
| <code>body</code> | <code>[PaymentsQrCodesRequest1](curlec/models/payments_qr_codes_request1.py) \| [PaymentsQrCodesRequest1Dict](curlec/models/payments_qr_codes_request1.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[QrCode](curlec/models/qr_code.py), [UpdateQrCodeErrorBody](curlec/errors/update_qr_code_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[QrCode](curlec/models/qr_code.py)</code> -- Updated QR code.

**On `Failure`**: `error` is <code>[UpdateQrCodeErrorBody](curlec/errors/update_qr_code_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Refunds

> Source: [Refunds](curlec/apis/refunds.py)

<details>
<summary><code>def create_refund(id_: str, *, body: PaymentsRefundRequest | PaymentsRefundRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RefundRazorpayRefundsApi, CreateRefundErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiate a full or partial refund for a captured payment. Use speed=normal (default, 5-7 business days) or speed=optimum for instant refund (falls back to normal if unavailable). Use the X-Refund-Idempotency header with a unique key (>=10 chars) to safely retry without duplicate refunds.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.refunds.with_raw_response.create_refund(
    "some example string", body=PaymentsRefundRequest(amount=50000, speed=Speed.NORMAL, receipt="refund_receipt_001")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RefundRazorpayRefundsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateRefundErrorBody
```

**Async**

```python
result = await async_client.refunds.with_raw_response.create_refund(
    "some example string", body=PaymentsRefundRequest(amount=50000, speed=Speed.NORMAL, receipt="refund_receipt_001")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RefundRazorpayRefundsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateRefundErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Payment ID to refund (pay_*). Payment must be captured. |
| <code>body</code> | <code>[PaymentsRefundRequest](curlec/models/payments_refund_request.py) \| [PaymentsRefundRequestDict](curlec/models/payments_refund_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[RefundRazorpayRefundsApi](curlec/models/refund_razorpay_refunds_api.py), [CreateRefundErrorBody](curlec/errors/create_refund_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RefundRazorpayRefundsApi](curlec/models/refund_razorpay_refunds_api.py)</code> -- Refund initiated.

**On `Failure`**: `error` is <code>[CreateRefundErrorBody](curlec/errors/create_refund_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_all_refunds(*, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RefundsResponse, FetchAllRefundsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a paginated list of all refunds across payments. Maximum 100 per call.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.refunds.with_raw_response.fetch_all_refunds()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RefundsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchAllRefundsErrorBody
```

**Async**

```python
result = await async_client.refunds.with_raw_response.fetch_all_refunds()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RefundsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchAllRefundsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>from_</code> | <code>int \| None</code> | Unix timestamp (seconds). Fetch records created on or after this time.<br>**Default**: <code>None</code> |
| <code>to</code> | <code>int \| None</code> | Unix timestamp (seconds). Fetch records created on or before this time.<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Number of records to return per call. Maximum 100. Default 10.<br>**Default**: <code>10</code> |
| <code>skip</code> | <code>int \| None</code> | Number of records to skip. Use with count for pagination. Default 0.<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[RefundsResponse](curlec/models/refunds_response.py), [FetchAllRefundsErrorBody](curlec/errors/fetch_all_refunds_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RefundsResponse](curlec/models/refunds_response.py)</code> -- Collection of refunds.

**On `Failure`**: `error` is <code>[FetchAllRefundsErrorBody](curlec/errors/fetch_all_refunds_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_payment_refund(payment_id: str, refund_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RefundRazorpayRefundsApi, FetchPaymentRefundErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a specific refund by its ID scoped to a particular payment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.refunds.with_raw_response.fetch_payment_refund("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RefundRazorpayRefundsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchPaymentRefundErrorBody
```

**Async**

```python
result = await async_client.refunds.with_raw_response.fetch_payment_refund("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RefundRazorpayRefundsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchPaymentRefundErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>payment_id</code> | <code>str</code> | Payment ID (pay_*). |
| <code>refund_id</code> | <code>str</code> | Refund ID (rfnd_*). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[RefundRazorpayRefundsApi](curlec/models/refund_razorpay_refunds_api.py), [FetchPaymentRefundErrorBody](curlec/errors/fetch_payment_refund_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RefundRazorpayRefundsApi](curlec/models/refund_razorpay_refunds_api.py)</code> -- Refund details.

**On `Failure`**: `error` is <code>[FetchPaymentRefundErrorBody](curlec/errors/fetch_payment_refund_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_payment_refunds(payment_id: str, *, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PaymentsRefundsResponse, FetchPaymentRefundsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all refunds issued against a specific payment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.refunds.with_raw_response.fetch_payment_refunds("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentsRefundsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchPaymentRefundsErrorBody
```

**Async**

```python
result = await async_client.refunds.with_raw_response.fetch_payment_refunds("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentsRefundsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchPaymentRefundsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>payment_id</code> | <code>str</code> | Payment ID (pay_*). |
| <code>from_</code> | <code>int \| None</code> | Unix timestamp (seconds). Fetch records created on or after this time.<br>**Default**: <code>None</code> |
| <code>to</code> | <code>int \| None</code> | Unix timestamp (seconds). Fetch records created on or before this time.<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Number of records to return per call. Maximum 100. Default 10.<br>**Default**: <code>10</code> |
| <code>skip</code> | <code>int \| None</code> | Number of records to skip. Use with count for pagination. Default 0.<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[PaymentsRefundsResponse](curlec/models/payments_refunds_response.py), [FetchPaymentRefundsErrorBody](curlec/errors/fetch_payment_refunds_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PaymentsRefundsResponse](curlec/models/payments_refunds_response.py)</code> -- Collection of refunds for the payment.

**On `Failure`**: `error` is <code>[FetchPaymentRefundsErrorBody](curlec/errors/fetch_payment_refunds_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_refund(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RefundRazorpayRefundsApi, FetchRefundErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve full details and current status of a specific refund.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.refunds.with_raw_response.fetch_refund("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RefundRazorpayRefundsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchRefundErrorBody
```

**Async**

```python
result = await async_client.refunds.with_raw_response.fetch_refund("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RefundRazorpayRefundsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchRefundErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Refund ID (rfnd_*). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[RefundRazorpayRefundsApi](curlec/models/refund_razorpay_refunds_api.py), [FetchRefundErrorBody](curlec/errors/fetch_refund_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RefundRazorpayRefundsApi](curlec/models/refund_razorpay_refunds_api.py)</code> -- Refund details.

**On `Failure`**: `error` is <code>[FetchRefundErrorBody](curlec/errors/fetch_refund_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_refund(id_: str, body: RefundsRequest | RefundsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RefundRazorpayRefundsApi, UpdateRefundErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the notes field of a refund. Only notes can be modified.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.refunds.with_raw_response.update_refund(
    "some example string", RefundsRequest(notes={"key": "some example string"})
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RefundRazorpayRefundsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateRefundErrorBody
```

**Async**

```python
result = await async_client.refunds.with_raw_response.update_refund(
    "some example string", RefundsRequest(notes={"key": "some example string"})
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RefundRazorpayRefundsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateRefundErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Refund ID (rfnd_*). |
| <code>body</code> | <code>[RefundsRequest](curlec/models/refunds_request.py) \| [RefundsRequestDict](curlec/models/refunds_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[RefundRazorpayRefundsApi](curlec/models/refund_razorpay_refunds_api.py), [UpdateRefundErrorBody](curlec/errors/update_refund_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RefundRazorpayRefundsApi](curlec/models/refund_razorpay_refunds_api.py)</code> -- Updated refund.

**On `Failure`**: `error` is <code>[UpdateRefundErrorBody](curlec/errors/update_refund_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SettlementsApi

> Source: [SettlementsApi](curlec/apis/settlements_api.py)

<details>
<summary><code>def fetch_all_settlements(*, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SettlementsResponse, FetchAllSettlementsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a paginated list of settlements. Each settlement represents a batch transfer to your bank account. Maximum 100 per call.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.settlements_api.with_raw_response.fetch_all_settlements()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SettlementsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchAllSettlementsErrorBody
```

**Async**

```python
result = await async_client.settlements_api.with_raw_response.fetch_all_settlements()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SettlementsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchAllSettlementsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>from_</code> | <code>int \| None</code> | Unix timestamp (seconds). Fetch records created on or after this time.<br>**Default**: <code>None</code> |
| <code>to</code> | <code>int \| None</code> | Unix timestamp (seconds). Fetch records created on or before this time.<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Number of records to return per call. Maximum 100. Default 10.<br>**Default**: <code>10</code> |
| <code>skip</code> | <code>int \| None</code> | Number of records to skip. Use with count for pagination. Default 0.<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[SettlementsResponse](curlec/models/settlements_response.py), [FetchAllSettlementsErrorBody](curlec/errors/fetch_all_settlements_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SettlementsResponse](curlec/models/settlements_response.py)</code> -- Collection of settlements.

**On `Failure`**: `error` is <code>[FetchAllSettlementsErrorBody](curlec/errors/fetch_all_settlements_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_settlement(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Settlement, FetchSettlementErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve details of a specific settlement transaction.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.settlements_api.with_raw_response.fetch_settlement("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Settlement
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchSettlementErrorBody
```

**Async**

```python
result = await async_client.settlements_api.with_raw_response.fetch_settlement("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Settlement
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchSettlementErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Settlement ID (setl_*). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[Settlement](curlec/models/settlement.py), [FetchSettlementErrorBody](curlec/errors/fetch_settlement_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Settlement](curlec/models/settlement.py)</code> -- Settlement details.

**On `Failure`**: `error` is <code>[FetchSettlementErrorBody](curlec/errors/fetch_settlement_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_settlement_recon(year: int, month: int, *, day: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SettlementsReconCombinedResponse, FetchSettlementReconErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a detailed transaction-level reconciliation report for a given month (or day). Each record maps a payment, refund, transfer, or adjustment to its settlement. Use for accounting reconciliation. Maximum 1000 records per call.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.settlements_api.with_raw_response.fetch_settlement_recon(2024, 4)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SettlementsReconCombinedResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchSettlementReconErrorBody
```

**Async**

```python
result = await async_client.settlements_api.with_raw_response.fetch_settlement_recon(2024, 4)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SettlementsReconCombinedResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchSettlementReconErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>year</code> | <code>int</code> | Settlement year in YYYY format. |
| <code>month</code> | <code>int</code> | Settlement month in MM format (01–12). |
| <code>day</code> | <code>int \| None</code> | Settlement day in DD format (1–31). Omit to fetch the full month.<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Records per call. Maximum 1000. Default 10.<br>**Default**: <code>10</code> |
| <code>skip</code> | <code>int \| None</code> | Records to skip for pagination.<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[SettlementsReconCombinedResponse](curlec/models/settlements_recon_combined_response.py), [FetchSettlementReconErrorBody](curlec/errors/fetch_settlement_recon_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SettlementsReconCombinedResponse](curlec/models/settlements_recon_combined_response.py)</code> -- Reconciliation report records.

**On `Failure`**: `error` is <code>[FetchSettlementReconErrorBody](curlec/errors/fetch_settlement_recon_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Subscriptions

> Source: [Subscriptions](curlec/apis/subscriptions.py)

<details>
<summary><code>def cancel_subscription(id_: str, *, body: SubscriptionsCancelRequest | SubscriptionsCancelRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Subscription, CancelSubscriptionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel an active or authenticated subscription. Use cancel_at_cycle_end=1 to continue service until the end of the current cycle before cancelling.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.subscriptions.with_raw_response.cancel_subscription("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Subscription
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelSubscriptionErrorBody
```

**Async**

```python
result = await async_client.subscriptions.with_raw_response.cancel_subscription("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Subscription
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelSubscriptionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Subscription ID (sub_*). |
| <code>body</code> | <code>[SubscriptionsCancelRequest](curlec/models/subscriptions_cancel_request.py) \| [SubscriptionsCancelRequestDict](curlec/models/subscriptions_cancel_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[Subscription](curlec/models/subscription.py), [CancelSubscriptionErrorBody](curlec/errors/cancel_subscription_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Subscription](curlec/models/subscription.py)</code> -- Subscription cancelled.

**On `Failure`**: `error` is <code>[CancelSubscriptionErrorBody](curlec/errors/cancel_subscription_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cancel_subscription_scheduled_changes(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Subscription, CancelSubscriptionScheduledChangesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel any pending plan or quantity changes that were scheduled for the next billing cycle.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.subscriptions.with_raw_response.cancel_subscription_scheduled_changes("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Subscription
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelSubscriptionScheduledChangesErrorBody
```

**Async**

```python
result = await async_client.subscriptions.with_raw_response.cancel_subscription_scheduled_changes("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Subscription
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelSubscriptionScheduledChangesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Subscription ID (sub_*). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[Subscription](curlec/models/subscription.py), [CancelSubscriptionScheduledChangesErrorBody](curlec/errors/cancel_subscription_scheduled_changes_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Subscription](curlec/models/subscription.py)</code> -- Scheduled changes cancelled.

**On `Failure`**: `error` is <code>[CancelSubscriptionScheduledChangesErrorBody](curlec/errors/cancel_subscription_scheduled_changes_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_subscription(body: SubscriptionsRequest | SubscriptionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Subscription, CreateSubscriptionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Subscribe a customer to a plan. Returns a short_url that the customer MUST open to authorize the payment mandate (UPI Autopay, NACH, or card-on-file). The subscription will not charge until the mandate is authorized. Set notify_info to send the auth link via SMS/email automatically. Requires Subscriptions feature enabled on your Razorpay account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.subscriptions.with_raw_response.create_subscription(
    SubscriptionsRequest(plan_id="some example string", total_count=1)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Subscription
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSubscriptionErrorBody
```

**Async**

```python
result = await async_client.subscriptions.with_raw_response.create_subscription(
    SubscriptionsRequest(plan_id="some example string", total_count=1)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Subscription
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSubscriptionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SubscriptionsRequest](curlec/models/subscriptions_request.py) \| [SubscriptionsRequestDict](curlec/models/subscriptions_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[Subscription](curlec/models/subscription.py), [CreateSubscriptionErrorBody](curlec/errors/create_subscription_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Subscription](curlec/models/subscription.py)</code> -- Subscription created. Send short_url to the customer for mandate authorization.

**On `Failure`**: `error` is <code>[CreateSubscriptionErrorBody](curlec/errors/create_subscription_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_subscription_offer(sub_id: str, offer_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DeleteSubscriptionOfferErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove an applied offer/coupon from a subscription. The offer will no longer apply from the next billing cycle.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.subscriptions.with_raw_response.delete_subscription_offer("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteSubscriptionOfferErrorBody
```

**Async**

```python
result = await async_client.subscriptions.with_raw_response.delete_subscription_offer(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteSubscriptionOfferErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sub_id</code> | <code>str</code> | Subscription ID (sub_*). |
| <code>offer_id</code> | <code>str</code> | Offer ID to remove. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;Any, [DeleteSubscriptionOfferErrorBody](curlec/errors/delete_subscription_offer_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Offer removed from subscription.

**On `Failure`**: `error` is <code>[DeleteSubscriptionOfferErrorBody](curlec/errors/delete_subscription_offer_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_subscription(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Subscription, FetchSubscriptionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get current status and full details of a subscription.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.subscriptions.with_raw_response.fetch_subscription("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Subscription
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchSubscriptionErrorBody
```

**Async**

```python
result = await async_client.subscriptions.with_raw_response.fetch_subscription("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Subscription
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchSubscriptionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Subscription ID (sub_*). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[Subscription](curlec/models/subscription.py), [FetchSubscriptionErrorBody](curlec/errors/fetch_subscription_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Subscription](curlec/models/subscription.py)</code> -- Subscription details.

**On `Failure`**: `error` is <code>[FetchSubscriptionErrorBody](curlec/errors/fetch_subscription_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_subscription_scheduled_changes(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SubscriptionsRetrieveScheduledChangesResponse, FetchSubscriptionScheduledChangesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve any pending plan or quantity changes scheduled for the next billing cycle.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.subscriptions.with_raw_response.fetch_subscription_scheduled_changes("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SubscriptionsRetrieveScheduledChangesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchSubscriptionScheduledChangesErrorBody
```

**Async**

```python
result = await async_client.subscriptions.with_raw_response.fetch_subscription_scheduled_changes("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SubscriptionsRetrieveScheduledChangesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchSubscriptionScheduledChangesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Subscription ID (sub_*). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[SubscriptionsRetrieveScheduledChangesResponse](curlec/models/subscriptions_retrieve_scheduled_changes_response.py), [FetchSubscriptionScheduledChangesErrorBody](curlec/errors/fetch_subscription_scheduled_changes_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SubscriptionsRetrieveScheduledChangesResponse](curlec/models/subscriptions_retrieve_scheduled_changes_response.py)</code> -- Scheduled changes for the subscription.

**On `Failure`**: `error` is <code>[FetchSubscriptionScheduledChangesErrorBody](curlec/errors/fetch_subscription_scheduled_changes_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_subscriptions(*, plan_id: str | None = None, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SubscriptionsResponse, ListSubscriptionsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all subscriptions. Filter by plan_id or status. Returns up to 100 per call.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.subscriptions.with_raw_response.list_subscriptions()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SubscriptionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSubscriptionsErrorBody
```

**Async**

```python
result = await async_client.subscriptions.with_raw_response.list_subscriptions()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SubscriptionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSubscriptionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>plan_id</code> | <code>str \| None</code> | Filter by plan ID.<br>**Default**: <code>None</code> |
| <code>from_</code> | <code>int \| None</code> | Unix timestamp (seconds). Fetch records created on or after this time.<br>**Default**: <code>None</code> |
| <code>to</code> | <code>int \| None</code> | Unix timestamp (seconds). Fetch records created on or before this time.<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Number of records to return per call. Maximum 100. Default 10.<br>**Default**: <code>10</code> |
| <code>skip</code> | <code>int \| None</code> | Number of records to skip. Use with count for pagination. Default 0.<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[SubscriptionsResponse](curlec/models/subscriptions_response.py), [ListSubscriptionsErrorBody](curlec/errors/list_subscriptions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SubscriptionsResponse](curlec/models/subscriptions_response.py)</code> -- Collection of subscriptions.

**On `Failure`**: `error` is <code>[ListSubscriptionsErrorBody](curlec/errors/list_subscriptions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def pause_subscription(id_: str, *, body: SubscriptionsPauseRequest | SubscriptionsPauseRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Subscription, PauseSubscriptionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pause an active subscription. No charges will be attempted while paused. Resume with POST /subscriptions/{id}/resume.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.subscriptions.with_raw_response.pause_subscription("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Subscription
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PauseSubscriptionErrorBody
```

**Async**

```python
result = await async_client.subscriptions.with_raw_response.pause_subscription("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Subscription
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PauseSubscriptionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Subscription ID (sub_*). |
| <code>body</code> | <code>[SubscriptionsPauseRequest](curlec/models/subscriptions_pause_request.py) \| [SubscriptionsPauseRequestDict](curlec/models/subscriptions_pause_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[Subscription](curlec/models/subscription.py), [PauseSubscriptionErrorBody](curlec/errors/pause_subscription_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Subscription](curlec/models/subscription.py)</code> -- Subscription paused.

**On `Failure`**: `error` is <code>[PauseSubscriptionErrorBody](curlec/errors/pause_subscription_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def resume_subscription(id_: str, *, body: SubscriptionsResumeRequest | SubscriptionsResumeRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Subscription, ResumeSubscriptionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resume a paused subscription. Charging resumes on the next scheduled cycle.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.subscriptions.with_raw_response.resume_subscription("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Subscription
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ResumeSubscriptionErrorBody
```

**Async**

```python
result = await async_client.subscriptions.with_raw_response.resume_subscription("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Subscription
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ResumeSubscriptionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Subscription ID (sub_*). |
| <code>body</code> | <code>[SubscriptionsResumeRequest](curlec/models/subscriptions_resume_request.py) \| [SubscriptionsResumeRequestDict](curlec/models/subscriptions_resume_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[Subscription](curlec/models/subscription.py), [ResumeSubscriptionErrorBody](curlec/errors/resume_subscription_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Subscription](curlec/models/subscription.py)</code> -- Subscription resumed.

**On `Failure`**: `error` is <code>[ResumeSubscriptionErrorBody](curlec/errors/resume_subscription_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_subscription(id_: str, body: SubscriptionsRequest1 | SubscriptionsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Subscription, UpdateSubscriptionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update plan, quantity, or schedule future changes for a subscription. Use schedule_change_at='now' for immediate effect (creates a new billing cycle) or 'cycle_end' to defer until the current cycle ends. Cannot change plan mid-cycle without creating a new cycle.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.subscriptions.with_raw_response.update_subscription("some example string", SubscriptionsRequest1())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Subscription
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateSubscriptionErrorBody
```

**Async**

```python
result = await async_client.subscriptions.with_raw_response.update_subscription(
    "some example string", SubscriptionsRequest1()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Subscription
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateSubscriptionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Subscription ID (sub_*). |
| <code>body</code> | <code>[SubscriptionsRequest1](curlec/models/subscriptions_request1.py) \| [SubscriptionsRequest1Dict](curlec/models/subscriptions_request1.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[Subscription](curlec/models/subscription.py), [UpdateSubscriptionErrorBody](curlec/errors/update_subscription_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Subscription](curlec/models/subscription.py)</code> -- Subscription updated.

**On `Failure`**: `error` is <code>[UpdateSubscriptionErrorBody](curlec/errors/update_subscription_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Transfers

> Source: [Transfers](curlec/apis/transfers.py)

<details>
<summary><code>def create_direct_transfer(body: TransfersRequest | TransfersRequestDict, *, x_transfer_idempotency: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TransferRazorpayTransfersApi, CreateDirectTransferErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an on-demand direct transfer from the merchant account to a Linked Account. Requires the Direct Transfer feature to be enabled on the account. Supports idempotency via the X-Transfer-Idempotency header (unique to direct transfers).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.transfers.with_raw_response.create_direct_transfer(
    TransfersRequest(account="some example string", amount=1)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TransferRazorpayTransfersApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateDirectTransferErrorBody
```

**Async**

```python
result = await async_client.transfers.with_raw_response.create_direct_transfer(
    TransfersRequest(account="some example string", amount=1)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TransferRazorpayTransfersApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateDirectTransferErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransfersRequest](curlec/models/transfers_request.py) \| [TransfersRequestDict](curlec/models/transfers_request.py)</code> | The request body. |
| <code>x_transfer_idempotency</code> | <code>str \| None</code> | Idempotency key for direct transfers. If provided, retrying with the same key within 24 hours returns the original transfer instead of creating a duplicate.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[TransferRazorpayTransfersApi](curlec/models/transfer_razorpay_transfers_api.py), [CreateDirectTransferErrorBody](curlec/errors/create_direct_transfer_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TransferRazorpayTransfersApi](curlec/models/transfer_razorpay_transfers_api.py)</code> -- Transfer created.

**On `Failure`**: `error` is <code>[CreateDirectTransferErrorBody](curlec/errors/create_direct_transfer_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_transfers_from_payment(id_: str, body: PaymentsTransfersRequest | PaymentsTransfersRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PaymentsTransfersResponse, CreateTransfersFromPaymentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Split a captured payment to one or more Linked Accounts. Amount is deducted from the payment and transferred to the recipient. INR only, minimum ₹100 per transfer.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.transfers.with_raw_response.create_transfers_from_payment(
    "some example string", PaymentsTransfersRequest(transfers=[Transfer1(account="some example string", amount=1)])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentsTransfersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateTransfersFromPaymentErrorBody
```

**Async**

```python
result = await async_client.transfers.with_raw_response.create_transfers_from_payment(
    "some example string", PaymentsTransfersRequest(transfers=[Transfer1(account="some example string", amount=1)])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentsTransfersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateTransfersFromPaymentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Payment ID (pay_*). |
| <code>body</code> | <code>[PaymentsTransfersRequest](curlec/models/payments_transfers_request.py) \| [PaymentsTransfersRequestDict](curlec/models/payments_transfers_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[PaymentsTransfersResponse](curlec/models/payments_transfers_response.py), [CreateTransfersFromPaymentErrorBody](curlec/errors/create_transfers_from_payment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PaymentsTransfersResponse](curlec/models/payments_transfers_response.py)</code> -- Transfers created.

**On `Failure`**: `error` is <code>[CreateTransfersFromPaymentErrorBody](curlec/errors/create_transfers_from_payment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_transfer(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TransferRazorpayTransfersApi, FetchTransferErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve details of a specific transfer by ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.transfers.with_raw_response.fetch_transfer("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TransferRazorpayTransfersApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchTransferErrorBody
```

**Async**

```python
result = await async_client.transfers.with_raw_response.fetch_transfer("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TransferRazorpayTransfersApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchTransferErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Transfer ID (trf_*). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[TransferRazorpayTransfersApi](curlec/models/transfer_razorpay_transfers_api.py), [FetchTransferErrorBody](curlec/errors/fetch_transfer_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TransferRazorpayTransfersApi](curlec/models/transfer_razorpay_transfers_api.py)</code> -- Transfer details.

**On `Failure`**: `error` is <code>[FetchTransferErrorBody](curlec/errors/fetch_transfer_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_transfers_for_payment(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PaymentsTransfersResponse, FetchTransfersForPaymentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all transfers created from a specific payment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.transfers.with_raw_response.fetch_transfers_for_payment("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentsTransfersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchTransfersForPaymentErrorBody
```

**Async**

```python
result = await async_client.transfers.with_raw_response.fetch_transfers_for_payment("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentsTransfersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchTransfersForPaymentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Payment ID (pay_*). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[PaymentsTransfersResponse](curlec/models/payments_transfers_response.py), [FetchTransfersForPaymentErrorBody](curlec/errors/fetch_transfers_for_payment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PaymentsTransfersResponse](curlec/models/payments_transfers_response.py)</code> -- List of transfers for the payment.

**On `Failure`**: `error` is <code>[FetchTransfersForPaymentErrorBody](curlec/errors/fetch_transfers_for_payment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_reversals(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TransfersReversalsResponse, ListReversalsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all reversals for a specific transfer.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.transfers.with_raw_response.list_reversals("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TransfersReversalsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListReversalsErrorBody
```

**Async**

```python
result = await async_client.transfers.with_raw_response.list_reversals("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TransfersReversalsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListReversalsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Transfer ID (trf_*). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[TransfersReversalsResponse](curlec/models/transfers_reversals_response.py), [ListReversalsErrorBody](curlec/errors/list_reversals_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TransfersReversalsResponse](curlec/models/transfers_reversals_response.py)</code> -- List of reversals.

**On `Failure`**: `error` is <code>[ListReversalsErrorBody](curlec/errors/list_reversals_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_transfers(*, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, recipient_settlement_id: str | None = None, expand: ExpandRazorpayTransfersApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TransfersResponse, ListTransfersErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a paginated list of transfers. Filter by recipient_settlement_id to fetch transfers included in a specific settlement. Use expand[]=recipient_settlement to include settlement details.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.transfers.with_raw_response.list_transfers()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TransfersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTransfersErrorBody
```

**Async**

```python
result = await async_client.transfers.with_raw_response.list_transfers()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TransfersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTransfersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>from_</code> | <code>int \| None</code> | Unix timestamp filter (start).<br>**Default**: <code>None</code> |
| <code>to</code> | <code>int \| None</code> | Unix timestamp filter (end).<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Number of records to return. Default: 10. Maximum: 100.<br>**Default**: <code>10</code> |
| <code>skip</code> | <code>int \| None</code> | Number of records to skip. Use for pagination. Default: 0.<br>**Default**: <code>0</code> |
| <code>recipient_settlement_id</code> | <code>str \| None</code> | Filter transfers by settlement ID in the Linked Account.<br>**Default**: <code>None</code> |
| <code>expand</code> | <code>[ExpandRazorpayTransfersApiOrStr](curlec/models/enums/expand_razorpay_transfers_api.py) \| None</code> | Expand recipient_settlement to include full settlement object.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[TransfersResponse](curlec/models/transfers_response.py), [ListTransfersErrorBody](curlec/errors/list_transfers_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TransfersResponse](curlec/models/transfers_response.py)</code> -- List of transfers.

**On `Failure`**: `error` is <code>[ListTransfersErrorBody](curlec/errors/list_transfers_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def modify_transfer_settlement_hold(id_: str, body: TransfersRequest1 | TransfersRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TransferRazorpayTransfersApi, ModifyTransferSettlementHoldErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Put a transfer's settlement on hold or release an existing hold. Use on_hold=true to hold settlement, on_hold=false to release. on_hold_until sets a future timestamp for automatic hold release.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.transfers.with_raw_response.modify_transfer_settlement_hold("some example string", TransfersRequest1())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TransferRazorpayTransfersApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ModifyTransferSettlementHoldErrorBody
```

**Async**

```python
result = await async_client.transfers.with_raw_response.modify_transfer_settlement_hold(
    "some example string", TransfersRequest1()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TransferRazorpayTransfersApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ModifyTransferSettlementHoldErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Transfer ID (trf_*). |
| <code>body</code> | <code>[TransfersRequest1](curlec/models/transfers_request1.py) \| [TransfersRequest1Dict](curlec/models/transfers_request1.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[TransferRazorpayTransfersApi](curlec/models/transfer_razorpay_transfers_api.py), [ModifyTransferSettlementHoldErrorBody](curlec/errors/modify_transfer_settlement_hold_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TransferRazorpayTransfersApi](curlec/models/transfer_razorpay_transfers_api.py)</code> -- Transfer settlement hold updated.

**On `Failure`**: `error` is <code>[ModifyTransferSettlementHoldErrorBody](curlec/errors/modify_transfer_settlement_hold_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def reverse_transfer(id_: str, *, body: TransfersReversalsRequest | TransfersReversalsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Reversal, ReverseTransferErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Move funds from a Linked Account back to the merchant. Partial reversals are supported. Multiple reversals per transfer are allowed as long as the total reversed amount does not exceed the transfer amount.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.transfers.with_raw_response.reverse_transfer("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Reversal
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReverseTransferErrorBody
```

**Async**

```python
result = await async_client.transfers.with_raw_response.reverse_transfer("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Reversal
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReverseTransferErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Transfer ID (trf_*). |
| <code>body</code> | <code>[TransfersReversalsRequest](curlec/models/transfers_reversals_request.py) \| [TransfersReversalsRequestDict](curlec/models/transfers_reversals_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[Reversal](curlec/models/reversal.py), [ReverseTransferErrorBody](curlec/errors/reverse_transfer_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Reversal](curlec/models/reversal.py)</code> -- Reversal created.

**On `Failure`**: `error` is <code>[ReverseTransferErrorBody](curlec/errors/reverse_transfer_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## VirtualAccounts

> Source: [VirtualAccounts](curlec/apis/virtual_accounts.py)

<details>
<summary><code>def add_allowed_payer(va_id: str, body: VirtualAccountsAllowedPayersRequest | VirtualAccountsAllowedPayersRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[VirtualAccount, AddAllowedPayerErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Whitelist a specific payer bank account or VPA for a virtual account (Smart Collect with Third Party Validation). Only whitelisted payers can successfully pay into this virtual account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.virtual_accounts.with_raw_response.add_allowed_payer(
    "some example string", VirtualAccountsAllowedPayersRequest(type_=Type2RazorpayVirtualAccountsApi.BANK_ACCOUNT)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VirtualAccount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AddAllowedPayerErrorBody
```

**Async**

```python
result = await async_client.virtual_accounts.with_raw_response.add_allowed_payer(
    "some example string", VirtualAccountsAllowedPayersRequest(type_=Type2RazorpayVirtualAccountsApi.BANK_ACCOUNT)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VirtualAccount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AddAllowedPayerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>va_id</code> | <code>str</code> | Virtual Account ID (va_*). |
| <code>body</code> | <code>[VirtualAccountsAllowedPayersRequest](curlec/models/virtual_accounts_allowed_payers_request.py) \| [VirtualAccountsAllowedPayersRequestDict](curlec/models/virtual_accounts_allowed_payers_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[VirtualAccount](curlec/models/virtual_account.py), [AddAllowedPayerErrorBody](curlec/errors/add_allowed_payer_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[VirtualAccount](curlec/models/virtual_account.py)</code> -- Allowed payer added.

**On `Failure`**: `error` is <code>[AddAllowedPayerErrorBody](curlec/errors/add_allowed_payer_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def add_vpa_receiver(id_: str, body: VirtualAccountsReceiversRequest | VirtualAccountsReceiversRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[VirtualAccount, AddVpaReceiverErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a UPI VPA receiver to an existing virtual account (Smart Collect 2.0). Requires the VPA receiver feature to be enabled on the merchant account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.virtual_accounts.with_raw_response.add_vpa_receiver(
    "some example string", VirtualAccountsReceiversRequest(types=[Type1RazorpayVirtualAccountsApi.VPA])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VirtualAccount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AddVpaReceiverErrorBody
```

**Async**

```python
result = await async_client.virtual_accounts.with_raw_response.add_vpa_receiver(
    "some example string", VirtualAccountsReceiversRequest(types=[Type1RazorpayVirtualAccountsApi.VPA])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VirtualAccount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AddVpaReceiverErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Virtual Account ID (va_*). |
| <code>body</code> | <code>[VirtualAccountsReceiversRequest](curlec/models/virtual_accounts_receivers_request.py) \| [VirtualAccountsReceiversRequestDict](curlec/models/virtual_accounts_receivers_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[VirtualAccount](curlec/models/virtual_account.py), [AddVpaReceiverErrorBody](curlec/errors/add_vpa_receiver_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[VirtualAccount](curlec/models/virtual_account.py)</code> -- VPA receiver added. Returns the updated VirtualAccount.

**On `Failure`**: `error` is <code>[AddVpaReceiverErrorBody](curlec/errors/add_vpa_receiver_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def close_virtual_account(id_: str, body: VirtualAccountsCloseRequest | VirtualAccountsCloseRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[VirtualAccount, CloseVirtualAccountErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Manually close an active virtual account so it no longer accepts payments.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.virtual_accounts.with_raw_response.close_virtual_account(
    "some example string", VirtualAccountsCloseRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VirtualAccount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CloseVirtualAccountErrorBody
```

**Async**

```python
result = await async_client.virtual_accounts.with_raw_response.close_virtual_account(
    "some example string", VirtualAccountsCloseRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VirtualAccount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CloseVirtualAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Virtual Account ID (va_*). |
| <code>body</code> | <code>[VirtualAccountsCloseRequest](curlec/models/virtual_accounts_close_request.py) \| [VirtualAccountsCloseRequestDict](curlec/models/virtual_accounts_close_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[VirtualAccount](curlec/models/virtual_account.py), [CloseVirtualAccountErrorBody](curlec/errors/close_virtual_account_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[VirtualAccount](curlec/models/virtual_account.py)</code> -- Virtual Account closed.

**On `Failure`**: `error` is <code>[CloseVirtualAccountErrorBody](curlec/errors/close_virtual_account_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_virtual_account(body: VirtualAccountsRequest | VirtualAccountsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[VirtualAccount, CreateVirtualAccountErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a virtual bank account (and optionally a VPA) for accepting NEFT/RTGS/IMPS/UPI payments. Set amount_expected=0 to accept any amount. Auto-closes after 90 days of inactivity. Maximum close_by timestamp: 2147483647.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.virtual_accounts.with_raw_response.create_virtual_account(
    VirtualAccountsRequest(
        receivers=Receivers(types=[TypeRazorpayVirtualAccountsApi.BANK_ACCOUNT]), description="some example string"
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VirtualAccount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateVirtualAccountErrorBody
```

**Async**

```python
result = await async_client.virtual_accounts.with_raw_response.create_virtual_account(
    VirtualAccountsRequest(
        receivers=Receivers(types=[TypeRazorpayVirtualAccountsApi.BANK_ACCOUNT]), description="some example string"
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VirtualAccount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateVirtualAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[VirtualAccountsRequest](curlec/models/virtual_accounts_request.py) \| [VirtualAccountsRequestDict](curlec/models/virtual_accounts_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[VirtualAccount](curlec/models/virtual_account.py), [CreateVirtualAccountErrorBody](curlec/errors/create_virtual_account_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[VirtualAccount](curlec/models/virtual_account.py)</code> -- Virtual Account created.

**On `Failure`**: `error` is <code>[CreateVirtualAccountErrorBody](curlec/errors/create_virtual_account_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_allowed_payer(va_id: str, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DeleteAllowedPayerErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a payer from the whitelist of a virtual account (Smart Collect TPV). The payer will no longer be able to make payments to this virtual account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.virtual_accounts.with_raw_response.delete_allowed_payer("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAllowedPayerErrorBody
```

**Async**

```python
result = await async_client.virtual_accounts.with_raw_response.delete_allowed_payer(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAllowedPayerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>va_id</code> | <code>str</code> | Virtual Account ID (va_*). |
| <code>id_</code> | <code>str</code> | Allowed payer ID to remove. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;Any, [DeleteAllowedPayerErrorBody](curlec/errors/delete_allowed_payer_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Allowed payer removed.

**On `Failure`**: `error` is <code>[DeleteAllowedPayerErrorBody](curlec/errors/delete_allowed_payer_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_bank_transfer(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BankTransfer, FetchBankTransferErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the BankTransfer entity associated with a payment received via a Virtual Account. Contains the UTR number, payer bank account details, and transfer mode.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.virtual_accounts.with_raw_response.fetch_bank_transfer("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BankTransfer
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchBankTransferErrorBody
```

**Async**

```python
result = await async_client.virtual_accounts.with_raw_response.fetch_bank_transfer("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BankTransfer
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchBankTransferErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Payment ID (pay_*). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[BankTransfer](curlec/models/bank_transfer.py), [FetchBankTransferErrorBody](curlec/errors/fetch_bank_transfer_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BankTransfer](curlec/models/bank_transfer.py)</code> -- Bank transfer details.

**On `Failure`**: `error` is <code>[FetchBankTransferErrorBody](curlec/errors/fetch_bank_transfer_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_virtual_account(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[VirtualAccount, FetchVirtualAccountErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve details of a specific virtual account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.virtual_accounts.with_raw_response.fetch_virtual_account("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VirtualAccount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchVirtualAccountErrorBody
```

**Async**

```python
result = await async_client.virtual_accounts.with_raw_response.fetch_virtual_account("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VirtualAccount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchVirtualAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Virtual Account ID (va_*). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[VirtualAccount](curlec/models/virtual_account.py), [FetchVirtualAccountErrorBody](curlec/errors/fetch_virtual_account_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[VirtualAccount](curlec/models/virtual_account.py)</code> -- Virtual Account details.

**On `Failure`**: `error` is <code>[FetchVirtualAccountErrorBody](curlec/errors/fetch_virtual_account_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_virtual_account_payments(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[VirtualAccountsPaymentsResponse, FetchVirtualAccountPaymentsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all payments received by a virtual account. Returns Payment objects.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.virtual_accounts.with_raw_response.fetch_virtual_account_payments("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VirtualAccountsPaymentsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchVirtualAccountPaymentsErrorBody
```

**Async**

```python
result = await async_client.virtual_accounts.with_raw_response.fetch_virtual_account_payments("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VirtualAccountsPaymentsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchVirtualAccountPaymentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Virtual Account ID (va_*). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[VirtualAccountsPaymentsResponse](curlec/models/virtual_accounts_payments_response.py), [FetchVirtualAccountPaymentsErrorBody](curlec/errors/fetch_virtual_account_payments_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[VirtualAccountsPaymentsResponse](curlec/models/virtual_accounts_payments_response.py)</code> -- List of payments for the virtual account.

**On `Failure`**: `error` is <code>[FetchVirtualAccountPaymentsErrorBody](curlec/errors/fetch_virtual_account_payments_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_virtual_accounts(*, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[VirtualAccountsResponse, ListVirtualAccountsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a paginated list of virtual accounts with optional filters.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.virtual_accounts.with_raw_response.list_virtual_accounts()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VirtualAccountsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListVirtualAccountsErrorBody
```

**Async**

```python
result = await async_client.virtual_accounts.with_raw_response.list_virtual_accounts()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VirtualAccountsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListVirtualAccountsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>from_</code> | <code>int \| None</code> | Unix timestamp filter (start).<br>**Default**: <code>None</code> |
| <code>to</code> | <code>int \| None</code> | Unix timestamp filter (end).<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Number of records to return. Default: 10. Maximum: 100.<br>**Default**: <code>10</code> |
| <code>skip</code> | <code>int \| None</code> | Number of records to skip. Use for pagination. Default: 0.<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[VirtualAccountsResponse](curlec/models/virtual_accounts_response.py), [ListVirtualAccountsErrorBody](curlec/errors/list_virtual_accounts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[VirtualAccountsResponse](curlec/models/virtual_accounts_response.py)</code> -- List of Virtual Accounts.

**On `Failure`**: `error` is <code>[ListVirtualAccountsErrorBody](curlec/errors/list_virtual_accounts_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_virtual_account(id_: str, body: VirtualAccountsRequest1 | VirtualAccountsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[VirtualAccount, UpdateVirtualAccountErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the amount_expected or close_by timestamp on an active virtual account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.virtual_accounts.with_raw_response.update_virtual_account(
    "some example string", VirtualAccountsRequest1()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VirtualAccount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateVirtualAccountErrorBody
```

**Async**

```python
result = await async_client.virtual_accounts.with_raw_response.update_virtual_account(
    "some example string", VirtualAccountsRequest1()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VirtualAccount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateVirtualAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Virtual Account ID (va_*). |
| <code>body</code> | <code>[VirtualAccountsRequest1](curlec/models/virtual_accounts_request1.py) \| [VirtualAccountsRequest1Dict](curlec/models/virtual_accounts_request1.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[VirtualAccount](curlec/models/virtual_account.py), [UpdateVirtualAccountErrorBody](curlec/errors/update_virtual_account_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[VirtualAccount](curlec/models/virtual_account.py)</code> -- Virtual Account updated.

**On `Failure`**: `error` is <code>[UpdateVirtualAccountErrorBody](curlec/errors/update_virtual_account_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## XAccountValidation

> Source: [XAccountValidation](curlec/apis/x_account_validation.py)

<details>
<summary><code>def fetch_fund_account_validation(validation_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FundAccountValidation, FetchFundAccountValidationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch details of a specific fund account validation by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.x_account_validation.with_raw_response.fetch_fund_account_validation("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FundAccountValidation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchFundAccountValidationErrorBody
```

**Async**

```python
result = await async_client.x_account_validation.with_raw_response.fetch_fund_account_validation("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FundAccountValidation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchFundAccountValidationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>validation_id</code> | <code>str</code> | Unique identifier of the fund account validation (e.g. `fav_00000000000001`). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[FundAccountValidation](curlec/models/fund_account_validation.py), [FetchFundAccountValidationErrorBody](curlec/errors/fetch_fund_account_validation_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FundAccountValidation](curlec/models/fund_account_validation.py)</code> -- Validation details

**On `Failure`**: `error` is <code>[FetchFundAccountValidationErrorBody](curlec/errors/fetch_fund_account_validation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_fund_account_validations(*, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FundAccountsValidationsResponse, ListFundAccountValidationsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all fund account validation records, optionally filtered by date range.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.x_account_validation.with_raw_response.list_fund_account_validations()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FundAccountsValidationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListFundAccountValidationsErrorBody
```

**Async**

```python
result = await async_client.x_account_validation.with_raw_response.list_fund_account_validations()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FundAccountsValidationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListFundAccountValidationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>from_</code> | <code>int \| None</code> | Unix timestamp. Only validations created from this timestamp onwards are returned.<br>**Default**: <code>None</code> |
| <code>to</code> | <code>int \| None</code> | Unix timestamp. Only validations created before this timestamp are returned.<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Number of validation records to return. Default: 10. Maximum: 100.<br>**Default**: <code>10</code> |
| <code>skip</code> | <code>int \| None</code> | Number of validation records to skip. Use for pagination. Default: 0.<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[FundAccountsValidationsResponse](curlec/models/fund_accounts_validations_response.py), [ListFundAccountValidationsErrorBody](curlec/errors/list_fund_account_validations_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FundAccountsValidationsResponse](curlec/models/fund_accounts_validations_response.py)</code> -- List of validations

**On `Failure`**: `error` is <code>[ListFundAccountValidationsErrorBody](curlec/errors/list_fund_account_validations_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def validate_fund_account(body: FundAccountsValidationsRequest | FundAccountsValidationsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FundAccountValidation, ValidateFundAccountErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Three validation methods: (1) penny drop for bank accounts — sends Re.1 to verify; (2) penny drop for VPA — sends Re.1 to UPI address; (3) reverse penny drop — sends UPI intent URL to customer who initiates payment. Live-mode only, RazorpayX Lite account required. Composite validation (creates Contact + Fund Account inline) supported via validation_type field.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.x_account_validation.with_raw_response.validate_fund_account(
    FundAccountsValidationsRequest(account_type=AccountType.BANK_ACCOUNT, fund_account={})
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FundAccountValidation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ValidateFundAccountErrorBody
```

**Async**

```python
result = await async_client.x_account_validation.with_raw_response.validate_fund_account(
    FundAccountsValidationsRequest(account_type=AccountType.BANK_ACCOUNT, fund_account={})
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FundAccountValidation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ValidateFundAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[FundAccountsValidationsRequest](curlec/models/fund_accounts_validations_request.py) \| [FundAccountsValidationsRequestDict](curlec/models/fund_accounts_validations_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[FundAccountValidation](curlec/models/fund_account_validation.py), [ValidateFundAccountErrorBody](curlec/errors/validate_fund_account_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FundAccountValidation](curlec/models/fund_account_validation.py)</code> -- Validation created

**On `Failure`**: `error` is <code>[ValidateFundAccountErrorBody](curlec/errors/validate_fund_account_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## XBankingBalances

> Source: [XBankingBalances](curlec/apis/x_banking_balances.py)

<details>
<summary><code>def fetch_banking_balances(*, account_type: AccountType1OrStr | None = None, bank_code: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BankingBalancesResponse, FetchBankingBalancesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch balance details for RazorpayX current accounts or RazorpayX Lite accounts.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.x_banking_balances.with_raw_response.fetch_banking_balances()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BankingBalancesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchBankingBalancesErrorBody
```

**Async**

```python
result = await async_client.x_banking_balances.with_raw_response.fetch_banking_balances()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BankingBalancesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchBankingBalancesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account_type</code> | <code>[AccountType1OrStr](curlec/models/enums/account_type1.py) \| None</code> | Type of RazorpayX account to query. Accepted values: `current_account` or `razorpayx_lite`.<br>**Default**: <code>None</code> |
| <code>bank_code</code> | <code>str \| None</code> | First 4 characters of IFSC<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[BankingBalancesResponse](curlec/models/banking_balances_response.py), [FetchBankingBalancesErrorBody](curlec/errors/fetch_banking_balances_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BankingBalancesResponse](curlec/models/banking_balances_response.py)</code> -- Banking balances

**On `Failure`**: `error` is <code>[FetchBankingBalancesErrorBody](curlec/errors/fetch_banking_balances_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## XContacts

> Source: [XContacts](curlec/apis/x_contacts.py)

<details>
<summary><code>def create_contact(body: ContactsRequest | ContactsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[XContact, CreateContactErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a payout recipient contact. Returns existing contact if all identifying fields (name, email, contact, type) match an existing record.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.x_contacts.with_raw_response.create_contact(ContactsRequest(name="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type XContact
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateContactErrorBody
```

**Async**

```python
result = await async_client.x_contacts.with_raw_response.create_contact(ContactsRequest(name="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type XContact
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateContactErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ContactsRequest](curlec/models/contacts_request.py) \| [ContactsRequestDict](curlec/models/contacts_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[XContact](curlec/models/x_contact.py), [CreateContactErrorBody](curlec/errors/create_contact_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[XContact](curlec/models/x_contact.py)</code> -- Contact created

**On `Failure`**: `error` is <code>[CreateContactErrorBody](curlec/errors/create_contact_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_contact(contact_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[XContact, FetchContactErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch details of a specific contact by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.x_contacts.with_raw_response.fetch_contact("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type XContact
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchContactErrorBody
```

**Async**

```python
result = await async_client.x_contacts.with_raw_response.fetch_contact("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type XContact
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchContactErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contact_id</code> | <code>str</code> | Unique identifier of the contact (e.g. `cont_00000000000001`). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[XContact](curlec/models/x_contact.py), [FetchContactErrorBody](curlec/errors/fetch_contact_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[XContact](curlec/models/x_contact.py)</code> -- Contact details

**On `Failure`**: `error` is <code>[FetchContactErrorBody](curlec/errors/fetch_contact_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_contacts(*, name: str | None = None, email: str | None = None, contact: str | None = None, reference_id: str | None = None, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ContactsResponse, ListContactsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Filter and list all contacts. Supports filtering by name, email, phone number, reference ID, and active status.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.x_contacts.with_raw_response.list_contacts()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListContactsErrorBody
```

**Async**

```python
result = await async_client.x_contacts.with_raw_response.list_contacts()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListContactsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str \| None</code> | Filter by contact name (partial match supported).<br>**Default**: <code>None</code> |
| <code>email</code> | <code>str \| None</code> | Filter by contact email address.<br>**Default**: <code>None</code> |
| <code>contact</code> | <code>str \| None</code> | Filter by contact phone number.<br>**Default**: <code>None</code> |
| <code>reference_id</code> | <code>str \| None</code> | Filter by your unique reference ID for the contact (max 40 chars).<br>**Default**: <code>None</code> |
| <code>from_</code> | <code>int \| None</code> | Unix timestamp filter<br>**Default**: <code>None</code> |
| <code>to</code> | <code>int \| None</code> | Unix timestamp. Only contacts created before this timestamp are returned.<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Number of contacts to return. Default: 10. Maximum: 100.<br>**Default**: <code>10</code> |
| <code>skip</code> | <code>int \| None</code> | Number of contacts to skip. Use for pagination. Default: 0.<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[ContactsResponse](curlec/models/contacts_response.py), [ListContactsErrorBody](curlec/errors/list_contacts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ContactsResponse](curlec/models/contacts_response.py)</code> -- List of contacts

**On `Failure`**: `error` is <code>[ListContactsErrorBody](curlec/errors/list_contacts_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_contact(contact_id: str, body: ContactsRequest1 | ContactsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[XContact, UpdateContactErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update contact details or activate/deactivate a contact. Set `active: false` to deactivate.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.x_contacts.with_raw_response.update_contact("some example string", ContactsRequest1())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type XContact
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateContactErrorBody
```

**Async**

```python
result = await async_client.x_contacts.with_raw_response.update_contact("some example string", ContactsRequest1())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type XContact
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateContactErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contact_id</code> | <code>str</code> | Unique identifier of the contact (e.g. `cont_00000000000001`). |
| <code>body</code> | <code>[ContactsRequest1](curlec/models/contacts_request1.py) \| [ContactsRequest1Dict](curlec/models/contacts_request1.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[XContact](curlec/models/x_contact.py), [UpdateContactErrorBody](curlec/errors/update_contact_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[XContact](curlec/models/x_contact.py)</code> -- Updated contact

**On `Failure`**: `error` is <code>[UpdateContactErrorBody](curlec/errors/update_contact_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## XFundAccounts

> Source: [XFundAccounts](curlec/apis/x_fund_accounts.py)

<details>
<summary><code>def activate_deactivate_fund_account(fund_account_id: str, body: FundAccountsRequest1 | FundAccountsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FundAccountRazorpayXFundAccountsApi, ActivateDeactivateFundAccountErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Activate or deactivate a fund account. Fund account details are immutable — only the `active` status can be changed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.x_fund_accounts.with_raw_response.activate_deactivate_fund_account(
    "some example string", FundAccountsRequest1(active=True)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FundAccountRazorpayXFundAccountsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ActivateDeactivateFundAccountErrorBody
```

**Async**

```python
result = await async_client.x_fund_accounts.with_raw_response.activate_deactivate_fund_account(
    "some example string", FundAccountsRequest1(active=True)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FundAccountRazorpayXFundAccountsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ActivateDeactivateFundAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fund_account_id</code> | <code>str</code> | Unique identifier of the fund account (e.g. `fa_00000000000001`). |
| <code>body</code> | <code>[FundAccountsRequest1](curlec/models/fund_accounts_request1.py) \| [FundAccountsRequest1Dict](curlec/models/fund_accounts_request1.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[FundAccountRazorpayXFundAccountsApi](curlec/models/fund_account_razorpay_x_fund_accounts_api.py), [ActivateDeactivateFundAccountErrorBody](curlec/errors/activate_deactivate_fund_account_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FundAccountRazorpayXFundAccountsApi](curlec/models/fund_account_razorpay_x_fund_accounts_api.py)</code> -- Updated fund account

**On `Failure`**: `error` is <code>[ActivateDeactivateFundAccountErrorBody](curlec/errors/activate_deactivate_fund_account_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_fund_account(body: FundAccountsRequest | FundAccountsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FundAccountRazorpayXFundAccountsApi, CreateFundAccountErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a bank account, VPA, card, or wallet (Amazon Pay) fund account linked to a contact. Fund accounts are immutable after creation. Returns existing record if contact_id + account details all match.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.x_fund_accounts.with_raw_response.create_fund_account(
    FundAccountsRequest(contact_id="some example string", account_type=AccountTypeRazorpayXFundAccountsApi.BANK_ACCOUNT)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FundAccountRazorpayXFundAccountsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateFundAccountErrorBody
```

**Async**

```python
result = await async_client.x_fund_accounts.with_raw_response.create_fund_account(
    FundAccountsRequest(contact_id="some example string", account_type=AccountTypeRazorpayXFundAccountsApi.BANK_ACCOUNT)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FundAccountRazorpayXFundAccountsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateFundAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[FundAccountsRequest](curlec/models/fund_accounts_request.py) \| [FundAccountsRequestDict](curlec/models/fund_accounts_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[FundAccountRazorpayXFundAccountsApi](curlec/models/fund_account_razorpay_x_fund_accounts_api.py), [CreateFundAccountErrorBody](curlec/errors/create_fund_account_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FundAccountRazorpayXFundAccountsApi](curlec/models/fund_account_razorpay_x_fund_accounts_api.py)</code> -- Fund account created

**On `Failure`**: `error` is <code>[CreateFundAccountErrorBody](curlec/errors/create_fund_account_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_fund_account(fund_account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FundAccountRazorpayXFundAccountsApi, FetchFundAccountErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch details of a specific fund account by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.x_fund_accounts.with_raw_response.fetch_fund_account("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FundAccountRazorpayXFundAccountsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchFundAccountErrorBody
```

**Async**

```python
result = await async_client.x_fund_accounts.with_raw_response.fetch_fund_account("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FundAccountRazorpayXFundAccountsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchFundAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fund_account_id</code> | <code>str</code> | Unique identifier of the fund account (e.g. `fa_00000000000001`). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[FundAccountRazorpayXFundAccountsApi](curlec/models/fund_account_razorpay_x_fund_accounts_api.py), [FetchFundAccountErrorBody](curlec/errors/fetch_fund_account_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FundAccountRazorpayXFundAccountsApi](curlec/models/fund_account_razorpay_x_fund_accounts_api.py)</code> -- Fund account details

**On `Failure`**: `error` is <code>[FetchFundAccountErrorBody](curlec/errors/fetch_fund_account_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_fund_accounts(*, contact_id: str | None = None, account_type: str | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FundAccountsResponse, ListFundAccountsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List fund accounts linked to contacts. Filter by contact ID and/or account type.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.x_fund_accounts.with_raw_response.list_fund_accounts()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FundAccountsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListFundAccountsErrorBody
```

**Async**

```python
result = await async_client.x_fund_accounts.with_raw_response.list_fund_accounts()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FundAccountsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListFundAccountsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contact_id</code> | <code>str \| None</code> | Filter by contact ID to list fund accounts linked to that contact.<br>**Default**: <code>None</code> |
| <code>account_type</code> | <code>str \| None</code> | Filter by fund account type: `bank_account`, `vpa`, `card`, or `wallet`.<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Number of fund accounts to return. Default: 10. Maximum: 100.<br>**Default**: <code>10</code> |
| <code>skip</code> | <code>int \| None</code> | Number of fund accounts to skip. Use for pagination. Default: 0.<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[FundAccountsResponse](curlec/models/fund_accounts_response.py), [ListFundAccountsErrorBody](curlec/errors/list_fund_accounts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FundAccountsResponse](curlec/models/fund_accounts_response.py)</code> -- List of fund accounts

**On `Failure`**: `error` is <code>[ListFundAccountsErrorBody](curlec/errors/list_fund_accounts_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## XPayoutLinks

> Source: [XPayoutLinks](curlec/apis/x_payout_links.py)

<details>
<summary><code>def cancel_payout_link(payout_link_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PayoutLink, CancelPayoutLinkErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel a payout link that is in `issued` or `pending` state.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.x_payout_links.with_raw_response.cancel_payout_link("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PayoutLink
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelPayoutLinkErrorBody
```

**Async**

```python
result = await async_client.x_payout_links.with_raw_response.cancel_payout_link("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PayoutLink
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelPayoutLinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>payout_link_id</code> | <code>str</code> | Unique identifier of the payout link to cancel. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[PayoutLink](curlec/models/payout_link.py), [CancelPayoutLinkErrorBody](curlec/errors/cancel_payout_link_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PayoutLink](curlec/models/payout_link.py)</code> -- Payout link cancelled

**On `Failure`**: `error` is <code>[CancelPayoutLinkErrorBody](curlec/errors/cancel_payout_link_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_payout_link(body: PayoutLinksRequest | PayoutLinksRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PayoutLink, CreatePayoutLinkErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a payout link to a contact when fund account details are unavailable. expire_by must be at least 15 minutes in the future.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.x_payout_links.with_raw_response.create_payout_link(
    PayoutLinksRequest(contact_id="some example string", amount=1, purpose="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PayoutLink
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatePayoutLinkErrorBody
```

**Async**

```python
result = await async_client.x_payout_links.with_raw_response.create_payout_link(
    PayoutLinksRequest(contact_id="some example string", amount=1, purpose="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PayoutLink
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatePayoutLinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PayoutLinksRequest](curlec/models/payout_links_request.py) \| [PayoutLinksRequestDict](curlec/models/payout_links_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[PayoutLink](curlec/models/payout_link.py), [CreatePayoutLinkErrorBody](curlec/errors/create_payout_link_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PayoutLink](curlec/models/payout_link.py)</code> -- Payout link created

**On `Failure`**: `error` is <code>[CreatePayoutLinkErrorBody](curlec/errors/create_payout_link_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_payout_link(payout_link_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PayoutLink, FetchPayoutLinkErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch details of a specific payout link by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.x_payout_links.with_raw_response.fetch_payout_link("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PayoutLink
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchPayoutLinkErrorBody
```

**Async**

```python
result = await async_client.x_payout_links.with_raw_response.fetch_payout_link("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PayoutLink
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchPayoutLinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>payout_link_id</code> | <code>str</code> | Unique identifier of the payout link (e.g. `poutlk_00000000000001`). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[PayoutLink](curlec/models/payout_link.py), [FetchPayoutLinkErrorBody](curlec/errors/fetch_payout_link_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PayoutLink](curlec/models/payout_link.py)</code> -- Payout link details

**On `Failure`**: `error` is <code>[FetchPayoutLinkErrorBody](curlec/errors/fetch_payout_link_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_payout_links(*, contact_id: str | None = None, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PayoutLinksResponse, ListPayoutLinksErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all payout links. Filter by contact ID, status, or date range.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.x_payout_links.with_raw_response.list_payout_links()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PayoutLinksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPayoutLinksErrorBody
```

**Async**

```python
result = await async_client.x_payout_links.with_raw_response.list_payout_links()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PayoutLinksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPayoutLinksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contact_id</code> | <code>str \| None</code> | Filter payout links by the contact ID of the recipient.<br>**Default**: <code>None</code> |
| <code>from_</code> | <code>int \| None</code> | Unix timestamp. Only payout links created from this timestamp onwards are returned.<br>**Default**: <code>None</code> |
| <code>to</code> | <code>int \| None</code> | Unix timestamp. Only payout links created before this timestamp are returned.<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Number of payout links to return. Default: 10.<br>**Default**: <code>10</code> |
| <code>skip</code> | <code>int \| None</code> | Number of payout links to skip. Use for pagination. Default: 0.<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[PayoutLinksResponse](curlec/models/payout_links_response.py), [ListPayoutLinksErrorBody](curlec/errors/list_payout_links_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PayoutLinksResponse](curlec/models/payout_links_response.py)</code> -- List of payout links

**On `Failure`**: `error` is <code>[ListPayoutLinksErrorBody](curlec/errors/list_payout_links_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## XPayouts

> Source: [XPayouts](curlec/apis/x_payouts.py)

<details>
<summary><code>def approve_payout(payout_id: str, *, body: PayoutsApproveRequest | PayoutsApproveRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Payout, ApprovePayoutErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Requires Payouts Approval workflow enabled and Technology Partner status with OAuth.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.x_payouts.with_raw_response.approve_payout("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Payout
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApprovePayoutErrorBody
```

**Async**

```python
result = await async_client.x_payouts.with_raw_response.approve_payout("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Payout
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApprovePayoutErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>payout_id</code> | <code>str</code> | Unique identifier of the payout to approve. |
| <code>body</code> | <code>[PayoutsApproveRequest](curlec/models/payouts_approve_request.py) \| [PayoutsApproveRequestDict](curlec/models/payouts_approve_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[Payout](curlec/models/payout.py), [ApprovePayoutErrorBody](curlec/errors/approve_payout_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Payout](curlec/models/payout.py)</code> -- Payout approved

**On `Failure`**: `error` is <code>[ApprovePayoutErrorBody](curlec/errors/approve_payout_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cancel_payout(payout_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Payout, CancelPayoutErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Only payouts in 'queued' status can be cancelled.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.x_payouts.with_raw_response.cancel_payout("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Payout
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelPayoutErrorBody
```

**Async**

```python
result = await async_client.x_payouts.with_raw_response.cancel_payout("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Payout
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelPayoutErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>payout_id</code> | <code>str</code> | Unique identifier of the payout to cancel. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[Payout](curlec/models/payout.py), [CancelPayoutErrorBody](curlec/errors/cancel_payout_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Payout](curlec/models/payout.py)</code> -- Payout cancelled

**On `Failure`**: `error` is <code>[CancelPayoutErrorBody](curlec/errors/cancel_payout_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_payout(x_payout_idempotency: str, body: PayoutsRequest | PayoutsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Payout, CreatePayoutErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disburse funds via NEFT, RTGS, IMPS, UPI, or card. Supports standard payouts (fund_account_id), composite payouts (contact + fund account inline), card payouts (PCI DSS required), and mobile number payouts (resolved via NPCI mapper). Idempotency header X-Payout-Idempotency (UUID v4, 4–36 chars) is mandatory since March 15, 2025. Never generate a new idempotency key while a payout is in 'processing' state.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.x_payouts.with_raw_response.create_payout(
    "some example string",
    PayoutsRequest(account_number="some example string", amount=1, mode=Mode1.NEFT, purpose=Purpose.REFUND),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Payout
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatePayoutErrorBody
```

**Async**

```python
result = await async_client.x_payouts.with_raw_response.create_payout(
    "some example string",
    PayoutsRequest(account_number="some example string", amount=1, mode=Mode1.NEFT, purpose=Purpose.REFUND),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Payout
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatePayoutErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_payout_idempotency</code> | <code>str</code> | UUID v4 idempotency key. Mandatory since March 15, 2025. |
| <code>body</code> | <code>[PayoutsRequest](curlec/models/payouts_request.py) \| [PayoutsRequestDict](curlec/models/payouts_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[Payout](curlec/models/payout.py), [CreatePayoutErrorBody](curlec/errors/create_payout_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Payout](curlec/models/payout.py)</code> -- Payout created

**On `Failure`**: `error` is <code>[CreatePayoutErrorBody](curlec/errors/create_payout_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fetch_payout(payout_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Payout, FetchPayoutErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch details of a specific payout by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.x_payouts.with_raw_response.fetch_payout("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Payout
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchPayoutErrorBody
```

**Async**

```python
result = await async_client.x_payouts.with_raw_response.fetch_payout("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Payout
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchPayoutErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>payout_id</code> | <code>str</code> | Unique identifier of the payout (e.g. `pout_00000000000001`). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[Payout](curlec/models/payout.py), [FetchPayoutErrorBody](curlec/errors/fetch_payout_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Payout](curlec/models/payout.py)</code> -- Payout details

**On `Failure`**: `error` is <code>[FetchPayoutErrorBody](curlec/errors/fetch_payout_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_payouts(account_number: str, *, contact_id: str | None = None, fund_account_id: str | None = None, from_: int | None = None, to: int | None = None, count: int | None = 25, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PayoutsResponse, ListPayoutsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List payouts for a given RazorpayX account. Filter by contact, fund account, date range, or status.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.x_payouts.with_raw_response.list_payouts("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PayoutsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPayoutsErrorBody
```

**Async**

```python
result = await async_client.x_payouts.with_raw_response.list_payouts("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PayoutsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPayoutsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account_number</code> | <code>str</code> | The RazorpayX account number (Customer Identifier from Dashboard → My Account & Settings → Banking). Required to scope results to a specific account. |
| <code>contact_id</code> | <code>str \| None</code> | Filter payouts by the contact ID of the recipient.<br>**Default**: <code>None</code> |
| <code>fund_account_id</code> | <code>str \| None</code> | Filter payouts by fund account ID.<br>**Default**: <code>None</code> |
| <code>from_</code> | <code>int \| None</code> | Unix timestamp. Only payouts created from this timestamp onwards are returned.<br>**Default**: <code>None</code> |
| <code>to</code> | <code>int \| None</code> | Unix timestamp. Only payouts created before this timestamp are returned.<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Number of payouts to return. Default: 10. Maximum: 100.<br>**Default**: <code>25</code> |
| <code>skip</code> | <code>int \| None</code> | Number of payouts to skip. Use for pagination. Default: 0.<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[PayoutsResponse](curlec/models/payouts_response.py), [ListPayoutsErrorBody](curlec/errors/list_payouts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PayoutsResponse](curlec/models/payouts_response.py)</code> -- List of payouts

**On `Failure`**: `error` is <code>[ListPayoutsErrorBody](curlec/errors/list_payouts_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def reject_payout(payout_id: str, *, body: PayoutsRejectRequest | PayoutsRejectRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Payout, RejectPayoutErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Requires Payouts Approval workflow enabled and Technology Partner status with OAuth.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.x_payouts.with_raw_response.reject_payout("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Payout
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RejectPayoutErrorBody
```

**Async**

```python
result = await async_client.x_payouts.with_raw_response.reject_payout("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Payout
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RejectPayoutErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>payout_id</code> | <code>str</code> | Unique identifier of the payout to reject. |
| <code>body</code> | <code>[PayoutsRejectRequest](curlec/models/payouts_reject_request.py) \| [PayoutsRejectRequestDict](curlec/models/payouts_reject_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[Payout](curlec/models/payout.py), [RejectPayoutErrorBody](curlec/errors/reject_payout_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Payout](curlec/models/payout.py)</code> -- Payout rejected

**On `Failure`**: `error` is <code>[RejectPayoutErrorBody](curlec/errors/reject_payout_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## XTransactions

> Source: [XTransactions](curlec/apis/x_transactions.py)

<details>
<summary><code>def fetch_transaction(transaction_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[XTransaction, FetchTransactionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch details of a specific transaction from a RazorpayX account by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.x_transactions.with_raw_response.fetch_transaction("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type XTransaction
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchTransactionErrorBody
```

**Async**

```python
result = await async_client.x_transactions.with_raw_response.fetch_transaction("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type XTransaction
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchTransactionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transaction_id</code> | <code>str</code> | Transaction ID (txn_*) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[XTransaction](curlec/models/x_transaction.py), [FetchTransactionErrorBody](curlec/errors/fetch_transaction_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[XTransaction](curlec/models/x_transaction.py)</code> -- Transaction details

**On `Failure`**: `error` is <code>[FetchTransactionErrorBody](curlec/errors/fetch_transaction_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_transactions(account_number: str, *, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TransactionsResponse, ListTransactionsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all transaction records (credits and debits) for a given RazorpayX account. Use account_number from Dashboard → My Account & Settings → Banking → Customer Identifier.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.x_transactions.with_raw_response.list_transactions("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TransactionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTransactionsErrorBody
```

**Async**

```python
result = await async_client.x_transactions.with_raw_response.list_transactions("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TransactionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTransactionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account_number</code> | <code>str</code> | RazorpayX account number (Customer Identifier from Dashboard). Different for Test and Live mode. |
| <code>from_</code> | <code>int \| None</code> | Unix timestamp filter start<br>**Default**: <code>None</code> |
| <code>to</code> | <code>int \| None</code> | Unix timestamp filter end<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Number of transactions to return. Default: 10. Maximum: 100.<br>**Default**: <code>10</code> |
| <code>skip</code> | <code>int \| None</code> | Number of transactions to skip. Use for pagination. Default: 0.<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](curlec/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](curlec/core/results.py)&#91;[TransactionsResponse](curlec/models/transactions_response.py), [ListTransactionsErrorBody](curlec/errors/list_transactions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TransactionsResponse](curlec/models/transactions_response.py)</code> -- List of transactions

**On `Failure`**: `error` is <code>[ListTransactionsErrorBody](curlec/errors/list_transactions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[Error](curlec/models/error.py)</code> |
| anything unmapped | <code>[RawError](curlec/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

