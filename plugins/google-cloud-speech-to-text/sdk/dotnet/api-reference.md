# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [GoogleCloudSpeechToTextClient](src/GoogleCloudSpeechToText/GoogleCloudSpeechToTextClient.cs)

## Operations

> Source: [Operations](src/GoogleCloudSpeechToText/Api/Operations.cs)

<details>
<summary><code>Task&lt;Operation&gt; SpeechOperationsGet(SpeechOperationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.Operations.SpeechOperationsGet(new SpeechOperationsGetRequest
    {
        OperationsId = "some example string",
    });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<SpeechOperationsGetError> ex)
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

<code>[SpeechOperationsGetRequest](src/GoogleCloudSpeechToText/Requests/Operations/SpeechOperationsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudSpeechToText/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudSpeechToText/Core/Exceptions/ApiException.cs)&lt;[SpeechOperationsGetError](src/GoogleCloudSpeechToText/Errors/SpeechOperationsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListOperationsResponse&gt; SpeechOperationsList(SpeechOperationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.Operations.SpeechOperationsList(new SpeechOperationsListRequest());
    // TODO: Handle 'response' of type ListOperationsResponse
}
catch (ApiException<SpeechOperationsListError> ex)
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

<code>[SpeechOperationsListRequest](src/GoogleCloudSpeechToText/Requests/Operations/SpeechOperationsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListOperationsResponse](src/GoogleCloudSpeechToText/Models/ListOperationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudSpeechToText/Core/Exceptions/ApiException.cs)&lt;[SpeechOperationsListError](src/GoogleCloudSpeechToText/Errors/SpeechOperationsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Projects

> Source: [Projects](src/GoogleCloudSpeechToText/Api/Projects.cs)

<details>
<summary><code>Task&lt;CustomClass&gt; SpeechProjectsLocationsCustomClassesCreate(SpeechProjectsLocationsCustomClassesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a custom class.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.SpeechProjectsLocationsCustomClassesCreate(
        new SpeechProjectsLocationsCustomClassesCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new CreateCustomClassRequest(),
        });
    // TODO: Handle 'response' of type CustomClass
}
catch (ApiException<SpeechProjectsLocationsCustomClassesCreateError> ex)
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

<code>[SpeechProjectsLocationsCustomClassesCreateRequest](src/GoogleCloudSpeechToText/Requests/Projects/SpeechProjectsLocationsCustomClassesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomClass](src/GoogleCloudSpeechToText/Models/CustomClass.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudSpeechToText/Core/Exceptions/ApiException.cs)&lt;[SpeechProjectsLocationsCustomClassesCreateError](src/GoogleCloudSpeechToText/Errors/SpeechProjectsLocationsCustomClassesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; SpeechProjectsLocationsCustomClassesDelete(SpeechProjectsLocationsCustomClassesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a custom class.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.SpeechProjectsLocationsCustomClassesDelete(
        new SpeechProjectsLocationsCustomClassesDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            CustomClassesId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<SpeechProjectsLocationsCustomClassesDeleteError> ex)
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

<code>[SpeechProjectsLocationsCustomClassesDeleteRequest](src/GoogleCloudSpeechToText/Requests/Projects/SpeechProjectsLocationsCustomClassesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleCloudSpeechToText/Core/Exceptions/ApiException.cs)&lt;[SpeechProjectsLocationsCustomClassesDeleteError](src/GoogleCloudSpeechToText/Errors/SpeechProjectsLocationsCustomClassesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomClass&gt; SpeechProjectsLocationsCustomClassesGet(SpeechProjectsLocationsCustomClassesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a custom class.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.SpeechProjectsLocationsCustomClassesGet(
        new SpeechProjectsLocationsCustomClassesGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            CustomClassesId = "some example string",
        });
    // TODO: Handle 'response' of type CustomClass
}
catch (ApiException<SpeechProjectsLocationsCustomClassesGetError> ex)
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

<code>[SpeechProjectsLocationsCustomClassesGetRequest](src/GoogleCloudSpeechToText/Requests/Projects/SpeechProjectsLocationsCustomClassesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomClass](src/GoogleCloudSpeechToText/Models/CustomClass.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudSpeechToText/Core/Exceptions/ApiException.cs)&lt;[SpeechProjectsLocationsCustomClassesGetError](src/GoogleCloudSpeechToText/Errors/SpeechProjectsLocationsCustomClassesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListCustomClassesResponse&gt; SpeechProjectsLocationsCustomClassesList(SpeechProjectsLocationsCustomClassesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List custom classes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.SpeechProjectsLocationsCustomClassesList(
        new SpeechProjectsLocationsCustomClassesListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type ListCustomClassesResponse
}
catch (ApiException<SpeechProjectsLocationsCustomClassesListError> ex)
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

<code>[SpeechProjectsLocationsCustomClassesListRequest](src/GoogleCloudSpeechToText/Requests/Projects/SpeechProjectsLocationsCustomClassesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListCustomClassesResponse](src/GoogleCloudSpeechToText/Models/ListCustomClassesResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudSpeechToText/Core/Exceptions/ApiException.cs)&lt;[SpeechProjectsLocationsCustomClassesListError](src/GoogleCloudSpeechToText/Errors/SpeechProjectsLocationsCustomClassesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomClass&gt; SpeechProjectsLocationsCustomClassesPatch(SpeechProjectsLocationsCustomClassesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a custom class.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.SpeechProjectsLocationsCustomClassesPatch(
        new SpeechProjectsLocationsCustomClassesPatchRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            CustomClassesId = "some example string",
            Body = new CustomClass(),
        });
    // TODO: Handle 'response' of type CustomClass
}
catch (ApiException<SpeechProjectsLocationsCustomClassesPatchError> ex)
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

<code>[SpeechProjectsLocationsCustomClassesPatchRequest](src/GoogleCloudSpeechToText/Requests/Projects/SpeechProjectsLocationsCustomClassesPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomClass](src/GoogleCloudSpeechToText/Models/CustomClass.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudSpeechToText/Core/Exceptions/ApiException.cs)&lt;[SpeechProjectsLocationsCustomClassesPatchError](src/GoogleCloudSpeechToText/Errors/SpeechProjectsLocationsCustomClassesPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PhraseSet&gt; SpeechProjectsLocationsPhraseSetsCreate(SpeechProjectsLocationsPhraseSetsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a set of phrase hints. Each item in the set can be a single word or a multi-word phrase. The items in the PhraseSet are favored by the recognition model when you send a call that includes the PhraseSet.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.SpeechProjectsLocationsPhraseSetsCreate(
        new SpeechProjectsLocationsPhraseSetsCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new CreatePhraseSetRequest(),
        });
    // TODO: Handle 'response' of type PhraseSet
}
catch (ApiException<SpeechProjectsLocationsPhraseSetsCreateError> ex)
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

<code>[SpeechProjectsLocationsPhraseSetsCreateRequest](src/GoogleCloudSpeechToText/Requests/Projects/SpeechProjectsLocationsPhraseSetsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PhraseSet](src/GoogleCloudSpeechToText/Models/PhraseSet.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudSpeechToText/Core/Exceptions/ApiException.cs)&lt;[SpeechProjectsLocationsPhraseSetsCreateError](src/GoogleCloudSpeechToText/Errors/SpeechProjectsLocationsPhraseSetsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; SpeechProjectsLocationsPhraseSetsDelete(SpeechProjectsLocationsPhraseSetsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a phrase set.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.SpeechProjectsLocationsPhraseSetsDelete(
        new SpeechProjectsLocationsPhraseSetsDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            PhraseSetsId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<SpeechProjectsLocationsPhraseSetsDeleteError> ex)
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

<code>[SpeechProjectsLocationsPhraseSetsDeleteRequest](src/GoogleCloudSpeechToText/Requests/Projects/SpeechProjectsLocationsPhraseSetsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleCloudSpeechToText/Core/Exceptions/ApiException.cs)&lt;[SpeechProjectsLocationsPhraseSetsDeleteError](src/GoogleCloudSpeechToText/Errors/SpeechProjectsLocationsPhraseSetsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PhraseSet&gt; SpeechProjectsLocationsPhraseSetsGet(SpeechProjectsLocationsPhraseSetsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a phrase set.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.SpeechProjectsLocationsPhraseSetsGet(
        new SpeechProjectsLocationsPhraseSetsGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            PhraseSetsId = "some example string",
        });
    // TODO: Handle 'response' of type PhraseSet
}
catch (ApiException<SpeechProjectsLocationsPhraseSetsGetError> ex)
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

<code>[SpeechProjectsLocationsPhraseSetsGetRequest](src/GoogleCloudSpeechToText/Requests/Projects/SpeechProjectsLocationsPhraseSetsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PhraseSet](src/GoogleCloudSpeechToText/Models/PhraseSet.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudSpeechToText/Core/Exceptions/ApiException.cs)&lt;[SpeechProjectsLocationsPhraseSetsGetError](src/GoogleCloudSpeechToText/Errors/SpeechProjectsLocationsPhraseSetsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListPhraseSetResponse&gt; SpeechProjectsLocationsPhraseSetsList(SpeechProjectsLocationsPhraseSetsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List phrase sets.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.SpeechProjectsLocationsPhraseSetsList(
        new SpeechProjectsLocationsPhraseSetsListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type ListPhraseSetResponse
}
catch (ApiException<SpeechProjectsLocationsPhraseSetsListError> ex)
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

<code>[SpeechProjectsLocationsPhraseSetsListRequest](src/GoogleCloudSpeechToText/Requests/Projects/SpeechProjectsLocationsPhraseSetsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListPhraseSetResponse](src/GoogleCloudSpeechToText/Models/ListPhraseSetResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudSpeechToText/Core/Exceptions/ApiException.cs)&lt;[SpeechProjectsLocationsPhraseSetsListError](src/GoogleCloudSpeechToText/Errors/SpeechProjectsLocationsPhraseSetsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PhraseSet&gt; SpeechProjectsLocationsPhraseSetsPatch(SpeechProjectsLocationsPhraseSetsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a phrase set.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.SpeechProjectsLocationsPhraseSetsPatch(
        new SpeechProjectsLocationsPhraseSetsPatchRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            PhraseSetsId = "some example string",
            Body = new PhraseSet(),
        });
    // TODO: Handle 'response' of type PhraseSet
}
catch (ApiException<SpeechProjectsLocationsPhraseSetsPatchError> ex)
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

<code>[SpeechProjectsLocationsPhraseSetsPatchRequest](src/GoogleCloudSpeechToText/Requests/Projects/SpeechProjectsLocationsPhraseSetsPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PhraseSet](src/GoogleCloudSpeechToText/Models/PhraseSet.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudSpeechToText/Core/Exceptions/ApiException.cs)&lt;[SpeechProjectsLocationsPhraseSetsPatchError](src/GoogleCloudSpeechToText/Errors/SpeechProjectsLocationsPhraseSetsPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Speech

> Source: [Speech](src/GoogleCloudSpeechToText/Api/Speech.cs)

<details>
<summary><code>Task&lt;Operation&gt; SpeechSpeechLongrunningrecognize(SpeechSpeechLongrunningrecognizeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Performs asynchronous speech recognition: receive results via the google.longrunning.Operations interface. Returns either an `Operation.error` or an `Operation.response` which contains a `LongRunningRecognizeResponse` message. For more information on asynchronous speech recognition, see the how-to.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Speech.SpeechSpeechLongrunningrecognize(new SpeechSpeechLongrunningrecognizeRequest
    {
        Body = new LongRunningRecognizeRequest(),
    });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<SpeechSpeechLongrunningrecognizeError> ex)
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

<code>[SpeechSpeechLongrunningrecognizeRequest](src/GoogleCloudSpeechToText/Requests/Speech/SpeechSpeechLongrunningrecognizeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudSpeechToText/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudSpeechToText/Core/Exceptions/ApiException.cs)&lt;[SpeechSpeechLongrunningrecognizeError](src/GoogleCloudSpeechToText/Errors/SpeechSpeechLongrunningrecognizeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RecognizeResponse&gt; SpeechSpeechRecognize(SpeechSpeechRecognizeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Performs synchronous speech recognition: receive results after all audio has been sent and processed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Speech.SpeechSpeechRecognize(new SpeechSpeechRecognizeRequest
    {
        Body = new RecognizeRequest(),
    });
    // TODO: Handle 'response' of type RecognizeResponse
}
catch (ApiException<SpeechSpeechRecognizeError> ex)
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

<code>[SpeechSpeechRecognizeRequest](src/GoogleCloudSpeechToText/Requests/Speech/SpeechSpeechRecognizeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecognizeResponse](src/GoogleCloudSpeechToText/Models/RecognizeResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudSpeechToText/Core/Exceptions/ApiException.cs)&lt;[SpeechSpeechRecognizeError](src/GoogleCloudSpeechToText/Errors/SpeechSpeechRecognizeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

