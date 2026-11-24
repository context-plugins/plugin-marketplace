# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [StoplightClient](stoplight/client.py)

<details>
<summary><code>def get_versions_version_id_export_format(*, version_id: str = "", format_: FormatOrStr = Format.OAS_JSON, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.get_versions_version_id_export_format(version_id="some example string", format_=Format.OAS_JSON)
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetVersionsVersionIdExportFormatErrorBody
```

**Async**

```python
try:
    response = await async_client.get_versions_version_id_export_format(
        version_id="some example string", format_=Format.OAS_JSON
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetVersionsVersionIdExportFormatErrorBody
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

**OnSuccess**: <code>Any</code>

**OnError**: <code>[ApiError](stoplight/core/exceptions.py)&#91;[GetVersionsVersionIdExportFormatErrorBody](stoplight/errors/get_versions_version_id_export_format_error.py)&#93;</code>

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
<summary><code>def post_versions_publish_anon(*, body: VersionsPublishAnonRequest | VersionsPublishAnonRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> VersionsPublishAnonResponse</code></summary>

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
try:
    response = client.post_versions_publish_anon()
    # TODO: Handle 'response' of type VersionsPublishAnonResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostVersionsPublishAnonErrorBody
```

**Async**

```python
try:
    response = await async_client.post_versions_publish_anon()
    # TODO: Handle 'response' of type VersionsPublishAnonResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostVersionsPublishAnonErrorBody
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

**OnSuccess**: <code>[VersionsPublishAnonResponse](stoplight/models/versions_publish_anon_response.py)</code>

**OnError**: <code>[ApiError](stoplight/core/exceptions.py)&#91;[PostVersionsPublishAnonErrorBody](stoplight/errors/post_versions_publish_anon_error.py)&#93;</code>

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
<summary><code>def post_versions_version_id_publish(version_id: str, *, request_options: RequestOptionsOrDict | None = None) -> VersionsPublishResponse</code></summary>

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
try:
    response = client.post_versions_version_id_publish("some example string")
    # TODO: Handle 'response' of type VersionsPublishResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostVersionsVersionIdPublishErrorBody
```

**Async**

```python
try:
    response = await async_client.post_versions_version_id_publish("some example string")
    # TODO: Handle 'response' of type VersionsPublishResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostVersionsVersionIdPublishErrorBody
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

**OnSuccess**: <code>[VersionsPublishResponse](stoplight/models/versions_publish_response.py)</code>

**OnError**: <code>[ApiError](stoplight/core/exceptions.py)&#91;[PostVersionsVersionIdPublishErrorBody](stoplight/errors/post_versions_version_id_publish_error.py)&#93;</code>

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
<summary><code>def put_versions_version_id_import(version_id: str, *, body: VersionsImportRequest | VersionsImportRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> VersionsImportResponse</code></summary>

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
try:
    response = client.put_versions_version_id_import("some example string")
    # TODO: Handle 'response' of type VersionsImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutVersionsVersionIdImportErrorBody
```

**Async**

```python
try:
    response = await async_client.put_versions_version_id_import("some example string")
    # TODO: Handle 'response' of type VersionsImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutVersionsVersionIdImportErrorBody
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

**OnSuccess**: <code>[VersionsImportResponse](stoplight/models/versions_import_response.py)</code>

**OnError**: <code>[ApiError](stoplight/core/exceptions.py)&#91;[PutVersionsVersionIdImportErrorBody](stoplight/errors/put_versions_version_id_import_error.py)&#93;</code>

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
<summary><code>def put_versions_version_id_unpublish(version_id: str, *, request_options: RequestOptionsOrDict | None = None) -> VersionsUnpublishResponse</code></summary>

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
try:
    response = client.put_versions_version_id_unpublish("some example string")
    # TODO: Handle 'response' of type VersionsUnpublishResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutVersionsVersionIdUnpublishErrorBody
```

**Async**

```python
try:
    response = await async_client.put_versions_version_id_unpublish("some example string")
    # TODO: Handle 'response' of type VersionsUnpublishResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutVersionsVersionIdUnpublishErrorBody
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

**OnSuccess**: <code>[VersionsUnpublishResponse](stoplight/models/versions_unpublish_response.py)</code>

**OnError**: <code>[ApiError](stoplight/core/exceptions.py)&#91;[PutVersionsVersionIdUnpublishErrorBody](stoplight/errors/put_versions_version_id_unpublish_error.py)&#93;</code>

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

