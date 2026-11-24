# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [SkribbleClient](src/Skribble/SkribbleClient.cs)

## Access

> Source: [Access](src/Skribble/Api/Access.cs)

<details>
<summary><code>Task&lt;string&gt; AccessLogin(AccessLoginRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To use the Skribble API, you first need an API key and an API user. Both
can be managed on the API key page in your business profile. Consult our
guide for
setup instructions.

Skribble offers two types of API keys:

**Demo API keys**

Demo API keys are for testing and development purposes. Signatures created
with demo keys have no legal weight and are free of charge.

Demo keys can be identified by their name, which starts with **api_demo**.

**Production API keys**

Production API keys are used for live systems. Signatures created with
production keys will be invoiced.

Production keys can be identified by their name, which starts with
**api_production** or, in some cases, **api_prod**.

> **⚠ Note**
> All costs incurred by signature requests created with your API keys will
> be **charged to your business**. We recommend starting with a demo API
> key during development and testing, and switching to a production key
> only once testing is complete.

For help setting up Skribble Business, contact us at
support@skribble.com.

To obtain an access token, authenticate using the `/access/login` endpoint.
You can pass your credentials as raw JSON or as `x-www-form-urlencoded`
key-value pairs (see example requests).

Upon successful authentication, a JSON Web Token (JWT) is returned. This
JWT must be included in nearly every API request.

The access token is passed in the `Authorization` HTTP header using the
`Bearer` scheme. Example:
`Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI...`

### Token life cycle

#### API key

API keys have a long but finite lifetime. The validity period depends on
the volume of API calls and is agreed upon individually as part of the
shared secret agreement.

#### Access token

Access tokens have a lifetime of approximately **20 minutes**. Automatic
token renewal is not currently supported.

#### Logout

There is **no logout endpoint**. Access tokens expire automatically after
the defined lifetime.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Access.AccessLogin(new AccessLoginRequest
    {
        Username = "add_your_api_name_here",
        ApiKey = "please_enter_your_password_here",
    });
    // TODO: Handle 'response' of type string
}
catch (ApiException<AccessLoginError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AccessLoginRequest](src/Skribble/Requests/Access/AccessLoginRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[AccessLoginError](src/Skribble/Errors/AccessLoginError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AdditionalInformation

> Source: [AdditionalInformation](src/Skribble/Api/AdditionalInformation.cs)

<details>
<summary><code>Task&lt;FormatInfosResponse&gt; GetInfosFormat(GetInfosFormatRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AdditionalInformation.GetInfosFormat(new GetInfosFormatRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type FormatInfosResponse
}
catch (ApiException<GetInfosFormatError> ex)
{
    if (ex.Error.TryGetProblemSkribbleAdditionalInformationApi(out var error))
    {
        // TODO: Handle 'error' of type ProblemSkribbleAdditionalInformationApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetInfosFormatRequest](src/Skribble/Requests/AdditionalInformation/GetInfosFormatRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FormatInfosResponse](src/Skribble/Models/FormatInfosResponse.cs)</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[GetInfosFormatError](src/Skribble/Errors/GetInfosFormatError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Signer&gt;&gt; GetInfosSigners(GetInfosSignersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Additional information about the people who signed the document. The query
parameter is the id from the validation endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AdditionalInformation.GetInfosSigners(new GetInfosSignersRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type IReadOnlyList<Signer>
}
catch (ApiException<GetInfosSignersError> ex)
{
    if (ex.Error.TryGetProblemSkribbleAdditionalInformationApi(out var error))
    {
        // TODO: Handle 'error' of type ProblemSkribbleAdditionalInformationApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetInfosSignersRequest](src/Skribble/Requests/AdditionalInformation/GetInfosSignersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Signer](src/Skribble/Models/Signer.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[GetInfosSignersError](src/Skribble/Errors/GetInfosSignersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ValidationInfosResponse&gt; GetInfosValidation(GetInfosValidationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AdditionalInformation.GetInfosValidation(new GetInfosValidationRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ValidationInfosResponse
}
catch (ApiException<GetInfosValidationError> ex)
{
    if (ex.Error.TryGetProblemSkribbleAdditionalInformationApi(out var error))
    {
        // TODO: Handle 'error' of type ProblemSkribbleAdditionalInformationApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetInfosValidationRequest](src/Skribble/Requests/AdditionalInformation/GetInfosValidationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ValidationInfosResponse](src/Skribble/Models/ValidationInfosResponse.cs)</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[GetInfosValidationError](src/Skribble/Errors/GetInfosValidationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## BillingAndCredits

> Source: [BillingAndCredits](src/Skribble/Api/BillingAndCredits.cs)

<details>
<summary><code>Task&lt;BillingCreditInfos&gt; GetBillingCreditsInfos(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the list of credit usage information associated with specific endpoints

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BillingAndCredits.GetBillingCreditsInfos();
    // TODO: Handle 'response' of type BillingCreditInfos
}
catch (ApiException<GetBillingCreditsInfosError> ex)
{
    if (ex.Error.TryGetProblemSkribbleAdditionalInformationApi(out var error))
    {
        // TODO: Handle 'error' of type ProblemSkribbleAdditionalInformationApi
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BillingCreditInfos](src/Skribble/Models/BillingCreditInfos.cs)</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[GetBillingCreditsInfosError](src/Skribble/Errors/GetBillingCreditsInfosError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BillingCreditUsage&gt; GetBillingCreditsInvoiced(GetBillingCreditsInvoicedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get invoiced credit details for the most recent billing period or a
specified time period

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BillingAndCredits.GetBillingCreditsInvoiced(new GetBillingCreditsInvoicedRequest());
    // TODO: Handle 'response' of type BillingCreditUsage
}
catch (ApiException<GetBillingCreditsInvoicedError> ex)
{
    if (ex.Error.TryGetProblemSkribbleAdditionalInformationApi(out var error))
    {
        // TODO: Handle 'error' of type ProblemSkribbleAdditionalInformationApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetBillingCreditsInvoicedRequest](src/Skribble/Requests/BillingAndCredits/GetBillingCreditsInvoicedRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BillingCreditUsage](src/Skribble/Models/BillingCreditUsage.cs)</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[GetBillingCreditsInvoicedError](src/Skribble/Errors/GetBillingCreditsInvoicedError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BillingCreditUsage&gt; GetBillingCreditsUsage(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get credit usage list and details for current billing period

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BillingAndCredits.GetBillingCreditsUsage();
    // TODO: Handle 'response' of type BillingCreditUsage
}
catch (ApiException<GetBillingCreditsUsageError> ex)
{
    if (ex.Error.TryGetProblemSkribbleAdditionalInformationApi(out var error))
    {
        // TODO: Handle 'error' of type ProblemSkribbleAdditionalInformationApi
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BillingCreditUsage](src/Skribble/Models/BillingCreditUsage.cs)</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[GetBillingCreditsUsageError](src/Skribble/Errors/GetBillingCreditsUsageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DocumentApi

> Source: [DocumentApi](src/Skribble/Api/DocumentApi.cs)

<details>
<summary><code>Task DeleteDocument(DeleteDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a `Document` by its ID. Deletion behaves similarly to deleting a
`SignatureRequest` and does not necessarily remove the object from the
system immediately.

If more than one participant is involved, the DELETE request only removes
the current user from the `Document`.

The system permanently removes the `Document` once the last user deletes it
via the Skribble web application.

**Async cascade note:** If the `Document`'s parent `SignatureRequest` was
recently deleted, the server-side cascade that removes associated documents
runs asynchronously. During this window the document is still listed by
`GET /documents` but returns `403 Forbidden` on delete attempts. Retry
after a few seconds — the document will either have been removed by the
cascade or the delete will succeed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.DocumentApi.DeleteDocument(new DeleteDocumentRequest
    {
        DocId = Guid.Parse("f1e2d3c4-7b8a-4e6f-9d3b-123456789abc"),
    });
}
catch (ApiException<DeleteDocumentError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteDocumentRequest](src/Skribble/Requests/DocumentApi/DeleteDocumentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[DeleteDocumentError](src/Skribble/Errors/DeleteDocumentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DocumentContentResponse&gt; GetDocumentContent(GetDocumentContentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Downloads the content of the document identified by its ID. Returns either
a PDF binary or a JSON object containing a Base64-encoded PDF.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DocumentApi.GetDocumentContent(new GetDocumentContentRequest
    {
        DocId = Guid.Parse("f1e2d3c4-7b8a-4e6f-9d3b-123456789abc"),
    });
    // TODO: Handle 'response' of type DocumentContentResponse
}
catch (ApiException<GetDocumentContentError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetDocumentContentRequest](src/Skribble/Requests/DocumentApi/GetDocumentContentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DocumentContentResponse](src/Skribble/Models/DocumentContentResponse.cs)</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[GetDocumentContentError](src/Skribble/Errors/GetDocumentContentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DocumentResponse&gt; GetDocumentMetadata(GetDocumentMetadataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches the metadata for the `Document` identified by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DocumentApi.GetDocumentMetadata(new GetDocumentMetadataRequest
    {
        DocId = Guid.Parse("f1e2d3c4-7b8a-4e6f-9d3b-123456789abc"),
    });
    // TODO: Handle 'response' of type DocumentResponse
}
catch (ApiException<GetDocumentMetadataError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetDocumentMetadataRequest](src/Skribble/Requests/DocumentApi/GetDocumentMetadataRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DocumentResponse](src/Skribble/Models/DocumentResponse.cs)</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[GetDocumentMetadataError](src/Skribble/Errors/GetDocumentMetadataError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; GetDocumentPreview(GetDocumentPreviewRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a preview image for a specific page of the uploaded PDF document.
Page numbering starts at **0** for the first page.

> Use the optional `scale` parameter to control the preview size:
> `scale=100` returns a full-size preview, while `scale=20` returns a
> thumbnail.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DocumentApi.GetDocumentPreview(new GetDocumentPreviewRequest
    {
        DocId = Guid.Parse("f1e2d3c4-7b8a-4e6f-9d3b-123456789abc"),
        PageId = 0,
        Scale = 20d,
    });
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<GetDocumentPreviewError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetDocumentPreviewRequest](src/Skribble/Requests/DocumentApi/GetDocumentPreviewRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[GetDocumentPreviewError](src/Skribble/Errors/GetDocumentPreviewError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;DocumentResponse&gt;&gt; GetDocuments(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an array of all accessible `Document` objects.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DocumentApi.GetDocuments();
    // TODO: Handle 'response' of type IReadOnlyList<DocumentResponse>
}
catch (ApiException<GetDocumentsError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[DocumentResponse](src/Skribble/Models/DocumentResponse.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[GetDocumentsError](src/Skribble/Errors/GetDocumentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DocumentResponse&gt; UploadDocument(UploadDocumentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload using a **Base64 encoded** file as `content`.

**Content size limits**:
Very large uploads are rejected by the gateway in front of the API
before the request reaches it, returning a `403 Forbidden` response.
This currently returns a plain body instead of the standard
Problem+JSON error envelope used elsewhere in this API; a fix to align
it is planned.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DocumentApi.UploadDocument(new UploadDocumentOperationRequest
    {
        Body = new UploadDocumentRequest
        {
            Title = "some example string",
            Content = "some example string",
            FileUrl = "https://example.com",
        },
    });
    // TODO: Handle 'response' of type DocumentResponse
}
catch (ApiException<UploadDocumentError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UploadDocumentOperationRequest](src/Skribble/Requests/DocumentApi/UploadDocumentOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DocumentResponse](src/Skribble/Models/DocumentResponse.cs)</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[UploadDocumentError](src/Skribble/Errors/UploadDocumentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Identification

> Source: [Identification](src/Skribble/Api/Identification.cs)

<details>
<summary><code>Task&lt;BinaryContent&gt; GetIdentificationEvidenceFiles(GetIdentificationEvidenceFilesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Downloads all files related to the identification evidence as a ZIP archive.

**Requirements:**
- The business must have identification evidence enabled. If it is not,
the request fails with `403 Forbidden` (problem type `feature-not-enabled`).
- The identification process must be completed (`evidence_id` is required).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Identification.GetIdentificationEvidenceFiles(new GetIdentificationEvidenceFilesRequest
    {
        SrId = Guid.Parse("cccccccc-4a6a-a958-a42e-6ea4172a378b"),
        EvidenceId = "700580648",
    });
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<GetIdentificationEvidenceFilesError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetIdentificationEvidenceFilesRequest](src/Skribble/Requests/Identification/GetIdentificationEvidenceFilesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[GetIdentificationEvidenceFilesError](src/Skribble/Errors/GetIdentificationEvidenceFilesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; GetIdentificationEvidenceJson(GetIdentificationEvidenceJsonRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the full identification evidence record as JSON for the given
`SignatureRequest` and `evidence_id`.

**Requirements:**
- The business must have identification evidence enabled. If it is not,
the request fails with `403 Forbidden` (problem type `feature-not-enabled`).
- The identification process must be completed (`evidence_id` is required).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Identification.GetIdentificationEvidenceJson(new GetIdentificationEvidenceJsonRequest
    {
        SrId = Guid.Parse("cccccccc-4a6a-a958-a42e-6ea4172a378b"),
        EvidenceId = "700580648",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetIdentificationEvidenceJsonError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetIdentificationEvidenceJsonRequest](src/Skribble/Requests/Identification/GetIdentificationEvidenceJsonRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[GetIdentificationEvidenceJsonError](src/Skribble/Errors/GetIdentificationEvidenceJsonError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;string&gt; GetIdentificationEvidenceJwt(GetIdentificationEvidenceJwtRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the signed JWT for the identification evidence. Useful for
cryptographic verification or downstream integration purposes.

**Requirements:**
- The business must have identification evidence enabled. If it is not,
the request fails with `403 Forbidden` (problem type `feature-not-enabled`).
- The identification process must be completed (`evidence_id` is required).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Identification.GetIdentificationEvidenceJwt(new GetIdentificationEvidenceJwtRequest
    {
        SrId = Guid.Parse("cccccccc-4a6a-a958-a42e-6ea4172a378b"),
        EvidenceId = "700580648",
    });
    // TODO: Handle 'response' of type string
}
catch (ApiException<GetIdentificationEvidenceJwtError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetIdentificationEvidenceJwtRequest](src/Skribble/Requests/Identification/GetIdentificationEvidenceJwtRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[GetIdentificationEvidenceJwtError](src/Skribble/Errors/GetIdentificationEvidenceJwtError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IdentificationEvidenceStatusResponse&gt; GetIdentificationEvidenceStatus(GetIdentificationEvidenceStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current status of the identification evidence for the given
`SignatureRequest` and `evidence_id`.

**Requirements:**
- The business must have identification evidence enabled. If it is not,
the request fails with `403 Forbidden` (problem type `feature-not-enabled`).
- The identification process must have been initiated (`evidence_id` is required,
available in `signer_identity_data.evidence_id` of the `SignatureRequest` response).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Identification.GetIdentificationEvidenceStatus(
        new GetIdentificationEvidenceStatusRequest
        {
            SrId = Guid.Parse("cccccccc-4a6a-a958-a42e-6ea4172a378b"),
            EvidenceId = "700580648",
        });
    // TODO: Handle 'response' of type IdentificationEvidenceStatusResponse
}
catch (ApiException<GetIdentificationEvidenceStatusError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetIdentificationEvidenceStatusRequest](src/Skribble/Requests/Identification/GetIdentificationEvidenceStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IdentificationEvidenceStatusResponse](src/Skribble/Models/IdentificationEvidenceStatusResponse.cs)</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[GetIdentificationEvidenceStatusError](src/Skribble/Errors/GetIdentificationEvidenceStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Monitoring

> Source: [Monitoring](src/Skribble/Api/Monitoring.cs)

<details>
<summary><code>Task&lt;SystemHealthResponse&gt; GetSystemHealth(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current health status of the Skribble API. Use this endpoint
to monitor system availability and responsiveness.

`status:UP` indicates that the system is operational.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Monitoring.GetSystemHealth();
    // TODO: Handle 'response' of type SystemHealthResponse
}
catch (ApiException<GetSystemHealthError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SystemHealthResponse](src/Skribble/Models/SystemHealthResponse.cs)</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[GetSystemHealthError](src/Skribble/Errors/GetSystemHealthError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Report

> Source: [Report](src/Skribble/Api/Report.cs)

<details>
<summary><code>Task&lt;ActivitiesSignaturesByBusinessResponse&gt; GetActivitiesSignaturesByBusiness(GetActivitiesSignaturesByBusinessRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed signature `activities` for your business and its members within a specified date range.

Use these parameters to filter for a specific time range.

| **Parameter** | **Description** | **Mandatory** |
| --- | --- | --- |
| `start_date` | The start date of the range to fetch the signature `activities`. Format: `yyyy-MM-dd.` | yes |
| `end_date` | The end date of the range to fetch the signature `activities`. Format: `yyyy-MM-dd.` | yes |

### **Pagination**

The result set can be controlled using the optional pagination parameters `page` and `size`

| **Parameter** | **Description** | **Mandatory** |
| --- | --- | --- |
| `page` | The page number to fetch the signature `activities`. Must be a positive integer. Default: 1 | no |
| `size` | The size of the page to fetch the signature activities. Must be a positive integer. Default: 25 Maximum: 100 | no |
| `sort` | The sort order of the signature activities. Can be `asc` or `desc`. Default is `desc`. | no |

### **Response**

The response contains the following information.

**General**

| **Field** | **Description** |
| --- | --- |
| `activities` | Array of `activities`. See the following subchapter _Activities_. |
| `total_items` | Total items to fetch when paginating through all the pages. |
| `total_pages` | Total pages to fetch when paginating through all the pages. |
| `current_page` | Current page number. |
| `size` | Size of the page. |

**Activities**

| **Field** | **Description** |
| --- | --- |
| `id` | The ID of the signature `activity`. |
| `action` | The action type of a signature activity. Can be `signed` or `sealed`. |
| `timestamp` | The timestamp of the signature activity. |
| `signature_request_id` | The signature request ID. |
| `cost_center` | The cost center of the signature paying party. This information might not necessarily be present. |
| `initiator` | The initiator `user` of the signature `activity`. See the following subchapter _User_. |
| `signer` | The signer `user` of the signature `activity`. See the following subchapter _User_. |

**User**

| **Field** | **Description** |
| --- | --- |
| `email` | The email of the `user`. |
| `first_name` | The first name of the `user`. |
| `last_name` | The last name of the `user`. |
| `type` | The membership status of the `user` in relation to the business. Can be `api`, `external`, `member` or `unknown`. |
| `mobile` | The mobile number of the user. |

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Report.GetActivitiesSignaturesByBusiness(new GetActivitiesSignaturesByBusinessRequest
    {
        StartDate = DateTimeOffset.Parse("2024-01-01T00:00:00Z"),
        EndDate = DateTimeOffset.Parse("2024-01-31T00:00:00Z"),
        Page = 1d,
        Size = 50d,
        Sort = Sort.Desc,
    });
    // TODO: Handle 'response' of type ActivitiesSignaturesByBusinessResponse
}
catch (ApiException<GetActivitiesSignaturesByBusinessError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetActivitiesSignaturesByBusinessRequest](src/Skribble/Requests/Report/GetActivitiesSignaturesByBusinessRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ActivitiesSignaturesByBusinessResponse](src/Skribble/Models/ActivitiesSignaturesByBusinessResponse.cs)</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[GetActivitiesSignaturesByBusinessError](src/Skribble/Errors/GetActivitiesSignaturesByBusinessError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Reports

> Source: [Reports](src/Skribble/Api/Reports.cs)

<details>
<summary><code>Task GetReportsEtsi(GetReportsEtsiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the ETSI TS 119 102-2 signature validation report as a XML

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Reports.GetReportsEtsi(new GetReportsEtsiRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
}
catch (ApiException<GetReportsEtsiError> ex)
{
    if (ex.Error.TryGetProblemSkribbleAdditionalInformationApi(out var error))
    {
        // TODO: Handle 'error' of type ProblemSkribbleAdditionalInformationApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetReportsEtsiRequest](src/Skribble/Requests/Reports/GetReportsEtsiRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[GetReportsEtsiError](src/Skribble/Errors/GetReportsEtsiError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; GetSkribbleReport(GetSkribbleReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the digitally signed Skribble validation report as PDF. The report is generated once per validation ID, language, ETSI attachment flag and timezone, then cached — subsequent requests with the same parameters are served from cache and not billed. Optionally attach the ETSI TS 119 102-2 XML validation report as an embedded file in the PDF.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.GetSkribbleReport(new GetSkribbleReportRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        TimeZone = "Europe/Zurich",
    });
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<GetSkribbleReportError> ex)
{
    if (ex.Error.TryGetProblemSkribbleAdditionalInformationApi(out var error))
    {
        // TODO: Handle 'error' of type ProblemSkribbleAdditionalInformationApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSkribbleReportRequest](src/Skribble/Requests/Reports/GetSkribbleReportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[GetSkribbleReportError](src/Skribble/Errors/GetSkribbleReportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Seal

> Source: [Seal](src/Skribble/Api/Seal.cs)

<details>
<summary><code>Task&lt;CreateSealResponse&gt; SealDocument(SealDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads a document and affixes an electronic seal in a single call.

Optionally, a visual signature can also be placed on the document.

The response contains the `document_id` of the newly created sealed
document, which can be used to retrieve it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Seal.SealDocument(new SealDocumentRequest
    {
        Body = new CreateSealRequest { Content = "U29tZUJhc2U2NEVuY29kZWRJbWFnZQ==", AccountName = "ais_demo_seal" },
    });
    // TODO: Handle 'response' of type CreateSealResponse
}
catch (ApiException<SealDocumentError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SealDocumentRequest](src/Skribble/Requests/Seal/SealDocumentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateSealResponse](src/Skribble/Models/CreateSealResponse.cs)</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[SealDocumentError](src/Skribble/Errors/SealDocumentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SendTo

> Source: [SendTo](src/Skribble/Api/SendTo.cs)

<details>
<summary><code>Task&lt;CreateSendToResponse&gt; CreateSendTo(CreateSendToOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts the signing process by uploading the PDF document `content` and
assigning it a `title`.

### Limited lifetime

> Send-To objects and their related Documents and SignatureRequests are only
> guaranteed for a **limited lifetime**.
>
> - A Send-To request that is not claimed by a user — i.e. where a user
> does not add the document to their list of documents to sign — is
> deleted automatically after one day.
>
> - All Send-To objects and their related Documents and SignatureRequest
> objects, regardless of status, are deleted automatically after 90 days.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SendTo.CreateSendTo(new CreateSendToOperationRequest
    {
        Title = "Document 1",
        Content = Array.Empty<byte>(),
    });
    // TODO: Handle 'response' of type CreateSendToResponse
}
catch (ApiException<CreateSendToError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateSendToOperationRequest](src/Skribble/Requests/SendTo/CreateSendToOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateSendToResponse](src/Skribble/Models/CreateSendToResponse.cs)</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[CreateSendToError](src/Skribble/Errors/CreateSendToError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteSendTo(DeleteSendToRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To call the `delete` endpoint, you must include the value of the
`access_code` field—received when creating the `Send-To` object—in the
request header `X-Accesscode`.

This call deletes the involved `Send-To`, `Document`, and `SignatureRequest`
objects regardless of the current `Send-To` state.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.SendTo.DeleteSendTo(new DeleteSendToRequest
    {
        SendToId = Guid.Parse("d98ae06a-3ae4-5cc5-c0a3-62b05901b84f"),
        XAccesscode = Guid.Parse("3fa85f64-5717-4562-b3fc-2c963f66afa6"),
    });
}
catch (ApiException<DeleteSendToError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteSendToRequest](src/Skribble/Requests/SendTo/DeleteSendToRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[DeleteSendToError](src/Skribble/Errors/DeleteSendToError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; DownloadSendTo(DownloadSendToRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To call the `download` endpoint, you must include the value of the
`access_code` field—received when creating the `Send-To` object—in the
request header `X-Accesscode`.

The response contains the originally provided PDF document in its current
state, which may be signed, declined, withdrawn, or still open for signing.
The current status can be retrieved using the `track` endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SendTo.DownloadSendTo(new DownloadSendToRequest
    {
        SendToId = Guid.Parse("d98ae06a-3ae4-5cc5-c0a3-62b05901b84f"),
        XAccesscode = Guid.Parse("3fa85f64-5717-4562-b3fc-2c963f66afa6"),
    });
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<DownloadSendToError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DownloadSendToRequest](src/Skribble/Requests/SendTo/DownloadSendToRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[DownloadSendToError](src/Skribble/Errors/DownloadSendToError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TrackSendToResponse&gt; TrackSendTo(TrackSendToRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To call the `track` endpoint, you must include the value of the
`access_code` field—received when creating the `Send-To` object—in the
request header `X-Accesscode`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SendTo.TrackSendTo(new TrackSendToRequest
    {
        SendToId = Guid.Parse("d98ae06a-3ae4-5cc5-c0a3-62b05901b84f"),
        XAccesscode = Guid.Parse("3fa85f64-5717-4562-b3fc-2c963f66afa6"),
    });
    // TODO: Handle 'response' of type TrackSendToResponse
}
catch (ApiException<TrackSendToError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TrackSendToRequest](src/Skribble/Requests/SendTo/TrackSendToRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TrackSendToResponse](src/Skribble/Models/TrackSendToResponse.cs)</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[TrackSendToError](src/Skribble/Errors/TrackSendToError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Signature

> Source: [Signature](src/Skribble/Api/Signature.cs)

<details>
<summary><code>Task AddDocumentInSignatureRequest(AddDocumentInSignatureRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds an additional document to the `SignatureRequest` while it is still in `DRAFT` status.

**Content size limits**:
Very large document content is rejected by the gateway in front of the
API before the request reaches it, returning a `403 Forbidden` response.
This currently returns a plain body instead of the standard
Problem+JSON error envelope used elsewhere in this API; a fix to align
it is planned.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Signature.AddDocumentInSignatureRequest(new AddDocumentInSignatureRequest
    {
        SrId = Guid.Parse("cccccccc-4a6a-a958-a42e-6ea4172a378b"),
        Body = new SignatureDocumentUpload { Content = "U29tZUJhc2U2NEVuY29kZWRJbWFnZQ==" },
    });
}
catch (ApiException<AddDocumentInSignatureRequestError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AddDocumentInSignatureRequest](src/Skribble/Requests/Signature/AddDocumentInSignatureRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[AddDocumentInSignatureRequestError](src/Skribble/Errors/AddDocumentInSignatureRequestError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SignatureResponseV3&gt; CreateSignatureRequest(CreateSignatureRequestOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new `SignatureRequest`, which is the primary object of the Skribble API.
A `SignatureRequest` defines who signs what and under which conditions. It specifies
the documents to be signed, the list of required signers, the desired signature quality
and legislation, and optional settings such as signing sequences, callback URLs, and
access control.

Compared to API v2, this version supports attaching multiple documents to a single
`SignatureRequest`. Additionally, the request no longer triggers invitations immediately.
Instead, the `SignatureRequest` is created with a `status_overall` of `DRAFT`.

If you specify an owner using the `creator` field, that user will find the request in
the Drafts section of their account, where they can review and complete the setup.

Once ready, call `/initiate` to start the `SignatureRequest` and send out invitations.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Signature.CreateSignatureRequest(new CreateSignatureRequestOperationRequest
    {
        Body = new CreateSignatureRequest
        {
            Title = "Example contract",
            Message = "Please sign this document!",
            Quality = SignatureQuality.Demo,
            Documents = [new SignatureDocument { Id = Guid.Parse("3648f61d-4194-455c-a0bc-1c438d2cd11b") }],
            Signatures = [],
        },
    });
    // TODO: Handle 'response' of type SignatureResponseV3
}
catch (ApiException<CreateSignatureRequestError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateSignatureRequestOperationRequest](src/Skribble/Requests/Signature/CreateSignatureRequestOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SignatureResponseV3](src/Skribble/Models/SignatureResponseV3.cs)</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[CreateSignatureRequestError](src/Skribble/Errors/CreateSignatureRequestError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteDocumentInSignatureRequest(DeleteDocumentInSignatureRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the document identified by `DOC_ID` from the `SignatureRequest`
with the ID `SR_ID`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Signature.DeleteDocumentInSignatureRequest(new DeleteDocumentInSignatureRequest
    {
        SrId = Guid.Parse("cccccccc-4a6a-a958-a42e-6ea4172a378b"),
        DocId = Guid.Parse("f1e2d3c4-7b8a-4e6f-9d3b-123456789abc"),
    });
}
catch (ApiException<DeleteDocumentInSignatureRequestError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteDocumentInSignatureRequest](src/Skribble/Requests/Signature/DeleteDocumentInSignatureRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[DeleteDocumentInSignatureRequestError](src/Skribble/Errors/DeleteDocumentInSignatureRequestError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteSignatureRequest(DeleteSignatureRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a `SignatureRequest` by its ID.

**Important:** A `SignatureRequest` can only be deleted via the API if:

1. the `SignatureRequest` has `status_overall=OPEN`, and

2. the API user has sufficient rights on the `SignatureRequest`, e.g. when
it was created by the API user.

Deleting a `SignatureRequest` does not necessarily remove it from the
system immediately.

**WITHDRAWN**

When the API user is the **owner** of the `SignatureRequest` and it is
still in `status_overall=OPEN`, the `SignatureRequest` will be
**WITHDRAWN**.

This means the `SignatureRequest` will transition to
`status_overall=WITHDRAWN` and all pending signatures will be marked with
`status_code=WITHDRAWN`. Sign and read rights for all signers will be
revoked, so invited signers can no longer read or sign the
`SignatureRequest`.

**REMOVE AS PARTICIPANT**

When the API user is a participant but not the owner of the
`SignatureRequest`, the `DELETE` request will only remove the API user as a
participant.

In this case, the system will remove the `SignatureRequest` and its related
documents once the last remaining user deletes it via the Skribble web
application.

**DELETING**

When the API user is the last user with access rights to the
`SignatureRequest` (e.g. after a **WITHDRAW**), the `SignatureRequest` and
its related documents will be permanently removed from the system.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Signature.DeleteSignatureRequest(new DeleteSignatureRequest
    {
        SrId = Guid.Parse("cccccccc-4a6a-a958-a42e-6ea4172a378b"),
    });
}
catch (ApiException<DeleteSignatureRequestError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteSignatureRequest](src/Skribble/Requests/Signature/DeleteSignatureRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[DeleteSignatureRequestError](src/Skribble/Errors/DeleteSignatureRequestError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SignatureResponseV3&gt; GetSignatureRequestDetails(GetSignatureRequestDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches a `SignatureRequest` by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Signature.GetSignatureRequestDetails(new GetSignatureRequestDetailsRequest
    {
        SrId = Guid.Parse("cccccccc-4a6a-a958-a42e-6ea4172a378b"),
    });
    // TODO: Handle 'response' of type SignatureResponseV3
}
catch (ApiException<GetSignatureRequestDetailsError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSignatureRequestDetailsRequest](src/Skribble/Requests/Signature/GetSignatureRequestDetailsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SignatureResponseV3](src/Skribble/Models/SignatureResponseV3.cs)</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[GetSignatureRequestDetailsError](src/Skribble/Errors/GetSignatureRequestDetailsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task InitiateSignatureRequest(InitiateSignatureRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts the signing process for a `SignatureRequest` in `DRAFT` status.

This action sends out invitation emails and transitions `status_overall`
from `DRAFT` to `OPEN`. Once initiated, the `SignatureRequest` is no longer
visible in the Drafts section and will appear in the appropriate section
(e.g. Pending) for each participant.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Signature.InitiateSignatureRequest(new InitiateSignatureRequest
    {
        SrId = Guid.Parse("cccccccc-4a6a-a958-a42e-6ea4172a378b"),
    });
}
catch (ApiException<InitiateSignatureRequestError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[InitiateSignatureRequest](src/Skribble/Requests/Signature/InitiateSignatureRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[InitiateSignatureRequestError](src/Skribble/Errors/InitiateSignatureRequestError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SignatureResponse&gt; WithdrawSignatureRequest(WithdrawSignatureRequestOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Withdraws a `SignatureRequest`, for example when signing becomes unnecessary
or an error occurred during the invitation process. As the inviter, you can
explicitly withdraw the `SignatureRequest`. This removes all signers and
observers as participants and notifies them with a specified `message`.

Similar to deletion, the `withdraw` action can only be executed if:

- The `SignatureRequest` has `status_overall=OPEN`

- The API user has sufficient rights on the `SignatureRequest`, such as
when it was created by the API user.

> **Note**
> We recommend using the `delete` endpoint, which automatically determines
> the appropriate action. For example, if the API user does not have
> withdrawal rights, they may instead be removed as a participant, or the
> document may be deleted directly.
>
> Use the `withdraw` endpoint specifically when you need to withdraw the
> `SignatureRequest` while keeping it in Skribble.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Signature.WithdrawSignatureRequest(new WithdrawSignatureRequestOperationRequest
    {
        SrId = Guid.Parse("cccccccc-4a6a-a958-a42e-6ea4172a378b"),
        Body = new WithdrawSignatureRequest { Message = "The signature request is no longer required." },
    });
    // TODO: Handle 'response' of type SignatureResponse
}
catch (ApiException<WithdrawSignatureRequestError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[WithdrawSignatureRequestOperationRequest](src/Skribble/Requests/Signature/WithdrawSignatureRequestOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SignatureResponse](src/Skribble/Models/SignatureResponse.cs)</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[WithdrawSignatureRequestError](src/Skribble/Errors/WithdrawSignatureRequestError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SignatureAttachmentApi

> Source: [SignatureAttachmentApi](src/Skribble/Api/SignatureAttachmentApi.cs)

<details>
<summary><code>Task&lt;SignatureResponseSkribbleSignatureAttachmentApi&gt; CreateSignatureAttachment(CreateSignatureAttachmentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this endpoint to provide supplementary documents (for example, Terms &
Conditions or appendices) to participants of a `SignatureRequest`.

Attachments are delivered to participants together with the
`SignatureRequest`.

**Content type limits**:
The Skribble API accepts PDF files, image files, Microsoft Office files, and
plain text files.

Allowed content types:
- application/pdf
- application/x-tika-msoffice
- application/x-tika-ooxml
- application/msword
- application/vnd.openxmlformats-officedocument.wordprocessingml.document
- application/vnd.ms-word.document.macroEnabled.12
- application/vnd.ms-excel
- application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
- application/vnd.ms-excel.sheet.macroenabled.12
- application/vnd.ms-powerpoint
- application/vnd.openxmlformats-officedocument.presentationml.presentation
- application/vnd.ms-powerpoint.presentation.macroEnabled.12
- image/gif
- image/jpeg
- image/png
- text/plain

**Content size limits**:
The maximum size of a single attachment is approximately 40 MB.
The maximum request size is 60 MB. Exceeding it is rejected by the
gateway in front of the API before the request reaches it, returning a
`403 Forbidden` response. This currently returns a plain body instead
of the standard Problem+JSON error envelope used elsewhere in this
API; a fix to align it is planned.

**Amount limits**:
There is currently no limit on the number of attachments per
SignatureRequest. Abuse of this service may result in enforced limits.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SignatureAttachmentApi.CreateSignatureAttachment(
        new CreateSignatureAttachmentOperationRequest
        {
            SrId = Guid.Parse("cccccccc-4a6a-a958-a42e-6ea4172a378b"),
            Body = new CreateSignatureAttachmentRequest
            {
                Filename = "Attachment-1.pdf",
                ContentType = "application/pdf",
                Content = "SGVsbG8gd29ybGQh",
            },
        });
    // TODO: Handle 'response' of type SignatureResponseSkribbleSignatureAttachmentApi
}
catch (ApiException<CreateSignatureAttachmentError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateSignatureAttachmentOperationRequest](src/Skribble/Requests/SignatureAttachmentApi/CreateSignatureAttachmentOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SignatureResponseSkribbleSignatureAttachmentApi](src/Skribble/Models/SignatureResponseSkribbleSignatureAttachmentApi.cs)</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[CreateSignatureAttachmentError](src/Skribble/Errors/CreateSignatureAttachmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteSignatureAttachment(DeleteSignatureAttachmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the attachment identified by `ATTACHMENT_ID` from the
`SignatureRequest` with the ID `SR_ID`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.SignatureAttachmentApi.DeleteSignatureAttachment(new DeleteSignatureAttachmentRequest
    {
        SrId = Guid.Parse("cccccccc-4a6a-a958-a42e-6ea4172a378b"),
        AttachmentId = Guid.Parse("8ed33046-3798-8c54-0b13-0820d0d6e121"),
    });
}
catch (ApiException<DeleteSignatureAttachmentError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteSignatureAttachmentRequest](src/Skribble/Requests/SignatureAttachmentApi/DeleteSignatureAttachmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[DeleteSignatureAttachmentError](src/Skribble/Errors/DeleteSignatureAttachmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; GetSignatureAttachmentContent(GetSignatureAttachmentContentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Downloads the content of the attachment identified by `ATTACHMENT_ID`
for the `SignatureRequest` with the ID `SR_ID`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SignatureAttachmentApi.GetSignatureAttachmentContent(
        new GetSignatureAttachmentContentRequest
        {
            SrId = Guid.Parse("cccccccc-4a6a-a958-a42e-6ea4172a378b"),
            AttachmentId = Guid.Parse("8ed33046-3798-8c54-0b13-0820d0d6e121"),
        });
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<GetSignatureAttachmentContentError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSignatureAttachmentContentRequest](src/Skribble/Requests/SignatureAttachmentApi/GetSignatureAttachmentContentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[GetSignatureAttachmentContentError](src/Skribble/Errors/GetSignatureAttachmentContentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SignatureHandling

> Source: [SignatureHandling](src/Skribble/Api/SignatureHandling.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;SignatureResponse&gt;&gt; BulkGetSignatureRequests(BulkGetSignatureRequestsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves multiple `SignatureRequest` objects in a single call.

Provide a JSON array of `SignatureRequest` IDs in the request body to specify which
records to fetch. The response includes only the `SignatureRequests` that were
successfully found. IDs that do not match any existing record are silently ignored.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SignatureHandling.BulkGetSignatureRequests(new BulkGetSignatureRequestsRequest
    {
        Body = [
            Guid.Parse("abababab-a777-e8e8-e8e8-121212121212"),
            Guid.Parse("bbddbbdd-7788-7ee7-a22a-bfbfbfbfbfbf"),
            Guid.Parse("cccccccc-1111-2222-3333-444444444444"),
            Guid.Parse("dddddddd-dead-beef-cafe-999999999999"),
            Guid.Parse("eeeeeeee-aaaa-bbbb-cccc-dddddddddddd"),
            Guid.Parse("ffffaaaa-bbbb-cccc-dddd-eeeeeeeeeeee"),
            Guid.Parse("abababab-1234-5678-9abc-defdefdefdef"),
            Guid.Parse("12341234-aaaa-bbbb-cccc-123412341234"),
            Guid.Parse("99999999-8888-7777-6666-555555555555"),
            Guid.Parse("abcdabcd-abcd-abcd-abcd-abcdabcdabcd"),
        ],
    });
    // TODO: Handle 'response' of type IReadOnlyList<SignatureResponse>
}
catch (ApiException<BulkGetSignatureRequestsError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkGetSignatureRequestsRequest](src/Skribble/Requests/SignatureHandling/BulkGetSignatureRequestsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[SignatureResponse](src/Skribble/Models/SignatureResponse.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[BulkGetSignatureRequestsError](src/Skribble/Errors/BulkGetSignatureRequestsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteSignatureRequestExpiresAt(DeleteSignatureRequestExpiresAtRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

**Early access.** This endpoint is available to opted-in businesses only. To request
access, contact support@skribble.com.

Clearing the expiry requires the signature-request expiry feature to be enabled
for the business. If it is not, the request fails with `403 Forbidden`
(problem type `feature-not-enabled`).

Clears the owner-set `expires_at` date from a `SignatureRequest` in
`status_overall=DRAFT`.

After this call the `SignatureRequest` no longer has an owner-set expiry.
The `auto_delete_at` retention date (if any) is unaffected.

**Constraints**

- Only allowed while `status_overall=DRAFT`. Calling this on a
non-`DRAFT` request returns `400 Bad Request`.
- Requires the same write access as updating the `SignatureRequest`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.SignatureHandling.DeleteSignatureRequestExpiresAt(new DeleteSignatureRequestExpiresAtRequest
    {
        SrId = Guid.Parse("cccccccc-4a6a-a958-a42e-6ea4172a378b"),
    });
}
catch (ApiException<DeleteSignatureRequestExpiresAtError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteSignatureRequestExpiresAtRequest](src/Skribble/Requests/SignatureHandling/DeleteSignatureRequestExpiresAtRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[DeleteSignatureRequestExpiresAtError](src/Skribble/Errors/DeleteSignatureRequestExpiresAtError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; GetSignatureReport(GetSignatureReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides the signature report for a specific signature request.

By default, the report is returned as a human-readable, digitally signed
PDF document. Optionally, the report format can be changed using the
`type` query parameter (e.g. JSON or HTML).

The report contains all relevant information about the signature process,
including signatories, timestamps, and verification details. It serves as
legally valid proof of the completed signing process and can be stored or
shared for auditing, compliance, or record-keeping purposes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SignatureHandling.GetSignatureReport(new GetSignatureReportRequest
    {
        SrId = Guid.Parse("cccccccc-4a6a-a958-a42e-6ea4172a378b"),
    });
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<GetSignatureReportError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSignatureReportRequest](src/Skribble/Requests/SignatureHandling/GetSignatureReportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[GetSignatureReportError](src/Skribble/Errors/GetSignatureReportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;SignatureResponseV3&gt;&gt; GetSignatureRequest(GetSignatureRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all `SignatureRequest` objects that the current user has sufficient
access rights to.

**Filter**

You can optionally filter results using one or more of the optional
parameters.

Filters search for an exact match of the corresponding field value. This
means the filter is case-sensitive and will not match partial values. For
example, _account_email=john.doe@skribble.com_ will only match a
`SignatureRequest` where the `account_email` field is exactly
john.doe@skribble.com and will not match another.john.doe@skribble.com.

Exception: The `search` parameter searches for document titles that contain
the search term.

**Pagination**

The result set can be controlled using the optional pagination parameters
`page_number` and `page_size`, which helps prevent excessively large result
sets.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SignatureHandling.GetSignatureRequest(new GetSignatureRequest
    {
        AccountEmail = "john.doe@skribble.com",
        Search = "text to find",
        SignatureStatus = SignatureStatusCode.Signed,
        StatusOverall = SignatureStatusOverall.Open,
        PageNumber = 1d,
        PageSize = 25d,
    });
    // TODO: Handle 'response' of type IReadOnlyList<SignatureResponseV3>
}
catch (ApiException<GetSignatureRequestError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSignatureRequest](src/Skribble/Requests/SignatureHandling/GetSignatureRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[SignatureResponseV3](src/Skribble/Models/SignatureResponseV3.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[GetSignatureRequestError](src/Skribble/Errors/GetSignatureRequestError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;SignatureCallbacksInResponse&gt;&gt; GetSignatureRequestCallbacksV3(GetSignatureRequestCallbacksV3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed information about the callbacks associated with a
`SignatureRequest`. Use this endpoint to confirm whether a callback has been
executed or to identify errors that occurred during the callback process.

**Result**

If no callbacks have been triggered yet, the response will be an empty
array. Otherwise, it contains an array of `callback` objects that have
already been executed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SignatureHandling.GetSignatureRequestCallbacksV3(
        new GetSignatureRequestCallbacksV3Request { SrId = Guid.Parse("cccccccc-4a6a-a958-a42e-6ea4172a378b") });
    // TODO: Handle 'response' of type IReadOnlyList<SignatureCallbacksInResponse>
}
catch (ApiException<GetSignatureRequestCallbacksV3Error> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSignatureRequestCallbacksV3Request](src/Skribble/Requests/SignatureHandling/GetSignatureRequestCallbacksV3Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[SignatureCallbacksInResponse](src/Skribble/Models/SignatureCallbacksInResponse.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[GetSignatureRequestCallbacksV3Error](src/Skribble/Errors/GetSignatureRequestCallbacksV3Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SignatureResponseV3&gt; GetSignatureRequestDetails2(GetSignatureRequestDetails2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches a `SignatureRequest` by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SignatureHandling.GetSignatureRequestDetails2(new GetSignatureRequestDetails2Request
    {
        SrId = Guid.Parse("cccccccc-4a6a-a958-a42e-6ea4172a378b"),
    });
    // TODO: Handle 'response' of type SignatureResponseV3
}
catch (ApiException<GetSignatureRequestDetails2Error> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSignatureRequestDetails2Request](src/Skribble/Requests/SignatureHandling/GetSignatureRequestDetails2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SignatureResponseV3](src/Skribble/Models/SignatureResponseV3.cs)</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[GetSignatureRequestDetails2Error](src/Skribble/Errors/GetSignatureRequestDetails2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RemindSignatureRequest(RemindSignatureRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

In addition to the automatic signature reminders, manual reminders can also
be initiated via the Skribble web application and also via the API.

This allows for greater flexibility in managing signature requests, ensuring
that important documents are signed promptly. By using both automatic and
manual reminders, you can tailor your approach to suit the specific needs of
your users or customers.

**Limits**

There is an hourly limit on the number of signature reminders that can be
sent. This limit ensures that reminders are used responsibly and prevents
excessive notifications. Generally, this restriction should not affect you
if you use this feature appropriately. By adhering to this limit, you can
effectively manage your signature requests without overwhelming your users
or customers with frequent reminders.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.SignatureHandling.RemindSignatureRequest(new RemindSignatureRequest
    {
        SrId = Guid.Parse("cccccccc-4a6a-a958-a42e-6ea4172a378b"),
    });
}
catch (ApiException<RemindSignatureRequestError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RemindSignatureRequest](src/Skribble/Requests/SignatureHandling/RemindSignatureRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[RemindSignatureRequestError](src/Skribble/Errors/RemindSignatureRequestError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SignatureResponseV3&gt; UpdateSignatureRequest(UpdateSignatureRequestOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing `SignatureRequest`. We recommend creating the `SignatureRequest`
with all necessary information upfront and using this endpoint only when changes are
required.

The following fields can be updated: `title`, `message`, `legislation`, `quality`,
`signatures`, `callback_success_url`, `callback_error_url`, `callback_update_url`,
`custom`, `attach_on_success`, `read_access`, and `write_access`.

Observers are managed separately via the dedicated `/observers` endpoints.

**Updating signers**

To add or remove signers, provide the complete desired state of the `signatures` array:

- To add a signer, include the new entry alongside all existing signers.
- To remove a signer, omit their entry from the array.

Alternatively, use the dedicated `/signatures` endpoints to add or remove individual
signers without having to send the full list.

> **Important:** When updating via this endpoint, any signer not present in the
`signatures` array will be removed. Changes to signers can only be made as long as
none of the signers have already completed their signature.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SignatureHandling.UpdateSignatureRequest(new UpdateSignatureRequestOperationRequest
    {
        Body = new UpdateSignatureRequest
        {
            Id = Guid.Parse("4f43614a-de50-bfe1-2df3-4c881fc7840e"),
            Title = "Example contract",
            Message = "Please sign this document!",
        },
    });
    // TODO: Handle 'response' of type SignatureResponseV3
}
catch (ApiException<UpdateSignatureRequestError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateSignatureRequestOperationRequest](src/Skribble/Requests/SignatureHandling/UpdateSignatureRequestOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SignatureResponseV3](src/Skribble/Models/SignatureResponseV3.cs)</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[UpdateSignatureRequestError](src/Skribble/Errors/UpdateSignatureRequestError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SignatureObserverApi

> Source: [SignatureObserverApi](src/Skribble/Api/SignatureObserverApi.cs)

<details>
<summary><code>Task&lt;SignatureObserverResponse&gt; AddSignatureObserver(AddSignatureObserverRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds an observer to the specified signature request.

Observers receive email notifications about signing progress and can view
documents, but cannot sign them.

Adding a **group** observer requires the group-observers feature to be enabled
for the business. If it is not, the request fails with `403 Forbidden`
(problem type `feature-not-enabled`).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SignatureObserverApi.AddSignatureObserver(new AddSignatureObserverRequest
    {
        SrId = Guid.Parse("cccccccc-4a6a-a958-a42e-6ea4172a378b"),
        Body = new UserById { UserId = "123" },
    });
    // TODO: Handle 'response' of type SignatureObserverResponse
}
catch (ApiException<AddSignatureObserverError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AddSignatureObserverRequest](src/Skribble/Requests/SignatureObserverApi/AddSignatureObserverRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SignatureObserverResponse](src/Skribble/Models/OneOf/SignatureObserverResponse.cs)</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[AddSignatureObserverError](src/Skribble/Errors/AddSignatureObserverError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteSignatureObserver(DeleteSignatureObserverRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the observer identified by `OBSERVER_ID` from the `SignatureRequest`
with the ID `SR_ID`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.SignatureObserverApi.DeleteSignatureObserver(new DeleteSignatureObserverRequest
    {
        SrId = Guid.Parse("cccccccc-4a6a-a958-a42e-6ea4172a378b"),
        ObserverId = "ob_123",
    });
}
catch (ApiException<DeleteSignatureObserverError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteSignatureObserverRequest](src/Skribble/Requests/SignatureObserverApi/DeleteSignatureObserverRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[DeleteSignatureObserverError](src/Skribble/Errors/DeleteSignatureObserverError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SignatureObserverResponse&gt; GetSignatureObserver(GetSignatureObserverRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the observer identified by `OBSERVER_ID` from the `SignatureRequest`
with the ID `SR_ID`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SignatureObserverApi.GetSignatureObserver(new GetSignatureObserverRequest
    {
        SrId = Guid.Parse("cccccccc-4a6a-a958-a42e-6ea4172a378b"),
        ObserverId = "ob_123",
    });
    // TODO: Handle 'response' of type SignatureObserverResponse
}
catch (ApiException<GetSignatureObserverError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSignatureObserverRequest](src/Skribble/Requests/SignatureObserverApi/GetSignatureObserverRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SignatureObserverResponse](src/Skribble/Models/OneOf/SignatureObserverResponse.cs)</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[GetSignatureObserverError](src/Skribble/Errors/GetSignatureObserverError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;SignatureObserverResponse&gt;&gt; ListSignatureObservers(ListSignatureObserversRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all observers added to the `SignatureRequest` with the ID `SR_ID`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SignatureObserverApi.ListSignatureObservers(new ListSignatureObserversRequest
    {
        SrId = Guid.Parse("cccccccc-4a6a-a958-a42e-6ea4172a378b"),
    });
    // TODO: Handle 'response' of type IReadOnlyList<SignatureObserverResponse>
}
catch (ApiException<ListSignatureObserversError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListSignatureObserversRequest](src/Skribble/Requests/SignatureObserverApi/ListSignatureObserversRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[SignatureObserverResponse](src/Skribble/Models/OneOf/SignatureObserverResponse.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[ListSignatureObserversError](src/Skribble/Errors/ListSignatureObserversError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SignatureSigner

> Source: [SignatureSigner](src/Skribble/Api/SignatureSigner.cs)

<details>
<summary><code>Task&lt;SignatureResponseV3&gt; AddSignatureSigner(AddSignatureSignerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds an individual signer to the `SignatureRequest` with the ID `SR_ID`.
Use `account_email` to invite a signer with an existing Skribble account,
or `signer_identity_data` to invite a No-Account-Signer (NAS).

> **Good to know**
> We recommend combining `signer_identity_data` and `account_email` when
> you are unsure whether the user has a Skribble account. If a matching
> account exists, the user will find the `SignatureRequest` in the
> **To sign** section of their account on my.skribble.com.
>
> If you invite them using only `signer_identity_data`, the document will
> not appear in their Skribble account even if one exists — they will need
> to access it via the link in their invitation email.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SignatureSigner.AddSignatureSigner(new AddSignatureSignerRequest
    {
        SrId = Guid.Parse("cccccccc-4a6a-a958-a42e-6ea4172a378b"),
        Body = new UserSigner
        {
            DocumentSignatures = [
                new SignerDocumentToSign { DocumentId = Guid.Parse("3648f61d-4194-455c-a0bc-1c438d2cd11b") },
            ],
            AccountEmail = "single-signer@skribble.com",
            SignerIdentityData = new SignerIdentityData { EmailAddress = "single-signer@skribble.com" },
        },
    });
    // TODO: Handle 'response' of type SignatureResponseV3
}
catch (ApiException<AddSignatureSignerError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AddSignatureSignerRequest](src/Skribble/Requests/SignatureSigner/AddSignatureSignerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SignatureResponseV3](src/Skribble/Models/SignatureResponseV3.cs)</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[AddSignatureSignerError](src/Skribble/Errors/AddSignatureSignerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RemoveSignatureSigner(RemoveSignatureSignerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes an individual signer from the `SignatureRequest`. Provide the
SignatureRequest ID `SR_ID` and the Signature ID `SID` of the signer to
remove.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.SignatureSigner.RemoveSignatureSigner(new RemoveSignatureSignerRequest
    {
        SrId = Guid.Parse("cccccccc-4a6a-a958-a42e-6ea4172a378b"),
        Sid = Guid.Parse("97db18c8-7ca1-35a2-9726-0b32771e4ac6"),
    });
}
catch (ApiException<RemoveSignatureSignerError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RemoveSignatureSignerRequest](src/Skribble/Requests/SignatureSigner/RemoveSignatureSignerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[RemoveSignatureSignerError](src/Skribble/Errors/RemoveSignatureSignerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## User

> Source: [User](src/Skribble/Api/User.cs)

<details>
<summary><code>Task&lt;UserSignatureQualitiesResponse&gt; GetUserSignatureQualities(GetUserSignatureQualitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the effective signature `quality` that will be applied when the
given `username` signs a document.

The resulting quality is determined by the combination of the requested
`quality` and `legislation`, where `any` matches any legislation.

For example, if you create a `SignatureRequest` with `quality=AES_MINIMAL`
and `legislation=ZERTES`, this endpoint will indicate the final quality the
user will sign with — typically `QES`, as `AES_MINIMAL` upgrades to `QES`
when the user's settings allow it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.User.GetUserSignatureQualities(new GetUserSignatureQualitiesRequest
    {
        Username = "john.doe@skribble.com",
    });
    // TODO: Handle 'response' of type UserSignatureQualitiesResponse
}
catch (ApiException<GetUserSignatureQualitiesError> ex)
{
    if (ex.Error.TryGetProblem(out var error))
    {
        // TODO: Handle 'error' of type Problem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetUserSignatureQualitiesRequest](src/Skribble/Requests/User/GetUserSignatureQualitiesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserSignatureQualitiesResponse](src/Skribble/Models/UserSignatureQualitiesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[GetUserSignatureQualitiesError](src/Skribble/Errors/GetUserSignatureQualitiesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ValidationApi

> Source: [ValidationApi](src/Skribble/Api/ValidationApi.cs)

<details>
<summary><code>Task DeleteValidation(DeleteValidationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the corresponding resource identified by {id}, universal for all
validation resources. Any resource that is not manually deleted will be
automatically deleted after 10 minutes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.ValidationApi.DeleteValidation(new DeleteValidationRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
}
catch (ApiException<DeleteValidationError> ex)
{
    if (ex.Error.TryGetProblemSkribbleAdditionalInformationApi(out var error))
    {
        // TODO: Handle 'error' of type ProblemSkribbleAdditionalInformationApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteValidationRequest](src/Skribble/Requests/ValidationApi/DeleteValidationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[DeleteValidationError](src/Skribble/Errors/DeleteValidationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DocumentValidationResponse&gt; PostValidateDocument(PostValidateDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validate signatures in digitally signed content, such as a PDF or XML file.
A validation ID {id} is returned that can be used to call additional
endpoints. The content to be validated is provided in the request body and
is not retained within our service. The maximum request or file size is
50MB. Request parameters can be used to set optional parameters to control
the validation

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ValidationApi.PostValidateDocument(new PostValidateDocumentRequest
    {
        Content = Array.Empty<byte>(),
    });
    // TODO: Handle 'response' of type DocumentValidationResponse
}
catch (ApiException<PostValidateDocumentError> ex)
{
    if (ex.Error.TryGetProblemSkribbleAdditionalInformationApi(out var error))
    {
        // TODO: Handle 'error' of type ProblemSkribbleAdditionalInformationApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostValidateDocumentRequest](src/Skribble/Requests/ValidationApi/PostValidateDocumentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DocumentValidationResponse](src/Skribble/Models/DocumentValidationResponse.cs)</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[PostValidateDocumentError](src/Skribble/Errors/PostValidateDocumentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SignatureValidationResponse&gt; PostValidateSignature(PostValidateSignatureRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validate digital signatures such as CMS and CAdES without providing the
associated signed content. A validation ID {id} is returned that can be used
to call additional endpoints. The signature to be validated is provided in
the request body. Query parameters can be used to set optional parameters to
control the validation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ValidationApi.PostValidateSignature(new PostValidateSignatureRequest
    {
        Content = Array.Empty<byte>(),
    });
    // TODO: Handle 'response' of type SignatureValidationResponse
}
catch (ApiException<PostValidateSignatureError> ex)
{
    if (ex.Error.TryGetProblemSkribbleAdditionalInformationApi(out var error))
    {
        // TODO: Handle 'error' of type ProblemSkribbleAdditionalInformationApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostValidateSignatureRequest](src/Skribble/Requests/ValidationApi/PostValidateSignatureRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SignatureValidationResponse](src/Skribble/Models/SignatureValidationResponse.cs)</code>

**OnError**: <code>[ApiException](src/Skribble/Core/Exceptions/ApiException.cs)&lt;[PostValidateSignatureError](src/Skribble/Errors/PostValidateSignatureError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

