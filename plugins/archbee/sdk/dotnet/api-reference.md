# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [ArchbeeClient](src/Archbee/ArchbeeClient.cs)

## ApiReference

> Source: [ApiReference](src/Archbee/Api/ApiReference.cs)

<details>
<summary><code>Task&lt;InfoApiReferenceResponse&gt; InfoOpenApiDocument(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ApiReference.InfoOpenApiDocument();
    // TODO: Handle 'response' of type InfoApiReferenceResponse
}
catch (ApiException<InfoOpenApiDocumentError> ex)
{
    if (ex.Error.TryGetInfoApiReference400Error1(out var error))
    {
        // TODO: Handle 'error' of type InfoApiReference400Error1
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InfoApiReferenceResponse](src/Archbee/Models/InfoApiReferenceResponse.cs)</code>

**OnError**: <code>[ApiException](src/Archbee/Core/Exceptions/ApiException.cs)&lt;[InfoOpenApiDocumentError](src/Archbee/Errors/InfoOpenApiDocumentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SyncApiReferenceResponse&gt; SyncOpenApiDocument(SyncOpenApiDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ApiReference.SyncOpenApiDocument(new SyncOpenApiDocumentRequest
    {
        File = Array.Empty<byte>(),
        DocTreeId = "21-character__string0",
        OpenApiLanguageExamples = "[\"python\",\"r\",\"javascript\"]",
    });
    // TODO: Handle 'response' of type SyncApiReferenceResponse
}
catch (ApiException<SyncOpenApiDocumentError> ex)
{
    if (ex.Error.TryGetSyncApiReference400Error1(out var error))
    {
        // TODO: Handle 'error' of type SyncApiReference400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SyncOpenApiDocumentRequest](src/Archbee/Requests/ApiReference/SyncOpenApiDocumentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SyncApiReferenceResponse](src/Archbee/Models/SyncApiReferenceResponse.cs)</code>

**OnError**: <code>[ApiException](src/Archbee/Core/Exceptions/ApiException.cs)&lt;[SyncOpenApiDocumentError](src/Archbee/Errors/SyncOpenApiDocumentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AccessControl

> Source: [AccessControl](src/Archbee/Api/AccessControl.cs)

<details>
<summary><code>Task&lt;AccessControlRequestResponse&gt; RequestMagicLinkAccess(RequestMagicLinkAccessRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.AccessControl.RequestMagicLinkAccess(new RequestMagicLinkAccessRequest
    {
        Body = new AccessControlRequestRequest(),
    });
    // TODO: Handle 'response' of type AccessControlRequestResponse
}
catch (ApiException<RequestMagicLinkAccessError> ex)
{
    if (ex.Error.TryGetAccessControlRequest400Error1(out var error))
    {
        // TODO: Handle 'error' of type AccessControlRequest400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RequestMagicLinkAccessRequest](src/Archbee/Requests/AccessControl/RequestMagicLinkAccessRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccessControlRequestResponse](src/Archbee/Models/AccessControlRequestResponse.cs)</code>

**OnError**: <code>[ApiException](src/Archbee/Core/Exceptions/ApiException.cs)&lt;[RequestMagicLinkAccessError](src/Archbee/Errors/RequestMagicLinkAccessError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Documents

> Source: [Documents](src/Archbee/Api/Documents.cs)

<details>
<summary><code>Task&lt;DocResponse&gt; DeleteDocument(DeleteDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Documents.DeleteDocument(new DeleteDocumentRequest
    {
        Body = new DocRequest { DocId = "some example string" },
    });
    // TODO: Handle 'response' of type DocResponse
}
catch (ApiException<DeleteDocumentError> ex)
{
    if (ex.Error.TryGetDoc400Error1(out var error))
    {
        // TODO: Handle 'error' of type Doc400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteDocumentRequest](src/Archbee/Requests/Documents/DeleteDocumentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DocResponse](src/Archbee/Models/DocResponse.cs)</code>

**OnError**: <code>[ApiException](src/Archbee/Core/Exceptions/ApiException.cs)&lt;[DeleteDocumentError](src/Archbee/Errors/DeleteDocumentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DocResponse1&gt; GetDocument(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Documents.GetDocument();
    // TODO: Handle 'response' of type DocResponse1
}
catch (ApiException<GetDocumentError> ex)
{
    if (ex.Error.TryGetDoc400Error1(out var error))
    {
        // TODO: Handle 'error' of type Doc400Error1
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DocResponse1](src/Archbee/Models/DocResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Archbee/Core/Exceptions/ApiException.cs)&lt;[GetDocumentError](src/Archbee/Errors/GetDocumentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ImportContentResponse&gt; ImportContent(ImportContentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Documents.ImportContent(new ImportContentRequest { File = Array.Empty<byte>() });
    // TODO: Handle 'response' of type ImportContentResponse
}
catch (ApiException<ImportContentError> ex)
{
    if (ex.Error.TryGetImportContent400Error1(out var error))
    {
        // TODO: Handle 'error' of type ImportContent400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ImportContentRequest](src/Archbee/Requests/Documents/ImportContentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ImportContentResponse](src/Archbee/Models/ImportContentResponse.cs)</code>

**OnError**: <code>[ApiException](src/Archbee/Core/Exceptions/ApiException.cs)&lt;[ImportContentError](src/Archbee/Errors/ImportContentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DocsSearchResponse&gt; SearchDocument(SearchDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Documents.SearchDocument(new SearchDocumentRequest
    {
        Body = new DocsSearchRequest { Query = "some example string" },
    });
    // TODO: Handle 'response' of type DocsSearchResponse
}
catch (ApiException<SearchDocumentError> ex)
{
    if (ex.Error.TryGetDocsSearch400Error1(out var error))
    {
        // TODO: Handle 'error' of type DocsSearch400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchDocumentRequest](src/Archbee/Requests/Documents/SearchDocumentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DocsSearchResponse](src/Archbee/Models/DocsSearchResponse.cs)</code>

**OnError**: <code>[ApiException](src/Archbee/Core/Exceptions/ApiException.cs)&lt;[SearchDocumentError](src/Archbee/Errors/SearchDocumentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DocResponse2&gt; UpdateCreateDocument(UpdateCreateDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Documents.UpdateCreateDocument(new UpdateCreateDocumentRequest
    {
        Body = new DocRequest1 { Content = "some example string" },
    });
    // TODO: Handle 'response' of type DocResponse2
}
catch (ApiException<UpdateCreateDocumentError> ex)
{
    if (ex.Error.TryGetDoc400Error1(out var error))
    {
        // TODO: Handle 'error' of type Doc400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateCreateDocumentRequest](src/Archbee/Requests/Documents/UpdateCreateDocumentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DocResponse2](src/Archbee/Models/DocResponse2.cs)</code>

**OnError**: <code>[ApiException](src/Archbee/Core/Exceptions/ApiException.cs)&lt;[UpdateCreateDocumentError](src/Archbee/Errors/UpdateCreateDocumentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## FileManager

> Source: [FileManager](src/Archbee/Api/FileManager.cs)

<details>
<summary><code>Task DeleteAFileManagerFile(DeleteAFileManagerFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.FileManager.DeleteAFileManagerFile(new DeleteAFileManagerFileRequest
    {
        Body = new FileManagerFileRequest { FileId = "some example string" },
    });
}
catch (ApiException<DeleteAFileManagerFileError> ex)
{
    if (ex.Error.TryGetFileManagerFile400Error1(out var error))
    {
        // TODO: Handle 'error' of type FileManagerFile400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteAFileManagerFileRequest](src/Archbee/Requests/FileManager/DeleteAFileManagerFileRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Archbee/Core/Exceptions/ApiException.cs)&lt;[DeleteAFileManagerFileError](src/Archbee/Errors/DeleteAFileManagerFileError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListFileManagerFiles(ListFileManagerFilesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.FileManager.ListFileManagerFiles(new ListFileManagerFilesRequest());
}
catch (ApiException<ListFileManagerFilesError> ex)
{
    if (ex.Error.TryGetFileManagerFiles400Error1(out var error))
    {
        // TODO: Handle 'error' of type FileManagerFiles400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListFileManagerFilesRequest](src/Archbee/Requests/FileManager/ListFileManagerFilesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Archbee/Core/Exceptions/ApiException.cs)&lt;[ListFileManagerFilesError](src/Archbee/Errors/ListFileManagerFilesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task MoveAFileManagerFile(MoveAFileManagerFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.FileManager.MoveAFileManagerFile(new MoveAFileManagerFileRequest
    {
        Body = new FileManagerMoveRequest { FileId = "some example string", NewParentId = "some example string" },
    });
}
catch (ApiException<MoveAFileManagerFileError> ex)
{
    if (ex.Error.TryGetFileManagerMove400Error1(out var error))
    {
        // TODO: Handle 'error' of type FileManagerMove400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MoveAFileManagerFileRequest](src/Archbee/Requests/FileManager/MoveAFileManagerFileRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Archbee/Core/Exceptions/ApiException.cs)&lt;[MoveAFileManagerFileError](src/Archbee/Errors/MoveAFileManagerFileError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task OverwriteAFileManagerFile(OverwriteAFileManagerFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.FileManager.OverwriteAFileManagerFile(new OverwriteAFileManagerFileRequest
    {
        FileId = "some example string",
        File = Array.Empty<byte>(),
    });
}
catch (ApiException<OverwriteAFileManagerFileError> ex)
{
    if (ex.Error.TryGetFileManagerReplace400Error1(out var error))
    {
        // TODO: Handle 'error' of type FileManagerReplace400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[OverwriteAFileManagerFileRequest](src/Archbee/Requests/FileManager/OverwriteAFileManagerFileRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Archbee/Core/Exceptions/ApiException.cs)&lt;[OverwriteAFileManagerFileError](src/Archbee/Errors/OverwriteAFileManagerFileError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UploadFileResponse&gt; UploadSingleFile(UploadSingleFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.FileManager.UploadSingleFile(new UploadSingleFileRequest
    {
        File = Array.Empty<byte>(),
    });
    // TODO: Handle 'response' of type UploadFileResponse
}
catch (ApiException<UploadSingleFileError> ex)
{
    if (ex.Error.TryGetUploadFile400Error1(out var error))
    {
        // TODO: Handle 'error' of type UploadFile400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UploadSingleFileRequest](src/Archbee/Requests/FileManager/UploadSingleFileRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UploadFileResponse](src/Archbee/Models/UploadFileResponse.cs)</code>

**OnError**: <code>[ApiException](src/Archbee/Core/Exceptions/ApiException.cs)&lt;[UploadSingleFileError](src/Archbee/Errors/UploadSingleFileError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Organization

> Source: [Organization](src/Archbee/Api/Organization.cs)

<details>
<summary><code>Task&lt;TeamDisplayRulesResponse&gt; OrganizationDisplayRules(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Organization.OrganizationDisplayRules();
    // TODO: Handle 'response' of type TeamDisplayRulesResponse
}
catch (ApiException<OrganizationDisplayRulesError> ex)
{
    if (ex.Error.TryGetTeamDisplayRules400Error1(out var error))
    {
        // TODO: Handle 'error' of type TeamDisplayRules400Error1
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TeamDisplayRulesResponse](src/Archbee/Models/TeamDisplayRulesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Archbee/Core/Exceptions/ApiException.cs)&lt;[OrganizationDisplayRulesError](src/Archbee/Errors/OrganizationDisplayRulesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task OrganizationExport(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Organization.OrganizationExport();
}
catch (ApiException<OrganizationExportError> ex)
{
    if (ex.Error.TryGetTeamExport400Error1(out var error))
    {
        // TODO: Handle 'error' of type TeamExport400Error1
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Archbee/Core/Exceptions/ApiException.cs)&lt;[OrganizationExportError](src/Archbee/Errors/OrganizationExportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SpaceGroups

> Source: [SpaceGroups](src/Archbee/Api/SpaceGroups.cs)

<details>
<summary><code>Task&lt;SpaceGroupCreateResponse&gt; CreateSpaceGroup(CreateSpaceGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.SpaceGroups.CreateSpaceGroup(new CreateSpaceGroupRequest
    {
        Body = new SpaceGroupCreateRequest { Name = "some example string" },
    });
    // TODO: Handle 'response' of type SpaceGroupCreateResponse
}
catch (ApiException<CreateSpaceGroupError> ex)
{
    if (ex.Error.TryGetSpaceGroupCreate400Error1(out var error))
    {
        // TODO: Handle 'error' of type SpaceGroupCreate400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateSpaceGroupRequest](src/Archbee/Requests/SpaceGroups/CreateSpaceGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SpaceGroupCreateResponse](src/Archbee/Models/SpaceGroupCreateResponse.cs)</code>

**OnError**: <code>[ApiException](src/Archbee/Core/Exceptions/ApiException.cs)&lt;[CreateSpaceGroupError](src/Archbee/Errors/CreateSpaceGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SpaceGroupDeleteResponse&gt; DeleteSpaceGroup(DeleteSpaceGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.SpaceGroups.DeleteSpaceGroup(new DeleteSpaceGroupRequest
    {
        Body = new SpaceGroupDeleteRequest(),
    });
    // TODO: Handle 'response' of type SpaceGroupDeleteResponse
}
catch (ApiException<DeleteSpaceGroupError> ex)
{
    if (ex.Error.TryGetSpaceGroupDelete400Error1(out var error))
    {
        // TODO: Handle 'error' of type SpaceGroupDelete400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteSpaceGroupRequest](src/Archbee/Requests/SpaceGroups/DeleteSpaceGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SpaceGroupDeleteResponse](src/Archbee/Models/SpaceGroupDeleteResponse.cs)</code>

**OnError**: <code>[ApiException](src/Archbee/Core/Exceptions/ApiException.cs)&lt;[DeleteSpaceGroupError](src/Archbee/Errors/DeleteSpaceGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Suggestions

> Source: [Suggestions](src/Archbee/Api/Suggestions.cs)

<details>
<summary><code>Task&lt;SuggestChangeDiscardResponse&gt; DiscardSuggestionDocument(DiscardSuggestionDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Suggestions.DiscardSuggestionDocument(new DiscardSuggestionDocumentRequest
    {
        Body = new SuggestChangeDiscardRequest { DocId = "some example string" },
    });
    // TODO: Handle 'response' of type SuggestChangeDiscardResponse
}
catch (ApiException<DiscardSuggestionDocumentError> ex)
{
    if (ex.Error.TryGetSuggestChangeDiscard400Error1(out var error))
    {
        // TODO: Handle 'error' of type SuggestChangeDiscard400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DiscardSuggestionDocumentRequest](src/Archbee/Requests/Suggestions/DiscardSuggestionDocumentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuggestChangeDiscardResponse](src/Archbee/Models/SuggestChangeDiscardResponse.cs)</code>

**OnError**: <code>[ApiException](src/Archbee/Core/Exceptions/ApiException.cs)&lt;[DiscardSuggestionDocumentError](src/Archbee/Errors/DiscardSuggestionDocumentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuggestChangeMergeResponse&gt; MergeSuggestionIntoMainDocument(MergeSuggestionIntoMainDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Suggestions.MergeSuggestionIntoMainDocument(new MergeSuggestionIntoMainDocumentRequest
    {
        Body = new SuggestChangeMergeRequest { DocId = "some example string" },
    });
    // TODO: Handle 'response' of type SuggestChangeMergeResponse
}
catch (ApiException<MergeSuggestionIntoMainDocumentError> ex)
{
    if (ex.Error.TryGetSuggestChangeMerge400Error1(out var error))
    {
        // TODO: Handle 'error' of type SuggestChangeMerge400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MergeSuggestionIntoMainDocumentRequest](src/Archbee/Requests/Suggestions/MergeSuggestionIntoMainDocumentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuggestChangeMergeResponse](src/Archbee/Models/SuggestChangeMergeResponse.cs)</code>

**OnError**: <code>[ApiException](src/Archbee/Core/Exceptions/ApiException.cs)&lt;[MergeSuggestionIntoMainDocumentError](src/Archbee/Errors/MergeSuggestionIntoMainDocumentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

