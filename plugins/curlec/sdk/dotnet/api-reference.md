# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [CurlecClient](src/Curlec/CurlecClient.cs)

## Bills

> Source: [Bills](src/Curlec/Api/Bills.cs)

<details>
<summary><code>Task&lt;Bill&gt; CreateBill(CreateBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Bills.CreateBill(new CreateBillRequest
    {
        Body = new BillsRequest
        {
            BusinessType = BusinessType.Ecommerce,
            Customer = new Customer1 { Contact = "some example string" },
        },
    });
    // TODO: Handle 'response' of type Bill
}
catch (ApiException<CreateBillError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateBillRequest](src/Curlec/Requests/Bills/CreateBillRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Bill](src/Curlec/Models/Bill.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[CreateBillError](src/Curlec/Errors/CreateBillError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeleteBill(DeleteBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Bills.DeleteBill(new DeleteBillRequest { BillId = "some example string" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteBillError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteBillRequest](src/Curlec/Requests/Bills/DeleteBillRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[DeleteBillError](src/Curlec/Errors/DeleteBillError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Bill&gt; UpdateBill(UpdateBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Bills.UpdateBill(new UpdateBillRequest
    {
        BillId = "some example string",
        Body = new Bill(),
    });
    // TODO: Handle 'response' of type Bill
}
catch (ApiException<UpdateBillError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateBillRequest](src/Curlec/Requests/Bills/UpdateBillRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Bill](src/Curlec/Models/Bill.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[UpdateBillError](src/Curlec/Errors/UpdateBillError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Customers

> Source: [Customers](src/Curlec/Api/Customers.cs)

<details>
<summary><code>Task&lt;CustomerRazorpayCustomersApi&gt; CreateCustomer(CreateCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Customers.CreateCustomer(new CreateCustomerRequest
    {
        Body = new CustomersRequest { Name = "Aisha Sharma", Contact = "+919876543210", Email = "aisha@example.com" },
    });
    // TODO: Handle 'response' of type CustomerRazorpayCustomersApi
}
catch (ApiException<CreateCustomerError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateCustomerRequest](src/Curlec/Requests/Customers/CreateCustomerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerRazorpayCustomersApi](src/Curlec/Models/CustomerRazorpayCustomersApi.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[CreateCustomerError](src/Curlec/Errors/CreateCustomerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomersResponse&gt; FetchAllCustomers(FetchAllCustomersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Customers.FetchAllCustomers(new FetchAllCustomersRequest());
    // TODO: Handle 'response' of type CustomersResponse
}
catch (ApiException<FetchAllCustomersError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchAllCustomersRequest](src/Curlec/Requests/Customers/FetchAllCustomersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomersResponse](src/Curlec/Models/CustomersResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchAllCustomersError](src/Curlec/Errors/FetchAllCustomersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomerRazorpayCustomersApi&gt; FetchCustomer(FetchCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Customers.FetchCustomer(new FetchCustomerRequest { Id = "some example string" });
    // TODO: Handle 'response' of type CustomerRazorpayCustomersApi
}
catch (ApiException<FetchCustomerError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchCustomerRequest](src/Curlec/Requests/Customers/FetchCustomerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerRazorpayCustomersApi](src/Curlec/Models/CustomerRazorpayCustomersApi.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchCustomerError](src/Curlec/Errors/FetchCustomerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomerRazorpayCustomersApi&gt; UpdateCustomer(UpdateCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Customers.UpdateCustomer(new UpdateCustomerRequest
    {
        Id = "some example string",
        Body = new CustomersRequest1(),
    });
    // TODO: Handle 'response' of type CustomerRazorpayCustomersApi
}
catch (ApiException<UpdateCustomerError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateCustomerRequest](src/Curlec/Requests/Customers/UpdateCustomerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerRazorpayCustomersApi](src/Curlec/Models/CustomerRazorpayCustomersApi.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[UpdateCustomerError](src/Curlec/Errors/UpdateCustomerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Disputes

> Source: [Disputes](src/Curlec/Api/Disputes.cs)

<details>
<summary><code>Task&lt;Dispute&gt; AcceptDispute(AcceptDisputeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Disputes.AcceptDispute(new AcceptDisputeRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Dispute
}
catch (ApiException<AcceptDisputeError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AcceptDisputeRequest](src/Curlec/Requests/Disputes/AcceptDisputeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Dispute](src/Curlec/Models/Dispute.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[AcceptDisputeError](src/Curlec/Errors/AcceptDisputeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Dispute&gt; ContestDispute(ContestDisputeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Disputes.ContestDispute(new ContestDisputeRequest
    {
        Id = "some example string",
        Body = new DisputesContestRequest(),
    });
    // TODO: Handle 'response' of type Dispute
}
catch (ApiException<ContestDisputeError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ContestDisputeRequest](src/Curlec/Requests/Disputes/ContestDisputeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Dispute](src/Curlec/Models/Dispute.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[ContestDisputeError](src/Curlec/Errors/ContestDisputeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DisputesResponse&gt; FetchAllDisputes(FetchAllDisputesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Disputes.FetchAllDisputes(new FetchAllDisputesRequest());
    // TODO: Handle 'response' of type DisputesResponse
}
catch (ApiException<FetchAllDisputesError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchAllDisputesRequest](src/Curlec/Requests/Disputes/FetchAllDisputesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DisputesResponse](src/Curlec/Models/DisputesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchAllDisputesError](src/Curlec/Errors/FetchAllDisputesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Dispute&gt; FetchDispute(FetchDisputeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Disputes.FetchDispute(new FetchDisputeRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Dispute
}
catch (ApiException<FetchDisputeError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchDisputeRequest](src/Curlec/Requests/Disputes/FetchDisputeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Dispute](src/Curlec/Models/Dispute.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchDisputeError](src/Curlec/Errors/FetchDisputeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Documents

> Source: [Documents](src/Curlec/Api/Documents.cs)

<details>
<summary><code>Task&lt;Document&gt; FetchDocument(FetchDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Documents.FetchDocument(new FetchDocumentRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Document
}
catch (ApiException<FetchDocumentError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchDocumentRequest](src/Curlec/Requests/Documents/FetchDocumentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Document](src/Curlec/Models/Document.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchDocumentError](src/Curlec/Errors/FetchDocumentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; FetchDocumentContent(FetchDocumentContentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Documents.FetchDocumentContent(new FetchDocumentContentRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<FetchDocumentContentError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchDocumentContentRequest](src/Curlec/Requests/Documents/FetchDocumentContentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchDocumentContentError](src/Curlec/Errors/FetchDocumentContentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Document&gt; UploadDocument(UploadDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Documents.UploadDocument(new UploadDocumentRequest
    {
        File = Array.Empty<byte>(),
        Purpose = "some example string",
    });
    // TODO: Handle 'response' of type Document
}
catch (ApiException<UploadDocumentError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UploadDocumentRequest](src/Curlec/Requests/Documents/UploadDocumentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Document](src/Curlec/Models/Document.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[UploadDocumentError](src/Curlec/Errors/UploadDocumentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## InstantSettlements

> Source: [InstantSettlements](src/Curlec/Api/InstantSettlements.cs)

<details>
<summary><code>Task&lt;InstantSettlement&gt; CreateInstantSettlement(CreateInstantSettlementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.InstantSettlements.CreateInstantSettlement(new CreateInstantSettlementRequest
    {
        Body = new SettlementsOndemandRequest { Amount = 1 },
    });
    // TODO: Handle 'response' of type InstantSettlement
}
catch (ApiException<CreateInstantSettlementError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateInstantSettlementRequest](src/Curlec/Requests/InstantSettlements/CreateInstantSettlementRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InstantSettlement](src/Curlec/Models/InstantSettlement.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[CreateInstantSettlementError](src/Curlec/Errors/CreateInstantSettlementError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SettlementsOndemandResponse&gt; FetchAllInstantSettlements(FetchAllInstantSettlementsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.InstantSettlements.FetchAllInstantSettlements(new FetchAllInstantSettlementsRequest());
    // TODO: Handle 'response' of type SettlementsOndemandResponse
}
catch (ApiException<FetchAllInstantSettlementsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchAllInstantSettlementsRequest](src/Curlec/Requests/InstantSettlements/FetchAllInstantSettlementsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SettlementsOndemandResponse](src/Curlec/Models/SettlementsOndemandResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchAllInstantSettlementsError](src/Curlec/Errors/FetchAllInstantSettlementsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;InstantSettlement&gt; FetchInstantSettlement(FetchInstantSettlementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.InstantSettlements.FetchInstantSettlement(new FetchInstantSettlementRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type InstantSettlement
}
catch (ApiException<FetchInstantSettlementError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchInstantSettlementRequest](src/Curlec/Requests/InstantSettlements/FetchInstantSettlementRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InstantSettlement](src/Curlec/Models/InstantSettlement.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchInstantSettlementError](src/Curlec/Errors/FetchInstantSettlementError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Invoices

> Source: [Invoices](src/Curlec/Api/Invoices.cs)

<details>
<summary><code>Task&lt;Invoice&gt; CancelInvoice(CancelInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Invoices.CancelInvoice(new CancelInvoiceRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Invoice
}
catch (ApiException<CancelInvoiceError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CancelInvoiceRequest](src/Curlec/Requests/Invoices/CancelInvoiceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Invoice](src/Curlec/Models/Invoice.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[CancelInvoiceError](src/Curlec/Errors/CancelInvoiceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Invoice&gt; CreateInvoice(CreateInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Invoices.CreateInvoice(new CreateInvoiceRequest
    {
        Body = new InvoicesRequest { Type = Type2.Invoice },
    });
    // TODO: Handle 'response' of type Invoice
}
catch (ApiException<CreateInvoiceError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateInvoiceRequest](src/Curlec/Requests/Invoices/CreateInvoiceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Invoice](src/Curlec/Models/Invoice.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[CreateInvoiceError](src/Curlec/Errors/CreateInvoiceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeleteInvoice(DeleteInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Invoices.DeleteInvoice(new DeleteInvoiceRequest { Id = "some example string" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteInvoiceError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteInvoiceRequest](src/Curlec/Requests/Invoices/DeleteInvoiceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[DeleteInvoiceError](src/Curlec/Errors/DeleteInvoiceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Invoice&gt; FetchInvoice(FetchInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Invoices.FetchInvoice(new FetchInvoiceRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Invoice
}
catch (ApiException<FetchInvoiceError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchInvoiceRequest](src/Curlec/Requests/Invoices/FetchInvoiceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Invoice](src/Curlec/Models/Invoice.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchInvoiceError](src/Curlec/Errors/FetchInvoiceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Invoice&gt; IssueInvoice(IssueInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Invoices.IssueInvoice(new IssueInvoiceRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Invoice
}
catch (ApiException<IssueInvoiceError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[IssueInvoiceRequest](src/Curlec/Requests/Invoices/IssueInvoiceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Invoice](src/Curlec/Models/Invoice.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[IssueInvoiceError](src/Curlec/Errors/IssueInvoiceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;InvoicesResponse&gt; ListInvoices(ListInvoicesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Invoices.ListInvoices(new ListInvoicesRequest());
    // TODO: Handle 'response' of type InvoicesResponse
}
catch (ApiException<ListInvoicesError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListInvoicesRequest](src/Curlec/Requests/Invoices/ListInvoicesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InvoicesResponse](src/Curlec/Models/InvoicesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[ListInvoicesError](src/Curlec/Errors/ListInvoicesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;InvoicesNotifyByResponse&gt; SendInvoiceNotification(SendInvoiceNotificationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Invoices.SendInvoiceNotification(new SendInvoiceNotificationRequest
    {
        Id = "some example string",
        Medium = Medium.Sms,
    });
    // TODO: Handle 'response' of type InvoicesNotifyByResponse
}
catch (ApiException<SendInvoiceNotificationError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SendInvoiceNotificationRequest](src/Curlec/Requests/Invoices/SendInvoiceNotificationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InvoicesNotifyByResponse](src/Curlec/Models/InvoicesNotifyByResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[SendInvoiceNotificationError](src/Curlec/Errors/SendInvoiceNotificationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Invoice&gt; UpdateInvoice(UpdateInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Invoices.UpdateInvoice(new UpdateInvoiceRequest
    {
        Id = "some example string",
        Body = new InvoicesRequest1(),
    });
    // TODO: Handle 'response' of type Invoice
}
catch (ApiException<UpdateInvoiceError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateInvoiceRequest](src/Curlec/Requests/Invoices/UpdateInvoiceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Invoice](src/Curlec/Models/Invoice.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[UpdateInvoiceError](src/Curlec/Errors/UpdateInvoiceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Items

> Source: [Items](src/Curlec/Api/Items.cs)

<details>
<summary><code>Task&lt;Item&gt; CreateItem(CreateItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Items.CreateItem(new CreateItemRequest
    {
        Body = new ItemsRequest { Name = "some example string", Amount = 1, Currency = "some example string" },
    });
    // TODO: Handle 'response' of type Item
}
catch (ApiException<CreateItemError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateItemRequest](src/Curlec/Requests/Items/CreateItemRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Item](src/Curlec/Models/Item.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[CreateItemError](src/Curlec/Errors/CreateItemError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeleteItem(DeleteItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Items.DeleteItem(new DeleteItemRequest { Id = "some example string" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteItemError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteItemRequest](src/Curlec/Requests/Items/DeleteItemRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[DeleteItemError](src/Curlec/Errors/DeleteItemError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Item&gt; FetchItem(FetchItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Items.FetchItem(new FetchItemRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Item
}
catch (ApiException<FetchItemError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchItemRequest](src/Curlec/Requests/Items/FetchItemRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Item](src/Curlec/Models/Item.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchItemError](src/Curlec/Errors/FetchItemError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ItemsResponse&gt; ListItems(ListItemsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Items.ListItems(new ListItemsRequest());
    // TODO: Handle 'response' of type ItemsResponse
}
catch (ApiException<ListItemsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListItemsRequest](src/Curlec/Requests/Items/ListItemsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ItemsResponse](src/Curlec/Models/ItemsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[ListItemsError](src/Curlec/Errors/ListItemsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Item&gt; UpdateItem(UpdateItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Items.UpdateItem(new UpdateItemRequest
    {
        Id = "some example string",
        Body = new ItemsRequest1(),
    });
    // TODO: Handle 'response' of type Item
}
catch (ApiException<UpdateItemError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateItemRequest](src/Curlec/Requests/Items/UpdateItemRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Item](src/Curlec/Models/Item.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[UpdateItemError](src/Curlec/Errors/UpdateItemError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## LinkedAccounts

> Source: [LinkedAccounts](src/Curlec/Api/LinkedAccounts.cs)

<details>
<summary><code>Task&lt;LinkedAccount&gt; CreateLinkedAccount(CreateLinkedAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.LinkedAccounts.CreateLinkedAccount(new CreateLinkedAccountRequest
    {
        Body = new V2AccountsRequest { Email = "some example string", Profile = new Profile1() },
    });
    // TODO: Handle 'response' of type LinkedAccount
}
catch (ApiException<CreateLinkedAccountError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateLinkedAccountRequest](src/Curlec/Requests/LinkedAccounts/CreateLinkedAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LinkedAccount](src/Curlec/Models/LinkedAccount.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[CreateLinkedAccountError](src/Curlec/Errors/CreateLinkedAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Stakeholder&gt; CreateStakeholder(CreateStakeholderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.LinkedAccounts.CreateStakeholder(new CreateStakeholderRequest
    {
        AccountId = "some example string",
        Body = new V2AccountsStakeholdersRequest { Name = "some example string", Email = "some example string" },
    });
    // TODO: Handle 'response' of type Stakeholder
}
catch (ApiException<CreateStakeholderError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateStakeholderRequest](src/Curlec/Requests/LinkedAccounts/CreateStakeholderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Stakeholder](src/Curlec/Models/Stakeholder.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[CreateStakeholderError](src/Curlec/Errors/CreateStakeholderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;LinkedAccount&gt; FetchLinkedAccount(FetchLinkedAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.LinkedAccounts.FetchLinkedAccount(new FetchLinkedAccountRequest
    {
        AccountId = "some example string",
    });
    // TODO: Handle 'response' of type LinkedAccount
}
catch (ApiException<FetchLinkedAccountError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchLinkedAccountRequest](src/Curlec/Requests/LinkedAccounts/FetchLinkedAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LinkedAccount](src/Curlec/Models/LinkedAccount.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchLinkedAccountError](src/Curlec/Errors/FetchLinkedAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProductConfiguration&gt; FetchProductConfig(FetchProductConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.LinkedAccounts.FetchProductConfig(new FetchProductConfigRequest
    {
        AccountId = "some example string",
        ProductId = "some example string",
    });
    // TODO: Handle 'response' of type ProductConfiguration
}
catch (ApiException<FetchProductConfigError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchProductConfigRequest](src/Curlec/Requests/LinkedAccounts/FetchProductConfigRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProductConfiguration](src/Curlec/Models/ProductConfiguration.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchProductConfigError](src/Curlec/Errors/FetchProductConfigError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProductConfiguration&gt; RequestProductConfig(RequestProductConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.LinkedAccounts.RequestProductConfig(new RequestProductConfigRequest
    {
        AccountId = "some example string",
        Body = new V2AccountsProductsRequest(),
    });
    // TODO: Handle 'response' of type ProductConfiguration
}
catch (ApiException<RequestProductConfigError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RequestProductConfigRequest](src/Curlec/Requests/LinkedAccounts/RequestProductConfigRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProductConfiguration](src/Curlec/Models/ProductConfiguration.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[RequestProductConfigError](src/Curlec/Errors/RequestProductConfigError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;LinkedAccount&gt; UpdateLinkedAccount(UpdateLinkedAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.LinkedAccounts.UpdateLinkedAccount(new UpdateLinkedAccountRequest
    {
        AccountId = "some example string",
        Body = new V2AccountsRequest1(),
    });
    // TODO: Handle 'response' of type LinkedAccount
}
catch (ApiException<UpdateLinkedAccountError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateLinkedAccountRequest](src/Curlec/Requests/LinkedAccounts/UpdateLinkedAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LinkedAccount](src/Curlec/Models/LinkedAccount.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[UpdateLinkedAccountError](src/Curlec/Errors/UpdateLinkedAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProductConfiguration&gt; UpdateProductConfig(UpdateProductConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.LinkedAccounts.UpdateProductConfig(new UpdateProductConfigRequest
    {
        AccountId = "some example string",
        ProductId = "some example string",
        Body = new V2AccountsProductsRequest1(),
    });
    // TODO: Handle 'response' of type ProductConfiguration
}
catch (ApiException<UpdateProductConfigError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateProductConfigRequest](src/Curlec/Requests/LinkedAccounts/UpdateProductConfigRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProductConfiguration](src/Curlec/Models/ProductConfiguration.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[UpdateProductConfigError](src/Curlec/Errors/UpdateProductConfigError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Stakeholder&gt; UpdateStakeholder(UpdateStakeholderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.LinkedAccounts.UpdateStakeholder(new UpdateStakeholderRequest
    {
        AccountId = "some example string",
        StakeholderId = "some example string",
        Body = new V2AccountsStakeholdersRequest1(),
    });
    // TODO: Handle 'response' of type Stakeholder
}
catch (ApiException<UpdateStakeholderError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateStakeholderRequest](src/Curlec/Requests/LinkedAccounts/UpdateStakeholderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Stakeholder](src/Curlec/Models/Stakeholder.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[UpdateStakeholderError](src/Curlec/Errors/UpdateStakeholderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Orders

> Source: [Orders](src/Curlec/Api/Orders.cs)

<details>
<summary><code>Task&lt;Order&gt; CreateOrder(CreateOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Orders.CreateOrder(new CreateOrderRequest
    {
        Body = new OrdersRequest { Amount = 50000, Currency = "INR", Receipt = "receipt_001" },
    });
    // TODO: Handle 'response' of type Order
}
catch (ApiException<CreateOrderError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateOrderRequest](src/Curlec/Requests/Orders/CreateOrderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Order](src/Curlec/Models/Order.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[CreateOrderError](src/Curlec/Errors/CreateOrderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OrdersResponse&gt; FetchAllOrders(FetchAllOrdersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Orders.FetchAllOrders(new FetchAllOrdersRequest());
    // TODO: Handle 'response' of type OrdersResponse
}
catch (ApiException<FetchAllOrdersError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchAllOrdersRequest](src/Curlec/Requests/Orders/FetchAllOrdersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrdersResponse](src/Curlec/Models/OrdersResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchAllOrdersError](src/Curlec/Errors/FetchAllOrdersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Order&gt; FetchOrder(FetchOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Orders.FetchOrder(new FetchOrderRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Order
}
catch (ApiException<FetchOrderError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchOrderRequest](src/Curlec/Requests/Orders/FetchOrderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Order](src/Curlec/Models/Order.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchOrderError](src/Curlec/Errors/FetchOrderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OrdersPaymentsResponse&gt; FetchOrderPayments(FetchOrderPaymentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Orders.FetchOrderPayments(new FetchOrderPaymentsRequest { Id = "some example string" });
    // TODO: Handle 'response' of type OrdersPaymentsResponse
}
catch (ApiException<FetchOrderPaymentsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchOrderPaymentsRequest](src/Curlec/Requests/Orders/FetchOrderPaymentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrdersPaymentsResponse](src/Curlec/Models/OrdersPaymentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchOrderPaymentsError](src/Curlec/Errors/FetchOrderPaymentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Order&gt; UpdateOrder(UpdateOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Orders.UpdateOrder(new UpdateOrderRequest
    {
        Id = "some example string",
        Body = new OrdersRequest1 { Notes = new Dictionary<string, string> { ["key"] = "some example string" } },
    });
    // TODO: Handle 'response' of type Order
}
catch (ApiException<UpdateOrderError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateOrderRequest](src/Curlec/Requests/Orders/UpdateOrderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Order](src/Curlec/Models/Order.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[UpdateOrderError](src/Curlec/Errors/UpdateOrderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PartnerAccounts

> Source: [PartnerAccounts](src/Curlec/Api/PartnerAccounts.cs)

<details>
<summary><code>Task&lt;V2AccountsResponse&gt; DeletePartnerAccount(DeletePartnerAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.PartnerAccounts.DeletePartnerAccount(new DeletePartnerAccountRequest
    {
        AccountId = "some example string",
    });
    // TODO: Handle 'response' of type V2AccountsResponse
}
catch (ApiException<DeletePartnerAccountError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeletePartnerAccountRequest](src/Curlec/Requests/PartnerAccounts/DeletePartnerAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V2AccountsResponse](src/Curlec/Models/V2AccountsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[DeletePartnerAccountError](src/Curlec/Errors/DeletePartnerAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;LinkedAccount&gt; FetchLinkedAccount2(FetchLinkedAccount2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.PartnerAccounts.FetchLinkedAccount2(new FetchLinkedAccount2Request
    {
        AccountId = "some example string",
    });
    // TODO: Handle 'response' of type LinkedAccount
}
catch (ApiException<FetchLinkedAccount2Error> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchLinkedAccount2Request](src/Curlec/Requests/PartnerAccounts/FetchLinkedAccount2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LinkedAccount](src/Curlec/Models/LinkedAccount.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchLinkedAccount2Error](src/Curlec/Errors/FetchLinkedAccount2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;LinkedAccount&gt; UpdateLinkedAccount2(UpdateLinkedAccount2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.PartnerAccounts.UpdateLinkedAccount2(new UpdateLinkedAccount2Request
    {
        AccountId = "some example string",
        Body = new V2AccountsRequestRazorpayPartnerAccountsApi(),
    });
    // TODO: Handle 'response' of type LinkedAccount
}
catch (ApiException<UpdateLinkedAccount2Error> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateLinkedAccount2Request](src/Curlec/Requests/PartnerAccounts/UpdateLinkedAccount2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LinkedAccount](src/Curlec/Models/LinkedAccount.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[UpdateLinkedAccount2Error](src/Curlec/Errors/UpdateLinkedAccount2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PartnerDocuments

> Source: [PartnerDocuments](src/Curlec/Api/PartnerDocuments.cs)

<details>
<summary><code>Task&lt;AccountDocument&gt; FetchAccountDocuments(FetchAccountDocumentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.PartnerDocuments.FetchAccountDocuments(new FetchAccountDocumentsRequest
    {
        AccountId = "some example string",
    });
    // TODO: Handle 'response' of type AccountDocument
}
catch (ApiException<FetchAccountDocumentsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchAccountDocumentsRequest](src/Curlec/Requests/PartnerDocuments/FetchAccountDocumentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccountDocument](src/Curlec/Models/AccountDocument.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchAccountDocumentsError](src/Curlec/Errors/FetchAccountDocumentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StakeholderDocument&gt; FetchStakeholderDocuments(FetchStakeholderDocumentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.PartnerDocuments.FetchStakeholderDocuments(new FetchStakeholderDocumentsRequest
    {
        AccountId = "some example string",
        StakeholderId = "some example string",
    });
    // TODO: Handle 'response' of type StakeholderDocument
}
catch (ApiException<FetchStakeholderDocumentsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchStakeholderDocumentsRequest](src/Curlec/Requests/PartnerDocuments/FetchStakeholderDocumentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StakeholderDocument](src/Curlec/Models/StakeholderDocument.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchStakeholderDocumentsError](src/Curlec/Errors/FetchStakeholderDocumentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AccountDocument&gt; UploadAccountDocuments(UploadAccountDocumentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.PartnerDocuments.UploadAccountDocuments(new UploadAccountDocumentsRequest
    {
        AccountId = "some example string",
    });
    // TODO: Handle 'response' of type AccountDocument
}
catch (ApiException<UploadAccountDocumentsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UploadAccountDocumentsRequest](src/Curlec/Requests/PartnerDocuments/UploadAccountDocumentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccountDocument](src/Curlec/Models/AccountDocument.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[UploadAccountDocumentsError](src/Curlec/Errors/UploadAccountDocumentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StakeholderDocument&gt; UploadStakeholderDocuments(UploadStakeholderDocumentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.PartnerDocuments.UploadStakeholderDocuments(new UploadStakeholderDocumentsRequest
    {
        AccountId = "some example string",
        StakeholderId = "some example string",
    });
    // TODO: Handle 'response' of type StakeholderDocument
}
catch (ApiException<UploadStakeholderDocumentsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UploadStakeholderDocumentsRequest](src/Curlec/Requests/PartnerDocuments/UploadStakeholderDocumentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StakeholderDocument](src/Curlec/Models/StakeholderDocument.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[UploadStakeholderDocumentsError](src/Curlec/Errors/UploadStakeholderDocumentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PartnerStakeholders

> Source: [PartnerStakeholders](src/Curlec/Api/PartnerStakeholders.cs)

<details>
<summary><code>Task&lt;StakeholderRazorpayPartnerStakeholdersApi&gt; CreateStakeholder2(CreateStakeholder2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.PartnerStakeholders.CreateStakeholder2(new CreateStakeholder2Request
    {
        AccountId = "some example string",
        Body = new V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApi
        {
            Name = "some example string",
            Email = "some example string",
        },
    });
    // TODO: Handle 'response' of type StakeholderRazorpayPartnerStakeholdersApi
}
catch (ApiException<CreateStakeholder2Error> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateStakeholder2Request](src/Curlec/Requests/PartnerStakeholders/CreateStakeholder2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StakeholderRazorpayPartnerStakeholdersApi](src/Curlec/Models/StakeholderRazorpayPartnerStakeholdersApi.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[CreateStakeholder2Error](src/Curlec/Errors/CreateStakeholder2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V2AccountsStakeholdersResponse&gt; FetchAllStakeholders(FetchAllStakeholdersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.PartnerStakeholders.FetchAllStakeholders(new FetchAllStakeholdersRequest
    {
        AccountId = "some example string",
    });
    // TODO: Handle 'response' of type V2AccountsStakeholdersResponse
}
catch (ApiException<FetchAllStakeholdersError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchAllStakeholdersRequest](src/Curlec/Requests/PartnerStakeholders/FetchAllStakeholdersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V2AccountsStakeholdersResponse](src/Curlec/Models/V2AccountsStakeholdersResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchAllStakeholdersError](src/Curlec/Errors/FetchAllStakeholdersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StakeholderRazorpayPartnerStakeholdersApi&gt; UpdateStakeholder2(UpdateStakeholder2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.PartnerStakeholders.UpdateStakeholder2(new UpdateStakeholder2Request
    {
        AccountId = "some example string",
        StakeholderId = "some example string",
        Body = new V2AccountsStakeholdersRequest1(),
    });
    // TODO: Handle 'response' of type StakeholderRazorpayPartnerStakeholdersApi
}
catch (ApiException<UpdateStakeholder2Error> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateStakeholder2Request](src/Curlec/Requests/PartnerStakeholders/UpdateStakeholder2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StakeholderRazorpayPartnerStakeholdersApi](src/Curlec/Models/StakeholderRazorpayPartnerStakeholdersApi.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[UpdateStakeholder2Error](src/Curlec/Errors/UpdateStakeholder2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PartnerWebhooks

> Source: [PartnerWebhooks](src/Curlec/Api/PartnerWebhooks.cs)

<details>
<summary><code>Task&lt;PartnerWebhook&gt; CreatePartnerWebhook(CreatePartnerWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.PartnerWebhooks.CreatePartnerWebhook(new CreatePartnerWebhookRequest
    {
        AccountId = "some example string",
        Body = new V2AccountsWebhooksRequest
        {
            Url = "some example string",
            Events = new Dictionary<string, bool> { ["key"] = true },
        },
    });
    // TODO: Handle 'response' of type PartnerWebhook
}
catch (ApiException<CreatePartnerWebhookError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreatePartnerWebhookRequest](src/Curlec/Requests/PartnerWebhooks/CreatePartnerWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PartnerWebhook](src/Curlec/Models/PartnerWebhook.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[CreatePartnerWebhookError](src/Curlec/Errors/CreatePartnerWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeletePartnerWebhook(DeletePartnerWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.PartnerWebhooks.DeletePartnerWebhook(new DeletePartnerWebhookRequest
    {
        AccountId = "some example string",
        WebhookId = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeletePartnerWebhookError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeletePartnerWebhookRequest](src/Curlec/Requests/PartnerWebhooks/DeletePartnerWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[DeletePartnerWebhookError](src/Curlec/Errors/DeletePartnerWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PartnerWebhook&gt; FetchPartnerWebhook(FetchPartnerWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.PartnerWebhooks.FetchPartnerWebhook(new FetchPartnerWebhookRequest
    {
        AccountId = "some example string",
        WebhookId = "some example string",
    });
    // TODO: Handle 'response' of type PartnerWebhook
}
catch (ApiException<FetchPartnerWebhookError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchPartnerWebhookRequest](src/Curlec/Requests/PartnerWebhooks/FetchPartnerWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PartnerWebhook](src/Curlec/Models/PartnerWebhook.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchPartnerWebhookError](src/Curlec/Errors/FetchPartnerWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V2AccountsWebhooksResponse&gt; ListPartnerWebhooks(ListPartnerWebhooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.PartnerWebhooks.ListPartnerWebhooks(new ListPartnerWebhooksRequest
    {
        AccountId = "some example string",
    });
    // TODO: Handle 'response' of type V2AccountsWebhooksResponse
}
catch (ApiException<ListPartnerWebhooksError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListPartnerWebhooksRequest](src/Curlec/Requests/PartnerWebhooks/ListPartnerWebhooksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V2AccountsWebhooksResponse](src/Curlec/Models/V2AccountsWebhooksResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[ListPartnerWebhooksError](src/Curlec/Errors/ListPartnerWebhooksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PartnerWebhook&gt; UpdatePartnerWebhook(UpdatePartnerWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.PartnerWebhooks.UpdatePartnerWebhook(new UpdatePartnerWebhookRequest
    {
        AccountId = "some example string",
        WebhookId = "some example string",
        Body = new PartnerWebhook(),
    });
    // TODO: Handle 'response' of type PartnerWebhook
}
catch (ApiException<UpdatePartnerWebhookError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdatePartnerWebhookRequest](src/Curlec/Requests/PartnerWebhooks/UpdatePartnerWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PartnerWebhook](src/Curlec/Models/PartnerWebhook.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[UpdatePartnerWebhookError](src/Curlec/Errors/UpdatePartnerWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentDowntimes

> Source: [PaymentDowntimes](src/Curlec/Api/PaymentDowntimes.cs)

<details>
<summary><code>Task&lt;PaymentDowntime&gt; FetchPaymentDowntime(FetchPaymentDowntimeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.PaymentDowntimes.FetchPaymentDowntime(new FetchPaymentDowntimeRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type PaymentDowntime
}
catch (ApiException<FetchPaymentDowntimeError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchPaymentDowntimeRequest](src/Curlec/Requests/PaymentDowntimes/FetchPaymentDowntimeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentDowntime](src/Curlec/Models/PaymentDowntime.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchPaymentDowntimeError](src/Curlec/Errors/FetchPaymentDowntimeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaymentsDowntimesResponse&gt; FetchPaymentDowntimes(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.PaymentDowntimes.FetchPaymentDowntimes();
    // TODO: Handle 'response' of type PaymentsDowntimesResponse
}
catch (ApiException<FetchPaymentDowntimesError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentsDowntimesResponse](src/Curlec/Models/PaymentsDowntimesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchPaymentDowntimesError](src/Curlec/Errors/FetchPaymentDowntimesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentLinks

> Source: [PaymentLinks](src/Curlec/Api/PaymentLinks.cs)

<details>
<summary><code>Task&lt;PaymentLink&gt; CancelPaymentLink(CancelPaymentLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.PaymentLinks.CancelPaymentLink(new CancelPaymentLinkRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type PaymentLink
}
catch (ApiException<CancelPaymentLinkError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CancelPaymentLinkRequest](src/Curlec/Requests/PaymentLinks/CancelPaymentLinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentLink](src/Curlec/Models/PaymentLink.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[CancelPaymentLinkError](src/Curlec/Errors/CancelPaymentLinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaymentLink&gt; CreatePaymentLink(CreatePaymentLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.PaymentLinks.CreatePaymentLink(new CreatePaymentLinkRequest
    {
        Body = new PaymentLinksRequest
        {
            Amount = 50000,
            Currency = "INR",
            Description = "Payment for Order #1234",
            Customer = new Customer1RazorpayPaymentLinksApi
            {
                Name = "Aisha Sharma",
                Email = "aisha@example.com",
                Contact = "+919876543210",
            },
            Notify = new Notify1 { Sms = true, Email = true },
            ReminderEnable = true,
        },
    });
    // TODO: Handle 'response' of type PaymentLink
}
catch (ApiException<CreatePaymentLinkError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreatePaymentLinkRequest](src/Curlec/Requests/PaymentLinks/CreatePaymentLinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentLink](src/Curlec/Models/PaymentLink.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[CreatePaymentLinkError](src/Curlec/Errors/CreatePaymentLinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaymentLinksResponse&gt; FetchAllPaymentLinks(FetchAllPaymentLinksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.PaymentLinks.FetchAllPaymentLinks(new FetchAllPaymentLinksRequest());
    // TODO: Handle 'response' of type PaymentLinksResponse
}
catch (ApiException<FetchAllPaymentLinksError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchAllPaymentLinksRequest](src/Curlec/Requests/PaymentLinks/FetchAllPaymentLinksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentLinksResponse](src/Curlec/Models/PaymentLinksResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchAllPaymentLinksError](src/Curlec/Errors/FetchAllPaymentLinksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaymentLink&gt; FetchPaymentLink(FetchPaymentLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.PaymentLinks.FetchPaymentLink(new FetchPaymentLinkRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type PaymentLink
}
catch (ApiException<FetchPaymentLinkError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchPaymentLinkRequest](src/Curlec/Requests/PaymentLinks/FetchPaymentLinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentLink](src/Curlec/Models/PaymentLink.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchPaymentLinkError](src/Curlec/Errors/FetchPaymentLinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaymentLinksNotifyByResponse&gt; ResendPaymentLinkNotification(ResendPaymentLinkNotificationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.PaymentLinks.ResendPaymentLinkNotification(new ResendPaymentLinkNotificationRequest
    {
        Id = "some example string",
        Medium = Medium.Sms,
    });
    // TODO: Handle 'response' of type PaymentLinksNotifyByResponse
}
catch (ApiException<ResendPaymentLinkNotificationError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ResendPaymentLinkNotificationRequest](src/Curlec/Requests/PaymentLinks/ResendPaymentLinkNotificationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentLinksNotifyByResponse](src/Curlec/Models/PaymentLinksNotifyByResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[ResendPaymentLinkNotificationError](src/Curlec/Errors/ResendPaymentLinkNotificationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaymentLink&gt; UpdatePaymentLink(UpdatePaymentLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.PaymentLinks.UpdatePaymentLink(new UpdatePaymentLinkRequest
    {
        Id = "some example string",
        Body = new PaymentLinksRequest1(),
    });
    // TODO: Handle 'response' of type PaymentLink
}
catch (ApiException<UpdatePaymentLinkError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdatePaymentLinkRequest](src/Curlec/Requests/PaymentLinks/UpdatePaymentLinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentLink](src/Curlec/Models/PaymentLink.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[UpdatePaymentLinkError](src/Curlec/Errors/UpdatePaymentLinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Payments

> Source: [Payments](src/Curlec/Api/Payments.cs)

<details>
<summary><code>Task&lt;PaymentRazorpayPaymentsApi&gt; CapturePayment(CapturePaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Payments.CapturePayment(new CapturePaymentRequest
    {
        Id = "some example string",
        Body = new PaymentsCaptureRequest { Amount = 50000, Currency = "INR" },
    });
    // TODO: Handle 'response' of type PaymentRazorpayPaymentsApi
}
catch (ApiException<CapturePaymentError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CapturePaymentRequest](src/Curlec/Requests/Payments/CapturePaymentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentRazorpayPaymentsApi](src/Curlec/Models/PaymentRazorpayPaymentsApi.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[CapturePaymentError](src/Curlec/Errors/CapturePaymentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaymentsResponse&gt; FetchAllPayments(FetchAllPaymentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Payments.FetchAllPayments(new FetchAllPaymentsRequest());
    // TODO: Handle 'response' of type PaymentsResponse
}
catch (ApiException<FetchAllPaymentsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchAllPaymentsRequest](src/Curlec/Requests/Payments/FetchAllPaymentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentsResponse](src/Curlec/Models/PaymentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchAllPaymentsError](src/Curlec/Errors/FetchAllPaymentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaymentRazorpayPaymentsApi&gt; FetchPayment(FetchPaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Payments.FetchPayment(new FetchPaymentRequest { Id = "some example string" });
    // TODO: Handle 'response' of type PaymentRazorpayPaymentsApi
}
catch (ApiException<FetchPaymentError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchPaymentRequest](src/Curlec/Requests/Payments/FetchPaymentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentRazorpayPaymentsApi](src/Curlec/Models/PaymentRazorpayPaymentsApi.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchPaymentError](src/Curlec/Errors/FetchPaymentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaymentRazorpayPaymentsApi&gt; UpdatePayment(UpdatePaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Payments.UpdatePayment(new UpdatePaymentRequest
    {
        Id = "some example string",
        Body = new PaymentsRequest { Notes = new Dictionary<string, string> { ["key"] = "some example string" } },
    });
    // TODO: Handle 'response' of type PaymentRazorpayPaymentsApi
}
catch (ApiException<UpdatePaymentError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdatePaymentRequest](src/Curlec/Requests/Payments/UpdatePaymentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentRazorpayPaymentsApi](src/Curlec/Models/PaymentRazorpayPaymentsApi.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[UpdatePaymentError](src/Curlec/Errors/UpdatePaymentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Plans

> Source: [Plans](src/Curlec/Api/Plans.cs)

<details>
<summary><code>Task&lt;Plan&gt; CreatePlan(CreatePlanRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Plans.CreatePlan(new CreatePlanRequest
    {
        Body = new PlansRequest
        {
            Period = Period1.Monthly,
            Interval = 1,
            Item = new Item1
            {
                Name = "Pro Plan",
                Description = "Monthly SaaS subscription",
                Amount = 49900,
                Currency = "INR",
            },
        },
    });
    // TODO: Handle 'response' of type Plan
}
catch (ApiException<CreatePlanError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreatePlanRequest](src/Curlec/Requests/Plans/CreatePlanRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Plan](src/Curlec/Models/Plan.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[CreatePlanError](src/Curlec/Errors/CreatePlanError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Plan&gt; FetchPlan(FetchPlanRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Plans.FetchPlan(new FetchPlanRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Plan
}
catch (ApiException<FetchPlanError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchPlanRequest](src/Curlec/Requests/Plans/FetchPlanRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Plan](src/Curlec/Models/Plan.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchPlanError](src/Curlec/Errors/FetchPlanError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PlansResponse&gt; ListPlans(ListPlansRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Plans.ListPlans(new ListPlansRequest());
    // TODO: Handle 'response' of type PlansResponse
}
catch (ApiException<ListPlansError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListPlansRequest](src/Curlec/Requests/Plans/ListPlansRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlansResponse](src/Curlec/Models/PlansResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[ListPlansError](src/Curlec/Errors/ListPlansError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## QrCodes

> Source: [QrCodes](src/Curlec/Api/QrCodes.cs)

<details>
<summary><code>Task&lt;QrCode&gt; CloseQrCode(CloseQrCodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.QrCodes.CloseQrCode(new CloseQrCodeRequest { Id = "some example string" });
    // TODO: Handle 'response' of type QrCode
}
catch (ApiException<CloseQrCodeError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CloseQrCodeRequest](src/Curlec/Requests/QrCodes/CloseQrCodeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QrCode](src/Curlec/Models/QrCode.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[CloseQrCodeError](src/Curlec/Errors/CloseQrCodeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;QrCode&gt; CreateQrCode(CreateQrCodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.QrCodes.CreateQrCode(new CreateQrCodeRequest
    {
        Body = new PaymentsQrCodesRequest { Name = "some example string", Usage = Usage.SingleUse, FixedAmount = true },
    });
    // TODO: Handle 'response' of type QrCode
}
catch (ApiException<CreateQrCodeError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateQrCodeRequest](src/Curlec/Requests/QrCodes/CreateQrCodeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QrCode](src/Curlec/Models/QrCode.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[CreateQrCodeError](src/Curlec/Errors/CreateQrCodeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaymentsQrCodesResponse&gt; FetchAllQrCodes(FetchAllQrCodesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.QrCodes.FetchAllQrCodes(new FetchAllQrCodesRequest());
    // TODO: Handle 'response' of type PaymentsQrCodesResponse
}
catch (ApiException<FetchAllQrCodesError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchAllQrCodesRequest](src/Curlec/Requests/QrCodes/FetchAllQrCodesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentsQrCodesResponse](src/Curlec/Models/PaymentsQrCodesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchAllQrCodesError](src/Curlec/Errors/FetchAllQrCodesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;QrCode&gt; FetchQrCode(FetchQrCodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.QrCodes.FetchQrCode(new FetchQrCodeRequest { Id = "some example string" });
    // TODO: Handle 'response' of type QrCode
}
catch (ApiException<FetchQrCodeError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchQrCodeRequest](src/Curlec/Requests/QrCodes/FetchQrCodeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QrCode](src/Curlec/Models/QrCode.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchQrCodeError](src/Curlec/Errors/FetchQrCodeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaymentsQrCodesPaymentsResponse&gt; FetchQrCodePayments(FetchQrCodePaymentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.QrCodes.FetchQrCodePayments(new FetchQrCodePaymentsRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type PaymentsQrCodesPaymentsResponse
}
catch (ApiException<FetchQrCodePaymentsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchQrCodePaymentsRequest](src/Curlec/Requests/QrCodes/FetchQrCodePaymentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentsQrCodesPaymentsResponse](src/Curlec/Models/PaymentsQrCodesPaymentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchQrCodePaymentsError](src/Curlec/Errors/FetchQrCodePaymentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;QrCode&gt; UpdateQrCode(UpdateQrCodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.QrCodes.UpdateQrCode(new UpdateQrCodeRequest
    {
        Id = "some example string",
        Body = new PaymentsQrCodesRequest1
        {
            Notes = new Dictionary<string, string> { ["key"] = "some example string" },
        },
    });
    // TODO: Handle 'response' of type QrCode
}
catch (ApiException<UpdateQrCodeError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateQrCodeRequest](src/Curlec/Requests/QrCodes/UpdateQrCodeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QrCode](src/Curlec/Models/QrCode.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[UpdateQrCodeError](src/Curlec/Errors/UpdateQrCodeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Refunds

> Source: [Refunds](src/Curlec/Api/Refunds.cs)

<details>
<summary><code>Task&lt;RefundRazorpayRefundsApi&gt; CreateRefund(CreateRefundRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Refunds.CreateRefund(new CreateRefundRequest
    {
        Id = "some example string",
        Body = new PaymentsRefundRequest { Amount = 50000, Speed = Speed.Normal, Receipt = "refund_receipt_001" },
    });
    // TODO: Handle 'response' of type RefundRazorpayRefundsApi
}
catch (ApiException<CreateRefundError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateRefundRequest](src/Curlec/Requests/Refunds/CreateRefundRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RefundRazorpayRefundsApi](src/Curlec/Models/RefundRazorpayRefundsApi.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[CreateRefundError](src/Curlec/Errors/CreateRefundError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RefundsResponse&gt; FetchAllRefunds(FetchAllRefundsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Refunds.FetchAllRefunds(new FetchAllRefundsRequest());
    // TODO: Handle 'response' of type RefundsResponse
}
catch (ApiException<FetchAllRefundsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchAllRefundsRequest](src/Curlec/Requests/Refunds/FetchAllRefundsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RefundsResponse](src/Curlec/Models/RefundsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchAllRefundsError](src/Curlec/Errors/FetchAllRefundsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RefundRazorpayRefundsApi&gt; FetchPaymentRefund(FetchPaymentRefundRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Refunds.FetchPaymentRefund(new FetchPaymentRefundRequest
    {
        PaymentId = "some example string",
        RefundId = "some example string",
    });
    // TODO: Handle 'response' of type RefundRazorpayRefundsApi
}
catch (ApiException<FetchPaymentRefundError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchPaymentRefundRequest](src/Curlec/Requests/Refunds/FetchPaymentRefundRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RefundRazorpayRefundsApi](src/Curlec/Models/RefundRazorpayRefundsApi.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchPaymentRefundError](src/Curlec/Errors/FetchPaymentRefundError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaymentsRefundsResponse&gt; FetchPaymentRefunds(FetchPaymentRefundsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Refunds.FetchPaymentRefunds(new FetchPaymentRefundsRequest
    {
        PaymentId = "some example string",
    });
    // TODO: Handle 'response' of type PaymentsRefundsResponse
}
catch (ApiException<FetchPaymentRefundsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchPaymentRefundsRequest](src/Curlec/Requests/Refunds/FetchPaymentRefundsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentsRefundsResponse](src/Curlec/Models/PaymentsRefundsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchPaymentRefundsError](src/Curlec/Errors/FetchPaymentRefundsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RefundRazorpayRefundsApi&gt; FetchRefund(FetchRefundRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Refunds.FetchRefund(new FetchRefundRequest { Id = "some example string" });
    // TODO: Handle 'response' of type RefundRazorpayRefundsApi
}
catch (ApiException<FetchRefundError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchRefundRequest](src/Curlec/Requests/Refunds/FetchRefundRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RefundRazorpayRefundsApi](src/Curlec/Models/RefundRazorpayRefundsApi.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchRefundError](src/Curlec/Errors/FetchRefundError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RefundRazorpayRefundsApi&gt; UpdateRefund(UpdateRefundRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Refunds.UpdateRefund(new UpdateRefundRequest
    {
        Id = "some example string",
        Body = new RefundsRequest { Notes = new Dictionary<string, string> { ["key"] = "some example string" } },
    });
    // TODO: Handle 'response' of type RefundRazorpayRefundsApi
}
catch (ApiException<UpdateRefundError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateRefundRequest](src/Curlec/Requests/Refunds/UpdateRefundRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RefundRazorpayRefundsApi](src/Curlec/Models/RefundRazorpayRefundsApi.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[UpdateRefundError](src/Curlec/Errors/UpdateRefundError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SettlementsApi

> Source: [SettlementsApi](src/Curlec/Api/SettlementsApi.cs)

<details>
<summary><code>Task&lt;SettlementsResponse&gt; FetchAllSettlements(FetchAllSettlementsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.SettlementsApi.FetchAllSettlements(new FetchAllSettlementsRequest());
    // TODO: Handle 'response' of type SettlementsResponse
}
catch (ApiException<FetchAllSettlementsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchAllSettlementsRequest](src/Curlec/Requests/SettlementsApi/FetchAllSettlementsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SettlementsResponse](src/Curlec/Models/SettlementsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchAllSettlementsError](src/Curlec/Errors/FetchAllSettlementsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Settlement&gt; FetchSettlement(FetchSettlementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.SettlementsApi.FetchSettlement(new FetchSettlementRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type Settlement
}
catch (ApiException<FetchSettlementError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchSettlementRequest](src/Curlec/Requests/SettlementsApi/FetchSettlementRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Settlement](src/Curlec/Models/Settlement.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchSettlementError](src/Curlec/Errors/FetchSettlementError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SettlementsReconCombinedResponse&gt; FetchSettlementRecon(FetchSettlementReconRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.SettlementsApi.FetchSettlementRecon(new FetchSettlementReconRequest
    {
        Year = 2024,
        Month = 4,
    });
    // TODO: Handle 'response' of type SettlementsReconCombinedResponse
}
catch (ApiException<FetchSettlementReconError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchSettlementReconRequest](src/Curlec/Requests/SettlementsApi/FetchSettlementReconRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SettlementsReconCombinedResponse](src/Curlec/Models/SettlementsReconCombinedResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchSettlementReconError](src/Curlec/Errors/FetchSettlementReconError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Subscriptions

> Source: [Subscriptions](src/Curlec/Api/Subscriptions.cs)

<details>
<summary><code>Task&lt;Subscription&gt; CancelSubscription(CancelSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Subscriptions.CancelSubscription(new CancelSubscriptionRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type Subscription
}
catch (ApiException<CancelSubscriptionError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CancelSubscriptionRequest](src/Curlec/Requests/Subscriptions/CancelSubscriptionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Subscription](src/Curlec/Models/Subscription.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[CancelSubscriptionError](src/Curlec/Errors/CancelSubscriptionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Subscription&gt; CancelSubscriptionScheduledChanges(CancelSubscriptionScheduledChangesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Subscriptions.CancelSubscriptionScheduledChanges(
        new CancelSubscriptionScheduledChangesRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Subscription
}
catch (ApiException<CancelSubscriptionScheduledChangesError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CancelSubscriptionScheduledChangesRequest](src/Curlec/Requests/Subscriptions/CancelSubscriptionScheduledChangesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Subscription](src/Curlec/Models/Subscription.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[CancelSubscriptionScheduledChangesError](src/Curlec/Errors/CancelSubscriptionScheduledChangesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Subscription&gt; CreateSubscription(CreateSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Subscriptions.CreateSubscription(new CreateSubscriptionRequest
    {
        Body = new SubscriptionsRequest { PlanId = "some example string", TotalCount = 1 },
    });
    // TODO: Handle 'response' of type Subscription
}
catch (ApiException<CreateSubscriptionError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateSubscriptionRequest](src/Curlec/Requests/Subscriptions/CreateSubscriptionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Subscription](src/Curlec/Models/Subscription.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[CreateSubscriptionError](src/Curlec/Errors/CreateSubscriptionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeleteSubscriptionOffer(DeleteSubscriptionOfferRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Subscriptions.DeleteSubscriptionOffer(new DeleteSubscriptionOfferRequest
    {
        SubId = "some example string",
        OfferId = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteSubscriptionOfferError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteSubscriptionOfferRequest](src/Curlec/Requests/Subscriptions/DeleteSubscriptionOfferRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[DeleteSubscriptionOfferError](src/Curlec/Errors/DeleteSubscriptionOfferError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Subscription&gt; FetchSubscription(FetchSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Subscriptions.FetchSubscription(new FetchSubscriptionRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type Subscription
}
catch (ApiException<FetchSubscriptionError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchSubscriptionRequest](src/Curlec/Requests/Subscriptions/FetchSubscriptionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Subscription](src/Curlec/Models/Subscription.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchSubscriptionError](src/Curlec/Errors/FetchSubscriptionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SubscriptionsRetrieveScheduledChangesResponse&gt; FetchSubscriptionScheduledChanges(FetchSubscriptionScheduledChangesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Subscriptions.FetchSubscriptionScheduledChanges(
        new FetchSubscriptionScheduledChangesRequest { Id = "some example string" });
    // TODO: Handle 'response' of type SubscriptionsRetrieveScheduledChangesResponse
}
catch (ApiException<FetchSubscriptionScheduledChangesError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchSubscriptionScheduledChangesRequest](src/Curlec/Requests/Subscriptions/FetchSubscriptionScheduledChangesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionsRetrieveScheduledChangesResponse](src/Curlec/Models/SubscriptionsRetrieveScheduledChangesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchSubscriptionScheduledChangesError](src/Curlec/Errors/FetchSubscriptionScheduledChangesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SubscriptionsResponse&gt; ListSubscriptions(ListSubscriptionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Subscriptions.ListSubscriptions(new ListSubscriptionsRequest());
    // TODO: Handle 'response' of type SubscriptionsResponse
}
catch (ApiException<ListSubscriptionsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListSubscriptionsRequest](src/Curlec/Requests/Subscriptions/ListSubscriptionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionsResponse](src/Curlec/Models/SubscriptionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[ListSubscriptionsError](src/Curlec/Errors/ListSubscriptionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Subscription&gt; PauseSubscription(PauseSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Subscriptions.PauseSubscription(new PauseSubscriptionRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type Subscription
}
catch (ApiException<PauseSubscriptionError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PauseSubscriptionRequest](src/Curlec/Requests/Subscriptions/PauseSubscriptionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Subscription](src/Curlec/Models/Subscription.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[PauseSubscriptionError](src/Curlec/Errors/PauseSubscriptionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Subscription&gt; ResumeSubscription(ResumeSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Subscriptions.ResumeSubscription(new ResumeSubscriptionRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type Subscription
}
catch (ApiException<ResumeSubscriptionError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ResumeSubscriptionRequest](src/Curlec/Requests/Subscriptions/ResumeSubscriptionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Subscription](src/Curlec/Models/Subscription.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[ResumeSubscriptionError](src/Curlec/Errors/ResumeSubscriptionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Subscription&gt; UpdateSubscription(UpdateSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Subscriptions.UpdateSubscription(new UpdateSubscriptionRequest
    {
        Id = "some example string",
        Body = new SubscriptionsRequest1(),
    });
    // TODO: Handle 'response' of type Subscription
}
catch (ApiException<UpdateSubscriptionError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateSubscriptionRequest](src/Curlec/Requests/Subscriptions/UpdateSubscriptionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Subscription](src/Curlec/Models/Subscription.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[UpdateSubscriptionError](src/Curlec/Errors/UpdateSubscriptionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Transfers

> Source: [Transfers](src/Curlec/Api/Transfers.cs)

<details>
<summary><code>Task&lt;TransferRazorpayTransfersApi&gt; CreateDirectTransfer(CreateDirectTransferRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Transfers.CreateDirectTransfer(new CreateDirectTransferRequest
    {
        Body = new TransfersRequest { Account = "some example string", Amount = 1 },
    });
    // TODO: Handle 'response' of type TransferRazorpayTransfersApi
}
catch (ApiException<CreateDirectTransferError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateDirectTransferRequest](src/Curlec/Requests/Transfers/CreateDirectTransferRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransferRazorpayTransfersApi](src/Curlec/Models/TransferRazorpayTransfersApi.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[CreateDirectTransferError](src/Curlec/Errors/CreateDirectTransferError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaymentsTransfersResponse&gt; CreateTransfersFromPayment(CreateTransfersFromPaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Transfers.CreateTransfersFromPayment(new CreateTransfersFromPaymentRequest
    {
        Id = "some example string",
        Body = new PaymentsTransfersRequest
        {
            Transfers = [new Transfer1 { Account = "some example string", Amount = 1 }],
        },
    });
    // TODO: Handle 'response' of type PaymentsTransfersResponse
}
catch (ApiException<CreateTransfersFromPaymentError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateTransfersFromPaymentRequest](src/Curlec/Requests/Transfers/CreateTransfersFromPaymentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentsTransfersResponse](src/Curlec/Models/PaymentsTransfersResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[CreateTransfersFromPaymentError](src/Curlec/Errors/CreateTransfersFromPaymentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TransferRazorpayTransfersApi&gt; FetchTransfer(FetchTransferRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Transfers.FetchTransfer(new FetchTransferRequest { Id = "some example string" });
    // TODO: Handle 'response' of type TransferRazorpayTransfersApi
}
catch (ApiException<FetchTransferError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchTransferRequest](src/Curlec/Requests/Transfers/FetchTransferRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransferRazorpayTransfersApi](src/Curlec/Models/TransferRazorpayTransfersApi.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchTransferError](src/Curlec/Errors/FetchTransferError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaymentsTransfersResponse&gt; FetchTransfersForPayment(FetchTransfersForPaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Transfers.FetchTransfersForPayment(new FetchTransfersForPaymentRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type PaymentsTransfersResponse
}
catch (ApiException<FetchTransfersForPaymentError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchTransfersForPaymentRequest](src/Curlec/Requests/Transfers/FetchTransfersForPaymentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentsTransfersResponse](src/Curlec/Models/PaymentsTransfersResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchTransfersForPaymentError](src/Curlec/Errors/FetchTransfersForPaymentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TransfersReversalsResponse&gt; ListReversals(ListReversalsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Transfers.ListReversals(new ListReversalsRequest { Id = "some example string" });
    // TODO: Handle 'response' of type TransfersReversalsResponse
}
catch (ApiException<ListReversalsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListReversalsRequest](src/Curlec/Requests/Transfers/ListReversalsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransfersReversalsResponse](src/Curlec/Models/TransfersReversalsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[ListReversalsError](src/Curlec/Errors/ListReversalsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TransfersResponse&gt; ListTransfers(ListTransfersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Transfers.ListTransfers(new ListTransfersRequest());
    // TODO: Handle 'response' of type TransfersResponse
}
catch (ApiException<ListTransfersError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListTransfersRequest](src/Curlec/Requests/Transfers/ListTransfersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransfersResponse](src/Curlec/Models/TransfersResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[ListTransfersError](src/Curlec/Errors/ListTransfersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TransferRazorpayTransfersApi&gt; ModifyTransferSettlementHold(ModifyTransferSettlementHoldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Transfers.ModifyTransferSettlementHold(new ModifyTransferSettlementHoldRequest
    {
        Id = "some example string",
        Body = new TransfersRequest1(),
    });
    // TODO: Handle 'response' of type TransferRazorpayTransfersApi
}
catch (ApiException<ModifyTransferSettlementHoldError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ModifyTransferSettlementHoldRequest](src/Curlec/Requests/Transfers/ModifyTransferSettlementHoldRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransferRazorpayTransfersApi](src/Curlec/Models/TransferRazorpayTransfersApi.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[ModifyTransferSettlementHoldError](src/Curlec/Errors/ModifyTransferSettlementHoldError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Reversal&gt; ReverseTransfer(ReverseTransferRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Transfers.ReverseTransfer(new ReverseTransferRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Reversal
}
catch (ApiException<ReverseTransferError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ReverseTransferRequest](src/Curlec/Requests/Transfers/ReverseTransferRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Reversal](src/Curlec/Models/Reversal.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[ReverseTransferError](src/Curlec/Errors/ReverseTransferError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VirtualAccounts

> Source: [VirtualAccounts](src/Curlec/Api/VirtualAccounts.cs)

<details>
<summary><code>Task&lt;VirtualAccount&gt; AddAllowedPayer(AddAllowedPayerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.VirtualAccounts.AddAllowedPayer(new AddAllowedPayerRequest
    {
        VaId = "some example string",
        Body = new VirtualAccountsAllowedPayersRequest { Type = Type2RazorpayVirtualAccountsApi.BankAccount },
    });
    // TODO: Handle 'response' of type VirtualAccount
}
catch (ApiException<AddAllowedPayerError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AddAllowedPayerRequest](src/Curlec/Requests/VirtualAccounts/AddAllowedPayerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VirtualAccount](src/Curlec/Models/VirtualAccount.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[AddAllowedPayerError](src/Curlec/Errors/AddAllowedPayerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VirtualAccount&gt; AddVpaReceiver(AddVpaReceiverRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.VirtualAccounts.AddVpaReceiver(new AddVpaReceiverRequest
    {
        Id = "some example string",
        Body = new VirtualAccountsReceiversRequest { Types = [Type1RazorpayVirtualAccountsApi.Vpa] },
    });
    // TODO: Handle 'response' of type VirtualAccount
}
catch (ApiException<AddVpaReceiverError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AddVpaReceiverRequest](src/Curlec/Requests/VirtualAccounts/AddVpaReceiverRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VirtualAccount](src/Curlec/Models/VirtualAccount.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[AddVpaReceiverError](src/Curlec/Errors/AddVpaReceiverError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VirtualAccount&gt; CloseVirtualAccount(CloseVirtualAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.VirtualAccounts.CloseVirtualAccount(new CloseVirtualAccountRequest
    {
        Id = "some example string",
        Body = new VirtualAccountsCloseRequest(),
    });
    // TODO: Handle 'response' of type VirtualAccount
}
catch (ApiException<CloseVirtualAccountError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CloseVirtualAccountRequest](src/Curlec/Requests/VirtualAccounts/CloseVirtualAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VirtualAccount](src/Curlec/Models/VirtualAccount.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[CloseVirtualAccountError](src/Curlec/Errors/CloseVirtualAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VirtualAccount&gt; CreateVirtualAccount(CreateVirtualAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.VirtualAccounts.CreateVirtualAccount(new CreateVirtualAccountRequest
    {
        Body = new VirtualAccountsRequest
        {
            Receivers = new Receivers { Types = [TypeRazorpayVirtualAccountsApi.BankAccount] },
            Description = "some example string",
        },
    });
    // TODO: Handle 'response' of type VirtualAccount
}
catch (ApiException<CreateVirtualAccountError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateVirtualAccountRequest](src/Curlec/Requests/VirtualAccounts/CreateVirtualAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VirtualAccount](src/Curlec/Models/VirtualAccount.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[CreateVirtualAccountError](src/Curlec/Errors/CreateVirtualAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeleteAllowedPayer(DeleteAllowedPayerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.VirtualAccounts.DeleteAllowedPayer(new DeleteAllowedPayerRequest
    {
        VaId = "some example string",
        Id = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteAllowedPayerError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteAllowedPayerRequest](src/Curlec/Requests/VirtualAccounts/DeleteAllowedPayerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[DeleteAllowedPayerError](src/Curlec/Errors/DeleteAllowedPayerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BankTransfer&gt; FetchBankTransfer(FetchBankTransferRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.VirtualAccounts.FetchBankTransfer(new FetchBankTransferRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type BankTransfer
}
catch (ApiException<FetchBankTransferError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchBankTransferRequest](src/Curlec/Requests/VirtualAccounts/FetchBankTransferRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BankTransfer](src/Curlec/Models/BankTransfer.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchBankTransferError](src/Curlec/Errors/FetchBankTransferError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VirtualAccount&gt; FetchVirtualAccount(FetchVirtualAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.VirtualAccounts.FetchVirtualAccount(new FetchVirtualAccountRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type VirtualAccount
}
catch (ApiException<FetchVirtualAccountError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchVirtualAccountRequest](src/Curlec/Requests/VirtualAccounts/FetchVirtualAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VirtualAccount](src/Curlec/Models/VirtualAccount.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchVirtualAccountError](src/Curlec/Errors/FetchVirtualAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VirtualAccountsPaymentsResponse&gt; FetchVirtualAccountPayments(FetchVirtualAccountPaymentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.VirtualAccounts.FetchVirtualAccountPayments(new FetchVirtualAccountPaymentsRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type VirtualAccountsPaymentsResponse
}
catch (ApiException<FetchVirtualAccountPaymentsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchVirtualAccountPaymentsRequest](src/Curlec/Requests/VirtualAccounts/FetchVirtualAccountPaymentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VirtualAccountsPaymentsResponse](src/Curlec/Models/VirtualAccountsPaymentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchVirtualAccountPaymentsError](src/Curlec/Errors/FetchVirtualAccountPaymentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VirtualAccountsResponse&gt; ListVirtualAccounts(ListVirtualAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.VirtualAccounts.ListVirtualAccounts(new ListVirtualAccountsRequest());
    // TODO: Handle 'response' of type VirtualAccountsResponse
}
catch (ApiException<ListVirtualAccountsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListVirtualAccountsRequest](src/Curlec/Requests/VirtualAccounts/ListVirtualAccountsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VirtualAccountsResponse](src/Curlec/Models/VirtualAccountsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[ListVirtualAccountsError](src/Curlec/Errors/ListVirtualAccountsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VirtualAccount&gt; UpdateVirtualAccount(UpdateVirtualAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.VirtualAccounts.UpdateVirtualAccount(new UpdateVirtualAccountRequest
    {
        Id = "some example string",
        Body = new VirtualAccountsRequest1(),
    });
    // TODO: Handle 'response' of type VirtualAccount
}
catch (ApiException<UpdateVirtualAccountError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateVirtualAccountRequest](src/Curlec/Requests/VirtualAccounts/UpdateVirtualAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VirtualAccount](src/Curlec/Models/VirtualAccount.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[UpdateVirtualAccountError](src/Curlec/Errors/UpdateVirtualAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## XAccountValidation

> Source: [XAccountValidation](src/Curlec/Api/XAccountValidation.cs)

<details>
<summary><code>Task&lt;FundAccountValidation&gt; FetchFundAccountValidation(FetchFundAccountValidationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.XAccountValidation.FetchFundAccountValidation(new FetchFundAccountValidationRequest
    {
        ValidationId = "some example string",
    });
    // TODO: Handle 'response' of type FundAccountValidation
}
catch (ApiException<FetchFundAccountValidationError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchFundAccountValidationRequest](src/Curlec/Requests/XAccountValidation/FetchFundAccountValidationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FundAccountValidation](src/Curlec/Models/FundAccountValidation.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchFundAccountValidationError](src/Curlec/Errors/FetchFundAccountValidationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FundAccountsValidationsResponse&gt; ListFundAccountValidations(ListFundAccountValidationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.XAccountValidation.ListFundAccountValidations(new ListFundAccountValidationsRequest());
    // TODO: Handle 'response' of type FundAccountsValidationsResponse
}
catch (ApiException<ListFundAccountValidationsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListFundAccountValidationsRequest](src/Curlec/Requests/XAccountValidation/ListFundAccountValidationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FundAccountsValidationsResponse](src/Curlec/Models/FundAccountsValidationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[ListFundAccountValidationsError](src/Curlec/Errors/ListFundAccountValidationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FundAccountValidation&gt; ValidateFundAccount(ValidateFundAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.XAccountValidation.ValidateFundAccount(new ValidateFundAccountRequest
    {
        Body = new FundAccountsValidationsRequest { AccountType = AccountType.BankAccount, FundAccount = fundAccount },
    });
    // TODO: Handle 'response' of type FundAccountValidation
}
catch (ApiException<ValidateFundAccountError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ValidateFundAccountRequest](src/Curlec/Requests/XAccountValidation/ValidateFundAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FundAccountValidation](src/Curlec/Models/FundAccountValidation.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[ValidateFundAccountError](src/Curlec/Errors/ValidateFundAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## XBankingBalances

> Source: [XBankingBalances](src/Curlec/Api/XBankingBalances.cs)

<details>
<summary><code>Task&lt;BankingBalancesResponse&gt; FetchBankingBalances(FetchBankingBalancesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.XBankingBalances.FetchBankingBalances(new FetchBankingBalancesRequest());
    // TODO: Handle 'response' of type BankingBalancesResponse
}
catch (ApiException<FetchBankingBalancesError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchBankingBalancesRequest](src/Curlec/Requests/XBankingBalances/FetchBankingBalancesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BankingBalancesResponse](src/Curlec/Models/BankingBalancesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchBankingBalancesError](src/Curlec/Errors/FetchBankingBalancesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## XContacts

> Source: [XContacts](src/Curlec/Api/XContacts.cs)

<details>
<summary><code>Task&lt;XContact&gt; CreateContact(CreateContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.XContacts.CreateContact(new CreateContactRequest
    {
        Body = new ContactsRequest { Name = "some example string" },
    });
    // TODO: Handle 'response' of type XContact
}
catch (ApiException<CreateContactError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateContactRequest](src/Curlec/Requests/XContacts/CreateContactRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[XContact](src/Curlec/Models/XContact.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[CreateContactError](src/Curlec/Errors/CreateContactError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;XContact&gt; FetchContact(FetchContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.XContacts.FetchContact(new FetchContactRequest { ContactId = "some example string" });
    // TODO: Handle 'response' of type XContact
}
catch (ApiException<FetchContactError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchContactRequest](src/Curlec/Requests/XContacts/FetchContactRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[XContact](src/Curlec/Models/XContact.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchContactError](src/Curlec/Errors/FetchContactError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ContactsResponse&gt; ListContacts(ListContactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.XContacts.ListContacts(new ListContactsRequest());
    // TODO: Handle 'response' of type ContactsResponse
}
catch (ApiException<ListContactsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListContactsRequest](src/Curlec/Requests/XContacts/ListContactsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactsResponse](src/Curlec/Models/ContactsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[ListContactsError](src/Curlec/Errors/ListContactsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;XContact&gt; UpdateContact(UpdateContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.XContacts.UpdateContact(new UpdateContactRequest
    {
        ContactId = "some example string",
        Body = new ContactsRequest1(),
    });
    // TODO: Handle 'response' of type XContact
}
catch (ApiException<UpdateContactError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateContactRequest](src/Curlec/Requests/XContacts/UpdateContactRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[XContact](src/Curlec/Models/XContact.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[UpdateContactError](src/Curlec/Errors/UpdateContactError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## XFundAccounts

> Source: [XFundAccounts](src/Curlec/Api/XFundAccounts.cs)

<details>
<summary><code>Task&lt;FundAccountRazorpayXFundAccountsApi&gt; ActivateDeactivateFundAccount(ActivateDeactivateFundAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.XFundAccounts.ActivateDeactivateFundAccount(new ActivateDeactivateFundAccountRequest
    {
        FundAccountId = "some example string",
        Body = new FundAccountsRequest1 { Active = true },
    });
    // TODO: Handle 'response' of type FundAccountRazorpayXFundAccountsApi
}
catch (ApiException<ActivateDeactivateFundAccountError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ActivateDeactivateFundAccountRequest](src/Curlec/Requests/XFundAccounts/ActivateDeactivateFundAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FundAccountRazorpayXFundAccountsApi](src/Curlec/Models/FundAccountRazorpayXFundAccountsApi.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[ActivateDeactivateFundAccountError](src/Curlec/Errors/ActivateDeactivateFundAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FundAccountRazorpayXFundAccountsApi&gt; CreateFundAccount(CreateFundAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.XFundAccounts.CreateFundAccount(new CreateFundAccountRequest
    {
        Body = new FundAccountsRequest
        {
            ContactId = "some example string",
            AccountType = AccountTypeRazorpayXFundAccountsApi.BankAccount,
        },
    });
    // TODO: Handle 'response' of type FundAccountRazorpayXFundAccountsApi
}
catch (ApiException<CreateFundAccountError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateFundAccountRequest](src/Curlec/Requests/XFundAccounts/CreateFundAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FundAccountRazorpayXFundAccountsApi](src/Curlec/Models/FundAccountRazorpayXFundAccountsApi.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[CreateFundAccountError](src/Curlec/Errors/CreateFundAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FundAccountRazorpayXFundAccountsApi&gt; FetchFundAccount(FetchFundAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.XFundAccounts.FetchFundAccount(new FetchFundAccountRequest
    {
        FundAccountId = "some example string",
    });
    // TODO: Handle 'response' of type FundAccountRazorpayXFundAccountsApi
}
catch (ApiException<FetchFundAccountError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchFundAccountRequest](src/Curlec/Requests/XFundAccounts/FetchFundAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FundAccountRazorpayXFundAccountsApi](src/Curlec/Models/FundAccountRazorpayXFundAccountsApi.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchFundAccountError](src/Curlec/Errors/FetchFundAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FundAccountsResponse&gt; ListFundAccounts(ListFundAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.XFundAccounts.ListFundAccounts(new ListFundAccountsRequest());
    // TODO: Handle 'response' of type FundAccountsResponse
}
catch (ApiException<ListFundAccountsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListFundAccountsRequest](src/Curlec/Requests/XFundAccounts/ListFundAccountsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FundAccountsResponse](src/Curlec/Models/FundAccountsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[ListFundAccountsError](src/Curlec/Errors/ListFundAccountsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## XPayoutLinks

> Source: [XPayoutLinks](src/Curlec/Api/XPayoutLinks.cs)

<details>
<summary><code>Task&lt;PayoutLink&gt; CancelPayoutLink(CancelPayoutLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.XPayoutLinks.CancelPayoutLink(new CancelPayoutLinkRequest
    {
        PayoutLinkId = "some example string",
    });
    // TODO: Handle 'response' of type PayoutLink
}
catch (ApiException<CancelPayoutLinkError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CancelPayoutLinkRequest](src/Curlec/Requests/XPayoutLinks/CancelPayoutLinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PayoutLink](src/Curlec/Models/PayoutLink.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[CancelPayoutLinkError](src/Curlec/Errors/CancelPayoutLinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PayoutLink&gt; CreatePayoutLink(CreatePayoutLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.XPayoutLinks.CreatePayoutLink(new CreatePayoutLinkRequest
    {
        Body = new PayoutLinksRequest
        {
            ContactId = "some example string",
            Amount = 1,
            Purpose = "some example string",
        },
    });
    // TODO: Handle 'response' of type PayoutLink
}
catch (ApiException<CreatePayoutLinkError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreatePayoutLinkRequest](src/Curlec/Requests/XPayoutLinks/CreatePayoutLinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PayoutLink](src/Curlec/Models/PayoutLink.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[CreatePayoutLinkError](src/Curlec/Errors/CreatePayoutLinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PayoutLink&gt; FetchPayoutLink(FetchPayoutLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.XPayoutLinks.FetchPayoutLink(new FetchPayoutLinkRequest
    {
        PayoutLinkId = "some example string",
    });
    // TODO: Handle 'response' of type PayoutLink
}
catch (ApiException<FetchPayoutLinkError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchPayoutLinkRequest](src/Curlec/Requests/XPayoutLinks/FetchPayoutLinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PayoutLink](src/Curlec/Models/PayoutLink.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchPayoutLinkError](src/Curlec/Errors/FetchPayoutLinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PayoutLinksResponse&gt; ListPayoutLinks(ListPayoutLinksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.XPayoutLinks.ListPayoutLinks(new ListPayoutLinksRequest());
    // TODO: Handle 'response' of type PayoutLinksResponse
}
catch (ApiException<ListPayoutLinksError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListPayoutLinksRequest](src/Curlec/Requests/XPayoutLinks/ListPayoutLinksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PayoutLinksResponse](src/Curlec/Models/PayoutLinksResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[ListPayoutLinksError](src/Curlec/Errors/ListPayoutLinksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## XPayouts

> Source: [XPayouts](src/Curlec/Api/XPayouts.cs)

<details>
<summary><code>Task&lt;Payout&gt; ApprovePayout(ApprovePayoutRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.XPayouts.ApprovePayout(new ApprovePayoutRequest { PayoutId = "some example string" });
    // TODO: Handle 'response' of type Payout
}
catch (ApiException<ApprovePayoutError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApprovePayoutRequest](src/Curlec/Requests/XPayouts/ApprovePayoutRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Payout](src/Curlec/Models/Payout.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[ApprovePayoutError](src/Curlec/Errors/ApprovePayoutError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Payout&gt; CancelPayout(CancelPayoutRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.XPayouts.CancelPayout(new CancelPayoutRequest { PayoutId = "some example string" });
    // TODO: Handle 'response' of type Payout
}
catch (ApiException<CancelPayoutError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CancelPayoutRequest](src/Curlec/Requests/XPayouts/CancelPayoutRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Payout](src/Curlec/Models/Payout.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[CancelPayoutError](src/Curlec/Errors/CancelPayoutError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Payout&gt; CreatePayout(CreatePayoutRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.XPayouts.CreatePayout(new CreatePayoutRequest
    {
        XPayoutIdempotency = "some example string",
        Body = new PayoutsRequest
        {
            AccountNumber = "some example string",
            Amount = 1,
            Mode = Mode1.Neft,
            Purpose = Purpose.Refund,
        },
    });
    // TODO: Handle 'response' of type Payout
}
catch (ApiException<CreatePayoutError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreatePayoutRequest](src/Curlec/Requests/XPayouts/CreatePayoutRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Payout](src/Curlec/Models/Payout.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[CreatePayoutError](src/Curlec/Errors/CreatePayoutError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Payout&gt; FetchPayout(FetchPayoutRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.XPayouts.FetchPayout(new FetchPayoutRequest { PayoutId = "some example string" });
    // TODO: Handle 'response' of type Payout
}
catch (ApiException<FetchPayoutError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchPayoutRequest](src/Curlec/Requests/XPayouts/FetchPayoutRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Payout](src/Curlec/Models/Payout.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchPayoutError](src/Curlec/Errors/FetchPayoutError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PayoutsResponse&gt; ListPayouts(ListPayoutsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.XPayouts.ListPayouts(new ListPayoutsRequest { AccountNumber = "some example string" });
    // TODO: Handle 'response' of type PayoutsResponse
}
catch (ApiException<ListPayoutsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListPayoutsRequest](src/Curlec/Requests/XPayouts/ListPayoutsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PayoutsResponse](src/Curlec/Models/PayoutsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[ListPayoutsError](src/Curlec/Errors/ListPayoutsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Payout&gt; RejectPayout(RejectPayoutRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.XPayouts.RejectPayout(new RejectPayoutRequest { PayoutId = "some example string" });
    // TODO: Handle 'response' of type Payout
}
catch (ApiException<RejectPayoutError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RejectPayoutRequest](src/Curlec/Requests/XPayouts/RejectPayoutRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Payout](src/Curlec/Models/Payout.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[RejectPayoutError](src/Curlec/Errors/RejectPayoutError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## XTransactions

> Source: [XTransactions](src/Curlec/Api/XTransactions.cs)

<details>
<summary><code>Task&lt;XTransaction&gt; FetchTransaction(FetchTransactionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.XTransactions.FetchTransaction(new FetchTransactionRequest
    {
        TransactionId = "some example string",
    });
    // TODO: Handle 'response' of type XTransaction
}
catch (ApiException<FetchTransactionError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchTransactionRequest](src/Curlec/Requests/XTransactions/FetchTransactionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[XTransaction](src/Curlec/Models/XTransaction.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[FetchTransactionError](src/Curlec/Errors/FetchTransactionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TransactionsResponse&gt; ListTransactions(ListTransactionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.XTransactions.ListTransactions(new ListTransactionsRequest
    {
        AccountNumber = "some example string",
    });
    // TODO: Handle 'response' of type TransactionsResponse
}
catch (ApiException<ListTransactionsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListTransactionsRequest](src/Curlec/Requests/XTransactions/ListTransactionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransactionsResponse](src/Curlec/Models/TransactionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Curlec/Core/Exceptions/ApiException.cs)&lt;[ListTransactionsError](src/Curlec/Errors/ListTransactionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

