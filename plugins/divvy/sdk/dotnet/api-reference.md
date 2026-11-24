# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [DivvyClient](src/Divvy/DivvyClient.cs)

## Attachments

> Source: [Attachments](src/Divvy/Api/Attachments.cs)

<details>
<summary><code>Task&lt;AttachmentResponseDto&gt; CreateCustomerAttachment(CreateCustomerAttachmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload an attachment for an existing customer. The file size limit is 6 MB.

**Note**: When you upload an attachment, it takes a few minutes for BILL to complete the upload process.

See Documents and attachments in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Attachments.CreateCustomerAttachment(new CreateCustomerAttachmentRequest
    {
        CustomerId = "{{customer_id}}",
        Name = "business_details.pdf",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = ["some example string"],
    });
    // TODO: Handle 'response' of type AttachmentResponseDto
}
catch (ApiException<CreateCustomerAttachmentError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateCustomerAttachmentRequest](src/Divvy/Requests/Attachments/CreateCustomerAttachmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AttachmentResponseDto](src/Divvy/Models/AttachmentResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateCustomerAttachmentError](src/Divvy/Errors/CreateCustomerAttachmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AttachmentResponseDto&gt; CreateInvoiceAttachment(CreateInvoiceAttachmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload an attachment for an existing invoice. The file size limit is 6 MB.

**Note**: When you upload an attachment, it takes a few minutes for BILL to complete the upload process.

See Documents and attachments in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Attachments.CreateInvoiceAttachment(new CreateInvoiceAttachmentRequest
    {
        InvoiceId = "{{invoice_id}}",
        Name = "business_details.pdf",
        ReplaceInvoicePdf = false,
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = ["some example string"],
    });
    // TODO: Handle 'response' of type AttachmentResponseDto
}
catch (ApiException<CreateInvoiceAttachmentError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateInvoiceAttachmentRequest](src/Divvy/Requests/Attachments/CreateInvoiceAttachmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AttachmentResponseDto](src/Divvy/Models/AttachmentResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateInvoiceAttachmentError](src/Divvy/Errors/CreateInvoiceAttachmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AttachmentResponseDto&gt; CreateVendorAttachment(CreateVendorAttachmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload an attachment for an existing vendor. The file size limit is 6 MB.

**Note**: When you upload an attachment, it takes a few minutes for BILL to complete the upload process.

See Documents and attachments in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Attachments.CreateVendorAttachment(new CreateVendorAttachmentRequest
    {
        VendorId = "{{vendor_id}}",
        Name = "business_details.pdf",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = ["some example string"],
    });
    // TODO: Handle 'response' of type AttachmentResponseDto
}
catch (ApiException<CreateVendorAttachmentError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateVendorAttachmentRequest](src/Divvy/Requests/Attachments/CreateVendorAttachmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AttachmentResponseDto](src/Divvy/Models/AttachmentResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateVendorAttachmentError](src/Divvy/Errors/CreateVendorAttachmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StatusDto&gt; DeleteAttachment(DeleteAttachmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete the existing attachment. A deleted attachment cannot be restored. The deleted attachment is not available in the list of attachments.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Attachments.DeleteAttachment(new DeleteAttachmentRequest
    {
        AttachmentId = "{{attachment_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type StatusDto
}
catch (ApiException<DeleteAttachmentError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteAttachmentRequest](src/Divvy/Requests/Attachments/DeleteAttachmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StatusDto](src/Divvy/Models/StatusDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[DeleteAttachmentError](src/Divvy/Errors/DeleteAttachmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AttachmentResponseDto&gt; GetAttachment(GetAttachmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an attachment.

From the response, use `downloadLink` in a GET request to download the attachment.

```
curl '{downloadLink}' --header 'sessionId: {session_id}' --output {attachment_name}
```

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Attachments.GetAttachment(new GetAttachmentRequest
    {
        AttachmentId = "{{attachment_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type AttachmentResponseDto
}
catch (ApiException<GetAttachmentError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAttachmentRequest](src/Divvy/Requests/Attachments/GetAttachmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AttachmentResponseDto](src/Divvy/Models/AttachmentResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetAttachmentError](src/Divvy/Errors/GetAttachmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListResponseDtoAttachmentResponseDto&gt; ListCustomerAttachments(ListCustomerAttachmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of attachments associated with a customer.

From the response, use `downloadLink` in a GET request to download the attachment.

```
curl '{downloadLink}' --header 'sessionId: {session_id}' --output {attachment_name}
```

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Attachments.ListCustomerAttachments(new ListCustomerAttachmentsRequest
    {
        CustomerId = "{{customer_id}}",
        Max = 10,
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ListResponseDtoAttachmentResponseDto
}
catch (ApiException<ListCustomerAttachmentsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCustomerAttachmentsRequest](src/Divvy/Requests/Attachments/ListCustomerAttachmentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoAttachmentResponseDto](src/Divvy/Models/ListResponseDtoAttachmentResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListCustomerAttachmentsError](src/Divvy/Errors/ListCustomerAttachmentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListResponseDtoAttachmentResponseDto&gt; ListInvoiceAttachments(ListInvoiceAttachmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of attachments associated with an invoice.

From the response, use `downloadLink` in a GET request to download the attachment.

```
curl '{downloadLink}' --header 'sessionId: {session_id}' --output {attachment_name}
```

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Attachments.ListInvoiceAttachments(new ListInvoiceAttachmentsRequest
    {
        InvoiceId = "{{invoice_id}}",
        Max = 10,
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ListResponseDtoAttachmentResponseDto
}
catch (ApiException<ListInvoiceAttachmentsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListInvoiceAttachmentsRequest](src/Divvy/Requests/Attachments/ListInvoiceAttachmentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoAttachmentResponseDto](src/Divvy/Models/ListResponseDtoAttachmentResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListInvoiceAttachmentsError](src/Divvy/Errors/ListInvoiceAttachmentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListResponseDtoAttachmentResponseDto&gt; ListVendorAttachments(ListVendorAttachmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of attachments associated with a vendor.

From the response, use `downloadLink` in a GET request to download the attachment.

```
curl '{downloadLink}' --header 'sessionId: {session_id}' --output {attachment_name}
```

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Attachments.ListVendorAttachments(new ListVendorAttachmentsRequest
    {
        VendorId = "{{vendor_id}}",
        Max = 10,
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ListResponseDtoAttachmentResponseDto
}
catch (ApiException<ListVendorAttachmentsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListVendorAttachmentsRequest](src/Divvy/Requests/Attachments/ListVendorAttachmentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoAttachmentResponseDto](src/Divvy/Models/ListResponseDtoAttachmentResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListVendorAttachmentsError](src/Divvy/Errors/ListVendorAttachmentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AuthenticationApi

> Source: [AuthenticationApi](src/Divvy/Api/AuthenticationApi.cs)

<details>
<summary><code>Task&lt;SessionInfoResponseDto&gt; GetSessionInfo(GetSessionInfoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about your current API session. This includes information about the current organization ID, user ID, and MFA status of the organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AuthenticationApi.GetSessionInfo(new GetSessionInfoRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type SessionInfoResponseDto
}
catch (ApiException<GetSessionInfoError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSessionInfoRequest](src/Divvy/Requests/AuthenticationApi/GetSessionInfoRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SessionInfoResponseDto](src/Divvy/Models/SessionInfoResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetSessionInfoError](src/Divvy/Errors/GetSessionInfoError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListAllResponseDtoAllOrganizationsResponseDto&gt; ListAllOrganizations(ListAllOrganizationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of organizations you can access with your current API session. You get 100 results on one page of results.

In the response, you get a list of organizations and console organizations. When a console organization is available in the response, this indicates that the console organization is a parent of the listed organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AuthenticationApi.ListAllOrganizations(new ListAllOrganizationsRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ListAllResponseDtoAllOrganizationsResponseDto
}
catch (ApiException<ListAllOrganizationsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListAllOrganizationsRequest](src/Divvy/Requests/AuthenticationApi/ListAllOrganizationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListAllResponseDtoAllOrganizationsResponseDto](src/Divvy/Models/ListAllResponseDtoAllOrganizationsResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListAllOrganizationsError](src/Divvy/Errors/ListAllOrganizationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;LoginResponseDto&gt; Login(LoginRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sign in to your BILL developer account. In the response, your API session is created and a BILL-generated `sessionId` is available. Use the `sessionId` in all subsequent API calls to confirm that you are in a signed-in session.

To create an MFA-trusted API session, set `rememberMeId` and `device` in addition to the required fields. See MFA setup for information about the BILL MFA process.

You can sign out with `POST /v3/logout`. If your API session is inactive for 35 minutes, the session expires and you are automatically signed out.

See API partner login for information about the additional permissions you get with the API partner login.

**Note**: This section is about authentication for working with the BILL v3 API. See Authentication with Spend & Expense API token for information about authentication for the Spend & Expense API endpoints.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AuthenticationApi.Login(new LoginRequest
    {
        Body = new LoginRequestDto
        {
            DevKey = "some example string",
            Username = "some example string",
            OrganizationId = "some example string",
        },
    });
    // TODO: Handle 'response' of type LoginResponseDto
}
catch (ApiException<LoginError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[LoginRequest](src/Divvy/Requests/AuthenticationApi/LoginRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LoginResponseDto](src/Divvy/Models/LoginResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[LoginError](src/Divvy/Errors/LoginError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task Logout(LogoutRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sign out of your BILL developer account. In response, the current `sessionId` expires and your API session is terminated.

You will be required to sign in again with `/v3/login` before you can make another API call.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AuthenticationApi.Logout(new LogoutRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
}
catch (ApiException<LogoutError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[LogoutRequest](src/Divvy/Requests/AuthenticationApi/LogoutRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[LogoutError](src/Divvy/Errors/LogoutError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Bills

> Source: [Bills](src/Divvy/Api/Bills.cs)

<details>
<summary><code>Task&lt;BillWithoutApproversResponseDto&gt; ArchiveBill(ArchiveBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing bill. In the response, the `archived` field is set as `true`.

You can restore an archived bill with `POST /v3/bills/{billId}/restore`. There is no change when you archive an archived bill.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bills.ArchiveBill(new ArchiveBillRequest
    {
        BillId = "{{bill_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type BillWithoutApproversResponseDto
}
catch (ApiException<ArchiveBillError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ArchiveBillRequest](src/Divvy/Requests/Bills/ArchiveBillRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BillWithoutApproversResponseDto](src/Divvy/Models/BillWithoutApproversResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ArchiveBillError](src/Divvy/Errors/ArchiveBillError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BillResponseDto&gt; CreateBill(CreateBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new bill.

See Bills in the Guides section for more information, sample requests, and responses.

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
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new BillCreateRequestDto
        {
            VendorId = "some example string",
            DueDate = DateTimeOffset.Parse("2024-01-15T00:00:00Z"),
            BillLineItems = [new BillCreateLineItemDto()],
            Invoice = new Invoice1
            {
                InvoiceNumber = "some example string",
                InvoiceDate = DateTimeOffset.Parse("2024-01-15T00:00:00Z"),
            },
        },
    });
    // TODO: Handle 'response' of type BillResponseDto
}
catch (ApiException<CreateBillError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateBillRequest](src/Divvy/Requests/Bills/CreateBillRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BillResponseDto](src/Divvy/Models/BillResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateBillError](src/Divvy/Errors/CreateBillError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;BillWithoutApproversResponseDto&gt;&gt; CreateBulkBills(CreateBulkBillsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple bills with one API request. You can create up to 100 bills with one `POST /v3/bills/bulk` request.

Bulk bill creation at BILL follow a set of rules.
* **Successful response**: In your bulk bill creation request, all your bills must be successfully created for a successful response. If any bill creation is not successful, the entire request fails and none of the bills in the request are created.
* **You can create bills for multiple vendors**: You can create bills for one vendor or for multiple vendors with one `POST /v3/bills/bulk` request.

See Bills in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bills.CreateBulkBills(new CreateBulkBillsRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = [
            new BillCreateRequestDto
            {
                VendorId = "some example string",
                DueDate = DateTimeOffset.Parse("2024-01-15T00:00:00Z"),
                BillLineItems = [new BillCreateLineItemDto()],
                Invoice = new Invoice1
                {
                    InvoiceNumber = "some example string",
                    InvoiceDate = DateTimeOffset.Parse("2024-01-15T00:00:00Z"),
                },
            },
        ],
    });
    // TODO: Handle 'response' of type IReadOnlyList<BillWithoutApproversResponseDto>
}
catch (ApiException<CreateBulkBillsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateBulkBillsRequest](src/Divvy/Requests/Bills/CreateBulkBillsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[BillWithoutApproversResponseDto](src/Divvy/Models/BillWithoutApproversResponseDto.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateBulkBillsError](src/Divvy/Errors/CreateBulkBillsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BillReadResponseDto&gt; GetBill(GetBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing bill.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bills.GetBill(new GetBillRequest
    {
        BillId = "some example string",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type BillReadResponseDto
}
catch (ApiException<GetBillError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetBillRequest](src/Divvy/Requests/Bills/GetBillRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BillReadResponseDto](src/Divvy/Models/BillReadResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetBillError](src/Divvy/Errors/GetBillError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListBillResponseDto&gt; ListBills(ListBillsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of bill objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bills.ListBills(new ListBillsRequest
    {
        Max = 10,
        Sort = "createdTime:desc",
        Filters = "id:eq:{{bill_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ListBillResponseDto
}
catch (ApiException<ListBillsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListBillsRequest](src/Divvy/Requests/Bills/ListBillsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListBillResponseDto](src/Divvy/Models/ListBillResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListBillsError](src/Divvy/Errors/ListBillsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RecordPaymentResponseDto&gt; RecordPayment(RecordPaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Record an offline AP payment made to a vendor.

An offline payment is a payment made outside the BILL system. BILL simply applies the recorded payment amount to one or more bills for the vendor. BILL does not process the payment or transfer funds to the vendor when you record an AP payment with this endpoint.

Use `POST /v3/payments` to create a payment with the BILL system. When you pay with `POST /v3/payments`, BILL processes the payment and transfers funds from your BILL organization funding account to the vendor.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bills.RecordPayment(new RecordPaymentRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new RecordPaymentRequestDto
        {
            VendorId = "some example string",
            ProcessDate = DateTimeOffset.Parse("2024-01-15T00:00:00Z"),
            ToPrintCheck = true,
            Payments = [new RecordBillPayRequestDto { BillId = "some example string", Amount = 1.5d }],
        },
    });
    // TODO: Handle 'response' of type RecordPaymentResponseDto
}
catch (ApiException<RecordPaymentError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RecordPaymentRequest](src/Divvy/Requests/Bills/RecordPaymentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecordPaymentResponseDto](src/Divvy/Models/RecordPaymentResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[RecordPaymentError](src/Divvy/Errors/RecordPaymentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BillResponseDto&gt; ReplaceBill(ReplaceBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the number of line items in a bill. You can also update other bill details.

You can use the PUT operation to add, remove, or replace the number of line items in a bill. A set of rules apply with the PUT operation.
* When you add a new line item, a new line item `id` is generated in the bill.
* When you omit an existing line item `id`, the line item is removed from the bill.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bills.ReplaceBill(new ReplaceBillRequest
    {
        BillId = "{{bill_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new BillReplaceRequestDto
        {
            VendorId = "some example string",
            DueDate = DateTimeOffset.Parse("2024-01-15T00:00:00Z"),
            BillLineItems = [new BillReplaceLineItemDto()],
            Invoice = new Invoice1
            {
                InvoiceNumber = "some example string",
                InvoiceDate = DateTimeOffset.Parse("2024-01-15T00:00:00Z"),
            },
        },
    });
    // TODO: Handle 'response' of type BillResponseDto
}
catch (ApiException<ReplaceBillError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ReplaceBillRequest](src/Divvy/Requests/Bills/ReplaceBillRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BillResponseDto](src/Divvy/Models/BillResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ReplaceBillError](src/Divvy/Errors/ReplaceBillError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BillWithoutApproversResponseDto&gt; RestoreBill(RestoreBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived bill. In the response, the `archived` field is set as `false`.

You can perform any valid BILL operation on restored bills. There is no change when you restore a restored bill.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bills.RestoreBill(new RestoreBillRequest
    {
        BillId = "{{bill_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type BillWithoutApproversResponseDto
}
catch (ApiException<RestoreBillError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RestoreBillRequest](src/Divvy/Requests/Bills/RestoreBillRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BillWithoutApproversResponseDto](src/Divvy/Models/BillWithoutApproversResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[RestoreBillError](src/Divvy/Errors/RestoreBillError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BillResponseDto&gt; UpdateBill(UpdateBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about a bill line item. You can also update other bill details.

You can use the PATCH operation to modify line item details, such as `amount` and `description`. The bill line item `id` does not change with a PATCH operation.

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
        BillId = "{{bill_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new BillUpdateRequestDto { PaymentTermId = "some example string" },
    });
    // TODO: Handle 'response' of type BillResponseDto
}
catch (ApiException<UpdateBillError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateBillRequest](src/Divvy/Requests/Bills/UpdateBillRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BillResponseDto](src/Divvy/Models/BillResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[UpdateBillError](src/Divvy/Errors/UpdateBillError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Budgets

> Source: [Budgets](src/Divvy/Api/Budgets.cs)

<details>
<summary><code>Task&lt;BudgetResponseDto&gt; CreateBudget(CreateBudgetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new budget for a company.

See Budgets and Users in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Budgets.CreateBudget(new CreateBudgetRequest
    {
        ApiToken = "{{api_token}}",
        Body = new BudgetCreateDto
        {
            Name = "some example string",
            Owners = ["some example string"],
            RecurringInterval = PeriodIntervalType.None,
        },
    });
    // TODO: Handle 'response' of type BudgetResponseDto
}
catch (ApiException<CreateBudgetError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateBudgetRequest](src/Divvy/Requests/Budgets/CreateBudgetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BudgetResponseDto](src/Divvy/Models/BudgetResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateBudgetError](src/Divvy/Errors/CreateBudgetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteBudget(DeleteBudgetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an existing budget. A deleted budget cannot be restored. The deleted budget is not available in the list of budgets.

**Note**:
* While you cannot restore a deleted budget with the API, you can unretire budgets in the BILL web app and mobile app. An unretired budget is active and is available for use.
* A one-time budget can be unretired at any time. A `recurringInterval` budget can be unretired within one interval. For example, if a `MONTHLY` budget is retired in January, you can unretire it in February. You cannot unretire this budget in March or any later month.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Budgets.DeleteBudget(new DeleteBudgetRequest
    {
        BudgetId = "{{se_budget_uuid}}",
        ApiToken = "{{api_token}}",
    });
}
catch (ApiException<DeleteBudgetError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteBudgetRequest](src/Divvy/Requests/Budgets/DeleteBudgetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[DeleteBudgetError](src/Divvy/Errors/DeleteBudgetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteBudgetMember(DeleteBudgetMemberRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a user member from an existing budget.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Budgets.DeleteBudgetMember(new DeleteBudgetMemberRequest
    {
        BudgetId = "{{se_budget_uuid}}",
        UserId = "{{se_user_uuid}}",
        ApiToken = "{{api_token}}",
    });
}
catch (ApiException<DeleteBudgetMemberError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteBudgetMemberRequest](src/Divvy/Requests/Budgets/DeleteBudgetMemberRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[DeleteBudgetMemberError](src/Divvy/Errors/DeleteBudgetMemberError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BudgetResponseDto&gt; GetBudget(GetBudgetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing budget.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Budgets.GetBudget(new GetBudgetRequest
    {
        BudgetId = "{{se_budget_uuid}}",
        ApiToken = "{{api_token}}",
    });
    // TODO: Handle 'response' of type BudgetResponseDto
}
catch (ApiException<GetBudgetError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetBudgetRequest](src/Divvy/Requests/Budgets/GetBudgetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BudgetResponseDto](src/Divvy/Models/BudgetResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetBudgetError](src/Divvy/Errors/GetBudgetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BudgetMemberResponseDto&gt; GetBudgetMember(GetBudgetMemberRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about a user member assigned to an existing budget.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Budgets.GetBudgetMember(new GetBudgetMemberRequest
    {
        BudgetId = "{{se_budget_uuid}}",
        UserId = "{{se_user_uuid}}",
        ApiToken = "{{api_token}}",
    });
    // TODO: Handle 'response' of type BudgetMemberResponseDto
}
catch (ApiException<GetBudgetMemberError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetBudgetMemberRequest](src/Divvy/Requests/Budgets/GetBudgetMemberRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BudgetMemberResponseDto](src/Divvy/Models/BudgetMemberResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetBudgetMemberError](src/Divvy/Errors/GetBudgetMemberError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginationResponseDtoBudgetMemberResponseDto&gt; ListBudgetMembers(ListBudgetMembersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of user members assigned to an existing budget. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Budgets.ListBudgetMembers(new ListBudgetMembersRequest
    {
        BudgetId = "{{se_budget_uuid}}",
        Max = 10L,
        Sort = "spent:desc",
        Filters = "retired:eq:false",
        ApiToken = "{{api_token}}",
    });
    // TODO: Handle 'response' of type PaginationResponseDtoBudgetMemberResponseDto
}
catch (ApiException<ListBudgetMembersError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListBudgetMembersRequest](src/Divvy/Requests/Budgets/ListBudgetMembersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginationResponseDtoBudgetMemberResponseDto](src/Divvy/Models/PaginationResponseDtoBudgetMemberResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListBudgetMembersError](src/Divvy/Errors/ListBudgetMembersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginationResponseDtoBudgetResponseDto&gt; ListBudgets(ListBudgetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of budget objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Budgets.ListBudgets(new ListBudgetsRequest
    {
        Max = 10L,
        Sort = "spent:desc",
        Filters = "budgetIds:eq:{{se_budget_uuid}}",
        ApiToken = "{{api_token}}",
    });
    // TODO: Handle 'response' of type PaginationResponseDtoBudgetResponseDto
}
catch (ApiException<ListBudgetsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListBudgetsRequest](src/Divvy/Requests/Budgets/ListBudgetsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginationResponseDtoBudgetResponseDto](src/Divvy/Models/PaginationResponseDtoBudgetResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListBudgetsError](src/Divvy/Errors/ListBudgetsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BudgetResponseDto&gt; UpdateBudget(UpdateBudgetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing budget.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Budgets.UpdateBudget(new UpdateBudgetRequest
    {
        BudgetId = "{{se_budget_uuid}}",
        ApiToken = "{{api_token}}",
        Body = new BudgetUpdateDto(),
    });
    // TODO: Handle 'response' of type BudgetResponseDto
}
catch (ApiException<UpdateBudgetError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateBudgetRequest](src/Divvy/Requests/Budgets/UpdateBudgetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BudgetResponseDto](src/Divvy/Models/BudgetResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[UpdateBudgetError](src/Divvy/Errors/UpdateBudgetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BudgetMemberResponseDto&gt; UpsertBudgetMember(UpsertBudgetMemberRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a new user member to an existing budget. You can also update details about an existing user member assigned to the budget.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Budgets.UpsertBudgetMember(new UpsertBudgetMemberRequest
    {
        BudgetId = "{{se_budget_uuid}}",
        UserId = "{{se_user_uuid}}",
        ApiToken = "{{api_token}}",
        Body = new BudgetMemberUpsertRequestDto(),
    });
    // TODO: Handle 'response' of type BudgetMemberResponseDto
}
catch (ApiException<UpsertBudgetMemberError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpsertBudgetMemberRequest](src/Divvy/Requests/Budgets/UpsertBudgetMemberRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BudgetMemberResponseDto](src/Divvy/Models/BudgetMemberResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[UpsertBudgetMemberError](src/Divvy/Errors/UpsertBudgetMemberError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SpendStatusDto&gt; UpsertBulkBudgetUsers(UpsertBulkBudgetUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about multiple user members assigned to an existing budget.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Budgets.UpsertBulkBudgetUsers(new UpsertBulkBudgetUsersRequest
    {
        BudgetId = "{{se_budget_uuid}}",
        ApiToken = "{{api_token}}",
        Body = new BudgetMemberBulkUpsertRequestDto
        {
            Members = [new BudgetMemberBulkUpsertDto { UserId = "some example string" }],
        },
    });
    // TODO: Handle 'response' of type SpendStatusDto
}
catch (ApiException<UpsertBulkBudgetUsersError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpsertBulkBudgetUsersRequest](src/Divvy/Requests/Budgets/UpsertBulkBudgetUsersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SpendStatusDto](src/Divvy/Models/SpendStatusDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[UpsertBulkBudgetUsersError](src/Divvy/Errors/UpsertBulkBudgetUsersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Cards

> Source: [Cards](src/Divvy/Api/Cards.cs)

<details>
<summary><code>Task&lt;CardResponseDto&gt; CreateBudgetCard(CreateBudgetCardRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new vendor card.

See Vendor cards in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Cards.CreateBudgetCard(new CreateBudgetCardRequest
    {
        ApiToken = "{{api_token}}",
        Body = new CreateCardRequestDto
        {
            Name = "some example string",
            UserId = "some example string",
            BudgetId = "some example string",
        },
    });
    // TODO: Handle 'response' of type CardResponseDto
}
catch (ApiException<CreateBudgetCardError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateBudgetCardRequest](src/Divvy/Requests/Cards/CreateBudgetCardRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CardResponseDto](src/Divvy/Models/CardResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateBudgetCardError](src/Divvy/Errors/CreateBudgetCardError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteCard(DeleteCardRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an existing vendor card. A deleted card cannot be restored. The deleted card is not available in the list of cards.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Cards.DeleteCard(new DeleteCardRequest { CardId = "{{se_card_uuid}}", ApiToken = "{{api_token}}" });
}
catch (ApiException<DeleteCardError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteCardRequest](src/Divvy/Requests/Cards/DeleteCardRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[DeleteCardError](src/Divvy/Errors/DeleteCardError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CardResponseDto&gt; FreezeCard(FreezeCardRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Freeze an existing vendor card.

You can freeze virtual cards and physical cards. A frozen card cannot be used for payments.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Cards.FreezeCard(new FreezeCardRequest
    {
        CardId = "{{se_card_uuid}}",
        ApiToken = "{{api_token}}",
    });
    // TODO: Handle 'response' of type CardResponseDto
}
catch (ApiException<FreezeCardError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FreezeCardRequest](src/Divvy/Requests/Cards/FreezeCardRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CardResponseDto](src/Divvy/Models/CardResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[FreezeCardError](src/Divvy/Errors/FreezeCardError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CardResponseDto&gt; GetCard(GetCardRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing vendor card.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Cards.GetCard(new GetCardRequest
    {
        CardId = "{{se_card_uuid}}",
        ApiToken = "{{api_token}}",
    });
    // TODO: Handle 'response' of type CardResponseDto
}
catch (ApiException<GetCardError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCardRequest](src/Divvy/Requests/Cards/GetCardRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CardResponseDto](src/Divvy/Models/CardResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetCardError](src/Divvy/Errors/GetCardError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CardPanTokenResponseDto&gt; GetPanJwt(GetPanJwtRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Cards.GetPanJwt(new GetPanJwtRequest
    {
        CardId = "{{se_card_uuid}}",
        ApiToken = "{{api_token}}",
    });
    // TODO: Handle 'response' of type CardPanTokenResponseDto
}
catch (ApiException<GetPanJwtError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPanJwtRequest](src/Divvy/Requests/Cards/GetPanJwtRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CardPanTokenResponseDto](src/Divvy/Models/CardPanTokenResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetPanJwtError](src/Divvy/Errors/GetPanJwtError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginationResponseDtoCardResponseDto&gt; ListCards(ListCardsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of card objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Cards.ListCards(new ListCardsRequest
    {
        Max = 10L,
        Sort = "status",
        Filters = "cardIds:eq:{{se_card_uuid}}",
        ApiToken = "{{api_token}}",
    });
    // TODO: Handle 'response' of type PaginationResponseDtoCardResponseDto
}
catch (ApiException<ListCardsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCardsRequest](src/Divvy/Requests/Cards/ListCardsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginationResponseDtoCardResponseDto](src/Divvy/Models/PaginationResponseDtoCardResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListCardsError](src/Divvy/Errors/ListCardsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CardResponseDto&gt; UnfreezeCard(UnfreezeCardRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Unfreeze an existing vendor card. You can unfreeze virtual cards and physical cards.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Cards.UnfreezeCard(new UnfreezeCardRequest
    {
        CardId = "{{se_card_uuid}}",
        ApiToken = "{{api_token}}",
    });
    // TODO: Handle 'response' of type CardResponseDto
}
catch (ApiException<UnfreezeCardError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UnfreezeCardRequest](src/Divvy/Requests/Cards/UnfreezeCardRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CardResponseDto](src/Divvy/Models/CardResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[UnfreezeCardError](src/Divvy/Errors/UnfreezeCardError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CardResponseDto&gt; UpdateCard(UpdateCardRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing vendor card.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Cards.UpdateCard(new UpdateCardRequest
    {
        CardId = "{{se_card_uuid}}",
        ApiToken = "{{api_token}}",
        Body = new UpdateCardRequestDto(),
    });
    // TODO: Handle 'response' of type CardResponseDto
}
catch (ApiException<UpdateCardError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateCardRequest](src/Divvy/Requests/Cards/UpdateCardRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CardResponseDto](src/Divvy/Models/CardResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[UpdateCardError](src/Divvy/Errors/UpdateCardError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ClassificationsApi

> Source: [ClassificationsApi](src/Divvy/Api/ClassificationsApi.cs)

<details>
<summary><code>Task&lt;ClassificationAccountingClassResponseDto&gt; ArchiveClassificationAccountingClass(ArchiveClassificationAccountingClassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing accounting class. In the response, the `archived` field is set as `true`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.ArchiveClassificationAccountingClass(
        new ArchiveClassificationAccountingClassRequest
        {
            Id = "{{accounting_class_id}}",
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
        });
    // TODO: Handle 'response' of type ClassificationAccountingClassResponseDto
}
catch (ApiException<ArchiveClassificationAccountingClassError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ArchiveClassificationAccountingClassRequest](src/Divvy/Requests/ClassificationsApi/ArchiveClassificationAccountingClassRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationAccountingClassResponseDto](src/Divvy/Models/ClassificationAccountingClassResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ArchiveClassificationAccountingClassError](src/Divvy/Errors/ArchiveClassificationAccountingClassError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationChartOfAccountsResponseDto&gt; ArchiveClassificationChartOfAccounts(ArchiveClassificationChartOfAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing chart of accounts. In the response, the `archived` field is set as `true`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.ArchiveClassificationChartOfAccounts(
        new ArchiveClassificationChartOfAccountsRequest
        {
            Id = "{{chart_of_accounts_id}}",
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
        });
    // TODO: Handle 'response' of type ClassificationChartOfAccountsResponseDto
}
catch (ApiException<ArchiveClassificationChartOfAccountsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ArchiveClassificationChartOfAccountsRequest](src/Divvy/Requests/ClassificationsApi/ArchiveClassificationChartOfAccountsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationChartOfAccountsResponseDto](src/Divvy/Models/ClassificationChartOfAccountsResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ArchiveClassificationChartOfAccountsError](src/Divvy/Errors/ArchiveClassificationChartOfAccountsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationDepartmentResponseDto&gt; ArchiveClassificationDepartment(ArchiveClassificationDepartmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing department. In the response, the `archived` field is set as `true`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.ArchiveClassificationDepartment(
        new ArchiveClassificationDepartmentRequest
        {
            Id = "{{department_id}}",
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
        });
    // TODO: Handle 'response' of type ClassificationDepartmentResponseDto
}
catch (ApiException<ArchiveClassificationDepartmentError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ArchiveClassificationDepartmentRequest](src/Divvy/Requests/ClassificationsApi/ArchiveClassificationDepartmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationDepartmentResponseDto](src/Divvy/Models/ClassificationDepartmentResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ArchiveClassificationDepartmentError](src/Divvy/Errors/ArchiveClassificationDepartmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationEmployeeResponseDto&gt; ArchiveClassificationEmployee(ArchiveClassificationEmployeeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing employee. In the response, the `archived` field is set as `true`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.ArchiveClassificationEmployee(
        new ArchiveClassificationEmployeeRequest
        {
            Id = "{{employee_id}}",
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
        });
    // TODO: Handle 'response' of type ClassificationEmployeeResponseDto
}
catch (ApiException<ArchiveClassificationEmployeeError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ArchiveClassificationEmployeeRequest](src/Divvy/Requests/ClassificationsApi/ArchiveClassificationEmployeeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationEmployeeResponseDto](src/Divvy/Models/ClassificationEmployeeResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ArchiveClassificationEmployeeError](src/Divvy/Errors/ArchiveClassificationEmployeeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationItemResponseDto&gt; ArchiveClassificationItem(ArchiveClassificationItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing item. In the response, the `archived` field is set as `true`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.ArchiveClassificationItem(new ArchiveClassificationItemRequest
    {
        Id = "{{item_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ClassificationItemResponseDto
}
catch (ApiException<ArchiveClassificationItemError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ArchiveClassificationItemRequest](src/Divvy/Requests/ClassificationsApi/ArchiveClassificationItemRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationItemResponseDto](src/Divvy/Models/ClassificationItemResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ArchiveClassificationItemError](src/Divvy/Errors/ArchiveClassificationItemError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationJobResponseDto&gt; ArchiveClassificationJob(ArchiveClassificationJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing job. In the response, the `archived` field is set as `true`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.ArchiveClassificationJob(new ArchiveClassificationJobRequest
    {
        Id = "{{job_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ClassificationJobResponseDto
}
catch (ApiException<ArchiveClassificationJobError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ArchiveClassificationJobRequest](src/Divvy/Requests/ClassificationsApi/ArchiveClassificationJobRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationJobResponseDto](src/Divvy/Models/ClassificationJobResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ArchiveClassificationJobError](src/Divvy/Errors/ArchiveClassificationJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationLocationResponseDto&gt; ArchiveClassificationLocation(ArchiveClassificationLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing location. In the response, the `archived` field is set as `true`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.ArchiveClassificationLocation(
        new ArchiveClassificationLocationRequest
        {
            Id = "{{location_id}}",
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
        });
    // TODO: Handle 'response' of type ClassificationLocationResponseDto
}
catch (ApiException<ArchiveClassificationLocationError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ArchiveClassificationLocationRequest](src/Divvy/Requests/ClassificationsApi/ArchiveClassificationLocationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationLocationResponseDto](src/Divvy/Models/ClassificationLocationResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ArchiveClassificationLocationError](src/Divvy/Errors/ArchiveClassificationLocationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationAccountingClassBulkResponseDto&gt; BulkArchiveClassificationAccountingClass(BulkArchiveClassificationAccountingClassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive multiple accounting classes with one API request. In the response, the `archived` field for each object is set as `true`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.BulkArchiveClassificationAccountingClass(
        new BulkArchiveClassificationAccountingClassRequest
        {
            Ids = "{{accounting_class_id}}",
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
        });
    // TODO: Handle 'response' of type ClassificationAccountingClassBulkResponseDto
}
catch (ApiException<BulkArchiveClassificationAccountingClassError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkArchiveClassificationAccountingClassRequest](src/Divvy/Requests/ClassificationsApi/BulkArchiveClassificationAccountingClassRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationAccountingClassBulkResponseDto](src/Divvy/Models/ClassificationAccountingClassBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkArchiveClassificationAccountingClassError](src/Divvy/Errors/BulkArchiveClassificationAccountingClassError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationChartOfAccountsBulkResponseDto&gt; BulkArchiveClassificationChartOfAccounts(BulkArchiveClassificationChartOfAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive multiple chart of accounts with one API request. In the response, the `archived` field for each object is set as `true`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.BulkArchiveClassificationChartOfAccounts(
        new BulkArchiveClassificationChartOfAccountsRequest
        {
            Ids = "{{chart_of_accounts_id}}",
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
        });
    // TODO: Handle 'response' of type ClassificationChartOfAccountsBulkResponseDto
}
catch (ApiException<BulkArchiveClassificationChartOfAccountsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkArchiveClassificationChartOfAccountsRequest](src/Divvy/Requests/ClassificationsApi/BulkArchiveClassificationChartOfAccountsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationChartOfAccountsBulkResponseDto](src/Divvy/Models/ClassificationChartOfAccountsBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkArchiveClassificationChartOfAccountsError](src/Divvy/Errors/BulkArchiveClassificationChartOfAccountsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationDepartmentBulkResponseDto&gt; BulkArchiveClassificationDepartment(BulkArchiveClassificationDepartmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive multiple departments with one API request. In the response, the `archived` field is set as `true`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.BulkArchiveClassificationDepartment(
        new BulkArchiveClassificationDepartmentRequest
        {
            Ids = "{{department_id}}",
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
        });
    // TODO: Handle 'response' of type ClassificationDepartmentBulkResponseDto
}
catch (ApiException<BulkArchiveClassificationDepartmentError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkArchiveClassificationDepartmentRequest](src/Divvy/Requests/ClassificationsApi/BulkArchiveClassificationDepartmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationDepartmentBulkResponseDto](src/Divvy/Models/ClassificationDepartmentBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkArchiveClassificationDepartmentError](src/Divvy/Errors/BulkArchiveClassificationDepartmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationEmployeeBulkResponseDto&gt; BulkArchiveClassificationEmployee(BulkArchiveClassificationEmployeeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive multiple employees with one API request. In the response, the `archived` field for each object is set as `true`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.BulkArchiveClassificationEmployee(
        new BulkArchiveClassificationEmployeeRequest
        {
            Ids = "{{employee_id}}",
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
        });
    // TODO: Handle 'response' of type ClassificationEmployeeBulkResponseDto
}
catch (ApiException<BulkArchiveClassificationEmployeeError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkArchiveClassificationEmployeeRequest](src/Divvy/Requests/ClassificationsApi/BulkArchiveClassificationEmployeeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationEmployeeBulkResponseDto](src/Divvy/Models/ClassificationEmployeeBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkArchiveClassificationEmployeeError](src/Divvy/Errors/BulkArchiveClassificationEmployeeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationItemBulkResponseDto&gt; BulkArchiveClassificationItem(BulkArchiveClassificationItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive multiple items with one API request. In the response, the `archived` field for each object is set as `true`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.BulkArchiveClassificationItem(
        new BulkArchiveClassificationItemRequest
        {
            Ids = "{{item_id}}",
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
        });
    // TODO: Handle 'response' of type ClassificationItemBulkResponseDto
}
catch (ApiException<BulkArchiveClassificationItemError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkArchiveClassificationItemRequest](src/Divvy/Requests/ClassificationsApi/BulkArchiveClassificationItemRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationItemBulkResponseDto](src/Divvy/Models/ClassificationItemBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkArchiveClassificationItemError](src/Divvy/Errors/BulkArchiveClassificationItemError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationJobBulkResponseDto&gt; BulkArchiveClassificationJob(BulkArchiveClassificationJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive multiple jobs with one API request. In the response, the `archived` field for each object is set as `true`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.BulkArchiveClassificationJob(new BulkArchiveClassificationJobRequest
    {
        Ids = "{{job_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ClassificationJobBulkResponseDto
}
catch (ApiException<BulkArchiveClassificationJobError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkArchiveClassificationJobRequest](src/Divvy/Requests/ClassificationsApi/BulkArchiveClassificationJobRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationJobBulkResponseDto](src/Divvy/Models/ClassificationJobBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkArchiveClassificationJobError](src/Divvy/Errors/BulkArchiveClassificationJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationLocationBulkResponseDto&gt; BulkArchiveClassificationLocation(BulkArchiveClassificationLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive multiple locations with one API request. In the response, the `archived` field for each object is set as `true`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.BulkArchiveClassificationLocation(
        new BulkArchiveClassificationLocationRequest
        {
            Ids = "{{location_id}}",
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
        });
    // TODO: Handle 'response' of type ClassificationLocationBulkResponseDto
}
catch (ApiException<BulkArchiveClassificationLocationError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkArchiveClassificationLocationRequest](src/Divvy/Requests/ClassificationsApi/BulkArchiveClassificationLocationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationLocationBulkResponseDto](src/Divvy/Models/ClassificationLocationBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkArchiveClassificationLocationError](src/Divvy/Errors/BulkArchiveClassificationLocationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationAccountingClassBulkResponseDto&gt; BulkCreateClassificationAccountingClass(BulkCreateClassificationAccountingClassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple accounting classes with one API request. You can create up to 50 accounting classes with one `POST /v3/classifications/accounting-classes/bulk` request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.BulkCreateClassificationAccountingClass(
        new BulkCreateClassificationAccountingClassRequest
        {
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
            Body = [new CreateClassificationAccountingClassRequestDto { Name = "some example string" }],
        });
    // TODO: Handle 'response' of type ClassificationAccountingClassBulkResponseDto
}
catch (ApiException<BulkCreateClassificationAccountingClassError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkCreateClassificationAccountingClassRequest](src/Divvy/Requests/ClassificationsApi/BulkCreateClassificationAccountingClassRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationAccountingClassBulkResponseDto](src/Divvy/Models/ClassificationAccountingClassBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkCreateClassificationAccountingClassError](src/Divvy/Errors/BulkCreateClassificationAccountingClassError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationChartOfAccountsBulkResponseDto&gt; BulkCreateClassificationChartOfAccounts(BulkCreateClassificationChartOfAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple chart of accounts with one API request. You can create up to 50 chart of accounts with one `POST /v3/classifications/chart-of-accounts/bulk` request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.BulkCreateClassificationChartOfAccounts(
        new BulkCreateClassificationChartOfAccountsRequest
        {
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
            Body = [new CreateClassificationChartOfAccountsRequestDto { Name = "some example string" }],
        });
    // TODO: Handle 'response' of type ClassificationChartOfAccountsBulkResponseDto
}
catch (ApiException<BulkCreateClassificationChartOfAccountsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkCreateClassificationChartOfAccountsRequest](src/Divvy/Requests/ClassificationsApi/BulkCreateClassificationChartOfAccountsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationChartOfAccountsBulkResponseDto](src/Divvy/Models/ClassificationChartOfAccountsBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkCreateClassificationChartOfAccountsError](src/Divvy/Errors/BulkCreateClassificationChartOfAccountsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationDepartmentBulkResponseDto&gt; BulkCreateClassificationDepartment(BulkCreateClassificationDepartmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple departments with one API request. You can create up to 50 departments with one `POST /v3/classifications/departments/bulk` request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.BulkCreateClassificationDepartment(
        new BulkCreateClassificationDepartmentRequest
        {
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
            Body = [new CreateClassificationDepartmentRequestDto { Name = "some example string" }],
        });
    // TODO: Handle 'response' of type ClassificationDepartmentBulkResponseDto
}
catch (ApiException<BulkCreateClassificationDepartmentError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkCreateClassificationDepartmentRequest](src/Divvy/Requests/ClassificationsApi/BulkCreateClassificationDepartmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationDepartmentBulkResponseDto](src/Divvy/Models/ClassificationDepartmentBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkCreateClassificationDepartmentError](src/Divvy/Errors/BulkCreateClassificationDepartmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationEmployeeBulkResponseDto&gt; BulkCreateClassificationEmployee(BulkCreateClassificationEmployeeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple employees with one API request. You can create up to 50 employees with one `POST /v3/classifications/employees/bulk` request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.BulkCreateClassificationEmployee(
        new BulkCreateClassificationEmployeeRequest
        {
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
            Body = [
                new CreateClassificationEmployeeRequestDto
                {
                    FirstName = "some example string",
                    LastName = "some example string",
                },
            ],
        });
    // TODO: Handle 'response' of type ClassificationEmployeeBulkResponseDto
}
catch (ApiException<BulkCreateClassificationEmployeeError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkCreateClassificationEmployeeRequest](src/Divvy/Requests/ClassificationsApi/BulkCreateClassificationEmployeeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationEmployeeBulkResponseDto](src/Divvy/Models/ClassificationEmployeeBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkCreateClassificationEmployeeError](src/Divvy/Errors/BulkCreateClassificationEmployeeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationItemBulkResponseDto&gt; BulkCreateClassificationItem(BulkCreateClassificationItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple items with one API request. You can create up to 50 items with one `POST /v3/classifications/items/bulk` request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.BulkCreateClassificationItem(new BulkCreateClassificationItemRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = [
            new CreateClassificationItemRequestDto { Type = ItemTypeRequest.Unknown, Name = "some example string" },
        ],
    });
    // TODO: Handle 'response' of type ClassificationItemBulkResponseDto
}
catch (ApiException<BulkCreateClassificationItemError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkCreateClassificationItemRequest](src/Divvy/Requests/ClassificationsApi/BulkCreateClassificationItemRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationItemBulkResponseDto](src/Divvy/Models/ClassificationItemBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkCreateClassificationItemError](src/Divvy/Errors/BulkCreateClassificationItemError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationJobBulkResponseDto&gt; BulkCreateClassificationJob(BulkCreateClassificationJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple jobs with one API request. You can create up to 50 jobs with one `POST /v3/classifications/jobs/bulk` request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.BulkCreateClassificationJob(new BulkCreateClassificationJobRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = [new CreateClassificationJobRequestDto { Name = "some example string" }],
    });
    // TODO: Handle 'response' of type ClassificationJobBulkResponseDto
}
catch (ApiException<BulkCreateClassificationJobError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkCreateClassificationJobRequest](src/Divvy/Requests/ClassificationsApi/BulkCreateClassificationJobRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationJobBulkResponseDto](src/Divvy/Models/ClassificationJobBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkCreateClassificationJobError](src/Divvy/Errors/BulkCreateClassificationJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationLocationBulkResponseDto&gt; BulkCreateClassificationLocation(BulkCreateClassificationLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple locations with one API request. You can create up to 50 locations with one `POST /v3/classifications/locations/bulk` request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.BulkCreateClassificationLocation(
        new BulkCreateClassificationLocationRequest
        {
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
            Body = [new CreateClassificationLocationRequestDto { Name = "some example string" }],
        });
    // TODO: Handle 'response' of type ClassificationLocationBulkResponseDto
}
catch (ApiException<BulkCreateClassificationLocationError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkCreateClassificationLocationRequest](src/Divvy/Requests/ClassificationsApi/BulkCreateClassificationLocationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationLocationBulkResponseDto](src/Divvy/Models/ClassificationLocationBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkCreateClassificationLocationError](src/Divvy/Errors/BulkCreateClassificationLocationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationAccountingClassBulkResponseDto&gt; BulkRestoreClassificationAccountingClass(BulkRestoreClassificationAccountingClassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore multiple accounting classes with one API request. In the response, the `archived` field for each object is set as `false`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.BulkRestoreClassificationAccountingClass(
        new BulkRestoreClassificationAccountingClassRequest
        {
            Ids = "{{accounting_class_id}}",
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
        });
    // TODO: Handle 'response' of type ClassificationAccountingClassBulkResponseDto
}
catch (ApiException<BulkRestoreClassificationAccountingClassError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkRestoreClassificationAccountingClassRequest](src/Divvy/Requests/ClassificationsApi/BulkRestoreClassificationAccountingClassRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationAccountingClassBulkResponseDto](src/Divvy/Models/ClassificationAccountingClassBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkRestoreClassificationAccountingClassError](src/Divvy/Errors/BulkRestoreClassificationAccountingClassError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationChartOfAccountsBulkResponseDto&gt; BulkRestoreClassificationChartOfAccounts(BulkRestoreClassificationChartOfAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore multiple chart of accounts with one API request. In the response, the `archived` field for each object is set as `false`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.BulkRestoreClassificationChartOfAccounts(
        new BulkRestoreClassificationChartOfAccountsRequest
        {
            Ids = "{{chart_of_accounts_id}}",
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
        });
    // TODO: Handle 'response' of type ClassificationChartOfAccountsBulkResponseDto
}
catch (ApiException<BulkRestoreClassificationChartOfAccountsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkRestoreClassificationChartOfAccountsRequest](src/Divvy/Requests/ClassificationsApi/BulkRestoreClassificationChartOfAccountsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationChartOfAccountsBulkResponseDto](src/Divvy/Models/ClassificationChartOfAccountsBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkRestoreClassificationChartOfAccountsError](src/Divvy/Errors/BulkRestoreClassificationChartOfAccountsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationDepartmentBulkResponseDto&gt; BulkRestoreClassificationDepartment(BulkRestoreClassificationDepartmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore multiple departments with one API request. In the response, the `archived` field is set as `false`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.BulkRestoreClassificationDepartment(
        new BulkRestoreClassificationDepartmentRequest
        {
            Ids = "{{department_id}}",
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
        });
    // TODO: Handle 'response' of type ClassificationDepartmentBulkResponseDto
}
catch (ApiException<BulkRestoreClassificationDepartmentError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkRestoreClassificationDepartmentRequest](src/Divvy/Requests/ClassificationsApi/BulkRestoreClassificationDepartmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationDepartmentBulkResponseDto](src/Divvy/Models/ClassificationDepartmentBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkRestoreClassificationDepartmentError](src/Divvy/Errors/BulkRestoreClassificationDepartmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationEmployeeBulkResponseDto&gt; BulkRestoreClassificationEmployee(BulkRestoreClassificationEmployeeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore multiple employees with one API request. In the response, the `archived` field for each object is set as `false`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.BulkRestoreClassificationEmployee(
        new BulkRestoreClassificationEmployeeRequest
        {
            Ids = "{{employee_id}}",
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
        });
    // TODO: Handle 'response' of type ClassificationEmployeeBulkResponseDto
}
catch (ApiException<BulkRestoreClassificationEmployeeError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkRestoreClassificationEmployeeRequest](src/Divvy/Requests/ClassificationsApi/BulkRestoreClassificationEmployeeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationEmployeeBulkResponseDto](src/Divvy/Models/ClassificationEmployeeBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkRestoreClassificationEmployeeError](src/Divvy/Errors/BulkRestoreClassificationEmployeeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationItemBulkResponseDto&gt; BulkRestoreClassificationItem(BulkRestoreClassificationItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore multiple items with one API request. In the response, the `archived` field for each object is set as `false`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.BulkRestoreClassificationItem(
        new BulkRestoreClassificationItemRequest
        {
            Ids = "{{item_id}}",
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
        });
    // TODO: Handle 'response' of type ClassificationItemBulkResponseDto
}
catch (ApiException<BulkRestoreClassificationItemError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkRestoreClassificationItemRequest](src/Divvy/Requests/ClassificationsApi/BulkRestoreClassificationItemRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationItemBulkResponseDto](src/Divvy/Models/ClassificationItemBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkRestoreClassificationItemError](src/Divvy/Errors/BulkRestoreClassificationItemError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationJobBulkResponseDto&gt; BulkRestoreClassificationJob(BulkRestoreClassificationJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore multiple jobs with one API request. In the response, the `archived` field for each object is set as `false`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.BulkRestoreClassificationJob(new BulkRestoreClassificationJobRequest
    {
        Ids = "{{job_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ClassificationJobBulkResponseDto
}
catch (ApiException<BulkRestoreClassificationJobError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkRestoreClassificationJobRequest](src/Divvy/Requests/ClassificationsApi/BulkRestoreClassificationJobRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationJobBulkResponseDto](src/Divvy/Models/ClassificationJobBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkRestoreClassificationJobError](src/Divvy/Errors/BulkRestoreClassificationJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationLocationBulkResponseDto&gt; BulkRestoreClassificationLocation(BulkRestoreClassificationLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore multiple locations with one API request. In the response, the `archived` field for each object is set as `false`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.BulkRestoreClassificationLocation(
        new BulkRestoreClassificationLocationRequest
        {
            Ids = "{{location_id}}",
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
        });
    // TODO: Handle 'response' of type ClassificationLocationBulkResponseDto
}
catch (ApiException<BulkRestoreClassificationLocationError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkRestoreClassificationLocationRequest](src/Divvy/Requests/ClassificationsApi/BulkRestoreClassificationLocationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationLocationBulkResponseDto](src/Divvy/Models/ClassificationLocationBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkRestoreClassificationLocationError](src/Divvy/Errors/BulkRestoreClassificationLocationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationAccountingClassBulkResponseDto&gt; BulkUpdateClassificationAccountingClass(BulkUpdateClassificationAccountingClassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about multiple accounting classes with one API request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.BulkUpdateClassificationAccountingClass(
        new BulkUpdateClassificationAccountingClassRequest
        {
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
            Body = [new UpdateClassificationAccountingClassWithIdRequestDto { Id = "some example string" }],
        });
    // TODO: Handle 'response' of type ClassificationAccountingClassBulkResponseDto
}
catch (ApiException<BulkUpdateClassificationAccountingClassError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkUpdateClassificationAccountingClassRequest](src/Divvy/Requests/ClassificationsApi/BulkUpdateClassificationAccountingClassRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationAccountingClassBulkResponseDto](src/Divvy/Models/ClassificationAccountingClassBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkUpdateClassificationAccountingClassError](src/Divvy/Errors/BulkUpdateClassificationAccountingClassError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationChartOfAccountsBulkResponseDto&gt; BulkUpdateClassificationChartOfAccounts(BulkUpdateClassificationChartOfAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about multiple chart of accounts with one API request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.BulkUpdateClassificationChartOfAccounts(
        new BulkUpdateClassificationChartOfAccountsRequest
        {
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
            Body = [new UpdateClassificationChartOfAccountsWithIdRequestDto { Id = "some example string" }],
        });
    // TODO: Handle 'response' of type ClassificationChartOfAccountsBulkResponseDto
}
catch (ApiException<BulkUpdateClassificationChartOfAccountsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkUpdateClassificationChartOfAccountsRequest](src/Divvy/Requests/ClassificationsApi/BulkUpdateClassificationChartOfAccountsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationChartOfAccountsBulkResponseDto](src/Divvy/Models/ClassificationChartOfAccountsBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkUpdateClassificationChartOfAccountsError](src/Divvy/Errors/BulkUpdateClassificationChartOfAccountsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationDepartmentBulkResponseDto&gt; BulkUpdateClassificationDepartment(BulkUpdateClassificationDepartmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update multiple departments with one API request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.BulkUpdateClassificationDepartment(
        new BulkUpdateClassificationDepartmentRequest
        {
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
            Body = [new UpdateClassificationDepartmentWithIdRequestDto { Id = "some example string" }],
        });
    // TODO: Handle 'response' of type ClassificationDepartmentBulkResponseDto
}
catch (ApiException<BulkUpdateClassificationDepartmentError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkUpdateClassificationDepartmentRequest](src/Divvy/Requests/ClassificationsApi/BulkUpdateClassificationDepartmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationDepartmentBulkResponseDto](src/Divvy/Models/ClassificationDepartmentBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkUpdateClassificationDepartmentError](src/Divvy/Errors/BulkUpdateClassificationDepartmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationEmployeeBulkResponseDto&gt; BulkUpdateClassificationEmployee(BulkUpdateClassificationEmployeeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about multiple employees with one API request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.BulkUpdateClassificationEmployee(
        new BulkUpdateClassificationEmployeeRequest
        {
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
            Body = [new UpdateClassificationEmployeeWithIdRequestDto { Id = "some example string" }],
        });
    // TODO: Handle 'response' of type ClassificationEmployeeBulkResponseDto
}
catch (ApiException<BulkUpdateClassificationEmployeeError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkUpdateClassificationEmployeeRequest](src/Divvy/Requests/ClassificationsApi/BulkUpdateClassificationEmployeeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationEmployeeBulkResponseDto](src/Divvy/Models/ClassificationEmployeeBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkUpdateClassificationEmployeeError](src/Divvy/Errors/BulkUpdateClassificationEmployeeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationItemBulkResponseDto&gt; BulkUpdateClassificationItem(BulkUpdateClassificationItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about multiple items with one API request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.BulkUpdateClassificationItem(new BulkUpdateClassificationItemRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = [new UpdateClassificationItemWithIdRequestDto { Id = "some example string" }],
    });
    // TODO: Handle 'response' of type ClassificationItemBulkResponseDto
}
catch (ApiException<BulkUpdateClassificationItemError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkUpdateClassificationItemRequest](src/Divvy/Requests/ClassificationsApi/BulkUpdateClassificationItemRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationItemBulkResponseDto](src/Divvy/Models/ClassificationItemBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkUpdateClassificationItemError](src/Divvy/Errors/BulkUpdateClassificationItemError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationJobBulkResponseDto&gt; BulkUpdateClassificationJob(BulkUpdateClassificationJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about multiple jobs with one API request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.BulkUpdateClassificationJob(new BulkUpdateClassificationJobRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = [new UpdateClassificationJobWithIdRequestDto { Id = "some example string" }],
    });
    // TODO: Handle 'response' of type ClassificationJobBulkResponseDto
}
catch (ApiException<BulkUpdateClassificationJobError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkUpdateClassificationJobRequest](src/Divvy/Requests/ClassificationsApi/BulkUpdateClassificationJobRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationJobBulkResponseDto](src/Divvy/Models/ClassificationJobBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkUpdateClassificationJobError](src/Divvy/Errors/BulkUpdateClassificationJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationLocationBulkResponseDto&gt; BulkUpdateClassificationLocation(BulkUpdateClassificationLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about multiple locations with one API request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.BulkUpdateClassificationLocation(
        new BulkUpdateClassificationLocationRequest
        {
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
            Body = [new UpdateClassificationLocationWithIdRequestDto { Id = "some example string" }],
        });
    // TODO: Handle 'response' of type ClassificationLocationBulkResponseDto
}
catch (ApiException<BulkUpdateClassificationLocationError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkUpdateClassificationLocationRequest](src/Divvy/Requests/ClassificationsApi/BulkUpdateClassificationLocationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationLocationBulkResponseDto](src/Divvy/Models/ClassificationLocationBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkUpdateClassificationLocationError](src/Divvy/Errors/BulkUpdateClassificationLocationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationAccountingClassResponseDto&gt; CreateClassificationAccountingClass(CreateClassificationAccountingClassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new accounting class.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.CreateClassificationAccountingClass(
        new CreateClassificationAccountingClassRequest
        {
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
            Body = new CreateClassificationAccountingClassRequestDto { Name = "some example string" },
        });
    // TODO: Handle 'response' of type ClassificationAccountingClassResponseDto
}
catch (ApiException<CreateClassificationAccountingClassError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateClassificationAccountingClassRequest](src/Divvy/Requests/ClassificationsApi/CreateClassificationAccountingClassRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationAccountingClassResponseDto](src/Divvy/Models/ClassificationAccountingClassResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateClassificationAccountingClassError](src/Divvy/Errors/CreateClassificationAccountingClassError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationChartOfAccountsResponseDto&gt; CreateClassificationChartOfAccounts(CreateClassificationChartOfAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new chart of accounts.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.CreateClassificationChartOfAccounts(
        new CreateClassificationChartOfAccountsRequest
        {
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
            Body = new CreateClassificationChartOfAccountsRequestDto { Name = "some example string" },
        });
    // TODO: Handle 'response' of type ClassificationChartOfAccountsResponseDto
}
catch (ApiException<CreateClassificationChartOfAccountsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateClassificationChartOfAccountsRequest](src/Divvy/Requests/ClassificationsApi/CreateClassificationChartOfAccountsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationChartOfAccountsResponseDto](src/Divvy/Models/ClassificationChartOfAccountsResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateClassificationChartOfAccountsError](src/Divvy/Errors/CreateClassificationChartOfAccountsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationDepartmentResponseDto&gt; CreateClassificationDepartment(CreateClassificationDepartmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new department.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.CreateClassificationDepartment(
        new CreateClassificationDepartmentRequest
        {
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
            Body = new CreateClassificationDepartmentRequestDto { Name = "some example string" },
        });
    // TODO: Handle 'response' of type ClassificationDepartmentResponseDto
}
catch (ApiException<CreateClassificationDepartmentError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateClassificationDepartmentRequest](src/Divvy/Requests/ClassificationsApi/CreateClassificationDepartmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationDepartmentResponseDto](src/Divvy/Models/ClassificationDepartmentResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateClassificationDepartmentError](src/Divvy/Errors/CreateClassificationDepartmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationEmployeeResponseDto&gt; CreateClassificationEmployee(CreateClassificationEmployeeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new employee.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.CreateClassificationEmployee(new CreateClassificationEmployeeRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new CreateClassificationEmployeeRequestDto
        {
            FirstName = "some example string",
            LastName = "some example string",
        },
    });
    // TODO: Handle 'response' of type ClassificationEmployeeResponseDto
}
catch (ApiException<CreateClassificationEmployeeError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateClassificationEmployeeRequest](src/Divvy/Requests/ClassificationsApi/CreateClassificationEmployeeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationEmployeeResponseDto](src/Divvy/Models/ClassificationEmployeeResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateClassificationEmployeeError](src/Divvy/Errors/CreateClassificationEmployeeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationItemResponseDto&gt; CreateClassificationItem(CreateClassificationItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new item.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.CreateClassificationItem(new CreateClassificationItemRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new CreateClassificationItemRequestDto { Type = ItemTypeRequest.Unknown, Name = "some example string" },
    });
    // TODO: Handle 'response' of type ClassificationItemResponseDto
}
catch (ApiException<CreateClassificationItemError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateClassificationItemRequest](src/Divvy/Requests/ClassificationsApi/CreateClassificationItemRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationItemResponseDto](src/Divvy/Models/ClassificationItemResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateClassificationItemError](src/Divvy/Errors/CreateClassificationItemError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationJobResponseDto&gt; CreateClassificationJob(CreateClassificationJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new job.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.CreateClassificationJob(new CreateClassificationJobRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new CreateClassificationJobRequestDto { Name = "some example string" },
    });
    // TODO: Handle 'response' of type ClassificationJobResponseDto
}
catch (ApiException<CreateClassificationJobError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateClassificationJobRequest](src/Divvy/Requests/ClassificationsApi/CreateClassificationJobRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationJobResponseDto](src/Divvy/Models/ClassificationJobResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateClassificationJobError](src/Divvy/Errors/CreateClassificationJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationLocationResponseDto&gt; CreateClassificationLocation(CreateClassificationLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.CreateClassificationLocation(new CreateClassificationLocationRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new CreateClassificationLocationRequestDto { Name = "some example string" },
    });
    // TODO: Handle 'response' of type ClassificationLocationResponseDto
}
catch (ApiException<CreateClassificationLocationError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateClassificationLocationRequest](src/Divvy/Requests/ClassificationsApi/CreateClassificationLocationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationLocationResponseDto](src/Divvy/Models/ClassificationLocationResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateClassificationLocationError](src/Divvy/Errors/CreateClassificationLocationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationAccountingClassResponseDto&gt; GetClassificationAccountingClass(GetClassificationAccountingClassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing accounting class.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.GetClassificationAccountingClass(
        new GetClassificationAccountingClassRequest
        {
            Id = "{{accounting_class_id}}",
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
        });
    // TODO: Handle 'response' of type ClassificationAccountingClassResponseDto
}
catch (ApiException<GetClassificationAccountingClassError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetClassificationAccountingClassRequest](src/Divvy/Requests/ClassificationsApi/GetClassificationAccountingClassRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationAccountingClassResponseDto](src/Divvy/Models/ClassificationAccountingClassResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetClassificationAccountingClassError](src/Divvy/Errors/GetClassificationAccountingClassError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationChartOfAccountsResponseDto&gt; GetClassificationChartOfAccounts(GetClassificationChartOfAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing chart of accounts.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.GetClassificationChartOfAccounts(
        new GetClassificationChartOfAccountsRequest
        {
            Id = "{{chart_of_accounts_id}}",
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
        });
    // TODO: Handle 'response' of type ClassificationChartOfAccountsResponseDto
}
catch (ApiException<GetClassificationChartOfAccountsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetClassificationChartOfAccountsRequest](src/Divvy/Requests/ClassificationsApi/GetClassificationChartOfAccountsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationChartOfAccountsResponseDto](src/Divvy/Models/ClassificationChartOfAccountsResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetClassificationChartOfAccountsError](src/Divvy/Errors/GetClassificationChartOfAccountsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationDepartmentResponseDto&gt; GetClassificationDepartment(GetClassificationDepartmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing department.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.GetClassificationDepartment(new GetClassificationDepartmentRequest
    {
        Id = "{{department_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ClassificationDepartmentResponseDto
}
catch (ApiException<GetClassificationDepartmentError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetClassificationDepartmentRequest](src/Divvy/Requests/ClassificationsApi/GetClassificationDepartmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationDepartmentResponseDto](src/Divvy/Models/ClassificationDepartmentResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetClassificationDepartmentError](src/Divvy/Errors/GetClassificationDepartmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationEmployeeResponseDto&gt; GetClassificationEmployee(GetClassificationEmployeeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing employee.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.GetClassificationEmployee(new GetClassificationEmployeeRequest
    {
        Id = "{{employee_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ClassificationEmployeeResponseDto
}
catch (ApiException<GetClassificationEmployeeError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetClassificationEmployeeRequest](src/Divvy/Requests/ClassificationsApi/GetClassificationEmployeeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationEmployeeResponseDto](src/Divvy/Models/ClassificationEmployeeResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetClassificationEmployeeError](src/Divvy/Errors/GetClassificationEmployeeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationItemResponseDto&gt; GetClassificationItem(GetClassificationItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing item.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.GetClassificationItem(new GetClassificationItemRequest
    {
        Id = "{{item_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ClassificationItemResponseDto
}
catch (ApiException<GetClassificationItemError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetClassificationItemRequest](src/Divvy/Requests/ClassificationsApi/GetClassificationItemRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationItemResponseDto](src/Divvy/Models/ClassificationItemResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetClassificationItemError](src/Divvy/Errors/GetClassificationItemError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationJobResponseDto&gt; GetClassificationJob(GetClassificationJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing job.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.GetClassificationJob(new GetClassificationJobRequest
    {
        Id = "{{job_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ClassificationJobResponseDto
}
catch (ApiException<GetClassificationJobError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetClassificationJobRequest](src/Divvy/Requests/ClassificationsApi/GetClassificationJobRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationJobResponseDto](src/Divvy/Models/ClassificationJobResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetClassificationJobError](src/Divvy/Errors/GetClassificationJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationLocationResponseDto&gt; GetClassificationLocation(GetClassificationLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.GetClassificationLocation(new GetClassificationLocationRequest
    {
        Id = "{{location_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ClassificationLocationResponseDto
}
catch (ApiException<GetClassificationLocationError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetClassificationLocationRequest](src/Divvy/Requests/ClassificationsApi/GetClassificationLocationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationLocationResponseDto](src/Divvy/Models/ClassificationLocationResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetClassificationLocationError](src/Divvy/Errors/GetClassificationLocationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListResponseDtoClassificationAccountingClassResponseDto&gt; ListClassificationAccountingClasses(ListClassificationAccountingClassesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of accounting class objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.ListClassificationAccountingClasses(
        new ListClassificationAccountingClassesRequest
        {
            Max = 10,
            Sort = "createdTime:desc",
            Filters = "id:eq:{{accounting_class_id}}",
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
        });
    // TODO: Handle 'response' of type ListResponseDtoClassificationAccountingClassResponseDto
}
catch (ApiException<ListClassificationAccountingClassesError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListClassificationAccountingClassesRequest](src/Divvy/Requests/ClassificationsApi/ListClassificationAccountingClassesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoClassificationAccountingClassResponseDto](src/Divvy/Models/ListResponseDtoClassificationAccountingClassResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListClassificationAccountingClassesError](src/Divvy/Errors/ListClassificationAccountingClassesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListResponseDtoClassificationChartOfAccountsResponseDto&gt; ListClassificationChartOfAccounts(ListClassificationChartOfAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of chart of accounts objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.ListClassificationChartOfAccounts(
        new ListClassificationChartOfAccountsRequest
        {
            Max = 10,
            Sort = "createdTime:desc",
            Filters = "id:eq:{{chart_of_accounts_id}}",
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
        });
    // TODO: Handle 'response' of type ListResponseDtoClassificationChartOfAccountsResponseDto
}
catch (ApiException<ListClassificationChartOfAccountsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListClassificationChartOfAccountsRequest](src/Divvy/Requests/ClassificationsApi/ListClassificationChartOfAccountsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoClassificationChartOfAccountsResponseDto](src/Divvy/Models/ListResponseDtoClassificationChartOfAccountsResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListClassificationChartOfAccountsError](src/Divvy/Errors/ListClassificationChartOfAccountsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListResponseDtoClassificationDepartmentResponseDto&gt; ListClassificationDepartments(ListClassificationDepartmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of department objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.ListClassificationDepartments(
        new ListClassificationDepartmentsRequest
        {
            Max = 10,
            Sort = "createdTime:desc",
            Filters = "id:eq:{{department_id}}",
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
        });
    // TODO: Handle 'response' of type ListResponseDtoClassificationDepartmentResponseDto
}
catch (ApiException<ListClassificationDepartmentsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListClassificationDepartmentsRequest](src/Divvy/Requests/ClassificationsApi/ListClassificationDepartmentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoClassificationDepartmentResponseDto](src/Divvy/Models/ListResponseDtoClassificationDepartmentResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListClassificationDepartmentsError](src/Divvy/Errors/ListClassificationDepartmentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListResponseDtoClassificationEmployeeResponseDto&gt; ListClassificationEmployees(ListClassificationEmployeesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of employee objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.ListClassificationEmployees(new ListClassificationEmployeesRequest
    {
        Max = 10,
        Sort = "createdTime:desc",
        Filters = "id:eq:{{employee_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ListResponseDtoClassificationEmployeeResponseDto
}
catch (ApiException<ListClassificationEmployeesError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListClassificationEmployeesRequest](src/Divvy/Requests/ClassificationsApi/ListClassificationEmployeesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoClassificationEmployeeResponseDto](src/Divvy/Models/ListResponseDtoClassificationEmployeeResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListClassificationEmployeesError](src/Divvy/Errors/ListClassificationEmployeesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListResponseDtoClassificationItemResponseDto&gt; ListClassificationItems(ListClassificationItemsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of item objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.ListClassificationItems(new ListClassificationItemsRequest
    {
        Max = 10,
        Sort = "createdTime:desc",
        Filters = "id:eq:{{item_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ListResponseDtoClassificationItemResponseDto
}
catch (ApiException<ListClassificationItemsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListClassificationItemsRequest](src/Divvy/Requests/ClassificationsApi/ListClassificationItemsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoClassificationItemResponseDto](src/Divvy/Models/ListResponseDtoClassificationItemResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListClassificationItemsError](src/Divvy/Errors/ListClassificationItemsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListResponseDtoClassificationJobResponseDto&gt; ListClassificationJobs(ListClassificationJobsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of job objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.ListClassificationJobs(new ListClassificationJobsRequest
    {
        Max = 10,
        Sort = "createdTime:desc",
        Filters = "id:eq:{{job_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ListResponseDtoClassificationJobResponseDto
}
catch (ApiException<ListClassificationJobsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListClassificationJobsRequest](src/Divvy/Requests/ClassificationsApi/ListClassificationJobsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoClassificationJobResponseDto](src/Divvy/Models/ListResponseDtoClassificationJobResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListClassificationJobsError](src/Divvy/Errors/ListClassificationJobsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListResponseDtoClassificationLocationResponseDto&gt; ListClassificationLocations(ListClassificationLocationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of location objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.ListClassificationLocations(new ListClassificationLocationsRequest
    {
        Max = 10,
        Sort = "createdTime:desc",
        Filters = "id:eq:{{location_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ListResponseDtoClassificationLocationResponseDto
}
catch (ApiException<ListClassificationLocationsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListClassificationLocationsRequest](src/Divvy/Requests/ClassificationsApi/ListClassificationLocationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoClassificationLocationResponseDto](src/Divvy/Models/ListResponseDtoClassificationLocationResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListClassificationLocationsError](src/Divvy/Errors/ListClassificationLocationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationAccountingClassResponseDto&gt; RestoreClassificationAccountingClass(RestoreClassificationAccountingClassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived accounting class. In the response, the `archived` field is set as `false`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.RestoreClassificationAccountingClass(
        new RestoreClassificationAccountingClassRequest
        {
            Id = "{{accounting_class_id}}",
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
        });
    // TODO: Handle 'response' of type ClassificationAccountingClassResponseDto
}
catch (ApiException<RestoreClassificationAccountingClassError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RestoreClassificationAccountingClassRequest](src/Divvy/Requests/ClassificationsApi/RestoreClassificationAccountingClassRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationAccountingClassResponseDto](src/Divvy/Models/ClassificationAccountingClassResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[RestoreClassificationAccountingClassError](src/Divvy/Errors/RestoreClassificationAccountingClassError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationChartOfAccountsResponseDto&gt; RestoreClassificationChartOfAccounts(RestoreClassificationChartOfAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived chart of accounts. In the response, the `archived` field is set as `false`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.RestoreClassificationChartOfAccounts(
        new RestoreClassificationChartOfAccountsRequest
        {
            Id = "{{chart_of_accounts_id}}",
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
        });
    // TODO: Handle 'response' of type ClassificationChartOfAccountsResponseDto
}
catch (ApiException<RestoreClassificationChartOfAccountsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RestoreClassificationChartOfAccountsRequest](src/Divvy/Requests/ClassificationsApi/RestoreClassificationChartOfAccountsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationChartOfAccountsResponseDto](src/Divvy/Models/ClassificationChartOfAccountsResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[RestoreClassificationChartOfAccountsError](src/Divvy/Errors/RestoreClassificationChartOfAccountsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationDepartmentResponseDto&gt; RestoreClassificationDepartment(RestoreClassificationDepartmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived department. In the response, the `archived` field is set as `false`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.RestoreClassificationDepartment(
        new RestoreClassificationDepartmentRequest
        {
            Id = "{{department_id}}",
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
        });
    // TODO: Handle 'response' of type ClassificationDepartmentResponseDto
}
catch (ApiException<RestoreClassificationDepartmentError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RestoreClassificationDepartmentRequest](src/Divvy/Requests/ClassificationsApi/RestoreClassificationDepartmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationDepartmentResponseDto](src/Divvy/Models/ClassificationDepartmentResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[RestoreClassificationDepartmentError](src/Divvy/Errors/RestoreClassificationDepartmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationEmployeeResponseDto&gt; RestoreClassificationEmployee(RestoreClassificationEmployeeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived employee. In the response, the `archived` field is set as `false`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.RestoreClassificationEmployee(
        new RestoreClassificationEmployeeRequest
        {
            Id = "{{employee_id}}",
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
        });
    // TODO: Handle 'response' of type ClassificationEmployeeResponseDto
}
catch (ApiException<RestoreClassificationEmployeeError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RestoreClassificationEmployeeRequest](src/Divvy/Requests/ClassificationsApi/RestoreClassificationEmployeeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationEmployeeResponseDto](src/Divvy/Models/ClassificationEmployeeResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[RestoreClassificationEmployeeError](src/Divvy/Errors/RestoreClassificationEmployeeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationItemResponseDto&gt; RestoreClassificationItem(RestoreClassificationItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived item. In the response, the `archived` field is set as `false`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.RestoreClassificationItem(new RestoreClassificationItemRequest
    {
        Id = "{{item_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ClassificationItemResponseDto
}
catch (ApiException<RestoreClassificationItemError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RestoreClassificationItemRequest](src/Divvy/Requests/ClassificationsApi/RestoreClassificationItemRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationItemResponseDto](src/Divvy/Models/ClassificationItemResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[RestoreClassificationItemError](src/Divvy/Errors/RestoreClassificationItemError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationJobResponseDto&gt; RestoreClassificationJob(RestoreClassificationJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived job. In the response, the `archived` field is set as `false`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.RestoreClassificationJob(new RestoreClassificationJobRequest
    {
        Id = "{{job_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ClassificationJobResponseDto
}
catch (ApiException<RestoreClassificationJobError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RestoreClassificationJobRequest](src/Divvy/Requests/ClassificationsApi/RestoreClassificationJobRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationJobResponseDto](src/Divvy/Models/ClassificationJobResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[RestoreClassificationJobError](src/Divvy/Errors/RestoreClassificationJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationLocationResponseDto&gt; RestoreClassificationLocation(RestoreClassificationLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived location. In the response, the `archived` field is set as `false`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.RestoreClassificationLocation(
        new RestoreClassificationLocationRequest
        {
            Id = "{{location_id}}",
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
        });
    // TODO: Handle 'response' of type ClassificationLocationResponseDto
}
catch (ApiException<RestoreClassificationLocationError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RestoreClassificationLocationRequest](src/Divvy/Requests/ClassificationsApi/RestoreClassificationLocationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationLocationResponseDto](src/Divvy/Models/ClassificationLocationResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[RestoreClassificationLocationError](src/Divvy/Errors/RestoreClassificationLocationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationAccountingClassResponseDto&gt; UpdateClassificationAccountingClass(UpdateClassificationAccountingClassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing accounting class.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.UpdateClassificationAccountingClass(
        new UpdateClassificationAccountingClassRequest
        {
            Id = "{{accounting_class_id}}",
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
            Body = new UpdateClassificationAccountingClassRequestDto(),
        });
    // TODO: Handle 'response' of type ClassificationAccountingClassResponseDto
}
catch (ApiException<UpdateClassificationAccountingClassError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateClassificationAccountingClassRequest](src/Divvy/Requests/ClassificationsApi/UpdateClassificationAccountingClassRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationAccountingClassResponseDto](src/Divvy/Models/ClassificationAccountingClassResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[UpdateClassificationAccountingClassError](src/Divvy/Errors/UpdateClassificationAccountingClassError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationChartOfAccountsResponseDto&gt; UpdateClassificationChartOfAccounts(UpdateClassificationChartOfAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing chart of accounts.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.UpdateClassificationChartOfAccounts(
        new UpdateClassificationChartOfAccountsRequest
        {
            Id = "{{chart_of_accounts_id}}",
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
            Body = new UpdateClassificationChartOfAccountsRequestDto(),
        });
    // TODO: Handle 'response' of type ClassificationChartOfAccountsResponseDto
}
catch (ApiException<UpdateClassificationChartOfAccountsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateClassificationChartOfAccountsRequest](src/Divvy/Requests/ClassificationsApi/UpdateClassificationChartOfAccountsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationChartOfAccountsResponseDto](src/Divvy/Models/ClassificationChartOfAccountsResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[UpdateClassificationChartOfAccountsError](src/Divvy/Errors/UpdateClassificationChartOfAccountsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationDepartmentResponseDto&gt; UpdateClassificationDepartment(UpdateClassificationDepartmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing department.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.UpdateClassificationDepartment(
        new UpdateClassificationDepartmentRequest
        {
            Id = "{{department_id}}",
            SessionId = "{{session_id}}",
            DevKey = "{{developer_key}}",
            Body = new UpdateClassificationDepartmentRequestDto(),
        });
    // TODO: Handle 'response' of type ClassificationDepartmentResponseDto
}
catch (ApiException<UpdateClassificationDepartmentError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateClassificationDepartmentRequest](src/Divvy/Requests/ClassificationsApi/UpdateClassificationDepartmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationDepartmentResponseDto](src/Divvy/Models/ClassificationDepartmentResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[UpdateClassificationDepartmentError](src/Divvy/Errors/UpdateClassificationDepartmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationEmployeeResponseDto&gt; UpdateClassificationEmployee(UpdateClassificationEmployeeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing employee.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.UpdateClassificationEmployee(new UpdateClassificationEmployeeRequest
    {
        Id = "{{employee_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new UpdateClassificationEmployeeRequestDto(),
    });
    // TODO: Handle 'response' of type ClassificationEmployeeResponseDto
}
catch (ApiException<UpdateClassificationEmployeeError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateClassificationEmployeeRequest](src/Divvy/Requests/ClassificationsApi/UpdateClassificationEmployeeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationEmployeeResponseDto](src/Divvy/Models/ClassificationEmployeeResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[UpdateClassificationEmployeeError](src/Divvy/Errors/UpdateClassificationEmployeeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationItemResponseDto&gt; UpdateClassificationItem(UpdateClassificationItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing item.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.UpdateClassificationItem(new UpdateClassificationItemRequest
    {
        Id = "{{item_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new UpdateClassificationItemRequestDto(),
    });
    // TODO: Handle 'response' of type ClassificationItemResponseDto
}
catch (ApiException<UpdateClassificationItemError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateClassificationItemRequest](src/Divvy/Requests/ClassificationsApi/UpdateClassificationItemRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationItemResponseDto](src/Divvy/Models/ClassificationItemResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[UpdateClassificationItemError](src/Divvy/Errors/UpdateClassificationItemError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationJobResponseDto&gt; UpdateClassificationJob(UpdateClassificationJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing job.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.UpdateClassificationJob(new UpdateClassificationJobRequest
    {
        Id = "{{job_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new UpdateClassificationJobRequestDto(),
    });
    // TODO: Handle 'response' of type ClassificationJobResponseDto
}
catch (ApiException<UpdateClassificationJobError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateClassificationJobRequest](src/Divvy/Requests/ClassificationsApi/UpdateClassificationJobRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationJobResponseDto](src/Divvy/Models/ClassificationJobResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[UpdateClassificationJobError](src/Divvy/Errors/UpdateClassificationJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationLocationResponseDto&gt; UpdateClassificationLocation(UpdateClassificationLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClassificationsApi.UpdateClassificationLocation(new UpdateClassificationLocationRequest
    {
        Id = "{{location_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new UpdateClassificationLocationRequestDto(),
    });
    // TODO: Handle 'response' of type ClassificationLocationResponseDto
}
catch (ApiException<UpdateClassificationLocationError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateClassificationLocationRequest](src/Divvy/Requests/ClassificationsApi/UpdateClassificationLocationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationLocationResponseDto](src/Divvy/Models/ClassificationLocationResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[UpdateClassificationLocationError](src/Divvy/Errors/UpdateClassificationLocationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CustomFields

> Source: [CustomFields](src/Divvy/Api/CustomFields.cs)

<details>
<summary><code>Task&lt;CustomFieldResponseDto&gt; CreateCustomField(CreateCustomFieldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new custom field.

See Transactions in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomFields.CreateCustomField(new CreateCustomFieldRequest
    {
        ApiToken = "{{api_token}}",
        Body = new CreateCustomFieldRequestDto
        {
            Name = "some example string",
            AllowCustomValues = true,
            Required = true,
            Global = true,
        },
    });
    // TODO: Handle 'response' of type CustomFieldResponseDto
}
catch (ApiException<CreateCustomFieldError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateCustomFieldRequest](src/Divvy/Requests/CustomFields/CreateCustomFieldRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomFieldResponseDto](src/Divvy/Models/CustomFieldResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateCustomFieldError](src/Divvy/Errors/CreateCustomFieldError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;CustomFieldValueResponseDto&gt;&gt; CreateCustomFieldValues(CreateCustomFieldValuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new value for an existing custom field.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomFields.CreateCustomFieldValues(new CreateCustomFieldValuesRequest
    {
        CustomFieldId = "{{se_custom_field_uuid}}",
        ApiToken = "{{api_token}}",
        Body = new CreateCustomFieldValueRequestDto { Values = ["some example string"] },
    });
    // TODO: Handle 'response' of type IReadOnlyList<CustomFieldValueResponseDto>
}
catch (ApiException<CreateCustomFieldValuesError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateCustomFieldValuesRequest](src/Divvy/Requests/CustomFields/CreateCustomFieldValuesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[CustomFieldValueResponseDto](src/Divvy/Models/CustomFieldValueResponseDto.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateCustomFieldValuesError](src/Divvy/Errors/CreateCustomFieldValuesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteCustomField(DeleteCustomFieldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an existing custom field. A deleted custom field cannot be restored. The deleted custom field is not available in the list of custom fields.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CustomFields.DeleteCustomField(new DeleteCustomFieldRequest
    {
        CustomFieldId = "{{se_custom_field_uuid}}",
        ApiToken = "{{api_token}}",
    });
}
catch (ApiException<DeleteCustomFieldError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteCustomFieldRequest](src/Divvy/Requests/CustomFields/DeleteCustomFieldRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[DeleteCustomFieldError](src/Divvy/Errors/DeleteCustomFieldError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteCustomFieldValue(DeleteCustomFieldValueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an existing custom field value.

A deleted value cannot be restored. The deleted value is not available in the list of custom field values. In addition, the deleted value cannot be assigned to current or future transactions. The deleted value will continue to be assigned to past transactions.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CustomFields.DeleteCustomFieldValue(new DeleteCustomFieldValueRequest
    {
        CustomFieldId = "{{se_custom_field_uuid}}",
        ApiToken = "{{api_token}}",
        Body = new DeleteCustomFieldValuesRequestDto { CustomFieldValueIds = ["some example string"] },
    });
}
catch (ApiException<DeleteCustomFieldValueError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteCustomFieldValueRequest](src/Divvy/Requests/CustomFields/DeleteCustomFieldValueRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[DeleteCustomFieldValueError](src/Divvy/Errors/DeleteCustomFieldValueError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomFieldResponseDto&gt; GetCustomField(GetCustomFieldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing custom field.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomFields.GetCustomField(new GetCustomFieldRequest
    {
        CustomFieldId = "{{se_custom_field_uuid}}",
        ApiToken = "{{api_token}}",
    });
    // TODO: Handle 'response' of type CustomFieldResponseDto
}
catch (ApiException<GetCustomFieldError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCustomFieldRequest](src/Divvy/Requests/CustomFields/GetCustomFieldRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomFieldResponseDto](src/Divvy/Models/CustomFieldResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetCustomFieldError](src/Divvy/Errors/GetCustomFieldError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomFieldValueResponseDto&gt; GetCustomFieldValues(GetCustomFieldValuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing custom field value.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomFields.GetCustomFieldValues(new GetCustomFieldValuesRequest
    {
        CustomFieldId = "{{se_custom_field_uuid}}",
        CustomFieldValueId = "{{se_custom_field_value_uuid01}}",
        ApiToken = "{{api_token}}",
    });
    // TODO: Handle 'response' of type CustomFieldValueResponseDto
}
catch (ApiException<GetCustomFieldValuesError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCustomFieldValuesRequest](src/Divvy/Requests/CustomFields/GetCustomFieldValuesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomFieldValueResponseDto](src/Divvy/Models/CustomFieldValueResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetCustomFieldValuesError](src/Divvy/Errors/GetCustomFieldValuesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginationResponseDtoCustomFieldValueResponseDto&gt; ListCustomFieldValues(ListCustomFieldValuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of custom field value objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomFields.ListCustomFieldValues(new ListCustomFieldValuesRequest
    {
        CustomFieldId = "{{se_custom_field_uuid}}",
        Max = 10L,
        Filters = "retired:eq:false",
        ApiToken = "{{api_token}}",
    });
    // TODO: Handle 'response' of type PaginationResponseDtoCustomFieldValueResponseDto
}
catch (ApiException<ListCustomFieldValuesError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCustomFieldValuesRequest](src/Divvy/Requests/CustomFields/ListCustomFieldValuesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginationResponseDtoCustomFieldValueResponseDto](src/Divvy/Models/PaginationResponseDtoCustomFieldValueResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListCustomFieldValuesError](src/Divvy/Errors/ListCustomFieldValuesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginationResponseDtoCustomFieldResponseDto&gt; ListCustomFields(ListCustomFieldsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of custom field objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomFields.ListCustomFields(new ListCustomFieldsRequest
    {
        Max = 10L,
        Sort = "createdTime:desc",
        Filters = "retired:eq:false",
        ApiToken = "{{api_token}}",
    });
    // TODO: Handle 'response' of type PaginationResponseDtoCustomFieldResponseDto
}
catch (ApiException<ListCustomFieldsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCustomFieldsRequest](src/Divvy/Requests/CustomFields/ListCustomFieldsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginationResponseDtoCustomFieldResponseDto](src/Divvy/Models/PaginationResponseDtoCustomFieldResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListCustomFieldsError](src/Divvy/Errors/ListCustomFieldsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomFieldResponseDto&gt; UpdateCustomField(UpdateCustomFieldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing custom field.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomFields.UpdateCustomField(new UpdateCustomFieldRequest
    {
        CustomFieldId = "{{se_custom_field_uuid}}",
        ApiToken = "{{api_token}}",
        Body = new UpdateCustomFieldRequestDto(),
    });
    // TODO: Handle 'response' of type CustomFieldResponseDto
}
catch (ApiException<UpdateCustomFieldError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateCustomFieldRequest](src/Divvy/Requests/CustomFields/UpdateCustomFieldRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomFieldResponseDto](src/Divvy/Models/CustomFieldResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[UpdateCustomFieldError](src/Divvy/Errors/UpdateCustomFieldError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Customers

> Source: [Customers](src/Divvy/Api/Customers.cs)

<details>
<summary><code>Task&lt;CustomerResponseDto&gt; ArchiveCustomer(ArchiveCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing customer. In the response, the `archived` field is set as `true`.

You can restore an archived customer with `POST /v3/customers/{customerId}/restore`. There is no change when you archive an archived customer.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.ArchiveCustomer(new ArchiveCustomerRequest
    {
        CustomerId = "{{customer_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type CustomerResponseDto
}
catch (ApiException<ArchiveCustomerError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ArchiveCustomerRequest](src/Divvy/Requests/Customers/ArchiveCustomerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerResponseDto](src/Divvy/Models/CustomerResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ArchiveCustomerError](src/Divvy/Errors/ArchiveCustomerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomerBankAccountResponseDto&gt; ArchiveCustomerBankAccount(ArchiveCustomerBankAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing customer bank account. In the response, the `archived` field is set as `true`. An archived customer bank account cannot be restored.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.ArchiveCustomerBankAccount(new ArchiveCustomerBankAccountRequest
    {
        CustomerId = "{{customer_id}}",
        BankAccountId = "{{customer_bank_account_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type CustomerBankAccountResponseDto
}
catch (ApiException<ArchiveCustomerBankAccountError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ArchiveCustomerBankAccountRequest](src/Divvy/Requests/Customers/ArchiveCustomerBankAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerBankAccountResponseDto](src/Divvy/Models/CustomerBankAccountResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ArchiveCustomerBankAccountError](src/Divvy/Errors/ArchiveCustomerBankAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomerContactResponseDto&gt; ArchiveCustomerContact(ArchiveCustomerContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing customer contact. In the response, the `archived` field is set as `true`.

You can restore an archived customer with `POST /v3/customers/{customerId}/contacts/{contactId}/restore`. There is no change when you archive an archived customer contact.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.ArchiveCustomerContact(new ArchiveCustomerContactRequest
    {
        CustomerId = "{{customer_id}}",
        ContactId = "{{customer_contact_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type CustomerContactResponseDto
}
catch (ApiException<ArchiveCustomerContactError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ArchiveCustomerContactRequest](src/Divvy/Requests/Customers/ArchiveCustomerContactRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerContactResponseDto](src/Divvy/Models/CustomerContactResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ArchiveCustomerContactError](src/Divvy/Errors/ArchiveCustomerContactError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ChargeAuthorizationResponseDto&gt; AuthorizeToChargeCustomer(AuthorizeToChargeCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Authorize your organization to charge a customer for invoices.

By default, your organization is not authorized to charge a customer. The customer `authorizedToCharge` field must be set as `true` for you to charge the customer for invoices.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.AuthorizeToChargeCustomer(new AuthorizeToChargeCustomerRequest
    {
        CustomerId = "{{customer_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new ChargeAuthorizationRequestDto { AuthorizedToCharge = true },
    });
    // TODO: Handle 'response' of type ChargeAuthorizationResponseDto
}
catch (ApiException<AuthorizeToChargeCustomerError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AuthorizeToChargeCustomerRequest](src/Divvy/Requests/Customers/AuthorizeToChargeCustomerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ChargeAuthorizationResponseDto](src/Divvy/Models/ChargeAuthorizationResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[AuthorizeToChargeCustomerError](src/Divvy/Errors/AuthorizeToChargeCustomerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomerResponseDto&gt; CreateCustomer(CreateCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new customer.

See Customers in the Guides section for more information, sample requests, and responses.

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
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new CustomerCreateRequestDto { Name = "some example string", Email = "some example string" },
    });
    // TODO: Handle 'response' of type CustomerResponseDto
}
catch (ApiException<CreateCustomerError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateCustomerRequest](src/Divvy/Requests/Customers/CreateCustomerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerResponseDto](src/Divvy/Models/CustomerResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateCustomerError](src/Divvy/Errors/CreateCustomerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomerBankAccountResponseDto&gt; CreateCustomerBankAccount(CreateCustomerBankAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new customer bank account. When you add customer bank account information, you can charge the customer for invoices.

Creating a customer bank account follows a set of rules.
* **Customer billing address**: The customer `billingAddress` information is required before you can create a customer bank account.
* **Customer bank account verification**: If the customer bank account requires verification, BILL requires up to 2 business days to complete a one-time verification of the bank account.

**Note**: When you add a customer bank account in the production environment, BILL validates the customer routing number before you can charge the customer. You will get an error message if the customer routing number is invalid in production.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.CreateCustomerBankAccount(new CreateCustomerBankAccountRequest
    {
        CustomerId = "{{customer_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new CreateCustomerBankAccountRequestDto
        {
            NameOnAccount = "some example string",
            RoutingNumber = "some example string",
            AccountNumber = "some example string",
            Type = BankAccountType.Checking,
            OwnerType = BankAccountOwnerType.Business,
        },
    });
    // TODO: Handle 'response' of type CustomerBankAccountResponseDto
}
catch (ApiException<CreateCustomerBankAccountError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateCustomerBankAccountRequest](src/Divvy/Requests/Customers/CreateCustomerBankAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerBankAccountResponseDto](src/Divvy/Models/CustomerBankAccountResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateCustomerBankAccountError](src/Divvy/Errors/CreateCustomerBankAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomerContactResponseDto&gt; CreateCustomerContact(CreateCustomerContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new customer contact.

When you create a customer contact, BILL enables the customer to sign in to the BILL web app with the `email` value and a random password. The signed-in customer can view invoices, make payments, and manage their account.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.CreateCustomerContact(new CreateCustomerContactRequest
    {
        CustomerId = "{{customer_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new CreateCustomerContactRequestDto { FirstName = "some example string", Email = "user@example.com" },
    });
    // TODO: Handle 'response' of type CustomerContactResponseDto
}
catch (ApiException<CreateCustomerContactError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateCustomerContactRequest](src/Divvy/Requests/Customers/CreateCustomerContactRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerContactResponseDto](src/Divvy/Models/CustomerContactResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateCustomerContactError](src/Divvy/Errors/CreateCustomerContactError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomerResponseDto&gt; GetCustomer(GetCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing customer.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.GetCustomer(new GetCustomerRequest
    {
        CustomerId = "{{customer_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type CustomerResponseDto
}
catch (ApiException<GetCustomerError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCustomerRequest](src/Divvy/Requests/Customers/GetCustomerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerResponseDto](src/Divvy/Models/CustomerResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetCustomerError](src/Divvy/Errors/GetCustomerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomerBankAccountResponseDto&gt; GetCustomerBankAccount(GetCustomerBankAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing customer bank account.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.GetCustomerBankAccount(new GetCustomerBankAccountRequest
    {
        CustomerId = "{{customer_id}}",
        BankAccountId = "{{customer_bank_account_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type CustomerBankAccountResponseDto
}
catch (ApiException<GetCustomerBankAccountError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCustomerBankAccountRequest](src/Divvy/Requests/Customers/GetCustomerBankAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerBankAccountResponseDto](src/Divvy/Models/CustomerBankAccountResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetCustomerBankAccountError](src/Divvy/Errors/GetCustomerBankAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomerContactResponseDto&gt; GetCustomerContact(GetCustomerContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing customer contact.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.GetCustomerContact(new GetCustomerContactRequest
    {
        CustomerId = "{{customer_id}}",
        ContactId = "{{customer_contact_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type CustomerContactResponseDto
}
catch (ApiException<GetCustomerContactError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCustomerContactRequest](src/Divvy/Requests/Customers/GetCustomerContactRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerContactResponseDto](src/Divvy/Models/CustomerContactResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetCustomerContactError](src/Divvy/Errors/GetCustomerContactError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListResponseDtoCustomerBankAccountResponseDto&gt; ListCustomerBankAccounts(ListCustomerBankAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of customer bank account objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.ListCustomerBankAccounts(new ListCustomerBankAccountsRequest
    {
        CustomerId = "{{customer_id}}",
        Max = 10,
        Sort = "createdTime:desc",
        Filters = "status:eq:VERIFIED",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ListResponseDtoCustomerBankAccountResponseDto
}
catch (ApiException<ListCustomerBankAccountsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCustomerBankAccountsRequest](src/Divvy/Requests/Customers/ListCustomerBankAccountsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoCustomerBankAccountResponseDto](src/Divvy/Models/ListResponseDtoCustomerBankAccountResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListCustomerBankAccountsError](src/Divvy/Errors/ListCustomerBankAccountsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListResponseDtoCustomerContactResponseDto&gt; ListCustomerContacts(ListCustomerContactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of customer contact objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.ListCustomerContacts(new ListCustomerContactsRequest
    {
        CustomerId = "{{customer_id}}",
        Max = 10,
        Sort = "firstName:asc",
        Filters = "archived:eq:false",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ListResponseDtoCustomerContactResponseDto
}
catch (ApiException<ListCustomerContactsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCustomerContactsRequest](src/Divvy/Requests/Customers/ListCustomerContactsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoCustomerContactResponseDto](src/Divvy/Models/ListResponseDtoCustomerContactResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListCustomerContactsError](src/Divvy/Errors/ListCustomerContactsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListResponseDtoCustomerResponseDto&gt; ListCustomers(ListCustomersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of customer objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.ListCustomers(new ListCustomersRequest
    {
        Max = 10,
        Sort = "createdTime:desc",
        Filters = "id:eq:{{customer_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ListResponseDtoCustomerResponseDto
}
catch (ApiException<ListCustomersError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCustomersRequest](src/Divvy/Requests/Customers/ListCustomersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoCustomerResponseDto](src/Divvy/Models/ListResponseDtoCustomerResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListCustomersError](src/Divvy/Errors/ListCustomersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomerResponseDto&gt; RestoreCustomer(RestoreCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived customer. In the response, the `archived` field is set as `false`.

You can perform any valid BILL operation on restored customers. There is no change when you restore a restored customer.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.RestoreCustomer(new RestoreCustomerRequest
    {
        CustomerId = "{{customer_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type CustomerResponseDto
}
catch (ApiException<RestoreCustomerError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RestoreCustomerRequest](src/Divvy/Requests/Customers/RestoreCustomerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerResponseDto](src/Divvy/Models/CustomerResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[RestoreCustomerError](src/Divvy/Errors/RestoreCustomerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomerContactResponseDto&gt; RestoreCustomerContact(RestoreCustomerContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived customer contact. In the response, the `archived` field is set as `false`.

You can perform any valid BILL operation on restored customer contacts. There is no change when you restore a restored customer contact.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.RestoreCustomerContact(new RestoreCustomerContactRequest
    {
        CustomerId = "{{customer_id}}",
        ContactId = "{{customer_contact_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type CustomerContactResponseDto
}
catch (ApiException<RestoreCustomerContactError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RestoreCustomerContactRequest](src/Divvy/Requests/Customers/RestoreCustomerContactRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerContactResponseDto](src/Divvy/Models/CustomerContactResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[RestoreCustomerContactError](src/Divvy/Errors/RestoreCustomerContactError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomerResponseDto&gt; UpdateCustomer(UpdateCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing customer.

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
        CustomerId = "{{customer_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new CustomerUpdateRequestDto(),
    });
    // TODO: Handle 'response' of type CustomerResponseDto
}
catch (ApiException<UpdateCustomerError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateCustomerRequest](src/Divvy/Requests/Customers/UpdateCustomerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerResponseDto](src/Divvy/Models/CustomerResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[UpdateCustomerError](src/Divvy/Errors/UpdateCustomerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomerBankAccountResponseDto&gt; UpdateCustomerBankAccount(UpdateCustomerBankAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing customer bank account.

You can update only the `nickname` and `ownerType` fields for a customer bank account. If you want to update any of the other fields, create a new customer bank account with `POST /v3/customers/{customerId}/bank-accounts`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.UpdateCustomerBankAccount(new UpdateCustomerBankAccountRequest
    {
        CustomerId = "{{customer_id}}",
        BankAccountId = "{{customer_bank_account_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new UpdateCustomerBankAccountRequestDto(),
    });
    // TODO: Handle 'response' of type CustomerBankAccountResponseDto
}
catch (ApiException<UpdateCustomerBankAccountError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateCustomerBankAccountRequest](src/Divvy/Requests/Customers/UpdateCustomerBankAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerBankAccountResponseDto](src/Divvy/Models/CustomerBankAccountResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[UpdateCustomerBankAccountError](src/Divvy/Errors/UpdateCustomerBankAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomerContactResponseDto&gt; UpdateCustomerContact(UpdateCustomerContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing customer contact.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.UpdateCustomerContact(new UpdateCustomerContactRequest
    {
        CustomerId = "{{customer_id}}",
        ContactId = "{{customer_contact_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new UpdateCustomerContactRequestDto(),
    });
    // TODO: Handle 'response' of type CustomerContactResponseDto
}
catch (ApiException<UpdateCustomerContactError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateCustomerContactRequest](src/Divvy/Requests/Customers/UpdateCustomerContactRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerContactResponseDto](src/Divvy/Models/CustomerContactResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[UpdateCustomerContactError](src/Divvy/Errors/UpdateCustomerContactError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Documents

> Source: [Documents](src/Divvy/Api/Documents.cs)

<details>
<summary><code>Task&lt;DocumentCreateResponseDto&gt; CreateBillDocument(CreateBillDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a document for an existing bill. The file size limit is 6 MB. When you upload a bill document, the uploaded document is available on the bill details page in the BILL web app.

In the response, the `name`, `createdTime`, and `downloadLink` is available when the upload is complete.

When you upload a document, it takes a few minutes for BILL to complete the upload process.
* **Upload in-progress**: A temporary BILL-generated ID is available for the document when the upload is in progress. The value begins with `0du`. You can get the document upload status with `GET /v3/documents/upload-status`.
* **Upload complete**: A BILL-generated ID is available for the document when the upload is complete. The value begins with `00h`. You can get details about the uploaded document with `GET /v3/documents/bills/{billId}`.

See Documents and attachments in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Documents.CreateBillDocument(new CreateBillDocumentRequest
    {
        BillId = "{{bill_id}}",
        Name = "business_details.pdf",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = ["some example string"],
    });
    // TODO: Handle 'response' of type DocumentCreateResponseDto
}
catch (ApiException<CreateBillDocumentError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateBillDocumentRequest](src/Divvy/Requests/Documents/CreateBillDocumentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DocumentCreateResponseDto](src/Divvy/Models/DocumentCreateResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateBillDocumentError](src/Divvy/Errors/CreateBillDocumentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DocumentResponseDto&gt; GetDocument(GetDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about a document associated with a bill.

From the response, use `downloadLink` in a GET request to download the document.

```
curl '{downloadLink}' --header 'sessionId: {session_id}' --output {document_name}
```

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Documents.GetDocument(new GetDocumentRequest
    {
        DocumentId = "{{document_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type DocumentResponseDto
}
catch (ApiException<GetDocumentError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetDocumentRequest](src/Divvy/Requests/Documents/GetDocumentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DocumentResponseDto](src/Divvy/Models/DocumentResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetDocumentError](src/Divvy/Errors/GetDocumentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListResponseDtoDocumentResponseDto&gt; ListDocuments(ListDocumentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of documents associated with a bill.

From the response, use `downloadLink` in a GET request to download the document.

```
curl '{downloadLink}' --header 'sessionId: {session_id}' --output {document_name}
```

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Documents.ListDocuments(new ListDocumentsRequest
    {
        BillId = "{{bill_id}}",
        Max = 10,
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ListResponseDtoDocumentResponseDto
}
catch (ApiException<ListDocumentsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListDocumentsRequest](src/Divvy/Requests/Documents/ListDocumentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoDocumentResponseDto](src/Divvy/Models/ListResponseDtoDocumentResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListDocumentsError](src/Divvy/Errors/ListDocumentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;DocumentUploadStatusResponseDto&gt;&gt; UploadStatus(UploadStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get status of a document upload. Use this endpoint to identify when a document upload is complete.
* BILL generates an `uploadId` for the document when the upload is in progress (`IN_PROGRESS`). The value begins with `0du`.
* BILL generates a `documentId` for the document when the upload is complete (`UPLOADED`). The value begins with `00h`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Documents.UploadStatus(new UploadStatusRequest
    {
        Ids = "{{document_upload_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type IReadOnlyList<DocumentUploadStatusResponseDto>
}
catch (ApiException<UploadStatusError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UploadStatusRequest](src/Divvy/Requests/Documents/UploadStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[DocumentUploadStatusResponseDto](src/Divvy/Models/DocumentUploadStatusResponseDto.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[UploadStatusError](src/Divvy/Errors/UploadStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Events

> Source: [Events](src/Divvy/Api/Events.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;EventCatalogDto&gt;&gt; GetEventCatalog(GetEventCatalogRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the complete list of available events that you can subscribe to.

See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL events.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Events.GetEventCatalog(new GetEventCatalogRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        AppKey = "{{app_key}}",
        ApiToken = "{{api_token}}",
    });
    // TODO: Handle 'response' of type IReadOnlyList<EventCatalogDto>
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetEventCatalogRequest](src/Divvy/Requests/Events/GetEventCatalogRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[EventCatalogDto](src/Divvy/Models/EventCatalogDto.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Divvy/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginationDtoEventWithRetriesDto&gt; GetEventsForSubscription(GetEventsForSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of event notifications sent to you for a subscription. You can use this endpoint to address any issues with notification retries.

In the request, set `createdTimeFrom` and `createdTimeTo` to get event notifications for the specified time range. If you do not set `createdTimeTo`, the current date and time is used. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

**Note**: In this list operation, pagination is available only in one direction. The `nextPage` value is available in the response for you to retrieve the next page of results. However, you cannot retrieve the previous page of results.

See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL events.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Events.GetEventsForSubscription(new GetEventsForSubscriptionRequest
    {
        SubscriptionId = "{{webhook_subscription_id}}",
        EntityId = "{{webhook_bill_id}}",
        Max = 10,
        CreatedTimeFrom = "2026-03-15T00:00:00Z",
        CreatedTimeTo = "2026-03-20T00:00:00Z",
        Ascending = true,
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        AppKey = "{{app_key}}",
        ApiToken = "{{api_token}}",
    });
    // TODO: Handle 'response' of type PaginationDtoEventWithRetriesDto
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetEventsForSubscriptionRequest](src/Divvy/Requests/Events/GetEventsForSubscriptionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginationDtoEventWithRetriesDto](src/Divvy/Models/PaginationDtoEventWithRetriesDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Divvy/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EventDto&gt; ResendEvent(ResendEventRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resend an existing event notification.

**Note**: When an event notification fails, BILL tries to send the notification again with exponential backoff.

See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL events.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Events.ResendEvent(new ResendEventRequest
    {
        SubscriptionId = "{{webhook_subscription_id}}",
        EventId = "{{webhook_event_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        AppKey = "{{app_key}}",
        ApiToken = "{{api_token}}",
    });
    // TODO: Handle 'response' of type EventDto
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ResendEventRequest](src/Divvy/Requests/Events/ResendEventRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventDto](src/Divvy/Models/EventDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Divvy/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Exports

> Source: [Exports](src/Divvy/Api/Exports.cs)

<details>
<summary><code>Task&lt;ExportDownloadLinkResponseDto&gt; GetDownloadLink(GetDownloadLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the download URL for an exported record file.

From the response, use `downloadLink` in a GET request to download the file.

```
curl '{downloadLink}' --output {file_name}
```
See Export BILL records in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Exports.GetDownloadLink(new GetDownloadLinkRequest
    {
        ExportId = 1,
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ExportDownloadLinkResponseDto
}
catch (ApiException<GetDownloadLinkError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetDownloadLinkRequest](src/Divvy/Requests/Exports/GetDownloadLinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExportDownloadLinkResponseDto](src/Divvy/Models/ExportDownloadLinkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetDownloadLinkError](src/Divvy/Errors/GetDownloadLinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListResponseDtoExportResponseDto&gt; ListExports(ListExportsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of exported BILL records available for you to download. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

From the response, use `exportId` to get the download URL for an exported record file with `GET /v3/exports/{exportId}/download-link`.

You can export records, such as vendors, customers, bills, and invoices. In addition, you can export AP payments and AR payments. The **Import and export** section in the BILL web app (**Settings > Import & export > Custom File Integration**) provides the complete list of entities that you can export.

See Export BILL records in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Exports.ListExports(new ListExportsRequest
    {
        Max = 10,
        Filters = "status:eq:SUCCESS",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ListResponseDtoExportResponseDto
}
catch (ApiException<ListExportsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListExportsRequest](src/Divvy/Requests/Exports/ListExportsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoExportResponseDto](src/Divvy/Models/ListResponseDtoExportResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListExportsError](src/Divvy/Errors/ListExportsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Health

> Source: [Health](src/Divvy/Api/Health.cs)

<details>
<summary><code>Task&lt;HealthCheckDto&gt; GetHealthCheck(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns application health status.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Health.GetHealthCheck();
    // TODO: Handle 'response' of type HealthCheckDto
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[HealthCheckDto](src/Divvy/Models/HealthCheckDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Divvy/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Invoices

> Source: [Invoices](src/Divvy/Api/Invoices.cs)

<details>
<summary><code>Task&lt;InvoiceResponseDto&gt; ArchiveInvoice(ArchiveInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing invoice. In the response, the `archived` field is set as `true`.

You can restore an archived invoice with `POST /v3/invoices/{invoiceId}/restore`. There is no change when you archive an archived invoice.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Invoices.ArchiveInvoice(new ArchiveInvoiceRequest
    {
        InvoiceId = "{{invoice_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type InvoiceResponseDto
}
catch (ApiException<ArchiveInvoiceError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ArchiveInvoiceRequest](src/Divvy/Requests/Invoices/ArchiveInvoiceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InvoiceResponseDto](src/Divvy/Models/InvoiceResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ArchiveInvoiceError](src/Divvy/Errors/ArchiveInvoiceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;InvoiceResponseDto&gt; CreateInvoice(CreateInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new invoice.

See Invoices in the Guides section for more information, sample requests, and responses.

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
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new InvoiceCreateRequestDto
        {
            Customer = new Customer(),
            InvoiceLineItems = [new InvoiceCreateLineItem { Quantity = 1.5d }],
        },
    });
    // TODO: Handle 'response' of type InvoiceResponseDto
}
catch (ApiException<CreateInvoiceError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateInvoiceRequest](src/Divvy/Requests/Invoices/CreateInvoiceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InvoiceResponseDto](src/Divvy/Models/InvoiceResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateInvoiceError](src/Divvy/Errors/CreateInvoiceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;InvoiceResponseDto&gt; GetInvoice(GetInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing invoice.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Invoices.GetInvoice(new GetInvoiceRequest
    {
        InvoiceId = "{{invoice_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type InvoiceResponseDto
}
catch (ApiException<GetInvoiceError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetInvoiceRequest](src/Divvy/Requests/Invoices/GetInvoiceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InvoiceResponseDto](src/Divvy/Models/InvoiceResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetInvoiceError](src/Divvy/Errors/GetInvoiceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;InvoicePaymentLinkResponseDto&gt; GetPaymentLink(GetPaymentLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get an invoice payment link. In the response, BILL sends you a payment link based on the provided invoice and customer information.

You can send the invoice payment link to your customer for getting paid by the customer. With this link, the customer can complete the invoice payment without the need to set up a BILL account.

When a customer payment is made with the invoice payment link, BILL sends a payment receipt to the provided email address.

**Note**: You get valid invoice payment links only for customers that are NOT connected with your organization in the BILL network.

See Invoices in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Invoices.GetPaymentLink(new GetPaymentLinkRequest
    {
        InvoiceId = "{{invoice_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new InvoicePaymentLinkRequestDto { CustomerId = "some example string", Email = "some example string" },
    });
    // TODO: Handle 'response' of type InvoicePaymentLinkResponseDto
}
catch (ApiException<GetPaymentLinkError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPaymentLinkRequest](src/Divvy/Requests/Invoices/GetPaymentLinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InvoicePaymentLinkResponseDto](src/Divvy/Models/InvoicePaymentLinkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetPaymentLinkError](src/Divvy/Errors/GetPaymentLinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListInvoiceResponseDto&gt; ListInvoices(ListInvoicesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of invoice objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Invoices.ListInvoices(new ListInvoicesRequest
    {
        Max = 10,
        Sort = "createdTime:desc",
        Filters = "id:eq:{{invoice_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ListInvoiceResponseDto
}
catch (ApiException<ListInvoicesError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListInvoicesRequest](src/Divvy/Requests/Invoices/ListInvoicesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListInvoiceResponseDto](src/Divvy/Models/ListInvoiceResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListInvoicesError](src/Divvy/Errors/ListInvoicesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RecordInvoiceResponseDto&gt; RecordInvoice(RecordInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Record an offline AR payment received from a customer.

An offline payment is a payment that you receive outside the BILL system. BILL simply applies the recorded payment amount to one or more invoices for the customer. Any recorded unapplied amount is an overpayment and is available as a customer credit in the BILL system.

See Recording an AR payment in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Invoices.RecordInvoice(new RecordInvoiceRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new RecordInvoiceRequestDto
        {
            PaymentDate = DateTimeOffset.Parse("2024-01-15T00:00:00Z"),
            PaymentType = InvoicePaymentTypeRequest.Cash,
            Amount = 1.5d,
            Invoices = [new RecordInvoiceItemRequestDto { Id = "some example string", Amount = 1.5d }],
        },
    });
    // TODO: Handle 'response' of type RecordInvoiceResponseDto
}
catch (ApiException<RecordInvoiceError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RecordInvoiceRequest](src/Divvy/Requests/Invoices/RecordInvoiceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecordInvoiceResponseDto](src/Divvy/Models/RecordInvoiceResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[RecordInvoiceError](src/Divvy/Errors/RecordInvoiceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;InvoiceResponseDto&gt; ReplaceInvoice(ReplaceInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the number of line items in an invoice. You can also update other invoice details.

You can use the PUT operation to add, remove, or replace the number of line items in an invoice. A set of rules apply with the PUT operation.
* When you add a new line item, a new line item `id` is generated in the invoice.
* When you omit an existing line item `id`, the line item is removed from the invoice.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Invoices.ReplaceInvoice(new ReplaceInvoiceRequest
    {
        InvoiceId = "{{invoice_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new InvoiceReplaceRequestDto
        {
            Customer = new Customer(),
            InvoiceLineItems = [new InvoiceReplaceLineItem { Quantity = 1.5d }],
        },
    });
    // TODO: Handle 'response' of type InvoiceResponseDto
}
catch (ApiException<ReplaceInvoiceError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ReplaceInvoiceRequest](src/Divvy/Requests/Invoices/ReplaceInvoiceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InvoiceResponseDto](src/Divvy/Models/InvoiceResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ReplaceInvoiceError](src/Divvy/Errors/ReplaceInvoiceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;InvoiceResponseDto&gt; RestoreInvoice(RestoreInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived invoice. In the response, the `archived` field is set as `false`.

You can perform any valid BILL operation on restored invoices. There is no change when you restore a restored invoice.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Invoices.RestoreInvoice(new RestoreInvoiceRequest
    {
        InvoiceId = "{{invoice_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type InvoiceResponseDto
}
catch (ApiException<RestoreInvoiceError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RestoreInvoiceRequest](src/Divvy/Requests/Invoices/RestoreInvoiceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InvoiceResponseDto](src/Divvy/Models/InvoiceResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[RestoreInvoiceError](src/Divvy/Errors/RestoreInvoiceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SendInvoice(SendInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send an invoice to a customer email address. You can send the invoice to multiple email addresses.

See Invoices in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Invoices.SendInvoice(new SendInvoiceRequest
    {
        InvoiceId = "{{invoice_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new SendInvoiceRequestDto
        {
            ReplyTo = new ReplyTo { UserId = "some example string" },
            Recipient = new Recipient { To = ["some example string"] },
        },
    });
}
catch (ApiException<SendInvoiceError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SendInvoiceRequest](src/Divvy/Requests/Invoices/SendInvoiceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[SendInvoiceError](src/Divvy/Errors/SendInvoiceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;InvoiceResponseDto&gt; UpdateInvoice(UpdateInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an invoice line item. You can also update other invoice details.

You can use the PATCH operation to modify line item details, such as `amount`, `quantity`, and `description`. The invoice line item `id` does not change with a PATCH operation.

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
        InvoiceId = "{{invoice_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new InvoiceUpdateRequestDto(),
    });
    // TODO: Handle 'response' of type InvoiceResponseDto
}
catch (ApiException<UpdateInvoiceError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateInvoiceRequest](src/Divvy/Requests/Invoices/UpdateInvoiceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InvoiceResponseDto](src/Divvy/Models/InvoiceResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[UpdateInvoiceError](src/Divvy/Errors/UpdateInvoiceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Mfa

> Source: [Mfa](src/Divvy/Api/Mfa.cs)

<details>
<summary><code>Task&lt;MfaChallengeResponseDto&gt; GenerateChallenge(GenerateChallengeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate an MFA challenge ID for creating an MFA-trusted API sign in session.

In the response, a `challengeId` is generated and a six-digit `token` is sent to the phone number that was registered with MFA setup.

After you generate a challenge ID (with `POST /v3/mfa/challenge`), complete your MFA sign in by validating the MFA challenge (with `POST /v3/mfa/challenge/validate`). At this point, your API session is MFA trusted.

There are two stages in the BILL MFA process.
1. **MFA setup**: Add a valid phone number for setting up MFA in the organization (with `POST /v3/mfa/setup`), and then complete the setup by validating the entered phone number (with `POST /v3/mfa/validate`). At this point, the phone number is registered for the MFA sign in operation.
2. **MFA sign in**: Generate an MFA challenge (with `POST /v3/mfa/challenge`), and then complete MFA sign in by validating the MFA challenge (with `POST /v3/mfa/challenge/validate`). At this point, your API session is MFA trusted.

**Note**: In the production environment, BILL requires an MFA-trusted API session for a set of API operations.
* Enable vendor `autoPay`
* Enable recurring bill `autoPayment`
* Create a payment or bulk payment
* Create a bank account in a BILL organization
* Reset MFA (Complete MFA setup and MFA sign-in again)

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Mfa.GenerateChallenge(new GenerateChallengeRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new MfaChallengeRequestDto(),
    });
    // TODO: Handle 'response' of type MfaChallengeResponseDto
}
catch (ApiException<GenerateChallengeError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GenerateChallengeRequest](src/Divvy/Requests/Mfa/GenerateChallengeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MfaChallengeResponseDto](src/Divvy/Models/MfaChallengeResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GenerateChallengeError](src/Divvy/Errors/GenerateChallengeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListMfaPhoneResponseDto&gt; ListMfaPhones(ListMfaPhonesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of phone numbers that have been added for setting up MFA in the current organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Mfa.ListMfaPhones(new ListMfaPhonesRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ListMfaPhoneResponseDto
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListMfaPhonesRequest](src/Divvy/Requests/Mfa/ListMfaPhonesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListMfaPhoneResponseDto](src/Divvy/Models/ListMfaPhoneResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Divvy/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MfaSetupResponseDto&gt; Setup(SetupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a valid phone number for setting up MFA in the current organization.

In the response, a `setupId` is generated and a six-digit `token` is sent to the phone number. After you add a phone number (with `POST /v3/mfa/setup`), complete the MFA setup by validating the entered phone number (with `POST /v3/mfa/validate`). At this point, the phone number is registered for the MFA sign in operation.

There are two stages in the BILL MFA process.
1. **MFA setup**: Add a valid phone number for setting up MFA in the organization (with `POST /v3/mfa/setup`), and then complete the setup by validating the entered phone number (with `POST /v3/mfa/validate`). At this point, the phone number is registered for the MFA sign in operation.
2. **MFA sign in**: Generate an MFA challenge (with `POST /v3/mfa/challenge`), and then complete MFA sign in by validating the MFA challenge (with `POST /v3/mfa/challenge/validate`). At this point, your API session is MFA trusted.

**Note**: In the production environment, BILL requires an MFA-trusted API session for a set of API operations.
* Enable vendor `autoPay`
* Enable recurring bill `autoPayment`
* Create a payment or bulk payment
* Create a bank account in a BILL organization
* Reset MFA (Complete MFA setup and MFA sign-in again)

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Mfa.Setup(new SetupRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new MfaSetupRequestDto { Phone = "some example string", Type = MfaSetupType.Voice },
    });
    // TODO: Handle 'response' of type MfaSetupResponseDto
}
catch (ApiException<SetupError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SetupRequest](src/Divvy/Requests/Mfa/SetupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MfaSetupResponseDto](src/Divvy/Models/MfaSetupResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[SetupError](src/Divvy/Errors/SetupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MfaStepUpResponseDto&gt; StepUpSession(StepUpSessionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set your current API session as MFA trusted.

Ideally, when you sign in with `POST /v3/login`, set `rememberMeId` and `device` in your request to generate an MFA-trusted API session.

In case you sign in without `rememberMeId` and `device` in your request, you can use this `POST /v3/mfa/step-up` endpoint to mark the current API session as MFA trusted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Mfa.StepUpSession(new StepUpSessionRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new MfaStepUpRequestDto(),
    });
    // TODO: Handle 'response' of type MfaStepUpResponseDto
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StepUpSessionRequest](src/Divvy/Requests/Mfa/StepUpSessionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MfaStepUpResponseDto](src/Divvy/Models/MfaStepUpResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Divvy/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StatusDto&gt; Validate(ValidateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validate the phone number for setting up MFA in the current organization. This validation requires the `setupId` and `token` from `POST /v3/mfa/setup`.

After the validation is complete, the phone number is registered for the MFA sign in operation.

There are two stages in the BILL MFA process.
1. **MFA setup**: Add a valid phone number for setting up MFA in the organization (with `POST /v3/mfa/setup`), and then complete the setup by validating the entered phone number (with `POST /v3/mfa/validate`). At this point, the phone number is registered for the MFA sign in operation.
2. **MFA sign in**: Generate an MFA challenge (with `POST /v3/mfa/challenge`), and then complete MFA sign in by validating the MFA challenge (with `POST /v3/mfa/challenge/validate`). At this point, your API session is MFA trusted.

**Note**: In the production environment, BILL requires an MFA-trusted API session for a set of API operations.
* Enable vendor `autoPay`
* Enable recurring bill `autoPayment`
* Create a payment or bulk payment
* Create a bank account in a BILL organization
* Reset MFA (Complete MFA setup and MFA sign-in again)

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Mfa.Validate(new ValidateRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new MfaSetupValidateRequestDto
        {
            SetupId = "some example string",
            Type = MfaSetupType.Voice,
            Token = "some example string",
        },
    });
    // TODO: Handle 'response' of type StatusDto
}
catch (ApiException<ValidateError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ValidateRequest](src/Divvy/Requests/Mfa/ValidateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StatusDto](src/Divvy/Models/StatusDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ValidateError](src/Divvy/Errors/ValidateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MfaChallengeValidateResponseDto&gt; ValidateChallenge(ValidateChallengeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validate the MFA challenge for creating an MFA-trusted API sign in session. This validation requires the `challengeId` and `token` from `POST /v3/mfa/challenge`.

After the validation is complete, your API session is MFA trusted.

There are two stages in the BILL MFA process.
1. **MFA setup**: Add a valid phone number for setting up MFA in the organization (with `POST /v3/mfa/setup`), and then complete the setup by validating the entered phone number (with `POST /v3/mfa/validate`). At this point, the phone number is registered for the MFA sign in operation.
2. **MFA sign in**: Generate an MFA challenge (with `POST /v3/mfa/challenge`), and then complete MFA sign in by validating the MFA challenge (with `POST /v3/mfa/challenge/validate`). At this point, your API session is MFA trusted.

**Note**: In the production environment, BILL requires an MFA-trusted API session for a set of API operations.
* Enable vendor `autoPay`
* Enable recurring bill `autoPayment`
* Create a payment or bulk payment
* Create a bank account for a BILL organization
* Reset MFA (Complete MFA setup and MFA sign-in again)

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Mfa.ValidateChallenge(new ValidateChallengeRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new MfaChallengeValidateRequestDto
        {
            ChallengeId = "some example string",
            Token = "some example string",
        },
    });
    // TODO: Handle 'response' of type MfaChallengeValidateResponseDto
}
catch (ApiException<ValidateChallengeError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ValidateChallengeRequest](src/Divvy/Requests/Mfa/ValidateChallengeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MfaChallengeValidateResponseDto](src/Divvy/Models/MfaChallengeValidateResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ValidateChallengeError](src/Divvy/Errors/ValidateChallengeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## NetworkApi

> Source: [NetworkApi](src/Divvy/Api/NetworkApi.cs)

<details>
<summary><code>Task AcceptInvitation(AcceptInvitationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Accept a connection request sent by a vendor or customer.

The organization receiving the connection request must have auto-connections disabled. If auto-connections are not disabled, BILL automatically connects the organizations in the BILL Network.

When the invitation is accepted, BILL connects the two organizations in the BILL Network.

See BILL Network in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.NetworkApi.AcceptInvitation(new AcceptInvitationRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new AcceptInvitationRequestDto { NetworkId = "some example string", Type = AcceptInviteType.Vendor },
    });
}
catch (ApiException<AcceptInvitationError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AcceptInvitationRequest](src/Divvy/Requests/NetworkApi/AcceptInvitationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[AcceptInvitationError](src/Divvy/Errors/AcceptInvitationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateCustomerInvitation(CreateCustomerInvitationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a connection request to a customer organization in the BILL Network. BILL automatically connects the customer organization with the customer record in your BILL organization.

If the customer organization has auto-connections disabled, BILL sends an invitation email to the customer email address. When the customer accepts the invitation, BILL connects the customer organization with the customer record in your BILL organization.

If the customer does not respond, you can delete the connection request (with `DELETE /v3/network/invitation/customer/{customerId}`) before sending a new connection request.

**Note**: If the customer does not respond to a connection request for 60 days, the request expires.

See BILL Network in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.NetworkApi.CreateCustomerInvitation(new CreateCustomerInvitationRequest
    {
        CustomerId = "{{customer_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new CreateInvitationRequestDto { NetworkId = "some example string", NetworkType = NetworkType.Bill },
    });
}
catch (ApiException<CreateCustomerInvitationError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateCustomerInvitationRequest](src/Divvy/Requests/NetworkApi/CreateCustomerInvitationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateCustomerInvitationError](src/Divvy/Errors/CreateCustomerInvitationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateVendorInvitation(CreateVendorInvitationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a connection request to a vendor organization in the BILL Network. BILL automatically connects the vendor organization with the vendor record in your BILL organization.

If the vendor organization has auto-connections disabled, BILL sends an invitation email to the vendor email address. When the vendor accepts the invitation, BILL connects the vendor organization with the vendor record in your BILL organization.

If the vendor does not respond, you can delete the connection request (with `DELETE /v3/network/invitation/vendor/{vendorId}`) before sending a new connection request.

**Note**: If the vendor does not respond to the connection request for 60 days, the request expires.

See BILL Network in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.NetworkApi.CreateVendorInvitation(new CreateVendorInvitationRequest
    {
        VendorId = "{{vendor_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new CreateInvitationRequestDto { NetworkId = "some example string", NetworkType = NetworkType.Bill },
    });
}
catch (ApiException<CreateVendorInvitationError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateVendorInvitationRequest](src/Divvy/Requests/NetworkApi/CreateVendorInvitationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateVendorInvitationError](src/Divvy/Errors/CreateVendorInvitationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteCustomerInvitation(DeleteCustomerInvitationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an existing Network connection with a customer organization. Delete customer connection follows a set of rules.
* **No scheduled payments**: There should be no scheduled payments. All scheduled payments must be canceled before you can disconnect.
* **No in-process payments**: There should be no in-progress payments. All in-progress payments must clear before you can disconnect.

You can use this endpoint to cancel a pending connection request sent to a customer that has auto-connections disabled. You can send a new connection request after an existing connection or connection request is canceled.

**Note**: If the customer does not respond to a connection request for 60 days, the request expires.

See BILL Network in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.NetworkApi.DeleteCustomerInvitation(new DeleteCustomerInvitationRequest
    {
        CustomerId = "{{customer_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
}
catch (ApiException<DeleteCustomerInvitationError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteCustomerInvitationRequest](src/Divvy/Requests/NetworkApi/DeleteCustomerInvitationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[DeleteCustomerInvitationError](src/Divvy/Errors/DeleteCustomerInvitationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteVendorInvitation(DeleteVendorInvitationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an existing Network connection with a vendor organization. Delete vendor connection follows a set of rules.
* **No scheduled payments**: There should be no scheduled payments. All scheduled payments must be canceled before you can disconnect.
* **No in-process payments**: There should be no in-progress payments. All in-progress payments must clear before you can disconnect.

You can use this endpoint to cancel a pending connection request sent to a vendor that has auto-connections disabled. You can send a new connection request after an existing connection or connection request is canceled.

**Note**: If the vendor does not respond to a connection request for 60 days, the request expires.

See BILL Network in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.NetworkApi.DeleteVendorInvitation(new DeleteVendorInvitationRequest
    {
        VendorId = "{{vendor_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
}
catch (ApiException<DeleteVendorInvitationError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteVendorInvitationRequest](src/Divvy/Requests/NetworkApi/DeleteVendorInvitationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[DeleteVendorInvitationError](src/Divvy/Errors/DeleteVendorInvitationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetInvitationResponseDto&gt; GetCustomerInvitation(GetCustomerInvitationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the status of an existing connection request sent with `POST /v3/network/invitation/customer/{customerId}`.

When you send a connection request to a customer organization that has auto-connections enabled, BILL automatically connects you with the organization. If the organization has auto-connections disabled, the connection request status changes when the customer accepts the request.

**Note**: If the customer does not respond to the connection request for 60 days, the request expires.

See BILL Network in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.NetworkApi.GetCustomerInvitation(new GetCustomerInvitationRequest
    {
        CustomerId = "{{customer_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type GetInvitationResponseDto
}
catch (ApiException<GetCustomerInvitationError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCustomerInvitationRequest](src/Divvy/Requests/NetworkApi/GetCustomerInvitationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetInvitationResponseDto](src/Divvy/Models/GetInvitationResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetCustomerInvitationError](src/Divvy/Errors/GetCustomerInvitationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetInvitationResponseDto&gt; GetVendorInvitation(GetVendorInvitationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the status of an existing connection request sent with `POST /v3/network/invitation/vendor/{vendorId}`.

When you send a connection request to a vendor organization that has auto-connections enabled, BILL automatically connects you with the organization. If the organization has auto-connections disabled, the connection request status changes when the vendor accepts the request.

**Note**: If the vendor does not respond to the connection request for 60 days, the request expires.

See BILL Network in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.NetworkApi.GetVendorInvitation(new GetVendorInvitationRequest
    {
        VendorId = "{{vendor_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type GetInvitationResponseDto
}
catch (ApiException<GetVendorInvitationError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetVendorInvitationRequest](src/Divvy/Requests/NetworkApi/GetVendorInvitationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetInvitationResponseDto](src/Divvy/Models/GetInvitationResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetVendorInvitationError](src/Divvy/Errors/GetVendorInvitationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task InviteVendorNotInBillNetwork(InviteVendorNotInBillNetworkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a connection request to a vendor not in the BILL Network.

BILL sends an invitation email to the provided vendor email address. When the vendor accepts the invitation and sets up a BILL account, BILL connects the vendor organization with the vendor record in your BILL organization.

**Note**:
* The vendor organization must exist before BILL can send an invitation email.
* If the vendor does not respond to a connection request for 60 days, the request expires.

See BILL Network in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.NetworkApi.InviteVendorNotInBillNetwork(new InviteVendorNotInBillNetworkRequest
    {
        VendorId = "{{vendor_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new InviteVendorNotInBillNetworkRequestDto { Email = "some example string" },
    });
}
catch (ApiException<InviteVendorNotInBillNetworkError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[InviteVendorNotInBillNetworkRequest](src/Divvy/Requests/NetworkApi/InviteVendorNotInBillNetworkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[InviteVendorNotInBillNetworkError](src/Divvy/Errors/InviteVendorNotInBillNetworkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;NetworkSearchResponseDto&gt; Search(SearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for a customer, vendor, or verified national vendor organization. You can search in the BILL Network and verified national vendor (`RPPS`) network.

When you search in the BILL Network, there are two `name` requirements for getting search results.
* Your search term must have a minimum of three characters.
* Your search term must be a complete word. You will not get search results when your search term is a partial word.

When you search in the verified national vendor (`RPPS`) network, search results are based on both a complete and partial match on `name` and `zipOrPostalCode`. You can further filter your search by the billing statement `accountNumber` with the vendor. For example, your Verizon internet bill account number.

See BILL Network in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.NetworkApi.Search(new SearchRequest
    {
        Name = "{{network_vendor_name}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type NetworkSearchResponseDto
}
catch (ApiException<SearchError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchRequest](src/Divvy/Requests/NetworkApi/SearchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NetworkSearchResponseDto](src/Divvy/Models/NetworkSearchResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[SearchError](src/Divvy/Errors/SearchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Organizations

> Source: [Organizations](src/Divvy/Api/Organizations.cs)

<details>
<summary><code>Task&lt;BillingStatementDetailResponseDto&gt; GetBillingStatementDetail(GetBillingStatementDetailRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about a billing statement for the organization. BILL generates a monthly billing invoice statement for all the billing activities in the organization.

From the response, use `downloadLink` in a GET request to download a billing statement.

```
curl '{downloadLink}' --header 'sessionId: {session_id}' --output {statement_name}
```

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.GetBillingStatementDetail(new GetBillingStatementDetailRequest
    {
        OrganizationId = "{{organization_id}}",
        BillingStatementId = "{{billing_statement_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type BillingStatementDetailResponseDto
}
catch (ApiException<GetBillingStatementDetailError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetBillingStatementDetailRequest](src/Divvy/Requests/Organizations/GetBillingStatementDetailRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BillingStatementDetailResponseDto](src/Divvy/Models/BillingStatementDetailResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetBillingStatementDetailError](src/Divvy/Errors/GetBillingStatementDetailError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OrganizationResponseDto&gt; GetOrganization(GetOrganizationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing organization. The currently signed-in user must have the `ADMINISTRATOR` user role in the BILL organization to perform this operation.

See Organizations and Users in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.GetOrganization(new GetOrganizationRequest
    {
        OrganizationId = "{{organization_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type OrganizationResponseDto
}
catch (ApiException<GetOrganizationError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetOrganizationRequest](src/Divvy/Requests/Organizations/GetOrganizationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationResponseDto](src/Divvy/Models/OrganizationResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetOrganizationError](src/Divvy/Errors/GetOrganizationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PricePlanResponseDto&gt; GetPricePlan(GetPricePlanRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the BILL price plan details for an existing organization. The currently signed-in user must have the `ADMINISTRATOR` user role in the BILL organization to perform this operation.

A BILL price plan for an organization provides a range of information, including monthly subscription fees and the terms and conditions for additional charges in the price plan.

In the response, the `planTerms` object includes information about charges for price plan features based on a combination of charge `tier`, `quantity`, and `price`. We explain plan terms with an example.
* If `"tier": 1`, `"quantity": 5`, and `"price": 10`, the first 5 users will be charged $10 each.
* If `"tier": 2`, `"quantity": 10`, and `"price": 8`, the next 10 users will be charged $8 each. At this level, if there is no `tier` information, all users after tier 1 will be charged $8 each.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.GetPricePlan(new GetPricePlanRequest
    {
        OrganizationId = "{{organization_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type PricePlanResponseDto
}
catch (ApiException<GetPricePlanError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPricePlanRequest](src/Divvy/Requests/Organizations/GetPricePlanRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PricePlanResponseDto](src/Divvy/Models/PricePlanResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetPricePlanError](src/Divvy/Errors/GetPricePlanError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListResponseDtoBillingStatementResponseDto&gt; ListBillingStatements(ListBillingStatementsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of billing statements for the organization. BILL generates a monthly billing invoice statement for all the billing activities in the organization.

In the request, set `invoiceDateFrom` and `invoiceDateTo` to get the billing invoice statements for the specified date range.

You can set `max` and `page` in the request only when both `invoiceDateFrom` and `invoiceDateTo` are not set. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ListBillingStatements(new ListBillingStatementsRequest
    {
        OrganizationId = "{{organization_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ListResponseDtoBillingStatementResponseDto
}
catch (ApiException<ListBillingStatementsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListBillingStatementsRequest](src/Divvy/Requests/Organizations/ListBillingStatementsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoBillingStatementResponseDto](src/Divvy/Models/ListResponseDtoBillingStatementResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListBillingStatementsError](src/Divvy/Errors/ListBillingStatementsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListIndustriesResponseDto&gt; ListIndustries(ListIndustriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of available values for the `industry` field for an organization. Use this information to set the `industry` field in your `POST /v3/partner/organizations` or `PATCH /v3/organizations/{organizationId}` request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ListIndustries(new ListIndustriesRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ListIndustriesResponseDto
}
catch (ApiException<ListIndustriesError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListIndustriesRequest](src/Divvy/Requests/Organizations/ListIndustriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListIndustriesResponseDto](src/Divvy/Models/ListIndustriesResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListIndustriesError](src/Divvy/Errors/ListIndustriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OrganizationResponseDto&gt; UpdateOrganization(UpdateOrganizationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing organization. The currently signed-in user must have the `ADMINISTRATOR` user role in the BILL organization to perform this operation.

See Organizations and Users in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.UpdateOrganization(new UpdateOrganizationRequest
    {
        OrganizationId = "{{organization_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new OrganizationUpdateRequestDto(),
    });
    // TODO: Handle 'response' of type OrganizationResponseDto
}
catch (ApiException<UpdateOrganizationError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateOrganizationRequest](src/Divvy/Requests/Organizations/UpdateOrganizationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationResponseDto](src/Divvy/Models/OrganizationResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[UpdateOrganizationError](src/Divvy/Errors/UpdateOrganizationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Partner

> Source: [Partner](src/Divvy/Api/Partner.cs)

<details>
<summary><code>Task&lt;OrganizationUserResponseDto&gt; ArchivePartnerUser(ArchivePartnerUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing user. In the response, the `archived` field is set as `true`.

You can restore an archived user with `POST /v3/users/{userId}/restore`. There is no change when you archive an archived user.

This operation requires partner-level permissions.
* A `sessionId` header value generated with API partner login
* An `appKey` header value
* The `organizationId` of the organization

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Partner.ArchivePartnerUser(new ArchivePartnerUserRequest
    {
        UserId = "{{partner_user_id}}",
        SessionId = "{{partner_session_id}}",
        AppKey = "{{app_key}}",
        OrganizationId = "{{partner_organization_id}}",
    });
    // TODO: Handle 'response' of type OrganizationUserResponseDto
}
catch (ApiException<ArchivePartnerUserError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ArchivePartnerUserRequest](src/Divvy/Requests/Partner/ArchivePartnerUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationUserResponseDto](src/Divvy/Models/OrganizationUserResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ArchivePartnerUserError](src/Divvy/Errors/ArchivePartnerUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OrganizationResponseDto&gt; CreateOrganization(CreateOrganizationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new organization.

This operation requires partner-level permissions.
* A `sessionId` header value generated with API partner login
* An `appKey` header value

See Organizations for BILL partners in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Partner.CreateOrganization(new CreateOrganizationRequest
    {
        SessionId = "{{partner_session_id}}",
        AppKey = "{{app_key}}",
        Body = new OrganizationCreateRequestDto
        {
            Name = "some example string",
            Address = new Address1BillV3PartnerApi { Country = CountryCode.Ad },
        },
    });
    // TODO: Handle 'response' of type OrganizationResponseDto
}
catch (ApiException<CreateOrganizationError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateOrganizationRequest](src/Divvy/Requests/Partner/CreateOrganizationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationResponseDto](src/Divvy/Models/OrganizationResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateOrganizationError](src/Divvy/Errors/CreateOrganizationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OrganizationUserResponseDto&gt; CreatePartnerUser(CreatePartnerUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new user. The new user is created for the organization (`organizationId`) in the request header.

In the request, set `username` as a unique alphanumeric value. The value must be 40 characters or fewer. This field is not case-sensitive. Do not set the value as an email address or any PII value. BILL uses this value to uniquely identify each user.

This operation requires partner-level permissions.
* A `sessionId` header value generated with API partner login
* An `appKey` header value
* The `organizationId` of the organization

See Users for BILL partners in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Partner.CreatePartnerUser(new CreatePartnerUserRequest
    {
        SessionId = "{{partner_session_id}}",
        AppKey = "{{app_key}}",
        OrganizationId = "{{partner_organization_id}}",
        Body = new PartnerUserCreateRequestDto
        {
            FirstName = "some example string",
            Email = "some example string",
            Username = "some example string",
            AcceptTermsOfService = true,
        },
    });
    // TODO: Handle 'response' of type OrganizationUserResponseDto
}
catch (ApiException<CreatePartnerUserError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreatePartnerUserRequest](src/Divvy/Requests/Partner/CreatePartnerUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationUserResponseDto](src/Divvy/Models/OrganizationUserResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreatePartnerUserError](src/Divvy/Errors/CreatePartnerUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreatePhone(CreatePhoneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a phone number for a created user. BILL requires organization users to have a linked phone number for initiating risk verification for the organization.

You can check whether a phone number has been added for the user with `GET /v3/risk-verifications/phone`.

After you add a phone number with this endpoint, you can initiate risk verification for the organization with `POST /v3/risk-verifications`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Partner.CreatePhone(new CreatePhoneRequest
    {
        UserId = "{{partner_user_id}}",
        SessionId = "{{partner_session_id}}",
        AppKey = "{{app_key}}",
        OrganizationId = "{{partner_organization_id}}",
        Body = new PhoneVerificationRequestDto { PhoneNumber = "some example string", PhoneType = PhoneType.Mobile },
    });
}
catch (ApiException<CreatePhoneError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreatePhoneRequest](src/Divvy/Requests/Partner/CreatePhoneRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreatePhoneError](src/Divvy/Errors/CreatePhoneError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OrganizationUserResponseDto&gt; GetPartnerUser(GetPartnerUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing user.

This operation requires partner-level permissions.
* A `sessionId` header value generated with API partner login
* An `appKey` header value
* The `organizationId` of the organization

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Partner.GetPartnerUser(new GetPartnerUserRequest
    {
        UserId = "{{partner_user_id}}",
        SessionId = "{{partner_session_id}}",
        AppKey = "{{app_key}}",
        OrganizationId = "{{partner_organization_id}}",
    });
    // TODO: Handle 'response' of type OrganizationUserResponseDto
}
catch (ApiException<GetPartnerUserError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPartnerUserRequest](src/Divvy/Requests/Partner/GetPartnerUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationUserResponseDto](src/Divvy/Models/OrganizationUserResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetPartnerUserError](src/Divvy/Errors/GetPartnerUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RoleResponseDto&gt; GetPartnerUserRole(GetPartnerUserRoleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing user role in a BILL organization.

This operation requires partner-level permissions.
* A `sessionId` header value generated with API partner login
* An `appKey` header value
* The `organizationId` of the organization

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Partner.GetPartnerUserRole(new GetPartnerUserRoleRequest
    {
        RoleId = "{{partner_user_role_id}}",
        SessionId = "{{partner_session_id}}",
        AppKey = "{{app_key}}",
        OrganizationId = "{{partner_organization_id}}",
    });
    // TODO: Handle 'response' of type RoleResponseDto
}
catch (ApiException<GetPartnerUserRoleError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPartnerUserRoleRequest](src/Divvy/Requests/Partner/GetPartnerUserRoleRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RoleResponseDto](src/Divvy/Models/RoleResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetPartnerUserRoleError](src/Divvy/Errors/GetPartnerUserRoleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListResponseDtoOrganizationResponseDto&gt; ListPartnerOrganizations(ListPartnerOrganizationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of organization objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

This operation requires partner-level permissions.
* A `sessionId` header value generated with API partner login
* An `appKey` header value

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Partner.ListPartnerOrganizations(new ListPartnerOrganizationsRequest
    {
        Max = 10,
        Sort = "createdTime",
        Filters = "id:eq:{{partner_organization_id}}",
        SessionId = "{{partner_session_id}}",
        AppKey = "{{app_key}}",
    });
    // TODO: Handle 'response' of type ListResponseDtoOrganizationResponseDto
}
catch (ApiException<ListPartnerOrganizationsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListPartnerOrganizationsRequest](src/Divvy/Requests/Partner/ListPartnerOrganizationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoOrganizationResponseDto](src/Divvy/Models/ListResponseDtoOrganizationResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListPartnerOrganizationsError](src/Divvy/Errors/ListPartnerOrganizationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListResponseDtoRoleResponseDto&gt; ListPartnerUserRoles(ListPartnerUserRolesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of user role objects available in a BILL organization. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

This operation requires partner-level permissions.
* A `sessionId` header value generated with API partner login
* An `appKey` header value
* The `organizationId` of the organization

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Partner.ListPartnerUserRoles(new ListPartnerUserRolesRequest
    {
        Max = 10,
        Sort = "createdTime:desc",
        Filters = "id:eq:{{partner_user_role_id}}",
        SessionId = "{{partner_session_id}}",
        AppKey = "{{app_key}}",
        OrganizationId = "{{partner_organization_id}}",
    });
    // TODO: Handle 'response' of type ListResponseDtoRoleResponseDto
}
catch (ApiException<ListPartnerUserRolesError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListPartnerUserRolesRequest](src/Divvy/Requests/Partner/ListPartnerUserRolesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoRoleResponseDto](src/Divvy/Models/ListResponseDtoRoleResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListPartnerUserRolesError](src/Divvy/Errors/ListPartnerUserRolesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListResponseDtoOrganizationUserResponseDto&gt; ListPartnerUsers(ListPartnerUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of user objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

This operation requires partner-level permissions.
* A `sessionId` header value generated with API partner login
* An `appKey` header value
* The `organizationId` of the organization

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Partner.ListPartnerUsers(new ListPartnerUsersRequest
    {
        Max = 10,
        Sort = "createdTime:desc",
        Filters = "id:eq:{{partner_user_id}}",
        SessionId = "{{partner_session_id}}",
        AppKey = "{{app_key}}",
        OrganizationId = "{{partner_organization_id}}",
    });
    // TODO: Handle 'response' of type ListResponseDtoOrganizationUserResponseDto
}
catch (ApiException<ListPartnerUsersError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListPartnerUsersRequest](src/Divvy/Requests/Partner/ListPartnerUsersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoOrganizationUserResponseDto](src/Divvy/Models/ListResponseDtoOrganizationUserResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListPartnerUsersError](src/Divvy/Errors/ListPartnerUsersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;LoginAsUserResponseDto&gt; LoginAsUser(LoginAsUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sign in to a created organization as a created user of that organization. In the response, your API session is created and a generated `sessionId` is available for organization-level BILL API operations.

This endpoint is required for a specific BILL partner-level workflow.
1. Sign in to your partner account with API partner login.
2. Create a child BILL organization with `POST /v3/partner/organizations`. In the response, a BILL-generated organization `id` is available.
3. Create a user for the child BILL organization with `POST /v3/partner/users`. In the response, a BILL-generated user `id` is available.
4. Sign in to the created organization as the created user of that organization with `POST /v3/partner/login-as-user`. After signing in, you can perform organization-level BILL API operations, such as creating a bill or paying a vendor. All organization-level BILL API operations require a `devKey` and `sessionId`.

**Note**: When you create an organization and then create a user for that organization, it is important that you initiate risk verification with `POST /v3/risk-verifications`. See Initiate risk verification for an organization for more information.

This operation requires partner-level permissions.
* A `sessionId` header value generated with API partner login
* An `appKey` header value

You can sign out with `POST /v3/logout`. If your API session is inactive for 35 minutes, the session expires and you are automatically signed out.

### MFA-trusted API session
Set both `rememberMeId` and `device` as additional fields in your `POST /v3/partner/login-as-user` request to create an MFA-trusted API session.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Partner.LoginAsUser(new LoginAsUserRequest
    {
        SessionId = "{{partner_session_id}}",
        AppKey = "{{app_key}}",
        Body = new LoginAsUserRequestDto { UserId = "some example string", OrganizationId = "some example string" },
    });
    // TODO: Handle 'response' of type LoginAsUserResponseDto
}
catch (ApiException<LoginAsUserError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[LoginAsUserRequest](src/Divvy/Requests/Partner/LoginAsUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LoginAsUserResponseDto](src/Divvy/Models/LoginAsUserResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[LoginAsUserError](src/Divvy/Errors/LoginAsUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PartnerLoginResponseDto&gt; PartnerLogin(PartnerLoginRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sign in to your BILL partner account. In the response, your partner API session is created and a BILL-generated `sessionId` is available. Use the `sessionId` in all subsequent API calls to confirm that you are in a signed-in session.

You get additional permissions with a partner account `sessionId`.
* Create a child BILL organization with `POST /v3/partner/organizations`.
* Create a user for the child BILL organization with `POST /v3/partner/users`.
* Sign in to the created organization as the created user of that organization with `/v3/partner/login-as-user`. After signing in, you can perform organization-level BILL API operations, such as creating a bill or paying a vendor. All organization-level BILL API operations require a `devKey` and `sessionId`.

**Note**: When you create an organization and then create a user for that organization, it is important that you initiate risk verification with `POST /v3/risk-verifications`. See Initiate risk verification for an organization for more information.

You can sign out with `POST /v3/logout`. If your API session is inactive for 35 minutes, the session expires and you are automatically signed out.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Partner.PartnerLogin(new PartnerLoginRequest
    {
        Body = new PartnerLoginRequestDto
        {
            AppKey = "some example string",
            Username = "some example string",
            Password = "some example string",
        },
    });
    // TODO: Handle 'response' of type PartnerLoginResponseDto
}
catch (ApiException<PartnerLoginError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PartnerLoginRequest](src/Divvy/Requests/Partner/PartnerLoginRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PartnerLoginResponseDto](src/Divvy/Models/PartnerLoginResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[PartnerLoginError](src/Divvy/Errors/PartnerLoginError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OrganizationUserResponseDto&gt; RestorePartnerUser(RestorePartnerUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived user. In the response, the `archived` field is set as `false`.

You can perform any valid BILL operation on restored users. There is no change when you restore a restored user.

This operation requires partner-level permissions.
* A `sessionId` header value generated with API partner login
* An `appKey` header value
* The `organizationId` of the organization

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Partner.RestorePartnerUser(new RestorePartnerUserRequest
    {
        UserId = "{{partner_user_id}}",
        SessionId = "{{partner_session_id}}",
        AppKey = "{{app_key}}",
        OrganizationId = "{{partner_organization_id}}",
    });
    // TODO: Handle 'response' of type OrganizationUserResponseDto
}
catch (ApiException<RestorePartnerUserError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RestorePartnerUserRequest](src/Divvy/Requests/Partner/RestorePartnerUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationUserResponseDto](src/Divvy/Models/OrganizationUserResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[RestorePartnerUserError](src/Divvy/Errors/RestorePartnerUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StatusDto&gt; UpdateOrgPartnerPricePlan(UpdateOrgPartnerPricePlanRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the price plan for an existing organization.

When you onboard as a BILL partner, BILL works with you to set up price plans for the organizations you create. Your organizations can have up to 5 price plans. Each price plan is named in the `PricePlanN` format (`PricePlan1` up to `PricePlan5`).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Partner.UpdateOrgPartnerPricePlan(new UpdateOrgPartnerPricePlanRequest
    {
        OrganizationId = "{{partner_organization_id}}",
        SessionId = "{{partner_session_id}}",
        AppKey = "{{app_key}}",
        Body = new UpdateOrgPricePlanRequest { PricePlanType = PartnerPricePlanType.PricePlan1 },
    });
    // TODO: Handle 'response' of type StatusDto
}
catch (ApiException<UpdateOrgPartnerPricePlanError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateOrgPartnerPricePlanRequest](src/Divvy/Requests/Partner/UpdateOrgPartnerPricePlanRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StatusDto](src/Divvy/Models/StatusDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[UpdateOrgPartnerPricePlanError](src/Divvy/Errors/UpdateOrgPartnerPricePlanError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OrganizationUserResponseDto&gt; UpdatePartnerUser(UpdatePartnerUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing user.

This operation requires partner-level permissions.
* A `sessionId` header value generated with API partner login
* An `appKey` header value
* The `organizationId` of the organization

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Partner.UpdatePartnerUser(new UpdatePartnerUserRequest
    {
        UserId = "{{partner_user_id}}",
        SessionId = "{{partner_session_id}}",
        AppKey = "{{app_key}}",
        OrganizationId = "{{partner_organization_id}}",
        Body = new PartnerUserUpdateRequestDto(),
    });
    // TODO: Handle 'response' of type OrganizationUserResponseDto
}
catch (ApiException<UpdatePartnerUserError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdatePartnerUserRequest](src/Divvy/Requests/Partner/UpdatePartnerUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationUserResponseDto](src/Divvy/Models/OrganizationUserResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[UpdatePartnerUserError](src/Divvy/Errors/UpdatePartnerUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Payments

> Source: [Payments](src/Divvy/Api/Payments.cs)

<details>
<summary><code>Task&lt;PaymentResponseDto&gt; CancelPayment(CancelPaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel an existing payment.

You can cancel a payment only when the payment `singleStatus` is `SCHEDULED`. When BILL starts processing the payment, the payment `singleStatus` changes. At that point, you cannot cancel the payment. You can attempt to void the payment with `POST /v3/payments/{paymentId}/void`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Payments.CancelPayment(new CancelPaymentRequest
    {
        PaymentId = "{{payment_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type PaymentResponseDto
}
catch (ApiException<CancelPaymentError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CancelPaymentRequest](src/Divvy/Requests/Payments/CancelPaymentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentResponseDto](src/Divvy/Models/PaymentResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CancelPaymentError](src/Divvy/Errors/CancelPaymentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BulkPaymentResponseDto&gt; CreateBulkPayment(CreateBulkPaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a request for paying multiple bills. You can pay up to 50 bills with one `POST /v3/payments/bulk` request.

Bulk payments at BILL follow a set of rules.
* **Successful response**: In your bulk payment request, all your bill payments must be successful for a successful response. If any bill payment is not successful, the entire request fails and none of the bills in the request are paid.
* **You can pay multiple vendors**: You can pay multiple vendors with one `POST /v3/payments/bulk` request. In this case, make sure that you do not set `vendorId` in your request.
* **You can only pay existing bills**: When you create a single payment with `POST /v3/payments`, you can set `createBill` as `true` in your request for creating a new bill for a vendor payment. In your bulk payment request, an existing `billId` is required for each bill to be paid.
* **Vendors with `"combinePayments": true`**: When you create a bulk payment for a vendor that has `"combinePayments": true`, BILL combines payments for up to 35 bills in one `payments` response object, and then combines payments for the remaining bills in a second `payments` response object.

See Get list of vendor payment options to get details about vendor payment options and payment process dates.

**Note**: Creating a bulk payment requires an MFA-trusted API session. See MFA setup for information about the BILL MFA process.

See Payments in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Payments.CreateBulkPayment(new CreateBulkPaymentRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new BulkPaymentRequestDto
        {
            FundingAccount = new FundingAccount { Type = FundingAccountTypeRequest.BankAccount },
        },
    });
    // TODO: Handle 'response' of type BulkPaymentResponseDto
}
catch (ApiException<CreateBulkPaymentError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateBulkPaymentRequest](src/Divvy/Requests/Payments/CreateBulkPaymentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkPaymentResponseDto](src/Divvy/Models/BulkPaymentResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateBulkPaymentError](src/Divvy/Errors/CreateBulkPaymentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MassPaymentResponseDto&gt; CreateMassPayment(CreateMassPaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a mass payment request for up to 2000 bills. BILL processes each payment in the mass payment request asynchronously.

In the response, a BILL-generated payment batch ID is available. You can track the current status of each payment in a mass payment batch with `GET /v3/payments/mass/{paymentBatchId}`.

**Note**: Creating a mass payment requires an MFA-trusted API session. See MFA setup for information about the BILL MFA process.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Payments.CreateMassPayment(new CreateMassPaymentRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new BulkPaymentRequestDto
        {
            FundingAccount = new FundingAccount { Type = FundingAccountTypeRequest.BankAccount },
        },
    });
    // TODO: Handle 'response' of type MassPaymentResponseDto
}
catch (ApiException<CreateMassPaymentError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateMassPaymentRequest](src/Divvy/Requests/Payments/CreateMassPaymentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MassPaymentResponseDto](src/Divvy/Models/MassPaymentResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateMassPaymentError](src/Divvy/Errors/CreateMassPaymentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaymentResponseDto&gt; CreatePayment(CreatePaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a payment.

See Get list of vendor payment options to get details about vendor payment options and payment process dates.

**Note**: Creating a payment requires an MFA-trusted API session. See MFA setup for information about the BILL MFA process.

See Payments in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Payments.CreatePayment(new CreatePaymentRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new PaymentRequestDto
        {
            FundingAccount = new FundingAccount { Type = FundingAccountTypeRequest.BankAccount },
            Amount = 1.5d,
            ProcessingOptions = new ProcessingOptionsBillV3PaymentsApi(),
        },
    });
    // TODO: Handle 'response' of type PaymentResponseDto
}
catch (ApiException<CreatePaymentError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreatePaymentRequest](src/Divvy/Requests/Payments/CreatePaymentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentResponseDto](src/Divvy/Models/PaymentResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreatePaymentError](src/Divvy/Errors/CreatePaymentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CheckImageDataResponseDto&gt; GetCheckImageData(GetCheckImageDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get an image of an existing check sent to a vendor.

The check image is available when the vendor bank processes the check payment. BILL checks in with the bank every 30 minutes to get the check image. The image file format is determined by the vendor bank.

From the response, use `downloadLink` in a GET request to download the front and back images of the check.

```
curl '{downloadLink}' --header 'sessionId: {session_id}' --output {check_name}
```

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Payments.GetCheckImageData(new GetCheckImageDataRequest
    {
        PaymentId = "{{payment_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type CheckImageDataResponseDto
}
catch (ApiException<GetCheckImageDataError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCheckImageDataRequest](src/Divvy/Requests/Payments/GetCheckImageDataRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CheckImageDataResponseDto](src/Divvy/Models/CheckImageDataResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetCheckImageDataError](src/Divvy/Errors/GetCheckImageDataError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ExchangeRateResponseDto&gt; GetExchangeRate(GetExchangeRateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current BILL exchange rate and exchange rate batch ID for paying an international vendor. When the vendor bill currency is not `USD`, the exchange rate batch ID is required for creating a payment with `POST /v3/payments` or `POST /v3/payments/bulk`.

BILL maintains all `exchangeRate` values in a batch. When a batch expires, a new batch ID is generated and all `exchangeRate` values are updated in the new batch. Use this endpoint to get the current exchange rate and batch ID based on the payment amount and vendor bill currency.

In production, a BILL batch is valid for a maximum of 20 minutes. response provides the timestamp when the current batch will expire. For example, if a batch has been active for 17 minutes when you get the `exchangeRateBatchId`, `expirationTime` indicates that you have 3 minutes remaining (with `POST /v3/payments` or `POST /v3/payments/bulk`).

**Note**:
* International vendor payment information is required for you to get the BILL exchange rate with this endpoint.
* When the vendor bill currency is not `USD`, the payment `processDate` **must be** the next US business day.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Payments.GetExchangeRate(new GetExchangeRateRequest
    {
        VendorId = "{{vendor_id}}",
        Amount = 1000d,
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ExchangeRateResponseDto
}
catch (ApiException<GetExchangeRateError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetExchangeRateRequest](src/Divvy/Requests/Payments/GetExchangeRateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExchangeRateResponseDto](src/Divvy/Models/ExchangeRateResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetExchangeRateError](src/Divvy/Errors/GetExchangeRateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ExchangeRatesResponseDto&gt; GetExchangeRates(GetExchangeRatesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current BILL exchange rate and exchange rate batch ID for multiple international vendors with one API request. When the vendor bill currency is not `USD`, the exchange rate batch ID is required for creating a payment with `POST /v3/payments` or `POST /v3/payments/bulk`.

BILL maintains all `exchangeRate` values in a batch. When a batch expires, a new batch ID is generated and all `exchangeRate` values are updated in the new batch. Use this endpoint to get the current exchange rate and batch ID based on the payment amount and vendor bill currency.

In production, a BILL batch is valid for a maximum of 20 minutes. response provides the timestamp when the current batch will expire. For example, if a batch has been active for 17 minutes when you get the `exchangeRateBatchId`, `expirationTime` indicates that you have 3 minutes remaining (with `POST /v3/payments` or `POST /v3/payments/bulk`).

**Note**:
* International vendor payment information is required for you to get BILL exchange rates with this endpoint.
* When the vendor bill currency is not `USD`, the payment `processDate` **must be** the next US business day.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Payments.GetExchangeRates(new GetExchangeRatesRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = [new ExchangeRateRequestDto { VendorId = "some example string", Amount = 1.5d }],
    });
    // TODO: Handle 'response' of type ExchangeRatesResponseDto
}
catch (ApiException<GetExchangeRatesError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetExchangeRatesRequest](src/Divvy/Requests/Payments/GetExchangeRatesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExchangeRatesResponseDto](src/Divvy/Models/ExchangeRatesResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetExchangeRatesError](src/Divvy/Errors/GetExchangeRatesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MassPaymentDetailsResponseDto&gt; GetMassPayment(GetMassPaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing mass payment batch.

In the response, you get the status of each payment in the mass payment batch. Each payment is either `scheduled`, `completed`, or `failed`. In addition, you get the `count` for the total number of payments in the mass payments batch.

**Note**: From the list of `completed` payments in the response, BILL begins processing payments based on the payment `processDate`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Payments.GetMassPayment(new GetMassPaymentRequest
    {
        PaymentBatchId = "{{mass_payment_batch_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type MassPaymentDetailsResponseDto
}
catch (ApiException<GetMassPaymentError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetMassPaymentRequest](src/Divvy/Requests/Payments/GetMassPaymentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MassPaymentDetailsResponseDto](src/Divvy/Models/MassPaymentDetailsResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetMassPaymentError](src/Divvy/Errors/GetMassPaymentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaymentResponseDto&gt; GetPayment(GetPaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing payment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Payments.GetPayment(new GetPaymentRequest
    {
        PaymentId = "{{payment_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type PaymentResponseDto
}
catch (ApiException<GetPaymentError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPaymentRequest](src/Divvy/Requests/Payments/GetPaymentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentResponseDto](src/Divvy/Models/PaymentResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetPaymentError](src/Divvy/Errors/GetPaymentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaymentOptionsResponseDto&gt; ListPaymentOptions(ListPaymentOptionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of vendor payment options available based on the funding account options available in the signed-in user's BILL organization and on the payment methods accepted by a vendor.

See Vendor payment options in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Payments.ListPaymentOptions(new ListPaymentOptionsRequest
    {
        VendorId = "{{vendor_id}}",
        Amount = 100d,
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type PaymentOptionsResponseDto
}
catch (ApiException<ListPaymentOptionsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListPaymentOptionsRequest](src/Divvy/Requests/Payments/ListPaymentOptionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentOptionsResponseDto](src/Divvy/Models/PaymentOptionsResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListPaymentOptionsError](src/Divvy/Errors/ListPaymentOptionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListPaymentResponseDto&gt; ListPayments(ListPaymentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of payment objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Payments.ListPayments(new ListPaymentsRequest
    {
        Max = 10,
        Sort = "createdTime:desc",
        Filters = "id:eq:{{payment_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ListPaymentResponseDto
}
catch (ApiException<ListPaymentsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListPaymentsRequest](src/Divvy/Requests/Payments/ListPaymentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListPaymentResponseDto](src/Divvy/Models/ListPaymentResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListPaymentsError](src/Divvy/Errors/ListPaymentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaymentResponseDto&gt; VoidPayment(VoidPaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Void an existing payment.

Void a bill payment that has started processing and cannot be canceled (with `POST /v3/payments/{paymentId}/cancel`). You can attempt to void payments made both with BILL (online) and outside BILL (offline).

### Void a payment made with BILL (online)

In your /`POST /v3/payments/{paymentId}/void` request:
* Set `paymentId` as the BILL-generated ID of the payment. The value begins with `stp`.
* Set `type` as the void payment request type
* Set `reason` as the reason for voiding the payment

See Can I cancel or void a Payables payment? in the BILL Help Center to learn about the BILL void payment process and timing in the production environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Payments.VoidPayment(new VoidPaymentRequest
    {
        PaymentId = "{{payment_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new VoidRequestDto { Type = VoidTypeRequest.VoidAndCredit, Reason = "some example string" },
    });
    // TODO: Handle 'response' of type PaymentResponseDto
}
catch (ApiException<VoidPaymentError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[VoidPaymentRequest](src/Divvy/Requests/Payments/VoidPaymentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentResponseDto](src/Divvy/Models/PaymentResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[VoidPaymentError](src/Divvy/Errors/VoidPaymentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Reports

> Source: [Reports](src/Divvy/Api/Reports.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;AuditTrailEntry&gt;&gt; GetVendorAuditTrail(GetVendorAuditTrailRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get audit trail details about changes made to a vendor object. The audit trail lists records for each create and edit operation.

See Get audit trail details in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.GetVendorAuditTrail(new GetVendorAuditTrailRequest
    {
        VendorId = "{{vendor_id}}",
        Max = 10,
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type IReadOnlyList<AuditTrailEntry>
}
catch (ApiException<GetVendorAuditTrailError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetVendorAuditTrailRequest](src/Divvy/Requests/Reports/GetVendorAuditTrailRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[AuditTrailEntry](src/Divvy/Models/AuditTrailEntry.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetVendorAuditTrailError](src/Divvy/Errors/GetVendorAuditTrailError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Roles

> Source: [Roles](src/Divvy/Api/Roles.cs)

<details>
<summary><code>Task&lt;RoleResponseDto&gt; GetOrganizationUserRole(GetOrganizationUserRoleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing user role.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Roles.GetOrganizationUserRole(new GetOrganizationUserRoleRequest
    {
        RoleId = "{{org_user_role_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type RoleResponseDto
}
catch (ApiException<GetOrganizationUserRoleError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetOrganizationUserRoleRequest](src/Divvy/Requests/Roles/GetOrganizationUserRoleRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RoleResponseDto](src/Divvy/Models/RoleResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetOrganizationUserRoleError](src/Divvy/Errors/GetOrganizationUserRoleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListResponseDtoRoleResponseDto&gt; ListOrganizationUserRoles(ListOrganizationUserRolesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of user role objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Roles.ListOrganizationUserRoles(new ListOrganizationUserRolesRequest
    {
        Max = 10,
        Sort = "createdTime:desc",
        Filters = "id:eq:{{org_user_role_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ListResponseDtoRoleResponseDto
}
catch (ApiException<ListOrganizationUserRolesError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListOrganizationUserRolesRequest](src/Divvy/Requests/Roles/ListOrganizationUserRolesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoRoleResponseDto](src/Divvy/Models/ListResponseDtoRoleResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListOrganizationUserRolesError](src/Divvy/Errors/ListOrganizationUserRolesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Subscriptions

> Source: [Subscriptions](src/Divvy/Api/Subscriptions.cs)

<details>
<summary><code>Task&lt;SecurityKeyDto&gt; CreateNewSecurityKey(CreateNewSecurityKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new security key for your subscription.

When you create a new subscription, a one-time `securityKey` is one of the generated values in the response. All event notifications sent to your `notificationUrl` are signed with this key using the HMAC-SHA256 algorithm. The key is sent as the `x-bill-sha-signature` header value in the notification.

You can use the security key to verify all notifications sent to you. It is good practice to keep the security key for your subscription updated in a timely manner. You can use this endpoint to generate a new security key based on your desired frequency.

See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL events.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Subscriptions.CreateNewSecurityKey(new CreateNewSecurityKeyRequest
    {
        SubscriptionId = "{{webhook_subscription_id}}",
        XIdempotentKey = "{{webhook_idempotency_key}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        AppKey = "{{app_key}}",
        ApiToken = "{{api_token}}",
    });
    // TODO: Handle 'response' of type SecurityKeyDto
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateNewSecurityKeyRequest](src/Divvy/Requests/Subscriptions/CreateNewSecurityKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SecurityKeyDto](src/Divvy/Models/SecurityKeyDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Divvy/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SubscriptionWithSecurityKeyResponseDto&gt; CreateSubscription(CreateSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new event subscription. You can subscribe to multiple events with a single request. You can create up to 10 webhook subscriptions per organization.

BILL provides a full catalog of all the events that you can subscribe to with `GET /v3/events/catalog`. See Get events catalog in the API reference for more information.

See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL events.

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
        XIdempotentKey = "{{webhook_idempotency_key}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        AppKey = "{{app_key}}",
        ApiToken = "{{api_token}}",
        Body = new SubscriptionRequestDto
        {
            Name = "some example string",
            Status = new Status2(),
            Events = [new SubscriptionEventDto { Type = "some example string", Version = "some example string" }],
            NotificationUrl = "some example string",
        },
    });
    // TODO: Handle 'response' of type SubscriptionWithSecurityKeyResponseDto
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateSubscriptionRequest](src/Divvy/Requests/Subscriptions/CreateSubscriptionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionWithSecurityKeyResponseDto](src/Divvy/Models/SubscriptionWithSecurityKeyResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Divvy/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteSubscription(DeleteSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an existing subscription.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Subscriptions.DeleteSubscription(new DeleteSubscriptionRequest
    {
        SubscriptionId = "{{webhook_subscription_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        AppKey = "{{app_key}}",
        ApiToken = "{{api_token}}",
    });
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteSubscriptionRequest](src/Divvy/Requests/Subscriptions/DeleteSubscriptionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Divvy/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginationDtoSubscriptionResponseDto&gt; GetAllSubscriptions(GetAllSubscriptionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all your created subscriptions.

By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

**Note**: In this list operation, pagination is available only in one direction. The `nextPage` value is available in the response for you to retrieve the next page of results. However, you cannot retrieve the previous page of results.

See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL events.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Subscriptions.GetAllSubscriptions(new GetAllSubscriptionsRequest
    {
        Max = 10,
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        AppKey = "{{app_key}}",
        ApiToken = "{{api_token}}",
    });
    // TODO: Handle 'response' of type PaginationDtoSubscriptionResponseDto
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAllSubscriptionsRequest](src/Divvy/Requests/Subscriptions/GetAllSubscriptionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginationDtoSubscriptionResponseDto](src/Divvy/Models/PaginationDtoSubscriptionResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Divvy/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SubscriptionResponseDto&gt; GetSubscription(GetSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing subscription.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Subscriptions.GetSubscription(new GetSubscriptionRequest
    {
        SubscriptionId = "{{webhook_subscription_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        AppKey = "{{app_key}}",
        ApiToken = "{{api_token}}",
    });
    // TODO: Handle 'response' of type SubscriptionResponseDto
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSubscriptionRequest](src/Divvy/Requests/Subscriptions/GetSubscriptionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponseDto](src/Divvy/Models/SubscriptionResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Divvy/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SubscriptionResponseDto&gt; ReplaceSubscription(ReplaceSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the events that you are subscribed to.

You can use the PUT operation to add, remove, or replace events in a subscription. For example, you can replace the `bill.created` event with `bill.updated` in your subscription.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Subscriptions.ReplaceSubscription(new ReplaceSubscriptionRequest
    {
        SubscriptionId = "{{webhook_subscription_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        AppKey = "{{app_key}}",
        ApiToken = "{{api_token}}",
        Body = new SubscriptionRequestDto
        {
            Name = "some example string",
            Status = new Status2(),
            Events = [new SubscriptionEventDto { Type = "some example string", Version = "some example string" }],
            NotificationUrl = "some example string",
        },
    });
    // TODO: Handle 'response' of type SubscriptionResponseDto
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ReplaceSubscriptionRequest](src/Divvy/Requests/Subscriptions/ReplaceSubscriptionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponseDto](src/Divvy/Models/SubscriptionResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Divvy/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EventDto&gt; SendTestEvent(SendTestEventRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a new test event notification. After you create a subscription, use this endpoint for BILL to send a test event notification to your specified notification URL.

In your request, all the fields are optional. To see specific information in the test event notification, you can set `eventType`, `version`, and any details. You can get the BILL events catalog with `GET /v3/events/catalog`.

**Note**: All the fields in the test event notification are test values. You cannot use any of the test values for any other operation.

See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL events.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Subscriptions.SendTestEvent(new SendTestEventRequest
    {
        SubscriptionId = "{{webhook_subscription_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        AppKey = "{{app_key}}",
        ApiToken = "{{api_token}}",
        Body = new SendTestEventRequestDto(),
    });
    // TODO: Handle 'response' of type EventDto
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SendTestEventRequest](src/Divvy/Requests/Subscriptions/SendTestEventRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventDto](src/Divvy/Models/EventDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Divvy/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SubscriptionResponseDto&gt; UpdateSubscription(UpdateSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about a subscription.

You can use the PATCH operation to modify existing subscription details, such as `name`, `status`, and `notificationUrl`.

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
        SubscriptionId = "{{webhook_subscription_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        AppKey = "{{app_key}}",
        ApiToken = "{{api_token}}",
        Body = new SubscriptionUpdateRequestDto(),
    });
    // TODO: Handle 'response' of type SubscriptionResponseDto
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateSubscriptionRequest](src/Divvy/Requests/Subscriptions/UpdateSubscriptionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponseDto](src/Divvy/Models/SubscriptionResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Divvy/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Transactions

> Source: [Transactions](src/Divvy/Api/Transactions.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;ReceiptImage&gt;&gt; AddTransactionReceipt(AddTransactionReceiptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a receipt to an existing transaction.

In the request, use the same upload `url` that you used to upload the receipt image. See Create a transaction upload URL to learn about creating a transaction image upload URL.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Transactions.AddTransactionReceipt(new AddTransactionReceiptRequest
    {
        TransactionId = "{{se_transaction_uuid}}",
        ApiToken = "{{api_token}}",
        Body = new TransactionReceiptRequestDto { Url = "some example string" },
    });
    // TODO: Handle 'response' of type IReadOnlyList<ReceiptImage>
}
catch (ApiException<AddTransactionReceiptError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AddTransactionReceiptRequest](src/Divvy/Requests/Transactions/AddTransactionReceiptRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[ReceiptImage](src/Divvy/Models/ReceiptImage.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[AddTransactionReceiptError](src/Divvy/Errors/AddTransactionReceiptError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ReimbursementImageUploadUrlResponseDto&gt; CreateReceiptUploadUrl(CreateReceiptUploadUrlRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a transaction image upload URL.

From the response, use the upload `url` to upload a receipt image for the transaction. For example, to upload a JPEG image, use the following `curl` command. To upload a PNG image, set the content type as `image/png`.

```
curl '{upload_url}'
-H 'Content-Type: image/jpeg'
--upload-file {file_name_with_extension}
```

**Note**: BILL supports JPG and PNG file formats for transaction images.

See Transactions in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Transactions.CreateReceiptUploadUrl(new CreateReceiptUploadUrlRequest
    {
        ApiToken = "{{api_token}}",
    });
    // TODO: Handle 'response' of type ReimbursementImageUploadUrlResponseDto
}
catch (ApiException<CreateReceiptUploadUrlError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateReceiptUploadUrlRequest](src/Divvy/Requests/Transactions/CreateReceiptUploadUrlRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReimbursementImageUploadUrlResponseDto](src/Divvy/Models/ReimbursementImageUploadUrlResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateReceiptUploadUrlError](src/Divvy/Errors/CreateReceiptUploadUrlError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteTransactionReceipt(DeleteTransactionReceiptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a receipt from an existing transaction. A deleted receipt cannot be restored. The deleted receipt is not available in the transaction details.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Transactions.DeleteTransactionReceipt(new DeleteTransactionReceiptRequest
    {
        TransactionId = "{{se_transaction_uuid}}",
        ReceiptId = "{{se_transaction_receipt_uuid}}",
        ApiToken = "{{api_token}}",
    });
}
catch (ApiException<DeleteTransactionReceiptError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteTransactionReceiptRequest](src/Divvy/Requests/Transactions/DeleteTransactionReceiptRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[DeleteTransactionReceiptError](src/Divvy/Errors/DeleteTransactionReceiptError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TransactionResponseDto&gt; GetTransaction(GetTransactionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing transaction.

In the response, you get information about transactions, reversals, and refunds.
* **Transaction**: For a standard transaction, the `transactionType` is set as `AUTHORIZATION` or `DECLINE`. The status is updated to `CLEAR` once BILL moves the money from the funding account. The `CLEAR` transactions receive a new ID and reference to the original `AUTHORIZATION` transaction via the `originalAuthTransactionUuid` field.
* **Reversal**: For a reversal (a cancellation before funds are settled), the `transactionType` remains `AUTHORIZATION`, but the `amount` is typically a negative value.
* **Refund**: For a refund (a cancellation after funds are settled), the `transactionType` is set to `CLEAR` and the `amount` is a negative value.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Transactions.GetTransaction(new GetTransactionRequest
    {
        TransactionId = "{{se_transaction_uuid}}",
        ShowCustomFieldIds = "{{se_custom_field_uuid}}",
        ApiToken = "{{api_token}}",
    });
    // TODO: Handle 'response' of type TransactionResponseDto
}
catch (ApiException<GetTransactionError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetTransactionRequest](src/Divvy/Requests/Transactions/GetTransactionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransactionResponseDto](src/Divvy/Models/TransactionResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetTransactionError](src/Divvy/Errors/GetTransactionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginationResponseDtoCustomFieldValueDto&gt; ListTransactionCustomFieldValues(ListTransactionCustomFieldValuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of custom field value objects applied to an existing transaction. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Transactions.ListTransactionCustomFieldValues(
        new ListTransactionCustomFieldValuesRequest
        {
            TransactionId = "{{se_transaction_uuid}}",
            CustomFieldId = "{{se_custom_field_uuid}}",
            Max = 10L,
            ApiToken = "{{api_token}}",
        });
    // TODO: Handle 'response' of type PaginationResponseDtoCustomFieldValueDto
}
catch (ApiException<ListTransactionCustomFieldValuesError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListTransactionCustomFieldValuesRequest](src/Divvy/Requests/Transactions/ListTransactionCustomFieldValuesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginationResponseDtoCustomFieldValueDto](src/Divvy/Models/PaginationResponseDtoCustomFieldValueDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListTransactionCustomFieldValuesError](src/Divvy/Errors/ListTransactionCustomFieldValuesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListTransactionCustomFieldResponseDto&gt; ListTransactionCustomFields(ListTransactionCustomFieldsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of custom field objects applied to an existing transaction.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Transactions.ListTransactionCustomFields(new ListTransactionCustomFieldsRequest
    {
        TransactionId = "{{se_transaction_uuid}}",
        Filters = "customFieldIds:eq:{{se_custom_field_uuid}}",
        ApiToken = "{{api_token}}",
    });
    // TODO: Handle 'response' of type ListTransactionCustomFieldResponseDto
}
catch (ApiException<ListTransactionCustomFieldsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListTransactionCustomFieldsRequest](src/Divvy/Requests/Transactions/ListTransactionCustomFieldsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListTransactionCustomFieldResponseDto](src/Divvy/Models/ListTransactionCustomFieldResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListTransactionCustomFieldsError](src/Divvy/Errors/ListTransactionCustomFieldsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginationResponseDtoTransactionResponseDto&gt; ListTransactions(ListTransactionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of transaction objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 50 results on one page.

In the response, you get information about transactions, reversals, and refunds.
* **Transaction**: For a standard transaction, the `transactionType` is set as `AUTHORIZATION` or `DECLINE`. The status is updated to `CLEAR` once BILL moves the money from the funding account. The `CLEAR` transactions receive a new ID and reference to the original `AUTHORIZATION` transaction via the `originalAuthTransactionUuid` field.
* **Reversal**: For a reversal (a cancellation before funds are settled), the `transactionType` remains `AUTHORIZATION`, but the `amount` is typically a negative value.
* **Refund**: For a refund (a cancellation after funds are settled), the `transactionType` is set to `CLEAR` and the `amount` is a negative value.

**Note**: Only parent transactions are available in the response.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Transactions.ListTransactions(new ListTransactionsRequest
    {
        Max = 10L,
        Sort = "occurredTime:desc",
        Filters = "amount:gte:100.00",
        IncludeReceipts = true,
        ApiToken = "{{api_token}}",
    });
    // TODO: Handle 'response' of type PaginationResponseDtoTransactionResponseDto
}
catch (ApiException<ListTransactionsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListTransactionsRequest](src/Divvy/Requests/Transactions/ListTransactionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginationResponseDtoTransactionResponseDto](src/Divvy/Models/PaginationResponseDtoTransactionResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListTransactionsError](src/Divvy/Errors/ListTransactionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ThreeDsResponseDto&gt; ThreeDsChallenge(ThreeDsChallengeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Accept or reject a transaction 3D Secure (3DS) challenge.

When a transaction is created, a 3DS challenge may trigger to verify the identity of the cardholder. Use this endpoint to approve or deny the transaction. The Spend & Expense user must have the `ADMIN` user role to perform this operation.

Subscribe to the `spend.three-ds-challenge.created` event to get a webhook notification when a 3DS challenge is triggered for a transaction. See Spend & Expense 3DS challenge notification payload for more information.

See 3-D Secure - BILL Spend & Expense in the BILL Help Center to learn more about 3D Secure at BILL.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Transactions.ThreeDsChallenge(new ThreeDsChallengeRequest
    {
        AcsTransactionId = "{{se_transaction_uuid}}",
        ApiToken = "{{api_token}}",
        Body = new ThreeDsRequestDto { Action = ThreeDsActionType.Accept },
    });
    // TODO: Handle 'response' of type ThreeDsResponseDto
}
catch (ApiException<ThreeDsChallengeError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ThreeDsChallengeRequest](src/Divvy/Requests/Transactions/ThreeDsChallengeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ThreeDsResponseDto](src/Divvy/Models/ThreeDsResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ThreeDsChallengeError](src/Divvy/Errors/ThreeDsChallengeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TransactionResponseDto&gt; UpdateTransaction(UpdateTransactionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the budget for an existing transaction.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Transactions.UpdateTransaction(new UpdateTransactionRequest
    {
        TransactionId = "{{se_transaction_uuid}}",
        ApiToken = "{{api_token}}",
        Body = new UpdateTxRequestDto { BudgetId = "some example string" },
    });
    // TODO: Handle 'response' of type TransactionResponseDto
}
catch (ApiException<UpdateTransactionError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateTransactionRequest](src/Divvy/Requests/Transactions/UpdateTransactionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransactionResponseDto](src/Divvy/Models/TransactionResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[UpdateTransactionError](src/Divvy/Errors/UpdateTransactionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SpendStatusDto&gt; UpdateTransactionCustomFields(UpdateTransactionCustomFieldsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about custom fields and their values applied to an existing transaction.

You cannot update custom fields in a locked transaction. When a transaction is locked, `isLocked` is set as `true`. You can get information about your transactions with `GET /v3/spend/transactions` or `GET /v3/spend/transactions/{transactionId}.

See Lock or unlock custom fields for a transaction in the BILL Help Center for more information.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Transactions.UpdateTransactionCustomFields(new UpdateTransactionCustomFieldsRequest
    {
        TransactionId = "{{se_transaction_uuid}}",
        ApiToken = "{{api_token}}",
        Body = new BulkUpdateTxCustomFieldRequestDto
        {
            CustomFields = [new UpdateCustomFieldDto { CustomFieldId = "some example string" }],
        },
    });
    // TODO: Handle 'response' of type SpendStatusDto
}
catch (ApiException<UpdateTransactionCustomFieldsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateTransactionCustomFieldsRequest](src/Divvy/Requests/Transactions/UpdateTransactionCustomFieldsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SpendStatusDto](src/Divvy/Models/SpendStatusDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[UpdateTransactionCustomFieldsError](src/Divvy/Errors/UpdateTransactionCustomFieldsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](src/Divvy/Api/Users.cs)

<details>
<summary><code>Task&lt;UserResponseDto&gt; CreateUser(CreateUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new user.

See Budgets and Users in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.CreateUser(new CreateUserRequest
    {
        ApiToken = "{{api_token}}",
        Body = new CreateUserRequestDto
        {
            FirstName = "some example string",
            LastName = "some example string",
            Email = "some example string",
            Role = InputRoleType.Admin,
        },
    });
    // TODO: Handle 'response' of type UserResponseDto
}
catch (ApiException<CreateUserError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateUserRequest](src/Divvy/Requests/Users/CreateUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserResponseDto](src/Divvy/Models/UserResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateUserError](src/Divvy/Errors/CreateUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteUser(DeleteUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an existing user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Users.DeleteUser(new DeleteUserRequest { UserId = "{{se_user_uuid}}", ApiToken = "{{api_token}}" });
}
catch (ApiException<DeleteUserError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteUserRequest](src/Divvy/Requests/Users/DeleteUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[DeleteUserError](src/Divvy/Errors/DeleteUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UserResponseDto&gt; GetCurrentUser(GetCurrentUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about the current user. This is the user that generated the Spend & Expense API token.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.GetCurrentUser(new GetCurrentUserRequest { ApiToken = "{{api_token}}" });
    // TODO: Handle 'response' of type UserResponseDto
}
catch (ApiException<GetCurrentUserError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCurrentUserRequest](src/Divvy/Requests/Users/GetCurrentUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserResponseDto](src/Divvy/Models/UserResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetCurrentUserError](src/Divvy/Errors/GetCurrentUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UserResponseDto&gt; GetUser(GetUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.GetUser(new GetUserRequest
    {
        UserId = "{{se_user_uuid}}",
        ApiToken = "{{api_token}}",
    });
    // TODO: Handle 'response' of type UserResponseDto
}
catch (ApiException<GetUserError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetUserRequest](src/Divvy/Requests/Users/GetUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserResponseDto](src/Divvy/Models/UserResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetUserError](src/Divvy/Errors/GetUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginationResponseDtoUserResponseDto&gt; ListUsers(ListUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of user objects in the current user's company. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.ListUsers(new ListUsersRequest
    {
        Max = 10L,
        Filters = "retired:eq:false",
        ApiToken = "{{api_token}}",
    });
    // TODO: Handle 'response' of type PaginationResponseDtoUserResponseDto
}
catch (ApiException<ListUsersError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListUsersRequest](src/Divvy/Requests/Users/ListUsersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginationResponseDtoUserResponseDto](src/Divvy/Models/PaginationResponseDtoUserResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListUsersError](src/Divvy/Errors/ListUsersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UserResponseDto&gt; UpdateUser(UpdateUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.UpdateUser(new UpdateUserRequest
    {
        UserId = "{{se_user_uuid}}",
        ApiToken = "{{api_token}}",
        Body = new UpdateUserRequestDto(),
    });
    // TODO: Handle 'response' of type UserResponseDto
}
catch (ApiException<UpdateUserError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateUserRequest](src/Divvy/Requests/Users/UpdateUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserResponseDto](src/Divvy/Models/UserResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[UpdateUserError](src/Divvy/Errors/UpdateUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VendorCredits

> Source: [VendorCredits](src/Divvy/Api/VendorCredits.cs)

<details>
<summary><code>Task&lt;VendorCreditResponseDto&gt; ArchiveVendorCredit(ArchiveVendorCreditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing vendor credit. In the response, the `archived` field is set as `true`. An archived vendor credit cannot be restored.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.VendorCredits.ArchiveVendorCredit(new ArchiveVendorCreditRequest
    {
        VendorCreditId = "{{vendor_credit_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type VendorCreditResponseDto
}
catch (ApiException<ArchiveVendorCreditError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ArchiveVendorCreditRequest](src/Divvy/Requests/VendorCredits/ArchiveVendorCreditRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VendorCreditResponseDto](src/Divvy/Models/VendorCreditResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ArchiveVendorCreditError](src/Divvy/Errors/ArchiveVendorCreditError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VendorCreditBulkResponseDto&gt; BulkArchiveVendorCredit(BulkArchiveVendorCreditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive multiple vendor credits with one API request. In the response, the `archived` field for each object is set as `true`. An archived vendor credit cannot be restored.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.VendorCredits.BulkArchiveVendorCredit(new BulkArchiveVendorCreditRequest
    {
        Ids = "{{vendor_credit_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type VendorCreditBulkResponseDto
}
catch (ApiException<BulkArchiveVendorCreditError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkArchiveVendorCreditRequest](src/Divvy/Requests/VendorCredits/BulkArchiveVendorCreditRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VendorCreditBulkResponseDto](src/Divvy/Models/VendorCreditBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkArchiveVendorCreditError](src/Divvy/Errors/BulkArchiveVendorCreditError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VendorCreditBulkResponseDto&gt; BulkCreateVendorCredit(BulkCreateVendorCreditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple vendor credits with one API request. You can create up to 50 vendor credits with one `POST /v3/vendor-credits/bulk` request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.VendorCredits.BulkCreateVendorCredit(new BulkCreateVendorCreditRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = [
            new CreateVendorCreditRequestDto
            {
                VendorId = "some example string",
                ReferenceNumber = "some example string",
                CreditDate = DateTimeOffset.Parse("2024-01-15T00:00:00Z"),
                VendorCreditLineItems = [new CreateVendorCreditLineItemDto { Amount = 1.5d }],
            },
        ],
    });
    // TODO: Handle 'response' of type VendorCreditBulkResponseDto
}
catch (ApiException<BulkCreateVendorCreditError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkCreateVendorCreditRequest](src/Divvy/Requests/VendorCredits/BulkCreateVendorCreditRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VendorCreditBulkResponseDto](src/Divvy/Models/VendorCreditBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkCreateVendorCreditError](src/Divvy/Errors/BulkCreateVendorCreditError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VendorCreditBulkResponseDto&gt; BulkReplaceVendorCredit(BulkReplaceVendorCreditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the number of line items in multiple vendor credits with one API request. You can also update other details for each vendor credit.

You can use the PUT operation to add, remove, or replace the number of line items in a vendor credit. A set of rules apply with the PUT operation.
* When you add a new line item, a new line item `id` is generated in the vendor credit.
* When you omit an existing line item `id`, the line item is removed from the vendor credit.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.VendorCredits.BulkReplaceVendorCredit(new BulkReplaceVendorCreditRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = [
            new ReplaceVendorCreditWithIdRequestDto
            {
                Id = "some example string",
                VendorId = "some example string",
                ReferenceNumber = "some example string",
                CreditDate = DateTimeOffset.Parse("2024-01-15T00:00:00Z"),
                VendorCreditLineItems = [new ReplaceVendorCreditLineItemDto { Amount = 1.5d }],
            },
        ],
    });
    // TODO: Handle 'response' of type VendorCreditBulkResponseDto
}
catch (ApiException<BulkReplaceVendorCreditError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkReplaceVendorCreditRequest](src/Divvy/Requests/VendorCredits/BulkReplaceVendorCreditRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VendorCreditBulkResponseDto](src/Divvy/Models/VendorCreditBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkReplaceVendorCreditError](src/Divvy/Errors/BulkReplaceVendorCreditError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VendorCreditBulkResponseDto&gt; BulkUpdateVendorCredit(BulkUpdateVendorCreditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about line items in multiple vendor credits with one API request. You can also update other vendor credit details.

You can use the PATCH operation to modify line item details, such as `amount`, `quantity`, and `description`. The vendor credit line item `id` does not change with a PATCH operation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.VendorCredits.BulkUpdateVendorCredit(new BulkUpdateVendorCreditRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = [new UpdateVendorCreditWithIdRequestDto { Id = "some example string" }],
    });
    // TODO: Handle 'response' of type VendorCreditBulkResponseDto
}
catch (ApiException<BulkUpdateVendorCreditError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkUpdateVendorCreditRequest](src/Divvy/Requests/VendorCredits/BulkUpdateVendorCreditRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VendorCreditBulkResponseDto](src/Divvy/Models/VendorCreditBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkUpdateVendorCreditError](src/Divvy/Errors/BulkUpdateVendorCreditError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VendorCreditResponseDto&gt; CreateVendorCredit(CreateVendorCreditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a vendor credit.

With a vendor credit, you can adjust the amount that you owe a vendor.

See Vendor credits in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.VendorCredits.CreateVendorCredit(new CreateVendorCreditRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new CreateVendorCreditRequestDto
        {
            VendorId = "some example string",
            ReferenceNumber = "some example string",
            CreditDate = DateTimeOffset.Parse("2024-01-15T00:00:00Z"),
            VendorCreditLineItems = [new CreateVendorCreditLineItemDto { Amount = 1.5d }],
        },
    });
    // TODO: Handle 'response' of type VendorCreditResponseDto
}
catch (ApiException<CreateVendorCreditError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateVendorCreditRequest](src/Divvy/Requests/VendorCredits/CreateVendorCreditRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VendorCreditResponseDto](src/Divvy/Models/VendorCreditResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateVendorCreditError](src/Divvy/Errors/CreateVendorCreditError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VendorCreditWithUsageResponseDto&gt; GetVendorCredit(GetVendorCreditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing vendor credit.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.VendorCredits.GetVendorCredit(new GetVendorCreditRequest
    {
        VendorCreditId = "{{vendor_credit_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type VendorCreditWithUsageResponseDto
}
catch (ApiException<GetVendorCreditError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetVendorCreditRequest](src/Divvy/Requests/VendorCredits/GetVendorCreditRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VendorCreditWithUsageResponseDto](src/Divvy/Models/VendorCreditWithUsageResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetVendorCreditError](src/Divvy/Errors/GetVendorCreditError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListResponseDtoVendorCreditWithUsageResponseDto&gt; ListVendorCredits(ListVendorCreditsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of vendor credit objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.VendorCredits.ListVendorCredits(new ListVendorCreditsRequest
    {
        Max = 10,
        Sort = "createdTime:desc",
        Filters = "id:eq:{{vendor_credit_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ListResponseDtoVendorCreditWithUsageResponseDto
}
catch (ApiException<ListVendorCreditsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListVendorCreditsRequest](src/Divvy/Requests/VendorCredits/ListVendorCreditsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoVendorCreditWithUsageResponseDto](src/Divvy/Models/ListResponseDtoVendorCreditWithUsageResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListVendorCreditsError](src/Divvy/Errors/ListVendorCreditsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VendorCreditResponseDto&gt; ReplaceVendorCredit(ReplaceVendorCreditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the number of line items in a vendor credit. You can also update other vendor credit details.

You can use the PUT operation to add, remove, or replace the number of line items in a vendor credit. A set of rules apply with the PUT operation.
* When you add a new line item, a new line item `id` is generated in the vendor credit.
* When you omit an existing line item `id`, the line item is removed from the vendor credit.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.VendorCredits.ReplaceVendorCredit(new ReplaceVendorCreditRequest
    {
        VendorCreditId = "{{vendor_credit_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new ReplaceVendorCreditRequestDto
        {
            VendorId = "some example string",
            ReferenceNumber = "some example string",
            CreditDate = DateTimeOffset.Parse("2024-01-15T00:00:00Z"),
            VendorCreditLineItems = [new ReplaceVendorCreditLineItemDto { Amount = 1.5d }],
        },
    });
    // TODO: Handle 'response' of type VendorCreditResponseDto
}
catch (ApiException<ReplaceVendorCreditError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ReplaceVendorCreditRequest](src/Divvy/Requests/VendorCredits/ReplaceVendorCreditRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VendorCreditResponseDto](src/Divvy/Models/VendorCreditResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ReplaceVendorCreditError](src/Divvy/Errors/ReplaceVendorCreditError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VendorCreditResponseDto&gt; UpdateVendorCredit(UpdateVendorCreditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about a vendor credit line item. You can also update other vendor credit line item details.

You can use the PATCH operation to modify line item details, such as `amount`, `quantity`, and `description`. The vendor credit line item `id` does not change with a PATCH operation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.VendorCredits.UpdateVendorCredit(new UpdateVendorCreditRequest
    {
        VendorCreditId = "{{vendor_credit_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new UpdateVendorCreditRequestDto(),
    });
    // TODO: Handle 'response' of type VendorCreditResponseDto
}
catch (ApiException<UpdateVendorCreditError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateVendorCreditRequest](src/Divvy/Requests/VendorCredits/UpdateVendorCreditRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VendorCreditResponseDto](src/Divvy/Models/VendorCreditResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[UpdateVendorCreditError](src/Divvy/Errors/UpdateVendorCreditError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Vendors

> Source: [Vendors](src/Divvy/Api/Vendors.cs)

<details>
<summary><code>Task&lt;VendorResponseDto&gt; ArchiveVendor(ArchiveVendorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing vendor. In the response, the `archived` field is set as `true`.

You can restore an archived vendor with `POST /v3/vendors/{vendorId}/restore`. There is no change when you archive an archived vendor.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Vendors.ArchiveVendor(new ArchiveVendorRequest
    {
        VendorId = "{{vendor_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type VendorResponseDto
}
catch (ApiException<ArchiveVendorError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ArchiveVendorRequest](src/Divvy/Requests/Vendors/ArchiveVendorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VendorResponseDto](src/Divvy/Models/VendorResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ArchiveVendorError](src/Divvy/Errors/ArchiveVendorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BulkVendorResponseDto&gt; CreateBulkVendor(CreateBulkVendorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple vendors with one API request. You can create up to 20 vendors with one `POST /v3/vendors/bulk` request.

In your bulk vendor creation request, all your vendors must be successfully created for a successful response. If any vendor creation is not successful, the entire request fails and none of the vendors in the request are created.

### Requirements for enabling vendor payments

Vendor address details are required for paying a vendor by check or for inviting the vendor to join the BILL network.
* `line1`
* `city`
* `zipOrPostalCode`
* `country`
* `payeeName`

**Note**: A vendor can be enrolled to accept virtual card payments even without being connected in the BILL network. See Virtual card FAQ in the BILL Help Center for more information.

### Requirements for enabling electronic payments to vendors

Vendor bank account details are required for paying a vendor with electronic payment methods.

`paymentInformation` details about bank accounts are required for adding a vendor bank account.
* `payeeName`
* `bankCountry` (for international vendors)
* `paymentCurrency` (for international vendors)
* `nameOnAccount`
* `accountNumber`
* `routingNumber` (empty for an IBAN `accountNumber`)
* `type` (for international vendors)

`regulatoryFields` and `paymentPurpose` are additional required fields for enabling electronic payments to international vendors (not United States) in specific countries.

**Note**: When you add a vendor bank account in the production environment, BILL requires 2 business days to complete a one-time verification of the bank account. To pay such a vendor, you must set a `processDate` that is 2 business days from the current date.

See Vendors in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Vendors.CreateBulkVendor(new CreateBulkVendorRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = [
            new VendorRequestDto
            {
                Name = "some example string",
                Address = new Address4
                {
                    Line1 = "some example string",
                    City = "some example string",
                    ZipOrPostalCode = "some example string",
                    Country = CountryCode.Ad,
                },
            },
        ],
    });
    // TODO: Handle 'response' of type BulkVendorResponseDto
}
catch (ApiException<CreateBulkVendorError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateBulkVendorRequest](src/Divvy/Requests/Vendors/CreateBulkVendorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkVendorResponseDto](src/Divvy/Models/BulkVendorResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateBulkVendorError](src/Divvy/Errors/CreateBulkVendorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VendorResponseDto&gt; CreateVendor(CreateVendorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new vendor.

### Requirements for enabling vendor payments

Vendor address details are required for paying a vendor by check or for inviting the vendor to join the BILL network.
* `line1`
* `city`
* `zipOrPostalCode`
* `country`
* `payeeName`

**Note**: A vendor can be enrolled to accept virtual card payments even without being connected in the BILL network. See Virtual card FAQ in the BILL Help Center for more information.

### Requirements for enabling electronic payments to vendors

Vendor bank account details are required for paying a vendor with electronic payment methods.

`paymentInformation` details about bank accounts are required for adding a vendor bank account.
* `payeeName`
* `bankCountry` (for international vendors)
* `paymentCurrency` (for international vendors)
* `nameOnAccount`
* `accountNumber`
* `routingNumber` (empty for an IBAN `accountNumber`)
* `type` (for international vendors)

`regulatoryFields` and `paymentPurpose` are additional required fields for enabling electronic payments to international vendors (not United States) in specific countries.

**Note**: When you add a vendor bank account in the production environment, BILL requires 2 business days to complete a one-time verification of the bank account. To pay such a vendor, you must set a `processDate` that is 2 business days from the current date.

See Vendors in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Vendors.CreateVendor(new CreateVendorRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new VendorRequestDto
        {
            Name = "some example string",
            Address = new Address4
            {
                Line1 = "some example string",
                City = "some example string",
                ZipOrPostalCode = "some example string",
                Country = CountryCode.Ad,
            },
        },
    });
    // TODO: Handle 'response' of type VendorResponseDto
}
catch (ApiException<CreateVendorError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateVendorRequest](src/Divvy/Requests/Vendors/CreateVendorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VendorResponseDto](src/Divvy/Models/VendorResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateVendorError](src/Divvy/Errors/CreateVendorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VendorBankAccountResponseDto&gt; CreateVendorBankAccount(CreateVendorBankAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a vendor bank account for an existing vendor.

To update vendor bank account information, you must first delete the existing vendor bank account (with `DELETE /v3/vendors/{vendorId}/bank-account`), and then create a new vendor bank account (with `POST /v3/vendors/{vendorId}/bank-account`) with the updated information.

**Note**: When you add a vendor bank account in the production environment, BILL requires 2 business days to complete a one-time verification of the bank account. To pay such a vendor, you must set a `processDate` that is 2 business days from the current date.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Vendors.CreateVendorBankAccount(new CreateVendorBankAccountRequest
    {
        VendorId = "{{vendor_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new VendorBankAccountRequestDto { AccountNumber = "some example string" },
    });
    // TODO: Handle 'response' of type VendorBankAccountResponseDto
}
catch (ApiException<CreateVendorBankAccountError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateVendorBankAccountRequest](src/Divvy/Requests/Vendors/CreateVendorBankAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VendorBankAccountResponseDto](src/Divvy/Models/VendorBankAccountResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateVendorBankAccountError](src/Divvy/Errors/CreateVendorBankAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteVendorBankAccount(DeleteVendorBankAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete the existing vendor bank account for a vendor.

To update vendor bank account information, you must first delete the existing vendor bank account (with `DELETE /v3/vendors/{vendorId}/bank-account`), and then create a new vendor bank account (with `POST /v3/vendors/{vendorId}/bank-account`) with the updated information.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Vendors.DeleteVendorBankAccount(new DeleteVendorBankAccountRequest
    {
        VendorId = "{{vendor_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
}
catch (ApiException<DeleteVendorBankAccountError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteVendorBankAccountRequest](src/Divvy/Requests/Vendors/DeleteVendorBankAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[DeleteVendorBankAccountError](src/Divvy/Errors/DeleteVendorBankAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VendorConfigurationResponseDto&gt; GetConfigurationByVendorId(GetConfigurationByVendorIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get international payments (not USD) configuration after vendor creation. This configuration is required for compliance with international payment rules of a vendor country and vendor bank account.

In the response, the required `paymentPurpose` and `regulatoryFields` information is retrieved for the vendor.

**Note**: If you are adding `paymentPurpose` and `regulatoryFields` information during international vendor creation, use `GET /v3/vendors/configuration/international-payments` to get the required configuration before vendor creation.

See Create an international vendor for more information on how to set `paymentPurpose` and `regulatoryFields`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Vendors.GetConfigurationByVendorId(new GetConfigurationByVendorIdRequest
    {
        VendorId = "{{vendor_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type VendorConfigurationResponseDto
}
catch (ApiException<GetConfigurationByVendorIdError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetConfigurationByVendorIdRequest](src/Divvy/Requests/Vendors/GetConfigurationByVendorIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VendorConfigurationResponseDto](src/Divvy/Models/VendorConfigurationResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetConfigurationByVendorIdError](src/Divvy/Errors/GetConfigurationByVendorIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IntlPmtsConfigurationResponseDto&gt; GetIntlConfig(GetIntlConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get international payments (not USD) configuration that is required for compliance with international payment rules of a vendor country and vendor bank account.

This information is based on vendor country, bill currency, and vendor account type. Use this endpoint for getting information before creating an international vendor. In the response, the required `paymentPurpose` and `regulatoryFields` information is retrieved for the vendor.

**Note**: If you are adding `paymentPurpose` and `regulatoryFields` information after creating an international vendor, use `GET /v3/vendors/{vendorId}/configuration` to get the required configuration for your created vendor.

See Create an international vendor for more information on how to set `paymentPurpose` and `regulatoryFields`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Vendors.GetIntlConfig(new GetIntlConfigRequest
    {
        Country = CountryCode.Ad,
        BillCurrency = CurrencyCode.Aed,
        AccountType = AccountTypeRequest.None,
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type IntlPmtsConfigurationResponseDto
}
catch (ApiException<GetIntlConfigError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetIntlConfigRequest](src/Divvy/Requests/Vendors/GetIntlConfigRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IntlPmtsConfigurationResponseDto](src/Divvy/Models/IntlPmtsConfigurationResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetIntlConfigError](src/Divvy/Errors/GetIntlConfigError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VendorResponseDto&gt; GetVendor(GetVendorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing vendor.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Vendors.GetVendor(new GetVendorRequest
    {
        VendorId = "{{vendor_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type VendorResponseDto
}
catch (ApiException<GetVendorError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetVendorRequest](src/Divvy/Requests/Vendors/GetVendorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VendorResponseDto](src/Divvy/Models/VendorResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetVendorError](src/Divvy/Errors/GetVendorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VendorBankAccountResponseDto&gt; GetVendorBankAccount(GetVendorBankAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing vendor bank account.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Vendors.GetVendorBankAccount(new GetVendorBankAccountRequest
    {
        VendorId = "{{vendor_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type VendorBankAccountResponseDto
}
catch (ApiException<GetVendorBankAccountError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetVendorBankAccountRequest](src/Divvy/Requests/Vendors/GetVendorBankAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VendorBankAccountResponseDto](src/Divvy/Models/VendorBankAccountResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetVendorBankAccountError](src/Divvy/Errors/GetVendorBankAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListVendorResponseDto&gt; ListVendors(ListVendorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of vendor objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Vendors.ListVendors(new ListVendorsRequest
    {
        Max = 10,
        Sort = "createdTime:desc",
        Filters = "id:eq:{{vendor_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ListVendorResponseDto
}
catch (ApiException<ListVendorsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListVendorsRequest](src/Divvy/Requests/Vendors/ListVendorsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListVendorResponseDto](src/Divvy/Models/ListVendorResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListVendorsError](src/Divvy/Errors/ListVendorsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VendorResponseDto&gt; RestoreVendor(RestoreVendorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived vendor. In the response, the `archived` field is set as `false`.

You can perform any valid BILL operation on restored vendors. There is no change when you restore a restored vendor.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Vendors.RestoreVendor(new RestoreVendorRequest
    {
        VendorId = "{{vendor_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type VendorResponseDto
}
catch (ApiException<RestoreVendorError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RestoreVendorRequest](src/Divvy/Requests/Vendors/RestoreVendorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VendorResponseDto](src/Divvy/Models/VendorResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[RestoreVendorError](src/Divvy/Errors/RestoreVendorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VendorResponseDto&gt; UpdateVendor(UpdateVendorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing vendor.

### Requirements for enabling vendor payments

Vendor address details are required for paying a vendor by check or for inviting the vendor to join the BILL network.
* `line1`
* `city`
* `zipOrPostalCode`
* `country`
* `payeeName`

**Note**: You cannot add or update vendor bank account information with this endpoint. You can add and manage vendor bank account information with a dedicated set of endpoints.
* **Create a vendor bank account**: `POST /v3/vendors/{vendorId}/bank-account`
* **Get vendor bank account details**: `GET /v3/vendors/{vendorId}/bank-account`
* **Delete a vendor bank account**: `DELETE /v3/vendors/{vendorId}/bank-account`

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Vendors.UpdateVendor(new UpdateVendorRequest
    {
        VendorId = "{{vendor_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new VendorUpdateRequestDto(),
    });
    // TODO: Handle 'response' of type VendorResponseDto
}
catch (ApiException<UpdateVendorError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateVendorRequest](src/Divvy/Requests/Vendors/UpdateVendorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VendorResponseDto](src/Divvy/Models/VendorResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[UpdateVendorError](src/Divvy/Errors/UpdateVendorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## BillApprovals

> Source: [BillApprovals](src/Divvy/Api/BillApprovals.cs)

<details>
<summary><code>Task&lt;StatusDto&gt; BillApproveDenyActions(BillApproveDenyActionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Approve or deny a bill. Approved bills can be paid. In the request, create an array of objects, where each object represents a single bill along with its approval or denial status.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BillApprovals.BillApproveDenyActions(new BillApproveDenyActionsRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = [
            new BillApproveDenyActionRequestDto
            {
                BillId = "some example string",
                Action = BillApproveDenyAction.Approve,
            },
        ],
    });
    // TODO: Handle 'response' of type StatusDto
}
catch (ApiException<BillApproveDenyActionsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BillApproveDenyActionsRequest](src/Divvy/Requests/BillApprovals/BillApproveDenyActionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StatusDto](src/Divvy/Models/StatusDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BillApproveDenyActionsError](src/Divvy/Errors/BillApproveDenyActionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BillApprovalPolicyResponseDto&gt; CreateBillApprovalPolicy(CreateBillApprovalPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new bill approval policy.

In your request, set `rules` and `approvers` in the specified format. For example, to create a bill approval policy for all bills greater than or equal to `$1000`, set `rules` for `BILL_AMOUNT`.
```
{
"policyName": "Approval policy for bills >= $1000",
"rules": [
{
"key": "BILL_AMOUNT",
"op": "gte",
"values": [
"1000"
]
}
],
"approvers": [
"{approver_user_id}"
]
}
```

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BillApprovals.CreateBillApprovalPolicy(new CreateBillApprovalPolicyRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new BillApprovalPolicyRequestDto
        {
            PolicyName = "some example string",
            Rules = [new BillApprovalPolicyCreateRuleDto()],
            Approvers = ["some example string"],
        },
    });
    // TODO: Handle 'response' of type BillApprovalPolicyResponseDto
}
catch (ApiException<CreateBillApprovalPolicyError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateBillApprovalPolicyRequest](src/Divvy/Requests/BillApprovals/CreateBillApprovalPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BillApprovalPolicyResponseDto](src/Divvy/Models/BillApprovalPolicyResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateBillApprovalPolicyError](src/Divvy/Errors/CreateBillApprovalPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StatusDto&gt; DeletePolicy(DeletePolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an existing bill approval policy. A deleted approval policy cannot be restored. The deleted policy is not available in the list of approval policies.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BillApprovals.DeletePolicy(new DeletePolicyRequest
    {
        PolicyId = "{{bill_approval_policy_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type StatusDto
}
catch (ApiException<DeletePolicyError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeletePolicyRequest](src/Divvy/Requests/BillApprovals/DeletePolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StatusDto](src/Divvy/Models/StatusDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[DeletePolicyError](src/Divvy/Errors/DeletePolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;BillApprovalPolicyResponseDto&gt;&gt; ListBillApprovalPolicies(ListBillApprovalPoliciesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of bill approval policy objects.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BillApprovals.ListBillApprovalPolicies(new ListBillApprovalPoliciesRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type IReadOnlyList<BillApprovalPolicyResponseDto>
}
catch (ApiException<ListBillApprovalPoliciesError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListBillApprovalPoliciesRequest](src/Divvy/Requests/BillApprovals/ListBillApprovalPoliciesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[BillApprovalPolicyResponseDto](src/Divvy/Models/BillApprovalPolicyResponseDto.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListBillApprovalPoliciesError](src/Divvy/Errors/ListBillApprovalPoliciesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListBillUserApprovalsResponseDto&gt; ListBillUserApprovals(ListBillUserApprovalsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of bills that are pending approval by a user. In the response, you get the list of bills that are pending approval for the currently signed-in user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BillApprovals.ListBillUserApprovals(new ListBillUserApprovalsRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ListBillUserApprovalsResponseDto
}
catch (ApiException<ListBillUserApprovalsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListBillUserApprovalsRequest](src/Divvy/Requests/BillApprovals/ListBillUserApprovalsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListBillUserApprovalsResponseDto](src/Divvy/Models/ListBillUserApprovalsResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListBillUserApprovalsError](src/Divvy/Errors/ListBillUserApprovalsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BillApprovalPolicyResponseDto&gt; UpdateBillApprovalPolicy(UpdateBillApprovalPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing bill approval policy.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BillApprovals.UpdateBillApprovalPolicy(new UpdateBillApprovalPolicyRequest
    {
        PolicyId = "{{bill_approval_policy_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new BillApprovalPolicyRequestDto
        {
            PolicyName = "some example string",
            Rules = [new BillApprovalPolicyCreateRuleDto()],
            Approvers = ["some example string"],
        },
    });
    // TODO: Handle 'response' of type BillApprovalPolicyResponseDto
}
catch (ApiException<UpdateBillApprovalPolicyError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateBillApprovalPolicyRequest](src/Divvy/Requests/BillApprovals/UpdateBillApprovalPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BillApprovalPolicyResponseDto](src/Divvy/Models/BillApprovalPolicyResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[UpdateBillApprovalPolicyError](src/Divvy/Errors/UpdateBillApprovalPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CreditMemos

> Source: [CreditMemos](src/Divvy/Api/CreditMemos.cs)

<details>
<summary><code>Task&lt;CreditMemoResponseDto&gt; ArchiveCreditMemo(ArchiveCreditMemoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing credit memo. In the response, the `archived` field is set as `true`.

You can restore an archived credit memo with
`POST /v3/credit-memos/{creditMemoId}/restore`. There is no change when you archive an archived credit memo.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CreditMemos.ArchiveCreditMemo(new ArchiveCreditMemoRequest
    {
        CreditMemoId = "{{credit_memo_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type CreditMemoResponseDto
}
catch (ApiException<ArchiveCreditMemoError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ArchiveCreditMemoRequest](src/Divvy/Requests/CreditMemos/ArchiveCreditMemoRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreditMemoResponseDto](src/Divvy/Models/CreditMemoResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ArchiveCreditMemoError](src/Divvy/Errors/ArchiveCreditMemoError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CreditMemoBulkResponseDto&gt; BulkArchiveCreditMemo(BulkArchiveCreditMemoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive multiple credit memos with one API request. In the response, the `archived` field for each object is set as `true`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CreditMemos.BulkArchiveCreditMemo(new BulkArchiveCreditMemoRequest
    {
        Ids = "{{credit_memo_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type CreditMemoBulkResponseDto
}
catch (ApiException<BulkArchiveCreditMemoError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkArchiveCreditMemoRequest](src/Divvy/Requests/CreditMemos/BulkArchiveCreditMemoRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreditMemoBulkResponseDto](src/Divvy/Models/CreditMemoBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkArchiveCreditMemoError](src/Divvy/Errors/BulkArchiveCreditMemoError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CreditMemoBulkResponseDto&gt; BulkCreateCreditMemo(BulkCreateCreditMemoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple credit memos with one API request. You can create up to 50 credit memos with one `POST /v3/credit-memos/bulk` request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CreditMemos.BulkCreateCreditMemo(new BulkCreateCreditMemoRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = [
            new CreateCreditMemoRequestDto
            {
                CustomerId = "some example string",
                ReferenceNumber = "some example string",
                CreditDate = DateTimeOffset.Parse("2024-01-15T00:00:00Z"),
                CreditMemoLineItems = [new CreateCreditMemoLineItemDto()],
            },
        ],
    });
    // TODO: Handle 'response' of type CreditMemoBulkResponseDto
}
catch (ApiException<BulkCreateCreditMemoError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkCreateCreditMemoRequest](src/Divvy/Requests/CreditMemos/BulkCreateCreditMemoRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreditMemoBulkResponseDto](src/Divvy/Models/CreditMemoBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkCreateCreditMemoError](src/Divvy/Errors/BulkCreateCreditMemoError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CreditMemoBulkResponseDto&gt; BulkReplaceCreditMemo(BulkReplaceCreditMemoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the number of line items in multiple credit memos with one API request. You can also update other details for each credit memo.

You can use the PUT operation to add, remove, or replace the number of line items in a credit memo. A set of rules apply with the PUT operation.
* When you add a new line item, a new line item `id` is generated in the credit memo.
* When you omit an existing line item `id`, the line item is removed from the credit memo.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CreditMemos.BulkReplaceCreditMemo(new BulkReplaceCreditMemoRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = [
            new ReplaceCreditMemoWithIdRequestDto
            {
                Id = "some example string",
                CustomerId = "some example string",
                ReferenceNumber = "some example string",
                CreditDate = DateTimeOffset.Parse("2024-01-15T00:00:00Z"),
                CreditMemoLineItems = [new ReplaceCreditMemoLineItemDto()],
            },
        ],
    });
    // TODO: Handle 'response' of type CreditMemoBulkResponseDto
}
catch (ApiException<BulkReplaceCreditMemoError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkReplaceCreditMemoRequest](src/Divvy/Requests/CreditMemos/BulkReplaceCreditMemoRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreditMemoBulkResponseDto](src/Divvy/Models/CreditMemoBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkReplaceCreditMemoError](src/Divvy/Errors/BulkReplaceCreditMemoError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CreditMemoBulkResponseDto&gt; BulkRestoreCreditMemo(BulkRestoreCreditMemoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore multiple credit memos with one API request. In the response, the `archived` field for each object is set as `false`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CreditMemos.BulkRestoreCreditMemo(new BulkRestoreCreditMemoRequest
    {
        Ids = "{{credit_memo_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type CreditMemoBulkResponseDto
}
catch (ApiException<BulkRestoreCreditMemoError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkRestoreCreditMemoRequest](src/Divvy/Requests/CreditMemos/BulkRestoreCreditMemoRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreditMemoBulkResponseDto](src/Divvy/Models/CreditMemoBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkRestoreCreditMemoError](src/Divvy/Errors/BulkRestoreCreditMemoError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CreditMemoBulkResponseDto&gt; BulkUpdateCreditMemo(BulkUpdateCreditMemoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about line items in multiple credit memos with one API request. You can also update other credit memo details.

You can use the PATCH operation to modify line item details, such as `amount`, `quantity`, and `description`. The credit memo line item `id` does not change with a PATCH operation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CreditMemos.BulkUpdateCreditMemo(new BulkUpdateCreditMemoRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = [new UpdateCreditMemoWithIdRequestDto { Id = "some example string" }],
    });
    // TODO: Handle 'response' of type CreditMemoBulkResponseDto
}
catch (ApiException<BulkUpdateCreditMemoError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkUpdateCreditMemoRequest](src/Divvy/Requests/CreditMemos/BulkUpdateCreditMemoRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreditMemoBulkResponseDto](src/Divvy/Models/CreditMemoBulkResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[BulkUpdateCreditMemoError](src/Divvy/Errors/BulkUpdateCreditMemoError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CreditMemoResponseDto&gt; CreateCreditMemo(CreateCreditMemoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new credit memo.

With a credit memo, you can adjust the invoice amount owed by a customer.

See Credit memos in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CreditMemos.CreateCreditMemo(new CreateCreditMemoRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new CreateCreditMemoRequestDto
        {
            CustomerId = "some example string",
            ReferenceNumber = "some example string",
            CreditDate = DateTimeOffset.Parse("2024-01-15T00:00:00Z"),
            CreditMemoLineItems = [new CreateCreditMemoLineItemDto()],
        },
    });
    // TODO: Handle 'response' of type CreditMemoResponseDto
}
catch (ApiException<CreateCreditMemoError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateCreditMemoRequest](src/Divvy/Requests/CreditMemos/CreateCreditMemoRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreditMemoResponseDto](src/Divvy/Models/CreditMemoResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateCreditMemoError](src/Divvy/Errors/CreateCreditMemoError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CreditMemoWithUsageResponseDto&gt; GetCreditMemo(GetCreditMemoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing credit memo.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CreditMemos.GetCreditMemo(new GetCreditMemoRequest
    {
        CreditMemoId = "{{credit_memo_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type CreditMemoWithUsageResponseDto
}
catch (ApiException<GetCreditMemoError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCreditMemoRequest](src/Divvy/Requests/CreditMemos/GetCreditMemoRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreditMemoWithUsageResponseDto](src/Divvy/Models/CreditMemoWithUsageResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetCreditMemoError](src/Divvy/Errors/GetCreditMemoError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListResponseDtoCreditMemoWithUsageResponseDto&gt; ListCreditMemos(ListCreditMemosRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of credit memo objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CreditMemos.ListCreditMemos(new ListCreditMemosRequest
    {
        Max = 10,
        Sort = "createdTime:desc",
        Filters = "id:eq:{{credit_memo_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ListResponseDtoCreditMemoWithUsageResponseDto
}
catch (ApiException<ListCreditMemosError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCreditMemosRequest](src/Divvy/Requests/CreditMemos/ListCreditMemosRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoCreditMemoWithUsageResponseDto](src/Divvy/Models/ListResponseDtoCreditMemoWithUsageResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListCreditMemosError](src/Divvy/Errors/ListCreditMemosError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CreditMemoResponseDto&gt; ReplaceCreditMemo(ReplaceCreditMemoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the number of line items in a credit memo. You can also update other credit memo details.

You can use the PUT operation to add, remove, or replace the number of line items in a credit memo. A set of rules apply with the PUT operation.
* When you add a new line item, a new line item `id` is generated in the credit memo.
* When you omit an existing line item `id`, the line item is removed from the credit memo.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CreditMemos.ReplaceCreditMemo(new ReplaceCreditMemoRequest
    {
        CreditMemoId = "{{credit_memo_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new ReplaceCreditMemoRequestDto
        {
            CustomerId = "some example string",
            ReferenceNumber = "some example string",
            CreditDate = DateTimeOffset.Parse("2024-01-15T00:00:00Z"),
            CreditMemoLineItems = [new ReplaceCreditMemoLineItemDto()],
        },
    });
    // TODO: Handle 'response' of type CreditMemoResponseDto
}
catch (ApiException<ReplaceCreditMemoError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ReplaceCreditMemoRequest](src/Divvy/Requests/CreditMemos/ReplaceCreditMemoRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreditMemoResponseDto](src/Divvy/Models/CreditMemoResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ReplaceCreditMemoError](src/Divvy/Errors/ReplaceCreditMemoError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CreditMemoResponseDto&gt; RestoreCreditMemo(RestoreCreditMemoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived credit memo. In the response, the `archived` field is set as `false`.

You can perform any valid BILL operation on restored credit memos. There is no change when you restore a restored credit memo.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CreditMemos.RestoreCreditMemo(new RestoreCreditMemoRequest
    {
        CreditMemoId = "{{credit_memo_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type CreditMemoResponseDto
}
catch (ApiException<RestoreCreditMemoError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RestoreCreditMemoRequest](src/Divvy/Requests/CreditMemos/RestoreCreditMemoRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreditMemoResponseDto](src/Divvy/Models/CreditMemoResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[RestoreCreditMemoError](src/Divvy/Errors/RestoreCreditMemoError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CreditMemoResponseDto&gt; UpdateCreditMemo(UpdateCreditMemoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about a credit memo line item. You can also update other credit memo line item details.

You can use the PATCH operation to modify line item details, such as `amount`, `quantity`, and `description`. The credit memo line item `id` does not change with a PATCH operation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CreditMemos.UpdateCreditMemo(new UpdateCreditMemoRequest
    {
        CreditMemoId = "{{credit_memo_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new UpdateCreditMemoRequestDto(),
    });
    // TODO: Handle 'response' of type CreditMemoResponseDto
}
catch (ApiException<UpdateCreditMemoError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateCreditMemoRequest](src/Divvy/Requests/CreditMemos/UpdateCreditMemoRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreditMemoResponseDto](src/Divvy/Models/CreditMemoResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[UpdateCreditMemoError](src/Divvy/Errors/UpdateCreditMemoError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## FundingAccounts

> Source: [FundingAccounts](src/Divvy/Api/FundingAccounts.cs)

<details>
<summary><code>Task&lt;OrganizationBankAccountResponseDto&gt; ArchiveBankAccount(ArchiveBankAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing bank account. In the response, the `archived` field is set as `true`.

Archiving a bank account at BILL has a set of requirements.
* **Bank account status**: The bank account `status` must be set as `VERIFIED`. You can verify the bank account with `POST /v3/funding-accounts/banks/{bankAccountId}/verify`.
* **Bank account user status**: The bank account user `verificationStatus` must be set as `VERIFIED`. To begin the verification process, nominate a bank account user with `POST /v3/funding-accounts/banks/users`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FundingAccounts.ArchiveBankAccount(new ArchiveBankAccountRequest
    {
        BankAccountId = "{{org_bank_account_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type OrganizationBankAccountResponseDto
}
catch (ApiException<ArchiveBankAccountError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ArchiveBankAccountRequest](src/Divvy/Requests/FundingAccounts/ArchiveBankAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationBankAccountResponseDto](src/Divvy/Models/OrganizationBankAccountResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ArchiveBankAccountError](src/Divvy/Errors/ArchiveBankAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OrganizationBankAccountUserResponseDto&gt; ArchiveBankAccountUser(ArchiveBankAccountUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing bank account user. In the response, the `archived` field is set as `true` and the bank account user `verificationStatus` is set as `UNVERIFIED`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FundingAccounts.ArchiveBankAccountUser(new ArchiveBankAccountUserRequest
    {
        BankAccountUserId = "{{org_bank_account_user_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type OrganizationBankAccountUserResponseDto
}
catch (ApiException<ArchiveBankAccountUserError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ArchiveBankAccountUserRequest](src/Divvy/Requests/FundingAccounts/ArchiveBankAccountUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationBankAccountUserResponseDto](src/Divvy/Models/OrganizationBankAccountUserResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ArchiveBankAccountUserError](src/Divvy/Errors/ArchiveBankAccountUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OrganizationBankAccountResponseDto&gt; CreateBankAccount(CreateBankAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new bank account. The currently signed-in user must have the `ADMINISTRATOR` user role in the BILL organization to perform this operation. BILL sends an email notification for informing you about changes to your funding accounts.

When you create a bank account, BILL sends a test ACH payment to confirm whether the account details are accurate.

In the response, three fields are set to their default values.
* The bank account `status` is set as `PENDING`. You can verify the bank account with `POST /v3/funding-accounts/banks/{bankAccountId}/verify`.
* The `payables` and `receivables` values are set as `false`. To update these values, update the bank account with `PATCH /v3/funding-accounts/banks/{bankAccountId}`.

**Note**: Creating a bank account requires an MFA-trusted API session. See MFA setup for information about the BILL MFA process.

See Bank account setup (v3 API) in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FundingAccounts.CreateBankAccount(new CreateBankAccountRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new OrganizationBankAccountCreateRequestDto
        {
            NameOnAccount = "some example string",
            Type = BankAccountType.Checking,
            OwnerType = BankAccountOwnerType.Business,
            BankName = "some example string",
        },
    });
    // TODO: Handle 'response' of type OrganizationBankAccountResponseDto
}
catch (ApiException<CreateBankAccountError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateBankAccountRequest](src/Divvy/Requests/FundingAccounts/CreateBankAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationBankAccountResponseDto](src/Divvy/Models/OrganizationBankAccountResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateBankAccountError](src/Divvy/Errors/CreateBankAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OrganizationBankAccountResponseDto&gt; GetBankAccount(GetBankAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing bank account.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FundingAccounts.GetBankAccount(new GetBankAccountRequest
    {
        BankAccountId = "{{org_bank_account_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type OrganizationBankAccountResponseDto
}
catch (ApiException<GetBankAccountError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetBankAccountRequest](src/Divvy/Requests/FundingAccounts/GetBankAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationBankAccountResponseDto](src/Divvy/Models/OrganizationBankAccountResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetBankAccountError](src/Divvy/Errors/GetBankAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CardAccountResponseDto&gt; GetCardAccount(GetCardAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing card account.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FundingAccounts.GetCardAccount(new GetCardAccountRequest
    {
        CardAccountId = "{{org_card_account_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type CardAccountResponseDto
}
catch (ApiException<GetCardAccountError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCardAccountRequest](src/Divvy/Requests/FundingAccounts/GetCardAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CardAccountResponseDto](src/Divvy/Models/CardAccountResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetCardAccountError](src/Divvy/Errors/GetCardAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FundingAccountPermissionResponseDto&gt; GetFundingAccountPermission(GetFundingAccountPermissionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the funding account permissions available for the current organization and current organization user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FundingAccounts.GetFundingAccountPermission(new GetFundingAccountPermissionRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type FundingAccountPermissionResponseDto
}
catch (ApiException<GetFundingAccountPermissionError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetFundingAccountPermissionRequest](src/Divvy/Requests/FundingAccounts/GetFundingAccountPermissionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FundingAccountPermissionResponseDto](src/Divvy/Models/FundingAccountPermissionResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetFundingAccountPermissionError](src/Divvy/Errors/GetFundingAccountPermissionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListResponseDtoOrganizationBankAccountUserResponseDto&gt; ListBankAccountUsers(ListBankAccountUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of bank account user objects. In the response, if the bank account user `verificationStatus` is set as `NOMINATED`, user verification must be completed before the user can pay with the specified bank account.

By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FundingAccounts.ListBankAccountUsers(new ListBankAccountUsersRequest
    {
        Max = 10,
        Sort = "archived",
        Filters = "id:eq:{{org_bank_account_user_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ListResponseDtoOrganizationBankAccountUserResponseDto
}
catch (ApiException<ListBankAccountUsersError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListBankAccountUsersRequest](src/Divvy/Requests/FundingAccounts/ListBankAccountUsersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoOrganizationBankAccountUserResponseDto](src/Divvy/Models/ListResponseDtoOrganizationBankAccountUserResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListBankAccountUsersError](src/Divvy/Errors/ListBankAccountUsersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListResponseDtoOrganizationBankAccountResponseDto&gt; ListBankAccounts(ListBankAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of bank account objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FundingAccounts.ListBankAccounts(new ListBankAccountsRequest
    {
        Max = 10,
        Sort = "createdTime:desc",
        Filters = "bankAccountId:eq:{{org_bank_account_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ListResponseDtoOrganizationBankAccountResponseDto
}
catch (ApiException<ListBankAccountsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListBankAccountsRequest](src/Divvy/Requests/FundingAccounts/ListBankAccountsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoOrganizationBankAccountResponseDto](src/Divvy/Models/ListResponseDtoOrganizationBankAccountResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListBankAccountsError](src/Divvy/Errors/ListBankAccountsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListResponseDtoOrganizationCardAccountUserResponseDto&gt; ListCardAccountUsers(ListCardAccountUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of card account user objects. In the response, if the card account user `verificationStatus` is set as `NOMINATED`, user verification must be completed before the user can pay with the specified card account.

By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FundingAccounts.ListCardAccountUsers(new ListCardAccountUsersRequest
    {
        Max = 10,
        Sort = "archived",
        Filters = "id:eq:{{org_card_account_user_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ListResponseDtoOrganizationCardAccountUserResponseDto
}
catch (ApiException<ListCardAccountUsersError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCardAccountUsersRequest](src/Divvy/Requests/FundingAccounts/ListCardAccountUsersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoOrganizationCardAccountUserResponseDto](src/Divvy/Models/ListResponseDtoOrganizationCardAccountUserResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListCardAccountUsersError](src/Divvy/Errors/ListCardAccountUsersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListCardFundingPurposesResponseDto&gt; ListCardFundingPurposes(ListCardFundingPurposesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of card funding purpose values based on the vendor and card brand.

When you create a payment (`POST /v3/payments` or `POST /v3/payments/bulk`) with a `CARD_ACCOUNT` funding account `type`, BILL requires a vendor industry value for compliance. When BILL cannot identify the vendor industry, the `cardFundingPurpose` field must be set in your payment request.

Use this endpoint to get the list of card funding purpose values you can set. If you get an empty 200 response, BILL has information about the vendor industry and setting the `cardFundingPurpose` field is not required in your payment request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FundingAccounts.ListCardFundingPurposes(new ListCardFundingPurposesRequest
    {
        VendorId = "{{vendor_id}}",
        Brand = "visa",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ListCardFundingPurposesResponseDto
}
catch (ApiException<ListCardFundingPurposesError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCardFundingPurposesRequest](src/Divvy/Requests/FundingAccounts/ListCardFundingPurposesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListCardFundingPurposesResponseDto](src/Divvy/Models/ListCardFundingPurposesResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListCardFundingPurposesError](src/Divvy/Errors/ListCardFundingPurposesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;ApCardResponseDto&gt;&gt; ListPayableApCards(ListPayableApCardsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of AP Card objects.

With the AP Card, you can earn rewards simply by paying your bills. The AP Card is a payment method that enables you to send fast payments with no transaction fees or annual fees. You can use the AP Card with any vendor who accepts virtual card payments.

See AP Card Frequently Asked Questions (FAQs) in the BILL Help to learn more about AP Card.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FundingAccounts.ListPayableApCards(new ListPayableApCardsRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type IReadOnlyList<ApCardResponseDto>
}
catch (ApiException<ListPayableApCardsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListPayableApCardsRequest](src/Divvy/Requests/FundingAccounts/ListPayableApCardsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[ApCardResponseDto](src/Divvy/Models/ApCardResponseDto.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListPayableApCardsError](src/Divvy/Errors/ListPayableApCardsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListPayableCardAccountsResponseDto&gt; ListPayableCardAccounts(ListPayableCardAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of card account objects.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FundingAccounts.ListPayableCardAccounts(new ListPayableCardAccountsRequest
    {
        CardUserStatus = CardUserStatus.Verified,
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ListPayableCardAccountsResponseDto
}
catch (ApiException<ListPayableCardAccountsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListPayableCardAccountsRequest](src/Divvy/Requests/FundingAccounts/ListPayableCardAccountsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListPayableCardAccountsResponseDto](src/Divvy/Models/ListPayableCardAccountsResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListPayableCardAccountsError](src/Divvy/Errors/ListPayableCardAccountsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StatusDto&gt; NominateBankAccountUser(NominateBankAccountUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Nominate a bank account user.

When you nominate a user, BILL performs a set of operations.
* The bank account user `verificationStatus` is set as `NOMINATED`.
* BILL sends the user an email asking them to sign in to the BILL web app and complete identity verification. See Verify your identity in the Guides section for test verification information you can enter in the sandbox environment.

After user identity verification is successful, the bank account user `verificationStatus` is set as `VERIFIED` and the user can pay with the specified bank account.

**Note**: The bank account `status` must be set as `VERIFIED` before you can nominate bank account users.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FundingAccounts.NominateBankAccountUser(new NominateBankAccountUserRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new NominateBankAccountUserRequestDto
        {
            UserId = "some example string",
            BankAccountId = "some example string",
        },
    });
    // TODO: Handle 'response' of type StatusDto
}
catch (ApiException<NominateBankAccountUserError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[NominateBankAccountUserRequest](src/Divvy/Requests/FundingAccounts/NominateBankAccountUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StatusDto](src/Divvy/Models/StatusDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[NominateBankAccountUserError](src/Divvy/Errors/NominateBankAccountUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OrganizationBankAccountResponseDto&gt; UpdateBankAccount(UpdateBankAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing bank account.

This operation follows a set of rules.
* **Bank account `status` requirement**: The bank account `status` must be set as `VERIFIED` before you can update any details about the bank account. You can verify the bank account with `POST /v3/funding-accounts/banks/{bankAccountId}/verify`.
* **Update field restrictions**: You cannot update the `routingNumber`, `accountNumber`, and account `type` values for a bank account. If you want to update any of these values, create a new bank account with `POST /v3/funding-accounts/banks`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FundingAccounts.UpdateBankAccount(new UpdateBankAccountRequest
    {
        BankAccountId = "{{org_bank_account_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new OrganizationBankAccountUpdateRequestDto(),
    });
    // TODO: Handle 'response' of type OrganizationBankAccountResponseDto
}
catch (ApiException<UpdateBankAccountError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateBankAccountRequest](src/Divvy/Requests/FundingAccounts/UpdateBankAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationBankAccountResponseDto](src/Divvy/Models/OrganizationBankAccountResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[UpdateBankAccountError](src/Divvy/Errors/UpdateBankAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BankAccountVerifyResponseDto&gt; VerifyBankAccount(VerifyBankAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Verify an existing bank account.

When you create a bank account, BILL sends a test ACH payment to the bank account to confirm whether the account details are accurate. Enter the test amount as the `depositAmount` value in your `POST /v3/funding-accounts/banks/{bankAccountId}/verify` request.

**Note**: Bank account verification is required in the production environment before the account can be used for other BILL operations. In the sandbox environment, set `depositAmount` as `0.50` to complete bank account verification.

The bank account `status` is set as `VERIFIED` when BILL is able to verify the `depositAmount` value. BILL sends an email notification for confirming a test transaction. When BILL cannot verify the bank account after three attempts, you cannot use the bank account. At this point, use another bank account or create a bank account with `POST /v3/funding-accounts/banks`.

After your bank account verification is complete, ensure that the current bank account user `verificationStatus` is set as `VERIFIED` before you can use the bank account. To begin the verification process, nominate a bank account user with `POST /v3/funding-accounts/banks/users/nominate`.

See Bank account setup (v3 API) in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FundingAccounts.VerifyBankAccount(new VerifyBankAccountRequest
    {
        BankAccountId = "{{org_bank_account_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new BankAccountVerifyRequestDto { DepositAmount = 1.5d },
    });
    // TODO: Handle 'response' of type BankAccountVerifyResponseDto
}
catch (ApiException<VerifyBankAccountError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[VerifyBankAccountRequest](src/Divvy/Requests/FundingAccounts/VerifyBankAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BankAccountVerifyResponseDto](src/Divvy/Models/BankAccountVerifyResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[VerifyBankAccountError](src/Divvy/Errors/VerifyBankAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## OrganizationUsers

> Source: [OrganizationUsers](src/Divvy/Api/OrganizationUsers.cs)

<details>
<summary><code>Task&lt;OrganizationUserResponseDto&gt; ArchiveOrganizationUser(ArchiveOrganizationUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing user. In the response, the `archived` field is set as `true`."

You can restore an archived user with `POST /v3/users/{userId}/restore`. There is no change when you archive an archived user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.OrganizationUsers.ArchiveOrganizationUser(new ArchiveOrganizationUserRequest
    {
        UserId = "{{org_user_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type OrganizationUserResponseDto
}
catch (ApiException<ArchiveOrganizationUserError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ArchiveOrganizationUserRequest](src/Divvy/Requests/OrganizationUsers/ArchiveOrganizationUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationUserResponseDto](src/Divvy/Models/OrganizationUserResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ArchiveOrganizationUserError](src/Divvy/Errors/ArchiveOrganizationUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OrganizationUserResponseDto&gt; CreateOrganizationUser(CreateOrganizationUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new user. The currently signed-in user must have the `ADMINISTRATOR` user role in the BILL organization to perform this operation.

When you create a user, BILL sends an email to the user for them to complete their sign-up. After user sign-up is complete, the user can access features in your BILL organization depending on the user role.

See Organizations and Users in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.OrganizationUsers.CreateOrganizationUser(new CreateOrganizationUserRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new OrganizationUserCreateRequestDto
        {
            FirstName = "some example string",
            LastName = "some example string",
            Email = "some example string",
            RoleId = "some example string",
            AcceptTermsOfService = true,
        },
    });
    // TODO: Handle 'response' of type OrganizationUserResponseDto
}
catch (ApiException<CreateOrganizationUserError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateOrganizationUserRequest](src/Divvy/Requests/OrganizationUsers/CreateOrganizationUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationUserResponseDto](src/Divvy/Models/OrganizationUserResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateOrganizationUserError](src/Divvy/Errors/CreateOrganizationUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OrganizationUserResponseDto&gt; GetOrganizationUser(GetOrganizationUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.OrganizationUsers.GetOrganizationUser(new GetOrganizationUserRequest
    {
        UserId = "{{org_user_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type OrganizationUserResponseDto
}
catch (ApiException<GetOrganizationUserError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetOrganizationUserRequest](src/Divvy/Requests/OrganizationUsers/GetOrganizationUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationUserResponseDto](src/Divvy/Models/OrganizationUserResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetOrganizationUserError](src/Divvy/Errors/GetOrganizationUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListResponseDtoOrganizationUserResponseDto&gt; ListOrganizationUsers(ListOrganizationUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of user objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.OrganizationUsers.ListOrganizationUsers(new ListOrganizationUsersRequest
    {
        Max = 10,
        Sort = "createdTime:desc",
        Filters = "id:eq:{{org_user_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ListResponseDtoOrganizationUserResponseDto
}
catch (ApiException<ListOrganizationUsersError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListOrganizationUsersRequest](src/Divvy/Requests/OrganizationUsers/ListOrganizationUsersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoOrganizationUserResponseDto](src/Divvy/Models/ListResponseDtoOrganizationUserResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListOrganizationUsersError](src/Divvy/Errors/ListOrganizationUsersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OrganizationUserResponseDto&gt; RestoreOrganizationUser(RestoreOrganizationUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived user. In the response, the `archived` field is set as `false`.

You can perform any valid BILL operation on restored users. There is no change when you restore a restored user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.OrganizationUsers.RestoreOrganizationUser(new RestoreOrganizationUserRequest
    {
        UserId = "{{org_user_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type OrganizationUserResponseDto
}
catch (ApiException<RestoreOrganizationUserError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RestoreOrganizationUserRequest](src/Divvy/Requests/OrganizationUsers/RestoreOrganizationUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationUserResponseDto](src/Divvy/Models/OrganizationUserResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[RestoreOrganizationUserError](src/Divvy/Errors/RestoreOrganizationUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OrganizationUserResponseDto&gt; UpdateOrganizationUser(UpdateOrganizationUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.OrganizationUsers.UpdateOrganizationUser(new UpdateOrganizationUserRequest
    {
        UserId = "{{org_user_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new OrganizationUserUpdateRequestDto(),
    });
    // TODO: Handle 'response' of type OrganizationUserResponseDto
}
catch (ApiException<UpdateOrganizationUserError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateOrganizationUserRequest](src/Divvy/Requests/OrganizationUsers/UpdateOrganizationUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationUserResponseDto](src/Divvy/Models/OrganizationUserResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[UpdateOrganizationUserError](src/Divvy/Errors/UpdateOrganizationUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentTerms

> Source: [PaymentTerms](src/Divvy/Api/PaymentTerms.cs)

<details>
<summary><code>Task&lt;PaymentTermResponseDto&gt; CreatePaymentTerm(CreatePaymentTermRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new payment term for the organization. Use payment terms to set the number of days the customer has to pay a vendor. You can set `paymentTermId` in bills and invoices.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PaymentTerms.CreatePaymentTerm(new CreatePaymentTermRequest
    {
        OrganizationId = "{{organization_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new CreatePaymentTermRequestDto { Name = "some example string", DaysDue = 1 },
    });
    // TODO: Handle 'response' of type PaymentTermResponseDto
}
catch (ApiException<CreatePaymentTermError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreatePaymentTermRequest](src/Divvy/Requests/PaymentTerms/CreatePaymentTermRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentTermResponseDto](src/Divvy/Models/PaymentTermResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreatePaymentTermError](src/Divvy/Errors/CreatePaymentTermError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaymentTermResponseDto&gt; GetPaymentTerm(GetPaymentTermRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing payment term.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PaymentTerms.GetPaymentTerm(new GetPaymentTermRequest
    {
        OrganizationId = "{{organization_id}}",
        PaymentTermId = "{{payment_term_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type PaymentTermResponseDto
}
catch (ApiException<GetPaymentTermError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPaymentTermRequest](src/Divvy/Requests/PaymentTerms/GetPaymentTermRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentTermResponseDto](src/Divvy/Models/PaymentTermResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetPaymentTermError](src/Divvy/Errors/GetPaymentTermError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListResponseDtoPaymentTermResponseDto&gt; ListPaymentTerms(ListPaymentTermsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of payment terms for the organization. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PaymentTerms.ListPaymentTerms(new ListPaymentTermsRequest
    {
        OrganizationId = "{{organization_id}}",
        Max = 10,
        Sort = "name:asc",
        Filters = "daysDue:eq:30",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ListResponseDtoPaymentTermResponseDto
}
catch (ApiException<ListPaymentTermsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListPaymentTermsRequest](src/Divvy/Requests/PaymentTerms/ListPaymentTermsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoPaymentTermResponseDto](src/Divvy/Models/ListResponseDtoPaymentTermResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListPaymentTermsError](src/Divvy/Errors/ListPaymentTermsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaymentTermResponseDto&gt; UpdatePaymentTerm(UpdatePaymentTermRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing payment term.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PaymentTerms.UpdatePaymentTerm(new UpdatePaymentTermRequest
    {
        OrganizationId = "{{organization_id}}",
        PaymentTermId = "{{payment_term_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new UpdatePaymentTermRequestDto(),
    });
    // TODO: Handle 'response' of type PaymentTermResponseDto
}
catch (ApiException<UpdatePaymentTermError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdatePaymentTermRequest](src/Divvy/Requests/PaymentTerms/UpdatePaymentTermRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentTermResponseDto](src/Divvy/Models/PaymentTermResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[UpdatePaymentTermError](src/Divvy/Errors/UpdatePaymentTermError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ReceivablePayments

> Source: [ReceivablePayments](src/Divvy/Api/ReceivablePayments.cs)

<details>
<summary><code>Task&lt;ReceivablePaymentResponseDto&gt; ChargeCustomer(ChargeCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Charge a customer for one or more invoices.

Charging a customer follows a set of rules.
* **Customer authorization**: The customer `authorizedToCharge` field must be set as `true` for you to charge the customer for invoices. Set charge customer authorization with `POST /v3/customers/{customerId}/charge-authorization`.
* **Customer bank account**: A customer bank account is required for you to charge a customer. Create a customer bank account with `POST /v3/customers/{customerId}/bank-accounts`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ReceivablePayments.ChargeCustomer(new ChargeCustomerRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new ChargeCustomerRequestDto
        {
            CustomerId = "some example string",
            FundingAccount = new FundingAccount2
            {
                Id = "some example string",
                Type = ReceivableFundingAccountTypeRequestDto.BankAccount,
            },
            InvoicePayments = [new InvoicePayRequestDto { InvoiceId = "some example string", Amount = 1.5d }],
        },
    });
    // TODO: Handle 'response' of type ReceivablePaymentResponseDto
}
catch (ApiException<ChargeCustomerError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ChargeCustomerRequest](src/Divvy/Requests/ReceivablePayments/ChargeCustomerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReceivablePaymentResponseDto](src/Divvy/Models/ReceivablePaymentResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ChargeCustomerError](src/Divvy/Errors/ChargeCustomerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ReceivablePaymentResponseDto&gt; GetReceivablePayment(GetReceivablePaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing received payment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ReceivablePayments.GetReceivablePayment(new GetReceivablePaymentRequest
    {
        ReceivedPaymentId = "{{received_payment_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ReceivablePaymentResponseDto
}
catch (ApiException<GetReceivablePaymentError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetReceivablePaymentRequest](src/Divvy/Requests/ReceivablePayments/GetReceivablePaymentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReceivablePaymentResponseDto](src/Divvy/Models/ReceivablePaymentResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetReceivablePaymentError](src/Divvy/Errors/GetReceivablePaymentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListResponseDtoReceivablePaymentResponseDto&gt; ListReceivablePayments(ListReceivablePaymentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of received payment objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ReceivablePayments.ListReceivablePayments(new ListReceivablePaymentsRequest
    {
        Max = 10,
        Sort = "createdTime:desc",
        Filters = "id:eq:{{received_payment_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ListResponseDtoReceivablePaymentResponseDto
}
catch (ApiException<ListReceivablePaymentsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListReceivablePaymentsRequest](src/Divvy/Requests/ReceivablePayments/ListReceivablePaymentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoReceivablePaymentResponseDto](src/Divvy/Models/ListResponseDtoReceivablePaymentResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListReceivablePaymentsError](src/Divvy/Errors/ListReceivablePaymentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## RecurringInvoices

> Source: [RecurringInvoices](src/Divvy/Api/RecurringInvoices.cs)

<details>
<summary><code>Task&lt;RecurringInvoiceResponseDto&gt; ArchiveRecurringInvoice(ArchiveRecurringInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive a recurring invoice. In the response, the `archived` field is set as `true`.

You can restore an archived recurring invoice with `POST /v3/recurring-invoices/{recurringinvoiceId}/restore`. There is no change when you archive an archived recurring invoice.

When a recurring invoice is modified, all future invoices are automatically changed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.RecurringInvoices.ArchiveRecurringInvoice(new ArchiveRecurringInvoiceRequest
    {
        RecurringInvoiceId = "{{recurring_invoice_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type RecurringInvoiceResponseDto
}
catch (ApiException<ArchiveRecurringInvoiceError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ArchiveRecurringInvoiceRequest](src/Divvy/Requests/RecurringInvoices/ArchiveRecurringInvoiceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringInvoiceResponseDto](src/Divvy/Models/RecurringInvoiceResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ArchiveRecurringInvoiceError](src/Divvy/Errors/ArchiveRecurringInvoiceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RecurringInvoiceResponseDto&gt; CreateRecurringInvoice(CreateRecurringInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a recurring invoice.

See Recurring invoices in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.RecurringInvoices.CreateRecurringInvoice(new CreateRecurringInvoiceRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new CreateRecurringInvoiceRequestDto
        {
            CustomerId = "some example string",
            Schedule = new Schedule(),
            RecurringInvoiceLineItems = [new RecurringInvoiceLineItemDto()],
        },
    });
    // TODO: Handle 'response' of type RecurringInvoiceResponseDto
}
catch (ApiException<CreateRecurringInvoiceError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateRecurringInvoiceRequest](src/Divvy/Requests/RecurringInvoices/CreateRecurringInvoiceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringInvoiceResponseDto](src/Divvy/Models/RecurringInvoiceResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateRecurringInvoiceError](src/Divvy/Errors/CreateRecurringInvoiceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RecurringInvoiceResponseDto&gt; GetRecurringInvoice(GetRecurringInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing recurring invoice.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.RecurringInvoices.GetRecurringInvoice(new GetRecurringInvoiceRequest
    {
        RecurringInvoiceId = "{{recurring_invoice_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type RecurringInvoiceResponseDto
}
catch (ApiException<GetRecurringInvoiceError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetRecurringInvoiceRequest](src/Divvy/Requests/RecurringInvoices/GetRecurringInvoiceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringInvoiceResponseDto](src/Divvy/Models/RecurringInvoiceResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetRecurringInvoiceError](src/Divvy/Errors/GetRecurringInvoiceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListResponseDtoRecurringInvoiceResponseDto&gt; ListRecurringInvoices(ListRecurringInvoicesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of recurring invoice objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.RecurringInvoices.ListRecurringInvoices(new ListRecurringInvoicesRequest
    {
        Max = 10,
        Sort = "archived",
        Filters = "id:eq:{{recurring_invoice_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ListResponseDtoRecurringInvoiceResponseDto
}
catch (ApiException<ListRecurringInvoicesError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListRecurringInvoicesRequest](src/Divvy/Requests/RecurringInvoices/ListRecurringInvoicesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoRecurringInvoiceResponseDto](src/Divvy/Models/ListResponseDtoRecurringInvoiceResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListRecurringInvoicesError](src/Divvy/Errors/ListRecurringInvoicesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RecurringInvoiceResponseDto&gt; ReplaceRecurringInvoice(ReplaceRecurringInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the number of line items in a recurring invoice. You can also update other recurring invoice details.

You can use the PUT operation to add, remove, or replace the number of line items in a recurring invoice. A set of rules apply with the PUT operation.
* When you add a new line item, a new line item `id` is generated in the invoice.
* When you omit an existing line item `id`, the line item is removed from the invoice.

When a recurring invoice is modified, all future invoices are automatically changed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.RecurringInvoices.ReplaceRecurringInvoice(new ReplaceRecurringInvoiceRequest
    {
        RecurringInvoiceId = "{{recurring_invoice_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new RecurringInvoiceReplaceRequestDto
        {
            CustomerId = "some example string",
            Schedule = new Schedule(),
            RecurringInvoiceLineItems = [new RecurringInvoiceReplaceLineItem()],
        },
    });
    // TODO: Handle 'response' of type RecurringInvoiceResponseDto
}
catch (ApiException<ReplaceRecurringInvoiceError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ReplaceRecurringInvoiceRequest](src/Divvy/Requests/RecurringInvoices/ReplaceRecurringInvoiceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringInvoiceResponseDto](src/Divvy/Models/RecurringInvoiceResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ReplaceRecurringInvoiceError](src/Divvy/Errors/ReplaceRecurringInvoiceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RecurringInvoiceResponseDto&gt; RestoreRecurringInvoice(RestoreRecurringInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived recurring invoice. In the response, the `archived` field is set as `false`.

You can perform any valid BILL operation on restored recurring invoices. There is no change when you restore a restored recurring invoice.

When a recurring invoice is modified, all future invoices are automatically changed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.RecurringInvoices.RestoreRecurringInvoice(new RestoreRecurringInvoiceRequest
    {
        RecurringInvoiceId = "{{recurring_invoice_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type RecurringInvoiceResponseDto
}
catch (ApiException<RestoreRecurringInvoiceError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RestoreRecurringInvoiceRequest](src/Divvy/Requests/RecurringInvoices/RestoreRecurringInvoiceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringInvoiceResponseDto](src/Divvy/Models/RecurringInvoiceResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[RestoreRecurringInvoiceError](src/Divvy/Errors/RestoreRecurringInvoiceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RecurringInvoiceResponseDto&gt; UpdateRecurringInvoice(UpdateRecurringInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about a recurring invoice line item. You can also update other recurring invoice details.

You can use the PATCH operation to modify line item details, such as amount and description. The recurring invoice line item `id` does not change with a PATCH operation.

When a recurring invoice is modified, all future invoices are automatically changed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.RecurringInvoices.UpdateRecurringInvoice(new UpdateRecurringInvoiceRequest
    {
        RecurringInvoiceId = "{{recurring_invoice_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new UpdateRecurringInvoiceRequestDto(),
    });
    // TODO: Handle 'response' of type RecurringInvoiceResponseDto
}
catch (ApiException<UpdateRecurringInvoiceError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateRecurringInvoiceRequest](src/Divvy/Requests/RecurringInvoices/UpdateRecurringInvoiceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringInvoiceResponseDto](src/Divvy/Models/RecurringInvoiceResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[UpdateRecurringInvoiceError](src/Divvy/Errors/UpdateRecurringInvoiceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Recurringbills

> Source: [Recurringbills](src/Divvy/Api/Recurringbills.cs)

<details>
<summary><code>Task&lt;RecurringBillResponseDto&gt; ArchiveRecurringBill(ArchiveRecurringBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive a recurring bill. In the response, the `archived` field is set as `true`.

You can restore an archived recurring bill with `POST /v3/recurringbills/{recurringbillId}/restore`. There is no change when you archive an archived recurring bill.

When a recurring bill is modified, all future bills are automatically changed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Recurringbills.ArchiveRecurringBill(new ArchiveRecurringBillRequest
    {
        RecurringBillId = "{{recurring_bill_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type RecurringBillResponseDto
}
catch (ApiException<ArchiveRecurringBillError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ArchiveRecurringBillRequest](src/Divvy/Requests/Recurringbills/ArchiveRecurringBillRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringBillResponseDto](src/Divvy/Models/RecurringBillResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ArchiveRecurringBillError](src/Divvy/Errors/ArchiveRecurringBillError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RecurringBillResponseDto&gt; CreateRecurringBill(CreateRecurringBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a recurring bill.

See Recurring bills in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Recurringbills.CreateRecurringBill(new CreateRecurringBillRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new RecurringBillCreateRequestDto
        {
            VendorId = "some example string",
            Schedule = new ScheduleBillV3RecurringbillsApi(),
            RecurringBillLineItems = [new RecurringBillCreateLineItem { Amount = 1.5d }],
        },
    });
    // TODO: Handle 'response' of type RecurringBillResponseDto
}
catch (ApiException<CreateRecurringBillError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateRecurringBillRequest](src/Divvy/Requests/Recurringbills/CreateRecurringBillRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringBillResponseDto](src/Divvy/Models/RecurringBillResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateRecurringBillError](src/Divvy/Errors/CreateRecurringBillError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RecurringBillReadResponseDto&gt; GetRecurringBill(GetRecurringBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing recurring bill.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Recurringbills.GetRecurringBill(new GetRecurringBillRequest
    {
        RecurringBillId = "{{recurring_bill_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type RecurringBillReadResponseDto
}
catch (ApiException<GetRecurringBillError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetRecurringBillRequest](src/Divvy/Requests/Recurringbills/GetRecurringBillRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringBillReadResponseDto](src/Divvy/Models/RecurringBillReadResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetRecurringBillError](src/Divvy/Errors/GetRecurringBillError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListRecurringBillResponseDto&gt; ListRecurringBills(ListRecurringBillsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of recurring bill objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Recurringbills.ListRecurringBills(new ListRecurringBillsRequest
    {
        Max = 10,
        Sort = "archived",
        Filters = "id:eq:{{recurring_bill_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type ListRecurringBillResponseDto
}
catch (ApiException<ListRecurringBillsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListRecurringBillsRequest](src/Divvy/Requests/Recurringbills/ListRecurringBillsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListRecurringBillResponseDto](src/Divvy/Models/ListRecurringBillResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListRecurringBillsError](src/Divvy/Errors/ListRecurringBillsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RecurringBillResponseDto&gt; ReplaceRecurringBill(ReplaceRecurringBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the number of line items in a recurring bill. You can also update other recurring bill details.

You can use the PUT operation to add, remove, or replace the number of line items in a recurring bill. A set of rules apply with the PUT operation.
* When you add a new line item, a new line item `id` is generated in the bill.
* When you omit an existing line item `id`, the line item is removed from the bill.

When a recurring bill is modified, all future bills are automatically changed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Recurringbills.ReplaceRecurringBill(new ReplaceRecurringBillRequest
    {
        RecurringBillId = "{{recurring_bill_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new RecurringBillReplaceRequestDto
        {
            VendorId = "some example string",
            Schedule = new ScheduleBillV3RecurringbillsApi(),
            RecurringBillLineItems = [new RecurringBillReplaceLineItem { Amount = 1.5d }],
        },
    });
    // TODO: Handle 'response' of type RecurringBillResponseDto
}
catch (ApiException<ReplaceRecurringBillError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ReplaceRecurringBillRequest](src/Divvy/Requests/Recurringbills/ReplaceRecurringBillRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringBillResponseDto](src/Divvy/Models/RecurringBillResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ReplaceRecurringBillError](src/Divvy/Errors/ReplaceRecurringBillError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RecurringBillResponseDto&gt; RestoreRecurringBill(RestoreRecurringBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived recurring bill. In the response, the `archived` field is set as `false`.

You can perform any valid BILL operation on restored recurring bills. There is no change when you restore a restored recurring bill.

When a recurring bill is modified, all future bills are automatically changed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Recurringbills.RestoreRecurringBill(new RestoreRecurringBillRequest
    {
        RecurringBillId = "{{recurring_bill_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type RecurringBillResponseDto
}
catch (ApiException<RestoreRecurringBillError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RestoreRecurringBillRequest](src/Divvy/Requests/Recurringbills/RestoreRecurringBillRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringBillResponseDto](src/Divvy/Models/RecurringBillResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[RestoreRecurringBillError](src/Divvy/Errors/RestoreRecurringBillError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RecurringBillResponseDto&gt; UpdateRecurringBill(UpdateRecurringBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about a recurring bill line item. You can also update other recurring bill details.

You can use the PATCH operation to modify line item details, such as amount and description. The recurring bill line item `id` does not change with a PATCH operation.

When a recurring bill is modified, all future bills are automatically changed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Recurringbills.UpdateRecurringBill(new UpdateRecurringBillRequest
    {
        RecurringBillId = "{{recurring_bill_id}}",
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new RecurringBillUpdateRequestDto(),
    });
    // TODO: Handle 'response' of type RecurringBillResponseDto
}
catch (ApiException<UpdateRecurringBillError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateRecurringBillRequest](src/Divvy/Requests/Recurringbills/UpdateRecurringBillRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringBillResponseDto](src/Divvy/Models/RecurringBillResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[UpdateRecurringBillError](src/Divvy/Errors/UpdateRecurringBillError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Reimbursements

> Source: [Reimbursements](src/Divvy/Api/Reimbursements.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;ReceiptImage&gt;&gt; AddReimbursementReceipt(AddReimbursementReceiptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a receipt to an existing reimbursement.
In the request, use the same upload url that you used to upload the receipt image. See Create a reimbursement upload URL to learn about creating a reimbursement image upload URL.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reimbursements.AddReimbursementReceipt(new AddReimbursementReceiptRequest
    {
        ReimbursementId = "{{se_reimbursement_uuid}}",
        ApiToken = "{{api_token}}",
        Body = new ReimbursementReceiptRequestDto { Url = "some example string", Filename = "some example string" },
    });
    // TODO: Handle 'response' of type IReadOnlyList<ReceiptImage>
}
catch (ApiException<AddReimbursementReceiptError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AddReimbursementReceiptRequest](src/Divvy/Requests/Reimbursements/AddReimbursementReceiptRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[ReceiptImage](src/Divvy/Models/ReceiptImage.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[AddReimbursementReceiptError](src/Divvy/Errors/AddReimbursementReceiptError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ReimbursementResponseDto&gt; ApproveOrDenyReimbursement(ApproveOrDenyReimbursementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Approve or deny a reimbursement request.

See Reimbursements in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reimbursements.ApproveOrDenyReimbursement(new ApproveOrDenyReimbursementRequest
    {
        ReimbursementId = "{{se_reimbursement_uuid}}",
        ApiToken = "{{api_token}}",
        Body = new ReimbursementActionRequestDto { Action = ReimbursementActionType.Approve },
    });
    // TODO: Handle 'response' of type ReimbursementResponseDto
}
catch (ApiException<ApproveOrDenyReimbursementError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApproveOrDenyReimbursementRequest](src/Divvy/Requests/Reimbursements/ApproveOrDenyReimbursementRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReimbursementResponseDto](src/Divvy/Models/ReimbursementResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ApproveOrDenyReimbursementError](src/Divvy/Errors/ApproveOrDenyReimbursementError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ReimbursementImageUploadUrlResponseDto&gt; CreateImageUploadUrl(CreateImageUploadUrlRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a reimbursement image upload URL.

From the response, use the upload `url` to upload a receipt image for the reimbursement. For example, to upload a JPEG image, use the following `curl` command. To upload a PNG image, set the content type as `image/png`.

```
curl '{upload_url}'
-H 'Content-Type: image/jpeg'
--upload-file {file_name_with_extension}
```

**Note**: BILL supports JPG and PNG file formats for reimbursement images.

See Reimbursements in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reimbursements.CreateImageUploadUrl(new CreateImageUploadUrlRequest
    {
        ApiToken = "{{api_token}}",
    });
    // TODO: Handle 'response' of type ReimbursementImageUploadUrlResponseDto
}
catch (ApiException<CreateImageUploadUrlError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateImageUploadUrlRequest](src/Divvy/Requests/Reimbursements/CreateImageUploadUrlRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReimbursementImageUploadUrlResponseDto](src/Divvy/Models/ReimbursementImageUploadUrlResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateImageUploadUrlError](src/Divvy/Errors/CreateImageUploadUrlError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ReimbursementResponseDto&gt; CreateReimbursement(CreateReimbursementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new reimbursement.

See Reimbursements in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reimbursements.CreateReimbursement(new CreateReimbursementRequest
    {
        ApiToken = "{{api_token}}",
        Body = new CreateReimbursementRequestDto
        {
            UserId = "some example string",
            BudgetId = "some example string",
            Amount = 1.5d,
            Note = "some example string",
            MerchantName = "some example string",
            OccurredDate = DateTimeOffset.Parse("2024-01-15T00:00:00Z"),
            Receipts = [
                new ReimbursementReceiptRequestDto { Url = "some example string", Filename = "some example string" },
            ],
        },
    });
    // TODO: Handle 'response' of type ReimbursementResponseDto
}
catch (ApiException<CreateReimbursementError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateReimbursementRequest](src/Divvy/Requests/Reimbursements/CreateReimbursementRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReimbursementResponseDto](src/Divvy/Models/ReimbursementResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateReimbursementError](src/Divvy/Errors/CreateReimbursementError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteReimbursement(DeleteReimbursementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an existing reimbursement. A deleted reimbursement cannot be restored. The deleted reimbursement is not available in the list of reimbursements.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Reimbursements.DeleteReimbursement(new DeleteReimbursementRequest
    {
        ReimbursementId = "{{se_reimbursement_uuid}}",
        ApiToken = "{{api_token}}",
    });
}
catch (ApiException<DeleteReimbursementError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteReimbursementRequest](src/Divvy/Requests/Reimbursements/DeleteReimbursementRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[DeleteReimbursementError](src/Divvy/Errors/DeleteReimbursementError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteReimbursementReceipt(DeleteReimbursementReceiptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a receipt from an existing reimbursement. A deleted receipt cannot be restored. The deleted receipt is not available in the reimbursement details.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Reimbursements.DeleteReimbursementReceipt(new DeleteReimbursementReceiptRequest
    {
        ReimbursementId = "{{se_reimbursement_uuid}}",
        ReceiptId = "{{se_reimbursement_receipt_uuid}}",
        ApiToken = "{{api_token}}",
    });
}
catch (ApiException<DeleteReimbursementReceiptError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteReimbursementReceiptRequest](src/Divvy/Requests/Reimbursements/DeleteReimbursementReceiptRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[DeleteReimbursementReceiptError](src/Divvy/Errors/DeleteReimbursementReceiptError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ReimbursementResponseDto&gt; GetReimbursement(GetReimbursementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing reimbursement.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reimbursements.GetReimbursement(new GetReimbursementRequest
    {
        ReimbursementId = "{{se_reimbursement_uuid}}",
        ApiToken = "{{api_token}}",
    });
    // TODO: Handle 'response' of type ReimbursementResponseDto
}
catch (ApiException<GetReimbursementError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetReimbursementRequest](src/Divvy/Requests/Reimbursements/GetReimbursementRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReimbursementResponseDto](src/Divvy/Models/ReimbursementResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetReimbursementError](src/Divvy/Errors/GetReimbursementError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginationResponseDtoReimbursementResponseDto&gt; ListReimbursements(ListReimbursementsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of reimbursement objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reimbursements.ListReimbursements(new ListReimbursementsRequest
    {
        Max = 10L,
        Sort = "submittedTime:desc",
        Filters = "reimbursementIds:eq:{{se_reimbursement_uuid}}",
        ApiToken = "{{api_token}}",
    });
    // TODO: Handle 'response' of type PaginationResponseDtoReimbursementResponseDto
}
catch (ApiException<ListReimbursementsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListReimbursementsRequest](src/Divvy/Requests/Reimbursements/ListReimbursementsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginationResponseDtoReimbursementResponseDto](src/Divvy/Models/PaginationResponseDtoReimbursementResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[ListReimbursementsError](src/Divvy/Errors/ListReimbursementsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ReimbursementResponseDto&gt; UpdateReimbursement(UpdateReimbursementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing reimbursement.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reimbursements.UpdateReimbursement(new UpdateReimbursementRequest
    {
        ReimbursementId = "{{se_reimbursement_uuid}}",
        ApiToken = "{{api_token}}",
        Body = new UpdateReimbursementRequestDto(),
    });
    // TODO: Handle 'response' of type ReimbursementResponseDto
}
catch (ApiException<UpdateReimbursementError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateReimbursementRequest](src/Divvy/Requests/Reimbursements/UpdateReimbursementRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReimbursementResponseDto](src/Divvy/Models/ReimbursementResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[UpdateReimbursementError](src/Divvy/Errors/UpdateReimbursementError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## RiskVerifications

> Source: [RiskVerifications](src/Divvy/Api/RiskVerifications.cs)

<details>
<summary><code>Task CreateRiskVerificationPhone(CreateRiskVerificationPhoneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a phone number for the currently signed-in user. BILL requires the signed-in user to have a linked phone number for initiating risk verification for the organization.

You can check whether a phone number has been added for the user with `GET /v3/risk-verifications/phone`.

After you add a phone number with this endpoint, you can initiate risk verification for the organization with `POST /v3/risk-verifications`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.RiskVerifications.CreateRiskVerificationPhone(new CreateRiskVerificationPhoneRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
        Body = new PhoneVerificationRequestDto { PhoneNumber = "some example string", PhoneType = PhoneType.Mobile },
    });
}
catch (ApiException<CreateRiskVerificationPhoneError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateRiskVerificationPhoneRequest](src/Divvy/Requests/RiskVerifications/CreateRiskVerificationPhoneRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[CreateRiskVerificationPhoneError](src/Divvy/Errors/CreateRiskVerificationPhoneError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetPhoneStatusResponseDto&gt; GetRiskVerificationPhone(GetRiskVerificationPhoneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check whether a phone number has been added for the currently signed-in user. BILL requires the signed-in user to have a linked phone number for initiating risk verification for the organization.

In the response, if `hasPhone` is `false`, you can add a phone number for the user with `POST /v3/risk-verifications/phone`.

After you add a phone number, you can initiate risk verification for the organization with `POST /v3/risk-verifications`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.RiskVerifications.GetRiskVerificationPhone(new GetRiskVerificationPhoneRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type GetPhoneStatusResponseDto
}
catch (ApiException<GetRiskVerificationPhoneError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetRiskVerificationPhoneRequest](src/Divvy/Requests/RiskVerifications/GetRiskVerificationPhoneRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetPhoneStatusResponseDto](src/Divvy/Models/GetPhoneStatusResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetRiskVerificationPhoneError](src/Divvy/Errors/GetRiskVerificationPhoneError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VerificationResponseDto&gt; GetRiskVerifications(GetRiskVerificationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get risk verification details for an existing organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.RiskVerifications.GetRiskVerifications(new GetRiskVerificationsRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type VerificationResponseDto
}
catch (ApiException<GetRiskVerificationsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetRiskVerificationsRequest](src/Divvy/Requests/RiskVerifications/GetRiskVerificationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VerificationResponseDto](src/Divvy/Models/VerificationResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[GetRiskVerificationsError](src/Divvy/Errors/GetRiskVerificationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VerificationResponseDto&gt; InitiateRiskVerifications(InitiateRiskVerificationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiate risk verification for an organization. The currently signed-in user must have the `ADMINISTRATOR` user role in the BILL organization to perform this operation.

**Note**: You must add a phone number for the signed-in user (with `POST /v3/risk-verifications/phone`) before you can initiate risk verification. BILL partners must add a phone number for a created user with `POST /v3/partner/risk-verifications/{userId}/phone`.

As a BILL partner, when you create an organization and then create a user for that organization, it is important that you initiate risk verification with `POST /v3/risk-verifications`.

BILL performs a KYC/KYB (Know You Customer/Know Your Business) check based on the provided organization information. BILL sends an email notification for risk verification. When the check is complete, BILL approves the organization for BILL AP and AR operations.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.RiskVerifications.InitiateRiskVerifications(new InitiateRiskVerificationsRequest
    {
        SessionId = "{{session_id}}",
        DevKey = "{{developer_key}}",
    });
    // TODO: Handle 'response' of type VerificationResponseDto
}
catch (ApiException<InitiateRiskVerificationsError> ex)
{
    if (ex.Error.TryGetListOfBdcError(out var error))
    {
        // TODO: Handle 'error' of type IReadOnlyList<BdcError>
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[InitiateRiskVerificationsRequest](src/Divvy/Requests/RiskVerifications/InitiateRiskVerificationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VerificationResponseDto](src/Divvy/Models/VerificationResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/Divvy/Core/Exceptions/ApiException.cs)&lt;[InitiateRiskVerificationsError](src/Divvy/Errors/InitiateRiskVerificationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

