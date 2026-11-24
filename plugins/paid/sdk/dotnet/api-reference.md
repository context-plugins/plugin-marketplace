# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [PaidClient](src/Paid/PaidClient.cs)

## Agents

> Source: [Agents](src/Paid/Api/Agents.cs)

<details>
<summary><code>Task&lt;Agent&gt; Create(CreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DEPRECATED: Use POST /products instead.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Agents.Create(new CreateRequest { Authorization = "some example string" });
    // TODO: Handle 'response' of type Agent
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

<code>[CreateRequest](src/Paid/Requests/Agents/CreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Agent](src/Paid/Models/Agent.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; Delete(DeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DEPRECATED: Use DELETE /products/{productId} instead.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Agents.Delete(new DeleteRequest
    {
        AgentId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type object
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

<code>[DeleteRequest](src/Paid/Requests/Agents/DeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeleteByExternalId(DeleteByExternalIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DEPRECATED: Use DELETE /products/external/{externalId} instead.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Agents.DeleteByExternalId(new DeleteByExternalIdRequest
    {
        ExternalId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type object
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

<code>[DeleteByExternalIdRequest](src/Paid/Requests/Agents/DeleteByExternalIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Agent&gt; Get(GetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DEPRECATED: Use GET /products/{productId} instead.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Agents.Get(new GetRequest
    {
        AgentId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Agent
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

<code>[GetRequest](src/Paid/Requests/Agents/GetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Agent](src/Paid/Models/Agent.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Agent&gt; GetByExternalId(GetByExternalIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DEPRECATED: Use GET /products/external/{externalId} instead.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Agents.GetByExternalId(new GetByExternalIdRequest
    {
        ExternalId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Agent
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

<code>[GetByExternalIdRequest](src/Paid/Requests/Agents/GetByExternalIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Agent](src/Paid/Models/Agent.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Agent&gt;&gt; List(ListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DEPRECATED: Use /products instead. Agents are now products with type='agent'.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Agents.List(new ListRequest { Authorization = "some example string" });
    // TODO: Handle 'response' of type IReadOnlyList<Agent>
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

<code>[ListRequest](src/Paid/Requests/Agents/ListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Agent](src/Paid/Models/Agent.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Agent&gt; Update(UpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DEPRECATED: Use PUT /products/{productId} instead.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Agents.Update(new UpdateRequest
    {
        AgentId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Agent
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

<code>[UpdateRequest](src/Paid/Requests/Agents/UpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Agent](src/Paid/Models/Agent.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Agent&gt; UpdateByExternalId(UpdateByExternalIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DEPRECATED: Use PUT /products/external/{externalId} instead.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Agents.UpdateByExternalId(new UpdateByExternalIdRequest
    {
        ExternalId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Agent
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

<code>[UpdateByExternalIdRequest](src/Paid/Requests/Agents/UpdateByExternalIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Agent](src/Paid/Models/Agent.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Checkouts

> Source: [Checkouts](src/Paid/Api/Checkouts.cs)

<details>
<summary><code>Task&lt;object&gt; ArchiveCheckout(ArchiveCheckoutRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive a checkout by ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Checkouts.ArchiveCheckout(new ArchiveCheckoutRequest
    {
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ArchiveCheckoutError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ArchiveCheckoutRequest](src/Paid/Requests/Checkouts/ArchiveCheckoutRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[ArchiveCheckoutError](src/Paid/Errors/ArchiveCheckoutError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Checkout&gt; CreateCheckout(CreateCheckoutOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a checkout link that generates a URL for a customer to complete a purchase

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Checkouts.CreateCheckout(new CreateCheckoutOperationRequest
    {
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Checkout
}
catch (ApiException<CreateCheckoutError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateCheckoutOperationRequest](src/Paid/Requests/Checkouts/CreateCheckoutOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Checkout](src/Paid/Models/Checkout.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[CreateCheckoutError](src/Paid/Errors/CreateCheckoutError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CheckoutDetails&gt; GetCheckout(GetCheckoutRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a checkout by ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Checkouts.GetCheckout(new GetCheckoutRequest
    {
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type CheckoutDetails
}
catch (ApiException<GetCheckoutError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCheckoutRequest](src/Paid/Requests/Checkouts/GetCheckoutRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CheckoutDetails](src/Paid/Models/CheckoutDetails.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[GetCheckoutError](src/Paid/Errors/GetCheckoutError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CheckoutListResponse&gt; ListCheckouts(ListCheckoutsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of checkouts for the organization

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Checkouts.ListCheckouts(new ListCheckoutsRequest
    {
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type CheckoutListResponse
}
catch (ApiException<ListCheckoutsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCheckoutsRequest](src/Paid/Requests/Checkouts/ListCheckoutsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CheckoutListResponse](src/Paid/Models/CheckoutListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[ListCheckoutsError](src/Paid/Errors/ListCheckoutsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Contacts

> Source: [Contacts](src/Paid/Api/Contacts.cs)

<details>
<summary><code>Task&lt;Contact1&gt; CreateContact(CreateContactOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new contact for the organization

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contacts.CreateContact(new CreateContactOperationRequest
    {
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Contact1
}
catch (ApiException<CreateContactError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateContactOperationRequest](src/Paid/Requests/Contacts/CreateContactOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Contact1](src/Paid/Models/Contact1.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[CreateContactError](src/Paid/Errors/CreateContactError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Contact&gt; Create2(Create2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contacts.Create2(new Create2Request { Authorization = "some example string" });
    // TODO: Handle 'response' of type Contact
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

<code>[Create2Request](src/Paid/Requests/Contacts/Create2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Contact](src/Paid/Models/Contact.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeleteByExternalId2(DeleteByExternalId2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contacts.DeleteByExternalId2(new DeleteByExternalId2Request
    {
        ExternalId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type object
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

<code>[DeleteByExternalId2Request](src/Paid/Requests/Contacts/DeleteByExternalId2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeleteContactById(DeleteContactByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a contact by its ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contacts.DeleteContactById(new DeleteContactByIdRequest
    {
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteContactByIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteContactByIdRequest](src/Paid/Requests/Contacts/DeleteContactByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[DeleteContactByIdError](src/Paid/Errors/DeleteContactByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; Delete2(Delete2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contacts.Delete2(new Delete2Request
    {
        ContactId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type object
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

<code>[Delete2Request](src/Paid/Requests/Contacts/Delete2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Contact&gt; GetByExternalId2(GetByExternalId2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contacts.GetByExternalId2(new GetByExternalId2Request
    {
        ExternalId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Contact
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

<code>[GetByExternalId2Request](src/Paid/Requests/Contacts/GetByExternalId2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Contact](src/Paid/Models/Contact.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Contact1&gt; GetContactById(GetContactByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a contact by its ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contacts.GetContactById(new GetContactByIdRequest
    {
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Contact1
}
catch (ApiException<GetContactByIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetContactByIdRequest](src/Paid/Requests/Contacts/GetContactByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Contact1](src/Paid/Models/Contact1.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[GetContactByIdError](src/Paid/Errors/GetContactByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Contact&gt; Get2(Get2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contacts.Get2(new Get2Request
    {
        ContactId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Contact
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

<code>[Get2Request](src/Paid/Requests/Contacts/Get2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Contact](src/Paid/Models/Contact.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ContactListResponse&gt; ListContacts(ListContactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of contacts for the organization

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contacts.ListContacts(new ListContactsRequest
    {
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type ContactListResponse
}
catch (ApiException<ListContactsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListContactsRequest](src/Paid/Requests/Contacts/ListContactsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactListResponse](src/Paid/Models/ContactListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[ListContactsError](src/Paid/Errors/ListContactsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Contact&gt;&gt; List2(List2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contacts.List2(new List2Request { Authorization = "some example string" });
    // TODO: Handle 'response' of type IReadOnlyList<Contact>
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

<code>[List2Request](src/Paid/Requests/Contacts/List2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Contact](src/Paid/Models/Contact.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Contact1&gt; UpdateContactByExternalId(UpdateContactByExternalIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a contact by its external ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contacts.UpdateContactByExternalId(new UpdateContactByExternalIdRequest
    {
        ExternalId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Contact1
}
catch (ApiException<UpdateContactByExternalIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateContactByExternalIdRequest](src/Paid/Requests/Contacts/UpdateContactByExternalIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Contact1](src/Paid/Models/Contact1.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[UpdateContactByExternalIdError](src/Paid/Errors/UpdateContactByExternalIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Contact1&gt; UpdateContactById(UpdateContactByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a contact by its ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contacts.UpdateContactById(new UpdateContactByIdRequest
    {
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Contact1
}
catch (ApiException<UpdateContactByIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateContactByIdRequest](src/Paid/Requests/Contacts/UpdateContactByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Contact1](src/Paid/Models/Contact1.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[UpdateContactByIdError](src/Paid/Errors/UpdateContactByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Costs

> Source: [Costs](src/Paid/Api/Costs.cs)

<details>
<summary><code>Task&lt;CostIngestResponse&gt; CreateCosts(CreateCostsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Ingests a batch of cost records. Each record is either a pre-computed `cost` (caller supplies amount + currency) or a `usage` record (caller supplies vendor/model/token counts and Paid prices it server-side). The batch is all-or-nothing: if any record fails validation, the entire request is rejected with a 400 and nothing is persisted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Costs.CreateCosts(new CreateCostsRequest { Authorization = "some example string" });
    // TODO: Handle 'response' of type CostIngestResponse
}
catch (ApiException<CreateCostsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateCostsRequest](src/Paid/Requests/Costs/CreateCostsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CostIngestResponse](src/Paid/Models/CostIngestResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[CreateCostsError](src/Paid/Errors/CreateCostsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Credits

> Source: [Credits](src/Paid/Api/Credits.cs)

<details>
<summary><code>Task&lt;CreditCurrency&gt; CreateCreditCurrency(CreateCreditCurrencyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a credit currency for the organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Credits.CreateCreditCurrency(new CreateCreditCurrencyOperationRequest
    {
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type CreditCurrency
}
catch (ApiException<CreateCreditCurrencyError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateCreditCurrencyOperationRequest](src/Paid/Requests/Credits/CreateCreditCurrencyOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreditCurrency](src/Paid/Models/CreditCurrency.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[CreateCreditCurrencyError](src/Paid/Errors/CreateCreditCurrencyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CreditCurrencyListResponse&gt; ListCreditCurrencies(ListCreditCurrenciesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List credit currencies for the organization. Includes active and archived currencies by default; use the status query parameter to filter.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Credits.ListCreditCurrencies(new ListCreditCurrenciesRequest
    {
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type CreditCurrencyListResponse
}
catch (ApiException<ListCreditCurrenciesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCreditCurrenciesRequest](src/Paid/Requests/Credits/ListCreditCurrenciesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreditCurrencyListResponse](src/Paid/Models/CreditCurrencyListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[ListCreditCurrenciesError](src/Paid/Errors/ListCreditCurrenciesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CreditCurrency&gt; UpdateCreditCurrencyById(UpdateCreditCurrencyByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a credit currency description or set its active/archive status.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Credits.UpdateCreditCurrencyById(new UpdateCreditCurrencyByIdRequest
    {
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type CreditCurrency
}
catch (ApiException<UpdateCreditCurrencyByIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateCreditCurrencyByIdRequest](src/Paid/Requests/Credits/UpdateCreditCurrencyByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreditCurrency](src/Paid/Models/CreditCurrency.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[UpdateCreditCurrencyByIdError](src/Paid/Errors/UpdateCreditCurrencyByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CustomerGroups

> Source: [CustomerGroups](src/Paid/Api/CustomerGroups.cs)

<details>
<summary><code>Task&lt;CustomerGroupDetail&gt; CreateCustomerGroup(CreateCustomerGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new customer group. Names must be unique per org.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomerGroups.CreateCustomerGroup(new CreateCustomerGroupOperationRequest
    {
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type CustomerGroupDetail
}
catch (ApiException<CreateCustomerGroupError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateCustomerGroupOperationRequest](src/Paid/Requests/CustomerGroups/CreateCustomerGroupOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerGroupDetail](src/Paid/Models/CustomerGroupDetail.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[CreateCustomerGroupError](src/Paid/Errors/CreateCustomerGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AddMembersResponse&gt; CreateCustomerGroupMembers(CreateCustomerGroupMembersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Additive. Adds customers to the group without removing existing members.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomerGroups.CreateCustomerGroupMembers(new CreateCustomerGroupMembersRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type AddMembersResponse
}
catch (ApiException<CreateCustomerGroupMembersError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateCustomerGroupMembersRequest](src/Paid/Requests/CustomerGroups/CreateCustomerGroupMembersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AddMembersResponse](src/Paid/Models/AddMembersResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[CreateCustomerGroupMembersError](src/Paid/Errors/CreateCustomerGroupMembersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomerGroupDeleteResponse&gt; DeleteCustomerGroup(DeleteCustomerGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the group and unbinds all members. Unbound customers fall back to the base value model config.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomerGroups.DeleteCustomerGroup(new DeleteCustomerGroupRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type CustomerGroupDeleteResponse
}
catch (ApiException<DeleteCustomerGroupError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteCustomerGroupRequest](src/Paid/Requests/CustomerGroups/DeleteCustomerGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerGroupDeleteResponse](src/Paid/Models/CustomerGroupDeleteResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[DeleteCustomerGroupError](src/Paid/Errors/DeleteCustomerGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RemoveMembersResponse&gt; DeleteCustomerGroupMembers(DeleteCustomerGroupMembersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes specific customers from the group.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomerGroups.DeleteCustomerGroupMembers(new DeleteCustomerGroupMembersRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type RemoveMembersResponse
}
catch (ApiException<DeleteCustomerGroupMembersError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteCustomerGroupMembersRequest](src/Paid/Requests/CustomerGroups/DeleteCustomerGroupMembersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RemoveMembersResponse](src/Paid/Models/RemoveMembersResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[DeleteCustomerGroupMembersError](src/Paid/Errors/DeleteCustomerGroupMembersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomerGroupDetail&gt; GetCustomerGroup(GetCustomerGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns group details including member list (capped at 500).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomerGroups.GetCustomerGroup(new GetCustomerGroupRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type CustomerGroupDetail
}
catch (ApiException<GetCustomerGroupError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCustomerGroupRequest](src/Paid/Requests/CustomerGroups/GetCustomerGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerGroupDetail](src/Paid/Models/CustomerGroupDetail.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[GetCustomerGroupError](src/Paid/Errors/GetCustomerGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomerGroupListResponse&gt; ListCustomerGroups(ListCustomerGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all customer groups for the organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomerGroups.ListCustomerGroups(new ListCustomerGroupsRequest
    {
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type CustomerGroupListResponse
}
catch (ApiException<ListCustomerGroupsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCustomerGroupsRequest](src/Paid/Requests/CustomerGroups/ListCustomerGroupsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerGroupListResponse](src/Paid/Models/CustomerGroupListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[ListCustomerGroupsError](src/Paid/Errors/ListCustomerGroupsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomerGroupDetail&gt; UpdateCustomerGroup(UpdateCustomerGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a customer group's name or description.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomerGroups.UpdateCustomerGroup(new UpdateCustomerGroupOperationRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type CustomerGroupDetail
}
catch (ApiException<UpdateCustomerGroupError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateCustomerGroupOperationRequest](src/Paid/Requests/CustomerGroups/UpdateCustomerGroupOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerGroupDetail](src/Paid/Models/CustomerGroupDetail.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[UpdateCustomerGroupError](src/Paid/Errors/UpdateCustomerGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SetMembersResponse&gt; UpdateCustomerGroupMembers(UpdateCustomerGroupMembersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reconcile membership. The provided list is the complete desired membership. Customers not in the list are removed. Customers in the list but not currently in the group are added.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomerGroups.UpdateCustomerGroupMembers(new UpdateCustomerGroupMembersRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type SetMembersResponse
}
catch (ApiException<UpdateCustomerGroupMembersError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateCustomerGroupMembersRequest](src/Paid/Requests/CustomerGroups/UpdateCustomerGroupMembersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SetMembersResponse](src/Paid/Models/SetMembersResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[UpdateCustomerGroupMembersError](src/Paid/Errors/UpdateCustomerGroupMembersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Customers

> Source: [Customers](src/Paid/Api/Customers.cs)

<details>
<summary><code>Task&lt;CustomersCheckEntitlementResponse200&gt; CheckEntitlement(CheckEntitlementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.CheckEntitlement(new CheckEntitlementRequest
    {
        CustomerId = "some example string",
        EventName = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type CustomersCheckEntitlementResponse200
}
catch (ApiException<CheckEntitlementError> ex)
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

<code>[CheckEntitlementRequest](src/Paid/Requests/Customers/CheckEntitlementRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomersCheckEntitlementResponse200](src/Paid/Models/CustomersCheckEntitlementResponse200.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[CheckEntitlementError](src/Paid/Errors/CheckEntitlementError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Customer1&gt; CreateCustomer(CreateCustomerOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new customer for the organization

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.CreateCustomer(new CreateCustomerOperationRequest
    {
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Customer1
}
catch (ApiException<CreateCustomerError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateCustomerOperationRequest](src/Paid/Requests/Customers/CreateCustomerOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Customer1](src/Paid/Models/Customer1.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[CreateCustomerError](src/Paid/Errors/CreateCustomerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomerAlias&gt; CreateCustomerAlias(CreateCustomerAliasRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an alternate external identifier for a customer by Paid display ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.CreateCustomerAlias(new CreateCustomerAliasRequest
    {
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type CustomerAlias
}
catch (ApiException<CreateCustomerAliasError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateCustomerAliasRequest](src/Paid/Requests/Customers/CreateCustomerAliasRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerAlias](src/Paid/Models/CustomerAlias.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[CreateCustomerAliasError](src/Paid/Errors/CreateCustomerAliasError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomerAlias&gt; CreateCustomerAliasByExternalId(CreateCustomerAliasByExternalIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an alternate external identifier for a customer by external ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.CreateCustomerAliasByExternalId(new CreateCustomerAliasByExternalIdRequest
    {
        ExternalId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type CustomerAlias
}
catch (ApiException<CreateCustomerAliasByExternalIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateCustomerAliasByExternalIdRequest](src/Paid/Requests/Customers/CreateCustomerAliasByExternalIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerAlias](src/Paid/Models/CustomerAlias.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[CreateCustomerAliasByExternalIdError](src/Paid/Errors/CreateCustomerAliasByExternalIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaymentMethod&gt; CreatePaymentMethod(CreatePaymentMethodRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new payment method for a customer using a Stripe confirmation token.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.CreatePaymentMethod(new CreatePaymentMethodRequest
    {
        ExternalId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type PaymentMethod
}
catch (ApiException<CreatePaymentMethodError> ex)
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

<code>[CreatePaymentMethodRequest](src/Paid/Requests/Customers/CreatePaymentMethodRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentMethod](src/Paid/Models/PaymentMethod.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[CreatePaymentMethodError](src/Paid/Errors/CreatePaymentMethodError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Customer&gt; Create3(Create3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.Create3(new Create3Request { Authorization = "some example string" });
    // TODO: Handle 'response' of type Customer
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

<code>[Create3Request](src/Paid/Requests/Customers/Create3Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Customer](src/Paid/Models/Customer.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeleteByExternalId3(DeleteByExternalId3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.DeleteByExternalId3(new DeleteByExternalId3Request
    {
        ExternalId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type object
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

<code>[DeleteByExternalId3Request](src/Paid/Requests/Customers/DeleteByExternalId3Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeleteCustomerAlias(DeleteCustomerAliasRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove an alternate external identifier from a customer by Paid display ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.DeleteCustomerAlias(new DeleteCustomerAliasRequest
    {
        Id = "some example string",
        Alias = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteCustomerAliasError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteCustomerAliasRequest](src/Paid/Requests/Customers/DeleteCustomerAliasRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[DeleteCustomerAliasError](src/Paid/Errors/DeleteCustomerAliasError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeleteCustomerAliasByExternalId(DeleteCustomerAliasByExternalIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove an alternate external identifier from a customer by external ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.DeleteCustomerAliasByExternalId(new DeleteCustomerAliasByExternalIdRequest
    {
        ExternalId = "some example string",
        Alias = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteCustomerAliasByExternalIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteCustomerAliasByExternalIdRequest](src/Paid/Requests/Customers/DeleteCustomerAliasByExternalIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[DeleteCustomerAliasByExternalIdError](src/Paid/Errors/DeleteCustomerAliasByExternalIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeleteCustomerById(DeleteCustomerByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a customer by Paid display ID. Use the value returned as `customer.id`, for example `cus_abc123`. If you have your own customer ID, use `DELETE /api/v2/customers/external/{externalId}`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.DeleteCustomerById(new DeleteCustomerByIdRequest
    {
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteCustomerByIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteCustomerByIdRequest](src/Paid/Requests/Customers/DeleteCustomerByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[DeleteCustomerByIdError](src/Paid/Errors/DeleteCustomerByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeletePaymentMethod(DeletePaymentMethodRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific payment method from a customer's account.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.DeletePaymentMethod(new DeletePaymentMethodRequest
    {
        ExternalId = "some example string",
        PaymentMethodId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeletePaymentMethodError> ex)
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

<code>[DeletePaymentMethodRequest](src/Paid/Requests/Customers/DeletePaymentMethodRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[DeletePaymentMethodError](src/Paid/Errors/DeletePaymentMethodError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; Delete3(Delete3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.Delete3(new Delete3Request
    {
        CustomerId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type object
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

<code>[Delete3Request](src/Paid/Requests/Customers/Delete3Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Customer&gt; GetByExternalId3(GetByExternalId3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.GetByExternalId3(new GetByExternalId3Request
    {
        ExternalId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Customer
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

<code>[GetByExternalId3Request](src/Paid/Requests/Customers/GetByExternalId3Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Customer](src/Paid/Models/Customer.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CostTracesResponse&gt; GetCostsByExternalId(GetCostsByExternalIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.GetCostsByExternalId(new GetCostsByExternalIdRequest
    {
        ExternalId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type CostTracesResponse
}
catch (ApiException<GetCostsByExternalIdError> ex)
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

<code>[GetCostsByExternalIdRequest](src/Paid/Requests/Customers/GetCostsByExternalIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CostTracesResponse](src/Paid/Models/CostTracesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[GetCostsByExternalIdError](src/Paid/Errors/GetCostsByExternalIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Customer1&gt; GetCustomerById(GetCustomerByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a customer by Paid display ID. Use the value returned as `customer.id`, for example `cus_abc123`. If you have your own customer ID, use `GET /api/v2/customers/external/{externalId}`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.GetCustomerById(new GetCustomerByIdRequest
    {
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Customer1
}
catch (ApiException<GetCustomerByIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCustomerByIdRequest](src/Paid/Requests/Customers/GetCustomerByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Customer1](src/Paid/Models/Customer1.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[GetCustomerByIdError](src/Paid/Errors/GetCustomerByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CreditBalanceListResponse&gt; GetCustomerCreditBalances(GetCustomerCreditBalancesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get current customer credit balances grouped by currency for a Paid customer display ID. Use the value returned as `customer.id`, for example `cus_abc123`. If you have your own customer ID, use `/api/v2/customers/external/{externalId}/credits/balances`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.GetCustomerCreditBalances(new GetCustomerCreditBalancesRequest
    {
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type CreditBalanceListResponse
}
catch (ApiException<GetCustomerCreditBalancesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCustomerCreditBalancesRequest](src/Paid/Requests/Customers/GetCustomerCreditBalancesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreditBalanceListResponse](src/Paid/Models/CreditBalanceListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[GetCustomerCreditBalancesError](src/Paid/Errors/GetCustomerCreditBalancesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CreditBalanceListResponse&gt; GetCustomerCreditBalancesByExternalId(GetCustomerCreditBalancesByExternalIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get current customer credit balances grouped by currency, looked up by external ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.GetCustomerCreditBalancesByExternalId(
        new GetCustomerCreditBalancesByExternalIdRequest
        {
            ExternalId = "some example string",
            Authorization = "some example string",
        });
    // TODO: Handle 'response' of type CreditBalanceListResponse
}
catch (ApiException<GetCustomerCreditBalancesByExternalIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCustomerCreditBalancesByExternalIdRequest](src/Paid/Requests/Customers/GetCustomerCreditBalancesByExternalIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreditBalanceListResponse](src/Paid/Models/CreditBalanceListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[GetCustomerCreditBalancesByExternalIdError](src/Paid/Errors/GetCustomerCreditBalancesByExternalIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomerState&gt; GetCustomerStateByExternalId(GetCustomerStateByExternalIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Primary integration endpoint for agents and programmatic clients using their own customer IDs. Use the value you stored on `customer.externalId`, for example `customer_123`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.GetCustomerStateByExternalId(new GetCustomerStateByExternalIdRequest
    {
        ExternalId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type CustomerState
}
catch (ApiException<GetCustomerStateByExternalIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCustomerStateByExternalIdRequest](src/Paid/Requests/Customers/GetCustomerStateByExternalIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerState](src/Paid/Models/CustomerState.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[GetCustomerStateByExternalIdError](src/Paid/Errors/GetCustomerStateByExternalIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomerState&gt; GetCustomerStateById(GetCustomerStateByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current customer state by Paid display ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.GetCustomerStateById(new GetCustomerStateByIdRequest
    {
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type CustomerState
}
catch (ApiException<GetCustomerStateByIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCustomerStateByIdRequest](src/Paid/Requests/Customers/GetCustomerStateByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerState](src/Paid/Models/CustomerState.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[GetCustomerStateByIdError](src/Paid/Errors/GetCustomerStateByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;EntitlementUsage&gt;&gt; GetEntitlements(GetEntitlementsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.GetEntitlements(new GetEntitlementsRequest
    {
        CustomerId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type IReadOnlyList<EntitlementUsage>
}
catch (ApiException<GetEntitlementsError> ex)
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

<code>[GetEntitlementsRequest](src/Paid/Requests/Customers/GetEntitlementsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[EntitlementUsage](src/Paid/Models/EntitlementUsage.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[GetEntitlementsError](src/Paid/Errors/GetEntitlementsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UsageSummariesResponse&gt; GetUsageByExternalId(GetUsageByExternalIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.GetUsageByExternalId(new GetUsageByExternalIdRequest
    {
        ExternalId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type UsageSummariesResponse
}
catch (ApiException<GetUsageByExternalIdError> ex)
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

<code>[GetUsageByExternalIdRequest](src/Paid/Requests/Customers/GetUsageByExternalIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsageSummariesResponse](src/Paid/Models/UsageSummariesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[GetUsageByExternalIdError](src/Paid/Errors/GetUsageByExternalIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Customer&gt; Get3(Get3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.Get3(new Get3Request
    {
        CustomerId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Customer
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

<code>[Get3Request](src/Paid/Requests/Customers/Get3Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Customer](src/Paid/Models/Customer.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GrantCustomerCreditsResponse&gt; GrantCustomerCredits(GrantCustomerCreditsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Immediately grant credits to a customer using an active credit currency key.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.GrantCustomerCredits(new GrantCustomerCreditsRequest
    {
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type GrantCustomerCreditsResponse
}
catch (ApiException<GrantCustomerCreditsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GrantCustomerCreditsRequest](src/Paid/Requests/Customers/GrantCustomerCreditsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GrantCustomerCreditsResponse](src/Paid/Models/GrantCustomerCreditsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[GrantCustomerCreditsError](src/Paid/Errors/GrantCustomerCreditsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GrantCustomerCreditsResponse&gt; GrantCustomerCreditsByExternalId(GrantCustomerCreditsByExternalIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Immediately grant credits to a customer looked up by external ID using an active credit currency key.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.GrantCustomerCreditsByExternalId(new GrantCustomerCreditsByExternalIdRequest
    {
        ExternalId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type GrantCustomerCreditsResponse
}
catch (ApiException<GrantCustomerCreditsByExternalIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GrantCustomerCreditsByExternalIdRequest](src/Paid/Requests/Customers/GrantCustomerCreditsByExternalIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GrantCustomerCreditsResponse](src/Paid/Models/GrantCustomerCreditsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[GrantCustomerCreditsByExternalIdError](src/Paid/Errors/GrantCustomerCreditsByExternalIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomerAliasListResponse&gt; ListCustomerAliases(ListCustomerAliasesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List alternate external identifiers that resolve to a customer by Paid display ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.ListCustomerAliases(new ListCustomerAliasesRequest
    {
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type CustomerAliasListResponse
}
catch (ApiException<ListCustomerAliasesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCustomerAliasesRequest](src/Paid/Requests/Customers/ListCustomerAliasesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerAliasListResponse](src/Paid/Models/CustomerAliasListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[ListCustomerAliasesError](src/Paid/Errors/ListCustomerAliasesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomerAliasListResponse&gt; ListCustomerAliasesByExternalId(ListCustomerAliasesByExternalIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List alternate external identifiers that resolve to a customer by external ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.ListCustomerAliasesByExternalId(new ListCustomerAliasesByExternalIdRequest
    {
        ExternalId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type CustomerAliasListResponse
}
catch (ApiException<ListCustomerAliasesByExternalIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCustomerAliasesByExternalIdRequest](src/Paid/Requests/Customers/ListCustomerAliasesByExternalIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerAliasListResponse](src/Paid/Models/CustomerAliasListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[ListCustomerAliasesByExternalIdError](src/Paid/Errors/ListCustomerAliasesByExternalIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomerListResponse&gt; ListCustomers(ListCustomersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of customers for the organization

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
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type CustomerListResponse
}
catch (ApiException<ListCustomersError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCustomersRequest](src/Paid/Requests/Customers/ListCustomersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerListResponse](src/Paid/Models/CustomerListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[ListCustomersError](src/Paid/Errors/ListCustomersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;PaymentMethod&gt;&gt; ListPaymentMethods(ListPaymentMethodsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all payment methods associated with a customer identified by their external ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.ListPaymentMethods(new ListPaymentMethodsRequest
    {
        ExternalId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type IReadOnlyList<PaymentMethod>
}
catch (ApiException<ListPaymentMethodsError> ex)
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

<code>[ListPaymentMethodsRequest](src/Paid/Requests/Customers/ListPaymentMethodsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[PaymentMethod](src/Paid/Models/PaymentMethod.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[ListPaymentMethodsError](src/Paid/Errors/ListPaymentMethodsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Customer&gt;&gt; List3(List3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.List3(new List3Request { Authorization = "some example string" });
    // TODO: Handle 'response' of type IReadOnlyList<Customer>
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

<code>[List3Request](src/Paid/Requests/Customers/List3Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Customer](src/Paid/Models/Customer.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Customer&gt; UpdateByExternalId2(UpdateByExternalId2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.UpdateByExternalId2(new UpdateByExternalId2Request
    {
        ExternalId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Customer
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

<code>[UpdateByExternalId2Request](src/Paid/Requests/Customers/UpdateByExternalId2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Customer](src/Paid/Models/Customer.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Customer1&gt; UpdateCustomerById(UpdateCustomerByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a customer by Paid display ID. Use the value returned as `customer.id`, for example `cus_abc123`. If you have your own customer ID, use `PUT /api/v2/customers/external/{externalId}`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.UpdateCustomerById(new UpdateCustomerByIdRequest
    {
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Customer1
}
catch (ApiException<UpdateCustomerByIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateCustomerByIdRequest](src/Paid/Requests/Customers/UpdateCustomerByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Customer1](src/Paid/Models/Customer1.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[UpdateCustomerByIdError](src/Paid/Errors/UpdateCustomerByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Customer&gt; Update2(Update2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.Update2(new Update2Request
    {
        CustomerId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Customer
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

<code>[Update2Request](src/Paid/Requests/Customers/Update2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Customer](src/Paid/Models/Customer.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomerUser&gt; UpsertCustomerUserByExternalId(UpsertCustomerUserByExternalIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create or update a customer user using customer and user external IDs

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.UpsertCustomerUserByExternalId(new UpsertCustomerUserByExternalIdRequest
    {
        CustomerExternalId = "some example string",
        UserExternalId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type CustomerUser
}
catch (ApiException<UpsertCustomerUserByExternalIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpsertCustomerUserByExternalIdRequest](src/Paid/Requests/Customers/UpsertCustomerUserByExternalIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerUser](src/Paid/Models/CustomerUser.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[UpsertCustomerUserByExternalIdError](src/Paid/Errors/UpsertCustomerUserByExternalIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Invoices

> Source: [Invoices](src/Paid/Api/Invoices.cs)

<details>
<summary><code>Task&lt;Invoice&gt; GetInvoiceById(GetInvoiceByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get an invoice by ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Invoices.GetInvoiceById(new GetInvoiceByIdRequest
    {
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Invoice
}
catch (ApiException<GetInvoiceByIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetInvoiceByIdRequest](src/Paid/Requests/Invoices/GetInvoiceByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Invoice](src/Paid/Models/Invoice.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[GetInvoiceByIdError](src/Paid/Errors/GetInvoiceByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;InvoiceLinesResponse&gt; GetInvoiceLines(GetInvoiceLinesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the invoice lines for an invoice by ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Invoices.GetInvoiceLines(new GetInvoiceLinesRequest
    {
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type InvoiceLinesResponse
}
catch (ApiException<GetInvoiceLinesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetInvoiceLinesRequest](src/Paid/Requests/Invoices/GetInvoiceLinesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InvoiceLinesResponse](src/Paid/Models/InvoiceLinesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[GetInvoiceLinesError](src/Paid/Errors/GetInvoiceLinesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;InvoiceListResponse&gt; ListInvoices(ListInvoicesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of invoices for the organization

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
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type InvoiceListResponse
}
catch (ApiException<ListInvoicesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListInvoicesRequest](src/Paid/Requests/Invoices/ListInvoicesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InvoiceListResponse](src/Paid/Models/InvoiceListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[ListInvoicesError](src/Paid/Errors/ListInvoicesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Invoice&gt; UpdateInvoiceById(UpdateInvoiceByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an invoice by ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Invoices.UpdateInvoiceById(new UpdateInvoiceByIdRequest
    {
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Invoice
}
catch (ApiException<UpdateInvoiceByIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateInvoiceByIdRequest](src/Paid/Requests/Invoices/UpdateInvoiceByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Invoice](src/Paid/Models/Invoice.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[UpdateInvoiceByIdError](src/Paid/Errors/UpdateInvoiceByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Orders

> Source: [Orders](src/Paid/Api/Orders.cs)

<details>
<summary><code>Task&lt;Order&gt; Activate(ActivateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Orders.Activate(new ActivateRequest
    {
        OrderId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Order
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

<code>[ActivateRequest](src/Paid/Requests/Orders/ActivateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Order](src/Paid/Models/Order.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Order&gt; ActivateAndPay(ActivateAndPayRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Activates the order and processes the initial payment using the provided Stripe confirmation token.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Orders.ActivateAndPay(new ActivateAndPayRequest
    {
        OrderId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Order
}
catch (ApiException<ActivateAndPayError> ex)
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

<code>[ActivateAndPayRequest](src/Paid/Requests/Orders/ActivateAndPayRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Order](src/Paid/Models/Order.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[ActivateAndPayError](src/Paid/Errors/ActivateAndPayError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Order1&gt; ActivateOrderById(ActivateOrderByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Activate a draft order by ID. Activation starts billing for the order using the same validation and side effects as the dashboard activation flow.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Orders.ActivateOrderById(new ActivateOrderByIdRequest
    {
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Order1
}
catch (ApiException<ActivateOrderByIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ActivateOrderByIdRequest](src/Paid/Requests/Orders/ActivateOrderByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Order1](src/Paid/Models/Order1.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[ActivateOrderByIdError](src/Paid/Errors/ActivateOrderByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BatchSeatAssignmentsResponse&gt; BatchOrderSeatAssignments(BatchOrderSeatAssignmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Assign or unassign seats in batch for an order

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Orders.BatchOrderSeatAssignments(new BatchOrderSeatAssignmentsRequest
    {
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type BatchSeatAssignmentsResponse
}
catch (ApiException<BatchOrderSeatAssignmentsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BatchOrderSeatAssignmentsRequest](src/Paid/Requests/Orders/BatchOrderSeatAssignmentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BatchSeatAssignmentsResponse](src/Paid/Models/BatchSeatAssignmentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[BatchOrderSeatAssignmentsError](src/Paid/Errors/BatchOrderSeatAssignmentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CancelRenewalResponse&gt; CancelRenewal(CancelRenewalOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Schedules the cancellation of an order's renewal from a specified date. The order will remain active until the cancellation date.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Orders.CancelRenewal(new CancelRenewalOperationRequest
    {
        OrderId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type CancelRenewalResponse
}
catch (ApiException<CancelRenewalError> ex)
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

<code>[CancelRenewalOperationRequest](src/Paid/Requests/Orders/CancelRenewalOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CancelRenewalResponse](src/Paid/Models/CancelRenewalResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[CancelRenewalError](src/Paid/Errors/CancelRenewalError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Order1&gt; CreateOrder(CreateOrderOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new order for the organization

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Orders.CreateOrder(new CreateOrderOperationRequest
    {
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Order1
}
catch (ApiException<CreateOrderError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateOrderOperationRequest](src/Paid/Requests/Orders/CreateOrderOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Order1](src/Paid/Models/Order1.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[CreateOrderError](src/Paid/Errors/CreateOrderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Order&gt; Create4(Create4Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Orders.Create4(new Create4Request { Authorization = "some example string" });
    // TODO: Handle 'response' of type Order
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

<code>[Create4Request](src/Paid/Requests/Orders/Create4Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Order](src/Paid/Models/Order.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeleteOrderById(DeleteOrderByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an order by ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Orders.DeleteOrderById(new DeleteOrderByIdRequest
    {
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteOrderByIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteOrderByIdRequest](src/Paid/Requests/Orders/DeleteOrderByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[DeleteOrderByIdError](src/Paid/Errors/DeleteOrderByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; Delete4(Delete4Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Orders.Delete4(new Delete4Request
    {
        OrderId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type object
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

<code>[Delete4Request](src/Paid/Requests/Orders/Delete4Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;InvoicePaidOrdersApi&gt;&gt; GetInvoices(GetInvoicesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all invoices associated with a specific order.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Orders.GetInvoices(new GetInvoicesRequest
    {
        OrderId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type IReadOnlyList<InvoicePaidOrdersApi>
}
catch (ApiException<GetInvoicesError> ex)
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

<code>[GetInvoicesRequest](src/Paid/Requests/Orders/GetInvoicesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[InvoicePaidOrdersApi](src/Paid/Models/InvoicePaidOrdersApi.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[GetInvoicesError](src/Paid/Errors/GetInvoicesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Order1&gt; GetOrderById(GetOrderByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get an order by ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Orders.GetOrderById(new GetOrderByIdRequest
    {
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Order1
}
catch (ApiException<GetOrderByIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetOrderByIdRequest](src/Paid/Requests/Orders/GetOrderByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Order1](src/Paid/Models/Order1.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[GetOrderByIdError](src/Paid/Errors/GetOrderByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OrderLinesResponse&gt; GetOrderLines(GetOrderLinesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the order lines for an order by ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Orders.GetOrderLines(new GetOrderLinesRequest
    {
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type OrderLinesResponse
}
catch (ApiException<GetOrderLinesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetOrderLinesRequest](src/Paid/Requests/Orders/GetOrderLinesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrderLinesResponse](src/Paid/Models/OrderLinesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[GetOrderLinesError](src/Paid/Errors/GetOrderLinesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Order&gt; Get4(Get4Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Orders.Get4(new Get4Request
    {
        OrderId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Order
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

<code>[Get4Request](src/Paid/Requests/Orders/Get4Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Order](src/Paid/Models/Order.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OrderSeatListResponse&gt; ListOrderSeats(ListOrderSeatsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List seats for an order

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Orders.ListOrderSeats(new ListOrderSeatsRequest
    {
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type OrderSeatListResponse
}
catch (ApiException<ListOrderSeatsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListOrderSeatsRequest](src/Paid/Requests/Orders/ListOrderSeatsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrderSeatListResponse](src/Paid/Models/OrderSeatListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[ListOrderSeatsError](src/Paid/Errors/ListOrderSeatsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OrderListResponse&gt; ListOrders(ListOrdersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of orders for the organization

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Orders.ListOrders(new ListOrdersRequest { Authorization = "some example string" });
    // TODO: Handle 'response' of type OrderListResponse
}
catch (ApiException<ListOrdersError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListOrdersRequest](src/Paid/Requests/Orders/ListOrdersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrderListResponse](src/Paid/Models/OrderListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[ListOrdersError](src/Paid/Errors/ListOrdersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Order&gt;&gt; List4(List4Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Orders.List4(new List4Request { Authorization = "some example string" });
    // TODO: Handle 'response' of type IReadOnlyList<Order>
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

<code>[List4Request](src/Paid/Requests/Orders/List4Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Order](src/Paid/Models/Order.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProrationUpgradeResponse&gt; SchedulePlanChange(SchedulePlanChangeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Schedules a plan upgrade or downgrade for an order with automatic proration calculation. Credits are applied for the unused portion of the current billing period.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Orders.SchedulePlanChange(new SchedulePlanChangeRequest
    {
        OrderId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type ProrationUpgradeResponse
}
catch (ApiException<SchedulePlanChangeError> ex)
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

<code>[SchedulePlanChangeRequest](src/Paid/Requests/Orders/SchedulePlanChangeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProrationUpgradeResponse](src/Paid/Models/ProrationUpgradeResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[SchedulePlanChangeError](src/Paid/Errors/SchedulePlanChangeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Order1&gt; UpdateOrderById(UpdateOrderByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an order by ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Orders.UpdateOrderById(new UpdateOrderByIdRequest
    {
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Order1
}
catch (ApiException<UpdateOrderByIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateOrderByIdRequest](src/Paid/Requests/Orders/UpdateOrderByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Order1](src/Paid/Models/Order1.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[UpdateOrderByIdError](src/Paid/Errors/UpdateOrderByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OrderSeat&gt; UpdateOrderSeatAssignment(UpdateOrderSeatAssignmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Assign or unassign a single seat on an order

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Orders.UpdateOrderSeatAssignment(new UpdateOrderSeatAssignmentRequest
    {
        Id = "some example string",
        SeatId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type OrderSeat
}
catch (ApiException<UpdateOrderSeatAssignmentError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateOrderSeatAssignmentRequest](src/Paid/Requests/Orders/UpdateOrderSeatAssignmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrderSeat](src/Paid/Models/OrderSeat.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[UpdateOrderSeatAssignmentError](src/Paid/Errors/UpdateOrderSeatAssignmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Plans

> Source: [Plans](src/Paid/Api/Plans.cs)

<details>
<summary><code>Task&lt;Plan1&gt; CreatePlan(CreatePlanOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new plan for a product.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Plans.CreatePlan(new CreatePlanOperationRequest
    {
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Plan1
}
catch (ApiException<CreatePlanError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreatePlanOperationRequest](src/Paid/Requests/Plans/CreatePlanOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Plan1](src/Paid/Models/Plan1.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[CreatePlanError](src/Paid/Errors/CreatePlanError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Plan&gt; GetById(GetByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Plans.GetById(new GetByIdRequest
    {
        PlanId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Plan
}
catch (ApiException<GetByIdError> ex)
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

<code>[GetByIdRequest](src/Paid/Requests/Plans/GetByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Plan](src/Paid/Models/Plan.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[GetByIdError](src/Paid/Errors/GetByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PlansGetCurrentResponse200&gt; GetCurrent(GetCurrentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the currently active plan subscription for a customer by their external ID. Returns the plan details and subscription information.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Plans.GetCurrent(new GetCurrentRequest
    {
        CustomerExternalId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type PlansGetCurrentResponse200
}
catch (ApiException<GetCurrentError> ex)
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

<code>[GetCurrentRequest](src/Paid/Requests/Plans/GetCurrentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlansGetCurrentResponse200](src/Paid/Models/PlansGetCurrentResponse200.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[GetCurrentError](src/Paid/Errors/GetCurrentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PlanGroup&gt; GetGroupById(GetGroupByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Plans.GetGroupById(new GetGroupByIdRequest
    {
        PlanGroupId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type PlanGroup
}
catch (ApiException<GetGroupByIdError> ex)
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

<code>[GetGroupByIdRequest](src/Paid/Requests/Plans/GetGroupByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlanGroup](src/Paid/Models/PlanGroup.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[GetGroupByIdError](src/Paid/Errors/GetGroupByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;PlanWithFeatures&gt;&gt; GetGroupPlans(GetGroupPlansRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all plans in a plan group with their features (product-attribute pairs)

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Plans.GetGroupPlans(new GetGroupPlansRequest
    {
        PlanGroupId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type IReadOnlyList<PlanWithFeatures>
}
catch (ApiException<GetGroupPlansError> ex)
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

<code>[GetGroupPlansRequest](src/Paid/Requests/Plans/GetGroupPlansRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[PlanWithFeatures](src/Paid/Models/PlanWithFeatures.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[GetGroupPlansError](src/Paid/Errors/GetGroupPlansError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Plan1&gt; GetPlanByExternalId(GetPlanByExternalIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a plan by your external plan ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Plans.GetPlanByExternalId(new GetPlanByExternalIdRequest
    {
        ExternalId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Plan1
}
catch (ApiException<GetPlanByExternalIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPlanByExternalIdRequest](src/Paid/Requests/Plans/GetPlanByExternalIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Plan1](src/Paid/Models/Plan1.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[GetPlanByExternalIdError](src/Paid/Errors/GetPlanByExternalIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Plan1&gt; GetPlanById(GetPlanByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a plan by Paid plan ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Plans.GetPlanById(new GetPlanByIdRequest
    {
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Plan1
}
catch (ApiException<GetPlanByIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPlanByIdRequest](src/Paid/Requests/Plans/GetPlanByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Plan1](src/Paid/Models/Plan1.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[GetPlanByIdError](src/Paid/Errors/GetPlanByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UsageSummariesResponse&gt; GetUsage(GetUsageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Plans.GetUsage(new GetUsageRequest
    {
        PlanId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        ExternalId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type UsageSummariesResponse
}
catch (ApiException<GetUsageError> ex)
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

<code>[GetUsageRequest](src/Paid/Requests/Plans/GetUsageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsageSummariesResponse](src/Paid/Models/UsageSummariesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[GetUsageError](src/Paid/Errors/GetUsageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PlanListResponse&gt; ListPlans(ListPlansRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns plans for your organization, including archived plans by default, optionally filtered to a product.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Plans.ListPlans(new ListPlansRequest { Authorization = "some example string" });
    // TODO: Handle 'response' of type PlanListResponse
}
catch (ApiException<ListPlansError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListPlansRequest](src/Paid/Requests/Plans/ListPlansRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlanListResponse](src/Paid/Models/PlanListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[ListPlansError](src/Paid/Errors/ListPlansError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Order&gt; Subscribe(SubscribeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new order for a customer subscribing to a plan. The order will be created with the plan's products and pricing attributes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Plans.Subscribe(new SubscribeRequest
    {
        PlanId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        CustomerExternalId = "some example string",
        Currency = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Order
}
catch (ApiException<SubscribeError> ex)
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

<code>[SubscribeRequest](src/Paid/Requests/Plans/SubscribeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Order](src/Paid/Models/Order.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[SubscribeError](src/Paid/Errors/SubscribeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CancelRenewalResponse&gt; Unsubscribe(UnsubscribeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels the renewal of an active order for a customer's plan subscription. The order will remain active until the cancellation date.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Plans.Unsubscribe(new UnsubscribeRequest
    {
        PlanId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        CustomerExternalId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type CancelRenewalResponse
}
catch (ApiException<UnsubscribeError> ex)
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

<code>[UnsubscribeRequest](src/Paid/Requests/Plans/UnsubscribeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CancelRenewalResponse](src/Paid/Models/CancelRenewalResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[UnsubscribeError](src/Paid/Errors/UnsubscribeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Plan1&gt; UpdatePlanByExternalId(UpdatePlanByExternalIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a plan by your external plan ID. If attributes are provided, they replace the plan's existing attributes. Set status to archive or restore the plan.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Plans.UpdatePlanByExternalId(new UpdatePlanByExternalIdRequest
    {
        ExternalId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Plan1
}
catch (ApiException<UpdatePlanByExternalIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdatePlanByExternalIdRequest](src/Paid/Requests/Plans/UpdatePlanByExternalIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Plan1](src/Paid/Models/Plan1.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[UpdatePlanByExternalIdError](src/Paid/Errors/UpdatePlanByExternalIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Plan1&gt; UpdatePlanById(UpdatePlanByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a plan by Paid plan ID. If attributes are provided, they replace the plan's existing attributes. Set status to archive or restore the plan.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Plans.UpdatePlanById(new UpdatePlanByIdRequest
    {
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Plan1
}
catch (ApiException<UpdatePlanByIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdatePlanByIdRequest](src/Paid/Requests/Plans/UpdatePlanByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Plan1](src/Paid/Models/Plan1.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[UpdatePlanByIdError](src/Paid/Errors/UpdatePlanByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PlanUpgradePathResponse&gt; UpdatePlanUpgradePath(UpdatePlanUpgradePathOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates upgrade path ordering for plans within a product, grouped by billing frequency.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Plans.UpdatePlanUpgradePath(new UpdatePlanUpgradePathOperationRequest
    {
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type PlanUpgradePathResponse
}
catch (ApiException<UpdatePlanUpgradePathError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdatePlanUpgradePathOperationRequest](src/Paid/Requests/Plans/UpdatePlanUpgradePathOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlanUpgradePathResponse](src/Paid/Models/PlanUpgradePathResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[UpdatePlanUpgradePathError](src/Paid/Errors/UpdatePlanUpgradePathError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProrationUpgradeResponse&gt; Upgrade(UpgradeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upgrades a customer from one plan to another with automatic proration. Credits are applied for the unused portion of the current billing period, and the order is updated with the new plan's pricing.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Plans.Upgrade(new UpgradeRequest
    {
        CustomerExternalId = "some example string",
        OldPlanId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        NewPlanId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type ProrationUpgradeResponse
}
catch (ApiException<UpgradeError> ex)
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

<code>[UpgradeRequest](src/Paid/Requests/Plans/UpgradeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProrationUpgradeResponse](src/Paid/Models/ProrationUpgradeResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[UpgradeError](src/Paid/Errors/UpgradeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PricingApi

> Source: [PricingApi](src/Paid/Api/PricingApi.cs)

<details>
<summary><code>Task&lt;PricingResponse&gt; GetPricing(GetPricingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns pricing and credit benefits for a single product attribute.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PricingApi.GetPricing(new GetPricingRequest
    {
        ProductAttributeId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type PricingResponse
}
catch (ApiException<GetPricingError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPricingRequest](src/Paid/Requests/PricingApi/GetPricingRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PricingResponse](src/Paid/Models/PricingResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[GetPricingError](src/Paid/Errors/GetPricingError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PricingListResponse&gt; ListPricing(ListPricingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns pricing for all product attributes of a product. Each entry includes the attribute's pricing configuration and credit benefits.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PricingApi.ListPricing(new ListPricingRequest
    {
        ProductId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type PricingListResponse
}
catch (ApiException<ListPricingError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListPricingRequest](src/Paid/Requests/PricingApi/ListPricingRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PricingListResponse](src/Paid/Models/PricingListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[ListPricingError](src/Paid/Errors/ListPricingError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PricingResponse&gt; UpdatePricing(UpdatePricingOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates pricing on an existing product attribute. If creditBenefits is provided, it fully replaces existing benefits. If omitted, existing benefits are preserved.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PricingApi.UpdatePricing(new UpdatePricingOperationRequest
    {
        ProductAttributeId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type PricingResponse
}
catch (ApiException<UpdatePricingError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdatePricingOperationRequest](src/Paid/Requests/PricingApi/UpdatePricingOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PricingResponse](src/Paid/Models/PricingResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[UpdatePricingError](src/Paid/Errors/UpdatePricingError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Products

> Source: [Products](src/Paid/Api/Products.cs)

<details>
<summary><code>Task&lt;Product1&gt; CreateProduct(CreateProductOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new product for the organization

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Products.CreateProduct(new CreateProductOperationRequest
    {
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Product1
}
catch (ApiException<CreateProductError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateProductOperationRequest](src/Paid/Requests/Products/CreateProductOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Product1](src/Paid/Models/Product1.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[CreateProductError](src/Paid/Errors/CreateProductError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Product&gt; Create5(Create5Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Products.Create5(new Create5Request { Authorization = "some example string" });
    // TODO: Handle 'response' of type Product
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

<code>[Create5Request](src/Paid/Requests/Products/Create5Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Product](src/Paid/Models/Product.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeleteByExternalId4(DeleteByExternalId4Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Products.DeleteByExternalId4(new DeleteByExternalId4Request
    {
        ExternalId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type object
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

<code>[DeleteByExternalId4Request](src/Paid/Requests/Products/DeleteByExternalId4Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; Delete5(Delete5Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Products.Delete5(new Delete5Request
    {
        ProductId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type object
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

<code>[Delete5Request](src/Paid/Requests/Products/Delete5Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Product&gt; GetByExternalId4(GetByExternalId4Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Products.GetByExternalId4(new GetByExternalId4Request
    {
        ExternalId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Product
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

<code>[GetByExternalId4Request](src/Paid/Requests/Products/GetByExternalId4Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Product](src/Paid/Models/Product.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProductDetail&gt; GetProductById(GetProductByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a product by ID, including its product attributes with pricing details

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Products.GetProductById(new GetProductByIdRequest
    {
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type ProductDetail
}
catch (ApiException<GetProductByIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetProductByIdRequest](src/Paid/Requests/Products/GetProductByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProductDetail](src/Paid/Models/ProductDetail.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[GetProductByIdError](src/Paid/Errors/GetProductByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Product&gt; Get5(Get5Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Products.Get5(new Get5Request
    {
        ProductId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Product
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

<code>[Get5Request](src/Paid/Requests/Products/Get5Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Product](src/Paid/Models/Product.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProductListResponse&gt; ListProducts(ListProductsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of products for the organization

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Products.ListProducts(new ListProductsRequest
    {
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type ProductListResponse
}
catch (ApiException<ListProductsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListProductsRequest](src/Paid/Requests/Products/ListProductsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProductListResponse](src/Paid/Models/ProductListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[ListProductsError](src/Paid/Errors/ListProductsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Product&gt;&gt; List5(List5Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Products.List5(new List5Request { Authorization = "some example string" });
    // TODO: Handle 'response' of type IReadOnlyList<Product>
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

<code>[List5Request](src/Paid/Requests/Products/List5Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Product](src/Paid/Models/Product.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Product&gt; UpdateByExternalId3(UpdateByExternalId3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Products.UpdateByExternalId3(new UpdateByExternalId3Request
    {
        ExternalId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Product
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

<code>[UpdateByExternalId3Request](src/Paid/Requests/Products/UpdateByExternalId3Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Product](src/Paid/Models/Product.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProductDetail&gt; UpdateProductById(UpdateProductByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a product by ID. Optionally upsert product attributes with pricing.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Products.UpdateProductById(new UpdateProductByIdRequest
    {
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type ProductDetail
}
catch (ApiException<UpdateProductByIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateProductByIdRequest](src/Paid/Requests/Products/UpdateProductByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProductDetail](src/Paid/Models/ProductDetail.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[UpdateProductByIdError](src/Paid/Errors/UpdateProductByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Product&gt; Update4(Update4Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Products.Update4(new Update4Request
    {
        ProductId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Product
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

<code>[Update4Request](src/Paid/Requests/Products/Update4Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Product](src/Paid/Models/Product.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Signals

> Source: [Signals](src/Paid/Api/Signals.cs)

<details>
<summary><code>Task&lt;BulkSignalsResponse&gt; CreateSignals(CreateSignalsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple signals (usage events) in a single request. Each signal must include a customer attribution (either customerId or externalCustomerId) and a product attribution (either productId or externalProductId).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Signals.CreateSignals(new CreateSignalsRequest
    {
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type BulkSignalsResponse
}
catch (ApiException<CreateSignalsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateSignalsRequest](src/Paid/Requests/Signals/CreateSignalsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkSignalsResponse](src/Paid/Models/BulkSignalsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[CreateSignalsError](src/Paid/Errors/CreateSignalsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Traces

> Source: [Traces](src/Paid/Api/Traces.cs)

<details>
<summary><code>Task&lt;TracesResponse&gt; GetTraces(GetTracesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Traces.GetTraces(new GetTracesRequest { Authorization = "some example string" });
    // TODO: Handle 'response' of type TracesResponse
}
catch (ApiException<GetTracesError> ex)
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

<code>[GetTracesRequest](src/Paid/Requests/Traces/GetTracesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TracesResponse](src/Paid/Models/TracesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[GetTracesError](src/Paid/Errors/GetTracesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Usage

> Source: [Usage](src/Paid/Api/Usage.cs)

<details>
<summary><code>Task&lt;UsageCheckUsageResponse200&gt; CheckUsage(CheckUsageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Usage.CheckUsage(new CheckUsageRequest { Authorization = "some example string" });
    // TODO: Handle 'response' of type UsageCheckUsageResponse200
}
catch (ApiException<CheckUsageError> ex)
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

<code>[CheckUsageRequest](src/Paid/Requests/Usage/CheckUsageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsageCheckUsageResponse200](src/Paid/Models/UsageCheckUsageResponse200.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[CheckUsageError](src/Paid/Errors/CheckUsageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; RecordBulk(RecordBulkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DEPRECATED: Use POST /usage/v2/signals/bulk instead for cleaner field names.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Usage.RecordBulk(new RecordBulkRequest { Authorization = "some example string" });
    // TODO: Handle 'response' of type object
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

<code>[RecordBulkRequest](src/Paid/Requests/Usage/RecordBulkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; UsageRecordBulkV2(UsageRecordBulkV2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Usage.UsageRecordBulkV2(new UsageRecordBulkV2Request
    {
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<UsageRecordBulkV2Error> ex)
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

<code>[UsageRecordBulkV2Request](src/Paid/Requests/Usage/UsageRecordBulkV2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[UsageRecordBulkV2Error](src/Paid/Errors/UsageRecordBulkV2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](src/Paid/Api/WebhooksApi.cs)

<details>
<summary><code>Task&lt;WebhookListResponse&gt; ListWebhooks(ListWebhooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List customer-facing billing webhooks for the authenticated organization, along with whether the organization has generated a signing secret.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.ListWebhooks(new ListWebhooksRequest
    {
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type WebhookListResponse
}
catch (ApiException<ListWebhooksError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListWebhooksRequest](src/Paid/Requests/WebhooksApi/ListWebhooksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookListResponse](src/Paid/Models/WebhookListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[ListWebhooksError](src/Paid/Errors/ListWebhooksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RotateWebhookSecretResponse&gt; RotateWebhookSecret(RotateWebhookSecretRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a new HMAC signing secret used by every webhook in this organization and return it exactly once. The previous secret is invalidated immediately on next delivery.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.RotateWebhookSecret(new RotateWebhookSecretRequest
    {
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type RotateWebhookSecretResponse
}
catch (ApiException<RotateWebhookSecretError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RotateWebhookSecretRequest](src/Paid/Requests/WebhooksApi/RotateWebhookSecretRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RotateWebhookSecretResponse](src/Paid/Models/RotateWebhookSecretResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RotateWebhookSecretError](src/Paid/Errors/RotateWebhookSecretError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhookTestResponse&gt; TestWebhook(TestWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a synthetic webhook delivery to the configured destination for this webhook.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.TestWebhook(new TestWebhookRequest
    {
        WebhookName = WebhooksWebhookNameTestPostParametersWebhookName.BillingInvoiceCreated,
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type WebhookTestResponse
}
catch (ApiException<TestWebhookError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TestWebhookRequest](src/Paid/Requests/WebhooksApi/TestWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookTestResponse](src/Paid/Models/WebhookTestResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[TestWebhookError](src/Paid/Errors/TestWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhookUpdateResponse&gt; UpdateWebhook(UpdateWebhookOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enable or disable a webhook and configure the destination URL for the authenticated organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.UpdateWebhook(new UpdateWebhookOperationRequest
    {
        WebhookName = WebhooksWebhookNamePatchParametersWebhookName.BillingInvoiceCreated,
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type WebhookUpdateResponse
}
catch (ApiException<UpdateWebhookError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateWebhookOperationRequest](src/Paid/Requests/WebhooksApi/UpdateWebhookOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookUpdateResponse](src/Paid/Models/WebhookUpdateResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[UpdateWebhookError](src/Paid/Errors/UpdateWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AnalyticsExperimental

> Source: [AnalyticsExperimental](src/Paid/Api/AnalyticsExperimental.cs)

<details>
<summary><code>Task&lt;AnalyticsQueryResponse&gt; ExecuteAnalyticsQuery(ExecuteAnalyticsQueryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

Runs a single ClickHouse SELECT (or WITH … SELECT) against your organization's analytics views. Before writing a query, call `getAnalyticsSchema` (GET /schema) for the available views and columns, and `getSignalsMetadata` (GET /signals/metadata) for the JSON paths inside `fact_signal.data`. Results are automatically scoped to your organization — no org filter is needed or possible. Only SELECT/WITH statements are accepted.

Conventions: monetary amounts are minor units (cents — divide by 100 for the major unit); most are integers, but `fact_cost.cost_amount` is fractional cents (Decimal) since a single AI call usually costs less than a cent; 64-bit integers (counts, ids, amounts) are returned as JSON strings to preserve precision, so parse them client-side. Query signal payloads via JSON paths, e.g. `SELECT data.country::String AS country, count() FROM fact_signal GROUP BY country`.

Limits: 30 seconds of execution time and 10,000 result rows (truncation is flagged via `meta.truncated`). Prefer aggregates and a `created_at` date filter on large tables — this endpoint is for interactive analytics, not bulk export.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AnalyticsExperimental.ExecuteAnalyticsQuery(new ExecuteAnalyticsQueryRequest
    {
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type AnalyticsQueryResponse
}
catch (ApiException<ExecuteAnalyticsQueryError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ExecuteAnalyticsQueryRequest](src/Paid/Requests/AnalyticsExperimental/ExecuteAnalyticsQueryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnalyticsQueryResponse](src/Paid/Models/AnalyticsQueryResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[ExecuteAnalyticsQueryError](src/Paid/Errors/ExecuteAnalyticsQueryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AnalyticsSchemaResponse&gt; GetAnalyticsSchema(GetAnalyticsSchemaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

Returns the analytics views available to POST /query, with column names, ClickHouse types, and descriptions. Dimensions (`dim_*`) describe entities; facts (`fact_*`) are event/transaction tables that join to dimensions via the `*_id` columns described in each comment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AnalyticsExperimental.GetAnalyticsSchema(new GetAnalyticsSchemaRequest
    {
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type AnalyticsSchemaResponse
}
catch (ApiException<GetAnalyticsSchemaError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAnalyticsSchemaRequest](src/Paid/Requests/AnalyticsExperimental/GetAnalyticsSchemaRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnalyticsSchemaResponse](src/Paid/Models/AnalyticsSchemaResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[GetAnalyticsSchemaError](src/Paid/Errors/GetAnalyticsSchemaError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SignalsMetadataResponse&gt; GetSignalsMetadata(GetSignalsMetadataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

Lists the JSON paths (and their observed types) present in the `data` payload of your signals within a time window (default: last 30 days), grouped by signal name. Use the returned paths in queries against `fact_signal`, e.g. `WHERE data.::String = '...'`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AnalyticsExperimental.GetSignalsMetadata(new GetSignalsMetadataRequest
    {
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type SignalsMetadataResponse
}
catch (ApiException<GetSignalsMetadataError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSignalsMetadataRequest](src/Paid/Requests/AnalyticsExperimental/GetSignalsMetadataRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SignalsMetadataResponse](src/Paid/Models/SignalsMetadataResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[GetSignalsMetadataError](src/Paid/Errors/GetSignalsMetadataError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CustomViewsExperimental

> Source: [CustomViewsExperimental](src/Paid/Api/CustomViewsExperimental.cs)

<details>
<summary><code>Task&lt;CustomView&gt; CreateCustomView(CreateCustomViewOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

⚠️ Only call this when the user has EXPLICITLY asked to save or create the view. After generating or previewing a dashboard, do NOT automatically save a draft — show it to the user and wait for them to ask you to save it. Creating saves a DRAFT only; it is NOT permission to publish — never chain a publish onto a create. After saving, hand the user the previewUrl and wait for their feedback before doing anything else. Saves named analytics queries + a self-contained HTML render bundle as a DRAFT custom view. **Call getCustomViewAuthoringGuide (GET /experimental/views/authoring-guide) first** — it returns the full guide and a copy-paste interactive template. Key rules: (1) Do NOT add a customer filter to the SQL — the database scopes every query to the viewing customer at embed time. (2) Each query's SQL must be SELECT-only; return clearly-named columns. Compute metric VALUES in SQL (e.g. (count()*2)/5 AS custom_metric) — derive a number in the render bundle only when it depends on user interaction (toggle/filter/hover) or is pure formatting of a value a query already returns. (3) The render bundle must be SELF-CONTAINED — inline all CSS/JS/charting, NO external loads or fetch (the sandbox has connect-src 'none'); it must listen for the `paid:data` message (data keyed by query id) and re-render on each one. (4) Make it INTERACTIVE — mousemove hover tooltips and at least one addEventListener-wired control that re-renders (a static chart feels broken). (5) The render bundle is the single source of truth — BEFORE saving, preview the EXACT bundle in the user's current client (call getCustomViewPreviewHarness with your bundle + sample data and render the HTML it returns) and show it to the user; that preview in the current client is how the user first sees the dashboard. Do NOT save a draft just to preview it in Paid — creating writes to the user's real account and is never a preview step. Do NOT build a separate chart, and only show numbers that come from a declared query. (6) A view is a FULL dashboard — include as many charts/KPIs as the analysis has. Keep every element derived from the single viewing customer (KPIs, trends, type mix); drop only cross-customer comparisons (rankings, share-of-total, 'N customers'). Don't simplify to one chart. (7) To make the date range adjustable (e.g. the user says 'last month'), write the date boundary as `{period_start:DateTime}` / `{period_end:DateTime}` placeholders in the SQL and pass a default `period` (relative like {kind:'relative',unit:'month',amount:1}, or absolute start/end). The org user can then change it in Paid without re-authoring. A query using the placeholders REQUIRES a period. Do NOT add your own date-range picker to the render bundle — Paid owns the timeframe and the bundle receives already-filtered data; a second in-bundle picker cannot re-run the SQL. (8) Check your draft with validateCustomView (POST /experimental/views/validate) BEFORE asking the user to save — it runs these same gates without persisting and reports every problem at once. The response returns a `previewUrl` — give it to the user so they can open the new view in Paid.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomViewsExperimental.CreateCustomView(new CreateCustomViewOperationRequest
    {
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type CustomView
}
catch (ApiException<CreateCustomViewError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateCustomViewOperationRequest](src/Paid/Requests/CustomViewsExperimental/CreateCustomViewOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomView](src/Paid/Models/CustomView.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[CreateCustomViewError](src/Paid/Errors/CreateCustomViewError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomViewDetail&gt; GetCustomView(GetCustomViewRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

Returns the view's name, status, query ids, and the author render bundle for the owning organization (DRAFT or PUBLISHED). Used by the trusted preview/embed frame to render the sandbox; the per-customer data is fetched separately via /:displayId/data.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomViewsExperimental.GetCustomView(new GetCustomViewRequest
    {
        DisplayId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type CustomViewDetail
}
catch (ApiException<GetCustomViewError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCustomViewRequest](src/Paid/Requests/CustomViewsExperimental/GetCustomViewRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomViewDetail](src/Paid/Models/CustomViewDetail.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[GetCustomViewError](src/Paid/Errors/GetCustomViewError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ViewDataResponse&gt; GetCustomViewData(GetCustomViewDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

Runs every stored query of the view on the read-only analytics database and returns the result sets keyed by query id. For a customer-scoped view (the default), the query is scoped to the caller's organization AND the given `customerId` (both enforced as ClickHouse row filters) — `customerId` is required. For an organization-scoped view, the data is org-wide (scoped only to the caller's organization) and `customerId` is ignored. The scope is enforced by the database — it cannot be widened by the stored SQL.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomViewsExperimental.GetCustomViewData(new GetCustomViewDataRequest
    {
        DisplayId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type ViewDataResponse
}
catch (ApiException<GetCustomViewDataError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCustomViewDataRequest](src/Paid/Requests/CustomViewsExperimental/GetCustomViewDataRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ViewDataResponse](src/Paid/Models/ViewDataResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[GetCustomViewDataError](src/Paid/Errors/GetCustomViewDataError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomViewEmbedTokenResponse&gt; GetCustomViewEmbedToken(GetCustomViewEmbedTokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

Mints a short-lived, customer-scoped token for embedding a published custom view. Call this from your server with your API key, then pass the returned token to the embed SDK. Organization-scoped views cannot be embedded per-customer — this returns a 400 (`ORG_SCOPED_VIEW_NOT_EMBEDDABLE`) for one.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomViewsExperimental.GetCustomViewEmbedToken(new GetCustomViewEmbedTokenRequest
    {
        DisplayId = "some example string",
        CustomerId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type CustomViewEmbedTokenResponse
}
catch (ApiException<GetCustomViewEmbedTokenError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCustomViewEmbedTokenRequest](src/Paid/Requests/CustomViewsExperimental/GetCustomViewEmbedTokenRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomViewEmbedTokenResponse](src/Paid/Models/CustomViewEmbedTokenResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[GetCustomViewEmbedTokenError](src/Paid/Errors/GetCustomViewEmbedTokenError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomViewListResponse&gt; ListCustomViews(ListCustomViewsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

Lists the organization's custom views (newest first) with lightweight summary info — name, status, query count, default date range, created date. Does not return the SQL or render bundle; fetch a single view via getCustomView for those.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomViewsExperimental.ListCustomViews(new ListCustomViewsRequest
    {
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type CustomViewListResponse
}
catch (ApiException<ListCustomViewsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCustomViewsRequest](src/Paid/Requests/CustomViewsExperimental/ListCustomViewsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomViewListResponse](src/Paid/Models/CustomViewListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[ListCustomViewsError](src/Paid/Errors/ListCustomViewsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomView&gt; PublishCustomView(PublishCustomViewRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

⚠️ Never publish as an automatic follow-up to creating or generating a view. Only call this after you have shown the user the built/previewed view and they have EXPLICITLY approved publishing — building and publishing are separate user decisions, and answering an earlier question (e.g. the view's scope) is NOT publish approval. Flips the view from DRAFT to PUBLISHED. Only PUBLISHED views are served on the embed data path — this is the gate that stops an unreviewed view reaching end-customers. Idempotent: publishing an already-published view is a no-op success. The response returns a `previewUrl` — give it to the user so they can open the view in Paid.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomViewsExperimental.PublishCustomView(new PublishCustomViewRequest
    {
        DisplayId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type CustomView
}
catch (ApiException<PublishCustomViewError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PublishCustomViewRequest](src/Paid/Requests/CustomViewsExperimental/PublishCustomViewRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomView](src/Paid/Models/CustomView.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[PublishCustomViewError](src/Paid/Errors/PublishCustomViewError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomView&gt; UpdateCustomView(UpdateCustomViewOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

Partially updates a view. Omitted fields are left unchanged. For REVISIONS, prefer the incremental fields — `bundleEdits` (exact search-and-replace on the stored render bundle) and `queryUpserts`/`queryRemovals` (per-query changes) — so you transmit only what changed instead of re-sending the whole payload. The full-replacement fields remain for rewrites: `renderBundle`, and `queries` (a FULL replacement of the query list — never drop queries the user didn't ask to remove). Replacement and incremental forms of the same aspect cannot be combined. The resulting SQL and bundle pass the same validation as createCustomView (SELECT-only, size cap, self-contained, paid:data listener). Works on DRAFT or PUBLISHED views — published embeds pick the change up on their next load.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomViewsExperimental.UpdateCustomView(new UpdateCustomViewOperationRequest
    {
        DisplayId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type CustomView
}
catch (ApiException<UpdateCustomViewError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateCustomViewOperationRequest](src/Paid/Requests/CustomViewsExperimental/UpdateCustomViewOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomView](src/Paid/Models/CustomView.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[UpdateCustomViewError](src/Paid/Errors/UpdateCustomViewError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomView&gt; UpdateCustomViewPeriod(UpdateCustomViewPeriodOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

Updates the view's default date range (the period applied to queries that use the `{period_start:DateTime}` / `{period_end:DateTime}` placeholders). Accepts a relative rolling window (e.g. last 30 days) or a fixed start/end range. Lets the period be changed after deployment without re-authoring the SQL. Applies to DRAFT or PUBLISHED views.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomViewsExperimental.UpdateCustomViewPeriod(
        new UpdateCustomViewPeriodOperationRequest
        {
            DisplayId = "some example string",
            Authorization = "some example string",
        });
    // TODO: Handle 'response' of type CustomView
}
catch (ApiException<UpdateCustomViewPeriodError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateCustomViewPeriodOperationRequest](src/Paid/Requests/CustomViewsExperimental/UpdateCustomViewPeriodOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomView](src/Paid/Models/CustomView.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[UpdateCustomViewPeriodError](src/Paid/Errors/UpdateCustomViewPeriodError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CustomerPortals

> Source: [CustomerPortals](src/Paid/Api/CustomerPortals.cs)

<details>
<summary><code>Task&lt;CustomerPortal&gt; CreateCustomerPortal(CreateCustomerPortalOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a portal session for the customer. Returns a short-lived URL to the customer portal.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomerPortals.CreateCustomerPortal(new CreateCustomerPortalOperationRequest
    {
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type CustomerPortal
}
catch (ApiException<CreateCustomerPortalError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateCustomerPortalOperationRequest](src/Paid/Requests/CustomerPortals/CreateCustomerPortalOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerPortal](src/Paid/Models/CustomerPortal.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[CreateCustomerPortalError](src/Paid/Errors/CreateCustomerPortalError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## OrdersLines

> Source: [OrdersLines](src/Paid/Api/OrdersLines.cs)

<details>
<summary><code>Task&lt;Order&gt; Update3(Update3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.OrdersLines.Update3(new Update3Request
    {
        OrderId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type Order
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

<code>[Update3Request](src/Paid/Requests/OrdersLines/Update3Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Order](src/Paid/Models/Order.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Paid/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ValueModels

> Source: [ValueModels](src/Paid/Api/ValueModels.cs)

<details>
<summary><code>Task&lt;ValueModelDetail&gt; GetCurrentValueModel(GetCurrentValueModelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current (latest active) value model for the organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ValueModels.GetCurrentValueModel(new GetCurrentValueModelRequest
    {
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type ValueModelDetail
}
catch (ApiException<GetCurrentValueModelError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCurrentValueModelRequest](src/Paid/Requests/ValueModels/GetCurrentValueModelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ValueModelDetail](src/Paid/Models/ValueModelDetail.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[GetCurrentValueModelError](src/Paid/Errors/GetCurrentValueModelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ValueModelDetail&gt; GetValueModelVersion(GetValueModelVersionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a specific historical value model version by version number, including full content.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ValueModels.GetValueModelVersion(new GetValueModelVersionRequest
    {
        Version = 1,
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type ValueModelDetail
}
catch (ApiException<GetValueModelVersionError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetValueModelVersionRequest](src/Paid/Requests/ValueModels/GetValueModelVersionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ValueModelDetail](src/Paid/Models/ValueModelDetail.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[GetValueModelVersionError](src/Paid/Errors/GetValueModelVersionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ValueModelVersionListResponse&gt; ListValueModelVersions(ListValueModelVersionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all value model versions sorted by version descending. Does not include the full content.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ValueModels.ListValueModelVersions(new ListValueModelVersionsRequest
    {
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type ValueModelVersionListResponse
}
catch (ApiException<ListValueModelVersionsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListValueModelVersionsRequest](src/Paid/Requests/ValueModels/ListValueModelVersionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ValueModelVersionListResponse](src/Paid/Models/ValueModelVersionListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[ListValueModelVersionsError](src/Paid/Errors/ListValueModelVersionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BackfillResponse&gt; RefreshValueModelBackfill(RefreshValueModelBackfillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Manually triggers a recalculation of all ClickHouse rows against the current value model.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ValueModels.RefreshValueModelBackfill(new RefreshValueModelBackfillRequest
    {
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type BackfillResponse
}
catch (ApiException<RefreshValueModelBackfillError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RefreshValueModelBackfillRequest](src/Paid/Requests/ValueModels/RefreshValueModelBackfillRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BackfillResponse](src/Paid/Models/BackfillResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RefreshValueModelBackfillError](src/Paid/Errors/RefreshValueModelBackfillError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ValueModelDetail&gt; UpdateValueModel(UpdateValueModelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads a new value model version. Validates the content, creates a new version, archives the previous active version, syncs to ClickHouse, and triggers a backfill of all historical signals.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ValueModels.UpdateValueModel(new UpdateValueModelRequest
    {
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type ValueModelDetail
}
catch (ApiException<UpdateValueModelError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateValueModelRequest](src/Paid/Requests/ValueModels/UpdateValueModelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ValueModelDetail](src/Paid/Models/ValueModelDetail.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[UpdateValueModelError](src/Paid/Errors/UpdateValueModelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ValueReceipts

> Source: [ValueReceipts](src/Paid/Api/ValueReceipts.cs)

<details>
<summary><code>Task&lt;SuccessResponse&gt; ArchiveValueReceipt(ArchiveValueReceiptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Soft-archive a value receipt. Archived VRs are hidden from list by default.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ValueReceipts.ArchiveValueReceipt(new ArchiveValueReceiptRequest
    {
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type SuccessResponse
}
catch (ApiException<ArchiveValueReceiptError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ArchiveValueReceiptRequest](src/Paid/Requests/ValueReceipts/ArchiveValueReceiptRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessResponse](src/Paid/Models/SuccessResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[ArchiveValueReceiptError](src/Paid/Errors/ArchiveValueReceiptError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ValueReceiptDetail&gt; GetValueReceiptById(GetValueReceiptByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a value receipt by ID, including its publish/share state.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ValueReceipts.GetValueReceiptById(new GetValueReceiptByIdRequest
    {
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type ValueReceiptDetail
}
catch (ApiException<GetValueReceiptByIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetValueReceiptByIdRequest](src/Paid/Requests/ValueReceipts/GetValueReceiptByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ValueReceiptDetail](src/Paid/Models/ValueReceiptDetail.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[GetValueReceiptByIdError](src/Paid/Errors/GetValueReceiptByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ValueReceiptListResponse&gt; ListValueReceipts(ListValueReceiptsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List value receipts for the organization

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ValueReceipts.ListValueReceipts(new ListValueReceiptsRequest
    {
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type ValueReceiptListResponse
}
catch (ApiException<ListValueReceiptsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListValueReceiptsRequest](src/Paid/Requests/ValueReceipts/ListValueReceiptsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ValueReceiptListResponse](src/Paid/Models/ValueReceiptListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[ListValueReceiptsError](src/Paid/Errors/ListValueReceiptsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ValueReceiptDetail&gt; PublishValueReceipt(PublishValueReceiptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Make a value receipt publicly accessible via URL.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ValueReceipts.PublishValueReceipt(new PublishValueReceiptRequest
    {
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type ValueReceiptDetail
}
catch (ApiException<PublishValueReceiptError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PublishValueReceiptRequest](src/Paid/Requests/ValueReceipts/PublishValueReceiptRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ValueReceiptDetail](src/Paid/Models/ValueReceiptDetail.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[PublishValueReceiptError](src/Paid/Errors/PublishValueReceiptError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ValueReceiptSyncResponse&gt; RefreshValueReceipt(RefreshValueReceiptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Re-populate an existing draft value receipt with current data inline. Returns the slim sync response. Sealed VRs cannot be refreshed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ValueReceipts.RefreshValueReceipt(new RefreshValueReceiptRequest
    {
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type ValueReceiptSyncResponse
}
catch (ApiException<RefreshValueReceiptError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RefreshValueReceiptRequest](src/Paid/Requests/ValueReceipts/RefreshValueReceiptRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ValueReceiptSyncResponse](src/Paid/Models/ValueReceiptSyncResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[RefreshValueReceiptError](src/Paid/Errors/RefreshValueReceiptError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuccessResponse&gt; SealValueReceipt(SealValueReceiptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transition a draft value receipt to sealed (posted) status. Sealed VRs are immutable — they cannot be updated or re-populated.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ValueReceipts.SealValueReceipt(new SealValueReceiptRequest
    {
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type SuccessResponse
}
catch (ApiException<SealValueReceiptError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SealValueReceiptRequest](src/Paid/Requests/ValueReceipts/SealValueReceiptRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessResponse](src/Paid/Models/SuccessResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[SealValueReceiptError](src/Paid/Errors/SealValueReceiptError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ValueReceiptSyncResponse&gt; SyncValueReceipt(SyncValueReceiptOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find or create a value receipt by natural key (customer + product/order + dates), then populate it with current data inline. Returns the ID, status, and public URL. Posted (sealed) VRs are returned as-is without re-populating.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ValueReceipts.SyncValueReceipt(new SyncValueReceiptOperationRequest
    {
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type ValueReceiptSyncResponse
}
catch (ApiException<SyncValueReceiptError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SyncValueReceiptOperationRequest](src/Paid/Requests/ValueReceipts/SyncValueReceiptOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ValueReceiptSyncResponse](src/Paid/Models/ValueReceiptSyncResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[SyncValueReceiptError](src/Paid/Errors/SyncValueReceiptError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuccessResponse&gt; UnarchiveValueReceipt(UnarchiveValueReceiptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived value receipt.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ValueReceipts.UnarchiveValueReceipt(new UnarchiveValueReceiptRequest
    {
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type SuccessResponse
}
catch (ApiException<UnarchiveValueReceiptError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UnarchiveValueReceiptRequest](src/Paid/Requests/ValueReceipts/UnarchiveValueReceiptRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessResponse](src/Paid/Models/SuccessResponse.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[UnarchiveValueReceiptError](src/Paid/Errors/UnarchiveValueReceiptError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ValueReceiptDetail&gt; UnpublishValueReceipt(UnpublishValueReceiptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revoke public access to a value receipt.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ValueReceipts.UnpublishValueReceipt(new UnpublishValueReceiptRequest
    {
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type ValueReceiptDetail
}
catch (ApiException<UnpublishValueReceiptError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UnpublishValueReceiptRequest](src/Paid/Requests/ValueReceipts/UnpublishValueReceiptRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ValueReceiptDetail](src/Paid/Models/ValueReceiptDetail.cs)</code>

**OnError**: <code>[ApiException](src/Paid/Core/Exceptions/ApiException.cs)&lt;[UnpublishValueReceiptError](src/Paid/Errors/UnpublishValueReceiptError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

