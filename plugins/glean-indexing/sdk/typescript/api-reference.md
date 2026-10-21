# Reference

> Source: [GleanIndexingApiClient](src/client.ts)

## Datasources

> Source: [Datasources](src/resources/datasources.ts)

<details>
<summary><code>addOrUpdateDatasource(request: Datasources.AddOrUpdateDatasourceRequest, options?: RequestOptions): ApiPromise&lt;undefined, Datasources.AddOrUpdateDatasourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add or update a custom datasource and its schema.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.datasources.addOrUpdateDatasource({ body: { name: "some example string" } });
} catch (err) {
  // TODO: Handle 'err' of type Datasources.AddOrUpdateDatasourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasources.addOrUpdateDatasource({
  body: { name: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>body</code> | <code>[CustomDatasourceConfig](src/models/custom-datasource-config.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasources.addOrUpdateDatasource(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Datasources.AddOrUpdateDatasourceError](src/resources/datasources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasources.addOrUpdateDatasource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Datasources.AddOrUpdateDatasourceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDatasourceConfig(request: Datasources.GetDatasourceConfigRequestParams, options?: RequestOptions): ApiPromise&lt;CustomDatasourceConfig, Datasources.GetDatasourceConfigError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches the datasource config for the specified custom datasource.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datasources.getDatasourceConfig({
    body: { datasource: "some example string" },
  });
  // TODO: Handle 'response' of type CustomDatasourceConfig
} catch (err) {
  // TODO: Handle 'err' of type Datasources.GetDatasourceConfigError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasources.getDatasourceConfig({
  body: { datasource: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomDatasourceConfig
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
| <code>body</code> | <code>[GetDatasourceConfigRequest](src/models/get-datasource-config-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasources.getDatasourceConfig(request)`

- **OnSuccess**: <code>[CustomDatasourceConfig](src/models/custom-datasource-config.ts)</code>
- **OnError**: throws <code>[Datasources.GetDatasourceConfigError](src/resources/datasources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasources.getDatasourceConfig(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomDatasourceConfig, Datasources.GetDatasourceConfigError&gt;</code>, with `result.value` of type <code>[CustomDatasourceConfig](src/models/custom-datasource-config.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>submitDatasourceData(request: Datasources.SubmitDatasourceDataRequest, options?: RequestOptions): ApiPromise&lt;RestApiIndexSubmissionsResponse, Datasources.SubmitDatasourceDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validates and asynchronously processes a datasource-specific submission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.datasources.submitDatasourceData({
    datasourceInstance: "some example string",
    type: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type RestApiIndexSubmissionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Datasources.SubmitDatasourceDataError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasources.submitDatasourceData({
  datasourceInstance: "some example string",
  type: "some example string",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RestApiIndexSubmissionsResponse
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
| <code>datasourceInstance</code> | <code>string</code> | Datasource instance that should process the submission |
| <code>type</code> | <code>string</code> | Submission type registered for the datasource |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasources.submitDatasourceData(request)`

- **OnSuccess**: <code>[RestApiIndexSubmissionsResponse](src/models/rest-api-index-submissions-response.ts)</code>
- **OnError**: throws <code>[Datasources.SubmitDatasourceDataError](src/resources/datasources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasources.submitDatasourceData(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RestApiIndexSubmissionsResponse, Datasources.SubmitDatasourceDataError&gt;</code>, with `result.value` of type <code>[RestApiIndexSubmissionsResponse](src/models/rest-api-index-submissions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DocumentsApi

> Source: [DocumentsApi](src/resources/documents-api.ts)

<details>
<summary><code>bulkIndexDocuments(request: DocumentsApi.BulkIndexDocumentsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, DocumentsApi.BulkIndexDocumentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replaces the documents in a datasource using paginated batch API calls. Please refer to the [bulk indexing](https://developers.glean.com/indexing/documents/bulk-upload-model) documentation for an explanation of how to use bulk endpoints.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.documentsApi.bulkIndexDocuments({
    body: {
      uploadId: "some example string",
      datasource: "some example string",
      documents: [{ datasource: "some example string" }],
    },
  });
} catch (err) {
  // TODO: Handle 'err' of type DocumentsApi.BulkIndexDocumentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documentsApi.bulkIndexDocuments({
  body: {
    uploadId: "some example string",
    datasource: "some example string",
    documents: [{ datasource: "some example string" }],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>body</code> | <code>[BulkIndexDocumentsRequest](src/models/bulk-index-documents-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documentsApi.bulkIndexDocuments(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DocumentsApi.BulkIndexDocumentsError](src/resources/documents-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documentsApi.bulkIndexDocuments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DocumentsApi.BulkIndexDocumentsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteDocument(request: DocumentsApi.DeleteDocumentRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, DocumentsApi.DeleteDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified document from the index. Succeeds if document is not present.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.documentsApi.deleteDocument({
    body: { datasource: "some example string", objectType: "some example string", id: "some example string" },
  });
} catch (err) {
  // TODO: Handle 'err' of type DocumentsApi.DeleteDocumentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documentsApi.deleteDocument({
  body: { datasource: "some example string", objectType: "some example string", id: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>body</code> | <code>[DeleteDocumentRequest](src/models/delete-document-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documentsApi.deleteDocument(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DocumentsApi.DeleteDocumentError](src/resources/documents-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documentsApi.deleteDocument(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DocumentsApi.DeleteDocumentError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>indexDocument(request: DocumentsApi.IndexDocumentRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, DocumentsApi.IndexDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a document to the index or updates an existing document.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.documentsApi.indexDocument({ body: { document: { datasource: "some example string" } } });
} catch (err) {
  // TODO: Handle 'err' of type DocumentsApi.IndexDocumentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documentsApi.indexDocument({
  body: { document: { datasource: "some example string" } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>body</code> | <code>[IndexDocumentRequest](src/models/index-document-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documentsApi.indexDocument(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DocumentsApi.IndexDocumentError](src/resources/documents-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documentsApi.indexDocument(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DocumentsApi.IndexDocumentError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>indexDocuments(request: DocumentsApi.IndexDocumentsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, DocumentsApi.IndexDocumentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds or updates multiple documents in the index. Please refer to the [bulk indexing](https://developers.glean.com/indexing/documents/bulk-indexing/choosing-indexdocuments-vs-bulkindexdocuments) documentation for an explanation of when to use this endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.documentsApi.indexDocuments({
    body: { datasource: "some example string", documents: [{ datasource: "some example string" }] },
  });
} catch (err) {
  // TODO: Handle 'err' of type DocumentsApi.IndexDocumentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documentsApi.indexDocuments({
  body: { datasource: "some example string", documents: [{ datasource: "some example string" }] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>body</code> | <code>[IndexDocumentsRequest](src/models/index-documents-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documentsApi.indexDocuments(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DocumentsApi.IndexDocumentsError](src/resources/documents-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documentsApi.indexDocuments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DocumentsApi.IndexDocumentsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>schedulesTheProcessingOfUploadedDocuments(request: DocumentsApi.SchedulesTheProcessingOfUploadedDocumentsRequest, options?: RequestOptions): ApiPromise&lt;undefined, DocumentsApi.SchedulesTheProcessingOfUploadedDocumentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Schedules the immediate processing of documents uploaded through the indexing API. By default the uploaded documents will be processed asynchronously but this API can be used to schedule processing of all documents on demand.

If a `datasource` parameter is specified, processing is limited to that custom datasource. Without it, processing applies to all documents across all custom datasources.
#### Rate Limits
This endpoint is rate-limited to one usage every 3 hours. Exceeding this limit results in a 429 response code. Here's how the rate limit works:
1. Calling `/processalldocuments` for datasource `foo` prevents another call for `foo` for 3 hours.
2. Calling `/processalldocuments` for datasource `foo` doesn't affect immediate calls for `bar`.
3. Calling `/processalldocuments` for all datasources prevents any datasource calls for 3 hours.
4. Calling `/processalldocuments` for datasource `foo` doesn't affect immediate calls for all datasources.

For more frequent document processing, contact Glean support.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.documentsApi.schedulesTheProcessingOfUploadedDocuments();
} catch (err) {
  // TODO: Handle 'err' of type DocumentsApi.SchedulesTheProcessingOfUploadedDocumentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documentsApi.schedulesTheProcessingOfUploadedDocuments().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>body?</code> | <code>[ProcessAllDocumentsRequest](src/models/process-all-documents-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documentsApi.schedulesTheProcessingOfUploadedDocuments(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DocumentsApi.SchedulesTheProcessingOfUploadedDocumentsError](src/resources/documents-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documentsApi.schedulesTheProcessingOfUploadedDocuments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DocumentsApi.SchedulesTheProcessingOfUploadedDocumentsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateDocumentPermissions(request: DocumentsApi.UpdateDocumentPermissionsRequest, options?: RequestOptions): ApiPromise&lt;undefined, DocumentsApi.UpdateDocumentPermissionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the permissions for a given document without modifying document content.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.documentsApi.updateDocumentPermissions({
    body: { datasource: "some example string", permissions: {} },
  });
} catch (err) {
  // TODO: Handle 'err' of type DocumentsApi.UpdateDocumentPermissionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documentsApi.updateDocumentPermissions({
  body: { datasource: "some example string", permissions: {} },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>body</code> | <code>[UpdatePermissionsRequest](src/models/update-permissions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documentsApi.updateDocumentPermissions(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DocumentsApi.UpdateDocumentPermissionsError](src/resources/documents-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documentsApi.updateDocumentPermissions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DocumentsApi.UpdateDocumentPermissionsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## People

> Source: [People](src/resources/people.ts)

<details>
<summary><code>bulkIndexEmployees(options?: RequestOptions): ApiPromise&lt;undefined, People.BulkIndexEmployeesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replaces all the currently indexed employees using paginated batch API calls. Please refer to the [bulk indexing](https://developers.glean.com/indexing/documents/bulk-upload-model) documentation for an explanation of how to use bulk endpoints.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.people.bulkIndexEmployees();
} catch (err) {
  // TODO: Handle 'err' of type People.BulkIndexEmployeesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.people.bulkIndexEmployees().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.people.bulkIndexEmployees()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[People.BulkIndexEmployeesError](src/resources/people.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.people.bulkIndexEmployees().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, People.BulkIndexEmployeesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkIndexEmployees1(options?: RequestOptions): ApiPromise&lt;undefined, People.BulkIndexEmployees1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk upload details of all the employees. This deletes all employees uploaded in the prior batch. SOON TO BE DEPRECATED in favor of /bulkindexemployees.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.people.bulkIndexEmployees1();
} catch (err) {
  // TODO: Handle 'err' of type People.BulkIndexEmployees1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.people.bulkIndexEmployees1().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.people.bulkIndexEmployees1()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[People.BulkIndexEmployees1Error](src/resources/people.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.people.bulkIndexEmployees1().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, People.BulkIndexEmployees1Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkIndexTeams(options?: RequestOptions): ApiPromise&lt;undefined, People.BulkIndexTeamsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replaces all the currently indexed teams using paginated batch API calls. Please refer to the [bulk indexing](https://developers.glean.com/indexing/documents/bulk-upload-model) documentation for an explanation of how to use bulk endpoints.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.people.bulkIndexTeams();
} catch (err) {
  // TODO: Handle 'err' of type People.BulkIndexTeamsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.people.bulkIndexTeams().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.people.bulkIndexTeams()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[People.BulkIndexTeamsError](src/resources/people.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.people.bulkIndexTeams().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, People.BulkIndexTeamsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteEmployee(options?: RequestOptions): ApiPromise&lt;undefined, People.DeleteEmployeeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an employee. Silently succeeds if employee is not present.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.people.deleteEmployee();
} catch (err) {
  // TODO: Handle 'err' of type People.DeleteEmployeeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.people.deleteEmployee().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.people.deleteEmployee()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[People.DeleteEmployeeError](src/resources/people.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.people.deleteEmployee().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, People.DeleteEmployeeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteTeam(options?: RequestOptions): ApiPromise&lt;undefined, People.DeleteTeamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a team based on provided id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.people.deleteTeam();
} catch (err) {
  // TODO: Handle 'err' of type People.DeleteTeamError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.people.deleteTeam().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.people.deleteTeam()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[People.DeleteTeamError](src/resources/people.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.people.deleteTeam().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, People.DeleteTeamError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>indexEmployee(options?: RequestOptions): ApiPromise&lt;undefined, People.IndexEmployeeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds an employee or replaces the existing information about an employee.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.people.indexEmployee();
} catch (err) {
  // TODO: Handle 'err' of type People.IndexEmployeeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.people.indexEmployee().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.people.indexEmployee()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[People.IndexEmployeeError](src/resources/people.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.people.indexEmployee().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, People.IndexEmployeeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>indexTeam(options?: RequestOptions): ApiPromise&lt;undefined, People.IndexTeamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a team or updates information about a team

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.people.indexTeam();
} catch (err) {
  // TODO: Handle 'err' of type People.IndexTeamError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.people.indexTeam().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.people.indexTeam()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[People.IndexTeamError](src/resources/people.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.people.indexTeam().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, People.IndexTeamError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>schedulesTheProcessingOfUploadedEmployeesAndTeams(options?: RequestOptions): ApiPromise&lt;undefined, People.SchedulesTheProcessingOfUploadedEmployeesAndTeamsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Schedules the immediate processing of employees and teams uploaded through the indexing API. By default all uploaded people data will be processed asynchronously but this API can be used to schedule its processing on demand.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.people.schedulesTheProcessingOfUploadedEmployeesAndTeams();
} catch (err) {
  // TODO: Handle 'err' of type People.SchedulesTheProcessingOfUploadedEmployeesAndTeamsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.people.schedulesTheProcessingOfUploadedEmployeesAndTeams().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.people.schedulesTheProcessingOfUploadedEmployeesAndTeams()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[People.SchedulesTheProcessingOfUploadedEmployeesAndTeamsError](src/resources/people.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.people.schedulesTheProcessingOfUploadedEmployeesAndTeams().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, People.SchedulesTheProcessingOfUploadedEmployeesAndTeamsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Permissions

> Source: [Permissions](src/resources/permissions.ts)

<details>
<summary><code>betaUsers(request: Permissions.BetaUsersRequest, options?: RequestOptions): ApiPromise&lt;undefined, Permissions.BetaUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Allow the datasource be visible to the specified beta users. The default behaviour is datasource being visible to all users if it is enabled and not visible to any user if it is not enabled.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.permissions.betaUsers({
    body: { datasource: "some example string", emails: ["user@example.com"] },
  });
} catch (err) {
  // TODO: Handle 'err' of type Permissions.BetaUsersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.permissions.betaUsers({
  body: { datasource: "some example string", emails: ["user@example.com"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>body</code> | <code>[GreenlistUsersRequest](src/models/greenlist-users-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.permissions.betaUsers(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Permissions.BetaUsersError](src/resources/permissions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.permissions.betaUsers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Permissions.BetaUsersError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkIndexGroups(request: Permissions.BulkIndexGroupsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Permissions.BulkIndexGroupsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replaces the groups in a datasource using paginated batch API calls. Please refer to the [bulk indexing](https://developers.glean.com/indexing/documents/bulk-upload-model) documentation for an explanation of how to use bulk endpoints.
Note: Any groups deleted from the existing set will have their associated memberships deleted as well.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.permissions.bulkIndexGroups({
    body: {
      uploadId: "some example string",
      datasource: "some example string",
      groups: [{ name: "some example string" }],
    },
  });
} catch (err) {
  // TODO: Handle 'err' of type Permissions.BulkIndexGroupsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.permissions.bulkIndexGroups({
  body: {
    uploadId: "some example string",
    datasource: "some example string",
    groups: [{ name: "some example string" }],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>body</code> | <code>[BulkIndexGroupsRequest](src/models/bulk-index-groups-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.permissions.bulkIndexGroups(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Permissions.BulkIndexGroupsError](src/resources/permissions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.permissions.bulkIndexGroups(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Permissions.BulkIndexGroupsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkIndexMembershipsForAGroup(request: Permissions.BulkIndexMembershipsForAGroupRequest, options?: RequestOptions): ApiPromise&lt;undefined, Permissions.BulkIndexMembershipsForAGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replaces the memberships for a group in a datasource using paginated batch API calls. Please refer to the [bulk indexing](https://developers.glean.com/indexing/documents/bulk-upload-model) documentation for an explanation of how to use bulk endpoints.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.permissions.bulkIndexMembershipsForAGroup({
    body: { uploadId: "some example string", datasource: "some example string", memberships: [{}] },
  });
} catch (err) {
  // TODO: Handle 'err' of type Permissions.BulkIndexMembershipsForAGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.permissions.bulkIndexMembershipsForAGroup({
  body: { uploadId: "some example string", datasource: "some example string", memberships: [{}] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>body</code> | <code>[BulkIndexMembershipsRequest](src/models/bulk-index-memberships-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.permissions.bulkIndexMembershipsForAGroup(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Permissions.BulkIndexMembershipsForAGroupError](src/resources/permissions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.permissions.bulkIndexMembershipsForAGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Permissions.BulkIndexMembershipsForAGroupError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkIndexUsers(request: Permissions.BulkIndexUsersRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Permissions.BulkIndexUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replaces the users in a datasource using paginated batch API calls. Please refer to the [bulk indexing](https://developers.glean.com/indexing/documents/bulk-upload-model) documentation for an explanation of how to use bulk endpoints.
Note: Any users deleted from the existing set will have their associated memberships deleted as well.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.permissions.bulkIndexUsers({
    body: {
      uploadId: "some example string",
      datasource: "some example string",
      users: [{ email: "some example string", name: "some example string" }],
    },
  });
} catch (err) {
  // TODO: Handle 'err' of type Permissions.BulkIndexUsersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.permissions.bulkIndexUsers({
  body: {
    uploadId: "some example string",
    datasource: "some example string",
    users: [{ email: "some example string", name: "some example string" }],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>body</code> | <code>[BulkIndexUsersRequest](src/models/bulk-index-users-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.permissions.bulkIndexUsers(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Permissions.BulkIndexUsersError](src/resources/permissions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.permissions.bulkIndexUsers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Permissions.BulkIndexUsersError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteGroup(request: Permissions.DeleteGroupRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Permissions.DeleteGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete group from the datasource. Silently succeeds if group is not present.
Note: All memberships associated with the deleted group will also be deleted.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.permissions.deleteGroup({
    body: { datasource: "some example string", groupName: "some example string" },
  });
} catch (err) {
  // TODO: Handle 'err' of type Permissions.DeleteGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.permissions.deleteGroup({
  body: { datasource: "some example string", groupName: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>body</code> | <code>[DeleteGroupRequest](src/models/delete-group-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.permissions.deleteGroup(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Permissions.DeleteGroupError](src/resources/permissions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.permissions.deleteGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Permissions.DeleteGroupError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteMembership(request: Permissions.DeleteMembershipRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Permissions.DeleteMembershipError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete membership to a group in the specified datasource. Silently succeeds if membership is not present.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.permissions.deleteMembership({
    body: { datasource: "some example string", membership: { groupName: "some example string" } },
  });
} catch (err) {
  // TODO: Handle 'err' of type Permissions.DeleteMembershipError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.permissions.deleteMembership({
  body: { datasource: "some example string", membership: { groupName: "some example string" } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>body</code> | <code>[DeleteMembershipRequest](src/models/delete-membership-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.permissions.deleteMembership(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Permissions.DeleteMembershipError](src/resources/permissions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.permissions.deleteMembership(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Permissions.DeleteMembershipError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteUser(request: Permissions.DeleteUserRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Permissions.DeleteUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete the user from the datasource. Silently succeeds if user is not present.
Note: All memberships associated with the deleted user will also be deleted.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.permissions.deleteUser({
    body: { datasource: "some example string", email: "some example string" },
  });
} catch (err) {
  // TODO: Handle 'err' of type Permissions.DeleteUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.permissions.deleteUser({
  body: { datasource: "some example string", email: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>body</code> | <code>[DeleteUserRequest](src/models/delete-user-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.permissions.deleteUser(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Permissions.DeleteUserError](src/resources/permissions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.permissions.deleteUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Permissions.DeleteUserError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>indexGroup(request: Permissions.IndexGroupRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Permissions.IndexGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add or update a group in the datasource.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.permissions.indexGroup({
    body: { datasource: "some example string", group: { name: "some example string" } },
  });
} catch (err) {
  // TODO: Handle 'err' of type Permissions.IndexGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.permissions.indexGroup({
  body: { datasource: "some example string", group: { name: "some example string" } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>body</code> | <code>[IndexGroupRequest](src/models/index-group-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.permissions.indexGroup(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Permissions.IndexGroupError](src/resources/permissions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.permissions.indexGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Permissions.IndexGroupError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>indexMembership(request: Permissions.IndexMembershipRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Permissions.IndexMembershipError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add the memberships of a group in the datasource.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.permissions.indexMembership({
    body: { datasource: "some example string", membership: { groupName: "some example string" } },
  });
} catch (err) {
  // TODO: Handle 'err' of type Permissions.IndexMembershipError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.permissions.indexMembership({
  body: { datasource: "some example string", membership: { groupName: "some example string" } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>body</code> | <code>[IndexMembershipRequest](src/models/index-membership-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.permissions.indexMembership(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Permissions.IndexMembershipError](src/resources/permissions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.permissions.indexMembership(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Permissions.IndexMembershipError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>indexUser(request: Permissions.IndexUserRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Permissions.IndexUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a datasource user or updates an existing user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.permissions.indexUser({
    body: {
      datasource: "some example string",
      user: { email: "some example string", name: "some example string" },
    },
  });
} catch (err) {
  // TODO: Handle 'err' of type Permissions.IndexUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.permissions.indexUser({
  body: {
    datasource: "some example string",
    user: { email: "some example string", name: "some example string" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>body</code> | <code>[IndexUserRequest](src/models/index-user-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.permissions.indexUser(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Permissions.IndexUserError](src/resources/permissions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.permissions.indexUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Permissions.IndexUserError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>schedulesTheProcessingOfGroupMemberships(request: Permissions.SchedulesTheProcessingOfGroupMembershipsRequest, options?: RequestOptions): ApiPromise&lt;undefined, Permissions.SchedulesTheProcessingOfGroupMembershipsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Schedules the immediate processing of all group memberships uploaded through the indexing API. By default the uploaded group memberships will be processed asynchronously but this API can be used to schedule processing of all memberships on demand.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.permissions.schedulesTheProcessingOfGroupMemberships();
} catch (err) {
  // TODO: Handle 'err' of type Permissions.SchedulesTheProcessingOfGroupMembershipsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.permissions.schedulesTheProcessingOfGroupMemberships().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>body?</code> | <code>[ProcessAllMembershipsRequest](src/models/process-all-memberships-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.permissions.schedulesTheProcessingOfGroupMemberships(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Permissions.SchedulesTheProcessingOfGroupMembershipsError](src/resources/permissions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.permissions.schedulesTheProcessingOfGroupMemberships(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Permissions.SchedulesTheProcessingOfGroupMembershipsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Authentication

> Source: [Authentication](src/resources/authentication.ts)

<details>
<summary><code>rotateToken(options?: RequestOptions): ApiPromise&lt;RotateTokenResponse, Authentication.RotateTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rotates the secret value inside the Indexing API token and returns the new raw secret. All other properties of the token are unchanged. In order to rotate the secret value, include the token as the bearer token in the `/rotatetoken` request. Please refer to [Token rotation](https://developers.glean.com/indexing/authentication/token-rotation) documentation for more information.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authentication.rotateToken();
  // TODO: Handle 'response' of type RotateTokenResponse
} catch (err) {
  // TODO: Handle 'err' of type Authentication.RotateTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authentication.rotateToken().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RotateTokenResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authentication.rotateToken()`

- **OnSuccess**: <code>[RotateTokenResponse](src/models/rotate-token-response.ts)</code>
- **OnError**: throws <code>[Authentication.RotateTokenError](src/resources/authentication.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authentication.rotateToken().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RotateTokenResponse, Authentication.RotateTokenError&gt;</code>, with `result.value` of type <code>[RotateTokenResponse](src/models/rotate-token-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Troubleshooting

> Source: [Troubleshooting](src/resources/troubleshooting.ts)

<details>
<summary><code>betaGetDatasourceStatus(request: Troubleshooting.BetaGetDatasourceStatusRequest, options?: RequestOptions): ApiPromise&lt;DebugDatasourceStatusResponse, Troubleshooting.BetaGetDatasourceStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gather information about the datasource's overall status. Currently in beta, might undergo breaking changes without prior notice.

Tip: Refer to the [Troubleshooting tutorial](https://developers.glean.com/indexing/debugging/datasource-config) for more information.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.troubleshooting.betaGetDatasourceStatus({
    datasource: "some example string",
  });
  // TODO: Handle 'response' of type DebugDatasourceStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type Troubleshooting.BetaGetDatasourceStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.troubleshooting.betaGetDatasourceStatus({
  datasource: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DebugDatasourceStatusResponse
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
| <code>datasource</code> | <code>string</code> | The datasource to get debug status for. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.troubleshooting.betaGetDatasourceStatus(request)`

- **OnSuccess**: <code>[DebugDatasourceStatusResponse](src/models/debug-datasource-status-response.ts)</code>
- **OnError**: throws <code>[Troubleshooting.BetaGetDatasourceStatusError](src/resources/troubleshooting.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.troubleshooting.betaGetDatasourceStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DebugDatasourceStatusResponse, Troubleshooting.BetaGetDatasourceStatusError&gt;</code>, with `result.value` of type <code>[DebugDatasourceStatusResponse](src/models/debug-datasource-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>betaGetDocumentInformation(request: Troubleshooting.BetaGetDocumentInformationRequest, options?: RequestOptions): ApiPromise&lt;DebugDocumentResponse, Troubleshooting.BetaGetDocumentInformationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gives various information that would help in debugging related to a particular document. Currently in beta, might undergo breaking changes without prior notice.

Tip: Refer to the [Troubleshooting tutorial](https://developers.glean.com/indexing/debugging/datasource-config) for more information.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.troubleshooting.betaGetDocumentInformation({
    datasource: "some example string",
    body: { objectType: "some example string", docId: "some example string" },
  });
  // TODO: Handle 'response' of type DebugDocumentResponse
} catch (err) {
  // TODO: Handle 'err' of type Troubleshooting.BetaGetDocumentInformationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.troubleshooting.betaGetDocumentInformation({
  datasource: "some example string",
  body: { objectType: "some example string", docId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DebugDocumentResponse
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
| <code>datasource</code> | <code>string</code> | The datasource to which the document belongs |
| <code>body</code> | <code>[DebugDocumentRequest](src/models/debug-document-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.troubleshooting.betaGetDocumentInformation(request)`

- **OnSuccess**: <code>[DebugDocumentResponse](src/models/debug-document-response.ts)</code>
- **OnError**: throws <code>[Troubleshooting.BetaGetDocumentInformationError](src/resources/troubleshooting.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.troubleshooting.betaGetDocumentInformation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DebugDocumentResponse, Troubleshooting.BetaGetDocumentInformationError&gt;</code>, with `result.value` of type <code>[DebugDocumentResponse](src/models/debug-document-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>betaGetDocumentLifecycleEvents(request: Troubleshooting.BetaGetDocumentLifecycleEventsRequest, options?: RequestOptions): ApiPromise&lt;DebugDocumentLifecycleResponse, Troubleshooting.BetaGetDocumentLifecycleEventsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves lifecycle events for a specific document including upload time, index times and deletions. Rate limited to 1 request per minute per datasource. Currently in beta, might undergo breaking changes without prior notice.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.troubleshooting.betaGetDocumentLifecycleEvents({
    datasource: "some example string",
    body: { objectType: "some example string", docId: "some example string" },
  });
  // TODO: Handle 'response' of type DebugDocumentLifecycleResponse
} catch (err) {
  // TODO: Handle 'err' of type Troubleshooting.BetaGetDocumentLifecycleEventsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.troubleshooting.betaGetDocumentLifecycleEvents({
  datasource: "some example string",
  body: { objectType: "some example string", docId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DebugDocumentLifecycleResponse
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
| <code>datasource</code> | <code>string</code> | The datasource to which the document belongs |
| <code>body</code> | <code>[DebugDocumentLifecycleRequest](src/models/debug-document-lifecycle-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.troubleshooting.betaGetDocumentLifecycleEvents(request)`

- **OnSuccess**: <code>[DebugDocumentLifecycleResponse](src/models/debug-document-lifecycle-response.ts)</code>
- **OnError**: throws <code>[Troubleshooting.BetaGetDocumentLifecycleEventsError](src/resources/troubleshooting.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.troubleshooting.betaGetDocumentLifecycleEvents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DebugDocumentLifecycleResponse, Troubleshooting.BetaGetDocumentLifecycleEventsError&gt;</code>, with `result.value` of type <code>[DebugDocumentLifecycleResponse](src/models/debug-document-lifecycle-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>betaGetInformationOfABatchOfDocuments(request: Troubleshooting.BetaGetInformationOfABatchOfDocumentsRequest, options?: RequestOptions): ApiPromise&lt;DebugDocumentsResponse, Troubleshooting.BetaGetInformationOfABatchOfDocumentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gives various information that would help in debugging related to a batch of documents. Currently in beta, might undergo breaking changes without prior notice.

Tip: Refer to the [Troubleshooting tutorial](https://developers.glean.com/indexing/debugging/datasource-config) for more information.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.troubleshooting.betaGetInformationOfABatchOfDocuments({
    datasource: "some example string",
    body: { debugDocuments: [{ objectType: "some example string", docId: "some example string" }] },
  });
  // TODO: Handle 'response' of type DebugDocumentsResponse
} catch (err) {
  // TODO: Handle 'err' of type Troubleshooting.BetaGetInformationOfABatchOfDocumentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.troubleshooting.betaGetInformationOfABatchOfDocuments({
  datasource: "some example string",
  body: { debugDocuments: [{ objectType: "some example string", docId: "some example string" }] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DebugDocumentsResponse
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
| <code>datasource</code> | <code>string</code> | The datasource to which the document belongs |
| <code>body</code> | <code>[DebugDocumentsRequest](src/models/debug-documents-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.troubleshooting.betaGetInformationOfABatchOfDocuments(request)`

- **OnSuccess**: <code>[DebugDocumentsResponse](src/models/debug-documents-response.ts)</code>
- **OnError**: throws <code>[Troubleshooting.BetaGetInformationOfABatchOfDocumentsError](src/resources/troubleshooting.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.troubleshooting.betaGetInformationOfABatchOfDocuments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DebugDocumentsResponse, Troubleshooting.BetaGetInformationOfABatchOfDocumentsError&gt;</code>, with `result.value` of type <code>[DebugDocumentsResponse](src/models/debug-documents-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>betaGetUserInformation(request: Troubleshooting.BetaGetUserInformationRequest, options?: RequestOptions): ApiPromise&lt;DebugUserResponse, Troubleshooting.BetaGetUserInformationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gives various information that would help in debugging related to a particular user. Currently in beta, might undergo breaking changes without prior notice.

Tip: Refer to the [Troubleshooting tutorial](https://developers.glean.com/indexing/debugging/datasource-config) for more information.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.troubleshooting.betaGetUserInformation({
    datasource: "some example string",
    body: { email: "some example string" },
  });
  // TODO: Handle 'response' of type DebugUserResponse
} catch (err) {
  // TODO: Handle 'err' of type Troubleshooting.BetaGetUserInformationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.troubleshooting.betaGetUserInformation({
  datasource: "some example string",
  body: { email: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DebugUserResponse
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
| <code>datasource</code> | <code>string</code> | The datasource to which the user belongs |
| <code>body</code> | <code>[DebugUserRequest](src/models/debug-user-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.troubleshooting.betaGetUserInformation(request)`

- **OnSuccess**: <code>[DebugUserResponse](src/models/debug-user-response.ts)</code>
- **OnError**: throws <code>[Troubleshooting.BetaGetUserInformationError](src/resources/troubleshooting.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.troubleshooting.betaGetUserInformation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DebugUserResponse, Troubleshooting.BetaGetUserInformationError&gt;</code>, with `result.value` of type <code>[DebugUserResponse](src/models/debug-user-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>checkDocumentAccess(request: Troubleshooting.CheckDocumentAccessRequestParams, options?: RequestOptions): ApiPromise&lt;CheckDocumentAccessResponse, Troubleshooting.CheckDocumentAccessError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if a given user has access to access a document in a custom datasource

Tip: Refer to the [Troubleshooting tutorial](https://developers.glean.com/indexing/debugging/datasource-config) for more information.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.troubleshooting.checkDocumentAccess({
    body: {
      datasource: "some example string",
      objectType: "some example string",
      docId: "some example string",
      userEmail: "some example string",
    },
  });
  // TODO: Handle 'response' of type CheckDocumentAccessResponse
} catch (err) {
  // TODO: Handle 'err' of type Troubleshooting.CheckDocumentAccessError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.troubleshooting.checkDocumentAccess({
  body: {
    datasource: "some example string",
    objectType: "some example string",
    docId: "some example string",
    userEmail: "some example string",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CheckDocumentAccessResponse
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
| <code>body</code> | <code>[CheckDocumentAccessRequest](src/models/check-document-access-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.troubleshooting.checkDocumentAccess(request)`

- **OnSuccess**: <code>[CheckDocumentAccessResponse](src/models/check-document-access-response.ts)</code>
- **OnError**: throws <code>[Troubleshooting.CheckDocumentAccessError](src/resources/troubleshooting.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.troubleshooting.checkDocumentAccess(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CheckDocumentAccessResponse, Troubleshooting.CheckDocumentAccessError&gt;</code>, with `result.value` of type <code>[CheckDocumentAccessResponse](src/models/check-document-access-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDocumentCount(request: Troubleshooting.GetDocumentCountRequestParams, options?: RequestOptions): ApiPromise&lt;GetDocumentCountResponse, Troubleshooting.GetDocumentCountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches document count for the specified custom datasource.

Tip: Use [/debug/{datasource}/status](https://developers.glean.com/indexing/debugging/datasource-status) for richer information.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.troubleshooting.getDocumentCount({
    body: { datasource: "some example string" },
  });
  // TODO: Handle 'response' of type GetDocumentCountResponse
} catch (err) {
  // TODO: Handle 'err' of type Troubleshooting.GetDocumentCountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.troubleshooting.getDocumentCount({
  body: { datasource: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetDocumentCountResponse
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
| <code>body</code> | <code>[GetDocumentCountRequest](src/models/get-document-count-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.troubleshooting.getDocumentCount(request)`

- **OnSuccess**: <code>[GetDocumentCountResponse](src/models/get-document-count-response.ts)</code>
- **OnError**: throws <code>[Troubleshooting.GetDocumentCountError](src/resources/troubleshooting.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.troubleshooting.getDocumentCount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetDocumentCountResponse, Troubleshooting.GetDocumentCountError&gt;</code>, with `result.value` of type <code>[GetDocumentCountResponse](src/models/get-document-count-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDocumentUploadAndIndexingStatus(request: Troubleshooting.GetDocumentUploadAndIndexingStatusRequest, options?: RequestOptions): ApiPromise&lt;GetDocumentStatusResponse, Troubleshooting.GetDocumentUploadAndIndexingStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Intended for debugging/validation. Fetches the current upload and indexing status of documents.

Tip: Use [/debug/{datasource}/document](https://developers.glean.com/indexing/debugging/datasource-document) for richer information.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.troubleshooting.getDocumentUploadAndIndexingStatus({
    body: {
      datasource: "some example string",
      objectType: "some example string",
      docId: "some example string",
    },
  });
  // TODO: Handle 'response' of type GetDocumentStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type Troubleshooting.GetDocumentUploadAndIndexingStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.troubleshooting.getDocumentUploadAndIndexingStatus({
  body: {
    datasource: "some example string",
    objectType: "some example string",
    docId: "some example string",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetDocumentStatusResponse
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
| <code>body</code> | <code>[GetDocumentStatusRequest](src/models/get-document-status-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.troubleshooting.getDocumentUploadAndIndexingStatus(request)`

- **OnSuccess**: <code>[GetDocumentStatusResponse](src/models/get-document-status-response.ts)</code>
- **OnError**: throws <code>[Troubleshooting.GetDocumentUploadAndIndexingStatusError](src/resources/troubleshooting.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.troubleshooting.getDocumentUploadAndIndexingStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetDocumentStatusResponse, Troubleshooting.GetDocumentUploadAndIndexingStatusError&gt;</code>, with `result.value` of type <code>[GetDocumentStatusResponse](src/models/get-document-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUserCount(request: Troubleshooting.GetUserCountRequestParams, options?: RequestOptions): ApiPromise&lt;GetUserCountResponse, Troubleshooting.GetUserCountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches user count for the specified custom datasource.

Tip: Use [/debug/{datasource}/status](https://developers.glean.com/indexing/debugging/datasource-status) for richer information.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.troubleshooting.getUserCount({ body: { datasource: "some example string" } });
  // TODO: Handle 'response' of type GetUserCountResponse
} catch (err) {
  // TODO: Handle 'err' of type Troubleshooting.GetUserCountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.troubleshooting.getUserCount({
  body: { datasource: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetUserCountResponse
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
| <code>body</code> | <code>[GetUserCountRequest](src/models/get-user-count-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.troubleshooting.getUserCount(request)`

- **OnSuccess**: <code>[GetUserCountResponse](src/models/get-user-count-response.ts)</code>
- **OnError**: throws <code>[Troubleshooting.GetUserCountError](src/resources/troubleshooting.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.troubleshooting.getUserCount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetUserCountResponse, Troubleshooting.GetUserCountError&gt;</code>, with `result.value` of type <code>[GetUserCountResponse](src/models/get-user-count-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Shortcuts

> Source: [Shortcuts](src/resources/shortcuts.ts)

<details>
<summary><code>bulkIndexExternalShortcuts(options?: RequestOptions): ApiPromise&lt;undefined, Shortcuts.BulkIndexExternalShortcutsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replaces all the currently indexed shortcuts using paginated batch API calls. Note that this endpoint is used for indexing shortcuts not hosted by Glean. If you want to upload shortcuts that would be hosted by Glean, please use the `/uploadshortcuts` endpoint. For information on what you can do with Golinks, which are Glean-hosted shortcuts, please refer to [this](https://docs.glean.com/user-guide/knowledge/go-links/how-go-links-work) page.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.shortcuts.bulkIndexExternalShortcuts();
} catch (err) {
  // TODO: Handle 'err' of type Shortcuts.BulkIndexExternalShortcutsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shortcuts.bulkIndexExternalShortcuts().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shortcuts.bulkIndexExternalShortcuts()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Shortcuts.BulkIndexExternalShortcutsError](src/resources/shortcuts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shortcuts.bulkIndexExternalShortcuts().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Shortcuts.BulkIndexExternalShortcutsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadShortcuts(options?: RequestOptions): ApiPromise&lt;undefined, Shortcuts.UploadShortcutsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates glean shortcuts for uploaded shortcuts info. Glean would host the shortcuts, and they can be managed in the knowledge tab once uploaded.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.shortcuts.uploadShortcuts();
} catch (err) {
  // TODO: Handle 'err' of type Shortcuts.UploadShortcutsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shortcuts.uploadShortcuts().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shortcuts.uploadShortcuts()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Shortcuts.UploadShortcutsError](src/resources/shortcuts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shortcuts.uploadShortcuts().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Shortcuts.UploadShortcutsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CustomMetadata

> Source: [CustomMetadata](src/resources/custom-metadata.ts)

<details>
<summary><code>addOrUpdateCustomMetadata(request: CustomMetadata.AddOrUpdateCustomMetadataRequest, options?: RequestOptions): ApiPromise&lt;SuccessResponse, CustomMetadata.AddOrUpdateCustomMetadataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Associates custom metadata with a specific document. Custom metadata enables you to enrich documents with additional structured information that can be used for search, filtering, and faceting.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customMetadata.addOrUpdateCustomMetadata({
    docId: "some example string",
    groupName: "some example string",
    body: { customMetadata: [{}] },
  });
  // TODO: Handle 'response' of type SuccessResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomMetadata.AddOrUpdateCustomMetadataError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customMetadata.addOrUpdateCustomMetadata({
  docId: "some example string",
  groupName: "some example string",
  body: { customMetadata: [{}] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessResponse
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
| <code>docId</code> | <code>string</code> | Unique Glean identifier of the document |
| <code>groupName</code> | <code>string</code> | Name of the metadata group as specified while adding schema |
| <code>body</code> | <code>[CustomMetadataPutRequest](src/models/custom-metadata-put-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customMetadata.addOrUpdateCustomMetadata(request)`

- **OnSuccess**: <code>[SuccessResponse](src/models/success-response.ts)</code>
- **OnError**: throws <code>[CustomMetadata.AddOrUpdateCustomMetadataError](src/resources/custom-metadata.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customMetadata.addOrUpdateCustomMetadata(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessResponse, CustomMetadata.AddOrUpdateCustomMetadataError&gt;</code>, with `result.value` of type <code>[SuccessResponse](src/models/success-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createOrUpdateMetadataSchema(request: CustomMetadata.CreateOrUpdateMetadataSchemaRequest, options?: RequestOptions): ApiPromise&lt;SuccessResponse, CustomMetadata.CreateOrUpdateMetadataSchemaError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Defines or updates the schema for a metadata group. Schemas should be defined before indexing metadata.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customMetadata.createOrUpdateMetadataSchema({
    groupName: "some example string",
    body: { metadataKeys: [{}] },
  });
  // TODO: Handle 'response' of type SuccessResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomMetadata.CreateOrUpdateMetadataSchemaError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customMetadata.createOrUpdateMetadataSchema({
  groupName: "some example string",
  body: { metadataKeys: [{}] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessResponse
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
| <code>groupName</code> | <code>string</code> | Name of the metadata group schema |
| <code>body</code> | <code>[CustomMetadataSchema](src/models/custom-metadata-schema.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customMetadata.createOrUpdateMetadataSchema(request)`

- **OnSuccess**: <code>[SuccessResponse](src/models/success-response.ts)</code>
- **OnError**: throws <code>[CustomMetadata.CreateOrUpdateMetadataSchemaError](src/resources/custom-metadata.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customMetadata.createOrUpdateMetadataSchema(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessResponse, CustomMetadata.CreateOrUpdateMetadataSchemaError&gt;</code>, with `result.value` of type <code>[SuccessResponse](src/models/success-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeCustomMetadata(request: CustomMetadata.RemoveCustomMetadataRequest, options?: RequestOptions): ApiPromise&lt;SuccessResponse, CustomMetadata.RemoveCustomMetadataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes all custom metadata for the specified metadata group from a document.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customMetadata.removeCustomMetadata({
    docId: "some example string",
    groupName: "some example string",
  });
  // TODO: Handle 'response' of type SuccessResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomMetadata.RemoveCustomMetadataError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customMetadata.removeCustomMetadata({
  docId: "some example string",
  groupName: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessResponse
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
| <code>docId</code> | <code>string</code> | Unique Glean identifier of the document |
| <code>groupName</code> | <code>string</code> | Name of the metadata group as specified while adding schema |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customMetadata.removeCustomMetadata(request)`

- **OnSuccess**: <code>[SuccessResponse](src/models/success-response.ts)</code>
- **OnError**: throws <code>[CustomMetadata.RemoveCustomMetadataError](src/resources/custom-metadata.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customMetadata.removeCustomMetadata(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessResponse, CustomMetadata.RemoveCustomMetadataError&gt;</code>, with `result.value` of type <code>[SuccessResponse](src/models/success-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeMetadataSchema(request: CustomMetadata.RemoveMetadataSchemaRequest, options?: RequestOptions): ApiPromise&lt;SuccessResponse, CustomMetadata.RemoveMetadataSchemaError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the schema definition for a metadata group. This does not delete existing metadata values on documents.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customMetadata.removeMetadataSchema({ groupName: "some example string" });
  // TODO: Handle 'response' of type SuccessResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomMetadata.RemoveMetadataSchemaError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customMetadata.removeMetadataSchema({
  groupName: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessResponse
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
| <code>groupName</code> | <code>string</code> | Name of the metadata group schema |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customMetadata.removeMetadataSchema(request)`

- **OnSuccess**: <code>[SuccessResponse](src/models/success-response.ts)</code>
- **OnError**: throws <code>[CustomMetadata.RemoveMetadataSchemaError](src/resources/custom-metadata.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customMetadata.removeMetadataSchema(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessResponse, CustomMetadata.RemoveMetadataSchemaError&gt;</code>, with `result.value` of type <code>[SuccessResponse](src/models/success-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveMetadataSchema(request: CustomMetadata.RetrieveMetadataSchemaRequest, options?: RequestOptions): ApiPromise&lt;CustomMetadataSchema, CustomMetadata.RetrieveMetadataSchemaError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the current schema definition for a metadata group.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customMetadata.retrieveMetadataSchema({ groupName: "some example string" });
  // TODO: Handle 'response' of type CustomMetadataSchema
} catch (err) {
  // TODO: Handle 'err' of type CustomMetadata.RetrieveMetadataSchemaError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customMetadata.retrieveMetadataSchema({
  groupName: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomMetadataSchema
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
| <code>groupName</code> | <code>string</code> | Name of the metadata group schema |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customMetadata.retrieveMetadataSchema(request)`

- **OnSuccess**: <code>[CustomMetadataSchema](src/models/custom-metadata-schema.ts)</code>
- **OnError**: throws <code>[CustomMetadata.RetrieveMetadataSchemaError](src/resources/custom-metadata.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customMetadata.retrieveMetadataSchema(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomMetadataSchema, CustomMetadata.RetrieveMetadataSchemaError&gt;</code>, with `result.value` of type <code>[CustomMetadataSchema](src/models/custom-metadata-schema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanIndexingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

