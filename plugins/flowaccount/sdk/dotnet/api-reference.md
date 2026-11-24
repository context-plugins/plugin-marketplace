# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [FlowAccountClient](src/FlowAccount/FlowAccountClient.cs)

## BatchImport

> Source: [BatchImport](src/FlowAccount/Api/BatchImport.cs)

<details>
<summary><code>Task&lt;BinaryContent&gt; BatchImportDeleteCustomTemplate(BatchImportDeleteCustomTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BatchImport.BatchImportDeleteCustomTemplate(new BatchImportDeleteCustomTemplateRequest
    {
        TemplateId = "some example string",
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[BatchImportDeleteCustomTemplateRequest](src/FlowAccount/Requests/BatchImport/BatchImportDeleteCustomTemplateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BatchImportMetadata&gt; BatchImportGenerateBacthIdMetadata(BatchImportGenerateBacthIdMetadataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BatchImport.BatchImportGenerateBacthIdMetadata(
        new BatchImportGenerateBacthIdMetadataRequest { Culture = "some example string" });
    // TODO: Handle 'response' of type BatchImportMetadata
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

<code>[BatchImportGenerateBacthIdMetadataRequest](src/FlowAccount/Requests/BatchImport/BatchImportGenerateBacthIdMetadataRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BatchImportMetadata](src/FlowAccount/Models/BatchImportMetadata.cs)</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; BatchImportGetBatchS3Data(BatchImportGetBatchS3DataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BatchImport.BatchImportGetBatchS3Data(new BatchImportGetBatchS3DataRequest
    {
        BatchId = "some example string",
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[BatchImportGetBatchS3DataRequest](src/FlowAccount/Requests/BatchImport/BatchImportGetBatchS3DataRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; BatchImportGetCustomTemplate(BatchImportGetCustomTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BatchImport.BatchImportGetCustomTemplate(new BatchImportGetCustomTemplateRequest
    {
        TemplateId = "some example string",
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[BatchImportGetCustomTemplateRequest](src/FlowAccount/Requests/BatchImport/BatchImportGetCustomTemplateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; BatchImportGetOrgingalFile(BatchImportGetOrgingalFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BatchImport.BatchImportGetOrgingalFile(new BatchImportGetOrgingalFileRequest
    {
        BatchId = "some example string",
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[BatchImportGetOrgingalFileRequest](src/FlowAccount/Requests/BatchImport/BatchImportGetOrgingalFileRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; BatchImportGetPresign(BatchImportGetPresignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BatchImport.BatchImportGetPresign(new BatchImportGetPresignRequest
    {
        Culture = "some example string",
        Body = new BatchImportPayload(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[BatchImportGetPresignRequest](src/FlowAccount/Requests/BatchImport/BatchImportGetPresignRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;bool&gt; BatchImportMarkViewed(BatchImportMarkViewedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BatchImport.BatchImportMarkViewed(new BatchImportMarkViewedRequest
    {
        Culture = "some example string",
        Body = 1L,
    });
    // TODO: Handle 'response' of type bool
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

<code>[BatchImportMarkViewedRequest](src/FlowAccount/Requests/BatchImport/BatchImportMarkViewedRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>bool</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BatchStatus&gt; BatchImportQueryBatch(BatchImportQueryBatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BatchImport.BatchImportQueryBatch(new BatchImportQueryBatchRequest
    {
        Culture = "some example string",
        Body = "some example string",
    });
    // TODO: Handle 'response' of type BatchStatus
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

<code>[BatchImportQueryBatchRequest](src/FlowAccount/Requests/BatchImport/BatchImportQueryBatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BatchStatus](src/FlowAccount/Models/BatchStatus.cs)</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BatchHistory&gt; BatchImportQueryBatchHistory(BatchImportQueryBatchHistoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BatchImport.BatchImportQueryBatchHistory(new BatchImportQueryBatchHistoryRequest
    {
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BatchHistory
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

<code>[BatchImportQueryBatchHistoryRequest](src/FlowAccount/Requests/BatchImport/BatchImportQueryBatchHistoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BatchHistory](src/FlowAccount/Models/BatchHistory.cs)</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;bool&gt; BatchImportRetrySimpleDocuments(BatchImportRetrySimpleDocumentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BatchImport.BatchImportRetrySimpleDocuments(new BatchImportRetrySimpleDocumentsRequest
    {
        Culture = "some example string",
        Body = new BatchImportRetry(),
    });
    // TODO: Handle 'response' of type bool
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

<code>[BatchImportRetrySimpleDocumentsRequest](src/FlowAccount/Requests/BatchImport/BatchImportRetrySimpleDocumentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>bool</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; BatchImportUpsertCustomTemplate(BatchImportUpsertCustomTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BatchImport.BatchImportUpsertCustomTemplate(new BatchImportUpsertCustomTemplateRequest
    {
        Culture = "some example string",
        Body = new CustomTemplate(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[BatchImportUpsertCustomTemplateRequest](src/FlowAccount/Requests/BatchImport/BatchImportUpsertCustomTemplateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## BillingNote

> Source: [BillingNote](src/FlowAccount/Api/BillingNote.cs)

<details>
<summary><code>Task&lt;BinaryContent&gt; BillingNoteChangeStatusByKey(BillingNoteChangeStatusByKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BillingNote.BillingNoteChangeStatusByKey(new BillingNoteChangeStatusByKeyRequest
    {
        DocumentId = 1L,
        StatusKey = "some example string",
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[BillingNoteChangeStatusByKeyRequest](src/FlowAccount/Requests/BillingNote/BillingNoteChangeStatusByKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageSent&gt; BillingNoteCreate(BillingNoteCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BillingNote.BillingNoteCreate(new BillingNoteCreateRequest
    {
        Culture = "some example string",
        Body = new SimpleDocument(),
    });
    // TODO: Handle 'response' of type MessageSent
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

<code>[BillingNoteCreateRequest](src/FlowAccount/Requests/BillingNote/BillingNoteCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageSent](src/FlowAccount/Models/MessageSent.cs)</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageSent&gt; BillingNoteCreate2(BillingNoteCreate2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BillingNote.BillingNoteCreate2(new BillingNoteCreate2Request
    {
        Culture = "some example string",
        Body = new InlineDocument(),
    });
    // TODO: Handle 'response' of type MessageSent
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

<code>[BillingNoteCreate2Request](src/FlowAccount/Requests/BillingNote/BillingNoteCreate2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageSent](src/FlowAccount/Models/MessageSent.cs)</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; BillingNoteDelete(BillingNoteDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BillingNote.BillingNoteDelete(new BillingNoteDeleteRequest
    {
        Id = 1L,
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[BillingNoteDeleteRequest](src/FlowAccount/Requests/BillingNote/BillingNoteDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; BillingNoteDetails(BillingNoteDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BillingNote.BillingNoteDetails(new BillingNoteDetailsRequest
    {
        Id = 1L,
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[BillingNoteDetailsRequest](src/FlowAccount/Requests/BillingNote/BillingNoteDetailsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; BillingNoteEdit(BillingNoteEditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BillingNote.BillingNoteEdit(new BillingNoteEditRequest
    {
        Id = 1L,
        Culture = "some example string",
        Body = new SimpleDocument(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[BillingNoteEditRequest](src/FlowAccount/Requests/BillingNote/BillingNoteEditRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; BillingNoteEdit2(BillingNoteEdit2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BillingNote.BillingNoteEdit2(new BillingNoteEdit2Request
    {
        Id = 1L,
        Culture = "some example string",
        Body = new InlineDocument(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[BillingNoteEdit2Request](src/FlowAccount/Requests/BillingNote/BillingNoteEdit2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; BillingNoteIndex(BillingNoteIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BillingNote.BillingNoteIndex(new BillingNoteIndexRequest
    {
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[BillingNoteIndexRequest](src/FlowAccount/Requests/BillingNote/BillingNoteIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; BillingNoteReceivePayment(BillingNoteReceivePaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BillingNote.BillingNoteReceivePayment(new BillingNoteReceivePaymentRequest
    {
        Id = 1L,
        Culture = "some example string",
        Body = new PaymentModel(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[BillingNoteReceivePaymentRequest](src/FlowAccount/Requests/BillingNote/BillingNoteReceivePaymentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CashInvoice

> Source: [CashInvoice](src/FlowAccount/Api/CashInvoice.cs)

<details>
<summary><code>Task&lt;BinaryContent&gt; CashInvoiceChangeStatusByKey(CashInvoiceChangeStatusByKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CashInvoice.CashInvoiceChangeStatusByKey(new CashInvoiceChangeStatusByKeyRequest
    {
        DocumentId = 1L,
        StatusKey = "some example string",
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[CashInvoiceChangeStatusByKeyRequest](src/FlowAccount/Requests/CashInvoice/CashInvoiceChangeStatusByKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageSent&gt; CashInvoiceCreate(CashInvoiceCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CashInvoice.CashInvoiceCreate(new CashInvoiceCreateRequest
    {
        Culture = "some example string",
        Body = new SimpleDocument(),
    });
    // TODO: Handle 'response' of type MessageSent
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

<code>[CashInvoiceCreateRequest](src/FlowAccount/Requests/CashInvoice/CashInvoiceCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageSent](src/FlowAccount/Models/MessageSent.cs)</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageSent&gt; CashInvoiceCreate2(CashInvoiceCreate2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CashInvoice.CashInvoiceCreate2(new CashInvoiceCreate2Request
    {
        Culture = "some example string",
        Body = new InlineDocument(),
    });
    // TODO: Handle 'response' of type MessageSent
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

<code>[CashInvoiceCreate2Request](src/FlowAccount/Requests/CashInvoice/CashInvoiceCreate2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageSent](src/FlowAccount/Models/MessageSent.cs)</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; CashInvoiceDelete(CashInvoiceDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CashInvoice.CashInvoiceDelete(new CashInvoiceDeleteRequest
    {
        Id = 1L,
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[CashInvoiceDeleteRequest](src/FlowAccount/Requests/CashInvoice/CashInvoiceDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; CashInvoiceDetails(CashInvoiceDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CashInvoice.CashInvoiceDetails(new CashInvoiceDetailsRequest
    {
        Id = 1L,
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[CashInvoiceDetailsRequest](src/FlowAccount/Requests/CashInvoice/CashInvoiceDetailsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; CashInvoiceEdit(CashInvoiceEditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CashInvoice.CashInvoiceEdit(new CashInvoiceEditRequest
    {
        Id = 1L,
        Culture = "some example string",
        Body = new SimpleDocument(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[CashInvoiceEditRequest](src/FlowAccount/Requests/CashInvoice/CashInvoiceEditRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; CashInvoiceEdit2(CashInvoiceEdit2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CashInvoice.CashInvoiceEdit2(new CashInvoiceEdit2Request
    {
        Id = 1L,
        Culture = "some example string",
        Body = new InlineDocument(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[CashInvoiceEdit2Request](src/FlowAccount/Requests/CashInvoice/CashInvoiceEdit2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; CashInvoiceIndex(CashInvoiceIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CashInvoice.CashInvoiceIndex(new CashInvoiceIndexRequest
    {
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[CashInvoiceIndexRequest](src/FlowAccount/Requests/CashInvoice/CashInvoiceIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; CashInvoiceReceivePayment(CashInvoiceReceivePaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CashInvoice.CashInvoiceReceivePayment(new CashInvoiceReceivePaymentRequest
    {
        Id = 1L,
        Culture = "some example string",
        Body = new PaymentModel(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[CashInvoiceReceivePaymentRequest](src/FlowAccount/Requests/CashInvoice/CashInvoiceReceivePaymentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CompanyCurrency

> Source: [CompanyCurrency](src/FlowAccount/Api/CompanyCurrency.cs)

<details>
<summary><code>Task&lt;BinaryContent&gt; CompanyCurrencyGetCompanyCurrencies(CompanyCurrencyGetCompanyCurrenciesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CompanyCurrency.CompanyCurrencyGetCompanyCurrencies(
        new CompanyCurrencyGetCompanyCurrenciesRequest { Culture = "some example string" });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[CompanyCurrencyGetCompanyCurrenciesRequest](src/FlowAccount/Requests/CompanyCurrency/CompanyCurrencyGetCompanyCurrenciesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; CompanyCurrencyGetList(CompanyCurrencyGetListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CompanyCurrency.CompanyCurrencyGetList(new CompanyCurrencyGetListRequest
    {
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[CompanyCurrencyGetListRequest](src/FlowAccount/Requests/CompanyCurrency/CompanyCurrencyGetListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ContactApi

> Source: [ContactApi](src/FlowAccount/Api/ContactApi.cs)

<details>
<summary><code>Task&lt;BinaryContent&gt; ContactCreate(ContactCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ContactApi.ContactCreate(new ContactCreateRequest
    {
        Culture = "some example string",
        Body = new ContactResult(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ContactCreateRequest](src/FlowAccount/Requests/ContactApi/ContactCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ContactGetContactList(ContactGetContactListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ContactApi.ContactGetContactList(new ContactGetContactListRequest
    {
        Id = 1L,
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ContactGetContactListRequest](src/FlowAccount/Requests/ContactApi/ContactGetContactListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ContactGetContactList2(ContactGetContactList2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ContactApi.ContactGetContactList2(new ContactGetContactList2Request
    {
        Id = 1L,
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ContactGetContactList2Request](src/FlowAccount/Requests/ContactApi/ContactGetContactList2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ContactRemoveContact(ContactRemoveContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ContactApi.ContactRemoveContact(new ContactRemoveContactRequest
    {
        Id = 1L,
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ContactRemoveContactRequest](src/FlowAccount/Requests/ContactApi/ContactRemoveContactRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ContactSearch(ContactSearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ContactApi.ContactSearch(new ContactSearchRequest { Culture = "some example string" });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ContactSearchRequest](src/FlowAccount/Requests/ContactApi/ContactSearchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ContactUpdate(ContactUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ContactApi.ContactUpdate(new ContactUpdateRequest
    {
        Id = 1L,
        Culture = "some example string",
        Body = new ContactResult(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ContactUpdateRequest](src/FlowAccount/Requests/ContactApi/ContactUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ContactUploadContactQrCode(ContactUploadContactQrCodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ContactApi.ContactUploadContactQrCode(new ContactUploadContactQrCodeRequest
    {
        ContactId = 1L,
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ContactUploadContactQrCodeRequest](src/FlowAccount/Requests/ContactApi/ContactUploadContactQrCodeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CreditNote

> Source: [CreditNote](src/FlowAccount/Api/CreditNote.cs)

<details>
<summary><code>Task&lt;BinaryContent&gt; CreditNoteChangeStatusByKey(CreditNoteChangeStatusByKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CreditNote.CreditNoteChangeStatusByKey(new CreditNoteChangeStatusByKeyRequest
    {
        DocumentId = 1L,
        StatusKey = "some example string",
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[CreditNoteChangeStatusByKeyRequest](src/FlowAccount/Requests/CreditNote/CreditNoteChangeStatusByKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageSent&gt; CreditNoteCreate(CreditNoteCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CreditNote.CreditNoteCreate(new CreditNoteCreateRequest
    {
        Culture = "some example string",
        Body = new SimpleDocument(),
    });
    // TODO: Handle 'response' of type MessageSent
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

<code>[CreditNoteCreateRequest](src/FlowAccount/Requests/CreditNote/CreditNoteCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageSent](src/FlowAccount/Models/MessageSent.cs)</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageSent&gt; CreditNoteCreate2(CreditNoteCreate2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CreditNote.CreditNoteCreate2(new CreditNoteCreate2Request
    {
        Culture = "some example string",
        Body = new InlineDocument(),
    });
    // TODO: Handle 'response' of type MessageSent
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

<code>[CreditNoteCreate2Request](src/FlowAccount/Requests/CreditNote/CreditNoteCreate2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageSent](src/FlowAccount/Models/MessageSent.cs)</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; CreditNoteDelete(CreditNoteDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CreditNote.CreditNoteDelete(new CreditNoteDeleteRequest
    {
        Id = 1L,
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[CreditNoteDeleteRequest](src/FlowAccount/Requests/CreditNote/CreditNoteDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; CreditNoteDetails(CreditNoteDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CreditNote.CreditNoteDetails(new CreditNoteDetailsRequest
    {
        Id = 1L,
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[CreditNoteDetailsRequest](src/FlowAccount/Requests/CreditNote/CreditNoteDetailsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; CreditNoteEdit(CreditNoteEditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CreditNote.CreditNoteEdit(new CreditNoteEditRequest
    {
        Id = 1L,
        Culture = "some example string",
        Body = new SimpleDocument(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[CreditNoteEditRequest](src/FlowAccount/Requests/CreditNote/CreditNoteEditRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; CreditNoteEdit2(CreditNoteEdit2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CreditNote.CreditNoteEdit2(new CreditNoteEdit2Request
    {
        Id = 1L,
        Culture = "some example string",
        Body = new InlineDocument(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[CreditNoteEdit2Request](src/FlowAccount/Requests/CreditNote/CreditNoteEdit2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; CreditNoteGetCumulativeDocumentReferenceList(CreditNoteGetCumulativeDocumentReferenceListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CreditNote.CreditNoteGetCumulativeDocumentReferenceList(
        new CreditNoteGetCumulativeDocumentReferenceListRequest { Culture = "some example string" });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[CreditNoteGetCumulativeDocumentReferenceListRequest](src/FlowAccount/Requests/CreditNote/CreditNoteGetCumulativeDocumentReferenceListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; CreditNoteIndex(CreditNoteIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CreditNote.CreditNoteIndex(new CreditNoteIndexRequest
    {
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[CreditNoteIndexRequest](src/FlowAccount/Requests/CreditNote/CreditNoteIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; CreditNoteReceivePayment(CreditNoteReceivePaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CreditNote.CreditNoteReceivePayment(new CreditNoteReceivePaymentRequest
    {
        Id = 1L,
        Culture = "some example string",
        Body = new PaymentModel(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[CreditNoteReceivePaymentRequest](src/FlowAccount/Requests/CreditNote/CreditNoteReceivePaymentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DebitNote

> Source: [DebitNote](src/FlowAccount/Api/DebitNote.cs)

<details>
<summary><code>Task&lt;BinaryContent&gt; DebitNoteChangeStatusByKey(DebitNoteChangeStatusByKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DebitNote.DebitNoteChangeStatusByKey(new DebitNoteChangeStatusByKeyRequest
    {
        DocumentId = 1L,
        StatusKey = "some example string",
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[DebitNoteChangeStatusByKeyRequest](src/FlowAccount/Requests/DebitNote/DebitNoteChangeStatusByKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageSent&gt; DebitNoteCreate(DebitNoteCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DebitNote.DebitNoteCreate(new DebitNoteCreateRequest
    {
        Culture = "some example string",
        Body = new SimpleDocument(),
    });
    // TODO: Handle 'response' of type MessageSent
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

<code>[DebitNoteCreateRequest](src/FlowAccount/Requests/DebitNote/DebitNoteCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageSent](src/FlowAccount/Models/MessageSent.cs)</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageSent&gt; DebitNoteCreate2(DebitNoteCreate2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DebitNote.DebitNoteCreate2(new DebitNoteCreate2Request
    {
        Culture = "some example string",
        Body = new InlineDocument(),
    });
    // TODO: Handle 'response' of type MessageSent
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

<code>[DebitNoteCreate2Request](src/FlowAccount/Requests/DebitNote/DebitNoteCreate2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageSent](src/FlowAccount/Models/MessageSent.cs)</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; DebitNoteDelete(DebitNoteDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DebitNote.DebitNoteDelete(new DebitNoteDeleteRequest
    {
        Id = 1L,
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[DebitNoteDeleteRequest](src/FlowAccount/Requests/DebitNote/DebitNoteDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; DebitNoteDetails(DebitNoteDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DebitNote.DebitNoteDetails(new DebitNoteDetailsRequest
    {
        Id = 1L,
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[DebitNoteDetailsRequest](src/FlowAccount/Requests/DebitNote/DebitNoteDetailsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; DebitNoteEdit(DebitNoteEditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DebitNote.DebitNoteEdit(new DebitNoteEditRequest
    {
        Id = 1L,
        Culture = "some example string",
        Body = new SimpleDocument(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[DebitNoteEditRequest](src/FlowAccount/Requests/DebitNote/DebitNoteEditRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; DebitNoteEdit2(DebitNoteEdit2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DebitNote.DebitNoteEdit2(new DebitNoteEdit2Request
    {
        Id = 1L,
        Culture = "some example string",
        Body = new InlineDocument(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[DebitNoteEdit2Request](src/FlowAccount/Requests/DebitNote/DebitNoteEdit2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; DebitNoteGetCumulativeDocumentReferenceList(DebitNoteGetCumulativeDocumentReferenceListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DebitNote.DebitNoteGetCumulativeDocumentReferenceList(
        new DebitNoteGetCumulativeDocumentReferenceListRequest { Culture = "some example string" });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[DebitNoteGetCumulativeDocumentReferenceListRequest](src/FlowAccount/Requests/DebitNote/DebitNoteGetCumulativeDocumentReferenceListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; DebitNoteIndex(DebitNoteIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DebitNote.DebitNoteIndex(new DebitNoteIndexRequest { Culture = "some example string" });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[DebitNoteIndexRequest](src/FlowAccount/Requests/DebitNote/DebitNoteIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; DebitNoteReceivePayment(DebitNoteReceivePaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DebitNote.DebitNoteReceivePayment(new DebitNoteReceivePaymentRequest
    {
        Id = 1L,
        Culture = "some example string",
        Body = new PaymentModel(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[DebitNoteReceivePaymentRequest](src/FlowAccount/Requests/DebitNote/DebitNoteReceivePaymentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## EmployeeApi

> Source: [EmployeeApi](src/FlowAccount/Api/EmployeeApi.cs)

<details>
<summary><code>Task&lt;BinaryContent&gt; EmployeeCount(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EmployeeApi.EmployeeCount();
    // TODO: Handle 'response' of type BinaryContent
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

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; EmployeeCreate(EmployeeCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EmployeeApi.EmployeeCreate(new EmployeeCreateRequest { Body = new EmployeeModel() });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[EmployeeCreateRequest](src/FlowAccount/Requests/EmployeeApi/EmployeeCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; EmployeeEdit(EmployeeEditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EmployeeApi.EmployeeEdit(new EmployeeEditRequest { Body = new EmployeeModel() });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[EmployeeEditRequest](src/FlowAccount/Requests/EmployeeApi/EmployeeEditRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; EmployeeGetById(EmployeeGetByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EmployeeApi.EmployeeGetById(new EmployeeGetByIdRequest { Id = 1L });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[EmployeeGetByIdRequest](src/FlowAccount/Requests/EmployeeApi/EmployeeGetByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; EmployeeGetList(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EmployeeApi.EmployeeGetList();
    // TODO: Handle 'response' of type BinaryContent
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

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; EmployeeRemove(EmployeeRemoveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EmployeeApi.EmployeeRemove(new EmployeeRemoveRequest { Id = 1L });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[EmployeeRemoveRequest](src/FlowAccount/Requests/EmployeeApi/EmployeeRemoveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Expense

> Source: [Expense](src/FlowAccount/Api/Expense.cs)

<details>
<summary><code>Task&lt;BinaryContent&gt; ExpenseChangeStatusByKey(ExpenseChangeStatusByKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Expense.ExpenseChangeStatusByKey(new ExpenseChangeStatusByKeyRequest
    {
        DocumentId = 1L,
        StatusKey = "some example string",
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ExpenseChangeStatusByKeyRequest](src/FlowAccount/Requests/Expense/ExpenseChangeStatusByKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageSent&gt; ExpenseCreate(ExpenseCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Expense.ExpenseCreate(new ExpenseCreateRequest
    {
        Culture = "some example string",
        Body = new SimpleDocument(),
    });
    // TODO: Handle 'response' of type MessageSent
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

<code>[ExpenseCreateRequest](src/FlowAccount/Requests/Expense/ExpenseCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageSent](src/FlowAccount/Models/MessageSent.cs)</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageSent&gt; ExpenseCreate2(ExpenseCreate2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Expense.ExpenseCreate2(new ExpenseCreate2Request
    {
        Culture = "some example string",
        Body = new InlineDocument(),
    });
    // TODO: Handle 'response' of type MessageSent
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

<code>[ExpenseCreate2Request](src/FlowAccount/Requests/Expense/ExpenseCreate2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageSent](src/FlowAccount/Models/MessageSent.cs)</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ExpenseDelete(ExpenseDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Expense.ExpenseDelete(new ExpenseDeleteRequest
    {
        Id = 1L,
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ExpenseDeleteRequest](src/FlowAccount/Requests/Expense/ExpenseDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ExpenseDetails(ExpenseDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Expense.ExpenseDetails(new ExpenseDetailsRequest
    {
        Id = 1L,
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ExpenseDetailsRequest](src/FlowAccount/Requests/Expense/ExpenseDetailsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ExpenseEdit(ExpenseEditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Expense.ExpenseEdit(new ExpenseEditRequest
    {
        Id = 1L,
        Culture = "some example string",
        Body = new SimpleDocument(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ExpenseEditRequest](src/FlowAccount/Requests/Expense/ExpenseEditRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ExpenseEdit2(ExpenseEdit2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Expense.ExpenseEdit2(new ExpenseEdit2Request
    {
        Id = 1L,
        Culture = "some example string",
        Body = new InlineDocument(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ExpenseEdit2Request](src/FlowAccount/Requests/Expense/ExpenseEdit2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ExpenseGetBusinessCategories(ExpenseGetBusinessCategoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Expense.ExpenseGetBusinessCategories(new ExpenseGetBusinessCategoriesRequest
    {
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ExpenseGetBusinessCategoriesRequest](src/FlowAccount/Requests/Expense/ExpenseGetBusinessCategoriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ExpenseGetBusinessCategoriesWithoutAsset(ExpenseGetBusinessCategoriesWithoutAssetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Expense.ExpenseGetBusinessCategoriesWithoutAsset(
        new ExpenseGetBusinessCategoriesWithoutAssetRequest { Culture = "some example string" });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ExpenseGetBusinessCategoriesWithoutAssetRequest](src/FlowAccount/Requests/Expense/ExpenseGetBusinessCategoriesWithoutAssetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ExpenseGetChartOfAccounts(ExpenseGetChartOfAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Expense.ExpenseGetChartOfAccounts(new ExpenseGetChartOfAccountsRequest
    {
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ExpenseGetChartOfAccountsRequest](src/FlowAccount/Requests/Expense/ExpenseGetChartOfAccountsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ExpenseGetChartOfAccountsWithoutAsset(ExpenseGetChartOfAccountsWithoutAssetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Expense.ExpenseGetChartOfAccountsWithoutAsset(
        new ExpenseGetChartOfAccountsWithoutAssetRequest { Culture = "some example string" });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ExpenseGetChartOfAccountsWithoutAssetRequest](src/FlowAccount/Requests/Expense/ExpenseGetChartOfAccountsWithoutAssetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ExpenseIndex(ExpenseIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Expense.ExpenseIndex(new ExpenseIndexRequest { Culture = "some example string" });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ExpenseIndexRequest](src/FlowAccount/Requests/Expense/ExpenseIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ExpenseReceivePayment(ExpenseReceivePaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Expense.ExpenseReceivePayment(new ExpenseReceivePaymentRequest
    {
        Id = 1L,
        Culture = "some example string",
        Body = new PaymentModel(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ExpenseReceivePaymentRequest](src/FlowAccount/Requests/Expense/ExpenseReceivePaymentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ProductCategoryApi

> Source: [ProductCategoryApi](src/FlowAccount/Api/ProductCategoryApi.cs)

<details>
<summary><code>Task&lt;BinaryContent&gt; ProductCategoryCreateProductCategory(ProductCategoryCreateProductCategoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProductCategoryApi.ProductCategoryCreateProductCategory(
        new ProductCategoryCreateProductCategoryRequest
        {
            Culture = "some example string",
            Body = new ProductCategory(),
        });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ProductCategoryCreateProductCategoryRequest](src/FlowAccount/Requests/ProductCategoryApi/ProductCategoryCreateProductCategoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ProductCategoryDeleteProductCategory(ProductCategoryDeleteProductCategoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProductCategoryApi.ProductCategoryDeleteProductCategory(
        new ProductCategoryDeleteProductCategoryRequest { Id = 1L, Culture = "some example string" });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ProductCategoryDeleteProductCategoryRequest](src/FlowAccount/Requests/ProductCategoryApi/ProductCategoryDeleteProductCategoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;ProductCategory&gt;&gt; ProductCategoryGetProductCategory(ProductCategoryGetProductCategoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProductCategoryApi.ProductCategoryGetProductCategory(
        new ProductCategoryGetProductCategoryRequest { Culture = "some example string" });
    // TODO: Handle 'response' of type IReadOnlyList<ProductCategory>
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

<code>[ProductCategoryGetProductCategoryRequest](src/FlowAccount/Requests/ProductCategoryApi/ProductCategoryGetProductCategoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[ProductCategory](src/FlowAccount/Models/ProductCategory.cs)&gt;</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ProductCategoryUpdateProductCategory(ProductCategoryUpdateProductCategoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProductCategoryApi.ProductCategoryUpdateProductCategory(
        new ProductCategoryUpdateProductCategoryRequest
        {
            Id = 1L,
            Culture = "some example string",
            Body = new ProductCategory(),
        });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ProductCategoryUpdateProductCategoryRequest](src/FlowAccount/Requests/ProductCategoryApi/ProductCategoryUpdateProductCategoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ProductInventory

> Source: [ProductInventory](src/FlowAccount/Api/ProductInventory.cs)

<details>
<summary><code>Task&lt;BinaryContent&gt; ProductInventoryAdjust(ProductInventoryAdjustRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProductInventory.ProductInventoryAdjust(new ProductInventoryAdjustRequest
    {
        Culture = "some example string",
        Body = new StockCard(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ProductInventoryAdjustRequest](src/FlowAccount/Requests/ProductInventory/ProductInventoryAdjustRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ProductInventoryDeleteProductInventory(ProductInventoryDeleteProductInventoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProductInventory.ProductInventoryDeleteProductInventory(
        new ProductInventoryDeleteProductInventoryRequest
        {
            Id = "some example string",
            Culture = "some example string",
        });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ProductInventoryDeleteProductInventoryRequest](src/FlowAccount/Requests/ProductInventory/ProductInventoryDeleteProductInventoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ProductInventoryGetList(ProductInventoryGetListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProductInventory.ProductInventoryGetList(new ProductInventoryGetListRequest
    {
        Id = 1L,
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ProductInventoryGetListRequest](src/FlowAccount/Requests/ProductInventory/ProductInventoryGetListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ProductUnitApi

> Source: [ProductUnitApi](src/FlowAccount/Api/ProductUnitApi.cs)

<details>
<summary><code>Task&lt;BinaryContent&gt; ProductUnitCreateProductUnit(ProductUnitCreateProductUnitRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProductUnitApi.ProductUnitCreateProductUnit(new ProductUnitCreateProductUnitRequest
    {
        Culture = "some example string",
        Body = new ProductUnit { Name = "some example string" },
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ProductUnitCreateProductUnitRequest](src/FlowAccount/Requests/ProductUnitApi/ProductUnitCreateProductUnitRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ProductUnitDeleteProductUnit(ProductUnitDeleteProductUnitRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProductUnitApi.ProductUnitDeleteProductUnit(new ProductUnitDeleteProductUnitRequest
    {
        Id = 1L,
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ProductUnitDeleteProductUnitRequest](src/FlowAccount/Requests/ProductUnitApi/ProductUnitDeleteProductUnitRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ProductUnitGetProductUnitList(ProductUnitGetProductUnitListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProductUnitApi.ProductUnitGetProductUnitList(new ProductUnitGetProductUnitListRequest
    {
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ProductUnitGetProductUnitListRequest](src/FlowAccount/Requests/ProductUnitApi/ProductUnitGetProductUnitListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ProductUnitUpdateProductUnit(ProductUnitUpdateProductUnitRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProductUnitApi.ProductUnitUpdateProductUnit(new ProductUnitUpdateProductUnitRequest
    {
        Id = 1L,
        Culture = "some example string",
        Body = new ProductUnit { Name = "some example string" },
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ProductUnitUpdateProductUnitRequest](src/FlowAccount/Requests/ProductUnitApi/ProductUnitUpdateProductUnitRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Products

> Source: [Products](src/FlowAccount/Api/Products.cs)

<details>
<summary><code>Task&lt;ApiResponseOfISimpleListResultOfIProductResult&gt; ProductsCreate(ProductsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Products.ProductsCreate(new ProductsCreateRequest
    {
        Culture = "some example string",
        Body = new ProductResult(),
    });
    // TODO: Handle 'response' of type ApiResponseOfISimpleListResultOfIProductResult
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

<code>[ProductsCreateRequest](src/FlowAccount/Requests/Products/ProductsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiResponseOfISimpleListResultOfIProductResult](src/FlowAccount/Models/ApiResponseOfISimpleListResultOfIProductResult.cs)</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiResponseOfISimpleListResultOfIProductResult&gt; ProductsGetById(ProductsGetByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Products.ProductsGetById(new ProductsGetByIdRequest
    {
        Id = 1L,
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type ApiResponseOfISimpleListResultOfIProductResult
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

<code>[ProductsGetByIdRequest](src/FlowAccount/Requests/Products/ProductsGetByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiResponseOfISimpleListResultOfIProductResult](src/FlowAccount/Models/ApiResponseOfISimpleListResultOfIProductResult.cs)</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiResponseOfISimpleListResultOfIProductResult&gt; ProductsGetList(ProductsGetListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Products.ProductsGetList(new ProductsGetListRequest
    {
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type ApiResponseOfISimpleListResultOfIProductResult
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

<code>[ProductsGetListRequest](src/FlowAccount/Requests/Products/ProductsGetListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiResponseOfISimpleListResultOfIProductResult](src/FlowAccount/Models/ApiResponseOfISimpleListResultOfIProductResult.cs)</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiResponseOfBoolean&gt; ProductsRemove(ProductsRemoveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Products.ProductsRemove(new ProductsRemoveRequest
    {
        Id = 1L,
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type ApiResponseOfBoolean
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

<code>[ProductsRemoveRequest](src/FlowAccount/Requests/Products/ProductsRemoveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiResponseOfBoolean](src/FlowAccount/Models/ApiResponseOfBoolean.cs)</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiResponseOfISimpleListResultOfIProductResult&gt; ProductsSearch(ProductsSearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Products.ProductsSearch(new ProductsSearchRequest { Culture = "some example string" });
    // TODO: Handle 'response' of type ApiResponseOfISimpleListResultOfIProductResult
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

<code>[ProductsSearchRequest](src/FlowAccount/Requests/Products/ProductsSearchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiResponseOfISimpleListResultOfIProductResult](src/FlowAccount/Models/ApiResponseOfISimpleListResultOfIProductResult.cs)</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiResponseOfISimpleListResultOfIProductResult&gt; ProductsUpdate(ProductsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Products.ProductsUpdate(new ProductsUpdateRequest
    {
        Id = 1L,
        Culture = "some example string",
        Body = new ProductResult(),
    });
    // TODO: Handle 'response' of type ApiResponseOfISimpleListResultOfIProductResult
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

<code>[ProductsUpdateRequest](src/FlowAccount/Requests/Products/ProductsUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiResponseOfISimpleListResultOfIProductResult](src/FlowAccount/Models/ApiResponseOfISimpleListResultOfIProductResult.cs)</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Purchase

> Source: [Purchase](src/FlowAccount/Api/Purchase.cs)

<details>
<summary><code>Task&lt;BinaryContent&gt; PurchaseChangeStatusByKey(PurchaseChangeStatusByKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Purchase.PurchaseChangeStatusByKey(new PurchaseChangeStatusByKeyRequest
    {
        DocumentId = 1L,
        StatusKey = "some example string",
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[PurchaseChangeStatusByKeyRequest](src/FlowAccount/Requests/Purchase/PurchaseChangeStatusByKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageSent&gt; PurchaseCreate(PurchaseCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Purchase.PurchaseCreate(new PurchaseCreateRequest
    {
        Culture = "some example string",
        Body = new SimpleDocument(),
    });
    // TODO: Handle 'response' of type MessageSent
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

<code>[PurchaseCreateRequest](src/FlowAccount/Requests/Purchase/PurchaseCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageSent](src/FlowAccount/Models/MessageSent.cs)</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageSent&gt; PurchaseCreate2(PurchaseCreate2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Purchase.PurchaseCreate2(new PurchaseCreate2Request
    {
        Culture = "some example string",
        Body = new InlineDocument(),
    });
    // TODO: Handle 'response' of type MessageSent
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

<code>[PurchaseCreate2Request](src/FlowAccount/Requests/Purchase/PurchaseCreate2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageSent](src/FlowAccount/Models/MessageSent.cs)</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; PurchaseDelete(PurchaseDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Purchase.PurchaseDelete(new PurchaseDeleteRequest
    {
        Id = 1L,
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[PurchaseDeleteRequest](src/FlowAccount/Requests/Purchase/PurchaseDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; PurchaseDetails(PurchaseDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Purchase.PurchaseDetails(new PurchaseDetailsRequest
    {
        Id = 1L,
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[PurchaseDetailsRequest](src/FlowAccount/Requests/Purchase/PurchaseDetailsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; PurchaseEdit(PurchaseEditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Purchase.PurchaseEdit(new PurchaseEditRequest
    {
        Id = 1L,
        Culture = "some example string",
        Body = new SimpleDocument(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[PurchaseEditRequest](src/FlowAccount/Requests/Purchase/PurchaseEditRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; PurchaseEdit2(PurchaseEdit2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Purchase.PurchaseEdit2(new PurchaseEdit2Request
    {
        Id = 1L,
        Culture = "some example string",
        Body = new InlineDocument(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[PurchaseEdit2Request](src/FlowAccount/Requests/Purchase/PurchaseEdit2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; PurchaseIndex(PurchaseIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Purchase.PurchaseIndex(new PurchaseIndexRequest { Culture = "some example string" });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[PurchaseIndexRequest](src/FlowAccount/Requests/Purchase/PurchaseIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; PurchaseReceivePayment(PurchaseReceivePaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Purchase.PurchaseReceivePayment(new PurchaseReceivePaymentRequest
    {
        Id = 1L,
        Culture = "some example string",
        Body = new PaymentModel(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[PurchaseReceivePaymentRequest](src/FlowAccount/Requests/Purchase/PurchaseReceivePaymentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PurchaseOrder

> Source: [PurchaseOrder](src/FlowAccount/Api/PurchaseOrder.cs)

<details>
<summary><code>Task&lt;BinaryContent&gt; PurchaseOrderChangeStatusByKey(PurchaseOrderChangeStatusByKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PurchaseOrder.PurchaseOrderChangeStatusByKey(new PurchaseOrderChangeStatusByKeyRequest
    {
        DocumentId = 1L,
        StatusKey = "some example string",
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[PurchaseOrderChangeStatusByKeyRequest](src/FlowAccount/Requests/PurchaseOrder/PurchaseOrderChangeStatusByKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageSent&gt; PurchaseOrderCreate(PurchaseOrderCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PurchaseOrder.PurchaseOrderCreate(new PurchaseOrderCreateRequest
    {
        Culture = "some example string",
        Body = new SimpleDocument(),
    });
    // TODO: Handle 'response' of type MessageSent
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

<code>[PurchaseOrderCreateRequest](src/FlowAccount/Requests/PurchaseOrder/PurchaseOrderCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageSent](src/FlowAccount/Models/MessageSent.cs)</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageSent&gt; PurchaseOrderCreate2(PurchaseOrderCreate2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PurchaseOrder.PurchaseOrderCreate2(new PurchaseOrderCreate2Request
    {
        Culture = "some example string",
        Body = new InlineDocument(),
    });
    // TODO: Handle 'response' of type MessageSent
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

<code>[PurchaseOrderCreate2Request](src/FlowAccount/Requests/PurchaseOrder/PurchaseOrderCreate2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageSent](src/FlowAccount/Models/MessageSent.cs)</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; PurchaseOrderDelete(PurchaseOrderDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PurchaseOrder.PurchaseOrderDelete(new PurchaseOrderDeleteRequest
    {
        Id = 1L,
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[PurchaseOrderDeleteRequest](src/FlowAccount/Requests/PurchaseOrder/PurchaseOrderDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; PurchaseOrderDetails(PurchaseOrderDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PurchaseOrder.PurchaseOrderDetails(new PurchaseOrderDetailsRequest
    {
        Id = 1L,
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[PurchaseOrderDetailsRequest](src/FlowAccount/Requests/PurchaseOrder/PurchaseOrderDetailsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; PurchaseOrderEdit(PurchaseOrderEditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PurchaseOrder.PurchaseOrderEdit(new PurchaseOrderEditRequest
    {
        Id = 1L,
        Culture = "some example string",
        Body = new SimpleDocument(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[PurchaseOrderEditRequest](src/FlowAccount/Requests/PurchaseOrder/PurchaseOrderEditRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; PurchaseOrderEdit2(PurchaseOrderEdit2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PurchaseOrder.PurchaseOrderEdit2(new PurchaseOrderEdit2Request
    {
        Id = 1L,
        Culture = "some example string",
        Body = new InlineDocument(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[PurchaseOrderEdit2Request](src/FlowAccount/Requests/PurchaseOrder/PurchaseOrderEdit2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; PurchaseOrderIndex(PurchaseOrderIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PurchaseOrder.PurchaseOrderIndex(new PurchaseOrderIndexRequest
    {
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[PurchaseOrderIndexRequest](src/FlowAccount/Requests/PurchaseOrder/PurchaseOrderIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; PurchaseOrderReceivePayment(PurchaseOrderReceivePaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PurchaseOrder.PurchaseOrderReceivePayment(new PurchaseOrderReceivePaymentRequest
    {
        Id = 1L,
        Culture = "some example string",
        Body = new PaymentModel(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[PurchaseOrderReceivePaymentRequest](src/FlowAccount/Requests/PurchaseOrder/PurchaseOrderReceivePaymentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Quotation

> Source: [Quotation](src/FlowAccount/Api/Quotation.cs)

<details>
<summary><code>Task&lt;BinaryContent&gt; QuotationChangeStatusByKey(QuotationChangeStatusByKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Quotation.QuotationChangeStatusByKey(new QuotationChangeStatusByKeyRequest
    {
        DocumentId = 1L,
        StatusKey = "some example string",
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[QuotationChangeStatusByKeyRequest](src/FlowAccount/Requests/Quotation/QuotationChangeStatusByKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageSent&gt; QuotationCreate(QuotationCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Quotation.QuotationCreate(new QuotationCreateRequest
    {
        Culture = "some example string",
        Body = new SimpleDocument(),
    });
    // TODO: Handle 'response' of type MessageSent
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

<code>[QuotationCreateRequest](src/FlowAccount/Requests/Quotation/QuotationCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageSent](src/FlowAccount/Models/MessageSent.cs)</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageSent&gt; QuotationCreate2(QuotationCreate2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Quotation.QuotationCreate2(new QuotationCreate2Request
    {
        Culture = "some example string",
        Body = new InlineDocument(),
    });
    // TODO: Handle 'response' of type MessageSent
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

<code>[QuotationCreate2Request](src/FlowAccount/Requests/Quotation/QuotationCreate2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageSent](src/FlowAccount/Models/MessageSent.cs)</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; QuotationCreatePartialManualPayall(QuotationCreatePartialManualPayallRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Quotation.QuotationCreatePartialManualPayall(
        new QuotationCreatePartialManualPayallRequest { Id = 1L, Culture = "some example string" });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[QuotationCreatePartialManualPayallRequest](src/FlowAccount/Requests/Quotation/QuotationCreatePartialManualPayallRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; QuotationDelete(QuotationDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Quotation.QuotationDelete(new QuotationDeleteRequest
    {
        Id = 1L,
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[QuotationDeleteRequest](src/FlowAccount/Requests/Quotation/QuotationDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; QuotationDetails(QuotationDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Quotation.QuotationDetails(new QuotationDetailsRequest
    {
        Id = 1L,
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[QuotationDetailsRequest](src/FlowAccount/Requests/Quotation/QuotationDetailsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; QuotationEdit(QuotationEditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Quotation.QuotationEdit(new QuotationEditRequest
    {
        Id = 1L,
        Culture = "some example string",
        Body = new SimpleDocument(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[QuotationEditRequest](src/FlowAccount/Requests/Quotation/QuotationEditRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; QuotationEdit2(QuotationEdit2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Quotation.QuotationEdit2(new QuotationEdit2Request
    {
        Id = 1L,
        Culture = "some example string",
        Body = new InlineDocument(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[QuotationEdit2Request](src/FlowAccount/Requests/Quotation/QuotationEdit2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; QuotationIndex(QuotationIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Quotation.QuotationIndex(new QuotationIndexRequest { Culture = "some example string" });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[QuotationIndexRequest](src/FlowAccount/Requests/Quotation/QuotationIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; QuotationPartialManualCancel(QuotationPartialManualCancelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Quotation.QuotationPartialManualCancel(new QuotationPartialManualCancelRequest
    {
        Id = 1L,
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[QuotationPartialManualCancelRequest](src/FlowAccount/Requests/Quotation/QuotationPartialManualCancelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; QuotationReceivePayment(QuotationReceivePaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Quotation.QuotationReceivePayment(new QuotationReceivePaymentRequest
    {
        Id = 1L,
        Culture = "some example string",
        Body = new PaymentModel(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[QuotationReceivePaymentRequest](src/FlowAccount/Requests/Quotation/QuotationReceivePaymentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Receipt

> Source: [Receipt](src/FlowAccount/Api/Receipt.cs)

<details>
<summary><code>Task&lt;BinaryContent&gt; ReceiptChangeStatusByKey(ReceiptChangeStatusByKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Receipt.ReceiptChangeStatusByKey(new ReceiptChangeStatusByKeyRequest
    {
        DocumentId = 1L,
        StatusKey = "some example string",
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ReceiptChangeStatusByKeyRequest](src/FlowAccount/Requests/Receipt/ReceiptChangeStatusByKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageSent&gt; ReceiptCreate(ReceiptCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Receipt.ReceiptCreate(new ReceiptCreateRequest
    {
        Culture = "some example string",
        Body = new SimpleDocument(),
    });
    // TODO: Handle 'response' of type MessageSent
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

<code>[ReceiptCreateRequest](src/FlowAccount/Requests/Receipt/ReceiptCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageSent](src/FlowAccount/Models/MessageSent.cs)</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageSent&gt; ReceiptCreate2(ReceiptCreate2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Receipt.ReceiptCreate2(new ReceiptCreate2Request
    {
        Culture = "some example string",
        Body = new InlineDocument(),
    });
    // TODO: Handle 'response' of type MessageSent
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

<code>[ReceiptCreate2Request](src/FlowAccount/Requests/Receipt/ReceiptCreate2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageSent](src/FlowAccount/Models/MessageSent.cs)</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ReceiptDelete(ReceiptDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Receipt.ReceiptDelete(new ReceiptDeleteRequest
    {
        Id = 1L,
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ReceiptDeleteRequest](src/FlowAccount/Requests/Receipt/ReceiptDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ReceiptDetails(ReceiptDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Receipt.ReceiptDetails(new ReceiptDetailsRequest
    {
        Id = 1L,
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ReceiptDetailsRequest](src/FlowAccount/Requests/Receipt/ReceiptDetailsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ReceiptEdit(ReceiptEditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Receipt.ReceiptEdit(new ReceiptEditRequest
    {
        Id = 1L,
        Culture = "some example string",
        Body = new SimpleDocument(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ReceiptEditRequest](src/FlowAccount/Requests/Receipt/ReceiptEditRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ReceiptEdit2(ReceiptEdit2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Receipt.ReceiptEdit2(new ReceiptEdit2Request
    {
        Id = 1L,
        Culture = "some example string",
        Body = new InlineDocument(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ReceiptEdit2Request](src/FlowAccount/Requests/Receipt/ReceiptEdit2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ReceiptGetBusinessCategories(ReceiptGetBusinessCategoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Receipt.ReceiptGetBusinessCategories(new ReceiptGetBusinessCategoriesRequest
    {
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ReceiptGetBusinessCategoriesRequest](src/FlowAccount/Requests/Receipt/ReceiptGetBusinessCategoriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ReceiptGetChartOfAccounts(ReceiptGetChartOfAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Receipt.ReceiptGetChartOfAccounts(new ReceiptGetChartOfAccountsRequest
    {
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ReceiptGetChartOfAccountsRequest](src/FlowAccount/Requests/Receipt/ReceiptGetChartOfAccountsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ReceiptIndex(ReceiptIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Receipt.ReceiptIndex(new ReceiptIndexRequest { Culture = "some example string" });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ReceiptIndexRequest](src/FlowAccount/Requests/Receipt/ReceiptIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ReceiptReceivePayment(ReceiptReceivePaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Receipt.ReceiptReceivePayment(new ReceiptReceivePaymentRequest
    {
        Id = 1L,
        Culture = "some example string",
        Body = new PaymentModel(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ReceiptReceivePaymentRequest](src/FlowAccount/Requests/Receipt/ReceiptReceivePaymentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ReceivableInvoiceApi

> Source: [ReceivableInvoiceApi](src/FlowAccount/Api/ReceivableInvoiceApi.cs)

<details>
<summary><code>Task&lt;BinaryContent&gt; ReceivableInvoiceChangeStatusByKey(ReceivableInvoiceChangeStatusByKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ReceivableInvoiceApi.ReceivableInvoiceChangeStatusByKey(
        new ReceivableInvoiceChangeStatusByKeyRequest
        {
            DocumentId = 1L,
            StatusKey = "some example string",
            Culture = "some example string",
        });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ReceivableInvoiceChangeStatusByKeyRequest](src/FlowAccount/Requests/ReceivableInvoiceApi/ReceivableInvoiceChangeStatusByKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageSent&gt; ReceivableInvoiceCreate(ReceivableInvoiceCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ReceivableInvoiceApi.ReceivableInvoiceCreate(new ReceivableInvoiceCreateRequest
    {
        Culture = "some example string",
        Body = new SimpleDocument(),
    });
    // TODO: Handle 'response' of type MessageSent
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

<code>[ReceivableInvoiceCreateRequest](src/FlowAccount/Requests/ReceivableInvoiceApi/ReceivableInvoiceCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageSent](src/FlowAccount/Models/MessageSent.cs)</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageSent&gt; ReceivableInvoiceCreate2(ReceivableInvoiceCreate2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ReceivableInvoiceApi.ReceivableInvoiceCreate2(new ReceivableInvoiceCreate2Request
    {
        Culture = "some example string",
        Body = new InlineDocument(),
    });
    // TODO: Handle 'response' of type MessageSent
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

<code>[ReceivableInvoiceCreate2Request](src/FlowAccount/Requests/ReceivableInvoiceApi/ReceivableInvoiceCreate2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageSent](src/FlowAccount/Models/MessageSent.cs)</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ReceivableInvoiceDelete(ReceivableInvoiceDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ReceivableInvoiceApi.ReceivableInvoiceDelete(new ReceivableInvoiceDeleteRequest
    {
        Id = 1L,
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ReceivableInvoiceDeleteRequest](src/FlowAccount/Requests/ReceivableInvoiceApi/ReceivableInvoiceDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ReceivableInvoiceDetails(ReceivableInvoiceDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ReceivableInvoiceApi.ReceivableInvoiceDetails(new ReceivableInvoiceDetailsRequest
    {
        Id = 1L,
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ReceivableInvoiceDetailsRequest](src/FlowAccount/Requests/ReceivableInvoiceApi/ReceivableInvoiceDetailsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ReceivableInvoiceEdit(ReceivableInvoiceEditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ReceivableInvoiceApi.ReceivableInvoiceEdit(new ReceivableInvoiceEditRequest
    {
        Id = 1L,
        Culture = "some example string",
        Body = new SimpleDocument(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ReceivableInvoiceEditRequest](src/FlowAccount/Requests/ReceivableInvoiceApi/ReceivableInvoiceEditRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ReceivableInvoiceEdit2(ReceivableInvoiceEdit2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ReceivableInvoiceApi.ReceivableInvoiceEdit2(new ReceivableInvoiceEdit2Request
    {
        Id = 1L,
        Culture = "some example string",
        Body = new InlineDocument(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ReceivableInvoiceEdit2Request](src/FlowAccount/Requests/ReceivableInvoiceApi/ReceivableInvoiceEdit2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ReceivableInvoiceIndex(ReceivableInvoiceIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ReceivableInvoiceApi.ReceivableInvoiceIndex(new ReceivableInvoiceIndexRequest
    {
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ReceivableInvoiceIndexRequest](src/FlowAccount/Requests/ReceivableInvoiceApi/ReceivableInvoiceIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ReceivableInvoiceReceivePayment(ReceivableInvoiceReceivePaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ReceivableInvoiceApi.ReceivableInvoiceReceivePayment(
        new ReceivableInvoiceReceivePaymentRequest
        {
            Id = 1L,
            Culture = "some example string",
            Body = new PaymentModel(),
        });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[ReceivableInvoiceReceivePaymentRequest](src/FlowAccount/Requests/ReceivableInvoiceApi/ReceivableInvoiceReceivePaymentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TaxInvoice

> Source: [TaxInvoice](src/FlowAccount/Api/TaxInvoice.cs)

<details>
<summary><code>Task&lt;BinaryContent&gt; TaxInvoiceChangeStatusByKey(TaxInvoiceChangeStatusByKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TaxInvoice.TaxInvoiceChangeStatusByKey(new TaxInvoiceChangeStatusByKeyRequest
    {
        DocumentId = 1L,
        StatusKey = "some example string",
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[TaxInvoiceChangeStatusByKeyRequest](src/FlowAccount/Requests/TaxInvoice/TaxInvoiceChangeStatusByKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageSent&gt; TaxInvoiceCreate(TaxInvoiceCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TaxInvoice.TaxInvoiceCreate(new TaxInvoiceCreateRequest
    {
        Culture = "some example string",
        Body = new SimpleDocument(),
    });
    // TODO: Handle 'response' of type MessageSent
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

<code>[TaxInvoiceCreateRequest](src/FlowAccount/Requests/TaxInvoice/TaxInvoiceCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageSent](src/FlowAccount/Models/MessageSent.cs)</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageSent&gt; TaxInvoiceCreate2(TaxInvoiceCreate2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TaxInvoice.TaxInvoiceCreate2(new TaxInvoiceCreate2Request
    {
        Culture = "some example string",
        Body = new InlineDocument(),
    });
    // TODO: Handle 'response' of type MessageSent
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

<code>[TaxInvoiceCreate2Request](src/FlowAccount/Requests/TaxInvoice/TaxInvoiceCreate2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageSent](src/FlowAccount/Models/MessageSent.cs)</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; TaxInvoiceDelete(TaxInvoiceDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TaxInvoice.TaxInvoiceDelete(new TaxInvoiceDeleteRequest
    {
        Id = 1L,
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[TaxInvoiceDeleteRequest](src/FlowAccount/Requests/TaxInvoice/TaxInvoiceDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; TaxInvoiceDetails(TaxInvoiceDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TaxInvoice.TaxInvoiceDetails(new TaxInvoiceDetailsRequest
    {
        Id = 1L,
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[TaxInvoiceDetailsRequest](src/FlowAccount/Requests/TaxInvoice/TaxInvoiceDetailsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; TaxInvoiceEdit(TaxInvoiceEditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TaxInvoice.TaxInvoiceEdit(new TaxInvoiceEditRequest
    {
        Id = 1L,
        Culture = "some example string",
        Body = new SimpleDocument(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[TaxInvoiceEditRequest](src/FlowAccount/Requests/TaxInvoice/TaxInvoiceEditRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; TaxInvoiceEdit2(TaxInvoiceEdit2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TaxInvoice.TaxInvoiceEdit2(new TaxInvoiceEdit2Request
    {
        Id = 1L,
        Culture = "some example string",
        Body = new InlineDocument(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[TaxInvoiceEdit2Request](src/FlowAccount/Requests/TaxInvoice/TaxInvoiceEdit2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; TaxInvoiceGetCumulativeDocumentReferenceList(TaxInvoiceGetCumulativeDocumentReferenceListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TaxInvoice.TaxInvoiceGetCumulativeDocumentReferenceList(
        new TaxInvoiceGetCumulativeDocumentReferenceListRequest { Culture = "some example string" });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[TaxInvoiceGetCumulativeDocumentReferenceListRequest](src/FlowAccount/Requests/TaxInvoice/TaxInvoiceGetCumulativeDocumentReferenceListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; TaxInvoiceIndex(TaxInvoiceIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TaxInvoice.TaxInvoiceIndex(new TaxInvoiceIndexRequest
    {
        Culture = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[TaxInvoiceIndexRequest](src/FlowAccount/Requests/TaxInvoice/TaxInvoiceIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; TaxInvoiceReceivePayment(TaxInvoiceReceivePaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TaxInvoice.TaxInvoiceReceivePayment(new TaxInvoiceReceivePaymentRequest
    {
        Id = 1L,
        Culture = "some example string",
        Body = new PaymentModel(),
    });
    // TODO: Handle 'response' of type BinaryContent
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

<code>[TaxInvoiceReceivePaymentRequest](src/FlowAccount/Requests/TaxInvoice/TaxInvoiceReceivePaymentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FlowAccount/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FlowAccount/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

