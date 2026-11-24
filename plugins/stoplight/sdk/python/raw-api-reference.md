# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [StoplightClient](stoplight/client.py)

<details>
<summary><code>def get_versions_version_id_export_format(*, version_id: str = "", format_: FormatOrStr = Format.OAS_JSON, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, GetVersionsVersionIdExportFormatErrorBody]</code></summary>

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

**Sync**

```python
result = client.with_raw_response.get_versions_version_id_export_format(
    version_id="some example string", format_=Format.OAS_JSON
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetVersionsVersionIdExportFormatErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.get_versions_version_id_export_format(
    version_id="some example string", format_=Format.OAS_JSON
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetVersionsVersionIdExportFormatErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>version_id</code> | <code>str</code> | This is the unique identifier for the version.<br>**Default**: <code>""</code> |
| <code>format_</code> | <code>[FormatOrStr](stoplight/models/enums/format.py)</code> | The specification / format that you want to export.<br>**Default**: <code>Format.OAS_JSON</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](stoplight/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](stoplight/core/results.py)&#91;Any, [GetVersionsVersionIdExportFormatErrorBody](stoplight/errors/get_versions_version_id_export_format_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code>

**On `Failure`**: `error` is <code>[GetVersionsVersionIdExportFormatErrorBody](stoplight/errors/get_versions_version_id_export_format_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>Any</code> |
| anything unmapped | <code>[RawError](stoplight/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_versions_publish_anon(*, body: VersionsPublishAnonRequest | VersionsPublishAnonRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[VersionsPublishAnonResponse, PostVersionsPublishAnonErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Anonymously publish to API Docs.

This endpoint will take a JSON spec or a URL to a swagger or raml spec.

``
{
"specData": {...}
}
``

or

``
{
"url": "http://petstore.swagger.io/v2/swagger.json"
}
``

The spec will be published to api-docs.io anonymously, which means you will not be able to update or remove this documentation.

The response will contain a url to the published documentation.

``
{
"url": "https://swagger-petstore.api-docs.io/v1.0.0"
}
``

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

**Sync**

```python
result = client.with_raw_response.post_versions_publish_anon()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VersionsPublishAnonResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostVersionsPublishAnonErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.post_versions_publish_anon()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VersionsPublishAnonResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostVersionsPublishAnonErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[VersionsPublishAnonRequest](stoplight/models/versions_publish_anon_request.py) \| [VersionsPublishAnonRequestDict](stoplight/models/versions_publish_anon_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](stoplight/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](stoplight/core/results.py)&#91;[VersionsPublishAnonResponse](stoplight/models/versions_publish_anon_response.py), [PostVersionsPublishAnonErrorBody](stoplight/errors/post_versions_publish_anon_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[VersionsPublishAnonResponse](stoplight/models/versions_publish_anon_response.py)</code>

**On `Failure`**: `error` is <code>[PostVersionsPublishAnonErrorBody](stoplight/errors/post_versions_publish_anon_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 500 | <code>Any</code> |
| anything unmapped | <code>[RawError](stoplight/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_versions_version_id_publish(version_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[VersionsPublishResponse, PostVersionsVersionIdPublishErrorBody]</code></summary>

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

**Sync**

```python
result = client.with_raw_response.post_versions_version_id_publish("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VersionsPublishResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostVersionsVersionIdPublishErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.post_versions_version_id_publish("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VersionsPublishResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostVersionsVersionIdPublishErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>version_id</code> | <code>str</code> | This is the unique identifier for the version. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](stoplight/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](stoplight/core/results.py)&#91;[VersionsPublishResponse](stoplight/models/versions_publish_response.py), [PostVersionsVersionIdPublishErrorBody](stoplight/errors/post_versions_version_id_publish_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[VersionsPublishResponse](stoplight/models/versions_publish_response.py)</code>

**On `Failure`**: `error` is <code>[PostVersionsVersionIdPublishErrorBody](stoplight/errors/post_versions_version_id_publish_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>Any</code> |
| anything unmapped | <code>[RawError](stoplight/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_versions_version_id_import(version_id: str, *, body: VersionsImportRequest | VersionsImportRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[VersionsImportResponse, PutVersionsVersionIdImportErrorBody]</code></summary>

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
``json
{
"url": "http://petstore.swagger.io/v2/swagger.json",
"options": {
"removeExtraEndpoints": true,
"removeExtraSchemas": true
}
}
``

This request will grab the swagger specification described at `http://petstore.swagger.io/v2/swagger.json`, and import it into the Stoplight API version with id `123`. Additionally, it will delete any existing endpoints or models that are not described in the petstore swagger being imported.

Instead of a URL, you can provide the actual specification to be imported, either as a string (in the case of YAML) or an object (in the case of JSON). That request would look something like this:

`PUT https://api.stoplight.io/v1/versions/123/import`
``json
{
"specData": {
"swagger": "2.0",
"info": {}
... rest of spec
}
}
``

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.put_versions_version_id_import("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VersionsImportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PutVersionsVersionIdImportErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.put_versions_version_id_import("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VersionsImportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PutVersionsVersionIdImportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>version_id</code> | <code>str</code> | This is the unique identifier for the version. |
| <code>body</code> | <code>[VersionsImportRequest](stoplight/models/versions_import_request.py) \| [VersionsImportRequestDict](stoplight/models/versions_import_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](stoplight/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](stoplight/core/results.py)&#91;[VersionsImportResponse](stoplight/models/versions_import_response.py), [PutVersionsVersionIdImportErrorBody](stoplight/errors/put_versions_version_id_import_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[VersionsImportResponse](stoplight/models/versions_import_response.py)</code>

**On `Failure`**: `error` is <code>[PutVersionsVersionIdImportErrorBody](stoplight/errors/put_versions_version_id_import_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>Any</code> |
| anything unmapped | <code>[RawError](stoplight/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_versions_version_id_unpublish(version_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[VersionsUnpublishResponse, PutVersionsVersionIdUnpublishErrorBody]</code></summary>

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

**Sync**

```python
result = client.with_raw_response.put_versions_version_id_unpublish("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VersionsUnpublishResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PutVersionsVersionIdUnpublishErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.put_versions_version_id_unpublish("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VersionsUnpublishResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PutVersionsVersionIdUnpublishErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>version_id</code> | <code>str</code> | This is the unique identifier for the version. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](stoplight/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](stoplight/core/results.py)&#91;[VersionsUnpublishResponse](stoplight/models/versions_unpublish_response.py), [PutVersionsVersionIdUnpublishErrorBody](stoplight/errors/put_versions_version_id_unpublish_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[VersionsUnpublishResponse](stoplight/models/versions_unpublish_response.py)</code>

**On `Failure`**: `error` is <code>[PutVersionsVersionIdUnpublishErrorBody](stoplight/errors/put_versions_version_id_unpublish_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>Any</code> |
| anything unmapped | <code>[RawError](stoplight/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

