# Reference

> Source: [StoplightClient](src/client.ts)

<details>
<summary><code>getVersionsVersionIdExportFormat(request: StoplightClient.GetVersionsVersionIdExportFormatRequest, options?: RequestOptions): ApiPromise&lt;unknown, StoplightClient.GetVersionsVersionIdExportFormatError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getVersionsVersionIdExportFormat({
    versionId: "some example string",
    format: Format.OasJson,
  });
  // TODO: Handle 'response' of type unknown
} catch (err) {
  // TODO: Handle 'err' of type StoplightClient.GetVersionsVersionIdExportFormatError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .getVersionsVersionIdExportFormat({ versionId: "some example string", format: Format.OasJson })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type unknown
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>versionId</code> | <code>string</code> | This is the unique identifier for the version. |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | The specification / format that you want to export.<br>**Default**: "oas.json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getVersionsVersionIdExportFormat(request)`

- **OnSuccess**: <code>unknown</code>
- **OnError**: throws <code>[StoplightClient.GetVersionsVersionIdExportFormatError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getVersionsVersionIdExportFormat(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;unknown, StoplightClient.GetVersionsVersionIdExportFormatError&gt;</code>, with `result.value` of type <code>unknown</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StoplightError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postVersionsPublishAnon(request?: StoplightClient.PostVersionsPublishAnonRequest, options?: RequestOptions): ApiPromise&lt;VersionsPublishAnonResponse, StoplightClient.PostVersionsPublishAnonError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.postVersionsPublishAnon();
  // TODO: Handle 'response' of type VersionsPublishAnonResponse
} catch (err) {
  // TODO: Handle 'err' of type StoplightClient.PostVersionsPublishAnonError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.postVersionsPublishAnon().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VersionsPublishAnonResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[VersionsPublishAnonRequest](src/models/versions-publish-anon-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.postVersionsPublishAnon(request)`

- **OnSuccess**: <code>[VersionsPublishAnonResponse](src/models/versions-publish-anon-response.ts)</code>
- **OnError**: throws <code>[StoplightClient.PostVersionsPublishAnonError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.postVersionsPublishAnon(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VersionsPublishAnonResponse, StoplightClient.PostVersionsPublishAnonError&gt;</code>, with `result.value` of type <code>[VersionsPublishAnonResponse](src/models/versions-publish-anon-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StoplightError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postVersionsVersionIdPublish(request: StoplightClient.PostVersionsVersionIdPublishRequest, options?: RequestOptions): ApiPromise&lt;VersionsPublishResponse, StoplightClient.PostVersionsVersionIdPublishError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.postVersionsVersionIdPublish({ versionId: "some example string" });
  // TODO: Handle 'response' of type VersionsPublishResponse
} catch (err) {
  // TODO: Handle 'err' of type StoplightClient.PostVersionsVersionIdPublishError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.postVersionsVersionIdPublish({ versionId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VersionsPublishResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>versionId</code> | <code>string</code> | This is the unique identifier for the version. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.postVersionsVersionIdPublish(request)`

- **OnSuccess**: <code>[VersionsPublishResponse](src/models/versions-publish-response.ts)</code>
- **OnError**: throws <code>[StoplightClient.PostVersionsVersionIdPublishError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.postVersionsVersionIdPublish(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VersionsPublishResponse, StoplightClient.PostVersionsVersionIdPublishError&gt;</code>, with `result.value` of type <code>[VersionsPublishResponse](src/models/versions-publish-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StoplightError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putVersionsVersionIdImport(request: StoplightClient.PutVersionsVersionIdImportRequest, options?: RequestOptions): ApiPromise&lt;VersionsImportResponse, StoplightClient.PutVersionsVersionIdImportError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.putVersionsVersionIdImport({ versionId: "some example string" });
  // TODO: Handle 'response' of type VersionsImportResponse
} catch (err) {
  // TODO: Handle 'err' of type StoplightClient.PutVersionsVersionIdImportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.putVersionsVersionIdImport({ versionId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VersionsImportResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>versionId</code> | <code>string</code> | This is the unique identifier for the version. |
| <code>body?</code> | <code>[VersionsImportRequest](src/models/versions-import-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.putVersionsVersionIdImport(request)`

- **OnSuccess**: <code>[VersionsImportResponse](src/models/versions-import-response.ts)</code>
- **OnError**: throws <code>[StoplightClient.PutVersionsVersionIdImportError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.putVersionsVersionIdImport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VersionsImportResponse, StoplightClient.PutVersionsVersionIdImportError&gt;</code>, with `result.value` of type <code>[VersionsImportResponse](src/models/versions-import-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StoplightError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putVersionsVersionIdUnpublish(request: StoplightClient.PutVersionsVersionIdUnpublishRequest, options?: RequestOptions): ApiPromise&lt;VersionsUnpublishResponse, StoplightClient.PutVersionsVersionIdUnpublishError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Unpublish the documentation associated with the given API version.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.putVersionsVersionIdUnpublish({ versionId: "some example string" });
  // TODO: Handle 'response' of type VersionsUnpublishResponse
} catch (err) {
  // TODO: Handle 'err' of type StoplightClient.PutVersionsVersionIdUnpublishError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.putVersionsVersionIdUnpublish({ versionId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VersionsUnpublishResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>versionId</code> | <code>string</code> | This is the unique identifier for the version. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.putVersionsVersionIdUnpublish(request)`

- **OnSuccess**: <code>[VersionsUnpublishResponse](src/models/versions-unpublish-response.ts)</code>
- **OnError**: throws <code>[StoplightClient.PutVersionsVersionIdUnpublishError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.putVersionsVersionIdUnpublish(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VersionsUnpublishResponse, StoplightClient.PutVersionsVersionIdUnpublishError&gt;</code>, with `result.value` of type <code>[VersionsUnpublishResponse](src/models/versions-unpublish-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StoplightError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

