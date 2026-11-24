# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [StoplightClient](src/Stoplight/StoplightClient.cs)

<details>
<summary><code>Task&lt;JsonElement&gt; GetVersionsVersionIdExportFormat(GetVersionsVersionIdExportFormatRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Export a version to your choice of API specification.

### Allowed Formats:

- oas.json
- oas.yaml
- raml08.yaml
- raml10.yaml
- stoplight.json
- stoplight.yaml

The stoplight format actually returns OAS (Swagger 2) with x-stoplight annotations. If you are exporting with the intent on importing back into Stoplight, this export format preserves the most information.

### Example URL:

`https://api.stoplight.io/v1/versions/123/export/oas.json`

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GetVersionsVersionIdExportFormat(new GetVersionsVersionIdExportFormatRequest
    {
        VersionId = "some example string",
        Format = Format.OasJson,
    });
    // TODO: Handle 'response' of type JsonElement
}
catch (ApiException<GetVersionsVersionIdExportFormatError> ex)
{
    if (ex.Error.TryGetAnonymousObject(out var error))
    {
        // TODO: Handle 'error' of type object
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetVersionsVersionIdExportFormatRequest](src/Stoplight/Requests/GetVersionsVersionIdExportFormatRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>JsonElement</code>

**OnError**: <code>[ApiException](src/Stoplight/Core/Exceptions/ApiException.cs)&lt;[GetVersionsVersionIdExportFormatError](src/Stoplight/Errors/GetVersionsVersionIdExportFormatError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VersionsPublishAnonResponse&gt; PostVersionsPublishAnon(PostVersionsPublishAnonRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Anonymously publish to API Docs.

This endpoint will take a JSON spec or a URL to a swagger or raml spec.

```
{
"specData": {...}
}
```

or

```
{
"url": "http://petstore.swagger.io/v2/swagger.json"
}
```

The spec will be published to api-docs.io anonymously, which means you will not be able to update or remove this documentation.

The response will contain a url to the published documentation.

```
{
"url": "https://swagger-petstore.api-docs.io/v1.0.0"
}
```

The limitations of anonymous publishing
* Cannot update/remove the documentation
* Cannot choose the subdomain
* Cannot choose the version
* Cannot add theming

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PostVersionsPublishAnon(new PostVersionsPublishAnonRequest());
    // TODO: Handle 'response' of type VersionsPublishAnonResponse
}
catch (ApiException<PostVersionsPublishAnonError> ex)
{
    if (ex.Error.TryGetAnonymousObject(out var error))
    {
        // TODO: Handle 'error' of type object
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostVersionsPublishAnonRequest](src/Stoplight/Requests/PostVersionsPublishAnonRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VersionsPublishAnonResponse](src/Stoplight/Models/VersionsPublishAnonResponse.cs)</code>

**OnError**: <code>[ApiException](src/Stoplight/Core/Exceptions/ApiException.cs)&lt;[PostVersionsPublishAnonError](src/Stoplight/Errors/PostVersionsPublishAnonError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VersionsPublishResponse&gt; PostVersionsVersionIdPublish(PostVersionsVersionIdPublishRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Re-publish an API version in Stoplight. This will re-publish the given API version, with whatever publish settings have already been setup in the app.

This will only work with APIs that have previously been published at least once.

This works well with the #endpoint:957qEfc97BB5XGAeZ endpoint to augment your continuous integration processes, and automatically re-publish your documentation when certain events happen. Once such scenario is:

1. Swagger is generated from your codebase, and pushed up to Github.
2. A simple script that you write sends a request to the Stoplight API to import the new specification, passing in the URL to the swagger file on Github.
3. After the import succeeds, and your API in Stoplight is up to date, the script sends a request to the Stoplight API (this endpoint) to re-publish your documentation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PostVersionsVersionIdPublish(new PostVersionsVersionIdPublishRequest
    {
        VersionId = "some example string",
    });
    // TODO: Handle 'response' of type VersionsPublishResponse
}
catch (ApiException<PostVersionsVersionIdPublishError> ex)
{
    if (ex.Error.TryGetAnonymousObject(out var error))
    {
        // TODO: Handle 'error' of type object
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostVersionsVersionIdPublishRequest](src/Stoplight/Requests/PostVersionsVersionIdPublishRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VersionsPublishResponse](src/Stoplight/Models/VersionsPublishResponse.cs)</code>

**OnError**: <code>[ApiException](src/Stoplight/Core/Exceptions/ApiException.cs)&lt;[PostVersionsVersionIdPublishError](src/Stoplight/Errors/PostVersionsVersionIdPublishError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VersionsImportResponse&gt; PutVersionsVersionIdImport(PutVersionsVersionIdImportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Import the given specification into an existing version.

**Warning, this is a destructive action! Any resources present in both the existing version, and the specification being imported, will be overwritten.**

This endpoint is particularly useful when you manage a specification file (Swagger or RAML) outside of Stoplight, and want to keep your Stoplight API version up to date as that specification changes.

By default, a "merge" is performed when importing. If a resource exists in the specification that you are importing, and in the Stoplight API, the resource will be overwritten. If a resource exists in the Stoplight API, but not in the spefication that you are importing, the resource will be left alone (and not deleted).

You can include an optional `options` property in the request body, to indicate if you would like to perform more of a replacement (instead of a merge). The options are documented in full in the response definition below these notes.

Take this request + request body for example:

`PUT https://api.stoplight.io/v1/versions/123/import`
```json
{
"url": "http://petstore.swagger.io/v2/swagger.json",
"options": {
"removeExtraEndpoints": true,
"removeExtraSchemas": true
}
}
```

This request will grab the swagger specification described at `http://petstore.swagger.io/v2/swagger.json`, and import it into the Stoplight API version with id `123`. Additionally, it will delete any existing endpoints or models that are not described in the petstore swagger being imported.

Instead of a URL, you can provide the actual specification to be imported, either as a string (in the case of YAML) or an object (in the case of JSON). That request would look something like this:

`PUT https://api.stoplight.io/v1/versions/123/import`
```json
{
"specData": {
"swagger": "2.0",
"info": {}
... rest of spec
}
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
    var response = await client.PutVersionsVersionIdImport(new PutVersionsVersionIdImportRequest
    {
        VersionId = "some example string",
    });
    // TODO: Handle 'response' of type VersionsImportResponse
}
catch (ApiException<PutVersionsVersionIdImportError> ex)
{
    if (ex.Error.TryGetAnonymousObject(out var error))
    {
        // TODO: Handle 'error' of type object
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PutVersionsVersionIdImportRequest](src/Stoplight/Requests/PutVersionsVersionIdImportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VersionsImportResponse](src/Stoplight/Models/VersionsImportResponse.cs)</code>

**OnError**: <code>[ApiException](src/Stoplight/Core/Exceptions/ApiException.cs)&lt;[PutVersionsVersionIdImportError](src/Stoplight/Errors/PutVersionsVersionIdImportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VersionsUnpublishResponse&gt; PutVersionsVersionIdUnpublish(PutVersionsVersionIdUnpublishRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Unpublish the documentation associated with the given API version.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PutVersionsVersionIdUnpublish(new PutVersionsVersionIdUnpublishRequest
    {
        VersionId = "some example string",
    });
    // TODO: Handle 'response' of type VersionsUnpublishResponse
}
catch (ApiException<PutVersionsVersionIdUnpublishError> ex)
{
    if (ex.Error.TryGetAnonymousObject(out var error))
    {
        // TODO: Handle 'error' of type object
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PutVersionsVersionIdUnpublishRequest](src/Stoplight/Requests/PutVersionsVersionIdUnpublishRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VersionsUnpublishResponse](src/Stoplight/Models/VersionsUnpublishResponse.cs)</code>

**OnError**: <code>[ApiException](src/Stoplight/Core/Exceptions/ApiException.cs)&lt;[PutVersionsVersionIdUnpublishError](src/Stoplight/Errors/PutVersionsVersionIdUnpublishError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

