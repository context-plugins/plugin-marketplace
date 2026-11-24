# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [ArchbeeClient](archbee/client.py)

## ApiReference

> Source: [ApiReference](archbee/apis/api_reference.py)

<details>
<summary><code>def info_open_api_document(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[InfoApiReferenceResponse, InfoOpenApiDocumentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get info of an existing Open Api tree

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.api_reference.with_raw_response.info_open_api_document()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InfoApiReferenceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type InfoOpenApiDocumentErrorBody
```

**Async**

```python
result = await async_client.api_reference.with_raw_response.info_open_api_document()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InfoApiReferenceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type InfoOpenApiDocumentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](archbee/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](archbee/core/results.py)&#91;[InfoApiReferenceResponse](archbee/models/info_api_reference_response.py), [InfoOpenApiDocumentErrorBody](archbee/errors/info_open_api_document_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[InfoApiReferenceResponse](archbee/models/info_api_reference_response.py)</code> -- Status

**On `Failure`**: `error` is <code>[InfoOpenApiDocumentErrorBody](archbee/errors/info_open_api_document_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InfoApiReference400Error1](archbee/models/info_api_reference400_error1.py)</code> |
| anything unmapped | <code>[RawError](archbee/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sync_open_api_document(file: FileInput, *, doc_tree_id: str | None = "21-character__string0", type_: TypeOrStr | None = Type.OPENAPI, open_api_try_it: OpenApiTryItOrStr | None = None, open_api_use_own_backend: OpenApiUseOwnBackendOrStr | None = None, show_download_open_api_file: ShowDownloadOpenApiFileOrStr | None = None, should_create_schema_category: ShouldCreateSchemaCategoryOrStr | None = None, should_create_intro: ShouldCreateIntroOrStr | None = None, open_api_language_examples: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SyncApiReferenceResponse, SyncOpenApiDocumentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sync Open Api document with a new or existing Open Api tree

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.api_reference.with_raw_response.sync_open_api_document(
    Path("path/to/file.bin"),
    doc_tree_id="21-character__string0",
    open_api_language_examples="[\"python\",\"r\",\"javascript\"]",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SyncApiReferenceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SyncOpenApiDocumentErrorBody
```

**Async**

```python
result = await async_client.api_reference.with_raw_response.sync_open_api_document(
    Path("path/to/file.bin"),
    doc_tree_id="21-character__string0",
    open_api_language_examples="[\"python\",\"r\",\"javascript\"]",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SyncApiReferenceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SyncOpenApiDocumentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>file</code> | <code>FileInput</code> | Open api file, .json or .yml or .yaml or .zip |
| <code>doc_tree_id</code> | <code>str \| None</code> | OPTIONAL, main category id where open api was imported; if undefined, a new docTree is created and its id is returned<br>**Default**: <code>"21-character__string0"</code> |
| <code>type_</code> | <code>[TypeOrStr](archbee/models/enums/type.py) \| None</code> | Type of import file. Default openapi<br>**Default**: <code>Type.OPENAPI</code> |
| <code>open_api_try_it</code> | <code>[OpenApiTryItOrStr](archbee/models/enums/open_api_try_it.py) \| None</code> | OPTIONAL. You can now test your API's directly in the editor or on your published docs with the new API Try It!<br>**Default**: <code>None</code> |
| <code>open_api_use_own_backend</code> | <code>[OpenApiUseOwnBackendOrStr](archbee/models/enums/open_api_use_own_backend.py) \| None</code> | OPTIONAL. When 'Try It' is enabled, send requests directly from the browser to the URL defined in the OpenAPI spec instead of proxying through Archbee. Requires CORS configured on your backend.<br>**Default**: <code>None</code> |
| <code>show_download_open_api_file</code> | <code>[ShowDownloadOpenApiFileOrStr](archbee/models/enums/show_download_open_api_file.py) \| None</code> | OPTIONAL. You can show/hide the download link of the imported Open API file in the Open API tree.<br>**Default**: <code>None</code> |
| <code>should_create_schema_category</code> | <code>[ShouldCreateSchemaCategoryOrStr](archbee/models/enums/should_create_schema_category.py) \| None</code> | OPTIONAL. You can create models category to display all your models.<br>**Default**: <code>None</code> |
| <code>should_create_intro</code> | <code>[ShouldCreateIntroOrStr](archbee/models/enums/should_create_intro.py) \| None</code> | OPTIONAL. You can create an additional document to display open api intro.<br>**Default**: <code>None</code> |
| <code>open_api_language_examples</code> | <code>str \| None</code> | OPTIONAL. Add your custom language examples. Maximum 5 programming language examples are allowed!<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](archbee/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](archbee/core/results.py)&#91;[SyncApiReferenceResponse](archbee/models/sync_api_reference_response.py), [SyncOpenApiDocumentErrorBody](archbee/errors/sync_open_api_document_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SyncApiReferenceResponse](archbee/models/sync_api_reference_response.py)</code> -- Import OK status

**On `Failure`**: `error` is <code>[SyncOpenApiDocumentErrorBody](archbee/errors/sync_open_api_document_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[SyncApiReference400Error1](archbee/models/sync_api_reference400_error1.py)</code> |
| anything unmapped | <code>[RawError](archbee/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AccessControl

> Source: [AccessControl](archbee/apis/access_control.py)

<details>
<summary><code>def request_magic_link_access(body: AccessControlRequestRequest | AccessControlRequestRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AccessControlRequestResponse, RequestMagicLinkAccessErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submit a reader's email as a pending request to be added to the space's magic-link whitelist. The request does NOT grant access on its own — an admin must approve it. The space must be configured for Magic Link (Magic Link enabled, the portal gating content, and the team's plan allowing it); otherwise the request is refused with 400. There is one request per (email, space). A repeat request for the same email is idempotent per status: a Pending request returns the existing row unchanged; an Accepted request whose email is still whitelisted also returns it unchanged; but an Accepted request whose access was later revoked, or a previously Rejected request, is put back into the Pending queue and re-notifies the admins — so a rejected or revoked reader can always re-apply.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.access_control.with_raw_response.request_magic_link_access(AccessControlRequestRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessControlRequestResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RequestMagicLinkAccessErrorBody
```

**Async**

```python
result = await async_client.access_control.with_raw_response.request_magic_link_access(AccessControlRequestRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessControlRequestResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RequestMagicLinkAccessErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AccessControlRequestRequest](archbee/models/access_control_request_request.py) \| [AccessControlRequestRequestDict](archbee/models/access_control_request_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](archbee/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](archbee/core/results.py)&#91;[AccessControlRequestResponse](archbee/models/access_control_request_response.py), [RequestMagicLinkAccessErrorBody](archbee/errors/request_magic_link_access_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AccessControlRequestResponse](archbee/models/access_control_request_response.py)</code> -- Process status

**On `Failure`**: `error` is <code>[RequestMagicLinkAccessErrorBody](archbee/errors/request_magic_link_access_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[AccessControlRequest400Error1](archbee/models/access_control_request400_error1.py)</code> |
| anything unmapped | <code>[RawError](archbee/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Documents

> Source: [Documents](archbee/apis/documents.py)

<details>
<summary><code>def delete_document(body: DocRequest | DocRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DocResponse, DeleteDocumentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete document by docId

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.documents.with_raw_response.delete_document(DocRequest(doc_id="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DocResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteDocumentErrorBody
```

**Async**

```python
result = await async_client.documents.with_raw_response.delete_document(DocRequest(doc_id="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DocResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteDocumentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DocRequest](archbee/models/doc_request.py) \| [DocRequestDict](archbee/models/doc_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](archbee/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](archbee/core/results.py)&#91;[DocResponse](archbee/models/doc_response.py), [DeleteDocumentErrorBody](archbee/errors/delete_document_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DocResponse](archbee/models/doc_response.py)</code> -- Delete status

**On `Failure`**: `error` is <code>[DeleteDocumentErrorBody](archbee/errors/delete_document_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Doc400Error1](archbee/models/doc400_error1.py)</code> |
| anything unmapped | <code>[RawError](archbee/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_document(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DocResponse1, GetDocumentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a document in markdown, html, json, or source format.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.documents.with_raw_response.get_document()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DocResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDocumentErrorBody
```

**Async**

```python
result = await async_client.documents.with_raw_response.get_document()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DocResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDocumentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](archbee/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](archbee/core/results.py)&#91;[DocResponse1](archbee/models/doc_response1.py), [GetDocumentErrorBody](archbee/errors/get_document_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DocResponse1](archbee/models/doc_response1.py)</code> -- Successful response containing the document content.

**On `Failure`**: `error` is <code>[GetDocumentErrorBody](archbee/errors/get_document_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Doc400Error1](archbee/models/doc400_error1.py)</code> |
| anything unmapped | <code>[RawError](archbee/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def import_content(file: FileInput, *, type_: Type1OrStr | None = Type1.MARKDOWN, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ImportContentResponse, ImportContentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create new Doc from imported markdown file. In case of zip file, create a new docTree and keeps archived tree structure.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.documents.with_raw_response.import_content(Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ImportContentResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ImportContentErrorBody
```

**Async**

```python
result = await async_client.documents.with_raw_response.import_content(Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ImportContentResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ImportContentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>file</code> | <code>FileInput</code> | Markdown file (.md) or archive (.zip) containing multiple markdown files. |
| <code>type_</code> | <code>[Type1OrStr](archbee/models/enums/type1.py) \| None</code> | Type of import file. Only markdown supported for now on this route.<br>**Default**: <code>Type1.MARKDOWN</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](archbee/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](archbee/core/results.py)&#91;[ImportContentResponse](archbee/models/import_content_response.py), [ImportContentErrorBody](archbee/errors/import_content_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ImportContentResponse](archbee/models/import_content_response.py)</code> -- Import OK status

**On `Failure`**: `error` is <code>[ImportContentErrorBody](archbee/errors/import_content_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ImportContent400Error1](archbee/models/import_content400_error1.py)</code> |
| anything unmapped | <code>[RawError](archbee/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_document(body: DocsSearchRequest | DocsSearchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DocsSearchResponse, SearchDocumentErrorBody]</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
result = client.documents.with_raw_response.search_document(DocsSearchRequest(query="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DocsSearchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchDocumentErrorBody
```

**Async**

```python
result = await async_client.documents.with_raw_response.search_document(DocsSearchRequest(query="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DocsSearchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchDocumentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DocsSearchRequest](archbee/models/docs_search_request.py) \| [DocsSearchRequestDict](archbee/models/docs_search_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](archbee/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](archbee/core/results.py)&#91;[DocsSearchResponse](archbee/models/docs_search_response.py), [SearchDocumentErrorBody](archbee/errors/search_document_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DocsSearchResponse](archbee/models/docs_search_response.py)</code> -- Process status

**On `Failure`**: `error` is <code>[SearchDocumentErrorBody](archbee/errors/search_document_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[DocsSearch400Error1](archbee/models/docs_search400_error1.py)</code> |
| anything unmapped | <code>[RawError](archbee/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_create_document(body: DocRequest1 | DocRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DocResponse2, UpdateCreateDocumentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create / Update Doc by docId

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.documents.with_raw_response.update_create_document(DocRequest1(content="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DocResponse2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCreateDocumentErrorBody
```

**Async**

```python
result = await async_client.documents.with_raw_response.update_create_document(
    DocRequest1(content="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DocResponse2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCreateDocumentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DocRequest1](archbee/models/doc_request1.py) \| [DocRequest1Dict](archbee/models/doc_request1.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](archbee/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](archbee/core/results.py)&#91;[DocResponse2](archbee/models/doc_response2.py), [UpdateCreateDocumentErrorBody](archbee/errors/update_create_document_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DocResponse2](archbee/models/doc_response2.py)</code> -- Process status

**On `Failure`**: `error` is <code>[UpdateCreateDocumentErrorBody](archbee/errors/update_create_document_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Doc400Error1](archbee/models/doc400_error1.py)</code> |
| anything unmapped | <code>[RawError](archbee/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## FileManager

> Source: [FileManager](archbee/apis/file_manager.py)

<details>
<summary><code>def delete_a_file_manager_file(body: FileManagerFileRequest | FileManagerFileRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteAFileManagerFileErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a File Manager file or folder (folders delete their contents recursively).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.file_manager.with_raw_response.delete_a_file_manager_file(
    FileManagerFileRequest(file_id="some example string")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAFileManagerFileErrorBody
```

**Async**

```python
result = await async_client.file_manager.with_raw_response.delete_a_file_manager_file(
    FileManagerFileRequest(file_id="some example string")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAFileManagerFileErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[FileManagerFileRequest](archbee/models/file_manager_file_request.py) \| [FileManagerFileRequestDict](archbee/models/file_manager_file_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](archbee/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](archbee/core/results.py)&#91;None, [DeleteAFileManagerFileErrorBody](archbee/errors/delete_a_file_manager_file_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteAFileManagerFileErrorBody](archbee/errors/delete_a_file_manager_file_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[FileManagerFile400Error1](archbee/models/file_manager_file400_error1.py)</code> |
| anything unmapped | <code>[RawError](archbee/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_file_manager_files(*, parent_id: str | None = None, item_type: ItemTypeOrStr | None = None, search_query: str | None = None, page_index: int | None = None, page_size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListFileManagerFilesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List files and folders in the File Manager. Omitting parentId lists every entry across all folders (use searchQuery/pagination to find one); pass a folder id to list that folder's direct children. Filter with itemType (directory, image, or file).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.file_manager.with_raw_response.list_file_manager_files()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListFileManagerFilesErrorBody
```

**Async**

```python
result = await async_client.file_manager.with_raw_response.list_file_manager_files()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListFileManagerFilesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>parent_id</code> | <code>str \| None</code> | OPTIONAL. Folder id to list the direct children of. Omit to list all entries across every folder.<br>**Default**: <code>None</code> |
| <code>item_type</code> | <code>[ItemTypeOrStr](archbee/models/enums/item_type.py) \| None</code> | OPTIONAL. Filter by entry type.<br>**Default**: <code>None</code> |
| <code>search_query</code> | <code>str \| None</code> | OPTIONAL. Case-insensitive filename filter.<br>**Default**: <code>None</code> |
| <code>page_index</code> | <code>int \| None</code> | OPTIONAL. Zero-based page index (default 0).<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | OPTIONAL. Page size (1-200).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](archbee/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](archbee/core/results.py)&#91;None, [ListFileManagerFilesErrorBody](archbee/errors/list_file_manager_files_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListFileManagerFilesErrorBody](archbee/errors/list_file_manager_files_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[FileManagerFiles400Error1](archbee/models/file_manager_files400_error1.py)</code> |
| anything unmapped | <code>[RawError](archbee/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def move_a_file_manager_file(body: FileManagerMoveRequest | FileManagerMoveRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, MoveAFileManagerFileErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Move a File Manager file or folder into another folder. Pass a null newParentId to move it to the root.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.file_manager.with_raw_response.move_a_file_manager_file(
    FileManagerMoveRequest(file_id="some example string", new_parent_id="some example string")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MoveAFileManagerFileErrorBody
```

**Async**

```python
result = await async_client.file_manager.with_raw_response.move_a_file_manager_file(
    FileManagerMoveRequest(file_id="some example string", new_parent_id="some example string")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MoveAFileManagerFileErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[FileManagerMoveRequest](archbee/models/file_manager_move_request.py) \| [FileManagerMoveRequestDict](archbee/models/file_manager_move_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](archbee/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](archbee/core/results.py)&#91;None, [MoveAFileManagerFileErrorBody](archbee/errors/move_a_file_manager_file_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[MoveAFileManagerFileErrorBody](archbee/errors/move_a_file_manager_file_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[FileManagerMove400Error1](archbee/models/file_manager_move400_error1.py)</code> |
| anything unmapped | <code>[RawError](archbee/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def overwrite_a_file_manager_file(file_id: str, file: FileInput, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, OverwriteAFileManagerFileErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replace the contents of an existing File Manager file in place. The file keeps its id and public URL, so existing document embeds update automatically.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.file_manager.with_raw_response.overwrite_a_file_manager_file(
    "some example string", Path("path/to/file.bin")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type OverwriteAFileManagerFileErrorBody
```

**Async**

```python
result = await async_client.file_manager.with_raw_response.overwrite_a_file_manager_file(
    "some example string", Path("path/to/file.bin")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type OverwriteAFileManagerFileErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>file_id</code> | <code>str</code> | Id of the existing file to overwrite. |
| <code>file</code> | <code>FileInput</code> | New file contents. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](archbee/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](archbee/core/results.py)&#91;None, [OverwriteAFileManagerFileErrorBody](archbee/errors/overwrite_a_file_manager_file_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[OverwriteAFileManagerFileErrorBody](archbee/errors/overwrite_a_file_manager_file_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[FileManagerReplace400Error1](archbee/models/file_manager_replace400_error1.py)</code> |
| anything unmapped | <code>[RawError](archbee/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upload_single_file(file: FileInput, *, is_public: IsPublicOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UploadFileResponse, UploadSingleFileErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a single file to the File Manager

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.file_manager.with_raw_response.upload_single_file(Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UploadFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UploadSingleFileErrorBody
```

**Async**

```python
result = await async_client.file_manager.with_raw_response.upload_single_file(Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UploadFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UploadSingleFileErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>file</code> | <code>FileInput</code> | Open api file, .json or .yml or .yaml or .zip |
| <code>is_public</code> | <code>[IsPublicOrStr](archbee/models/enums/is_public.py) \| None</code> | OPTIONAL. Whether the uploaded file is public or not regarding AWS link.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](archbee/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](archbee/core/results.py)&#91;[UploadFileResponse](archbee/models/upload_file_response.py), [UploadSingleFileErrorBody](archbee/errors/upload_single_file_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UploadFileResponse](archbee/models/upload_file_response.py)</code> -- Upload OK status

**On `Failure`**: `error` is <code>[UploadSingleFileErrorBody](archbee/errors/upload_single_file_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[UploadFile400Error1](archbee/models/upload_file400_error1.py)</code> |
| anything unmapped | <code>[RawError](archbee/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Organization

> Source: [Organization](archbee/apis/organization.py)

<details>
<summary><code>def organization_display_rules(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TeamDisplayRulesResponse, OrganizationDisplayRulesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Export a list of display rules.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.organization.with_raw_response.organization_display_rules()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TeamDisplayRulesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type OrganizationDisplayRulesErrorBody
```

**Async**

```python
result = await async_client.organization.with_raw_response.organization_display_rules()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TeamDisplayRulesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type OrganizationDisplayRulesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](archbee/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](archbee/core/results.py)&#91;[TeamDisplayRulesResponse](archbee/models/team_display_rules_response.py), [OrganizationDisplayRulesErrorBody](archbee/errors/organization_display_rules_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TeamDisplayRulesResponse](archbee/models/team_display_rules_response.py)</code> -- Successful export todo

**On `Failure`**: `error` is <code>[OrganizationDisplayRulesErrorBody](archbee/errors/organization_display_rules_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[TeamDisplayRules400Error1](archbee/models/team_display_rules400_error1.py)</code> |
| anything unmapped | <code>[RawError](archbee/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def organization_export(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, OrganizationExportErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Export assets, spaces with documents, team and user data from Archbee given teamId. Use --output

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.organization.with_raw_response.organization_export()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type OrganizationExportErrorBody
```

**Async**

```python
result = await async_client.organization.with_raw_response.organization_export()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type OrganizationExportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](archbee/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](archbee/core/results.py)&#91;None, [OrganizationExportErrorBody](archbee/errors/organization_export_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[OrganizationExportErrorBody](archbee/errors/organization_export_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[TeamExport400Error1](archbee/models/team_export400_error1.py)</code> |
| anything unmapped | <code>[RawError](archbee/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SpaceGroups

> Source: [SpaceGroups](archbee/apis/space_groups.py)

<details>
<summary><code>def create_space_group(body: SpaceGroupCreateRequest | SpaceGroupCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SpaceGroupCreateResponse, CreateSpaceGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new space group with desired fields, return the space group.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.space_groups.with_raw_response.create_space_group(SpaceGroupCreateRequest(name="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SpaceGroupCreateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSpaceGroupErrorBody
```

**Async**

```python
result = await async_client.space_groups.with_raw_response.create_space_group(
    SpaceGroupCreateRequest(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SpaceGroupCreateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSpaceGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SpaceGroupCreateRequest](archbee/models/space_group_create_request.py) \| [SpaceGroupCreateRequestDict](archbee/models/space_group_create_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](archbee/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](archbee/core/results.py)&#91;[SpaceGroupCreateResponse](archbee/models/space_group_create_response.py), [CreateSpaceGroupErrorBody](archbee/errors/create_space_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SpaceGroupCreateResponse](archbee/models/space_group_create_response.py)</code> -- Process status

**On `Failure`**: `error` is <code>[CreateSpaceGroupErrorBody](archbee/errors/create_space_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[SpaceGroupCreate400Error1](archbee/models/space_group_create400_error1.py)</code> |
| anything unmapped | <code>[RawError](archbee/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_space_group(body: SpaceGroupDeleteRequest | SpaceGroupDeleteRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SpaceGroupDeleteResponse, DeleteSpaceGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Archbee space group with given spaceGroupId.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.space_groups.with_raw_response.delete_space_group(SpaceGroupDeleteRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SpaceGroupDeleteResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteSpaceGroupErrorBody
```

**Async**

```python
result = await async_client.space_groups.with_raw_response.delete_space_group(SpaceGroupDeleteRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SpaceGroupDeleteResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteSpaceGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SpaceGroupDeleteRequest](archbee/models/space_group_delete_request.py) \| [SpaceGroupDeleteRequestDict](archbee/models/space_group_delete_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](archbee/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](archbee/core/results.py)&#91;[SpaceGroupDeleteResponse](archbee/models/space_group_delete_response.py), [DeleteSpaceGroupErrorBody](archbee/errors/delete_space_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SpaceGroupDeleteResponse](archbee/models/space_group_delete_response.py)</code> -- Process status

**On `Failure`**: `error` is <code>[DeleteSpaceGroupErrorBody](archbee/errors/delete_space_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[SpaceGroupDelete400Error1](archbee/models/space_group_delete400_error1.py)</code> |
| anything unmapped | <code>[RawError](archbee/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Suggestions

> Source: [Suggestions](archbee/apis/suggestions.py)

<details>
<summary><code>def discard_suggestion_document(body: SuggestChangeDiscardRequest | SuggestChangeDiscardRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuggestChangeDiscardResponse, DiscardSuggestionDocumentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Discard and delete a suggestion document without merging it into the base document. The suggestion document must have a docId starting with 'SUGGEST-'.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.suggestions.with_raw_response.discard_suggestion_document(
    SuggestChangeDiscardRequest(doc_id="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuggestChangeDiscardResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DiscardSuggestionDocumentErrorBody
```

**Async**

```python
result = await async_client.suggestions.with_raw_response.discard_suggestion_document(
    SuggestChangeDiscardRequest(doc_id="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuggestChangeDiscardResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DiscardSuggestionDocumentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SuggestChangeDiscardRequest](archbee/models/suggest_change_discard_request.py) \| [SuggestChangeDiscardRequestDict](archbee/models/suggest_change_discard_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](archbee/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](archbee/core/results.py)&#91;[SuggestChangeDiscardResponse](archbee/models/suggest_change_discard_response.py), [DiscardSuggestionDocumentErrorBody](archbee/errors/discard_suggestion_document_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuggestChangeDiscardResponse](archbee/models/suggest_change_discard_response.py)</code> -- Suggestion successfully discarded

**On `Failure`**: `error` is <code>[DiscardSuggestionDocumentErrorBody](archbee/errors/discard_suggestion_document_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[SuggestChangeDiscard400Error1](archbee/models/suggest_change_discard400_error1.py)</code> |
| anything unmapped | <code>[RawError](archbee/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def merge_suggestion_into_main_document(body: SuggestChangeMergeRequest | SuggestChangeMergeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuggestChangeMergeResponse, MergeSuggestionIntoMainDocumentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Merge a suggestion document into the base document. The suggestion document must have a docId starting with 'SUGGEST-'.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.suggestions.with_raw_response.merge_suggestion_into_main_document(
    SuggestChangeMergeRequest(doc_id="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuggestChangeMergeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MergeSuggestionIntoMainDocumentErrorBody
```

**Async**

```python
result = await async_client.suggestions.with_raw_response.merge_suggestion_into_main_document(
    SuggestChangeMergeRequest(doc_id="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuggestChangeMergeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MergeSuggestionIntoMainDocumentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SuggestChangeMergeRequest](archbee/models/suggest_change_merge_request.py) \| [SuggestChangeMergeRequestDict](archbee/models/suggest_change_merge_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](archbee/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](archbee/core/results.py)&#91;[SuggestChangeMergeResponse](archbee/models/suggest_change_merge_response.py), [MergeSuggestionIntoMainDocumentErrorBody](archbee/errors/merge_suggestion_into_main_document_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuggestChangeMergeResponse](archbee/models/suggest_change_merge_response.py)</code> -- Suggestion successfully merged

**On `Failure`**: `error` is <code>[MergeSuggestionIntoMainDocumentErrorBody](archbee/errors/merge_suggestion_into_main_document_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[SuggestChangeMerge400Error1](archbee/models/suggest_change_merge400_error1.py)</code> |
| anything unmapped | <code>[RawError](archbee/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

