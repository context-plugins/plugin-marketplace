# Reference

> Source: [ArchbeeClient](src/client.ts)

## AccessControl

> Source: [AccessControl](src/resources/access-control.ts)

<details>
<summary><code>requestMagicLinkAccess(request: AccessControl.RequestMagicLinkAccessRequest, options?: RequestOptions): ApiPromise&lt;AccessControlRequestResponse, AccessControl.RequestMagicLinkAccessError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submit a reader's email as a pending request to be added to the space's magic-link whitelist. The request does NOT grant access on its own — an admin must approve it. The space must be configured for Magic Link (Magic Link enabled, the portal gating content, and the team's plan allowing it); otherwise the request is refused with 400. There is one request per (email, space). A repeat request for the same email is idempotent per status: a Pending request returns the existing row unchanged; an Accepted request whose email is still whitelisted also returns it unchanged; but an Accepted request whose access was later revoked, or a previously Rejected request, is put back into the Pending queue and re-notifies the admins — so a rejected or revoked reader can always re-apply.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accessControl.requestMagicLinkAccess({ body: {} });
  // TODO: Handle 'response' of type AccessControlRequestResponse
} catch (err) {
  // TODO: Handle 'err' of type AccessControl.RequestMagicLinkAccessError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accessControl.requestMagicLinkAccess({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccessControlRequestResponse
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
| <code>body</code> | <code>[AccessControlRequestRequest](src/models/access-control-request-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accessControl.requestMagicLinkAccess(request)`

- **OnSuccess**: <code>[AccessControlRequestResponse](src/models/access-control-request-response.ts)</code>
- **OnError**: throws <code>[AccessControl.RequestMagicLinkAccessError](src/resources/access-control.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accessControl.requestMagicLinkAccess(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccessControlRequestResponse, AccessControl.RequestMagicLinkAccessError&gt;</code>, with `result.value` of type <code>[AccessControlRequestResponse](src/models/access-control-request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ArchbeeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ApiReference

> Source: [ApiReference](src/resources/api-reference.ts)

<details>
<summary><code>infoOpenApiDocument(options?: RequestOptions): ApiPromise&lt;InfoApiReferenceResponse, ApiReference.InfoOpenApiDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get info of an existing Open Api tree

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiReference.infoOpenApiDocument();
  // TODO: Handle 'response' of type InfoApiReferenceResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiReference.InfoOpenApiDocumentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apiReference.infoOpenApiDocument().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InfoApiReferenceResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apiReference.infoOpenApiDocument()`

- **OnSuccess**: <code>[InfoApiReferenceResponse](src/models/info-api-reference-response.ts)</code>
- **OnError**: throws <code>[ApiReference.InfoOpenApiDocumentError](src/resources/api-reference.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apiReference.infoOpenApiDocument().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InfoApiReferenceResponse, ApiReference.InfoOpenApiDocumentError&gt;</code>, with `result.value` of type <code>[InfoApiReferenceResponse](src/models/info-api-reference-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ArchbeeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>syncOpenApiDocument(request: ApiReference.SyncOpenApiDocumentRequest, options?: RequestOptions): ApiPromise&lt;SyncApiReferenceResponse, ApiReference.SyncOpenApiDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sync Open Api document with a new or existing Open Api tree

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiReference.syncOpenApiDocument({
    file: new Uint8Array(),
    docTreeId: "21-character__string0",
    openApiLanguageExamples: '["python","r","javascript"]',
  });
  // TODO: Handle 'response' of type SyncApiReferenceResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiReference.SyncOpenApiDocumentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apiReference
  .syncOpenApiDocument({
    file: new Uint8Array(),
    docTreeId: "21-character__string0",
    openApiLanguageExamples: '["python","r","javascript"]',
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SyncApiReferenceResponse
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
| <code>file</code> | <code>FileInput</code> | Open api file, .json or .yml or .yaml or .zip |
| <code>docTreeId?</code> | <code>string</code> | OPTIONAL, main category id where open api was imported; if undefined, a new docTree is created and its id is returned<br>**Default**: "21-character__string0" |
| <code>type?</code> | <code>[Type](src/models/type.ts)</code> | Type of import file. Default openapi<br>**Default**: "openapi" |
| <code>openApiTryIt?</code> | <code>[OpenApiTryIt](src/models/open-api-try-it.ts)</code> | OPTIONAL. You can now test your API's directly in the editor or on your published docs with the new API Try It! |
| <code>openApiUseOwnBackend?</code> | <code>[OpenApiUseOwnBackend](src/models/open-api-use-own-backend.ts)</code> | OPTIONAL. When 'Try It' is enabled, send requests directly from the browser to the URL defined in the OpenAPI spec instead of proxying through Archbee. Requires CORS configured on your backend. |
| <code>showDownloadOpenApiFile?</code> | <code>[ShowDownloadOpenApiFile](src/models/show-download-open-api-file.ts)</code> | OPTIONAL. You can show/hide the download link of the imported Open API file in the Open API tree. |
| <code>shouldCreateSchemaCategory?</code> | <code>[ShouldCreateSchemaCategory](src/models/should-create-schema-category.ts)</code> | OPTIONAL. You can create models category to display all your models. |
| <code>shouldCreateIntro?</code> | <code>[ShouldCreateIntro](src/models/should-create-intro.ts)</code> | OPTIONAL. You can create an additional document to display open api intro. |
| <code>openApiLanguageExamples?</code> | <code>string</code> | OPTIONAL. Add your custom language examples. Maximum 5 programming language examples are allowed! |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apiReference.syncOpenApiDocument(request)`

- **OnSuccess**: <code>[SyncApiReferenceResponse](src/models/sync-api-reference-response.ts)</code>
- **OnError**: throws <code>[ApiReference.SyncOpenApiDocumentError](src/resources/api-reference.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apiReference.syncOpenApiDocument(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SyncApiReferenceResponse, ApiReference.SyncOpenApiDocumentError&gt;</code>, with `result.value` of type <code>[SyncApiReferenceResponse](src/models/sync-api-reference-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ArchbeeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Documents

> Source: [Documents](src/resources/documents.ts)

<details>
<summary><code>deleteDocument(request: Documents.DeleteDocumentRequest, options?: RequestOptions): ApiPromise&lt;DocResponse, Documents.DeleteDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete document by docId

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.documents.deleteDocument({ body: { docId: "some example string" } });
  // TODO: Handle 'response' of type DocResponse
} catch (err) {
  // TODO: Handle 'err' of type Documents.DeleteDocumentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documents
  .deleteDocument({ body: { docId: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocResponse
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
| <code>body</code> | <code>[DocRequest](src/models/doc-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documents.deleteDocument(request)`

- **OnSuccess**: <code>[DocResponse](src/models/doc-response.ts)</code>
- **OnError**: throws <code>[Documents.DeleteDocumentError](src/resources/documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documents.deleteDocument(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocResponse, Documents.DeleteDocumentError&gt;</code>, with `result.value` of type <code>[DocResponse](src/models/doc-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ArchbeeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDocument(options?: RequestOptions): ApiPromise&lt;DocResponse1, Documents.GetDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a document in markdown, html, json, or source format.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.documents.getDocument();
  // TODO: Handle 'response' of type DocResponse1
} catch (err) {
  // TODO: Handle 'err' of type Documents.GetDocumentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documents.getDocument().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documents.getDocument()`

- **OnSuccess**: <code>[DocResponse1](src/models/doc-response1.ts)</code>
- **OnError**: throws <code>[Documents.GetDocumentError](src/resources/documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documents.getDocument().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocResponse1, Documents.GetDocumentError&gt;</code>, with `result.value` of type <code>[DocResponse1](src/models/doc-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ArchbeeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>importContent(request: Documents.ImportContentRequest, options?: RequestOptions): ApiPromise&lt;ImportContentResponse, Documents.ImportContentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create new Doc from imported markdown file. In case of zip file, create a new docTree and keeps archived tree structure.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.documents.importContent({ file: new Uint8Array() });
  // TODO: Handle 'response' of type ImportContentResponse
} catch (err) {
  // TODO: Handle 'err' of type Documents.ImportContentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documents.importContent({ file: new Uint8Array() }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImportContentResponse
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
| <code>file</code> | <code>FileInput</code> | Markdown file (.md) or archive (.zip) containing multiple markdown files. |
| <code>type?</code> | <code>[Type1](src/models/type1.ts)</code> | Type of import file. Only markdown supported for now on this route.<br>**Default**: "markdown" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documents.importContent(request)`

- **OnSuccess**: <code>[ImportContentResponse](src/models/import-content-response.ts)</code>
- **OnError**: throws <code>[Documents.ImportContentError](src/resources/documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documents.importContent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImportContentResponse, Documents.ImportContentError&gt;</code>, with `result.value` of type <code>[ImportContentResponse](src/models/import-content-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ArchbeeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchDocument(request: Documents.SearchDocumentRequest, options?: RequestOptions): ApiPromise&lt;DocsSearchResponse, Documents.SearchDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Archbee documents in docSpace. Can perform one of the 3 types of search:

ai-chat to return ai generative answer accompanied by source docs;
ai-retrieval to return just similar docs with the query;
words to perform normal search aka. "word-based"; use empty query to return all docs
single-doc to return document info by id

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.documents.searchDocument({ body: { query: "some example string" } });
  // TODO: Handle 'response' of type DocsSearchResponse
} catch (err) {
  // TODO: Handle 'err' of type Documents.SearchDocumentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documents
  .searchDocument({ body: { query: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocsSearchResponse
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
| <code>body</code> | <code>[DocsSearchRequest](src/models/docs-search-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documents.searchDocument(request)`

- **OnSuccess**: <code>[DocsSearchResponse](src/models/docs-search-response.ts)</code>
- **OnError**: throws <code>[Documents.SearchDocumentError](src/resources/documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documents.searchDocument(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocsSearchResponse, Documents.SearchDocumentError&gt;</code>, with `result.value` of type <code>[DocsSearchResponse](src/models/docs-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ArchbeeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCreateDocument(request: Documents.UpdateCreateDocumentRequest, options?: RequestOptions): ApiPromise&lt;DocResponse2, Documents.UpdateCreateDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create / Update Doc by docId

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.documents.updateCreateDocument({ body: { content: "some example string" } });
  // TODO: Handle 'response' of type DocResponse2
} catch (err) {
  // TODO: Handle 'err' of type Documents.UpdateCreateDocumentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documents
  .updateCreateDocument({ body: { content: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocResponse2
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
| <code>body</code> | <code>[DocRequest1](src/models/doc-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documents.updateCreateDocument(request)`

- **OnSuccess**: <code>[DocResponse2](src/models/doc-response2.ts)</code>
- **OnError**: throws <code>[Documents.UpdateCreateDocumentError](src/resources/documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documents.updateCreateDocument(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocResponse2, Documents.UpdateCreateDocumentError&gt;</code>, with `result.value` of type <code>[DocResponse2](src/models/doc-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ArchbeeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## FileManager

> Source: [FileManager](src/resources/file-manager.ts)

<details>
<summary><code>deleteAFileManagerFile(request: FileManager.DeleteAFileManagerFileRequest, options?: RequestOptions): ApiPromise&lt;undefined, FileManager.DeleteAFileManagerFileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a File Manager file or folder (folders delete their contents recursively).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.fileManager.deleteAFileManagerFile({ body: { fileId: "some example string" } });
} catch (err) {
  // TODO: Handle 'err' of type FileManager.DeleteAFileManagerFileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fileManager
  .deleteAFileManagerFile({ body: { fileId: "some example string" } })
  .asApiResult();
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
| <code>body</code> | <code>[FileManagerFileRequest](src/models/file-manager-file-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fileManager.deleteAFileManagerFile(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FileManager.DeleteAFileManagerFileError](src/resources/file-manager.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fileManager.deleteAFileManagerFile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FileManager.DeleteAFileManagerFileError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ArchbeeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listFileManagerFiles(request?: FileManager.ListFileManagerFilesRequest, options?: RequestOptions): ApiPromise&lt;undefined, FileManager.ListFileManagerFilesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List files and folders in the File Manager. Omitting parentId lists every entry across all folders (use searchQuery/pagination to find one); pass a folder id to list that folder's direct children. Filter with itemType (directory, image, or file).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.fileManager.listFileManagerFiles();
} catch (err) {
  // TODO: Handle 'err' of type FileManager.ListFileManagerFilesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fileManager.listFileManagerFiles().asApiResult();
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
| <code>parentId?</code> | <code>string</code> | OPTIONAL. Folder id to list the direct children of. Omit to list all entries across every folder. |
| <code>itemType?</code> | <code>[ItemType](src/models/item-type.ts)</code> | OPTIONAL. Filter by entry type. |
| <code>searchQuery?</code> | <code>string</code> | OPTIONAL. Case-insensitive filename filter. |
| <code>pageIndex?</code> | <code>number</code> | OPTIONAL. Zero-based page index (default 0). |
| <code>pageSize?</code> | <code>number</code> | OPTIONAL. Page size (1-200). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fileManager.listFileManagerFiles(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FileManager.ListFileManagerFilesError](src/resources/file-manager.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fileManager.listFileManagerFiles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FileManager.ListFileManagerFilesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ArchbeeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>moveAFileManagerFile(request: FileManager.MoveAFileManagerFileRequest, options?: RequestOptions): ApiPromise&lt;undefined, FileManager.MoveAFileManagerFileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Move a File Manager file or folder into another folder. Pass a null newParentId to move it to the root.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.fileManager.moveAFileManagerFile({
    body: { fileId: "some example string", newParentId: "some example string" },
  });
} catch (err) {
  // TODO: Handle 'err' of type FileManager.MoveAFileManagerFileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fileManager
  .moveAFileManagerFile({ body: { fileId: "some example string", newParentId: "some example string" } })
  .asApiResult();
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
| <code>body</code> | <code>[FileManagerMoveRequest](src/models/file-manager-move-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fileManager.moveAFileManagerFile(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FileManager.MoveAFileManagerFileError](src/resources/file-manager.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fileManager.moveAFileManagerFile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FileManager.MoveAFileManagerFileError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ArchbeeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>overwriteAFileManagerFile(request: FileManager.OverwriteAFileManagerFileRequest, options?: RequestOptions): ApiPromise&lt;undefined, FileManager.OverwriteAFileManagerFileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replace the contents of an existing File Manager file in place. The file keeps its id and public URL, so existing document embeds update automatically.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.fileManager.overwriteAFileManagerFile({
    fileId: "some example string",
    file: new Uint8Array(),
  });
} catch (err) {
  // TODO: Handle 'err' of type FileManager.OverwriteAFileManagerFileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fileManager
  .overwriteAFileManagerFile({ fileId: "some example string", file: new Uint8Array() })
  .asApiResult();
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
| <code>fileId</code> | <code>string</code> | Id of the existing file to overwrite. |
| <code>file</code> | <code>FileInput</code> | New file contents. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fileManager.overwriteAFileManagerFile(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FileManager.OverwriteAFileManagerFileError](src/resources/file-manager.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fileManager.overwriteAFileManagerFile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FileManager.OverwriteAFileManagerFileError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ArchbeeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadSingleFile(request: FileManager.UploadSingleFileRequest, options?: RequestOptions): ApiPromise&lt;UploadFileResponse, FileManager.UploadSingleFileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a single file to the File Manager

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fileManager.uploadSingleFile({ file: new Uint8Array() });
  // TODO: Handle 'response' of type UploadFileResponse
} catch (err) {
  // TODO: Handle 'err' of type FileManager.UploadSingleFileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fileManager.uploadSingleFile({ file: new Uint8Array() }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UploadFileResponse
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
| <code>file</code> | <code>FileInput</code> | Open api file, .json or .yml or .yaml or .zip |
| <code>isPublic?</code> | <code>[IsPublic](src/models/is-public.ts)</code> | OPTIONAL. Whether the uploaded file is public or not regarding AWS link. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fileManager.uploadSingleFile(request)`

- **OnSuccess**: <code>[UploadFileResponse](src/models/upload-file-response.ts)</code>
- **OnError**: throws <code>[FileManager.UploadSingleFileError](src/resources/file-manager.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fileManager.uploadSingleFile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UploadFileResponse, FileManager.UploadSingleFileError&gt;</code>, with `result.value` of type <code>[UploadFileResponse](src/models/upload-file-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ArchbeeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Organization

> Source: [Organization](src/resources/organization.ts)

<details>
<summary><code>organizationDisplayRules(options?: RequestOptions): ApiPromise&lt;TeamDisplayRulesResponse, Organization.OrganizationDisplayRulesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Export a list of display rules.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organization.organizationDisplayRules();
  // TODO: Handle 'response' of type TeamDisplayRulesResponse
} catch (err) {
  // TODO: Handle 'err' of type Organization.OrganizationDisplayRulesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organization.organizationDisplayRules().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TeamDisplayRulesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organization.organizationDisplayRules()`

- **OnSuccess**: <code>[TeamDisplayRulesResponse](src/models/team-display-rules-response.ts)</code>
- **OnError**: throws <code>[Organization.OrganizationDisplayRulesError](src/resources/organization.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organization.organizationDisplayRules().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TeamDisplayRulesResponse, Organization.OrganizationDisplayRulesError&gt;</code>, with `result.value` of type <code>[TeamDisplayRulesResponse](src/models/team-display-rules-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ArchbeeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>organizationExport(options?: RequestOptions): ApiPromise&lt;undefined, Organization.OrganizationExportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Export assets, spaces with documents, team and user data from Archbee given teamId. Use --output

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.organization.organizationExport();
} catch (err) {
  // TODO: Handle 'err' of type Organization.OrganizationExportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organization.organizationExport().asApiResult();
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

**Direct**: `await client.organization.organizationExport()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Organization.OrganizationExportError](src/resources/organization.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organization.organizationExport().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Organization.OrganizationExportError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ArchbeeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SpaceGroups

> Source: [SpaceGroups](src/resources/space-groups.ts)

<details>
<summary><code>createSpaceGroup(request: SpaceGroups.CreateSpaceGroupRequest, options?: RequestOptions): ApiPromise&lt;SpaceGroupCreateResponse, SpaceGroups.CreateSpaceGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new space group with desired fields, return the space group.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.spaceGroups.createSpaceGroup({ body: { name: "some example string" } });
  // TODO: Handle 'response' of type SpaceGroupCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type SpaceGroups.CreateSpaceGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.spaceGroups
  .createSpaceGroup({ body: { name: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SpaceGroupCreateResponse
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
| <code>body</code> | <code>[SpaceGroupCreateRequest](src/models/space-group-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.spaceGroups.createSpaceGroup(request)`

- **OnSuccess**: <code>[SpaceGroupCreateResponse](src/models/space-group-create-response.ts)</code>
- **OnError**: throws <code>[SpaceGroups.CreateSpaceGroupError](src/resources/space-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.spaceGroups.createSpaceGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SpaceGroupCreateResponse, SpaceGroups.CreateSpaceGroupError&gt;</code>, with `result.value` of type <code>[SpaceGroupCreateResponse](src/models/space-group-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ArchbeeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSpaceGroup(request: SpaceGroups.DeleteSpaceGroupRequest, options?: RequestOptions): ApiPromise&lt;SpaceGroupDeleteResponse, SpaceGroups.DeleteSpaceGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Archbee space group with given spaceGroupId.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.spaceGroups.deleteSpaceGroup({ body: {} });
  // TODO: Handle 'response' of type SpaceGroupDeleteResponse
} catch (err) {
  // TODO: Handle 'err' of type SpaceGroups.DeleteSpaceGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.spaceGroups.deleteSpaceGroup({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SpaceGroupDeleteResponse
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
| <code>body</code> | <code>[SpaceGroupDeleteRequest](src/models/space-group-delete-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.spaceGroups.deleteSpaceGroup(request)`

- **OnSuccess**: <code>[SpaceGroupDeleteResponse](src/models/space-group-delete-response.ts)</code>
- **OnError**: throws <code>[SpaceGroups.DeleteSpaceGroupError](src/resources/space-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.spaceGroups.deleteSpaceGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SpaceGroupDeleteResponse, SpaceGroups.DeleteSpaceGroupError&gt;</code>, with `result.value` of type <code>[SpaceGroupDeleteResponse](src/models/space-group-delete-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ArchbeeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Suggestions

> Source: [Suggestions](src/resources/suggestions.ts)

<details>
<summary><code>discardSuggestionDocument(request: Suggestions.DiscardSuggestionDocumentRequest, options?: RequestOptions): ApiPromise&lt;SuggestChangeDiscardResponse, Suggestions.DiscardSuggestionDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Discard and delete a suggestion document without merging it into the base document. The suggestion document must have a docId starting with 'SUGGEST-'.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.suggestions.discardSuggestionDocument({
    body: { docId: "some example string" },
  });
  // TODO: Handle 'response' of type SuggestChangeDiscardResponse
} catch (err) {
  // TODO: Handle 'err' of type Suggestions.DiscardSuggestionDocumentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.suggestions
  .discardSuggestionDocument({ body: { docId: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuggestChangeDiscardResponse
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
| <code>body</code> | <code>[SuggestChangeDiscardRequest](src/models/suggest-change-discard-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.suggestions.discardSuggestionDocument(request)`

- **OnSuccess**: <code>[SuggestChangeDiscardResponse](src/models/suggest-change-discard-response.ts)</code>
- **OnError**: throws <code>[Suggestions.DiscardSuggestionDocumentError](src/resources/suggestions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.suggestions.discardSuggestionDocument(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuggestChangeDiscardResponse, Suggestions.DiscardSuggestionDocumentError&gt;</code>, with `result.value` of type <code>[SuggestChangeDiscardResponse](src/models/suggest-change-discard-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ArchbeeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>mergeSuggestionIntoMainDocument(request: Suggestions.MergeSuggestionIntoMainDocumentRequest, options?: RequestOptions): ApiPromise&lt;SuggestChangeMergeResponse, Suggestions.MergeSuggestionIntoMainDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Merge a suggestion document into the base document. The suggestion document must have a docId starting with 'SUGGEST-'.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.suggestions.mergeSuggestionIntoMainDocument({
    body: { docId: "some example string" },
  });
  // TODO: Handle 'response' of type SuggestChangeMergeResponse
} catch (err) {
  // TODO: Handle 'err' of type Suggestions.MergeSuggestionIntoMainDocumentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.suggestions
  .mergeSuggestionIntoMainDocument({ body: { docId: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuggestChangeMergeResponse
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
| <code>body</code> | <code>[SuggestChangeMergeRequest](src/models/suggest-change-merge-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.suggestions.mergeSuggestionIntoMainDocument(request)`

- **OnSuccess**: <code>[SuggestChangeMergeResponse](src/models/suggest-change-merge-response.ts)</code>
- **OnError**: throws <code>[Suggestions.MergeSuggestionIntoMainDocumentError](src/resources/suggestions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.suggestions.mergeSuggestionIntoMainDocument(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuggestChangeMergeResponse, Suggestions.MergeSuggestionIntoMainDocumentError&gt;</code>, with `result.value` of type <code>[SuggestChangeMergeResponse](src/models/suggest-change-merge-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ArchbeeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

