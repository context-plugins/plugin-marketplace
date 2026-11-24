# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [CurlecClient](curlec/client.py)

## Bills

> Source: [Bills](curlec/apis/bills.py)

<details>
<summary><code>def create_bill(body: BillsRequest | BillsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Bill</code></summary>

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
try:
    response = client.bills.create_bill(
        BillsRequest(business_type=BusinessType.ECOMMERCE, customer=Customer1(contact="some example string"))
    )
    # TODO: Handle 'response' of type Bill
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBillErrorBody
```

**Async**

```python
try:
    response = await async_client.bills.create_bill(
        BillsRequest(business_type=BusinessType.ECOMMERCE, customer=Customer1(contact="some example string"))
    )
    # TODO: Handle 'response' of type Bill
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBillErrorBody
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

**OnSuccess**: <code>[Bill](curlec/models/bill.py)</code> -- Bill created successfully

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[CreateBillErrorBody](curlec/errors/create_bill_error.py)&#93;</code>

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
<summary><code>def delete_bill(bill_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.bills.delete_bill("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBillErrorBody
```

**Async**

```python
try:
    response = await async_client.bills.delete_bill("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBillErrorBody
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

**OnSuccess**: <code>Any</code> -- Bill deleted successfully

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[DeleteBillErrorBody](curlec/errors/delete_bill_error.py)&#93;</code>

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
<summary><code>def update_bill(bill_id: str, body: Bill | BillDict, *, request_options: RequestOptionsOrDict | None = None) -> Bill</code></summary>

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
try:
    response = client.bills.update_bill("some example string", Bill())
    # TODO: Handle 'response' of type Bill
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateBillErrorBody
```

**Async**

```python
try:
    response = await async_client.bills.update_bill("some example string", Bill())
    # TODO: Handle 'response' of type Bill
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateBillErrorBody
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

**OnSuccess**: <code>[Bill](curlec/models/bill.py)</code> -- Bill updated successfully

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[UpdateBillErrorBody](curlec/errors/update_bill_error.py)&#93;</code>

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
<summary><code>def create_customer(body: CustomersRequest | CustomersRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> CustomerRazorpayCustomersApi</code></summary>

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
try:
    response = client.customers.create_customer(
        CustomersRequest(name="Aisha Sharma", contact="+919876543210", email="aisha@example.com")
    )
    # TODO: Handle 'response' of type CustomerRazorpayCustomersApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomerErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.create_customer(
        CustomersRequest(name="Aisha Sharma", contact="+919876543210", email="aisha@example.com")
    )
    # TODO: Handle 'response' of type CustomerRazorpayCustomersApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomerErrorBody
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

**OnSuccess**: <code>[CustomerRazorpayCustomersApi](curlec/models/customer_razorpay_customers_api.py)</code> -- Customer created.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[CreateCustomerErrorBody](curlec/errors/create_customer_error.py)&#93;</code>

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
<summary><code>def fetch_all_customers(*, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> CustomersResponse</code></summary>

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
try:
    response = client.customers.fetch_all_customers()
    # TODO: Handle 'response' of type CustomersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchAllCustomersErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.fetch_all_customers()
    # TODO: Handle 'response' of type CustomersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchAllCustomersErrorBody
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

**OnSuccess**: <code>[CustomersResponse](curlec/models/customers_response.py)</code> -- Collection of customers.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchAllCustomersErrorBody](curlec/errors/fetch_all_customers_error.py)&#93;</code>

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
<summary><code>def fetch_customer(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> CustomerRazorpayCustomersApi</code></summary>

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
try:
    response = client.customers.fetch_customer("some example string")
    # TODO: Handle 'response' of type CustomerRazorpayCustomersApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchCustomerErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.fetch_customer("some example string")
    # TODO: Handle 'response' of type CustomerRazorpayCustomersApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchCustomerErrorBody
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

**OnSuccess**: <code>[CustomerRazorpayCustomersApi](curlec/models/customer_razorpay_customers_api.py)</code> -- Customer details.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchCustomerErrorBody](curlec/errors/fetch_customer_error.py)&#93;</code>

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
<summary><code>def update_customer(id_: str, body: CustomersRequest1 | CustomersRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> CustomerRazorpayCustomersApi</code></summary>

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
try:
    response = client.customers.update_customer("some example string", CustomersRequest1())
    # TODO: Handle 'response' of type CustomerRazorpayCustomersApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCustomerErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.update_customer("some example string", CustomersRequest1())
    # TODO: Handle 'response' of type CustomerRazorpayCustomersApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCustomerErrorBody
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

**OnSuccess**: <code>[CustomerRazorpayCustomersApi](curlec/models/customer_razorpay_customers_api.py)</code> -- Updated customer.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[UpdateCustomerErrorBody](curlec/errors/update_customer_error.py)&#93;</code>

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
<summary><code>def accept_dispute(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Dispute</code></summary>

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
try:
    response = client.disputes.accept_dispute("some example string")
    # TODO: Handle 'response' of type Dispute
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AcceptDisputeErrorBody
```

**Async**

```python
try:
    response = await async_client.disputes.accept_dispute("some example string")
    # TODO: Handle 'response' of type Dispute
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AcceptDisputeErrorBody
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

**OnSuccess**: <code>[Dispute](curlec/models/dispute.py)</code> -- Dispute accepted. Status changes to 'lost'.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[AcceptDisputeErrorBody](curlec/errors/accept_dispute_error.py)&#93;</code>

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
<summary><code>def contest_dispute(id_: str, body: DisputesContestRequest | DisputesContestRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Dispute</code></summary>

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
try:
    response = client.disputes.contest_dispute("some example string", DisputesContestRequest())
    # TODO: Handle 'response' of type Dispute
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContestDisputeErrorBody
```

**Async**

```python
try:
    response = await async_client.disputes.contest_dispute("some example string", DisputesContestRequest())
    # TODO: Handle 'response' of type Dispute
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContestDisputeErrorBody
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

**OnSuccess**: <code>[Dispute](curlec/models/dispute.py)</code> -- Dispute contested. Status changes to 'under_review' on submit.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[ContestDisputeErrorBody](curlec/errors/contest_dispute_error.py)&#93;</code>

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
<summary><code>def fetch_all_disputes(*, count: int | None = 10, skip: int | None = 0, expand: ExpandOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> DisputesResponse</code></summary>

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
try:
    response = client.disputes.fetch_all_disputes()
    # TODO: Handle 'response' of type DisputesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchAllDisputesErrorBody
```

**Async**

```python
try:
    response = await async_client.disputes.fetch_all_disputes()
    # TODO: Handle 'response' of type DisputesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchAllDisputesErrorBody
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

**OnSuccess**: <code>[DisputesResponse](curlec/models/disputes_response.py)</code> -- Collection of disputes.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchAllDisputesErrorBody](curlec/errors/fetch_all_disputes_error.py)&#93;</code>

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
<summary><code>def fetch_dispute(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Dispute</code></summary>

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
try:
    response = client.disputes.fetch_dispute("some example string")
    # TODO: Handle 'response' of type Dispute
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchDisputeErrorBody
```

**Async**

```python
try:
    response = await async_client.disputes.fetch_dispute("some example string")
    # TODO: Handle 'response' of type Dispute
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchDisputeErrorBody
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

**OnSuccess**: <code>[Dispute](curlec/models/dispute.py)</code> -- Dispute details.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchDisputeErrorBody](curlec/errors/fetch_dispute_error.py)&#93;</code>

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
<summary><code>def fetch_document(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Document</code></summary>

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
try:
    response = client.documents.fetch_document("some example string")
    # TODO: Handle 'response' of type Document
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchDocumentErrorBody
```

**Async**

```python
try:
    response = await async_client.documents.fetch_document("some example string")
    # TODO: Handle 'response' of type Document
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchDocumentErrorBody
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

**OnSuccess**: <code>[Document](curlec/models/document.py)</code> -- Document metadata.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchDocumentErrorBody](curlec/errors/fetch_document_error.py)&#93;</code>

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
<summary><code>def fetch_document_content(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

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
try:
    response = client.documents.fetch_document_content("some example string")
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchDocumentContentErrorBody
```

**Async**

```python
try:
    response = await async_client.documents.fetch_document_content("some example string")
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchDocumentContentErrorBody
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

**OnSuccess**: <code>FileResponse</code> -- Document binary content.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchDocumentContentErrorBody](curlec/errors/fetch_document_content_error.py)&#93;</code>

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
<summary><code>def upload_document(file: FileInput, purpose: str, *, request_options: RequestOptionsOrDict | None = None) -> Document</code></summary>

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
try:
    response = client.documents.upload_document(Path("path/to/file.bin"), "some example string")
    # TODO: Handle 'response' of type Document
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadDocumentErrorBody
```

**Async**

```python
try:
    response = await async_client.documents.upload_document(Path("path/to/file.bin"), "some example string")
    # TODO: Handle 'response' of type Document
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadDocumentErrorBody
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

**OnSuccess**: <code>[Document](curlec/models/document.py)</code> -- Document uploaded.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[UploadDocumentErrorBody](curlec/errors/upload_document_error.py)&#93;</code>

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
<summary><code>def create_instant_settlement(body: SettlementsOndemandRequest | SettlementsOndemandRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> InstantSettlement</code></summary>

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
try:
    response = client.instant_settlements.create_instant_settlement(SettlementsOndemandRequest(amount=1))
    # TODO: Handle 'response' of type InstantSettlement
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateInstantSettlementErrorBody
```

**Async**

```python
try:
    response = await async_client.instant_settlements.create_instant_settlement(SettlementsOndemandRequest(amount=1))
    # TODO: Handle 'response' of type InstantSettlement
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateInstantSettlementErrorBody
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

**OnSuccess**: <code>[InstantSettlement](curlec/models/instant_settlement.py)</code> -- Instant settlement initiated.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[CreateInstantSettlementErrorBody](curlec/errors/create_instant_settlement_error.py)&#93;</code>

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
<summary><code>def fetch_all_instant_settlements(*, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, expand: ExpandRazorpayInstantSettlementsApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> SettlementsOndemandResponse</code></summary>

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
try:
    response = client.instant_settlements.fetch_all_instant_settlements()
    # TODO: Handle 'response' of type SettlementsOndemandResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchAllInstantSettlementsErrorBody
```

**Async**

```python
try:
    response = await async_client.instant_settlements.fetch_all_instant_settlements()
    # TODO: Handle 'response' of type SettlementsOndemandResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchAllInstantSettlementsErrorBody
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

**OnSuccess**: <code>[SettlementsOndemandResponse](curlec/models/settlements_ondemand_response.py)</code> -- Collection of instant settlements.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchAllInstantSettlementsErrorBody](curlec/errors/fetch_all_instant_settlements_error.py)&#93;</code>

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
<summary><code>def fetch_instant_settlement(id_: str, *, expand: ExpandRazorpayInstantSettlementsApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> InstantSettlement</code></summary>

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
try:
    response = client.instant_settlements.fetch_instant_settlement("some example string")
    # TODO: Handle 'response' of type InstantSettlement
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchInstantSettlementErrorBody
```

**Async**

```python
try:
    response = await async_client.instant_settlements.fetch_instant_settlement("some example string")
    # TODO: Handle 'response' of type InstantSettlement
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchInstantSettlementErrorBody
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

**OnSuccess**: <code>[InstantSettlement](curlec/models/instant_settlement.py)</code> -- Instant settlement details.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchInstantSettlementErrorBody](curlec/errors/fetch_instant_settlement_error.py)&#93;</code>

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
<summary><code>def cancel_invoice(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Invoice</code></summary>

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
try:
    response = client.invoices.cancel_invoice("some example string")
    # TODO: Handle 'response' of type Invoice
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelInvoiceErrorBody
```

**Async**

```python
try:
    response = await async_client.invoices.cancel_invoice("some example string")
    # TODO: Handle 'response' of type Invoice
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelInvoiceErrorBody
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

**OnSuccess**: <code>[Invoice](curlec/models/invoice.py)</code> -- Invoice cancelled.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[CancelInvoiceErrorBody](curlec/errors/cancel_invoice_error.py)&#93;</code>

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
<summary><code>def create_invoice(body: InvoicesRequest | InvoicesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Invoice</code></summary>

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
try:
    response = client.invoices.create_invoice(InvoicesRequest(type_=Type2.INVOICE))
    # TODO: Handle 'response' of type Invoice
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateInvoiceErrorBody
```

**Async**

```python
try:
    response = await async_client.invoices.create_invoice(InvoicesRequest(type_=Type2.INVOICE))
    # TODO: Handle 'response' of type Invoice
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateInvoiceErrorBody
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

**OnSuccess**: <code>[Invoice](curlec/models/invoice.py)</code> -- Invoice created in draft state.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[CreateInvoiceErrorBody](curlec/errors/create_invoice_error.py)&#93;</code>

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
<summary><code>def delete_invoice(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.invoices.delete_invoice("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteInvoiceErrorBody
```

**Async**

```python
try:
    response = await async_client.invoices.delete_invoice("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteInvoiceErrorBody
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

**OnSuccess**: <code>Any</code> -- Invoice deleted.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[DeleteInvoiceErrorBody](curlec/errors/delete_invoice_error.py)&#93;</code>

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
<summary><code>def fetch_invoice(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Invoice</code></summary>

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
try:
    response = client.invoices.fetch_invoice("some example string")
    # TODO: Handle 'response' of type Invoice
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchInvoiceErrorBody
```

**Async**

```python
try:
    response = await async_client.invoices.fetch_invoice("some example string")
    # TODO: Handle 'response' of type Invoice
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchInvoiceErrorBody
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

**OnSuccess**: <code>[Invoice](curlec/models/invoice.py)</code> -- Invoice details.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchInvoiceErrorBody](curlec/errors/fetch_invoice_error.py)&#93;</code>

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
<summary><code>def issue_invoice(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Invoice</code></summary>

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
try:
    response = client.invoices.issue_invoice("some example string")
    # TODO: Handle 'response' of type Invoice
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IssueInvoiceErrorBody
```

**Async**

```python
try:
    response = await async_client.invoices.issue_invoice("some example string")
    # TODO: Handle 'response' of type Invoice
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IssueInvoiceErrorBody
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

**OnSuccess**: <code>[Invoice](curlec/models/invoice.py)</code> -- Invoice issued. short_url is now active.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[IssueInvoiceErrorBody](curlec/errors/issue_invoice_error.py)&#93;</code>

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
<summary><code>def list_invoices(*, type_: Type3OrStr | None = None, payment_id: str | None = None, customer_id: str | None = None, subscription_id: str | None = None, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> InvoicesResponse</code></summary>

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
try:
    response = client.invoices.list_invoices()
    # TODO: Handle 'response' of type InvoicesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListInvoicesErrorBody
```

**Async**

```python
try:
    response = await async_client.invoices.list_invoices()
    # TODO: Handle 'response' of type InvoicesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListInvoicesErrorBody
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

**OnSuccess**: <code>[InvoicesResponse](curlec/models/invoices_response.py)</code> -- Collection of invoices.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[ListInvoicesErrorBody](curlec/errors/list_invoices_error.py)&#93;</code>

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
<summary><code>def send_invoice_notification(id_: str, medium: MediumOrStr, *, request_options: RequestOptionsOrDict | None = None) -> InvoicesNotifyByResponse</code></summary>

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
try:
    response = client.invoices.send_invoice_notification("some example string", Medium.SMS)
    # TODO: Handle 'response' of type InvoicesNotifyByResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SendInvoiceNotificationErrorBody
```

**Async**

```python
try:
    response = await async_client.invoices.send_invoice_notification("some example string", Medium.SMS)
    # TODO: Handle 'response' of type InvoicesNotifyByResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SendInvoiceNotificationErrorBody
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

**OnSuccess**: <code>[InvoicesNotifyByResponse](curlec/models/invoices_notify_by_response.py)</code> -- Notification sent.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[SendInvoiceNotificationErrorBody](curlec/errors/send_invoice_notification_error.py)&#93;</code>

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
<summary><code>def update_invoice(id_: str, body: InvoicesRequest1 | InvoicesRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> Invoice</code></summary>

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
try:
    response = client.invoices.update_invoice("some example string", InvoicesRequest1())
    # TODO: Handle 'response' of type Invoice
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateInvoiceErrorBody
```

**Async**

```python
try:
    response = await async_client.invoices.update_invoice("some example string", InvoicesRequest1())
    # TODO: Handle 'response' of type Invoice
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateInvoiceErrorBody
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

**OnSuccess**: <code>[Invoice](curlec/models/invoice.py)</code> -- Updated invoice.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[UpdateInvoiceErrorBody](curlec/errors/update_invoice_error.py)&#93;</code>

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
<summary><code>def create_item(body: ItemsRequest | ItemsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Item</code></summary>

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
try:
    response = client.items.create_item(
        ItemsRequest(name="some example string", amount=1, currency="some example string")
    )
    # TODO: Handle 'response' of type Item
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateItemErrorBody
```

**Async**

```python
try:
    response = await async_client.items.create_item(
        ItemsRequest(name="some example string", amount=1, currency="some example string")
    )
    # TODO: Handle 'response' of type Item
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateItemErrorBody
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

**OnSuccess**: <code>[Item](curlec/models/item.py)</code> -- Item created.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[CreateItemErrorBody](curlec/errors/create_item_error.py)&#93;</code>

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
<summary><code>def delete_item(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.items.delete_item("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteItemErrorBody
```

**Async**

```python
try:
    response = await async_client.items.delete_item("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteItemErrorBody
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

**OnSuccess**: <code>Any</code> -- Item deleted.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[DeleteItemErrorBody](curlec/errors/delete_item_error.py)&#93;</code>

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
<summary><code>def fetch_item(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Item</code></summary>

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
try:
    response = client.items.fetch_item("some example string")
    # TODO: Handle 'response' of type Item
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchItemErrorBody
```

**Async**

```python
try:
    response = await async_client.items.fetch_item("some example string")
    # TODO: Handle 'response' of type Item
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchItemErrorBody
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

**OnSuccess**: <code>[Item](curlec/models/item.py)</code> -- Item details.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchItemErrorBody](curlec/errors/fetch_item_error.py)&#93;</code>

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
<summary><code>def list_items(*, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ItemsResponse</code></summary>

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
try:
    response = client.items.list_items()
    # TODO: Handle 'response' of type ItemsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListItemsErrorBody
```

**Async**

```python
try:
    response = await async_client.items.list_items()
    # TODO: Handle 'response' of type ItemsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListItemsErrorBody
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

**OnSuccess**: <code>[ItemsResponse](curlec/models/items_response.py)</code> -- Collection of items.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[ListItemsErrorBody](curlec/errors/list_items_error.py)&#93;</code>

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
<summary><code>def update_item(id_: str, body: ItemsRequest1 | ItemsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> Item</code></summary>

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
try:
    response = client.items.update_item("some example string", ItemsRequest1())
    # TODO: Handle 'response' of type Item
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateItemErrorBody
```

**Async**

```python
try:
    response = await async_client.items.update_item("some example string", ItemsRequest1())
    # TODO: Handle 'response' of type Item
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateItemErrorBody
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

**OnSuccess**: <code>[Item](curlec/models/item.py)</code> -- Updated item.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[UpdateItemErrorBody](curlec/errors/update_item_error.py)&#93;</code>

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
<summary><code>def create_linked_account(body: V2AccountsRequest | V2AccountsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> LinkedAccount</code></summary>

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
try:
    response = client.linked_accounts.create_linked_account(
        V2AccountsRequest(email="some example string", profile=Profile1())
    )
    # TODO: Handle 'response' of type LinkedAccount
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateLinkedAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.linked_accounts.create_linked_account(
        V2AccountsRequest(email="some example string", profile=Profile1())
    )
    # TODO: Handle 'response' of type LinkedAccount
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateLinkedAccountErrorBody
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

**OnSuccess**: <code>[LinkedAccount](curlec/models/linked_account.py)</code> -- Linked Account created.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[CreateLinkedAccountErrorBody](curlec/errors/create_linked_account_error.py)&#93;</code>

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
<summary><code>def create_stakeholder(account_id: str, body: V2AccountsStakeholdersRequest | V2AccountsStakeholdersRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Stakeholder</code></summary>

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
try:
    response = client.linked_accounts.create_stakeholder(
        "some example string", V2AccountsStakeholdersRequest(name="some example string", email="some example string")
    )
    # TODO: Handle 'response' of type Stakeholder
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateStakeholderErrorBody
```

**Async**

```python
try:
    response = await async_client.linked_accounts.create_stakeholder(
        "some example string", V2AccountsStakeholdersRequest(name="some example string", email="some example string")
    )
    # TODO: Handle 'response' of type Stakeholder
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateStakeholderErrorBody
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

**OnSuccess**: <code>[Stakeholder](curlec/models/stakeholder.py)</code> -- Stakeholder created.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[CreateStakeholderErrorBody](curlec/errors/create_stakeholder_error.py)&#93;</code>

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
<summary><code>def fetch_linked_account(account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> LinkedAccount</code></summary>

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
try:
    response = client.linked_accounts.fetch_linked_account("some example string")
    # TODO: Handle 'response' of type LinkedAccount
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchLinkedAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.linked_accounts.fetch_linked_account("some example string")
    # TODO: Handle 'response' of type LinkedAccount
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchLinkedAccountErrorBody
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

**OnSuccess**: <code>[LinkedAccount](curlec/models/linked_account.py)</code> -- Linked Account details.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchLinkedAccountErrorBody](curlec/errors/fetch_linked_account_error.py)&#93;</code>

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
<summary><code>def fetch_product_config(account_id: str, product_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ProductConfiguration</code></summary>

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
try:
    response = client.linked_accounts.fetch_product_config("some example string", "some example string")
    # TODO: Handle 'response' of type ProductConfiguration
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchProductConfigErrorBody
```

**Async**

```python
try:
    response = await async_client.linked_accounts.fetch_product_config("some example string", "some example string")
    # TODO: Handle 'response' of type ProductConfiguration
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchProductConfigErrorBody
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

**OnSuccess**: <code>[ProductConfiguration](curlec/models/product_configuration.py)</code> -- Product configuration details.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchProductConfigErrorBody](curlec/errors/fetch_product_config_error.py)&#93;</code>

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
<summary><code>def request_product_config(account_id: str, body: V2AccountsProductsRequest | V2AccountsProductsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ProductConfiguration</code></summary>

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
try:
    response = client.linked_accounts.request_product_config("some example string", V2AccountsProductsRequest())
    # TODO: Handle 'response' of type ProductConfiguration
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RequestProductConfigErrorBody
```

**Async**

```python
try:
    response = await async_client.linked_accounts.request_product_config(
        "some example string", V2AccountsProductsRequest()
    )
    # TODO: Handle 'response' of type ProductConfiguration
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RequestProductConfigErrorBody
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

**OnSuccess**: <code>[ProductConfiguration](curlec/models/product_configuration.py)</code> -- Product configuration created.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[RequestProductConfigErrorBody](curlec/errors/request_product_config_error.py)&#93;</code>

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
<summary><code>def update_linked_account(account_id: str, body: V2AccountsRequest1 | V2AccountsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> LinkedAccount</code></summary>

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
try:
    response = client.linked_accounts.update_linked_account("some example string", V2AccountsRequest1())
    # TODO: Handle 'response' of type LinkedAccount
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateLinkedAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.linked_accounts.update_linked_account("some example string", V2AccountsRequest1())
    # TODO: Handle 'response' of type LinkedAccount
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateLinkedAccountErrorBody
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

**OnSuccess**: <code>[LinkedAccount](curlec/models/linked_account.py)</code> -- Linked Account updated.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[UpdateLinkedAccountErrorBody](curlec/errors/update_linked_account_error.py)&#93;</code>

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
<summary><code>def update_product_config(account_id: str, product_id: str, body: V2AccountsProductsRequest1 | V2AccountsProductsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> ProductConfiguration</code></summary>

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
try:
    response = client.linked_accounts.update_product_config(
        "some example string", "some example string", V2AccountsProductsRequest1()
    )
    # TODO: Handle 'response' of type ProductConfiguration
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateProductConfigErrorBody
```

**Async**

```python
try:
    response = await async_client.linked_accounts.update_product_config(
        "some example string", "some example string", V2AccountsProductsRequest1()
    )
    # TODO: Handle 'response' of type ProductConfiguration
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateProductConfigErrorBody
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

**OnSuccess**: <code>[ProductConfiguration](curlec/models/product_configuration.py)</code> -- Product configuration updated.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[UpdateProductConfigErrorBody](curlec/errors/update_product_config_error.py)&#93;</code>

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
<summary><code>def update_stakeholder(account_id: str, stakeholder_id: str, body: V2AccountsStakeholdersRequest1 | V2AccountsStakeholdersRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> Stakeholder</code></summary>

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
try:
    response = client.linked_accounts.update_stakeholder(
        "some example string", "some example string", V2AccountsStakeholdersRequest1()
    )
    # TODO: Handle 'response' of type Stakeholder
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateStakeholderErrorBody
```

**Async**

```python
try:
    response = await async_client.linked_accounts.update_stakeholder(
        "some example string", "some example string", V2AccountsStakeholdersRequest1()
    )
    # TODO: Handle 'response' of type Stakeholder
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateStakeholderErrorBody
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

**OnSuccess**: <code>[Stakeholder](curlec/models/stakeholder.py)</code> -- Stakeholder updated.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[UpdateStakeholderErrorBody](curlec/errors/update_stakeholder_error.py)&#93;</code>

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
<summary><code>def create_order(body: OrdersRequest | OrdersRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Order</code></summary>

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
try:
    response = client.orders.create_order(OrdersRequest(amount=50000, currency="INR", receipt="receipt_001"))
    # TODO: Handle 'response' of type Order
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateOrderErrorBody
```

**Async**

```python
try:
    response = await async_client.orders.create_order(
        OrdersRequest(amount=50000, currency="INR", receipt="receipt_001")
    )
    # TODO: Handle 'response' of type Order
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateOrderErrorBody
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

**OnSuccess**: <code>[Order](curlec/models/order.py)</code> -- Order created.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[CreateOrderErrorBody](curlec/errors/create_order_error.py)&#93;</code>

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
<summary><code>def fetch_all_orders(*, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, authorized: AuthorizedOrInt | None = None, receipt: str | None = None, expand: list[ExpandRazorpayOrdersApiOrStr] | None = None, request_options: RequestOptionsOrDict | None = None) -> OrdersResponse</code></summary>

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
try:
    response = client.orders.fetch_all_orders()
    # TODO: Handle 'response' of type OrdersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchAllOrdersErrorBody
```

**Async**

```python
try:
    response = await async_client.orders.fetch_all_orders()
    # TODO: Handle 'response' of type OrdersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchAllOrdersErrorBody
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

**OnSuccess**: <code>[OrdersResponse](curlec/models/orders_response.py)</code> -- Collection of orders.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchAllOrdersErrorBody](curlec/errors/fetch_all_orders_error.py)&#93;</code>

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
<summary><code>def fetch_order(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Order</code></summary>

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
try:
    response = client.orders.fetch_order("some example string")
    # TODO: Handle 'response' of type Order
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchOrderErrorBody
```

**Async**

```python
try:
    response = await async_client.orders.fetch_order("some example string")
    # TODO: Handle 'response' of type Order
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchOrderErrorBody
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

**OnSuccess**: <code>[Order](curlec/models/order.py)</code> -- Order details.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchOrderErrorBody](curlec/errors/fetch_order_error.py)&#93;</code>

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
<summary><code>def fetch_order_payments(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> OrdersPaymentsResponse</code></summary>

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
try:
    response = client.orders.fetch_order_payments("some example string")
    # TODO: Handle 'response' of type OrdersPaymentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchOrderPaymentsErrorBody
```

**Async**

```python
try:
    response = await async_client.orders.fetch_order_payments("some example string")
    # TODO: Handle 'response' of type OrdersPaymentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchOrderPaymentsErrorBody
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

**OnSuccess**: <code>[OrdersPaymentsResponse](curlec/models/orders_payments_response.py)</code> -- Collection of payments for the order.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchOrderPaymentsErrorBody](curlec/errors/fetch_order_payments_error.py)&#93;</code>

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
<summary><code>def update_order(id_: str, body: OrdersRequest1 | OrdersRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> Order</code></summary>

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
try:
    response = client.orders.update_order("some example string", OrdersRequest1(notes={"key": "some example string"}))
    # TODO: Handle 'response' of type Order
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateOrderErrorBody
```

**Async**

```python
try:
    response = await async_client.orders.update_order(
        "some example string", OrdersRequest1(notes={"key": "some example string"})
    )
    # TODO: Handle 'response' of type Order
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateOrderErrorBody
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

**OnSuccess**: <code>[Order](curlec/models/order.py)</code> -- Updated order.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[UpdateOrderErrorBody](curlec/errors/update_order_error.py)&#93;</code>

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
<summary><code>def delete_partner_account(account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> V2AccountsResponse</code></summary>

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
try:
    response = client.partner_accounts.delete_partner_account("some example string")
    # TODO: Handle 'response' of type V2AccountsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeletePartnerAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.partner_accounts.delete_partner_account("some example string")
    # TODO: Handle 'response' of type V2AccountsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeletePartnerAccountErrorBody
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

**OnSuccess**: <code>[V2AccountsResponse](curlec/models/v2_accounts_response.py)</code> -- Account suspended

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[DeletePartnerAccountErrorBody](curlec/errors/delete_partner_account_error.py)&#93;</code>

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
<summary><code>def fetch_linked_account2(account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> LinkedAccount</code></summary>

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
try:
    response = client.partner_accounts.fetch_linked_account2("some example string")
    # TODO: Handle 'response' of type LinkedAccount
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchLinkedAccount2ErrorBody
```

**Async**

```python
try:
    response = await async_client.partner_accounts.fetch_linked_account2("some example string")
    # TODO: Handle 'response' of type LinkedAccount
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchLinkedAccount2ErrorBody
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

**OnSuccess**: <code>[LinkedAccount](curlec/models/linked_account.py)</code> -- Linked Account details.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchLinkedAccount2ErrorBody](curlec/errors/fetch_linked_account2_error.py)&#93;</code>

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
<summary><code>def update_linked_account2(account_id: str, body: V2AccountsRequestRazorpayPartnerAccountsApi | V2AccountsRequestRazorpayPartnerAccountsApiDict, *, request_options: RequestOptionsOrDict | None = None) -> LinkedAccount</code></summary>

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
try:
    response = client.partner_accounts.update_linked_account2(
        "some example string", V2AccountsRequestRazorpayPartnerAccountsApi()
    )
    # TODO: Handle 'response' of type LinkedAccount
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateLinkedAccount2ErrorBody
```

**Async**

```python
try:
    response = await async_client.partner_accounts.update_linked_account2(
        "some example string", V2AccountsRequestRazorpayPartnerAccountsApi()
    )
    # TODO: Handle 'response' of type LinkedAccount
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateLinkedAccount2ErrorBody
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

**OnSuccess**: <code>[LinkedAccount](curlec/models/linked_account.py)</code> -- Linked Account updated.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[UpdateLinkedAccount2ErrorBody](curlec/errors/update_linked_account2_error.py)&#93;</code>

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
<summary><code>def fetch_account_documents(account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> AccountDocument</code></summary>

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
try:
    response = client.partner_documents.fetch_account_documents("some example string")
    # TODO: Handle 'response' of type AccountDocument
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchAccountDocumentsErrorBody
```

**Async**

```python
try:
    response = await async_client.partner_documents.fetch_account_documents("some example string")
    # TODO: Handle 'response' of type AccountDocument
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchAccountDocumentsErrorBody
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

**OnSuccess**: <code>[AccountDocument](curlec/models/account_document.py)</code> -- Account documents

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchAccountDocumentsErrorBody](curlec/errors/fetch_account_documents_error.py)&#93;</code>

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
<summary><code>def fetch_stakeholder_documents(account_id: str, stakeholder_id: str, *, request_options: RequestOptionsOrDict | None = None) -> StakeholderDocument</code></summary>

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
try:
    response = client.partner_documents.fetch_stakeholder_documents("some example string", "some example string")
    # TODO: Handle 'response' of type StakeholderDocument
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchStakeholderDocumentsErrorBody
```

**Async**

```python
try:
    response = await async_client.partner_documents.fetch_stakeholder_documents(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type StakeholderDocument
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchStakeholderDocumentsErrorBody
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

**OnSuccess**: <code>[StakeholderDocument](curlec/models/stakeholder_document.py)</code> -- Stakeholder documents

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchStakeholderDocumentsErrorBody](curlec/errors/fetch_stakeholder_documents_error.py)&#93;</code>

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
<summary><code>def upload_account_documents(account_id: str, *, document_type: DocumentTypeOrStr | None = None, file: FileInput | None = None, request_options: RequestOptionsOrDict | None = None) -> AccountDocument</code></summary>

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
try:
    response = client.partner_documents.upload_account_documents("some example string")
    # TODO: Handle 'response' of type AccountDocument
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadAccountDocumentsErrorBody
```

**Async**

```python
try:
    response = await async_client.partner_documents.upload_account_documents("some example string")
    # TODO: Handle 'response' of type AccountDocument
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadAccountDocumentsErrorBody
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

**OnSuccess**: <code>[AccountDocument](curlec/models/account_document.py)</code> -- Document uploaded

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[UploadAccountDocumentsErrorBody](curlec/errors/upload_account_documents_error.py)&#93;</code>

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
<summary><code>def upload_stakeholder_documents(account_id: str, stakeholder_id: str, *, document_type: DocumentType1OrStr | None = None, file: FileInput | None = None, request_options: RequestOptionsOrDict | None = None) -> StakeholderDocument</code></summary>

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
try:
    response = client.partner_documents.upload_stakeholder_documents("some example string", "some example string")
    # TODO: Handle 'response' of type StakeholderDocument
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadStakeholderDocumentsErrorBody
```

**Async**

```python
try:
    response = await async_client.partner_documents.upload_stakeholder_documents(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type StakeholderDocument
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadStakeholderDocumentsErrorBody
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

**OnSuccess**: <code>[StakeholderDocument](curlec/models/stakeholder_document.py)</code> -- Document uploaded

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[UploadStakeholderDocumentsErrorBody](curlec/errors/upload_stakeholder_documents_error.py)&#93;</code>

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
<summary><code>def create_stakeholder2(account_id: str, body: V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApi | V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApiDict, *, request_options: RequestOptionsOrDict | None = None) -> StakeholderRazorpayPartnerStakeholdersApi</code></summary>

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
try:
    response = client.partner_stakeholders.create_stakeholder2(
        "some example string",
        V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApi(
            name="some example string", email="some example string"
        ),
    )
    # TODO: Handle 'response' of type StakeholderRazorpayPartnerStakeholdersApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateStakeholder2ErrorBody
```

**Async**

```python
try:
    response = await async_client.partner_stakeholders.create_stakeholder2(
        "some example string",
        V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApi(
            name="some example string", email="some example string"
        ),
    )
    # TODO: Handle 'response' of type StakeholderRazorpayPartnerStakeholdersApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateStakeholder2ErrorBody
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

**OnSuccess**: <code>[StakeholderRazorpayPartnerStakeholdersApi](curlec/models/stakeholder_razorpay_partner_stakeholders_api.py)</code> -- Stakeholder created.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[CreateStakeholder2ErrorBody](curlec/errors/create_stakeholder2_error.py)&#93;</code>

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
<summary><code>def fetch_all_stakeholders(account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> V2AccountsStakeholdersResponse</code></summary>

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
try:
    response = client.partner_stakeholders.fetch_all_stakeholders("some example string")
    # TODO: Handle 'response' of type V2AccountsStakeholdersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchAllStakeholdersErrorBody
```

**Async**

```python
try:
    response = await async_client.partner_stakeholders.fetch_all_stakeholders("some example string")
    # TODO: Handle 'response' of type V2AccountsStakeholdersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchAllStakeholdersErrorBody
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

**OnSuccess**: <code>[V2AccountsStakeholdersResponse](curlec/models/v2_accounts_stakeholders_response.py)</code> -- List of stakeholders

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchAllStakeholdersErrorBody](curlec/errors/fetch_all_stakeholders_error.py)&#93;</code>

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
<summary><code>def update_stakeholder2(account_id: str, stakeholder_id: str, body: V2AccountsStakeholdersRequest1 | V2AccountsStakeholdersRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> StakeholderRazorpayPartnerStakeholdersApi</code></summary>

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
try:
    response = client.partner_stakeholders.update_stakeholder2(
        "some example string", "some example string", V2AccountsStakeholdersRequest1()
    )
    # TODO: Handle 'response' of type StakeholderRazorpayPartnerStakeholdersApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateStakeholder2ErrorBody
```

**Async**

```python
try:
    response = await async_client.partner_stakeholders.update_stakeholder2(
        "some example string", "some example string", V2AccountsStakeholdersRequest1()
    )
    # TODO: Handle 'response' of type StakeholderRazorpayPartnerStakeholdersApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateStakeholder2ErrorBody
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

**OnSuccess**: <code>[StakeholderRazorpayPartnerStakeholdersApi](curlec/models/stakeholder_razorpay_partner_stakeholders_api.py)</code> -- Stakeholder updated.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[UpdateStakeholder2ErrorBody](curlec/errors/update_stakeholder2_error.py)&#93;</code>

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
<summary><code>def create_partner_webhook(account_id: str, body: V2AccountsWebhooksRequest | V2AccountsWebhooksRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> PartnerWebhook</code></summary>

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
try:
    response = client.partner_webhooks.create_partner_webhook(
        "some example string", V2AccountsWebhooksRequest(url="some example string", events={"key": True})
    )
    # TODO: Handle 'response' of type PartnerWebhook
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePartnerWebhookErrorBody
```

**Async**

```python
try:
    response = await async_client.partner_webhooks.create_partner_webhook(
        "some example string", V2AccountsWebhooksRequest(url="some example string", events={"key": True})
    )
    # TODO: Handle 'response' of type PartnerWebhook
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePartnerWebhookErrorBody
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

**OnSuccess**: <code>[PartnerWebhook](curlec/models/partner_webhook.py)</code> -- Webhook created

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[CreatePartnerWebhookErrorBody](curlec/errors/create_partner_webhook_error.py)&#93;</code>

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
<summary><code>def delete_partner_webhook(account_id: str, webhook_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.partner_webhooks.delete_partner_webhook("some example string", "some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeletePartnerWebhookErrorBody
```

**Async**

```python
try:
    response = await async_client.partner_webhooks.delete_partner_webhook("some example string", "some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeletePartnerWebhookErrorBody
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

**OnSuccess**: <code>Any</code> -- Webhook deleted

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[DeletePartnerWebhookErrorBody](curlec/errors/delete_partner_webhook_error.py)&#93;</code>

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
<summary><code>def fetch_partner_webhook(account_id: str, webhook_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PartnerWebhook</code></summary>

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
try:
    response = client.partner_webhooks.fetch_partner_webhook("some example string", "some example string")
    # TODO: Handle 'response' of type PartnerWebhook
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchPartnerWebhookErrorBody
```

**Async**

```python
try:
    response = await async_client.partner_webhooks.fetch_partner_webhook("some example string", "some example string")
    # TODO: Handle 'response' of type PartnerWebhook
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchPartnerWebhookErrorBody
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

**OnSuccess**: <code>[PartnerWebhook](curlec/models/partner_webhook.py)</code> -- Webhook details

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchPartnerWebhookErrorBody](curlec/errors/fetch_partner_webhook_error.py)&#93;</code>

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
<summary><code>def list_partner_webhooks(account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> V2AccountsWebhooksResponse</code></summary>

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
try:
    response = client.partner_webhooks.list_partner_webhooks("some example string")
    # TODO: Handle 'response' of type V2AccountsWebhooksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPartnerWebhooksErrorBody
```

**Async**

```python
try:
    response = await async_client.partner_webhooks.list_partner_webhooks("some example string")
    # TODO: Handle 'response' of type V2AccountsWebhooksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPartnerWebhooksErrorBody
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

**OnSuccess**: <code>[V2AccountsWebhooksResponse](curlec/models/v2_accounts_webhooks_response.py)</code> -- List of webhooks

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[ListPartnerWebhooksErrorBody](curlec/errors/list_partner_webhooks_error.py)&#93;</code>

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
<summary><code>def update_partner_webhook(account_id: str, webhook_id: str, body: PartnerWebhook | PartnerWebhookDict, *, request_options: RequestOptionsOrDict | None = None) -> PartnerWebhook</code></summary>

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
try:
    response = client.partner_webhooks.update_partner_webhook(
        "some example string", "some example string", PartnerWebhook()
    )
    # TODO: Handle 'response' of type PartnerWebhook
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdatePartnerWebhookErrorBody
```

**Async**

```python
try:
    response = await async_client.partner_webhooks.update_partner_webhook(
        "some example string", "some example string", PartnerWebhook()
    )
    # TODO: Handle 'response' of type PartnerWebhook
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdatePartnerWebhookErrorBody
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

**OnSuccess**: <code>[PartnerWebhook](curlec/models/partner_webhook.py)</code> -- Webhook updated

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[UpdatePartnerWebhookErrorBody](curlec/errors/update_partner_webhook_error.py)&#93;</code>

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
<summary><code>def fetch_payment_downtime(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> PaymentDowntime</code></summary>

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
try:
    response = client.payment_downtimes.fetch_payment_downtime("some example string")
    # TODO: Handle 'response' of type PaymentDowntime
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchPaymentDowntimeErrorBody
```

**Async**

```python
try:
    response = await async_client.payment_downtimes.fetch_payment_downtime("some example string")
    # TODO: Handle 'response' of type PaymentDowntime
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchPaymentDowntimeErrorBody
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

**OnSuccess**: <code>[PaymentDowntime](curlec/models/payment_downtime.py)</code> -- Downtime details.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchPaymentDowntimeErrorBody](curlec/errors/fetch_payment_downtime_error.py)&#93;</code>

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
<summary><code>def fetch_payment_downtimes(*, request_options: RequestOptionsOrDict | None = None) -> PaymentsDowntimesResponse</code></summary>

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
try:
    response = client.payment_downtimes.fetch_payment_downtimes()
    # TODO: Handle 'response' of type PaymentsDowntimesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchPaymentDowntimesErrorBody
```

**Async**

```python
try:
    response = await async_client.payment_downtimes.fetch_payment_downtimes()
    # TODO: Handle 'response' of type PaymentsDowntimesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchPaymentDowntimesErrorBody
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

**OnSuccess**: <code>[PaymentsDowntimesResponse](curlec/models/payments_downtimes_response.py)</code> -- Collection of active and scheduled downtimes.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchPaymentDowntimesErrorBody](curlec/errors/fetch_payment_downtimes_error.py)&#93;</code>

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
<summary><code>def cancel_payment_link(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> PaymentLink</code></summary>

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
try:
    response = client.payment_links.cancel_payment_link("some example string")
    # TODO: Handle 'response' of type PaymentLink
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelPaymentLinkErrorBody
```

**Async**

```python
try:
    response = await async_client.payment_links.cancel_payment_link("some example string")
    # TODO: Handle 'response' of type PaymentLink
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelPaymentLinkErrorBody
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

**OnSuccess**: <code>[PaymentLink](curlec/models/payment_link.py)</code> -- Payment link cancelled. Status changes to 'cancelled'.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[CancelPaymentLinkErrorBody](curlec/errors/cancel_payment_link_error.py)&#93;</code>

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
<summary><code>def create_payment_link(body: PaymentLinksRequest | PaymentLinksRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> PaymentLink</code></summary>

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
try:
    response = client.payment_links.create_payment_link(
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
    # TODO: Handle 'response' of type PaymentLink
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePaymentLinkErrorBody
```

**Async**

```python
try:
    response = await async_client.payment_links.create_payment_link(
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
    # TODO: Handle 'response' of type PaymentLink
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePaymentLinkErrorBody
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

**OnSuccess**: <code>[PaymentLink](curlec/models/payment_link.py)</code> -- Payment link created.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[CreatePaymentLinkErrorBody](curlec/errors/create_payment_link_error.py)&#93;</code>

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
<summary><code>def fetch_all_payment_links(*, payment_id: str | None = None, reference_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaymentLinksResponse</code></summary>

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
try:
    response = client.payment_links.fetch_all_payment_links()
    # TODO: Handle 'response' of type PaymentLinksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchAllPaymentLinksErrorBody
```

**Async**

```python
try:
    response = await async_client.payment_links.fetch_all_payment_links()
    # TODO: Handle 'response' of type PaymentLinksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchAllPaymentLinksErrorBody
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

**OnSuccess**: <code>[PaymentLinksResponse](curlec/models/payment_links_response.py)</code> -- List of payment links.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchAllPaymentLinksErrorBody](curlec/errors/fetch_all_payment_links_error.py)&#93;</code>

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
<summary><code>def fetch_payment_link(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> PaymentLink</code></summary>

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
try:
    response = client.payment_links.fetch_payment_link("some example string")
    # TODO: Handle 'response' of type PaymentLink
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchPaymentLinkErrorBody
```

**Async**

```python
try:
    response = await async_client.payment_links.fetch_payment_link("some example string")
    # TODO: Handle 'response' of type PaymentLink
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchPaymentLinkErrorBody
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

**OnSuccess**: <code>[PaymentLink](curlec/models/payment_link.py)</code> -- Payment link details.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchPaymentLinkErrorBody](curlec/errors/fetch_payment_link_error.py)&#93;</code>

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
<summary><code>def resend_payment_link_notification(id_: str, medium: MediumOrStr, *, request_options: RequestOptionsOrDict | None = None) -> PaymentLinksNotifyByResponse</code></summary>

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
try:
    response = client.payment_links.resend_payment_link_notification("some example string", Medium.SMS)
    # TODO: Handle 'response' of type PaymentLinksNotifyByResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResendPaymentLinkNotificationErrorBody
```

**Async**

```python
try:
    response = await async_client.payment_links.resend_payment_link_notification("some example string", Medium.SMS)
    # TODO: Handle 'response' of type PaymentLinksNotifyByResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResendPaymentLinkNotificationErrorBody
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

**OnSuccess**: <code>[PaymentLinksNotifyByResponse](curlec/models/payment_links_notify_by_response.py)</code> -- Notification sent.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[ResendPaymentLinkNotificationErrorBody](curlec/errors/resend_payment_link_notification_error.py)&#93;</code>

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
<summary><code>def update_payment_link(id_: str, body: PaymentLinksRequest1 | PaymentLinksRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> PaymentLink</code></summary>

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
try:
    response = client.payment_links.update_payment_link("some example string", PaymentLinksRequest1())
    # TODO: Handle 'response' of type PaymentLink
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdatePaymentLinkErrorBody
```

**Async**

```python
try:
    response = await async_client.payment_links.update_payment_link("some example string", PaymentLinksRequest1())
    # TODO: Handle 'response' of type PaymentLink
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdatePaymentLinkErrorBody
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

**OnSuccess**: <code>[PaymentLink](curlec/models/payment_link.py)</code> -- Updated payment link.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[UpdatePaymentLinkErrorBody](curlec/errors/update_payment_link_error.py)&#93;</code>

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
<summary><code>def capture_payment(id_: str, body: PaymentsCaptureRequest | PaymentsCaptureRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> PaymentRazorpayPaymentsApi</code></summary>

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
try:
    response = client.payments.capture_payment(
        "some example string", PaymentsCaptureRequest(amount=50000, currency="INR")
    )
    # TODO: Handle 'response' of type PaymentRazorpayPaymentsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CapturePaymentErrorBody
```

**Async**

```python
try:
    response = await async_client.payments.capture_payment(
        "some example string", PaymentsCaptureRequest(amount=50000, currency="INR")
    )
    # TODO: Handle 'response' of type PaymentRazorpayPaymentsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CapturePaymentErrorBody
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

**OnSuccess**: <code>[PaymentRazorpayPaymentsApi](curlec/models/payment_razorpay_payments_api.py)</code> -- Payment captured. Status changes to 'captured'.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[CapturePaymentErrorBody](curlec/errors/capture_payment_error.py)&#93;</code>

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
<summary><code>def fetch_all_payments(*, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> PaymentsResponse</code></summary>

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
try:
    response = client.payments.fetch_all_payments()
    # TODO: Handle 'response' of type PaymentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchAllPaymentsErrorBody
```

**Async**

```python
try:
    response = await async_client.payments.fetch_all_payments()
    # TODO: Handle 'response' of type PaymentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchAllPaymentsErrorBody
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

**OnSuccess**: <code>[PaymentsResponse](curlec/models/payments_response.py)</code> -- Collection of payments.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchAllPaymentsErrorBody](curlec/errors/fetch_all_payments_error.py)&#93;</code>

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
<summary><code>def fetch_payment(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> PaymentRazorpayPaymentsApi</code></summary>

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
try:
    response = client.payments.fetch_payment("some example string")
    # TODO: Handle 'response' of type PaymentRazorpayPaymentsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchPaymentErrorBody
```

**Async**

```python
try:
    response = await async_client.payments.fetch_payment("some example string")
    # TODO: Handle 'response' of type PaymentRazorpayPaymentsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchPaymentErrorBody
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

**OnSuccess**: <code>[PaymentRazorpayPaymentsApi](curlec/models/payment_razorpay_payments_api.py)</code> -- Payment details.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchPaymentErrorBody](curlec/errors/fetch_payment_error.py)&#93;</code>

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
<summary><code>def update_payment(id_: str, body: PaymentsRequest | PaymentsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> PaymentRazorpayPaymentsApi</code></summary>

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
try:
    response = client.payments.update_payment(
        "some example string", PaymentsRequest(notes={"key": "some example string"})
    )
    # TODO: Handle 'response' of type PaymentRazorpayPaymentsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdatePaymentErrorBody
```

**Async**

```python
try:
    response = await async_client.payments.update_payment(
        "some example string", PaymentsRequest(notes={"key": "some example string"})
    )
    # TODO: Handle 'response' of type PaymentRazorpayPaymentsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdatePaymentErrorBody
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

**OnSuccess**: <code>[PaymentRazorpayPaymentsApi](curlec/models/payment_razorpay_payments_api.py)</code> -- Updated payment.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[UpdatePaymentErrorBody](curlec/errors/update_payment_error.py)&#93;</code>

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
<summary><code>def create_plan(body: PlansRequest | PlansRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Plan</code></summary>

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
try:
    response = client.plans.create_plan(
        PlansRequest(
            period=Period1.MONTHLY,
            interval=1,
            item=Item1(name="Pro Plan", description="Monthly SaaS subscription", amount=49900, currency="INR"),
        ),
    )
    # TODO: Handle 'response' of type Plan
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePlanErrorBody
```

**Async**

```python
try:
    response = await async_client.plans.create_plan(
        PlansRequest(
            period=Period1.MONTHLY,
            interval=1,
            item=Item1(name="Pro Plan", description="Monthly SaaS subscription", amount=49900, currency="INR"),
        ),
    )
    # TODO: Handle 'response' of type Plan
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePlanErrorBody
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

**OnSuccess**: <code>[Plan](curlec/models/plan.py)</code> -- Plan created.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[CreatePlanErrorBody](curlec/errors/create_plan_error.py)&#93;</code>

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
<summary><code>def fetch_plan(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Plan</code></summary>

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
try:
    response = client.plans.fetch_plan("some example string")
    # TODO: Handle 'response' of type Plan
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchPlanErrorBody
```

**Async**

```python
try:
    response = await async_client.plans.fetch_plan("some example string")
    # TODO: Handle 'response' of type Plan
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchPlanErrorBody
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

**OnSuccess**: <code>[Plan](curlec/models/plan.py)</code> -- Plan details.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchPlanErrorBody](curlec/errors/fetch_plan_error.py)&#93;</code>

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
<summary><code>def list_plans(*, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> PlansResponse</code></summary>

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
try:
    response = client.plans.list_plans()
    # TODO: Handle 'response' of type PlansResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPlansErrorBody
```

**Async**

```python
try:
    response = await async_client.plans.list_plans()
    # TODO: Handle 'response' of type PlansResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPlansErrorBody
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

**OnSuccess**: <code>[PlansResponse](curlec/models/plans_response.py)</code> -- Collection of plans.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[ListPlansErrorBody](curlec/errors/list_plans_error.py)&#93;</code>

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
<summary><code>def close_qr_code(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> QrCode</code></summary>

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
try:
    response = client.qr_codes.close_qr_code("some example string")
    # TODO: Handle 'response' of type QrCode
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloseQrCodeErrorBody
```

**Async**

```python
try:
    response = await async_client.qr_codes.close_qr_code("some example string")
    # TODO: Handle 'response' of type QrCode
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloseQrCodeErrorBody
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

**OnSuccess**: <code>[QrCode](curlec/models/qr_code.py)</code> -- QR code closed. Status changes to 'closed'.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[CloseQrCodeErrorBody](curlec/errors/close_qr_code_error.py)&#93;</code>

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
<summary><code>def create_qr_code(body: PaymentsQrCodesRequest | PaymentsQrCodesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> QrCode</code></summary>

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
try:
    response = client.qr_codes.create_qr_code(
        PaymentsQrCodesRequest(name="some example string", usage=Usage.SINGLE_USE, fixed_amount=True)
    )
    # TODO: Handle 'response' of type QrCode
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateQrCodeErrorBody
```

**Async**

```python
try:
    response = await async_client.qr_codes.create_qr_code(
        PaymentsQrCodesRequest(name="some example string", usage=Usage.SINGLE_USE, fixed_amount=True)
    )
    # TODO: Handle 'response' of type QrCode
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateQrCodeErrorBody
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

**OnSuccess**: <code>[QrCode](curlec/models/qr_code.py)</code> -- QR code created.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[CreateQrCodeErrorBody](curlec/errors/create_qr_code_error.py)&#93;</code>

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
<summary><code>def fetch_all_qr_codes(*, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, customer_id: str | None = None, payment_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaymentsQrCodesResponse</code></summary>

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
try:
    response = client.qr_codes.fetch_all_qr_codes()
    # TODO: Handle 'response' of type PaymentsQrCodesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchAllQrCodesErrorBody
```

**Async**

```python
try:
    response = await async_client.qr_codes.fetch_all_qr_codes()
    # TODO: Handle 'response' of type PaymentsQrCodesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchAllQrCodesErrorBody
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

**OnSuccess**: <code>[PaymentsQrCodesResponse](curlec/models/payments_qr_codes_response.py)</code> -- Collection of QR codes.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchAllQrCodesErrorBody](curlec/errors/fetch_all_qr_codes_error.py)&#93;</code>

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
<summary><code>def fetch_qr_code(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> QrCode</code></summary>

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
try:
    response = client.qr_codes.fetch_qr_code("some example string")
    # TODO: Handle 'response' of type QrCode
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchQrCodeErrorBody
```

**Async**

```python
try:
    response = await async_client.qr_codes.fetch_qr_code("some example string")
    # TODO: Handle 'response' of type QrCode
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchQrCodeErrorBody
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

**OnSuccess**: <code>[QrCode](curlec/models/qr_code.py)</code> -- QR code details.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchQrCodeErrorBody](curlec/errors/fetch_qr_code_error.py)&#93;</code>

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
<summary><code>def fetch_qr_code_payments(id_: str, *, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> PaymentsQrCodesPaymentsResponse</code></summary>

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
try:
    response = client.qr_codes.fetch_qr_code_payments("some example string")
    # TODO: Handle 'response' of type PaymentsQrCodesPaymentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchQrCodePaymentsErrorBody
```

**Async**

```python
try:
    response = await async_client.qr_codes.fetch_qr_code_payments("some example string")
    # TODO: Handle 'response' of type PaymentsQrCodesPaymentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchQrCodePaymentsErrorBody
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

**OnSuccess**: <code>[PaymentsQrCodesPaymentsResponse](curlec/models/payments_qr_codes_payments_response.py)</code> -- Collection of payments for the QR code.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchQrCodePaymentsErrorBody](curlec/errors/fetch_qr_code_payments_error.py)&#93;</code>

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
<summary><code>def update_qr_code(id_: str, body: PaymentsQrCodesRequest1 | PaymentsQrCodesRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> QrCode</code></summary>

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
try:
    response = client.qr_codes.update_qr_code(
        "some example string", PaymentsQrCodesRequest1(notes={"key": "some example string"})
    )
    # TODO: Handle 'response' of type QrCode
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateQrCodeErrorBody
```

**Async**

```python
try:
    response = await async_client.qr_codes.update_qr_code(
        "some example string", PaymentsQrCodesRequest1(notes={"key": "some example string"})
    )
    # TODO: Handle 'response' of type QrCode
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateQrCodeErrorBody
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

**OnSuccess**: <code>[QrCode](curlec/models/qr_code.py)</code> -- Updated QR code.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[UpdateQrCodeErrorBody](curlec/errors/update_qr_code_error.py)&#93;</code>

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
<summary><code>def create_refund(id_: str, *, body: PaymentsRefundRequest | PaymentsRefundRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> RefundRazorpayRefundsApi</code></summary>

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
try:
    response = client.refunds.create_refund(
        "some example string",
        body=PaymentsRefundRequest(amount=50000, speed=Speed.NORMAL, receipt="refund_receipt_001"),
    )
    # TODO: Handle 'response' of type RefundRazorpayRefundsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateRefundErrorBody
```

**Async**

```python
try:
    response = await async_client.refunds.create_refund(
        "some example string",
        body=PaymentsRefundRequest(amount=50000, speed=Speed.NORMAL, receipt="refund_receipt_001"),
    )
    # TODO: Handle 'response' of type RefundRazorpayRefundsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateRefundErrorBody
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

**OnSuccess**: <code>[RefundRazorpayRefundsApi](curlec/models/refund_razorpay_refunds_api.py)</code> -- Refund initiated.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[CreateRefundErrorBody](curlec/errors/create_refund_error.py)&#93;</code>

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
<summary><code>def fetch_all_refunds(*, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> RefundsResponse</code></summary>

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
try:
    response = client.refunds.fetch_all_refunds()
    # TODO: Handle 'response' of type RefundsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchAllRefundsErrorBody
```

**Async**

```python
try:
    response = await async_client.refunds.fetch_all_refunds()
    # TODO: Handle 'response' of type RefundsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchAllRefundsErrorBody
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

**OnSuccess**: <code>[RefundsResponse](curlec/models/refunds_response.py)</code> -- Collection of refunds.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchAllRefundsErrorBody](curlec/errors/fetch_all_refunds_error.py)&#93;</code>

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
<summary><code>def fetch_payment_refund(payment_id: str, refund_id: str, *, request_options: RequestOptionsOrDict | None = None) -> RefundRazorpayRefundsApi</code></summary>

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
try:
    response = client.refunds.fetch_payment_refund("some example string", "some example string")
    # TODO: Handle 'response' of type RefundRazorpayRefundsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchPaymentRefundErrorBody
```

**Async**

```python
try:
    response = await async_client.refunds.fetch_payment_refund("some example string", "some example string")
    # TODO: Handle 'response' of type RefundRazorpayRefundsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchPaymentRefundErrorBody
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

**OnSuccess**: <code>[RefundRazorpayRefundsApi](curlec/models/refund_razorpay_refunds_api.py)</code> -- Refund details.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchPaymentRefundErrorBody](curlec/errors/fetch_payment_refund_error.py)&#93;</code>

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
<summary><code>def fetch_payment_refunds(payment_id: str, *, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> PaymentsRefundsResponse</code></summary>

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
try:
    response = client.refunds.fetch_payment_refunds("some example string")
    # TODO: Handle 'response' of type PaymentsRefundsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchPaymentRefundsErrorBody
```

**Async**

```python
try:
    response = await async_client.refunds.fetch_payment_refunds("some example string")
    # TODO: Handle 'response' of type PaymentsRefundsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchPaymentRefundsErrorBody
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

**OnSuccess**: <code>[PaymentsRefundsResponse](curlec/models/payments_refunds_response.py)</code> -- Collection of refunds for the payment.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchPaymentRefundsErrorBody](curlec/errors/fetch_payment_refunds_error.py)&#93;</code>

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
<summary><code>def fetch_refund(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> RefundRazorpayRefundsApi</code></summary>

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
try:
    response = client.refunds.fetch_refund("some example string")
    # TODO: Handle 'response' of type RefundRazorpayRefundsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchRefundErrorBody
```

**Async**

```python
try:
    response = await async_client.refunds.fetch_refund("some example string")
    # TODO: Handle 'response' of type RefundRazorpayRefundsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchRefundErrorBody
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

**OnSuccess**: <code>[RefundRazorpayRefundsApi](curlec/models/refund_razorpay_refunds_api.py)</code> -- Refund details.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchRefundErrorBody](curlec/errors/fetch_refund_error.py)&#93;</code>

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
<summary><code>def update_refund(id_: str, body: RefundsRequest | RefundsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> RefundRazorpayRefundsApi</code></summary>

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
try:
    response = client.refunds.update_refund("some example string", RefundsRequest(notes={"key": "some example string"}))
    # TODO: Handle 'response' of type RefundRazorpayRefundsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateRefundErrorBody
```

**Async**

```python
try:
    response = await async_client.refunds.update_refund(
        "some example string", RefundsRequest(notes={"key": "some example string"})
    )
    # TODO: Handle 'response' of type RefundRazorpayRefundsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateRefundErrorBody
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

**OnSuccess**: <code>[RefundRazorpayRefundsApi](curlec/models/refund_razorpay_refunds_api.py)</code> -- Updated refund.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[UpdateRefundErrorBody](curlec/errors/update_refund_error.py)&#93;</code>

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
<summary><code>def fetch_all_settlements(*, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> SettlementsResponse</code></summary>

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
try:
    response = client.settlements_api.fetch_all_settlements()
    # TODO: Handle 'response' of type SettlementsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchAllSettlementsErrorBody
```

**Async**

```python
try:
    response = await async_client.settlements_api.fetch_all_settlements()
    # TODO: Handle 'response' of type SettlementsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchAllSettlementsErrorBody
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

**OnSuccess**: <code>[SettlementsResponse](curlec/models/settlements_response.py)</code> -- Collection of settlements.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchAllSettlementsErrorBody](curlec/errors/fetch_all_settlements_error.py)&#93;</code>

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
<summary><code>def fetch_settlement(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Settlement</code></summary>

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
try:
    response = client.settlements_api.fetch_settlement("some example string")
    # TODO: Handle 'response' of type Settlement
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchSettlementErrorBody
```

**Async**

```python
try:
    response = await async_client.settlements_api.fetch_settlement("some example string")
    # TODO: Handle 'response' of type Settlement
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchSettlementErrorBody
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

**OnSuccess**: <code>[Settlement](curlec/models/settlement.py)</code> -- Settlement details.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchSettlementErrorBody](curlec/errors/fetch_settlement_error.py)&#93;</code>

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
<summary><code>def fetch_settlement_recon(year: int, month: int, *, day: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> SettlementsReconCombinedResponse</code></summary>

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
try:
    response = client.settlements_api.fetch_settlement_recon(2024, 4)
    # TODO: Handle 'response' of type SettlementsReconCombinedResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchSettlementReconErrorBody
```

**Async**

```python
try:
    response = await async_client.settlements_api.fetch_settlement_recon(2024, 4)
    # TODO: Handle 'response' of type SettlementsReconCombinedResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchSettlementReconErrorBody
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

**OnSuccess**: <code>[SettlementsReconCombinedResponse](curlec/models/settlements_recon_combined_response.py)</code> -- Reconciliation report records.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchSettlementReconErrorBody](curlec/errors/fetch_settlement_recon_error.py)&#93;</code>

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
<summary><code>def cancel_subscription(id_: str, *, body: SubscriptionsCancelRequest | SubscriptionsCancelRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Subscription</code></summary>

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
try:
    response = client.subscriptions.cancel_subscription("some example string")
    # TODO: Handle 'response' of type Subscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelSubscriptionErrorBody
```

**Async**

```python
try:
    response = await async_client.subscriptions.cancel_subscription("some example string")
    # TODO: Handle 'response' of type Subscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelSubscriptionErrorBody
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

**OnSuccess**: <code>[Subscription](curlec/models/subscription.py)</code> -- Subscription cancelled.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[CancelSubscriptionErrorBody](curlec/errors/cancel_subscription_error.py)&#93;</code>

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
<summary><code>def cancel_subscription_scheduled_changes(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Subscription</code></summary>

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
try:
    response = client.subscriptions.cancel_subscription_scheduled_changes("some example string")
    # TODO: Handle 'response' of type Subscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelSubscriptionScheduledChangesErrorBody
```

**Async**

```python
try:
    response = await async_client.subscriptions.cancel_subscription_scheduled_changes("some example string")
    # TODO: Handle 'response' of type Subscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelSubscriptionScheduledChangesErrorBody
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

**OnSuccess**: <code>[Subscription](curlec/models/subscription.py)</code> -- Scheduled changes cancelled.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[CancelSubscriptionScheduledChangesErrorBody](curlec/errors/cancel_subscription_scheduled_changes_error.py)&#93;</code>

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
<summary><code>def create_subscription(body: SubscriptionsRequest | SubscriptionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Subscription</code></summary>

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
try:
    response = client.subscriptions.create_subscription(
        SubscriptionsRequest(plan_id="some example string", total_count=1)
    )
    # TODO: Handle 'response' of type Subscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSubscriptionErrorBody
```

**Async**

```python
try:
    response = await async_client.subscriptions.create_subscription(
        SubscriptionsRequest(plan_id="some example string", total_count=1)
    )
    # TODO: Handle 'response' of type Subscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSubscriptionErrorBody
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

**OnSuccess**: <code>[Subscription](curlec/models/subscription.py)</code> -- Subscription created. Send short_url to the customer for mandate authorization.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[CreateSubscriptionErrorBody](curlec/errors/create_subscription_error.py)&#93;</code>

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
<summary><code>def delete_subscription_offer(sub_id: str, offer_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.subscriptions.delete_subscription_offer("some example string", "some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSubscriptionOfferErrorBody
```

**Async**

```python
try:
    response = await async_client.subscriptions.delete_subscription_offer("some example string", "some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSubscriptionOfferErrorBody
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

**OnSuccess**: <code>Any</code> -- Offer removed from subscription.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[DeleteSubscriptionOfferErrorBody](curlec/errors/delete_subscription_offer_error.py)&#93;</code>

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
<summary><code>def fetch_subscription(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Subscription</code></summary>

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
try:
    response = client.subscriptions.fetch_subscription("some example string")
    # TODO: Handle 'response' of type Subscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchSubscriptionErrorBody
```

**Async**

```python
try:
    response = await async_client.subscriptions.fetch_subscription("some example string")
    # TODO: Handle 'response' of type Subscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchSubscriptionErrorBody
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

**OnSuccess**: <code>[Subscription](curlec/models/subscription.py)</code> -- Subscription details.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchSubscriptionErrorBody](curlec/errors/fetch_subscription_error.py)&#93;</code>

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
<summary><code>def fetch_subscription_scheduled_changes(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> SubscriptionsRetrieveScheduledChangesResponse</code></summary>

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
try:
    response = client.subscriptions.fetch_subscription_scheduled_changes("some example string")
    # TODO: Handle 'response' of type SubscriptionsRetrieveScheduledChangesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchSubscriptionScheduledChangesErrorBody
```

**Async**

```python
try:
    response = await async_client.subscriptions.fetch_subscription_scheduled_changes("some example string")
    # TODO: Handle 'response' of type SubscriptionsRetrieveScheduledChangesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchSubscriptionScheduledChangesErrorBody
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

**OnSuccess**: <code>[SubscriptionsRetrieveScheduledChangesResponse](curlec/models/subscriptions_retrieve_scheduled_changes_response.py)</code> -- Scheduled changes for the subscription.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchSubscriptionScheduledChangesErrorBody](curlec/errors/fetch_subscription_scheduled_changes_error.py)&#93;</code>

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
<summary><code>def list_subscriptions(*, plan_id: str | None = None, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> SubscriptionsResponse</code></summary>

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
try:
    response = client.subscriptions.list_subscriptions()
    # TODO: Handle 'response' of type SubscriptionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSubscriptionsErrorBody
```

**Async**

```python
try:
    response = await async_client.subscriptions.list_subscriptions()
    # TODO: Handle 'response' of type SubscriptionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSubscriptionsErrorBody
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

**OnSuccess**: <code>[SubscriptionsResponse](curlec/models/subscriptions_response.py)</code> -- Collection of subscriptions.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[ListSubscriptionsErrorBody](curlec/errors/list_subscriptions_error.py)&#93;</code>

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
<summary><code>def pause_subscription(id_: str, *, body: SubscriptionsPauseRequest | SubscriptionsPauseRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Subscription</code></summary>

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
try:
    response = client.subscriptions.pause_subscription("some example string")
    # TODO: Handle 'response' of type Subscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PauseSubscriptionErrorBody
```

**Async**

```python
try:
    response = await async_client.subscriptions.pause_subscription("some example string")
    # TODO: Handle 'response' of type Subscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PauseSubscriptionErrorBody
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

**OnSuccess**: <code>[Subscription](curlec/models/subscription.py)</code> -- Subscription paused.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[PauseSubscriptionErrorBody](curlec/errors/pause_subscription_error.py)&#93;</code>

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
<summary><code>def resume_subscription(id_: str, *, body: SubscriptionsResumeRequest | SubscriptionsResumeRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Subscription</code></summary>

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
try:
    response = client.subscriptions.resume_subscription("some example string")
    # TODO: Handle 'response' of type Subscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResumeSubscriptionErrorBody
```

**Async**

```python
try:
    response = await async_client.subscriptions.resume_subscription("some example string")
    # TODO: Handle 'response' of type Subscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResumeSubscriptionErrorBody
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

**OnSuccess**: <code>[Subscription](curlec/models/subscription.py)</code> -- Subscription resumed.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[ResumeSubscriptionErrorBody](curlec/errors/resume_subscription_error.py)&#93;</code>

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
<summary><code>def update_subscription(id_: str, body: SubscriptionsRequest1 | SubscriptionsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> Subscription</code></summary>

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
try:
    response = client.subscriptions.update_subscription("some example string", SubscriptionsRequest1())
    # TODO: Handle 'response' of type Subscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateSubscriptionErrorBody
```

**Async**

```python
try:
    response = await async_client.subscriptions.update_subscription("some example string", SubscriptionsRequest1())
    # TODO: Handle 'response' of type Subscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateSubscriptionErrorBody
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

**OnSuccess**: <code>[Subscription](curlec/models/subscription.py)</code> -- Subscription updated.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[UpdateSubscriptionErrorBody](curlec/errors/update_subscription_error.py)&#93;</code>

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
<summary><code>def create_direct_transfer(body: TransfersRequest | TransfersRequestDict, *, x_transfer_idempotency: str | None = None, request_options: RequestOptionsOrDict | None = None) -> TransferRazorpayTransfersApi</code></summary>

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
try:
    response = client.transfers.create_direct_transfer(TransfersRequest(account="some example string", amount=1))
    # TODO: Handle 'response' of type TransferRazorpayTransfersApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateDirectTransferErrorBody
```

**Async**

```python
try:
    response = await async_client.transfers.create_direct_transfer(
        TransfersRequest(account="some example string", amount=1)
    )
    # TODO: Handle 'response' of type TransferRazorpayTransfersApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateDirectTransferErrorBody
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

**OnSuccess**: <code>[TransferRazorpayTransfersApi](curlec/models/transfer_razorpay_transfers_api.py)</code> -- Transfer created.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[CreateDirectTransferErrorBody](curlec/errors/create_direct_transfer_error.py)&#93;</code>

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
<summary><code>def create_transfers_from_payment(id_: str, body: PaymentsTransfersRequest | PaymentsTransfersRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> PaymentsTransfersResponse</code></summary>

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
try:
    response = client.transfers.create_transfers_from_payment(
        "some example string", PaymentsTransfersRequest(transfers=[Transfer1(account="some example string", amount=1)])
    )
    # TODO: Handle 'response' of type PaymentsTransfersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateTransfersFromPaymentErrorBody
```

**Async**

```python
try:
    response = await async_client.transfers.create_transfers_from_payment(
        "some example string", PaymentsTransfersRequest(transfers=[Transfer1(account="some example string", amount=1)])
    )
    # TODO: Handle 'response' of type PaymentsTransfersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateTransfersFromPaymentErrorBody
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

**OnSuccess**: <code>[PaymentsTransfersResponse](curlec/models/payments_transfers_response.py)</code> -- Transfers created.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[CreateTransfersFromPaymentErrorBody](curlec/errors/create_transfers_from_payment_error.py)&#93;</code>

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
<summary><code>def fetch_transfer(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> TransferRazorpayTransfersApi</code></summary>

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
try:
    response = client.transfers.fetch_transfer("some example string")
    # TODO: Handle 'response' of type TransferRazorpayTransfersApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchTransferErrorBody
```

**Async**

```python
try:
    response = await async_client.transfers.fetch_transfer("some example string")
    # TODO: Handle 'response' of type TransferRazorpayTransfersApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchTransferErrorBody
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

**OnSuccess**: <code>[TransferRazorpayTransfersApi](curlec/models/transfer_razorpay_transfers_api.py)</code> -- Transfer details.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchTransferErrorBody](curlec/errors/fetch_transfer_error.py)&#93;</code>

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
<summary><code>def fetch_transfers_for_payment(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> PaymentsTransfersResponse</code></summary>

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
try:
    response = client.transfers.fetch_transfers_for_payment("some example string")
    # TODO: Handle 'response' of type PaymentsTransfersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchTransfersForPaymentErrorBody
```

**Async**

```python
try:
    response = await async_client.transfers.fetch_transfers_for_payment("some example string")
    # TODO: Handle 'response' of type PaymentsTransfersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchTransfersForPaymentErrorBody
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

**OnSuccess**: <code>[PaymentsTransfersResponse](curlec/models/payments_transfers_response.py)</code> -- List of transfers for the payment.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchTransfersForPaymentErrorBody](curlec/errors/fetch_transfers_for_payment_error.py)&#93;</code>

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
<summary><code>def list_reversals(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> TransfersReversalsResponse</code></summary>

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
try:
    response = client.transfers.list_reversals("some example string")
    # TODO: Handle 'response' of type TransfersReversalsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListReversalsErrorBody
```

**Async**

```python
try:
    response = await async_client.transfers.list_reversals("some example string")
    # TODO: Handle 'response' of type TransfersReversalsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListReversalsErrorBody
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

**OnSuccess**: <code>[TransfersReversalsResponse](curlec/models/transfers_reversals_response.py)</code> -- List of reversals.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[ListReversalsErrorBody](curlec/errors/list_reversals_error.py)&#93;</code>

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
<summary><code>def list_transfers(*, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, recipient_settlement_id: str | None = None, expand: ExpandRazorpayTransfersApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> TransfersResponse</code></summary>

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
try:
    response = client.transfers.list_transfers()
    # TODO: Handle 'response' of type TransfersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTransfersErrorBody
```

**Async**

```python
try:
    response = await async_client.transfers.list_transfers()
    # TODO: Handle 'response' of type TransfersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTransfersErrorBody
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

**OnSuccess**: <code>[TransfersResponse](curlec/models/transfers_response.py)</code> -- List of transfers.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[ListTransfersErrorBody](curlec/errors/list_transfers_error.py)&#93;</code>

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
<summary><code>def modify_transfer_settlement_hold(id_: str, body: TransfersRequest1 | TransfersRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> TransferRazorpayTransfersApi</code></summary>

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
try:
    response = client.transfers.modify_transfer_settlement_hold("some example string", TransfersRequest1())
    # TODO: Handle 'response' of type TransferRazorpayTransfersApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ModifyTransferSettlementHoldErrorBody
```

**Async**

```python
try:
    response = await async_client.transfers.modify_transfer_settlement_hold("some example string", TransfersRequest1())
    # TODO: Handle 'response' of type TransferRazorpayTransfersApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ModifyTransferSettlementHoldErrorBody
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

**OnSuccess**: <code>[TransferRazorpayTransfersApi](curlec/models/transfer_razorpay_transfers_api.py)</code> -- Transfer settlement hold updated.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[ModifyTransferSettlementHoldErrorBody](curlec/errors/modify_transfer_settlement_hold_error.py)&#93;</code>

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
<summary><code>def reverse_transfer(id_: str, *, body: TransfersReversalsRequest | TransfersReversalsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Reversal</code></summary>

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
try:
    response = client.transfers.reverse_transfer("some example string")
    # TODO: Handle 'response' of type Reversal
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ReverseTransferErrorBody
```

**Async**

```python
try:
    response = await async_client.transfers.reverse_transfer("some example string")
    # TODO: Handle 'response' of type Reversal
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ReverseTransferErrorBody
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

**OnSuccess**: <code>[Reversal](curlec/models/reversal.py)</code> -- Reversal created.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[ReverseTransferErrorBody](curlec/errors/reverse_transfer_error.py)&#93;</code>

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
<summary><code>def add_allowed_payer(va_id: str, body: VirtualAccountsAllowedPayersRequest | VirtualAccountsAllowedPayersRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> VirtualAccount</code></summary>

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
try:
    response = client.virtual_accounts.add_allowed_payer(
        "some example string", VirtualAccountsAllowedPayersRequest(type_=Type2RazorpayVirtualAccountsApi.BANK_ACCOUNT)
    )
    # TODO: Handle 'response' of type VirtualAccount
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddAllowedPayerErrorBody
```

**Async**

```python
try:
    response = await async_client.virtual_accounts.add_allowed_payer(
        "some example string", VirtualAccountsAllowedPayersRequest(type_=Type2RazorpayVirtualAccountsApi.BANK_ACCOUNT)
    )
    # TODO: Handle 'response' of type VirtualAccount
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddAllowedPayerErrorBody
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

**OnSuccess**: <code>[VirtualAccount](curlec/models/virtual_account.py)</code> -- Allowed payer added.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[AddAllowedPayerErrorBody](curlec/errors/add_allowed_payer_error.py)&#93;</code>

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
<summary><code>def add_vpa_receiver(id_: str, body: VirtualAccountsReceiversRequest | VirtualAccountsReceiversRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> VirtualAccount</code></summary>

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
try:
    response = client.virtual_accounts.add_vpa_receiver(
        "some example string", VirtualAccountsReceiversRequest(types=[Type1RazorpayVirtualAccountsApi.VPA])
    )
    # TODO: Handle 'response' of type VirtualAccount
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddVpaReceiverErrorBody
```

**Async**

```python
try:
    response = await async_client.virtual_accounts.add_vpa_receiver(
        "some example string", VirtualAccountsReceiversRequest(types=[Type1RazorpayVirtualAccountsApi.VPA])
    )
    # TODO: Handle 'response' of type VirtualAccount
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddVpaReceiverErrorBody
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

**OnSuccess**: <code>[VirtualAccount](curlec/models/virtual_account.py)</code> -- VPA receiver added. Returns the updated VirtualAccount.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[AddVpaReceiverErrorBody](curlec/errors/add_vpa_receiver_error.py)&#93;</code>

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
<summary><code>def close_virtual_account(id_: str, body: VirtualAccountsCloseRequest | VirtualAccountsCloseRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> VirtualAccount</code></summary>

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
try:
    response = client.virtual_accounts.close_virtual_account("some example string", VirtualAccountsCloseRequest())
    # TODO: Handle 'response' of type VirtualAccount
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloseVirtualAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.virtual_accounts.close_virtual_account(
        "some example string", VirtualAccountsCloseRequest()
    )
    # TODO: Handle 'response' of type VirtualAccount
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloseVirtualAccountErrorBody
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

**OnSuccess**: <code>[VirtualAccount](curlec/models/virtual_account.py)</code> -- Virtual Account closed.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[CloseVirtualAccountErrorBody](curlec/errors/close_virtual_account_error.py)&#93;</code>

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
<summary><code>def create_virtual_account(body: VirtualAccountsRequest | VirtualAccountsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> VirtualAccount</code></summary>

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
try:
    response = client.virtual_accounts.create_virtual_account(
        VirtualAccountsRequest(
            receivers=Receivers(types=[TypeRazorpayVirtualAccountsApi.BANK_ACCOUNT]), description="some example string"
        ),
    )
    # TODO: Handle 'response' of type VirtualAccount
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateVirtualAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.virtual_accounts.create_virtual_account(
        VirtualAccountsRequest(
            receivers=Receivers(types=[TypeRazorpayVirtualAccountsApi.BANK_ACCOUNT]), description="some example string"
        ),
    )
    # TODO: Handle 'response' of type VirtualAccount
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateVirtualAccountErrorBody
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

**OnSuccess**: <code>[VirtualAccount](curlec/models/virtual_account.py)</code> -- Virtual Account created.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[CreateVirtualAccountErrorBody](curlec/errors/create_virtual_account_error.py)&#93;</code>

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
<summary><code>def delete_allowed_payer(va_id: str, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.virtual_accounts.delete_allowed_payer("some example string", "some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteAllowedPayerErrorBody
```

**Async**

```python
try:
    response = await async_client.virtual_accounts.delete_allowed_payer("some example string", "some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteAllowedPayerErrorBody
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

**OnSuccess**: <code>Any</code> -- Allowed payer removed.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[DeleteAllowedPayerErrorBody](curlec/errors/delete_allowed_payer_error.py)&#93;</code>

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
<summary><code>def fetch_bank_transfer(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> BankTransfer</code></summary>

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
try:
    response = client.virtual_accounts.fetch_bank_transfer("some example string")
    # TODO: Handle 'response' of type BankTransfer
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchBankTransferErrorBody
```

**Async**

```python
try:
    response = await async_client.virtual_accounts.fetch_bank_transfer("some example string")
    # TODO: Handle 'response' of type BankTransfer
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchBankTransferErrorBody
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

**OnSuccess**: <code>[BankTransfer](curlec/models/bank_transfer.py)</code> -- Bank transfer details.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchBankTransferErrorBody](curlec/errors/fetch_bank_transfer_error.py)&#93;</code>

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
<summary><code>def fetch_virtual_account(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> VirtualAccount</code></summary>

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
try:
    response = client.virtual_accounts.fetch_virtual_account("some example string")
    # TODO: Handle 'response' of type VirtualAccount
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchVirtualAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.virtual_accounts.fetch_virtual_account("some example string")
    # TODO: Handle 'response' of type VirtualAccount
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchVirtualAccountErrorBody
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

**OnSuccess**: <code>[VirtualAccount](curlec/models/virtual_account.py)</code> -- Virtual Account details.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchVirtualAccountErrorBody](curlec/errors/fetch_virtual_account_error.py)&#93;</code>

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
<summary><code>def fetch_virtual_account_payments(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> VirtualAccountsPaymentsResponse</code></summary>

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
try:
    response = client.virtual_accounts.fetch_virtual_account_payments("some example string")
    # TODO: Handle 'response' of type VirtualAccountsPaymentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchVirtualAccountPaymentsErrorBody
```

**Async**

```python
try:
    response = await async_client.virtual_accounts.fetch_virtual_account_payments("some example string")
    # TODO: Handle 'response' of type VirtualAccountsPaymentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchVirtualAccountPaymentsErrorBody
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

**OnSuccess**: <code>[VirtualAccountsPaymentsResponse](curlec/models/virtual_accounts_payments_response.py)</code> -- List of payments for the virtual account.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchVirtualAccountPaymentsErrorBody](curlec/errors/fetch_virtual_account_payments_error.py)&#93;</code>

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
<summary><code>def list_virtual_accounts(*, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> VirtualAccountsResponse</code></summary>

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
try:
    response = client.virtual_accounts.list_virtual_accounts()
    # TODO: Handle 'response' of type VirtualAccountsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListVirtualAccountsErrorBody
```

**Async**

```python
try:
    response = await async_client.virtual_accounts.list_virtual_accounts()
    # TODO: Handle 'response' of type VirtualAccountsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListVirtualAccountsErrorBody
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

**OnSuccess**: <code>[VirtualAccountsResponse](curlec/models/virtual_accounts_response.py)</code> -- List of Virtual Accounts.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[ListVirtualAccountsErrorBody](curlec/errors/list_virtual_accounts_error.py)&#93;</code>

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
<summary><code>def update_virtual_account(id_: str, body: VirtualAccountsRequest1 | VirtualAccountsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> VirtualAccount</code></summary>

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
try:
    response = client.virtual_accounts.update_virtual_account("some example string", VirtualAccountsRequest1())
    # TODO: Handle 'response' of type VirtualAccount
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateVirtualAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.virtual_accounts.update_virtual_account(
        "some example string", VirtualAccountsRequest1()
    )
    # TODO: Handle 'response' of type VirtualAccount
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateVirtualAccountErrorBody
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

**OnSuccess**: <code>[VirtualAccount](curlec/models/virtual_account.py)</code> -- Virtual Account updated.

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[UpdateVirtualAccountErrorBody](curlec/errors/update_virtual_account_error.py)&#93;</code>

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
<summary><code>def fetch_fund_account_validation(validation_id: str, *, request_options: RequestOptionsOrDict | None = None) -> FundAccountValidation</code></summary>

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
try:
    response = client.x_account_validation.fetch_fund_account_validation("some example string")
    # TODO: Handle 'response' of type FundAccountValidation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchFundAccountValidationErrorBody
```

**Async**

```python
try:
    response = await async_client.x_account_validation.fetch_fund_account_validation("some example string")
    # TODO: Handle 'response' of type FundAccountValidation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchFundAccountValidationErrorBody
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

**OnSuccess**: <code>[FundAccountValidation](curlec/models/fund_account_validation.py)</code> -- Validation details

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchFundAccountValidationErrorBody](curlec/errors/fetch_fund_account_validation_error.py)&#93;</code>

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
<summary><code>def list_fund_account_validations(*, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> FundAccountsValidationsResponse</code></summary>

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
try:
    response = client.x_account_validation.list_fund_account_validations()
    # TODO: Handle 'response' of type FundAccountsValidationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListFundAccountValidationsErrorBody
```

**Async**

```python
try:
    response = await async_client.x_account_validation.list_fund_account_validations()
    # TODO: Handle 'response' of type FundAccountsValidationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListFundAccountValidationsErrorBody
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

**OnSuccess**: <code>[FundAccountsValidationsResponse](curlec/models/fund_accounts_validations_response.py)</code> -- List of validations

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[ListFundAccountValidationsErrorBody](curlec/errors/list_fund_account_validations_error.py)&#93;</code>

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
<summary><code>def validate_fund_account(body: FundAccountsValidationsRequest | FundAccountsValidationsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> FundAccountValidation</code></summary>

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
try:
    response = client.x_account_validation.validate_fund_account(
        FundAccountsValidationsRequest(account_type=AccountType.BANK_ACCOUNT, fund_account={})
    )
    # TODO: Handle 'response' of type FundAccountValidation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ValidateFundAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.x_account_validation.validate_fund_account(
        FundAccountsValidationsRequest(account_type=AccountType.BANK_ACCOUNT, fund_account={})
    )
    # TODO: Handle 'response' of type FundAccountValidation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ValidateFundAccountErrorBody
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

**OnSuccess**: <code>[FundAccountValidation](curlec/models/fund_account_validation.py)</code> -- Validation created

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[ValidateFundAccountErrorBody](curlec/errors/validate_fund_account_error.py)&#93;</code>

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
<summary><code>def fetch_banking_balances(*, account_type: AccountType1OrStr | None = None, bank_code: str | None = None, request_options: RequestOptionsOrDict | None = None) -> BankingBalancesResponse</code></summary>

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
try:
    response = client.x_banking_balances.fetch_banking_balances()
    # TODO: Handle 'response' of type BankingBalancesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchBankingBalancesErrorBody
```

**Async**

```python
try:
    response = await async_client.x_banking_balances.fetch_banking_balances()
    # TODO: Handle 'response' of type BankingBalancesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchBankingBalancesErrorBody
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

**OnSuccess**: <code>[BankingBalancesResponse](curlec/models/banking_balances_response.py)</code> -- Banking balances

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchBankingBalancesErrorBody](curlec/errors/fetch_banking_balances_error.py)&#93;</code>

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
<summary><code>def create_contact(body: ContactsRequest | ContactsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> XContact</code></summary>

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
try:
    response = client.x_contacts.create_contact(ContactsRequest(name="some example string"))
    # TODO: Handle 'response' of type XContact
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateContactErrorBody
```

**Async**

```python
try:
    response = await async_client.x_contacts.create_contact(ContactsRequest(name="some example string"))
    # TODO: Handle 'response' of type XContact
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateContactErrorBody
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

**OnSuccess**: <code>[XContact](curlec/models/x_contact.py)</code> -- Contact created

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[CreateContactErrorBody](curlec/errors/create_contact_error.py)&#93;</code>

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
<summary><code>def fetch_contact(contact_id: str, *, request_options: RequestOptionsOrDict | None = None) -> XContact</code></summary>

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
try:
    response = client.x_contacts.fetch_contact("some example string")
    # TODO: Handle 'response' of type XContact
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchContactErrorBody
```

**Async**

```python
try:
    response = await async_client.x_contacts.fetch_contact("some example string")
    # TODO: Handle 'response' of type XContact
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchContactErrorBody
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

**OnSuccess**: <code>[XContact](curlec/models/x_contact.py)</code> -- Contact details

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchContactErrorBody](curlec/errors/fetch_contact_error.py)&#93;</code>

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
<summary><code>def list_contacts(*, name: str | None = None, email: str | None = None, contact: str | None = None, reference_id: str | None = None, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ContactsResponse</code></summary>

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
try:
    response = client.x_contacts.list_contacts()
    # TODO: Handle 'response' of type ContactsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListContactsErrorBody
```

**Async**

```python
try:
    response = await async_client.x_contacts.list_contacts()
    # TODO: Handle 'response' of type ContactsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListContactsErrorBody
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

**OnSuccess**: <code>[ContactsResponse](curlec/models/contacts_response.py)</code> -- List of contacts

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[ListContactsErrorBody](curlec/errors/list_contacts_error.py)&#93;</code>

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
<summary><code>def update_contact(contact_id: str, body: ContactsRequest1 | ContactsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> XContact</code></summary>

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
try:
    response = client.x_contacts.update_contact("some example string", ContactsRequest1())
    # TODO: Handle 'response' of type XContact
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateContactErrorBody
```

**Async**

```python
try:
    response = await async_client.x_contacts.update_contact("some example string", ContactsRequest1())
    # TODO: Handle 'response' of type XContact
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateContactErrorBody
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

**OnSuccess**: <code>[XContact](curlec/models/x_contact.py)</code> -- Updated contact

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[UpdateContactErrorBody](curlec/errors/update_contact_error.py)&#93;</code>

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
<summary><code>def activate_deactivate_fund_account(fund_account_id: str, body: FundAccountsRequest1 | FundAccountsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> FundAccountRazorpayXFundAccountsApi</code></summary>

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
try:
    response = client.x_fund_accounts.activate_deactivate_fund_account(
        "some example string", FundAccountsRequest1(active=True)
    )
    # TODO: Handle 'response' of type FundAccountRazorpayXFundAccountsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ActivateDeactivateFundAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.x_fund_accounts.activate_deactivate_fund_account(
        "some example string", FundAccountsRequest1(active=True)
    )
    # TODO: Handle 'response' of type FundAccountRazorpayXFundAccountsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ActivateDeactivateFundAccountErrorBody
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

**OnSuccess**: <code>[FundAccountRazorpayXFundAccountsApi](curlec/models/fund_account_razorpay_x_fund_accounts_api.py)</code> -- Updated fund account

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[ActivateDeactivateFundAccountErrorBody](curlec/errors/activate_deactivate_fund_account_error.py)&#93;</code>

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
<summary><code>def create_fund_account(body: FundAccountsRequest | FundAccountsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> FundAccountRazorpayXFundAccountsApi</code></summary>

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
try:
    response = client.x_fund_accounts.create_fund_account(
        FundAccountsRequest(
            contact_id="some example string", account_type=AccountTypeRazorpayXFundAccountsApi.BANK_ACCOUNT
        ),
    )
    # TODO: Handle 'response' of type FundAccountRazorpayXFundAccountsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateFundAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.x_fund_accounts.create_fund_account(
        FundAccountsRequest(
            contact_id="some example string", account_type=AccountTypeRazorpayXFundAccountsApi.BANK_ACCOUNT
        ),
    )
    # TODO: Handle 'response' of type FundAccountRazorpayXFundAccountsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateFundAccountErrorBody
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

**OnSuccess**: <code>[FundAccountRazorpayXFundAccountsApi](curlec/models/fund_account_razorpay_x_fund_accounts_api.py)</code> -- Fund account created

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[CreateFundAccountErrorBody](curlec/errors/create_fund_account_error.py)&#93;</code>

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
<summary><code>def fetch_fund_account(fund_account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> FundAccountRazorpayXFundAccountsApi</code></summary>

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
try:
    response = client.x_fund_accounts.fetch_fund_account("some example string")
    # TODO: Handle 'response' of type FundAccountRazorpayXFundAccountsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchFundAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.x_fund_accounts.fetch_fund_account("some example string")
    # TODO: Handle 'response' of type FundAccountRazorpayXFundAccountsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchFundAccountErrorBody
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

**OnSuccess**: <code>[FundAccountRazorpayXFundAccountsApi](curlec/models/fund_account_razorpay_x_fund_accounts_api.py)</code> -- Fund account details

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchFundAccountErrorBody](curlec/errors/fetch_fund_account_error.py)&#93;</code>

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
<summary><code>def list_fund_accounts(*, contact_id: str | None = None, account_type: str | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> FundAccountsResponse</code></summary>

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
try:
    response = client.x_fund_accounts.list_fund_accounts()
    # TODO: Handle 'response' of type FundAccountsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListFundAccountsErrorBody
```

**Async**

```python
try:
    response = await async_client.x_fund_accounts.list_fund_accounts()
    # TODO: Handle 'response' of type FundAccountsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListFundAccountsErrorBody
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

**OnSuccess**: <code>[FundAccountsResponse](curlec/models/fund_accounts_response.py)</code> -- List of fund accounts

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[ListFundAccountsErrorBody](curlec/errors/list_fund_accounts_error.py)&#93;</code>

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
<summary><code>def cancel_payout_link(payout_link_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PayoutLink</code></summary>

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
try:
    response = client.x_payout_links.cancel_payout_link("some example string")
    # TODO: Handle 'response' of type PayoutLink
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelPayoutLinkErrorBody
```

**Async**

```python
try:
    response = await async_client.x_payout_links.cancel_payout_link("some example string")
    # TODO: Handle 'response' of type PayoutLink
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelPayoutLinkErrorBody
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

**OnSuccess**: <code>[PayoutLink](curlec/models/payout_link.py)</code> -- Payout link cancelled

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[CancelPayoutLinkErrorBody](curlec/errors/cancel_payout_link_error.py)&#93;</code>

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
<summary><code>def create_payout_link(body: PayoutLinksRequest | PayoutLinksRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> PayoutLink</code></summary>

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
try:
    response = client.x_payout_links.create_payout_link(
        PayoutLinksRequest(contact_id="some example string", amount=1, purpose="some example string")
    )
    # TODO: Handle 'response' of type PayoutLink
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePayoutLinkErrorBody
```

**Async**

```python
try:
    response = await async_client.x_payout_links.create_payout_link(
        PayoutLinksRequest(contact_id="some example string", amount=1, purpose="some example string")
    )
    # TODO: Handle 'response' of type PayoutLink
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePayoutLinkErrorBody
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

**OnSuccess**: <code>[PayoutLink](curlec/models/payout_link.py)</code> -- Payout link created

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[CreatePayoutLinkErrorBody](curlec/errors/create_payout_link_error.py)&#93;</code>

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
<summary><code>def fetch_payout_link(payout_link_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PayoutLink</code></summary>

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
try:
    response = client.x_payout_links.fetch_payout_link("some example string")
    # TODO: Handle 'response' of type PayoutLink
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchPayoutLinkErrorBody
```

**Async**

```python
try:
    response = await async_client.x_payout_links.fetch_payout_link("some example string")
    # TODO: Handle 'response' of type PayoutLink
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchPayoutLinkErrorBody
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

**OnSuccess**: <code>[PayoutLink](curlec/models/payout_link.py)</code> -- Payout link details

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchPayoutLinkErrorBody](curlec/errors/fetch_payout_link_error.py)&#93;</code>

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
<summary><code>def list_payout_links(*, contact_id: str | None = None, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> PayoutLinksResponse</code></summary>

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
try:
    response = client.x_payout_links.list_payout_links()
    # TODO: Handle 'response' of type PayoutLinksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPayoutLinksErrorBody
```

**Async**

```python
try:
    response = await async_client.x_payout_links.list_payout_links()
    # TODO: Handle 'response' of type PayoutLinksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPayoutLinksErrorBody
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

**OnSuccess**: <code>[PayoutLinksResponse](curlec/models/payout_links_response.py)</code> -- List of payout links

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[ListPayoutLinksErrorBody](curlec/errors/list_payout_links_error.py)&#93;</code>

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
<summary><code>def approve_payout(payout_id: str, *, body: PayoutsApproveRequest | PayoutsApproveRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Payout</code></summary>

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
try:
    response = client.x_payouts.approve_payout("some example string")
    # TODO: Handle 'response' of type Payout
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ApprovePayoutErrorBody
```

**Async**

```python
try:
    response = await async_client.x_payouts.approve_payout("some example string")
    # TODO: Handle 'response' of type Payout
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ApprovePayoutErrorBody
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

**OnSuccess**: <code>[Payout](curlec/models/payout.py)</code> -- Payout approved

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[ApprovePayoutErrorBody](curlec/errors/approve_payout_error.py)&#93;</code>

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
<summary><code>def cancel_payout(payout_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Payout</code></summary>

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
try:
    response = client.x_payouts.cancel_payout("some example string")
    # TODO: Handle 'response' of type Payout
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelPayoutErrorBody
```

**Async**

```python
try:
    response = await async_client.x_payouts.cancel_payout("some example string")
    # TODO: Handle 'response' of type Payout
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelPayoutErrorBody
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

**OnSuccess**: <code>[Payout](curlec/models/payout.py)</code> -- Payout cancelled

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[CancelPayoutErrorBody](curlec/errors/cancel_payout_error.py)&#93;</code>

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
<summary><code>def create_payout(x_payout_idempotency: str, body: PayoutsRequest | PayoutsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Payout</code></summary>

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
try:
    response = client.x_payouts.create_payout(
        "some example string",
        PayoutsRequest(account_number="some example string", amount=1, mode=Mode1.NEFT, purpose=Purpose.REFUND),
    )
    # TODO: Handle 'response' of type Payout
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePayoutErrorBody
```

**Async**

```python
try:
    response = await async_client.x_payouts.create_payout(
        "some example string",
        PayoutsRequest(account_number="some example string", amount=1, mode=Mode1.NEFT, purpose=Purpose.REFUND),
    )
    # TODO: Handle 'response' of type Payout
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePayoutErrorBody
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

**OnSuccess**: <code>[Payout](curlec/models/payout.py)</code> -- Payout created

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[CreatePayoutErrorBody](curlec/errors/create_payout_error.py)&#93;</code>

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
<summary><code>def fetch_payout(payout_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Payout</code></summary>

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
try:
    response = client.x_payouts.fetch_payout("some example string")
    # TODO: Handle 'response' of type Payout
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchPayoutErrorBody
```

**Async**

```python
try:
    response = await async_client.x_payouts.fetch_payout("some example string")
    # TODO: Handle 'response' of type Payout
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchPayoutErrorBody
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

**OnSuccess**: <code>[Payout](curlec/models/payout.py)</code> -- Payout details

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchPayoutErrorBody](curlec/errors/fetch_payout_error.py)&#93;</code>

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
<summary><code>def list_payouts(account_number: str, *, contact_id: str | None = None, fund_account_id: str | None = None, from_: int | None = None, to: int | None = None, count: int | None = 25, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> PayoutsResponse</code></summary>

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
try:
    response = client.x_payouts.list_payouts("some example string")
    # TODO: Handle 'response' of type PayoutsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPayoutsErrorBody
```

**Async**

```python
try:
    response = await async_client.x_payouts.list_payouts("some example string")
    # TODO: Handle 'response' of type PayoutsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPayoutsErrorBody
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

**OnSuccess**: <code>[PayoutsResponse](curlec/models/payouts_response.py)</code> -- List of payouts

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[ListPayoutsErrorBody](curlec/errors/list_payouts_error.py)&#93;</code>

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
<summary><code>def reject_payout(payout_id: str, *, body: PayoutsRejectRequest | PayoutsRejectRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Payout</code></summary>

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
try:
    response = client.x_payouts.reject_payout("some example string")
    # TODO: Handle 'response' of type Payout
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RejectPayoutErrorBody
```

**Async**

```python
try:
    response = await async_client.x_payouts.reject_payout("some example string")
    # TODO: Handle 'response' of type Payout
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RejectPayoutErrorBody
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

**OnSuccess**: <code>[Payout](curlec/models/payout.py)</code> -- Payout rejected

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[RejectPayoutErrorBody](curlec/errors/reject_payout_error.py)&#93;</code>

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
<summary><code>def fetch_transaction(transaction_id: str, *, request_options: RequestOptionsOrDict | None = None) -> XTransaction</code></summary>

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
try:
    response = client.x_transactions.fetch_transaction("some example string")
    # TODO: Handle 'response' of type XTransaction
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchTransactionErrorBody
```

**Async**

```python
try:
    response = await async_client.x_transactions.fetch_transaction("some example string")
    # TODO: Handle 'response' of type XTransaction
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FetchTransactionErrorBody
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

**OnSuccess**: <code>[XTransaction](curlec/models/x_transaction.py)</code> -- Transaction details

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[FetchTransactionErrorBody](curlec/errors/fetch_transaction_error.py)&#93;</code>

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
<summary><code>def list_transactions(account_number: str, *, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> TransactionsResponse</code></summary>

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
try:
    response = client.x_transactions.list_transactions("some example string")
    # TODO: Handle 'response' of type TransactionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTransactionsErrorBody
```

**Async**

```python
try:
    response = await async_client.x_transactions.list_transactions("some example string")
    # TODO: Handle 'response' of type TransactionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTransactionsErrorBody
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

**OnSuccess**: <code>[TransactionsResponse](curlec/models/transactions_response.py)</code> -- List of transactions

**OnError**: <code>[ApiError](curlec/core/exceptions.py)&#91;[ListTransactionsErrorBody](curlec/errors/list_transactions_error.py)&#93;</code>

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

