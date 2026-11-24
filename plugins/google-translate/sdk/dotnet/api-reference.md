# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [GoogleTranslateClient](src/GoogleTranslate/GoogleTranslateClient.cs)

<details>
<summary><code>Task&lt;DetectLanguageResponse&gt; TranslateProjectsDetectLanguage(TranslateProjectsDetectLanguageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects the language of text within a request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsDetectLanguage(new TranslateProjectsDetectLanguageRequest
    {
        ProjectsId = "some example string",
        Body = new DetectLanguageRequest(),
    });
    // TODO: Handle 'response' of type DetectLanguageResponse
}
catch (ApiException<TranslateProjectsDetectLanguageError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsDetectLanguageRequest](src/GoogleTranslate/Requests/TranslateProjectsDetectLanguageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DetectLanguageResponse](src/GoogleTranslate/Models/DetectLanguageResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsDetectLanguageError](src/GoogleTranslate/Errors/TranslateProjectsDetectLanguageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SupportedLanguages&gt; TranslateProjectsGetSupportedLanguages(TranslateProjectsGetSupportedLanguagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of supported languages for translation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsGetSupportedLanguages(new TranslateProjectsGetSupportedLanguagesRequest
    {
        ProjectsId = "some example string",
    });
    // TODO: Handle 'response' of type SupportedLanguages
}
catch (ApiException<TranslateProjectsGetSupportedLanguagesError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsGetSupportedLanguagesRequest](src/GoogleTranslate/Requests/TranslateProjectsGetSupportedLanguagesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SupportedLanguages](src/GoogleTranslate/Models/SupportedLanguages.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsGetSupportedLanguagesError](src/GoogleTranslate/Errors/TranslateProjectsGetSupportedLanguagesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListAdaptiveMtSentencesResponse&gt; TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesList(TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all AdaptiveMtSentences under a given file/dataset.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesList(
        new TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            AdaptiveMtDatasetsId = "some example string",
            AdaptiveMtFilesId = "some example string",
        });
    // TODO: Handle 'response' of type ListAdaptiveMtSentencesResponse
}
catch (ApiException<TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListAdaptiveMtSentencesResponse](src/GoogleTranslate/Models/ListAdaptiveMtSentencesResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListError](src/GoogleTranslate/Errors/TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDelete(TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an AdaptiveMtFile along with its sentences.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDelete(
        new TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            AdaptiveMtDatasetsId = "some example string",
            AdaptiveMtFilesId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteError](src/GoogleTranslate/Errors/TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AdaptiveMtFile&gt; TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGet(TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets and AdaptiveMtFile

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGet(
        new TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            AdaptiveMtDatasetsId = "some example string",
            AdaptiveMtFilesId = "some example string",
        });
    // TODO: Handle 'response' of type AdaptiveMtFile
}
catch (ApiException<TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AdaptiveMtFile](src/GoogleTranslate/Models/AdaptiveMtFile.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetError](src/GoogleTranslate/Errors/TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListAdaptiveMtFilesResponse&gt; TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesList(TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all AdaptiveMtFiles associated to an AdaptiveMtDataset.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesList(
        new TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            AdaptiveMtDatasetsId = "some example string",
        });
    // TODO: Handle 'response' of type ListAdaptiveMtFilesResponse
}
catch (ApiException<TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListAdaptiveMtFilesResponse](src/GoogleTranslate/Models/ListAdaptiveMtFilesResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListError](src/GoogleTranslate/Errors/TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListAdaptiveMtSentencesResponse&gt; TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesList(TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all AdaptiveMtSentences under a given file/dataset.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesList(
        new TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            AdaptiveMtDatasetsId = "some example string",
        });
    // TODO: Handle 'response' of type ListAdaptiveMtSentencesResponse
}
catch (ApiException<TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListAdaptiveMtSentencesResponse](src/GoogleTranslate/Models/ListAdaptiveMtSentencesResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListError](src/GoogleTranslate/Errors/TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AdaptiveMtDataset&gt; TranslateProjectsLocationsAdaptiveMtDatasetsCreate(TranslateProjectsLocationsAdaptiveMtDatasetsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an Adaptive MT dataset.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsAdaptiveMtDatasetsCreate(
        new TranslateProjectsLocationsAdaptiveMtDatasetsCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new AdaptiveMtDataset(),
        });
    // TODO: Handle 'response' of type AdaptiveMtDataset
}
catch (ApiException<TranslateProjectsLocationsAdaptiveMtDatasetsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsAdaptiveMtDatasetsCreateRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsAdaptiveMtDatasetsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AdaptiveMtDataset](src/GoogleTranslate/Models/AdaptiveMtDataset.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsAdaptiveMtDatasetsCreateError](src/GoogleTranslate/Errors/TranslateProjectsLocationsAdaptiveMtDatasetsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; TranslateProjectsLocationsAdaptiveMtDatasetsDelete(TranslateProjectsLocationsAdaptiveMtDatasetsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an Adaptive MT dataset, including all its entries and associated metadata.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsAdaptiveMtDatasetsDelete(
        new TranslateProjectsLocationsAdaptiveMtDatasetsDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            AdaptiveMtDatasetsId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<TranslateProjectsLocationsAdaptiveMtDatasetsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsAdaptiveMtDatasetsDeleteRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsAdaptiveMtDatasetsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsAdaptiveMtDatasetsDeleteError](src/GoogleTranslate/Errors/TranslateProjectsLocationsAdaptiveMtDatasetsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AdaptiveMtDataset&gt; TranslateProjectsLocationsAdaptiveMtDatasetsGet(TranslateProjectsLocationsAdaptiveMtDatasetsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the Adaptive MT dataset.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsAdaptiveMtDatasetsGet(
        new TranslateProjectsLocationsAdaptiveMtDatasetsGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            AdaptiveMtDatasetsId = "some example string",
        });
    // TODO: Handle 'response' of type AdaptiveMtDataset
}
catch (ApiException<TranslateProjectsLocationsAdaptiveMtDatasetsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsAdaptiveMtDatasetsGetRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsAdaptiveMtDatasetsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AdaptiveMtDataset](src/GoogleTranslate/Models/AdaptiveMtDataset.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsAdaptiveMtDatasetsGetError](src/GoogleTranslate/Errors/TranslateProjectsLocationsAdaptiveMtDatasetsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ImportAdaptiveMtFileResponse&gt; TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFile(TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Imports an AdaptiveMtFile and adds all of its sentences into the AdaptiveMtDataset.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFile(
        new TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            AdaptiveMtDatasetsId = "some example string",
            Body = new ImportAdaptiveMtFileRequest(),
        });
    // TODO: Handle 'response' of type ImportAdaptiveMtFileResponse
}
catch (ApiException<TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ImportAdaptiveMtFileResponse](src/GoogleTranslate/Models/ImportAdaptiveMtFileResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileError](src/GoogleTranslate/Errors/TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListAdaptiveMtDatasetsResponse&gt; TranslateProjectsLocationsAdaptiveMtDatasetsList(TranslateProjectsLocationsAdaptiveMtDatasetsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all Adaptive MT datasets for which the caller has read permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsAdaptiveMtDatasetsList(
        new TranslateProjectsLocationsAdaptiveMtDatasetsListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type ListAdaptiveMtDatasetsResponse
}
catch (ApiException<TranslateProjectsLocationsAdaptiveMtDatasetsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsAdaptiveMtDatasetsListRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsAdaptiveMtDatasetsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListAdaptiveMtDatasetsResponse](src/GoogleTranslate/Models/ListAdaptiveMtDatasetsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsAdaptiveMtDatasetsListError](src/GoogleTranslate/Errors/TranslateProjectsLocationsAdaptiveMtDatasetsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AdaptiveMtTranslateResponse&gt; TranslateProjectsLocationsAdaptiveMtTranslate(TranslateProjectsLocationsAdaptiveMtTranslateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Translate text using Adaptive MT.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsAdaptiveMtTranslate(
        new TranslateProjectsLocationsAdaptiveMtTranslateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new AdaptiveMtTranslateRequest(),
        });
    // TODO: Handle 'response' of type AdaptiveMtTranslateResponse
}
catch (ApiException<TranslateProjectsLocationsAdaptiveMtTranslateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsAdaptiveMtTranslateRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsAdaptiveMtTranslateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AdaptiveMtTranslateResponse](src/GoogleTranslate/Models/AdaptiveMtTranslateResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsAdaptiveMtTranslateError](src/GoogleTranslate/Errors/TranslateProjectsLocationsAdaptiveMtTranslateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; TranslateProjectsLocationsBatchTranslateDocument(TranslateProjectsLocationsBatchTranslateDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsBatchTranslateDocument(
        new TranslateProjectsLocationsBatchTranslateDocumentRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new BatchTranslateDocumentRequest(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<TranslateProjectsLocationsBatchTranslateDocumentError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsBatchTranslateDocumentRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsBatchTranslateDocumentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleTranslate/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsBatchTranslateDocumentError](src/GoogleTranslate/Errors/TranslateProjectsLocationsBatchTranslateDocumentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; TranslateProjectsLocationsBatchTranslateText(TranslateProjectsLocationsBatchTranslateTextRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsBatchTranslateText(
        new TranslateProjectsLocationsBatchTranslateTextRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new BatchTranslateTextRequest(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<TranslateProjectsLocationsBatchTranslateTextError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsBatchTranslateTextRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsBatchTranslateTextRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleTranslate/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsBatchTranslateTextError](src/GoogleTranslate/Errors/TranslateProjectsLocationsBatchTranslateTextError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; TranslateProjectsLocationsDatasetsCreate(TranslateProjectsLocationsDatasetsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Dataset.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsDatasetsCreate(
        new TranslateProjectsLocationsDatasetsCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new Dataset(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<TranslateProjectsLocationsDatasetsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsDatasetsCreateRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsDatasetsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleTranslate/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsDatasetsCreateError](src/GoogleTranslate/Errors/TranslateProjectsLocationsDatasetsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; TranslateProjectsLocationsDatasetsDelete(TranslateProjectsLocationsDatasetsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a dataset and all of its contents.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsDatasetsDelete(
        new TranslateProjectsLocationsDatasetsDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            DatasetsId = "some example string",
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<TranslateProjectsLocationsDatasetsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsDatasetsDeleteRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsDatasetsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleTranslate/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsDatasetsDeleteError](src/GoogleTranslate/Errors/TranslateProjectsLocationsDatasetsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListExamplesResponse&gt; TranslateProjectsLocationsDatasetsExamplesList(TranslateProjectsLocationsDatasetsExamplesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists sentence pairs in the dataset.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsDatasetsExamplesList(
        new TranslateProjectsLocationsDatasetsExamplesListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            DatasetsId = "some example string",
        });
    // TODO: Handle 'response' of type ListExamplesResponse
}
catch (ApiException<TranslateProjectsLocationsDatasetsExamplesListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsDatasetsExamplesListRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsDatasetsExamplesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListExamplesResponse](src/GoogleTranslate/Models/ListExamplesResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsDatasetsExamplesListError](src/GoogleTranslate/Errors/TranslateProjectsLocationsDatasetsExamplesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; TranslateProjectsLocationsDatasetsExportData(TranslateProjectsLocationsDatasetsExportDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exports dataset's data to the provided output location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsDatasetsExportData(
        new TranslateProjectsLocationsDatasetsExportDataRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            DatasetsId = "some example string",
            Body = new ExportDataRequest(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<TranslateProjectsLocationsDatasetsExportDataError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsDatasetsExportDataRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsDatasetsExportDataRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleTranslate/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsDatasetsExportDataError](src/GoogleTranslate/Errors/TranslateProjectsLocationsDatasetsExportDataError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Dataset&gt; TranslateProjectsLocationsDatasetsGet(TranslateProjectsLocationsDatasetsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a Dataset.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsDatasetsGet(new TranslateProjectsLocationsDatasetsGetRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
        DatasetsId = "some example string",
    });
    // TODO: Handle 'response' of type Dataset
}
catch (ApiException<TranslateProjectsLocationsDatasetsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsDatasetsGetRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsDatasetsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Dataset](src/GoogleTranslate/Models/Dataset.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsDatasetsGetError](src/GoogleTranslate/Errors/TranslateProjectsLocationsDatasetsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; TranslateProjectsLocationsDatasetsImportData(TranslateProjectsLocationsDatasetsImportDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Import sentence pairs into translation Dataset.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsDatasetsImportData(
        new TranslateProjectsLocationsDatasetsImportDataRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            DatasetsId = "some example string",
            Body = new ImportDataRequest(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<TranslateProjectsLocationsDatasetsImportDataError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsDatasetsImportDataRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsDatasetsImportDataRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleTranslate/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsDatasetsImportDataError](src/GoogleTranslate/Errors/TranslateProjectsLocationsDatasetsImportDataError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListDatasetsResponse&gt; TranslateProjectsLocationsDatasetsList(TranslateProjectsLocationsDatasetsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists datasets.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsDatasetsList(new TranslateProjectsLocationsDatasetsListRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
    });
    // TODO: Handle 'response' of type ListDatasetsResponse
}
catch (ApiException<TranslateProjectsLocationsDatasetsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsDatasetsListRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsDatasetsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListDatasetsResponse](src/GoogleTranslate/Models/ListDatasetsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsDatasetsListError](src/GoogleTranslate/Errors/TranslateProjectsLocationsDatasetsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DetectLanguageResponse&gt; TranslateProjectsLocationsDetectLanguage(TranslateProjectsLocationsDetectLanguageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects the language of text within a request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsDetectLanguage(
        new TranslateProjectsLocationsDetectLanguageRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new DetectLanguageRequest(),
        });
    // TODO: Handle 'response' of type DetectLanguageResponse
}
catch (ApiException<TranslateProjectsLocationsDetectLanguageError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsDetectLanguageRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsDetectLanguageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DetectLanguageResponse](src/GoogleTranslate/Models/DetectLanguageResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsDetectLanguageError](src/GoogleTranslate/Errors/TranslateProjectsLocationsDetectLanguageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Location&gt; TranslateProjectsLocationsGet(TranslateProjectsLocationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about a location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsGet(new TranslateProjectsLocationsGetRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
    });
    // TODO: Handle 'response' of type Location
}
catch (ApiException<TranslateProjectsLocationsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsGetRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Location](src/GoogleTranslate/Models/Location.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsGetError](src/GoogleTranslate/Errors/TranslateProjectsLocationsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SupportedLanguages&gt; TranslateProjectsLocationsGetSupportedLanguages(TranslateProjectsLocationsGetSupportedLanguagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of supported languages for translation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsGetSupportedLanguages(
        new TranslateProjectsLocationsGetSupportedLanguagesRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type SupportedLanguages
}
catch (ApiException<TranslateProjectsLocationsGetSupportedLanguagesError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsGetSupportedLanguagesRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsGetSupportedLanguagesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SupportedLanguages](src/GoogleTranslate/Models/SupportedLanguages.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsGetSupportedLanguagesError](src/GoogleTranslate/Errors/TranslateProjectsLocationsGetSupportedLanguagesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; TranslateProjectsLocationsGlossariesCreate(TranslateProjectsLocationsGlossariesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsGlossariesCreate(
        new TranslateProjectsLocationsGlossariesCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new Glossary(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<TranslateProjectsLocationsGlossariesCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsGlossariesCreateRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsGlossariesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleTranslate/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsGlossariesCreateError](src/GoogleTranslate/Errors/TranslateProjectsLocationsGlossariesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; TranslateProjectsLocationsGlossariesDelete(TranslateProjectsLocationsGlossariesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a glossary, or cancels glossary construction if the glossary isn't created yet. Returns NOT_FOUND, if the glossary doesn't exist.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsGlossariesDelete(
        new TranslateProjectsLocationsGlossariesDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            GlossariesId = "some example string",
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<TranslateProjectsLocationsGlossariesDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsGlossariesDeleteRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsGlossariesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleTranslate/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsGlossariesDeleteError](src/GoogleTranslate/Errors/TranslateProjectsLocationsGlossariesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Glossary&gt; TranslateProjectsLocationsGlossariesGet(TranslateProjectsLocationsGlossariesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a glossary. Returns NOT_FOUND, if the glossary doesn't exist.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsGlossariesGet(
        new TranslateProjectsLocationsGlossariesGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            GlossariesId = "some example string",
        });
    // TODO: Handle 'response' of type Glossary
}
catch (ApiException<TranslateProjectsLocationsGlossariesGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsGlossariesGetRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsGlossariesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Glossary](src/GoogleTranslate/Models/Glossary.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsGlossariesGetError](src/GoogleTranslate/Errors/TranslateProjectsLocationsGlossariesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GlossaryEntry&gt; TranslateProjectsLocationsGlossariesGlossaryEntriesCreate(TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a glossary entry.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsGlossariesGlossaryEntriesCreate(
        new TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            GlossariesId = "some example string",
            Body = new GlossaryEntry(),
        });
    // TODO: Handle 'response' of type GlossaryEntry
}
catch (ApiException<TranslateProjectsLocationsGlossariesGlossaryEntriesCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GlossaryEntry](src/GoogleTranslate/Models/GlossaryEntry.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsGlossariesGlossaryEntriesCreateError](src/GoogleTranslate/Errors/TranslateProjectsLocationsGlossariesGlossaryEntriesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; TranslateProjectsLocationsGlossariesGlossaryEntriesDelete(TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single entry from the glossary

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsGlossariesGlossaryEntriesDelete(
        new TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            GlossariesId = "some example string",
            GlossaryEntriesId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteError](src/GoogleTranslate/Errors/TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GlossaryEntry&gt; TranslateProjectsLocationsGlossariesGlossaryEntriesGet(TranslateProjectsLocationsGlossariesGlossaryEntriesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a single glossary entry by the given id.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsGlossariesGlossaryEntriesGet(
        new TranslateProjectsLocationsGlossariesGlossaryEntriesGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            GlossariesId = "some example string",
            GlossaryEntriesId = "some example string",
        });
    // TODO: Handle 'response' of type GlossaryEntry
}
catch (ApiException<TranslateProjectsLocationsGlossariesGlossaryEntriesGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsGlossariesGlossaryEntriesGetRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsGlossariesGlossaryEntriesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GlossaryEntry](src/GoogleTranslate/Models/GlossaryEntry.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsGlossariesGlossaryEntriesGetError](src/GoogleTranslate/Errors/TranslateProjectsLocationsGlossariesGlossaryEntriesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListGlossaryEntriesResponse&gt; TranslateProjectsLocationsGlossariesGlossaryEntriesList(TranslateProjectsLocationsGlossariesGlossaryEntriesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the entries for the glossary.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsGlossariesGlossaryEntriesList(
        new TranslateProjectsLocationsGlossariesGlossaryEntriesListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            GlossariesId = "some example string",
        });
    // TODO: Handle 'response' of type ListGlossaryEntriesResponse
}
catch (ApiException<TranslateProjectsLocationsGlossariesGlossaryEntriesListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsGlossariesGlossaryEntriesListRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsGlossariesGlossaryEntriesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListGlossaryEntriesResponse](src/GoogleTranslate/Models/ListGlossaryEntriesResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsGlossariesGlossaryEntriesListError](src/GoogleTranslate/Errors/TranslateProjectsLocationsGlossariesGlossaryEntriesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GlossaryEntry&gt; TranslateProjectsLocationsGlossariesGlossaryEntriesPatch(TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a glossary entry.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsGlossariesGlossaryEntriesPatch(
        new TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            GlossariesId = "some example string",
            GlossaryEntriesId = "some example string",
            Body = new GlossaryEntry(),
        });
    // TODO: Handle 'response' of type GlossaryEntry
}
catch (ApiException<TranslateProjectsLocationsGlossariesGlossaryEntriesPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GlossaryEntry](src/GoogleTranslate/Models/GlossaryEntry.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsGlossariesGlossaryEntriesPatchError](src/GoogleTranslate/Errors/TranslateProjectsLocationsGlossariesGlossaryEntriesPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListGlossariesResponse&gt; TranslateProjectsLocationsGlossariesList(TranslateProjectsLocationsGlossariesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsGlossariesList(
        new TranslateProjectsLocationsGlossariesListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type ListGlossariesResponse
}
catch (ApiException<TranslateProjectsLocationsGlossariesListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsGlossariesListRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsGlossariesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListGlossariesResponse](src/GoogleTranslate/Models/ListGlossariesResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsGlossariesListError](src/GoogleTranslate/Errors/TranslateProjectsLocationsGlossariesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; TranslateProjectsLocationsGlossariesPatch(TranslateProjectsLocationsGlossariesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a glossary. A LRO is used since the update can be async if the glossary's entry file is updated.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsGlossariesPatch(
        new TranslateProjectsLocationsGlossariesPatchRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            GlossariesId = "some example string",
            Body = new Glossary(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<TranslateProjectsLocationsGlossariesPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsGlossariesPatchRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsGlossariesPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleTranslate/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsGlossariesPatchError](src/GoogleTranslate/Errors/TranslateProjectsLocationsGlossariesPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListLocationsResponse&gt; TranslateProjectsLocationsList(TranslateProjectsLocationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsList(new TranslateProjectsLocationsListRequest
    {
        ProjectsId = "some example string",
    });
    // TODO: Handle 'response' of type ListLocationsResponse
}
catch (ApiException<TranslateProjectsLocationsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsListRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListLocationsResponse](src/GoogleTranslate/Models/ListLocationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsListError](src/GoogleTranslate/Errors/TranslateProjectsLocationsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; TranslateProjectsLocationsModelsCreate(TranslateProjectsLocationsModelsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Model.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsModelsCreate(new TranslateProjectsLocationsModelsCreateRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
        Body = new Model(),
    });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<TranslateProjectsLocationsModelsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsModelsCreateRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsModelsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleTranslate/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsModelsCreateError](src/GoogleTranslate/Errors/TranslateProjectsLocationsModelsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; TranslateProjectsLocationsModelsDelete(TranslateProjectsLocationsModelsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a model.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsModelsDelete(new TranslateProjectsLocationsModelsDeleteRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
        ModelsId = "some example string",
    });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<TranslateProjectsLocationsModelsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsModelsDeleteRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsModelsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleTranslate/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsModelsDeleteError](src/GoogleTranslate/Errors/TranslateProjectsLocationsModelsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Model&gt; TranslateProjectsLocationsModelsGet(TranslateProjectsLocationsModelsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a model.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsModelsGet(new TranslateProjectsLocationsModelsGetRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
        ModelsId = "some example string",
    });
    // TODO: Handle 'response' of type Model
}
catch (ApiException<TranslateProjectsLocationsModelsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsModelsGetRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsModelsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Model](src/GoogleTranslate/Models/Model.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsModelsGetError](src/GoogleTranslate/Errors/TranslateProjectsLocationsModelsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListModelsResponse&gt; TranslateProjectsLocationsModelsList(TranslateProjectsLocationsModelsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists models.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsModelsList(new TranslateProjectsLocationsModelsListRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
    });
    // TODO: Handle 'response' of type ListModelsResponse
}
catch (ApiException<TranslateProjectsLocationsModelsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsModelsListRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsModelsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListModelsResponse](src/GoogleTranslate/Models/ListModelsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsModelsListError](src/GoogleTranslate/Errors/TranslateProjectsLocationsModelsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; TranslateProjectsLocationsOperationsCancel(TranslateProjectsLocationsOperationsCancelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsOperationsCancel(
        new TranslateProjectsLocationsOperationsCancelRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            OperationsId = "some example string",
            Body = body,
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<TranslateProjectsLocationsOperationsCancelError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsOperationsCancelRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsOperationsCancelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsOperationsCancelError](src/GoogleTranslate/Errors/TranslateProjectsLocationsOperationsCancelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; TranslateProjectsLocationsOperationsDelete(TranslateProjectsLocationsOperationsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsOperationsDelete(
        new TranslateProjectsLocationsOperationsDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            OperationsId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<TranslateProjectsLocationsOperationsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsOperationsDeleteRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsOperationsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsOperationsDeleteError](src/GoogleTranslate/Errors/TranslateProjectsLocationsOperationsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; TranslateProjectsLocationsOperationsGet(TranslateProjectsLocationsOperationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsOperationsGet(
        new TranslateProjectsLocationsOperationsGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            OperationsId = "some example string",
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<TranslateProjectsLocationsOperationsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsOperationsGetRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsOperationsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleTranslate/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsOperationsGetError](src/GoogleTranslate/Errors/TranslateProjectsLocationsOperationsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListOperationsResponse&gt; TranslateProjectsLocationsOperationsList(TranslateProjectsLocationsOperationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsOperationsList(
        new TranslateProjectsLocationsOperationsListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type ListOperationsResponse
}
catch (ApiException<TranslateProjectsLocationsOperationsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsOperationsListRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsOperationsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListOperationsResponse](src/GoogleTranslate/Models/ListOperationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsOperationsListError](src/GoogleTranslate/Errors/TranslateProjectsLocationsOperationsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; TranslateProjectsLocationsOperationsWait(TranslateProjectsLocationsOperationsWaitRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsOperationsWait(
        new TranslateProjectsLocationsOperationsWaitRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            OperationsId = "some example string",
            Body = new WaitOperationRequest(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<TranslateProjectsLocationsOperationsWaitError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsOperationsWaitRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsOperationsWaitRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleTranslate/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsOperationsWaitError](src/GoogleTranslate/Errors/TranslateProjectsLocationsOperationsWaitError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RefineTextResponse&gt; TranslateProjectsLocationsRefineText(TranslateProjectsLocationsRefineTextRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Refines the input translated text to improve the quality.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsRefineText(new TranslateProjectsLocationsRefineTextRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
        Body = new RefineTextRequest(),
    });
    // TODO: Handle 'response' of type RefineTextResponse
}
catch (ApiException<TranslateProjectsLocationsRefineTextError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsRefineTextRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsRefineTextRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RefineTextResponse](src/GoogleTranslate/Models/RefineTextResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsRefineTextError](src/GoogleTranslate/Errors/TranslateProjectsLocationsRefineTextError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RomanizeTextResponse&gt; TranslateProjectsLocationsRomanizeText(TranslateProjectsLocationsRomanizeTextRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Romanize input text written in non-Latin scripts to Latin text.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsRomanizeText(new TranslateProjectsLocationsRomanizeTextRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
        Body = new RomanizeTextRequest(),
    });
    // TODO: Handle 'response' of type RomanizeTextResponse
}
catch (ApiException<TranslateProjectsLocationsRomanizeTextError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsRomanizeTextRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsRomanizeTextRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RomanizeTextResponse](src/GoogleTranslate/Models/RomanizeTextResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsRomanizeTextError](src/GoogleTranslate/Errors/TranslateProjectsLocationsRomanizeTextError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TranslateDocumentResponse&gt; TranslateProjectsLocationsTranslateDocument(TranslateProjectsLocationsTranslateDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Translates documents in synchronous mode.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsTranslateDocument(
        new TranslateProjectsLocationsTranslateDocumentRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new TranslateDocumentRequest(),
        });
    // TODO: Handle 'response' of type TranslateDocumentResponse
}
catch (ApiException<TranslateProjectsLocationsTranslateDocumentError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsTranslateDocumentRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsTranslateDocumentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TranslateDocumentResponse](src/GoogleTranslate/Models/TranslateDocumentResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsTranslateDocumentError](src/GoogleTranslate/Errors/TranslateProjectsLocationsTranslateDocumentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TranslateTextResponse&gt; TranslateProjectsLocationsTranslateText(TranslateProjectsLocationsTranslateTextRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Translates input text and returns translated text.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsLocationsTranslateText(
        new TranslateProjectsLocationsTranslateTextRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new TranslateTextRequest(),
        });
    // TODO: Handle 'response' of type TranslateTextResponse
}
catch (ApiException<TranslateProjectsLocationsTranslateTextError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsLocationsTranslateTextRequest](src/GoogleTranslate/Requests/TranslateProjectsLocationsTranslateTextRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TranslateTextResponse](src/GoogleTranslate/Models/TranslateTextResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsLocationsTranslateTextError](src/GoogleTranslate/Errors/TranslateProjectsLocationsTranslateTextError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RomanizeTextResponse&gt; TranslateProjectsRomanizeText(TranslateProjectsRomanizeTextRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Romanize input text written in non-Latin scripts to Latin text.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsRomanizeText(new TranslateProjectsRomanizeTextRequest
    {
        ProjectsId = "some example string",
        Body = new RomanizeTextRequest(),
    });
    // TODO: Handle 'response' of type RomanizeTextResponse
}
catch (ApiException<TranslateProjectsRomanizeTextError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsRomanizeTextRequest](src/GoogleTranslate/Requests/TranslateProjectsRomanizeTextRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RomanizeTextResponse](src/GoogleTranslate/Models/RomanizeTextResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsRomanizeTextError](src/GoogleTranslate/Errors/TranslateProjectsRomanizeTextError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TranslateTextResponse&gt; TranslateProjectsTranslateText(TranslateProjectsTranslateTextRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Translates input text and returns translated text.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TranslateProjectsTranslateText(new TranslateProjectsTranslateTextRequest
    {
        ProjectsId = "some example string",
        Body = new TranslateTextRequest(),
    });
    // TODO: Handle 'response' of type TranslateTextResponse
}
catch (ApiException<TranslateProjectsTranslateTextError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TranslateProjectsTranslateTextRequest](src/GoogleTranslate/Requests/TranslateProjectsTranslateTextRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TranslateTextResponse](src/GoogleTranslate/Models/TranslateTextResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleTranslate/Core/Exceptions/ApiException.cs)&lt;[TranslateProjectsTranslateTextError](src/GoogleTranslate/Errors/TranslateProjectsTranslateTextError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

