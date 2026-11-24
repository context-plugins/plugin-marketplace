# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [ShortcutClient](src/Shortcut/ShortcutClient.cs)

## Categories

> Source: [Categories](src/Shortcut/Api/Categories.cs)

<details>
<summary><code>Task&lt;Category&gt; CreateCategory(CreateCategoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Category allows you to create a new Category in Shortcut.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Categories.CreateCategory(new CreateCategoryRequest
    {
        Body = new CreateCategory { Name = "some example string" },
    });
    // TODO: Handle 'response' of type Category
}
catch (ApiException<CreateCategoryError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateCategoryRequest](src/Shortcut/Requests/Categories/CreateCategoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Category](src/Shortcut/Models/Category.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[CreateCategoryError](src/Shortcut/Errors/CreateCategoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteCategory(DeleteCategoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Category can be used to delete any Category.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Categories.DeleteCategory(new DeleteCategoryRequest { CategoryPublicId = 1L });
}
catch (ApiException<DeleteCategoryError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteCategoryRequest](src/Shortcut/Requests/Categories/DeleteCategoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[DeleteCategoryError](src/Shortcut/Errors/DeleteCategoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Category&gt; GetCategory(GetCategoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Category returns information about the selected Category.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Categories.GetCategory(new GetCategoryRequest { CategoryPublicId = 1L });
    // TODO: Handle 'response' of type Category
}
catch (ApiException<GetCategoryError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCategoryRequest](src/Shortcut/Requests/Categories/GetCategoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Category](src/Shortcut/Models/Category.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[GetCategoryError](src/Shortcut/Errors/GetCategoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Category&gt;&gt; ListCategories(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Categories returns a list of all Categories and their attributes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Categories.ListCategories();
    // TODO: Handle 'response' of type IReadOnlyList<Category>
}
catch (ApiException<ListCategoriesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Category](src/Shortcut/Models/Category.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[ListCategoriesError](src/Shortcut/Errors/ListCategoriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Milestone&gt;&gt; ListCategoryMilestones(ListCategoryMilestonesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Category Milestones returns a list of all Milestones with the Category.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Categories.ListCategoryMilestones(new ListCategoryMilestonesRequest
    {
        CategoryPublicId = 1L,
    });
    // TODO: Handle 'response' of type IReadOnlyList<Milestone>
}
catch (ApiException<ListCategoryMilestonesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCategoryMilestonesRequest](src/Shortcut/Requests/Categories/ListCategoryMilestonesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Milestone](src/Shortcut/Models/Milestone.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[ListCategoryMilestonesError](src/Shortcut/Errors/ListCategoryMilestonesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Milestone&gt;&gt; ListCategoryObjectives(ListCategoryObjectivesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all Objectives with the Category.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Categories.ListCategoryObjectives(new ListCategoryObjectivesRequest
    {
        CategoryPublicId = 1L,
    });
    // TODO: Handle 'response' of type IReadOnlyList<Milestone>
}
catch (ApiException<ListCategoryObjectivesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCategoryObjectivesRequest](src/Shortcut/Requests/Categories/ListCategoryObjectivesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Milestone](src/Shortcut/Models/Milestone.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[ListCategoryObjectivesError](src/Shortcut/Errors/ListCategoryObjectivesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Category&gt; UpdateCategory(UpdateCategoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Category allows you to replace a Category name with another name. If you try to name a Category something that already exists, you will receive a 422 response.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Categories.UpdateCategory(new UpdateCategoryRequest
    {
        CategoryPublicId = 1L,
        Body = new UpdateCategory(),
    });
    // TODO: Handle 'response' of type Category
}
catch (ApiException<UpdateCategoryError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateCategoryRequest](src/Shortcut/Requests/Categories/UpdateCategoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Category](src/Shortcut/Models/Category.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[UpdateCategoryError](src/Shortcut/Errors/UpdateCategoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CustomFields

> Source: [CustomFields](src/Shortcut/Api/CustomFields.cs)

<details>
<summary><code>Task DeleteCustomField(DeleteCustomFieldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CustomFields.DeleteCustomField(new DeleteCustomFieldRequest
    {
        CustomFieldPublicId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
}
catch (ApiException<DeleteCustomFieldError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteCustomFieldRequest](src/Shortcut/Requests/CustomFields/DeleteCustomFieldRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[DeleteCustomFieldError](src/Shortcut/Errors/DeleteCustomFieldError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomField&gt; GetCustomField(GetCustomFieldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomFields.GetCustomField(new GetCustomFieldRequest
    {
        CustomFieldPublicId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type CustomField
}
catch (ApiException<GetCustomFieldError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCustomFieldRequest](src/Shortcut/Requests/CustomFields/GetCustomFieldRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomField](src/Shortcut/Models/CustomField.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[GetCustomFieldError](src/Shortcut/Errors/GetCustomFieldError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;CustomField&gt;&gt; ListCustomFields(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomFields.ListCustomFields();
    // TODO: Handle 'response' of type IReadOnlyList<CustomField>
}
catch (ApiException<ListCustomFieldsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[CustomField](src/Shortcut/Models/CustomField.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[ListCustomFieldsError](src/Shortcut/Errors/ListCustomFieldsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomField&gt; UpdateCustomField(UpdateCustomFieldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Custom Field can be used to update the definition of a Custom Field. The order of items in the 'values' collection is interpreted to be their ascending sort order.To delete an existing enum value, simply omit it from the 'values' collection. New enum values may be created inline by including an object in the 'values' collection having a 'value' entry with no 'id' (eg. {'value': 'myNewValue', 'color_key': 'green'}).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomFields.UpdateCustomField(new UpdateCustomFieldRequest
    {
        CustomFieldPublicId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new UpdateCustomField(),
    });
    // TODO: Handle 'response' of type CustomField
}
catch (ApiException<UpdateCustomFieldError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateCustomFieldRequest](src/Shortcut/Requests/CustomFields/UpdateCustomFieldRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomField](src/Shortcut/Models/CustomField.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[UpdateCustomFieldError](src/Shortcut/Errors/UpdateCustomFieldError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Documents

> Source: [Documents](src/Shortcut/Api/Documents.cs)

<details>
<summary><code>Task&lt;DocSlim&gt; CreateDoc(CreateDocRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new Doc. Supports markdown or HTML input via content_format parameter.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Documents.CreateDoc(new CreateDocRequest
    {
        Body = new CreateDoc { Title = "some example string", Content = "some example string" },
    });
    // TODO: Handle 'response' of type DocSlim
}
catch (ApiException<CreateDocError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateDocRequest](src/Shortcut/Requests/Documents/CreateDocRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DocSlim](src/Shortcut/Models/DocSlim.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[CreateDocError](src/Shortcut/Errors/CreateDocError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteDoc(DeleteDocRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a Doc and its associated data. Requires admin access to the doc. When a document is deleted, connected clients will be notified via SSE events.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Documents.DeleteDoc(new DeleteDocRequest
    {
        DocPublicId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new GetDoc(),
    });
}
catch (ApiException<DeleteDocError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteDocRequest](src/Shortcut/Requests/Documents/DeleteDocRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[DeleteDocError](src/Shortcut/Errors/DeleteDocError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Doc&gt; GetDoc(GetDocRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a Doc by its public ID with content. Use content_format=html query parameter to include HTML content.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Documents.GetDoc(new GetDocRequest
    {
        DocPublicId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type Doc
}
catch (ApiException<GetDocError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetDocRequest](src/Shortcut/Requests/Documents/GetDocRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Doc](src/Shortcut/Models/Doc.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[GetDocError](src/Shortcut/Errors/GetDocError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task LinkDocumentToEpic(LinkDocumentToEpicRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a relationship between a Document and an Epic.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Documents.LinkDocumentToEpic(new LinkDocumentToEpicRequest
    {
        DocPublicId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        EpicPublicId = 1L,
    });
}
catch (ApiException<LinkDocumentToEpicError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[LinkDocumentToEpicRequest](src/Shortcut/Requests/Documents/LinkDocumentToEpicRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[LinkDocumentToEpicError](src/Shortcut/Errors/LinkDocumentToEpicError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;DocSlim&gt;&gt; ListDocs(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Docs returns a list of Doc that the current user can read.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Documents.ListDocs();
    // TODO: Handle 'response' of type IReadOnlyList<DocSlim>
}
catch (ApiException<ListDocsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[DocSlim](src/Shortcut/Models/DocSlim.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[ListDocsError](src/Shortcut/Errors/ListDocsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;EpicSlim&gt;&gt; ListDocumentEpics(ListDocumentEpicsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all Epics related to this Document.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Documents.ListDocumentEpics(new ListDocumentEpicsRequest
    {
        DocPublicId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type IReadOnlyList<EpicSlim>
}
catch (ApiException<ListDocumentEpicsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListDocumentEpicsRequest](src/Shortcut/Requests/Documents/ListDocumentEpicsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[EpicSlim](src/Shortcut/Models/EpicSlim.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[ListDocumentEpicsError](src/Shortcut/Errors/ListDocumentEpicsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UnlinkDocumentFromEpic(UnlinkDocumentFromEpicRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a relationship between a Document and an Epic.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Documents.UnlinkDocumentFromEpic(new UnlinkDocumentFromEpicRequest
    {
        DocPublicId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        EpicPublicId = 1L,
    });
}
catch (ApiException<UnlinkDocumentFromEpicError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UnlinkDocumentFromEpicRequest](src/Shortcut/Requests/Documents/UnlinkDocumentFromEpicRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[UnlinkDocumentFromEpicError](src/Shortcut/Errors/UnlinkDocumentFromEpicError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Doc&gt; UpdateDoc(UpdateDocRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing Doc's title and/or content. Supports markdown or HTML input via content_format parameter. When a document is updated: (1) For Tiptap-migrated docs, SSE events notify connected Tiptap clients to refresh. (2) For non-migrated docs, CKEditor cache is flushed and SSE events notify connected CKEditor users.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Documents.UpdateDoc(new UpdateDocRequest
    {
        DocPublicId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new UpdateDoc(),
    });
    // TODO: Handle 'response' of type Doc
}
catch (ApiException<UpdateDocError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateDocRequest](src/Shortcut/Requests/Documents/UpdateDocRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Doc](src/Shortcut/Models/Doc.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[UpdateDocError](src/Shortcut/Errors/UpdateDocError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## EntityTemplates

> Source: [EntityTemplates](src/Shortcut/Api/EntityTemplates.cs)

<details>
<summary><code>Task&lt;EntityTemplate&gt; CreateEntityTemplate(CreateEntityTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new entity template for the Workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EntityTemplates.CreateEntityTemplate(new CreateEntityTemplateRequest
    {
        Body = new CreateEntityTemplate { Name = "some example string", StoryContents = new CreateStoryContents() },
    });
    // TODO: Handle 'response' of type EntityTemplate
}
catch (ApiException<CreateEntityTemplateError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateEntityTemplateRequest](src/Shortcut/Requests/EntityTemplates/CreateEntityTemplateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EntityTemplate](src/Shortcut/Models/EntityTemplate.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[CreateEntityTemplateError](src/Shortcut/Errors/CreateEntityTemplateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteEntityTemplate(DeleteEntityTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.EntityTemplates.DeleteEntityTemplate(new DeleteEntityTemplateRequest
    {
        EntityTemplatePublicId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
}
catch (ApiException<DeleteEntityTemplateError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteEntityTemplateRequest](src/Shortcut/Requests/EntityTemplates/DeleteEntityTemplateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[DeleteEntityTemplateError](src/Shortcut/Errors/DeleteEntityTemplateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DisableStoryTemplates(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disables the Story Template feature for the Workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.EntityTemplates.DisableStoryTemplates();
}
catch (ApiException<DisableStoryTemplatesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[DisableStoryTemplatesError](src/Shortcut/Errors/DisableStoryTemplatesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task EnableStoryTemplates(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enables the Story Template feature for the Workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.EntityTemplates.EnableStoryTemplates();
}
catch (ApiException<EnableStoryTemplatesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[EnableStoryTemplatesError](src/Shortcut/Errors/EnableStoryTemplatesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EntityTemplate&gt; GetEntityTemplate(GetEntityTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Entity Template returns information about a given entity template.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EntityTemplates.GetEntityTemplate(new GetEntityTemplateRequest
    {
        EntityTemplatePublicId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type EntityTemplate
}
catch (ApiException<GetEntityTemplateError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetEntityTemplateRequest](src/Shortcut/Requests/EntityTemplates/GetEntityTemplateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EntityTemplate](src/Shortcut/Models/EntityTemplate.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[GetEntityTemplateError](src/Shortcut/Errors/GetEntityTemplateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;EntityTemplate&gt;&gt; ListEntityTemplates(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all the entity templates for the Workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EntityTemplates.ListEntityTemplates();
    // TODO: Handle 'response' of type IReadOnlyList<EntityTemplate>
}
catch (ApiException<ListEntityTemplatesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[EntityTemplate](src/Shortcut/Models/EntityTemplate.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[ListEntityTemplatesError](src/Shortcut/Errors/ListEntityTemplatesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EntityTemplate&gt; UpdateEntityTemplate(UpdateEntityTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an entity template's name or its contents.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EntityTemplates.UpdateEntityTemplate(new UpdateEntityTemplateRequest
    {
        EntityTemplatePublicId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new UpdateEntityTemplate(),
    });
    // TODO: Handle 'response' of type EntityTemplate
}
catch (ApiException<UpdateEntityTemplateError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateEntityTemplateRequest](src/Shortcut/Requests/EntityTemplates/UpdateEntityTemplateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EntityTemplate](src/Shortcut/Models/EntityTemplate.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[UpdateEntityTemplateError](src/Shortcut/Errors/UpdateEntityTemplateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## EpicWorkflowApi

> Source: [EpicWorkflowApi](src/Shortcut/Api/EpicWorkflowApi.cs)

<details>
<summary><code>Task&lt;EpicWorkflow&gt; GetEpicWorkflow(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the Epic Workflow for the Workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EpicWorkflowApi.GetEpicWorkflow();
    // TODO: Handle 'response' of type EpicWorkflow
}
catch (ApiException<GetEpicWorkflowError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EpicWorkflow](src/Shortcut/Models/EpicWorkflow.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[GetEpicWorkflowError](src/Shortcut/Errors/GetEpicWorkflowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Epics

> Source: [Epics](src/Shortcut/Api/Epics.cs)

<details>
<summary><code>Task&lt;Epic&gt; CreateEpic(CreateEpicRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Epic allows you to create a new Epic in Shortcut.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Epics.CreateEpic(new CreateEpicRequest
    {
        Body = new CreateEpic { Name = "some example string" },
    });
    // TODO: Handle 'response' of type Epic
}
catch (ApiException<CreateEpicError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateEpicRequest](src/Shortcut/Requests/Epics/CreateEpicRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Epic](src/Shortcut/Models/Epic.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[CreateEpicError](src/Shortcut/Errors/CreateEpicError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ThreadedComment&gt; CreateEpicComment(CreateEpicCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to create a threaded Comment on an Epic.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Epics.CreateEpicComment(new CreateEpicCommentRequest
    {
        EpicPublicId = 1L,
        Body = new CreateEpicComment { Text = "some example string" },
    });
    // TODO: Handle 'response' of type ThreadedComment
}
catch (ApiException<CreateEpicCommentError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateEpicCommentRequest](src/Shortcut/Requests/Epics/CreateEpicCommentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ThreadedComment](src/Shortcut/Models/ThreadedComment.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[CreateEpicCommentError](src/Shortcut/Errors/CreateEpicCommentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ThreadedComment&gt; CreateEpicCommentComment(CreateEpicCommentCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to create a nested Comment reply to an existing Epic Comment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Epics.CreateEpicCommentComment(new CreateEpicCommentCommentRequest
    {
        EpicPublicId = 1L,
        CommentPublicId = 1L,
        Body = new CreateCommentComment { Text = "some example string" },
    });
    // TODO: Handle 'response' of type ThreadedComment
}
catch (ApiException<CreateEpicCommentCommentError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateEpicCommentCommentRequest](src/Shortcut/Requests/Epics/CreateEpicCommentCommentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ThreadedComment](src/Shortcut/Models/ThreadedComment.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[CreateEpicCommentCommentError](src/Shortcut/Errors/CreateEpicCommentCommentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Health&gt; CreateEpicHealth(CreateEpicHealthRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new health status for the specified Epic.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Epics.CreateEpicHealth(new CreateEpicHealthRequest
    {
        EpicPublicId = 1L,
        Body = new CreateEpicHealth { Status = Status1.AtRisk },
    });
    // TODO: Handle 'response' of type Health
}
catch (ApiException<CreateEpicHealthError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateEpicHealthRequest](src/Shortcut/Requests/Epics/CreateEpicHealthRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Health](src/Shortcut/Models/Health.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[CreateEpicHealthError](src/Shortcut/Errors/CreateEpicHealthError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteEpic(DeleteEpicRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Epic can be used to delete the Epic. The only required parameter is Epic ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Epics.DeleteEpic(new DeleteEpicRequest { EpicPublicId = 1L });
}
catch (ApiException<DeleteEpicError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteEpicRequest](src/Shortcut/Requests/Epics/DeleteEpicRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[DeleteEpicError](src/Shortcut/Errors/DeleteEpicError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteEpicComment(DeleteEpicCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to delete a Comment from an Epic.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Epics.DeleteEpicComment(new DeleteEpicCommentRequest { EpicPublicId = 1L, CommentPublicId = 1L });
}
catch (ApiException<DeleteEpicCommentError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteEpicCommentRequest](src/Shortcut/Requests/Epics/DeleteEpicCommentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[DeleteEpicCommentError](src/Shortcut/Errors/DeleteEpicCommentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Epic&gt; GetEpic(GetEpicRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Epic returns information about the selected Epic.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Epics.GetEpic(new GetEpicRequest { EpicPublicId = 1L });
    // TODO: Handle 'response' of type Epic
}
catch (ApiException<GetEpicError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetEpicRequest](src/Shortcut/Requests/Epics/GetEpicRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Epic](src/Shortcut/Models/Epic.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[GetEpicError](src/Shortcut/Errors/GetEpicError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ThreadedComment&gt; GetEpicComment(GetEpicCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint returns information about the selected Epic Comment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Epics.GetEpicComment(new GetEpicCommentRequest
    {
        EpicPublicId = 1L,
        CommentPublicId = 1L,
    });
    // TODO: Handle 'response' of type ThreadedComment
}
catch (ApiException<GetEpicCommentError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetEpicCommentRequest](src/Shortcut/Requests/Epics/GetEpicCommentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ThreadedComment](src/Shortcut/Models/ThreadedComment.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[GetEpicCommentError](src/Shortcut/Errors/GetEpicCommentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Health&gt; GetEpicHealth(GetEpicHealthRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current health for the specified Epic.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Epics.GetEpicHealth(new GetEpicHealthRequest { EpicPublicId = 1L });
    // TODO: Handle 'response' of type Health
}
catch (ApiException<GetEpicHealthError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetEpicHealthRequest](src/Shortcut/Requests/Epics/GetEpicHealthRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Health](src/Shortcut/Models/Health.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[GetEpicHealthError](src/Shortcut/Errors/GetEpicHealthError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;ThreadedComment&gt;&gt; ListEpicComments(ListEpicCommentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all Comments on an Epic.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Epics.ListEpicComments(new ListEpicCommentsRequest { EpicPublicId = 1L });
    // TODO: Handle 'response' of type IReadOnlyList<ThreadedComment>
}
catch (ApiException<ListEpicCommentsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListEpicCommentsRequest](src/Shortcut/Requests/Epics/ListEpicCommentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[ThreadedComment](src/Shortcut/Models/ThreadedComment.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[ListEpicCommentsError](src/Shortcut/Errors/ListEpicCommentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;DocSlim&gt;&gt; ListEpicDocuments(ListEpicDocumentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all Documents related to this Epic.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Epics.ListEpicDocuments(new ListEpicDocumentsRequest { EpicPublicId = 1L });
    // TODO: Handle 'response' of type IReadOnlyList<DocSlim>
}
catch (ApiException<ListEpicDocumentsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListEpicDocumentsRequest](src/Shortcut/Requests/Epics/ListEpicDocumentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[DocSlim](src/Shortcut/Models/DocSlim.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[ListEpicDocumentsError](src/Shortcut/Errors/ListEpicDocumentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Health&gt;&gt; ListEpicHealths(ListEpicHealthsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the history of health statuses for the specified Epic, most recent first.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Epics.ListEpicHealths(new ListEpicHealthsRequest { EpicPublicId = 1L });
    // TODO: Handle 'response' of type IReadOnlyList<Health>
}
catch (ApiException<ListEpicHealthsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListEpicHealthsRequest](src/Shortcut/Requests/Epics/ListEpicHealthsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Health](src/Shortcut/Models/Health.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[ListEpicHealthsError](src/Shortcut/Errors/ListEpicHealthsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;StorySlim&gt;&gt; ListEpicStories(ListEpicStoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all Stories in an Epic.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Epics.ListEpicStories(new ListEpicStoriesRequest { EpicPublicId = 1L });
    // TODO: Handle 'response' of type IReadOnlyList<StorySlim>
}
catch (ApiException<ListEpicStoriesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListEpicStoriesRequest](src/Shortcut/Requests/Epics/ListEpicStoriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[StorySlim](src/Shortcut/Models/StorySlim.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[ListEpicStoriesError](src/Shortcut/Errors/ListEpicStoriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;EpicSlim&gt;&gt; ListEpics(ListEpicsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Epics returns a list of all Epics and their attributes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Epics.ListEpics(new ListEpicsRequest());
    // TODO: Handle 'response' of type IReadOnlyList<EpicSlim>
}
catch (ApiException<ListEpicsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListEpicsRequest](src/Shortcut/Requests/Epics/ListEpicsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[EpicSlim](src/Shortcut/Models/EpicSlim.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[ListEpicsError](src/Shortcut/Errors/ListEpicsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EpicPaginatedResults&gt; ListEpicsPaginated(ListEpicsPaginatedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Epics with pagination returns a paginated list of Epics and their attributes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Epics.ListEpicsPaginated(new ListEpicsPaginatedRequest());
    // TODO: Handle 'response' of type EpicPaginatedResults
}
catch (ApiException<ListEpicsPaginatedError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListEpicsPaginatedRequest](src/Shortcut/Requests/Epics/ListEpicsPaginatedRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EpicPaginatedResults](src/Shortcut/Models/EpicPaginatedResults.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[ListEpicsPaginatedError](src/Shortcut/Errors/ListEpicsPaginatedError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Epic&gt; UpdateEpic(UpdateEpicRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Epic can be used to update numerous fields in the Epic. The only required parameter is Epic ID, which can be found in the Shortcut UI.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Epics.UpdateEpic(new UpdateEpicRequest { EpicPublicId = 1L, Body = new UpdateEpic() });
    // TODO: Handle 'response' of type Epic
}
catch (ApiException<UpdateEpicError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateEpicRequest](src/Shortcut/Requests/Epics/UpdateEpicRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Epic](src/Shortcut/Models/Epic.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[UpdateEpicError](src/Shortcut/Errors/UpdateEpicError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ThreadedComment&gt; UpdateEpicComment(UpdateEpicCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to update a threaded Comment on an Epic.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Epics.UpdateEpicComment(new UpdateEpicCommentRequest
    {
        EpicPublicId = 1L,
        CommentPublicId = 1L,
        Body = new UpdateComment { Text = "some example string" },
    });
    // TODO: Handle 'response' of type ThreadedComment
}
catch (ApiException<UpdateEpicCommentError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateEpicCommentRequest](src/Shortcut/Requests/Epics/UpdateEpicCommentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ThreadedComment](src/Shortcut/Models/ThreadedComment.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[UpdateEpicCommentError](src/Shortcut/Errors/UpdateEpicCommentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ExternalLink

> Source: [ExternalLink](src/Shortcut/Api/ExternalLink.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;StorySlim&gt;&gt; GetExternalLinkStories(GetExternalLinkStoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Stories which have a given External Link associated with them.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ExternalLink.GetExternalLinkStories(new GetExternalLinkStoriesRequest
    {
        ExternalLink = "some example string",
    });
    // TODO: Handle 'response' of type IReadOnlyList<StorySlim>
}
catch (ApiException<GetExternalLinkStoriesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetExternalLinkStoriesRequest](src/Shortcut/Requests/ExternalLink/GetExternalLinkStoriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[StorySlim](src/Shortcut/Models/StorySlim.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[GetExternalLinkStoriesError](src/Shortcut/Errors/GetExternalLinkStoriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Files

> Source: [Files](src/Shortcut/Api/Files.cs)

<details>
<summary><code>Task DeleteFile(DeleteFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete File deletes a previously uploaded file.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Files.DeleteFile(new DeleteFileRequest { FilePublicId = 1L });
}
catch (ApiException<DeleteFileError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteFileRequest](src/Shortcut/Requests/Files/DeleteFileRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[DeleteFileError](src/Shortcut/Errors/DeleteFileError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UploadedFile&gt; GetFile(GetFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get File returns information about the selected UploadedFile.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Files.GetFile(new GetFileRequest { FilePublicId = 1L });
    // TODO: Handle 'response' of type UploadedFile
}
catch (ApiException<GetFileError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetFileRequest](src/Shortcut/Requests/Files/GetFileRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UploadedFile](src/Shortcut/Models/UploadedFile.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[GetFileError](src/Shortcut/Errors/GetFileError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;UploadedFile&gt;&gt; ListFiles(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Files returns a list of all UploadedFiles in the workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Files.ListFiles();
    // TODO: Handle 'response' of type IReadOnlyList<UploadedFile>
}
catch (ApiException<ListFilesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[UploadedFile](src/Shortcut/Models/UploadedFile.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[ListFilesError](src/Shortcut/Errors/ListFilesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UploadedFile&gt; UpdateFile(UpdateFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update File updates the properties of an UploadedFile (but not its content).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Files.UpdateFile(new UpdateFileRequest { FilePublicId = 1L, Body = new UpdateFile() });
    // TODO: Handle 'response' of type UploadedFile
}
catch (ApiException<UpdateFileError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateFileRequest](src/Shortcut/Requests/Files/UpdateFileRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UploadedFile](src/Shortcut/Models/UploadedFile.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[UpdateFileError](src/Shortcut/Errors/UpdateFileError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;UploadedFile&gt;&gt; UploadFiles(UploadFilesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload Files uploads one or many files and optionally associates them with a story.
Use the multipart/form-data content-type to upload.
Each `file` key should contain a separate file.
Each UploadedFile's name comes from the Content-Disposition header "filename" directive for that field.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Files.UploadFiles(new UploadFilesRequest { File0 = Array.Empty<byte>() });
    // TODO: Handle 'response' of type IReadOnlyList<UploadedFile>
}
catch (ApiException<UploadFilesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UploadFilesRequest](src/Shortcut/Requests/Files/UploadFilesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[UploadedFile](src/Shortcut/Models/UploadedFile.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[UploadFilesError](src/Shortcut/Errors/UploadFilesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Groups

> Source: [Groups](src/Shortcut/Api/Groups.cs)

<details>
<summary><code>Task&lt;Group&gt; CreateGroup(CreateGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Groups.CreateGroup(new CreateGroupRequest
    {
        Body = new CreateGroup { MentionName = "some example string", Name = "some example string" },
    });
    // TODO: Handle 'response' of type Group
}
catch (ApiException<CreateGroupError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateGroupRequest](src/Shortcut/Requests/Groups/CreateGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Group](src/Shortcut/Models/Group.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[CreateGroupError](src/Shortcut/Errors/CreateGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Group&gt; GetGroup(GetGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Groups.GetGroup(new GetGroupRequest
    {
        GroupPublicId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type Group
}
catch (ApiException<GetGroupError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetGroupRequest](src/Shortcut/Requests/Groups/GetGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Group](src/Shortcut/Models/Group.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[GetGroupError](src/Shortcut/Errors/GetGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;StorySlim&gt;&gt; ListGroupStories(ListGroupStoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the Stories assigned to the Group. (By default, limited to 1,000).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Groups.ListGroupStories(new ListGroupStoriesRequest
    {
        GroupPublicId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type IReadOnlyList<StorySlim>
}
catch (ApiException<ListGroupStoriesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListGroupStoriesRequest](src/Shortcut/Requests/Groups/ListGroupStoriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[StorySlim](src/Shortcut/Models/StorySlim.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[ListGroupStoriesError](src/Shortcut/Errors/ListGroupStoriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Group&gt;&gt; ListGroups(ListGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A group in our API maps to a "Team" within the Shortcut Product. A Team is a collection of Users that can be associated to Stories, Epics, and Iterations within Shortcut.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Groups.ListGroups(new ListGroupsRequest());
    // TODO: Handle 'response' of type IReadOnlyList<Group>
}
catch (ApiException<ListGroupsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListGroupsRequest](src/Shortcut/Requests/Groups/ListGroupsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Group](src/Shortcut/Models/Group.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[ListGroupsError](src/Shortcut/Errors/ListGroupsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Group&gt; UpdateGroup(UpdateGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Groups.UpdateGroup(new UpdateGroupRequest
    {
        GroupPublicId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new UpdateGroup(),
    });
    // TODO: Handle 'response' of type Group
}
catch (ApiException<UpdateGroupError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateGroupRequest](src/Shortcut/Requests/Groups/UpdateGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Group](src/Shortcut/Models/Group.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[UpdateGroupError](src/Shortcut/Errors/UpdateGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## HealthApi

> Source: [HealthApi](src/Shortcut/Api/HealthApi.cs)

<details>
<summary><code>Task&lt;Health&gt; UpdateHealth(UpdateHealthRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing health status by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.HealthApi.UpdateHealth(new UpdateHealthRequest
    {
        HealthPublicId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new UpdateHealth(),
    });
    // TODO: Handle 'response' of type Health
}
catch (ApiException<UpdateHealthError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateHealthRequest](src/Shortcut/Requests/HealthApi/UpdateHealthRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Health](src/Shortcut/Models/Health.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[UpdateHealthError](src/Shortcut/Errors/UpdateHealthError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Integrations

> Source: [Integrations](src/Shortcut/Api/Integrations.cs)

<details>
<summary><code>Task CreateGenericIntegration(CreateGenericIntegrationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Integrations.CreateGenericIntegration(new CreateGenericIntegrationRequest
    {
        Body = new CreateGenericIntegration { WebhookUrl = "some example string" },
    });
}
catch (ApiException<CreateGenericIntegrationError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateGenericIntegrationRequest](src/Shortcut/Requests/Integrations/CreateGenericIntegrationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[CreateGenericIntegrationError](src/Shortcut/Errors/CreateGenericIntegrationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteGenericIntegration(DeleteGenericIntegrationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Integrations.DeleteGenericIntegration(new DeleteGenericIntegrationRequest
    {
        IntegrationPublicId = 1L,
    });
}
catch (ApiException<DeleteGenericIntegrationError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteGenericIntegrationRequest](src/Shortcut/Requests/Integrations/DeleteGenericIntegrationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[DeleteGenericIntegrationError](src/Shortcut/Errors/DeleteGenericIntegrationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetGenericIntegration(GetGenericIntegrationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Integrations.GetGenericIntegration(new GetGenericIntegrationRequest { IntegrationPublicId = 1L });
}
catch (ApiException<GetGenericIntegrationError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetGenericIntegrationRequest](src/Shortcut/Requests/Integrations/GetGenericIntegrationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[GetGenericIntegrationError](src/Shortcut/Errors/GetGenericIntegrationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Iterations

> Source: [Iterations](src/Shortcut/Api/Iterations.cs)

<details>
<summary><code>Task&lt;Iteration&gt; CreateIteration(CreateIterationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Iterations.CreateIteration(new CreateIterationRequest
    {
        Body = new CreateIteration
        {
            Name = "some example string",
            StartDate = "some example string",
            EndDate = "some example string",
        },
    });
    // TODO: Handle 'response' of type Iteration
}
catch (ApiException<CreateIterationError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateIterationRequest](src/Shortcut/Requests/Iterations/CreateIterationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Iteration](src/Shortcut/Models/Iteration.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[CreateIterationError](src/Shortcut/Errors/CreateIterationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteIteration(DeleteIterationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Iterations.DeleteIteration(new DeleteIterationRequest { IterationPublicId = 1L });
}
catch (ApiException<DeleteIterationError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteIterationRequest](src/Shortcut/Requests/Iterations/DeleteIterationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[DeleteIterationError](src/Shortcut/Errors/DeleteIterationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DisableIterations(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disables Iterations for the current workspace

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Iterations.DisableIterations();
}
catch (ApiException<DisableIterationsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[DisableIterationsError](src/Shortcut/Errors/DisableIterationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task EnableIterations(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enables Iterations for the current workspace

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Iterations.EnableIterations();
}
catch (ApiException<EnableIterationsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[EnableIterationsError](src/Shortcut/Errors/EnableIterationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Iteration&gt; GetIteration(GetIterationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Iterations.GetIteration(new GetIterationRequest { IterationPublicId = 1L });
    // TODO: Handle 'response' of type Iteration
}
catch (ApiException<GetIterationError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetIterationRequest](src/Shortcut/Requests/Iterations/GetIterationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Iteration](src/Shortcut/Models/Iteration.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[GetIterationError](src/Shortcut/Errors/GetIterationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;StorySlim&gt;&gt; ListIterationStories(ListIterationStoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all Stories in an Iteration.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Iterations.ListIterationStories(new ListIterationStoriesRequest
    {
        IterationPublicId = 1L,
    });
    // TODO: Handle 'response' of type IReadOnlyList<StorySlim>
}
catch (ApiException<ListIterationStoriesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListIterationStoriesRequest](src/Shortcut/Requests/Iterations/ListIterationStoriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[StorySlim](src/Shortcut/Models/StorySlim.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[ListIterationStoriesError](src/Shortcut/Errors/ListIterationStoriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;IterationSlim&gt;&gt; ListIterations(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Iterations.ListIterations();
    // TODO: Handle 'response' of type IReadOnlyList<IterationSlim>
}
catch (ApiException<ListIterationsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[IterationSlim](src/Shortcut/Models/IterationSlim.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[ListIterationsError](src/Shortcut/Errors/ListIterationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Iteration&gt; UpdateIteration(UpdateIterationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Iterations.UpdateIteration(new UpdateIterationRequest
    {
        IterationPublicId = 1L,
        Body = new UpdateIteration(),
    });
    // TODO: Handle 'response' of type Iteration
}
catch (ApiException<UpdateIterationError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateIterationRequest](src/Shortcut/Requests/Iterations/UpdateIterationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Iteration](src/Shortcut/Models/Iteration.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[UpdateIterationError](src/Shortcut/Errors/UpdateIterationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## KeyResults

> Source: [KeyResults](src/Shortcut/Api/KeyResults.cs)

<details>
<summary><code>Task&lt;KeyResult&gt; GetKeyResult(GetKeyResultRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Key Result returns information about a chosen Key Result.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.KeyResults.GetKeyResult(new GetKeyResultRequest
    {
        KeyResultPublicId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type KeyResult
}
catch (ApiException<GetKeyResultError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetKeyResultRequest](src/Shortcut/Requests/KeyResults/GetKeyResultRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[KeyResult](src/Shortcut/Models/KeyResult.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[GetKeyResultError](src/Shortcut/Errors/GetKeyResultError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;KeyResult&gt; UpdateKeyResult(UpdateKeyResultRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Key Result allows updating a Key Result's name or initial, observed, or target values.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.KeyResults.UpdateKeyResult(new UpdateKeyResultRequest
    {
        KeyResultPublicId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new UpdateKeyResult(),
    });
    // TODO: Handle 'response' of type KeyResult
}
catch (ApiException<UpdateKeyResultError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateKeyResultRequest](src/Shortcut/Requests/KeyResults/UpdateKeyResultRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[KeyResult](src/Shortcut/Models/KeyResult.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[UpdateKeyResultError](src/Shortcut/Errors/UpdateKeyResultError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Labels

> Source: [Labels](src/Shortcut/Api/Labels.cs)

<details>
<summary><code>Task&lt;Label&gt; CreateLabel(CreateLabelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Label allows you to create a new Label in Shortcut.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Labels.CreateLabel(new CreateLabelRequest
    {
        Body = new CreateLabelParams { Name = "some example string" },
    });
    // TODO: Handle 'response' of type Label
}
catch (ApiException<CreateLabelError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateLabelRequest](src/Shortcut/Requests/Labels/CreateLabelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Label](src/Shortcut/Models/Label.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[CreateLabelError](src/Shortcut/Errors/CreateLabelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteLabel(DeleteLabelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Label can be used to delete any Label.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Labels.DeleteLabel(new DeleteLabelRequest { LabelPublicId = 1L });
}
catch (ApiException<DeleteLabelError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteLabelRequest](src/Shortcut/Requests/Labels/DeleteLabelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[DeleteLabelError](src/Shortcut/Errors/DeleteLabelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Label&gt; GetLabel(GetLabelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Label returns information about the selected Label.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Labels.GetLabel(new GetLabelRequest { LabelPublicId = 1L });
    // TODO: Handle 'response' of type Label
}
catch (ApiException<GetLabelError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetLabelRequest](src/Shortcut/Requests/Labels/GetLabelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Label](src/Shortcut/Models/Label.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[GetLabelError](src/Shortcut/Errors/GetLabelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;EpicSlim&gt;&gt; ListLabelEpics(ListLabelEpicsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all of the Epics with the Label.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Labels.ListLabelEpics(new ListLabelEpicsRequest { LabelPublicId = 1L });
    // TODO: Handle 'response' of type IReadOnlyList<EpicSlim>
}
catch (ApiException<ListLabelEpicsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListLabelEpicsRequest](src/Shortcut/Requests/Labels/ListLabelEpicsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[EpicSlim](src/Shortcut/Models/EpicSlim.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[ListLabelEpicsError](src/Shortcut/Errors/ListLabelEpicsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;StorySlim&gt;&gt; ListLabelStories(ListLabelStoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all of the Stories with the Label.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Labels.ListLabelStories(new ListLabelStoriesRequest { LabelPublicId = 1L });
    // TODO: Handle 'response' of type IReadOnlyList<StorySlim>
}
catch (ApiException<ListLabelStoriesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListLabelStoriesRequest](src/Shortcut/Requests/Labels/ListLabelStoriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[StorySlim](src/Shortcut/Models/StorySlim.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[ListLabelStoriesError](src/Shortcut/Errors/ListLabelStoriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Label&gt;&gt; ListLabels(ListLabelsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Labels returns a list of all Labels and their attributes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Labels.ListLabels(new ListLabelsRequest());
    // TODO: Handle 'response' of type IReadOnlyList<Label>
}
catch (ApiException<ListLabelsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListLabelsRequest](src/Shortcut/Requests/Labels/ListLabelsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Label](src/Shortcut/Models/Label.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[ListLabelsError](src/Shortcut/Errors/ListLabelsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Label&gt; UpdateLabel(UpdateLabelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Label allows you to replace a Label name with another name. If you try to name a Label something that already exists, you will receive a 422 response.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Labels.UpdateLabel(new UpdateLabelRequest
    {
        LabelPublicId = 1L,
        Body = new UpdateLabel(),
    });
    // TODO: Handle 'response' of type Label
}
catch (ApiException<UpdateLabelError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateLabelRequest](src/Shortcut/Requests/Labels/UpdateLabelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Label](src/Shortcut/Models/Label.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[UpdateLabelError](src/Shortcut/Errors/UpdateLabelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## LinkedFiles

> Source: [LinkedFiles](src/Shortcut/Api/LinkedFiles.cs)

<details>
<summary><code>Task&lt;LinkedFile&gt; CreateLinkedFile(CreateLinkedFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Linked File allows you to create a new Linked File in Shortcut.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.LinkedFiles.CreateLinkedFile(new CreateLinkedFileRequest
    {
        Body = new CreateLinkedFile
        {
            Name = "some example string",
            Type = TypeShortcutLinkedFilesApi.Google,
            Url = "some example string",
        },
    });
    // TODO: Handle 'response' of type LinkedFile
}
catch (ApiException<CreateLinkedFileError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateLinkedFileRequest](src/Shortcut/Requests/LinkedFiles/CreateLinkedFileRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LinkedFile](src/Shortcut/Models/LinkedFile.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[CreateLinkedFileError](src/Shortcut/Errors/CreateLinkedFileError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteLinkedFile(DeleteLinkedFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Linked File can be used to delete any previously attached Linked-File.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.LinkedFiles.DeleteLinkedFile(new DeleteLinkedFileRequest { LinkedFilePublicId = 1L });
}
catch (ApiException<DeleteLinkedFileError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteLinkedFileRequest](src/Shortcut/Requests/LinkedFiles/DeleteLinkedFileRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[DeleteLinkedFileError](src/Shortcut/Errors/DeleteLinkedFileError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;LinkedFile&gt; GetLinkedFile(GetLinkedFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get File returns information about the selected Linked File.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.LinkedFiles.GetLinkedFile(new GetLinkedFileRequest { LinkedFilePublicId = 1L });
    // TODO: Handle 'response' of type LinkedFile
}
catch (ApiException<GetLinkedFileError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetLinkedFileRequest](src/Shortcut/Requests/LinkedFiles/GetLinkedFileRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LinkedFile](src/Shortcut/Models/LinkedFile.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[GetLinkedFileError](src/Shortcut/Errors/GetLinkedFileError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;LinkedFile&gt;&gt; ListLinkedFiles(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Linked Files returns a list of all Linked-Files and their attributes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.LinkedFiles.ListLinkedFiles();
    // TODO: Handle 'response' of type IReadOnlyList<LinkedFile>
}
catch (ApiException<ListLinkedFilesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[LinkedFile](src/Shortcut/Models/LinkedFile.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[ListLinkedFilesError](src/Shortcut/Errors/ListLinkedFilesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;LinkedFile&gt; UpdateLinkedFile(UpdateLinkedFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updated Linked File allows you to update properties of a previously attached Linked-File.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.LinkedFiles.UpdateLinkedFile(new UpdateLinkedFileRequest
    {
        LinkedFilePublicId = 1L,
        Body = new UpdateLinkedFile(),
    });
    // TODO: Handle 'response' of type LinkedFile
}
catch (ApiException<UpdateLinkedFileError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateLinkedFileRequest](src/Shortcut/Requests/LinkedFiles/UpdateLinkedFileRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LinkedFile](src/Shortcut/Models/LinkedFile.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[UpdateLinkedFileError](src/Shortcut/Errors/UpdateLinkedFileError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## MemberApi

> Source: [MemberApi](src/Shortcut/Api/MemberApi.cs)

<details>
<summary><code>Task&lt;MemberInfo&gt; GetCurrentMemberInfo(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the authenticated member.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MemberApi.GetCurrentMemberInfo();
    // TODO: Handle 'response' of type MemberInfo
}
catch (ApiException<GetCurrentMemberInfoError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MemberInfo](src/Shortcut/Models/MemberInfo.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[GetCurrentMemberInfoError](src/Shortcut/Errors/GetCurrentMemberInfoError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Members

> Source: [Members](src/Shortcut/Api/Members.cs)

<details>
<summary><code>Task&lt;Member&gt; GetMember(GetMemberRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about a Member.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Members.GetMember(new GetMemberRequest
    {
        MemberPublicId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type Member
}
catch (ApiException<GetMemberError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetMemberRequest](src/Shortcut/Requests/Members/GetMemberRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Member](src/Shortcut/Models/Member.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[GetMemberError](src/Shortcut/Errors/GetMemberError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Member&gt;&gt; ListMembers(ListMembersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about members of the Workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Members.ListMembers(new ListMembersRequest());
    // TODO: Handle 'response' of type IReadOnlyList<Member>
}
catch (ApiException<ListMembersError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListMembersRequest](src/Shortcut/Requests/Members/ListMembersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Member](src/Shortcut/Models/Member.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[ListMembersError](src/Shortcut/Errors/ListMembersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Milestones

> Source: [Milestones](src/Shortcut/Api/Milestones.cs)

<details>
<summary><code>Task&lt;Milestone&gt; CreateMilestone(CreateMilestoneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

(Deprecated: Use 'Create Objective') Create Milestone allows you to create a new Milestone in Shortcut.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Milestones.CreateMilestone(new CreateMilestoneRequest
    {
        Body = new CreateMilestone { Name = "some example string" },
    });
    // TODO: Handle 'response' of type Milestone
}
catch (ApiException<CreateMilestoneError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateMilestoneRequest](src/Shortcut/Requests/Milestones/CreateMilestoneRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Milestone](src/Shortcut/Models/Milestone.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[CreateMilestoneError](src/Shortcut/Errors/CreateMilestoneError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteMilestone(DeleteMilestoneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

(Deprecated: Use 'Delete Objective') Delete Milestone can be used to delete any Milestone.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Milestones.DeleteMilestone(new DeleteMilestoneRequest { MilestonePublicId = 1L });
}
catch (ApiException<DeleteMilestoneError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteMilestoneRequest](src/Shortcut/Requests/Milestones/DeleteMilestoneRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[DeleteMilestoneError](src/Shortcut/Errors/DeleteMilestoneError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Milestone&gt; GetMilestone(GetMilestoneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

(Deprecated: Use 'Get Objective') Get Milestone returns information about a chosen Milestone.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Milestones.GetMilestone(new GetMilestoneRequest { MilestonePublicId = 1L });
    // TODO: Handle 'response' of type Milestone
}
catch (ApiException<GetMilestoneError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetMilestoneRequest](src/Shortcut/Requests/Milestones/GetMilestoneRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Milestone](src/Shortcut/Models/Milestone.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[GetMilestoneError](src/Shortcut/Errors/GetMilestoneError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;EpicSlim&gt;&gt; ListMilestoneEpics(ListMilestoneEpicsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

(Deprecated: Use 'List Objective Epics') List all of the Epics within the Milestone.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Milestones.ListMilestoneEpics(new ListMilestoneEpicsRequest { MilestonePublicId = 1L });
    // TODO: Handle 'response' of type IReadOnlyList<EpicSlim>
}
catch (ApiException<ListMilestoneEpicsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListMilestoneEpicsRequest](src/Shortcut/Requests/Milestones/ListMilestoneEpicsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[EpicSlim](src/Shortcut/Models/EpicSlim.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[ListMilestoneEpicsError](src/Shortcut/Errors/ListMilestoneEpicsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Milestone&gt;&gt; ListMilestones(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

(Deprecated: Use 'List Objectives') List Milestones returns a list of all Milestones and their attributes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Milestones.ListMilestones();
    // TODO: Handle 'response' of type IReadOnlyList<Milestone>
}
catch (ApiException<ListMilestonesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Milestone](src/Shortcut/Models/Milestone.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[ListMilestonesError](src/Shortcut/Errors/ListMilestonesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Milestone&gt; UpdateMilestone(UpdateMilestoneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

(Deprecated: Use 'Update Objective') Update Milestone can be used to update Milestone properties.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Milestones.UpdateMilestone(new UpdateMilestoneRequest
    {
        MilestonePublicId = 1L,
        Body = new UpdateMilestone(),
    });
    // TODO: Handle 'response' of type Milestone
}
catch (ApiException<UpdateMilestoneError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateMilestoneRequest](src/Shortcut/Requests/Milestones/UpdateMilestoneRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Milestone](src/Shortcut/Models/Milestone.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[UpdateMilestoneError](src/Shortcut/Errors/UpdateMilestoneError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Objectives

> Source: [Objectives](src/Shortcut/Api/Objectives.cs)

<details>
<summary><code>Task&lt;Objective&gt; CreateObjective(CreateObjectiveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Objective allows you to create a new Objective in Shortcut.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Objectives.CreateObjective(new CreateObjectiveRequest
    {
        Body = new CreateObjective { Name = "some example string" },
    });
    // TODO: Handle 'response' of type Objective
}
catch (ApiException<CreateObjectiveError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateObjectiveRequest](src/Shortcut/Requests/Objectives/CreateObjectiveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Objective](src/Shortcut/Models/Objective.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[CreateObjectiveError](src/Shortcut/Errors/CreateObjectiveError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Health&gt; CreateObjectiveHealth(CreateObjectiveHealthRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new health status for the specified Objective.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Objectives.CreateObjectiveHealth(new CreateObjectiveHealthRequest
    {
        ObjectivePublicId = 1L,
        Body = new CreateObjectiveHealth { Status = Status1ShortcutObjectivesApi.AtRisk },
    });
    // TODO: Handle 'response' of type Health
}
catch (ApiException<CreateObjectiveHealthError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateObjectiveHealthRequest](src/Shortcut/Requests/Objectives/CreateObjectiveHealthRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Health](src/Shortcut/Models/Health.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[CreateObjectiveHealthError](src/Shortcut/Errors/CreateObjectiveHealthError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteObjective(DeleteObjectiveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Objective can be used to delete any Objective.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Objectives.DeleteObjective(new DeleteObjectiveRequest { ObjectivePublicId = 1L });
}
catch (ApiException<DeleteObjectiveError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteObjectiveRequest](src/Shortcut/Requests/Objectives/DeleteObjectiveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[DeleteObjectiveError](src/Shortcut/Errors/DeleteObjectiveError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Objective&gt; GetObjective(GetObjectiveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Objective returns information about a chosen Objective.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Objectives.GetObjective(new GetObjectiveRequest { ObjectivePublicId = 1L });
    // TODO: Handle 'response' of type Objective
}
catch (ApiException<GetObjectiveError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetObjectiveRequest](src/Shortcut/Requests/Objectives/GetObjectiveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Objective](src/Shortcut/Models/Objective.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[GetObjectiveError](src/Shortcut/Errors/GetObjectiveError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Health&gt; GetObjectiveHealth(GetObjectiveHealthRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current health for the specified Objective.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Objectives.GetObjectiveHealth(new GetObjectiveHealthRequest { ObjectivePublicId = 1L });
    // TODO: Handle 'response' of type Health
}
catch (ApiException<GetObjectiveHealthError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetObjectiveHealthRequest](src/Shortcut/Requests/Objectives/GetObjectiveHealthRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Health](src/Shortcut/Models/Health.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[GetObjectiveHealthError](src/Shortcut/Errors/GetObjectiveHealthError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;EpicSlim&gt;&gt; ListObjectiveEpics(ListObjectiveEpicsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all of the Epics within the Objective.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Objectives.ListObjectiveEpics(new ListObjectiveEpicsRequest { ObjectivePublicId = 1L });
    // TODO: Handle 'response' of type IReadOnlyList<EpicSlim>
}
catch (ApiException<ListObjectiveEpicsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListObjectiveEpicsRequest](src/Shortcut/Requests/Objectives/ListObjectiveEpicsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[EpicSlim](src/Shortcut/Models/EpicSlim.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[ListObjectiveEpicsError](src/Shortcut/Errors/ListObjectiveEpicsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Health&gt;&gt; ListObjectiveHealths(ListObjectiveHealthsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the history of health statuses for the specified Objective, most recent first.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Objectives.ListObjectiveHealths(new ListObjectiveHealthsRequest
    {
        ObjectivePublicId = 1L,
    });
    // TODO: Handle 'response' of type IReadOnlyList<Health>
}
catch (ApiException<ListObjectiveHealthsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListObjectiveHealthsRequest](src/Shortcut/Requests/Objectives/ListObjectiveHealthsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Health](src/Shortcut/Models/Health.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[ListObjectiveHealthsError](src/Shortcut/Errors/ListObjectiveHealthsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Objective&gt;&gt; ListObjectives(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Objectives returns a list of all Objectives and their attributes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Objectives.ListObjectives();
    // TODO: Handle 'response' of type IReadOnlyList<Objective>
}
catch (ApiException<ListObjectivesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Objective](src/Shortcut/Models/Objective.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[ListObjectivesError](src/Shortcut/Errors/ListObjectivesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Objective&gt; UpdateObjective(UpdateObjectiveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Objective can be used to update Objective properties.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Objectives.UpdateObjective(new UpdateObjectiveRequest
    {
        ObjectivePublicId = 1L,
        Body = new UpdateObjective(),
    });
    // TODO: Handle 'response' of type Objective
}
catch (ApiException<UpdateObjectiveError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateObjectiveRequest](src/Shortcut/Requests/Objectives/UpdateObjectiveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Objective](src/Shortcut/Models/Objective.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[UpdateObjectiveError](src/Shortcut/Errors/UpdateObjectiveError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Projects

> Source: [Projects](src/Shortcut/Api/Projects.cs)

<details>
<summary><code>Task&lt;Project&gt; CreateProject(CreateProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Project is used to create a new Shortcut Project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.CreateProject(new CreateProjectRequest
    {
        Body = new CreateProject { Name = "some example string", TeamId = 1L },
    });
    // TODO: Handle 'response' of type Project
}
catch (ApiException<CreateProjectError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateProjectRequest](src/Shortcut/Requests/Projects/CreateProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Project](src/Shortcut/Models/Project.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[CreateProjectError](src/Shortcut/Errors/CreateProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteProject(DeleteProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Project can be used to delete a Project. Projects can only be deleted if all associated Stories are moved or deleted. In the case that the Project cannot be deleted, you will receive a 422 response.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Projects.DeleteProject(new DeleteProjectRequest { ProjectPublicId = 1L });
}
catch (ApiException<DeleteProjectError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteProjectRequest](src/Shortcut/Requests/Projects/DeleteProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[DeleteProjectError](src/Shortcut/Errors/DeleteProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Project&gt; GetProject(GetProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Project returns information about the selected Project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.GetProject(new GetProjectRequest { ProjectPublicId = 1L });
    // TODO: Handle 'response' of type Project
}
catch (ApiException<GetProjectError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetProjectRequest](src/Shortcut/Requests/Projects/GetProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Project](src/Shortcut/Models/Project.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[GetProjectError](src/Shortcut/Errors/GetProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Project&gt;&gt; ListProjects(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Projects returns a list of all Projects and their attributes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ListProjects();
    // TODO: Handle 'response' of type IReadOnlyList<Project>
}
catch (ApiException<ListProjectsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Project](src/Shortcut/Models/Project.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[ListProjectsError](src/Shortcut/Errors/ListProjectsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;StorySlim&gt;&gt; ListStories(ListStoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Stories returns a list of all Stories in a selected Project and their attributes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ListStories(new ListStoriesRequest { ProjectPublicId = 1L });
    // TODO: Handle 'response' of type IReadOnlyList<StorySlim>
}
catch (ApiException<ListStoriesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListStoriesRequest](src/Shortcut/Requests/Projects/ListStoriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[StorySlim](src/Shortcut/Models/StorySlim.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[ListStoriesError](src/Shortcut/Errors/ListStoriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Project&gt; UpdateProject(UpdateProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Project can be used to change properties of a Project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.UpdateProject(new UpdateProjectRequest
    {
        ProjectPublicId = 1L,
        Body = new UpdateProject(),
    });
    // TODO: Handle 'response' of type Project
}
catch (ApiException<UpdateProjectError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateProjectRequest](src/Shortcut/Requests/Projects/UpdateProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Project](src/Shortcut/Models/Project.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[UpdateProjectError](src/Shortcut/Errors/UpdateProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Repositories

> Source: [Repositories](src/Shortcut/Api/Repositories.cs)

<details>
<summary><code>Task&lt;Repository&gt; GetRepository(GetRepositoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Repository returns information about the selected Repository.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Repositories.GetRepository(new GetRepositoryRequest { RepoPublicId = 1L });
    // TODO: Handle 'response' of type Repository
}
catch (ApiException<GetRepositoryError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetRepositoryRequest](src/Shortcut/Requests/Repositories/GetRepositoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Repository](src/Shortcut/Models/Repository.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[GetRepositoryError](src/Shortcut/Errors/GetRepositoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Repository&gt;&gt; ListRepositories(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Repositories returns a list of all Repositories and their attributes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Repositories.ListRepositories();
    // TODO: Handle 'response' of type IReadOnlyList<Repository>
}
catch (ApiException<ListRepositoriesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Repository](src/Shortcut/Models/Repository.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[ListRepositoriesError](src/Shortcut/Errors/ListRepositoriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](src/Shortcut/Api/Search.cs)

<details>
<summary><code>Task&lt;SearchResults&gt; SearchInvoke(SearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search lets you search Epics and Stories based on desired parameters. Since ordering of the results can change over time (due to search ranking decay, new Epics and Stories being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Search.SearchInvoke(new SearchRequest { Query = "some example string" });
    // TODO: Handle 'response' of type SearchResults
}
catch (ApiException<SearchError> ex)
{
    if (ex.Error.TryGetMaxSearchResultsExceededError(out var error))
    {
        // TODO: Handle 'error' of type MaxSearchResultsExceededError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchRequest](src/Shortcut/Requests/Search/SearchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchResults](src/Shortcut/Models/SearchResults.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[SearchError](src/Shortcut/Errors/SearchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DocSearchResults&gt; SearchDocuments(SearchDocumentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Documents lets you search Documents based on desired parameters.
Supports structured filters: title, archived, created_by_me, followed_by_me.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Search.SearchDocuments(new SearchDocumentsRequest { Title = "some example string" });
    // TODO: Handle 'response' of type DocSearchResults
}
catch (ApiException<SearchDocumentsError> ex)
{
    if (ex.Error.TryGetMaxSearchResultsExceededError(out var error))
    {
        // TODO: Handle 'error' of type MaxSearchResultsExceededError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchDocumentsRequest](src/Shortcut/Requests/Search/SearchDocumentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DocSearchResults](src/Shortcut/Models/DocSearchResults.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[SearchDocumentsError](src/Shortcut/Errors/SearchDocumentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EpicSearchResults&gt; SearchEpics(SearchEpicsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Epics lets you search Epics based on desired parameters. Since ordering of stories can change over time (due to search ranking decay, new Epics being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Search.SearchEpics(new SearchEpicsRequest { Query = "some example string" });
    // TODO: Handle 'response' of type EpicSearchResults
}
catch (ApiException<SearchEpicsError> ex)
{
    if (ex.Error.TryGetMaxSearchResultsExceededError(out var error))
    {
        // TODO: Handle 'error' of type MaxSearchResultsExceededError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchEpicsRequest](src/Shortcut/Requests/Search/SearchEpicsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EpicSearchResults](src/Shortcut/Models/EpicSearchResults.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[SearchEpicsError](src/Shortcut/Errors/SearchEpicsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IterationSearchResults&gt; SearchIterations(SearchIterationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Iterations lets you search Iterations based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Iterations being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Search.SearchIterations(new SearchIterationsRequest { Query = "some example string" });
    // TODO: Handle 'response' of type IterationSearchResults
}
catch (ApiException<SearchIterationsError> ex)
{
    if (ex.Error.TryGetMaxSearchResultsExceededError(out var error))
    {
        // TODO: Handle 'error' of type MaxSearchResultsExceededError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchIterationsRequest](src/Shortcut/Requests/Search/SearchIterationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IterationSearchResults](src/Shortcut/Models/IterationSearchResults.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[SearchIterationsError](src/Shortcut/Errors/SearchIterationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ObjectiveSearchResults&gt; SearchMilestones(SearchMilestonesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Milestones lets you search Milestones based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Milestones being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Search.SearchMilestones(new SearchMilestonesRequest { Query = "some example string" });
    // TODO: Handle 'response' of type ObjectiveSearchResults
}
catch (ApiException<SearchMilestonesError> ex)
{
    if (ex.Error.TryGetMaxSearchResultsExceededError(out var error))
    {
        // TODO: Handle 'error' of type MaxSearchResultsExceededError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchMilestonesRequest](src/Shortcut/Requests/Search/SearchMilestonesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ObjectiveSearchResults](src/Shortcut/Models/ObjectiveSearchResults.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[SearchMilestonesError](src/Shortcut/Errors/SearchMilestonesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ObjectiveSearchResults&gt; SearchObjectives(SearchObjectivesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Objectives lets you search Objectives based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Objectives being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Search.SearchObjectives(new SearchObjectivesRequest { Query = "some example string" });
    // TODO: Handle 'response' of type ObjectiveSearchResults
}
catch (ApiException<SearchObjectivesError> ex)
{
    if (ex.Error.TryGetMaxSearchResultsExceededError(out var error))
    {
        // TODO: Handle 'error' of type MaxSearchResultsExceededError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchObjectivesRequest](src/Shortcut/Requests/Search/SearchObjectivesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ObjectiveSearchResults](src/Shortcut/Models/ObjectiveSearchResults.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[SearchObjectivesError](src/Shortcut/Errors/SearchObjectivesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StorySearchResults&gt; SearchStories(SearchStoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Stories lets you search Stories based on desired parameters. Since ordering of stories can change over time (due to search ranking decay, new stories being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Search.SearchStories(new SearchStoriesRequest { Query = "some example string" });
    // TODO: Handle 'response' of type StorySearchResults
}
catch (ApiException<SearchStoriesError> ex)
{
    if (ex.Error.TryGetMaxSearchResultsExceededError(out var error))
    {
        // TODO: Handle 'error' of type MaxSearchResultsExceededError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchStoriesRequest](src/Shortcut/Requests/Search/SearchStoriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StorySearchResults](src/Shortcut/Models/StorySearchResults.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[SearchStoriesError](src/Shortcut/Errors/SearchStoriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Stories

> Source: [Stories](src/Shortcut/Api/Stories.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;StorySlim&gt;&gt; CreateMultipleStories(CreateMultipleStoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Multiple Stories allows you to create multiple stories in a single request using the same syntax as Create Story.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Stories.CreateMultipleStories(new CreateMultipleStoriesRequest
    {
        Body = new CreateStories { Stories = [new CreateStoryParams { Name = "some example string" }] },
    });
    // TODO: Handle 'response' of type IReadOnlyList<StorySlim>
}
catch (ApiException<CreateMultipleStoriesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateMultipleStoriesRequest](src/Shortcut/Requests/Stories/CreateMultipleStoriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[StorySlim](src/Shortcut/Models/StorySlim.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[CreateMultipleStoriesError](src/Shortcut/Errors/CreateMultipleStoriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Story&gt; CreateStory(CreateStoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Story is used to add a new story to your Shortcut Workspace.
This endpoint requires that either **workflow_state_id** or **project_id** be provided, but will reject the request if both or neither are specified. The workflow_state_id has been marked as required and is the recommended field to specify because we are in the process of sunsetting Projects in Shortcut.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Stories.CreateStory(new CreateStoryRequest
    {
        Body = new CreateStoryParams { Name = "some example string" },
    });
    // TODO: Handle 'response' of type Story
}
catch (ApiException<CreateStoryError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateStoryRequest](src/Shortcut/Requests/Stories/CreateStoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Story](src/Shortcut/Models/Story.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[CreateStoryError](src/Shortcut/Errors/CreateStoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StoryComment&gt; CreateStoryComment(CreateStoryCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Comment allows you to create a Comment on any Story.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Stories.CreateStoryComment(new CreateStoryCommentRequest
    {
        StoryPublicId = 1L,
        Body = new CreateStoryComment { Text = "some example string" },
    });
    // TODO: Handle 'response' of type StoryComment
}
catch (ApiException<CreateStoryCommentError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateStoryCommentRequest](src/Shortcut/Requests/Stories/CreateStoryCommentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoryComment](src/Shortcut/Models/StoryComment.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[CreateStoryCommentError](src/Shortcut/Errors/CreateStoryCommentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Story&gt; CreateStoryFromTemplate(CreateStoryFromTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Story From Template is used to add a new story derived from a template to your Shortcut Workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Stories.CreateStoryFromTemplate(new CreateStoryFromTemplateRequest
    {
        Body = new CreateStoryFromTemplateParams
        {
            StoryTemplateId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        },
    });
    // TODO: Handle 'response' of type Story
}
catch (ApiException<CreateStoryFromTemplateError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateStoryFromTemplateRequest](src/Shortcut/Requests/Stories/CreateStoryFromTemplateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Story](src/Shortcut/Models/Story.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[CreateStoryFromTemplateError](src/Shortcut/Errors/CreateStoryFromTemplateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;StoryReaction&gt;&gt; CreateStoryReaction(CreateStoryReactionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a reaction to a story comment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Stories.CreateStoryReaction(new CreateStoryReactionRequest
    {
        StoryPublicId = 1L,
        CommentPublicId = 1L,
        Body = new CreateOrDeleteStoryReaction { Emoji = "some example string" },
    });
    // TODO: Handle 'response' of type IReadOnlyList<StoryReaction>
}
catch (ApiException<CreateStoryReactionError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateStoryReactionRequest](src/Shortcut/Requests/Stories/CreateStoryReactionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[StoryReaction](src/Shortcut/Models/StoryReaction.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[CreateStoryReactionError](src/Shortcut/Errors/CreateStoryReactionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TaskModel&gt; CreateTask(CreateTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Task is used to create a new task in a Story.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Stories.CreateTask(new CreateTaskRequest
    {
        StoryPublicId = 1L,
        Body = new CreateTask { Description = "some example string" },
    });
    // TODO: Handle 'response' of type TaskModel
}
catch (ApiException<CreateTaskError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateTaskRequest](src/Shortcut/Requests/Stories/CreateTaskRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TaskModel](src/Shortcut/Models/TaskModel.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[CreateTaskError](src/Shortcut/Errors/CreateTaskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteMultipleStories(DeleteMultipleStoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Multiple Stories allows you to delete multiple archived stories at once.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Stories.DeleteMultipleStories(new DeleteMultipleStoriesRequest
    {
        Body = new DeleteStories { StoryIds = [1L] },
    });
}
catch (ApiException<DeleteMultipleStoriesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteMultipleStoriesRequest](src/Shortcut/Requests/Stories/DeleteMultipleStoriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[DeleteMultipleStoriesError](src/Shortcut/Errors/DeleteMultipleStoriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteStory(DeleteStoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Story can be used to delete any Story.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Stories.DeleteStory(new DeleteStoryRequest { StoryPublicId = 1L });
}
catch (ApiException<DeleteStoryError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteStoryRequest](src/Shortcut/Requests/Stories/DeleteStoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[DeleteStoryError](src/Shortcut/Errors/DeleteStoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteStoryComment(DeleteStoryCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a Comment from any story.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Stories.DeleteStoryComment(new DeleteStoryCommentRequest { StoryPublicId = 1L, CommentPublicId = 1L });
}
catch (ApiException<DeleteStoryCommentError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteStoryCommentRequest](src/Shortcut/Requests/Stories/DeleteStoryCommentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[DeleteStoryCommentError](src/Shortcut/Errors/DeleteStoryCommentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteStoryReaction(DeleteStoryReactionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a reaction from any story comment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Stories.DeleteStoryReaction(new DeleteStoryReactionRequest
    {
        StoryPublicId = 1L,
        CommentPublicId = 1L,
        Body = new CreateOrDeleteStoryReaction { Emoji = "some example string" },
    });
}
catch (ApiException<DeleteStoryReactionError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteStoryReactionRequest](src/Shortcut/Requests/Stories/DeleteStoryReactionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[DeleteStoryReactionError](src/Shortcut/Errors/DeleteStoryReactionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteTask(DeleteTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Task can be used to delete any previously created Task on a Story.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Stories.DeleteTask(new DeleteTaskRequest { StoryPublicId = 1L, TaskPublicId = 1L });
}
catch (ApiException<DeleteTaskError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteTaskRequest](src/Shortcut/Requests/Stories/DeleteTaskRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[DeleteTaskError](src/Shortcut/Errors/DeleteTaskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Story&gt; GetStory(GetStoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Story returns information about a chosen Story.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Stories.GetStory(new GetStoryRequest { StoryPublicId = 1L });
    // TODO: Handle 'response' of type Story
}
catch (ApiException<GetStoryError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetStoryRequest](src/Shortcut/Requests/Stories/GetStoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Story](src/Shortcut/Models/Story.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[GetStoryError](src/Shortcut/Errors/GetStoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StoryComment&gt; GetStoryComment(GetStoryCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Comment is used to get Comment information.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Stories.GetStoryComment(new GetStoryCommentRequest
    {
        StoryPublicId = 1L,
        CommentPublicId = 1L,
    });
    // TODO: Handle 'response' of type StoryComment
}
catch (ApiException<GetStoryCommentError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetStoryCommentRequest](src/Shortcut/Requests/Stories/GetStoryCommentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoryComment](src/Shortcut/Models/StoryComment.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[GetStoryCommentError](src/Shortcut/Errors/GetStoryCommentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TaskModel&gt; GetTask(GetTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about a chosen Task.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Stories.GetTask(new GetTaskRequest { StoryPublicId = 1L, TaskPublicId = 1L });
    // TODO: Handle 'response' of type TaskModel
}
catch (ApiException<GetTaskError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetTaskRequest](src/Shortcut/Requests/Stories/GetTaskRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TaskModel](src/Shortcut/Models/TaskModel.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[GetTaskError](src/Shortcut/Errors/GetTaskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;StoryComment&gt;&gt; ListStoryComment(ListStoryCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists Comments associated with a Story

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Stories.ListStoryComment(new ListStoryCommentRequest { StoryPublicId = 1L });
    // TODO: Handle 'response' of type IReadOnlyList<StoryComment>
}
catch (ApiException<ListStoryCommentError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListStoryCommentRequest](src/Shortcut/Requests/Stories/ListStoryCommentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[StoryComment](src/Shortcut/Models/StoryComment.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[ListStoryCommentError](src/Shortcut/Errors/ListStoryCommentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;StorySlim&gt;&gt; ListStorySubTasks(ListStorySubTasksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Story Sub tasks returns a list of all Sub-task Stories for a given parent Story.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Stories.ListStorySubTasks(new ListStorySubTasksRequest { StoryPublicId = 1L });
    // TODO: Handle 'response' of type IReadOnlyList<StorySlim>
}
catch (ApiException<ListStorySubTasksError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListStorySubTasksRequest](src/Shortcut/Requests/Stories/ListStorySubTasksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[StorySlim](src/Shortcut/Models/StorySlim.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[ListStorySubTasksError](src/Shortcut/Errors/ListStorySubTasksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;StorySlim&gt;&gt; QueryStories(QueryStoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Stories lets you search Stories based on desired parameters.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Stories.QueryStories(new QueryStoriesRequest { Body = new SearchStories() });
    // TODO: Handle 'response' of type IReadOnlyList<StorySlim>
}
catch (ApiException<QueryStoriesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[QueryStoriesRequest](src/Shortcut/Requests/Stories/QueryStoriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[StorySlim](src/Shortcut/Models/StorySlim.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[QueryStoriesError](src/Shortcut/Errors/QueryStoriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;History&gt;&gt; StoryHistory(StoryHistoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Stories.StoryHistory(new StoryHistoryRequest { StoryPublicId = 1L });
    // TODO: Handle 'response' of type IReadOnlyList<History>
}
catch (ApiException<StoryHistoryError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StoryHistoryRequest](src/Shortcut/Requests/Stories/StoryHistoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[History](src/Shortcut/Models/History.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[StoryHistoryError](src/Shortcut/Errors/StoryHistoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StoryComment&gt; UnlinkCommentThreadFromSlack(UnlinkCommentThreadFromSlackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Unlinks a Comment from its linked Slack thread (Comment replies and Slack replies will no longer be synced)

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Stories.UnlinkCommentThreadFromSlack(new UnlinkCommentThreadFromSlackRequest
    {
        StoryPublicId = 1L,
        CommentPublicId = 1L,
    });
    // TODO: Handle 'response' of type StoryComment
}
catch (ApiException<UnlinkCommentThreadFromSlackError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UnlinkCommentThreadFromSlackRequest](src/Shortcut/Requests/Stories/UnlinkCommentThreadFromSlackRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoryComment](src/Shortcut/Models/StoryComment.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[UnlinkCommentThreadFromSlackError](src/Shortcut/Errors/UnlinkCommentThreadFromSlackError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;StorySlim&gt;&gt; UpdateMultipleStories(UpdateMultipleStoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Multiple Stories allows you to make changes to numerous stories at once.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Stories.UpdateMultipleStories(new UpdateMultipleStoriesRequest
    {
        Body = new UpdateStories { StoryIds = [1L] },
    });
    // TODO: Handle 'response' of type IReadOnlyList<StorySlim>
}
catch (ApiException<UpdateMultipleStoriesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateMultipleStoriesRequest](src/Shortcut/Requests/Stories/UpdateMultipleStoriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[StorySlim](src/Shortcut/Models/StorySlim.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[UpdateMultipleStoriesError](src/Shortcut/Errors/UpdateMultipleStoriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Story&gt; UpdateStory(UpdateStoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Story can be used to update Story properties.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Stories.UpdateStory(new UpdateStoryRequest
    {
        StoryPublicId = 1L,
        Body = new UpdateStory(),
    });
    // TODO: Handle 'response' of type Story
}
catch (ApiException<UpdateStoryError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateStoryRequest](src/Shortcut/Requests/Stories/UpdateStoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Story](src/Shortcut/Models/Story.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[UpdateStoryError](src/Shortcut/Errors/UpdateStoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StoryComment&gt; UpdateStoryComment(UpdateStoryCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Comment replaces the text of the existing Comment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Stories.UpdateStoryComment(new UpdateStoryCommentRequest
    {
        StoryPublicId = 1L,
        CommentPublicId = 1L,
        Body = new UpdateStoryComment { Text = "some example string" },
    });
    // TODO: Handle 'response' of type StoryComment
}
catch (ApiException<UpdateStoryCommentError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateStoryCommentRequest](src/Shortcut/Requests/Stories/UpdateStoryCommentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoryComment](src/Shortcut/Models/StoryComment.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[UpdateStoryCommentError](src/Shortcut/Errors/UpdateStoryCommentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TaskModel&gt; UpdateTask(UpdateTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Task can be used to update Task properties.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Stories.UpdateTask(new UpdateTaskRequest
    {
        StoryPublicId = 1L,
        TaskPublicId = 1L,
        Body = new UpdateTask(),
    });
    // TODO: Handle 'response' of type TaskModel
}
catch (ApiException<UpdateTaskError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateTaskRequest](src/Shortcut/Requests/Stories/UpdateTaskRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TaskModel](src/Shortcut/Models/TaskModel.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[UpdateTaskError](src/Shortcut/Errors/UpdateTaskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## StoryLinks

> Source: [StoryLinks](src/Shortcut/Api/StoryLinks.cs)

<details>
<summary><code>Task&lt;StoryLink&gt; CreateStoryLink(CreateStoryLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Story Links (called Story Relationships in the UI) allow you create semantic relationships between two stories. The parameters read like an active voice grammatical sentence: subject -> verb -> object.

The subject story acts on the object Story; the object story is the direct object of the sentence.

The subject story "blocks", "duplicates", or "relates to" the object story. Examples:
- "story 5 blocks story 6” -- story 6 is now "blocked" until story 5 is moved to a Done workflow state.
- "story 2 duplicates story 1” -- Story 2 represents the same body of work as Story 1 (and should probably be archived).
- "story 7 relates to story 3”

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.StoryLinks.CreateStoryLink(new CreateStoryLinkRequest
    {
        Body = new CreateStoryLink { Verb = VerbShortcutStoryLinksApi.Blocks, SubjectId = 1L, ObjectId = 1L },
    });
    // TODO: Handle 'response' of type StoryLink
}
catch (ApiException<CreateStoryLinkError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateStoryLinkRequest](src/Shortcut/Requests/StoryLinks/CreateStoryLinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoryLink](src/Shortcut/Models/StoryLink.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[CreateStoryLinkError](src/Shortcut/Errors/CreateStoryLinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteStoryLink(DeleteStoryLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the relationship between the stories for the given Story Link.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.StoryLinks.DeleteStoryLink(new DeleteStoryLinkRequest { StoryLinkPublicId = 1L });
}
catch (ApiException<DeleteStoryLinkError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteStoryLinkRequest](src/Shortcut/Requests/StoryLinks/DeleteStoryLinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[DeleteStoryLinkError](src/Shortcut/Errors/DeleteStoryLinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StoryLink&gt; GetStoryLink(GetStoryLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the stories and their relationship for the given Story Link.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.StoryLinks.GetStoryLink(new GetStoryLinkRequest { StoryLinkPublicId = 1L });
    // TODO: Handle 'response' of type StoryLink
}
catch (ApiException<GetStoryLinkError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetStoryLinkRequest](src/Shortcut/Requests/StoryLinks/GetStoryLinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoryLink](src/Shortcut/Models/StoryLink.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[GetStoryLinkError](src/Shortcut/Errors/GetStoryLinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StoryLink&gt; UpdateStoryLink(UpdateStoryLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the stories and/or the relationship for the given Story Link.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.StoryLinks.UpdateStoryLink(new UpdateStoryLinkRequest
    {
        StoryLinkPublicId = 1L,
        Body = new UpdateStoryLink(),
    });
    // TODO: Handle 'response' of type StoryLink
}
catch (ApiException<UpdateStoryLinkError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateStoryLinkRequest](src/Shortcut/Requests/StoryLinks/UpdateStoryLinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoryLink](src/Shortcut/Models/StoryLink.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[UpdateStoryLinkError](src/Shortcut/Errors/UpdateStoryLinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Workflows

> Source: [Workflows](src/Shortcut/Api/Workflows.cs)

<details>
<summary><code>Task&lt;Workflow&gt; GetWorkflow(GetWorkflowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Workflow returns information about a chosen Workflow.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Workflows.GetWorkflow(new GetWorkflowRequest { WorkflowPublicId = 1L });
    // TODO: Handle 'response' of type Workflow
}
catch (ApiException<GetWorkflowError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetWorkflowRequest](src/Shortcut/Requests/Workflows/GetWorkflowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Workflow](src/Shortcut/Models/Workflow.cs)</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[GetWorkflowError](src/Shortcut/Errors/GetWorkflowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Workflow&gt;&gt; ListWorkflows(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all Workflows in the Workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Workflows.ListWorkflows();
    // TODO: Handle 'response' of type IReadOnlyList<Workflow>
}
catch (ApiException<ListWorkflowsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Workflow](src/Shortcut/Models/Workflow.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Shortcut/Core/Exceptions/ApiException.cs)&lt;[ListWorkflowsError](src/Shortcut/Errors/ListWorkflowsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

